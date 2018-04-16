import DS from 'ember-data'

export default DS.Model.extend({
  description: DS.attr('string'),
  price: DS.attr('number'),
  image: DS.attr('string'),
  menuSection: DS.belongsTo('menu-section'),
  orderItems: DS.hasMany('order-item'),
  name: DS.attr('string'),
  editable: DS.attr('boolean')
})
