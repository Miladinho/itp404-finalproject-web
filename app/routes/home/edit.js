import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    // var promise = $.ajax({
    //   type: 'get',
    //   url: 'http://localhost:3000/api/1/posts/'+params.id
    // })
    // console.log(promise)
    // return promise;

    return params.post;
  }
});
