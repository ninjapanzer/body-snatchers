webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/samuraipanzer/workrepos/savvysoftworks-components/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/samuraipanzer/workrepos/savvysoftworks-components/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _zeptojs = __webpack_require__(33);
	
	var _zeptojs2 = _interopRequireDefault(_zeptojs);
	
	var _reactDom = __webpack_require__(34);
	
	var _dateComponent = __webpack_require__(173);
	
	var _dateComponent2 = _interopRequireDefault(_dateComponent);
	
	var _dateComponent3 = __webpack_require__(184);
	
	var _dateComponent4 = _interopRequireDefault(_dateComponent3);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	/*eslint-enable no-unused-vars */
	
	
	var $dateEls = (0, _zeptojs2.default)('.eventDateHelper'); /*eslint-disable no-unused-vars */
	
	
	$dateEls.forEach(function (el) {
	  var Zel = (0, _zeptojs2.default)(el);
	  var entry = document.createElement('div');
	  var parent = Zel.parent();
	  var saveEndpoint = Zel.data('endpoint');
	  Zel.addClass('hidden');
	  (0, _reactDom.render)(_react2.default.createElement(_dateComponent2.default, { saveEndpoint: saveEndpoint, originalElement: el }), entry);
	  parent.append(entry);
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/samuraipanzer/workrepos/savvysoftworks-components/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "dates.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 173:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/samuraipanzer/workrepos/savvysoftworks-components/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/samuraipanzer/workrepos/savvysoftworks-components/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _moment = __webpack_require__(174);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _zeptojs = __webpack_require__(33);
	
	var _zeptojs2 = _interopRequireDefault(_zeptojs);
	
	var _dateInputComponent = __webpack_require__(175);
	
	var _dateInputComponent2 = _interopRequireDefault(_dateInputComponent);
	
	var _timeInputComponent = __webpack_require__(179);
	
	var _timeInputComponent2 = _interopRequireDefault(_timeInputComponent);
	
	var _appDispatcher = __webpack_require__(180);
	
	var _appDispatcher2 = _interopRequireDefault(_appDispatcher);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'dateComponent',
	
	  getInitialState: function getInitialState() {
	    var originalElement = this.props.originalElement;
	    var sourceValue = originalElement.value;
	    var momentDateFormat = originalElement.getAttribute('data-dateformat');
	    var momentTimeFormat = originalElement.getAttribute('data-timeformat');
	    return this.setupState(sourceValue, momentDateFormat, momentTimeFormat);
	  },
	  setupState: function setupState(datetime, dateFormat, timeFormat) {
	    var fullFormat = [dateFormat, timeFormat].join(' ');
	    var sourceMoment = (0, _moment2.default)(datetime, fullFormat);
	    var state = {
	      moment: sourceMoment,
	      dateFormat: dateFormat,
	      timeFormat: timeFormat,
	      date: sourceMoment.format(dateFormat),
	      time: sourceMoment.format(timeFormat)
	    };
	    return state;
	  },
	  saveDate: function saveDate(value, callback) {
	    var time = this.state.time;
	    var fullString = [value, time].join(' ');
	    var self = this;
	    _zeptojs2.default.post(this.props.saveEndpoint, { payload: fullString }, function (data, status, xhr) {
	      callback(data);
	      self.props.originalElement.value = data.datetime;
	      self.setState(self.setupState(data.datetime, self.state.dateFormat, self.state.timeFormat));
	    });
	  },
	  saveTime: function saveTime(value, callback) {
	    var date = this.state.date;
	    var fullString = [date, value].join(' ');
	    var self = this;
	    _zeptojs2.default.post(this.props.saveEndpoint, { payload: fullString }, function (data, status, xhr) {
	      callback(data);
	      self.props.originalElement.value = data.datetime;
	      self.setState(self.setupState(data.datetime, self.state.dateFormat, self.state.timeFormat));
	    });
	  },
	  updateState: function updateState(event) {
	    var currentTarget = event.currentTarget;
	    var klass = event.currentTarget.className;
	    this.state[klass] = currentTarget.value;
	    this.setState(this.state);
	  },
	  render: function render() {
	    var state = this.state;
	    var updateState = this.updateState;
	    return _react2.default.createElement(
	      'div',
	      null,
	      _react2.default.createElement(_dateInputComponent2.default, { save: this.saveDate, format: state.dateFormat, dateValue: state.date }),
	      _react2.default.createElement(_timeInputComponent2.default, { save: this.saveTime, format: state.timeFormat, timeValue: state.time })
	    );
	  }
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/samuraipanzer/workrepos/savvysoftworks-components/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "dateComponent.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 174:
/***/ function(module, exports) {

	module.exports = moment;

/***/ },

/***/ 175:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/samuraipanzer/workrepos/savvysoftworks-components/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/samuraipanzer/workrepos/savvysoftworks-components/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _moment = __webpack_require__(174);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _classnames = __webpack_require__(176);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _alertifyMultiple = __webpack_require__(177);
	
	var _alertifyMultiple2 = _interopRequireDefault(_alertifyMultiple);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'dateInputComponent',
	  getInitialState: function getInitialState() {
	    return {
	      focused: false,
	      valid: true,
	      date: this.props.dateValue
	    };
	  },
	
	  gainedFocus: function gainedFocus(event) {
	    this.state.focused = true;
	    this.setState(this.state);
	  },
	  updateDate: function updateDate(event) {
	    this.setState({ date: event.currentTarget.value });
	  },
	  cancel: function cancel(event) {
	    this.state.date = this.props.dateValue;
	    this.state.focused = false;
	    this.state.valid = true;
	    this.setState(this.state);
	  },
	  addDay: function addDay(event) {
	    var input = this.refs.dateInput;
	    this.setState({ date: (0, _moment2.default)(this.state.date, this.props.format, true).add(1, 'days').format(this.props.format) });
	  },
	  subtractDay: function subtractDay(event) {
	    var input = this.refs.dateInput;
	    this.setState({ date: (0, _moment2.default)(this.state.date, this.props.format, true).subtract(1, 'days').format(this.props.format) });
	  },
	  save: function save() {
	    this.props.save(this.state.date, this.afterSave);
	  },
	  afterSave: function afterSave(response) {
	    (0, _alertifyMultiple2.default)(response);
	    this.state.focused = false;
	    this.setState(this.state);
	  },
	  validate: function validate(event) {
	    var updatedMoment = (0, _moment2.default)(event.currentTarget.value, this.props.format, true);
	    var valid;
	    if (updatedMoment.isValid()) {
	      valid = true;
	    } else {
	      valid = false;
	    }
	    this.setState({ valid: valid });
	    this.updateDate(event);
	  },
	  render: function render() {
	    var focused = this.state.focused;
	    var addDay = this.addDay;
	    var subtractDay = this.subtractDay;
	    var save = this.save;
	    var cancel = this.cancel;
	    return _react2.default.createElement(
	      'div',
	      { className: (0, _classnames2.default)({ 'error': !this.state.valid }) },
	      _react2.default.createElement('input', { ref: 'dateInput',
	        onFocus: this.gainedFocus,
	        onChange: this.validate,
	        className: 'date',
	        type: 'text',
	        value: this.state.date
	      }),
	      function () {
	        if (focused) {
	          return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement('input', { type: 'button', value: '+Day', onClick: addDay }),
	              _react2.default.createElement('input', { type: 'button', value: '-Day', onClick: subtractDay })
	            ),
	            _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement('input', { type: 'button', value: 'Save', onClick: save }),
	              _react2.default.createElement('input', { type: 'button', value: 'Cancel', onClick: cancel })
	            )
	          );
	        }
	      }()
	    );
	  }
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/samuraipanzer/workrepos/savvysoftworks-components/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "dateInputComponent.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 179:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/samuraipanzer/workrepos/savvysoftworks-components/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/samuraipanzer/workrepos/savvysoftworks-components/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _react = __webpack_require__(1);
	
	var _react2 = _interopRequireDefault(_react);
	
	var _moment = __webpack_require__(174);
	
	var _moment2 = _interopRequireDefault(_moment);
	
	var _classnames = __webpack_require__(176);
	
	var _classnames2 = _interopRequireDefault(_classnames);
	
	var _alertifyMultiple = __webpack_require__(177);
	
	var _alertifyMultiple2 = _interopRequireDefault(_alertifyMultiple);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	exports.default = _react2.default.createClass({
	  displayName: 'timeInputComponent',
	  getInitialState: function getInitialState() {
	    return {
	      focused: false,
	      valid: true,
	      time: this.props.timeValue
	    };
	  },
	
	  gainedFocus: function gainedFocus(event) {
	    this.state.focused = true;
	    this.setState(this.state);
	  },
	  updateTime: function updateTime(event) {
	    this.setState({ time: event.currentTarget.value });
	  },
	  cancel: function cancel(event) {
	    this.state.time = this.props.timeValue;
	    this.state.focused = false;
	    this.state.valid = true;
	    this.setState(this.state);
	  },
	  addHour: function addHour(event) {
	    this.setState({ time: (0, _moment2.default)(this.state.time, this.props.format, true).add(1, 'hours').format(this.props.format) });
	  },
	  subtractHour: function subtractHour(event) {
	    this.setState({ time: (0, _moment2.default)(this.state.time, this.props.format, true).subtract(1, 'hours').format(this.props.format) });
	  },
	  addFiveMinutes: function addFiveMinutes(event) {
	    this.setState({ time: (0, _moment2.default)(this.state.time, this.props.format, true).add(5, 'minutes').format(this.props.format) });
	  },
	  subtractFiveMinutes: function subtractFiveMinutes(event) {
	    this.setState({ time: (0, _moment2.default)(this.state.time, this.props.format, true).subtract(5, 'minutes').format(this.props.format) });
	  },
	  am: function am() {
	    this.setState({ time: this.state.time.replace(/pm/i, 'am') });
	  },
	  pm: function pm() {
	    this.setState({ time: this.state.time.replace(/am/i, 'pm') });
	  },
	  save: function save() {
	    this.props.save(this.state.time, this.afterSave);
	  },
	  afterSave: function afterSave(response) {
	    (0, _alertifyMultiple2.default)(response);
	    this.state.focused = false;
	    this.setState(this.state);
	  },
	  validate: function validate(event) {
	    var updatedMoment = (0, _moment2.default)(event.currentTarget.value, this.props.format, true);
	    var valid;
	    if (updatedMoment.isValid()) {
	      valid = true;
	    } else {
	      valid = false;
	    }
	    this.setState({ valid: valid });
	    this.updateTime(event);
	  },
	  render: function render() {
	    var focused = this.state.focused;
	    var save = this.save;
	    var addHour = this.addHour;
	    var subtractHour = this.subtractHour;
	    var addFiveMinutes = this.addFiveMinutes;
	    var subtractFiveMinutes = this.subtractFiveMinutes;
	    var am = this.am;
	    var pm = this.pm;
	    var cancel = this.cancel;
	    return _react2.default.createElement(
	      'div',
	      { className: (0, _classnames2.default)({ 'error': !this.state.valid }) },
	      _react2.default.createElement('input', {
	        ref: 'timeInput',
	        onFocus: this.gainedFocus,
	        onChange: this.validate,
	        className: 'time',
	        type: 'text',
	        value: this.state.time
	      }),
	      function () {
	        if (focused) {
	          return _react2.default.createElement(
	            'div',
	            null,
	            _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement('input', { type: 'button', value: '+Hour', onClick: addHour }),
	              _react2.default.createElement('input', { type: 'button', value: '-Hour', onClick: subtractHour })
	            ),
	            _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement('input', { type: 'button', value: '+5 Min', onClick: addFiveMinutes }),
	              _react2.default.createElement('input', { type: 'button', value: '-5 Min', onClick: subtractFiveMinutes })
	            ),
	            _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement('input', { type: 'button', value: 'pm', onClick: pm }),
	              _react2.default.createElement('input', { type: 'button', value: 'am', onClick: am })
	            ),
	            _react2.default.createElement(
	              'div',
	              null,
	              _react2.default.createElement('input', { type: 'button', value: 'Save', onClick: save }),
	              _react2.default.createElement('input', { type: 'button', value: 'Cancel', onClick: cancel })
	            )
	          );
	        }
	      }()
	    );
	  }
	});
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/samuraipanzer/workrepos/savvysoftworks-components/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "timeInputComponent.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 180:
/***/ function(module, exports, __webpack_require__) {

	/* REACT HOT LOADER */ if (false) { (function () { var ReactHotAPI = require("/Users/samuraipanzer/workrepos/savvysoftworks-components/node_modules/react-hot-api/modules/index.js"), RootInstanceProvider = require("/Users/samuraipanzer/workrepos/savvysoftworks-components/node_modules/react-hot-loader/RootInstanceProvider.js"), ReactMount = require("react/lib/ReactMount"), React = require("react"); module.makeHot = module.hot.data ? module.hot.data.makeHot : ReactHotAPI(function () { return RootInstanceProvider.getRootInstances(ReactMount); }, React); })(); } try { (function () {
	
	'use strict';
	
	Object.defineProperty(exports, "__esModule", {
	  value: true
	});
	
	var _flux = __webpack_require__(181);
	
	var _flux2 = _interopRequireDefault(_flux);
	
	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
	
	var Dispatcher = _flux2.default.Dispatcher;
	
	exports.default = new Dispatcher();
	
	/* REACT HOT LOADER */ }).call(this); } finally { if (false) { (function () { var foundReactClasses = module.hot.data && module.hot.data.foundReactClasses || false; if (module.exports && module.makeHot) { var makeExportsHot = require("/Users/samuraipanzer/workrepos/savvysoftworks-components/node_modules/react-hot-loader/makeExportsHot.js"); if (makeExportsHot(module, require("react"))) { foundReactClasses = true; } var shouldAcceptModule = true && foundReactClasses; if (shouldAcceptModule) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "appDispatcher.js" + ": " + err.message); } }); } } module.hot.dispose(function (data) { data.makeHot = module.makeHot; data.foundReactClasses = foundReactClasses; }); })(); } }

/***/ },

/***/ 181:
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */
	
	module.exports.Dispatcher = __webpack_require__(182);


/***/ },

/***/ 182:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright (c) 2014-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 * 
	 * @preventMunge
	 */
	
	'use strict';
	
	exports.__esModule = true;
	
	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }
	
	var invariant = __webpack_require__(183);
	
	var _prefix = 'ID_';
	
	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *   CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *         case 'city-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */
	
	var Dispatcher = (function () {
	  function Dispatcher() {
	    _classCallCheck(this, Dispatcher);
	
	    this._callbacks = {};
	    this._isDispatching = false;
	    this._isHandled = {};
	    this._isPending = {};
	    this._lastID = 1;
	  }
	
	  /**
	   * Registers a callback to be invoked with every dispatched payload. Returns
	   * a token that can be used with `waitFor()`.
	   */
	
	  Dispatcher.prototype.register = function register(callback) {
	    var id = _prefix + this._lastID++;
	    this._callbacks[id] = callback;
	    return id;
	  };
	
	  /**
	   * Removes a callback based on its token.
	   */
	
	  Dispatcher.prototype.unregister = function unregister(id) {
	    !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.unregister(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	    delete this._callbacks[id];
	  };
	
	  /**
	   * Waits for the callbacks specified to be invoked before continuing execution
	   * of the current callback. This method should only be used by a callback in
	   * response to a dispatched payload.
	   */
	
	  Dispatcher.prototype.waitFor = function waitFor(ids) {
	    !this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Must be invoked while dispatching.') : invariant(false) : undefined;
	    for (var ii = 0; ii < ids.length; ii++) {
	      var id = ids[ii];
	      if (this._isPending[id]) {
	        !this._isHandled[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): Circular dependency detected while ' + 'waiting for `%s`.', id) : invariant(false) : undefined;
	        continue;
	      }
	      !this._callbacks[id] ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatcher.waitFor(...): `%s` does not map to a registered callback.', id) : invariant(false) : undefined;
	      this._invokeCallback(id);
	    }
	  };
	
	  /**
	   * Dispatches a payload to all registered callbacks.
	   */
	
	  Dispatcher.prototype.dispatch = function dispatch(payload) {
	    !!this._isDispatching ? process.env.NODE_ENV !== 'production' ? invariant(false, 'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.') : invariant(false) : undefined;
	    this._startDispatching(payload);
	    try {
	      for (var id in this._callbacks) {
	        if (this._isPending[id]) {
	          continue;
	        }
	        this._invokeCallback(id);
	      }
	    } finally {
	      this._stopDispatching();
	    }
	  };
	
	  /**
	   * Is this Dispatcher currently dispatching.
	   */
	
	  Dispatcher.prototype.isDispatching = function isDispatching() {
	    return this._isDispatching;
	  };
	
	  /**
	   * Call the callback stored with the given id. Also do some internal
	   * bookkeeping.
	   *
	   * @internal
	   */
	
	  Dispatcher.prototype._invokeCallback = function _invokeCallback(id) {
	    this._isPending[id] = true;
	    this._callbacks[id](this._pendingPayload);
	    this._isHandled[id] = true;
	  };
	
	  /**
	   * Set up bookkeeping needed when dispatching.
	   *
	   * @internal
	   */
	
	  Dispatcher.prototype._startDispatching = function _startDispatching(payload) {
	    for (var id in this._callbacks) {
	      this._isPending[id] = false;
	      this._isHandled[id] = false;
	    }
	    this._pendingPayload = payload;
	    this._isDispatching = true;
	  };
	
	  /**
	   * Clear bookkeeping used for dispatching.
	   *
	   * @internal
	   */
	
	  Dispatcher.prototype._stopDispatching = function _stopDispatching() {
	    delete this._pendingPayload;
	    this._isDispatching = false;
	  };
	
	  return Dispatcher;
	})();
	
	module.exports = Dispatcher;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ },

/***/ 183:
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(process) {/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */
	
	"use strict";
	
	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */
	
	var invariant = function (condition, format, a, b, c, d, e, f) {
	  if (process.env.NODE_ENV !== 'production') {
	    if (format === undefined) {
	      throw new Error('invariant requires an error message argument');
	    }
	  }
	
	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error('Invariant Violation: ' + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	    }
	
	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};
	
	module.exports = invariant;
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(3)))

/***/ }

});
//# sourceMappingURL=dates.component.js.map