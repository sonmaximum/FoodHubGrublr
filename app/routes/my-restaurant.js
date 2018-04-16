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
  }
})
