import { moduleForModel, test } from 'ember-qunit'

moduleForModel('restaurant', 'Unit | Model | restaurant', {
  // Specify the other units that are required for this test.
  needs: ['model:user']
})

test('it exists', function (assert) {
  const model = this.subject()
  // let store = this.store();
  assert.ok(!!model)
})
