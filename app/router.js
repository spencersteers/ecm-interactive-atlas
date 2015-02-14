import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('explore', function() {
    // this.resource('proteins', function() {
    //   this.resource('protein', { path: '/:protein_id' });
    // });
    // this.resource('tissues');
    this.route("tissue", { path: "/:tissue_id" });
    this.route("protein", { path: "protein/:protein_id" });
  });
  this.resource('datasets', { path: "/datasets" });
  this.resource("dataset", { path: "/datasets/:dataset_id" });


  this.route("about", { path: "/about" });

  this.route('search');
});

export default Router;
