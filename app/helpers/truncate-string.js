import Ember from 'ember';

export default Ember.Handlebars.makeBoundHelper(function(text, options){
  var limit = options.hash.limit || 46;
  if (text.length > limit){
    text = text.substr(0, limit - 3) + "...";
  }
  return text;
});