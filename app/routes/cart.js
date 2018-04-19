import { alias } from '@ember/object/computed'
import { inject as service } from '@ember/service'
import RSVP from 'rsvp'

import Route from '@ember/routing/route'

export default Route.extend({
  auth: service(),
  isAuthenticated: alias('auth.isAuthenticated'),

  model () {
    return RSVP.hash({
      oI: this.get('store').findAll('orderItem'),
      cart: this.get('store').findAll('cart')
    })
  },
  actions: {
    emptyCart (cart) {
      cart.destroyRecord()
      .then(() => this.get('store').createRecord('cart').save())
      .then(() => this.get('store').unloadAll('orderItem'))
      .then(() => this.get('store').findAll('orderItem'))
      .then(() => this.get('store').findAll('cart'))
      .then(() => this.refresh)
    },
    editCart (oI) {
      this.transitionTo('edit-cart', oI)
    },
    removeItem (oI) {
      oI.destroyRecord()
    }
  }
})
