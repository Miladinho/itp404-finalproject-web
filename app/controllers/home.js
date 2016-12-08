import Ember from 'ember';

export default Ember.Controller.extend({
  actions : {
    getUserPosts: function(e) {
      //console.log(e)
      e.preventDefault();
      var postUser = this.get("user");
      var promise = $.ajax({
        type: "get",
        url: "http://localhost:3000/api/1/posts/users/"+postUser
      }).then((result) => {
        this.set('model',result);
        this.transitionToRoute('home');
      })
    }
  }
});
