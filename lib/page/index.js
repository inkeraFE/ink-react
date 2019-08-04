"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _classnames = _interopRequireDefault(require("classnames"));

var _index = _interopRequireDefault(require("../flex/index"));

require("./style.less");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Page = function Page(_ref) {
  var className = _ref.className,
      pageClassName = _ref.pageClassName,
      white = _ref.white,
      header = _ref.header,
      tabbar = _ref.tabbar,
      bottom = _ref.bottom,
      children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["className", "pageClassName", "white", "header", "tabbar", "bottom", "children"]);

  return _react.default.createElement(_index.default, _extends({}, rest, {
    column: true,
    className: (0, _classnames.default)({
      page: true,
      'page-white': white
    }, className)
  }), header && _react.default.createElement(_index.default, {
    column: true,
    none: true
  }, header), _react.default.createElement(_index.default, {
    flex: true,
    column: true,
    className: (0, _classnames.default)('page-content block', pageClassName)
  }, children), bottom, tabbar && _react.default.createElement(_index.default, {
    column: true,
    none: true,
    className: "page-tabbar"
  }, tabbar));
};

Page.displayName = 'Page';
Page.propTypes = {
  children: _propTypes.default.node,
  className: _propTypes.default.string,
  pageClassName: _propTypes.default.string,
  white: _propTypes.default.bool,
  header: _propTypes.default.node,
  tabbar: _propTypes.default.node,
  bottom: _propTypes.default.node
};
var _default = Page;
exports.default = _default;