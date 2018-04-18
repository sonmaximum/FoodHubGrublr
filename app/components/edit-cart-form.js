import { alias } from '@ember/object/computed'
import Component from '@ember/component'
import { inject as service } from '@ember/service'

export default Component.extend({

  auth: service(),
  isAuthenticated: alias('auth.isAuthenticated'),

  actions: {
    updateOrder (model) {
      this.sendAction('updateOrder', model)
    }
  }
})
