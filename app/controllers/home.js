import Ember from 'ember';
//import ENV from 'fraiche/config/environment';

//console.log(ENV);
export default Ember.Controller.extend({
  actions : {
    getUserPosts: function(e) {
      //console.log(e)
      e.preventDefault();
      var postUser = this.get("user");
      var promise = Ember.$.ajax({
        type: "get",
        url: "http://fraiche-server.herokuapp.com/api/1/posts/users/"+postUser
      }).then((result) => {
        this.set('model',result);
        this.transitionToRoute('home');
      })
    }
  }
});
