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
})
