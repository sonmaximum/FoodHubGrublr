import Controller from '@ember/controller'
import ENV from 'FoodHubGrublr/config/environment'

export default Controller.extend({
    // ...
  ajax: Ember.inject.service(),
  actions: {
    logenv () { console.log(ENV.stripe) },
    processStripeToken (amount, cart, {card, email, id}) {
      this.get('flashMessages')
        .warning('Processing payment...')
      return this.get('ajax').request(`${ENV.apiHost}/charges`, {
        method: 'POST',
        data: {amount, card, email, id}
      })
      .then(() => cart.destroyRecord())
      .then(() => this.get('store').createRecord('cart').save())
      .then(() => this.get('store').unloadAll('orderItem'))
      .then(() => this.get('store').findAll('orderItem'))
      .then(() => this.get('store').findAll('cart'))
      .then(() => this.transitionToRoute('restaurants'))
      .then(() => {
        this.get('flashMessages')
        .success('Thank you for your payment! Your order has been placed successfully!')
      })
      .catch(() => {
        this.get('flashMessages')
        .danger('There was a problem processing your payment.')
      })
    }
  }
})
