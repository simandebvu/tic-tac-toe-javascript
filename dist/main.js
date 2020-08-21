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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/app.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/styles/style.css":
/*!***************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/styles/style.css ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _fonts_RockSalt_Regular_ttf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../fonts/RockSalt-Regular.ttf */ \"./src/assets/fonts/RockSalt-Regular.ttf\");\n// Imports\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_fonts_RockSalt_Regular_ttf__WEBPACK_IMPORTED_MODULE_2__[\"default\"]);\n// Module\n___CSS_LOADER_EXPORT___.push([module.i, \"* {\\n  margin: 0;\\n  padding: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  display: flex;\\n  justify-content: center;\\n  position: relative;\\n}\\n\\n.container {\\n  margin: auto;\\n  width: 50%;\\n}\\n\\n@font-face {\\n  font-family: \\\"RockSalt-Regular\\\";\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"truetype\\\");\\n  font-weight: 600;\\n  font-style: normal;\\n}\\n\\n.bg-title {\\n  font-family: \\\"Roboto\\\", sans-serif;\\n}\\n\\n.sm-title {\\n  font-size: 3rem;\\n  font-family: \\\"Poppins\\\", sans-serif;\\n}\\n\\n.message {\\n  font-size: large;\\n}\\n\\n.current-player {\\n  position: absolute;\\n  left: 15%;\\n  font-size: 30px;\\n  margin-top: 10px;\\n}\\n\\n.clickable {\\n  cursor: pointer;\\n}\\n\\n.not-clickable {\\n  cursor: not-allowed;\\n}\\n\\n.noselect {\\n  -webkit-touch-callout: none;\\n  -webkit-user-select: none;\\n  -khtml-user-select: none;\\n  -moz-user-select: none;\\n  -ms-user-select: none;\\n  user-select: none;\\n}\\n\\n.btn-reset {\\n  margin: auto;\\n  padding: 7px;\\n  color: white;\\n  width: 10%;\\n  font-size: 20px;\\n  border: none;\\n  float: right;\\n  background: #3949ab;\\n  border-radius: 5px;\\n  position: absolute;\\n  top: 65%;\\n  right: 15%;\\n}\\n\\n.btn-restart {\\n  margin: auto;\\n  padding: 7px;\\n  color: white;\\n  width: 10%;\\n  font-size: 20px;\\n  border: none;\\n  float: right;\\n  background: #9b0000;\\n  border-radius: 5px;\\n  position: absolute;\\n  top: 55%;\\n  right: 15%;\\n}\\n\\n.game-template {\\n  margin: auto;\\n  width: 75%;\\n  margin-top: 20%;\\n  background: #000;\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  grid-template-rows: repeat(3, 1fr);\\n  grid-gap: 5px;\\n}\\n\\n.game-cell {\\n  height: 125px;\\n  background: #fff;\\n  font-size: 55px;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  font-family: \\\"RockSalt-Regular\\\", Arial, Helvetica, sans-serif;\\n}\\n\\n.winning-message {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  right: 0;\\n  bottom: 0;\\n  background-color: rgba(0, 0, 0, 0.9);\\n  display: none;\\n  justify-content: center;\\n  align-items: center;\\n  font-size: 5rem;\\n}\\n\\n.winning-message.show {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.btn-win-reset {\\n  background-color: #2979ff;\\n  color: #fff;\\n  font-size: 25px;\\n  padding: 10px;\\n  border-radius: 5px;\\n  border: none;\\n}\\n\\n.winning-message-text {\\n  color: #fff;\\n}\\n\\n.modal {\\n  position: fixed;\\n  left: 0;\\n  top: 0;\\n  width: 100%;\\n  height: 100%;\\n  background-color: rgba(0, 0, 0, 0.5);\\n  opacity: 0;\\n  visibility: hidden;\\n  transform: scale(1.1);\\n  transition: visibility 0s linear 0.25s, opacity 0.25s 0s, transform 0.25s;\\n}\\n\\n.modal-content {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  background-color: white;\\n  padding: 1rem 1.5rem;\\n  width: 24rem;\\n  border-radius: 0.5rem;\\n}\\n\\n.show-modal {\\n  opacity: 1;\\n  visibility: visible;\\n  transform: scale(1);\\n  transition: visibility 0s linear 0s, opacity 0.25s 0s, transform 0.25s;\\n}\\n\\n.form-game-input {\\n  height: 150px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: space-evenly;\\n}\\n\\n.form-game-input > input {\\n  height: 30px;\\n  border-radius: 7px;\\n  padding: 5px;\\n  border: 0;\\n}\\n\\n.name-input {\\n  height: 30px;\\n  border-radius: 7px;\\n  padding: 5px;\\n  background: #f4f4f4;\\n  border: 0;\\n}\\n\\n.name-submit-button {\\n  background-color: #2979ff;\\n  color: #fff;\\n  border: 0;\\n}\\n\\n#snackbar {\\n  visibility: hidden;\\n  min-width: 250px;\\n  margin-left: -125px;\\n  background-color: #333;\\n  color: #fff;\\n  text-align: center;\\n  border-radius: 2px;\\n  padding: 16px;\\n  position: fixed;\\n  z-index: 1;\\n  left: 50%;\\n  bottom: 30px;\\n}\\n\\n#snackbar.show {\\n  visibility: visible;\\n  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;\\n  animation: fadein 0.5s, fadeout 0.5s 2.5s;\\n}\\n\\n@-webkit-keyframes fadein {\\n  from {\\n    bottom: 0;\\n    opacity: 0;\\n  }\\n\\n  to {\\n    bottom: 30px;\\n    opacity: 1;\\n  }\\n}\\n\\n@keyframes fadein {\\n  from {\\n    bottom: 0;\\n    opacity: 0;\\n  }\\n\\n  to {\\n    bottom: 30px;\\n    opacity: 1;\\n  }\\n}\\n\\n@-webkit-keyframes fadeout {\\n  from {\\n    bottom: 30px;\\n    opacity: 1;\\n  }\\n\\n  to {\\n    bottom: 0;\\n    opacity: 0;\\n  }\\n}\\n\\n@keyframes fadeout {\\n  from {\\n    bottom: 30px;\\n    opacity: 1;\\n  }\\n\\n  to {\\n    bottom: 0;\\n    opacity: 0;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack:///./src/assets/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _assets_styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./assets/styles/style.css */ \"./src/assets/styles/style.css\");\n/* harmony import */ var _assets_styles_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_assets_styles_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _modules_gameBoard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/gameBoard */ \"./src/modules/gameBoard.js\");\n/* harmony import */ var _modules_gameLogic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/gameLogic */ \"./src/modules/gameLogic.js\");\n/* harmony import */ var _modules_gamePlayer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/gamePlayer */ \"./src/modules/gamePlayer.js\");\n/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/display */ \"./src/modules/display.js\");\n\n\n\n\n\n\n// IIFE\n// eslint-disable-next-line no-unused-vars\nconst startApp = (() => {\n  let playerO = null;\n  let playerX = null;\n  let currentPlayer = null;\n  _modules_display__WEBPACK_IMPORTED_MODULE_4__[\"default\"].showPlayerModal();\n  _modules_gameLogic__WEBPACK_IMPORTED_MODULE_2__[\"default\"].initRestartButton();\n  const { getGameArray, updateGameArray } = _modules_gameBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"];\n  const cellDivs = document.querySelectorAll('.game-cell');\n  const gameForm = document.querySelector('form');\n  gameForm.onsubmit = ((e) => {\n    e.preventDefault();\n    const { player1, player2 } = e.target.elements;\n    playerX = Object(_modules_gamePlayer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(player1.value, 'X');\n    playerO = Object(_modules_gamePlayer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(player2.value, 'O');\n    currentPlayer = playerX;\n    _modules_display__WEBPACK_IMPORTED_MODULE_4__[\"default\"].hidePlayerModal();\n    _modules_display__WEBPACK_IMPORTED_MODULE_4__[\"default\"].showCurrentPlayer(`${currentPlayer.getName()} - ${currentPlayer.getSymbol()} `);\n  });\n\n  _modules_gameLogic__WEBPACK_IMPORTED_MODULE_2__[\"default\"].initResetButton();\n\n  const switchUser = () => {\n    currentPlayer = currentPlayer === playerX ? playerO : playerX;\n  };\n\n  cellDivs.forEach(e => {\n    e.onclick = () => {\n      const invalid = _modules_gameBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].validateMove(e.getAttribute('index'));\n      if (!invalid) {\n        updateGameArray(e.getAttribute('index'), currentPlayer.getSymbol());\n        const winner = _modules_gameLogic__WEBPACK_IMPORTED_MODULE_2__[\"default\"].checkWinner(currentPlayer.getSymbol(), getGameArray());\n        if (winner) {\n          const winnersName = currentPlayer.getName();\n          _modules_gameLogic__WEBPACK_IMPORTED_MODULE_2__[\"default\"].endGame(winnersName);\n        } else if (_modules_gameLogic__WEBPACK_IMPORTED_MODULE_2__[\"default\"].checkDraw(_modules_gameBoard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getGameArray())) {\n          _modules_gameLogic__WEBPACK_IMPORTED_MODULE_2__[\"default\"].endGame('Everyone');\n        } else {\n          switchUser();\n        }\n      } else {\n        _modules_display__WEBPACK_IMPORTED_MODULE_4__[\"default\"].showSnackbar();\n      }\n      _modules_display__WEBPACK_IMPORTED_MODULE_4__[\"default\"].showCurrentPlayer(`${currentPlayer.getName()} - ${currentPlayer.getSymbol()} `);\n    };\n  });\n  return { getGameArray };\n})();\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/assets/fonts/RockSalt-Regular.ttf":
/*!***********************************************!*\
  !*** ./src/assets/fonts/RockSalt-Regular.ttf ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"7421638ad8e0f98e975292e9c11a6fae.ttf\");\n\n//# sourceURL=webpack:///./src/assets/fonts/RockSalt-Regular.ttf?");

/***/ }),

/***/ "./src/assets/styles/style.css":
/*!*************************************!*\
  !*** ./src/assets/styles/style.css ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/assets/styles/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/assets/styles/style.css?");

/***/ }),

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst appDisplay = (() => {\n  const updateGameBoard = (index, value) => {\n    const cellDivs = document.querySelectorAll('.game-cell');\n    cellDivs[index].classList.remove('clickable');\n    cellDivs[index].classList.add('not-clickable');\n    cellDivs[index].innerHTML = value;\n  };\n\n  const loadBlankBoard = () => {\n    const cellDivs = document.querySelectorAll('.game-cell');\n    cellDivs.forEach(cellDiv => {\n      cellDiv.innerHTML = null;\n      cellDiv.classList.add('clickable');\n      cellDiv.classList.remove('not-clickable');\n    });\n  };\n\n  const insertUsernameModal = () => {\n    const body = document.querySelector('.container');\n    const modalDiv = document.createElement('div');\n    modalDiv.classList.add('modal-container');\n    modalDiv.classList.add('modal');\n    const modalContentDiv = document.createElement('div');\n    modalContentDiv.classList.add('modal-content');\n\n\n    const modalForm = document.createElement('form');\n    modalForm.classList.add('form-game-input');\n    const inputPlayer1 = document.createElement('input');\n    inputPlayer1.setAttribute('type', 'text');\n    inputPlayer1.setAttribute('placeholder', 'Player 1\\'s name - Using X');\n    inputPlayer1.classList.add('name-input');\n    inputPlayer1.required = true;\n    inputPlayer1.setAttribute('id', 'player1');\n    inputPlayer1.setAttribute('name', 'player1');\n    inputPlayer1.setAttribute('minlength', 2);\n    inputPlayer1.setAttribute('maxlength', 10);\n    modalForm.appendChild(inputPlayer1);\n    const inputPlayer2 = document.createElement('input');\n    inputPlayer2.setAttribute('type', 'text');\n    inputPlayer2.setAttribute('placeholder', 'Player 2\\'s name - Using O');\n    inputPlayer2.classList.add('name-input');\n    inputPlayer2.required = true;\n    inputPlayer2.setAttribute('id', 'player2');\n    inputPlayer2.setAttribute('name', 'player2');\n    inputPlayer2.setAttribute('minlength', 2);\n    inputPlayer2.setAttribute('maxlength', 10);\n    modalForm.appendChild(inputPlayer2);\n    const modalSubmit = document.createElement('input');\n    modalSubmit.setAttribute('type', 'submit');\n    modalSubmit.setAttribute('value', 'Play!');\n    modalSubmit.classList.add('name-submit-button');\n    modalForm.appendChild(modalSubmit);\n    modalContentDiv.appendChild(modalForm);\n    modalDiv.appendChild(modalContentDiv);\n    body.appendChild(modalDiv);\n    return modalForm;\n  };\n\n  const showSnackbar = () => {\n    const snackbar = document.querySelector('#snackbar');\n    snackbar.textContent = 'Invalid move!';\n    snackbar.classList.add('show');\n    setTimeout(() => { snackbar.className = snackbar.className.replace('show', ''); }, 3000);\n  };\n\n  const showPlayerModal = () => {\n    const form = insertUsernameModal();\n    const modal = document.querySelector('.modal');\n    modal.classList.toggle('show-modal');\n    return form;\n  };\n\n  const showWinner = (message) => {\n    const body = document.querySelector('body');\n    const containerDiv = document.querySelector('.winning-message');\n    containerDiv.innerHTML = null;\n    const messageDiv = document.createElement('div');\n    messageDiv.classList.add('winning-message-text');\n    messageDiv.innerHTML = message;\n    containerDiv.appendChild(messageDiv);\n    const button = document.createElement('button');\n    button.classList.add('btn-win-reset');\n    button.textContent = 'Okay! Restart the game please !';\n\n    containerDiv.appendChild(button);\n    containerDiv.classList.toggle('show');\n\n    body.appendChild(containerDiv);\n  };\n\n  const showCurrentPlayer = (message) => {\n    const nameDiv = document.querySelector('.current-player');\n    nameDiv.innerHTML = null;\n    const nameText = document.createElement('h1');\n    nameText.innerHTML = message;\n    nameDiv.appendChild(nameText);\n  };\n\n  const hidePlayerModal = () => {\n    const modalDiv = document.querySelector('.modal-container');\n    modalDiv.classList.remove('show-modal');\n  };\n\n  return {\n    updateGameBoard,\n    loadBlankBoard,\n    showPlayerModal,\n    showCurrentPlayer,\n    showWinner,\n    showSnackbar,\n    hidePlayerModal,\n  };\n})();\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (appDisplay);\n\n\n//# sourceURL=webpack:///./src/modules/display.js?");

/***/ }),

/***/ "./src/modules/gameBoard.js":
/*!**********************************!*\
  !*** ./src/modules/gameBoard.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./display */ \"./src/modules/display.js\");\n\n\nconst gameBoard = (() => {\n  const gameArray = [\n    '', '', '',\n    '', '', '',\n    '', '', '',\n  ];\n  const getGameArray = () => gameArray;\n\n  const resetBoard = () => {\n    gameArray.forEach((item, idx, arr) => {\n      arr[idx] = '';\n    });\n  };\n\n  const validateMove = (idx) => gameArray[idx].length > 0;\n\n  const updateGameArray = (index, value) => {\n    gameArray[index] = value;\n    _display__WEBPACK_IMPORTED_MODULE_0__[\"default\"].updateGameBoard(index, value);\n  };\n\n  return {\n    resetBoard,\n    getGameArray,\n    updateGameArray,\n    validateMove,\n  };\n})();\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameBoard);\n\n\n//# sourceURL=webpack:///./src/modules/gameBoard.js?");

/***/ }),

/***/ "./src/modules/gameLogic.js":
/*!**********************************!*\
  !*** ./src/modules/gameLogic.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _gameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameBoard */ \"./src/modules/gameBoard.js\");\n/* harmony import */ var _display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./display */ \"./src/modules/display.js\");\n\n\n\nconst gameLogic = (() => {\n  const winCombo = [\n    [0, 1, 2],\n    [3, 4, 5],\n    [6, 7, 8],\n    [0, 3, 6],\n    [1, 4, 7],\n    [2, 5, 8],\n    [0, 4, 8],\n    [2, 4, 6],\n  ];\n\n  const initResetButton = () => {\n    const resetBtn = document.querySelector('.btn-reset');\n    resetBtn.onclick = () => {\n      _gameBoard__WEBPACK_IMPORTED_MODULE_0__[\"default\"].resetBoard();\n      _display__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loadBlankBoard();\n    };\n  };\n\n  const initRestartButton = () => {\n    const b = document.querySelector('.btn-restart');\n    b.onclick = () => {\n      window.location.reload();\n      return false;\n    };\n  };\n\n  const endGame = (message) => {\n    _display__WEBPACK_IMPORTED_MODULE_1__[\"default\"].showWinner(`${message} has won!`);\n    const b = document.querySelector('.btn-win-reset');\n    b.onclick = () => {\n      window.location.reload();\n      return false;\n    };\n  };\n\n  const checkWinner = (symbol, arr) => winCombo.some(c => c.every(idx => arr[idx] === symbol));\n\n  const checkDraw = (gameBoard) => [...gameBoard].every(item => item === 'X' || item === 'O');\n\n  return {\n    initResetButton, checkWinner, checkDraw, initRestartButton, endGame,\n  };\n})();\n/* harmony default export */ __webpack_exports__[\"default\"] = (gameLogic);\n\n\n//# sourceURL=webpack:///./src/modules/gameLogic.js?");

/***/ }),

/***/ "./src/modules/gamePlayer.js":
/*!***********************************!*\
  !*** ./src/modules/gamePlayer.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nconst gamePlayer = (playerName, playerSymbol) => {\n  const getName = () => playerName;\n  const getSymbol = () => playerSymbol;\n  return { getName, getSymbol };\n};\n/* harmony default export */ __webpack_exports__[\"default\"] = (gamePlayer);\n\n//# sourceURL=webpack:///./src/modules/gamePlayer.js?");

/***/ })

/******/ });