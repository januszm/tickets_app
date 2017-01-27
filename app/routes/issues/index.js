import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.get('store').findAll('issue');
  },
  actions: {
    assign() {
      this.transitionTo('issues.new');
    },
    finalize() {
      this.transitionTo('issues.new');
    }
  }
});
