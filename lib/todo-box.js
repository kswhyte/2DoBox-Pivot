const $ = require('jquery')

const toDoBox = {
  toDoList: [],
  saveButtonClick: function(titleText, bodyText) {
    this.addToDo(titleText, bodyText)
  },
  removeToDoButtonClick: function(toDoId) {
    this.removeToDo(toDoId)
  },
  searchFilterKeyup: function(filterWord) {
    this.filterToDos(filterWord)
  },
  addToDo: function(titleText, bodyText) {
    let toDo = new ToDo(titleText, bodyText)
    this.toDoList.push(toDo)
  },
  removeToDo: function(toDoId) {
    this.toDoList = this.toDoList.filter(function(currentToDo) {
      return currentToDo.id != toDoId;
    })
  },
  findToDo: function(toDoId) {
    let toDos = this.toDoList.filter(function(currentToDo) {
      return currentToDo.id === toDoId;
    })
    return toDos[0]
  },
  filterToDos: function(filterWord) {
    let toDoIDontWant = $('.todo-section:not(:contains(' + filterWord + '))' )
    let toDoIWant = $('.todo-section:contains(' + filterWord + ')' )
    toDoIDontWant.hide()
    toDoIWant.show()
  }
}

module.exports = toDoBox

const ToDo = require('./todo')
