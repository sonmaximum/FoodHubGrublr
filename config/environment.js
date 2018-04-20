/* eslint-env node */

module.exports = function (environment) {
  'use strict'
  const ENV = {
    modulePrefix: 'FoodHubGrublr',
    environment: environment,
    rootURL: '/',
    locationType: 'auto',
    apiHost: 'http://localhost:4741/',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    }
  }

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true
    // ENV.APP.LOG_ACTIVE_GENERATION = true
    // ENV.APP.LOG_TRANSITIONS = true
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true
    // ENV.APP.LOG_VIEW_LOOKUPS = true
    const port = +('GA'.split('').reduce((p, c) =>
      p + c.charCodeAt().toString(16), '')
    )
    ENV.apiHost = `http://localhost:${port}`
    ENV.stripe = {
      key: 'pk_test_2EkyoubsG8BaoffRyfAer9rS'
    }
    ENV['ember-simple-google-maps'] = {
      url: 'https://maps.googleapis.com/maps/api/js',
      version: '3.31',
      apiKey: 'AIzaSyAxXDtsT0BphpRdrCQN9qEvarZA3_pvJBU'
    }
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.rootUrl = '/'
    ENV.locationType = 'none'

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false
    ENV.APP.LOG_VIEW_LOOKUPS = false

    ENV.APP.rootElement = '#ember-testing'
    ENV.stripe = {
      key: 'pk_test_2EkyoubsG8BaoffRyfAer9rS'
    }
    ENV['ember-simple-google-maps'] = {
      url: 'https://maps.googleapis.com/maps/api/js',
      version: '3.31',
      apiKey: 'AIzaSyAxXDtsT0BphpRdrCQN9qEvarZA3_pvJBU'
    }
  }

  if (environment === 'production') {
    ENV.rootURL = '/FoodHubGrublr'
    ENV.locationType = 'hash'
    ENV.apiHost = 'https://food-hub-grub-lr-api.herokuapp.com/'
    ENV.stripe = {
      key: 'pk_test_2EkyoubsG8BaoffRyfAer9rS'
    }
    ENV['ember-simple-google-maps'] = {
      url: 'https://maps.googleapis.com/maps/api/js',
      version: '3.31',
      apiKey: 'AIzaSyAxXDtsT0BphpRdrCQN9qEvarZA3_pvJBU'
    }
  }

  return ENV
}
