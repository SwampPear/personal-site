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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _justForFun_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./justForFun.module.css */ \"./src/features/justForFun/justForFun.module.css\");\n/* harmony import */ var _justForFun_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_justForFun_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst JustForFun = ()=>{\n    _s();\n    const mountRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // setup scene\n        let scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n        // setup camera\n        let camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n        camera.position.z = 10;\n        // setup rendered\n        let renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer({\n            alpha: true,\n            antialias: true\n        });\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        renderer.setClearColor(0x000000, 1);\n        renderer.setPixelRatio(window.devicePixelRatio);\n        // append to container div\n        mountRef.current.appendChild(renderer.domElement);\n        const map = new three__WEBPACK_IMPORTED_MODULE_2__.TextureLoader().load(\"../sprite.png\");\n        const material = new three__WEBPACK_IMPORTED_MODULE_2__.SpriteMaterial({\n            map: map\n        });\n        const sprite = new three__WEBPACK_IMPORTED_MODULE_2__.Sprite(material);\n        scene.add(sprite);\n    /*\n      // define and add blob\n      const material = new THREE.ShaderMaterial( {\n          uniforms: {\n            time: { // float initialized to k\n              value: 0.0\n            },\n            mouseY: {\n              value: 0.0\n            }\n          },\n          vertexShader: vertexShader,\n          fragmentShader: fragmentShader\n      })\n      \n      const mesh = new THREE.Mesh(\n        new THREE.IcosahedronGeometry(35, 40),\n        material\n      )\n    \n      scene.add(mesh)\n    \n      */ /*\n      // animation\n      let start = Date.now()\n  \n      const animate = () => {\n          requestAnimationFrame(animate)\n      \n        material.uniforms['time'].value = .000125 * ( Date.now() - start )\n          \n      \n        renderer.render( scene, camera )\n      }\n      \n      animate()\n  \n      addEventListener('mousemove', (event) => {\n        material.uniforms['mouseY'].value = event.screenY\n      })\n      */ }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_justForFun_module_css__WEBPACK_IMPORTED_MODULE_3___default().container),\n        ref: mountRef\n    }, void 0, false, {\n        fileName: \"/Users/michaelvaden/Desktop/Projects/personalsite/frontend/src/features/justForFun/justForFun.tsx\",\n        lineNumber: 81,\n        columnNumber: 7\n    }, undefined);\n};\n_s(JustForFun, \"V9/qkEdV8GfsDZk7lMTA1T8g5Ps=\");\n_c = JustForFun;\n/* harmony default export */ __webpack_exports__[\"default\"] = (JustForFun);\nvar _c;\n$RefreshReg$(_c, \"JustForFun\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZmVhdHVyZXMvanVzdEZvckZ1bi9qdXN0Rm9yRnVuLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBOztBQUFnRDtBQUNKO0FBRWQ7QUFNOUIsTUFBTUssYUFBYSxJQUFNOztJQUNyQixNQUFNQyxXQUFXTCw2Q0FBTUEsQ0FBaUIsSUFBSTtJQUU1Q0MsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLGNBQWM7UUFDZCxJQUFJSyxRQUFRLElBQUlILHdDQUFXO1FBRTNCLGVBQWU7UUFDZixJQUFJSyxTQUFTLElBQUlMLG9EQUF1QixDQUFFLElBQUlPLE9BQU9DLFVBQVUsR0FBQ0QsT0FBT0UsV0FBVyxFQUFFLEtBQUs7UUFDekZKLE9BQU9LLFFBQVEsQ0FBQ0MsQ0FBQyxHQUFHO1FBRXBCLGlCQUFpQjtRQUNqQixJQUFJQyxXQUFXLElBQUlaLGdEQUFtQixDQUFFO1lBQUVjLE9BQU8sSUFBSTtZQUFFQyxXQUFXLElBQUk7UUFBQztRQUN2RUgsU0FBU0ksT0FBTyxDQUFFVCxPQUFPQyxVQUFVLEVBQUVELE9BQU9FLFdBQVc7UUFDdkRHLFNBQVNLLGFBQWEsQ0FBRSxVQUFVO1FBQ2xDTCxTQUFTTSxhQUFhLENBQUVYLE9BQU9ZLGdCQUFnQjtRQUUvQywwQkFBMEI7UUFDMUJqQixTQUFTa0IsT0FBTyxDQUFFQyxXQUFXLENBQUVULFNBQVNVLFVBQVU7UUFFbEQsTUFBTUMsTUFBTSxJQUFJdkIsZ0RBQW1CLEdBQUd5QixJQUFJLENBQUU7UUFDNUMsTUFBTUMsV0FBVyxJQUFJMUIsaURBQW9CLENBQUU7WUFBRXVCLEtBQUtBO1FBQUk7UUFFdEQsTUFBTUssU0FBUyxJQUFJNUIseUNBQVksQ0FBRTBCO1FBQ2pDdkIsTUFBTTJCLEdBQUcsQ0FBRUY7SUFFWDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztNQXNCQSxHQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7TUFrQkMsR0FDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ0c7UUFBSUMsV0FBV2pDLHlFQUFnQjtRQUFFbUMsS0FBS2hDOzs7Ozs7QUFHN0M7R0ExRU1EO0tBQUFBO0FBNEVOLCtEQUFlQSxVQUFVQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9mZWF0dXJlcy9qdXN0Rm9yRnVuL2p1c3RGb3JGdW4udHN4P2JlOWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVJlZiwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4vanVzdEZvckZ1bi5tb2R1bGUuY3NzJ1xuXG5pbXBvcnQgKiBhcyBUSFJFRSBmcm9tICd0aHJlZSdcblxuaW1wb3J0IHNwcml0ZSBmcm9tICcuLi9zcHJpdGUucG5nJ1xuXG5cblxuY29uc3QgSnVzdEZvckZ1biA9ICgpID0+IHtcbiAgICBjb25zdCBtb3VudFJlZiA9IHVzZVJlZjxIVE1MRGl2RWxlbWVudD4obnVsbClcblxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgICAvLyBzZXR1cCBzY2VuZVxuICAgICAgbGV0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKClcbiAgXG4gICAgICAvLyBzZXR1cCBjYW1lcmFcbiAgICAgIGxldCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoIDc1LCB3aW5kb3cuaW5uZXJXaWR0aC93aW5kb3cuaW5uZXJIZWlnaHQsIDAuMSwgMTAwMCApXG4gICAgICBjYW1lcmEucG9zaXRpb24ueiA9IDEwXG4gIFxuICAgICAgLy8gc2V0dXAgcmVuZGVyZWRcbiAgICAgIGxldCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKCB7IGFscGhhOiB0cnVlLCBhbnRpYWxpYXM6IHRydWUgfSApXG4gICAgICByZW5kZXJlci5zZXRTaXplKCB3aW5kb3cuaW5uZXJXaWR0aCwgd2luZG93LmlubmVySGVpZ2h0IClcbiAgICAgIHJlbmRlcmVyLnNldENsZWFyQ29sb3IoIDB4MDAwMDAwLCAxIClcbiAgICAgIHJlbmRlcmVyLnNldFBpeGVsUmF0aW8oIHdpbmRvdy5kZXZpY2VQaXhlbFJhdGlvIClcbiAgICAgIFxuICAgICAgLy8gYXBwZW5kIHRvIGNvbnRhaW5lciBkaXZcbiAgICAgIG1vdW50UmVmLmN1cnJlbnQhLmFwcGVuZENoaWxkKCByZW5kZXJlci5kb21FbGVtZW50IClcblxuICAgICAgY29uc3QgbWFwID0gbmV3IFRIUkVFLlRleHR1cmVMb2FkZXIoKS5sb2FkKCAnLi4vc3ByaXRlLnBuZycgKTtcbiAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLlNwcml0ZU1hdGVyaWFsKCB7IG1hcDogbWFwIH0gKTtcblxuICAgICAgY29uc3Qgc3ByaXRlID0gbmV3IFRIUkVFLlNwcml0ZSggbWF0ZXJpYWwgKTtcbiAgICAgIHNjZW5lLmFkZCggc3ByaXRlICk7XG4gIFxuICAgICAgLypcbiAgICAgIC8vIGRlZmluZSBhbmQgYWRkIGJsb2JcbiAgICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKCB7XG4gICAgICAgICAgdW5pZm9ybXM6IHtcbiAgICAgICAgICAgIHRpbWU6IHsgLy8gZmxvYXQgaW5pdGlhbGl6ZWQgdG8ga1xuICAgICAgICAgICAgICB2YWx1ZTogMC4wXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbW91c2VZOiB7XG4gICAgICAgICAgICAgIHZhbHVlOiAwLjBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHZlcnRleFNoYWRlcjogdmVydGV4U2hhZGVyLFxuICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBmcmFnbWVudFNoYWRlclxuICAgICAgfSlcbiAgICAgIFxuICAgICAgY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKFxuICAgICAgICBuZXcgVEhSRUUuSWNvc2FoZWRyb25HZW9tZXRyeSgzNSwgNDApLFxuICAgICAgICBtYXRlcmlhbFxuICAgICAgKVxuICAgIFxuICAgICAgc2NlbmUuYWRkKG1lc2gpXG4gICAgXG4gICAgICAqL1xuICAgICAvKlxuICAgICAgLy8gYW5pbWF0aW9uXG4gICAgICBsZXQgc3RhcnQgPSBEYXRlLm5vdygpXG4gIFxuICAgICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcbiAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSlcbiAgICAgIFxuICAgICAgICBtYXRlcmlhbC51bmlmb3Jtc1sndGltZSddLnZhbHVlID0gLjAwMDEyNSAqICggRGF0ZS5ub3coKSAtIHN0YXJ0IClcbiAgICAgICAgICBcbiAgICAgIFxuICAgICAgICByZW5kZXJlci5yZW5kZXIoIHNjZW5lLCBjYW1lcmEgKVxuICAgICAgfVxuICAgICAgXG4gICAgICBhbmltYXRlKClcbiAgXG4gICAgICBhZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgbWF0ZXJpYWwudW5pZm9ybXNbJ21vdXNlWSddLnZhbHVlID0gZXZlbnQuc2NyZWVuWVxuICAgICAgfSlcbiAgICAgICovXG4gICAgfSwgW10pXG4gICAgXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyfSByZWY9e21vdW50UmVmfT5cbiAgICAgIDwvZGl2PlxuICAgIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgSnVzdEZvckZ1biJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZUVmZmVjdCIsInN0eWxlcyIsIlRIUkVFIiwiSnVzdEZvckZ1biIsIm1vdW50UmVmIiwic2NlbmUiLCJTY2VuZSIsImNhbWVyYSIsIlBlcnNwZWN0aXZlQ2FtZXJhIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwicG9zaXRpb24iLCJ6IiwicmVuZGVyZXIiLCJXZWJHTFJlbmRlcmVyIiwiYWxwaGEiLCJhbnRpYWxpYXMiLCJzZXRTaXplIiwic2V0Q2xlYXJDb2xvciIsInNldFBpeGVsUmF0aW8iLCJkZXZpY2VQaXhlbFJhdGlvIiwiY3VycmVudCIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsIm1hcCIsIlRleHR1cmVMb2FkZXIiLCJsb2FkIiwibWF0ZXJpYWwiLCJTcHJpdGVNYXRlcmlhbCIsInNwcml0ZSIsIlNwcml0ZSIsImFkZCIsImRpdiIsImNsYXNzTmFtZSIsImNvbnRhaW5lciIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/features/justForFun/justForFun.tsx\n"));

/***/ })

});