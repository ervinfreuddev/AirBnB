"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/search",{

/***/ "./components/Map.js":
/*!***************************!*\
  !*** ./components/Map.js ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_map_gl__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-map-gl */ \"./node_modules/react-map-gl/dist/esm/index.js\");\n/* harmony import */ var geolib_es_getCenter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! geolib/es/getCenter */ \"./node_modules/geolib/es/getCenter.js\");\n/* harmony import */ var postcss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! postcss */ \"./node_modules/postcss/lib/postcss.mjs\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\n\n\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\nvar _s = $RefreshSig$();\nfunction Map(param) {\n    var searchResults = param.searchResults;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        width: \"100%\",\n        height: \"100%\",\n        latitude: 37.7577,\n        longitude: -122.4376,\n        zoom: 11\n    }), viewport = ref[0], setViewport = ref[1];\n    //   transform the search results object into the\n    //   { latitude: 52.516272, longitude: 13.377722 }\n    //   object\n    var coordinates = searchResults.map(function(result) {\n        return {\n            longitude: result.long,\n            latitude: result.lat\n        };\n    });\n    console.log(coordinates);\n    // The latitude and longitude of the center of locations coordinates\n    var center = (0,geolib_es_getCenter__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(coordinates);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_map_gl__WEBPACK_IMPORTED_MODULE_2__[\"default\"], _objectSpread({\n        mapStyle: \"mapbox://styles/ervinndemmeze/cl1w8x07b002q14nuekhhryuw\",\n        mapboxAccessToken: \"pk.eyJ1IjoiZXJ2aW5uZGVtbWV6ZSIsImEiOiJjbDFwMzJ4b2cwYXo5M2pwOWxpOXc2dWVxIn0.8-ElFwT5M0ZtAGYm250Oxg\"\n    }, viewport, {\n        onDrag: function(nextViewport) {\n            return setViewport(nextViewport);\n        },\n        onZoom: function(nextViewport) {\n            return setViewport(nextViewport);\n        }\n    }), void 0, false, {\n        fileName: \"C:\\\\Users\\\\user\\\\Desktop\\\\airbnb\\\\airbnb2\\\\AirBnB\\\\components\\\\Map.js\",\n        lineNumber: 29,\n        columnNumber: 5\n    }, this));\n}\n_s(Map, \"dj7BqDr2guWvSS2AjngLTdtUPFU=\");\n_c = Map;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Map);\nvar _c;\n$RefreshReg$(_c, \"Map\");\n\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL01hcC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQWdDO0FBQ0s7QUFDTTtBQUNYOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7U0FFdkJJLEdBQUcsQ0FBQyxLQUFpQixFQUFFLENBQUM7UUFBbEJDLGFBQWEsR0FBZixLQUFpQixDQUFmQSxhQUFhOztJQUMxQixHQUFLLENBQTJCTCxHQU05QixHQU44QkEsK0NBQVEsQ0FBQyxDQUFDO1FBQ3hDTSxLQUFLLEVBQUUsQ0FBTTtRQUNiQyxNQUFNLEVBQUUsQ0FBTTtRQUNkQyxRQUFRLEVBQUUsT0FBTztRQUNqQkMsU0FBUyxHQUFHLFFBQVE7UUFDcEJDLElBQUksRUFBRSxFQUFFO0lBQ1YsQ0FBQyxHQU5NQyxRQUFRLEdBQWlCWCxHQU05QixLQU5lWSxXQUFXLEdBQUlaLEdBTTlCO0lBRUYsRUFBaUQ7SUFDakQsRUFBa0Q7SUFDbEQsRUFBVztJQUNYLEdBQUssQ0FBQ2EsV0FBVyxHQUFHUixhQUFhLENBQUNTLEdBQUcsQ0FBQyxRQUFRLENBQVBDLE1BQU07UUFBSyxNQUNsRCxDQURtRCxDQUFDO1lBQ2xETixTQUFTLEVBQUVNLE1BQU0sQ0FBQ0MsSUFBSTtZQUN0QlIsUUFBUSxFQUFFTyxNQUFNLENBQUNFLEdBQUc7UUFDdEIsQ0FBQzs7SUFFREMsT0FBTyxDQUFDQyxHQUFHLENBQUNOLFdBQVc7SUFFdkIsRUFBb0U7SUFDcEUsR0FBSyxDQUFDTyxNQUFNLEdBQUdsQiwrREFBUyxDQUFDVyxXQUFXO0lBRXBDLE1BQU0sNkVBQ0haLG9EQUFVO1FBQ1RvQixRQUFRLEVBQUMsQ0FBeUQ7UUFDbEVDLGlCQUFpQixFQUFFQyxtR0FBc0I7T0FDckNaLFFBQVE7UUFDWmUsTUFBTSxFQUFFLFFBQVEsQ0FBUEMsWUFBWTtZQUFLZixNQUFNLENBQU5BLFdBQVcsQ0FBQ2UsWUFBWTs7UUFDbERDLE1BQU0sRUFBRSxRQUFRLENBQVBELFlBQVk7WUFBS2YsTUFBTSxDQUFOQSxXQUFXLENBQUNlLFlBQVk7Ozs7Ozs7QUFHeEQsQ0FBQztHQS9CUXZCLEdBQUc7S0FBSEEsR0FBRztBQWlDWiwrREFBZUEsR0FBRyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTWFwLmpzP2U1MjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IFJlYWN0TWFwR0wgZnJvbSBcInJlYWN0LW1hcC1nbFwiO1xyXG5pbXBvcnQgZ2V0Q2VudGVyIGZyb20gXCJnZW9saWIvZXMvZ2V0Q2VudGVyXCI7XHJcbmltcG9ydCB7IFJlc3VsdCB9IGZyb20gXCJwb3N0Y3NzXCI7XHJcblxyXG5mdW5jdGlvbiBNYXAoeyBzZWFyY2hSZXN1bHRzIH0pIHtcclxuICBjb25zdCBbdmlld3BvcnQsIHNldFZpZXdwb3J0XSA9IHVzZVN0YXRlKHtcclxuICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgIGhlaWdodDogXCIxMDAlXCIsXHJcbiAgICBsYXRpdHVkZTogMzcuNzU3NyxcclxuICAgIGxvbmdpdHVkZTogLTEyMi40Mzc2LFxyXG4gICAgem9vbTogMTEsXHJcbiAgfSk7XHJcblxyXG4gIC8vICAgdHJhbnNmb3JtIHRoZSBzZWFyY2ggcmVzdWx0cyBvYmplY3QgaW50byB0aGVcclxuICAvLyAgIHsgbGF0aXR1ZGU6IDUyLjUxNjI3MiwgbG9uZ2l0dWRlOiAxMy4zNzc3MjIgfVxyXG4gIC8vICAgb2JqZWN0XHJcbiAgY29uc3QgY29vcmRpbmF0ZXMgPSBzZWFyY2hSZXN1bHRzLm1hcCgocmVzdWx0KSA9PiAoe1xyXG4gICAgbG9uZ2l0dWRlOiByZXN1bHQubG9uZyxcclxuICAgIGxhdGl0dWRlOiByZXN1bHQubGF0LFxyXG4gIH0pKTtcclxuXHJcbiAgY29uc29sZS5sb2coY29vcmRpbmF0ZXMpO1xyXG5cclxuICAvLyBUaGUgbGF0aXR1ZGUgYW5kIGxvbmdpdHVkZSBvZiB0aGUgY2VudGVyIG9mIGxvY2F0aW9ucyBjb29yZGluYXRlc1xyXG4gIGNvbnN0IGNlbnRlciA9IGdldENlbnRlcihjb29yZGluYXRlcyk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3RNYXBHTFxyXG4gICAgICBtYXBTdHlsZT1cIm1hcGJveDovL3N0eWxlcy9lcnZpbm5kZW1tZXplL2NsMXc4eDA3YjAwMnExNG51ZWtoaHJ5dXdcIlxyXG4gICAgICBtYXBib3hBY2Nlc3NUb2tlbj17cHJvY2Vzcy5lbnYubWFwYm94X2tleX1cclxuICAgICAgey4uLnZpZXdwb3J0fVxyXG4gICAgICBvbkRyYWc9eyhuZXh0Vmlld3BvcnQpID0+IHNldFZpZXdwb3J0KG5leHRWaWV3cG9ydCl9XHJcbiAgICAgIG9uWm9vbT17KG5leHRWaWV3cG9ydCkgPT4gc2V0Vmlld3BvcnQobmV4dFZpZXdwb3J0KX1cclxuICAgID48L1JlYWN0TWFwR0w+XHJcbiAgKTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFwO1xyXG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJSZWFjdE1hcEdMIiwiZ2V0Q2VudGVyIiwiUmVzdWx0IiwiTWFwIiwic2VhcmNoUmVzdWx0cyIsIndpZHRoIiwiaGVpZ2h0IiwibGF0aXR1ZGUiLCJsb25naXR1ZGUiLCJ6b29tIiwidmlld3BvcnQiLCJzZXRWaWV3cG9ydCIsImNvb3JkaW5hdGVzIiwibWFwIiwicmVzdWx0IiwibG9uZyIsImxhdCIsImNvbnNvbGUiLCJsb2ciLCJjZW50ZXIiLCJtYXBTdHlsZSIsIm1hcGJveEFjY2Vzc1Rva2VuIiwicHJvY2VzcyIsImVudiIsIm1hcGJveF9rZXkiLCJvbkRyYWciLCJuZXh0Vmlld3BvcnQiLCJvblpvb20iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Map.js\n");

/***/ })

});