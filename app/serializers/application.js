import DS from 'ember-data';
import Ember from 'ember';

let decamelize = Ember.String.underscore;

export default DS.JSONAPISerializer.extend({
  keyForAttribute: function(attr) {
    return decamelize(attr);
  },

  keyForRelationship: function(rawKey) {
    return decamelize(rawKey);
  }

  //payloadKeyFromModelName(modelName) {
  //  return singularize(capitalize(modelName));
  //}
});
