import Ember from 'ember';

export default Ember.Route.extend({
  model (params) {
    return Ember.RSVP.hash({
      issue: this.store.findRecord('issue', params.issue_id),
      users: this.store.findAll('user'),
    });
  },
  actions: {
    save(issue) {
      issue.save().then((issue) => { this.transitionTo('issues.show', issue); }).catch(() => alert("Couldn't save issue!"));
      this.transitionTo('issues.index');
    },
    cancel(issue) {
      issue.rollbackAttributes();
      this.transitionTo('issues.index');
    }
  }
});
