import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Component.extend({
  currentUser: service(),

  getCurrentUser: Ember.computed(function() {
    return this.get('currentUser.user');
  }),
});
