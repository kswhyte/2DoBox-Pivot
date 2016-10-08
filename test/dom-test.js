const assert = require('chai').assert
//
// describe('Dom', function(){
//   context('Feature', function(){
//     it('Dom feature test', function(){
//     });
//   });
// })

describe('welcome page', function(){
  it('should be able to grab the page title', function(){
     browser.url('/');
     var title = browser.getTitle()
     assert.equal(title, 'hello world');
  });
});
