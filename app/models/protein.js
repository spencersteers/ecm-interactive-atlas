import DS from 'ember-data';

export default DS.Model.extend({
  sequence: DS.attr('string'),
  geneName: DS.attr('string'),
  proteinName: DS.attr('string'),
  tissues: DS.hasMany('tissue'),
  averageTissueWeightNorms: DS.attr('json'),

  isFoundInTissue: function(tissue) {
    return this.get('tissues').filterBy('name', tissue).length > 0;
  },
});
