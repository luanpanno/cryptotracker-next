/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function() {
var exports = {};
exports.id = "pages/coin/[id]";
exports.ids = ["pages/coin/[id]"];
exports.modules = {

/***/ "./pages/coin/[id].tsx":
/*!*****************************!*\
  !*** ./pages/coin/[id].tsx ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Container\": function() { return /* binding */ Container; },\n/* harmony export */   \"getServerSideProps\": function() { return /* binding */ getServerSideProps; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/Layout */ \"./components/Layout/index.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);\n\nvar _jsxFileName = \"/home/luanpanno/www/next-crypto/src/pages/coin/[id].tsx\";\n\n\n\nconst Container = (styled_components__WEBPACK_IMPORTED_MODULE_3___default().div)`\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: white;\n\n  & > div {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    justify-content: center;\n    border: 1px solid white;\n    padding: 24px;\n    border-radius: 4px;\n  }\n`;\n\nconst CoinPage = ({\n  coin\n}) => {\n  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Layout__WEBPACK_IMPORTED_MODULE_2__.Layout, {\n    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Container, {\n        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: coin === null || coin === void 0 ? void 0 : coin.image.large,\n            alt: coin === null || coin === void 0 ? void 0 : coin.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n              children: coin === null || coin === void 0 ? void 0 : coin.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 31,\n              columnNumber: 15\n            }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n              children: coin === null || coin === void 0 ? void 0 : coin.symbol\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 15\n            }, undefined)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 30,\n            columnNumber: 13\n          }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [\"$ \", coin === null || coin === void 0 ? void 0 : coin.market_data.current_price.usd.toLocaleString()]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 34,\n            columnNumber: 13\n          }, undefined)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 28,\n          columnNumber: 11\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 25,\n    columnNumber: 5\n  }, undefined);\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (CoinPage);\nconst getServerSideProps = async context => {\n  const {\n    id\n  } = context.query;\n  const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);\n  const coin = await res.json();\n  return {\n    props: {\n      coin\n    }\n  };\n};//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9jb2luL1tpZF0udHN4PzkzMzEiXSwibmFtZXMiOlsiQ29udGFpbmVyIiwic3R5bGVkIiwiQ29pblBhZ2UiLCJjb2luIiwiaW1hZ2UiLCJsYXJnZSIsIm5hbWUiLCJzeW1ib2wiLCJtYXJrZXRfZGF0YSIsImN1cnJlbnRfcHJpY2UiLCJ1c2QiLCJ0b0xvY2FsZVN0cmluZyIsImdldFNlcnZlclNpZGVQcm9wcyIsImNvbnRleHQiLCJpZCIsInF1ZXJ5IiwicmVzIiwiZmV0Y2giLCJqc29uIiwicHJvcHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTUEsU0FBUyxHQUFHQyw4REFBVztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FmTzs7QUFpQlAsTUFBTUMsUUFBUSxHQUFHLENBQUM7QUFBRUM7QUFBRixDQUFELEtBQWM7QUFDN0Isc0JBQ0UsOERBQUMsc0RBQUQ7QUFBQSwyQkFDRTtBQUFBLDZCQUNFLDhEQUFDLFNBQUQ7QUFBQSwrQkFDRTtBQUFBLGtDQUNFO0FBQUssZUFBRyxFQUFFQSxJQUFGLGFBQUVBLElBQUYsdUJBQUVBLElBQUksQ0FBRUMsS0FBTixDQUFZQyxLQUF0QjtBQUE2QixlQUFHLEVBQUVGLElBQUYsYUFBRUEsSUFBRix1QkFBRUEsSUFBSSxDQUFFRztBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLGVBRUU7QUFBQSxvQ0FDRTtBQUFBLHdCQUFLSCxJQUFMLGFBQUtBLElBQUwsdUJBQUtBLElBQUksQ0FBRUc7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLGVBRUU7QUFBQSx3QkFBSUgsSUFBSixhQUFJQSxJQUFKLHVCQUFJQSxJQUFJLENBQUVJO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRkYsZUFNRTtBQUFBLDZCQUFNSixJQUFOLGFBQU1BLElBQU4sdUJBQU1BLElBQUksQ0FBRUssV0FBTixDQUFrQkMsYUFBbEIsQ0FBZ0NDLEdBQWhDLENBQW9DQyxjQUFwQyxFQUFOO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQWdCRCxDQWpCRDs7QUFtQkEsK0RBQWVULFFBQWY7QUFFTyxNQUFNVSxrQkFBc0MsR0FBRyxNQUFPQyxPQUFQLElBQW1CO0FBQ3ZFLFFBQU07QUFBRUM7QUFBRixNQUFTRCxPQUFPLENBQUNFLEtBQXZCO0FBQ0EsUUFBTUMsR0FBRyxHQUFHLE1BQU1DLEtBQUssQ0FBRSwwQ0FBeUNILEVBQUcsRUFBOUMsQ0FBdkI7QUFDQSxRQUFNWCxJQUFJLEdBQUcsTUFBTWEsR0FBRyxDQUFDRSxJQUFKLEVBQW5CO0FBRUEsU0FBTztBQUNMQyxTQUFLLEVBQUU7QUFDTGhCO0FBREs7QUFERixHQUFQO0FBS0QsQ0FWTSIsImZpbGUiOiIuL3BhZ2VzL2NvaW4vW2lkXS50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBHZXRTZXJ2ZXJTaWRlUHJvcHMgfSBmcm9tICduZXh0JztcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBMYXlvdXQgfSBmcm9tICcuLi8uLi9jb21wb25lbnRzL0xheW91dCc7XG5pbXBvcnQgc3R5bGVkIGZyb20gJ3N0eWxlZC1jb21wb25lbnRzJztcblxuZXhwb3J0IGNvbnN0IENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBjb2xvcjogd2hpdGU7XG5cbiAgJiA+IGRpdiB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgcGFkZGluZzogMjRweDtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIH1cbmA7XG5cbmNvbnN0IENvaW5QYWdlID0gKHsgY29pbiB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxtYWluPlxuICAgICAgICA8Q29udGFpbmVyPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8aW1nIHNyYz17Y29pbj8uaW1hZ2UubGFyZ2V9IGFsdD17Y29pbj8ubmFtZX0gLz5cbiAgICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICAgIDxoMT57Y29pbj8ubmFtZX08L2gxPlxuICAgICAgICAgICAgICA8cD57Y29pbj8uc3ltYm9sfTwvcD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHA+JCB7Y29pbj8ubWFya2V0X2RhdGEuY3VycmVudF9wcmljZS51c2QudG9Mb2NhbGVTdHJpbmcoKX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvQ29udGFpbmVyPlxuICAgICAgPC9tYWluPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29pblBhZ2U7XG5cbmV4cG9ydCBjb25zdCBnZXRTZXJ2ZXJTaWRlUHJvcHM6IEdldFNlcnZlclNpZGVQcm9wcyA9IGFzeW5jIChjb250ZXh0KSA9PiB7XG4gIGNvbnN0IHsgaWQgfSA9IGNvbnRleHQucXVlcnk7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwczovL2FwaS5jb2luZ2Vja28uY29tL2FwaS92My9jb2lucy8ke2lkfWApO1xuICBjb25zdCBjb2luID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHByb3BzOiB7XG4gICAgICBjb2luLFxuICAgIH0sXG4gIH07XG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/coin/[id].tsx\n");

/***/ }),

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router-context.js");;

/***/ }),

/***/ "../next-server/lib/router/utils/get-asset-path-from-route":
/*!**************************************************************************************!*\
  !*** external "next/dist/next-server/lib/router/utils/get-asset-path-from-route.js" ***!
  \**************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/dist/next-server/lib/router/utils/get-asset-path-from-route.js");;

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = require("styled-components");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = __webpack_require__.X(0, ["vendors-node_modules_next_link_js","components_Layout_index_tsx"], function() { return __webpack_exec__("./pages/coin/[id].tsx"); });
module.exports = __webpack_exports__;

})();