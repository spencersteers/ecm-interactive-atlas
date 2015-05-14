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
    this.resource("explore.tissues", { path: '/tissues'}, function() {
      this.route("all", { path: "/" });
      this.route("tissue", { path: "/:slug/:id" });
    });

    // this.route("all", { path: "tissue/all" });
    // this.route("tissue", { path: "tissue/:tissue_name" });
  });
  this.route("protein", { path: "protein/:protein_id" });
  this.resource('experiments', { path: "/experiments" });
  this.resource("experiment", { path: "/experiments/:experiment_id" });


  this.route("about", { path: "/about" });

  this.route('search');
});

export default Router;
