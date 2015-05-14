import Ember from 'ember';

export default Ember.ArrayController.extend({
  searchName: '',
  searchSkin: false,
  searchBone: false,
  searchMuscle: false,
  searchTendon: false,

  searchResults: Ember.computed.oneWay("content"),

  filterItem: function (model) {

    if (this.get('searchSkin')) {
      if (!model.isFoundInTissue("Skin")) {
        return false;
      }
    }

    if (this.get('searchBone')) {
      if (!model.isFoundInTissue("Bone")) {
        return false;
      }
    }

    if (this.get('searchMuscle')) {
      if (!model.isFoundInTissue("Muscle")) {
        return false;
      }
    }

    if (this.get('searchTendon')) {
      if (!model.isFoundInTissue("Tendon")) {
        return false;
      }
    }

    var searchInput = this.get('searchName');
    var regexp = new RegExp(searchInput, "i");
    if(!searchInput || (searchInput && (0 === searchInput.length))) {
      return true;
    } else if (-1 !== model.get('geneName').search(regexp)) {
      return true;
    } else {
      return false;
    }
  },

  searchFilter: function() {
    this.set('searchResults',this.get('content').filter(this.filterItem.bind(this)));
    console.log("searchFilter");
  }.observes("searchName"),

  observeSkin: function() {
    this.set('searchResults',this.get('content').filter(this.filterItem.bind(this)));
  }.observes("searchSkin"),

  observeBone: function() {
    this.set('searchResults',this.get('content').filter(this.filterItem.bind(this)));
  }.observes("searchBone"),

  observeMuscle: function() {
    this.set('searchResults',this.get('content').filter(this.filterItem.bind(this)));
  }.observes("searchMuscle"),

  observeTendon: function() {
    this.set('searchResults',this.get('content').filter(this.filterItem.bind(this)));
  }.observes("searchTendon"),

});
