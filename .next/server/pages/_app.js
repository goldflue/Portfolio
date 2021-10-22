"use strict";
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/layouts/main.js":
/*!************************************!*\
  !*** ./components/layouts/main.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/Head */ "next/Head");
/* harmony import */ var next_Head__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_Head__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @chakra-ui/react */ "@chakra-ui/react");
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\Navn\\source\\repos\\goldfluePortfolio\\components\\layouts\\main.js";




const Main = ({
  children,
  router
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Box, {
    as: "main",
    pb: 8,
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)((next_Head__WEBPACK_IMPORTED_MODULE_0___default()), {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 17
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)("title", {
        children: "Daniel Theil Valnert - Home"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_2__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_1__.Container, {
      maxW: "container.md",
      pt: 14,
      children: children
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Main);

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_provider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @chakra-ui/provider */ "@chakra-ui/provider");
/* harmony import */ var _chakra_ui_provider__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_provider__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layouts_main__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layouts/main */ "./components/layouts/main.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Navn\\source\\repos\\goldfluePortfolio\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






const Website = ({
  Component,
  pageProps,
  router
}) => {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_chakra_ui_provider__WEBPACK_IMPORTED_MODULE_0__.ChakraProvider, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_3__.jsxDEV)(_components_layouts_main__WEBPACK_IMPORTED_MODULE_1__.default, {
      router: router,
      children: /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_2__.createElement)(Component, _objectSpread(_objectSpread({}, pageProps), {}, {
        key: router.route,
        __self: undefined,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 17
        }
      }))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 6,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Website);

/***/ }),

/***/ "@chakra-ui/provider":
/*!**************************************!*\
  !*** external "@chakra-ui/provider" ***!
  \**************************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/provider");

/***/ }),

/***/ "@chakra-ui/react":
/*!***********************************!*\
  !*** external "@chakra-ui/react" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ "next/Head":
/*!****************************!*\
  !*** external "next/Head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/Head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOzs7QUFFQSxNQUFNRyxJQUFJLEdBQUcsQ0FBQztBQUFDQyxFQUFBQSxRQUFEO0FBQVdDLEVBQUFBO0FBQVgsQ0FBRCxLQUF3QjtBQUNqQyxzQkFDSSw4REFBQyxpREFBRDtBQUFLLE1BQUUsRUFBQyxNQUFSO0FBQWUsTUFBRSxFQUFFLENBQW5CO0FBQUEsNEJBQ0ksOERBQUMsa0RBQUQ7QUFBQSw4QkFDSTtBQUFNLFlBQUksRUFBQyxVQUFYO0FBQXNCLGVBQU8sRUFBQztBQUE5QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBTUksOERBQUMsdURBQUQ7QUFBVyxVQUFJLEVBQUMsY0FBaEI7QUFBK0IsUUFBRSxFQUFFLEVBQW5DO0FBQUEsZ0JBQ0tEO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWNILENBZkQ7O0FBaUJBLGlFQUFlRCxJQUFmOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCQTtBQUNBOzs7O0FBRUEsTUFBTUssT0FBTyxHQUFHLENBQUM7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQSxTQUFiO0FBQXdCTCxFQUFBQTtBQUF4QixDQUFELEtBQXNDO0FBQ2xELHNCQUNJLDhEQUFDLCtEQUFEO0FBQUEsMkJBQ0ksOERBQUMsNkRBQUQ7QUFBUSxZQUFNLEVBQUVBLE1BQWhCO0FBQUEsNkJBQ0kscURBQUMsU0FBRCxrQ0FBZUssU0FBZjtBQUEwQixXQUFHLEVBQUVMLE1BQU0sQ0FBQ00sS0FBdEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUFPSCxDQVJEOztBQVVBLGlFQUFlSCxPQUFmOzs7Ozs7Ozs7O0FDYkE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2RhbmllbHRoZWlsdmFsbmVydF9wb3J0Zm9saW8vLi9jb21wb25lbnRzL2xheW91dHMvbWFpbi5qcyIsIndlYnBhY2s6Ly9kYW5pZWx0aGVpbHZhbG5lcnRfcG9ydGZvbGlvLy4vcGFnZXMvX2FwcC5qcyIsIndlYnBhY2s6Ly9kYW5pZWx0aGVpbHZhbG5lcnRfcG9ydGZvbGlvL2V4dGVybmFsIFwiQGNoYWtyYS11aS9wcm92aWRlclwiIiwid2VicGFjazovL2RhbmllbHRoZWlsdmFsbmVydF9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJAY2hha3JhLXVpL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vZGFuaWVsdGhlaWx2YWxuZXJ0X3BvcnRmb2xpby9leHRlcm5hbCBcIm5leHQvSGVhZFwiIiwid2VicGFjazovL2RhbmllbHRoZWlsdmFsbmVydF9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL2RhbmllbHRoZWlsdmFsbmVydF9wb3J0Zm9saW8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L0hlYWQnXHJcbmltcG9ydCB7IEJveCwgQ29udGFpbmVyIH0gZnJvbSAnQGNoYWtyYS11aS9yZWFjdCdcclxuXHJcbmNvbnN0IE1haW4gPSAoe2NoaWxkcmVuLCByb3V0ZXJ9KSA9PiB7XHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEJveCBhcz1cIm1haW5cIiBwYj17OH0+XHJcbiAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPG1ldGEgbmFtZT1cInZpZXdwb3J0XCIgY29udGVudD1cIndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xXCIgLz5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5EYW5pZWwgVGhlaWwgVmFsbmVydCAtIEhvbWU8L3RpdGxlPlxyXG4gICAgICAgICAgICA8L0hlYWQ+XHJcblxyXG4gICAgICAgICAgICA8Q29udGFpbmVyIG1heFc9XCJjb250YWluZXIubWRcIiBwdD17MTR9PlxyXG4gICAgICAgICAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgICAgICA8L0NvbnRhaW5lcj5cclxuICAgICAgICA8L0JveD5cclxuXHJcbiAgICAgICAgXHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IE1haW4iLCJpbXBvcnQgeyBDaGFrcmFQcm92aWRlciB9IGZyb20gXCJAY2hha3JhLXVpL3Byb3ZpZGVyXCI7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL2NvbXBvbmVudHMvbGF5b3V0cy9tYWluXCI7XHJcblxyXG5jb25zdCBXZWJzaXRlID0gKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMsIHJvdXRlcn0gKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxDaGFrcmFQcm92aWRlcj5cclxuICAgICAgICAgICAgPExheW91dCByb3V0ZXI9e3JvdXRlcn0+XHJcbiAgICAgICAgICAgICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IGtleT17cm91dGVyLnJvdXRlfSAvPlxyXG4gICAgICAgICAgICA8L0xheW91dD5cclxuICAgICAgICA8L0NoYWtyYVByb3ZpZGVyPlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBXZWJzaXRlO1xyXG4gIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQGNoYWtyYS11aS9wcm92aWRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAY2hha3JhLXVpL3JlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvSGVhZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sIm5hbWVzIjpbIkhlYWQiLCJCb3giLCJDb250YWluZXIiLCJNYWluIiwiY2hpbGRyZW4iLCJyb3V0ZXIiLCJDaGFrcmFQcm92aWRlciIsIkxheW91dCIsIldlYnNpdGUiLCJDb21wb25lbnQiLCJwYWdlUHJvcHMiLCJyb3V0ZSJdLCJzb3VyY2VSb290IjoiIn0=