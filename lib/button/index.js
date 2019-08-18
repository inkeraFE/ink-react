"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

require("./style.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

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

  return _react.default.createElement("button", _extends({}, rest, {
    className: (0, _classnames.default)('ink-btn', className, typeClass(), {
      'btn-large': size === 'large',
      'is-disabled': disabled
    }),
    disabled: disabled
  }), children);
};

Button.propTypes = {
  children: _propTypes.default.element,
  className: _propTypes.default.string,
  type: _propTypes.default.string,
  size: _propTypes.default.string,
  disabled: _propTypes.default.bool
};
Button.defaultProps = {
  className: '',
  type: 'default',
  size: 'small',
  disabled: false
};
var _default = Button;
exports.default = _default;