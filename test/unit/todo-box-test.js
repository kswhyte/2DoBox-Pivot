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
// <<<<<<< HEAD
    it('is a method', function(){
      assert.isFunction(toDoBox.addToDo)
    });
// =======

    it('is a method', function(){
      assert.isFunction(toDoBox.addToDo)
    });

    it('adds a ToDo object to the todo list', function(){
      toDoBox.toDoList = []
      toDoBox.addToDo('hello', 'world')
      assert.isObject(toDoBox.toDoList[0])
      assert.instanceOf(toDoBox.toDoList[0], ToDo)
    });

    it('sets its first parameter to the title property of a todo object', function(){
      toDoBox.toDoList = []
      toDoBox.addToDo('hello', 'world')
      assert.equal(toDoBox.toDoList[0].title, 'hello')
    });

    it('sets its second parameter to the body property of a todo object', function(){
      toDoBox.toDoList = []
      toDoBox.addToDo('hello', 'world')
      assert.equal(toDoBox.toDoList[0].body, 'world')
    });
// >>>>>>> master
  });
  context('removeToDo method', function(){
    it('is a method', function(){
      assert.isFunction(toDoBox.addToDo)
    });
// <<<<<<< HEAD
// =======

    it('removes a ToDo object from the todo list', function(){
      toDoBox.toDoList = []
      toDoBox.addToDo('hello', 'world')
      assert.equal(toDoBox.toDoList.length, 1)
      toDoBox.removeToDo(toDoBox.toDoList[0].id)
      assert.equal(toDoBox.toDoList.length, 0)
    });
// >>>>>>> master
  });
  context('findToDo method', function(){
    it('is a method', function(){
      assert.isFunction(toDoBox.findToDo)
    });
// <<<<<<< HEAD
// =======

    it('finds a ToDo object in the todo list with a matching id', function(){
      toDoBox.toDoList = []
      toDoBox.addToDo('hello', 'world')
      var targetToDo = toDoBox.findToDo(toDoBox.toDoList[0].id)
      assert.instanceOf(targetToDo, ToDo);
      assert.equal(targetToDo.id, toDoBox.toDoList[0].id)
    });
// >>>>>>> master
  });
  context('filterToDos method', function(){
    it('is a method', function(){
      assert.isFunction(toDoBox.filterToDos)
    });
  });
});
