import React from 'react'
import Zepto from 'zeptojs'
import Base64 from 'base64it'

import Alertify from '../../alertifyMultiple.js'

export default React.createClass({
  getInitialState: function(){ return {} },
  createMarkup: function(html){
    var innerHTML = ''
    if(html){
      innerHTML = html
    } else if(this.props.originalSubmit.value){
      innerHTML = this.props.originalSubmit.value
    }else{
      innerHTML = 'Submit'
    }
    return {__html: innerHTML}
  },
  serializeForm: function(){
    return Zepto(this.props.formElement).serialize()
  },
  dispatchSavedEvent: function(data){
    var event = new CustomEvent('saved', {detail: data})
    this.props.formElement.dispatchEvent(event)
  },
  submitForm: function(e){
    e.preventDefault()
    var data = this.serializeForm()
    var self = this
    var dataString = JSON.stringify(data, null, 2)
    Zepto.get(this.props.formElement.action, {payload: Base64.strictEncode(dataString)}, function(response){
      var data = response[0]
      Alertify(data)
      self.dispatchSavedEvent(data)
    }, 'jsonp')
  },
  render: function(){
    var submitValue = this.props.originalSubmit.value
    var submitInnerHTML = this.props.originalSubmit.innerHTML
    return(<button type="submit" className={this.props.submitClassNames} value={submitValue} onClick={this.submitForm} dangerouslySetInnerHTML={this.createMarkup(submitInnerHTML)}></button>)
  }
})
