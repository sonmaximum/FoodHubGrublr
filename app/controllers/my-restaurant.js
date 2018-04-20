import Controller from '@ember/controller'

export default Controller.extend({
  actions: {
    rollback (model) {
      model.rollbackAttributes()
    }
  }
})
