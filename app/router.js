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
  this.route('edit-menu-section', { path: '/menu-section/:menu-section_id/edit' })
  this.route('edit-menu-item', { path: '/menu-item/:menu-item_id/edit' })
})

export default Router
