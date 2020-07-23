module.exports = {
  "parser": "babel-eslint",
  "extends": "airbnb-base",
  "env": {
    "browser": true,
    "node": true
  },
  "rules": {
    // 允许 for 循环使用 ‘++’ ‘--’
    "no-plusplus": ["error", { "allowForLoopAfterthoughts": true }]
  }
}