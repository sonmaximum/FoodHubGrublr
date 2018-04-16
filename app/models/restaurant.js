import DS from 'ember-data'

export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  phoneNumber: DS.attr('string'),
  description: DS.attr('string'),
  user: DS.belongsTo('user'),
  menu: DS.belongsTo('menu'),
  editable: DS.attr('boolean'),
  restaurantCuisines: DS.hasMany('restaurantCuisine')
})
