var assert = require('chai').assert
var dom = require('../../lib/dom')
var ToDo = require('../../lib/todo')
var toDoBox = require('../../lib/todo-box')
var controller = require('../../lib/controller')


describe('Controller | Unit Tests', function(){
  context('updateModelFromLS', function(){
    controller.updateModelFromLS()

    it('should have a method called updateModelFromLS', function(){
      assert.isFunction(controller.updateModelFromLS);
    });
    if (localStorage.getItem('toDoList')) {
      it('if toDoList exists in localStorage, it should set toDoBox.toDoList to parsed ls toDoList', function(){
        assert.equal(toDoBox.toDoList.length, JSON.parse(localStorage.getItem('toDoList')).length);
      });
    }
    if(toDoBox.toDoList.length > 0) {
      it('Items stored in toDoBox.toDoList from LS should be toDo Objects', function(){
        assert.instanceOf(toDoBox.toDoList[0], ToDo);
      });
    }
  });
  context('updateLSFromModel', function(){
    toDoBox.addToDo('title1', 'body1')
    toDoBox.addToDo('title2', 'body2')
    toDoBox.addToDo('title3', 'body3')
    controller.updateLSFromModel()
    console.log(toDoBox.toDoList);

    it('should have a method called updateLSFromModel', function(){
      assert.isFunction(controller.updateLSFromModel);
    });
    it('should save all toDos in toDoList in localStorage', function(){
      assert.equal(toDoBox.toDoList.length, JSON.parse(localStorage.getItem('toDoList')).length);
    });
    it('should preserve the toDo title, body, idea, & quality', function() {
      assert.equal(toDoBox.toDoList[1].title, JSON.parse(localStorage.getItem('toDoList'))[1].title)
      assert.equal(toDoBox.toDoList[1].body, JSON.parse(localStorage.getItem('toDoList'))[1].body)
      assert.equal(toDoBox.toDoList[1].quality, JSON.parse(localStorage.getItem('toDoList'))[1].quality)
      assert.equal(toDoBox.toDoList[1].id, JSON.parse(localStorage.getItem('toDoList'))[1].id)
    });
  });
  context('renderModelToDom', function(){
    // console.log(browser.element('.todo-list'));
    it('should have a method called renderModelToDom', function(){
      assert.isFunction(controller.renderModelToDom)
    });

  });
});
