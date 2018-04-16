import Route from '@ember/routing/route'

export default Route.extend({
  model (params) {
    this.get('store').findAll('menu')
    this.get('store').findAll('menuSection')
    this.get('store').findAll('menuItem')
    this.get('store').findAll('restaurantCuisine')
    this.get('store').findAll('cuisine')
    return this.get('store').findRecord('restaurant', params.restaurant_id)
  }
})
