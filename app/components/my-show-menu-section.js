import Component from '@ember/component'

export default Component.extend({
  actions: {
    createMenuItem (menuItem) {
      this.sendAction('createMenuItem', menuItem)
    },
    deleteMenuItem (menuItem) {
      this.sendAction('deleteMenuItem', menuItem)
    },
    deleteSection (section) {
      this.sendAction('deleteSection', section)
    },
    editSingleItem (menuItem) {
      this.sendAction('editSingleItem', menuItem)
    },
    editSection (section) {
      this.sendAction('editSection', section)
    }
  }
})
