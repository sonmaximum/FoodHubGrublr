import DS from 'ember-data'

export default DS.Model.extend({
  name: DS.attr('string'),
  address: DS.attr('string'),
  phone: DS.attr('integer'),
  description: DS.attr('string'),
  user: DS.belongsTo('user')
})
