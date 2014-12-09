import Ember from 'ember';

export default Ember.ObjectController.extend({
  format: "MM/DD/YYYY",
  date: null,
  formattedDate: function() {
    var date = this.get('insertedAt'),
    format = this.get('format');
    return moment(date).format(format);
  }.property('date', 'format')
});
