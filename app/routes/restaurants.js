import Route from '@ember/routing/route'

export default Route.extend({
  model () {
    this.get('store').findAll('menu')
    this.get('store').findAll('menuSection')
    this.get('store').findAll('menuItem')
    this.get('store').findAll('restaurantCuisine')
    this.get('store').findAll('cuisine')
    return this.get('store').findAll('restaurant')
  }
})
