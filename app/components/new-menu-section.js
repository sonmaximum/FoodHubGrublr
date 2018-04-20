import Component from '@ember/component'

export default Component.extend({

  newMenuSection: {
  },

  actions: {
    createMenuSection () {
      this.sendAction('createMenuSection', this.get('newMenuSection'))
      this.set('newMenuSection.heading', '')
    }
  }
})
