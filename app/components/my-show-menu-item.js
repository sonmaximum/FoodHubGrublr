import Component from '@ember/component'

export default Component.extend({
  actions: {
    delete () {
      console.log('pressed')
      this.sendAction('delete', this.get('item'))
    }
  }
})
