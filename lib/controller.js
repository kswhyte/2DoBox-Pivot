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
    let activeToDoList = []
    let completedToDoList = []
    activeToDoList = toDoBox.activeToDoList.filter(function(toDo) {
      return toDo.complete === false
    })
    completedToDoList = toDoBox.activeToDoList.filter(function(toDo) {
      return toDo.complete === true
    })
    localStorage.setItem("activeToDoList", JSON.stringify(activeToDoList));
    localStorage.setItem("completedToDoList", JSON.stringify(completedToDoList));
  },
  updateModelFromLS: function() {
    retrievedActiveToDoList = JSON.parse(localStorage.getItem('activeToDoList'))
    if (retrievedActiveToDoList) {
      toDoBox.activeToDoList = retrievedActiveToDoList.map(function(toDo) {
        return new ToDo(toDo.title, toDo.body, toDo.importance, toDo.id, toDo.complete)
      })
    }
    retrievedCompletedToDoList = JSON.parse(localStorage.getItem('completedToDoList'))
    if (retrievedCompletedToDoList) {
      toDoBox.completedToDoList = retrievedCompletedToDoList.map(function(toDo) {
        return new ToDo(toDo.title, toDo.body, toDo.importance, toDo.id, toDo.complete)
      })
    }
  },
  renderModelToDom: function () {
    $('.todo-list').html('')
    toDoBox.activeToDoList.forEach(function(toDo) {
      $('.todo-list').prepend(toDo.renderToDoToHTML())
    })
    toDoBox.filterToDos($('#search-bar').val())
    $('.todo-section[complete|="true"]').addClass('complete')
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
