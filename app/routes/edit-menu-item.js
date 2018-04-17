import Route from '@ember/routing/route'

export default Route.extend({
  actions: {
    saveItem (model) {
      model.save()
        .then(() => this.transitionTo('my-restaurant'))
    }
  }
})
