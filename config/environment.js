/* jshint node: true */

module.exports = function(environment) {
  var ENV = {
    modulePrefix: 'ecm-interactive-atlas',
    environment: environment,
    baseURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. 'with-controller': true
      }
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },

    contentSecurityPolicy: {
      'default-src': "'none'",
      'script-src': "'self' 'unsafe-eval' http://maxcdn.bootstrapcdn.com http://cdn.firebase.com https://cdn.firebase.com",
      'font-src': "'self' http://maxcdn.bootstrapcdn.com",
      'connect-src': "'self' http://ecmatlas.herokuapp.com http://127.0.0.1:8000 https://*.firebaseio.com wss://*.firebaseio.com",
      'img-src': "'self'",
      'style-src': "'self' 'unsafe-inline' http://maxcdn.bootstrapcdn.com",
      'media-src': "'self'"
    }
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.baseURL = '/';
    ENV.locationType = 'auto';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
  }

  if (environment === 'production') {

  }

  return ENV;
};
