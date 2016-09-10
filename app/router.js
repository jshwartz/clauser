import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('clause-library', function () {
    this.route('clause', { path: '/clause/:clause_id' }, function () {
      this.route('clause-block');
    });
  });
});

export default Router;
