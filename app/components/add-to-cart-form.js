import { alias } from '@ember/object/computed'
import Component from '@ember/component'
import { inject as service } from '@ember/service'

export default Component.extend({

  auth: service(),
  isAuthenticated: alias('auth.isAuthenticated'),
  didInsertElement () {
    this.set('newOrderObj', {
    })
  },
  actions: {
    createOrder (model, rid) {
      this.set('newOrderObj.menuItem', model)
      this.set('newOrderObj.rid', rid)
      this.sendAction('createOrder', this.get('newOrderObj'))
      this.set('newOrderObj', {})
    }
  }
})
