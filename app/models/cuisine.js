import DS from 'ember-data'

export default DS.Model.extend({
  cuisineType: DS.attr('string'),
  restaurantCuisines: DS.hasMany('restaurant-cuisine')
})
