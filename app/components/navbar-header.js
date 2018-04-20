import Component from '@ember/component'

export default Component.extend({
  tagName: 'div',
  classNames: ['navbar-header'],
  actions: {
    rollback () {
      console.log(this.get('store').reload())
    }
  }
})
