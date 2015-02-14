import Ember from 'ember';

export default Ember.Controller.extend({
  queryParams: ['tissue'],
  tissue: null,
  proteins: [],
  tissues: [],

  proteinsInQueryTissue: function() {
    var data = {};
    if (this.tissue) {
      data['selected_tissue'] = this.tissue;
      data['proteins'] = this.proteins.filter(function(item) {
        return item.isFoundInTissue(this.tissue);
      });
    } else {
      data['selected_tissue'] = 'all';
      data['proteins'] = this.proteins;
    }

    return Ember.ArrayProxy.create({
      proteins: data['proteins'],
      selected_tissue: data['selected_tissue']
    });
  }.property('proteins', 'tissue')

});