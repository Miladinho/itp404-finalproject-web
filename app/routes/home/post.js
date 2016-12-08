import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    this.set('user',null);
    this.set('title',null);
    this.set("description",null);
    return this.modelFor('home');
  }
});
