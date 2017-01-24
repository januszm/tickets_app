import Ember from 'ember';

const { service } = Ember.inject;

export default Ember.Route.extend({
  model() {
    return this.store.createRecord('issue', { creatorId: this.get('currentUser.user.id') });
  },
  currentUser: service(),
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
