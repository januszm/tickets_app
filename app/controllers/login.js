import Ember from 'ember';

export default Ember.Controller.extend({
  session: Ember.inject.service(),

  actions: {
    authenticate: function() {
      var credentials = this.getProperties('email', 'password');
      var authenticator = 'authenticator:jwt';

      this.get('session').authenticate(authenticator, credentials);
      this.transitionToRoute('index');
    }
  }
});
