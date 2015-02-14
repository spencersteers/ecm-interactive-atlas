import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var tissue = this.store.fetch('tissue', params.tissue_id);
    return tissue;
  },
  setupController: function(controller, model) {
    controller.set("proteins", model.get('proteins'));
    controller.set("selectedTissue", model.get('name'));
  }
});
