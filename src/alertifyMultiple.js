var alertify = require('alertifyjs')

var validMessages = [
  'info',
  'message',
  'success',
  'warning',
  'error'
]

var prepNotification = function(message, style){
  return function(){
    alertify.notify(message, style, 3, function () {})
  }
}

var intersection = function(dictionary){
  return function(item) {
    return dictionary.indexOf(item) != -1
  }
}

var sortByArray = function(sourceOrderArray){
  var sortingArr = sourceOrderArray
  return function sortFunction(a,b){
    var indexA = sortingArr.indexOf(a)
    var indexB = sortingArr.indexOf(b)
    if(indexA < indexB) {
        return -1
    }else if(indexA > indexB) {
        return 1
    }else{
        return 0
    }
  }
}

var prepareNotifications = function(data, keys){
  var preparedNotifications = []

  keys.forEach(function(category){
    var messages = data[category]
    if(Array.isArray(messages)){
      messages.forEach(function(message){
        preparedNotifications.push(prepNotification(message, category))
      })
    }else if(messages){
      preparedNotifications.push(prepNotification(messages, category))
    }
  })

  return preparedNotifications
}

var identityCall = function(fn, position, collection) {
  var timeout = 100 * position
  window.setTimeout(fn, timeout)
}

var notify = function(response) {
  var messageCategories = Object.keys(response)
                                .filter(intersection(validMessages))
                                .sort(sortByArray(validMessages))
  var preparedNotifications = prepareNotifications(response, messageCategories)
  preparedNotifications.forEach(identityCall)
}

export default notify
