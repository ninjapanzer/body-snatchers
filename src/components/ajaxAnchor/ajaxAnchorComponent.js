import React from 'react'
import ReactDOM from 'react-dom'
import Zepto from 'zeptojs'

import Alertify from '../../alertifyMultiple.js'

import Dispatcher from '../../appDispatcher.js'

export default React.createClass({
  getInitialState: function(){ return {} },
  dispatchSavedEvent: function(event, data){
    var event = new CustomEvent("clicked", {detail: {data: data, target: event}});
    this.props.anchorElement.dispatchEvent(event);
  },
  handleClick: function(e){
    e.preventDefault()
    var el = this.props.anchorElement
    var Zel = Zepto(el)
    var method = Zel.attr('data-method').toLowerCase()
    var action = Zel.attr('href')
    var data = this.props.data ? this.props.data : {}

    var self = this;
    var currentTarget = e.currentTarget;
    Zepto.ajax({
      type: method,
      url: action,
      data: data,
      dataType: 'text/html',
      beforeSend: function(xhr){
        xhr.setRequestHeader('X-CSRF-Token', window.AjaxAnchor.headers['X-CSRF-Token'])
      },
      success: function(response){
        Alertify(response)
        self.dispatchSavedEvent(currentTarget, response)
      }
    })
  },
  render: function(){
    var el = this.props.anchorElement
    return(<a className={this.props.anchorClassNames} href="#" onClick={this.handleClick} dangerouslySetInnerHTML={{__html: el.innerHTML}}></a>)
  }
})
