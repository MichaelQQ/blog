webpackHotUpdate_N_E("pages/_app",{

/***/ "./components/navbar.js":
/*!******************************!*\
  !*** ./components/navbar.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ \"./node_modules/@babel/runtime/helpers/esm/classCallCheck.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ \"./node_modules/@babel/runtime/helpers/esm/createClass.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ \"./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ \"./node_modules/@babel/runtime/helpers/esm/inherits.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ \"./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ \"./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/Navbar.module.css */ \"./styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8__);\n\n\n\n\n\n\n\n\nvar _jsxFileName = \"/Users/mst-mbpr/Documents/coding/blog/michaelqq.com/components/navbar.js\";\n\nfunction _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(this, result); }; }\n\nfunction _isNativeReflectConstruct() { if (typeof Reflect === \"undefined\" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === \"function\") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }\n\n\nvar navLabels = [{\n  path: '/blog',\n  name: 'Blog'\n}, {\n  path: '/',\n  name: 'Home'\n}];\n\nvar Navbar = /*#__PURE__*/function (_Component) {\n  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(Navbar, _Component);\n\n  var _super = _createSuper(Navbar);\n\n  function Navbar(props) {\n    var _this;\n\n    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(this, Navbar);\n\n    _this = _super.call(this, props);\n\n    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__[\"default\"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_this), \"toggleMenu\", function () {\n      _this.setState({\n        toggle: !_this.state.toggle\n      });\n    });\n\n    _this.state = {\n      toggle: false\n    };\n    return _this;\n  }\n\n  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(Navbar, [{\n    key: \"render\",\n    value: function render(props) {\n      var _this2 = this;\n\n      var pathName = props.pathName,\n          user = props.user;\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"div\", {\n        className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a[\"navbar\"],\n        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"nav\", {\n          className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a[\"normal-nav\"],\n          children: [navLabels.map(function (label, index) {\n            return pathName.match(\"^\".concat(label.path)) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(Link, {\n              to: label.path,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"li\", {\n                className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a[\"active\"],\n                children: label.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 32,\n                columnNumber: 57\n              }, _this2)\n            }, Math.random(), false, {\n              fileName: _jsxFileName,\n              lineNumber: 32,\n              columnNumber: 15\n            }, _this2) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(Link, {\n              to: label.path,\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"li\", {\n                children: label.name\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 33,\n                columnNumber: 57\n              }, _this2)\n            }, Math.random(), false, {\n              fileName: _jsxFileName,\n              lineNumber: 33,\n              columnNumber: 15\n            }, _this2);\n          }), user.isLogIn && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"a\", {\n            href: \"/auth/logout\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"li\", {\n              children: \"Logout\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 35,\n              columnNumber: 51\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 35,\n            columnNumber: 28\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 30,\n          columnNumber: 9\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"nav\", {\n          className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a[\"mobile-nav\"],\n          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a[\"menu-icon\"],\n            onClick: this.toggleMenu,\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"i\", {\n              className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a[\"fa fa-bars\"],\n              \"aria-hidden\": \"true\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 40,\n              columnNumber: 13\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 39,\n            columnNumber: 11\n          }, this), this.state.toggle && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"div\", {\n            className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a[\"nav-list\"],\n            children: [navLabels.map(function (label, index) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"div\", {\n                className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a[\"list-item\"],\n                onClick: _this2.toggleMenu,\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(Link, {\n                  to: label.path,\n                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"li\", {\n                    children: label.name\n                  }, void 0, false, {\n                    fileName: _jsxFileName,\n                    lineNumber: 47,\n                    columnNumber: 41\n                  }, _this2)\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 47,\n                  columnNumber: 19\n                }, _this2)\n              }, index, false, {\n                fileName: _jsxFileName,\n                lineNumber: 46,\n                columnNumber: 17\n              }, _this2);\n            }), user.isLogIn && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"div\", {\n              className: _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_8___default.a[\"list-item\"],\n              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"a\", {\n                href: \"/auth/logout\",\n                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_7__[\"jsxDEV\"])(\"li\", {\n                  children: \"Logout\"\n                }, void 0, false, {\n                  fileName: _jsxFileName,\n                  lineNumber: 52,\n                  columnNumber: 42\n                }, this)\n              }, void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 52,\n                columnNumber: 19\n              }, this)\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 51,\n              columnNumber: 17\n            }, this)]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 44,\n            columnNumber: 13\n          }, this)]\n        }, void 0, true, {\n          fileName: _jsxFileName,\n          lineNumber: 38,\n          columnNumber: 9\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 29,\n        columnNumber: 7\n      }, this);\n    }\n  }]);\n\n  return Navbar;\n}(Component);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navbar);\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9uYXZiYXIuanM/ODQxYiJdLCJuYW1lcyI6WyJuYXZMYWJlbHMiLCJwYXRoIiwibmFtZSIsIk5hdmJhciIsInByb3BzIiwic2V0U3RhdGUiLCJ0b2dnbGUiLCJzdGF0ZSIsInBhdGhOYW1lIiwidXNlciIsInN0eWxlcyIsIm1hcCIsImxhYmVsIiwiaW5kZXgiLCJtYXRjaCIsIk1hdGgiLCJyYW5kb20iLCJpc0xvZ0luIiwidG9nZ2xlTWVudSIsIkNvbXBvbmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVBLElBQU1BLFNBQVMsR0FBRyxDQUNoQjtBQUNFQyxNQUFJLEVBQUUsT0FEUjtBQUVFQyxNQUFJLEVBQUU7QUFGUixDQURnQixFQUliO0FBQ0RELE1BQUksRUFBRSxHQURMO0FBRURDLE1BQUksRUFBRTtBQUZMLENBSmEsQ0FBbEI7O0lBVU1DLE07Ozs7O0FBQ0osa0JBQWFDLEtBQWIsRUFBb0I7QUFBQTs7QUFBQTs7QUFDbEIsOEJBQU1BLEtBQU47O0FBRGtCLHFOQVFQLFlBQU07QUFDakIsWUFBS0MsUUFBTCxDQUFjO0FBQUVDLGNBQU0sRUFBRSxDQUFDLE1BQUtDLEtBQUwsQ0FBV0Q7QUFBdEIsT0FBZDtBQUNELEtBVm1COztBQUdsQixVQUFLQyxLQUFMLEdBQWE7QUFDWEQsWUFBTSxFQUFFO0FBREcsS0FBYjtBQUhrQjtBQU1uQjs7OzsyQkFNT0YsSyxFQUFPO0FBQUE7O0FBQUEsVUFDTEksUUFESyxHQUNjSixLQURkLENBQ0xJLFFBREs7QUFBQSxVQUNLQyxJQURMLEdBQ2NMLEtBRGQsQ0FDS0ssSUFETDtBQUViLDBCQUNFO0FBQUssaUJBQVMsRUFBRUMsZ0VBQU0sQ0FBQyxRQUFELENBQXRCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFFQSxnRUFBTSxDQUFDLFlBQUQsQ0FBdEI7QUFBQSxxQkFDR1YsU0FBUyxDQUFDVyxHQUFWLENBQWMsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsbUJBQWtCTCxRQUFRLENBQUNNLEtBQVQsWUFBbUJGLEtBQUssQ0FBQ1gsSUFBekIsa0JBQzdCLHFFQUFDLElBQUQ7QUFBTSxnQkFBRSxFQUFFVyxLQUFLLENBQUNYLElBQWhCO0FBQUEscUNBQTBDO0FBQUkseUJBQVMsRUFBRVMsZ0VBQU0sQ0FBQyxRQUFELENBQXJCO0FBQUEsMEJBQWtDRSxLQUFLLENBQUNWO0FBQXhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMUMsZUFBMkJhLElBQUksQ0FBQ0MsTUFBTCxFQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUQ2QixnQkFFN0IscUVBQUMsSUFBRDtBQUFNLGdCQUFFLEVBQUVKLEtBQUssQ0FBQ1gsSUFBaEI7QUFBQSxxQ0FBMEM7QUFBQSwwQkFBS1csS0FBSyxDQUFDVjtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMUMsZUFBMkJhLElBQUksQ0FBQ0MsTUFBTCxFQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZXO0FBQUEsV0FBZCxDQURILEVBS0dQLElBQUksQ0FBQ1EsT0FBTCxpQkFBZ0I7QUFBRyxnQkFBSSxFQUFDLGNBQVI7QUFBQSxtQ0FBdUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFMbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQURGLGVBU0U7QUFBSyxtQkFBUyxFQUFFUCxnRUFBTSxDQUFDLFlBQUQsQ0FBdEI7QUFBQSxrQ0FDRTtBQUFLLHFCQUFTLEVBQUVBLGdFQUFNLENBQUMsV0FBRCxDQUF0QjtBQUFxQyxtQkFBTyxFQUFFLEtBQUtRLFVBQW5EO0FBQUEsbUNBQ0U7QUFBRyx1QkFBUyxFQUFFUixnRUFBTSxDQUFDLFlBQUQsQ0FBcEI7QUFBb0MsNkJBQVk7QUFBaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREYsRUFLSSxLQUFLSCxLQUFMLENBQVdELE1BQVgsaUJBQ0E7QUFBSyxxQkFBUyxFQUFFSSxnRUFBTSxDQUFDLFVBQUQsQ0FBdEI7QUFBQSx1QkFDR1YsU0FBUyxDQUFDVyxHQUFWLENBQWMsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsa0NBQ2I7QUFBaUIseUJBQVMsRUFBRUgsZ0VBQU0sQ0FBQyxXQUFELENBQWxDO0FBQWlELHVCQUFPLEVBQUUsTUFBSSxDQUFDUSxVQUEvRDtBQUFBLHVDQUNFLHFFQUFDLElBQUQ7QUFBTSxvQkFBRSxFQUFFTixLQUFLLENBQUNYLElBQWhCO0FBQUEseUNBQXNCO0FBQUEsOEJBQUtXLEtBQUssQ0FBQ1Y7QUFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixpQkFBVVcsS0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHdCQURhO0FBQUEsYUFBZCxDQURILEVBTUdKLElBQUksQ0FBQ1EsT0FBTCxpQkFDQztBQUFLLHVCQUFTLEVBQUVQLGdFQUFNLENBQUMsV0FBRCxDQUF0QjtBQUFBLHFDQUNFO0FBQUcsb0JBQUksRUFBQyxjQUFSO0FBQUEsdUNBQXVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG9CQVBKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREY7QUFnQ0Q7Ozs7RUEvQ2tCUyxTOztBQWtETmhCLHFFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9uYXZiYXIuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvTmF2YmFyLm1vZHVsZS5jc3NcIjtcblxuY29uc3QgbmF2TGFiZWxzID0gW1xuICB7XG4gICAgcGF0aDogJy9ibG9nJyxcbiAgICBuYW1lOiAnQmxvZydcbiAgfSwge1xuICAgIHBhdGg6ICcvJyxcbiAgICBuYW1lOiAnSG9tZSdcbiAgfVxuXVxuXG5jbGFzcyBOYXZiYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICBjb25zdHJ1Y3RvciAocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICBcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgdG9nZ2xlOiBmYWxzZVxuICAgIH1cbiAgfVxuICBcbiAgdG9nZ2xlTWVudSA9ICgpID0+IHtcbiAgICB0aGlzLnNldFN0YXRlKHsgdG9nZ2xlOiAhdGhpcy5zdGF0ZS50b2dnbGUgfSlcbiAgfVxuICBcbiAgcmVuZGVyIChwcm9wcykge1xuICAgIGNvbnN0IHsgcGF0aE5hbWUsIHVzZXIgfSA9IHByb3BzXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXNbXCJuYXZiYXJcIl19PlxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzW1wibm9ybWFsLW5hdlwiXX0+XG4gICAgICAgICAge25hdkxhYmVscy5tYXAoKGxhYmVsLCBpbmRleCkgPT4gcGF0aE5hbWUubWF0Y2goYF4ke2xhYmVsLnBhdGh9YClcbiAgICAgICAgICAgID8gPExpbmsgdG89e2xhYmVsLnBhdGh9IGtleT17TWF0aC5yYW5kb20oKX0+PGxpIGNsYXNzTmFtZT17c3R5bGVzW1wiYWN0aXZlXCJdfT57bGFiZWwubmFtZX08L2xpPjwvTGluaz5cbiAgICAgICAgICAgIDogPExpbmsgdG89e2xhYmVsLnBhdGh9IGtleT17TWF0aC5yYW5kb20oKX0+PGxpPntsYWJlbC5uYW1lfTwvbGk+PC9MaW5rPlxuICAgICAgICAgICl9XG4gICAgICAgICAge3VzZXIuaXNMb2dJbiAmJiA8YSBocmVmPVwiL2F1dGgvbG9nb3V0XCI+PGxpPkxvZ291dDwvbGk+PC9hPn1cbiAgICAgICAgPC9uYXY+XG4gICAgICAgIFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT17c3R5bGVzW1wibW9iaWxlLW5hdlwiXX0+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm1lbnUtaWNvblwiXX0gb25DbGljaz17dGhpcy50b2dnbGVNZW51fT5cbiAgICAgICAgICAgIDxpIGNsYXNzTmFtZT17c3R5bGVzW1wiZmEgZmEtYmFyc1wiXX0gYXJpYS1oaWRkZW49XCJ0cnVlXCI+PC9pPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICAgIHsgdGhpcy5zdGF0ZS50b2dnbGUgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcIm5hdi1saXN0XCJdfT5cbiAgICAgICAgICAgICAge25hdkxhYmVscy5tYXAoKGxhYmVsLCBpbmRleCkgPT4gXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fSBjbGFzc05hbWU9e3N0eWxlc1tcImxpc3QtaXRlbVwiXX0gb25DbGljaz17dGhpcy50b2dnbGVNZW51fT5cbiAgICAgICAgICAgICAgICAgIDxMaW5rIHRvPXtsYWJlbC5wYXRofT48bGk+e2xhYmVsLm5hbWV9PC9saT48L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICl9XG4gICAgICAgICAgICAgIHt1c2VyLmlzTG9nSW4gJiYgXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImxpc3QtaXRlbVwiXX0+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL2F1dGgvbG9nb3V0XCI+PGxpPkxvZ291dDwvbGk+PC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIH1cbiAgICAgICAgPC9uYXY+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgTmF2YmFyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/navbar.js\n");

/***/ })

})