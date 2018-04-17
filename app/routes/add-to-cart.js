import Route from '@ember/routing/route'

export default Route.extend({
  model (params) {
    this.get('store').findAll('restaurant')
    this.get('store').findAll('menu')
    this.get('store').findAll('menuSection')
    this.get('store').findAll('menuItem')
    this.get('store').findAll('restaurantCuisine')
    this.get('store').findAll('cuisine')
    return this.get('store').findRecord('menuItem', params.menu_item_id)
  },
  actions: {
    createOrder (orderObj) {
      console.log(orderObj)
      this.get('store').createRecord('orderItem', orderObj).save()
        .then(() => this.transitionTo('restaurant', orderObj.rid))
    }
  }
})
