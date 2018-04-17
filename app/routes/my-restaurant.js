import { alias } from '@ember/object/computed'
import { inject as service } from '@ember/service'
import RSVP from 'rsvp'

import Route from '@ember/routing/route'

export default Route.extend({
  auth: service(),
  user: alias('auth.credentials.email'),
  isAuthenticated: alias('auth.isAuthenticated'),
  model () {
    let user
    if (this.get('auth.isAuthenticated')) {
      user = this.get('store').findRecord('user', this.get('auth.credentials.id'))
    }
    this.get('store').findAll('restaurant')
    this.get('store').findAll('menu')
    this.get('store').findAll('menuSection')
    this.get('store').findAll('menuItem')
    return RSVP.hash({
      authenticated: this.get('auth.isAuthenticated'),
      user: user
    })
  },
  actions: {
    registerRestaurant (restaurant) {
      this.get('store').createRecord('restaurant', restaurant).save()
        .then((restaurant) => this.get('store').createRecord('menu', {restaurant_id: restaurant.id}).save())
    },
    createMenuSection (menuSection) {
      this.get('store').createRecord('menuSection', menuSection).save()
    },
    createMenuItem (menuItem) {
      this.get('store').createRecord('menuItem', menuItem).save()
    },
    deleteMenuItem (menuItem) {
      menuItem.destroyRecord()
    },
    deleteSection (menuSection) {
      menuSection.destroyRecord()
    },
    deleteRestaurant (pO) {
      pO.then((result) => result.destroyRecord())
    }
  }
})
