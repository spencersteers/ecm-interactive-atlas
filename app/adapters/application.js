import DS from 'ember-data';
import ENV from 'ecm-interactive-atlas/config/environment';

export default DS.RESTAdapter.extend({
  // host: 'http://127.0.0.1:8000'
  // host: window.EcmInteractiveAtlas.API_HOST
  host: window.EcmInteractiveAtlas.API_HOST
});
