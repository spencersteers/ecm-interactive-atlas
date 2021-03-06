import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  proteins: DS.hasMany('protein', {async: true})
});
