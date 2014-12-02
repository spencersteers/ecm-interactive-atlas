import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    toggleDisplay: function() {
      var isShowing = this.get('showDiagram');

      this.set('showDiagram', !isShowing);
      this.set('isDiagram', !isShowing);
      this.set('isList', isShowing);
    }
  },

  showDiagram: false,
  isDiagram: false,
  isList: true,
  defaultQueryParam: null,
});
