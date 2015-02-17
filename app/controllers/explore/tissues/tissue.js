import Ember from 'ember';

export default Ember.Controller.extend({
  selectedTissue: 'all',
  seedColor: {'color': '#43A047'},
  tissueWeightNormDataCalc: [{'label': 'one', 'value': 1}],
  selectedTissueDisplay: function() {
    return this.get('selectedTissue').capitalize();
  }.property('selectedTissue'),

  tissueWeightNormData: function() {
    var data  = [];
    var st = this.get('selectedTissue');
    this.get('proteins').forEach(function(item) {
      data.push({'label': item.get('proteinName'),
                 'value': item.get('averageTissueWeightNorms')[st.toLowerCase()]});
    });

    return data;
  }.property('content', 'selectedTissue')
});