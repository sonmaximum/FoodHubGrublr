import { moduleFor, test } from 'ember-qunit'

moduleFor('route:my-restaurant', 'Unit | Route | my restaurant', {
  // Specify the other units that are required for this test.
  // needs: ['controller:foo']
})

test('it exists', function (assert) {
  const route = this.subject()
  assert.ok(route)
})
