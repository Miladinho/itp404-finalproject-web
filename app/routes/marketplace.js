import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    var promise = $.ajax({
      type: 'get',
      url: 'http://ec2-35-163-70-242.us-west-2.compute.amazonaws.com/api/1/posts'
    })
    console.log(promise)
    return promise;
  }
});
