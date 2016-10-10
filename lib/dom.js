const $ = require('jquery')

const dom = {
  $saveButton: $('#save-button'),
  $titleInput: $('#title-input'),
  $bodyInput: $('#body-input'),
  $toDoList: $('.todo-list'),
  $searchBar: $('#search-bar')
}

$(document).ready(function() {
  controller.documentReady()
});

$('#save-button').on('click', function() {
  toDoBox.saveButtonClick(dom.$titleInput.val(), dom.$bodyInput.val())
  controller.saveButtonClick()
});

$('#body-input').keypress(function(event) {
  if (event.which == 13) {
    toDoBox.saveButtonClick(dom.$titleInput.val(), dom.$bodyInput.val())
    controller.saveButtonClick()
  }
});

$('body').on('focusout', '.todo-title', function(e){
  let toDoId = parseInt(e.target.parentElement.id)
  let newTitle =  $(this).text();
  ToDo.prototype.toDoTitleFocusOut(toDoId, newTitle)
  controller.toDoTitleFocusOut()
});

$('body').on('keypress', '.todo-title', function(e) {
  if (event.which == 13) {
      event.preventDefault();
      $(this).blur();
  }
});

$('body').on('focusout', '.todo-body', function(e){
  let toDoId = parseInt(e.target.parentElement.id)
  let newBody =  $(this).text();
  ToDo.prototype.toDoBodyFocusOut(toDoId, newBody)
  controller.toDoBodyFocusOut()
});

$('body').on('keypress', '.todo-body', function(e) {
  if (event.which == 13) {
      event.preventDefault();
      $(this).blur();
  }
});

$('body').on('click', '.remove-todo', function(e){
  let toDoId = parseInt(e.target.parentElement.id)
  toDoBox.removeToDoButtonClick(toDoId)
  controller.removeToDoButtonClick()
});

$('body').on('click', '.complete-task-button', function(e) {
  let toDoId = parseInt(e.target.parentElement.id)
  ToDo.prototype.completeTaskButtonClick(toDoId)
  controller.completeTaskButtonClick()
})

$('body').on('click', '.upvote', function(e) {
  let toDoId = parseInt(e.target.parentElement.parentElement.id)
  ToDo.prototype.upvoteToDoButtonClick(toDoId)
  controller.upvoteToDoButtonClick()
});

$('body').on('click', '.downvote', function(e) {
  let toDoId = parseInt(e.target.parentElement.parentElement.id)
  ToDo.prototype.downvoteToDoButtonClick(toDoId)
  controller.downvoteToDoButtonClick()
});

$('#search-bar' ).keyup(function() {
  controller.searchFilterKeyup()
});

$('#show-completed-todos-button').on('click', function() {
  controller.showCompletedToDosButtonClick()
})

$('#show-all-todos-button').on('click', function() {
  controller.showAllToDosButtonClick()
})



module.exports = dom

const controller = require('./controller')
const ToDo = require('./todo')
const toDoBox = require('./todo-box')
