import Component from '@ember/component'

export default Component.extend({

  newRestaurantObj: {
  },

  actions: {
    newRestaurant () {
      console.log(this.get('newRestaurantObj'))
      this.sendAction('createRestaurant', this.get('newRestaurantObj'))
      this.set('newRestaurantObj', {})
    }
  }
})
