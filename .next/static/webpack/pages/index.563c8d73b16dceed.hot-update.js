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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utility_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility/button */ \"./components/utility/button.js\");\n/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown */ \"./components/sidebar/dropdown.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Avatar = (param)=>{\n    let { image , button  } = param;\n    _s();\n    const [state, setstate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        progress: 75,\n        show: false\n    });\n    const showDetails = ()=>{\n        setstate({\n            progress: progress,\n            show: !state.show\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        window.addEventListener(\"click\", (e)=>{\n            if (state.show) {\n                setstate({\n                    progress: state.progress,\n                    show: false\n                });\n            }\n            console.log(state);\n        });\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"avatar\",\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"23d7aa8208f9df63\",\n                        [\n                            state.progress * 3.6,\n                            state.progress * 3.6\n                        ]\n                    ]\n                ]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: image,\n                        alt: \"avatar\",\n                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"23d7aa8208f9df63\",\n                                [\n                                    state.progress * 3.6,\n                                    state.progress * 3.6\n                                ]\n                            ]\n                        ]) + \" \" + \"avatar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\DashBoard\\\\components\\\\sidebar\\\\avatar.js\",\n                        lineNumber: 22,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utility_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: showDetails,\n                        variant: \"plus\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: button,\n                            alt: \"progress\",\n                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                [\n                                    \"23d7aa8208f9df63\",\n                                    [\n                                        state.progress * 3.6,\n                                        state.progress * 3.6\n                                    ]\n                                ]\n                            ])\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\DashBoard\\\\components\\\\sidebar\\\\avatar.js\",\n                            lineNumber: 24,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\DashBoard\\\\components\\\\sidebar\\\\avatar.js\",\n                        lineNumber: 23,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        state: state.show\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\DashBoard\\\\components\\\\sidebar\\\\avatar.js\",\n                        lineNumber: 26,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"progress\",\n                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"23d7aa8208f9df63\",\n                                [\n                                    state.progress * 3.6,\n                                    state.progress * 3.6\n                                ]\n                            ]\n                        ])\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\DashBoard\\\\components\\\\sidebar\\\\avatar.js\",\n                        lineNumber: 27,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\DashBoard\\\\components\\\\sidebar\\\\avatar.js\",\n                lineNumber: 21,\n                columnNumber: 13\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"23d7aa8208f9df63\",\n                dynamic: [\n                    state.progress * 3.6,\n                    state.progress * 3.6\n                ],\n                children: \"#avatar.__jsx-style-dynamic-selector{height:130px;width:152px;position:relative;margin:0 48px 0 60px}.plus.__jsx-style-dynamic-selector{border:none;outline:none}.avatar.__jsx-style-dynamic-selector{position:absolute;left:10px;top:10px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;z-index:2}#progress.__jsx-style-dynamic-selector{height:130px;width:130px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;position:relative;background:conic-gradient(#4d5bf9 \".concat(state.progress * 3.6, \"deg,#eee \").concat(state.progress * 3.6, 'deg);display:grid;place-items:center;-webkit-box-shadow:0 0 4px rgba(0,0,0,.14);-moz-box-shadow:0 0 4px rgba(0,0,0,.14);box-shadow:0 0 4px rgba(0,0,0,.14)}#progress.__jsx-style-dynamic-selector:before{content:\"\";width:98%;height:98%;background:#F7F8FA;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;position:absolute}')\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\DashBoard\\\\components\\\\sidebar\\\\avatar.js\",\n        lineNumber: 20,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Avatar, \"Ixmdu6hLOE6MrlKSkbAZ7OvPXiM=\");\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NpZGViYXIvYXZhdGFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7QUFBc0Q7QUFDZjtBQUNMO0FBRWxDLE1BQU1LLFNBQVEsU0FBbUI7UUFBbEIsRUFBQ0MsTUFBSyxFQUFFQyxPQUFNLEVBQUM7O0lBQzFCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQztRQUFDUyxVQUFVO1FBQUlDLE1BQU0sS0FBSztJQUFBO0lBQzdELE1BQU1DLGNBQWMsSUFBSTtRQUNwQkgsU0FBUztZQUFDQyxVQUFVQTtZQUFVQyxNQUFNLENBQUNILE1BQU1HLElBQUk7UUFBQTtJQUNuRDtJQUVBVCxnREFBU0EsQ0FBQyxJQUFNO1FBQ1pXLE9BQU9DLGdCQUFnQixDQUFDLFNBQVMsQ0FBQ0MsSUFBTTtZQUNwQyxJQUFHUCxNQUFNRyxJQUFJLEVBQUM7Z0JBQ1ZGLFNBQVM7b0JBQUNDLFVBQVVGLE1BQU1FLFFBQVE7b0JBQUVDLE1BQU0sS0FBSztnQkFBQTtZQUNuRCxDQUFDO1lBQ0RLLFFBQVFDLEdBQUcsQ0FBQ1Q7UUFDaEI7SUFDSixHQUFHLEVBQUU7SUFDTCxxQkFDSSw4REFBQ1IsMkNBQVFBOzswQkFDTCw4REFBQ2tCO2dCQUFJQyxJQUFHOzs7Ozs0QkErQmlDWCxNQUFNRSxRQUFRLEdBQUc7NEJBQW1CRixNQUFNRSxRQUFRLEdBQUc7Ozs7O2tDQTlCMUYsOERBQUNVO3dCQUF1QkMsS0FBS2Y7d0JBQU9nQixLQUFJOzs7OztvQ0E4QkhkLE1BQU1FLFFBQVEsR0FBRztvQ0FBbUJGLE1BQU1FLFFBQVEsR0FBRzs7O21DQTlCM0U7Ozs7OztrQ0FDZiw4REFBQ1AsdURBQU1BO3dCQUFDb0IsU0FBU1g7d0JBQWFZLFNBQVE7a0NBQ2xDLDRFQUFDSjs0QkFBSUMsS0FBS2Q7NEJBQVFlLEtBQUk7Ozs7O3dDQTRCV2QsTUFBTUUsUUFBUSxHQUFHO3dDQUFtQkYsTUFBTUUsUUFBUSxHQUFHOzs7Ozs7Ozs7Ozs7OztrQ0ExQjFGLDhEQUFDTixpREFBUUE7d0JBQUNJLE9BQU9BLE1BQU1HLElBQUk7Ozs7OztrQ0FDM0IsOERBQUNPO3dCQUFJQyxJQUFHOzs7OztvQ0F5QjZCWCxNQUFNRSxRQUFRLEdBQUc7b0NBQW1CRixNQUFNRSxRQUFRLEdBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFBckRGLE1BQU1FLFFBQVEsR0FBRztvQkFBbUJGLE1BQU1FLFFBQVEsR0FBRzs7NGdCQUFqQkYsT0FBcENBLE1BQU1FLFFBQVEsR0FBRyx5QkFBbUJGLE1BQU1FLFFBQVEsR0FBRzs7Ozs7Ozs7QUFnQjFHO0dBL0RNTDtLQUFBQTtBQWlFTiwrREFBZUEsTUFBTUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3NpZGViYXIvYXZhdGFyLmpzPzk3M2UiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRnJhZ21lbnQsIHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi91dGlsaXR5L2J1dHRvbic7XHJcbmltcG9ydCBEcm9wRG93biBmcm9tIFwiLi9kcm9wZG93blwiO1xyXG5cclxuY29uc3QgQXZhdGFyID0oe2ltYWdlLCBidXR0b259KT0+e1xyXG4gICAgY29uc3QgW3N0YXRlLCBzZXRzdGF0ZV0gPSB1c2VTdGF0ZSh7cHJvZ3Jlc3M6IDc1LCBzaG93OiBmYWxzZX0pXHJcbiAgICBjb25zdCBzaG93RGV0YWlscyA9ICgpPT57XHJcbiAgICAgICAgc2V0c3RhdGUoe3Byb2dyZXNzOiBwcm9ncmVzcywgc2hvdzogIXN0YXRlLnNob3d9KTtcclxuICAgIH1cclxuXHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XHJcbiAgICAgICAgICAgIGlmKHN0YXRlLnNob3cpe1xyXG4gICAgICAgICAgICAgICAgc2V0c3RhdGUoe3Byb2dyZXNzOiBzdGF0ZS5wcm9ncmVzcywgc2hvdzogZmFsc2V9KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHN0YXRlKTtcclxuICAgICAgICB9KVxyXG4gICAgfSwgW10pXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF2YXRhclwiIHNyYz17aW1hZ2V9IGFsdD0nYXZhdGFyJyAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzaG93RGV0YWlsc30gdmFyaWFudD1cInBsdXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YnV0dG9ufSBhbHQ9J3Byb2dyZXNzJyAvPiAgIFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8RHJvcERvd24gc3RhdGU9e3N0YXRlLnNob3d9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvZ3Jlc3NcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgI2F2YXRhcntcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUycHg7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDQ4cHggMCA2MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wbHVze1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYXZhdGFye1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3Byb2dyZXNze1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGNvbmljLWdyYWRpZW50KCM0ZDViZjkgJHtzdGF0ZS5wcm9ncmVzcyAqIDMuNn1kZWcsICNlZWVlZWUgJHtzdGF0ZS5wcm9ncmVzcyAqIDMuNn1kZWcpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwwLDAsLjE0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjcHJvZ3Jlc3M6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTglO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5OCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjdGOEZBO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdmF0YXIiXSwibmFtZXMiOlsiRnJhZ21lbnQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJ1dHRvbiIsIkRyb3BEb3duIiwiQXZhdGFyIiwiaW1hZ2UiLCJidXR0b24iLCJzdGF0ZSIsInNldHN0YXRlIiwicHJvZ3Jlc3MiLCJzaG93Iiwic2hvd0RldGFpbHMiLCJ3aW5kb3ciLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJpZCIsImltZyIsInNyYyIsImFsdCIsIm9uQ2xpY2siLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sidebar/avatar.js\n"));

/***/ })

});