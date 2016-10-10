const $ = require('jquery')

const toDoBox = {
  activeToDoList: [],
  completedToDoList: [],
  saveButtonClick: function(titleText, bodyText) {
    this.addToDo(titleText, bodyText)
  },
  removeToDoButtonClick: function(toDoId) {
    this.removeToDo(toDoId)
  },
  addToDo: function(titleText, bodyText) {
    let toDo = new ToDo(titleText, bodyText)
    this.activeToDoList.push(toDo)
  },
  removeToDo: function(toDoId) {
    this.activeToDoList = this.activeToDoList.filter(function(currentToDo) {
      return currentToDo.id != toDoId;
    })
    this.completedToDoList = this.completedToDoList.filter(function(currentToDo) {
      return currentToDo.id != toDoId;
    })
  },
  findToDo: function(toDoId) {
    let activeToDos = this.activeToDoList.filter(function(currentToDo) {
      return currentToDo.id === toDoId;
    })
    let completedToDos = this.completedToDoList.filter(function(currentToDo) {
      return currentToDo.id === toDoId;
    })
    foundToDo = activeToDos.concat(completedToDos)
    return foundToDo[0]
  }
}

module.exports = toDoBox

const ToDo = require('./todo')
