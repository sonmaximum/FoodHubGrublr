import { moduleForModel, test } from 'ember-qunit'

moduleForModel('restaurant-cuisine', 'Unit | Model | restaurant cuisine', {
  // Specify the other units that are required for this test.
  needs: ['model:restauratnt', 'model:cuisine']
})

test('it exists', function (assert) {
  const model = this.subject()
  // let store = this.store();
  assert.ok(!!model)
})
