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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/About */ \"./src/components/About.js\");\n/* harmony import */ var _src_components_Blog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Blog */ \"./src/components/Blog.js\");\n/* harmony import */ var _src_components_Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Contact */ \"./src/components/Contact.js\");\n/* harmony import */ var _src_components_Services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Services */ \"./src/components/Services.js\");\n/* harmony import */ var _src_components_TypingAnimation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/TypingAnimation */ \"./src/components/TypingAnimation.js\");\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar Portfolio = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"src_components_Portfolio_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../src/components/Portfolio */ \"./src/components/Portfolio.js\"));\n}, {\n    loadableGenerated: {\n        modules: [\n            \"index.js -> \" + \"../src/components/Portfolio\"\n        ]\n    },\n    ssr: false\n});\n_c = Portfolio;\nvar onButtonClick = function() {\n    // using Java Script method to get PDF file\n    fetch(\"CV.pdf\").then(function(response) {\n        response.blob().then(function(blob) {\n            // Creating new object of PDF file\n            var fileURL = window.URL.createObjectURL(blob);\n            // Setting various property values\n            var alink = document.createElement(\"a\");\n            alink.href = fileURL;\n            alink.download = \"CV.pdf\";\n            alink.click();\n        });\n    });\n};\nvar Index = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"home\",\n                \"data-nav-tooltip\": \"Home\",\n                className: \"pp-section pp-scrollable\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"home-banner\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"row full-screen align-items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-lg-6\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"type-box\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                children: \"Hello, I am\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                                                lineNumber: 40,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: \"font-alt\",\n                                                children: \"Theodore Palmer\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"lead\",\n                                                children: [\n                                                    \"I Am A Passionate \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_TypingAnimation__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                                        fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                                                        lineNumber: 43,\n                                                        columnNumber: 39\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                                                lineNumber: 42,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"desc\",\n                                                children: \"I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"btn-bar\",\n                                                onClick: onButtonClick,\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    className: \"px-btn px-btn-theme\",\n                                                    href: \"#\",\n                                                    children: \"Download CV\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                                                    lineNumber: 51,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-lg-6\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"hb-img\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"static/img/home-banner.png\",\n                                            title: \"\",\n                                            alt: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_About__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Portfolio, {}, void 0, false, {\n                fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c, _c1;\n$RefreshReg$(_c, \"Portfolio\");\n$RefreshReg$(_c1, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0osQ0FBQztBQXhES3FCLE1BQUFBLEtBQUs7QUF5RFgsK0RBQWVBLEtBQUssRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcz9iZWU3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBkeW5hbWljIGZyb20gXCJuZXh0L2R5bmFtaWNcIjtcbmltcG9ydCBBYm91dCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQWJvdXRcIjtcbmltcG9ydCBCbG9nIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9CbG9nXCI7XG5pbXBvcnQgQ29udGFjdCBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvQ29udGFjdFwiO1xuaW1wb3J0IFNlcnZpY2VzIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9TZXJ2aWNlc1wiO1xuaW1wb3J0IFR5cGluZ0FuaW1hdGlvbiBmcm9tIFwiLi4vc3JjL2NvbXBvbmVudHMvVHlwaW5nQW5pbWF0aW9uXCI7XG5pbXBvcnQgTGF5b3V0IGZyb20gXCIuLi9zcmMvbGF5b3V0L0xheW91dFwiO1xuY29uc3QgUG9ydGZvbGlvID0gZHluYW1pYygoKSA9PiBpbXBvcnQoXCIuLi9zcmMvY29tcG9uZW50cy9Qb3J0Zm9saW9cIiksIHtcbiAgc3NyOiBmYWxzZSxcbn0pO1xuXG5jb25zdCBvbkJ1dHRvbkNsaWNrID0gKCkgPT4ge1xuICAvLyB1c2luZyBKYXZhIFNjcmlwdCBtZXRob2QgdG8gZ2V0IFBERiBmaWxlXG4gIGZldGNoKCdDVi5wZGYnKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHJlc3BvbnNlLmJsb2IoKS50aGVuKGJsb2IgPT4ge1xuICAgICAgICAgIC8vIENyZWF0aW5nIG5ldyBvYmplY3Qgb2YgUERGIGZpbGVcbiAgICAgICAgICBjb25zdCBmaWxlVVJMID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgICAgLy8gU2V0dGluZyB2YXJpb3VzIHByb3BlcnR5IHZhbHVlc1xuICAgICAgICAgIGxldCBhbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICBhbGluay5ocmVmID0gZmlsZVVSTDtcbiAgICAgICAgICBhbGluay5kb3dubG9hZCA9ICdDVi5wZGYnO1xuICAgICAgICAgIGFsaW5rLmNsaWNrKCk7XG4gICAgICB9KVxuICB9KVxufVxuXG5jb25zdCBJbmRleCA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8TGF5b3V0PlxuICAgICAgPHNlY3Rpb25cbiAgICAgICAgaWQ9XCJob21lXCJcbiAgICAgICAgZGF0YS1uYXYtdG9vbHRpcD1cIkhvbWVcIlxuICAgICAgICBjbGFzc05hbWU9XCJwcC1zZWN0aW9uIHBwLXNjcm9sbGFibGVcIlxuICAgICAgPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhvbWUtYmFubmVyXCI+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IGZ1bGwtc2NyZWVuIGFsaWduLWl0ZW1zLWNlbnRlclwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0eXBlLWJveFwiPlxuICAgICAgICAgICAgICAgICAgPGg2PkhlbGxvLCBJIGFtPC9oNj5cbiAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJmb250LWFsdFwiPlRoZW9kb3JlIFBhbG1lcjwvaDE+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJsZWFkXCI+XG4gICAgICAgICAgICAgICAgICAgIEkgQW0gQSBQYXNzaW9uYXRlIDxUeXBpbmdBbmltYXRpb24gLz5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImRlc2NcIj5cbiAgICAgICAgICAgICAgICAgICAgSSBkZXNpZ24gYW5kIGRldmVsb3Agc2VydmljZXMgZm9yIGN1c3RvbWVycyBvZiBhbGwgc2l6ZXMsXG4gICAgICAgICAgICAgICAgICAgIHNwZWNpYWxpemluZyBpbiBjcmVhdGluZyBzdHlsaXNoLCBtb2Rlcm4gd2Vic2l0ZXMsIHdlYlxuICAgICAgICAgICAgICAgICAgICBzZXJ2aWNlcyBhbmQgb25saW5lIHN0b3Jlcy5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYnRuLWJhclwiIG9uQ2xpY2s9e29uQnV0dG9uQ2xpY2t9PlxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJweC1idG4gcHgtYnRuLXRoZW1lXCIgaHJlZj1cIiNcIj5cbiAgICAgICAgICAgICAgICAgICAgICBEb3dubG9hZCBDVlxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLTZcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImhiLWltZ1wiPlxuICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCJzdGF0aWMvaW1nL2hvbWUtYmFubmVyLnBuZ1wiIHRpdGxlPVwiXCIgYWx0PVwiXCIgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICB7LyogRW5kIEhvbWUgKi99XG4gICAgICB7LyogYWJvdXQgdXMgKi99XG4gICAgICA8QWJvdXQgLz5cbiAgICAgIHsvKiBFbmQgYWJvdXQgdXMgKi99XG4gICAgICB7LyogU2VydmljZXMgKi99XG4gICAgICB7LyogPFNlcnZpY2VzIC8+ICovfVxuICAgICAgey8qIEVuZCBTZXJ2aWNlcyAqL31cbiAgICAgIHsvKiBQb3J0Zm9saW8gKi99XG4gICAgICA8UG9ydGZvbGlvIC8+XG4gICAgICB7LyogRW5kIFBvcnRmb2xpbyAqL31cbiAgICAgIHsvKiBCbG9nICovfVxuICAgICAgey8qIDxCbG9nIC8+ICovfVxuICAgICAgey8qIEVuZCBCbG9nICovfVxuICAgICAgey8qIENvbnRhY3QgdXMgKi99XG4gICAgICA8Q29udGFjdCAvPlxuICAgIDwvTGF5b3V0PlxuICApO1xufTtcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xuIl0sIm5hbWVzIjpbImR5bmFtaWMiLCJBYm91dCIsIkJsb2ciLCJDb250YWN0IiwiU2VydmljZXMiLCJUeXBpbmdBbmltYXRpb24iLCJMYXlvdXQiLCJQb3J0Zm9saW8iLCJzc3IiLCJvbkJ1dHRvbkNsaWNrIiwiZmV0Y2giLCJ0aGVuIiwicmVzcG9uc2UiLCJibG9iIiwiZmlsZVVSTCIsIndpbmRvdyIsIlVSTCIsImNyZWF0ZU9iamVjdFVSTCIsImFsaW5rIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiaHJlZiIsImRvd25sb2FkIiwiY2xpY2siLCJJbmRleCIsInNlY3Rpb24iLCJpZCIsImRhdGEtbmF2LXRvb2x0aXAiLCJjbGFzc05hbWUiLCJkaXYiLCJoNiIsImgxIiwicCIsIm9uQ2xpY2siLCJhIiwiaW1nIiwic3JjIiwidGl0bGUiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});