import ApplicationAdapter from './application'

export default ApplicationAdapter.extend({
  deleteRecord (store, type, snapshot) {
    const id = snapshot.id
    const data = {}
    const serializer = store.serializerFor(type.modelName)

    serializer.serializeIntoHash(data, type, snapshot)

    return this.ajax(this.buildURL(type.modelName, id, snapshot, 'deleteRecord'), 'DELETE', {
      data
    })
  }
})
