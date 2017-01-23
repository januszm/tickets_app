import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.get('store').findRecord('issue', params.issue_id).catch(this.transitionTo('issues.index'));
  },
  notFound() {
    this.transitionTo('not-found');
  },
  actions: {
    deleteIssue(issue) {
      let confirmation = confirm('Are you sure?');

      if (confirmation) {
        issue.destroyRecord().then(this.transitionTo('issues.index'));
      }
    }
  }
});
