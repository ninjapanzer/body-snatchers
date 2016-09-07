/*eslint-disable no-unused-vars */
import React from 'react'
/*eslint-enable no-unused-vars */
import Zepto from 'zeptojs'
import { render } from 'react-dom'
import FormComponent from './components/genericFormSaver/saver.js'
import Styles from './styles/dateComponent.scss'
import ClassNames from 'classnames'

const $formEls = Zepto('.serializableForm')

$formEls.forEach(function(el){
  var Zel = Zepto(el)
  var submit = Zel.find('[type=submit]')
  var submitClassNames = submit[0].className
  var parent = submit.parent()
  var entry = document.createElement('div')
  entry.className = ClassNames('inlinediv')
  submit.addClass('hidden')
  render(<FormComponent submitClassNames={submitClassNames} originalSubmit={submit[0]} formElement={el} />, entry)
  parent.append(entry)
})
