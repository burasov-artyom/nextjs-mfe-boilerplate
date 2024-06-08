/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunkcheckout"] = self["webpackChunkcheckout"] || []).push([["pages/[...slug]"],{

/***/ "../node_modules/.pnpm/feather-route-matcher@4.0.0/node_modules/feather-route-matcher/index.js":
/*!*****************************************************************************************************!*\
  !*** ../node_modules/.pnpm/feather-route-matcher@4.0.0/node_modules/feather-route-matcher/index.js ***!
  \*****************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* export default binding */ __WEBPACK_DEFAULT_EXPORT__; }\n/* harmony export */ });\n// regexes borrowed from backbone\nvar optionalParam = /\\((.*?)\\)/g\nvar namedParam = /(\\(\\?)?:\\w+/g\n// eslint-disable-next-line no-useless-escape\nvar escapeRegExp = /[\\-{}\\[\\]+?.,\\\\\\^$|#\\s]/g\nvar splatParam = /\\*/g\n\n// Parses a URL pattern such as `/users/:id`\n// and builds and returns a regex that can be used to\n// match said pattern. Credit for these\n// regexes belongs to Jeremy Ashkenas and the\n// other maintainers of Backbone.js\n//\n// It has been modified for extraction of\n// named parameters from the URL\nvar parsePattern = function (pattern) {\n  var names = []\n  pattern = pattern\n    .replace(escapeRegExp, '\\\\$&')\n    .replace(optionalParam, '(?:$1)?')\n    .replace(namedParam, function (match, optional) {\n      names.push(match.slice(1))\n      return optional ? match : '([^/?]+)'\n    })\n    .replace(splatParam, function () {\n      names.push('path')\n      return '([^?]*?)'\n    })\n\n  return {\n    regExp: new RegExp('^' + pattern + '(?:\\\\?([\\\\s\\\\S]*))?$'),\n    namedParams: names\n  }\n}\n\n/* harmony default export */ function __WEBPACK_DEFAULT_EXPORT__(routes) {\n  var keys = Object.keys(routes)\n  var routeCache = {}\n\n  // loop through each route we're\n  // and build the shell of our\n  // route cache.\n  for (var item in routes) {\n    routeCache[item] = {\n      value: routes[item]\n    }\n  }\n\n  // main result is a function that can be called\n  // with the url\n  return function (url) {\n    var params\n    var route\n\n    // start looking for matches\n    var matchFound = keys.some(function (key) {\n      var parsed\n\n      // fetch the route pattern from the cache\n      // there will always be one\n      route = routeCache[key]\n\n      // if the route doesn't already have\n      // a regex we never generated one\n      // so we do that here lazily.\n      // Parse the pattern to generate the\n      // regex once, and store the result\n      // for next time.\n      if (!route.regExp) {\n        parsed = parsePattern(key)\n        route.regExp = parsed.regExp\n        route.namedParams = parsed.namedParams\n        route.pattern = key\n      }\n\n      // run our cached regex\n      var result = route.regExp.exec(url)\n\n      // if null there was no match\n      // returning falsy here continues\n      // the `Array.prototype.some` loop\n      if (!result) {\n        return\n      }\n\n      // remove other cruft from result\n      result = result.slice(1, -1)\n\n      // reduce our match to an object of named parameters\n      // we've extracted from the url\n      params = result.reduce(function (obj, val, index) {\n        if (val) {\n          obj[route.namedParams[index]] = val\n        }\n        return obj\n      }, {})\n\n      // stops the loop\n      return true\n    })\n\n    // no routes matched\n    if (!matchFound) {\n      return null\n    }\n\n    return {\n      value: route.value,\n      params: params,\n      url: url,\n      pattern: route.pattern\n    }\n  }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2ZlYXRoZXItcm91dGUtbWF0Y2hlckA0LjAuMC9ub2RlX21vZHVsZXMvZmVhdGhlci1yb3V0ZS1tYXRjaGVyL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkJBQWUsb0NBQVU7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU8sSUFBSTs7QUFFWDtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hlY2tvdXQvLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2ZlYXRoZXItcm91dGUtbWF0Y2hlckA0LjAuMC9ub2RlX21vZHVsZXMvZmVhdGhlci1yb3V0ZS1tYXRjaGVyL2luZGV4LmpzPzFlMzMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVnZXhlcyBib3Jyb3dlZCBmcm9tIGJhY2tib25lXG52YXIgb3B0aW9uYWxQYXJhbSA9IC9cXCgoLio/KVxcKS9nXG52YXIgbmFtZWRQYXJhbSA9IC8oXFwoXFw/KT86XFx3Ky9nXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlbGVzcy1lc2NhcGVcbnZhciBlc2NhcGVSZWdFeHAgPSAvW1xcLXt9XFxbXFxdKz8uLFxcXFxcXF4kfCNcXHNdL2dcbnZhciBzcGxhdFBhcmFtID0gL1xcKi9nXG5cbi8vIFBhcnNlcyBhIFVSTCBwYXR0ZXJuIHN1Y2ggYXMgYC91c2Vycy86aWRgXG4vLyBhbmQgYnVpbGRzIGFuZCByZXR1cm5zIGEgcmVnZXggdGhhdCBjYW4gYmUgdXNlZCB0b1xuLy8gbWF0Y2ggc2FpZCBwYXR0ZXJuLiBDcmVkaXQgZm9yIHRoZXNlXG4vLyByZWdleGVzIGJlbG9uZ3MgdG8gSmVyZW15IEFzaGtlbmFzIGFuZCB0aGVcbi8vIG90aGVyIG1haW50YWluZXJzIG9mIEJhY2tib25lLmpzXG4vL1xuLy8gSXQgaGFzIGJlZW4gbW9kaWZpZWQgZm9yIGV4dHJhY3Rpb24gb2Zcbi8vIG5hbWVkIHBhcmFtZXRlcnMgZnJvbSB0aGUgVVJMXG52YXIgcGFyc2VQYXR0ZXJuID0gZnVuY3Rpb24gKHBhdHRlcm4pIHtcbiAgdmFyIG5hbWVzID0gW11cbiAgcGF0dGVybiA9IHBhdHRlcm5cbiAgICAucmVwbGFjZShlc2NhcGVSZWdFeHAsICdcXFxcJCYnKVxuICAgIC5yZXBsYWNlKG9wdGlvbmFsUGFyYW0sICcoPzokMSk/JylcbiAgICAucmVwbGFjZShuYW1lZFBhcmFtLCBmdW5jdGlvbiAobWF0Y2gsIG9wdGlvbmFsKSB7XG4gICAgICBuYW1lcy5wdXNoKG1hdGNoLnNsaWNlKDEpKVxuICAgICAgcmV0dXJuIG9wdGlvbmFsID8gbWF0Y2ggOiAnKFteLz9dKyknXG4gICAgfSlcbiAgICAucmVwbGFjZShzcGxhdFBhcmFtLCBmdW5jdGlvbiAoKSB7XG4gICAgICBuYW1lcy5wdXNoKCdwYXRoJylcbiAgICAgIHJldHVybiAnKFteP10qPyknXG4gICAgfSlcblxuICByZXR1cm4ge1xuICAgIHJlZ0V4cDogbmV3IFJlZ0V4cCgnXicgKyBwYXR0ZXJuICsgJyg/OlxcXFw/KFtcXFxcc1xcXFxTXSopKT8kJyksXG4gICAgbmFtZWRQYXJhbXM6IG5hbWVzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKHJvdXRlcykge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHJvdXRlcylcbiAgdmFyIHJvdXRlQ2FjaGUgPSB7fVxuXG4gIC8vIGxvb3AgdGhyb3VnaCBlYWNoIHJvdXRlIHdlJ3JlXG4gIC8vIGFuZCBidWlsZCB0aGUgc2hlbGwgb2Ygb3VyXG4gIC8vIHJvdXRlIGNhY2hlLlxuICBmb3IgKHZhciBpdGVtIGluIHJvdXRlcykge1xuICAgIHJvdXRlQ2FjaGVbaXRlbV0gPSB7XG4gICAgICB2YWx1ZTogcm91dGVzW2l0ZW1dXG4gICAgfVxuICB9XG5cbiAgLy8gbWFpbiByZXN1bHQgaXMgYSBmdW5jdGlvbiB0aGF0IGNhbiBiZSBjYWxsZWRcbiAgLy8gd2l0aCB0aGUgdXJsXG4gIHJldHVybiBmdW5jdGlvbiAodXJsKSB7XG4gICAgdmFyIHBhcmFtc1xuICAgIHZhciByb3V0ZVxuXG4gICAgLy8gc3RhcnQgbG9va2luZyBmb3IgbWF0Y2hlc1xuICAgIHZhciBtYXRjaEZvdW5kID0ga2V5cy5zb21lKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgIHZhciBwYXJzZWRcblxuICAgICAgLy8gZmV0Y2ggdGhlIHJvdXRlIHBhdHRlcm4gZnJvbSB0aGUgY2FjaGVcbiAgICAgIC8vIHRoZXJlIHdpbGwgYWx3YXlzIGJlIG9uZVxuICAgICAgcm91dGUgPSByb3V0ZUNhY2hlW2tleV1cblxuICAgICAgLy8gaWYgdGhlIHJvdXRlIGRvZXNuJ3QgYWxyZWFkeSBoYXZlXG4gICAgICAvLyBhIHJlZ2V4IHdlIG5ldmVyIGdlbmVyYXRlZCBvbmVcbiAgICAgIC8vIHNvIHdlIGRvIHRoYXQgaGVyZSBsYXppbHkuXG4gICAgICAvLyBQYXJzZSB0aGUgcGF0dGVybiB0byBnZW5lcmF0ZSB0aGVcbiAgICAgIC8vIHJlZ2V4IG9uY2UsIGFuZCBzdG9yZSB0aGUgcmVzdWx0XG4gICAgICAvLyBmb3IgbmV4dCB0aW1lLlxuICAgICAgaWYgKCFyb3V0ZS5yZWdFeHApIHtcbiAgICAgICAgcGFyc2VkID0gcGFyc2VQYXR0ZXJuKGtleSlcbiAgICAgICAgcm91dGUucmVnRXhwID0gcGFyc2VkLnJlZ0V4cFxuICAgICAgICByb3V0ZS5uYW1lZFBhcmFtcyA9IHBhcnNlZC5uYW1lZFBhcmFtc1xuICAgICAgICByb3V0ZS5wYXR0ZXJuID0ga2V5XG4gICAgICB9XG5cbiAgICAgIC8vIHJ1biBvdXIgY2FjaGVkIHJlZ2V4XG4gICAgICB2YXIgcmVzdWx0ID0gcm91dGUucmVnRXhwLmV4ZWModXJsKVxuXG4gICAgICAvLyBpZiBudWxsIHRoZXJlIHdhcyBubyBtYXRjaFxuICAgICAgLy8gcmV0dXJuaW5nIGZhbHN5IGhlcmUgY29udGludWVzXG4gICAgICAvLyB0aGUgYEFycmF5LnByb3RvdHlwZS5zb21lYCBsb29wXG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cblxuICAgICAgLy8gcmVtb3ZlIG90aGVyIGNydWZ0IGZyb20gcmVzdWx0XG4gICAgICByZXN1bHQgPSByZXN1bHQuc2xpY2UoMSwgLTEpXG5cbiAgICAgIC8vIHJlZHVjZSBvdXIgbWF0Y2ggdG8gYW4gb2JqZWN0IG9mIG5hbWVkIHBhcmFtZXRlcnNcbiAgICAgIC8vIHdlJ3ZlIGV4dHJhY3RlZCBmcm9tIHRoZSB1cmxcbiAgICAgIHBhcmFtcyA9IHJlc3VsdC5yZWR1Y2UoZnVuY3Rpb24gKG9iaiwgdmFsLCBpbmRleCkge1xuICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgb2JqW3JvdXRlLm5hbWVkUGFyYW1zW2luZGV4XV0gPSB2YWxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gb2JqXG4gICAgICB9LCB7fSlcblxuICAgICAgLy8gc3RvcHMgdGhlIGxvb3BcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfSlcblxuICAgIC8vIG5vIHJvdXRlcyBtYXRjaGVkXG4gICAgaWYgKCFtYXRjaEZvdW5kKSB7XG4gICAgICByZXR1cm4gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiB7XG4gICAgICB2YWx1ZTogcm91dGUudmFsdWUsXG4gICAgICBwYXJhbXM6IHBhcmFtcyxcbiAgICAgIHVybDogdXJsLFxuICAgICAgcGF0dGVybjogcm91dGUucGF0dGVyblxuICAgIH1cbiAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///../node_modules/.pnpm/feather-route-matcher@4.0.0/node_modules/feather-route-matcher/index.js\n"));

/***/ }),

/***/ "../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5Cwork%5Cme%5Cnextjs-v14%5Ccheckout%5Cpages%5C%5B...slug%5D.js&page=%2F%5B...slug%5D!":
/*!************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5Cwork%5Cme%5Cnextjs-v14%5Ccheckout%5Cpages%5C%5B...slug%5D.js&page=%2F%5B...slug%5D! ***!
  \************************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("\n    (window.__NEXT_P = window.__NEXT_P || []).push([\n      \"/[...slug]\",\n      function () {\n        return __webpack_require__(/*! ./pages/[...slug].js */ \"./pages/[...slug].js\");\n      }\n    ]);\n    if(true) {\n      module.hot.dispose(function () {\n        window.__NEXT_P.push([\"/[...slug]\"])\n      });\n    }\n  //# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vbm9kZV9tb2R1bGVzLy5wbnBtL25leHRAMTQuMi4zX3JlYWN0LWRvbUAxOC4yLjBfcmVhY3RAMTguMi4wL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvYnVpbGQvd2VicGFjay9sb2FkZXJzL25leHQtY2xpZW50LXBhZ2VzLWxvYWRlci5qcz9hYnNvbHV0ZVBhZ2VQYXRoPUMlM0ElNUN3b3JrJTVDbWUlNUNuZXh0anMtdjE0JTVDY2hlY2tvdXQlNUNwYWdlcyU1QyU1Qi4uLnNsdWclNUQuanMmcGFnZT0lMkYlNUIuLi5zbHVnJTVEISIsIm1hcHBpbmdzIjoiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxtQkFBTyxDQUFDLGtEQUFzQjtBQUM3QztBQUNBO0FBQ0EsT0FBTyxJQUFVO0FBQ2pCLE1BQU0sVUFBVTtBQUNoQjtBQUNBLE9BQU87QUFDUDtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hlY2tvdXQvPzhmN2MiXSwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgKHdpbmRvdy5fX05FWFRfUCA9IHdpbmRvdy5fX05FWFRfUCB8fCBbXSkucHVzaChbXG4gICAgICBcIi9bLi4uc2x1Z11cIixcbiAgICAgIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoXCIuL3BhZ2VzL1suLi5zbHVnXS5qc1wiKTtcbiAgICAgIH1cbiAgICBdKTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24gKCkge1xuICAgICAgICB3aW5kb3cuX19ORVhUX1AucHVzaChbXCIvWy4uLnNsdWddXCJdKVxuICAgICAgfSk7XG4gICAgfVxuICAiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5Cwork%5Cme%5Cnextjs-v14%5Ccheckout%5Cpages%5C%5B...slug%5D.js&page=%2F%5B...slug%5D!\n"));

/***/ }),

/***/ "./pages/[...slug].js":
/*!****************************!*\
  !*** ./pages/[...slug].js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var nextjs_shared_v14__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! nextjs-shared-v14 */ \"../shared/index.js\");\n/* harmony import */ var nextjs_shared_v14__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(nextjs_shared_v14__WEBPACK_IMPORTED_MODULE_0__);\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ((0,nextjs_shared_v14__WEBPACK_IMPORTED_MODULE_0__.createFederatedCatchAll)());\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9bLi4uc2x1Z10uanMiLCJtYXBwaW5ncyI6Ijs7O0FBQTREO0FBRTVELCtEQUFlQSwwRUFBdUJBLEVBQUVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jaGVja291dC8uL3BhZ2VzL1suLi5zbHVnXS5qcz9hNjFjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUZlZGVyYXRlZENhdGNoQWxsIH0gZnJvbSAnbmV4dGpzLXNoYXJlZC12MTQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlRmVkZXJhdGVkQ2F0Y2hBbGwoKTtcclxuIl0sIm5hbWVzIjpbImNyZWF0ZUZlZGVyYXRlZENhdGNoQWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/[...slug].js\n"));

/***/ }),

/***/ "../shared/index.js":
/*!**************************!*\
  !*** ../shared/index.js ***!
  \**************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

eval(__webpack_require__.ts("const React = __webpack_require__(/*! react */ \"webpack/sharing/consume/default/react/react\");\r\nconst createMatcher = __webpack_require__(/*! feather-route-matcher */ \"../node_modules/.pnpm/feather-route-matcher@4.0.0/node_modules/feather-route-matcher/index.js\");\r\nconst {loadRemote} = __webpack_require__(/*! @module-federation/runtime */ \"../node_modules/.pnpm/@module-federation+runtime@0.1.13/node_modules/@module-federation/runtime/dist/index.esm.js\");\r\n\r\n\r\nasync function matchFederatedPage(path) {\r\n  const remotes = new Set(...__FEDERATION__.__INSTANCES__.map((item) => {\r\n    return item.options.remotes.map((r) => r.alias)\r\n  }))\r\n  const maps = await Promise.all(\r\n    Array.from(remotes).map(async remote => {\r\n      return  loadRemote(remote + '/pages-map')\r\n        .then(factory => ({remote, config: factory.default}))\r\n        .catch(() => null);\r\n    }),\r\n  );\r\n\r\n  const config = {};\r\n\r\n  for (const map of maps) {\r\n    if (!map) continue;\r\n\r\n    for (let [path, mod] of Object.entries(map.config)) {\r\n      config[path] = {\r\n        remote: map.remote,\r\n        module: mod,\r\n      };\r\n    }\r\n  }\r\n\r\n  const matcher = createMatcher.default(config);\r\n  return matcher(path);\r\n}\r\n\r\nmodule.exports = {\r\n  matchFederatedPage,\r\n  createFederatedCatchAll() {\r\n    const FederatedCatchAll = initialProps => {\r\n      const [lazyProps, setProps] = React.useState({});\r\n\r\n      const {FederatedPage, render404, renderError, needsReload, ...props} = {\r\n        ...lazyProps,\r\n        ...initialProps,\r\n      };\r\n      React.useEffect(() => {\r\n        if (needsReload) {\r\n          const runUnderlayingGIP = async () => {\r\n            const federatedProps = await FederatedCatchAll.getInitialProps(props);\r\n            setProps(federatedProps);\r\n          };\r\n          runUnderlayingGIP();\r\n        }\r\n      }, []);\r\n\r\n      if (render404) {\r\n        // TODO: Render 404 page\r\n        return React.createElement('h1', {}, '404 Not Found');\r\n      }\r\n      if (renderError) {\r\n        // TODO: Render error page\r\n        return React.createElement('h1', {}, 'Oops, something went wrong.');\r\n      }\r\n\r\n      if (FederatedPage) {\r\n        return React.createElement(FederatedPage, props);\r\n      }\r\n\r\n      return null;\r\n    };\r\n\r\n    FederatedCatchAll.getInitialProps = async ctx => {\r\n      // Bot marks \"req, res, AppTree\" as unused but those are vital to not get circular-dependency error\r\n      const {err, req, res, AppTree, ...props} = ctx;\r\n      if (err) {\r\n        // TODO: Run getInitialProps for error page\r\n        return {renderError: true, ...props};\r\n      }\r\n      if (false) {}\r\n\r\n      console.log('in browser');\r\n      const matchedPage = await matchFederatedPage(ctx.asPath);\r\n\r\n      try {\r\n        console.log('matchedPage', matchedPage);\r\n        const remote = matchedPage?.value?.remote;\r\n        const mod = matchedPage?.value?.module.replace('./','/')\r\n\r\n        if (!remote || !mod) {\r\n          // TODO: Run getInitialProps for 404 page\r\n          return {render404: true, ...props};\r\n        }\r\n\r\n        console.log('loading exposed module', mod, 'from remote', remote);\r\n        const FederatedPage = await loadRemote(remote + mod).then(factory => factory.default);\r\n        console.log('FederatedPage', FederatedPage);\r\n        if (!FederatedPage) {\r\n          // TODO: Run getInitialProps for 404 page\r\n          return {render404: true, ...props};\r\n        }\r\n\r\n        const modifiedContext = {\r\n          ...ctx,\r\n          query: matchedPage.params,\r\n        };\r\n        const federatedPageProps = (await FederatedPage.getInitialProps?.(modifiedContext)) || {};\r\n        return {...federatedPageProps, FederatedPage};\r\n      } catch (err) {\r\n        console.log('err', err);\r\n        // TODO: Run getInitialProps for error page\r\n        return {renderError: true, ...props};\r\n      }\r\n    };\r\n\r\n    return FederatedCatchAll;\r\n  },\r\n};\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi4vc2hhcmVkL2luZGV4LmpzIiwibWFwcGluZ3MiOiJBQUFBLGNBQWMsbUJBQU8sQ0FBQywwREFBTztBQUM3QixzQkFBc0IsbUJBQU8sQ0FBQyw0SEFBdUI7QUFDckQsT0FBTyxZQUFZLEVBQUUsbUJBQU8sQ0FBQyxxSkFBNEI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsZ0NBQWdDO0FBQzNEO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQSxhQUFhLDhEQUE4RDtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQSwyQ0FBMkM7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsa0NBQWtDO0FBQy9DO0FBQ0E7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQSxVQUFVLEtBQWdCLEVBQUUsRUFFckI7QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLFFBQVE7QUFDUjtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY2hlY2tvdXQvLi4vc2hhcmVkL2luZGV4LmpzPzAwNDEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgUmVhY3QgPSByZXF1aXJlKCdyZWFjdCcpO1xyXG5jb25zdCBjcmVhdGVNYXRjaGVyID0gcmVxdWlyZSgnZmVhdGhlci1yb3V0ZS1tYXRjaGVyJyk7XHJcbmNvbnN0IHtsb2FkUmVtb3RlfSA9IHJlcXVpcmUoJ0Btb2R1bGUtZmVkZXJhdGlvbi9ydW50aW1lJyk7XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbWF0Y2hGZWRlcmF0ZWRQYWdlKHBhdGgpIHtcclxuICBjb25zdCByZW1vdGVzID0gbmV3IFNldCguLi5fX0ZFREVSQVRJT05fXy5fX0lOU1RBTkNFU19fLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgcmV0dXJuIGl0ZW0ub3B0aW9ucy5yZW1vdGVzLm1hcCgocikgPT4gci5hbGlhcylcclxuICB9KSlcclxuICBjb25zdCBtYXBzID0gYXdhaXQgUHJvbWlzZS5hbGwoXHJcbiAgICBBcnJheS5mcm9tKHJlbW90ZXMpLm1hcChhc3luYyByZW1vdGUgPT4ge1xyXG4gICAgICByZXR1cm4gIGxvYWRSZW1vdGUocmVtb3RlICsgJy9wYWdlcy1tYXAnKVxyXG4gICAgICAgIC50aGVuKGZhY3RvcnkgPT4gKHtyZW1vdGUsIGNvbmZpZzogZmFjdG9yeS5kZWZhdWx0fSkpXHJcbiAgICAgICAgLmNhdGNoKCgpID0+IG51bGwpO1xyXG4gICAgfSksXHJcbiAgKTtcclxuXHJcbiAgY29uc3QgY29uZmlnID0ge307XHJcblxyXG4gIGZvciAoY29uc3QgbWFwIG9mIG1hcHMpIHtcclxuICAgIGlmICghbWFwKSBjb250aW51ZTtcclxuXHJcbiAgICBmb3IgKGxldCBbcGF0aCwgbW9kXSBvZiBPYmplY3QuZW50cmllcyhtYXAuY29uZmlnKSkge1xyXG4gICAgICBjb25maWdbcGF0aF0gPSB7XHJcbiAgICAgICAgcmVtb3RlOiBtYXAucmVtb3RlLFxyXG4gICAgICAgIG1vZHVsZTogbW9kLFxyXG4gICAgICB9O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgbWF0Y2hlciA9IGNyZWF0ZU1hdGNoZXIuZGVmYXVsdChjb25maWcpO1xyXG4gIHJldHVybiBtYXRjaGVyKHBhdGgpO1xyXG59XHJcblxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICBtYXRjaEZlZGVyYXRlZFBhZ2UsXHJcbiAgY3JlYXRlRmVkZXJhdGVkQ2F0Y2hBbGwoKSB7XHJcbiAgICBjb25zdCBGZWRlcmF0ZWRDYXRjaEFsbCA9IGluaXRpYWxQcm9wcyA9PiB7XHJcbiAgICAgIGNvbnN0IFtsYXp5UHJvcHMsIHNldFByb3BzXSA9IFJlYWN0LnVzZVN0YXRlKHt9KTtcclxuXHJcbiAgICAgIGNvbnN0IHtGZWRlcmF0ZWRQYWdlLCByZW5kZXI0MDQsIHJlbmRlckVycm9yLCBuZWVkc1JlbG9hZCwgLi4ucHJvcHN9ID0ge1xyXG4gICAgICAgIC4uLmxhenlQcm9wcyxcclxuICAgICAgICAuLi5pbml0aWFsUHJvcHMsXHJcbiAgICAgIH07XHJcbiAgICAgIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgaWYgKG5lZWRzUmVsb2FkKSB7XHJcbiAgICAgICAgICBjb25zdCBydW5VbmRlcmxheWluZ0dJUCA9IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZmVkZXJhdGVkUHJvcHMgPSBhd2FpdCBGZWRlcmF0ZWRDYXRjaEFsbC5nZXRJbml0aWFsUHJvcHMocHJvcHMpO1xyXG4gICAgICAgICAgICBzZXRQcm9wcyhmZWRlcmF0ZWRQcm9wcyk7XHJcbiAgICAgICAgICB9O1xyXG4gICAgICAgICAgcnVuVW5kZXJsYXlpbmdHSVAoKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0sIFtdKTtcclxuXHJcbiAgICAgIGlmIChyZW5kZXI0MDQpIHtcclxuICAgICAgICAvLyBUT0RPOiBSZW5kZXIgNDA0IHBhZ2VcclxuICAgICAgICByZXR1cm4gUmVhY3QuY3JlYXRlRWxlbWVudCgnaDEnLCB7fSwgJzQwNCBOb3QgRm91bmQnKTtcclxuICAgICAgfVxyXG4gICAgICBpZiAocmVuZGVyRXJyb3IpIHtcclxuICAgICAgICAvLyBUT0RPOiBSZW5kZXIgZXJyb3IgcGFnZVxyXG4gICAgICAgIHJldHVybiBSZWFjdC5jcmVhdGVFbGVtZW50KCdoMScsIHt9LCAnT29wcywgc29tZXRoaW5nIHdlbnQgd3JvbmcuJyk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGlmIChGZWRlcmF0ZWRQYWdlKSB7XHJcbiAgICAgICAgcmV0dXJuIFJlYWN0LmNyZWF0ZUVsZW1lbnQoRmVkZXJhdGVkUGFnZSwgcHJvcHMpO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gbnVsbDtcclxuICAgIH07XHJcblxyXG4gICAgRmVkZXJhdGVkQ2F0Y2hBbGwuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgY3R4ID0+IHtcclxuICAgICAgLy8gQm90IG1hcmtzIFwicmVxLCByZXMsIEFwcFRyZWVcIiBhcyB1bnVzZWQgYnV0IHRob3NlIGFyZSB2aXRhbCB0byBub3QgZ2V0IGNpcmN1bGFyLWRlcGVuZGVuY3kgZXJyb3JcclxuICAgICAgY29uc3Qge2VyciwgcmVxLCByZXMsIEFwcFRyZWUsIC4uLnByb3BzfSA9IGN0eDtcclxuICAgICAgaWYgKGVycikge1xyXG4gICAgICAgIC8vIFRPRE86IFJ1biBnZXRJbml0aWFsUHJvcHMgZm9yIGVycm9yIHBhZ2VcclxuICAgICAgICByZXR1cm4ge3JlbmRlckVycm9yOiB0cnVlLCAuLi5wcm9wc307XHJcbiAgICAgIH1cclxuICAgICAgaWYgKCFwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgICByZXR1cm4ge25lZWRzUmVsb2FkOiB0cnVlLCAuLi5wcm9wc307XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGNvbnNvbGUubG9nKCdpbiBicm93c2VyJyk7XHJcbiAgICAgIGNvbnN0IG1hdGNoZWRQYWdlID0gYXdhaXQgbWF0Y2hGZWRlcmF0ZWRQYWdlKGN0eC5hc1BhdGgpO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zb2xlLmxvZygnbWF0Y2hlZFBhZ2UnLCBtYXRjaGVkUGFnZSk7XHJcbiAgICAgICAgY29uc3QgcmVtb3RlID0gbWF0Y2hlZFBhZ2U/LnZhbHVlPy5yZW1vdGU7XHJcbiAgICAgICAgY29uc3QgbW9kID0gbWF0Y2hlZFBhZ2U/LnZhbHVlPy5tb2R1bGUucmVwbGFjZSgnLi8nLCcvJylcclxuXHJcbiAgICAgICAgaWYgKCFyZW1vdGUgfHwgIW1vZCkge1xyXG4gICAgICAgICAgLy8gVE9ETzogUnVuIGdldEluaXRpYWxQcm9wcyBmb3IgNDA0IHBhZ2VcclxuICAgICAgICAgIHJldHVybiB7cmVuZGVyNDA0OiB0cnVlLCAuLi5wcm9wc307XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zb2xlLmxvZygnbG9hZGluZyBleHBvc2VkIG1vZHVsZScsIG1vZCwgJ2Zyb20gcmVtb3RlJywgcmVtb3RlKTtcclxuICAgICAgICBjb25zdCBGZWRlcmF0ZWRQYWdlID0gYXdhaXQgbG9hZFJlbW90ZShyZW1vdGUgKyBtb2QpLnRoZW4oZmFjdG9yeSA9PiBmYWN0b3J5LmRlZmF1bHQpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdGZWRlcmF0ZWRQYWdlJywgRmVkZXJhdGVkUGFnZSk7XHJcbiAgICAgICAgaWYgKCFGZWRlcmF0ZWRQYWdlKSB7XHJcbiAgICAgICAgICAvLyBUT0RPOiBSdW4gZ2V0SW5pdGlhbFByb3BzIGZvciA0MDQgcGFnZVxyXG4gICAgICAgICAgcmV0dXJuIHtyZW5kZXI0MDQ6IHRydWUsIC4uLnByb3BzfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IG1vZGlmaWVkQ29udGV4dCA9IHtcclxuICAgICAgICAgIC4uLmN0eCxcclxuICAgICAgICAgIHF1ZXJ5OiBtYXRjaGVkUGFnZS5wYXJhbXMsXHJcbiAgICAgICAgfTtcclxuICAgICAgICBjb25zdCBmZWRlcmF0ZWRQYWdlUHJvcHMgPSAoYXdhaXQgRmVkZXJhdGVkUGFnZS5nZXRJbml0aWFsUHJvcHM/Lihtb2RpZmllZENvbnRleHQpKSB8fCB7fTtcclxuICAgICAgICByZXR1cm4gey4uLmZlZGVyYXRlZFBhZ2VQcm9wcywgRmVkZXJhdGVkUGFnZX07XHJcbiAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdlcnInLCBlcnIpO1xyXG4gICAgICAgIC8vIFRPRE86IFJ1biBnZXRJbml0aWFsUHJvcHMgZm9yIGVycm9yIHBhZ2VcclxuICAgICAgICByZXR1cm4ge3JlbmRlckVycm9yOiB0cnVlLCAuLi5wcm9wc307XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcmV0dXJuIEZlZGVyYXRlZENhdGNoQWxsO1xyXG4gIH0sXHJcbn07XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///../shared/index.js\n"));

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var promiseTrack = [];
/******/ __webpack_require__("./node_modules/.federation/entry.81955b485782db3c38e6fc1734cc71e7.js");
/******/ if(__webpack_require__.f && __webpack_require__.f.consumes) { __webpack_require__.f.consumes("pages/[...slug]", promiseTrack); __webpack_require__.f.consumes("pages/_app", promiseTrack);}
/******/ 
/******/ var __webpack_exports__ = Promise.all(promiseTrack).then(function() {
/******/ 	var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ 	__webpack_require__.O(0, ["pages/_app","main"], function() { return __webpack_exec__("./node_modules/.federation/entry.81955b485782db3c38e6fc1734cc71e7.js"), __webpack_exec__("../node_modules/.pnpm/next@14.2.3_react-dom@18.2.0_react@18.2.0/node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?absolutePagePath=C%3A%5Cwork%5Cme%5Cnextjs-v14%5Ccheckout%5Cpages%5C%5B...slug%5D.js&page=%2F%5B...slug%5D!"); });
/******/ 	var __webpack_exports__ = __webpack_require__.O();
/******/ 	return __webpack_exports__
/******/ });_N_E = __webpack_exports__;
/******/ }
]);