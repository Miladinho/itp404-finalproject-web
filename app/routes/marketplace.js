import Ember from 'ember';
import ENV from 'fraiche/config/environment';

export default Ember.Route.extend({
  model: function() {
    var promise = Ember.$.ajax({
      type: 'get',
      url: "http://fraiche-server.herokuapp.com/api/1/posts"
    })
    //console.log(promise);
    return promise;
  }
});
