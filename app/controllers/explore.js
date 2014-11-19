import Ember from 'ember';

export default Ember.ArrayController.extend({
  queryParams: ['tissue'],
  tissue: null,

  filteredProteins: function() {
    var tissue = this.get('tissue');
    var proteins = this.get('model');
    var data = {};
    if (tissue) {
      data['selected_tissue'] = tissue;

      data['proteins'] = proteins.filter(function(item) {
        return item.isFoundInTissue(tissue);
      });
    } else {
      data['selected_tissue'] = 'all';
      data['proteins'] = proteins;
    }

    return Ember.ArrayProxy.create({
      proteins: data['proteins'],
      selected_tissue: data['selected_tissue']
    });
  }.property('model', 'tissue')
});