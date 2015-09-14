// Place third party dependencies in the lib folder
//
// Configure loading modules from the lib directory,
requirejs.config({
    'baseUrl': 'js',
    'paths': {
      'jquery': 'vendors/jquery.min',
      'bootstrap': 'vendors/bootstrap.min',
  },
  shim: {
      'bootstrap': ['jquery']
  }
});

// Load the main app module to start the app
require(['main']);
