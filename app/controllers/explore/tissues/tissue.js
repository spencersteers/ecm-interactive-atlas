import Ember from 'ember';

export default Ember.Controller.extend({
  selectedTissue: 'all',
  seedColor: {'color': '#045a8d'},
  tissueWeightNormDataCalc: [{'label': 'one', 'value': 1}],
  chartMinBarWidth: 80,

  selectedTissueDisplay: function() {
    return this.get('selectedTissue').capitalize();
  }.property('selectedTissue'),

  tissueWeightNormData: function() {
    var data  = [];
    var st = this.get('selectedTissue');
    this.get('proteins').forEach(function(item) {
      if (item.get('proteinName') != null) {
        var value = item.get('averageTissueWeightNorms')[st.toLowerCase()];
        if (value) {
          data.push({'label': item.get('geneName'), 'value': value});
        }

      }
    });

    data = data.sort(function(a, b){return b['value']-a['value'];});
    data = data.slice(0, 10);
    return data;
  }.property('content', 'selectedTissue'),

  averageRelativeConcentrationsChart: function() {
    var data  = [];
    var tissueList = [];
    var proteinList = [];
    var st = this.get('selectedTissue');
    var proteins = this.get('proteins');

    

    proteins = proteins.filter(function(p) {
      return !_.isEmpty(p.get('averageRelativeConcentrations'));
    });

    console.log(proteins.get('length'));
    proteins.forEach(function(protein) {
      if (st === 'all') {
        proteinList.push(protein.get('geneName'));
        var arc = protein.get('averageRelativeConcentrations');

        _.forEach(arc, function (concentrations, key) {
          _.forEach(concentrations, function(c) {
            if (!_.includes(tissueList, c.tissueState)) {
              tissueList.push(c.tissueState);
            }
            data.push({'tissue': c.tissueState, 'protein': protein.get('geneName'), 'value': c.average});
          });
        });
      }
      else {
        var arc = protein.get('averageRelativeConcentrations')[st.toLowerCase()];
        if (arc) {
          proteinList.push(protein.get('geneName'));
        }

        _.forEach(arc, function (c, key) {
          if (!_.includes(tissueList, c.tissueState)) {
            tissueList.push(c.tissueState);
          }
          data.push({'tissue': c.tissueState, 'protein': protein.get('geneName'), 'value': c.average});
        });
      }
    });

    return {data: data, tissues: tissueList, proteins: proteinList};
  }.property('content', 'selectedTissue'),

  chartWidth: function() {
    return this.get('tissueWeightNormData').length * this.get('chartMinBarWidth') + 200;
  }.property('chartMinBarWidth', 'tissueWeightNormData'),

  chartWidthStyle: function() {
    return 'min-width:' + this.get('chartWidth') + 'px!important;';
  }.property('chartWidth'),

  isTissueWeightNormsDisabled: function() {
    return this.get('tissueWeightNormData').length === 0;
  }.property('tissueWeightNormData'),

  showTissueWeightNorms: function() {
    return !(this.get('isTissueWeightNormsDisabled'));
  }.property('isTissueWeightNormsDisabled'),

  showRelativeConcentrations: function() {
    return !(this.get('showTissueWeightNorms'));
  }.property('showTissueWeightNorms'),
  
  actions: {
    toggleDisplay: function() {
      if (!this.get('isTissueWeightNormsDisabled')) {
        this.toggleProperty('showTissueWeightNorms');  
      }
    }
  },

});