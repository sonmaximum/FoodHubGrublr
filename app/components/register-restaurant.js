import Component from '@ember/component'

export default Component.extend({

  newRestaurantObj: {
  },

  actions: {
    newRestaurant () {
      this.sendAction('createRestaurant', this.get('newRestaurantObj'))
      this.set('newRestaurantObj', {})
    }
  }
})
