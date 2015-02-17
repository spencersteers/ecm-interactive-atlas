import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var tissue = this.store.fetch('tissue', params.id);
    return tissue;
  },

  // serialize: function(model) {
  //   // this will make the URL `/posts/foo-post`
  //   return { slug: model.get('name') };
  // },

  setupController: function(controller, model) {
    controller.set("proteins", model.get('proteins'));
    controller.set("selectedTissue", model.get('slug'));
  }
});
