import Ember from 'ember';

export default Ember.Component.extend({
  classNameBindings: ['isDiagram', 'isList'],
  showDiagram: false,
  isDiagram: false,
  isList: true,
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
