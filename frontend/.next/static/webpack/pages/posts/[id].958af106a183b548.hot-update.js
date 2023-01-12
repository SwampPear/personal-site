"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[id]",{

/***/ "./pages/posts/[id].tsx":
/*!******************************!*\
  !*** ./pages/posts/[id].tsx ***!
  \******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getAllPosts\": function() { return /* binding */ getAllPosts; },\n/* harmony export */   \"getPostByID\": function() { return /* binding */ getPostByID; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/src/_tagged_template_literal.mjs */ \"./node_modules/@swc/helpers/src/_tagged_template_literal.mjs\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _src_features_base_Base__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../src/features/base/Base */ \"./src/features/base/Base.tsx\");\n/* harmony import */ var _src_app_hooks__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../src/app/hooks */ \"./src/app/hooks.ts\");\n/* harmony import */ var _src_features_darkmode_darkModeSlice__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../src/features/darkmode/darkModeSlice */ \"./src/features/darkmode/darkModeSlice.ts\");\n/* harmony import */ var _apollo_client__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @apollo/client */ \"./node_modules/@apollo/client/index.js\");\n/* harmony import */ var _app__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../_app */ \"./pages/_app.tsx\");\n\nfunction _templateObject() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    query {\\n      allPosts {\\n        postId\\n        title\\n        readingTime\\n        content\\n      }\\n    }\\n  \"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\nfunction _templateObject1() {\n    const data = (0,_swc_helpers_src_tagged_template_literal_mjs__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\n        \"\\n    query {\\n      postById(id: \",\n        \") {\\n        id\\n        type\\n        title\\n        readingTime\\n        content\\n      }\\n    }\\n  \"\n    ]);\n    _templateObject1 = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst allPosts = ()=>{\n    return (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.gql)(_templateObject());\n};\nconst postByID = (id)=>{\n    return (0,_apollo_client__WEBPACK_IMPORTED_MODULE_8__.gql)(_templateObject1(), id);\n};\nasync function getAllPosts() {\n    return _app__WEBPACK_IMPORTED_MODULE_7__.client.query({\n        query: allPosts()\n    }).then((result)=>result.data.allPosts);\n}\nasync function getPostByID(id) {\n    return _app__WEBPACK_IMPORTED_MODULE_7__.client.query({\n        query: postByID(id)\n    }).then((result)=>{\n        return result.data.Post;\n    });\n}\n/*\nexport async function getStaticPaths() {\n  const posts = await getAllPosts()\n\n  const paths = posts.map((post: any) => ({\n    params: { id: post.id },\n  }))\n\n  return { paths, fallback: false }\n}\n\nexport async function getStaticProps({ params }: any) {\n  const post = await getPostByID(params.id); // Rename to `params.slug`\n\n  return { props: { post } }\n}*/ const PostsPage = (param)=>{\n    let { post  } = param;\n    _s();\n    // darkmode\n    const darkmode = (0,_src_app_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(_src_features_darkmode_darkModeSlice__WEBPACK_IMPORTED_MODULE_6__.selectDarkModeState);\n    const darkmodeInit = (0,_src_app_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector)(_src_features_darkmode_darkModeSlice__WEBPACK_IMPORTED_MODULE_6__.selectDarkModeInit);\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        if (darkmodeInit) {\n            if (darkmode) {\n                var _document_querySelector, _document_querySelector1;\n                (_document_querySelector = document.querySelector(\"body\")) === null || _document_querySelector === void 0 ? void 0 : _document_querySelector.classList.remove(\"bodyFromDark\");\n                (_document_querySelector1 = document.querySelector(\"body\")) === null || _document_querySelector1 === void 0 ? void 0 : _document_querySelector1.classList.add(\"bodyToDark\");\n            } else {\n                var _document_querySelector2, _document_querySelector3;\n                (_document_querySelector2 = document.querySelector(\"body\")) === null || _document_querySelector2 === void 0 ? void 0 : _document_querySelector2.classList.remove(\"bodyToDark\");\n                (_document_querySelector3 = document.querySelector(\"body\")) === null || _document_querySelector3 === void 0 ? void 0 : _document_querySelector3.classList.add(\"bodyFromDark\");\n            }\n        }\n    }, [\n        darkmode,\n        darkmodeInit\n    ]);\n    console.log(getAllPosts());\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"title\", {\n                        children: \"Michael Vaden - \"\n                    }, void 0, false, {\n                        fileName: \"/Users/michaelvaden/Desktop/Projects/personalsite/frontend/pages/posts/[id].tsx\",\n                        lineNumber: 97,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"description\",\n                        content: \"Generated by create nex\"\n                    }, void 0, false, {\n                        fileName: \"/Users/michaelvaden/Desktop/Projects/personalsite/frontend/pages/posts/[id].tsx\",\n                        lineNumber: 98,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"meta\", {\n                        name: \"viewport\",\n                        content: \"width=device-width, initial-scale=1\"\n                    }, void 0, false, {\n                        fileName: \"/Users/michaelvaden/Desktop/Projects/personalsite/frontend/pages/posts/[id].tsx\",\n                        lineNumber: 99,\n                        columnNumber: 9\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\"\n                    }, void 0, false, {\n                        fileName: \"/Users/michaelvaden/Desktop/Projects/personalsite/frontend/pages/posts/[id].tsx\",\n                        lineNumber: 100,\n                        columnNumber: 9\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/michaelvaden/Desktop/Projects/personalsite/frontend/pages/posts/[id].tsx\",\n                lineNumber: 96,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(\"main\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(_src_features_base_Base__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/michaelvaden/Desktop/Projects/personalsite/frontend/pages/posts/[id].tsx\",\n                    lineNumber: 103,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"/Users/michaelvaden/Desktop/Projects/personalsite/frontend/pages/posts/[id].tsx\",\n                lineNumber: 102,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true);\n};\n_s(PostsPage, \"mvBknYmi7vHMId6gFZO6CAL3u4U=\", false, function() {\n    return [\n        _src_app_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector,\n        _src_app_hooks__WEBPACK_IMPORTED_MODULE_5__.useAppSelector\n    ];\n});\n_c = PostsPage;\n/* harmony default export */ __webpack_exports__[\"default\"] = (PostsPage);\nvar _c;\n$RefreshReg$(_c, \"PostsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9wb3N0cy9baWRdLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQTRCO0FBQ0s7QUFFYztBQUdLO0FBQytDO0FBRXJEO0FBQ2Q7QUFFaEMsTUFBTVEsV0FBVyxJQUFNO0lBQ3JCLE9BQU9GLG1EQUFHQTtBQVVaO0FBRUEsTUFBTUcsV0FBVyxDQUFDQyxLQUFlO0lBQy9CLE9BQU9KLG1EQUFHQSxxQkFFU0k7QUFTckI7QUFFTyxlQUFlQyxjQUFjO0lBQ2xDLE9BQU9KLDhDQUNDLENBQUM7UUFDTEssT0FBT0o7SUFDVCxHQUNDSyxJQUFJLENBQUMsQ0FBQ0MsU0FBV0EsT0FBT0MsSUFBSSxDQUFDUCxRQUFRO0FBQzFDLENBQUM7QUFFTSxlQUFlUSxZQUFZTixFQUFVLEVBQUU7SUFDNUMsT0FBT0gsOENBQ0MsQ0FBQztRQUNMSyxPQUFPSCxTQUFTQztJQUNsQixHQUNDRyxJQUFJLENBQUMsQ0FBQ0MsU0FBVztRQUNoQixPQUFPQSxPQUFPQyxJQUFJLENBQUNFLElBQUk7SUFDekI7QUFDSixDQUFDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7OztDQWVDLEdBR0QsTUFBTUMsWUFBWSxTQUFpQjtRQUFoQixFQUFDQyxLQUFJLEVBQU07O0lBQzVCLFdBQVc7SUFDWCxNQUFNQyxXQUFXakIsOERBQWNBLENBQUVFLHFGQUFtQkE7SUFDcEQsTUFBTWdCLGVBQWVsQiw4REFBY0EsQ0FBRUMsb0ZBQWtCQTtJQUV2REgsZ0RBQVNBLENBQUUsSUFBTTtRQUNmLElBQUlvQixjQUFjO1lBQ2hCLElBQUlELFVBQVU7b0JBQ1pFLHlCQUNBQTtnQkFEQUEsQ0FBQUEsMEJBQUFBLFNBQVNDLGFBQWEsQ0FBRSxxQkFBeEJELHFDQUFBQSxLQUFBQSxJQUFBQSx3QkFBa0NFLFVBQVVDLE1BQU0sQ0FBRSxlQUFnQjtnQkFDcEVILENBQUFBLDJCQUFBQSxTQUFTQyxhQUFhLENBQUUscUJBQXhCRCxzQ0FBQUEsS0FBQUEsSUFBQUEseUJBQWtDRSxVQUFVRSxHQUFHLENBQUUsYUFBYztZQUNqRSxPQUFPO29CQUNMSiwwQkFDQUE7Z0JBREFBLENBQUFBLDJCQUFBQSxTQUFTQyxhQUFhLENBQUUscUJBQXhCRCxzQ0FBQUEsS0FBQUEsSUFBQUEseUJBQWtDRSxVQUFVQyxNQUFNLENBQUUsYUFBYztnQkFDbEVILENBQUFBLDJCQUFBQSxTQUFTQyxhQUFhLENBQUUscUJBQXhCRCxzQ0FBQUEsS0FBQUEsSUFBQUEseUJBQWtDRSxVQUFVRSxHQUFHLENBQUUsZUFBZ0I7WUFDbkUsQ0FBQztRQUNILENBQUM7SUFDSCxHQUFHO1FBQUNOO1FBQVVDO0tBQWE7SUFFM0JNLFFBQVFDLEdBQUcsQ0FBQ2pCO0lBRVoscUJBQ0U7OzBCQUNFLDhEQUFDWCxrREFBSUE7O2tDQUNILDhEQUFDNkI7a0NBQU07Ozs7OztrQ0FDUCw4REFBQ0M7d0JBQUtDLE1BQUs7d0JBQWNDLFNBQVE7Ozs7OztrQ0FDakMsOERBQUNGO3dCQUFLQyxNQUFLO3dCQUFXQyxTQUFROzs7Ozs7a0NBQzlCLDhEQUFDQzt3QkFBS0MsS0FBSTt3QkFBT0MsTUFBSzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQ0M7MEJBQ0MsNEVBQUNsQywrREFBSUE7Ozs7Ozs7Ozs7OztBQUliO0dBaENNZ0I7O1FBRWFmLDBEQUFjQTtRQUNWQSwwREFBY0E7OztLQUgvQmU7QUFrQ04sK0RBQWVBLFNBQVNBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcG9zdHMvW2lkXS50c3g/MjFlMCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcblxuaW1wb3J0IEJhc2UgZnJvbSAnLi4vLi4vc3JjL2ZlYXR1cmVzL2Jhc2UvQmFzZSdcbmltcG9ydCBCbG9nIGZyb20gJy4uLy4uL3NyYy9mZWF0dXJlcy9ibG9nL0Jsb2cnXG5cbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSAnLi4vLi4vc3JjL2FwcC9ob29rcydcbmltcG9ydCB7IHNlbGVjdERhcmtNb2RlSW5pdCwgc2VsZWN0RGFya01vZGVTdGF0ZSB9IGZyb20gJy4uLy4uL3NyYy9mZWF0dXJlcy9kYXJrbW9kZS9kYXJrTW9kZVNsaWNlJyBcblxuaW1wb3J0IHsgdXNlUXVlcnksIGdxbCB9IGZyb20gXCJAYXBvbGxvL2NsaWVudFwiXG5pbXBvcnQgeyBjbGllbnQgfSBmcm9tICcuLi9fYXBwJ1xuXG5jb25zdCBhbGxQb3N0cyA9ICgpID0+IHtcbiAgcmV0dXJuIGdxbGBcbiAgICBxdWVyeSB7XG4gICAgICBhbGxQb3N0cyB7XG4gICAgICAgIHBvc3RJZFxuICAgICAgICB0aXRsZVxuICAgICAgICByZWFkaW5nVGltZVxuICAgICAgICBjb250ZW50XG4gICAgICB9XG4gICAgfVxuICBgXG59XG5cbmNvbnN0IHBvc3RCeUlEID0gKGlkOiBudW1iZXIpID0+IHtcbiAgcmV0dXJuIGdxbGBcbiAgICBxdWVyeSB7XG4gICAgICBwb3N0QnlJZChpZDogJHtpZH0pIHtcbiAgICAgICAgaWRcbiAgICAgICAgdHlwZVxuICAgICAgICB0aXRsZVxuICAgICAgICByZWFkaW5nVGltZVxuICAgICAgICBjb250ZW50XG4gICAgICB9XG4gICAgfVxuICBgXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBbGxQb3N0cygpIHtcbiAgcmV0dXJuIGNsaWVudFxuICAgIC5xdWVyeSh7XG4gICAgICBxdWVyeTogYWxsUG9zdHMoKSxcbiAgICB9KVxuICAgIC50aGVuKChyZXN1bHQpID0+IHJlc3VsdC5kYXRhLmFsbFBvc3RzKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UG9zdEJ5SUQoaWQ6IG51bWJlcikge1xuICByZXR1cm4gY2xpZW50XG4gICAgLnF1ZXJ5KHtcbiAgICAgIHF1ZXJ5OiBwb3N0QnlJRChpZCksXG4gICAgfSlcbiAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICByZXR1cm4gcmVzdWx0LmRhdGEuUG9zdFxuICAgIH0pXG59XG4vKlxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1BhdGhzKCkge1xuICBjb25zdCBwb3N0cyA9IGF3YWl0IGdldEFsbFBvc3RzKClcblxuICBjb25zdCBwYXRocyA9IHBvc3RzLm1hcCgocG9zdDogYW55KSA9PiAoe1xuICAgIHBhcmFtczogeyBpZDogcG9zdC5pZCB9LFxuICB9KSlcblxuICByZXR1cm4geyBwYXRocywgZmFsbGJhY2s6IGZhbHNlIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFN0YXRpY1Byb3BzKHsgcGFyYW1zIH06IGFueSkge1xuICBjb25zdCBwb3N0ID0gYXdhaXQgZ2V0UG9zdEJ5SUQocGFyYW1zLmlkKTsgLy8gUmVuYW1lIHRvIGBwYXJhbXMuc2x1Z2BcblxuICByZXR1cm4geyBwcm9wczogeyBwb3N0IH0gfVxufSovXG5cblxuY29uc3QgUG9zdHNQYWdlID0gKHtwb3N0fTogYW55KSA9PiB7XG4gIC8vIGRhcmttb2RlXG4gIGNvbnN0IGRhcmttb2RlID0gdXNlQXBwU2VsZWN0b3IoIHNlbGVjdERhcmtNb2RlU3RhdGUgKVxuICBjb25zdCBkYXJrbW9kZUluaXQgPSB1c2VBcHBTZWxlY3Rvciggc2VsZWN0RGFya01vZGVJbml0IClcblxuICB1c2VFZmZlY3QoICgpID0+IHsgXG4gICAgaWYgKGRhcmttb2RlSW5pdCkge1xuICAgICAgaWYgKGRhcmttb2RlKSB7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdib2R5JyApPy5jbGFzc0xpc3QucmVtb3ZlKCAnYm9keUZyb21EYXJrJyApIFxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnYm9keScgKT8uY2xhc3NMaXN0LmFkZCggJ2JvZHlUb0RhcmsnICkgXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCAnYm9keScgKT8uY2xhc3NMaXN0LnJlbW92ZSggJ2JvZHlUb0RhcmsnICkgXG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoICdib2R5JyApPy5jbGFzc0xpc3QuYWRkKCAnYm9keUZyb21EYXJrJyApIFxuICAgICAgfVxuICAgIH1cbiAgfSwgW2Rhcmttb2RlLCBkYXJrbW9kZUluaXRdKVxuXG4gIGNvbnNvbGUubG9nKGdldEFsbFBvc3RzKCkpXG5cbiAgcmV0dXJuIChcbiAgICA8PlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT5NaWNoYWVsIFZhZGVuIC0ge308L3RpdGxlPlxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PVwiR2VuZXJhdGVkIGJ5IGNyZWF0ZSBuZXhcIiAvPlxuICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTFcIiAvPlxuICAgICAgICA8bGluayByZWw9XCJpY29uXCIgaHJlZj1cIi9mYXZpY29uLmljb1wiIC8+XG4gICAgICA8L0hlYWQ+XG4gICAgICA8bWFpbj5cbiAgICAgICAgPEJhc2UvPlxuICAgICAgPC9tYWluPlxuICAgIDwvPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IFBvc3RzUGFnZSJdLCJuYW1lcyI6WyJIZWFkIiwidXNlRWZmZWN0IiwiQmFzZSIsInVzZUFwcFNlbGVjdG9yIiwic2VsZWN0RGFya01vZGVJbml0Iiwic2VsZWN0RGFya01vZGVTdGF0ZSIsImdxbCIsImNsaWVudCIsImFsbFBvc3RzIiwicG9zdEJ5SUQiLCJpZCIsImdldEFsbFBvc3RzIiwicXVlcnkiLCJ0aGVuIiwicmVzdWx0IiwiZGF0YSIsImdldFBvc3RCeUlEIiwiUG9zdCIsIlBvc3RzUGFnZSIsInBvc3QiLCJkYXJrbW9kZSIsImRhcmttb2RlSW5pdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImNvbnNvbGUiLCJsb2ciLCJ0aXRsZSIsIm1ldGEiLCJuYW1lIiwiY29udGVudCIsImxpbmsiLCJyZWwiLCJocmVmIiwibWFpbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/posts/[id].tsx\n"));

/***/ })

});