import { moduleForComponent, test } from 'ember-qunit'
import hbs from 'htmlbars-inline-precompile'

moduleForComponent('register-restaurant', 'Integration | Component | register restaurant', {
  integration: true
})

test('it renders', function (assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{register-restaurant}}`)

  assert.equal(this.$().text().trim(), '')

  // Template block usage:
  this.render(hbs`
    {{#register-restaurant}}
      template block text
    {{/register-restaurant}}
  `)

  assert.equal(this.$().text().trim(), 'template block text')
})
