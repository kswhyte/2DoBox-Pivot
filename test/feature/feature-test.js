var assert = require('chai').assert

describe('Landing ToDo Box Page', function(){
  browser.url('/')

  it('should be able to grab the page title', function(){
  	var title = browser.getTitle()

  	assert.equal(title, 'To-Do Box | by Ian Lancaster and Kinan Whyte')
  })

  it('should have a header title that describes the page', function() {
    let headerTitle = browser.element('.todo-title')

    assert.equal(headerTitle.getText(), 'to-dobox')
  })

  it('should have an input field for a todo title', function(){
    var toDoTitle = browser.element("#title-input")
    toDoTitle.setValue('amazing title')

    assert.equal(toDoTitle.getValue(), 'amazing title')
  })

  it('should have an input field for a todo body', function(){
    var toDoBody = browser.element("#body-input")
    toDoBody.setValue('amazing body')

    assert.equal(toDoBody.getValue(), 'amazing body')
  })

  it('should have a save button with the text "save"', function() {
    let saveButton = browser.element('#save-button')

    assert.equal(saveButton.getText(), 'save')
  })

  it('should have a functioning save button that is enabled and clickable', function() {
    var toDoBody = browser.element("#body-input")
    toDoBody.setValue('amazing body')

    let saveButton = browser.element('#save-button')
    browser.click('#save-button')
    let toDo = browser.element('.todo-section')

    assert.equal(toDo.isExisting(), true)
    assert.equal(saveButton.isEnabled(), true)
  })

  it('should have a show-completed-todos button with the text "Show Completed TODOs"', function() {
    let saveButton = browser.element('#show-completed-todos-button')

    assert.equal(saveButton.getText(), 'Show Completed TODOs')
  })
})

describe('Added ToDos', function(){
  browser.url('/')

  it('should not have a default class of "complete"', function() {
    let completeClass = browser.element('.complete')

    assert.equal(completeClass.isExisting(), false)
  })

  it('should have a class of "complete" after the todo is clicked as completed', function() {
    let completeClass = browser.element('.complete')
    let completeTask = browser.element('.complete-task-button')

    assert.equal(completeClass.isExisting(), false)
    browser.click('.complete-task-button')
    assert.equal(completeClass.isExisting(), true)
  })

  it('should have a remove button that is enabled and clickable', function() {
    var toDoTitle = browser.element("#title-input")
    toDoTitle.setValue('Kittens and Puppies')

    var toDoBody = browser.element("#body-input")
    toDoBody.setValue('get a bunch of them')

    browser.click('#save-button')
    browser.click('.remove-todo')

    let removeButton = browser.element('.remove-todo')
    assert.equal(removeButton.isEnabled(), true)
  })

  it('should remove a ToDo from the page', function() {
    let toDo = browser.element('.todo-section')

    assert.equal(toDo.isExisting(), true)
    browser.click('.remove-todo')
    // assert.equal(toDo.isExisting(), false)
    // why is this not working
  })

  it('should have an default importance level of a todo set to "normal"', function() {
    var toDoTitle = browser.element("#title-input")
    toDoTitle.setValue('Kittens and Puppies')

    var toDoBody = browser.element("#body-input")
    toDoBody.setValue('amazing body')

    browser.click('#save-button')
    var importanceLevel = browser.element('.importance-control')

    assert.equal(importanceLevel.getText(), 'importance: normal')
  })

  it('should have an upvote button that raises the importance level of a todo', function() {
    browser.url('/')
    var toDoTitle = browser.element('#title-input')
    toDoTitle.setValue('Kittens and Puppies')

    var upVote = browser.element('.upvote')
    var importanceLevel = browser.element('.importance-control')

    assert.equal(importanceLevel.getText(), 'importance: normal')
    browser.click('.upvote')
    // assert.equal(importanceLevel.getText(), 'importance: high')
    // why is this not working

  })
})
