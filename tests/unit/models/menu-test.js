import { moduleForModel, test } from 'ember-qunit'

moduleForModel('menu', 'Unit | Model | menu', {
  // Specify the other units that are required for this test.
  needs: ['model:restaurant', 'model:menu-section']
})

test('it exists', function (assert) {
  const model = this.subject()
  // let store = this.store();
  assert.ok(!!model)
})
