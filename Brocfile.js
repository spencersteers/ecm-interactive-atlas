/* global require, module */

var EmberApp = require('ember-cli/lib/broccoli/ember-app');

var app = new EmberApp({
  sassOptions: {
    includePaths: [
      'bower_components/bourbon/app/assets/stylesheets',
      'bower_components/neat/app/assets/stylesheets',
    ]
  }
});


// Use `app.import` to add additional libraries to the generated
// output files.
app.import('bower_components/moment/min/moment.min.js');
app.import('bower_components/d3/d3.js');
app.import('bower_components/lodash/lodash.min.js');
app.import('bower_components/ember-charts/dist/ember-charts.js');
app.import('bower_components/ember-charts/dist/ember-charts.css');

app.import('bower_components/font-awesome/fonts/fontawesome-webfont.ttf', {
  destDir: 'assets/fonts'
});
app.import('bower_components/font-awesome/fonts/fontawesome-webfont.eot', {
  destDir: 'assets/fonts'
});
app.import('bower_components/font-awesome/fonts/fontawesome-webfont.svg', {
  destDir: 'assets/fonts'
});
app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff', {
  destDir: 'assets/fonts'
});
app.import('bower_components/font-awesome/fonts/fontawesome-webfont.woff2', {
  destDir: 'assets/fonts'
});
// If you need to use different assets in different
// environments, specify an object as the first parameter. That
// object's keys should be the environment name and the values
// should be the asset to use in that environment.
//
// If the library that you are including contains AMD or ES6
// modules that you would like to import into your application
// please specify an object with the list of modules as keys
// along with the exports of each module as its value.

// app.import('bower_components/bourbon/app/assets/stylesheets');


// module.exports = app.toTree([appCss]);

module.exports = app.toTree();
