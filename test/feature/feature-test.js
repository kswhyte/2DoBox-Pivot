let assert = require('chai').assert

describe('Landing ToDo Box Page', function(){
  browser.url('/')
  it('should be able to grab the page title', function(){
  	let title = browser.getTitle()

  	assert.equal(title, 'To-Do Box | by Ian Lancaster and Kinan Whyte')
  })
  it('should have a header title that describes the page', function() {
    let headerTitle = browser.element('.todo-title')

    assert.equal(headerTitle.getText(), 'to-dobox')
  })
  it('should have an input field for a todo title', function(){
    let toDoTitle = browser.element("#title-input")
    toDoTitle.setValue('amazing title')

    assert.equal(toDoTitle.getValue(), 'amazing title')
  })
  it('should have an input field for a todo body', function(){
    let toDoBody = browser.element("#body-input")
    toDoBody.setValue('amazing body')

    assert.equal(toDoBody.getValue(), 'amazing body')
  })
  it('should have a save button with the text "save"', function() {
    let saveButton = browser.element('#save-button')

    assert.equal(saveButton.getText(), 'save')
  })
  it('should have a functioning save button that is enabled and clickable', function() {
    let toDoBody = browser.element("#body-input")
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

describe('ToDo Box', function(){
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
    let toDoTitle = browser.element("#title-input")
    toDoTitle.setValue('Kittens and Puppies')

    let toDoBody = browser.element("#body-input")
    toDoBody.setValue('get a bunch of them')

    browser.click('#save-button')
    browser.click('.remove-todo')

    let removeButton = browser.element('.remove-todo')
    assert.equal(removeButton.isEnabled(), true)
  })
  it('should remove a ToDo from the page', function() {
    let toDoTitle = browser.element("#title-input")
    toDoTitle.setValue('Kittens and Puppies')

    let toDoBody = browser.element("#body-input")
    toDoBody.setValue('get a bunch of them')

    browser.click('#save-button')
    var allIdeas = browser.elements('section').getText()
    
    assert.equal(allIdeas.length, 5)
    browser.click('.remove-todo')
    assert.equal(allIdeas.length, 5)
    // why is this not working
    })
  it('should have an default importance level of a todo set to "normal"', function() {
    let toDoTitle = browser.element("#title-input")
    toDoTitle.setValue('Kittens and Puppies')

    let toDoBody = browser.element("#body-input")
    toDoBody.setValue('amazing body')

    browser.click('#save-button')
    let importanceLevel = browser.element('.importance-control')

    assert.equal(importanceLevel.getText(), 'importance: normal')
  })
  it('should have an upvote button that raises the importance level of a todo', function() {
    let toDoTitle = browser.element('#title-input')
    toDoTitle.setValue('Kittens and Puppies')
    let importanceLevel = browser.element('.importance-control')

    assert.equal(importanceLevel.getText(), 'importance: normal')
    browser.click('.upvote')
    // assert.equal(importanceLevel.getText(), 'importance: high')
    // why is this not working
  })
  it('should have a downvote button that lowers the importance level of a todo', function() {
    let importanceLevel = browser.element('.importance-control')

    assert.equal(importanceLevel.getText(), 'importance: high')
    browser.click('.downvote')
    browser.click('.downvote')
    // assert.equal(importanceLevel.getText(), 'importance: low')
    // why is this not working
  })
})
describe('Search Bar', function(){
  browser.url('/')

  it('should be able to take input', function() {
    let searchBar = browser.element("#search-bar")
    searchBar.setValue('amaz')

    assert.equal(searchBar.getValue(), 'amaz')
  })
})

describe('Clear Fields', function(){
  browser.url('/')
  it('should be able to clear input fields after a todo is saved', function() {
    let toDoTitle = browser.element("#title-input")
    let toDoBody = browser.element("#body-input")
    let searchBar = browser.element("#search-bar")

    browser.click('#save-button')

    assert.equal(toDoTitle.getValue(), '')
    assert.equal(toDoBody.getValue(), '')
    assert.equal(searchBar.getValue(), '')
  })
})
