import Ember from 'ember';

export default Ember.Component.extend({
  showDiagram: true,
  isDiagram: true,
  isList: false,
  defaultQueryParam: null,

  actions: {
    toggleDisplay: function() {
      var isShowing = this.get('showDiagram');
      if (isShowing) {
        this.set('showDiagram', false);
        this.set('isDiagram', false);
        this.set('isList', true);
      }
      else {
        this.set('showDiagram', true);
        this.set('isDiagram', true);
        this.set('isList', false);
      }

    }
  },


});
