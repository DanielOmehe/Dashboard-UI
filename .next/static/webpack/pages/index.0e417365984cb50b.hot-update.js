"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/sidebar/avatar.js":
/*!**************************************!*\
  !*** ./components/sidebar/avatar.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utility_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility/button */ \"./components/utility/button.js\");\n/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown */ \"./components/sidebar/dropdown.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Avatar = (param)=>{\n    let { image , button  } = param;\n    _s();\n    const [state, setstate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [progress, setProgress] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(0);\n    const showDetails = ()=>{\n        setstate(!state);\n    };\n    const hideDetails = ()=>{\n        const close = window.addEventListener(\"click\", ()=>{\n            setstate(!state);\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        hideDetails();\n    }, [\n        state\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"avatar\",\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"4c233a8d2cd139c8\",\n                        [\n                            progress * 3.6,\n                            progress * 3.6\n                        ]\n                    ]\n                ]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: image,\n                        alt: \"avatar\",\n                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"4c233a8d2cd139c8\",\n                                [\n                                    progress * 3.6,\n                                    progress * 3.6\n                                ]\n                            ]\n                        ]) + \" \" + \"avatar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\DashBoard\\\\components\\\\sidebar\\\\avatar.js\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utility_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: showDetails,\n                        variant: \"plus\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: button,\n                            alt: \"progress\",\n                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                [\n                                    \"4c233a8d2cd139c8\",\n                                    [\n                                        progress * 3.6,\n                                        progress * 3.6\n                                    ]\n                                ]\n                            ])\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\DashBoard\\\\components\\\\sidebar\\\\avatar.js\",\n                            lineNumber: 25,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\DashBoard\\\\components\\\\sidebar\\\\avatar.js\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        state: state\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\DashBoard\\\\components\\\\sidebar\\\\avatar.js\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"progress\",\n                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"4c233a8d2cd139c8\",\n                                [\n                                    progress * 3.6,\n                                    progress * 3.6\n                                ]\n                            ]\n                        ])\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\DashBoard\\\\components\\\\sidebar\\\\avatar.js\",\n                        lineNumber: 28,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\DashBoard\\\\components\\\\sidebar\\\\avatar.js\",\n                lineNumber: 22,\n                columnNumber: 13\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"4c233a8d2cd139c8\",\n                dynamic: [\n                    progress * 3.6,\n                    progress * 3.6\n                ],\n                children: \"#avatar.__jsx-style-dynamic-selector{height:130px;width:152px;position:relative;margin:0 48px 0 60px}.plus.__jsx-style-dynamic-selector{border:none;outline:none}.avatar.__jsx-style-dynamic-selector{position:absolute;left:10px;top:10px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;z-index:2}#progress.__jsx-style-dynamic-selector{height:130px;width:130px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;position:relative;background:conic-gradient(#4d5bf9 \".concat(progress * 3.6, \"deg,#eee \").concat(progress * 3.6, 'deg);display:grid;place-items:center;-webkit-box-shadow:0 0 4px rgba(0,0,0,.14);-moz-box-shadow:0 0 4px rgba(0,0,0,.14);box-shadow:0 0 4px rgba(0,0,0,.14)}#progress.__jsx-style-dynamic-selector:before{content:\"\";width:98%;height:98%;background:#F7F8FA;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;position:absolute}')\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\DashBoard\\\\components\\\\sidebar\\\\avatar.js\",\n        lineNumber: 21,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Avatar, \"yuH1oZNKQ6gmR0WPe8cFlGN/Kgk=\");\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NpZGViYXIvYXZhdGFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7QUFBc0Q7QUFDZjtBQUNMO0FBRWxDLE1BQU1LLFNBQVEsU0FBbUI7UUFBbEIsRUFBQ0MsTUFBSyxFQUFFQyxPQUFNLEVBQUM7O0lBQzFCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQyxLQUFLO0lBQ3hDLE1BQU0sQ0FBQ1MsVUFBVUMsWUFBWSxHQUFHViwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNVyxjQUFjLElBQUk7UUFDaEJILFNBQVMsQ0FBQ0Q7SUFDbEI7SUFDQSxNQUFNSyxjQUFjLElBQUk7UUFDcEIsTUFBTUMsUUFBUUMsT0FBT0MsZ0JBQWdCLENBQUMsU0FBUyxJQUFJO1lBQy9DUCxTQUFTLENBQUNEO1FBQ2Q7SUFDSjtJQUVBTixnREFBU0EsQ0FBQyxJQUFNO1FBQ1pXO0lBQ0osR0FBRztRQUFDTDtLQUFNO0lBQ1YscUJBQ0ksOERBQUNSLDJDQUFRQTs7MEJBQ0wsOERBQUNpQjtnQkFBSUMsSUFBRzs7Ozs7NEJBK0JpQ1IsV0FBVzs0QkFBbUJBLFdBQVc7Ozs7O2tDQTlCOUUsOERBQUNTO3dCQUF1QkMsS0FBS2Q7d0JBQU9lLEtBQUk7Ozs7O29DQThCSFgsV0FBVztvQ0FBbUJBLFdBQVc7OzttQ0E5Qi9EOzs7Ozs7a0NBQ2YsOERBQUNQLHVEQUFNQTt3QkFBQ21CLFNBQVNWO3dCQUFhVyxTQUFRO2tDQUNsQyw0RUFBQ0o7NEJBQUlDLEtBQUtiOzRCQUFRYyxLQUFJOzs7Ozt3Q0E0QldYLFdBQVc7d0NBQW1CQSxXQUFXOzs7Ozs7Ozs7Ozs7OztrQ0ExQjlFLDhEQUFDTixpREFBUUE7d0JBQUNJLE9BQU9BOzs7Ozs7a0NBQ2pCLDhEQUFDUzt3QkFBSUMsSUFBRzs7Ozs7b0NBeUI2QlIsV0FBVztvQ0FBbUJBLFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBekNBLFdBQVc7b0JBQW1CQSxXQUFXOzs0Z0JBQVhBLE9BQTlCQSxXQUFXLHlCQUFtQkEsV0FBVzs7Ozs7Ozs7QUFnQjlGO0dBaEVNTDtLQUFBQTtBQWtFTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NpZGViYXIvYXZhdGFyLmpzPzk3M2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi91dGlsaXR5L2J1dHRvbic7XHJcbmltcG9ydCBEcm9wRG93biBmcm9tIFwiLi9kcm9wZG93blwiO1xyXG5cclxuY29uc3QgQXZhdGFyID0oe2ltYWdlLCBidXR0b259KT0+e1xyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRzdGF0ZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICAgIGNvbnN0IFtwcm9ncmVzcywgc2V0UHJvZ3Jlc3NdID0gdXNlU3RhdGUoMClcclxuICAgIGNvbnN0IHNob3dEZXRhaWxzID0gKCk9PntcclxuICAgICAgICAgICAgc2V0c3RhdGUoIXN0YXRlKVxyXG4gICAgfVxyXG4gICAgY29uc3QgaGlkZURldGFpbHMgPSAoKT0+e1xyXG4gICAgICAgIGNvbnN0IGNsb3NlID0gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PntcclxuICAgICAgICAgICAgc2V0c3RhdGUoIXN0YXRlKVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBoaWRlRGV0YWlscygpXHJcbiAgICB9LCBbc3RhdGVdKVxyXG4gICAgcmV0dXJuKFxyXG4gICAgICAgIDxGcmFnbWVudD5cclxuICAgICAgICAgICAgPGRpdiBpZD1cImF2YXRhclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJhdmF0YXJcIiBzcmM9e2ltYWdlfSBhbHQ9J2F2YXRhcicgLz5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17c2hvd0RldGFpbHN9IHZhcmlhbnQ9XCJwbHVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9e2J1dHRvbn0gYWx0PSdwcm9ncmVzcycgLz4gICBcclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPERyb3BEb3duIHN0YXRlPXtzdGF0ZX0gLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgaWQ9XCJwcm9ncmVzc1wiPjwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAgICAgICAjYXZhdGFye1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxNTJweDsgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW46IDAgNDhweCAwIDYwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnBsdXN7XHJcbiAgICAgICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgICAgICAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5hdmF0YXJ7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgICAgICBsZWZ0OiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgdG9wOiAxMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgei1pbmRleDogMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjcHJvZ3Jlc3N7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDEzMHB4O1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEzMHB4O1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZDogY29uaWMtZ3JhZGllbnQoIzRkNWJmOSAke3Byb2dyZXNzICogMy42fWRlZywgI2VlZWVlZSAke3Byb2dyZXNzICogMy42fWRlZyk7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgICAgICAgICAgcGxhY2UtaXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGJveC1zaGFkb3c6IDAgMCA0cHggcmdiYSgwLDAsMCwuMTQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICNwcm9ncmVzczpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgIHdpZHRoOiA5OCU7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDk4JTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNGN0Y4RkE7XHJcbiAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYH08L3N0eWxlPlxyXG4gICAgICAgIDwvRnJhZ21lbnQ+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEF2YXRhciJdLCJuYW1lcyI6WyJGcmFnbWVudCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiQnV0dG9uIiwiRHJvcERvd24iLCJBdmF0YXIiLCJpbWFnZSIsImJ1dHRvbiIsInN0YXRlIiwic2V0c3RhdGUiLCJwcm9ncmVzcyIsInNldFByb2dyZXNzIiwic2hvd0RldGFpbHMiLCJoaWRlRGV0YWlscyIsImNsb3NlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpdiIsImlkIiwiaW1nIiwic3JjIiwiYWx0Iiwib25DbGljayIsInZhcmlhbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/sidebar/avatar.js\n"));

/***/ })

});