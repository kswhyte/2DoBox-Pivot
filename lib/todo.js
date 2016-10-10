function ToDo(title, body, importance = 'normal', id = Date.now(), complete = false) {
  this.id = id;
  this.title = title;
  this.body = body;
  this.importance = importance;
  this.complete = complete;
  this.completeClass = function() {
    if (this.complete === true) {
      return 'complete'
    } else {
      return ''
    }
  }
}
ToDo.prototype = {
  upvoteToDoButtonClick: function(toDoId) {
    this.updateImportance(toDoId, 'upvote')
  },
  downvoteToDoButtonClick: function(toDoId) {
    this.updateImportance(toDoId, 'downvote')
  },
  // ------
  completeTaskButtonClick: function(toDoId) {
    this.completeToDo(toDoId)
    // this.markToDoComplete
  },
  toDoTitleFocusOut(toDoId, newTitle) {
    this.updateTitle(toDoId, newTitle)
  },
  toDoBodyFocusOut(toDoId, newBody) {
    this.updateBody(toDoId, newBody)
  },
  renderToDoToHTML: function(toDo) {
    return `
      <section class="todo-section ${this.completeClass()}" id="${this.id}" importance="${this.importance}">
        <h3 contenteditable="true" class="todo-title">${this.title}</h3>
        <button class="remove-todo" tabindex="-1" role="presentation"></button>
        <h3 contenteditable="true" class="todo-body"> ${this.body}</h3>
        <button class="complete-task-button" tabindex="-1" role="presentation"></button>
        <div class="vote" tabindex="0" role="group">
          <button class="upvote" tabindex="-1" role="presentation"></button>
          <article class="downvote" tabindex="-1" role="presentation"></article>
          <p class="importance-control">importance: ${this.importance}</p>
        </div>
      </section>
    `;
  },
  updateTitle: function(toDoId, newTitle) {
    let toDo = toDoBox.findToDo(toDoId);
    toDo.title = newTitle;
  },
  updateBody: function(toDoId, newBody) {
    let toDo = toDoBox.findToDo(toDoId);
    toDo.body = newBody;
  },
  updateImportance: function(toDoId, voteChoice) {
    let votePath = { 'upvote': ['none', 'low', 'normal', 'high', 'critical'], 'downvote': ['critical', 'high', 'normal', 'low', 'none'] }
    toDo = toDoBox.findToDo(toDoId);
    let index = votePath[voteChoice].indexOf(toDo.importance)
    let importanceList = votePath[voteChoice]
    if (index < 4) {
      index++
      toDo.importance = importanceList[index]
    }
  },
  completeToDo: function(toDoId) {
    let toDo = toDoBox.findToDo(toDoId)
    toDo.complete = !toDo.complete
  }
}

module.exports = ToDo

toDoBox = require('./todo-box')
