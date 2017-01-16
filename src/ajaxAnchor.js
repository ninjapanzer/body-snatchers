/*eslint-disable no-unused-vars */
import React from 'react'
/*eslint-enable no-unused-vars */
import Zepto from 'zeptojs'
import { render } from 'react-dom'
import AjaxAnchorComponent from './components/ajaxAnchor/ajaxAnchorComponent.js'
import ClassNames from 'classnames'

window.AjaxAnchor = {
  headers: {}
}
window.AjaxAnchor.initialize = function(){
  var $ajaxAnchorEls = Zepto('.ajaxAnchor:not([data-reactroot])')
  $ajaxAnchorEls.forEach(function(el){
    var Zel = Zepto(el)
    var anchorClassNames = el.className
    Zel.addClass('hidden')
    var parent = Zel.parent()
    var entry = document.createElement('div')
    entry.ClassName = ClassNames('inlinediv')
    render(<AjaxAnchorComponent anchorClassNames={anchorClassNames} anchorElement={el} />, entry)
    parent.append(entry)
  })
}

window.AjaxAnchor.initialize();
