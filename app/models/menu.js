import DS from 'ember-data'

export default DS.Model.extend({
  restaurant: DS.belongsTo('restaurant'),
  menuSections: DS.hasMany('menu-section')
})
