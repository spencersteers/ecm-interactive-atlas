import Ember from 'ember';

export default Ember.ArrayController.extend({
  actions: {
    toggleDisplay: function() {
      var isShowing = this.get('showDiagram');

      this.set('showDiagram', !isShowing);
      this.set('isDiagram', !isShowing);
      this.set('isList', isShowing);
    }
  },

  showDiagram: true,
  isDiagram: true,
  isList: false,
});
