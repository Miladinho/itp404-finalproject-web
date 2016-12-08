import Ember from 'ember';
//import ENV from 'fraiche/config/environment'

export default Ember.Controller.extend({
  actions : {
    createPost: function(e) {
      e.preventDefault();
      var postUser = this.get("user");
      var postTitle = this.get("title");
      var postDescription = this.get("description");
      var promise = Ember.$.ajax({
        type: "post",
        url: "http://fraiche-server.herokuapp.com/api/1/posts",
        data: {
          userid: postUser,
          title: postTitle,
          description: postDescription
        }
      });
      promise.then((result) => {
        console.log(result);
        //console.log(this.get('model'));
        // if (result.userid == this.get('user')) {
        //   var posts = this.get('model');
        //   posts.pushObject(result);
        //   this.set('model',posts)
        // }
        this.set('user',null);
        this.set('title',null);
        this.set("description",null);
        alert("Succesfully created post!");
        this.transitionToRoute('home');
      });
    },
    cancelPost: function() {
      var posts = this.get('model');
      console.log(posts);
      this.set('user',null);
      this.set('title',null);
      this.set("description",null);
      this.transitionToRoute('home');
    }
  }
});
