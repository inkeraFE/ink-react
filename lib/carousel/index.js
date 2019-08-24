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

var Carousel = function Carousel(_ref) {
  var children = _ref.children,
      enableGesture = _ref.enableGesture,
      isTabs = _ref.isTabs;
};

Carousel.propTypes = {
  children: _propTypes.default.element,
  enableGesture: _propTypes.default.bool
};
Carousel.defaultProps = {
  enableGesture: false
};
var _default = Carousel;
exports.default = _default;