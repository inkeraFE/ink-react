(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.inkReact = {}));
}(this, function (exports) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function unwrapExports (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /*
  object-assign
  (c) Sindre Sorhus
  @license MIT
  */
  /* eslint-disable no-unused-vars */
  var getOwnPropertySymbols = Object.getOwnPropertySymbols;
  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var propIsEnumerable = Object.prototype.propertyIsEnumerable;

  function toObject(val) {
  	if (val === null || val === undefined) {
  		throw new TypeError('Object.assign cannot be called with null or undefined');
  	}

  	return Object(val);
  }

  function shouldUseNative() {
  	try {
  		if (!Object.assign) {
  			return false;
  		}

  		// Detect buggy property enumeration order in older V8 versions.

  		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
  		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
  		test1[5] = 'de';
  		if (Object.getOwnPropertyNames(test1)[0] === '5') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test2 = {};
  		for (var i = 0; i < 10; i++) {
  			test2['_' + String.fromCharCode(i)] = i;
  		}
  		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
  			return test2[n];
  		});
  		if (order2.join('') !== '0123456789') {
  			return false;
  		}

  		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
  		var test3 = {};
  		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
  			test3[letter] = letter;
  		});
  		if (Object.keys(Object.assign({}, test3)).join('') !==
  				'abcdefghijklmnopqrst') {
  			return false;
  		}

  		return true;
  	} catch (err) {
  		// We don't expect any of the above to throw, but better to be safe.
  		return false;
  	}
  }

  var objectAssign = shouldUseNative() ? Object.assign : function (target, source) {
  	var from;
  	var to = toObject(target);
  	var symbols;

  	for (var s = 1; s < arguments.length; s++) {
  		from = Object(arguments[s]);

  		for (var key in from) {
  			if (hasOwnProperty.call(from, key)) {
  				to[key] = from[key];
  			}
  		}

  		if (getOwnPropertySymbols) {
  			symbols = getOwnPropertySymbols(from);
  			for (var i = 0; i < symbols.length; i++) {
  				if (propIsEnumerable.call(from, symbols[i])) {
  					to[symbols[i]] = from[symbols[i]];
  				}
  			}
  		}
  	}

  	return to;
  };

  var n="function"===typeof Symbol&&Symbol.for,p=n?Symbol.for("react.element"):60103,q=n?Symbol.for("react.portal"):60106,r=n?Symbol.for("react.fragment"):60107,t=n?Symbol.for("react.strict_mode"):60108,u=n?Symbol.for("react.profiler"):60114,v=n?Symbol.for("react.provider"):60109,w=n?Symbol.for("react.context"):60110,x=n?Symbol.for("react.concurrent_mode"):60111,y=n?Symbol.for("react.forward_ref"):60112,z=n?Symbol.for("react.suspense"):60113,aa=n?Symbol.for("react.memo"):
  60115,ba=n?Symbol.for("react.lazy"):60116,A="function"===typeof Symbol&&Symbol.iterator;function ca(a,b,d,c,e,g,h,f){if(!a){a=void 0;if(void 0===b)a=Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var l=[d,c,e,g,h,f],m=0;a=Error(b.replace(/%s/g,function(){return l[m++]}));a.name="Invariant Violation";}a.framesToPop=1;throw a;}}
  function B(a){for(var b=arguments.length-1,d="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=0;c<b;c++)d+="&args[]="+encodeURIComponent(arguments[c+1]);ca(!1,"Minified React error #"+a+"; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ",d);}var C={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},D={};
  function E(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C;}E.prototype.isReactComponent={};E.prototype.setState=function(a,b){"object"!==typeof a&&"function"!==typeof a&&null!=a?B("85"):void 0;this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,d){this.props=a;this.context=b;this.refs=D;this.updater=d||C;}var H=G.prototype=new F;
  H.constructor=G;objectAssign(H,E.prototype);H.isPureReactComponent=!0;var I={current:null},J={current:null},K=Object.prototype.hasOwnProperty,L={key:!0,ref:!0,__self:!0,__source:!0};
  function M(a,b,d){var c=void 0,e={},g=null,h=null;if(null!=b)for(c in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(g=""+b.key),b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=b[c]);var f=arguments.length-2;if(1===f)e.children=d;else if(1<f){for(var l=Array(f),m=0;m<f;m++)l[m]=arguments[m+2];e.children=l;}if(a&&a.defaultProps)for(c in f=a.defaultProps,f)void 0===e[c]&&(e[c]=f[c]);return {$$typeof:p,type:a,key:g,ref:h,props:e,_owner:J.current}}
  function da(a,b){return {$$typeof:p,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function N(a){return "object"===typeof a&&null!==a&&a.$$typeof===p}function escape(a){var b={"=":"=0",":":"=2"};return "$"+(""+a).replace(/[=:]/g,function(a){return b[a]})}var O=/\/+/g,P=[];function Q(a,b,d,c){if(P.length){var e=P.pop();e.result=a;e.keyPrefix=b;e.func=d;e.context=c;e.count=0;return e}return {result:a,keyPrefix:b,func:d,context:c,count:0}}
  function R(a){a.result=null;a.keyPrefix=null;a.func=null;a.context=null;a.count=0;10>P.length&&P.push(a);}
  function S(a,b,d,c){var e=typeof a;if("undefined"===e||"boolean"===e)a=null;var g=!1;if(null===a)g=!0;else switch(e){case "string":case "number":g=!0;break;case "object":switch(a.$$typeof){case p:case q:g=!0;}}if(g)return d(c,a,""===b?"."+T(a,0):b),1;g=0;b=""===b?".":b+":";if(Array.isArray(a))for(var h=0;h<a.length;h++){e=a[h];var f=b+T(e,h);g+=S(e,f,d,c);}else if(null===a||"object"!==typeof a?f=null:(f=A&&a[A]||a["@@iterator"],f="function"===typeof f?f:null),"function"===typeof f)for(a=f.call(a),h=
  0;!(e=a.next()).done;)e=e.value,f=b+T(e,h++),g+=S(e,f,d,c);else"object"===e&&(d=""+a,B("31","[object Object]"===d?"object with keys {"+Object.keys(a).join(", ")+"}":d,""));return g}function U(a,b,d){return null==a?0:S(a,"",b,d)}function T(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(a.key):b.toString(36)}function ea(a,b){a.func.call(a.context,b,a.count++);}
  function fa(a,b,d){var c=a.result,e=a.keyPrefix;a=a.func.call(a.context,b,a.count++);Array.isArray(a)?V(a,c,d,function(a){return a}):null!=a&&(N(a)&&(a=da(a,e+(!a.key||b&&b.key===a.key?"":(""+a.key).replace(O,"$&/")+"/")+d)),c.push(a));}function V(a,b,d,c,e){var g="";null!=d&&(g=(""+d).replace(O,"$&/")+"/");b=Q(b,g,c,e);U(a,fa,b);R(b);}function W(){var a=I.current;null===a?B("321"):void 0;return a}
  var X={Children:{map:function(a,b,d){if(null==a)return a;var c=[];V(a,c,null,b,d);return c},forEach:function(a,b,d){if(null==a)return a;b=Q(null,null,b,d);U(a,ea,b);R(b);},count:function(a){return U(a,function(){return null},null)},toArray:function(a){var b=[];V(a,b,null,function(a){return a});return b},only:function(a){N(a)?void 0:B("143");return a}},createRef:function(){return {current:null}},Component:E,PureComponent:G,createContext:function(a,b){void 0===b&&(b=null);a={$$typeof:w,_calculateChangedBits:b,
  _currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null};a.Provider={$$typeof:v,_context:a};return a.Consumer=a},forwardRef:function(a){return {$$typeof:y,render:a}},lazy:function(a){return {$$typeof:ba,_ctor:a,_status:-1,_result:null}},memo:function(a,b){return {$$typeof:aa,type:a,compare:void 0===b?null:b}},useCallback:function(a,b){return W().useCallback(a,b)},useContext:function(a,b){return W().useContext(a,b)},useEffect:function(a,b){return W().useEffect(a,b)},useImperativeHandle:function(a,
  b,d){return W().useImperativeHandle(a,b,d)},useDebugValue:function(){},useLayoutEffect:function(a,b){return W().useLayoutEffect(a,b)},useMemo:function(a,b){return W().useMemo(a,b)},useReducer:function(a,b,d){return W().useReducer(a,b,d)},useRef:function(a){return W().useRef(a)},useState:function(a){return W().useState(a)},Fragment:r,StrictMode:t,Suspense:z,createElement:M,cloneElement:function(a,b,d){null===a||void 0===a?B("267",a):void 0;var c=void 0,e=objectAssign({},a.props),g=a.key,h=a.ref,f=a._owner;if(null!=
  b){void 0!==b.ref&&(h=b.ref,f=J.current);void 0!==b.key&&(g=""+b.key);var l=void 0;a.type&&a.type.defaultProps&&(l=a.type.defaultProps);for(c in b)K.call(b,c)&&!L.hasOwnProperty(c)&&(e[c]=void 0===b[c]&&void 0!==l?l[c]:b[c]);}c=arguments.length-2;if(1===c)e.children=d;else if(1<c){l=Array(c);for(var m=0;m<c;m++)l[m]=arguments[m+2];e.children=l;}return {$$typeof:p,type:a.type,key:g,ref:h,props:e,_owner:f}},createFactory:function(a){var b=M.bind(null,a);b.type=a;return b},isValidElement:N,version:"16.8.6",
  unstable_ConcurrentMode:x,unstable_Profiler:u,__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:{ReactCurrentDispatcher:I,ReactCurrentOwner:J,assign:objectAssign}},Y={default:X},Z=Y&&X||Y;var react_production_min=Z.default||Z;

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  var react_development = createCommonjsModule(function (module) {
  });

  var react = createCommonjsModule(function (module) {

  {
    module.exports = react_production_min;
  }
  });

  var reactIs_production_min = createCommonjsModule(function (module, exports) {
  Object.defineProperty(exports,"__esModule",{value:!0});
  var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?Symbol.for("react.memo"):
  60115,r=b?Symbol.for("react.lazy"):60116;function t(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case h:return a;default:return u}}case r:case q:case d:return u}}}function v(a){return t(a)===m}exports.typeOf=t;exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;
  exports.Fragment=e;exports.Lazy=r;exports.Memo=q;exports.Portal=d;exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isValidElementType=function(a){return "string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||"object"===typeof a&&null!==a&&(a.$$typeof===r||a.$$typeof===q||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n)};exports.isAsyncMode=function(a){return v(a)||t(a)===l};exports.isConcurrentMode=v;exports.isContextConsumer=function(a){return t(a)===k};
  exports.isContextProvider=function(a){return t(a)===h};exports.isElement=function(a){return "object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return t(a)===n};exports.isFragment=function(a){return t(a)===e};exports.isLazy=function(a){return t(a)===r};exports.isMemo=function(a){return t(a)===q};exports.isPortal=function(a){return t(a)===d};exports.isProfiler=function(a){return t(a)===g};exports.isStrictMode=function(a){return t(a)===f};
  exports.isSuspense=function(a){return t(a)===p};
  });

  unwrapExports(reactIs_production_min);
  var reactIs_production_min_1 = reactIs_production_min.typeOf;
  var reactIs_production_min_2 = reactIs_production_min.AsyncMode;
  var reactIs_production_min_3 = reactIs_production_min.ConcurrentMode;
  var reactIs_production_min_4 = reactIs_production_min.ContextConsumer;
  var reactIs_production_min_5 = reactIs_production_min.ContextProvider;
  var reactIs_production_min_6 = reactIs_production_min.Element;
  var reactIs_production_min_7 = reactIs_production_min.ForwardRef;
  var reactIs_production_min_8 = reactIs_production_min.Fragment;
  var reactIs_production_min_9 = reactIs_production_min.Lazy;
  var reactIs_production_min_10 = reactIs_production_min.Memo;
  var reactIs_production_min_11 = reactIs_production_min.Portal;
  var reactIs_production_min_12 = reactIs_production_min.Profiler;
  var reactIs_production_min_13 = reactIs_production_min.StrictMode;
  var reactIs_production_min_14 = reactIs_production_min.Suspense;
  var reactIs_production_min_15 = reactIs_production_min.isValidElementType;
  var reactIs_production_min_16 = reactIs_production_min.isAsyncMode;
  var reactIs_production_min_17 = reactIs_production_min.isConcurrentMode;
  var reactIs_production_min_18 = reactIs_production_min.isContextConsumer;
  var reactIs_production_min_19 = reactIs_production_min.isContextProvider;
  var reactIs_production_min_20 = reactIs_production_min.isElement;
  var reactIs_production_min_21 = reactIs_production_min.isForwardRef;
  var reactIs_production_min_22 = reactIs_production_min.isFragment;
  var reactIs_production_min_23 = reactIs_production_min.isLazy;
  var reactIs_production_min_24 = reactIs_production_min.isMemo;
  var reactIs_production_min_25 = reactIs_production_min.isPortal;
  var reactIs_production_min_26 = reactIs_production_min.isProfiler;
  var reactIs_production_min_27 = reactIs_production_min.isStrictMode;
  var reactIs_production_min_28 = reactIs_production_min.isSuspense;

  var reactIs_development = createCommonjsModule(function (module, exports) {
  });

  unwrapExports(reactIs_development);
  var reactIs_development_1 = reactIs_development.typeOf;
  var reactIs_development_2 = reactIs_development.AsyncMode;
  var reactIs_development_3 = reactIs_development.ConcurrentMode;
  var reactIs_development_4 = reactIs_development.ContextConsumer;
  var reactIs_development_5 = reactIs_development.ContextProvider;
  var reactIs_development_6 = reactIs_development.Element;
  var reactIs_development_7 = reactIs_development.ForwardRef;
  var reactIs_development_8 = reactIs_development.Fragment;
  var reactIs_development_9 = reactIs_development.Lazy;
  var reactIs_development_10 = reactIs_development.Memo;
  var reactIs_development_11 = reactIs_development.Portal;
  var reactIs_development_12 = reactIs_development.Profiler;
  var reactIs_development_13 = reactIs_development.StrictMode;
  var reactIs_development_14 = reactIs_development.Suspense;
  var reactIs_development_15 = reactIs_development.isValidElementType;
  var reactIs_development_16 = reactIs_development.isAsyncMode;
  var reactIs_development_17 = reactIs_development.isConcurrentMode;
  var reactIs_development_18 = reactIs_development.isContextConsumer;
  var reactIs_development_19 = reactIs_development.isContextProvider;
  var reactIs_development_20 = reactIs_development.isElement;
  var reactIs_development_21 = reactIs_development.isForwardRef;
  var reactIs_development_22 = reactIs_development.isFragment;
  var reactIs_development_23 = reactIs_development.isLazy;
  var reactIs_development_24 = reactIs_development.isMemo;
  var reactIs_development_25 = reactIs_development.isPortal;
  var reactIs_development_26 = reactIs_development.isProfiler;
  var reactIs_development_27 = reactIs_development.isStrictMode;
  var reactIs_development_28 = reactIs_development.isSuspense;

  var reactIs = createCommonjsModule(function (module) {

  {
    module.exports = reactIs_production_min;
  }
  });

  var has = Function.call.bind(Object.prototype.hasOwnProperty);

  function emptyFunction() {}
  function emptyFunctionWithReset() {}
  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  var factoryWithThrowingShims = function() {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret_1) {
        // It is still safe when called from React.
        return;
      }
      var err = new Error(
        'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
        'Use PropTypes.checkPropTypes() to call them. ' +
        'Read more at http://fb.me/use-check-prop-types'
      );
      err.name = 'Invariant Violation';
      throw err;
    }  shim.isRequired = shim;
    function getShim() {
      return shim;
    }  // Important!
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,

      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,

      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };

    ReactPropTypes.PropTypes = ReactPropTypes;

    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
  });

  var classnames = createCommonjsModule(function (module) {
  /*!
    Copyright (c) 2017 Jed Watson.
    Licensed under the MIT License (MIT), see
    http://jedwatson.github.io/classnames
  */
  /* global define */

  (function () {

  	var hasOwn = {}.hasOwnProperty;

  	function classNames () {
  		var classes = [];

  		for (var i = 0; i < arguments.length; i++) {
  			var arg = arguments[i];
  			if (!arg) continue;

  			var argType = typeof arg;

  			if (argType === 'string' || argType === 'number') {
  				classes.push(arg);
  			} else if (Array.isArray(arg) && arg.length) {
  				var inner = classNames.apply(null, arg);
  				if (inner) {
  					classes.push(inner);
  				}
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

  	if ( module.exports) {
  		classNames.default = classNames;
  		module.exports = classNames;
  	} else {
  		window.classNames = classNames;
  	}
  }());
  });

  function styleInject(css, ref) {
    if ( ref === void 0 ) ref = {};
    var insertAt = ref.insertAt;

    if (!css || typeof document === 'undefined') { return; }

    var head = document.head || document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.type = 'text/css';

    if (insertAt === 'top') {
      if (head.firstChild) {
        head.insertBefore(style, head.firstChild);
      } else {
        head.appendChild(style);
      }
    } else {
      head.appendChild(style);
    }

    if (style.styleSheet) {
      style.styleSheet.cssText = css;
    } else {
      style.appendChild(document.createTextNode(css));
    }
  }

  var css = ".flex-flex{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1}.flex-auto{-webkit-box-flex:1;-webkit-flex:auto;-ms-flex:auto;flex:auto}.flex-none{-webkit-box-flex:0;-webkit-flex:none;-ms-flex:none;flex:none}.flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start;-webkit-align-content:stretch;-ms-flex-line-pack:stretch;align-content:stretch;-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch;-webkit-box-sizing:border-box;box-sizing:border-box}.flex.flex-wrap{-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap}.flex.flex-nowrap{-webkit-flex-wrap:nowrap;-ms-flex-wrap:nowrap;flex-wrap:nowrap}.flex.flex-row{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row}.flex.flex-column{-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column}.flex.flex-justify-start{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start}.flex.flex-justify-end{-webkit-box-pack:end;-webkit-justify-content:flex-end;-ms-flex-pack:end;justify-content:flex-end}.flex.flex-justify-center{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.flex.flex-justify-between{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between}.flex.flex-justify-around{-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around}.flex.flex-align-start{-webkit-box-align:start;-webkit-align-items:flex-start;-ms-flex-align:start;align-items:flex-start}.flex.flex-align-end{-webkit-box-align:end;-webkit-align-items:flex-end;-ms-flex-align:end;align-items:flex-end}.flex.flex-align-center{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.flex.flex-align-baseline{-webkit-box-align:baseline;-webkit-align-items:baseline;-ms-flex-align:baseline;align-items:baseline}.flex.flex-align-stretch{-webkit-box-align:stretch;-webkit-align-items:stretch;-ms-flex-align:stretch;align-items:stretch}";
  styleInject(css);

  var Flex = function Flex(_ref) {
    var flex = _ref.flex,
        auto = _ref.auto,
        none = _ref.none,
        width = _ref.width,
        height = _ref.height,
        row = _ref.row,
        column = _ref.column,
        wrap = _ref.wrap,
        nowrap = _ref.nowrap,
        justifyStart = _ref.justifyStart,
        justifyEnd = _ref.justifyEnd,
        justifyCenter = _ref.justifyCenter,
        justifyBetween = _ref.justifyBetween,
        justifyAround = _ref.justifyAround,
        alignStart = _ref.alignStart,
        alignEnd = _ref.alignEnd,
        alignCenter = _ref.alignCenter,
        alignBaseline = _ref.alignBaseline,
        alignStretch = _ref.alignStretch,
        className = _ref.className,
        style = _ref.style,
        children = _ref.children,
        rest = _objectWithoutProperties(_ref, ["flex", "auto", "none", "width", "height", "row", "column", "wrap", "nowrap", "justifyStart", "justifyEnd", "justifyCenter", "justifyBetween", "justifyAround", "alignStart", "alignEnd", "alignCenter", "alignBaseline", "alignStretch", "className", "style", "children"]);

    var cn = classnames({
      flex: true,
      'flex-flex': flex,
      'flex-auto': auto,
      'flex-none': none || width || height,
      'flex-row': row,
      'flex-column': column,
      'flex-wrap': wrap,
      'flex-nowrap': nowrap,
      'flex-justify-start': justifyStart,
      'flex-justify-end': justifyEnd,
      'flex-justify-center': justifyCenter,
      'flex-justify-between': justifyBetween,
      'flex-justify-around': justifyAround,
      'flex-align-start': alignStart,
      'flex-align-end': alignEnd,
      'flex-align-center': alignCenter,
      'flex-align-baseline': alignBaseline,
      'flex-align-stretch': alignStretch
    }, className);
    var s = Object.assign({}, style);

    if (flex) {
      s.flex = typeof flex === 'boolean' ? 1 : flex;
      s.WebkitFlex = typeof flex === 'boolean' ? 1 : flex;
    }

    if (height) {
      s.height = height;
    }

    if (width) {
      s.width = width;
    }

    return react.createElement("div", _extends({}, rest, {
      className: cn,
      style: s
    }), children);
  };

  Flex.displayName = 'Flex';
  Flex.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    style: propTypes.object,
    flex: propTypes.oneOfType([propTypes.number, propTypes.bool]),
    auto: propTypes.bool,
    none: propTypes.bool,
    width: propTypes.string,
    height: propTypes.string,
    row: propTypes.bool,
    column: propTypes.bool,
    wrap: propTypes.bool,
    nowrap: propTypes.bool,
    justifyStart: propTypes.bool,
    justifyEnd: propTypes.bool,
    justifyCenter: propTypes.bool,
    justifyBetween: propTypes.bool,
    justifyAround: propTypes.bool,
    alignStart: propTypes.bool,
    alignEnd: propTypes.bool,
    alignCenter: propTypes.bool,
    alignBaseline: propTypes.bool,
    alignStretch: propTypes.bool
  };

  var css$1 = ".page{width:100vw;height:100vh;background:#fafbfc;overflow:hidden}.page.page-white{background:#fff}.page .page-content{position:relative;overflow-x:hidden;overflow-y:auto}.page .page-tabbar{height:55px}";
  styleInject(css$1);

  var Page = function Page(_ref) {
    var className = _ref.className,
        pageClassName = _ref.pageClassName,
        white = _ref.white,
        header = _ref.header,
        tabbar = _ref.tabbar,
        bottom = _ref.bottom,
        children = _ref.children,
        rest = _objectWithoutProperties(_ref, ["className", "pageClassName", "white", "header", "tabbar", "bottom", "children"]);

    return react.createElement(Flex, _extends({}, rest, {
      column: true,
      className: classnames({
        page: true,
        'page-white': white
      }, className)
    }), header && react.createElement(Flex, {
      column: true,
      none: true
    }, header), react.createElement(Flex, {
      flex: true,
      column: true,
      className: classnames('page-content block', pageClassName)
    }, children), bottom, tabbar && react.createElement(Flex, {
      column: true,
      none: true,
      className: "page-tabbar"
    }, tabbar));
  };

  Page.displayName = 'Page';
  Page.propTypes = {
    children: propTypes.node,
    className: propTypes.string,
    pageClassName: propTypes.string,
    white: propTypes.bool,
    header: propTypes.node,
    tabbar: propTypes.node,
    bottom: propTypes.node
  };

  var css$2 = ".ink-header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0 15px;height:50px;background:#fff}";
  styleInject(css$2);

  var Header = function Header(_ref) {
    var left = _ref.left,
        center = _ref.center,
        right = _ref.right,
        className = _ref.className;
    return react.createElement("header", {
      className: classnames('ink-header', className)
    }, left || react.createElement("div", null), center || react.createElement("div", null), right || react.createElement("div", null));
  };

  Header.propTypes = {
    left: propTypes.element,
    center: propTypes.element,
    right: propTypes.element,
    className: propTypes.string
  };

  var css$3 = ".ink-btn{border:none;outline:none;display:inline-block;padding:10px 15px;border-radius:6px;font-size:18px}.ink-btn:active{background:#f7f8f9}.is-disabled{opacity:.4}.btn-large{display:block;width:100%}.btn-primary{background:#fff;color:#108ee9;border:1px solid #108ee9}.btn-danger{background:#fff;color:#dd2622;border:1px solid #dd2622}.btn-warning{background:#fff;color:#f90;border:1px solid #f90}.btn-default{background:#fff;color:#333}.btn-active{background:#f7f8f9}";
  styleInject(css$3);

  var Button = function Button(_ref) {
    var type = _ref.type,
        size = _ref.size,
        disabled = _ref.disabled,
        children = _ref.children,
        className = _ref.className,
        rest = _objectWithoutProperties(_ref, ["type", "size", "disabled", "children", "className"]);

    var typeClass = function typeClass() {
      return type === 'primary' ? 'btn-primary' : type === 'danger' ? 'btn-danger' : type === 'warning' ? 'btn-warning' : 'btn-default';
    };

    return react.createElement("button", _extends({}, rest, {
      className: classnames('ink-btn', className, typeClass(), {
        'btn-large': size === 'large',
        'is-disabled': disabled
      }),
      disabled: disabled
    }), children);
  };

  Button.propTypes = {
    children: propTypes.oneOfType([propTypes.element, propTypes.string]),
    className: propTypes.string,
    type: propTypes.string,
    size: propTypes.string,
    disabled: propTypes.bool
  };
  Button.defaultProps = {
    className: '',
    type: 'default',
    size: 'small',
    disabled: false
  };

  var css$4 = ".ink-loading{position:relative;background:rgba(0,0,0,0);border-radius:100%;border:2px solid #ddd}.ink-loading,.ink-loading .loading-item{-webkit-box-sizing:border-box;box-sizing:border-box;width:23px;height:23px}.ink-loading .loading-item{position:absolute;top:-2px;left:-2px;border:3px solid rgba(0,0,0,0);border-bottom-color:#108ee9;border-radius:100%;-webkit-animation:rotateAnim 1s linear infinite;animation:rotateAnim 1s linear infinite}@-webkit-keyframes rotateAnim{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes rotateAnim{0%{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}";
  styleInject(css$4);

  var Loading = function Loading(_ref) {
    var color = _ref.color;
    return react.createElement("div", {
      className: "ink-loading"
    }, react.createElement("div", {
      className: "loading-item",
      style: {
        borderBottomColor: color,
        borderTopColor: color
      }
    }));
  };

  Loading.propTypes = {
    color: propTypes.string
  };
  Loading.defaultProps = {
    color: '#108ee9'
  };

  var css$5 = ".ink-radio{display:inline-block;width:20px;height:20px;border-radius:100%}.ink-radio *{pointer-events:none}.ink-radio .radio-input{display:none}.ink-radio .radio-label{position:relative;display:inline-block;width:20px;height:20px;border-radius:100%;border:1px solid #ccc;-webkit-box-sizing:border-box;box-sizing:border-box;background:#fff}.ink-radio .radio-input[type=radio]:disabled+.radio-label{border:1px solid #ccc}.ink-radio .radio-input[type=radio]:disabled+.radio-label:before{content:\" \";position:absolute;left:50%;top:0;-webkit-transform:translate3d(-50%,0,0) rotate(-45deg);transform:translate3d(-50%,0,0) rotate(-45deg);width:1px;height:100%;background:#ccc}.ink-radio .radio-input[type=radio]:checked+.radio-label{border:none;background:#108ee9}.ink-radio .radio-input[type=radio]:checked+.radio-label:before{content:\" \";position:absolute;top:4px;left:4px;width:13px;height:8px;-webkit-box-sizing:border-box;box-sizing:border-box;border:2px solid #fff;border-top:none;border-right:none;-webkit-transform:rotate(-46deg);-ms-transform:rotate(-46deg);transform:rotate(-46deg)}";
  styleInject(css$5);

  var Radio = function Radio(_ref) {
    var checked = _ref.checked,
        disabled = _ref.disabled,
        onChange = _ref.onChange,
        rest = _objectWithoutProperties(_ref, ["checked", "disabled", "onChange"]);

    var handleClick = function handleClick(e) {
      if (disabled) return;
      onChange(e);
    };

    return react.createElement("label", {
      className: "ink-radio",
      onClick: handleClick
    }, react.createElement("input", _extends({}, rest, {
      className: "radio-input",
      type: "radio",
      checked: checked,
      disabled: disabled,
      onChange: function onChange() {}
    })), react.createElement("label", {
      className: "radio-label"
    }));
  };

  Radio.propTypes = {
    checked: propTypes.bool,
    disabled: propTypes.bool,
    onChange: propTypes.func
  };
  Radio.defaultProps = {
    checked: false,
    disabled: false,
    onChange: function onChange() {}
  };

  var css$6 = ".ink-switch{display:inline-block;height:32px}.ink-switch *{pointer-events:none}.ink-switch .switch-input{display:none}.ink-switch .switch-label{position:relative;display:inline-block;width:50px;height:32px;border-radius:15px;background:#ddd}.ink-switch .switch-label:after,.ink-switch .switch-label:before{content:\" \";position:absolute;border-radius:13px;-webkit-transition:all .25s;transition:all .25s}.ink-switch .switch-label:before{top:1px;left:1px;width:48px;height:30px;background:#fefefe}.ink-switch .switch-label:after{top:.5px;left:1px;width:30px;height:30px;border-radius:100%;background:#fff;-webkit-box-shadow:0 0 2px 0 rgba(0,0,0,.3);box-shadow:0 0 2px 0 rgba(0,0,0,.3)}.ink-switch .switch-input[type=checkbox]:checked+.switch-label{background:#108ee9}.ink-switch .switch-input[type=checkbox]:checked+.switch-label:before{-webkit-transform:scale3d(0,0,0);transform:scale3d(0,0,0)}.ink-switch .switch-input[type=checkbox]:checked+.switch-label:after{-webkit-transform:translate3d(20px,0,0);transform:translate3d(20px,0,0)}";
  styleInject(css$6);

  var Switch = function Switch(_ref) {
    var checked = _ref.checked,
        onChange = _ref.onChange;

    var handleClick = function handleClick(e) {
      e.preventDefault();
      onChange(e);
    };

    return react.createElement("label", {
      className: "ink-switch",
      onClick: handleClick
    }, react.createElement("input", {
      className: "switch-input",
      type: "checkbox",
      checked: checked,
      onChange: function onChange() {}
    }), react.createElement("label", {
      className: "switch-label"
    }));
  };

  Switch.propTypes = {
    checked: propTypes.bool,
    onChange: propTypes.func
  };
  Switch.defaultProps = {
    checked: false,
    onChange: function onChange() {}
  };

  var css$7 = ".ink-progress{position:relative;height:20px;line-height:20px}.ink-progress .progress-default-line{width:100%;border-top:1px solid #ccc}.ink-progress .progress-active-line,.ink-progress .progress-default-line{position:absolute;top:50%;-webkit-transform:translate3d(0,-50%,0);transform:translate3d(0,-50%,0)}.ink-progress .progress-active-line{left:0;width:50%;-webkit-transition:width .15s linear;transition:width .15s linear}";
  styleInject(css$7);

  var Progress = function Progress(_ref) {
    var strokeHeight = _ref.strokeHeight,
        strokeColor = _ref.strokeColor,
        percent = _ref.percent;
    return react.createElement("div", {
      className: "ink-progress"
    }, react.createElement("div", {
      className: "progress-default-line",
      style: {
        borderWidth: strokeHeight
      }
    }), react.createElement("div", {
      className: "progress-active-line",
      style: {
        width: "".concat(percent % 100, "%"),
        background: strokeColor,
        height: strokeHeight
      }
    }));
  };

  Progress.propTypes = {
    strokeHeight: propTypes.number,
    strokeColor: propTypes.string,
    percent: propTypes.number.isRequired
  };
  Progress.defaultProps = {
    strokeHeight: 2,
    strokeColor: '#108ee9'
  };

  var css$8 = ".ink-search{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:50px;background:#fff;border:10px solid #eee;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:3px}.ink-search .search-icon{-webkit-box-flex:0;-webkit-flex:0 0 18px;-ms-flex:0 0 18px;flex:0 0 18px;height:18px;margin-left:6px;-webkit-transition:width .25s;transition:width .25s}.ink-search .search-icon .icon-wrapper{position:relative;z-index:1;width:10px;height:10px;border:2px solid #666;border-radius:100%}.ink-search .search-icon .icon-wrapper:after{content:\" \";position:absolute;width:2px;height:7px;top:80%;left:80%;-webkit-transform:translate3d(100%,0,0) rotate(-45deg);transform:translate3d(100%,0,0) rotate(-45deg);background:#666}.ink-search .search-input{background:inherit;color:inherit;margin-left:5px;padding-left:5px;font-size:18px;width:100%;z-index:2;border:none;outline:none}.ink-search input[type=search]::-webkit-search-cancel-button{-webkit-appearance:none}.ink-search .icon-clear{position:relative;-webkit-box-flex:0;-webkit-flex:0 0 18px;-ms-flex:0 0 18px;flex:0 0 18px;height:18px;border-radius:100%;background:#ccc;margin:0 5px}.ink-search .icon-clear:after,.ink-search .icon-clear:before{content:\" \";position:absolute;top:50%;left:50%;width:2px;height:60%;background:#fff;border-radius:6px}.ink-search .icon-clear:before{-webkit-transform:translate3d(-50%,-50%,0) rotate(-45deg);transform:translate3d(-50%,-50%,0) rotate(-45deg)}.ink-search .icon-clear:after{-webkit-transform:translate3d(-50%,-50%,0) rotate(45deg);transform:translate3d(-50%,-50%,0) rotate(45deg)}";
  styleInject(css$8);

  // const Component = ({ value, placeholder, canClear, onChange, onSubmit }) => {
  //   const [showClear, setAction] = React.useState(false)
  //   const handleSubmit = e => {
  //     e.preventDefault()
  //     onSubmit(e)
  //   }
  //   const handleChange = e => {
  //     onChange(e.target.value)
  //     if (!e.target.value) setAction(false)
  //     if (!showClear) setAction(true)
  //   }
  //   const handleFocus = () => {
  //     if (value && !showClear) setAction(true)
  //   }
  //   const handleClear = () => {
  //     onChange('')
  //     setAction(false)
  //   }
  //   return (
  //     <form action="" className="ink-search" onSubmit={handleSubmit}>
  //       <div className="search-icon">
  //         <div className="icon-wrapper" />
  //       </div>
  //       <input
  //         className="search-input"
  //         type="search"
  //         placeholder={placeholder}
  //         value={value}
  //         onChange={handleChange}
  //         onFocus={handleFocus}
  //       />
  //       {canClear && showClear ? (
  //         <div className="icon-clear" onClick={handleClear} />
  //       ) : null}
  //     </form>
  //   )
  // }

  var Component =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Component, _React$Component);

    function Component(props) {
      var _this;

      _classCallCheck(this, Component);

      _this = _possibleConstructorReturn(this, _getPrototypeOf(Component).call(this, props));
      _this.state = {
        showClear: false
      };
      return _this;
    }

    _createClass(Component, [{
      key: "handleSubmit",
      value: function handleSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(e);
      }
    }, {
      key: "handleChange",
      value: function handleChange(e) {
        var showClear = this.state.showClear;
        this.props.onChange(e.target.value);
        if (!e.target.value) this.setState({
          showClear: false
        });
        if (!showClear) this.setState({
          showClear: true
        });
      }
    }, {
      key: "handleFocus",
      value: function handleFocus() {
        var showClear = this.state.showClear;
        if (this.props.value && !showClear) this.setState({
          showClear: true
        });
      }
    }, {
      key: "handleClear",
      value: function handleClear() {
        this.props.onChange('');
        this.setState({
          showClear: false
        });
      }
    }, {
      key: "render",
      value: function render() {
        var showClear = this.state.showClear;
        var _this$props = this.props,
            placeholder = _this$props.placeholder,
            value = _this$props.value,
            canClear = _this$props.canClear;
        return react.createElement("form", {
          action: "",
          className: "ink-search",
          onSubmit: this.handleSubmit.bind(this)
        }, react.createElement("div", {
          className: "search-icon"
        }, react.createElement("div", {
          className: "icon-wrapper"
        })), react.createElement("input", {
          className: "search-input",
          type: "search",
          placeholder: placeholder,
          value: value,
          onChange: this.handleChange.bind(this),
          onFocus: this.handleFocus.bind(this)
        }), canClear && showClear ? react.createElement("div", {
          className: "icon-clear",
          onClick: this.handleClear.bind(this)
        }) : null);
      }
    }]);

    return Component;
  }(react.Component);

  Component.propTypes = {
    value: propTypes.string,
    placeholder: propTypes.string,
    canClear: propTypes.bool,
    onChange: propTypes.func,
    onSubmit: propTypes.func
  };
  Component.defaultProps = {
    canClear: true,
    placeholder: '搜索',
    onChange: function onChange() {},
    onSubmit: function onSubmit() {}
  };

  exports.Button = Button;
  exports.Flex = Flex;
  exports.Header = Header;
  exports.Loading = Loading;
  exports.Page = Page;
  exports.Progress = Progress;
  exports.Radio = Radio;
  exports.SearchBar = Component;
  exports.Switch = Switch;

}));
