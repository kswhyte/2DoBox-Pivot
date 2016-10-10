const $ = require('jquery')

const controller = {
  renderCompletedToDos: false,
  showAllToDos: false,
  filteredImportance: {
    none: false,
    low: false,
    normal: false,
    high: false,
    critical: false
  },
  documentReady: function() {
    this.updateModelFromLS()
    this.renderModelToDOM()
  },
  titleInputKeypress: function() {
    this.renderModelToDOM()
  },
  bodyInputKeypress: function() {
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
  },
  showAllToDosButtonClick: function() {
    this.showAllToDos = !this.showAllToDos
    this.renderModelToDOM()
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
  noneFilterClick: function() {
    this.filteredImportance.none = !this.filteredImportance.none
    this.renderModelToDOM()
  },
  lowFilterClick: function() {
    this.filteredImportance.low = !this.filteredImportance.low
    this.renderModelToDOM()
  },
  normalFilterClick: function() {
    this.filteredImportance.normal = !this.filteredImportance.normal
    this.renderModelToDOM()
  },
  highFilterClick: function() {
    this.filteredImportance.high = !this.filteredImportance.high
    this.renderModelToDOM()
  },
  criticalFilterClick: function() {
    this.filteredImportance.critical = !this.filteredImportance.critical
    this.renderModelToDOM()
  },
  updateLSFromModel: function() {
    let newToDos = []
    let newCompletedToDos = []
    let oldToDoList = toDoBox.activeToDoList
    let oldCompletedToDoList = toDoBox.completedToDoList
    this.setToDoListToLS(newToDos, oldToDoList, oldCompletedToDoList)
    this.setCompletedToDoListToLS(newCompletedToDos, oldToDoList, oldCompletedToDoList)
  },
  setToDoListToLS: function(newToDos, oldToDoList, oldCompletedToDoList) {
    newToDos = oldCompletedToDoList.filter(function(currentToDo) {
      return currentToDo.complete === false
    })
    let oldToDos = oldToDoList.filter(function(currentToDo){
      return currentToDo.complete === false
    })

    let activeToDoList = oldToDos.concat(newToDos)
    localStorage.setItem("activeToDoList", JSON.stringify(activeToDoList));
  },
  setCompletedToDoListToLS: function(newCompletedToDos, oldToDoList, oldCompletedToDoList) {
    newCompletedToDos = oldToDoList.filter(function(currentToDo) {
      return currentToDo.complete === true
    })
    let oldCompletedToDos = oldCompletedToDoList.filter(function(currentToDo){
      return currentToDo.complete === true
    })

    let completedToDoList = oldCompletedToDos.concat(newCompletedToDos)
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
    this.renderCharacterCounters()
    this.setButtonDisabledStatus()
  },
  setButtonDisabledStatus: function() {
    $('#save-button').prop('disabled', Boolean(!($('#title-input').val() && $('#title-input').val().length < 120 && $('#body-input').val() && $('#body-input').val().length < 120)))
  },
  renderCharacterCounters: function() {
    $('#title-input-count').text($('#title-input').val().length)
    $('#body-input-count').text($('#body-input').val().length)
  },
  renderActiveToDosToDOM: function () {
    // reset dom html
    $('.todo-list').html('')

    //filter out toDos by importance
    let toDosFilteredByImportance = toDoBox.activeToDoList
    if (this.filteredImportance.none || this.filteredImportance.low || this.filteredImportance.normal || this.filteredImportance.high || this.filteredImportance.critical)
      toDosFilteredByImportance = toDoBox.activeToDoList.filter(function(toDo) {
        let none = (function(){ if (this.filteredImportance.none === true) { return 'none' } else { return '' } }.bind(this)())
        let low = (function(){ if (this.filteredImportance.low === true) { return 'low' } else { return '' } }.bind(this)())
        let normal = (function(){ if (this.filteredImportance.normal === true) { return 'normal' } else { return '' } }.bind(this)())
        let high = (function(){ if (this.filteredImportance.high === true) { return 'high' } else { return '' } }.bind(this)())
        let critical = (function(){ if (this.filteredImportance.critical === true) { return 'critical' } else { return '' } }.bind(this)())
        return (toDo.importance === none || toDo.importance === low || toDo.importance === normal || toDo.importance === high || toDo.importance === critical)
      }, this)

    //filter out toDos by search value
    let toDosFilteredBySearch = []
    toDosFilteredByImportance.forEach(function(toDo) {
      if (toDo.title.indexOf($('#search-bar').val()) > -1 || toDo.body.indexOf($('#search-bar').val()) > -1) {
        toDosFilteredBySearch.push(toDo);
      }
    })

    // sort the toDos by timestamp id
    let toDosSortedById = toDosFilteredBySearch.sort(function(a, b) {
      return b.id-a.id;
    })

    // set the display count to all or 10
    let count = (function() {
      if (this.showAllToDos === true) {
        return toDosSortedById.length
      }
      if (toDosSortedById.length < 10) {
        return toDosSortedById.length
      } else {
        return 10
      }
    }.bind(this)())

    // append html to dom
    for (var i = 0; i < count; i++) {
      $('.todo-list').append(toDosSortedById[i].renderToDoToHTML())
    }

  },
  renderCompletedToDosToDOM: function() {
    if (this.renderCompletedToDos === true) {
      $('.completed-todos').html('')
      toDoBox.completedToDoList.forEach(function(toDo) {
        $('.completed-todos').prepend(toDo.renderToDoToHTML())
      })
    } else {
      $('.completed-todos').html('')
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
