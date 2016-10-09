const $ = require('jquery')

const controller = {
  renderCompletedToDos: false,
  documentReady: function() {
    this.updateModelFromLS()
    this.renderModelToDOM()
  },
  saveButtonClick: function() {
    this.updateLSFromModel()
    this.renderModelToDOM()
    this.clearFields()
  },
  toDoSearchInputKeyup: function() {
    this.renderModelToDOM()
  },
  removeToDoButtonClick: function() {
    this.renderModelToDOM()
    this.updateLSFromModel()
  },
  completeTaskButtonClick: function() {
    this.renderModelToDOM()
    this.updateLSFromModel()
  },
  showCompletedToDosButtonClick: function() {
    this.renderCompletedToDos = !this.renderCompletedToDos
    this.renderModelToDOM()
    this.updateLSFromModel()
  },
  upvoteToDoButtonClick: function() {
    this.renderModelToDOM()
    this.updateLSFromModel()
  },
  downvoteToDoButtonClick: function() {
    this.renderModelToDOM()
    this.updateLSFromModel()
  },
  toDoTitleFocusOut: function() {
    this.updateLSFromModel()
  },
  toDoBodyFocusOut: function() {
    this.updateLSFromModel()
  },
  searchFilterKeyup: function() {
    this.renderModelToDOM()
  },
  updateLSFromModel: function() {
    let activeToDoList = []
    let completedToDoList = toDoBox.completedToDoList
    activeToDoList = toDoBox.activeToDoList.filter(function(toDo) {
      return toDo.complete === false
    })
    function isPresent(toDo) {
      completedToDoList.forEach(function(toDo) {
        return
      })
    }
    //check if todo has .complete == true
    //check if it doesn't exist in the compltedtodolist array
      //pushit into completedtodolist
    toDoBox.activeToDoList.forEach(function(toDo) {
      if (toDo.complete === true && Boolean(completedToDoList.find(function(toDo) {
        
      }
        completedToDoList.push(toDo)
      }
    })
    console.log('completedToDoList')
    console.log(completedToDoList)
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
  renderModelToDOM: function () {
    this.renderActiveToDosToDOM()
    this.renderCompletedToDosToDOM()
  },
  renderActiveToDosToDOM: function () {
    $('.todo-list').html('')
    toDoBox.activeToDoList.forEach(function(toDo) {
      $('.todo-list').prepend(toDo.renderToDoToHTML())
    })
    toDoBox.filterToDos($('#search-bar').val())
    $('.todo-section[complete|="true"]').addClass('complete')
  },
  renderCompletedToDosToDOM: function() {
    console.log('render')
    console.log(this.renderCompletedToDos === true)
    if (this.renderCompletedToDos === true) {
      $('.completed-todos').html('')
      toDoBox.completedToDoList.forEach(function(toDo) {
        $('.completed-todos').prepend(toDo.renderToDoToHTML())
      })
    }
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
