import DS from 'ember-data'

export default DS.Model.extend({
  quantity: DS.attr('number'),
  cart: DS.belongsTo('cart'),
  menuItem: DS.belongsTo('menu-item'),
  editable: DS.attr('boolean')
})
