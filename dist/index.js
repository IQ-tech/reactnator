module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _setStatic = __webpack_require__(6);

var _setStatic2 = _interopRequireDefault(_setStatic);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var setDisplayName = function setDisplayName(displayName) {
  return (0, _setStatic2.default)('displayName', displayName);
};

exports.default = setDisplayName;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = compose;
function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(function (a, b) {
    return function () {
      return a(b.apply(undefined, arguments));
    };
  });
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Reactnator = __webpack_require__(3);

var _Reactnator2 = _interopRequireDefault(_Reactnator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _Reactnator2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _classnames = __webpack_require__(4);

var _classnames2 = _interopRequireDefault(_classnames);

var _Reactnator = __webpack_require__(5);

var _Reactnator2 = _interopRequireDefault(_Reactnator);

var _dotPaginator = __webpack_require__(15);

var _dotPaginator2 = _interopRequireDefault(_dotPaginator);

__webpack_require__(16);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var isActive = function isActive() {
  var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var page = arguments[1];

  var _classNames;

  var pageNumberStyle = arguments[2];
  var activePageStyle = arguments[3];
  return (0, _classnames2.default)((_classNames = {}, _defineProperty(_classNames, pageNumberStyle, page !== '...'), _defineProperty(_classNames, 'reactnator__dots', page === '...'), _defineProperty(_classNames, activePageStyle, status), _classNames));
};

var arrowStyle = function arrowStyle(direction, pageNumberStyle) {
  return (0, _classnames2.default)('reactnator__arrow', 'reactnator__arrow--' + direction);
};

var Reactnator = function Reactnator(_ref) {
  var total = _ref.total,
      currentPage = _ref.currentPage,
      handleClick = _ref.handleClick,
      onChange = _ref.onChange,
      scrollTo = _ref.scrollTo,
      pageNumberStyle = _ref.pageNumberStyle,
      activePageStyle = _ref.activePageStyle,
      Action = _ref.Action;
  return React.createElement(
    'div',
    { className: 'reactnator' },
    React.createElement(
      'ul',
      { className: 'reactnator__content' },
      React.createElement(
        'li',
        { className: 'reactnator__page-number' },
        React.createElement(Action, {
          style: arrowStyle('left', pageNumberStyle),
          onClick: handleClick('less'),
          page: 'less'
        })
      ),
      (0, _dotPaginator2.default)({ total: total, activePage: currentPage }).map(function (page, index) {
        return React.createElement(
          'li',
          {
            key: index,
            className: isActive(currentPage === page, page, pageNumberStyle, activePageStyle)
          },
          React.createElement(
            Action,
            {
              onClick: handleClick(page),
              page: page
            },
            page
          )
        );
      }),
      React.createElement(
        'li',
        { className: 'reactnator__page-number' },
        React.createElement(Action, {
          onClick: handleClick('more'),
          style: arrowStyle('right', pageNumberStyle),
          page: 'more'
        })
      )
    )
  );
};

Reactnator.defaultProps = {
  total: 1,
  currentPage: 1,
  onChange: function onChange(e) {
    return console.log(e);
  },
  scrollTo: false,
  type: 'button',
  link: '#',
  pageNumberStyle: 'reactnator__page-number',
  activePageStyle: 'reactnator__page-number--active'
};

exports.default = (0, _Reactnator2.default)(Reactnator);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2016 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				classes.push(classNames.apply(null, arg));
			} else if (argType === 'object') {
				for (var key in arg) {
					if (hasOwn.call(arg, key) && arg[key]) {
						classes.push(key);
					}
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _compose = __webpack_require__(1);

var _compose2 = _interopRequireDefault(_compose);

var _setDisplayName = __webpack_require__(0);

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _handlers = __webpack_require__(7);

var _handlers2 = _interopRequireDefault(_handlers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = (0, _compose2.default)((0, _setDisplayName2.default)('src/enhancers/Reactnator/index.js'), _handlers2.default);

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var setStatic = function setStatic(key, value) {
  return function (BaseComponent) {
    /* eslint-disable no-param-reassign */
    BaseComponent[key] = value;
    /* eslint-enable no-param-reassign */
    return BaseComponent;
  };
};

exports.default = setStatic;

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _withHandlers = __webpack_require__(8);

var _withHandlers2 = _interopRequireDefault(_withHandlers);

var _compose = __webpack_require__(1);

var _compose2 = _interopRequireDefault(_compose);

var _setDisplayName = __webpack_require__(0);

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _scrollToTarget = __webpack_require__(14);

var _scrollToTarget2 = _interopRequireDefault(_scrollToTarget);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var isClient = function isClient() {
  return !!(typeof window !== 'undefined' && window.document && window.document.createElement);
};

var scrollTop = function scrollTop(_ref) {
  var selector = _ref.selector,
      speed = _ref.speed,
      offset = _ref.offset;

  isClient() ? (0, _scrollToTarget2.default)(selector, speed, offset) : null;
};

exports.default = (0, _compose2.default)((0, _setDisplayName2.default)('src/enhancers/Reactnator/handlers.js'), (0, _withHandlers2.default)({
  generateLink: function generateLink(_ref2) {
    var link = _ref2.link,
        currentPage = _ref2.currentPage,
        total = _ref2.total;
    return function (page) {
      if (page === 'more' && currentPage !== total) return { href: '' + link + (currentPage + 1) };else if (page === 'less' && currentPage > 1) return { href: '' + link + (currentPage - 1) };else if (page >= 1 && page <= total && page !== currentPage) return { href: '' + link + page };else return null;
    };
  }
}), (0, _withHandlers2.default)({
  handleClick: function handleClick(_ref3) {
    var currentPage = _ref3.currentPage,
        total = _ref3.total,
        onChange = _ref3.onChange,
        scrollTo = _ref3.scrollTo;
    return function (page) {
      return function () {
        if (page === '...') return null;

        if (page === 'more' && currentPage !== total) onChange(currentPage + 1);else if (page === 'less' && currentPage > 1) onChange(currentPage - 1);else if (page >= 1 && page <= total && page !== currentPage) onChange(page);else return null;

        scrollTo ? scrollTop(scrollTo) : null;
      };
    };
  },
  Action: function Action(_ref4) {
    var type = _ref4.type,
        generateLink = _ref4.generateLink;
    return function (_ref5) {
      var style = _ref5.style,
          onClick = _ref5.onClick,
          children = _ref5.children,
          page = _ref5.page;
      return type === 'link' ? React.createElement(
        'a',
        _extends({
          className: style
        }, generateLink(page)),
        children
      ) : React.createElement(
        'a',
        { className: style, onClick: onClick },
        children
      );
    };
  }
  // TODO add react-router instead of null
}));

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(10);

var _setDisplayName = __webpack_require__(0);

var _setDisplayName2 = _interopRequireDefault(_setDisplayName);

var _wrapDisplayName = __webpack_require__(11);

var _wrapDisplayName2 = _interopRequireDefault(_wrapDisplayName);

var _mapValues = __webpack_require__(13);

var _mapValues2 = _interopRequireDefault(_mapValues);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-console */


var withHandlers = function withHandlers(handlers) {
  return function (BaseComponent) {
    var factory = (0, _react.createFactory)(BaseComponent);

    var WithHandlers = function (_Component) {
      _inherits(WithHandlers, _Component);

      function WithHandlers() {
        var _temp, _this, _ret;

        _classCallCheck(this, WithHandlers);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = _possibleConstructorReturn(this, _Component.call.apply(_Component, [this].concat(args))), _this), _initialiseProps.call(_this), _temp), _possibleConstructorReturn(_this, _ret);
      }

      WithHandlers.prototype.componentWillReceiveProps = function componentWillReceiveProps() {
        this.cachedHandlers = {};
      };

      WithHandlers.prototype.render = function render() {
        return factory(_extends({}, this.props, this.handlers));
      };

      return WithHandlers;
    }(_react.Component);

    var _initialiseProps = function _initialiseProps() {
      var _this2 = this;

      this.cachedHandlers = {};
      this.handlers = (0, _mapValues2.default)(typeof handlers === 'function' ? handlers(this.props) : handlers, function (createHandler, handlerName) {
        return function () {
          var cachedHandler = _this2.cachedHandlers[handlerName];
          if (cachedHandler) {
            return cachedHandler.apply(undefined, arguments);
          }

          var handler = createHandler(_this2.props);
          _this2.cachedHandlers[handlerName] = handler;

          if (process.env.NODE_ENV !== 'production' && typeof handler !== 'function') {
            console.error(
            // eslint-disable-line no-console
            'withHandlers(): Expected a map of higher-order functions. ' + 'Refer to the docs for more info.');
          }

          return handler.apply(undefined, arguments);
        };
      });
    };

    if (process.env.NODE_ENV !== 'production') {
      return (0, _setDisplayName2.default)((0, _wrapDisplayName2.default)(BaseComponent, 'withHandlers'))(WithHandlers);
    }
    return WithHandlers;
  };
};

exports.default = withHandlers;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 9 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _getDisplayName = __webpack_require__(12);

var _getDisplayName2 = _interopRequireDefault(_getDisplayName);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var wrapDisplayName = function wrapDisplayName(BaseComponent, hocName) {
  return hocName + '(' + (0, _getDisplayName2.default)(BaseComponent) + ')';
};

exports.default = wrapDisplayName;

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var getDisplayName = function getDisplayName(Component) {
  if (typeof Component === 'string') {
    return Component;
  }

  if (!Component) {
    return undefined;
  }

  return Component.displayName || Component.name || 'Component';
};

exports.default = getDisplayName;

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
var mapValues = function mapValues(obj, func) {
  var result = {};
  /* eslint-disable no-restricted-syntax */
  for (var key in obj) {
    if (obj.hasOwnProperty(key)) {
      result[key] = func(obj[key], key);
    }
  }
  /* eslint-enable no-restricted-syntax */
  return result;
};

exports.default = mapValues;

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

!function(e,n){ true?module.exports=n():"function"==typeof define&&define.amd?define(n):e.scrollToTarget=n()}(this,function(){"use strict";var e=function(e,n,t){if("string"!=typeof e)throw new Error("Invalid selector. It must be a string");if("number"!=typeof n)throw new Error("Invalid speed. It must be a number.");if("number"!=typeof t)throw new Error("Invalid offset. It must be a number.");return!0},n=function(e,n){var t=e.getBoundingClientRect();return window.pageYOffset+t.top-n},t=function(e,n){return window.pageYOffset-e>0?Math.max(window.pageYOffset-n,e):Math.min(window.pageYOffset+n,e)},o=function(e,n){window.scrollInterval=setInterval(function(){var o=t(e,n),r=document.body.scrollHeight-window.innerHeight;window.scrollTo(0,o),(window.scrollTarget!==e||o>r||o===e)&&(delete window.scrollTarget,clearInterval(window.scrollInterval))},16)},r=function e(n,o){var r=t(n,o),i=document.body.scrollHeight-window.innerHeight;if(window.scrollTo(0,r),window.scrollTarget===n&&r<=i&&r!==n)return requestAnimationFrame(function(){return e(n,o)});delete window.scrollTarget},i=function(e,n){var t=e-window.pageYOffset,i=Math.abs(t/(n/1e3*60));window.scrollTarget=e,"requestAnimationFrame"in window?r(e,i):o(e,i)};return function(t){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:300,r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(e(t,o,r)){clearInterval(window.scrollInterval);var l=document.querySelector(t),a=n(l,r);i(a,o)}}});


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

/* eslint-disable */
var centerRule = function centerRule(_ref) {
  var total = _ref.total,
      activePage = _ref.activePage;
  return activePage - 1 <= 0 ? 1 : activePage === total ? activePage - 2 : activePage - 1;
};

var isNumber = function isNumber(value) {
  return typeof value === 'number';
};

var pagination = function pagination() {
  var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$total = _ref2.total,
      total = _ref2$total === undefined ? 1 : _ref2$total,
      _ref2$activePage = _ref2.activePage,
      activePage = _ref2$activePage === undefined ? 1 : _ref2$activePage;

  if (!isNumber(total)) {
    throw new TypeError('total should be a number');
  }

  if (!isNumber(activePage)) {
    throw new TypeError('activePage should be a number');
  }

  if (total <= 5) {
    return Array.from({ length: total }, function (_, i) {
      return i + 1;
    });
  }

  var visiblePages = 3;
  var pages = [1].concat(_toConsumableArray(Array.from({ length: visiblePages }, function (_, i) {
    return i + centerRule({ total: total, activePage: activePage });
  })), [total]);

  pages = pages.filter(function (page, index, array) {
    return array.indexOf(page) === index;
  });

  var firstPage = pages[0];
  var secondPage = pages[1];

  if (secondPage === firstPage + 2) {
    pages = [firstPage, firstPage + 1].concat(_toConsumableArray(pages.slice(1)));
  }

  var penultimatePage = pages[pages.length - 2];
  var lastPage = pages[pages.length - 1];

  if (penultimatePage === lastPage - 2) {
    pages = [].concat(_toConsumableArray(pages.slice(0, -1)), [lastPage - 1, lastPage]);
  }

  firstPage = pages[0];
  secondPage = pages[1];

  if (secondPage > firstPage + 2) {
    pages = [firstPage, '...'].concat(_toConsumableArray(pages.slice(1)));
  }

  penultimatePage = pages[pages.length - 2];
  lastPage = pages[pages.length - 1];

  if (penultimatePage < lastPage - 2) {
    pages = [].concat(_toConsumableArray(pages.slice(0, -1)), ['...', lastPage]);
  }

  return pages;
};

exports.default = pagination;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);