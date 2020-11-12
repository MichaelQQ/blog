webpackHotUpdate_N_E("pages/blog",{

/***/ "./components/PostCard.js":
/*!********************************!*\
  !*** ./components/PostCard.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_PostCard_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/PostCard.module.css */ \"./styles/PostCard.module.css\");\n/* harmony import */ var _styles_PostCard_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_PostCard_module_css__WEBPACK_IMPORTED_MODULE_2__);\n\n\nvar _jsxFileName = \"/Users/mst-mbpr/Documents/coding/blog/michaelqq.com/components/PostCard.js\",\n    _this = undefined;\n\n\n // import HashtagMarkdown from '../../components/hashtag-markdown'\n\nvar PostCard = function PostCard(_ref) {\n  var id = _ref.id,\n      title = _ref.title,\n      datetime = _ref.datetime,\n      summary = _ref.summary;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n    className: _styles_PostCard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a[\"post\"],\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      href: \"/blog/\".concat(id),\n      style: {\n        textDecoration: \"none\"\n      },\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"h1\", {\n          style: {\n            color: \"black\"\n          },\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 9,\n          columnNumber: 10\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 9,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"p\", {\n      children: new Date(datetime).toLocaleString()\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 11,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"markdown-body\",\n      dangerouslySetInnerHTML: {\n        __html: summary\n      }\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: _styles_PostCard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a[\"link\"],\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {\n        href: \"/blog/\".concat(id),\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: _styles_PostCard_module_css__WEBPACK_IMPORTED_MODULE_2___default.a[\"post-button\"],\n          children: \"read more\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 22,\n          columnNumber: 34\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 22,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 7,\n    columnNumber: 3\n  }, _this);\n};\n\n_c = PostCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostCard);\n\nvar _c;\n\n$RefreshReg$(_c, \"PostCard\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcz85MWRiIl0sIm5hbWVzIjpbIlBvc3RDYXJkIiwiaWQiLCJ0aXRsZSIsImRhdGV0aW1lIiwic3VtbWFyeSIsInN0eWxlcyIsInRleHREZWNvcmF0aW9uIiwiY29sb3IiLCJEYXRlIiwidG9Mb2NhbGVTdHJpbmciLCJfX2h0bWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0NBR0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxNQUFHQyxFQUFILFFBQUdBLEVBQUg7QUFBQSxNQUFPQyxLQUFQLFFBQU9BLEtBQVA7QUFBQSxNQUFjQyxRQUFkLFFBQWNBLFFBQWQ7QUFBQSxNQUF3QkMsT0FBeEIsUUFBd0JBLE9BQXhCO0FBQUEsc0JBQ2Y7QUFBSyxhQUFTLEVBQUVDLGtFQUFNLENBQUMsTUFBRCxDQUF0QjtBQUFBLDRCQUNFLHFFQUFDLGdEQUFEO0FBQU0sVUFBSSxrQkFBV0osRUFBWCxDQUFWO0FBQTJCLFdBQUssRUFBRTtBQUFFSyxzQkFBYyxFQUFFO0FBQWxCLE9BQWxDO0FBQUEsNkJBQ0U7QUFBQSwrQkFBRztBQUFJLGVBQUssRUFBRTtBQUFFQyxpQkFBSyxFQUFFO0FBQVQsV0FBWDtBQUFBLG9CQUFnQ0w7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRTtBQUFBLGdCQUFJLElBQUlNLElBQUosQ0FBU0wsUUFBVCxFQUFtQk0sY0FBbkI7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBSkYsZUFVRTtBQUNFLGVBQVMsRUFBQyxlQURaO0FBRUUsNkJBQXVCLEVBQUU7QUFBRUMsY0FBTSxFQUFFTjtBQUFWO0FBRjNCO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFWRixlQWNFO0FBQUssZUFBUyxFQUFFQyxrRUFBTSxDQUFDLE1BQUQsQ0FBdEI7QUFBQSw2QkFDRSxxRUFBQyxnREFBRDtBQUFNLFlBQUksa0JBQVdKLEVBQVgsQ0FBVjtBQUFBLCtCQUEyQjtBQUFLLG1CQUFTLEVBQUVJLGtFQUFNLENBQUMsYUFBRCxDQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWRGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURlO0FBQUEsQ0FBakI7O0tBQU1MLFE7QUFxQlNBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9Qb3N0Q2FyZC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9Qb3N0Q2FyZC5tb2R1bGUuY3NzXCI7XG5cbi8vIGltcG9ydCBIYXNodGFnTWFya2Rvd24gZnJvbSAnLi4vLi4vY29tcG9uZW50cy9oYXNodGFnLW1hcmtkb3duJ1xuXG5jb25zdCBQb3N0Q2FyZCA9ICh7IGlkLCB0aXRsZSwgZGF0ZXRpbWUsIHN1bW1hcnkgfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzW1wicG9zdFwiXX0+XG4gICAgPExpbmsgaHJlZj17YC9ibG9nLyR7aWR9YH0gc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19PlxuICAgICAgPGE+PGgxIHN0eWxlPXt7IGNvbG9yOiBcImJsYWNrXCIgfX0+e3RpdGxlfTwvaDE+PC9hPlxuICAgIDwvTGluaz5cbiAgICA8cD57bmV3IERhdGUoZGF0ZXRpbWUpLnRvTG9jYWxlU3RyaW5nKCl9PC9wPlxuICAgIHsvKiA8SGFzaHRhZ01hcmtkb3duXG4gICAgICBzb3VyY2U9e3N1bW1hcnl9IFxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXNbXCJtYXJrZG93bi1ib2R5XCJcbiAgICAvPiAqL31cbiAgICB7LyogPHA+e3N1bW1hcnl9PC9wPiAqL31cbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJtYXJrZG93bi1ib2R5XCJcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc3VtbWFyeSB9fVxuICAgIC8+XG4gICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcImxpbmtcIl19PlxuICAgICAgPExpbmsgaHJlZj17YC9ibG9nLyR7aWR9YH0+PGRpdiBjbGFzc05hbWU9e3N0eWxlc1tcInBvc3QtYnV0dG9uXCJdfT5yZWFkIG1vcmU8L2Rpdj48L0xpbms+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgUG9zdENhcmQ7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/PostCard.js\n");

/***/ })

})