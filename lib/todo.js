
function ToDo(title, body, quality = 'swill', id = Date.now()) {
  this.id = id;
  this.title = title;
  this.body = body;
  this.quality = quality;
}
ToDo.prototype = {
  upvoteToDoButtonClick: function(toDoId) {
    this.updateQuality(toDoId, 'upvote')
  },
  downvoteToDoButtonClick: function(toDoId) {
    this.updateQuality(toDoId, 'downvote')
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
        <div class="vote">
          <button class="upvote"></button>
          <article class="downvote"></article>
          <p class="quality-control">quality: ${this.quality}</p>
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
  updateQuality: function(toDoId, voteChoice) {
    let votePath = { 'upvote': ['swill', 'plausible', 'genius'], 'downvote': ['genius', 'plausible', 'swill'] }
    toDo = toDoBox.findToDo(toDoId);
    let index = votePath[voteChoice].indexOf(toDo.quality)
    let qualityList = votePath[voteChoice]
    if (index < 2) {
      index++
      toDo.quality = qualityList[index]
    }
  }
}

module.exports = ToDo

toDoBox = require('./todo-box')
