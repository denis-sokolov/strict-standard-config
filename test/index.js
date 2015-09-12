
var eslint = require('eslint')
var test = require('tape')

var config = require('..')

test('validate rules syntax with eslint', function (t) {
  var engine = new eslint.CLIEngine({
    useEslintrc: false,
    config: config
  })

  t.ok(config.rules && config.rules.strict)
  t.equal(engine.executeOnText('var foo = function () {}\nvar bar\nfoo(bar)').errorCount, 0)
  t.end()
})
