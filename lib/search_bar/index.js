"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var Component = function Component(_ref) {
  var value = _ref.value,
      placeholder = _ref.placeholder,
      canClear = _ref.canClear,
      onChange = _ref.onChange,
      onSubmit = _ref.onSubmit;

  var _useState = (0, _react.useState)(false),
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

  return _react.default.createElement("form", {
    action: "",
    className: "ink-search",
    onSubmit: handleSubmit
  }, _react.default.createElement("div", {
    className: "search-icon"
  }, _react.default.createElement("div", {
    className: "icon-wrapper"
  })), _react.default.createElement("input", {
    className: "search-input",
    type: "search",
    placeholder: placeholder,
    value: value,
    onChange: handleChange,
    onFocus: handleFocus
  }), canClear && show ? _react.default.createElement("div", {
    className: "icon-clear",
    onClick: handleClear
  }) : null);
};

Component.propTypes = {
  value: _propTypes.default.string,
  placeholder: _propTypes.default.string,
  canClear: _propTypes.default.bool,
  onChange: _propTypes.default.func,
  onSubmit: _propTypes.default.func
};
Component.defaultProps = {
  canClear: true,
  placeholder: '搜索',
  onChange: function onChange() {},
  onSubmit: function onSubmit() {}
};
var _default = Component;
exports.default = _default;