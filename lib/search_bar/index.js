"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

require("./style.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

// // rollup bug ?
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
      return _react.default.createElement("form", {
        action: "",
        className: "ink-search",
        onSubmit: this.handleSubmit.bind(this)
      }, _react.default.createElement("div", {
        className: "search-icon"
      }, _react.default.createElement("div", {
        className: "icon-wrapper"
      })), _react.default.createElement("input", {
        className: "search-input",
        type: "search",
        placeholder: placeholder,
        value: value,
        onChange: this.handleChange.bind(this),
        onFocus: this.handleFocus.bind(this)
      }), canClear && showClear ? _react.default.createElement("div", {
        className: "icon-clear",
        onClick: this.handleClear.bind(this)
      }) : null);
    }
  }]);

  return Component;
}(_react.default.Component);

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