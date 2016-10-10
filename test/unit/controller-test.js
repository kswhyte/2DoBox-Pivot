var assert = require('chai').assert
var dom = require('../../lib/dom')
var ToDo = require('../../lib/todo')
var toDoBox = require('../../lib/todo-box')
var controller = require('../../lib/controller')

describe('Controller | Unit Tests', function(){
  context('updateModelFromLS', function(){
    it('is a method', function(){
      assert.isFunction(controller.updateModelFromLS)
    })
  })
  context('updateLSFromModel', function(){
    it('is a method', function(){
      assert.isFunction(controller.updateLSFromModel)
    })
  })
  context('setToDoListToLS', function(){
    it('is a method', function(){
      assert.isFunction(controller.setToDoListToLS)
    })
  })
  context('setCompletedToDoListToLS', function(){
    it('is a method', function(){
      assert.isFunction(controller.setCompletedToDoListToLS)
    })
  })
  context('updateModelFromLS', function(){
    it('is a method', function(){
      assert.isFunction(controller.updateModelFromLS)
    })
  })
  context('renderActiveToDosToDOM', function(){
    it('is a method', function(){
      assert.isFunction(controller.renderActiveToDosToDOM)
    })
  })
  context('renderCompletedToDosToDOM', function(){
    it('is a method', function(){
      assert.isFunction(controller.renderCompletedToDosToDOM)
    })
  })
  context('clearFields', function(){
    it('is a method', function(){
      assert.isFunction(controller.clearFields)
    })
  })
  context('updateLSFromModel', function(){

    it('should have a method called updateLSFromModel', function(){
      assert.isFunction(controller.updateLSFromModel);
    });
    it('should save all toDos in toDoList in localStorage', function(){
      localStorage.setItem('toDoList', JSON.stringify([]))
      toDoBox.toDoList = []
      toDoBox.addToDo('title1', 'body1')
      toDoBox.addToDo('title2', 'body2')
      toDoBox.addToDo('title3', 'body3')
      controller.updateLSFromModel()

      assert.equal(toDoBox.toDoList.length, JSON.parse(localStorage.getItem('toDoList')).length);
    });
    it('should preserve the toDo title, body, idea, & quality', function() {
      localStorage.setItem('toDoList', JSON.stringify([]))
      toDoBox.toDoList = []
      toDoBox.addToDo('title1', 'body1')
      toDoBox.addToDo('title2', 'body2')
      toDoBox.addToDo('title3', 'body3')
      controller.updateLSFromModel()

      assert.equal(toDoBox.toDoList[1].title, JSON.parse(localStorage.getItem('toDoList'))[1].title)
      assert.equal(toDoBox.toDoList[1].body, JSON.parse(localStorage.getItem('toDoList'))[1].body)
      assert.equal(toDoBox.toDoList[1].quality, JSON.parse(localStorage.getItem('toDoList'))[1].quality)
      assert.equal(toDoBox.toDoList[1].id, JSON.parse(localStorage.getItem('toDoList'))[1].id)
    });
  });
  context('updateModelFromLS', function(){

    it('should have a method called updateModelFromLS', function(){
      assert.isFunction(controller.updateModelFromLS);
    });
    it('if toDoList exists in localStorage, it should set toDoBox.toDoList to parsed ls toDoList', function(){
      localStorage.setItem('toDoList', JSON.stringify([]))
      toDoBox.toDoList = []
      toDoBox.addToDo('title1', 'body1')
      toDoBox.addToDo('title2', 'body2')
      toDoBox.addToDo('title3', 'body3')
      controller.updateLSFromModel()
      toDoBox.toDoList = []
      controller.updateModelFromLS()

      assert.equal(toDoBox.toDoList.length, JSON.parse(localStorage.getItem('toDoList')).length);
    });
    it('Items stored in toDoBox.toDoList from LS should be toDo Objects', function(){
      localStorage.setItem('toDoList', JSON.stringify([]))

      assert.instanceOf(toDoBox.toDoList[0], ToDo);
    });
  });
  context('renderModelToDom', function(){
    it('should have a method called renderModelToDom', function(){
      assert.isFunction(controller.renderModelToDom)
    });

  });
});
