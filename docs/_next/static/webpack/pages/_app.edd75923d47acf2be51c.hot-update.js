webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ \"./node_modules/@babel/runtime/helpers/esm/slicedToArray.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/Navbar.module.css */ \"./styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\nvar _jsxFileName = \"/Users/mst-mbpr/Documents/coding/blog/michaelqq.com/components/navbar.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\n\n\n\nvar navLabels = [{\n  // path: \"/\",\n  name: \"Home\"\n}, {\n  path: \"/blog\",\n  name: \"Blog\"\n}];\n\nvar Navbar = function Navbar(_ref) {\n  _s();\n\n  var pathName = _ref.pathName;\n\n  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(false),\n      _React$useState2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(_React$useState, 2),\n      toggle = _React$useState2[0],\n      setToggle = _React$useState2[1];\n\n  var toggleMenu = function toggleMenu() {\n    return setToggle(!toggle);\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n    className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a[\"navbar\"],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"nav\", {\n      className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a[\"normal-nav\"],\n      children: navLabels.map(function (label, index) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n          href: label.path,\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"li\", {\n              className: pathName.startsWith(\"\".concat(label.path)) ? \"active\" : \"\",\n              children: label.name\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 27,\n              columnNumber: 15\n            }, _this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 26,\n            columnNumber: 13\n          }, _this)\n        }, index, false, {\n          fileName: _jsxFileName,\n          lineNumber: 25,\n          columnNumber: 11\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 23,\n      columnNumber: 7\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"nav\", {\n      className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a[\"mobile-nav\"],\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a[\"menu-icon\"],\n        onClick: toggleMenu,\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"i\", {\n          className: \"fa fa-bars\",\n          \"aria-hidden\": \"true\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 39,\n          columnNumber: 11\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 38,\n        columnNumber: 9\n      }, _this), toggle && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a[\"nav-list\"],\n        children: navLabels.map(function (label, index) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default.a[\"list-item\"],\n            onClick: toggleMenu,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {\n              href: label.path,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"li\", {\n                children: label.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 51,\n                columnNumber: 19\n              }, _this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 50,\n              columnNumber: 17\n            }, _this)\n          }, index, false, {\n            fileName: _jsxFileName,\n            lineNumber: 45,\n            columnNumber: 15\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 43,\n        columnNumber: 11\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 37,\n      columnNumber: 7\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 22,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(Navbar, \"KMOoc8w16Lq5ZnA3xKzfamBycFo=\");\n\n_c = Navbar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\nvar _c;\n\n$RefreshReg$(_c, \"Navbar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanM/ODQxYiJdLCJuYW1lcyI6WyJuYXZMYWJlbHMiLCJuYW1lIiwicGF0aCIsIk5hdmJhciIsInBhdGhOYW1lIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsInRvZ2dsZSIsInNldFRvZ2dsZSIsInRvZ2dsZU1lbnUiLCJzdHlsZXMiLCJtYXAiLCJsYWJlbCIsImluZGV4Iiwic3RhcnRzV2l0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxTQUFTLEdBQUcsQ0FDaEI7QUFDRTtBQUNBQyxNQUFJLEVBQUU7QUFGUixDQURnQixFQUtoQjtBQUNFQyxNQUFJLEVBQUUsT0FEUjtBQUVFRCxNQUFJLEVBQUU7QUFGUixDQUxnQixDQUFsQjs7QUFXQSxJQUFNRSxNQUFNLEdBQUcsU0FBVEEsTUFBUyxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSx3QkFDSEMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FERztBQUFBO0FBQUEsTUFDeEJDLE1BRHdCO0FBQUEsTUFDaEJDLFNBRGdCOztBQUcvQixNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLFdBQU1ELFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQWY7QUFBQSxHQUFuQjs7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUcsZ0VBQU0sQ0FBQyxRQUFELENBQXRCO0FBQUEsNEJBQ0U7QUFBSyxlQUFTLEVBQUVBLGdFQUFNLENBQUMsWUFBRCxDQUF0QjtBQUFBLGdCQUNHVixTQUFTLENBQUNXLEdBQVYsQ0FBYyxVQUFDQyxLQUFELEVBQVFDLEtBQVI7QUFBQSw0QkFDYixxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBRUQsS0FBSyxDQUFDVixJQUFsQjtBQUFBLGlDQUNFO0FBQUEsbUNBQ0U7QUFDQSx1QkFBUyxFQUFFRSxRQUFRLENBQUNVLFVBQVQsV0FBdUJGLEtBQUssQ0FBQ1YsSUFBN0IsS0FBdUMsUUFBdkMsR0FBa0QsRUFEN0Q7QUFBQSx3QkFHR1UsS0FBSyxDQUFDWDtBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsV0FBNkJZLEtBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGE7QUFBQSxPQUFkO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBZUU7QUFBSyxlQUFTLEVBQUVILGdFQUFNLENBQUMsWUFBRCxDQUF0QjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBRUEsZ0VBQU0sQ0FBQyxXQUFELENBQXRCO0FBQXFDLGVBQU8sRUFBRUQsVUFBOUM7QUFBQSwrQkFDRTtBQUFHLG1CQUFTLEVBQUMsWUFBYjtBQUEwQix5QkFBWTtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBS0dGLE1BQU0saUJBQ0w7QUFBSyxpQkFBUyxFQUFFRyxnRUFBTSxDQUFDLFVBQUQsQ0FBdEI7QUFBQSxrQkFDR1YsU0FBUyxDQUFDVyxHQUFWLENBQWMsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsOEJBQ2I7QUFFRSxxQkFBUyxFQUFFSCxnRUFBTSxDQUFDLFdBQUQsQ0FGbkI7QUFHRSxtQkFBTyxFQUFFRCxVQUhYO0FBQUEsbUNBS0UscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFFRyxLQUFLLENBQUNWLElBQWxCO0FBQUEscUNBQ0U7QUFBQSwwQkFBS1UsS0FBSyxDQUFDWDtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEYsYUFDT1ksS0FEUDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURhO0FBQUEsU0FBZDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFmRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVDRCxDQTVDRDs7R0FBTVYsTTs7S0FBQUEsTTtBQThDU0EscUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL25hdmJhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9OYXZiYXIubW9kdWxlLmNzc1wiO1xuXG5jb25zdCBuYXZMYWJlbHMgPSBbXG4gIHtcbiAgICAvLyBwYXRoOiBcIi9cIixcbiAgICBuYW1lOiBcIkhvbWVcIixcbiAgfSxcbiAge1xuICAgIHBhdGg6IFwiL2Jsb2dcIixcbiAgICBuYW1lOiBcIkJsb2dcIixcbiAgfSxcbl07XG5cbmNvbnN0IE5hdmJhciA9ICh7IHBhdGhOYW1lIH0pID0+IHtcbiAgY29uc3QgW3RvZ2dsZSwgc2V0VG9nZ2xlXSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKTtcblxuICBjb25zdCB0b2dnbGVNZW51ID0gKCkgPT4gc2V0VG9nZ2xlKCF0b2dnbGUpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm5hdmJhclwiXX0+XG4gICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzW1wibm9ybWFsLW5hdlwiXX0+XG4gICAgICAgIHtuYXZMYWJlbHMubWFwKChsYWJlbCwgaW5kZXgpID0+IChcbiAgICAgICAgICA8TGluayBocmVmPXtsYWJlbC5wYXRofSBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgIDxhPlxuICAgICAgICAgICAgICA8bGlcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwYXRoTmFtZS5zdGFydHNXaXRoKGAke2xhYmVsLnBhdGh9YCkgPyBcImFjdGl2ZVwiIDogXCJcIn1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtsYWJlbC5uYW1lfVxuICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgKSl9XG4gICAgICA8L25hdj5cblxuICAgICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlc1tcIm1vYmlsZS1uYXZcIl19PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wibWVudS1pY29uXCJdfSBvbkNsaWNrPXt0b2dnbGVNZW51fT5cbiAgICAgICAgICA8aSBjbGFzc05hbWU9XCJmYSBmYS1iYXJzXCIgYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7dG9nZ2xlICYmIChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wibmF2LWxpc3RcIl19PlxuICAgICAgICAgICAge25hdkxhYmVscy5tYXAoKGxhYmVsLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlc1tcImxpc3QtaXRlbVwiXX1cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVNZW51fVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgPExpbmsgaHJlZj17bGFiZWwucGF0aH0+XG4gICAgICAgICAgICAgICAgICA8bGk+e2xhYmVsLm5hbWV9PC9saT5cbiAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L25hdj5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IE5hdmJhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/navbar.js\n");

/***/ })

})