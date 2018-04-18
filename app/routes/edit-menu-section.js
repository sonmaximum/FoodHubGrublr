import Route from '@ember/routing/route'

export default Route.extend({
  actions: {
    saveSection (model) {
      model.save()
        .then(() => this.transitionTo('my-restaurant'))
        .then(() => {
          this.get('flashMessages')
          .success('Section heading updated successfully!')
        })
    }
  }
})
