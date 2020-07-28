/**
 * 因为 JS 的 Number 类型存在位数限制，超过限制时，会存在「精度丢失」的问题
 * 同理，当我们需要处理两个「超大整数」相加时，直接套用加法运算会存在以下问题
 * 当结果大于 Math.pow(2,53) 时，会出现精度丢失，导致最终结果存在偏差
 * 当结果大于 Math.pow(1.8, 308) 时，会直接返回 infinity
 * 为了解决上述问题，下面的方法通过字符串拼接的方式，得到一个准确的数字
 * @param {string} a 数字型字符串
 * @param {string} b 数字型字符串
 * @returns {string}
 */
function add(a, b) {
  let i = a.length - 1;
  let j = b.length - 1;

  /** 进位标识符 */
  let carry = 0;
  let ret = '';

  while (i >= 0 || j >= 0) {
    let x = 0;
    let y = 0;
    let sum;

    if (i >= 0) {
      // 转换为数字
      x = a[i] - '0';
      i -= 1;
    }

    if (j >= 0) {
      // 转换为数字
      y = b[j] - '0';
      j -= 1;
    }

    sum = x + y + carry;

    if (sum >= 10) {
      carry = 1;
      sum -= 10;
    } else {
      carry = 0;
    }
    // 结果用字符串拼接的方式
    ret = sum + ret;
  }

  if (carry) {
    ret = carry + ret;
  }

  return ret;
}

module.exports = add;
