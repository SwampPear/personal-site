"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/just-for-fun",{

/***/ "./src/features/justForFun/justForFun.tsx":
/*!************************************************!*\
  !*** ./src/features/justForFun/justForFun.tsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _justForFun_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./justForFun.module.css */ \"./src/features/justForFun/justForFun.module.css\");\n/* harmony import */ var _justForFun_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_justForFun_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst JustForFun = ()=>{\n    _s();\n    const mountRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // setup scene\n        let scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n        // setup camera\n        let camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n        camera.position.z = -10;\n        // setup rendered\n        let renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer({\n            alpha: true,\n            antialias: true\n        });\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        renderer.setClearColor(0x000000, 1);\n        renderer.setPixelRatio(window.devicePixelRatio);\n        // append to container div\n        mountRef.current.appendChild(renderer.domElement);\n        const map = new three__WEBPACK_IMPORTED_MODULE_2__.TextureLoader().load(\"../sprite.png\");\n        const material = new three__WEBPACK_IMPORTED_MODULE_2__.SpriteMaterial({\n            map: map\n        });\n        const sprite = new three__WEBPACK_IMPORTED_MODULE_2__.Sprite(material);\n        scene.add(sprite);\n    /*\n      // define and add blob\n      const material = new THREE.ShaderMaterial( {\n          uniforms: {\n            time: { // float initialized to k\n              value: 0.0\n            },\n            mouseY: {\n              value: 0.0\n            }\n          },\n          vertexShader: vertexShader,\n          fragmentShader: fragmentShader\n      })\n      \n      const mesh = new THREE.Mesh(\n        new THREE.IcosahedronGeometry(35, 40),\n        material\n      )\n    \n      scene.add(mesh)\n    \n      */ /*\n      // animation\n      let start = Date.now()\n  \n      const animate = () => {\n          requestAnimationFrame(animate)\n      \n        material.uniforms['time'].value = .000125 * ( Date.now() - start )\n          \n      \n        renderer.render( scene, camera )\n      }\n      \n      animate()\n  \n      addEventListener('mousemove', (event) => {\n        material.uniforms['mouseY'].value = event.screenY\n      })\n      */ }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_justForFun_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        ref: mountRef\n    }, void 0, false, {\n        fileName: \"/Users/michaelvaden/Desktop/Projects/personalsite/frontend/src/features/justForFun/justForFun.tsx\",\n        lineNumber: 81,\n        columnNumber: 7\n    }, undefined);\n};\n_s(JustForFun, \"V9/qkEdV8GfsDZk7lMTA1T8g5Ps=\");\n_c = JustForFun;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JustForFun);\nvar _c;\n$RefreshReg$(_c, \"JustForFun\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvanVzdEZvckZ1bi9qdXN0Rm9yRnVuLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFnRDtBQUNKO0FBRWQ7QUFNOUIsTUFBTUssYUFBYSxJQUFNOztJQUNyQixNQUFNQyxXQUFXTCw2Q0FBTUEsQ0FBaUIsSUFBSTtJQUU1Q0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLGNBQWM7UUFDZCxJQUFJSyxRQUFRLElBQUlILHdDQUFXO1FBRTNCLGVBQWU7UUFDZixJQUFJSyxTQUFTLElBQUlMLG9EQUF1QixDQUFFLElBQUlPLE9BQU9DLFVBQVUsR0FBQ0QsT0FBT0UsV0FBVyxFQUFFLEtBQUs7UUFDekZKLE9BQU9LLFFBQVEsQ0FBQ0MsQ0FBQyxHQUFHLENBQUM7UUFFckIsaUJBQWlCO1FBQ2pCLElBQUlDLFdBQVcsSUFBSVosZ0RBQW1CLENBQUU7WUFBRWMsT0FBTyxJQUFJO1lBQUVDLFdBQVcsSUFBSTtRQUFDO1FBQ3ZFSCxTQUFTSSxPQUFPLENBQUVULE9BQU9DLFVBQVUsRUFBRUQsT0FBT0UsV0FBVztRQUN2REcsU0FBU0ssYUFBYSxDQUFFLFVBQVU7UUFDbENMLFNBQVNNLGFBQWEsQ0FBRVgsT0FBT1ksZ0JBQWdCO1FBRS9DLDBCQUEwQjtRQUMxQmpCLFNBQVNrQixPQUFPLENBQUVDLFdBQVcsQ0FBRVQsU0FBU1UsVUFBVTtRQUVsRCxNQUFNQyxNQUFNLElBQUl2QixnREFBbUIsR0FBR3lCLElBQUksQ0FBRTtRQUM1QyxNQUFNQyxXQUFXLElBQUkxQixpREFBb0IsQ0FBRTtZQUFFdUIsS0FBS0E7UUFBSTtRQUV0RCxNQUFNSyxTQUFTLElBQUk1Qix5Q0FBWSxDQUFFMEI7UUFDakN2QixNQUFNMkIsR0FBRyxDQUFFRjtJQUVYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O01Bc0JBLEdBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQWtCQyxHQUNGLEdBQUcsRUFBRTtJQUVMLHFCQUNFLDhEQUFDRztRQUFJQyxXQUFXakMseUVBQWdCO1FBQUVtQyxLQUFLaEM7Ozs7OztBQUc3QztHQTFFTUQ7S0FBQUE7QUE0RU4sK0RBQWVBLFVBQVVBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2ZlYXR1cmVzL2p1c3RGb3JGdW4vanVzdEZvckZ1bi50c3g/YmU5YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9qdXN0Rm9yRnVuLm1vZHVsZS5jc3MnXG5cbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gJ3RocmVlJ1xuXG5pbXBvcnQgc3ByaXRlIGZyb20gJy4uL3Nwcml0ZS5wbmcnXG5cblxuXG5jb25zdCBKdXN0Rm9yRnVuID0gKCkgPT4ge1xuICAgIGNvbnN0IG1vdW50UmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKVxuXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICAgIC8vIHNldHVwIHNjZW5lXG4gICAgICBsZXQgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKVxuICBcbiAgICAgIC8vIHNldHVwIGNhbWVyYVxuICAgICAgbGV0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYSggNzUsIHdpbmRvdy5pbm5lcldpZHRoL3dpbmRvdy5pbm5lckhlaWdodCwgMC4xLCAxMDAwIClcbiAgICAgIGNhbWVyYS5wb3NpdGlvbi56ID0gLTEwXG4gIFxuICAgICAgLy8gc2V0dXAgcmVuZGVyZWRcbiAgICAgIGxldCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCB7IGFscGhhOiB0cnVlLCBhbnRpYWxpYXM6IHRydWUgfSApXG4gICAgICByZW5kZXJlci5zZXRTaXplKCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0IClcbiAgICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoIDB4MDAwMDAwLCAxIClcbiAgICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8oIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIClcbiAgICAgIFxuICAgICAgLy8gYXBwZW5kIHRvIGNvbnRhaW5lciBkaXZcbiAgICAgIG1vdW50UmVmLmN1cnJlbnQhLmFwcGVuZENoaWxkKCByZW5kZXJlci5kb21FbGVtZW50IClcblxuICAgICAgY29uc3QgbWFwID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKCAnLi4vc3ByaXRlLnBuZycgKVxuICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuU3ByaXRlTWF0ZXJpYWwoIHsgbWFwOiBtYXAgfSApXG5cbiAgICAgIGNvbnN0IHNwcml0ZSA9IG5ldyBUSFJFRS5TcHJpdGUoIG1hdGVyaWFsIClcbiAgICAgIHNjZW5lLmFkZCggc3ByaXRlIClcbiAgXG4gICAgICAvKlxuICAgICAgLy8gZGVmaW5lIGFuZCBhZGQgYmxvYlxuICAgICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuU2hhZGVyTWF0ZXJpYWwoIHtcbiAgICAgICAgICB1bmlmb3Jtczoge1xuICAgICAgICAgICAgdGltZTogeyAvLyBmbG9hdCBpbml0aWFsaXplZCB0byBrXG4gICAgICAgICAgICAgIHZhbHVlOiAwLjBcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBtb3VzZVk6IHtcbiAgICAgICAgICAgICAgdmFsdWU6IDAuMFxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgdmVydGV4U2hhZGVyOiB2ZXJ0ZXhTaGFkZXIsXG4gICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGZyYWdtZW50U2hhZGVyXG4gICAgICB9KVxuICAgICAgXG4gICAgICBjb25zdCBtZXNoID0gbmV3IFRIUkVFLk1lc2goXG4gICAgICAgIG5ldyBUSFJFRS5JY29zYWhlZHJvbkdlb21ldHJ5KDM1LCA0MCksXG4gICAgICAgIG1hdGVyaWFsXG4gICAgICApXG4gICAgXG4gICAgICBzY2VuZS5hZGQobWVzaClcbiAgICBcbiAgICAgICovXG4gICAgIC8qXG4gICAgICAvLyBhbmltYXRpb25cbiAgICAgIGxldCBzdGFydCA9IERhdGUubm93KClcbiAgXG4gICAgICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xuICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKVxuICAgICAgXG4gICAgICAgIG1hdGVyaWFsLnVuaWZvcm1zWyd0aW1lJ10udmFsdWUgPSAuMDAwMTI1ICogKCBEYXRlLm5vdygpIC0gc3RhcnQgKVxuICAgICAgICAgIFxuICAgICAgXG4gICAgICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIGNhbWVyYSApXG4gICAgICB9XG4gICAgICBcbiAgICAgIGFuaW1hdGUoKVxuICBcbiAgICAgIGFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIChldmVudCkgPT4ge1xuICAgICAgICBtYXRlcmlhbC51bmlmb3Jtc1snbW91c2VZJ10udmFsdWUgPSBldmVudC5zY3JlZW5ZXG4gICAgICB9KVxuICAgICAgKi9cbiAgICB9LCBbXSlcbiAgICBcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250YWluZXJ9IHJlZj17bW91bnRSZWZ9PlxuICAgICAgPC9kaXY+XG4gICAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBKdXN0Rm9yRnVuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0Iiwic3R5bGVzIiwiVEhSRUUiLCJKdXN0Rm9yRnVuIiwibW91bnRSZWYiLCJzY2VuZSIsIlNjZW5lIiwiY2FtZXJhIiwiUGVyc3BlY3RpdmVDYW1lcmEiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaW5uZXJIZWlnaHQiLCJwb3NpdGlvbiIsInoiLCJyZW5kZXJlciIsIldlYkdMUmVuZGVyZXIiLCJhbHBoYSIsImFudGlhbGlhcyIsInNldFNpemUiLCJzZXRDbGVhckNvbG9yIiwic2V0UGl4ZWxSYXRpbyIsImRldmljZVBpeGVsUmF0aW8iLCJjdXJyZW50IiwiYXBwZW5kQ2hpbGQiLCJkb21FbGVtZW50IiwibWFwIiwiVGV4dHVyZUxvYWRlciIsImxvYWQiLCJtYXRlcmlhbCIsIlNwcml0ZU1hdGVyaWFsIiwic3ByaXRlIiwiU3ByaXRlIiwiYWRkIiwiZGl2IiwiY2xhc3NOYW1lIiwiY29udGFpbmVyIiwicmVmIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/features/justForFun/justForFun.tsx\n"));

/***/ })

});