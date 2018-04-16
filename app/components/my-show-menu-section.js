import Component from '@ember/component'

export default Component.extend({
  actions: {
    createMenuItem (menuItem) {
      this.sendAction('createMenuItem', menuItem)
    }
  }
})
