import DS from 'ember-data'

export default DS.Model.extend({
  restaurant: DS.belongsTo('restaurant'),
  cuisine: DS.belongsTo('cuisine'),
  editable: DS.attr('boolean')
})
