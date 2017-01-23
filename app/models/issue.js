import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  creator_id: DS.attr(),
  assignee_id: DS.attr()
});
