webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./style.css":
/*!*******************************************************************************************************************!*\
  !*** (webpack)/css-loader/cjs.js??ref--5-oneOf-6-1!(webpack)/postcss-loader/cjs.js??ref--5-oneOf-6-2!./style.css ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/css-loader/api.js */ \"./node_modules/next/dist/compiled/css-loader/api.js\");\n/* harmony import */ var _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_compiled_css_loader_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"/* Dentro de la raiz del proyecto se pone el css global \\n    Luego esto se agrega en el _app.js\\n*/\\n* {\\n  font-family: Arial, Helvetica, sans-serif;\\n}\\n\\n.avo-container {\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n}\\n\\n.avo-card {\\n  border: none;\\n  border-radius: 0.28571429rem;\\n  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;\\n  transition: box-shadow 0.1s ease, transform 0.1s ease;\\n  cursor: pointer;\\n  margin: 10px;\\n}\\n\\n.avo-card_content {\\n  border: none;\\n  border-top: 1px solid rgba(34, 36, 38, 0.1);\\n  padding: 1em;\\n}\\n\\n.product-container {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.product_presentation {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.product_presentation-info {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.table {\\n  width: 100%;\\n  background: #fff;\\n  margin: 1em 0;\\n  border: 1px solid rgba(34, 36, 38, 0.15);\\n  box-shadow: none;\\n  border-radius: 0.28571429rem;\\n  text-align: left;\\n  color: rgba(0, 0, 0, 0.87);\\n  border-collapse: separate;\\n  border-spacing: 0;\\n}\\n\\n.table th {\\n  background-color: #f9fafb;\\n  padding: 0.92857143em 0.78571429em;\\n}\\n\\n.table td {\\n  border-top: 1px solid rgba(34, 36, 38, 0.1);\\n\\n  padding: 0.92857143em 0.78571429em;\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://style.css\"],\"names\":[],\"mappings\":\"AAAA;;CAEC;AACD;EACE,yCAAyC;AAC3C;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,eAAe;EACf,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,4BAA4B;EAC5B,kDAAkD;EAClD,qDAAqD;EACrD,eAAe;EACf,YAAY;AACd;;AAEA;EACE,YAAY;EACZ,2CAA2C;EAC3C,YAAY;AACd;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,sBAAsB;AACxB;;AAEA;EACE,WAAW;EACX,gBAAgB;EAChB,aAAa;EACb,wCAAwC;EACxC,gBAAgB;EAChB,4BAA4B;EAC5B,gBAAgB;EAChB,0BAA0B;EAC1B,yBAAyB;EACzB,iBAAiB;AACnB;;AAEA;EACE,yBAAyB;EACzB,kCAAkC;AACpC;;AAEA;EACE,2CAA2C;;EAE3C,kCAAkC;AACpC\",\"sourcesContent\":[\"/* Dentro de la raiz del proyecto se pone el css global \\n    Luego esto se agrega en el _app.js\\n*/\\n* {\\n  font-family: Arial, Helvetica, sans-serif;\\n}\\n\\n.avo-container {\\n  display: flex;\\n  flex-direction: row;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n}\\n\\n.avo-card {\\n  border: none;\\n  border-radius: 0.28571429rem;\\n  box-shadow: 0 1px 3px 0 #d4d4d5, 0 0 0 1px #d4d4d5;\\n  transition: box-shadow 0.1s ease, transform 0.1s ease;\\n  cursor: pointer;\\n  margin: 10px;\\n}\\n\\n.avo-card_content {\\n  border: none;\\n  border-top: 1px solid rgba(34, 36, 38, 0.1);\\n  padding: 1em;\\n}\\n\\n.product-container {\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.product_presentation {\\n  display: flex;\\n  flex-direction: row;\\n  justify-content: center;\\n  align-items: center;\\n}\\n\\n.product_presentation-info {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.table {\\n  width: 100%;\\n  background: #fff;\\n  margin: 1em 0;\\n  border: 1px solid rgba(34, 36, 38, 0.15);\\n  box-shadow: none;\\n  border-radius: 0.28571429rem;\\n  text-align: left;\\n  color: rgba(0, 0, 0, 0.87);\\n  border-collapse: separate;\\n  border-spacing: 0;\\n}\\n\\n.table th {\\n  background-color: #f9fafb;\\n  padding: 0.92857143em 0.78571429em;\\n}\\n\\n.table td {\\n  border-top: 1px solid rgba(34, 36, 38, 0.1);\\n\\n  padding: 0.92857143em 0.78571429em;\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGUuY3NzP2MwMzEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFDOEY7QUFDOUYsOEJBQThCLHlGQUEyQjtBQUN6RDtBQUNBLDhCQUE4QixRQUFTLDRHQUE0Ryw4Q0FBOEMsR0FBRyxvQkFBb0Isa0JBQWtCLHdCQUF3QixvQkFBb0IsNEJBQTRCLEdBQUcsZUFBZSxpQkFBaUIsaUNBQWlDLHVEQUF1RCwwREFBMEQsb0JBQW9CLGlCQUFpQixHQUFHLHVCQUF1QixpQkFBaUIsZ0RBQWdELGlCQUFpQixHQUFHLHdCQUF3QixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsR0FBRywyQkFBMkIsa0JBQWtCLHdCQUF3Qiw0QkFBNEIsd0JBQXdCLEdBQUcsZ0NBQWdDLGtCQUFrQiwyQkFBMkIsR0FBRyxZQUFZLGdCQUFnQixxQkFBcUIsa0JBQWtCLDZDQUE2QyxxQkFBcUIsaUNBQWlDLHFCQUFxQiwrQkFBK0IsOEJBQThCLHNCQUFzQixHQUFHLGVBQWUsOEJBQThCLHVDQUF1QyxHQUFHLGVBQWUsZ0RBQWdELHlDQUF5QyxHQUFHLFNBQVMsMkVBQTJFLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxZQUFZLFdBQVcsTUFBTSxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLE9BQU8sS0FBSyxhQUFhLGFBQWEsbUlBQW1JLDhDQUE4QyxHQUFHLG9CQUFvQixrQkFBa0Isd0JBQXdCLG9CQUFvQiw0QkFBNEIsR0FBRyxlQUFlLGlCQUFpQixpQ0FBaUMsdURBQXVELDBEQUEwRCxvQkFBb0IsaUJBQWlCLEdBQUcsdUJBQXVCLGlCQUFpQixnREFBZ0QsaUJBQWlCLEdBQUcsd0JBQXdCLGtCQUFrQiwyQkFBMkIsNEJBQTRCLHdCQUF3QixHQUFHLDJCQUEyQixrQkFBa0Isd0JBQXdCLDRCQUE0Qix3QkFBd0IsR0FBRyxnQ0FBZ0Msa0JBQWtCLDJCQUEyQixHQUFHLFlBQVksZ0JBQWdCLHFCQUFxQixrQkFBa0IsNkNBQTZDLHFCQUFxQixpQ0FBaUMscUJBQXFCLCtCQUErQiw4QkFBOEIsc0JBQXNCLEdBQUcsZUFBZSw4QkFBOEIsdUNBQXVDLEdBQUcsZUFBZSxnREFBZ0QseUNBQXlDLEdBQUcscUJBQXFCO0FBQzU3RztBQUNlLHNGQUF1QixFQUFDIiwiZmlsZSI6Ii4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jb21waWxlZC9jc3MtbG9hZGVyL2Nqcy5qcz8hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3Bvc3Rjc3MtbG9hZGVyL2Nqcy5qcz8hLi9zdHlsZS5jc3MuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY29tcGlsZWQvY3NzLWxvYWRlci9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi8qIERlbnRybyBkZSBsYSByYWl6IGRlbCBwcm95ZWN0byBzZSBwb25lIGVsIGNzcyBnbG9iYWwgXFxuICAgIEx1ZWdvIGVzdG8gc2UgYWdyZWdhIGVuIGVsIF9hcHAuanNcXG4qL1xcbioge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5hdm8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hdm8tY2FyZCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjI4NTcxNDI5cmVtO1xcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgI2Q0ZDRkNSwgMCAwIDAgMXB4ICNkNGQ0ZDU7XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMXMgZWFzZSwgdHJhbnNmb3JtIDAuMXMgZWFzZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmF2by1jYXJkX2NvbnRlbnQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMzQsIDM2LCAzOCwgMC4xKTtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLnByb2R1Y3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvZHVjdF9wcmVzZW50YXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9kdWN0X3ByZXNlbnRhdGlvbi1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFibGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgbWFyZ2luOiAxZW0gMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzQsIDM2LCAzOCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yODU3MTQyOXJlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcXG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLnRhYmxlIHRoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XFxuICBwYWRkaW5nOiAwLjkyODU3MTQzZW0gMC43ODU3MTQyOWVtO1xcbn1cXG5cXG4udGFibGUgdGQge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMzQsIDM2LCAzOCwgMC4xKTtcXG5cXG4gIHBhZGRpbmc6IDAuOTI4NTcxNDNlbSAwLjc4NTcxNDI5ZW07XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly9zdHlsZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0NBRUM7QUFDRDtFQUNFLHlDQUF5QztBQUMzQzs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWiw0QkFBNEI7RUFDNUIsa0RBQWtEO0VBQ2xELHFEQUFxRDtFQUNyRCxlQUFlO0VBQ2YsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtFQUNaLDJDQUEyQztFQUMzQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2Isd0NBQXdDO0VBQ3hDLGdCQUFnQjtFQUNoQiw0QkFBNEI7RUFDNUIsZ0JBQWdCO0VBQ2hCLDBCQUEwQjtFQUMxQix5QkFBeUI7RUFDekIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UseUJBQXlCO0VBQ3pCLGtDQUFrQztBQUNwQzs7QUFFQTtFQUNFLDJDQUEyQzs7RUFFM0Msa0NBQWtDO0FBQ3BDXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qIERlbnRybyBkZSBsYSByYWl6IGRlbCBwcm95ZWN0byBzZSBwb25lIGVsIGNzcyBnbG9iYWwgXFxuICAgIEx1ZWdvIGVzdG8gc2UgYWdyZWdhIGVuIGVsIF9hcHAuanNcXG4qL1xcbioge1xcbiAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XFxufVxcblxcbi5hdm8tY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5hdm8tY2FyZCB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAwLjI4NTcxNDI5cmVtO1xcbiAgYm94LXNoYWRvdzogMCAxcHggM3B4IDAgI2Q0ZDRkNSwgMCAwIDAgMXB4ICNkNGQ0ZDU7XFxuICB0cmFuc2l0aW9uOiBib3gtc2hhZG93IDAuMXMgZWFzZSwgdHJhbnNmb3JtIDAuMXMgZWFzZTtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIG1hcmdpbjogMTBweDtcXG59XFxuXFxuLmF2by1jYXJkX2NvbnRlbnQge1xcbiAgYm9yZGVyOiBub25lO1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMzQsIDM2LCAzOCwgMC4xKTtcXG4gIHBhZGRpbmc6IDFlbTtcXG59XFxuXFxuLnByb2R1Y3QtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4ucHJvZHVjdF9wcmVzZW50YXRpb24ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5wcm9kdWN0X3ByZXNlbnRhdGlvbi1pbmZvIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4udGFibGUge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kOiAjZmZmO1xcbiAgbWFyZ2luOiAxZW0gMDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMzQsIDM2LCAzOCwgMC4xNSk7XFxuICBib3gtc2hhZG93OiBub25lO1xcbiAgYm9yZGVyLXJhZGl1czogMC4yODU3MTQyOXJlbTtcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg3KTtcXG4gIGJvcmRlci1jb2xsYXBzZTogc2VwYXJhdGU7XFxuICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLnRhYmxlIHRoIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWZhZmI7XFxuICBwYWRkaW5nOiAwLjkyODU3MTQzZW0gMC43ODU3MTQyOWVtO1xcbn1cXG5cXG4udGFibGUgdGQge1xcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkIHJnYmEoMzQsIDM2LCAzOCwgMC4xKTtcXG5cXG4gIHBhZGRpbmc6IDAuOTI4NTcxNDNlbSAwLjc4NTcxNDI5ZW07XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/compiled/css-loader/cjs.js?!./node_modules/next/dist/compiled/postcss-loader/cjs.js?!./style.css\n");

/***/ })

})