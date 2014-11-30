import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return Ember.RSVP.hash({
      proteins: this.store.find('protein'),
      tissues: this.store.find('tissue')
    });
  },
  setupController: function(controller, model) {
    controller.set("proteins", model.proteins);
    controller.set("tissues", model.tissues);
  }
});
