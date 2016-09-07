import React from 'react'
import Moment from 'moment'
import ClassNames from 'classnames'

import Alertify from '../../alertifyMultiple.js'

export default React.createClass({
  getInitialState() {
    return {
      focused: false,
      valid: true,
      time: this.props.timeValue
    };
  },
  gainedFocus: function(event){
    this.state.focused = true
    this.setState(this.state)
  },
  updateTime: function(event){
    this.setState({time: event.currentTarget.value})
  },
  cancel: function(event){
    this.state.time = this.props.timeValue
    this.state.focused = false
    this.state.valid = true
    this.setState(this.state)
  },
  addHour: function(event){
    this.setState({time: Moment(this.state.time, this.props.format, true).add(1, 'hours').format(this.props.format)})
  },
  subtractHour: function(event){
    this.setState({time: Moment(this.state.time, this.props.format, true).subtract(1, 'hours').format(this.props.format)})
  },
  addFiveMinutes: function(event){
    this.setState({time: Moment(this.state.time, this.props.format, true).add(5, 'minutes').format(this.props.format)})
  },
  subtractFiveMinutes: function(event){
    this.setState({time: Moment(this.state.time, this.props.format, true).subtract(5, 'minutes').format(this.props.format)})
  },
  am: function(){
    this.setState({time: this.state.time.replace(/pm/i, 'am')})
  },
  pm: function(){
    this.setState({time: this.state.time.replace(/am/i, 'pm')})
  },
  save: function(){
    this.props.save(this.state.time, this.afterSave)
  },
  afterSave: function(response){
    Alertify(response)
    this.state.focused = false
    this.setState(this.state)
  },
  validate: function(event){
    var updatedMoment = Moment(event.currentTarget.value, this.props.format, true)
    var valid;
    if(updatedMoment.isValid()){
      valid = true
    }else{
      valid = false
    }
    this.setState({valid: valid})
    this.updateTime(event)
  },
  render: function(){
    var focused = this.state.focused
    var save = this.save
    var addHour = this.addHour
    var subtractHour = this.subtractHour
    var addFiveMinutes = this.addFiveMinutes
    var subtractFiveMinutes = this.subtractFiveMinutes
    var am = this.am
    var pm = this.pm
    var cancel = this.cancel
    return (
      <div className={ClassNames({'error': !this.state.valid})}>
        <input
          ref="timeInput"
          onFocus={this.gainedFocus}
          onChange={this.validate}
          className='time'
          type='text'
          value={this.state.time}
        />
       {(()=>{
          if(focused){
            return (
              <div>
                <div>
                  <input type="button" value="+Hour" onClick={addHour}/>
                  <input type="button" value="-Hour" onClick={subtractHour}/>
                </div>
                <div>
                  <input type="button" value="+5 Min" onClick={addFiveMinutes}/>
                  <input type="button" value="-5 Min" onClick={subtractFiveMinutes}/>
                </div>
                <div>
                  <input type="button" value="pm" onClick={pm}/>
                  <input type="button" value="am" onClick={am}/>
                </div>
                <div>
                  <input type="button" value="Save" onClick={save}/>
                  <input type="button" value="Cancel" onClick={cancel}/>
                </div>
              </div>
            )
          }
        })()}
      </div>
    )
  }
})
