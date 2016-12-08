import Ember from 'ember';

export default Ember.Controller.extend({
  actions : {
    createUser: function(e) {
      e.preventDefault();
      var postUser = this.get("user");
      var postName = this.get("name");
      var postEmail = this.get("email");
      var promise = Ember.$.ajax({
        type: "post",
        url: "http://fraiche-server.herokuapp.com/api/1/user/create/fb",
        data: {
          userid: postUser,
          title: postName,
          description: postEmail
        }
      });
      promise.then((result) => {
        console.log(result);
        //console.log(this.get('model'));
        this.set('user',null);
        this.set('name',null);
        this.set("email",null);
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
