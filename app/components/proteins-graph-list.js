import Ember from 'ember';

export default Ember.Component.extend({
  seedColor: {'green': 'rgb(91,183,91)'},

  tissueWeightNormDataCalc: [{'label': 'one', 'value': 1}],

  tissueWeightNormData: function() {
    var data  = [];
    var st = this.get('selectedTissue');
    this.get('proteins').forEach(function(item) {
      data.push({'label': item.get('proteinName'),
                 'value': item.get('averageTissueWeightNorms')[st.toLowerCase()]});
    });

    // this.get('proteins').then(function(loaded_proteins) {
    //   loaded_proteins.forEach(function(item) {
    //     data.push({'label': item.get('proteinName'),
    //                'value': item.get('averageTissueWeightNorms')[st.toLowerCase()]});
    //   });
    // });

    // this.set('tissueWeightNormDataCalc', data);

    return data;
  }.property('proteins', 'selectedTissue')
});
