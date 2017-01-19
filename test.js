const test = require('tape')
const listChanges = require('./index.js')
test('basic usage', t => {
  let before = {a: {b: 10},d: true}
  let after = {a: {b: 20}, c: 20}

  let changes = listChanges(before, after)
  t.ok(Array.isArray(changes), 'changes should be an arra')
  t.deepEqual(changes.sort(), ['a.b', 'c', 'd'], 'changes were as expected')

  t.end()
})
