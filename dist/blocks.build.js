/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/*!***********************!*\
  !*** ./src/blocks.js ***!
  \***********************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__block_reviews_slider_block_js__ = __webpack_require__(/*! ./block-reviews-slider/block.js */ 4);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__block_reviews_list_block_js__ = __webpack_require__(/*! ./block-reviews-list/block.js */ 1);\n/**\n * Gutenberg Blocks\n *\n * All blocks related JavaScript files should be imported here.\n * You can create a new block folder in this dir and include code\n * for that block here as well.\n *\n * All blocks should be included here since this is the file that\n * Webpack is compiling as the input file.\n */\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3MuanM/N2I1YiJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEd1dGVuYmVyZyBCbG9ja3NcbiAqXG4gKiBBbGwgYmxvY2tzIHJlbGF0ZWQgSmF2YVNjcmlwdCBmaWxlcyBzaG91bGQgYmUgaW1wb3J0ZWQgaGVyZS5cbiAqIFlvdSBjYW4gY3JlYXRlIGEgbmV3IGJsb2NrIGZvbGRlciBpbiB0aGlzIGRpciBhbmQgaW5jbHVkZSBjb2RlXG4gKiBmb3IgdGhhdCBibG9jayBoZXJlIGFzIHdlbGwuXG4gKlxuICogQWxsIGJsb2NrcyBzaG91bGQgYmUgaW5jbHVkZWQgaGVyZSBzaW5jZSB0aGlzIGlzIHRoZSBmaWxlIHRoYXRcbiAqIFdlYnBhY2sgaXMgY29tcGlsaW5nIGFzIHRoZSBpbnB1dCBmaWxlLlxuICovXG5cbmltcG9ydCAnLi9ibG9jay1yZXZpZXdzLXNsaWRlci9ibG9jay5qcyc7XG5pbXBvcnQgJy4vYmxvY2stcmV2aWV3cy1saXN0L2Jsb2NrLmpzJztcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9ja3MuanNcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///0\n");

/***/ }),
/* 1 */
/*!*****************************************!*\
  !*** ./src/block-reviews-list/block.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 2);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 3);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar RichText = wp.editor.RichText;\n\n\nregisterBlockType('cgb/block-en-reviews-list', {\n  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n  title: __('en-reviews-list'), // Block title.\n  icon: 'editor-ol', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n  category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n  keywords: [__('en-reviews'), __('wit-reviews'), __('reviews')],\n\n  // Enable or disable support for low-level features\n  supports: {\n    // Turn off ability to edit HTML of block content\n    html: true\n  },\n\n  // Set up data model for our review block\n  attributes: {\n    title: {\n      type: 'string',\n      selector: 'js-review-title'\n    },\n    review: {\n      type: 'string',\n      selector: 'js-review-content',\n      multiline: 'p'\n    },\n    author: {\n      type: 'string',\n      selector: 'js-review-author'\n    }\n  },\n\n  // The UI for the WordPress editor\n  edit: function edit(props) {\n    // Pull out the props we'll use\n    var attributes = props.attributes,\n        className = props.className,\n        setAttributes = props.setAttributes;\n\n\n    return wp.element.createElement(\n      'div',\n      { className: className },\n      wp.element.createElement(RichText, {\n        className: 'js-review-title wp-admin-review-title',\n        value: attributes.title,\n        onChange: function onChange(value) {\n          return setAttributes({ title: value });\n        },\n        tagName: 'h3',\n        placeholder: 'Review title'\n      }),\n      wp.element.createElement(RichText, {\n        className: 'js-review-content wp-admin-review-content',\n        value: attributes.review,\n        onChange: function onChange(value) {\n          return setAttributes({ review: value });\n        },\n        tagName: 'p',\n        placeholder: 'Review content',\n        multiline: 'p'\n      }),\n      wp.element.createElement(RichText, {\n        className: 'js-review-author wp-admin-review-author',\n        value: attributes.author,\n        onChange: function onChange(value) {\n          return setAttributes({ author: value });\n        },\n        tagName: 'p',\n        placeholder: 'Review author'\n      })\n    );\n  },\n\n  // We return null since we're using dymanic blocks\n  save: function save(props) {\n    return null;\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay1yZXZpZXdzLWxpc3QvYmxvY2suanM/MDc5MyJdLCJzb3VyY2VzQ29udGVudCI6WyJcbi8vICBJbXBvcnQgQ1NTLlxuaW1wb3J0ICcuL2VkaXRvci5zY3NzJztcbmltcG9ydCAnLi9zdHlsZS5zY3NzJztcblxudmFyIF9fID0gd3AuaTE4bi5fXzsgLy8gSW1wb3J0IF9fKCkgZnJvbSB3cC5pMThuXG5cbnZhciByZWdpc3RlckJsb2NrVHlwZSA9IHdwLmJsb2Nrcy5yZWdpc3RlckJsb2NrVHlwZTsgLy8gSW1wb3J0IHJlZ2lzdGVyQmxvY2tUeXBlKCkgZnJvbSB3cC5ibG9ja3NcblxudmFyIFJpY2hUZXh0ID0gd3AuZWRpdG9yLlJpY2hUZXh0O1xuXG5cbnJlZ2lzdGVyQmxvY2tUeXBlKCdjZ2IvYmxvY2stZW4tcmV2aWV3cy1saXN0Jywge1xuICAvLyBCbG9jayBuYW1lLiBCbG9jayBuYW1lcyBtdXN0IGJlIHN0cmluZyB0aGF0IGNvbnRhaW5zIGEgbmFtZXNwYWNlIHByZWZpeC4gRXhhbXBsZTogbXktcGx1Z2luL215LWN1c3RvbS1ibG9jay5cbiAgdGl0bGU6IF9fKCdlbi1yZXZpZXdzLWxpc3QnKSwgLy8gQmxvY2sgdGl0bGUuXG4gIGljb246ICdlZGl0b3Itb2wnLCAvLyBCbG9jayBpY29uIGZyb20gRGFzaGljb25zIOKGkiBodHRwczovL2RldmVsb3Blci53b3JkcHJlc3Mub3JnL3Jlc291cmNlL2Rhc2hpY29ucy8uXG4gIGNhdGVnb3J5OiAnY29tbW9uJywgLy8gQmxvY2sgY2F0ZWdvcnkg4oCUIEdyb3VwIGJsb2NrcyB0b2dldGhlciBiYXNlZCBvbiBjb21tb24gdHJhaXRzIEUuZy4gY29tbW9uLCBmb3JtYXR0aW5nLCBsYXlvdXQgd2lkZ2V0cywgZW1iZWQuXG4gIGtleXdvcmRzOiBbX18oJ2VuLXJldmlld3MnKSwgX18oJ3dpdC1yZXZpZXdzJyksIF9fKCdyZXZpZXdzJyldLFxuXG4gIC8vIEVuYWJsZSBvciBkaXNhYmxlIHN1cHBvcnQgZm9yIGxvdy1sZXZlbCBmZWF0dXJlc1xuICBzdXBwb3J0czoge1xuICAgIC8vIFR1cm4gb2ZmIGFiaWxpdHkgdG8gZWRpdCBIVE1MIG9mIGJsb2NrIGNvbnRlbnRcbiAgICBodG1sOiB0cnVlXG4gIH0sXG5cbiAgLy8gU2V0IHVwIGRhdGEgbW9kZWwgZm9yIG91ciByZXZpZXcgYmxvY2tcbiAgYXR0cmlidXRlczoge1xuICAgIHRpdGxlOiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIHNlbGVjdG9yOiAnanMtcmV2aWV3LXRpdGxlJ1xuICAgIH0sXG4gICAgcmV2aWV3OiB7XG4gICAgICB0eXBlOiAnc3RyaW5nJyxcbiAgICAgIHNlbGVjdG9yOiAnanMtcmV2aWV3LWNvbnRlbnQnLFxuICAgICAgbXVsdGlsaW5lOiAncCdcbiAgICB9LFxuICAgIGF1dGhvcjoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBzZWxlY3RvcjogJ2pzLXJldmlldy1hdXRob3InXG4gICAgfVxuICB9LFxuXG4gIC8vIFRoZSBVSSBmb3IgdGhlIFdvcmRQcmVzcyBlZGl0b3JcbiAgZWRpdDogZnVuY3Rpb24gZWRpdChwcm9wcykge1xuICAgIC8vIFB1bGwgb3V0IHRoZSBwcm9wcyB3ZSdsbCB1c2VcbiAgICB2YXIgYXR0cmlidXRlcyA9IHByb3BzLmF0dHJpYnV0ZXMsXG4gICAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgICAgc2V0QXR0cmlidXRlcyA9IHByb3BzLnNldEF0dHJpYnV0ZXM7XG5cblxuICAgIHJldHVybiB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoXG4gICAgICAnZGl2JyxcbiAgICAgIHsgY2xhc3NOYW1lOiBjbGFzc05hbWUgfSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuICAgICAgICBjbGFzc05hbWU6ICdqcy1yZXZpZXctdGl0bGUgd3AtYWRtaW4tcmV2aWV3LXRpdGxlJyxcbiAgICAgICAgdmFsdWU6IGF0dHJpYnV0ZXMudGl0bGUsXG4gICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgdGl0bGU6IHZhbHVlIH0pO1xuICAgICAgICB9LFxuICAgICAgICB0YWdOYW1lOiAnaDMnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ1JldmlldyB0aXRsZSdcbiAgICAgIH0pLFxuICAgICAgd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFJpY2hUZXh0LCB7XG4gICAgICAgIGNsYXNzTmFtZTogJ2pzLXJldmlldy1jb250ZW50IHdwLWFkbWluLXJldmlldy1jb250ZW50JyxcbiAgICAgICAgdmFsdWU6IGF0dHJpYnV0ZXMucmV2aWV3LFxuICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7IHJldmlldzogdmFsdWUgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHRhZ05hbWU6ICdwJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdSZXZpZXcgY29udGVudCcsXG4gICAgICAgIG11bHRpbGluZTogJ3AnXG4gICAgICB9KSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuICAgICAgICBjbGFzc05hbWU6ICdqcy1yZXZpZXctYXV0aG9yIHdwLWFkbWluLXJldmlldy1hdXRob3InLFxuICAgICAgICB2YWx1ZTogYXR0cmlidXRlcy5hdXRob3IsXG4gICAgICAgIG9uQ2hhbmdlOiBmdW5jdGlvbiBvbkNoYW5nZSh2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiBzZXRBdHRyaWJ1dGVzKHsgYXV0aG9yOiB2YWx1ZSB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgdGFnTmFtZTogJ3AnLFxuICAgICAgICBwbGFjZWhvbGRlcjogJ1JldmlldyBhdXRob3InXG4gICAgICB9KVxuICAgICk7XG4gIH0sXG5cbiAgLy8gV2UgcmV0dXJuIG51bGwgc2luY2Ugd2UncmUgdXNpbmcgZHltYW5pYyBibG9ja3NcbiAgc2F2ZTogZnVuY3Rpb24gc2F2ZShwcm9wcykge1xuICAgIHJldHVybiBudWxsO1xuICB9XG5cbn0pO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrLXJldmlld3MtbGlzdC9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///1\n");

/***/ }),
/* 2 */
/*!********************************************!*\
  !*** ./src/block-reviews-list/editor.scss ***!
  \********************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay1yZXZpZXdzLWxpc3QvZWRpdG9yLnNjc3M/M2JjNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vc3JjL2Jsb2NrLXJldmlld3MtbGlzdC9lZGl0b3Iuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///2\n");

/***/ }),
/* 3 */
/*!*******************************************!*\
  !*** ./src/block-reviews-list/style.scss ***!
  \*******************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay1yZXZpZXdzLWxpc3Qvc3R5bGUuc2Nzcz8yM2EwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2stcmV2aWV3cy1saXN0L3N0eWxlLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///3\n");

/***/ }),
/* 4 */
/*!*******************************************!*\
  !*** ./src/block-reviews-slider/block.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss__ = __webpack_require__(/*! ./editor.scss */ 5);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__editor_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__editor_scss__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss__ = __webpack_require__(/*! ./style.scss */ 6);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__style_scss___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__style_scss__);\n\n//  Import CSS.\n\n\n\nvar __ = wp.i18n.__; // Import __() from wp.i18n\n\nvar registerBlockType = wp.blocks.registerBlockType; // Import registerBlockType() from wp.blocks\n\nvar RichText = wp.editor.RichText;\n\n\nregisterBlockType('cgb/block-en-reviews', {\n  // Block name. Block names must be string that contains a namespace prefix. Example: my-plugin/my-custom-block.\n  title: __('en-reviews'), // Block title.\n  icon: 'shield', // Block icon from Dashicons → https://developer.wordpress.org/resource/dashicons/.\n  category: 'common', // Block category — Group blocks together based on common traits E.g. common, formatting, layout widgets, embed.\n  keywords: [__('en-reviews'), __('wit-reviews'), __('reviews')],\n\n  // Enable or disable support for low-level features\n  supports: {\n    // Turn off ability to edit HTML of block content\n    html: true\n  },\n\n  // Set up data model for our review block\n  attributes: {\n    title: {\n      type: 'string',\n      selector: 'js-review-title'\n    },\n    review: {\n      type: 'string',\n      selector: 'js-review-content',\n      multiline: 'p'\n    },\n    author: {\n      type: 'string',\n      selector: 'js-review-author'\n    }\n  },\n\n  // The UI for the WordPress editor\n  edit: function edit(props) {\n    // Pull out the props we'll use\n    var attributes = props.attributes,\n        className = props.className,\n        setAttributes = props.setAttributes;\n\n\n    return wp.element.createElement(\n      'div',\n      { className: className },\n      wp.element.createElement(RichText, {\n        className: 'js-review-title wp-admin-review-title',\n        value: attributes.title,\n        onChange: function onChange(value) {\n          return setAttributes({ title: value });\n        },\n        tagName: 'h3',\n        placeholder: 'Review title'\n      }),\n      wp.element.createElement(RichText, {\n        className: 'js-review-content wp-admin-review-content',\n        value: attributes.review,\n        onChange: function onChange(value) {\n          return setAttributes({ review: value });\n        },\n        tagName: 'p',\n        placeholder: 'Review content',\n        multiline: 'p'\n      }),\n      wp.element.createElement(RichText, {\n        className: 'js-review-author wp-admin-review-author',\n        value: attributes.author,\n        onChange: function onChange(value) {\n          return setAttributes({ author: value });\n        },\n        tagName: 'p',\n        placeholder: 'Review author'\n      })\n    );\n  },\n\n  // We return null since we're using dymanic blocks\n  save: function save(props) {\n    return null;\n  }\n\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay1yZXZpZXdzLXNsaWRlci9ibG9jay5qcz9jZGQwIl0sInNvdXJjZXNDb250ZW50IjpbIlxuLy8gIEltcG9ydCBDU1MuXG5pbXBvcnQgJy4vZWRpdG9yLnNjc3MnO1xuaW1wb3J0ICcuL3N0eWxlLnNjc3MnO1xuXG52YXIgX18gPSB3cC5pMThuLl9fOyAvLyBJbXBvcnQgX18oKSBmcm9tIHdwLmkxOG5cblxudmFyIHJlZ2lzdGVyQmxvY2tUeXBlID0gd3AuYmxvY2tzLnJlZ2lzdGVyQmxvY2tUeXBlOyAvLyBJbXBvcnQgcmVnaXN0ZXJCbG9ja1R5cGUoKSBmcm9tIHdwLmJsb2Nrc1xuXG52YXIgUmljaFRleHQgPSB3cC5lZGl0b3IuUmljaFRleHQ7XG5cblxucmVnaXN0ZXJCbG9ja1R5cGUoJ2NnYi9ibG9jay1lbi1yZXZpZXdzJywge1xuICAvLyBCbG9jayBuYW1lLiBCbG9jayBuYW1lcyBtdXN0IGJlIHN0cmluZyB0aGF0IGNvbnRhaW5zIGEgbmFtZXNwYWNlIHByZWZpeC4gRXhhbXBsZTogbXktcGx1Z2luL215LWN1c3RvbS1ibG9jay5cbiAgdGl0bGU6IF9fKCdlbi1yZXZpZXdzJyksIC8vIEJsb2NrIHRpdGxlLlxuICBpY29uOiAnc2hpZWxkJywgLy8gQmxvY2sgaWNvbiBmcm9tIERhc2hpY29ucyDihpIgaHR0cHM6Ly9kZXZlbG9wZXIud29yZHByZXNzLm9yZy9yZXNvdXJjZS9kYXNoaWNvbnMvLlxuICBjYXRlZ29yeTogJ2NvbW1vbicsIC8vIEJsb2NrIGNhdGVnb3J5IOKAlCBHcm91cCBibG9ja3MgdG9nZXRoZXIgYmFzZWQgb24gY29tbW9uIHRyYWl0cyBFLmcuIGNvbW1vbiwgZm9ybWF0dGluZywgbGF5b3V0IHdpZGdldHMsIGVtYmVkLlxuICBrZXl3b3JkczogW19fKCdlbi1yZXZpZXdzJyksIF9fKCd3aXQtcmV2aWV3cycpLCBfXygncmV2aWV3cycpXSxcblxuICAvLyBFbmFibGUgb3IgZGlzYWJsZSBzdXBwb3J0IGZvciBsb3ctbGV2ZWwgZmVhdHVyZXNcbiAgc3VwcG9ydHM6IHtcbiAgICAvLyBUdXJuIG9mZiBhYmlsaXR5IHRvIGVkaXQgSFRNTCBvZiBibG9jayBjb250ZW50XG4gICAgaHRtbDogdHJ1ZVxuICB9LFxuXG4gIC8vIFNldCB1cCBkYXRhIG1vZGVsIGZvciBvdXIgcmV2aWV3IGJsb2NrXG4gIGF0dHJpYnV0ZXM6IHtcbiAgICB0aXRsZToge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBzZWxlY3RvcjogJ2pzLXJldmlldy10aXRsZSdcbiAgICB9LFxuICAgIHJldmlldzoge1xuICAgICAgdHlwZTogJ3N0cmluZycsXG4gICAgICBzZWxlY3RvcjogJ2pzLXJldmlldy1jb250ZW50JyxcbiAgICAgIG11bHRpbGluZTogJ3AnXG4gICAgfSxcbiAgICBhdXRob3I6IHtcbiAgICAgIHR5cGU6ICdzdHJpbmcnLFxuICAgICAgc2VsZWN0b3I6ICdqcy1yZXZpZXctYXV0aG9yJ1xuICAgIH1cbiAgfSxcblxuICAvLyBUaGUgVUkgZm9yIHRoZSBXb3JkUHJlc3MgZWRpdG9yXG4gIGVkaXQ6IGZ1bmN0aW9uIGVkaXQocHJvcHMpIHtcbiAgICAvLyBQdWxsIG91dCB0aGUgcHJvcHMgd2UnbGwgdXNlXG4gICAgdmFyIGF0dHJpYnV0ZXMgPSBwcm9wcy5hdHRyaWJ1dGVzLFxuICAgICAgICBjbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICAgIHNldEF0dHJpYnV0ZXMgPSBwcm9wcy5zZXRBdHRyaWJ1dGVzO1xuXG5cbiAgICByZXR1cm4gd3AuZWxlbWVudC5jcmVhdGVFbGVtZW50KFxuICAgICAgJ2RpdicsXG4gICAgICB7IGNsYXNzTmFtZTogY2xhc3NOYW1lIH0sXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnanMtcmV2aWV3LXRpdGxlIHdwLWFkbWluLXJldmlldy10aXRsZScsXG4gICAgICAgIHZhbHVlOiBhdHRyaWJ1dGVzLnRpdGxlLFxuICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7IHRpdGxlOiB2YWx1ZSB9KTtcbiAgICAgICAgfSxcbiAgICAgICAgdGFnTmFtZTogJ2gzJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdSZXZpZXcgdGl0bGUnXG4gICAgICB9KSxcbiAgICAgIHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudChSaWNoVGV4dCwge1xuICAgICAgICBjbGFzc05hbWU6ICdqcy1yZXZpZXctY29udGVudCB3cC1hZG1pbi1yZXZpZXctY29udGVudCcsXG4gICAgICAgIHZhbHVlOiBhdHRyaWJ1dGVzLnJldmlldyxcbiAgICAgICAgb25DaGFuZ2U6IGZ1bmN0aW9uIG9uQ2hhbmdlKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHNldEF0dHJpYnV0ZXMoeyByZXZpZXc6IHZhbHVlIH0pO1xuICAgICAgICB9LFxuICAgICAgICB0YWdOYW1lOiAncCcsXG4gICAgICAgIHBsYWNlaG9sZGVyOiAnUmV2aWV3IGNvbnRlbnQnLFxuICAgICAgICBtdWx0aWxpbmU6ICdwJ1xuICAgICAgfSksXG4gICAgICB3cC5lbGVtZW50LmNyZWF0ZUVsZW1lbnQoUmljaFRleHQsIHtcbiAgICAgICAgY2xhc3NOYW1lOiAnanMtcmV2aWV3LWF1dGhvciB3cC1hZG1pbi1yZXZpZXctYXV0aG9yJyxcbiAgICAgICAgdmFsdWU6IGF0dHJpYnV0ZXMuYXV0aG9yLFxuICAgICAgICBvbkNoYW5nZTogZnVuY3Rpb24gb25DaGFuZ2UodmFsdWUpIHtcbiAgICAgICAgICByZXR1cm4gc2V0QXR0cmlidXRlcyh7IGF1dGhvcjogdmFsdWUgfSk7XG4gICAgICAgIH0sXG4gICAgICAgIHRhZ05hbWU6ICdwJyxcbiAgICAgICAgcGxhY2Vob2xkZXI6ICdSZXZpZXcgYXV0aG9yJ1xuICAgICAgfSlcbiAgICApO1xuICB9LFxuXG4gIC8vIFdlIHJldHVybiBudWxsIHNpbmNlIHdlJ3JlIHVzaW5nIGR5bWFuaWMgYmxvY2tzXG4gIHNhdmU6IGZ1bmN0aW9uIHNhdmUocHJvcHMpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG59KTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay1yZXZpZXdzLXNsaWRlci9ibG9jay5qc1xuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///4\n");

/***/ }),
/* 5 */
/*!**********************************************!*\
  !*** ./src/block-reviews-slider/editor.scss ***!
  \**********************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNS5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay1yZXZpZXdzLXNsaWRlci9lZGl0b3Iuc2Nzcz9hZDlmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9zcmMvYmxvY2stcmV2aWV3cy1zbGlkZXIvZWRpdG9yLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///5\n");

/***/ }),
/* 6 */
/*!*********************************************!*\
  !*** ./src/block-reviews-slider/style.scss ***!
  \*********************************************/
/*! dynamic exports provided */
/***/ (function(module, exports) {

eval("// removed by extract-text-webpack-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNi5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9jay1yZXZpZXdzLXNsaWRlci9zdHlsZS5zY3NzPzljMTkiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL3NyYy9ibG9jay1yZXZpZXdzLXNsaWRlci9zdHlsZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJtYXBwaW5ncyI6IkFBQUEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///6\n");

/***/ })
/******/ ]);