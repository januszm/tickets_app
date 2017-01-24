import DS from 'ember-data';
import Ember from 'ember';

export default DS.Model.extend({
  email: DS.attr(),
  firstName: DS.attr(),
  lastName: DS.attr('string', { defaultValue: '' }),
  admin: DS.attr('boolean', { defaultValue: false }),

  fullName: Ember.computed('firstName', 'lastName', function() {
    return [this.get('firstName'), this.get('lastName')].join(' ');
  })
});
