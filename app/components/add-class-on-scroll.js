import Ember from "ember";

export default Ember.Component.extend({
  classNames: ['ember-view'],
  classNameBindings: ['isScrolled'],
  isScrolled: false,

  didInsertElement: function() {
    var view = this;
     this.$(this.scrollableSelector).bind("scroll", function() {
      view.didScroll();
    });
  },

  willDestroyElement: function() {
    this.$(this.scrollableSelector).unbind("scroll");
  },

  didScroll: function() {
    var scrollTop = $(this.scrollableSelector).scrollTop();
    this.set('isScrolled', (scrollTop > 0));
  }

});