import React from 'react'
import Moment from 'moment'
import Zepto from 'zeptojs'

import DateInput from './dateInputComponent.js'
import TimeInput from './timeInputComponent.js'

import Dispatcher from '../../appDispatcher.js'

export default React.createClass({
  getInitialState: function(){
    var originalElement = this.props.originalElement
    var sourceValue = originalElement.value
    var momentDateFormat = originalElement.getAttribute('data-dateformat')
    var momentTimeFormat = originalElement.getAttribute('data-timeformat')
    return this.setupState(sourceValue, momentDateFormat, momentTimeFormat)
  },
  setupState: function(datetime, dateFormat, timeFormat){
    var fullFormat = [dateFormat, timeFormat].join(' ')
    var sourceMoment = Moment(datetime, fullFormat)
    var state = {
      moment:     sourceMoment,
      dateFormat: dateFormat,
      timeFormat: timeFormat,
      date:       sourceMoment.format(dateFormat),
      time:       sourceMoment.format(timeFormat)
    }
    return state
  },
  saveDate: function(value, callback){
    var time = this.state.time
    var fullString = [value, time].join(' ')
    var self = this
    Zepto.post(this.props.saveEndpoint, { payload: fullString }, function(data, status, xhr){
      callback(data)
      self.props.originalElement.value = data.datetime
      self.setState(self.setupState(data.datetime, self.state.dateFormat, self.state.timeFormat))
    })
  },
  saveTime: function(value, callback){
    var date = this.state.date
    var fullString = [date, value].join(' ')
    var self = this
    Zepto.post(this.props.saveEndpoint, { payload: fullString }, function(data, status, xhr){
      callback(data)
      self.props.originalElement.value = data.datetime
      self.setState(self.setupState(data.datetime, self.state.dateFormat, self.state.timeFormat))
    })
  },
  updateState: function(event){
    var currentTarget = event.currentTarget
    var klass = event.currentTarget.className
    this.state[klass] = currentTarget.value
    this.setState(this.state)
  },
  render: function(){
    var state = this.state
    var updateState = this.updateState;
    return (
      <div>
        <DateInput save={this.saveDate} format={state.dateFormat} dateValue={state.date}/>
        <TimeInput save={this.saveTime} format={state.timeFormat} timeValue={state.time}/>
      </div>
    )
  }
})
