import Ember from 'ember';

export default Ember.Controller.extend({
  selectedTissue: 'all',
  seedColor: {'color': '#045a8d'},
  tissueWeightNormDataCalc: [{'label': 'one', 'value': 1}],
  chartMinBarWidth: 80,

  tissueWeightNormData: function() {
    var data  = [];
    var protein = this.get('protein');
    var averageTissueWeightNorms = protein.get('averageTissueWeightNorms');

    for (var key in averageTissueWeightNorms) {
      if (averageTissueWeightNorms.hasOwnProperty(key) && key !== "toString" && key !== "__nextSuper") {
        data.push({'label': key, 'value': averageTissueWeightNorms.get(key)});
      }
    }
    // for (var key in averageTissueWeightNorms) {
    //    data.push({'label': key, 'value': averageTissueWeightNorms[key]});
    // }
    return data;
  }.property('protein'),

  shortSummary: function() {
    var summary = this.get("protein").get("externalReference").get("wikipediaSummary");
    if (!summary.length > 0) {
      return;
    }
    var limit = 300;
    if (summary.length > limit) {
      summary = summary.substr(0, limit - 3) + "...";
    }
    return summary;
  }.property('protein'),

  averageRelativeConcentrationsChart: function() {
    var data  = [];
    var tissueList = [];
    var proteinList = [];
    var st = this.get('selectedTissue');
    // var proteins = 

    // this.get('model').forEach(function(protein) {
    //   if (st === 'all') {
    //     proteinList.push(protein.get('geneName'));
    //     var arc = protein.get('averageRelativeConcentrations');

    //     _.forEach(arc, function (concentrations, key) {
    //       _.forEach(concentrations, function(c) {
    //         if (!_.include(tissueList, c.tissueState)) {
    //           tissueList.push(c.tissueState);
    //         }
    //         data.push({'tissue': c.tissueState, 'protein': protein.get('geneName'), 'value': c.average});
    //       });
    //     });
    //   }
    //   else {
    //     var arc = protein.get('averageRelativeConcentrations')[st.toLowerCase()];
    //     if (arc) {
    //       proteinList.push(protein.get('geneName'));
    //     }

    //     _.forEach(arc, function (c, key) {
    //       if (!_.include(tissueList, c.tissueState)) {
    //         tissueList.push(c.tissueState);
    //       }
    //       data.push({'tissue': c.tissueState, 'protein': protein.get('geneName'), 'value': c.average});
    //     });
    //   }
    // });

    // return {data: data, tissues: tissueList, proteins: proteinList};
  }.property('content', 'selectedTissue'),

  chartWidth: function() {
    return this.get('tissueWeightNormData').length * this.get('chartMinBarWidth') + 200;
  }.property('chartMinBarWidth', 'tissueWeightNormData'),

  chartWidthStyle: function() {
    return 'min-width:' + this.get('chartWidth') + 'px!important;';
  }.property('chartWidth')

});