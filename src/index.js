var config = require('eslint-config-standard')

config.ecmaFeatures.modules = false

var rules = {
  'block-scoped-var': 2,
  'complexity': 1,
  'default-case': 2,
  'dot-notation': 2,
  'func-style': [1, 'expression'],
  'guard-for-in': 2,
  'linebreak-style': [1, 'unix'],
  'no-alert': 2,
  'no-catch-shadow': 2,
  'no-console': 2,
  'no-constant-condition': 2,
  'no-continue': 1,
  'no-div-regex': 2,
  'no-else-return': 2,
  'no-empty': 2,
  'no-eq-null': 2,
  'no-extra-semi': 2,
  'no-implicit-coercion': 1,
  'no-inline-comments': 2,
  'no-loop-func': 2,
  'no-mixed-requires': 2,
  'no-nested-ternary': 1,
  'no-process-env': 1,
  'no-process-exit': 2,
  'no-script-url': 2,
  'no-shadow': 2,
  'no-undefined': 2,
  'no-unused-expressions': 2,
  'no-use-before-define': 2,
  'no-void': 2,
  'no-warning-comments': 2,
  'quote-props': [2, 'as-needed'],
  'require-yield': 2,
  'strict': [2, 'global']
}

Object.keys(rules).forEach(function (rule) {
  config.rules[rule] = rules[rule]
})

module.exports = config
