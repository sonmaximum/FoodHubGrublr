import { moduleForModel, test } from 'ember-qunit'

moduleForModel('cart', 'Unit | Model | cart', {
  // Specify the other units that are required for this test.
  needs: ['model:user', 'model:order-item']
})

test('it exists', function (assert) {
  const model = this.subject()
  // let store = this.store();
  assert.ok(!!model)
})
