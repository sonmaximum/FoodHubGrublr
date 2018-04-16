import Component from '@ember/component'

export default Component.extend({

  newMenuSection: {
  },

  actions: {
    createMenuSection () {
      console.log(this.get('newMenuSection'))
      this.sendAction('createMenuSection', this.get('newMenuSection'))
      this.set('newMenuSection.heading', '')
    }
  }
})
