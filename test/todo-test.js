const assert = require('chai').assert
const ToDo = require('../lib/todo')
const toDoBox = require('../lib/todo-box')


describe('Todo', function(){
  context('ToDo constructor', function(){
    it('is a constructor function', function(){
      assert.isFunction(ToDo)
    });

    it('can instantiate a todo', function(){
      assert.isFunction(ToDo)
    });

    it('has a title', function(){
      todo = new ToDo('laundry', 'kids')
      assert.equal(todo.title, 'laundry')
    });

    it('has a body', function(){
      todo = new ToDo('laundry', 'kids')
      assert.equal(todo.title, 'laundry')
    });

    it('has a importance', function(){
      todo = new ToDo('laundry', 'kids')
      assert.equal(todo.importance, 'normal')
    });

    it('has an id', function(){
      todo = new ToDo('laundry', 'kids')
      assert.equal(todo.id, Date.now())
    });
  });

  context('updateTitle method', function(){
    it('is a method', function(){
      todo = new ToDo('laundry', 'kids')
      assert.isFunction(todo.updateTitle)
    });

    // it('can update the title', function(){
    //   todo = new ToDo('laundry', 'kids')
    //   toDoList[0].
    //   todo.updateTitle(todo.id, todo.title)
    //   assert.equal(todo.updateTitle)
    // });
  });

  context('updateBody method', function(){
    it('is a method', function(){
      todo = new ToDo('laundry', 'kids')
      assert.isFunction(todo.updateBody)
    });
  });

  context('updateImportance method', function(){
    it('is a method', function(){
      todo = new ToDo('laundry', 'kids')
      assert.isFunction(todo.updateImportance)
    });
  });
});
