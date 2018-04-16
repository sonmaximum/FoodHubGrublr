import Component from '@ember/component'

export default Component.extend({
  actions: {
    createMenuItem (menuItem) {
      console.log('blah2')
      console.log(menuItem)
      console.log(this.get('menuSection'))
      this.set('menuItem.menuSection', this.get('menuSection'))
      console.log(this.get('menuItem.menuSection'))
      console.log('bloo')
      this.sendAction('createMenuItem', menuItem)
    }
  }
})
