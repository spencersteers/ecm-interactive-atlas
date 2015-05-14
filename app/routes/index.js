import Ember from 'ember';

export default Ember.Route.extend({
   model: function() {
    return Ember.RSVP.hash({
      protein: this.store.find('protein', 1),
      experiment: this.store.find('experiment', 1)
    });
  },
  setupController: function(controller, model) {
    controller.set("protein", model.protein);
    controller.set("experiment", model.experiment);
  }
});
