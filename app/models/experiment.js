import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  tissueName: DS.attr('string'),
  species: DS.attr('string'),
  dataType: DS.attr('string'),
  acquisitionDate: DS.attr('string'),
  acquisitionType: DS.attr('string'),
  acquisitionInstrument: DS.attr('string'),
  publication: DS.attr('string'),
  dataDepositoryLink: DS.attr('string'),
  slug: DS.attr('string'),
  datasets: DS.hasMany('dataset', { async: true }),
  datasetItems: DS.hasMany('datasetitem', { async: true })
});
