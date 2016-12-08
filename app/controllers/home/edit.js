import Ember from 'ember';
import ENV from 'fraiche/config/environment'

export default Ember.Controller.extend({
  actions: {
    editPost: function(post) {
      console.log(post)
      var promise = $.ajax({
        type: "put",
        url: "http://fraiche-server.herokuapp.com/api/1/posts/"+post.id,
        data: {
          userid: post.id,
          title: post.title,
          description: post.description
        }
      }).then((post) => {
        alert("Succesfully edited post!")
        this.transitionToRoute('home')
      })
    },
    deletePost: function(post) {
      var promise = $.ajax({
        type: "delete",
        url: "http://fraiche-server.herokuapp.com/api/1/posts/"+post.id
      }).then((post) => {
        alert("Succesfully deleted post!")
        this.transitionToRoute('home')
      })
      return promise;
    },
    cancelEdit: function() {
      this.set('user',null);
      this.set('title',null);
      this.set("description",null);
      this.transitionToRoute('home');
    }
  }
});
