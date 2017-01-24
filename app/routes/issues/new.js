import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('issue', { creatorId: this.currentUserId() });
  },
  session: service('session'),
  currentUserId() {
    let jwt = this.get('session.data.authenticated.jwt');
    return JSON.parse(atob(jwt.split('.')[1])).sub;
  },
  actions: {
    saveIssue(issue) {
      issue.save().then((issue) => { this.transitionTo('issues.show', issue); }).catch(() => alert("Couldn't save issue!"));
    },
    cancel(issue) {
      issue.rollbackAttributes();
      this.transitionTo('issues.index');
    }
  }
});
