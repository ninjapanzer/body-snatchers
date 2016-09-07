/*eslint-disable no-unused-vars */
import React from 'react'
/*eslint-enable no-unused-vars */
import Zepto from 'zeptojs'
import { render } from 'react-dom'
import DateComponent from './components/dates/dateComponent.js'
import Styles from './styles/dateComponent.scss'

const $dateEls = Zepto('.eventDateHelper')

$dateEls.forEach(function(el){
  var Zel = Zepto(el)
  var entry = document.createElement('div')
  var parent = Zel.parent()
  var saveEndpoint = Zel.data('endpoint')
  Zel.addClass('hidden')
  render(<DateComponent saveEndpoint={saveEndpoint} originalElement={el} />, entry)
  parent.append(entry)
})
