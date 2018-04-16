import { moduleForModel, test } from 'ember-qunit'

moduleForModel('order-item', 'Unit | Model | order item', {
  // Specify the other units that are required for this test.
  needs: ['model:cart', 'model:menu-item']
})

test('it exists', function (assert) {
  const model = this.subject()
  // let store = this.store();
  assert.ok(!!model)
})
