import Component from '@ember/component'

export default Component.extend({
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
