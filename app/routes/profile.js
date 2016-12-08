import Ember from 'ember';
import ENV from 'fraiche/config/environment'

export default Ember.Route.extend({
  model: function(params) {
    var userID = params.id
    var url = "http://fraiche-server.herokuapp.com/api/1/users/" + userID;

    var promise = Ember.$.ajax({
      type: 'get',
      url: url
    })
    console.log(promise)
    return promise;
  }
});
