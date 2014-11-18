import DS from 'ember-data';

export default DS.Model.extend({
  sequence: DS.attr('string'),
  geneName: DS.attr('string'),
  proteinName: DS.attr('string'),
  tissues: DS.hasMany('tissue', {async: true}),
});
