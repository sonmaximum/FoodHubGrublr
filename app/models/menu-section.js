import DS from 'ember-data'

export default DS.Model.extend({
  heading: DS.attr('string'),
  menu: DS.belongsTo('menu'),
  menuItems: DS.hasMany('menu-item')
})
