import DS from 'ember-data'

export default DS.Model.extend({
  user: DS.belongsTo('user'),
  orderItems: DS.hasMany('order-item'),
  editable: DS.attr('boolean'),
  grandTotal: Ember.computed('orderItems.@each.total', function () {
    const orderItems = this.get('orderItems')
    let total = 0
    orderItems.forEach((item) => {
      total += item.get('total')
    })
    return total
  }),
  grandTotalCents: Ember.computed('grandTotal', function () {
    return this.get('grandTotal') * 100
  })
})
