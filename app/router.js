import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', function() {
    this.route('post');
    this.route('edit', { path: ':id'});
  });
  this.route('about');
  this.route('profile', { path: ':id'});
  this.route('marketplace');
});

export default Router;
