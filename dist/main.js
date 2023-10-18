/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, `* {\n  box-sizing: border-box;\n  margin: 0px;\n  padding: 0px;\n}\n\nbody {\n  width: 100vw;\n}\n\n.top-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n.left-side,\n.right-side {\n  display: grid;\n  grid-template-columns: repeat(11, 20px);\n  grid-template-rows: repeat(11, 20px);\n}\n\n.square {\n  width: 20px;\n  height: 20px;\n  border: solid 1px black;\n  cursor: pointer;\n}\n\n.square.has-ship {\n  background-color: black;\n}\n\n.square.has-ship.hit {\n  background-color: red;\n}\n\n.square.no-ship.hit {\n  content: '•';\n  background-color: blue;\n}\n\n.left-side .square.highlight {\n  background-color: gray;\n}\n`, \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship-game/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship-game/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship-game/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/click.ogg":
/*!***********************!*\
  !*** ./src/click.ogg ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"4c194978eccda3f8b3ba664971956199.ogg\");\n\n//# sourceURL=webpack://battleship-game/./src/click.ogg?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship-game/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n  var needLayer = typeof obj.layer !== \"undefined\";\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += \"}\";\n  }\n  if (obj.media) {\n    css += \"}\";\n  }\n  if (obj.supports) {\n    css += \"}\";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === \"undefined\") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship-game/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/GameBoard.js":
/*!**************************!*\
  !*** ./src/GameBoard.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\n\n\nconst GameBoard = () => {\n  let name = '';\n  const boardSize = 10;\n  const board = [];\n  const ships = [];\n  // numbers in array represent the sizes of ships\n  const shipsToPlace = [5, 4, 4, 3, 3, 3, 2, 2, 2, 2];\n  let placementDirection = 'horizontal';\n\n  function initBoard() {\n    let squareId = 0;\n    for (let y = 1; y <= boardSize; y++) {\n      for (let x = 1; x <= boardSize; x++) {\n        board.push({\n          id: squareId,\n          x,\n          y,\n          attacked: false,\n          hasShip: false,\n          shipId: 0,\n        });\n        squareId++;\n      }\n    }\n  }\n  initBoard();\n\n  function setName(str) {\n    name = str;\n  }\n\n  function getSquare(x, y) {\n    for (let i = 0; i < board.length; i++) {\n      if (board[i].x === x && board[i].y === y) {\n        return board[i];\n      }\n    }\n    return null;\n  }\n\n  function changeDirection() {\n    if (placementDirection === 'horizontal') {\n      placementDirection = 'vertical';\n    } else {\n      placementDirection = 'horizontal';\n    }\n    console.log('placement direction switched');\n  }\n\n  function occupySquare(x, y, shipId) {\n    const square = getSquare(x, y);\n    if (square) {\n      square.hasShip = true;\n      square.shipId = shipId;\n    } else {\n      console.log('Error: no square found to occupy');\n    }\n  }\n\n  function checkSquareAroundShip(square) {\n    if (square !== null) {\n      if (square.hasShip) {\n        return false;\n      }\n    }\n    return true;\n  }\n\n  function checkPlacementValidity(size, direction, x, y) {\n    let square;\n    let xOffset = x;\n    let yOffset = y;\n    let isAvailable = true;\n    if (direction === 'horizontal') {\n      for (let i = 0; i < size; i++) {\n        square = getSquare(xOffset, y);\n        if (square === null || square.hasShip) {\n          isAvailable = false;\n        }\n        xOffset++;\n      }\n\n      // check in the front of a ship for other ship\n      xOffset = x;\n      square = getSquare(xOffset - 1, y);\n      if (!checkSquareAroundShip(square)) {\n        return false;\n      }\n      square = getSquare(xOffset - 1, y + 1);\n      if (!checkSquareAroundShip(square)) {\n        return false;\n      }\n      square = getSquare(xOffset - 1, y - 1);\n      if (!checkSquareAroundShip(square)) {\n        return false;\n      }\n\n      // check the sides of the ship for other ships\n      for (let i = 0; i < size; i++) {\n        square = getSquare(xOffset, y + 1);\n        if (!checkSquareAroundShip(square)) {\n          return false;\n        }\n        square = getSquare(xOffset, y - 1);\n        if (!checkSquareAroundShip(square)) {\n          return false;\n        }\n        xOffset++;\n      }\n\n      // check the end of the ship for t=other ships\n      xOffset = x + size;\n      square = getSquare(xOffset, y);\n      if (!checkSquareAroundShip(square)) {\n        return false;\n      }\n      square = getSquare(xOffset, y + 1);\n      if (!checkSquareAroundShip(square)) {\n        return false;\n      }\n      square = getSquare(xOffset, y - 1);\n      if (!checkSquareAroundShip(square)) {\n        return false;\n      }\n    } else {\n      // For the vertical position\n      for (let i = 0; i < size; i++) {\n        square = getSquare(x, yOffset);\n        if (square === null || square.hasShip) {\n          isAvailable = false;\n        }\n        yOffset++;\n      }\n\n      // check in the front of a ship for other ship\n      yOffset = y;\n      square = getSquare(x, yOffset - 1);\n      if (!checkSquareAroundShip(square)) {\n        return false;\n      }\n      square = getSquare(x + 1, yOffset - 1);\n      if (!checkSquareAroundShip(square)) {\n        return false;\n      }\n      square = getSquare(x - 1, yOffset - 1);\n      if (!checkSquareAroundShip(square)) {\n        return false;\n      }\n\n      // check the sides of the ship for other ships\n      for (let i = 0; i < size; i++) {\n        square = getSquare(x + 1, yOffset);\n        if (!checkSquareAroundShip(square)) {\n          return false;\n        }\n        square = getSquare(x - 1, yOffset);\n        if (!checkSquareAroundShip(square)) {\n          return false;\n        }\n        yOffset++;\n      }\n\n      // check the end of the ship for the other ships\n      yOffset = y + size;\n      square = getSquare(x, yOffset);\n      if (!checkSquareAroundShip(square)) {\n        return false;\n      }\n      square = getSquare(x + 1, yOffset);\n      if (!checkSquareAroundShip(square)) {\n        return false;\n      }\n      square = getSquare(x - 1, yOffset);\n      if (!checkSquareAroundShip(square)) {\n        return false;\n      }\n    }\n    return isAvailable;\n  }\n\n  function addShipToBoard(ship, x, y, direction) {\n    if (direction === 'horizontal') {\n      for (let i = 0; i < ship.length; i++) {\n        occupySquare(x, y, ship.id);\n        x++;\n      }\n    } else {\n      for (let i = 0; i < ship.length; i++) {\n        occupySquare(x, y, ship.id);\n        y++;\n      }\n    }\n  }\n\n  function placeShip(x, y) {\n    if (shipsToPlace.length === 0) {\n      console.log('Error: Out of ships to place');\n      return;\n    }\n    const size = shipsToPlace[0];\n    if (checkPlacementValidity(size, placementDirection, x, y)) {\n      const ship = (0,_Ship__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(size);\n      console.log('valid move');\n      console.log('placing ship at ', x, y);\n      shipsToPlace.shift();\n      addShipToBoard(ship, x, y, placementDirection);\n      ships.push(ship);\n    } else {\n      console.log('invalid move');\n      return;\n    }\n    console.log('ship placed successfully. size:', size);\n  }\n\n  function checkIfAllSunk() {\n    for (let i = 0; i < ships.length; i++) {\n      const ship = ships[i];\n      if (!ship.sunk) {\n        return false;\n      }\n    }\n    return true;\n  }\n\n  function attackSquare(x, y) {\n    const square = getSquare(x, y);\n    square.attacked = true;\n    if (square && square.hasShip) {\n      // find the ship in this place and hit it\n      // const shipId = event.target.className.split('shipId:')[1];\n      ships.forEach((ship) => {\n        if (ship.id === square.shipId) {\n          ship.hit();\n          console.log('Ship hit!');\n          console.log(ship);\n        }\n      });\n    }\n  }\n\n  return {\n    board,\n    placeShip,\n    setName,\n    boardSize,\n    shipsToPlace,\n    changeDirection,\n    checkIfAllSunk,\n    ships,\n    attackSquare,\n    getSquare,\n    placementDirection,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (GameBoard);\n\n\n//# sourceURL=webpack://battleship-game/./src/GameBoard.js?");

/***/ }),

/***/ "./src/Ship.js":
/*!*********************!*\
  !*** ./src/Ship.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _shipIds__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shipIds */ \"./src/shipIds.js\");\n\n\nconst Ship = (length) => {\n  // this if statement makes sure we get an appropriate ship length\n  if (!Number.isInteger(length) || length > 5 || length <= 0) {\n    console.log(`Error: Can't create ship. Length is ${length}`);\n  }\n  const id = _shipIds__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getNewId();\n  const hits = 0;\n  const sunk = false;\n  function hit() {\n    this.hits += 1;\n    if (this.hits === length) {\n      this.sunk = true;\n    }\n  }\n  return {\n    hits,\n    length,\n    sunk,\n    hit,\n    orientation: 'horizontal',\n    id,\n  };\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);\n\n\n//# sourceURL=webpack://battleship-game/./src/Ship.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _Ship__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Ship */ \"./src/Ship.js\");\n/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GameBoard */ \"./src/GameBoard.js\");\n/* harmony import */ var _uiController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./uiController */ \"./src/uiController.js\");\n\n\n\n\n\n// Game logic\nconst gameStarted = true;\nconst myBoard = (0,_GameBoard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nmyBoard.setName('my');\n\nconst enemyBoard = (0,_GameBoard__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nenemyBoard.setName('enemy');\n\n_uiController__WEBPACK_IMPORTED_MODULE_3__[\"default\"].drawBoard(myBoard, 'left');\n_uiController__WEBPACK_IMPORTED_MODULE_3__[\"default\"].drawBoard(enemyBoard, 'right');\n\nsetRandomShips(enemyBoard);\n_uiController__WEBPACK_IMPORTED_MODULE_3__[\"default\"].clearBoard('right');\n_uiController__WEBPACK_IMPORTED_MODULE_3__[\"default\"].drawBoard(enemyBoard, 'right');\n\nconst mySquares = document.querySelectorAll('.left-side .square');\nmySquares.forEach((square) => square.addEventListener('click', placeShip));\nmySquares.forEach((square) =>\n  square.addEventListener('mouseover', highlightShipPlacement)\n);\n\ndocument.addEventListener('keydown', (e) => {\n  if (e.code === 'Space') {\n    myBoard.changeDirection();\n  }\n});\n\nfunction removeEventListenersFromMyBoard() {\n  const mySquares = document.querySelectorAll('.left-side .square');\n  mySquares.forEach((square) => square.removeEventListener('click', placeShip));\n  mySquares.forEach((square) =>\n    square.removeEventListener('mouseover', highlightShipPlacement)\n  );\n  console.log('removed listeners');\n}\n\nfunction refreshListeners() {\n  const enemySquares = document.querySelectorAll('.right-side .square');\n  removeEventListenersFromMyBoard();\n  const mySquares = document.querySelectorAll('.left-side .square');\n  mySquares.forEach((square) => square.addEventListener('click', placeShip));\n  mySquares.forEach((square) =>\n    square.addEventListener('mouseover', highlightShipPlacement)\n  );\n  console.log('added listeners');\n}\n\nfunction placeShip(e) {\n  const classes = e.target.className;\n  const tempArr = classes.split(' ');\n  const xString = tempArr[2];\n  const yString = tempArr[3];\n  const x = +xString.split('-')[1];\n  const y = +yString.split('-')[1];\n  myBoard.placeShip(x, y);\n  _uiController__WEBPACK_IMPORTED_MODULE_3__[\"default\"].clearBoard('left');\n  _uiController__WEBPACK_IMPORTED_MODULE_3__[\"default\"].drawBoard(myBoard, 'left');\n  console.log('clicked on:', x, y);\n  if (myBoard.shipsToPlace.length === 0) {\n    removeEventListenersFromMyBoard();\n    console.log('game start');\n    startGame();\n    return;\n  }\n  refreshListeners();\n}\n\nfunction highlightShipPlacement(e) {\n  console.log('event tracking active');\n  const nextShipArr = myBoard.shipsToPlace;\n  const shipSize = nextShipArr[0];\n  const elements = document.querySelectorAll('.left-side .square');\n  elements.forEach((el) => {\n    el.classList.remove('highlight');\n  });\n  e.target.classList.add('highlight');\n  if (myBoard.placementDirection === 'horizontal') {\n    const x = e.target.className.split(' ')[2].split('-')[1];\n    const y = e.target.className.split(' ')[3].split('-')[1];\n    for (let i = 0; i < shipSize; i++) {\n      if (x && y) {\n        const query = `x-${x}`;\n        console.log(`requsting ${query}`);\n        const square = document.querySelector(query);\n        console.log(square);\n      }\n    }\n  }\n}\n\nfunction randomInt(max) {\n  // from 1 to max including max\n  return Math.floor(Math.random() * max) + 1;\n}\n\nfunction setRandomShips(board) {\n  let i = 0;\n  while (i < 10000) {\n    if (board.shipsToPlace.length === 0) {\n      break;\n    }\n    board.changeDirection();\n    const randX = randomInt(10);\n    const randY = randomInt(10);\n    board.placeShip(randX, randY);\n    console.log('itaration: ', i);\n    console.log(board.shipsToPlace.length);\n    i++;\n  }\n}\n\nfunction addListenersToEnemyBoard() {\n  const enemySquares = document.querySelectorAll('.right-side .square');\n  enemySquares.forEach((square) =>\n    square.addEventListener('click', attackEnemy)\n  );\n  enemySquares.forEach((square) =>\n    square.addEventListener('mouseover', highlightAttack)\n  );\n}\n\nfunction removeListenersFromEnemyBoard() {\n  const enemySquares = document.querySelectorAll('.right-side .square');\n  enemySquares.forEach((square) =>\n    square.removeEventListener('click', attackEnemy)\n  );\n  enemySquares.forEach((square) =>\n    square.removeEventListener('mouseover', highlightAttack)\n  );\n}\n\nfunction highlightAttack() {\n  console.log('enemy board tracking mouse');\n}\n\nfunction attackEnemy(e) {\n  _uiController__WEBPACK_IMPORTED_MODULE_3__[\"default\"].playClick();\n  const arr = e.target.className.split(' ');\n  const x = +arr[2].split('-')[1];\n  const y = +arr[3].split('-')[1];\n  enemyBoard.attackSquare(x, y);\n  const square = enemyBoard.getSquare(x, y);\n  _uiController__WEBPACK_IMPORTED_MODULE_3__[\"default\"].hitSquare(square, 'right');\n  disableSquareListener(square, 'right');\n  checkForGameOver();\n  console.log('enemy attacked at: ', x, ' and ', y);\n  if (!square.hasShip) {\n    getAttacked();\n  }\n}\n\nfunction disableSquareListener(square, side) {\n  let queryClass;\n  if (side === 'right') {\n    queryClass = `.right-side .id${square.id}`;\n  } else {\n    queryClass = `.left-side .id${square.id}`;\n  }\n  const el = document.querySelector(queryClass);\n  el.removeEventListener('click', attackEnemy);\n  el.removeEventListener('mouseover', highlightAttack);\n}\n\nfunction getAttacked(xCoord, yCoord) {\n  let x;\n  let y;\n  let square;\n  let i = 0;\n  while (i < 100000) {\n    x = xCoord || randomInt(10);\n    y = yCoord || randomInt(10);\n    square = myBoard.getSquare(x, y);\n    console.log(square.attacked);\n    if (!square.attacked) {\n      break;\n    }\n    xCoord = null;\n    yCoord = null;\n    i++;\n  }\n  myBoard.attackSquare(x, y);\n  _uiController__WEBPACK_IMPORTED_MODULE_3__[\"default\"].hitSquare(square, 'left');\n  disableSquareListener(square, 'left');\n  checkForGameOver();\n  // this is where enemy attacks again if it was a hit;\n  // it will attempt to hit nearby\n  if (square.hasShip) {\n    if (randomInt(2) - 1) {\n      randomInt(2) - 1 ? getAttacked(x + 1, y) : getAttacked(x, y + 1);\n    } else {\n      randomInt(2) - 1 ? getAttacked(x - 1, y) : getAttacked(x, y - 1);\n    }\n  }\n}\n\nfunction checkForGameOver() {\n  if (myBoard.checkIfAllSunk()) {\n    removeListenersFromEnemyBoard();\n    _uiController__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayGameOver('You lose!');\n  }\n  if (enemyBoard.checkIfAllSunk()) {\n    removeListenersFromEnemyBoard();\n    _uiController__WEBPACK_IMPORTED_MODULE_3__[\"default\"].displayGameOver('You win!');\n  }\n}\n\nfunction startGame() {\n  addListenersToEnemyBoard();\n}\n\n\n//# sourceURL=webpack://battleship-game/./src/index.js?");

/***/ }),

/***/ "./src/shipIds.js":
/*!************************!*\
  !*** ./src/shipIds.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst Id = (() => {\n  const usedId = [];\n\n  function getRandomInt(max) {\n    return Math.floor(Math.random() * max) + 1;\n  }\n\n  function getNewId() {\n    let id = String(getRandomInt(1000));\n    while (usedId.includes(id)) {\n      id = String(getRandomInt(1000));\n    }\n    usedId.push(id);\n    return id;\n  }\n  return {\n    getNewId,\n  };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Id);\n\n\n//# sourceURL=webpack://battleship-game/./src/shipIds.js?");

/***/ }),

/***/ "./src/uiController.js":
/*!*****************************!*\
  !*** ./src/uiController.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _GameBoard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./GameBoard */ \"./src/GameBoard.js\");\n/* harmony import */ var _click_ogg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./click.ogg */ \"./src/click.ogg\");\n\n\n\nconst uiController = (() => {\n  const boardSize = 10;\n\n  function drawBoard(board, mode) {\n    let side;\n    if (mode === 'left') {\n      side = document.querySelector('.left-side');\n    } else {\n      side = document.querySelector('.right-side');\n    }\n    let lineCount = 1;\n    let colCount = 1;\n    for (let i = 0; i < boardSize * boardSize + 11; i++) {\n      if (!board.board[i]) {\n        const newColId = document.createElement('p');\n        if (i === 100) {\n          side.appendChild(newColId);\n          continue;\n        }\n        newColId.textContent = `${colCount}`;\n        colCount++;\n        side.appendChild(newColId);\n        continue;\n      }\n      const curItem = board.board[i];\n      if (i % 10 === 0) {\n        const newLineId = document.createElement('p');\n        newLineId.textContent = `${lineCount}`;\n        lineCount++;\n        side.appendChild(newLineId);\n      }\n\n      const square = document.createElement('div');\n      square.classList.add('square');\n      square.classList.add(`id${i}`);\n      square.classList.add(`x-${curItem.x}`);\n      square.classList.add(`y-${curItem.y}`);\n      if (curItem.hasShip) {\n        square.classList.add('has-ship');\n        square.classList.add(`shipId:${curItem.shipId}`);\n      } else {\n        square.classList.add('no-ship');\n      }\n      if (curItem.attacked) {\n        square.classList.add('attacked');\n      }\n      side.appendChild(square);\n    }\n  }\n\n  function clearBoard(mode) {\n    let squares;\n    let text;\n    if (mode === 'left') {\n      squares = document.querySelectorAll('.left-side div.square');\n      text = document.querySelectorAll('.left-side p');\n    } else {\n      squares = document.querySelectorAll('.right-side div.square');\n      text = document.querySelectorAll('.right-side p');\n    }\n    squares.forEach((sqaure) => sqaure.remove());\n    text.forEach((p) => p.remove());\n  }\n\n  function hitSquare(square, side) {\n    let queryClass;\n    if (side === 'right') {\n      queryClass = `.right-side .id${square.id}`;\n    } else {\n      queryClass = `.left-side .id${square.id}`;\n    }\n    const el = document.querySelector(queryClass);\n    el.classList.add('hit');\n  }\n\n  function displayGameOver(message) {\n    const body = document.querySelector('body');\n    const p = document.createElement('p');\n    p.classList.add('game-over-message');\n    p.textContent = message;\n    body.appendChild(p);\n  }\n\n  function playClick() {\n    const audio = new Audio(_click_ogg__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n    audio.play();\n  }\n\n  return { drawBoard, clearBoard, hitSquare, displayGameOver, playClick };\n})();\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (uiController);\n\n\n//# sourceURL=webpack://battleship-game/./src/uiController.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && !scriptUrl) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;