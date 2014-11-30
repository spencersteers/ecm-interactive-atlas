import Ember from 'ember';

export default Ember.ArrayController.extend({
  selectedTissue: 'all',
  seedColor: {'green': 'rgb(91,183,91)'},
  tissueWeightNormData: function() {
    var data  = [];
    var st = this.selectedTissue;
    this.get('model').forEach(function(item) {
      data.push({'label': item.get('proteinName'),
                 'value': item.get('averageTissueWeightNorms')[st]});
    });
    console.log(data);
    return data;
  }.property('model')
});