import { moduleForModel, test } from 'ember-qunit'

moduleForModel('menu-section', 'Unit | Model | menu section', {
  // Specify the other units that are required for this test.
  needs: ['model:menu', 'model:menu-item']
})

test('it exists', function (assert) {
  const model = this.subject()
  // let store = this.store();
  assert.ok(!!model)
})
