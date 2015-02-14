import Ember from 'ember';
import DS from 'ember-data';

export default DS.Transform.extend({
  serialize: function (value) {
    return value;
  },
  deserialize: function (value) {
    return Ember.Object.create(Ember.isBlank(value) ? {} : value);
  }
});

