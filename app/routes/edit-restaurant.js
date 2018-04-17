import Route from '@ember/routing/route'

export default Route.extend({
  actions: {
    saveRestaurant (model) {
      model.save()
        .then(() => this.transitionTo('my-restaurant'))
    }
  }
})
