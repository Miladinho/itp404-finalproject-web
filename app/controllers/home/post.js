import Ember from 'ember';

export default Ember.Controller.extend({
  actions : {
    createPost: function(e) {
      e.preventDefault();
      var postUser = this.get("user");
      var postTitle = this.get("title");
      var postDescription = this.get("description");
      var promise = $.ajax({
        type: "post",
        url: "http://ec2-35-163-70-242.us-west-2.compute.amazonaws.com/api/1/posts",
        data: {
          userid: postUser,
          title: postTitle,
          description: postDescription
        }
      })
      promise.then((result) => {
        console.log(result);
        //console.log(this.get('model'));
        this.set('user',null);
        this.set('title',null);
        this.set("description",null);
        var posts = this.get('model')
        posts.push(result);
        this.set('model',posts)
        this.transitionToRoute('home');
      })
    },
    cancelPost: function() {
      var posts = this.get('model')
      console.log(posts)
      this.set('user',null);
      this.set('title',null);
      this.set("description",null);
      this.transitionToRoute('home');
    }
  }
});
