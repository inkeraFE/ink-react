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

var Header = function Header(_ref) {
  var left = _ref.left,
      center = _ref.center,
      right = _ref.right,
      className = _ref.className;
  return _react.default.createElement("header", {
    className: (0, _classnames.default)('ink-header', className)
  }, left || _react.default.createElement("div", null), center || _react.default.createElement("div", null), right || _react.default.createElement("div", null));
};

Header.propTypes = {
  left: _propTypes.default.element,
  center: _propTypes.default.element,
  right: _propTypes.default.element,
  className: _propTypes.default.string
};
var _default = Header;
exports.default = _default;