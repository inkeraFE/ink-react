"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Switch = function Switch(_ref) {
  var checked = _ref.checked,
      onChange = _ref.onChange;

  var handleClick = function handleClick(e) {
    e.preventDefault();
    onChange(e);
  };

  return _react.default.createElement("label", {
    className: "ink-switch",
    onClick: handleClick
  }, _react.default.createElement("input", {
    className: "switch-input",
    type: "checkbox",
    checked: checked,
    onChange: function onChange() {}
  }), _react.default.createElement("label", {
    className: "switch-label"
  }));
};

Switch.propTypes = {
  checked: _propTypes.default.bool,
  onChange: _propTypes.default.func
};
Switch.defaultProps = {
  checked: false,
  onChange: function onChange() {}
};
var _default = Switch;
exports.default = _default;