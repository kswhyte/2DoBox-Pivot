function ToDo(title, body, importance = 'normal', id = Date.now()) {
  this.id = id;
  this.title = title;
  this.body = body;
  this.importance = importance;
}
ToDo.prototype = {
  upvoteToDoButtonClick: function(toDoId) {
    this.updateImportance(toDoId, 'upvote')
  },
  downvoteToDoButtonClick: function(toDoId) {
    this.updateImportance(toDoId, 'downvote')
  },
  toDoTitleFocusOut(toDoId, newTitle) {
    this.updateTitle(toDoId, newTitle)
  },
  toDoBodyFocusOut(toDoId, newBody) {
    this.updateBody(toDoId, newBody)
  },
  renderToDoToHTML: function(toDo) {
    return `
      <section class="todo-section" id=${this.id}>
        <h3 contenteditable="true" class="todo-title">${this.title}</h3>
        <button class="remove-todo"></button>
        <p contenteditable="true" class="body-input"> ${this.body}</p>
        <button class="complete-task"></button>
        <div class="vote">
          <button class="upvote"></button>
          <article class="downvote"></article>
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
  }
}

module.exports = ToDo

toDoBox = require('./todo-box')
