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

/***/ "./src/features/blog/Blog.tsx":
/*!************************************!*\
  !*** ./src/features/blog/Blog.tsx ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Blog_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./Blog.module.css */ \"./src/features/blog/Blog.module.css\");\n/* harmony import */ var _Blog_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_Blog_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _textheader_TextHeader__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../textheader/TextHeader */ \"./src/features/textheader/TextHeader.tsx\");\n/* harmony import */ var _textparagraph_TextParagraph__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../textparagraph/TextParagraph */ \"./src/features/textparagraph/TextParagraph.tsx\");\n/* harmony import */ var _divider_Divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../divider/Divider */ \"./src/features/divider/Divider.tsx\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    query {\\n      postById(postId: \",\n        \") {\\n        postId\\n        title\\n        readingTime\\n        content\\n      }\\n    }\\n  \"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\nconst makeQuery = (postId)=>{\n    return (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.gql)(_templateObject(), postId);\n};\nconst parseContent = (node)=>{\n    if (node.type === \"paragraph\") {\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_textparagraph_TextParagraph__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            children: \"asdfhadkfjhadk\"\n        }, void 0, false, {\n            fileName: \"/Users/michaelvaden/Desktop/Projects/personalsite/frontend/src/features/blog/Blog.tsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, undefined);\n    }\n};\nconst Blog = ()=>{\n    _s();\n    const { data , loading , error  } = (0,_apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery)(makeQuery(3), {\n        pollInterval: 500\n    });\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: \"loading\"\n    }, void 0, false);\n    if (error) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: \"error\"\n    }, void 0, false);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"div\", {\n        className: (_Blog_module_css__WEBPACK_IMPORTED_MODULE_7___default().container),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_textheader_TextHeader__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                large: true,\n                children: data.postById.title\n            }, void 0, false, {\n                fileName: \"/Users/michaelvaden/Desktop/Projects/personalsite/frontend/src/features/blog/Blog.tsx\",\n                lineNumber: 51,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_textparagraph_TextParagraph__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                children: \"\".concat(data.postById.readingTime, \" minute read\")\n            }, void 0, false, {\n                fileName: \"/Users/michaelvaden/Desktop/Projects/personalsite/frontend/src/features/blog/Blog.tsx\",\n                lineNumber: 54,\n                columnNumber: 9\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_divider_Divider__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n                fileName: \"/Users/michaelvaden/Desktop/Projects/personalsite/frontend/src/features/blog/Blog.tsx\",\n                lineNumber: 57,\n                columnNumber: 9\n            }, undefined),\n            JSON.parse(data.postById.content).data.map((node)=>{\n                parseContent(node);\n            })\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/michaelvaden/Desktop/Projects/personalsite/frontend/src/features/blog/Blog.tsx\",\n        lineNumber: 50,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Blog, \"tP+6C5plfRwxqCbBj3cMUcL7Opk=\", false, function() {\n    return [\n        _apollo_client__WEBPACK_IMPORTED_MODULE_6__.useQuery\n    ];\n});\n_c = Blog;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Blog);\nvar _c;\n$RefreshReg$(_c, \"Blog\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvYmxvZy9CbG9nLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNZO0FBRVk7QUFDUztBQUNuQjtBQUtPO0FBRy9DLE1BQU1PLFlBQVksQ0FBQ0MsU0FBbUI7SUFDcEMsT0FBT0YsbURBQUdBLG9CQUVhRTtBQVF6QjtBQVFBLE1BQU1DLGVBQWUsQ0FBRUMsT0FBbUI7SUFDeEMsSUFBS0EsS0FBS0MsSUFBSSxLQUFLLGFBQWE7UUFDOUIscUJBQ0UsOERBQUNSLG9FQUFhQTtzQkFBQzs7Ozs7O0lBSW5CLENBQUM7QUFDSDtBQUVBLE1BQU1TLE9BQU8sSUFBTTs7SUFDakIsTUFBTSxFQUFFQyxLQUFJLEVBQUVDLFFBQU8sRUFBRUMsTUFBSyxFQUFFLEdBQUdWLHdEQUFRQSxDQUFFRSxVQUFVLElBQUk7UUFBRVMsY0FBYztJQUFJO0lBRTdFLElBQUlGLFNBQVMscUJBQU87a0JBQUU7O0lBQ3RCLElBQUlDLE9BQU8scUJBQU87a0JBQUU7O0lBRXBCLHFCQUNFLDhEQUFDRTtRQUFJQyxXQUFXakIsbUVBQWdCOzswQkFDNUIsOERBQUNDLDhEQUFVQTtnQkFBQ2tCLE9BQU8sSUFBSTswQkFDbEJQLEtBQUtRLFFBQVEsQ0FBQ0MsS0FBSzs7Ozs7OzBCQUV4Qiw4REFBQ25CLG9FQUFhQTswQkFDVCxHQUE2QixPQUExQlUsS0FBS1EsUUFBUSxDQUFDRSxXQUFXLEVBQUM7Ozs7OzswQkFFbEMsOERBQUNuQix3REFBT0E7Ozs7O1lBRU5vQixLQUFLQyxLQUFLLENBQUVaLEtBQUtRLFFBQVEsQ0FBQ0ssT0FBTyxFQUFHYixJQUFJLENBQUNjLEdBQUcsQ0FBRSxDQUFFakIsT0FBb0I7Z0JBQ2xFRCxhQUFjQztZQUNoQjs7Ozs7OztBQUlWO0dBdEJNRTs7UUFDNkJQLG9EQUFRQTs7O0tBRHJDTztBQXdCTiwrREFBZUEsSUFBSUEsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvZmVhdHVyZXMvYmxvZy9CbG9nLnRzeD9lNTcwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vQmxvZy5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQgVGV4dEhlYWRlciBmcm9tICcuLi90ZXh0aGVhZGVyL1RleHRIZWFkZXInO1xuaW1wb3J0IFRleHRQYXJhZ3JhcGggZnJvbSAnLi4vdGV4dHBhcmFncmFwaC9UZXh0UGFyYWdyYXBoJztcbmltcG9ydCBEaXZpZGVyIGZyb20gJy4uL2RpdmlkZXIvRGl2aWRlcidcblxuaW1wb3J0IHsgdXNlQXBwU2VsZWN0b3IsIHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnLi4vLi4vYXBwL2hvb2tzJ1xuaW1wb3J0IHsgc2VsZWN0RGFya01vZGVTdGF0ZSwgc2VsZWN0RGFya01vZGVJbml0IH0gZnJvbSAnLi4vZGFya21vZGUvZGFya01vZGVTbGljZSdcblxuaW1wb3J0IHsgdXNlUXVlcnksIGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiO1xuXG5cbmNvbnN0IG1ha2VRdWVyeSA9IChwb3N0SWQ6IG51bWJlcikgPT4ge1xuICByZXR1cm4gZ3FsYFxuICAgIHF1ZXJ5IHtcbiAgICAgIHBvc3RCeUlkKHBvc3RJZDogJHtwb3N0SWR9KSB7XG4gICAgICAgIHBvc3RJZFxuICAgICAgICB0aXRsZVxuICAgICAgICByZWFkaW5nVGltZVxuICAgICAgICBjb250ZW50XG4gICAgICB9XG4gICAgfVxuICBgXG59XG5cbnR5cGUgTm9kZVR5cGUgPSB7XG4gIHR5cGU6IHN0cmluZztcbiAgY29udGVudDogc3RyaW5nO1xufVxuXG5cbmNvbnN0IHBhcnNlQ29udGVudCA9ICggbm9kZTogTm9kZVR5cGUpID0+IHtcbiAgaWYgKCBub2RlLnR5cGUgPT09ICdwYXJhZ3JhcGgnKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxUZXh0UGFyYWdyYXBoPlxuICAgICAgICBhc2RmaGFka2ZqaGFka1xuICAgICAgPC9UZXh0UGFyYWdyYXBoPlxuICAgIClcbiAgfVxufVxuXG5jb25zdCBCbG9nID0gKCkgPT4ge1xuICBjb25zdCB7IGRhdGEsIGxvYWRpbmcsIGVycm9yIH0gPSB1c2VRdWVyeSggbWFrZVF1ZXJ5KDMpLCB7IHBvbGxJbnRlcnZhbDogNTAwIH0gKVxuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPD5sb2FkaW5nPC8+XG4gIGlmIChlcnJvcikgcmV0dXJuIDw+ZXJyb3I8Lz5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfT5cbiAgICAgICAgPFRleHRIZWFkZXIgbGFyZ2U9e3RydWV9PlxuICAgICAgICAgICAge2RhdGEucG9zdEJ5SWQudGl0bGV9XG4gICAgICAgIDwvVGV4dEhlYWRlcj5cbiAgICAgICAgPFRleHRQYXJhZ3JhcGg+XG4gICAgICAgICAgICB7YCR7ZGF0YS5wb3N0QnlJZC5yZWFkaW5nVGltZX0gbWludXRlIHJlYWRgfVxuICAgICAgICA8L1RleHRQYXJhZ3JhcGg+XG4gICAgICAgIDxEaXZpZGVyLz5cbiAgICAgICAge1xuICAgICAgICAgIEpTT04ucGFyc2UoIGRhdGEucG9zdEJ5SWQuY29udGVudCApLmRhdGEubWFwKCAoIG5vZGU6IE5vZGVUeXBlICkgPT4ge1xuICAgICAgICAgICAgcGFyc2VDb250ZW50KCBub2RlIClcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgPC9kaXY+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmxvZyJdLCJuYW1lcyI6WyJSZWFjdCIsInN0eWxlcyIsIlRleHRIZWFkZXIiLCJUZXh0UGFyYWdyYXBoIiwiRGl2aWRlciIsInVzZVF1ZXJ5IiwiZ3FsIiwibWFrZVF1ZXJ5IiwicG9zdElkIiwicGFyc2VDb250ZW50Iiwibm9kZSIsInR5cGUiLCJCbG9nIiwiZGF0YSIsImxvYWRpbmciLCJlcnJvciIsInBvbGxJbnRlcnZhbCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsImxhcmdlIiwicG9zdEJ5SWQiLCJ0aXRsZSIsInJlYWRpbmdUaW1lIiwiSlNPTiIsInBhcnNlIiwiY29udGVudCIsIm1hcCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/features/blog/Blog.tsx\n"));

/***/ })

});