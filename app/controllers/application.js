import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),
  currentUser: Ember.inject.service(),
  getCurrentUser: Ember.computed(function() {
    return this.get('currentUser.user');
  }),

  actions: {
    invalidateSession() {
      this.get('session').invalidate();
      this.transitionToRoute('index');
    }
  }
});
