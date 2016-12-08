import { test } from 'qunit';
import moduleForAcceptance from 'fraiche/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home', {
  beforeEach(){
    server.createList('posts', 20);
  }
});

test('visiting / redirects to /home', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(currentURL(), '/home');
  });
});

test(' home/marketplace should list available posts',function(assert) {
  visit('/marketplace');

  andThen(function() {
    assert.equal(find('.post').length, 20);
  });
});

test(' home/new should link to creat post route', function(assert) {
  visit('home');
  click('.createPost');
  andThen(function() {
    assert.equal(currentURL(),'/home/post');
  });
});
