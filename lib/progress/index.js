"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Progress = function Progress(_ref) {
  var strokeHeight = _ref.strokeHeight,
      strokeColor = _ref.strokeColor,
      percent = _ref.percent;
  return _react.default.createElement("div", {
    className: "ink-progress"
  }, _react.default.createElement("div", {
    className: "progress-default-line",
    style: {
      borderWidth: strokeHeight
    }
  }), _react.default.createElement("div", {
    className: "progress-active-line",
    style: {
      width: "".concat(percent % 100, "%"),
      background: strokeColor,
      height: strokeHeight
    }
  }));
};

Progress.propTypes = {
  strokeHeight: _propTypes.default.number,
  strokeColor: _propTypes.default.string,
  percent: _propTypes.default.number.isRequired
};
Progress.defaultProps = {
  strokeHeight: 2,
  strokeColor: '#108ee9'
};
var _default = Progress;
exports.default = _default;