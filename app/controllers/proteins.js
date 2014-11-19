import Ember from 'ember';

export default Ember.ArrayController.extend({
  proteins: Ember.computed.alias('model.proteins'),
  selected_tissue: Ember.computed.alias('model.selected_tissue'),
  seed_color: {'green': 'rgb(91,183,91)'},
  tissueWeightNormData: function() {
    var data = [];
    var selected_tissue = this.get('model').get('selected_tissue');
    // var tissue = this.get('tissue') ? this.get('tissue') : 'all';
    // console.log(tissue);
    this.get('proteins').forEach(function(item) {
      data.push({'label': item.get('proteinName'),
                 'value': item.get('averageTissueWeightNorms')[selected_tissue.toLowerCase()]});
    });
    return data;
  }.property('model'),

});
