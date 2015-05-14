import DS from 'ember-data';

export default DS.Model.extend({
  wikipediaId: DS.attr('string'),
  wikipediaUrl: DS.attr('string'),
  wikipediaSummary: DS.attr('string'),
  uniprotId: DS.attr('string'),
  uniprotUrl: DS.attr('string')
});