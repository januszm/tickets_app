import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  creatorId: DS.attr(),
  assigneeId: DS.attr(),
  status: DS.attr(),
  isOpen: Ember.computed('status', function() {
    return this.get('status') === 'opened';
  }),
  isClosed: Ember.computed('status', function() {
    return this.get('status') === 'closed';
  }),
});
