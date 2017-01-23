import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('issues', function() {
    this.route('new');
    this.route('show', { path: '/:issue_id' });
  });
  this.route('users');
  this.route('not-found', { path: '/*path' });
});

export default Router;
