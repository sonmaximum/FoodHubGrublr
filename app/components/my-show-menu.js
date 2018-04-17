import Component from '@ember/component'

export default Component.extend({
  actions: {
    createMenuSection (menuSection) {
      this.sendAction('createMenuSection', menuSection)
    },
    createMenuItem (menuItem) {
      this.sendAction('createMenuItem', menuItem)
    },
    deleteMenuItem (menuItem) {
      this.sendAction('deleteMenuItem', menuItem)
    },
    deleteSection (menuSection) {
      this.sendAction('deleteSection', menuSection)
    }
  }
})
