const assert = require('chai').assert
const ToDo = require('../../lib/todo')
const toDoBox = require('../../lib/todo-box')

describe('Todo-box | Unit Test', function(){
  context('toDoBox Object', function(){
    it('has an activeToDoList array property', function(){
      let activeToDoList = toDoBox.activeToDoList
      assert.isArray(activeToDoList)
    });
    it('has a completedToDoList array property', function(){
      let completedToDoList = toDoBox.completedToDoList
      assert.isArray(completedToDoList)
    });
  });
  context('addToDo method', function(){
    it('is a method', function(){
      assert.isFunction(toDoBox.addToDo)
    });
    it('is a method', function(){
      assert.isFunction(toDoBox.addToDo)
    });
  });
  context('removeToDo method', function(){
    it('is a method', function(){
      assert.isFunction(toDoBox.addToDo)
    });
  });
});
