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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dynamic */ \"./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _src_components_About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/About */ \"./src/components/About.js\");\n/* harmony import */ var _src_components_Blog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/components/Blog */ \"./src/components/Blog.js\");\n/* harmony import */ var _src_components_Contact__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../src/components/Contact */ \"./src/components/Contact.js\");\n/* harmony import */ var _src_components_Services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../src/components/Services */ \"./src/components/Services.js\");\n/* harmony import */ var _src_components_TypingAnimation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../src/components/TypingAnimation */ \"./src/components/TypingAnimation.js\");\n/* harmony import */ var _src_layout_Layout__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/layout/Layout */ \"./src/layout/Layout.js\");\nvar _this = undefined;\n\n\n\n\n\n\n\n\nvar Portfolio = next_dynamic__WEBPACK_IMPORTED_MODULE_1___default()(function() {\n    return __webpack_require__.e(/*! import() */ \"src_components_Portfolio_js\").then(__webpack_require__.bind(__webpack_require__, /*! ../src/components/Portfolio */ \"./src/components/Portfolio.js\"));\n}, {\n    loadableGenerated: {\n        modules: [\n            \"index.js -> \" + \"../src/components/Portfolio\"\n        ]\n    },\n    ssr: false\n});\n_c = Portfolio;\nvar onButtonClick = function() {\n    // using Java Script method to get PDF file\n    fetch(\"SamplePDF.pdf\").then(function(response) {\n        response.blob().then(function(blob) {\n            // Creating new object of PDF file\n            var fileURL = window.URL.createObjectURL(blob);\n            // Setting various property values\n            var alink = document.createElement(\"a\");\n            alink.href = fileURL;\n            alink.download = \"SamplePDF.pdf\";\n            alink.click();\n        });\n    });\n};\nvar Index = function() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_layout_Layout__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                id: \"home\",\n                \"data-nav-tooltip\": \"Home\",\n                className: \"pp-section pp-scrollable\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"home-banner\",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"container\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"row full-screen align-items-center\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-lg-6\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"type-box\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h6\", {\n                                                children: \"Hello, I am\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                                                lineNumber: 40,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                                className: \"font-alt\",\n                                                children: \"Theodore Palmer\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                                                lineNumber: 41,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"lead\",\n                                                children: [\n                                                    \"I Am A Passionate \",\n                                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_TypingAnimation__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {}, void 0, false, {\n                                                        fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                                                        lineNumber: 43,\n                                                        columnNumber: 39\n                                                    }, _this)\n                                                ]\n                                            }, void 0, true, {\n                                                fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                                                lineNumber: 42,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                                className: \"desc\",\n                                                children: \"I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores.\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                                                lineNumber: 45,\n                                                columnNumber: 19\n                                            }, _this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                                className: \"btn-bar\",\n                                                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                                                    className: \"px-btn px-btn-theme\",\n                                                    href: \"#\",\n                                                    children: \"Donwload CV\"\n                                                }, void 0, false, {\n                                                    fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                                                    lineNumber: 51,\n                                                    columnNumber: 21\n                                                }, _this)\n                                            }, void 0, false, {\n                                                fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                                                lineNumber: 50,\n                                                columnNumber: 19\n                                            }, _this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                                        lineNumber: 39,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                                    lineNumber: 38,\n                                    columnNumber: 15\n                                }, _this),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                    className: \"col-lg-6\",\n                                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"hb-img\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                            src: \"static/img/home-banner.png\",\n                                            title: \"\",\n                                            alt: \"\"\n                                        }, void 0, false, {\n                                            fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                                            lineNumber: 59,\n                                            columnNumber: 19\n                                        }, _this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                                        lineNumber: 58,\n                                        columnNumber: 17\n                                    }, _this)\n                                }, void 0, false, {\n                                    fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                                    lineNumber: 57,\n                                    columnNumber: 15\n                                }, _this)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                            lineNumber: 37,\n                            columnNumber: 13\n                        }, _this)\n                    }, void 0, false, {\n                        fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                        lineNumber: 36,\n                        columnNumber: 11\n                    }, _this)\n                }, void 0, false, {\n                    fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                    lineNumber: 35,\n                    columnNumber: 9\n                }, _this)\n            }, void 0, false, {\n                fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_About__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Portfolio, {}, void 0, false, {\n                fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, _this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_src_components_Contact__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n                lineNumber: 80,\n                columnNumber: 7\n            }, _this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/ted/Downloads/sergio-personal-portfolio-react-nextjs-template-2023-02-27-03-53-53-utc/sargio/pages/index.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, _this);\n};\n_c1 = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c, _c1;\n$RefreshReg$(_c, \"Portfolio\");\n$RefreshReg$(_c1, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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S0FBSztBQXlEWCwrREFBZUEsS0FBSyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGR5bmFtaWMgZnJvbSBcIm5leHQvZHluYW1pY1wiO1xuaW1wb3J0IEFib3V0IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9BYm91dFwiO1xuaW1wb3J0IEJsb2cgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL0Jsb2dcIjtcbmltcG9ydCBDb250YWN0IGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9Db250YWN0XCI7XG5pbXBvcnQgU2VydmljZXMgZnJvbSBcIi4uL3NyYy9jb21wb25lbnRzL1NlcnZpY2VzXCI7XG5pbXBvcnQgVHlwaW5nQW5pbWF0aW9uIGZyb20gXCIuLi9zcmMvY29tcG9uZW50cy9UeXBpbmdBbmltYXRpb25cIjtcbmltcG9ydCBMYXlvdXQgZnJvbSBcIi4uL3NyYy9sYXlvdXQvTGF5b3V0XCI7XG5jb25zdCBQb3J0Zm9saW8gPSBkeW5hbWljKCgpID0+IGltcG9ydChcIi4uL3NyYy9jb21wb25lbnRzL1BvcnRmb2xpb1wiKSwge1xuICBzc3I6IGZhbHNlLFxufSk7XG5cbmNvbnN0IG9uQnV0dG9uQ2xpY2sgPSAoKSA9PiB7XG4gIC8vIHVzaW5nIEphdmEgU2NyaXB0IG1ldGhvZCB0byBnZXQgUERGIGZpbGVcbiAgZmV0Y2goJ1NhbXBsZVBERi5wZGYnKS50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgIHJlc3BvbnNlLmJsb2IoKS50aGVuKGJsb2IgPT4ge1xuICAgICAgICAgIC8vIENyZWF0aW5nIG5ldyBvYmplY3Qgb2YgUERGIGZpbGVcbiAgICAgICAgICBjb25zdCBmaWxlVVJMID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG4gICAgICAgICAgLy8gU2V0dGluZyB2YXJpb3VzIHByb3BlcnR5IHZhbHVlc1xuICAgICAgICAgIGxldCBhbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcbiAgICAgICAgICBhbGluay5ocmVmID0gZmlsZVVSTDtcbiAgICAgICAgICBhbGluay5kb3dubG9hZCA9ICdTYW1wbGVQREYucGRmJztcbiAgICAgICAgICBhbGluay5jbGljaygpO1xuICAgICAgfSlcbiAgfSlcbn1cblxuY29uc3QgSW5kZXggPSAoKSA9PiB7XG4gIHJldHVybiAoXG4gICAgPExheW91dD5cbiAgICAgIDxzZWN0aW9uXG4gICAgICAgIGlkPVwiaG9tZVwiXG4gICAgICAgIGRhdGEtbmF2LXRvb2x0aXA9XCJIb21lXCJcbiAgICAgICAgY2xhc3NOYW1lPVwicHAtc2VjdGlvbiBwcC1zY3JvbGxhYmxlXCJcbiAgICAgID5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJob21lLWJhbm5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBmdWxsLXNjcmVlbiBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNlwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidHlwZS1ib3hcIj5cbiAgICAgICAgICAgICAgICAgIDxoNj5IZWxsbywgSSBhbTwvaDY+XG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwiZm9udC1hbHRcIj5UaGVvZG9yZSBQYWxtZXI8L2gxPlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibGVhZFwiPlxuICAgICAgICAgICAgICAgICAgICBJIEFtIEEgUGFzc2lvbmF0ZSA8VHlwaW5nQW5pbWF0aW9uIC8+XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJkZXNjXCI+XG4gICAgICAgICAgICAgICAgICAgIEkgZGVzaWduIGFuZCBkZXZlbG9wIHNlcnZpY2VzIGZvciBjdXN0b21lcnMgb2YgYWxsIHNpemVzLFxuICAgICAgICAgICAgICAgICAgICBzcGVjaWFsaXppbmcgaW4gY3JlYXRpbmcgc3R5bGlzaCwgbW9kZXJuIHdlYnNpdGVzLCB3ZWJcbiAgICAgICAgICAgICAgICAgICAgc2VydmljZXMgYW5kIG9ubGluZSBzdG9yZXMuXG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ0bi1iYXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwicHgtYnRuIHB4LWJ0bi10aGVtZVwiIGhyZWY9XCIjXCI+XG4gICAgICAgICAgICAgICAgICAgICAgRG9ud2xvYWQgQ1ZcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy02XCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJoYi1pbWdcIj5cbiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwic3RhdGljL2ltZy9ob21lLWJhbm5lci5wbmdcIiB0aXRsZT1cIlwiIGFsdD1cIlwiIC8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgey8qIEVuZCBIb21lICovfVxuICAgICAgey8qIGFib3V0IHVzICovfVxuICAgICAgPEFib3V0IC8+XG4gICAgICB7LyogRW5kIGFib3V0IHVzICovfVxuICAgICAgey8qIFNlcnZpY2VzICovfVxuICAgICAgey8qIDxTZXJ2aWNlcyAvPiAqL31cbiAgICAgIHsvKiBFbmQgU2VydmljZXMgKi99XG4gICAgICB7LyogUG9ydGZvbGlvICovfVxuICAgICAgPFBvcnRmb2xpbyAvPlxuICAgICAgey8qIEVuZCBQb3J0Zm9saW8gKi99XG4gICAgICB7LyogQmxvZyAqL31cbiAgICAgIHsvKiA8QmxvZyAvPiAqL31cbiAgICAgIHsvKiBFbmQgQmxvZyAqL31cbiAgICAgIHsvKiBDb250YWN0IHVzICovfVxuICAgICAgPENvbnRhY3QgLz5cbiAgICA8L0xheW91dD5cbiAgKTtcbn07XG5leHBvcnQgZGVmYXVsdCBJbmRleDtcbiJdLCJuYW1lcyI6WyJkeW5hbWljIiwiQWJvdXQiLCJCbG9nIiwiQ29udGFjdCIsIlNlcnZpY2VzIiwiVHlwaW5nQW5pbWF0aW9uIiwiTGF5b3V0IiwiUG9ydGZvbGlvIiwic3NyIiwib25CdXR0b25DbGljayIsImZldGNoIiwidGhlbiIsInJlc3BvbnNlIiwiYmxvYiIsImZpbGVVUkwiLCJ3aW5kb3ciLCJVUkwiLCJjcmVhdGVPYmplY3RVUkwiLCJhbGluayIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImhyZWYiLCJkb3dubG9hZCIsImNsaWNrIiwiSW5kZXgiLCJzZWN0aW9uIiwiaWQiLCJkYXRhLW5hdi10b29sdGlwIiwiY2xhc3NOYW1lIiwiZGl2IiwiaDYiLCJoMSIsInAiLCJhIiwiaW1nIiwic3JjIiwidGl0bGUiLCJhbHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});