import DS from 'ember-data'

export default DS.Model.extend({
  restaurant: DS.belongsTo('restauratnt'),
  cuisine: DS.belongsTo('cuisine')
})
