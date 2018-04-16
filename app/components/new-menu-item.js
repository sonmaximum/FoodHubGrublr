import Component from '@ember/component'

export default Component.extend({

  didInsertElement () {
    this.set('newMenuItem', {
    })
  },

  actions: {
    createMenuItem () {
      console.log(this.get('newMenuItem'))
      console.log(this.get('menuSection'))
      this.sendAction('createMenuItem', this.get('newMenuItem'))
      this.set('newMenuItem', {})
    }
  }
})
