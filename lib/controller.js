const $ = require('jquery')


const controller = {
  documentReady: function() {
    this.updateModelFromLS()
    this.renderModelToDom()
  },
  saveButtonClick: function() {
    this.updateLSFromModel()
    this.renderModelToDom()
    this.clearFields()
  },
  toDoSearchInputKeyup: function() {
    this.renderModelToDom()
  },
  removeToDoButtonClick: function() {
    this.renderModelToDom()
    this.updateLSFromModel()
  },
  // -------
  completeTaskButtonClick: function() {
    this.renderModelToDom()
    this.updateLSFromModel()
  },
  upvoteToDoButtonClick: function() {
    this.renderModelToDom()
    this.updateLSFromModel()
  },
  downvoteToDoButtonClick: function() {
    this.renderModelToDom()
    this.updateLSFromModel()
  },
  toDoTitleFocusOut: function() {
    this.updateLSFromModel()
  },
  toDoBodyFocusOut: function() {
    this.updateLSFromModel()
  },
  searchFilterKeyup: function() {
    this.renderModelToDom()
  },
  updateLSFromModel: function() {
    localStorage.setItem("todoList", JSON.stringify(toDoBox.toDoList));
  },
  updateModelFromLS: function() {
    retrievedToDoList = JSON.parse(localStorage.getItem('todoList'))
    if (retrievedToDoList) {
      toDoBox.toDoList = retrievedToDoList.map(function(toDo) {
        return new ToDo(toDo.title, toDo.body, toDo.importance, toDo.id)
      })
    }
  },
  renderModelToDom: function () {
    $('.todo-list').html('')
    toDoBox.toDoList.forEach(function(toDo) {
      $('.todo-list').prepend(toDo.renderToDoToHTML())
    })
    toDoBox.filterToDos($('#search-bar').val())
  },
  clearFields: function() {
    $('#title-input').val('')
    $('#body-input').val('')
    $('#search-bar').val('')
    $('#title-input').focus()
  }
}

module.exports = controller

const ToDo = require('./todo')
const toDoBox = require('./todo-box')
const dom = require('./dom')
