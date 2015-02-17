import Ember from 'ember';

export default Ember.Route.extend({
  controllerName: 'explore.tissues.tissue',

  model: function() {
    return this.store.find('protein');
  },
  renderTemplate: function() {
    this.render('explore.tissues.tissue');
  },
  setupController: function(controller, model) {
    controller.set("proteins", model);
    controller.set("selectedTissue", 'all');
  }
});