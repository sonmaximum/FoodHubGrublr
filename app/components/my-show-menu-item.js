import Component from '@ember/component'

export default Component.extend({
  actions: {
    delete () {
      this.sendAction('deleteItem', this.get('item'))
    }
  }
})
