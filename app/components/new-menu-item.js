import Component from '@ember/component'

export default Component.extend({

  didInsertElement () {
    this.set('newMenuItem', {
    })
  },

  actions: {
    createMenuItem () {
      this.set('newMenuItem.menuSection', this.get('menuSection'))
      this.sendAction('createMenuItem', this.get('newMenuItem'))
      this.set('newMenuItem', {})
    }
  }
})
