import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  insertedAt: DS.attr('string'),
  datasetItems: DS.hasMany('datasetitems', { async: true })
});
