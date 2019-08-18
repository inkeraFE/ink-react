"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Loading = function Loading(_ref) {
  var color = _ref.color;
  return _react.default.createElement("div", {
    className: "ink-loading"
  }, _react.default.createElement("div", {
    className: "loading-item",
    style: {
      borderBottomColor: color,
      borderTopColor: color
    }
  }));
};

Loading.propTypes = {
  color: _propTypes.default.string
};
Loading.defaultProps = {
  color: '#108ee9'
};
var _default = Loading;
exports.default = _default;