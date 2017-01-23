import { test } from 'qunit';
import moduleForAcceptance from 'tickets-app/tests/helpers/module-for-acceptance';

import {
  authenticateSession,
  invalidateSession
} from 'tickets-app/tests/helpers/ember-simple-auth';

moduleForAcceptance('Acceptance | list issues');

test('visiting /issues', function(assert) {

  invalidateSession(this.application);
  visit('/issues');
  andThen(function() {
    assert.equal(currentURL(), '/login');
  });

  authenticateSession(this.application);
  visit('/issues');
  andThen(function() {
    assert.equal(currentURL(), '/issues');
  });
});
