import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var userID = params.id
    var url = 'http://ec2-35-163-70-242.us-west-2.compute.amazonaws.com/api/1/users/' + userID;

    var promise = $.ajax({
      type: 'get',
      url: url
    })
    console.log(promise)
    return promise
  }
});
