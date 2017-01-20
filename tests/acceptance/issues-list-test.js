import { test } from 'qunit';
import moduleForAcceptance from 'tickets-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | list issues');

test('visiting /issues', function(assert) {
  visit('/issues');

  andThen(function() {
    assert.equal(currentURL(), '/issues');
  });
});
