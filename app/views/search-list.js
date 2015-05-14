// in views/my-list.js

import ListView from 'ember-list-view';
import ListItemView from 'ember-list-view/list-item-view';

// extending ListView
// customize the row views by subclassing ListItemView
// and specifying the itemViewClass property in the Ember.ListView definition
export default ListView.extend({
  height: 1000,
  rowHeight: 50,
  itemViewClass: ListItemView.extend({templateName: "search-list-item"})
});