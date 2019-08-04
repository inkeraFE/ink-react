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

  var cn = (0, _classnames.default)({
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

  return _react.default.createElement("div", _extends({}, rest, {
    className: cn,
    style: s
  }), children);
};

Flex.displayName = 'Flex';
Flex.propTypes = {
  flex: _propTypes.default.oneOfType([_propTypes.default.number, _propTypes.default.bool]),
  auto: _propTypes.default.bool,
  none: _propTypes.default.bool,
  width: _propTypes.default.string,
  height: _propTypes.default.string,
  row: _propTypes.default.bool,
  column: _propTypes.default.bool,
  wrap: _propTypes.default.bool,
  nowrap: _propTypes.default.bool,
  justifyStart: _propTypes.default.bool,
  justifyEnd: _propTypes.default.bool,
  justifyCenter: _propTypes.default.bool,
  justifyBetween: _propTypes.default.bool,
  justifyAround: _propTypes.default.bool,
  alignStart: _propTypes.default.bool,
  alignEnd: _propTypes.default.bool,
  alignCenter: _propTypes.default.bool,
  alignBaseline: _propTypes.default.bool,
  alignStretch: _propTypes.default.bool
};
var _default = Flex;
exports.default = _default;