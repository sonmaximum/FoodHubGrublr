import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('show-menu-section', 'Integration | Component | show menu section', {
  integration: true
})

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{show-menu-section}}`)

  assert.equal(this.$().text().trim(), '')

  // Template block usage:
  this.render(hbs`
    {{#show-menu-section}}
      template block text
    {{/show-menu-section}}
  `)

  assert.equal(this.$().text().trim(), 'template block text')
})
