const chai = require('chai')
const expect = chai.expect;

describe('大整数加法库的测试', () => {
  const add = require('../src/index.js');
  it('1 加 1 应该等于 2', () => {
    expect(add('1', '1')).to.be.equal('2');
  })

  it('1 加 0 应该等于 1', () => {
    expect(add('1', '0')).to.be.equal('1');
  })

  it('1 加 9999999999999999 应该等于 10000000000000000', () => {
    expect(add('1', '9999999999999999')).to.be.equal('10000000000000000');
  })
})