webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Navbar.module.css */ \"./styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/Users/mst-mbpr/Documents/coding/blog/michaelqq.com/components/navbar.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar navLabels = [{\n  path: \"/blog\",\n  name: \"Blog\"\n}, {\n  path: \"/\",\n  name: \"Home\"\n}];\n\nvar Navbar = function Navbar(_ref) {\n  _s();\n\n  var pathName = _ref.pathName;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      toggle = _React$useState2[0],\n      setToggle = _React$useState2[1];\n\n  var toggleMenu = function toggleMenu() {\n    return setToggle(!toggle);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a[\"navbar\"],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"nav\", {\n      className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a[\"normal-nav\"],\n      children: navLabels.map(function (label, index) {\n        return pathName.match(\"^\".concat(label.path)) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          to: label.path,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"li\", {\n            className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a[\"active\"],\n            children: label.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 27,\n            columnNumber: 15\n          }, _this)\n        }, Math.random(), false, {\n          fileName: _jsxFileName,\n          lineNumber: 26,\n          columnNumber: 13\n        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          to: label.path,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"li\", {\n            children: label.name\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 31,\n            columnNumber: 15\n          }, _this)\n        }, Math.random(), false, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 13\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"nav\", {\n      className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a[\"mobile-nav\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a[\"menu-icon\"],\n        onClick: _this.toggleMenu,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"i\", {\n          className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a[\"fa fa-bars\"],\n          \"aria-hidden\": \"true\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this), toggle && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a[\"nav-list\"],\n        children: navLabels.map(function (label, index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a[\"list-item\"],\n            onClick: _this.toggleMenu,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n              to: label.path,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"li\", {\n                children: label.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 51,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 17\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Navbar, \"KMOoc8w16Lq5ZnA3xKzfamBycFo=\");\n\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanM/ODQxYiJdLCJuYW1lcyI6WyJuYXZMYWJlbHMiLCJwYXRoIiwibmFtZSIsIk5hdmJhciIsInBhdGhOYW1lIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInRvZ2dsZSIsInNldFRvZ2dsZSIsInRvZ2dsZU1lbnUiLCJzdHlsZXMiLCJtYXAiLCJsYWJlbCIsImluZGV4IiwibWF0Y2giLCJNYXRoIiwicmFuZG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBRyxDQUNoQjtBQUNFQyxNQUFJLEVBQUUsT0FEUjtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQURnQixFQUtoQjtBQUNFRCxNQUFJLEVBQUUsR0FEUjtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQUxnQixDQUFsQjs7QUFXQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSx3QkFDSEMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FERztBQUFBO0FBQUEsTUFDeEJDLE1BRHdCO0FBQUEsTUFDaEJDLFNBRGdCOztBQUcvQixNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFdBQU1ELFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQWY7QUFBQSxHQUFuQjs7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUcsZ0VBQU0sQ0FBQyxRQUFELENBQXRCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVBLGdFQUFNLENBQUMsWUFBRCxDQUF0QjtBQUFBLGdCQUNHVixTQUFTLENBQUNXLEdBQVYsQ0FBYyxVQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSxlQUNiVCxRQUFRLENBQUNVLEtBQVQsWUFBbUJGLEtBQUssQ0FBQ1gsSUFBekIsa0JBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFFLEVBQUVXLEtBQUssQ0FBQ1gsSUFBaEI7QUFBQSxpQ0FDRTtBQUFJLHFCQUFTLEVBQUVTLGdFQUFNLENBQUMsUUFBRCxDQUFyQjtBQUFBLHNCQUFrQ0UsS0FBSyxDQUFDVjtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBMkJhLElBQUksQ0FBQ0MsTUFBTCxFQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGdCQUtFLHFFQUFDLGdEQUFEO0FBQU0sWUFBRSxFQUFFSixLQUFLLENBQUNYLElBQWhCO0FBQUEsaUNBQ0U7QUFBQSxzQkFBS1csS0FBSyxDQUFDVjtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUEyQmEsSUFBSSxDQUFDQyxNQUFMLEVBQTNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTlc7QUFBQSxPQUFkO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBZUU7QUFBSyxlQUFTLEVBQUVOLGdFQUFNLENBQUMsWUFBRCxDQUF0QjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUEsZ0VBQU0sQ0FBQyxXQUFELENBQXRCO0FBQXFDLGVBQU8sRUFBRSxLQUFJLENBQUNELFVBQW5EO0FBQUEsK0JBQ0U7QUFBRyxtQkFBUyxFQUFFQyxnRUFBTSxDQUFDLFlBQUQsQ0FBcEI7QUFBb0MseUJBQVk7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUtHSCxNQUFNLGlCQUNMO0FBQUssaUJBQVMsRUFBRUcsZ0VBQU0sQ0FBQyxVQUFELENBQXRCO0FBQUEsa0JBQ0dWLFNBQVMsQ0FBQ1csR0FBVixDQUFjLFVBQUNDLEtBQUQsRUFBUUMsS0FBUjtBQUFBLDhCQUNiO0FBRUUscUJBQVMsRUFBRUgsZ0VBQU0sQ0FBQyxXQUFELENBRm5CO0FBR0UsbUJBQU8sRUFBRSxLQUFJLENBQUNELFVBSGhCO0FBQUEsbUNBS0UscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBRSxFQUFFRyxLQUFLLENBQUNYLElBQWhCO0FBQUEscUNBQ0U7QUFBQSwwQkFBS1csS0FBSyxDQUFDVjtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEYsYUFDT1csS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURhO0FBQUEsU0FBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVDRCxDQTVDRDs7R0FBTVYsTTs7S0FBQUEsTTtBQThDU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9OYXZiYXIubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBuYXZMYWJlbHMgPSBbXG4gIHtcbiAgICBwYXRoOiBcIi9ibG9nXCIsXG4gICAgbmFtZTogXCJCbG9nXCIsXG4gIH0sXG4gIHtcbiAgICBwYXRoOiBcIi9cIixcbiAgICBuYW1lOiBcIkhvbWVcIixcbiAgfSxcbl07XG5cbmNvbnN0IE5hdmJhciA9ICh7IHBhdGhOYW1lIH0pID0+IHtcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4gc2V0VG9nZ2xlKCF0b2dnbGUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm5hdmJhclwiXX0+XG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzW1wibm9ybWFsLW5hdlwiXX0+XG4gICAgICAgIHtuYXZMYWJlbHMubWFwKChsYWJlbCwgaW5kZXgpID0+XG4gICAgICAgICAgcGF0aE5hbWUubWF0Y2goYF4ke2xhYmVsLnBhdGh9YCkgPyAoXG4gICAgICAgICAgICA8TGluayB0bz17bGFiZWwucGF0aH0ga2V5PXtNYXRoLnJhbmRvbSgpfT5cbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzW1wiYWN0aXZlXCJdfT57bGFiZWwubmFtZX08L2xpPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICA8TGluayB0bz17bGFiZWwucGF0aH0ga2V5PXtNYXRoLnJhbmRvbSgpfT5cbiAgICAgICAgICAgICAgPGxpPntsYWJlbC5uYW1lfTwvbGk+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgKVxuICAgICAgICApfVxuICAgICAgPC9uYXY+XG5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJtb2JpbGUtbmF2XCJdfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm1lbnUtaWNvblwiXX0gb25DbGljaz17dGhpcy50b2dnbGVNZW51fT5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9e3N0eWxlc1tcImZhIGZhLWJhcnNcIl19IGFyaWEtaGlkZGVuPVwidHJ1ZVwiPjwvaT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge3RvZ2dsZSAmJiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm5hdi1saXN0XCJdfT5cbiAgICAgICAgICAgIHtuYXZMYWJlbHMubWFwKChsYWJlbCwgaW5kZXgpID0+IChcbiAgICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICAgIGtleT17aW5kZXh9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJsaXN0LWl0ZW1cIl19XG4gICAgICAgICAgICAgICAgb25DbGljaz17dGhpcy50b2dnbGVNZW51fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPExpbmsgdG89e2xhYmVsLnBhdGh9PlxuICAgICAgICAgICAgICAgICAgPGxpPntsYWJlbC5uYW1lfTwvbGk+XG4gICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICkpfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9uYXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBOYXZiYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/navbar.js\n");

/***/ })

})