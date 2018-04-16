import { moduleForModel, test } from 'ember-qunit'

moduleForModel('cuisine', 'Unit | Model | cuisine', {
  // Specify the other units that are required for this test.
  needs: ['model:restaurant-cuisine']
})

test('it exists', function (assert) {
  const model = this.subject()
  // let store = this.store();
  assert.ok(!!model)
})
