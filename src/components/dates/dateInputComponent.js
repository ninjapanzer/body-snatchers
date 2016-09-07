import React from 'react'
import Moment from 'moment'
import ClassNames from 'classnames'

import Alertify from '../../alertifyMultiple.js'

export default React.createClass({
  getInitialState() {
    return {
      focused: false,
      valid: true,
      date: this.props.dateValue
    };
  },
  gainedFocus: function(event){
    this.state.focused = true
    this.setState(this.state)
  },
  updateDate: function(event){
    this.setState({date: event.currentTarget.value})
  },
  cancel: function(event){
    this.state.date = this.props.dateValue
    this.state.focused = false
    this.state.valid = true
    this.setState(this.state)
  },
  addDay: function(event){
    var input = this.refs.dateInput
    this.setState({date: Moment(this.state.date, this.props.format, true).add(1, 'days').format(this.props.format)})
  },
  subtractDay: function(event){
    var input = this.refs.dateInput
    this.setState({date: Moment(this.state.date, this.props.format, true).subtract(1, 'days').format(this.props.format)})
  },
  save: function(){
    this.props.save(this.state.date, this.afterSave)
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
    this.updateDate(event)
  },
  render: function(){
    var focused = this.state.focused
    var addDay = this.addDay
    var subtractDay = this.subtractDay
    var save = this.save
    var cancel = this.cancel
    return (
      <div className={ClassNames({'error': !this.state.valid})}>
        <input ref="dateInput"
          onFocus={this.gainedFocus}
          onChange={this.validate}
          className={'date'}
          type='text'
          value={this.state.date}
        />
        {(()=>{
          if(focused){
            return (
              <div>
                <div>
                  <input type="button" value="+Day" onClick={addDay}/>
                  <input type="button" value="-Day" onClick={subtractDay}/>
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
