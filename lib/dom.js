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

$('.todo-list').on('focusout', '.todo-title', function(e){
  let toDoId = parseInt(e.target.parentElement.id)
  let newTitle =  $(this).text();
  ToDo.prototype.toDoTitleFocusOut(toDoId, newTitle)
  controller.toDoTitleFocusOut()
});

$('.todo-list').on('keypress', '.todo-title', function(e) {
  if (event.which == 13) {
      event.preventDefault();
      $(this).blur();
  }
});

$('.todo-list').on('focusout', '.body-input', function(e){
  let toDoId = parseInt(e.target.parentElement.id)
  let newBody =  $(this).text();
  ToDo.prototype.toDoBodyFocusOut(toDoId, newBody)
  controller.toDoBodyFocusOut()
});

$('.todo-list').on('keypress', '.body-input', function(e) {
  if (event.which == 13) {
      event.preventDefault();
      $(this).blur();
  }
});

$('.todo-list').on('click', '.remove-todo', function(e){
  let toDoId = parseInt(e.target.parentElement.id)
  toDoBox.removeToDoButtonClick(toDoId)
  controller.removeToDoButtonClick()
});

// ----------
$('.todo-list').on('click', 'complete-task', function(e) {
  let toDoId = parseInt(e.target.parentElement.id)
  toDoBox.completeTaskButtonClick(toDoId)
  controller.completeTaskButtonClick()
})

$('.todo-list').on('click', '.upvote', function(e) {
  let toDoId = parseInt(e.target.parentElement.parentElement.id)
  ToDo.prototype.upvoteToDoButtonClick(toDoId)
  controller.upvoteToDoButtonClick()
});

$('.todo-list').on('click', '.downvote', function(e) {
  let toDoId = parseInt(e.target.parentElement.parentElement.id)
  ToDo.prototype.downvoteToDoButtonClick(toDoId)
  controller.downvoteToDoButtonClick()
});

$( "#search-bar" ).keyup(function() {
  let filterWord = $(this).val();
  toDoBox.searchFilterKeyup(filterWord)
});

module.exports = dom

const controller = require('./controller')
const ToDo = require('./todo')
const toDoBox = require('./todo-box')
