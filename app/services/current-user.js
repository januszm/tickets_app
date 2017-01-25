import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Service.extend({
  session: service('session'),
  store: service(),

  currentUserId() {
    let jwt = this.get('session.data.authenticated.jwt');
    return JSON.parse(atob(jwt.split('.')[1])).sub;
  },
  load() {
    if (this.get('session.isAuthenticated')) {
      return this.get('store').findRecord('user', this.currentUserId())
        .then(user => this.set('user', user));
    } else {
      return Ember.RSVP.resolve();
    }
  }
});
