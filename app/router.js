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
  this.route('datasets', { path: "/datasets" });
  this.route("dataset", { path: "/datasets/1" });
});

export default Router;
