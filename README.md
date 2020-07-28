[![Build Status](https://travis-ci.com/KevinZyz/lib-large-number.svg?branch=master)](https://travis-ci.com/KevinZyz/lib-large-number)
[![Coverage Status](https://coveralls.io/repos/github/KevinZyz/lib-large-number/badge.svg?branch=master)](https://coveralls.io/github/KevinZyz/lib-large-number?branch=master)

[![NPM](https://nodei.co/npm/lib-large-number.png?downloads=true)](https://www.npmjs.com/package/lib-large-number)

This library is to solve the problem of loss of precision of the Number type due to the limitation of digits.

### Install
``` sh
npm i lib-large-number -S
```

``` javascript
import add from 'lib-large-number'
const result = add('99', '2'); 
console.log('result:', result); // 101
```