import Route from '@ember/routing/route'

export default Route.extend({
  model (params) {
    this.get('store').findAll('restaurant')
    this.get('store').findAll('menu')
    this.get('store').findAll('menuSection')
    this.get('store').findAll('menuItem')
    this.get('store').findAll('restaurantCuisine')
    this.get('store').findAll('cuisine')
    return this.get('store').findRecord('orderItem', params.order_item_id)
  },
  actions: {
    updateOrder (orderObj) {
      orderObj.save()
        .then(() => this.transitionTo('cart'))
        .then(() => {
          this.get('flashMessages')
          .success('Cart updated successfully!')
        })
    }
  }
})
