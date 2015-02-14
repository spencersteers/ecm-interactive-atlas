import DS from 'ember-data';

export default DS.Model.extend({
  dataset: DS.belongsTo('dataset'),
  peptideSequence: DS.attr('string'),
  gene: DS.attr('string'),
  species: DS.attr('string'),
  protein: DS.belongsTo('protein', { async: true }),
  tissueName: DS.attr('string'),
  familyName: DS.attr('string'),
  functionalGroupName: DS.attr('string'),
  molecularWeight: DS.attr('string'),
  tissueWeightNorm: DS.attr('string')
});
