module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/product/[id].js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/product/[id].js":
/*!*******************************!*\
  !*** ./pages/product/[id].js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ \"next/router\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);\nvar _jsxFileName = \"/Volumes/HDD 1TB/Proyectos/React/next-js/pages/product/[id].js\";\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;\n// Para usar rutas dinámicas creamos una carpeta para la primer parte de la ruta\n// para este ejemplo es localhost:3000/product/\n// para la segunda parte creamos un archivo [variable].js, que va a significar la segunda parte de la ruta\n// lo que se ponga dentro de [] va a ser como se llame la variable en código\n\n // para obtener la variable del url\n\nconst ProductItem = () => {\n  var _product$attributes, _product$attributes2, _product$attributes3, _product$attributes4;\n\n  const {\n    0: product,\n    1: setProduct\n  } = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]);\n  const {\n    query: {\n      id\n    }\n  } = Object(next_router__WEBPACK_IMPORTED_MODULE_1__[\"useRouter\"])();\n  console.log(id);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(() => {\n    if (id) {\n      fetch(`/api/avo/${id}`).then(res => res.json().then(data => setProduct(data)));\n    }\n  }, [id]);\n  return __jsx(\"div\", {\n    className: \"product-container\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 5\n    }\n  }, __jsx(\"div\", {\n    className: \"product_presentation\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 27,\n      columnNumber: 7\n    }\n  }, __jsx(\"img\", {\n    src: product.image,\n    alt: product.name,\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 28,\n      columnNumber: 9\n    }\n  }), __jsx(\"div\", {\n    className: \"product_presentation-info\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 29,\n      columnNumber: 9\n    }\n  }, __jsx(\"h2\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 30,\n      columnNumber: 11\n    }\n  }, product.name), __jsx(\"span\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 31,\n      columnNumber: 11\n    }\n  }, product.sku))), __jsx(\"div\", {\n    className: \"product_about\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 34,\n      columnNumber: 7\n    }\n  }, __jsx(\"h3\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 35,\n      columnNumber: 9\n    }\n  }, \"About this avocado\"), __jsx(\"p\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 36,\n      columnNumber: 9\n    }\n  }, (_product$attributes = product.attributes) === null || _product$attributes === void 0 ? void 0 : _product$attributes.description)), __jsx(\"hr\", {\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 38,\n      columnNumber: 7\n    }\n  }), __jsx(\"div\", {\n    className: \"product_attributes\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 39,\n      columnNumber: 7\n    }\n  }), __jsx(\"table\", {\n    className: \"ui celled table\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 40,\n      columnNumber: 7\n    }\n  }, __jsx(\"thead\", {\n    className: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 41,\n      columnNumber: 9\n    }\n  }, __jsx(\"tr\", {\n    className: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 42,\n      columnNumber: 11\n    }\n  }, __jsx(\"th\", {\n    colSpan: \"2\",\n    className: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 13\n    }\n  }, \"Attributes\"))), __jsx(\"tbody\", {\n    className: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 48,\n      columnNumber: 9\n    }\n  }, __jsx(\"tr\", {\n    className: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 49,\n      columnNumber: 11\n    }\n  }, __jsx(\"td\", {\n    className: \"attr-name\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 50,\n      columnNumber: 13\n    }\n  }, \"shape\"), __jsx(\"td\", {\n    className: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 51,\n      columnNumber: 13\n    }\n  }, (_product$attributes2 = product.attributes) === null || _product$attributes2 === void 0 ? void 0 : _product$attributes2.shape)), __jsx(\"tr\", {\n    className: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 53,\n      columnNumber: 11\n    }\n  }, __jsx(\"td\", {\n    className: \"attr-name\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 54,\n      columnNumber: 13\n    }\n  }, \"hardiness\"), __jsx(\"td\", {\n    className: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 13\n    }\n  }, (_product$attributes3 = product.attributes) === null || _product$attributes3 === void 0 ? void 0 : _product$attributes3.hardiness)), __jsx(\"tr\", {\n    className: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 57,\n      columnNumber: 11\n    }\n  }, __jsx(\"td\", {\n    className: \"attr-name\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 58,\n      columnNumber: 13\n    }\n  }, \"taste\"), __jsx(\"td\", {\n    className: \"\",\n    __self: undefined,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 59,\n      columnNumber: 13\n    }\n  }, (_product$attributes4 = product.attributes) === null || _product$attributes4 === void 0 ? void 0 : _product$attributes4.taste)))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ProductItem);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9wYWdlcy9wcm9kdWN0Ly5qcz8zZDk2Il0sIm5hbWVzIjpbIlByb2R1Y3RJdGVtIiwicHJvZHVjdCIsInNldFByb2R1Y3QiLCJ1c2VTdGF0ZSIsInF1ZXJ5IiwiaWQiLCJ1c2VSb3V0ZXIiLCJjb25zb2xlIiwibG9nIiwidXNlRWZmZWN0IiwiZmV0Y2giLCJ0aGVuIiwicmVzIiwianNvbiIsImRhdGEiLCJpbWFnZSIsIm5hbWUiLCJza3UiLCJhdHRyaWJ1dGVzIiwiZGVzY3JpcHRpb24iLCJzaGFwZSIsImhhcmRpbmVzcyIsInRhc3RlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtDQUN5Qzs7QUFFekMsTUFBTUEsV0FBVyxHQUFHLE1BQU07QUFBQTs7QUFDeEIsUUFBTTtBQUFBLE9BQUNDLE9BQUQ7QUFBQSxPQUFVQztBQUFWLE1BQXdCQyxzREFBUSxDQUFDLEVBQUQsQ0FBdEM7QUFFQSxRQUFNO0FBQ0pDLFNBQUssRUFBRTtBQUFFQztBQUFGO0FBREgsTUFFRkMsNkRBQVMsRUFGYjtBQUlBQyxTQUFPLENBQUNDLEdBQVIsQ0FBWUgsRUFBWjtBQUVBSSx5REFBUyxDQUFDLE1BQU07QUFDZCxRQUFJSixFQUFKLEVBQVE7QUFDTkssV0FBSyxDQUFFLFlBQVdMLEVBQUcsRUFBaEIsQ0FBTCxDQUF3Qk0sSUFBeEIsQ0FBOEJDLEdBQUQsSUFDM0JBLEdBQUcsQ0FBQ0MsSUFBSixHQUFXRixJQUFYLENBQWlCRyxJQUFELElBQVVaLFVBQVUsQ0FBQ1ksSUFBRCxDQUFwQyxDQURGO0FBR0Q7QUFDRixHQU5RLEVBTU4sQ0FBQ1QsRUFBRCxDQU5NLENBQVQ7QUFRQSxTQUNFO0FBQUssYUFBUyxFQUFDLG1CQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FDRTtBQUFLLGFBQVMsRUFBQyxzQkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBSyxPQUFH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dXRhcyBkaW7DoW1pY2FzIGNyZWFtb3MgdW5hIGNhcnBldGEgcGFyYSBsYSBwcmltZXIgcGFydGUgZGUgbGEgcnV0YVxuLy8gcGFyYSBlc3RlIGVqZW1wbG8gZXMgbG9jYWxob3N0OjMwMDAvcHJvZHVjdC9cbi8vIHBhcmEgbGEgc2VndW5kYSBwYXJ0ZSBjcmVhbW9zIHVuIGFyY2hpdm8gW3ZhcmlhYmxlXS5qcywgcXVlIHZhIGEgc2lnbmlmaWNhciBsYSBzZWd1bmRhIHBhcnRlIGRlIGxhIHJ1dGFcbi8vIGxvIHF1ZSBzZSBwb25nYSBkZW50cm8gZGUgW10gdmEgYSBzZXIgY29tbyBzZSBsbGFtZSBsYSB2YXJpYWJsZSBlbiBjw7NkaWdvXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7IC8vIHBhcmEgb2J0ZW5lciBsYSB2YXJpYWJsZSBkZWwgdXJsXG5cbmNvbnN0IFByb2R1Y3RJdGVtID0gKCkgPT4ge1xuICBjb25zdCBbcHJvZHVjdCwgc2V0UHJvZHVjdF0gPSB1c2VTdGF0ZShbXSk7XG5cbiAgY29uc3Qge1xuICAgIHF1ZXJ5OiB7IGlkIH0sXG4gIH0gPSB1c2VSb3V0ZXIoKTtcblxuICBjb25zb2xlLmxvZyhpZCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoaWQpIHtcbiAgICAgIGZldGNoKGAvYXBpL2F2by8ke2lkfWApLnRoZW4oKHJlcykgPT5cbiAgICAgICAgcmVzLmpzb24oKS50aGVuKChkYXRhKSA9PiBzZXRQcm9kdWN0KGRhdGEpKVxuICAgICAgKTtcbiAgICB9XG4gIH0sIFtpZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0LWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9kdWN0X3ByZXNlbnRhdGlvblwiPlxuICAgICAgICA8aW1nIHNyYz17cHJvZHVjdC5pbWFnZX0gYWx0PXtwcm9kdWN0Lm5hbWV9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9wcmVzZW50YXRpb24taW5mb1wiPlxuICAgICAgICAgIDxoMj57cHJvZHVjdC5uYW1lfTwvaDI+XG4gICAgICAgICAgPHNwYW4+e3Byb2R1Y3Quc2t1fTwvc3Bhbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9hYm91dFwiPlxuICAgICAgICA8aDM+QWJvdXQgdGhpcyBhdm9jYWRvPC9oMz5cbiAgICAgICAgPHA+e3Byb2R1Y3QuYXR0cmlidXRlcz8uZGVzY3JpcHRpb259PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8aHIgLz5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvZHVjdF9hdHRyaWJ1dGVzXCI+PC9kaXY+XG4gICAgICA8dGFibGUgY2xhc3NOYW1lPVwidWkgY2VsbGVkIHRhYmxlXCI+XG4gICAgICAgIDx0aGVhZCBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8dGggY29sU3Bhbj1cIjJcIiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgICAgQXR0cmlidXRlc1xuICAgICAgICAgICAgPC90aD5cbiAgICAgICAgICA8L3RyPlxuICAgICAgICA8L3RoZWFkPlxuICAgICAgICA8dGJvZHkgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgPHRyIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImF0dHItbmFtZVwiPnNoYXBlPC90ZD5cbiAgICAgICAgICAgIDx0ZCBjbGFzc05hbWU9XCJcIj57cHJvZHVjdC5hdHRyaWJ1dGVzPy5zaGFwZX08L3RkPlxuICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgPHRyIGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cImF0dHItbmFtZVwiPmhhcmRpbmVzczwvdGQ+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiXCI+e3Byb2R1Y3QuYXR0cmlidXRlcz8uaGFyZGluZXNzfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgICA8dHIgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8dGQgY2xhc3NOYW1lPVwiYXR0ci1uYW1lXCI+dGFzdGU8L3RkPlxuICAgICAgICAgICAgPHRkIGNsYXNzTmFtZT1cIlwiPntwcm9kdWN0LmF0dHJpYnV0ZXM/LnRhc3RlfTwvdGQ+XG4gICAgICAgICAgPC90cj5cbiAgICAgICAgPC90Ym9keT5cbiAgICAgIDwvdGFibGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBQcm9kdWN0SXRlbTtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/product/[id].js\n");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"next/router\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiP2Q4M2UiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoibmV4dC9yb3V0ZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJuZXh0L3JvdXRlclwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///next/router\n");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiPzU4OGUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEiLCJmaWxlIjoicmVhY3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///react\n");

/***/ })

/******/ });