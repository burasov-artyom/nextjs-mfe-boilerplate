/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkhome"] = self["webpackChunkhome"] || []).push([["pages/[...slug]"],{

/***/ "../node_modules/.pnpm/feather-route-matcher@4.0.0/node_modules/feather-route-matcher/index.js":
/*!*****************************************************************************************************!*\
  !*** ../node_modules/.pnpm/feather-route-matcher@4.0.0/node_modules/feather-route-matcher/index.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n// regexes borrowed from backbone\nvar optionalParam = /\\((.*?)\\)/g\nvar namedParam = /(\\(\\?)?:\\w+/g\n// eslint-disable-next-line no-useless-escape\nvar escapeRegExp = /[\\-{}\\[\\]+?.,\\\\\\^$|#\\s]/g\nvar splatParam = /\\*/g\n\n// Parses a URL pattern such as `/users/:id`\n// and builds and returns a regex that can be used to\n// match said pattern. Credit for these\n// regexes belongs to Jeremy Ashkenas and the\n// other maintainers of Backbone.js\n//\n// It has been modified for extraction of\n// named parameters from the URL\nvar parsePattern = function (pattern) {\n  var names = []\n  pattern = pattern\n    .replace(escapeRegExp, '\\\\$&')\n    .replace(optionalParam, '(?:$1)?')\n    .replace(namedParam, function (match, optional) {\n      names.push(match.slice(1))\n      return optional ? match : '([^/?]+)'\n    })\n    .replace(splatParam, function () {\n      names.push('path')\n      return '([^?]*?)'\n    })\n\n  return {\n    regExp: new RegExp('^' + pattern + '(?:\\\\?([\\\\s\\\\S]*))?$'),\n    namedParams: names\n  }\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(routes) {\n  var keys = Object.keys(routes)\n  var routeCache = {}\n\n  // loop through each route we're\n  // and build the shell of our\n  // route cache.\n  for (var item in routes) {\n    routeCache[item] = {\n      value: routes[item]\n    }\n  }\n\n  // main result is a function that can be called\n  // with the url\n  return function (url) {\n    var params\n    var route\n\n    // start looking for matches\n    var matchFound = keys.some(function (key) {\n      var parsed\n\n      // fetch the route pattern from the cache\n      // there will always be one\n      route = routeCache[key]\n\n      // if the route doesn't already have\n      // a regex we never generated one\n      // so we do that here lazily.\n      // Parse the pattern to generate the\n      // regex once, and store the result\n      // for next time.\n      if (!route.regExp) {\n        parsed = parsePattern(key)\n        route.regExp = parsed.regExp\n        route.namedParams = parsed.namedParams\n        route.pattern = key\n      }\n\n      // run our cached regex\n      var result = route.regExp.exec(url)\n\n      // if null there was no match\n      // returning falsy here continues\n      // the `Array.prototype.some` loop\n      if (!result) {\n        return\n      }\n\n      // remove other cruft from result\n      result = result.slice(1, -1)\n\n      // reduce our match to an object of named parameters\n      // we've extracted from the url\n      params = result.reduce(function (obj, val, index) {\n        if (val) {\n          obj[route.namedParams[index]] = val\n        }\n        return obj\n      }, {})\n\n      // stops the loop\n      return true\n    })\n\n    // no routes matched\n    if (!matchFound) {\n      return null\n    }\n\n    return {\n      value: route.value,\n      params: params,\n      url: url,\n      pattern: route.pattern\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2ZlYXRoZXItcm91dGUtbWF0Y2hlckA0LjAuMC9ub2RlX21vZHVsZXMvZmVhdGhlci1yb3V0ZS1tYXRjaGVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQWUsb0NBQVU7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sSUFBSTs7QUFFWDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS8uLi9ub2RlX21vZHVsZXMvLnBucG0vZmVhdGhlci1yb3V0ZS1tYXRjaGVyQDQuMC4wL25vZGVfbW9kdWxlcy9mZWF0aGVyLXJvdXRlLW1hdGNoZXIvaW5kZXguanM/MWUzMyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZWdleGVzIGJvcnJvd2VkIGZyb20gYmFja2JvbmVcbnZhciBvcHRpb25hbFBhcmFtID0gL1xcKCguKj8pXFwpL2dcbnZhciBuYW1lZFBhcmFtID0gLyhcXChcXD8pPzpcXHcrL2dcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11c2VsZXNzLWVzY2FwZVxudmFyIGVzY2FwZVJlZ0V4cCA9IC9bXFwte31cXFtcXF0rPy4sXFxcXFxcXiR8I1xcc10vZ1xudmFyIHNwbGF0UGFyYW0gPSAvXFwqL2dcblxuLy8gUGFyc2VzIGEgVVJMIHBhdHRlcm4gc3VjaCBhcyBgL3VzZXJzLzppZGBcbi8vIGFuZCBidWlsZHMgYW5kIHJldHVybnMgYSByZWdleCB0aGF0IGNhbiBiZSB1c2VkIHRvXG4vLyBtYXRjaCBzYWlkIHBhdHRlcm4uIENyZWRpdCBmb3IgdGhlc2Vcbi8vIHJlZ2V4ZXMgYmVsb25ncyB0byBKZXJlbXkgQXNoa2VuYXMgYW5kIHRoZVxuLy8gb3RoZXIgbWFpbnRhaW5lcnMgb2YgQmFja2JvbmUuanNcbi8vXG4vLyBJdCBoYXMgYmVlbiBtb2RpZmllZCBmb3IgZXh0cmFjdGlvbiBvZlxuLy8gbmFtZWQgcGFyYW1ldGVycyBmcm9tIHRoZSBVUkxcbnZhciBwYXJzZVBhdHRlcm4gPSBmdW5jdGlvbiAocGF0dGVybikge1xuICB2YXIgbmFtZXMgPSBbXVxuICBwYXR0ZXJuID0gcGF0dGVyblxuICAgIC5yZXBsYWNlKGVzY2FwZVJlZ0V4cCwgJ1xcXFwkJicpXG4gICAgLnJlcGxhY2Uob3B0aW9uYWxQYXJhbSwgJyg/OiQxKT8nKVxuICAgIC5yZXBsYWNlKG5hbWVkUGFyYW0sIGZ1bmN0aW9uIChtYXRjaCwgb3B0aW9uYWwpIHtcbiAgICAgIG5hbWVzLnB1c2gobWF0Y2guc2xpY2UoMSkpXG4gICAgICByZXR1cm4gb3B0aW9uYWwgPyBtYXRjaCA6ICcoW14vP10rKSdcbiAgICB9KVxuICAgIC5yZXBsYWNlKHNwbGF0UGFyYW0sIGZ1bmN0aW9uICgpIHtcbiAgICAgIG5hbWVzLnB1c2goJ3BhdGgnKVxuICAgICAgcmV0dXJuICcoW14/XSo/KSdcbiAgICB9KVxuXG4gIHJldHVybiB7XG4gICAgcmVnRXhwOiBuZXcgUmVnRXhwKCdeJyArIHBhdHRlcm4gKyAnKD86XFxcXD8oW1xcXFxzXFxcXFNdKikpPyQnKSxcbiAgICBuYW1lZFBhcmFtczogbmFtZXNcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiAocm91dGVzKSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMocm91dGVzKVxuICB2YXIgcm91dGVDYWNoZSA9IHt9XG5cbiAgLy8gbG9vcCB0aHJvdWdoIGVhY2ggcm91dGUgd2UncmVcbiAgLy8gYW5kIGJ1aWxkIHRoZSBzaGVsbCBvZiBvdXJcbiAgLy8gcm91dGUgY2FjaGUuXG4gIGZvciAodmFyIGl0ZW0gaW4gcm91dGVzKSB7XG4gICAgcm91dGVDYWNoZVtpdGVtXSA9IHtcbiAgICAgIHZhbHVlOiByb3V0ZXNbaXRlbV1cbiAgICB9XG4gIH1cblxuICAvLyBtYWluIHJlc3VsdCBpcyBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlIGNhbGxlZFxuICAvLyB3aXRoIHRoZSB1cmxcbiAgcmV0dXJuIGZ1bmN0aW9uICh1cmwpIHtcbiAgICB2YXIgcGFyYW1zXG4gICAgdmFyIHJvdXRlXG5cbiAgICAvLyBzdGFydCBsb29raW5nIGZvciBtYXRjaGVzXG4gICAgdmFyIG1hdGNoRm91bmQgPSBrZXlzLnNvbWUoZnVuY3Rpb24gKGtleSkge1xuICAgICAgdmFyIHBhcnNlZFxuXG4gICAgICAvLyBmZXRjaCB0aGUgcm91dGUgcGF0dGVybiBmcm9tIHRoZSBjYWNoZVxuICAgICAgLy8gdGhlcmUgd2lsbCBhbHdheXMgYmUgb25lXG4gICAgICByb3V0ZSA9IHJvdXRlQ2FjaGVba2V5XVxuXG4gICAgICAvLyBpZiB0aGUgcm91dGUgZG9lc24ndCBhbHJlYWR5IGhhdmVcbiAgICAgIC8vIGEgcmVnZXggd2UgbmV2ZXIgZ2VuZXJhdGVkIG9uZVxuICAgICAgLy8gc28gd2UgZG8gdGhhdCBoZXJlIGxhemlseS5cbiAgICAgIC8vIFBhcnNlIHRoZSBwYXR0ZXJuIHRvIGdlbmVyYXRlIHRoZVxuICAgICAgLy8gcmVnZXggb25jZSwgYW5kIHN0b3JlIHRoZSByZXN1bHRcbiAgICAgIC8vIGZvciBuZXh0IHRpbWUuXG4gICAgICBpZiAoIXJvdXRlLnJlZ0V4cCkge1xuICAgICAgICBwYXJzZWQgPSBwYXJzZVBhdHRlcm4oa2V5KVxuICAgICAgICByb3V0ZS5yZWdFeHAgPSBwYXJzZWQucmVnRXhwXG4gICAgICAgIHJvdXRlLm5hbWVkUGFyYW1zID0gcGFyc2VkLm5hbWVkUGFyYW1zXG4gICAgICAgIHJvdXRlLnBhdHRlcm4gPSBrZXlcbiAgICAgIH1cblxuICAgICAgLy8gcnVuIG91ciBjYWNoZWQgcmVnZXhcbiAgICAgIHZhciByZXN1bHQgPSByb3V0ZS5yZWdFeHAuZXhlYyh1cmwpXG5cbiAgICAgIC8vIGlmIG51bGwgdGhlcmUgd2FzIG5vIG1hdGNoXG4gICAgICAvLyByZXR1cm5pbmcgZmFsc3kgaGVyZSBjb250aW51ZXNcbiAgICAgIC8vIHRoZSBgQXJyYXkucHJvdG90eXBlLnNvbWVgIGxvb3BcbiAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICAvLyByZW1vdmUgb3RoZXIgY3J1ZnQgZnJvbSByZXN1bHRcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5zbGljZSgxLCAtMSlcblxuICAgICAgLy8gcmVkdWNlIG91ciBtYXRjaCB0byBhbiBvYmplY3Qgb2YgbmFtZWQgcGFyYW1ldGVyc1xuICAgICAgLy8gd2UndmUgZXh0cmFjdGVkIGZyb20gdGhlIHVybFxuICAgICAgcGFyYW1zID0gcmVzdWx0LnJlZHVjZShmdW5jdGlvbiAob2JqLCB2YWwsIGluZGV4KSB7XG4gICAgICAgIGlmICh2YWwpIHtcbiAgICAgICAgICBvYmpbcm91dGUubmFtZWRQYXJhbXNbaW5kZXhdXSA9IHZhbFxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBvYmpcbiAgICAgIH0sIHt9KVxuXG4gICAgICAvLyBzdG9wcyB0aGUgbG9vcFxuICAgICAgcmV0dXJuIHRydWVcbiAgICB9KVxuXG4gICAgLy8gbm8gcm91dGVzIG1hdGNoZWRcbiAgICBpZiAoIW1hdGNoRm91bmQpIHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgIHZhbHVlOiByb3V0ZS52YWx1ZSxcbiAgICAgIHBhcmFtczogcGFyYW1zLFxuICAgICAgdXJsOiB1cmwsXG4gICAgICBwYXR0ZXJuOiByb3V0ZS5wYXR0ZXJuXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../node_modules/.pnpm/feather-route-matcher@4.0.0/node_modules/feather-route-matcher/index.js\n"));

/***/ }),

/***/ "../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5Cwork%5Cme%5Cnextjs-v14%5Chome%5Cpages%5C%5B...slug%5D.js&page=%2F%5B...slug%5D!":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5Cwork%5Cme%5Cnextjs-v14%5Chome%5Cpages%5C%5B...slug%5D.js&page=%2F%5B...slug%5D! ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/[...slug]\",\n      function () {\n        return __webpack_require__(/*! ./pages/[...slug].js */ \"./pages/[...slug].js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/[...slug]\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL25leHRAMTQuMi4zX3JlYWN0LWRvbUAxOC4yLjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtY2xpZW50LXBhZ2VzLWxvYWRlci5qcz9hYnNvbHV0ZVBhZ2VQYXRoPUMlM0ElNUN3b3JrJTVDbWUlNUNuZXh0anMtdjE0JTVDaG9tZSU1Q3BhZ2VzJTVDJTVCLi4uc2x1ZyU1RC5qcyZwYWdlPSUyRiU1Qi4uLnNsdWclNUQhIiwibWFwcGluZ3MiOiI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG1CQUFPLENBQUMsa0RBQXNCO0FBQzdDO0FBQ0E7QUFDQSxPQUFPLElBQVU7QUFDakIsTUFBTSxVQUFVO0FBQ2hCO0FBQ0EsT0FBTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLz9kOWQyIl0sInNvdXJjZXNDb250ZW50IjpbIlxuICAgICh3aW5kb3cuX19ORVhUX1AgPSB3aW5kb3cuX19ORVhUX1AgfHwgW10pLnB1c2goW1xuICAgICAgXCIvWy4uLnNsdWddXCIsXG4gICAgICBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKFwiLi9wYWdlcy9bLi4uc2x1Z10uanNcIik7XG4gICAgICB9XG4gICAgXSk7XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgd2luZG93Ll9fTkVYVF9QLnB1c2goW1wiL1suLi5zbHVnXVwiXSlcbiAgICAgIH0pO1xuICAgIH1cbiAgIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5Cwork%5Cme%5Cnextjs-v14%5Chome%5Cpages%5C%5B...slug%5D.js&page=%2F%5B...slug%5D!\n"));

/***/ }),

/***/ "./pages/[...slug].js":
/*!****************************!*\
  !*** ./pages/[...slug].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var nextjs_shared_v14__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nextjs-shared-v14 */ \"../shared/index.js\");\n/* harmony import */ var nextjs_shared_v14__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nextjs_shared_v14__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,nextjs_shared_v14__WEBPACK_IMPORTED_MODULE_0__.createFederatedCatchAll)());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bLi4uc2x1Z10uanMiLCJtYXBwaW5ncyI6Ijs7O0FBQTREO0FBRTVELCtEQUFlQSwwRUFBdUJBLEVBQUVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9ob21lLy4vcGFnZXMvWy4uLnNsdWddLmpzP2E2MWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlRmVkZXJhdGVkQ2F0Y2hBbGwgfSBmcm9tICduZXh0anMtc2hhcmVkLXYxNCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBjcmVhdGVGZWRlcmF0ZWRDYXRjaEFsbCgpO1xyXG4iXSwibmFtZXMiOlsiY3JlYXRlRmVkZXJhdGVkQ2F0Y2hBbGwiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/[...slug].js\n"));

/***/ }),

/***/ "../shared/index.js":
/*!**************************!*\
  !*** ../shared/index.js ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("const React = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\r\nconst createMatcher = __webpack_require__(/*! feather-route-matcher */ \"../node_modules/.pnpm/feather-route-matcher@4.0.0/node_modules/feather-route-matcher/index.js\");\r\nconst {loadRemote} = __webpack_require__(/*! @module-federation/runtime */ \"../node_modules/.pnpm/@module-federation+runtime@0.1.13/node_modules/@module-federation/runtime/dist/index.esm.js\");\r\n\r\n\r\nasync function matchFederatedPage(path) {\r\n  const remotes = new Set(...__FEDERATION__.__INSTANCES__.map((item) => {\r\n    return item.options.remotes.map((r) => r.alias)\r\n  }))\r\n  const maps = await Promise.all(\r\n    Array.from(remotes).map(async remote => {\r\n      return  loadRemote(remote + '/pages-map')\r\n        .then(factory => ({remote, config: factory.default}))\r\n        .catch(() => null);\r\n    }),\r\n  );\r\n\r\n  const config = {};\r\n\r\n  for (const map of maps) {\r\n    if (!map) continue;\r\n\r\n    for (let [path, mod] of Object.entries(map.config)) {\r\n      config[path] = {\r\n        remote: map.remote,\r\n        module: mod,\r\n      };\r\n    }\r\n  }\r\n\r\n  const matcher = createMatcher.default(config);\r\n  return matcher(path);\r\n}\r\n\r\nmodule.exports = {\r\n  matchFederatedPage,\r\n  createFederatedCatchAll() {\r\n    const FederatedCatchAll = initialProps => {\r\n      const [lazyProps, setProps] = React.useState({});\r\n\r\n      const {FederatedPage, render404, renderError, needsReload, ...props} = {\r\n        ...lazyProps,\r\n        ...initialProps,\r\n      };\r\n      React.useEffect(() => {\r\n        if (needsReload) {\r\n          const runUnderlayingGIP = async () => {\r\n            const federatedProps = await FederatedCatchAll.getInitialProps(props);\r\n            setProps(federatedProps);\r\n          };\r\n          runUnderlayingGIP();\r\n        }\r\n      }, []);\r\n\r\n      if (render404) {\r\n        // TODO: Render 404 page\r\n        return React.createElement('h1', {}, '404 Not Found');\r\n      }\r\n      if (renderError) {\r\n        // TODO: Render error page\r\n        return React.createElement('h1', {}, 'Oops, something went wrong.');\r\n      }\r\n\r\n      if (FederatedPage) {\r\n        return React.createElement(FederatedPage, props);\r\n      }\r\n\r\n      return null;\r\n    };\r\n\r\n    FederatedCatchAll.getInitialProps = async ctx => {\r\n      // Bot marks \"req, res, AppTree\" as unused but those are vital to not get circular-dependency error\r\n      const {err, req, res, AppTree, ...props} = ctx;\r\n      if (err) {\r\n        // TODO: Run getInitialProps for error page\r\n        return {renderError: true, ...props};\r\n      }\r\n      if (false) {}\r\n\r\n      console.log('in browser');\r\n      const matchedPage = await matchFederatedPage(ctx.asPath);\r\n\r\n      try {\r\n        console.log('matchedPage', matchedPage);\r\n        const remote = matchedPage?.value?.remote;\r\n        const mod = matchedPage?.value?.module.replace('./','/')\r\n\r\n        if (!remote || !mod) {\r\n          // TODO: Run getInitialProps for 404 page\r\n          return {render404: true, ...props};\r\n        }\r\n\r\n        console.log('loading exposed module', mod, 'from remote', remote);\r\n        const FederatedPage = await loadRemote(remote + mod).then(factory => factory.default);\r\n        console.log('FederatedPage', FederatedPage);\r\n        if (!FederatedPage) {\r\n          // TODO: Run getInitialProps for 404 page\r\n          return {render404: true, ...props};\r\n        }\r\n\r\n        const modifiedContext = {\r\n          ...ctx,\r\n          query: matchedPage.params,\r\n        };\r\n        const federatedPageProps = (await FederatedPage.getInitialProps?.(modifiedContext)) || {};\r\n        return {...federatedPageProps, FederatedPage};\r\n      } catch (err) {\r\n        console.log('err', err);\r\n        // TODO: Run getInitialProps for error page\r\n        return {renderError: true, ...props};\r\n      }\r\n    };\r\n\r\n    return FederatedCatchAll;\r\n  },\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vc2hhcmVkL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLGNBQWMsbUJBQU8sQ0FBQywwREFBTztBQUM3QixzQkFBc0IsbUJBQU8sQ0FBQyw0SEFBdUI7QUFDckQsT0FBTyxZQUFZLEVBQUUsbUJBQU8sQ0FBQyxxSkFBNEI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0NBQWdDO0FBQzNEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQSxhQUFhLDhEQUE4RDtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsa0NBQWtDO0FBQy9DO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSxVQUFVLEtBQWdCLEVBQUUsRUFFckI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLFFBQVE7QUFDUjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vaG9tZS8uLi9zaGFyZWQvaW5kZXguanM/MDA0MSJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBSZWFjdCA9IHJlcXVpcmUoJ3JlYWN0Jyk7XHJcbmNvbnN0IGNyZWF0ZU1hdGNoZXIgPSByZXF1aXJlKCdmZWF0aGVyLXJvdXRlLW1hdGNoZXInKTtcclxuY29uc3Qge2xvYWRSZW1vdGV9ID0gcmVxdWlyZSgnQG1vZHVsZS1mZWRlcmF0aW9uL3J1bnRpbWUnKTtcclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBtYXRjaEZlZGVyYXRlZFBhZ2UocGF0aCkge1xyXG4gIGNvbnN0IHJlbW90ZXMgPSBuZXcgU2V0KC4uLl9fRkVERVJBVElPTl9fLl9fSU5TVEFOQ0VTX18ubWFwKChpdGVtKSA9PiB7XHJcbiAgICByZXR1cm4gaXRlbS5vcHRpb25zLnJlbW90ZXMubWFwKChyKSA9PiByLmFsaWFzKVxyXG4gIH0pKVxyXG4gIGNvbnN0IG1hcHMgPSBhd2FpdCBQcm9taXNlLmFsbChcclxuICAgIEFycmF5LmZyb20ocmVtb3RlcykubWFwKGFzeW5jIHJlbW90ZSA9PiB7XHJcbiAgICAgIHJldHVybiAgbG9hZFJlbW90ZShyZW1vdGUgKyAnL3BhZ2VzLW1hcCcpXHJcbiAgICAgICAgLnRoZW4oZmFjdG9yeSA9PiAoe3JlbW90ZSwgY29uZmlnOiBmYWN0b3J5LmRlZmF1bHR9KSlcclxuICAgICAgICAuY2F0Y2goKCkgPT4gbnVsbCk7XHJcbiAgICB9KSxcclxuICApO1xyXG5cclxuICBjb25zdCBjb25maWcgPSB7fTtcclxuXHJcbiAgZm9yIChjb25zdCBtYXAgb2YgbWFwcykge1xyXG4gICAgaWYgKCFtYXApIGNvbnRpbnVlO1xyXG5cclxuICAgIGZvciAobGV0IFtwYXRoLCBtb2RdIG9mIE9iamVjdC5lbnRyaWVzKG1hcC5jb25maWcpKSB7XHJcbiAgICAgIGNvbmZpZ1twYXRoXSA9IHtcclxuICAgICAgICByZW1vdGU6IG1hcC5yZW1vdGUsXHJcbiAgICAgICAgbW9kdWxlOiBtb2QsXHJcbiAgICAgIH07XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBtYXRjaGVyID0gY3JlYXRlTWF0Y2hlci5kZWZhdWx0KGNvbmZpZyk7XHJcbiAgcmV0dXJuIG1hdGNoZXIocGF0aCk7XHJcbn1cclxuXHJcbm1vZHVsZS5leHBvcnRzID0ge1xyXG4gIG1hdGNoRmVkZXJhdGVkUGFnZSxcclxuICBjcmVhdGVGZWRlcmF0ZWRDYXRjaEFsbCgpIHtcclxuICAgIGNvbnN0IEZlZGVyYXRlZENhdGNoQWxsID0gaW5pdGlhbFByb3BzID0+IHtcclxuICAgICAgY29uc3QgW2xhenlQcm9wcywgc2V0UHJvcHNdID0gUmVhY3QudXNlU3RhdGUoe30pO1xyXG5cclxuICAgICAgY29uc3Qge0ZlZGVyYXRlZFBhZ2UsIHJlbmRlcjQwNCwgcmVuZGVyRXJyb3IsIG5lZWRzUmVsb2FkLCAuLi5wcm9wc30gPSB7XHJcbiAgICAgICAgLi4ubGF6eVByb3BzLFxyXG4gICAgICAgIC4uLmluaXRpYWxQcm9wcyxcclxuICAgICAgfTtcclxuICAgICAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgICBpZiAobmVlZHNSZWxvYWQpIHtcclxuICAgICAgICAgIGNvbnN0IHJ1blVuZGVybGF5aW5nR0lQID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBmZWRlcmF0ZWRQcm9wcyA9IGF3YWl0IEZlZGVyYXRlZENhdGNoQWxsLmdldEluaXRpYWxQcm9wcyhwcm9wcyk7XHJcbiAgICAgICAgICAgIHNldFByb3BzKGZlZGVyYXRlZFByb3BzKTtcclxuICAgICAgICAgIH07XHJcbiAgICAgICAgICBydW5VbmRlcmxheWluZ0dJUCgpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgW10pO1xyXG5cclxuICAgICAgaWYgKHJlbmRlcjQwNCkge1xyXG4gICAgICAgIC8vIFRPRE86IFJlbmRlciA0MDQgcGFnZVxyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdoMScsIHt9LCAnNDA0IE5vdCBGb3VuZCcpO1xyXG4gICAgICB9XHJcbiAgICAgIGlmIChyZW5kZXJFcnJvcikge1xyXG4gICAgICAgIC8vIFRPRE86IFJlbmRlciBlcnJvciBwYWdlXHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoJ2gxJywge30sICdPb3BzLCBzb21ldGhpbmcgd2VudCB3cm9uZy4nKTtcclxuICAgICAgfVxyXG5cclxuICAgICAgaWYgKEZlZGVyYXRlZFBhZ2UpIHtcclxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudChGZWRlcmF0ZWRQYWdlLCBwcm9wcyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfTtcclxuXHJcbiAgICBGZWRlcmF0ZWRDYXRjaEFsbC5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBjdHggPT4ge1xyXG4gICAgICAvLyBCb3QgbWFya3MgXCJyZXEsIHJlcywgQXBwVHJlZVwiIGFzIHVudXNlZCBidXQgdGhvc2UgYXJlIHZpdGFsIHRvIG5vdCBnZXQgY2lyY3VsYXItZGVwZW5kZW5jeSBlcnJvclxyXG4gICAgICBjb25zdCB7ZXJyLCByZXEsIHJlcywgQXBwVHJlZSwgLi4ucHJvcHN9ID0gY3R4O1xyXG4gICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgLy8gVE9ETzogUnVuIGdldEluaXRpYWxQcm9wcyBmb3IgZXJyb3IgcGFnZVxyXG4gICAgICAgIHJldHVybiB7cmVuZGVyRXJyb3I6IHRydWUsIC4uLnByb3BzfTtcclxuICAgICAgfVxyXG4gICAgICBpZiAoIXByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgIHJldHVybiB7bmVlZHNSZWxvYWQ6IHRydWUsIC4uLnByb3BzfTtcclxuICAgICAgfVxyXG5cclxuICAgICAgY29uc29sZS5sb2coJ2luIGJyb3dzZXInKTtcclxuICAgICAgY29uc3QgbWF0Y2hlZFBhZ2UgPSBhd2FpdCBtYXRjaEZlZGVyYXRlZFBhZ2UoY3R4LmFzUGF0aCk7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdtYXRjaGVkUGFnZScsIG1hdGNoZWRQYWdlKTtcclxuICAgICAgICBjb25zdCByZW1vdGUgPSBtYXRjaGVkUGFnZT8udmFsdWU/LnJlbW90ZTtcclxuICAgICAgICBjb25zdCBtb2QgPSBtYXRjaGVkUGFnZT8udmFsdWU/Lm1vZHVsZS5yZXBsYWNlKCcuLycsJy8nKVxyXG5cclxuICAgICAgICBpZiAoIXJlbW90ZSB8fCAhbW9kKSB7XHJcbiAgICAgICAgICAvLyBUT0RPOiBSdW4gZ2V0SW5pdGlhbFByb3BzIGZvciA0MDQgcGFnZVxyXG4gICAgICAgICAgcmV0dXJuIHtyZW5kZXI0MDQ6IHRydWUsIC4uLnByb3BzfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdsb2FkaW5nIGV4cG9zZWQgbW9kdWxlJywgbW9kLCAnZnJvbSByZW1vdGUnLCByZW1vdGUpO1xyXG4gICAgICAgIGNvbnN0IEZlZGVyYXRlZFBhZ2UgPSBhd2FpdCBsb2FkUmVtb3RlKHJlbW90ZSArIG1vZCkudGhlbihmYWN0b3J5ID0+IGZhY3RvcnkuZGVmYXVsdCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ0ZlZGVyYXRlZFBhZ2UnLCBGZWRlcmF0ZWRQYWdlKTtcclxuICAgICAgICBpZiAoIUZlZGVyYXRlZFBhZ2UpIHtcclxuICAgICAgICAgIC8vIFRPRE86IFJ1biBnZXRJbml0aWFsUHJvcHMgZm9yIDQwNCBwYWdlXHJcbiAgICAgICAgICByZXR1cm4ge3JlbmRlcjQwNDogdHJ1ZSwgLi4ucHJvcHN9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgbW9kaWZpZWRDb250ZXh0ID0ge1xyXG4gICAgICAgICAgLi4uY3R4LFxyXG4gICAgICAgICAgcXVlcnk6IG1hdGNoZWRQYWdlLnBhcmFtcyxcclxuICAgICAgICB9O1xyXG4gICAgICAgIGNvbnN0IGZlZGVyYXRlZFBhZ2VQcm9wcyA9IChhd2FpdCBGZWRlcmF0ZWRQYWdlLmdldEluaXRpYWxQcm9wcz8uKG1vZGlmaWVkQ29udGV4dCkpIHx8IHt9O1xyXG4gICAgICAgIHJldHVybiB7Li4uZmVkZXJhdGVkUGFnZVByb3BzLCBGZWRlcmF0ZWRQYWdlfTtcclxuICAgICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2VycicsIGVycik7XHJcbiAgICAgICAgLy8gVE9ETzogUnVuIGdldEluaXRpYWxQcm9wcyBmb3IgZXJyb3IgcGFnZVxyXG4gICAgICAgIHJldHVybiB7cmVuZGVyRXJyb3I6IHRydWUsIC4uLnByb3BzfTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gRmVkZXJhdGVkQ2F0Y2hBbGw7XHJcbiAgfSxcclxufTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../shared/index.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var promiseTrack = [];
/******/ __webpack_require__("./node_modules/.federation/entry.55cf8d5ba3ebd2e10b78e17cb570b04f.js");
/******/ if(__webpack_require__.f && __webpack_require__.f.consumes) { __webpack_require__.f.consumes("pages/[...slug]", promiseTrack); __webpack_require__.f.consumes("pages/_app", promiseTrack);}
/******/ 
/******/ var __webpack_exports__ = Promise.all(promiseTrack).then(function() {
/******/ 	var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ 	__webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/.federation/entry.55cf8d5ba3ebd2e10b78e17cb570b04f.js"), __webpack_exec__("../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5Cwork%5Cme%5Cnextjs-v14%5Chome%5Cpages%5C%5B...slug%5D.js&page=%2F%5B...slug%5D!"); });
/******/ 	var __webpack_exports__ = __webpack_require__.O();
/******/ 	return __webpack_exports__
/******/ });_N_E = __webpack_exports__;
/******/ }
]);