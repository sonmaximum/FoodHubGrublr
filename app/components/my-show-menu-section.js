import Component from '@ember/component'

export default Component.extend({
  actions: {
    createMenuItem (menuItem) {
      this.sendAction('createMenuItem', menuItem)
    },
    deleteMenuItem (menuItem) {
      this.sendAction('deleteMenuItem', menuItem)
    },
    deleteSection () {
      this.sendAction('deleteSection', this.get('menuSection'))
    }
  }
})
