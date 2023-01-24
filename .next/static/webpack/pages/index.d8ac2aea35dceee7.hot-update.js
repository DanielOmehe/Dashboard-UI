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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ \"./node_modules/styled-jsx/style.js\");\n/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _utility_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utility/button */ \"./components/utility/button.js\");\n/* harmony import */ var _dropdown__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dropdown */ \"./components/sidebar/dropdown.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Avatar = (param)=>{\n    let { image , button  } = param;\n    _s();\n    const [state, setstate] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)({\n        progress: 75,\n        show: false\n    });\n    const { progress , show  } = state;\n    const showDetails = ()=>{\n        setstate({\n            progress: progress,\n            show: !show\n        });\n        if (state.progress === 100) setstate({\n            progress: state.progress,\n            show: !state.show\n        });\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const hide = window.addEventListener(\"click\", ()=>setstate({\n                progress: 0,\n                show: !show\n            }));\n        return ()=>window.removeEventListener(hide);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_2__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                id: \"avatar\",\n                className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                    [\n                        \"4c233a8d2cd139c8\",\n                        [\n                            progress * 3.6,\n                            progress * 3.6\n                        ]\n                    ]\n                ]),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                        src: image,\n                        alt: \"avatar\",\n                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"4c233a8d2cd139c8\",\n                                [\n                                    progress * 3.6,\n                                    progress * 3.6\n                                ]\n                            ]\n                        ]) + \" \" + \"avatar\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\DashBoard\\\\components\\\\sidebar\\\\avatar.js\",\n                        lineNumber: 20,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_utility_button__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        onClick: showDetails,\n                        variant: \"plus\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                            src: button,\n                            alt: \"progress\",\n                            className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                                [\n                                    \"4c233a8d2cd139c8\",\n                                    [\n                                        progress * 3.6,\n                                        progress * 3.6\n                                    ]\n                                ]\n                            ])\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\DashBoard\\\\components\\\\sidebar\\\\avatar.js\",\n                            lineNumber: 22,\n                            columnNumber: 21\n                        }, undefined)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\DashBoard\\\\components\\\\sidebar\\\\avatar.js\",\n                        lineNumber: 21,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_dropdown__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                        state: show\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\DashBoard\\\\components\\\\sidebar\\\\avatar.js\",\n                        lineNumber: 24,\n                        columnNumber: 17\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        id: \"progress\",\n                        className: styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default().dynamic([\n                            [\n                                \"4c233a8d2cd139c8\",\n                                [\n                                    progress * 3.6,\n                                    progress * 3.6\n                                ]\n                            ]\n                        ])\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\DashBoard\\\\components\\\\sidebar\\\\avatar.js\",\n                        lineNumber: 25,\n                        columnNumber: 17\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\DashBoard\\\\components\\\\sidebar\\\\avatar.js\",\n                lineNumber: 19,\n                columnNumber: 13\n            }, undefined),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"4c233a8d2cd139c8\",\n                dynamic: [\n                    progress * 3.6,\n                    progress * 3.6\n                ],\n                children: \"#avatar.__jsx-style-dynamic-selector{height:130px;width:152px;position:relative;margin:0 48px 0 60px}.plus.__jsx-style-dynamic-selector{border:none;outline:none}.avatar.__jsx-style-dynamic-selector{position:absolute;left:10px;top:10px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;z-index:2}#progress.__jsx-style-dynamic-selector{height:130px;width:130px;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;position:relative;background:conic-gradient(#4d5bf9 \".concat(progress * 3.6, \"deg,#eee \").concat(progress * 3.6, 'deg);display:grid;place-items:center;-webkit-box-shadow:0 0 4px rgba(0,0,0,.14);-moz-box-shadow:0 0 4px rgba(0,0,0,.14);box-shadow:0 0 4px rgba(0,0,0,.14)}#progress.__jsx-style-dynamic-selector:before{content:\"\";width:98%;height:98%;background:#F7F8FA;-webkit-border-radius:50%;-moz-border-radius:50%;border-radius:50%;position:absolute}')\n            }, void 0, false, void 0, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\USER\\\\Desktop\\\\DashBoard\\\\components\\\\sidebar\\\\avatar.js\",\n        lineNumber: 18,\n        columnNumber: 9\n    }, undefined);\n};\n_s(Avatar, \"Ixmdu6hLOE6MrlKSkbAZ7OvPXiM=\");\n_c = Avatar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Avatar);\nvar _c;\n$RefreshReg$(_c, \"Avatar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3NpZGViYXIvYXZhdGFyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOzs7QUFBc0Q7QUFDZjtBQUNMO0FBRWxDLE1BQU1LLFNBQVEsU0FBbUI7UUFBbEIsRUFBQ0MsTUFBSyxFQUFFQyxPQUFNLEVBQUM7O0lBQzFCLE1BQU0sQ0FBQ0MsT0FBT0MsU0FBUyxHQUFHUiwrQ0FBUUEsQ0FBQztRQUFDUyxVQUFVO1FBQUlDLE1BQU0sS0FBSztJQUFBO0lBQzdELE1BQU0sRUFBRUQsU0FBUSxFQUFFQyxLQUFJLEVBQUUsR0FBR0g7SUFDM0IsTUFBTUksY0FBYyxJQUFJO1FBQ3BCSCxTQUFTO1lBQUNDLFVBQVVBO1lBQVVDLE1BQU0sQ0FBQ0E7UUFBSTtRQUN6QyxJQUFHSCxNQUFNRSxRQUFRLEtBQUssS0FBS0QsU0FBUztZQUFDQyxVQUFVRixNQUFNRSxRQUFRO1lBQUVDLE1BQU0sQ0FBQ0gsTUFBTUcsSUFBSTtRQUFBO0lBQ3BGO0lBRUFULGdEQUFTQSxDQUFDLElBQU07UUFDWixNQUFNVyxPQUFPQyxPQUFPQyxnQkFBZ0IsQ0FBQyxTQUFTLElBQU1OLFNBQVM7Z0JBQUNDLFVBQVU7Z0JBQUdDLE1BQU0sQ0FBQ0E7WUFBSTtRQUN0RixPQUFPLElBQU1HLE9BQU9FLG1CQUFtQixDQUFDSDtJQUM1QyxHQUFHLEVBQUU7SUFDTCxxQkFDSSw4REFBQ2IsMkNBQVFBOzswQkFDTCw4REFBQ2lCO2dCQUFJQyxJQUFHOzs7Ozs0QkErQmlDUixXQUFXOzRCQUFtQkEsV0FBVzs7Ozs7a0NBOUI5RSw4REFBQ1M7d0JBQXVCQyxLQUFLZDt3QkFBT2UsS0FBSTs7Ozs7b0NBOEJIWCxXQUFXO29DQUFtQkEsV0FBVzs7O21DQTlCL0Q7Ozs7OztrQ0FDZiw4REFBQ1AsdURBQU1BO3dCQUFDbUIsU0FBU1Y7d0JBQWFXLFNBQVE7a0NBQ2xDLDRFQUFDSjs0QkFBSUMsS0FBS2I7NEJBQVFjLEtBQUk7Ozs7O3dDQTRCV1gsV0FBVzt3Q0FBbUJBLFdBQVc7Ozs7Ozs7Ozs7Ozs7O2tDQTFCOUUsOERBQUNOLGlEQUFRQTt3QkFBQ0ksT0FBT0c7Ozs7OztrQ0FDakIsOERBQUNNO3dCQUFJQyxJQUFHOzs7OztvQ0F5QjZCUixXQUFXO29DQUFtQkEsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7O29CQUF6Q0EsV0FBVztvQkFBbUJBLFdBQVc7OzRnQkFBWEEsT0FBOUJBLFdBQVcseUJBQW1CQSxXQUFXOzs7Ozs7OztBQWdCOUY7R0E3RE1MO0tBQUFBO0FBK0ROLCtEQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvc2lkZWJhci9hdmF0YXIuanM/OTczZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBGcmFnbWVudCwgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL3V0aWxpdHkvYnV0dG9uJztcclxuaW1wb3J0IERyb3BEb3duIGZyb20gXCIuL2Ryb3Bkb3duXCI7XHJcblxyXG5jb25zdCBBdmF0YXIgPSh7aW1hZ2UsIGJ1dHRvbn0pPT57XHJcbiAgICBjb25zdCBbc3RhdGUsIHNldHN0YXRlXSA9IHVzZVN0YXRlKHtwcm9ncmVzczogNzUsIHNob3c6IGZhbHNlfSlcclxuICAgIGNvbnN0IHsgcHJvZ3Jlc3MsIHNob3cgfSA9IHN0YXRlXHJcbiAgICBjb25zdCBzaG93RGV0YWlscyA9ICgpPT57XHJcbiAgICAgICAgc2V0c3RhdGUoe3Byb2dyZXNzOiBwcm9ncmVzcywgc2hvdzogIXNob3d9KTtcclxuICAgICAgICBpZihzdGF0ZS5wcm9ncmVzcyA9PT0gMTAwKSBzZXRzdGF0ZSh7cHJvZ3Jlc3M6IHN0YXRlLnByb2dyZXNzLCBzaG93OiAhc3RhdGUuc2hvd30pXHJcbiAgICB9XHJcblxyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBjb25zdCBoaWRlID0gd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gc2V0c3RhdGUoe3Byb2dyZXNzOiAwLCBzaG93OiAhc2hvd30pKVxyXG4gICAgICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihoaWRlKVxyXG4gICAgfSwgW10pXHJcbiAgICByZXR1cm4oXHJcbiAgICAgICAgPEZyYWdtZW50PlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwiYXZhdGFyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cImF2YXRhclwiIHNyYz17aW1hZ2V9IGFsdD0nYXZhdGFyJyAvPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBvbkNsaWNrPXtzaG93RGV0YWlsc30gdmFyaWFudD1cInBsdXNcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz17YnV0dG9ufSBhbHQ9J3Byb2dyZXNzJyAvPiAgIFxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8RHJvcERvd24gc3RhdGU9e3Nob3d9IC8+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwicHJvZ3Jlc3NcIj48L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgICAgICAgI2F2YXRhcntcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMTMwcHg7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTUycHg7ICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAwIDQ4cHggMCA2MHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5wbHVze1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgICAgICAgICAgb3V0bGluZTogbm9uZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAuYXZhdGFye1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICAgICAgICAgIHRvcDogMTBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIHotaW5kZXg6IDI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgI3Byb2dyZXNze1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAxMzBweDtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMzBweDtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGNvbmljLWdyYWRpZW50KCM0ZDViZjkgJHtwcm9ncmVzcyAqIDMuNn1kZWcsICNlZWVlZWUgJHtwcm9ncmVzcyAqIDMuNn1kZWcpO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgICAgIHBsYWNlLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBib3gtc2hhZG93OiAwIDAgNHB4IHJnYmEoMCwwLDAsLjE0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAjcHJvZ3Jlc3M6YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogOTglO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA5OCU7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjdGOEZBO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGB9PC9zdHlsZT5cclxuICAgICAgICA8L0ZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBdmF0YXIiXSwibmFtZXMiOlsiRnJhZ21lbnQiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIkJ1dHRvbiIsIkRyb3BEb3duIiwiQXZhdGFyIiwiaW1hZ2UiLCJidXR0b24iLCJzdGF0ZSIsInNldHN0YXRlIiwicHJvZ3Jlc3MiLCJzaG93Iiwic2hvd0RldGFpbHMiLCJoaWRlIiwid2luZG93IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJkaXYiLCJpZCIsImltZyIsInNyYyIsImFsdCIsIm9uQ2xpY2siLCJ2YXJpYW50Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/sidebar/avatar.js\n"));

/***/ })

});