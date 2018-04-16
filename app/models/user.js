import DS from 'ember-data'

export default DS.Model.extend({
  email: DS.attr('string'),
  restaurant: DS.belongsTo('restaurant'),
  examples: DS.hasMany('example')
})
