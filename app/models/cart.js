import DS from 'ember-data'

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  orderItems: DS.hasMany('order-item'),
  editable: DS.attr('boolean')
})
