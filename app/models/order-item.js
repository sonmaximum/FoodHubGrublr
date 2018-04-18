import DS from 'ember-data'

export default DS.Model.extend({
  quantity: DS.attr('number'),
  cart: DS.belongsTo('cart'),
  menuItem: DS.belongsTo('menu-item'),
  user: DS.belongsTo('user'),
  comment: DS.attr('string'),
  editable: DS.attr('boolean'),
  total: Ember.computed('quantity', 'menuItem.price', function () {
    return this.get('menuItem.price') * this.get('quantity')
  })
})
