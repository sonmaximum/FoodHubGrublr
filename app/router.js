import EmberRouter from '@ember/routing/router'
import config from './config/environment'

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
})

Router.map(function () {
  this.route('sign-up')
  this.route('sign-in')
  this.route('change-password')
  this.route('my-restaurant')
  this.route('not-found', { path: '/*path' })
  this.route('restaurants')
  this.route('restaurant', { path: '/restaurants/:restaurant_id' })
  this.route('edit-restaurant', { path: '/restaurants/:restaurant_id/edit' })
  this.route('edit-menu-section', { path: '/menu-sections/:menu_section_id/edit' })
  this.route('edit-menu-item', { path: '/menu-items/:menu_item_id/edit' })
  this.route('add-to-cart', { path: '/menu-items/:menu_item_id/' })
  this.route('cart')
  this.route('edit-cart', {path: '/order-items/:order_item_id/'})
})

export default Router
