import React, { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
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

function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread2(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
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

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

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

  var cn = classNames({
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

  return React.createElement("div", _extends({}, rest, {
    className: cn,
    style: s
  }), children);
};

Flex.displayName = 'Flex';
Flex.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  style: PropTypes.object,
  flex: PropTypes.oneOfType([PropTypes.number, PropTypes.bool, PropTypes.string]),
  auto: PropTypes.bool,
  none: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string,
  row: PropTypes.bool,
  column: PropTypes.bool,
  wrap: PropTypes.bool,
  nowrap: PropTypes.bool,
  justifyStart: PropTypes.bool,
  justifyEnd: PropTypes.bool,
  justifyCenter: PropTypes.bool,
  justifyBetween: PropTypes.bool,
  justifyAround: PropTypes.bool,
  alignStart: PropTypes.bool,
  alignEnd: PropTypes.bool,
  alignCenter: PropTypes.bool,
  alignBaseline: PropTypes.bool,
  alignStretch: PropTypes.bool
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

  return React.createElement(Flex, _extends({}, rest, {
    column: true,
    className: classNames({
      page: true,
      'page-white': white
    }, className)
  }), header && React.createElement(Flex, {
    column: true,
    none: true
  }, header), React.createElement(Flex, {
    flex: true,
    column: true,
    className: classNames('page-content block', pageClassName)
  }, children), bottom, tabbar && React.createElement(Flex, {
    column: true,
    none: true,
    className: "page-tabbar"
  }, tabbar));
};

Page.displayName = 'Page';
Page.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  pageClassName: PropTypes.string,
  white: PropTypes.bool,
  header: PropTypes.node,
  tabbar: PropTypes.node,
  bottom: PropTypes.node
};

var css$2 = ".ink-header{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;padding:0 15px;height:50px;background:#fff}";
styleInject(css$2);

var Header = function Header(_ref) {
  var left = _ref.left,
      center = _ref.center,
      right = _ref.right,
      className = _ref.className;
  return React.createElement("header", {
    className: classNames('ink-header', className)
  }, left || React.createElement("div", null), center || React.createElement("div", null), right || React.createElement("div", null));
};

Header.propTypes = {
  left: PropTypes.element,
  center: PropTypes.element,
  right: PropTypes.element,
  className: PropTypes.string
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

  return React.createElement("button", _extends({}, rest, {
    className: classNames('ink-btn', className, typeClass(), {
      'btn-large': size === 'large',
      'is-disabled': disabled
    }),
    disabled: disabled
  }), children);
};

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
  className: PropTypes.string,
  type: PropTypes.string,
  size: PropTypes.string,
  disabled: PropTypes.bool
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
  return React.createElement("div", {
    className: "ink-loading"
  }, React.createElement("div", {
    className: "loading-item",
    style: {
      borderBottomColor: color,
      borderTopColor: color
    }
  }));
};

Loading.propTypes = {
  color: PropTypes.string
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

  return React.createElement("label", {
    className: "ink-radio",
    onClick: handleClick
  }, React.createElement("input", _extends({}, rest, {
    className: "radio-input",
    type: "radio",
    checked: checked,
    disabled: disabled,
    onChange: function onChange() {}
  })), React.createElement("label", {
    className: "radio-label"
  }));
};

Radio.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  onChange: PropTypes.func
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

  return React.createElement("label", {
    className: "ink-switch",
    onClick: handleClick
  }, React.createElement("input", {
    className: "switch-input",
    type: "checkbox",
    checked: checked,
    onChange: function onChange() {}
  }), React.createElement("label", {
    className: "switch-label"
  }));
};

Switch.propTypes = {
  checked: PropTypes.bool,
  onChange: PropTypes.func
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
  return React.createElement("div", {
    className: "ink-progress"
  }, React.createElement("div", {
    className: "progress-default-line",
    style: {
      borderWidth: strokeHeight
    }
  }), React.createElement("div", {
    className: "progress-active-line",
    style: {
      width: "".concat(percent % 100, "%"),
      background: strokeColor,
      height: strokeHeight
    }
  }));
};

Progress.propTypes = {
  strokeHeight: PropTypes.number,
  strokeColor: PropTypes.string,
  percent: PropTypes.number.isRequired
};
Progress.defaultProps = {
  strokeHeight: 2,
  strokeColor: '#108ee9'
};

var css$8 = ".ink-search{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;height:50px;background:#fff;border:10px solid #eee;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:3px}.ink-search .search-icon{-webkit-box-flex:0;-webkit-flex:0 0 18px;-ms-flex:0 0 18px;flex:0 0 18px;height:18px;margin-left:6px;-webkit-transition:width .25s;transition:width .25s}.ink-search .search-icon .icon-wrapper{position:relative;z-index:1;width:10px;height:10px;border:2px solid #666;border-radius:100%}.ink-search .search-icon .icon-wrapper:after{content:\" \";position:absolute;width:2px;height:7px;top:80%;left:80%;-webkit-transform:translate3d(100%,0,0) rotate(-45deg);transform:translate3d(100%,0,0) rotate(-45deg);background:#666}.ink-search .search-input{background:inherit;color:inherit;margin-left:5px;padding-left:5px;font-size:18px;width:100%;z-index:2;border:none;outline:none}.ink-search input[type=search]::-webkit-search-cancel-button{-webkit-appearance:none}.ink-search .icon-clear{position:relative;-webkit-box-flex:0;-webkit-flex:0 0 18px;-ms-flex:0 0 18px;flex:0 0 18px;height:18px;border-radius:100%;background:#ccc;margin:0 5px}.ink-search .icon-clear:after,.ink-search .icon-clear:before{content:\" \";position:absolute;top:50%;left:50%;width:2px;height:60%;background:#fff;border-radius:6px}.ink-search .icon-clear:before{-webkit-transform:translate3d(-50%,-50%,0) rotate(-45deg);transform:translate3d(-50%,-50%,0) rotate(-45deg)}.ink-search .icon-clear:after{-webkit-transform:translate3d(-50%,-50%,0) rotate(45deg);transform:translate3d(-50%,-50%,0) rotate(45deg)}";
styleInject(css$8);

var Component = function Component(_ref) {
  var value = _ref.value,
      placeholder = _ref.placeholder,
      canClear = _ref.canClear,
      onChange = _ref.onChange,
      onSubmit = _ref.onSubmit;

  var _useState = useState(false),
      _useState2 = _slicedToArray(_useState, 2),
      show = _useState2[0],
      setShow = _useState2[1];

  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    onSubmit(e);
  };

  var handleChange = function handleChange(e) {
    onChange(e.target.value);
    if (!e.target.value) setShow(false);
    if (!show) setShow(true);
  };

  var handleFocus = function handleFocus() {
    if (value && !show) setShow(true);
  };

  var handleClear = function handleClear() {
    onChange('');
    setShow(false);
  };

  return React.createElement("form", {
    action: "",
    className: "ink-search",
    onSubmit: handleSubmit
  }, React.createElement("div", {
    className: "search-icon"
  }, React.createElement("div", {
    className: "icon-wrapper"
  })), React.createElement("input", {
    className: "search-input",
    type: "search",
    placeholder: placeholder,
    value: value,
    onChange: handleChange,
    onFocus: handleFocus
  }), canClear && show ? React.createElement("div", {
    className: "icon-clear",
    onClick: handleClear
  }) : null);
};

Component.propTypes = {
  value: PropTypes.string,
  placeholder: PropTypes.string,
  canClear: PropTypes.bool,
  onChange: PropTypes.func,
  onSubmit: PropTypes.func
};
Component.defaultProps = {
  canClear: true,
  placeholder: '搜索',
  onChange: function onChange() {},
  onSubmit: function onSubmit() {}
};

var css$9 = ".ink-carousel{position:relative;overflow:hidden}.ink-carousel .carousel-wrapper{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-transition-property:-webkit-transform;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;list-style:none;margin:0;padding:0}.ink-carousel .carousel-wrapper .carousel-item{-webkit-box-flex:1;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.ink-carousel .pagination-point-wrapper{position:absolute;bottom:15px;left:50%;-webkit-transform:translate3d(-50%,0,0);transform:translate3d(-50%,0,0);list-style:none;margin:0;padding:0}.ink-carousel .pagination-point-wrapper .point{display:inline-block;width:8px;height:8px;border-radius:100%;margin:0 4px;background:#000;opacity:.6}.ink-carousel .pagination-point-wrapper .point.is-active{background:#f0f1f2}";
styleInject(css$9);

var timer = null;

var Carousel = function Carousel(_ref) {
  var children = _ref.children,
      disabledGesture = _ref.disabledGesture,
      time = _ref.time,
      autoPlay = _ref.autoPlay,
      dots = _ref.dots,
      index = _ref.index,
      loop = _ref.loop;

  var _useState = useState({
    transitionDuration: '0ms',
    transform: 'translate3d(0, 0, 0)'
  }),
      _useState2 = _slicedToArray(_useState, 2),
      style = _useState2[0],
      setStyle = _useState2[1];

  var _useState3 = useState(0),
      _useState4 = _slicedToArray(_useState3, 2),
      activeIdx = _useState4[0],
      setIndex = _useState4[1];

  var _useState5 = useState(0),
      _useState6 = _slicedToArray(_useState5, 2),
      tempMX = _useState6[0],
      setTempMX = _useState6[1];

  var _useState7 = useState(0),
      _useState8 = _slicedToArray(_useState7, 2),
      preMX = _useState8[0],
      setPreMX = _useState8[1];

  var _useState9 = useState({
    touchStartX: 0,
    touchStartY: 0
  }),
      _useState10 = _slicedToArray(_useState9, 2),
      touch = _useState10[0],
      setTouch = _useState10[1];

  var canMove = true;
  var carouselRef = useRef(null);

  var clearTimer = function clearTimer() {
    timer && clearTimeout(timer);
    timer = null;
  };

  var go = function go(index, isInit) {
    var offsetWidth = carouselRef.current.offsetWidth;
    var preMoveX = -1 * offsetWidth * index;
    setStyle({
      transitionDuration: !isInit ? '300ms' : '0ms',
      transform: "translate3d(".concat(preMoveX, "px, 0, 0)")
    });
    setPreMX(preMoveX);
  };

  var handleLoop = function handleLoop(moveX) {
    var offsetWidth = carouselRef.current.offsetWidth;
    var preMoveX = preMX;

    var sty = _objectSpread2({}, style);

    if (Math.abs(moveX) > offsetWidth * (_carouseLength - 1)) {
      preMoveX = 0;
      sty.transform = 'translate3d(0, 0, 0)';
      setStyle(sty);
    } else if (moveX > 0) {
      preMoveX = -1 * offsetWidth * (_carouseLength - 1);
    }

    setPreMX(preMoveX);
  };

  var next = function next() {
    if (timer) return;
    var offsetWidth = carouselRef.current.offsetWidth;
    timer = setTimeout(function () {
      var updateTimer;
      var preMoveX = preMX;
      var moveX = preMoveX - offsetWidth;

      if (loop) {
        handleLoop(moveX);
      } else if (Math.abs(moveX) > offsetWidth * (_carouseLength - 1)) {
        preMoveX = 0;
        moveX = 0;
        setPreMX(preMoveX);
      }

      if (loop) {
        // 切换延迟一帧
        updateTimer = setTimeout(function () {
          update(moveX, offsetWidth);
          clearTimeout(updateTimer);
        }, 16);
      } else {
        update(moveX, offsetWidth);
      }
    }, time);
  };

  var startAnim = function startAnim() {
    clearTimer();
    next();
  };

  var listenAnimEnd = function listenAnimEnd(animWidth, sty) {
    document.addEventListener('transitionend', function () {
      var style = _objectSpread2({}, sty);

      style.transitionDuration = '0ms';
      setStyle(style);
      setTempMX(0);
      setPreMX(animWidth);
      if (autoPlay) startAnim();
    }, {
      capture: false,
      once: true
    });
  };

  var update = function update(moveX, offsetWidth) {
    var idx = Math.abs(moveX) / offsetWidth;

    if (loop && idx >= _carouseLength - 1) {
      idx = 0;
    }

    var sty = {
      transitionDuration: "300ms",
      transform: "translate3d(".concat(moveX, "px, 0, 0)")
    };
    setStyle(sty);
    setIndex(idx);
    listenAnimEnd(moveX, sty);
  };

  var onTouchStart = function onTouchStart(event) {
    clearTimer();

    if (disabledGesture || !canMove) {
      return;
    }

    setTouch({
      touchStartX: event.targetTouches[0].pageX,
      touchStartY: event.targetTouches[0].pageY
    });
  };

  var onTouchMove = function onTouchMove(event) {
    if (disabledGesture) return;
    var carouselDom = event.currentTarget;
    var touchEndX = event.changedTouches[0].pageX;
    var offsetWidth = carouselDom.offsetWidth;
    var tempMoveX = touchEndX - touch.touchStartX;
    var moveY = event.changedTouches[0].pageY - touch.touchStartY;
    var absMoveX = Math.abs(tempMoveX);

    var sty = _objectSpread2({}, style);

    if (absMoveX < 5 || absMoveX >= 5 && moveY >= 1.73 * absMoveX) {
      canMove = false;
    } else if (event.cancelable) {
      canMove = true;
      event.preventDefault();
    }

    if (!canMove) {
      setTempMX(tempMoveX);
      return;
    }

    var moveX = tempMoveX + preMX;

    if (!loop && (moveX > 0 || Math.abs(moveX) > offsetWidth * (_carouseLength - 1))) {
      setTempMX(0);
      return;
    }

    if (loop) handleLoop(moveX);
    sty.transform = "translate3d(".concat(moveX, "px, 0, 0)");
    setStyle(sty);
    setTempMX(tempMoveX);
  };

  var onTouchEnd = function onTouchEnd(event) {
    if (disabledGesture || !canMove) return;
    var carouselDom = event.currentTarget;
    var offsetWidth = carouselDom.offsetWidth;
    var animWidth = Math.abs(tempMX) > offsetWidth / 2 ? tempMX > 0 ? preMX + offsetWidth : preMX - offsetWidth : preMX;
    update(animWidth, offsetWidth);
  };

  useEffect(function () {
    if (React.Children.count(children) > 0) {
      go(index, true);
      if (autoPlay) startAnim();
    }
  }, []);
  useEffect(function () {
    if (React.Children.count(children) >= index) {
      go(index);
    }
  }, [index]);
  var dotsArr = [];
  var carouselList = React.Children.map(children, function (el, index) {
    var dot = React.createElement("li", {
      key: index,
      className: classNames('point', {
        'is-active': activeIdx === index
      })
    });
    dotsArr.push(dot);
    return React.createElement("div", {
      className: "carousel-item",
      key: index + 1
    }, el);
  });
  var dotsRender = dots ? React.createElement("ul", {
    className: "pagination-point-wrapper"
  }, dotsArr) : null;

  if (loop) {
    carouselList.push(React.cloneElement(carouselList[0], {
      key: 0
    }));
  }

  var _carouseLength = React.Children.count(children) + Number(loop);

  return React.createElement("div", {
    className: "ink-carousel"
  }, React.createElement("ul", {
    className: "carousel-wrapper",
    style: style,
    ref: carouselRef,
    onTouchStart: onTouchStart,
    onTouchMove: onTouchMove,
    onTouchEnd: onTouchEnd
  }, carouselList), dotsRender);
};

Carousel.propTypes = {
  children: PropTypes.array,
  disabledGesture: PropTypes.bool,
  time: PropTypes.number,
  loop: PropTypes.bool,
  autoPlay: PropTypes.bool,
  dots: PropTypes.bool,
  index: PropTypes.number
};
Carousel.defaultProps = {
  disabledGesture: false,
  time: 2000,
  dots: false,
  loop: false,
  autoPlay: false,
  index: 0
};

var css$a = ".ink-tabs .tab-navigator{width:100%;border-bottom:1px solid #ccc;padding:0 15px}.ink-tabs .tab-navigator .nav{text-align:center;height:45px;line-height:45px;font-size:18px}.ink-tabs .tab-navigator .active{color:#108ee9}";
styleInject(css$a);

var Tabs = function Tabs(_ref) {
  var enableGesture = _ref.enableGesture,
      tabs = _ref.tabs,
      children = _ref.children;

  var _useState = useState(0),
      _useState2 = _slicedToArray(_useState, 2),
      index = _useState2[0],
      setIndex = _useState2[1];

  return React.createElement("div", {
    className: "ink-tabs"
  }, React.createElement(Flex, {
    justifyBetween: true,
    alignCenter: true,
    className: "tab-navigator"
  }, tabs.map(function (tab, i) {
    return React.createElement(Flex, {
      key: i,
      justifyCenter: true,
      alignCenter: true,
      flex: "1 0 ".concat(1 / tabs.length * 100, "%"),
      className: classNames('nav', {
        active: i === index
      }),
      onClick: function onClick() {
        return setIndex(i);
      }
    }, tab);
  })), React.createElement(Carousel, {
    disabledGesture: !enableGesture,
    index: index
  }, children));
};

Tabs.propTypes = {
  children: PropTypes.array,
  enableGesture: PropTypes.bool,
  tabs: PropTypes.array
};
Tabs.defaultProps = {
  enableGesture: true
};

export { Button, Carousel, Flex, Header, Loading, Page, Progress, Radio, Component as SearchBar, Switch, Tabs };
//# sourceMappingURL=index.js.map
