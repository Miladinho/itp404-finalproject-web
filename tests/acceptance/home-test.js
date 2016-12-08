import { test } from 'qunit';
import moduleForAcceptance from 'fraiche/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | home');

test('visiting /home', function(assert) {
  visit('/home');

  andThen(function() {
    assert.equal(currentURL(), '/home');
  });
});

test('should list available posts',function(assert) {

});

test('should link to post owners profile route', function(assert) {

});

test('should link to creat post route', function(assert) {

})
