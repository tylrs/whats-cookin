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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/scripts.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default.a);
// Module
___CSS_LOADER_EXPORT___.push([module.i, ":root {\n  --bg-light: rgba(50, 50, 51, 1);\n  --bg-dark: rgba(28, 28, 29, 1);\n  --white: rgba(255, 255, 255, 1);\n  --accent-red: rgba(251, 54, 64, 1);\n  --accent-grey: hsl(30, 1%, 37%);\n  --accent-navy: rgba(29, 52, 64, 1);\n  --accent-blue: rgba(31, 72, 126, 1);\n  --accent-teal: rgba(36, 123, 160, 0.8);\n  --accent-darkred: rgb(117, 7, 35, 1);\n  --transp-teal: rgba(84, 122, 172, 0.5);\n  --transp-white: rgb(255, 255, 255, 0.5);\n  --transp-bg-light: rgba(50, 50, 51, 0.9);\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  justify-content: space-between;\n  height: 100vh;\n  font-size: 0.3rem;\n  font-family: \"KoHo\", sans-serif;\n  color: var(--white);\n}\n\nheader,\nfooter {\n  height: 10vh;\n  background: var(--bg-light);\n}\n\n/* utility */\nbutton {\n  border: none;\n  border-radius: 20%;\n  background: var(--transp-white);\n  color: var(--accent-navy);\n}\n\n.btn {\n  border: none;\n  border-radius: 15px;\n  padding: 0.3rem 3.3rem;\n  background: var(--accent-darkred);\n  color: var(--white);\n}\n\n.flex-row {\n  flex-direction: row;\n  display: flex;\n}\n\n.flex-column {\n  flex-direction: column;\n  display: flex;\n}\n\n.hidden {\n  display: none;\n}\n\n/* Icons */\n.icon {\n  border: 2px solid var(--accent-blue);\n  border-radius: 10%;\n  padding: 0.4rem;\n  background: var(--transp-teal);\n  font-size: 2.5rem;\n}\n\n.icon-small {\n  font-size: 1.3rem;\n}\n\n.icon-on {\n  color: var(--accent-red);\n}\n\n/* header */\nheader {\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px var(--accent-grey) solid;\n  padding: 0.5rem 2rem;\n}\n\n.filter-logo-container {\n  justify-content: space-around;\n  width: 10rem;\n}\n\nheader i {\n  font-size: 4rem;\n}\n\nh1 {\n  position: relative;\n  justify-content: center;\n  text-align: center;\n}\n\nh1 p:first-child {\n  font-size: 0.75rem;\n  font-weight: 300;\n  color: var(--accent-red);\n}\n\nh1 p:nth-child(2) {\n  font-style: italic;\n}\n\nh1 p:nth-child(3) {\n  font-family: \"Seaweed Script\", cursive;\n}\n\nh1 i {\n  position: absolute;\n  align-self: center;\n  font-size: 5rem;\n  color: var(--accent-teal);\n}\n\n/* Filter Menu */\n.filter-menu {\n  position: absolute;\n  z-index: 1;\n  align-self: flex-start;\n  border-right: 2px solid var(--accent-grey);\n  width: 60%;\n  height: 39.9rem;\n  padding: 0.5rem 0 0 0.5rem;\n  background: var(--transp-bg-light);\n  font-size: 1rem;\n}\n\nfieldset {\n  z-index: 2;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 1rem;\n  border: none;\n  width: 13rem;\n  height: 100%;\n}\n\nli {\n  align-content: center;\n  margin: 0.5rem 0.9rem;\n  text-align: center;\n}\n\ninput[type=checkbox] {\n  display: none;\n}\n\ninput[type=submit] {\n  align-self: center;\n  margin-top: 1rem;\n  font-size: 1rem;\n  letter-spacing: 0.3rem;\n}\n\ninput[type=submit]:hover {\n  box-shadow: 0 0 5px var(--white);\n  text-shadow: 0 0 3px var(--white);\n}\n\n/* Message Bar */\n.message-bar {\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 0.3rem;\n  width: 100%;\n  height: 5vh;\n  padding: 0.5rem 0;\n  background-color: var(--accent-darkred);\n  line-height: 1.2rem;\n}\n\n.message-bar h2 {\n  text-align: center;\n  font-size: 1.3rem;\n  font-weight: 200;\n}\n\n/* Main */\nmain {\n  align-items: center;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  height: 100vh;\n  background: var(--bg-dark);\n}\n\n.error-view {\n  justify-content: center;\n  align-content: center;\n}\n\n.error-message {\n  margin: 3rem;\n  text-align: center;\n  font-size: 4rem;\n}\n\n/* Recipe Card */\n.recipe-card {\n  position: relative;\n  z-index: 1;\n  margin: 1rem 0;\n  border-radius: 0 0 15px 15px;\n  min-height: 12rem;\n  width: 20rem;\n}\n\n.recipe-card img {\n  position: absolute;\n  border-radius: 0 0 15px 15px;\n  height: 100%;\n  width: 100%;\n}\n\n.recipe-card-info {\n  z-index: 1;\n  max-height: 4rem;\n  width: 100%;\n  background: rgba(50, 50, 51, 0.9);\n}\n\n.recipe-tag-container {\n  justify-content: center;\n  width: 15.5rem;\n  height: 100%;\n  text-align: center;\n}\n\n.recipe-name {\n  min-width: 100%;\n  padding-left: 0.5rem;\n  font-size: 1.4rem;\n  word-break: break-all;\n}\n\n.tag-container {\n  position: absolute;\n  top: 34%;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-left: 0.2rem;\n  width: 80%;\n  padding: 0.4rem 0;\n}\n\n.tags {\n  margin: 0 0.3rem 0.5rem 0;\n  border-radius: 15px;\n  padding: 0 0.5rem 0.1rem 0.5rem;\n  font-size: 0.9rem;\n  font-weight: 300;\n  background: var(--accent-teal);\n}\n\n.recipe-card-buttons-container {\n  position: absolute;\n  align-items: center;\n  align-self: flex-end;\n  justify-content: space-around;\n  height: 60%;\n  width: 3rem;\n}\n\n.recipe-card-buttons-container button {\n  padding: 0 0.2rem;\n  font-size: 1.8rem;\n}\n\n/* Recipe View */\n.recipe-card-all {\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n\n.full-recipe-view .recipe-card img {\n  align-content: flex-end;\n  border-radius: 15px 15px 0 0;\n}\n\n.full-recipe-view .full-recipe-info h4 {\n  margin-bottom: 0.4rem 0;\n  text-decoration: underline;\n}\n\n.total-cost {\n  z-index: 1;\n  align-self: flex-end;\n  height: 1.5rem;\n  width: 100%;\n  padding: 0 0.4rem;\n  font-size: 1rem;\n  background: var(--transp-bg-light);\n}\n\n.total-cost h5 {\n  margin-right: 0.3rem;\n  font-size: 1rem;\n}\n\n.full-recipe-view .recipe-card-buttons-container {\n  align-self: flex-start;\n  justify-content: space-evenly;\n  border-radius: 15px 0 0 0;\n  height: 100%;\n  padding-bottom: 1rem;\n  background: var(--transp-bg-light);\n}\n\n.full-recipe-info {\n  justify-content: center;\n  width: 85%;\n  padding: 0.3rem 0.5rem;\n  background: var(--bg-light);\n  font-size: 1rem;\n}\n\n.instructions-info {\n  text-align: justify;\n}\n\n.ingredients-info p,\n.instructions-info p {\n  margin-bottom: 0.4rem;\n}\n\n.tag-container-full {\n  align-content: center;\n  justify-content: center;\n  border-bottom: var(--bg-light) 3px solid;\n  z-index: 2;\n  height: 10%;\n}\n\n.tag-container-full .tags {\n  margin-top: 0.5rem;\n  padding: 0.125rem 0.8rem;\n  font-size: 0.5rem;\n}\n\n/* Footer */\nfooter {\n  position: relative;\n  align-items: center;\n  justify-content: space-around;\n  padding: 0 0.4rem;\n}\n\n.search-bar {\n  margin: 0 0.2rem;\n  border-radius: 5px;\n  height: 2.4rem;\n  width: 75%;\n  padding: 0.4rem;\n}\n\n.search-btn {\n  z-index: 2;\n  border-radius: 50%;\n  padding: 0.5rem;\n  background-color: var(--transp-teal);\n  font-size: 1.3rem;\n  color: var(--white);\n}\n\ninput:checked + .tags {\n  background: var(--accent-blue);\n  color: var(--accent-red);\n}\n\n@media (min-width: 376px) {\n  .display-desktop {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-around;\n  }\n\n  .hidden {\n    display: none;\n  }\n\n  .message-bar {\n    height: 7vh;\n  }\n\n  .message-bar h2 {\n    font-size: 1.8rem;\n  }\n\n  .error-view {\n    padding: 0 1rem;\n  }\n\n  .filter-menu {\n    align-items: center;\n    height: 77.8%;\n    max-width: 40%;\n    padding: 0;\n    padding-bottom: 1rem;\n  }\n\n  fieldset {\n    width: auto;\n    max-height: 80%;\n    margin-top: 0;\n  }\n\n  li {\n    padding: 0;\n  }\n\n  .recipe-card {\n    margin-right: 1rem;\n  }\n\n  .total-cost {\n    justify-content: flex-end;\n    background: var(--bg-dark);\n  }\n\n  .total-cost p,\n.total-cost h5,\n.full-recipe-info {\n    font-size: 1.5rem;\n  }\n\n  .full-recipe-view .recipe-card {\n    align-self: center;\n    margin-right: 0;\n    height: 15rem;\n    width: 85%;\n  }\n\n  .full-recipe-view .recipe-card img {\n    background: center center/cover no-repeat;\n  }\n\n  .tag-container-full {\n    height: 15%;\n  }\n\n  .tag-container-full .tags {\n    font-size: 1rem;\n  }\n\n  footer .icon-small,\nfooter .icon {\n    font-size: 2rem;\n  }\n\n  .search-bar {\n    height: 3rem;\n    width: 80%;\n    font-size: 1.5rem;\n  }\n\n  .error-message {\n    margin: 10rem;\n  }\n\n  h1:hover,\n.exit-card:hover,\n.heart-card:hover,\n.calendar-card:hover,\n.filter-btn:hover,\n.search-btn:hover {\n    color: var(--accent-red);\n  }\n}", "",{"version":3,"sources":["webpack://./src/styles.css"],"names":[],"mappings":"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","sourcesContent":[":root {\n  --bg-light: rgba(50, 50, 51, 1);\n  --bg-dark: rgba(28, 28, 29, 1);\n  --white: rgba(255, 255, 255, 1);\n\n  --accent-red: rgba(251, 54, 64, 1);\n  --accent-grey: hsl(30, 1%, 37%);\n  --accent-navy: rgba(29, 52, 64, 1);\n  --accent-blue: rgba(31, 72, 126, 1);\n  --accent-teal: rgba(36, 123, 160, 0.8);\n  --accent-darkred: rgb(117, 7, 35, 1);\n\n  --transp-teal: rgba(84, 122, 172, 0.5);\n  --transp-white: rgb(255, 255, 255, 0.5);\n  --transp-bg-light: rgba(50, 50, 51, 0.9);\n}\n\n* {\n  box-sizing: border-box;\n  margin: 0;\n  padding: 0;\n}\n\nbody {\n  justify-content: space-between;\n  height: 100vh;\n  font-size: 0.3rem;\n  font-family: \"KoHo\", sans-serif;\n  color: var(--white);\n}\n\nheader,\nfooter {\n  height: 10vh;\n  background: var(--bg-light);\n}\n\n/* utility */\nbutton {\n  border: none;\n  border-radius: 20%;\n  background: var(--transp-white);\n  color: var(--accent-navy);\n}\n\n.btn {\n  border: none;\n  border-radius: 15px;\n  padding: 0.3rem 3.3rem;\n  background: var(--accent-darkred);\n  color: var(--white);\n}\n\n.flex-row {\n  flex-direction: row;\n  display: flex;\n}\n\n.flex-column {\n  flex-direction: column;\n  display: flex;\n}\n\n.hidden {\n  display: none;\n}\n/* Icons */\n\n.icon {\n  border: 2px solid var(--accent-blue);\n  border-radius: 10%;\n  padding: 0.4rem;\n  background: var(--transp-teal);\n  font-size: 2.5rem;\n}\n\n.icon-small {\n  font-size: 1.3rem;\n}\n\n.icon-on {\n  color: var(--accent-red);\n}\n\n/* header */\nheader {\n  align-items: center;\n  justify-content: space-between;\n  border-bottom: 1px var(--accent-grey) solid;\n  padding: 0.5rem 2rem;\n}\n\n.filter-logo-container {\n  justify-content: space-around;\n  width: 10rem;\n}\n\nheader i {\n  font-size: 4rem;\n}\n\nh1 {\n  position: relative;\n  justify-content: center;\n  text-align: center;\n}\n\nh1 p:first-child {\n  font-size: 0.75rem;\n  font-weight: 300;\n  color: var(--accent-red);\n}\n\nh1 p:nth-child(2) {\n  font-style: italic;\n}\n\nh1 p:nth-child(3) {\n  font-family: \"Seaweed Script\", cursive;\n}\n\nh1 i {\n  position: absolute;\n  align-self: center;\n  font-size: 5rem;\n  color: var(--accent-teal);\n}\n\n/* Filter Menu */\n.filter-menu {\n  position: absolute;\n  z-index: 1;\n  align-self: flex-start;\n  border-right: 2px solid var(--accent-grey);\n  width: 60%;\n  height: 39.9rem;\n  padding: 0.5rem 0 0 0.5rem;\n  background: var(--transp-bg-light);\n  font-size: 1rem;\n}\n\nfieldset {\n  z-index: 2;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-top: 1rem;\n  border: none;\n  width: 13rem;\n  height: 100%;\n}\n\nli {\n  align-content: center;\n  margin: 0.5rem 0.9rem;\n  text-align: center;\n}\n\ninput[type=\"checkbox\"] {\n  display: none;\n}\n\ninput[type=\"submit\"] {\n  align-self: center;\n  margin-top: 1rem;\n  font-size: 1rem;\n  letter-spacing: 0.3rem;\n}\n\ninput[type=\"submit\"]:hover {\n  box-shadow: 0 0 5px var(--white);\n  text-shadow: 0 0 3px var(--white);\n}\n\n/* Message Bar */\n.message-bar {\n  align-items: center;\n  justify-content: center;\n  padding-bottom: 0.3rem;\n  width: 100%;\n  height: 5vh;\n  padding: 0.5rem 0;\n  background-color: var(--accent-darkred);\n  line-height: 1.2rem;\n}\n\n.message-bar h2 {\n  text-align: center;\n  font-size: 1.3rem;\n  font-weight: 200;\n}\n\n/* Main */\nmain {\n  align-items: center;\n  overflow-x: hidden;\n  overflow-y: scroll;\n  height: 100vh;\n  background: var(--bg-dark);\n}\n\n.error-view {\n  justify-content: center;\n  align-content: center;\n}\n\n.error-message {\n  margin: 3rem;\n  text-align: center;\n  font-size: 4rem;\n}\n\n/* Recipe Card */\n.recipe-card {\n  position: relative;\n  z-index: 1;\n  margin: 1rem 0;\n  border-radius: 0 0 15px 15px;\n  min-height: 12rem;\n  width: 20rem;\n}\n\n.recipe-card img {\n  position: absolute;\n  border-radius: 0 0 15px 15px;\n  height: 100%;\n  width: 100%;\n}\n\n.recipe-card-info {\n  z-index: 1;\n  max-height: 4rem;\n  width: 100%;\n  background: rgba(50, 50, 51, 0.9);\n}\n\n.recipe-tag-container {\n  justify-content: center;\n  width: 15.5rem;\n  height: 100%;\n  text-align: center;\n}\n\n.recipe-name {\n  min-width: 100%;\n  padding-left: 0.5rem;\n  font-size: 1.4rem;\n  word-break: break-all;\n}\n\n.tag-container {\n  position: absolute;\n  top: 34%;\n  flex-wrap: wrap;\n  justify-content: center;\n  margin-left: 0.2rem;\n  width: 80%;\n  padding: 0.4rem 0;\n}\n\n.tags {\n  margin: 0 0.3rem 0.5rem 0;\n  border-radius: 15px;\n  padding: 0 0.5rem 0.1rem 0.5rem;\n  font-size: 0.9rem;\n  font-weight: 300;\n  background: var(--accent-teal);\n}\n\n.recipe-card-buttons-container {\n  position: absolute;\n  align-items: center;\n  align-self: flex-end;\n  justify-content: space-around;\n  height: 60%;\n  width: 3rem;\n}\n\n.recipe-card-buttons-container button {\n  padding: 0 0.2rem;\n  font-size: 1.8rem;\n}\n\n/* Recipe View */\n\n.recipe-card-all {\n  align-items: center;\n  height: 100%;\n  width: 100%;\n}\n\n.full-recipe-view .recipe-card img {\n  align-content: flex-end;\n  border-radius: 15px 15px 0 0;\n}\n\n.full-recipe-view .full-recipe-info h4 {\n  margin-bottom: 0.4rem 0;\n  text-decoration: underline;\n}\n\n.total-cost {\n  z-index: 1;\n  align-self: flex-end;\n  height: 1.5rem;\n  width: 100%;\n  padding: 0 0.4rem;\n  font-size: 1rem;\n  background: var(--transp-bg-light);\n}\n\n.total-cost h5 {\n  margin-right: 0.3rem;\n  font-size: 1rem;\n}\n\n.full-recipe-view .recipe-card-buttons-container {\n  align-self: flex-start;\n  justify-content: space-evenly;\n  border-radius: 15px 0 0 0;\n  height: 100%;\n  padding-bottom: 1rem;\n  background: var(--transp-bg-light);\n}\n\n.full-recipe-info {\n  justify-content: center;\n  width: 85%;\n  padding: 0.3rem 0.5rem;\n  background: var(--bg-light);\n  font-size: 1rem;\n}\n\n.instructions-info {\n  text-align: justify;\n}\n\n.ingredients-info p,\n.instructions-info p {\n  margin-bottom: 0.4rem;\n}\n\n.tag-container-full {\n  align-content: center;\n  justify-content: center;\n  border-bottom: var(--bg-light) 3px solid;\n  z-index: 2;\n  height: 10%;\n}\n\n.tag-container-full .tags {\n  margin-top: 0.5rem;\n  padding: 0.125rem 0.8rem;\n  font-size: 0.5rem;\n}\n\n/* Footer */\nfooter {\n  position: relative;\n  align-items: center;\n  justify-content: space-around;\n  padding: 0 0.4rem;\n}\n\n.search-bar {\n  margin: 0 0.2rem;\n  border-radius: 5px;\n  height: 2.4rem;\n  width: 75%;\n  padding: 0.4rem;\n}\n\n.search-btn {\n  z-index: 2;\n  border-radius: 50%;\n  padding: 0.5rem;\n  background-color: var(--transp-teal);\n  font-size: 1.3rem;\n  color: var(--white);\n}\n\ninput:checked + .tags {\n  background: var(--accent-blue);\n  color: var(--accent-red);\n}\n\n@media (min-width: 376px) {\n  .display-desktop {\n    display: flex;\n    flex-flow: row wrap;\n    justify-content: space-around;\n  }\n\n  .hidden {\n    display: none;\n  }\n  .message-bar {\n    height: 7vh;\n  }\n  .message-bar h2 {\n    font-size: 1.8rem;\n  }\n\n  .error-view {\n    padding: 0 1rem;\n  }\n\n  .filter-menu {\n    align-items: center;\n    height: 77.8%;\n    max-width: 40%;\n    padding: 0;\n    padding-bottom: 1rem;\n  }\n\n  fieldset {\n    width: auto;\n    max-height: 80%;\n    margin-top: 0;\n  }\n\n  li {\n    padding: 0;\n  }\n  .recipe-card {\n    margin-right: 1rem;\n  }\n\n  .total-cost {\n    justify-content: flex-end;\n    background: var(--bg-dark);\n  }\n\n  .total-cost p,\n  .total-cost h5,\n  .full-recipe-info {\n    font-size: 1.5rem;\n  }\n\n  .full-recipe-view .recipe-card {\n    align-self: center;\n    margin-right: 0;\n    height: 15rem;\n    width: 85%;\n  }\n\n  .full-recipe-view .recipe-card img {\n    background: center center/cover no-repeat;\n  }\n\n  .tag-container-full {\n    height: 15%;\n  }\n\n  .tag-container-full .tags {\n    font-size: 1rem;\n  }\n\n  footer .icon-small,\n  footer .icon {\n    font-size: 2rem;\n  }\n\n  .search-bar {\n    height: 3rem;\n    width: 80%;\n    font-size: 1.5rem;\n  }\n\n  .error-message {\n    margin: 10rem;\n  }\n\n  h1:hover,\n  .exit-card:hover,\n  .heart-card:hover,\n  .calendar-card:hover,\n  .filter-btn:hover,\n  .search-btn:hover {\n    color: var(--accent-red);\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && typeof btoa !== 'undefined') {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/apiCalls.js":
/*!*************************!*\
  !*** ./src/apiCalls.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
let usersData = () => fetch("https://whats-cookin-api-tylrs.herokuapp.com/api/v1/users")
  .then(response => response.json())
  .catch(err => console.log('error'));

let ingredientData = () => fetch("https://whats-cookin-api-tylrs.herokuapp.com/api/v1/ingredients")
  .then(response => response.json())
  .catch(err => console.log('error'));

let recipeData = () => fetch("https://whats-cookin-api-tylrs.herokuapp.com/api/v1/recipes")
  .then(response => response.json())
  .catch(err => console.log('error'));

function retrieveData() {
  return Promise.all([usersData(), ingredientData(), recipeData()])
}

/* harmony default export */ __webpack_exports__["default"] = ({retrieveData});


/***/ }),

/***/ "./src/classes/Recipe.js":
/*!*******************************!*\
  !*** ./src/classes/Recipe.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* eslint-disable max-len */
class Recipe {
  constructor(recipeDetails, ingredientList) {
    this.id = recipeDetails.id;
    this.image = recipeDetails.image;
    this.name = recipeDetails.name.toLowerCase().split(' ');
    this.instructions = recipeDetails.instructions;
    this.tags = recipeDetails.tags;
    this.ingredients = this.fetchIngredients(recipeDetails.ingredients, ingredientList);
    this.ingredientNames = this.getIngredientNames();
    this.isFavorited = false;
    this.isToBeCooked = false;
  }

  fetchIngredients(recipeIngredients, ingredientList) {
    return recipeIngredients.map((recipeIngredient) => {
      let newIngredientInfo = ingredientList.find((ingredient) => {
        return ingredient.id === recipeIngredient.id;
      })
      recipeIngredient.name = newIngredientInfo.name;
      recipeIngredient.estimatedCostInCents = newIngredientInfo.estimatedCostInCents;
      return recipeIngredient;
    });
  }

  getIngredientNames() {
    return this.ingredients.reduce((acc, ingredient) => {
      let separatedNames = ingredient.name.split(' ')
      separatedNames.forEach((name) => {
        acc.push(name);
      })
      return acc;
    }, [])
  }

  getTotalCost() {
    return this.ingredients.reduce((accumulator, ingredient) => {
      accumulator += ingredient.estimatedCostInCents * ingredient.quantity.amount;
      return accumulator;
    }, 0);
  }

  getInstructions() {
    return this.instructions.map((instruction) => {
      return `${instruction.number}. ${instruction.instruction}`;
    })
  }

  favorite() {
    this.isFavorited = true;
  }

  unFavorite() {
    this.isFavorited = false;
  }

  toCook() {
    this.isToBeCooked = true;
  }

  removeToCook() {
    this.isToBeCooked = false;
  }
}

module.exports = Recipe;


/***/ }),

/***/ "./src/classes/RecipeRepository.js":
/*!*****************************************!*\
  !*** ./src/classes/RecipeRepository.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
class RecipeRepository {
  constructor(recipes) {
    this.recipes = recipes
  }
  filterRecipes(queryInfo) {
    if (queryInfo.query.length > 0) {
      let totalFilteredRecipes = queryInfo.query.reduce((accumulator, query) => {
        accumulator = accumulator.filter((recipe) => {
          return recipe[queryInfo.type].includes(query)
        })
        return accumulator;
      }, this.recipes);
      return totalFilteredRecipes;
    } else {
      return [];
    }
  }
  generateAllRecipeNames() {
    let result = this.recipes.reduce((acc, recipe) => {
      recipe.name.forEach((word) => {
        acc.push(word);
      })
      return acc;
    }, [])
    return result;
  }
  generateAllIngredientNames() {
    let result = this.recipes.reduce((acc, recipe) => {
      recipe.ingredientNames.forEach((ingredient) => {
        acc.push(ingredient)
      })
      return acc;
    }, [])
    return result;
  }
}

/* harmony default export */ __webpack_exports__["default"] = (RecipeRepository);


/***/ }),

/***/ "./src/classes/User.js":
/*!*****************************!*\
  !*** ./src/classes/User.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _RecipeRepository__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./RecipeRepository */ "./src/classes/RecipeRepository.js");


class User {
  constructor(userInfo) {
    this.favoriteRecipes = new _RecipeRepository__WEBPACK_IMPORTED_MODULE_0__["default"]([]);
    this.recipesToCook = new _RecipeRepository__WEBPACK_IMPORTED_MODULE_0__["default"]([]);
    this.name = userInfo.name;
    this.id = userInfo.id;
  }

  addFavoriteRecipe(recipe) {
    if (!this.favoriteRecipes.recipes.includes(recipe)) {
      this.favoriteRecipes.recipes.push(recipe);
      recipe.favorite();
    }
  }

  removeFavoriteRecipe(clickedRecipe) {
    let index = this.favoriteRecipes.recipes.findIndex((recipe) => {
      return recipe.id === clickedRecipe.id;
    })
    if (index !== -1) {
      this.favoriteRecipes.recipes.splice(index, 1);
      clickedRecipe.unFavorite();
    }
  }

  filterFavoriteRecipes(queryInfo) {
    return this.favoriteRecipes.filterRecipes(queryInfo);
  }

  addRecipeToCookThisWeek(recipe) {
    if (!this.recipesToCook.recipes.includes(recipe)) {
      this.recipesToCook.recipes.push(recipe);
      recipe.toCook();
    }
  }

  removeRecipeToCookThisWeek(clickedRecipe) {
    let index = this.recipesToCook.recipes.findIndex((recipe) => {
      return recipe.id === clickedRecipe.id;
    })
    if (index !== -1) {
      this.recipesToCook.recipes.splice(index, 1);
      clickedRecipe.removeToCook();
    }
  }

};


/* harmony default export */ __webpack_exports__["default"] = (User);


/***/ }),

/***/ "./src/scripts.js":
/*!************************!*\
  !*** ./src/scripts.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ "./src/styles.css");
/* harmony import */ var _apiCalls__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiCalls */ "./src/apiCalls.js");
/* harmony import */ var _classes_Recipe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/Recipe.js */ "./src/classes/Recipe.js");
/* harmony import */ var _classes_Recipe_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_classes_Recipe_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _classes_RecipeRepository_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./classes/RecipeRepository.js */ "./src/classes/RecipeRepository.js");
/* harmony import */ var _classes_User_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./classes/User.js */ "./src/classes/User.js");
/* eslint-disable max-len */






// querySelectors
const mainRecipes = document.querySelector('#mainRecipes');
const mainSection = document.querySelector('#mainSection');
const filter = document.querySelector('#filter')
const filterMenu = document.querySelector('#filterMenu')
const tagCheckBox = document.querySelectorAll('input[type="checkbox"]')
const filterSubmitBtn = document.querySelector('#filterSubmitBtn')
const searchBar = document.querySelector('#searchBar')
const searchButton = document.querySelector('#searchButton')
const fullRecipeSection = document.querySelector('#fullRecipeView');
const messageBar = document.querySelector('#messageBar');
const favoritesViewButton = document.querySelector('#favoritesViewButton');
const toCookViewButton = document.querySelector('#toCookViewButton');
const homeButton = document.querySelector('#homeView')
const footer = document.querySelector('footer')

//global variables
let currentRecipeRepo;
let originalRecipeRepo;
let currentUser;
let counter = 0;
let isLoaded = false;
let currentMessage;

// event listeners
window.onload = generateStartingInformation()
searchButton.addEventListener('click', searchThroughRecipes)
filter.addEventListener('click', toggleFilterMenu)
filterSubmitBtn.addEventListener('click', searchByTag)
mainSection.addEventListener('click', determineRecipeCardAction)
favoritesViewButton.addEventListener('click', showFavoritesView)
toCookViewButton.addEventListener('click', showToCookView)
homeButton.addEventListener('click', showHomeView)

function generateStartingInformation() {
  _apiCalls__WEBPACK_IMPORTED_MODULE_1__["default"].retrieveData()
    .then((promise) => {
      let num = getRandomNumber(promise[0]['usersData'].length)
      currentUser = new _classes_User_js__WEBPACK_IMPORTED_MODULE_4__["default"](promise[0]['usersData'][num])
      let ingredients = promise[1]['ingredientsData']
      let recipes = promise[2]['recipeData']
      let formattedRecipes = recipes.map((recipe) => {
        let newRecipe = new _classes_Recipe_js__WEBPACK_IMPORTED_MODULE_2___default.a(recipe, ingredients)
        return newRecipe
      })
      originalRecipeRepo = new _classes_RecipeRepository_js__WEBPACK_IMPORTED_MODULE_3__["default"](formattedRecipes, ingredients);
      showHomeView();
      isLoaded = true;
    })
}

//switch views functions
function showFavoritesView() {
  hide(fullRecipeSection);
  currentMessage = `<h2>Your Favorite Recipes</h2>`;
  messageBar.innerHTML = currentMessage;
  currentRecipeRepo = currentUser.favoriteRecipes;
  renderRecipes(currentRecipeRepo.recipes);
  show([footer, mainRecipes, searchBar, searchButton])
}

function showToCookView() {
  hide(fullRecipeSection);
  currentMessage = `<h2>Your Recipes to Cook</h2>`;
  messageBar.innerHTML = currentMessage;
  currentRecipeRepo = currentUser.recipesToCook;
  renderRecipes(currentRecipeRepo.recipes);
  show([footer, mainRecipes, searchBar, searchButton])
}

function showHomeView() {
  hide(fullRecipeSection);
  currentMessage = `<h2>All Recipes</h2>`;
  !isLoaded ? messageBar.innerHTML = `<h2>Hello, ${currentUser.name}</h2>` : messageBar.innerHTML = currentMessage;
  currentRecipeRepo = originalRecipeRepo;
  renderRecipes(currentRecipeRepo.recipes);
  show([footer, mainRecipes, searchBar, searchButton])
}


function showFullRecipeView(id) {
  renderFullRecipeInfo(id);
  hide([footer, mainRecipes, searchBar, searchButton])
  show(fullRecipeSection);
}

//card button event handlers
function determineRecipeCardAction(event) {
  let id = 0;
  if (event.target.closest('.recipe-card')) {
    id = parseInt(event.target.closest('.recipe-card').id);
  }
  if (event.target.parentElement.classList.contains('favorite-recipe')) {
    determineFavoriteOrUnfavorite(id, event);
  } else if (event.target.parentElement.classList.contains('this-week-recipe')) {
    determineAddOrRemoveToCook(id, event);
  } else if (event.target.parentElement.className === 'exit-button') {
    showHomeView();
  } else if (id) {
    showFullRecipeView(id);
  }
}

function determineFavoriteOrUnfavorite(id, event) {
  let clickedRecipe = currentRecipeRepo.recipes.find((recipe) => {
    return recipe.id === id;
  })
  if (!currentUser.favoriteRecipes.recipes.includes(clickedRecipe)) {
    event.target.parentElement.classList.add('icon-on');
    currentUser.addFavoriteRecipe(clickedRecipe);
    messageBar.innerHTML = `<h2>Favorited!</h2>`
    let timeout = setTimeout(function() {
    messageBar.innerHTML = currentMessage;
    }, 1000);
  } else {
    currentUser.removeFavoriteRecipe(clickedRecipe)
    messageBar.innerHTML = `<h2>Unfavorited!</h2>`
    let timeout = setTimeout(function() {
    messageBar.innerHTML = currentMessage;
    }, 1000);
    renderRecipes(currentRecipeRepo.recipes);
  }
}

function determineAddOrRemoveToCook(id, event) {
  let clickedRecipe = currentRecipeRepo.recipes.find((recipe) => {
    return recipe.id === id;
  })
  if (!currentUser.recipesToCook.recipes.includes(clickedRecipe)) {
    event.target.parentElement.classList.add('icon-on');
    currentUser.addRecipeToCookThisWeek(clickedRecipe);
    messageBar.innerHTML = `<h2>Added to Recipes to Cook!</h2>`
    let timeout = setTimeout(function() {
    messageBar.innerHTML = `<h2>All Recipes</h2>`
    }, 1000);
  } else {
    currentUser.removeRecipeToCookThisWeek(clickedRecipe)
    messageBar.innerHTML = `<h2>Removed from Recipes to Cook!</h2>`
    let timeout = setTimeout(function() {
    messageBar.innerHTML = `<h2>All Recipes</h2>`
    }, 1000);
    renderRecipes(currentRecipeRepo.recipes);
  }
}
//search functions
function searchThroughRecipes() {
  let userSearch = searchBar.value;
  let convertedUserSearch = convertUserInfo(userSearch)
  let uniqueFilteredRecipes = generateFilteredRecipes(convertedUserSearch);
  if (uniqueFilteredRecipes.length) {
    renderRecipes(uniqueFilteredRecipes);
  } else {
    mainRecipes.innerHTML =
    `
      <p class="error-message">Oops could not find any recipes that matched 😦</p>
    `
  }
  searchBar.value = '';
}

function convertUserInfo(userSearch) {
  let alteredUserSearch = userSearch.split(' '). map((word) => {
    return word.toLowerCase();
  });
  let convertedUserSearch = determineSearchType(alteredUserSearch);
  return convertedUserSearch;
}

function determineSearchType(alteredUserSearch) {
  let searchInfo = alteredUserSearch.reduce((acc, word) => {
    let allRecipeNames = currentRecipeRepo.generateAllRecipeNames();
    let allIngredientNames = currentRecipeRepo.generateAllIngredientNames();
    if (allRecipeNames.includes(word)) {
      acc.name.query.push(word);
    }
    if (allIngredientNames.includes(word)) {
      acc.ingredientNames.query.push(word);
    }
    return acc;
  }, {name: {type: 'name', query: []}, ingredientNames: {type: 'ingredientNames', query: []}})
  return searchInfo;
}

function generateFilteredRecipes(convertedUserSearch) {
  let filteredRecipesByName = currentRecipeRepo.filterRecipes(convertedUserSearch.name);
  let filteredRecipesByIngredient = currentRecipeRepo.filterRecipes(convertedUserSearch.ingredientNames);
  let allFilteredRecipes = filteredRecipesByName.concat(filteredRecipesByIngredient);
  return [...new Set(allFilteredRecipes)];
}

function searchByTag(e) {
  e.preventDefault();
  let tagSearchInfo = {type: 'tags', query: []}
  tagCheckBox.forEach((tag) => {
    tag.checked ? tagSearchInfo.query.push(tag.value) : null
    tag.checked = false;
  })
  let filteredRecipes = currentRecipeRepo.filterRecipes(tagSearchInfo);
  hide(filterMenu);
  if (filteredRecipes.length) {
    renderRecipes(filteredRecipes);
  } else {
    mainRecipes.innerHTML =
    `
      <p class="error-message">Oops could not find any recipes that matched 😦</p>
    `
  }
}

//render functions
function renderRecipes(recipes) {
  mainRecipes.innerHTML = ``;
  recipes.forEach((recipe) => {
    let tags = recipe.tags.map((tag) => {
      return `<h4 class="tags flex-column">${tag}</h4>`
    })
    let recipeNames = recipe.name.map((name) => {
      return name[0].toUpperCase() + name.substring(1);
    }).join(' ');
    let favoriteButtonClass = `favorite-recipe`
    let calendarButtonClass = `this-week-recipe`
    if (recipe.isFavorited) {
      favoriteButtonClass = `favorite-recipe icon-on`
    }
    if (recipe.isToBeCooked) {
      calendarButtonClass = `this-week-recipe icon-on`
    }
    mainRecipes.innerHTML +=
    `
      <article class="recipe-card flex-row" id="${recipe.id}" >
        <img src=${recipe.image} alt="A picture of a dish called ${recipeNames}"/>
        <div class="recipe-card-info flex-column">
         <div class="recipe-tag-container flex-column">
            <p class="recipe-name">${recipeNames}</p>
            <div class="tag-container flex-row">
              ${tags}
            </div>
        </div>
        <div class="recipe-card-buttons-container flex-column">
          <button class="${favoriteButtonClass}">
            <i class="heart-card fas fa-heart"></i>
          </button>
          <button class="${calendarButtonClass}">
            <i class="calendar-card fas fa-calendar-alt"></i>
          </button>
        </div>
        </article>
    `
  })
}

function renderFullRecipeInfo(id) {
  let recipeToRender = currentRecipeRepo.recipes.find((recipe) => {
    return recipe.id === id;
  })
  let recipeToRenderInfo = convertRecipeToRender(recipeToRender);
  currentMessage = `<h2>${recipeToRenderInfo.name}</h2>`
  messageBar.innerHTML = currentMessage;
  fullRecipeSection.innerHTML =
  ` <div class="tag-container-full flex-row">
    ${recipeToRenderInfo.tags}
    </div>
    <article class="recipe-card-all flex-column" >
      <div class="recipe-card flex-row" id="${recipeToRender.id}">
        <img src=${recipeToRender.image} alt="A picture of a dish called ${recipeToRenderInfo.name}"/>
        <div class="recipe-card-buttons-container flex-column">
          <button class="exit-button" id="exitButton">
            <i class="exit-card fas fa-times"></i>
          </button>
          <button class="${recipeToRenderInfo.favoriteButtonClass}">
            <i class="heart-card fas fa-heart"></i>
          </button>
          <button class="${recipeToRenderInfo.calendarButtonClass}">
            <i class="calendar-card fas fa-calendar-alt"></i>
          </button>
        </div>
        <div class="total-cost flex-row" id="totalCost">
          <h5>Estimated Cost </h5>
          <p>${recipeToRenderInfo.totalCost}</p>
        </div>
      </div>
      <section class="full-recipe-info flex-column" id="fullRecipeInfo">
        <div class="recipePriceContainer flex-row">
          <div class="ingredients-info" id=ingredientsInfo>
            <h4>Ingredients</h4>
            <p> ${recipeToRenderInfo.ingredients}</p>
          </div>
        </div>
        <div class="instructions-info flex-column" id="totalCost">
          <h4>Instructions</h4>
          <p>${recipeToRenderInfo.fixedInstructions}</p>
        </div>
      </section>
    </article>
  `
}

function convertRecipeToRender(recipeToRender) {
  let tags = recipeToRender.tags.map((tag) => {
    return `<h4 class="tags flex-column">${tag}</h4>`
  }).join(' ');
  let ingredients = recipeToRender.ingredients.map((ingredient) => {
    return `<p class="ingredients flex-column">${ingredient.quantity.amount} ${ingredient.quantity.unit} ${ingredient.name}</p>`
  }).join(' ');
  let instructions = recipeToRender.getInstructions();
  let fixedInstructions = instructions.map((instruction) => {
    return `<p class="instructions flex-column">${instruction}</p>`
  }).join('  ');
  let name = recipeToRender.name.map((name) => {
    return name[0].toUpperCase() + name.substring(1);
  }).join(' ');
  let totalCost = convertTotalCost(recipeToRender);
  let favoriteButtonClass = `favorite-recipe`
  let calendarButtonClass = `this-week-recipe`
  if (recipeToRender.isFavorited) {
    favoriteButtonClass = `favorite-recipe icon-on`
  }
  if (recipeToRender.isToBeCooked) {
    calendarButtonClass = `this-week-recipe icon-on`
  }
  let recipeToRenderInfo = {tags, ingredients, fixedInstructions, name, totalCost, favoriteButtonClass, calendarButtonClass};
  return recipeToRenderInfo;
}

function convertTotalCost(recipeToRender) {
  let totalCost = recipeToRender.getTotalCost();
  let dollars = Math.floor(totalCost / 100);
  return `$${dollars}`;
}

//other functions
function getRandomNumber(max) {
  var number = Math.floor(Math.random() * (max - 1) + 1);
  return number;
}

function toggleFilterMenu() {
  if (!(counter % 2)) {
    show(filterMenu);
    counter ++;
  } else {
    hide(filterMenu);
    counter ++;
  }
}

function show(e) {
  if (e.length > 0) {
    e.forEach((element) => {
      element.classList.remove('hidden')
    })
  } else {
    e.classList.remove('hidden')
  }
}

function hide(e) {
  if (e.length > 0) {
    e.forEach((element) => {
      element.classList.add('hidden')
    })
  } else {
    e.classList.add('hidden')
  }
}


/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./styles.css */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/styles.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2FwaUNhbGxzLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1JlY2lwZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9SZWNpcGVSZXBvc2l0b3J5LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3NjcmlwdHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3N0eWxlcy5jc3M/MjNkZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNzSDtBQUM3QjtBQUN6Riw4QkFBOEIsbUZBQTJCLENBQUMsc0dBQXFDO0FBQy9GO0FBQ0EsOEJBQThCLFFBQVMsVUFBVSxvQ0FBb0MsbUNBQW1DLG9DQUFvQyx1Q0FBdUMsb0NBQW9DLHVDQUF1Qyx3Q0FBd0MsMkNBQTJDLHlDQUF5QywyQ0FBMkMsNENBQTRDLDZDQUE2QyxHQUFHLE9BQU8sMkJBQTJCLGNBQWMsZUFBZSxHQUFHLFVBQVUsbUNBQW1DLGtCQUFrQixzQkFBc0Isc0NBQXNDLHdCQUF3QixHQUFHLHFCQUFxQixpQkFBaUIsZ0NBQWdDLEdBQUcsMkJBQTJCLGlCQUFpQix1QkFBdUIsb0NBQW9DLDhCQUE4QixHQUFHLFVBQVUsaUJBQWlCLHdCQUF3QiwyQkFBMkIsc0NBQXNDLHdCQUF3QixHQUFHLGVBQWUsd0JBQXdCLGtCQUFrQixHQUFHLGtCQUFrQiwyQkFBMkIsa0JBQWtCLEdBQUcsYUFBYSxrQkFBa0IsR0FBRyx3QkFBd0IseUNBQXlDLHVCQUF1QixvQkFBb0IsbUNBQW1DLHNCQUFzQixHQUFHLGlCQUFpQixzQkFBc0IsR0FBRyxjQUFjLDZCQUE2QixHQUFHLDBCQUEwQix3QkFBd0IsbUNBQW1DLGdEQUFnRCx5QkFBeUIsR0FBRyw0QkFBNEIsa0NBQWtDLGlCQUFpQixHQUFHLGNBQWMsb0JBQW9CLEdBQUcsUUFBUSx1QkFBdUIsNEJBQTRCLHVCQUF1QixHQUFHLHNCQUFzQix1QkFBdUIscUJBQXFCLDZCQUE2QixHQUFHLHVCQUF1Qix1QkFBdUIsR0FBRyx1QkFBdUIsNkNBQTZDLEdBQUcsVUFBVSx1QkFBdUIsdUJBQXVCLG9CQUFvQiw4QkFBOEIsR0FBRyxxQ0FBcUMsdUJBQXVCLGVBQWUsMkJBQTJCLCtDQUErQyxlQUFlLG9CQUFvQiwrQkFBK0IsdUNBQXVDLG9CQUFvQixHQUFHLGNBQWMsZUFBZSxvQkFBb0IsNEJBQTRCLHFCQUFxQixpQkFBaUIsaUJBQWlCLGlCQUFpQixHQUFHLFFBQVEsMEJBQTBCLDBCQUEwQix1QkFBdUIsR0FBRywwQkFBMEIsa0JBQWtCLEdBQUcsd0JBQXdCLHVCQUF1QixxQkFBcUIsb0JBQW9CLDJCQUEyQixHQUFHLDhCQUE4QixxQ0FBcUMsc0NBQXNDLEdBQUcscUNBQXFDLHdCQUF3Qiw0QkFBNEIsMkJBQTJCLGdCQUFnQixnQkFBZ0Isc0JBQXNCLDRDQUE0Qyx3QkFBd0IsR0FBRyxxQkFBcUIsdUJBQXVCLHNCQUFzQixxQkFBcUIsR0FBRyxzQkFBc0Isd0JBQXdCLHVCQUF1Qix1QkFBdUIsa0JBQWtCLCtCQUErQixHQUFHLGlCQUFpQiw0QkFBNEIsMEJBQTBCLEdBQUcsb0JBQW9CLGlCQUFpQix1QkFBdUIsb0JBQW9CLEdBQUcscUNBQXFDLHVCQUF1QixlQUFlLG1CQUFtQixpQ0FBaUMsc0JBQXNCLGlCQUFpQixHQUFHLHNCQUFzQix1QkFBdUIsaUNBQWlDLGlCQUFpQixnQkFBZ0IsR0FBRyx1QkFBdUIsZUFBZSxxQkFBcUIsZ0JBQWdCLHNDQUFzQyxHQUFHLDJCQUEyQiw0QkFBNEIsbUJBQW1CLGlCQUFpQix1QkFBdUIsR0FBRyxrQkFBa0Isb0JBQW9CLHlCQUF5QixzQkFBc0IsMEJBQTBCLEdBQUcsb0JBQW9CLHVCQUF1QixhQUFhLG9CQUFvQiw0QkFBNEIsd0JBQXdCLGVBQWUsc0JBQXNCLEdBQUcsV0FBVyw4QkFBOEIsd0JBQXdCLG9DQUFvQyxzQkFBc0IscUJBQXFCLG1DQUFtQyxHQUFHLG9DQUFvQyx1QkFBdUIsd0JBQXdCLHlCQUF5QixrQ0FBa0MsZ0JBQWdCLGdCQUFnQixHQUFHLDJDQUEyQyxzQkFBc0Isc0JBQXNCLEdBQUcseUNBQXlDLHdCQUF3QixpQkFBaUIsZ0JBQWdCLEdBQUcsd0NBQXdDLDRCQUE0QixpQ0FBaUMsR0FBRyw0Q0FBNEMsNEJBQTRCLCtCQUErQixHQUFHLGlCQUFpQixlQUFlLHlCQUF5QixtQkFBbUIsZ0JBQWdCLHNCQUFzQixvQkFBb0IsdUNBQXVDLEdBQUcsb0JBQW9CLHlCQUF5QixvQkFBb0IsR0FBRyxzREFBc0QsMkJBQTJCLGtDQUFrQyw4QkFBOEIsaUJBQWlCLHlCQUF5Qix1Q0FBdUMsR0FBRyx1QkFBdUIsNEJBQTRCLGVBQWUsMkJBQTJCLGdDQUFnQyxvQkFBb0IsR0FBRyx3QkFBd0Isd0JBQXdCLEdBQUcsZ0RBQWdELDBCQUEwQixHQUFHLHlCQUF5QiwwQkFBMEIsNEJBQTRCLDZDQUE2QyxlQUFlLGdCQUFnQixHQUFHLCtCQUErQix1QkFBdUIsNkJBQTZCLHNCQUFzQixHQUFHLDBCQUEwQix1QkFBdUIsd0JBQXdCLGtDQUFrQyxzQkFBc0IsR0FBRyxpQkFBaUIscUJBQXFCLHVCQUF1QixtQkFBbUIsZUFBZSxvQkFBb0IsR0FBRyxpQkFBaUIsZUFBZSx1QkFBdUIsb0JBQW9CLHlDQUF5QyxzQkFBc0Isd0JBQXdCLEdBQUcsMkJBQTJCLG1DQUFtQyw2QkFBNkIsR0FBRywrQkFBK0Isc0JBQXNCLG9CQUFvQiwwQkFBMEIsb0NBQW9DLEtBQUssZUFBZSxvQkFBb0IsS0FBSyxvQkFBb0Isa0JBQWtCLEtBQUssdUJBQXVCLHdCQUF3QixLQUFLLG1CQUFtQixzQkFBc0IsS0FBSyxvQkFBb0IsMEJBQTBCLG9CQUFvQixxQkFBcUIsaUJBQWlCLDJCQUEyQixLQUFLLGdCQUFnQixrQkFBa0Isc0JBQXNCLG9CQUFvQixLQUFLLFVBQVUsaUJBQWlCLEtBQUssb0JBQW9CLHlCQUF5QixLQUFLLG1CQUFtQixnQ0FBZ0MsaUNBQWlDLEtBQUssMERBQTBELHdCQUF3QixLQUFLLHNDQUFzQyx5QkFBeUIsc0JBQXNCLG9CQUFvQixpQkFBaUIsS0FBSywwQ0FBMEMsZ0RBQWdELEtBQUssMkJBQTJCLGtCQUFrQixLQUFLLGlDQUFpQyxzQkFBc0IsS0FBSyx5Q0FBeUMsc0JBQXNCLEtBQUssbUJBQW1CLG1CQUFtQixpQkFBaUIsd0JBQXdCLEtBQUssc0JBQXNCLG9CQUFvQixLQUFLLHNIQUFzSCwrQkFBK0IsS0FBSyxHQUFHLE9BQU8saUZBQWlGLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxVQUFVLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLFVBQVUsS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxVQUFVLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxXQUFXLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxXQUFXLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxNQUFNLFVBQVUsS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsTUFBTSxXQUFXLEtBQUssV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssV0FBVyxXQUFXLE1BQU0sV0FBVyxLQUFLLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLE1BQU0sVUFBVSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFVBQVUsVUFBVSxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLFdBQVcsV0FBVyxNQUFNLEtBQUssS0FBSyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxXQUFXLE1B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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEI7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLFFBQVE7QUFDckI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMLEdBQUc7QUFDSDtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNuWEE7QUFBQTtBQUFBO0FBQUE7QUFBeUY7QUFDekYsWUFBZ0k7O0FBRWhJOztBQUVBO0FBQ0E7O0FBRUEsYUFBYSwwR0FBRyxDQUFDLDRIQUFPOzs7O0FBSVQsMkxBQU8sYUFBYSxFIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvc2NyaXB0cy5qc1wiKTtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiOnJvb3Qge1xcbiAgLS1iZy1saWdodDogcmdiYSg1MCwgNTAsIDUxLCAxKTtcXG4gIC0tYmctZGFyazogcmdiYSgyOCwgMjgsIDI5LCAxKTtcXG4gIC0td2hpdGU6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMSk7XFxuICAtLWFjY2VudC1yZWQ6IHJnYmEoMjUxLCA1NCwgNjQsIDEpO1xcbiAgLS1hY2NlbnQtZ3JleTogaHNsKDMwLCAxJSwgMzclKTtcXG4gIC0tYWNjZW50LW5hdnk6IHJnYmEoMjksIDUyLCA2NCwgMSk7XFxuICAtLWFjY2VudC1ibHVlOiByZ2JhKDMxLCA3MiwgMTI2LCAxKTtcXG4gIC0tYWNjZW50LXRlYWw6IHJnYmEoMzYsIDEyMywgMTYwLCAwLjgpO1xcbiAgLS1hY2NlbnQtZGFya3JlZDogcmdiKDExNywgNywgMzUsIDEpO1xcbiAgLS10cmFuc3AtdGVhbDogcmdiYSg4NCwgMTIyLCAxNzIsIDAuNSk7XFxuICAtLXRyYW5zcC13aGl0ZTogcmdiKDI1NSwgMjU1LCAyNTUsIDAuNSk7XFxuICAtLXRyYW5zcC1iZy1saWdodDogcmdiYSg1MCwgNTAsIDUxLCAwLjkpO1xcbn1cXG5cXG4qIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG5ib2R5IHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBmb250LXNpemU6IDAuM3JlbTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiS29Ib1xcXCIsIHNhbnMtc2VyaWY7XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG5oZWFkZXIsXFxuZm9vdGVyIHtcXG4gIGhlaWdodDogMTB2aDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWxpZ2h0KTtcXG59XFxuXFxuLyogdXRpbGl0eSAqL1xcbmJ1dHRvbiB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAyMCU7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3Atd2hpdGUpO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1uYXZ5KTtcXG59XFxuXFxuLmJ0biB7XFxuICBib3JkZXI6IG5vbmU7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xcbiAgcGFkZGluZzogMC4zcmVtIDMuM3JlbTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1kYXJrcmVkKTtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi5mbGV4LXJvdyB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmZsZXgtY29sdW1uIHtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi8qIEljb25zICovXFxuLmljb24ge1xcbiAgYm9yZGVyOiAycHggc29saWQgdmFyKC0tYWNjZW50LWJsdWUpO1xcbiAgYm9yZGVyLXJhZGl1czogMTAlO1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwLXRlYWwpO1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxufVxcblxcbi5pY29uLXNtYWxsIHtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbn1cXG5cXG4uaWNvbi1vbiB7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LXJlZCk7XFxufVxcblxcbi8qIGhlYWRlciAqL1xcbmhlYWRlciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHZhcigtLWFjY2VudC1ncmV5KSBzb2xpZDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xcbn1cXG5cXG4uZmlsdGVyLWxvZ28tY29udGFpbmVyIHtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgd2lkdGg6IDEwcmVtO1xcbn1cXG5cXG5oZWFkZXIgaSB7XFxuICBmb250LXNpemU6IDRyZW07XFxufVxcblxcbmgxIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG5oMSBwOmZpcnN0LWNoaWxkIHtcXG4gIGZvbnQtc2l6ZTogMC43NXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LXJlZCk7XFxufVxcblxcbmgxIHA6bnRoLWNoaWxkKDIpIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuaDEgcDpudGgtY2hpbGQoMykge1xcbiAgZm9udC1mYW1pbHk6IFxcXCJTZWF3ZWVkIFNjcmlwdFxcXCIsIGN1cnNpdmU7XFxufVxcblxcbmgxIGkge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA1cmVtO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC10ZWFsKTtcXG59XFxuXFxuLyogRmlsdGVyIE1lbnUgKi9cXG4uZmlsdGVyLW1lbnUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgei1pbmRleDogMTtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBib3JkZXItcmlnaHQ6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtZ3JleSk7XFxuICB3aWR0aDogNjAlO1xcbiAgaGVpZ2h0OiAzOS45cmVtO1xcbiAgcGFkZGluZzogMC41cmVtIDAgMCAwLjVyZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3AtYmctbGlnaHQpO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG5maWVsZHNldCB7XFxuICB6LWluZGV4OiAyO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgd2lkdGg6IDEzcmVtO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG5saSB7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW46IDAuNXJlbSAwLjlyZW07XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmlucHV0W3R5cGU9Y2hlY2tib3hdIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbmlucHV0W3R5cGU9c3VibWl0XSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT1zdWJtaXRdOmhvdmVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCA1cHggdmFyKC0td2hpdGUpO1xcbiAgdGV4dC1zaGFkb3c6IDAgMCAzcHggdmFyKC0td2hpdGUpO1xcbn1cXG5cXG4vKiBNZXNzYWdlIEJhciAqL1xcbi5tZXNzYWdlLWJhciB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBwYWRkaW5nLWJvdHRvbTogMC4zcmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDV2aDtcXG4gIHBhZGRpbmc6IDAuNXJlbSAwO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYWNjZW50LWRhcmtyZWQpO1xcbiAgbGluZS1oZWlnaHQ6IDEuMnJlbTtcXG59XFxuXFxuLm1lc3NhZ2UtYmFyIGgyIHtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgZm9udC13ZWlnaHQ6IDIwMDtcXG59XFxuXFxuLyogTWFpbiAqL1xcbm1haW4ge1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1kYXJrKTtcXG59XFxuXFxuLmVycm9yLXZpZXcge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5lcnJvci1tZXNzYWdlIHtcXG4gIG1hcmdpbjogM3JlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuLyogUmVjaXBlIENhcmQgKi9cXG4ucmVjaXBlLWNhcmQge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgei1pbmRleDogMTtcXG4gIG1hcmdpbjogMXJlbSAwO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweDtcXG4gIG1pbi1oZWlnaHQ6IDEycmVtO1xcbiAgd2lkdGg6IDIwcmVtO1xcbn1cXG5cXG4ucmVjaXBlLWNhcmQgaW1nIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAgMCAxNXB4IDE1cHg7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLnJlY2lwZS1jYXJkLWluZm8ge1xcbiAgei1pbmRleDogMTtcXG4gIG1heC1oZWlnaHQ6IDRyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQ6IHJnYmEoNTAsIDUwLCA1MSwgMC45KTtcXG59XFxuXFxuLnJlY2lwZS10YWctY29udGFpbmVyIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDE1LjVyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbi5yZWNpcGUtbmFtZSB7XFxuICBtaW4td2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nLWxlZnQ6IDAuNXJlbTtcXG4gIGZvbnQtc2l6ZTogMS40cmVtO1xcbiAgd29yZC1icmVhazogYnJlYWstYWxsO1xcbn1cXG5cXG4udGFnLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDM0JTtcXG4gIGZsZXgtd3JhcDogd3JhcDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLWxlZnQ6IDAuMnJlbTtcXG4gIHdpZHRoOiA4MCU7XFxuICBwYWRkaW5nOiAwLjRyZW0gMDtcXG59XFxuXFxuLnRhZ3Mge1xcbiAgbWFyZ2luOiAwIDAuM3JlbSAwLjVyZW0gMDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nOiAwIDAuNXJlbSAwLjFyZW0gMC41cmVtO1xcbiAgZm9udC1zaXplOiAwLjlyZW07XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LXRlYWwpO1xcbn1cXG5cXG4ucmVjaXBlLWNhcmQtYnV0dG9ucy1jb250YWluZXIge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBoZWlnaHQ6IDYwJTtcXG4gIHdpZHRoOiAzcmVtO1xcbn1cXG5cXG4ucmVjaXBlLWNhcmQtYnV0dG9ucy1jb250YWluZXIgYnV0dG9uIHtcXG4gIHBhZGRpbmc6IDAgMC4ycmVtO1xcbiAgZm9udC1zaXplOiAxLjhyZW07XFxufVxcblxcbi8qIFJlY2lwZSBWaWV3ICovXFxuLnJlY2lwZS1jYXJkLWFsbCB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxufVxcblxcbi5mdWxsLXJlY2lwZS12aWV3IC5yZWNpcGUtY2FyZCBpbWcge1xcbiAgYWxpZ24tY29udGVudDogZmxleC1lbmQ7XFxuICBib3JkZXItcmFkaXVzOiAxNXB4IDE1cHggMCAwO1xcbn1cXG5cXG4uZnVsbC1yZWNpcGUtdmlldyAuZnVsbC1yZWNpcGUtaW5mbyBoNCB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjRyZW0gMDtcXG4gIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbn1cXG5cXG4udG90YWwtY29zdCB7XFxuICB6LWluZGV4OiAxO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMCAwLjRyZW07XFxuICBmb250LXNpemU6IDFyZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3AtYmctbGlnaHQpO1xcbn1cXG5cXG4udG90YWwtY29zdCBoNSB7XFxuICBtYXJnaW4tcmlnaHQ6IDAuM3JlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmZ1bGwtcmVjaXBlLXZpZXcgLnJlY2lwZS1jYXJkLWJ1dHRvbnMtY29udGFpbmVyIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtc3RhcnQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMCAwIDA7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcC1iZy1saWdodCk7XFxufVxcblxcbi5mdWxsLXJlY2lwZS1pbmZvIHtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgd2lkdGg6IDg1JTtcXG4gIHBhZGRpbmc6IDAuM3JlbSAwLjVyZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1saWdodCk7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5pbnN0cnVjdGlvbnMtaW5mbyB7XFxuICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xcbn1cXG5cXG4uaW5ncmVkaWVudHMtaW5mbyBwLFxcbi5pbnN0cnVjdGlvbnMtaW5mbyBwIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbTtcXG59XFxuXFxuLnRhZy1jb250YWluZXItZnVsbCB7XFxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGJvcmRlci1ib3R0b206IHZhcigtLWJnLWxpZ2h0KSAzcHggc29saWQ7XFxuICB6LWluZGV4OiAyO1xcbiAgaGVpZ2h0OiAxMCU7XFxufVxcblxcbi50YWctY29udGFpbmVyLWZ1bGwgLnRhZ3Mge1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbiAgcGFkZGluZzogMC4xMjVyZW0gMC44cmVtO1xcbiAgZm9udC1zaXplOiAwLjVyZW07XFxufVxcblxcbi8qIEZvb3RlciAqL1xcbmZvb3RlciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBwYWRkaW5nOiAwIDAuNHJlbTtcXG59XFxuXFxuLnNlYXJjaC1iYXIge1xcbiAgbWFyZ2luOiAwIDAuMnJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIGhlaWdodDogMi40cmVtO1xcbiAgd2lkdGg6IDc1JTtcXG4gIHBhZGRpbmc6IDAuNHJlbTtcXG59XFxuXFxuLnNlYXJjaC1idG4ge1xcbiAgei1pbmRleDogMjtcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXG4gIHBhZGRpbmc6IDAuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXRyYW5zcC10ZWFsKTtcXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC50YWdzIHtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWFjY2VudC1ibHVlKTtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcXG59XFxuXFxuQG1lZGlhIChtaW4td2lkdGg6IDM3NnB4KSB7XFxuICAuZGlzcGxheS1kZXNrdG9wIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1mbG93OiByb3cgd3JhcDtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB9XFxuXFxuICAuaGlkZGVuIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gIH1cXG5cXG4gIC5tZXNzYWdlLWJhciB7XFxuICAgIGhlaWdodDogN3ZoO1xcbiAgfVxcblxcbiAgLm1lc3NhZ2UtYmFyIGgyIHtcXG4gICAgZm9udC1zaXplOiAxLjhyZW07XFxuICB9XFxuXFxuICAuZXJyb3ItdmlldyB7XFxuICAgIHBhZGRpbmc6IDAgMXJlbTtcXG4gIH1cXG5cXG4gIC5maWx0ZXItbWVudSB7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGhlaWdodDogNzcuOCU7XFxuICAgIG1heC13aWR0aDogNDAlO1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG4gIH1cXG5cXG4gIGZpZWxkc2V0IHtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIG1heC1oZWlnaHQ6IDgwJTtcXG4gICAgbWFyZ2luLXRvcDogMDtcXG4gIH1cXG5cXG4gIGxpIHtcXG4gICAgcGFkZGluZzogMDtcXG4gIH1cXG5cXG4gIC5yZWNpcGUtY2FyZCB7XFxuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcXG4gIH1cXG5cXG4gIC50b3RhbC1jb3N0IHtcXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gICAgYmFja2dyb3VuZDogdmFyKC0tYmctZGFyayk7XFxuICB9XFxuXFxuICAudG90YWwtY29zdCBwLFxcbi50b3RhbC1jb3N0IGg1LFxcbi5mdWxsLXJlY2lwZS1pbmZvIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuXFxuICAuZnVsbC1yZWNpcGUtdmlldyAucmVjaXBlLWNhcmQge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXG4gICAgd2lkdGg6IDg1JTtcXG4gIH1cXG5cXG4gIC5mdWxsLXJlY2lwZS12aWV3IC5yZWNpcGUtY2FyZCBpbWcge1xcbiAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcXG4gIH1cXG5cXG4gIC50YWctY29udGFpbmVyLWZ1bGwge1xcbiAgICBoZWlnaHQ6IDE1JTtcXG4gIH1cXG5cXG4gIC50YWctY29udGFpbmVyLWZ1bGwgLnRhZ3Mge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuXFxuICBmb290ZXIgLmljb24tc21hbGwsXFxuZm9vdGVyIC5pY29uIHtcXG4gICAgZm9udC1zaXplOiAycmVtO1xcbiAgfVxcblxcbiAgLnNlYXJjaC1iYXIge1xcbiAgICBoZWlnaHQ6IDNyZW07XFxuICAgIHdpZHRoOiA4MCU7XFxuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgfVxcblxcbiAgLmVycm9yLW1lc3NhZ2Uge1xcbiAgICBtYXJnaW46IDEwcmVtO1xcbiAgfVxcblxcbiAgaDE6aG92ZXIsXFxuLmV4aXQtY2FyZDpob3ZlcixcXG4uaGVhcnQtY2FyZDpob3ZlcixcXG4uY2FsZW5kYXItY2FyZDpob3ZlcixcXG4uZmlsdGVyLWJ0bjpob3ZlcixcXG4uc2VhcmNoLWJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcXG4gIH1cXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSwrQkFBQTtFQUNBLDhCQUFBO0VBQ0EsK0JBQUE7RUFFQSxrQ0FBQTtFQUNBLCtC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a0JBQUE7RUFDQSxjQUFBO0VBQ0EsVUFBQTtFQUNBLGVBQUE7QUFGRjs7QUFLQTtFQUNFLFVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxvQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLDhCQUFBO0VBQ0Esd0JBQUE7QUFGRjs7QUFLQTtFQUNFO0lBQ0UsYUFBQTtJQUNBLG1CQUFBO0lBQ0EsNkJBQUE7RUFGRjs7RUFLQTtJQUNFLGFBQUE7RUFGRjs7RUFJQTtJQUNFLFdBQUE7RUFERjs7RUFHQTtJQUNFLGlCQUFBO0VBQUY7O0VBR0E7SUFDRSxlQUFBO0VBQUY7O0VBR0E7SUFDRSxtQkFBQTtJQUNBLGFBQUE7SUFDQSxjQUFBO0lBQ0EsVUFBQTtJQUNBLG9CQUFBO0VBQUY7O0VBR0E7SUFDRSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGFBQUE7RUFBRjs7RUFHQTtJQUNFLFVBQUE7RUFBRjs7RUFFQTtJQUNFLGtCQUFBO0VBQ0Y7O0VBRUE7SUFDRSx5QkFBQTtJQUNBLDBCQUFBO0VBQ0Y7O0VBRUE7OztJQUdFLGlCQUFBO0VBQ0Y7O0VBRUE7SUFDRSxrQkFBQTtJQUNBLGVBQUE7SUFDQSxhQUFBO0lBQ0EsVUFBQTtFQUNGOztFQUVBO0lBQ0UseUNBQUE7RUFDRjs7RUFFQTtJQUNFLFdBQUE7RUFDRjs7RUFFQTtJQUNFLGVBQUE7RUFDRjs7RUFFQTs7SUFFRSxlQUFBO0VBQ0Y7O0VBRUE7SUFDRSxZQUFBO0lBQ0EsVUFBQTtJQUNBLGlCQUFBO0VBQ0Y7O0VBRUE7SUFDRSxhQUFBO0VBQ0Y7O0VBRUE7Ozs7OztJQU1FLHdCQUFBO0VBQ0Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCI6cm9vdCB7XFxuICAtLWJnLWxpZ2h0OiByZ2JhKDUwLCA1MCwgNTEsIDEpO1xcbiAgLS1iZy1kYXJrOiByZ2JhKDI4LCAyOCwgMjksIDEpO1xcbiAgLS13aGl0ZTogcmdiYSgyNTUsIDI1NSwgMjU1LCAxKTtcXG5cXG4gIC0tYWNjZW50LXJlZDogcmdiYSgyNTEsIDU0LCA2NCwgMSk7XFxuICAtLWFjY2VudC1ncmV5OiBoc2woMzAsIDElLCAzNyUpO1xcbiAgLS1hY2NlbnQtbmF2eTogcmdiYSgyOSwgNTIsIDY0LCAxKTtcXG4gIC0tYWNjZW50LWJsdWU6IHJnYmEoMzEsIDcyLCAxMjYsIDEpO1xcbiAgLS1hY2NlbnQtdGVhbDogcmdiYSgzNiwgMTIzLCAxNjAsIDAuOCk7XFxuICAtLWFjY2VudC1kYXJrcmVkOiByZ2IoMTE3LCA3LCAzNSwgMSk7XFxuXFxuICAtLXRyYW5zcC10ZWFsOiByZ2JhKDg0LCAxMjIsIDE3MiwgMC41KTtcXG4gIC0tdHJhbnNwLXdoaXRlOiByZ2IoMjU1LCAyNTUsIDI1NSwgMC41KTtcXG4gIC0tdHJhbnNwLWJnLWxpZ2h0OiByZ2JhKDUwLCA1MCwgNTEsIDAuOSk7XFxufVxcblxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbmJvZHkge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGZvbnQtc2l6ZTogMC4zcmVtO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJLb0hvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGNvbG9yOiB2YXIoLS13aGl0ZSk7XFxufVxcblxcbmhlYWRlcixcXG5mb290ZXIge1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYmctbGlnaHQpO1xcbn1cXG5cXG4vKiB1dGlsaXR5ICovXFxuYnV0dG9uIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDIwJTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcC13aGl0ZSk7XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LW5hdnkpO1xcbn1cXG5cXG4uYnRuIHtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XFxuICBwYWRkaW5nOiAwLjNyZW0gMy4zcmVtO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWRhcmtyZWQpO1xcbiAgY29sb3I6IHZhcigtLXdoaXRlKTtcXG59XFxuXFxuLmZsZXgtcm93IHtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uZmxleC1jb2x1bW4ge1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuLyogSWNvbnMgKi9cXG5cXG4uaWNvbiB7XFxuICBib3JkZXI6IDJweCBzb2xpZCB2YXIoLS1hY2NlbnQtYmx1ZSk7XFxuICBib3JkZXItcmFkaXVzOiAxMCU7XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS10cmFuc3AtdGVhbCk7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG59XFxuXFxuLmljb24tc21hbGwge1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxufVxcblxcbi5pY29uLW9uIHtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcXG59XFxuXFxuLyogaGVhZGVyICovXFxuaGVhZGVyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItYm90dG9tOiAxcHggdmFyKC0tYWNjZW50LWdyZXkpIHNvbGlkO1xcbiAgcGFkZGluZzogMC41cmVtIDJyZW07XFxufVxcblxcbi5maWx0ZXItbG9nby1jb250YWluZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICB3aWR0aDogMTByZW07XFxufVxcblxcbmhlYWRlciBpIHtcXG4gIGZvbnQtc2l6ZTogNHJlbTtcXG59XFxuXFxuaDEge1xcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxufVxcblxcbmgxIHA6Zmlyc3QtY2hpbGQge1xcbiAgZm9udC1zaXplOiAwLjc1cmVtO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcXG59XFxuXFxuaDEgcDpudGgtY2hpbGQoMikge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbn1cXG5cXG5oMSBwOm50aC1jaGlsZCgzKSB7XFxuICBmb250LWZhbWlseTogXFxcIlNlYXdlZWQgU2NyaXB0XFxcIiwgY3Vyc2l2ZTtcXG59XFxuXFxuaDEgaSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBmb250LXNpemU6IDVyZW07XFxuICBjb2xvcjogdmFyKC0tYWNjZW50LXRlYWwpO1xcbn1cXG5cXG4vKiBGaWx0ZXIgTWVudSAqL1xcbi5maWx0ZXItbWVudSB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB6LWluZGV4OiAxO1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGJvcmRlci1yaWdodDogMnB4IHNvbGlkIHZhcigtLWFjY2VudC1ncmV5KTtcXG4gIHdpZHRoOiA2MCU7XFxuICBoZWlnaHQ6IDM5LjlyZW07XFxuICBwYWRkaW5nOiAwLjVyZW0gMCAwIDAuNXJlbTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcC1iZy1saWdodCk7XFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbmZpZWxkc2V0IHtcXG4gIHotaW5kZXg6IDI7XFxuICBmbGV4LXdyYXA6IHdyYXA7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbi10b3A6IDFyZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICB3aWR0aDogMTNyZW07XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmxpIHtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIG1hcmdpbjogMC41cmVtIDAuOXJlbTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwiY2hlY2tib3hcXFwiXSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG5pbnB1dFt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiAxcmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgbGV0dGVyLXNwYWNpbmc6IDAuM3JlbTtcXG59XFxuXFxuaW5wdXRbdHlwZT1cXFwic3VibWl0XFxcIl06aG92ZXIge1xcbiAgYm94LXNoYWRvdzogMCAwIDVweCB2YXIoLS13aGl0ZSk7XFxuICB0ZXh0LXNoYWRvdzogMCAwIDNweCB2YXIoLS13aGl0ZSk7XFxufVxcblxcbi8qIE1lc3NhZ2UgQmFyICovXFxuLm1lc3NhZ2UtYmFyIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHBhZGRpbmctYm90dG9tOiAwLjNyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogNXZoO1xcbiAgcGFkZGluZzogMC41cmVtIDA7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1hY2NlbnQtZGFya3JlZCk7XFxuICBsaW5lLWhlaWdodDogMS4ycmVtO1xcbn1cXG5cXG4ubWVzc2FnZS1iYXIgaDIge1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBmb250LXdlaWdodDogMjAwO1xcbn1cXG5cXG4vKiBNYWluICovXFxubWFpbiB7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWRhcmspO1xcbn1cXG5cXG4uZXJyb3ItdmlldyB7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLmVycm9yLW1lc3NhZ2Uge1xcbiAgbWFyZ2luOiAzcmVtO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgZm9udC1zaXplOiA0cmVtO1xcbn1cXG5cXG4vKiBSZWNpcGUgQ2FyZCAqL1xcbi5yZWNpcGUtY2FyZCB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICB6LWluZGV4OiAxO1xcbiAgbWFyZ2luOiAxcmVtIDA7XFxuICBib3JkZXItcmFkaXVzOiAwIDAgMTVweCAxNXB4O1xcbiAgbWluLWhlaWdodDogMTJyZW07XFxuICB3aWR0aDogMjByZW07XFxufVxcblxcbi5yZWNpcGUtY2FyZCBpbWcge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMCAwIDE1cHggMTVweDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4ucmVjaXBlLWNhcmQtaW5mbyB7XFxuICB6LWluZGV4OiAxO1xcbiAgbWF4LWhlaWdodDogNHJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZDogcmdiYSg1MCwgNTAsIDUxLCAwLjkpO1xcbn1cXG5cXG4ucmVjaXBlLXRhZy1jb250YWluZXIge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTUuNXJlbTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG59XFxuXFxuLnJlY2lwZS1uYW1lIHtcXG4gIG1pbi13aWR0aDogMTAwJTtcXG4gIHBhZGRpbmctbGVmdDogMC41cmVtO1xcbiAgZm9udC1zaXplOiAxLjRyZW07XFxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XFxufVxcblxcbi50YWctY29udGFpbmVyIHtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMzQlO1xcbiAgZmxleC13cmFwOiB3cmFwO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tbGVmdDogMC4ycmVtO1xcbiAgd2lkdGg6IDgwJTtcXG4gIHBhZGRpbmc6IDAuNHJlbSAwO1xcbn1cXG5cXG4udGFncyB7XFxuICBtYXJnaW46IDAgMC4zcmVtIDAuNXJlbSAwO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIHBhZGRpbmc6IDAgMC41cmVtIDAuMXJlbSAwLjVyZW07XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1hY2NlbnQtdGVhbCk7XFxufVxcblxcbi5yZWNpcGUtY2FyZC1idXR0b25zLWNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIGhlaWdodDogNjAlO1xcbiAgd2lkdGg6IDNyZW07XFxufVxcblxcbi5yZWNpcGUtY2FyZC1idXR0b25zLWNvbnRhaW5lciBidXR0b24ge1xcbiAgcGFkZGluZzogMCAwLjJyZW07XFxuICBmb250LXNpemU6IDEuOHJlbTtcXG59XFxuXFxuLyogUmVjaXBlIFZpZXcgKi9cXG5cXG4ucmVjaXBlLWNhcmQtYWxsIHtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmZ1bGwtcmVjaXBlLXZpZXcgLnJlY2lwZS1jYXJkIGltZyB7XFxuICBhbGlnbi1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGJvcmRlci1yYWRpdXM6IDE1cHggMTVweCAwIDA7XFxufVxcblxcbi5mdWxsLXJlY2lwZS12aWV3IC5mdWxsLXJlY2lwZS1pbmZvIGg0IHtcXG4gIG1hcmdpbi1ib3R0b206IDAuNHJlbSAwO1xcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxufVxcblxcbi50b3RhbC1jb3N0IHtcXG4gIHotaW5kZXg6IDE7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGhlaWdodDogMS41cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwIDAuNHJlbTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLXRyYW5zcC1iZy1saWdodCk7XFxufVxcblxcbi50b3RhbC1jb3N0IGg1IHtcXG4gIG1hcmdpbi1yaWdodDogMC4zcmVtO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbn1cXG5cXG4uZnVsbC1yZWNpcGUtdmlldyAucmVjaXBlLWNhcmQtYnV0dG9ucy1jb250YWluZXIge1xcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xcbiAgYm9yZGVyLXJhZGl1czogMTVweCAwIDAgMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgYmFja2dyb3VuZDogdmFyKC0tdHJhbnNwLWJnLWxpZ2h0KTtcXG59XFxuXFxuLmZ1bGwtcmVjaXBlLWluZm8ge1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogODUlO1xcbiAgcGFkZGluZzogMC4zcmVtIDAuNXJlbTtcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJnLWxpZ2h0KTtcXG4gIGZvbnQtc2l6ZTogMXJlbTtcXG59XFxuXFxuLmluc3RydWN0aW9ucy1pbmZvIHtcXG4gIHRleHQtYWxpZ246IGp1c3RpZnk7XFxufVxcblxcbi5pbmdyZWRpZW50cy1pbmZvIHAsXFxuLmluc3RydWN0aW9ucy1pbmZvIHAge1xcbiAgbWFyZ2luLWJvdHRvbTogMC40cmVtO1xcbn1cXG5cXG4udGFnLWNvbnRhaW5lci1mdWxsIHtcXG4gIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYm9yZGVyLWJvdHRvbTogdmFyKC0tYmctbGlnaHQpIDNweCBzb2xpZDtcXG4gIHotaW5kZXg6IDI7XFxuICBoZWlnaHQ6IDEwJTtcXG59XFxuXFxuLnRhZy1jb250YWluZXItZnVsbCAudGFncyB7XFxuICBtYXJnaW4tdG9wOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjEyNXJlbSAwLjhyZW07XFxuICBmb250LXNpemU6IDAuNXJlbTtcXG59XFxuXFxuLyogRm9vdGVyICovXFxuZm9vdGVyIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHBhZGRpbmc6IDAgMC40cmVtO1xcbn1cXG5cXG4uc2VhcmNoLWJhciB7XFxuICBtYXJnaW46IDAgMC4ycmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgaGVpZ2h0OiAyLjRyZW07XFxuICB3aWR0aDogNzUlO1xcbiAgcGFkZGluZzogMC40cmVtO1xcbn1cXG5cXG4uc2VhcmNoLWJ0biB7XFxuICB6LWluZGV4OiAyO1xcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcbiAgcGFkZGluZzogMC41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tdHJhbnNwLXRlYWwpO1xcbiAgZm9udC1zaXplOiAxLjNyZW07XFxuICBjb2xvcjogdmFyKC0td2hpdGUpO1xcbn1cXG5cXG5pbnB1dDpjaGVja2VkICsgLnRhZ3Mge1xcbiAgYmFja2dyb3VuZDogdmFyKC0tYWNjZW50LWJsdWUpO1xcbiAgY29sb3I6IHZhcigtLWFjY2VudC1yZWQpO1xcbn1cXG5cXG5AbWVkaWEgKG1pbi13aWR0aDogMzc2cHgpIHtcXG4gIC5kaXNwbGF5LWRlc2t0b3Age1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWZsb3c6IHJvdyB3cmFwO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIH1cXG5cXG4gIC5oaWRkZW4ge1xcbiAgICBkaXNwbGF5OiBub25lO1xcbiAgfVxcbiAgLm1lc3NhZ2UtYmFyIHtcXG4gICAgaGVpZ2h0OiA3dmg7XFxuICB9XFxuICAubWVzc2FnZS1iYXIgaDIge1xcbiAgICBmb250LXNpemU6IDEuOHJlbTtcXG4gIH1cXG5cXG4gIC5lcnJvci12aWV3IHtcXG4gICAgcGFkZGluZzogMCAxcmVtO1xcbiAgfVxcblxcbiAgLmZpbHRlci1tZW51IHtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgaGVpZ2h0OiA3Ny44JTtcXG4gICAgbWF4LXdpZHRoOiA0MCU7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbiAgfVxcblxcbiAgZmllbGRzZXQge1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgbWF4LWhlaWdodDogODAlO1xcbiAgICBtYXJnaW4tdG9wOiAwO1xcbiAgfVxcblxcbiAgbGkge1xcbiAgICBwYWRkaW5nOiAwO1xcbiAgfVxcbiAgLnJlY2lwZS1jYXJkIHtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xcbiAgfVxcblxcbiAgLnRvdGFsLWNvc3Qge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iZy1kYXJrKTtcXG4gIH1cXG5cXG4gIC50b3RhbC1jb3N0IHAsXFxuICAudG90YWwtY29zdCBoNSxcXG4gIC5mdWxsLXJlY2lwZS1pbmZvIHtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuXFxuICAuZnVsbC1yZWNpcGUtdmlldyAucmVjaXBlLWNhcmQge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1yaWdodDogMDtcXG4gICAgaGVpZ2h0OiAxNXJlbTtcXG4gICAgd2lkdGg6IDg1JTtcXG4gIH1cXG5cXG4gIC5mdWxsLXJlY2lwZS12aWV3IC5yZWNpcGUtY2FyZCBpbWcge1xcbiAgICBiYWNrZ3JvdW5kOiBjZW50ZXIgY2VudGVyL2NvdmVyIG5vLXJlcGVhdDtcXG4gIH1cXG5cXG4gIC50YWctY29udGFpbmVyLWZ1bGwge1xcbiAgICBoZWlnaHQ6IDE1JTtcXG4gIH1cXG5cXG4gIC50YWctY29udGFpbmVyLWZ1bGwgLnRhZ3Mge1xcbiAgICBmb250LXNpemU6IDFyZW07XFxuICB9XFxuXFxuICBmb290ZXIgLmljb24tc21hbGwsXFxuICBmb290ZXIgLmljb24ge1xcbiAgICBmb250LXNpemU6IDJyZW07XFxuICB9XFxuXFxuICAuc2VhcmNoLWJhciB7XFxuICAgIGhlaWdodDogM3JlbTtcXG4gICAgd2lkdGg6IDgwJTtcXG4gICAgZm9udC1zaXplOiAxLjVyZW07XFxuICB9XFxuXFxuICAuZXJyb3ItbWVzc2FnZSB7XFxuICAgIG1hcmdpbjogMTByZW07XFxuICB9XFxuXFxuICBoMTpob3ZlcixcXG4gIC5leGl0LWNhcmQ6aG92ZXIsXFxuICAuaGVhcnQtY2FyZDpob3ZlcixcXG4gIC5jYWxlbmRhci1jYXJkOmhvdmVyLFxcbiAgLmZpbHRlci1idG46aG92ZXIsXFxuICAuc2VhcmNoLWJ0bjpob3ZlciB7XFxuICAgIGNvbG9yOiB2YXIoLS1hY2NlbnQtcmVkKTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IGlmICh0eXBlb2YgU3ltYm9sID09PSBcInVuZGVmaW5lZFwiIHx8ICEoU3ltYm9sLml0ZXJhdG9yIGluIE9iamVjdChhcnIpKSkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9lID0gdW5kZWZpbmVkOyB0cnkgeyBmb3IgKHZhciBfaSA9IGFycltTeW1ib2wuaXRlcmF0b3JdKCksIF9zOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwibGV0IHVzZXJzRGF0YSA9ICgpID0+IGZldGNoKFwiaHR0cHM6Ly93aGF0cy1jb29raW4tYXBpLXR5bHJzLmhlcm9rdWFwcC5jb20vYXBpL3YxL3VzZXJzXCIpXG4gIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnZXJyb3InKSk7XG5cbmxldCBpbmdyZWRpZW50RGF0YSA9ICgpID0+IGZldGNoKFwiaHR0cHM6Ly93aGF0cy1jb29raW4tYXBpLXR5bHJzLmhlcm9rdWFwcC5jb20vYXBpL3YxL2luZ3JlZGllbnRzXCIpXG4gIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZygnZXJyb3InKSk7XG5cbmxldCByZWNpcGVEYXRhID0gKCkgPT4gZmV0Y2goXCJodHRwczovL3doYXRzLWNvb2tpbi1hcGktdHlscnMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvcmVjaXBlc1wiKVxuICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coJ2Vycm9yJykpO1xuXG5mdW5jdGlvbiByZXRyaWV2ZURhdGEoKSB7XG4gIHJldHVybiBQcm9taXNlLmFsbChbdXNlcnNEYXRhKCksIGluZ3JlZGllbnREYXRhKCksIHJlY2lwZURhdGEoKV0pXG59XG5cbmV4cG9ydCBkZWZhdWx0IHtyZXRyaWV2ZURhdGF9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbWF4LWxlbiAqL1xuY2xhc3MgUmVjaXBlIHtcbiAgY29uc3RydWN0b3IocmVjaXBlRGV0YWlscywgaW5ncmVkaWVudExpc3QpIHtcbiAgICB0aGlzLmlkID0gcmVjaXBlRGV0YWlscy5pZDtcbiAgICB0aGlzLmltYWdlID0gcmVjaXBlRGV0YWlscy5pbWFnZTtcbiAgICB0aGlzLm5hbWUgPSByZWNpcGVEZXRhaWxzLm5hbWUudG9Mb3dlckNhc2UoKS5zcGxpdCgnICcpO1xuICAgIHRoaXMuaW5zdHJ1Y3Rpb25zID0gcmVjaXBlRGV0YWlscy5pbnN0cnVjdGlvbnM7XG4gICAgdGhpcy50YWdzID0gcmVjaXBlRGV0YWlscy50YWdzO1xuICAgIHRoaXMuaW5ncmVkaWVudHMgPSB0aGlzLmZldGNoSW5ncmVkaWVudHMocmVjaXBlRGV0YWlscy5pbmdyZWRpZW50cywgaW5ncmVkaWVudExpc3QpO1xuICAgIHRoaXMuaW5ncmVkaWVudE5hbWVzID0gdGhpcy5nZXRJbmdyZWRpZW50TmFtZXMoKTtcbiAgICB0aGlzLmlzRmF2b3JpdGVkID0gZmFsc2U7XG4gICAgdGhpcy5pc1RvQmVDb29rZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGZldGNoSW5ncmVkaWVudHMocmVjaXBlSW5ncmVkaWVudHMsIGluZ3JlZGllbnRMaXN0KSB7XG4gICAgcmV0dXJuIHJlY2lwZUluZ3JlZGllbnRzLm1hcCgocmVjaXBlSW5ncmVkaWVudCkgPT4ge1xuICAgICAgbGV0IG5ld0luZ3JlZGllbnRJbmZvID0gaW5ncmVkaWVudExpc3QuZmluZCgoaW5ncmVkaWVudCkgPT4ge1xuICAgICAgICByZXR1cm4gaW5ncmVkaWVudC5pZCA9PT0gcmVjaXBlSW5ncmVkaWVudC5pZDtcbiAgICAgIH0pXG4gICAgICByZWNpcGVJbmdyZWRpZW50Lm5hbWUgPSBuZXdJbmdyZWRpZW50SW5mby5uYW1lO1xuICAgICAgcmVjaXBlSW5ncmVkaWVudC5lc3RpbWF0ZWRDb3N0SW5DZW50cyA9IG5ld0luZ3JlZGllbnRJbmZvLmVzdGltYXRlZENvc3RJbkNlbnRzO1xuICAgICAgcmV0dXJuIHJlY2lwZUluZ3JlZGllbnQ7XG4gICAgfSk7XG4gIH1cblxuICBnZXRJbmdyZWRpZW50TmFtZXMoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5ncmVkaWVudHMucmVkdWNlKChhY2MsIGluZ3JlZGllbnQpID0+IHtcbiAgICAgIGxldCBzZXBhcmF0ZWROYW1lcyA9IGluZ3JlZGllbnQubmFtZS5zcGxpdCgnICcpXG4gICAgICBzZXBhcmF0ZWROYW1lcy5mb3JFYWNoKChuYW1lKSA9PiB7XG4gICAgICAgIGFjYy5wdXNoKG5hbWUpO1xuICAgICAgfSlcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pXG4gIH1cblxuICBnZXRUb3RhbENvc3QoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW5ncmVkaWVudHMucmVkdWNlKChhY2N1bXVsYXRvciwgaW5ncmVkaWVudCkgPT4ge1xuICAgICAgYWNjdW11bGF0b3IgKz0gaW5ncmVkaWVudC5lc3RpbWF0ZWRDb3N0SW5DZW50cyAqIGluZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50O1xuICAgICAgcmV0dXJuIGFjY3VtdWxhdG9yO1xuICAgIH0sIDApO1xuICB9XG5cbiAgZ2V0SW5zdHJ1Y3Rpb25zKCkge1xuICAgIHJldHVybiB0aGlzLmluc3RydWN0aW9ucy5tYXAoKGluc3RydWN0aW9uKSA9PiB7XG4gICAgICByZXR1cm4gYCR7aW5zdHJ1Y3Rpb24ubnVtYmVyfS4gJHtpbnN0cnVjdGlvbi5pbnN0cnVjdGlvbn1gO1xuICAgIH0pXG4gIH1cblxuICBmYXZvcml0ZSgpIHtcbiAgICB0aGlzLmlzRmF2b3JpdGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHVuRmF2b3JpdGUoKSB7XG4gICAgdGhpcy5pc0Zhdm9yaXRlZCA9IGZhbHNlO1xuICB9XG5cbiAgdG9Db29rKCkge1xuICAgIHRoaXMuaXNUb0JlQ29va2VkID0gdHJ1ZTtcbiAgfVxuXG4gIHJlbW92ZVRvQ29vaygpIHtcbiAgICB0aGlzLmlzVG9CZUNvb2tlZCA9IGZhbHNlO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gUmVjaXBlO1xuIiwiY2xhc3MgUmVjaXBlUmVwb3NpdG9yeSB7XG4gIGNvbnN0cnVjdG9yKHJlY2lwZXMpIHtcbiAgICB0aGlzLnJlY2lwZXMgPSByZWNpcGVzXG4gIH1cbiAgZmlsdGVyUmVjaXBlcyhxdWVyeUluZm8pIHtcbiAgICBpZiAocXVlcnlJbmZvLnF1ZXJ5Lmxlbmd0aCA+IDApIHtcbiAgICAgIGxldCB0b3RhbEZpbHRlcmVkUmVjaXBlcyA9IHF1ZXJ5SW5mby5xdWVyeS5yZWR1Y2UoKGFjY3VtdWxhdG9yLCBxdWVyeSkgPT4ge1xuICAgICAgICBhY2N1bXVsYXRvciA9IGFjY3VtdWxhdG9yLmZpbHRlcigocmVjaXBlKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHJlY2lwZVtxdWVyeUluZm8udHlwZV0uaW5jbHVkZXMocXVlcnkpXG4gICAgICAgIH0pXG4gICAgICAgIHJldHVybiBhY2N1bXVsYXRvcjtcbiAgICAgIH0sIHRoaXMucmVjaXBlcyk7XG4gICAgICByZXR1cm4gdG90YWxGaWx0ZXJlZFJlY2lwZXM7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gIH1cbiAgZ2VuZXJhdGVBbGxSZWNpcGVOYW1lcygpIHtcbiAgICBsZXQgcmVzdWx0ID0gdGhpcy5yZWNpcGVzLnJlZHVjZSgoYWNjLCByZWNpcGUpID0+IHtcbiAgICAgIHJlY2lwZS5uYW1lLmZvckVhY2goKHdvcmQpID0+IHtcbiAgICAgICAgYWNjLnB1c2god29yZCk7XG4gICAgICB9KVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSlcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG4gIGdlbmVyYXRlQWxsSW5ncmVkaWVudE5hbWVzKCkge1xuICAgIGxldCByZXN1bHQgPSB0aGlzLnJlY2lwZXMucmVkdWNlKChhY2MsIHJlY2lwZSkgPT4ge1xuICAgICAgcmVjaXBlLmluZ3JlZGllbnROYW1lcy5mb3JFYWNoKChpbmdyZWRpZW50KSA9PiB7XG4gICAgICAgIGFjYy5wdXNoKGluZ3JlZGllbnQpXG4gICAgICB9KVxuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSlcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlY2lwZVJlcG9zaXRvcnk7XG4iLCJpbXBvcnQgUmVjaXBlUmVwb3NpdG9yeSBmcm9tICcuL1JlY2lwZVJlcG9zaXRvcnknO1xuXG5jbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IodXNlckluZm8pIHtcbiAgICB0aGlzLmZhdm9yaXRlUmVjaXBlcyA9IG5ldyBSZWNpcGVSZXBvc2l0b3J5KFtdKTtcbiAgICB0aGlzLnJlY2lwZXNUb0Nvb2sgPSBuZXcgUmVjaXBlUmVwb3NpdG9yeShbXSk7XG4gICAgdGhpcy5uYW1lID0gdXNlckluZm8ubmFtZTtcbiAgICB0aGlzLmlkID0gdXNlckluZm8uaWQ7XG4gIH1cblxuICBhZGRGYXZvcml0ZVJlY2lwZShyZWNpcGUpIHtcbiAgICBpZiAoIXRoaXMuZmF2b3JpdGVSZWNpcGVzLnJlY2lwZXMuaW5jbHVkZXMocmVjaXBlKSkge1xuICAgICAgdGhpcy5mYXZvcml0ZVJlY2lwZXMucmVjaXBlcy5wdXNoKHJlY2lwZSk7XG4gICAgICByZWNpcGUuZmF2b3JpdGUoKTtcbiAgICB9XG4gIH1cblxuICByZW1vdmVGYXZvcml0ZVJlY2lwZShjbGlja2VkUmVjaXBlKSB7XG4gICAgbGV0IGluZGV4ID0gdGhpcy5mYXZvcml0ZVJlY2lwZXMucmVjaXBlcy5maW5kSW5kZXgoKHJlY2lwZSkgPT4ge1xuICAgICAgcmV0dXJuIHJlY2lwZS5pZCA9PT0gY2xpY2tlZFJlY2lwZS5pZDtcbiAgICB9KVxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHRoaXMuZmF2b3JpdGVSZWNpcGVzLnJlY2lwZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIGNsaWNrZWRSZWNpcGUudW5GYXZvcml0ZSgpO1xuICAgIH1cbiAgfVxuXG4gIGZpbHRlckZhdm9yaXRlUmVjaXBlcyhxdWVyeUluZm8pIHtcbiAgICByZXR1cm4gdGhpcy5mYXZvcml0ZVJlY2lwZXMuZmlsdGVyUmVjaXBlcyhxdWVyeUluZm8pO1xuICB9XG5cbiAgYWRkUmVjaXBlVG9Db29rVGhpc1dlZWsocmVjaXBlKSB7XG4gICAgaWYgKCF0aGlzLnJlY2lwZXNUb0Nvb2sucmVjaXBlcy5pbmNsdWRlcyhyZWNpcGUpKSB7XG4gICAgICB0aGlzLnJlY2lwZXNUb0Nvb2sucmVjaXBlcy5wdXNoKHJlY2lwZSk7XG4gICAgICByZWNpcGUudG9Db29rKCk7XG4gICAgfVxuICB9XG5cbiAgcmVtb3ZlUmVjaXBlVG9Db29rVGhpc1dlZWsoY2xpY2tlZFJlY2lwZSkge1xuICAgIGxldCBpbmRleCA9IHRoaXMucmVjaXBlc1RvQ29vay5yZWNpcGVzLmZpbmRJbmRleCgocmVjaXBlKSA9PiB7XG4gICAgICByZXR1cm4gcmVjaXBlLmlkID09PSBjbGlja2VkUmVjaXBlLmlkO1xuICAgIH0pXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgdGhpcy5yZWNpcGVzVG9Db29rLnJlY2lwZXMuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgIGNsaWNrZWRSZWNpcGUucmVtb3ZlVG9Db29rKCk7XG4gICAgfVxuICB9XG5cbn07XG5cblxuZXhwb3J0IGRlZmF1bHQgVXNlcjtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG1heC1sZW4gKi9cbmltcG9ydCAnLi9zdHlsZXMuY3NzJztcbmltcG9ydCBhcGlDYWxscyBmcm9tICcuL2FwaUNhbGxzJztcbmltcG9ydCBSZWNpcGUgZnJvbSAnLi9jbGFzc2VzL1JlY2lwZS5qcydcbmltcG9ydCBSZWNpcGVSZXBvc2l0b3J5IGZyb20gJy4vY2xhc3Nlcy9SZWNpcGVSZXBvc2l0b3J5LmpzJ1xuaW1wb3J0IFVzZXIgZnJvbSAnLi9jbGFzc2VzL1VzZXIuanMnXG5cbi8vIHF1ZXJ5U2VsZWN0b3JzXG5jb25zdCBtYWluUmVjaXBlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluUmVjaXBlcycpO1xuY29uc3QgbWFpblNlY3Rpb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpblNlY3Rpb24nKTtcbmNvbnN0IGZpbHRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXInKVxuY29uc3QgZmlsdGVyTWVudSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXJNZW51JylcbmNvbnN0IHRhZ0NoZWNrQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXRbdHlwZT1cImNoZWNrYm94XCJdJylcbmNvbnN0IGZpbHRlclN1Ym1pdEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNmaWx0ZXJTdWJtaXRCdG4nKVxuY29uc3Qgc2VhcmNoQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NlYXJjaEJhcicpXG5jb25zdCBzZWFyY2hCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2VhcmNoQnV0dG9uJylcbmNvbnN0IGZ1bGxSZWNpcGVTZWN0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Z1bGxSZWNpcGVWaWV3Jyk7XG5jb25zdCBtZXNzYWdlQmFyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lc3NhZ2VCYXInKTtcbmNvbnN0IGZhdm9yaXRlc1ZpZXdCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZmF2b3JpdGVzVmlld0J1dHRvbicpO1xuY29uc3QgdG9Db29rVmlld0J1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b0Nvb2tWaWV3QnV0dG9uJyk7XG5jb25zdCBob21lQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2hvbWVWaWV3JylcbmNvbnN0IGZvb3RlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvb3RlcicpXG5cbi8vZ2xvYmFsIHZhcmlhYmxlc1xubGV0IGN1cnJlbnRSZWNpcGVSZXBvO1xubGV0IG9yaWdpbmFsUmVjaXBlUmVwbztcbmxldCBjdXJyZW50VXNlcjtcbmxldCBjb3VudGVyID0gMDtcbmxldCBpc0xvYWRlZCA9IGZhbHNlO1xubGV0IGN1cnJlbnRNZXNzYWdlO1xuXG4vLyBldmVudCBsaXN0ZW5lcnNcbndpbmRvdy5vbmxvYWQgPSBnZW5lcmF0ZVN0YXJ0aW5nSW5mb3JtYXRpb24oKVxuc2VhcmNoQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VhcmNoVGhyb3VnaFJlY2lwZXMpXG5maWx0ZXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0b2dnbGVGaWx0ZXJNZW51KVxuZmlsdGVyU3VibWl0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2VhcmNoQnlUYWcpXG5tYWluU2VjdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRldGVybWluZVJlY2lwZUNhcmRBY3Rpb24pXG5mYXZvcml0ZXNWaWV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0Zhdm9yaXRlc1ZpZXcpXG50b0Nvb2tWaWV3QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd1RvQ29va1ZpZXcpXG5ob21lQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd0hvbWVWaWV3KVxuXG5mdW5jdGlvbiBnZW5lcmF0ZVN0YXJ0aW5nSW5mb3JtYXRpb24oKSB7XG4gIGFwaUNhbGxzLnJldHJpZXZlRGF0YSgpXG4gICAgLnRoZW4oKHByb21pc2UpID0+IHtcbiAgICAgIGxldCBudW0gPSBnZXRSYW5kb21OdW1iZXIocHJvbWlzZVswXVsndXNlcnNEYXRhJ10ubGVuZ3RoKVxuICAgICAgY3VycmVudFVzZXIgPSBuZXcgVXNlcihwcm9taXNlWzBdWyd1c2Vyc0RhdGEnXVtudW1dKVxuICAgICAgbGV0IGluZ3JlZGllbnRzID0gcHJvbWlzZVsxXVsnaW5ncmVkaWVudHNEYXRhJ11cbiAgICAgIGxldCByZWNpcGVzID0gcHJvbWlzZVsyXVsncmVjaXBlRGF0YSddXG4gICAgICBsZXQgZm9ybWF0dGVkUmVjaXBlcyA9IHJlY2lwZXMubWFwKChyZWNpcGUpID0+IHtcbiAgICAgICAgbGV0IG5ld1JlY2lwZSA9IG5ldyBSZWNpcGUocmVjaXBlLCBpbmdyZWRpZW50cylcbiAgICAgICAgcmV0dXJuIG5ld1JlY2lwZVxuICAgICAgfSlcbiAgICAgIG9yaWdpbmFsUmVjaXBlUmVwbyA9IG5ldyBSZWNpcGVSZXBvc2l0b3J5KGZvcm1hdHRlZFJlY2lwZXMsIGluZ3JlZGllbnRzKTtcbiAgICAgIHNob3dIb21lVmlldygpO1xuICAgICAgaXNMb2FkZWQgPSB0cnVlO1xuICAgIH0pXG59XG5cbi8vc3dpdGNoIHZpZXdzIGZ1bmN0aW9uc1xuZnVuY3Rpb24gc2hvd0Zhdm9yaXRlc1ZpZXcoKSB7XG4gIGhpZGUoZnVsbFJlY2lwZVNlY3Rpb24pO1xuICBjdXJyZW50TWVzc2FnZSA9IGA8aDI+WW91ciBGYXZvcml0ZSBSZWNpcGVzPC9oMj5gO1xuICBtZXNzYWdlQmFyLmlubmVySFRNTCA9IGN1cnJlbnRNZXNzYWdlO1xuICBjdXJyZW50UmVjaXBlUmVwbyA9IGN1cnJlbnRVc2VyLmZhdm9yaXRlUmVjaXBlcztcbiAgcmVuZGVyUmVjaXBlcyhjdXJyZW50UmVjaXBlUmVwby5yZWNpcGVzKTtcbiAgc2hvdyhbZm9vdGVyLCBtYWluUmVjaXBlcywgc2VhcmNoQmFyLCBzZWFyY2hCdXR0b25dKVxufVxuXG5mdW5jdGlvbiBzaG93VG9Db29rVmlldygpIHtcbiAgaGlkZShmdWxsUmVjaXBlU2VjdGlvbik7XG4gIGN1cnJlbnRNZXNzYWdlID0gYDxoMj5Zb3VyIFJlY2lwZXMgdG8gQ29vazwvaDI+YDtcbiAgbWVzc2FnZUJhci5pbm5lckhUTUwgPSBjdXJyZW50TWVzc2FnZTtcbiAgY3VycmVudFJlY2lwZVJlcG8gPSBjdXJyZW50VXNlci5yZWNpcGVzVG9Db29rO1xuICByZW5kZXJSZWNpcGVzKGN1cnJlbnRSZWNpcGVSZXBvLnJlY2lwZXMpO1xuICBzaG93KFtmb290ZXIsIG1haW5SZWNpcGVzLCBzZWFyY2hCYXIsIHNlYXJjaEJ1dHRvbl0pXG59XG5cbmZ1bmN0aW9uIHNob3dIb21lVmlldygpIHtcbiAgaGlkZShmdWxsUmVjaXBlU2VjdGlvbik7XG4gIGN1cnJlbnRNZXNzYWdlID0gYDxoMj5BbGwgUmVjaXBlczwvaDI+YDtcbiAgIWlzTG9hZGVkID8gbWVzc2FnZUJhci5pbm5lckhUTUwgPSBgPGgyPkhlbGxvLCAke2N1cnJlbnRVc2VyLm5hbWV9PC9oMj5gIDogbWVzc2FnZUJhci5pbm5lckhUTUwgPSBjdXJyZW50TWVzc2FnZTtcbiAgY3VycmVudFJlY2lwZVJlcG8gPSBvcmlnaW5hbFJlY2lwZVJlcG87XG4gIHJlbmRlclJlY2lwZXMoY3VycmVudFJlY2lwZVJlcG8ucmVjaXBlcyk7XG4gIHNob3coW2Zvb3RlciwgbWFpblJlY2lwZXMsIHNlYXJjaEJhciwgc2VhcmNoQnV0dG9uXSlcbn1cblxuXG5mdW5jdGlvbiBzaG93RnVsbFJlY2lwZVZpZXcoaWQpIHtcbiAgcmVuZGVyRnVsbFJlY2lwZUluZm8oaWQpO1xuICBoaWRlKFtmb290ZXIsIG1haW5SZWNpcGVzLCBzZWFyY2hCYXIsIHNlYXJjaEJ1dHRvbl0pXG4gIHNob3coZnVsbFJlY2lwZVNlY3Rpb24pO1xufVxuXG4vL2NhcmQgYnV0dG9uIGV2ZW50IGhhbmRsZXJzXG5mdW5jdGlvbiBkZXRlcm1pbmVSZWNpcGVDYXJkQWN0aW9uKGV2ZW50KSB7XG4gIGxldCBpZCA9IDA7XG4gIGlmIChldmVudC50YXJnZXQuY2xvc2VzdCgnLnJlY2lwZS1jYXJkJykpIHtcbiAgICBpZCA9IHBhcnNlSW50KGV2ZW50LnRhcmdldC5jbG9zZXN0KCcucmVjaXBlLWNhcmQnKS5pZCk7XG4gIH1cbiAgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnZmF2b3JpdGUtcmVjaXBlJykpIHtcbiAgICBkZXRlcm1pbmVGYXZvcml0ZU9yVW5mYXZvcml0ZShpZCwgZXZlbnQpO1xuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygndGhpcy13ZWVrLXJlY2lwZScpKSB7XG4gICAgZGV0ZXJtaW5lQWRkT3JSZW1vdmVUb0Nvb2soaWQsIGV2ZW50KTtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc05hbWUgPT09ICdleGl0LWJ1dHRvbicpIHtcbiAgICBzaG93SG9tZVZpZXcoKTtcbiAgfSBlbHNlIGlmIChpZCkge1xuICAgIHNob3dGdWxsUmVjaXBlVmlldyhpZCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGV0ZXJtaW5lRmF2b3JpdGVPclVuZmF2b3JpdGUoaWQsIGV2ZW50KSB7XG4gIGxldCBjbGlja2VkUmVjaXBlID0gY3VycmVudFJlY2lwZVJlcG8ucmVjaXBlcy5maW5kKChyZWNpcGUpID0+IHtcbiAgICByZXR1cm4gcmVjaXBlLmlkID09PSBpZDtcbiAgfSlcbiAgaWYgKCFjdXJyZW50VXNlci5mYXZvcml0ZVJlY2lwZXMucmVjaXBlcy5pbmNsdWRlcyhjbGlja2VkUmVjaXBlKSkge1xuICAgIGV2ZW50LnRhcmdldC5wYXJlbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2ljb24tb24nKTtcbiAgICBjdXJyZW50VXNlci5hZGRGYXZvcml0ZVJlY2lwZShjbGlja2VkUmVjaXBlKTtcbiAgICBtZXNzYWdlQmFyLmlubmVySFRNTCA9IGA8aDI+RmF2b3JpdGVkITwvaDI+YFxuICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBtZXNzYWdlQmFyLmlubmVySFRNTCA9IGN1cnJlbnRNZXNzYWdlO1xuICAgIH0sIDEwMDApO1xuICB9IGVsc2Uge1xuICAgIGN1cnJlbnRVc2VyLnJlbW92ZUZhdm9yaXRlUmVjaXBlKGNsaWNrZWRSZWNpcGUpXG4gICAgbWVzc2FnZUJhci5pbm5lckhUTUwgPSBgPGgyPlVuZmF2b3JpdGVkITwvaDI+YFxuICAgIGxldCB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBtZXNzYWdlQmFyLmlubmVySFRNTCA9IGN1cnJlbnRNZXNzYWdlO1xuICAgIH0sIDEwMDApO1xuICAgIHJlbmRlclJlY2lwZXMoY3VycmVudFJlY2lwZVJlcG8ucmVjaXBlcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGV0ZXJtaW5lQWRkT3JSZW1vdmVUb0Nvb2soaWQsIGV2ZW50KSB7XG4gIGxldCBjbGlja2VkUmVjaXBlID0gY3VycmVudFJlY2lwZVJlcG8ucmVjaXBlcy5maW5kKChyZWNpcGUpID0+IHtcbiAgICByZXR1cm4gcmVjaXBlLmlkID09PSBpZDtcbiAgfSlcbiAgaWYgKCFjdXJyZW50VXNlci5yZWNpcGVzVG9Db29rLnJlY2lwZXMuaW5jbHVkZXMoY2xpY2tlZFJlY2lwZSkpIHtcbiAgICBldmVudC50YXJnZXQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdpY29uLW9uJyk7XG4gICAgY3VycmVudFVzZXIuYWRkUmVjaXBlVG9Db29rVGhpc1dlZWsoY2xpY2tlZFJlY2lwZSk7XG4gICAgbWVzc2FnZUJhci5pbm5lckhUTUwgPSBgPGgyPkFkZGVkIHRvIFJlY2lwZXMgdG8gQ29vayE8L2gyPmBcbiAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgbWVzc2FnZUJhci5pbm5lckhUTUwgPSBgPGgyPkFsbCBSZWNpcGVzPC9oMj5gXG4gICAgfSwgMTAwMCk7XG4gIH0gZWxzZSB7XG4gICAgY3VycmVudFVzZXIucmVtb3ZlUmVjaXBlVG9Db29rVGhpc1dlZWsoY2xpY2tlZFJlY2lwZSlcbiAgICBtZXNzYWdlQmFyLmlubmVySFRNTCA9IGA8aDI+UmVtb3ZlZCBmcm9tIFJlY2lwZXMgdG8gQ29vayE8L2gyPmBcbiAgICBsZXQgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgbWVzc2FnZUJhci5pbm5lckhUTUwgPSBgPGgyPkFsbCBSZWNpcGVzPC9oMj5gXG4gICAgfSwgMTAwMCk7XG4gICAgcmVuZGVyUmVjaXBlcyhjdXJyZW50UmVjaXBlUmVwby5yZWNpcGVzKTtcbiAgfVxufVxuLy9zZWFyY2ggZnVuY3Rpb25zXG5mdW5jdGlvbiBzZWFyY2hUaHJvdWdoUmVjaXBlcygpIHtcbiAgbGV0IHVzZXJTZWFyY2ggPSBzZWFyY2hCYXIudmFsdWU7XG4gIGxldCBjb252ZXJ0ZWRVc2VyU2VhcmNoID0gY29udmVydFVzZXJJbmZvKHVzZXJTZWFyY2gpXG4gIGxldCB1bmlxdWVGaWx0ZXJlZFJlY2lwZXMgPSBnZW5lcmF0ZUZpbHRlcmVkUmVjaXBlcyhjb252ZXJ0ZWRVc2VyU2VhcmNoKTtcbiAgaWYgKHVuaXF1ZUZpbHRlcmVkUmVjaXBlcy5sZW5ndGgpIHtcbiAgICByZW5kZXJSZWNpcGVzKHVuaXF1ZUZpbHRlcmVkUmVjaXBlcyk7XG4gIH0gZWxzZSB7XG4gICAgbWFpblJlY2lwZXMuaW5uZXJIVE1MID1cbiAgICBgXG4gICAgICA8cCBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj5Pb3BzIGNvdWxkIG5vdCBmaW5kIGFueSByZWNpcGVzIHRoYXQgbWF0Y2hlZCDwn5imPC9wPlxuICAgIGBcbiAgfVxuICBzZWFyY2hCYXIudmFsdWUgPSAnJztcbn1cblxuZnVuY3Rpb24gY29udmVydFVzZXJJbmZvKHVzZXJTZWFyY2gpIHtcbiAgbGV0IGFsdGVyZWRVc2VyU2VhcmNoID0gdXNlclNlYXJjaC5zcGxpdCgnICcpLiBtYXAoKHdvcmQpID0+IHtcbiAgICByZXR1cm4gd29yZC50b0xvd2VyQ2FzZSgpO1xuICB9KTtcbiAgbGV0IGNvbnZlcnRlZFVzZXJTZWFyY2ggPSBkZXRlcm1pbmVTZWFyY2hUeXBlKGFsdGVyZWRVc2VyU2VhcmNoKTtcbiAgcmV0dXJuIGNvbnZlcnRlZFVzZXJTZWFyY2g7XG59XG5cbmZ1bmN0aW9uIGRldGVybWluZVNlYXJjaFR5cGUoYWx0ZXJlZFVzZXJTZWFyY2gpIHtcbiAgbGV0IHNlYXJjaEluZm8gPSBhbHRlcmVkVXNlclNlYXJjaC5yZWR1Y2UoKGFjYywgd29yZCkgPT4ge1xuICAgIGxldCBhbGxSZWNpcGVOYW1lcyA9IGN1cnJlbnRSZWNpcGVSZXBvLmdlbmVyYXRlQWxsUmVjaXBlTmFtZXMoKTtcbiAgICBsZXQgYWxsSW5ncmVkaWVudE5hbWVzID0gY3VycmVudFJlY2lwZVJlcG8uZ2VuZXJhdGVBbGxJbmdyZWRpZW50TmFtZXMoKTtcbiAgICBpZiAoYWxsUmVjaXBlTmFtZXMuaW5jbHVkZXMod29yZCkpIHtcbiAgICAgIGFjYy5uYW1lLnF1ZXJ5LnB1c2god29yZCk7XG4gICAgfVxuICAgIGlmIChhbGxJbmdyZWRpZW50TmFtZXMuaW5jbHVkZXMod29yZCkpIHtcbiAgICAgIGFjYy5pbmdyZWRpZW50TmFtZXMucXVlcnkucHVzaCh3b3JkKTtcbiAgICB9XG4gICAgcmV0dXJuIGFjYztcbiAgfSwge25hbWU6IHt0eXBlOiAnbmFtZScsIHF1ZXJ5OiBbXX0sIGluZ3JlZGllbnROYW1lczoge3R5cGU6ICdpbmdyZWRpZW50TmFtZXMnLCBxdWVyeTogW119fSlcbiAgcmV0dXJuIHNlYXJjaEluZm87XG59XG5cbmZ1bmN0aW9uIGdlbmVyYXRlRmlsdGVyZWRSZWNpcGVzKGNvbnZlcnRlZFVzZXJTZWFyY2gpIHtcbiAgbGV0IGZpbHRlcmVkUmVjaXBlc0J5TmFtZSA9IGN1cnJlbnRSZWNpcGVSZXBvLmZpbHRlclJlY2lwZXMoY29udmVydGVkVXNlclNlYXJjaC5uYW1lKTtcbiAgbGV0IGZpbHRlcmVkUmVjaXBlc0J5SW5ncmVkaWVudCA9IGN1cnJlbnRSZWNpcGVSZXBvLmZpbHRlclJlY2lwZXMoY29udmVydGVkVXNlclNlYXJjaC5pbmdyZWRpZW50TmFtZXMpO1xuICBsZXQgYWxsRmlsdGVyZWRSZWNpcGVzID0gZmlsdGVyZWRSZWNpcGVzQnlOYW1lLmNvbmNhdChmaWx0ZXJlZFJlY2lwZXNCeUluZ3JlZGllbnQpO1xuICByZXR1cm4gWy4uLm5ldyBTZXQoYWxsRmlsdGVyZWRSZWNpcGVzKV07XG59XG5cbmZ1bmN0aW9uIHNlYXJjaEJ5VGFnKGUpIHtcbiAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICBsZXQgdGFnU2VhcmNoSW5mbyA9IHt0eXBlOiAndGFncycsIHF1ZXJ5OiBbXX1cbiAgdGFnQ2hlY2tCb3guZm9yRWFjaCgodGFnKSA9PiB7XG4gICAgdGFnLmNoZWNrZWQgPyB0YWdTZWFyY2hJbmZvLnF1ZXJ5LnB1c2godGFnLnZhbHVlKSA6IG51bGxcbiAgICB0YWcuY2hlY2tlZCA9IGZhbHNlO1xuICB9KVxuICBsZXQgZmlsdGVyZWRSZWNpcGVzID0gY3VycmVudFJlY2lwZVJlcG8uZmlsdGVyUmVjaXBlcyh0YWdTZWFyY2hJbmZvKTtcbiAgaGlkZShmaWx0ZXJNZW51KTtcbiAgaWYgKGZpbHRlcmVkUmVjaXBlcy5sZW5ndGgpIHtcbiAgICByZW5kZXJSZWNpcGVzKGZpbHRlcmVkUmVjaXBlcyk7XG4gIH0gZWxzZSB7XG4gICAgbWFpblJlY2lwZXMuaW5uZXJIVE1MID1cbiAgICBgXG4gICAgICA8cCBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj5Pb3BzIGNvdWxkIG5vdCBmaW5kIGFueSByZWNpcGVzIHRoYXQgbWF0Y2hlZCDwn5imPC9wPlxuICAgIGBcbiAgfVxufVxuXG4vL3JlbmRlciBmdW5jdGlvbnNcbmZ1bmN0aW9uIHJlbmRlclJlY2lwZXMocmVjaXBlcykge1xuICBtYWluUmVjaXBlcy5pbm5lckhUTUwgPSBgYDtcbiAgcmVjaXBlcy5mb3JFYWNoKChyZWNpcGUpID0+IHtcbiAgICBsZXQgdGFncyA9IHJlY2lwZS50YWdzLm1hcCgodGFnKSA9PiB7XG4gICAgICByZXR1cm4gYDxoNCBjbGFzcz1cInRhZ3MgZmxleC1jb2x1bW5cIj4ke3RhZ308L2g0PmBcbiAgICB9KVxuICAgIGxldCByZWNpcGVOYW1lcyA9IHJlY2lwZS5uYW1lLm1hcCgobmFtZSkgPT4ge1xuICAgICAgcmV0dXJuIG5hbWVbMF0udG9VcHBlckNhc2UoKSArIG5hbWUuc3Vic3RyaW5nKDEpO1xuICAgIH0pLmpvaW4oJyAnKTtcbiAgICBsZXQgZmF2b3JpdGVCdXR0b25DbGFzcyA9IGBmYXZvcml0ZS1yZWNpcGVgXG4gICAgbGV0IGNhbGVuZGFyQnV0dG9uQ2xhc3MgPSBgdGhpcy13ZWVrLXJlY2lwZWBcbiAgICBpZiAocmVjaXBlLmlzRmF2b3JpdGVkKSB7XG4gICAgICBmYXZvcml0ZUJ1dHRvbkNsYXNzID0gYGZhdm9yaXRlLXJlY2lwZSBpY29uLW9uYFxuICAgIH1cbiAgICBpZiAocmVjaXBlLmlzVG9CZUNvb2tlZCkge1xuICAgICAgY2FsZW5kYXJCdXR0b25DbGFzcyA9IGB0aGlzLXdlZWstcmVjaXBlIGljb24tb25gXG4gICAgfVxuICAgIG1haW5SZWNpcGVzLmlubmVySFRNTCArPVxuICAgIGBcbiAgICAgIDxhcnRpY2xlIGNsYXNzPVwicmVjaXBlLWNhcmQgZmxleC1yb3dcIiBpZD1cIiR7cmVjaXBlLmlkfVwiID5cbiAgICAgICAgPGltZyBzcmM9JHtyZWNpcGUuaW1hZ2V9IGFsdD1cIkEgcGljdHVyZSBvZiBhIGRpc2ggY2FsbGVkICR7cmVjaXBlTmFtZXN9XCIvPlxuICAgICAgICA8ZGl2IGNsYXNzPVwicmVjaXBlLWNhcmQtaW5mbyBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgPGRpdiBjbGFzcz1cInJlY2lwZS10YWctY29udGFpbmVyIGZsZXgtY29sdW1uXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInJlY2lwZS1uYW1lXCI+JHtyZWNpcGVOYW1lc308L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwidGFnLWNvbnRhaW5lciBmbGV4LXJvd1wiPlxuICAgICAgICAgICAgICAke3RhZ3N9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZWNpcGUtY2FyZC1idXR0b25zLWNvbnRhaW5lciBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCIke2Zhdm9yaXRlQnV0dG9uQ2xhc3N9XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImhlYXJ0LWNhcmQgZmFzIGZhLWhlYXJ0XCI+PC9pPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCIke2NhbGVuZGFyQnV0dG9uQ2xhc3N9XCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImNhbGVuZGFyLWNhcmQgZmFzIGZhLWNhbGVuZGFyLWFsdFwiPjwvaT5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICBgXG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJlbmRlckZ1bGxSZWNpcGVJbmZvKGlkKSB7XG4gIGxldCByZWNpcGVUb1JlbmRlciA9IGN1cnJlbnRSZWNpcGVSZXBvLnJlY2lwZXMuZmluZCgocmVjaXBlKSA9PiB7XG4gICAgcmV0dXJuIHJlY2lwZS5pZCA9PT0gaWQ7XG4gIH0pXG4gIGxldCByZWNpcGVUb1JlbmRlckluZm8gPSBjb252ZXJ0UmVjaXBlVG9SZW5kZXIocmVjaXBlVG9SZW5kZXIpO1xuICBjdXJyZW50TWVzc2FnZSA9IGA8aDI+JHtyZWNpcGVUb1JlbmRlckluZm8ubmFtZX08L2gyPmBcbiAgbWVzc2FnZUJhci5pbm5lckhUTUwgPSBjdXJyZW50TWVzc2FnZTtcbiAgZnVsbFJlY2lwZVNlY3Rpb24uaW5uZXJIVE1MID1cbiAgYCA8ZGl2IGNsYXNzPVwidGFnLWNvbnRhaW5lci1mdWxsIGZsZXgtcm93XCI+XG4gICAgJHtyZWNpcGVUb1JlbmRlckluZm8udGFnc31cbiAgICA8L2Rpdj5cbiAgICA8YXJ0aWNsZSBjbGFzcz1cInJlY2lwZS1jYXJkLWFsbCBmbGV4LWNvbHVtblwiID5cbiAgICAgIDxkaXYgY2xhc3M9XCJyZWNpcGUtY2FyZCBmbGV4LXJvd1wiIGlkPVwiJHtyZWNpcGVUb1JlbmRlci5pZH1cIj5cbiAgICAgICAgPGltZyBzcmM9JHtyZWNpcGVUb1JlbmRlci5pbWFnZX0gYWx0PVwiQSBwaWN0dXJlIG9mIGEgZGlzaCBjYWxsZWQgJHtyZWNpcGVUb1JlbmRlckluZm8ubmFtZX1cIi8+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZWNpcGUtY2FyZC1idXR0b25zLWNvbnRhaW5lciBmbGV4LWNvbHVtblwiPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJleGl0LWJ1dHRvblwiIGlkPVwiZXhpdEJ1dHRvblwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJleGl0LWNhcmQgZmFzIGZhLXRpbWVzXCI+PC9pPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDxidXR0b24gY2xhc3M9XCIke3JlY2lwZVRvUmVuZGVySW5mby5mYXZvcml0ZUJ1dHRvbkNsYXNzfVwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJoZWFydC1jYXJkIGZhcyBmYS1oZWFydFwiPjwvaT5cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiJHtyZWNpcGVUb1JlbmRlckluZm8uY2FsZW5kYXJCdXR0b25DbGFzc31cIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiY2FsZW5kYXItY2FyZCBmYXMgZmEtY2FsZW5kYXItYWx0XCI+PC9pPlxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRvdGFsLWNvc3QgZmxleC1yb3dcIiBpZD1cInRvdGFsQ29zdFwiPlxuICAgICAgICAgIDxoNT5Fc3RpbWF0ZWQgQ29zdCA8L2g1PlxuICAgICAgICAgIDxwPiR7cmVjaXBlVG9SZW5kZXJJbmZvLnRvdGFsQ29zdH08L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgICA8c2VjdGlvbiBjbGFzcz1cImZ1bGwtcmVjaXBlLWluZm8gZmxleC1jb2x1bW5cIiBpZD1cImZ1bGxSZWNpcGVJbmZvXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJyZWNpcGVQcmljZUNvbnRhaW5lciBmbGV4LXJvd1wiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmdyZWRpZW50cy1pbmZvXCIgaWQ9aW5ncmVkaWVudHNJbmZvPlxuICAgICAgICAgICAgPGg0PkluZ3JlZGllbnRzPC9oND5cbiAgICAgICAgICAgIDxwPiAke3JlY2lwZVRvUmVuZGVySW5mby5pbmdyZWRpZW50c308L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5zdHJ1Y3Rpb25zLWluZm8gZmxleC1jb2x1bW5cIiBpZD1cInRvdGFsQ29zdFwiPlxuICAgICAgICAgIDxoND5JbnN0cnVjdGlvbnM8L2g0PlxuICAgICAgICAgIDxwPiR7cmVjaXBlVG9SZW5kZXJJbmZvLmZpeGVkSW5zdHJ1Y3Rpb25zfTwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgPC9hcnRpY2xlPlxuICBgXG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRSZWNpcGVUb1JlbmRlcihyZWNpcGVUb1JlbmRlcikge1xuICBsZXQgdGFncyA9IHJlY2lwZVRvUmVuZGVyLnRhZ3MubWFwKCh0YWcpID0+IHtcbiAgICByZXR1cm4gYDxoNCBjbGFzcz1cInRhZ3MgZmxleC1jb2x1bW5cIj4ke3RhZ308L2g0PmBcbiAgfSkuam9pbignICcpO1xuICBsZXQgaW5ncmVkaWVudHMgPSByZWNpcGVUb1JlbmRlci5pbmdyZWRpZW50cy5tYXAoKGluZ3JlZGllbnQpID0+IHtcbiAgICByZXR1cm4gYDxwIGNsYXNzPVwiaW5ncmVkaWVudHMgZmxleC1jb2x1bW5cIj4ke2luZ3JlZGllbnQucXVhbnRpdHkuYW1vdW50fSAke2luZ3JlZGllbnQucXVhbnRpdHkudW5pdH0gJHtpbmdyZWRpZW50Lm5hbWV9PC9wPmBcbiAgfSkuam9pbignICcpO1xuICBsZXQgaW5zdHJ1Y3Rpb25zID0gcmVjaXBlVG9SZW5kZXIuZ2V0SW5zdHJ1Y3Rpb25zKCk7XG4gIGxldCBmaXhlZEluc3RydWN0aW9ucyA9IGluc3RydWN0aW9ucy5tYXAoKGluc3RydWN0aW9uKSA9PiB7XG4gICAgcmV0dXJuIGA8cCBjbGFzcz1cImluc3RydWN0aW9ucyBmbGV4LWNvbHVtblwiPiR7aW5zdHJ1Y3Rpb259PC9wPmBcbiAgfSkuam9pbignICAnKTtcbiAgbGV0IG5hbWUgPSByZWNpcGVUb1JlbmRlci5uYW1lLm1hcCgobmFtZSkgPT4ge1xuICAgIHJldHVybiBuYW1lWzBdLnRvVXBwZXJDYXNlKCkgKyBuYW1lLnN1YnN0cmluZygxKTtcbiAgfSkuam9pbignICcpO1xuICBsZXQgdG90YWxDb3N0ID0gY29udmVydFRvdGFsQ29zdChyZWNpcGVUb1JlbmRlcik7XG4gIGxldCBmYXZvcml0ZUJ1dHRvbkNsYXNzID0gYGZhdm9yaXRlLXJlY2lwZWBcbiAgbGV0IGNhbGVuZGFyQnV0dG9uQ2xhc3MgPSBgdGhpcy13ZWVrLXJlY2lwZWBcbiAgaWYgKHJlY2lwZVRvUmVuZGVyLmlzRmF2b3JpdGVkKSB7XG4gICAgZmF2b3JpdGVCdXR0b25DbGFzcyA9IGBmYXZvcml0ZS1yZWNpcGUgaWNvbi1vbmBcbiAgfVxuICBpZiAocmVjaXBlVG9SZW5kZXIuaXNUb0JlQ29va2VkKSB7XG4gICAgY2FsZW5kYXJCdXR0b25DbGFzcyA9IGB0aGlzLXdlZWstcmVjaXBlIGljb24tb25gXG4gIH1cbiAgbGV0IHJlY2lwZVRvUmVuZGVySW5mbyA9IHt0YWdzLCBpbmdyZWRpZW50cywgZml4ZWRJbnN0cnVjdGlvbnMsIG5hbWUsIHRvdGFsQ29zdCwgZmF2b3JpdGVCdXR0b25DbGFzcywgY2FsZW5kYXJCdXR0b25DbGFzc307XG4gIHJldHVybiByZWNpcGVUb1JlbmRlckluZm87XG59XG5cbmZ1bmN0aW9uIGNvbnZlcnRUb3RhbENvc3QocmVjaXBlVG9SZW5kZXIpIHtcbiAgbGV0IHRvdGFsQ29zdCA9IHJlY2lwZVRvUmVuZGVyLmdldFRvdGFsQ29zdCgpO1xuICBsZXQgZG9sbGFycyA9IE1hdGguZmxvb3IodG90YWxDb3N0IC8gMTAwKTtcbiAgcmV0dXJuIGAkJHtkb2xsYXJzfWA7XG59XG5cbi8vb3RoZXIgZnVuY3Rpb25zXG5mdW5jdGlvbiBnZXRSYW5kb21OdW1iZXIobWF4KSB7XG4gIHZhciBudW1iZXIgPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gMSkgKyAxKTtcbiAgcmV0dXJuIG51bWJlcjtcbn1cblxuZnVuY3Rpb24gdG9nZ2xlRmlsdGVyTWVudSgpIHtcbiAgaWYgKCEoY291bnRlciAlIDIpKSB7XG4gICAgc2hvdyhmaWx0ZXJNZW51KTtcbiAgICBjb3VudGVyICsrO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoZmlsdGVyTWVudSk7XG4gICAgY291bnRlciArKztcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93KGUpIHtcbiAgaWYgKGUubGVuZ3RoID4gMCkge1xuICAgIGUuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgZS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICB9XG59XG5cbmZ1bmN0aW9uIGhpZGUoZSkge1xuICBpZiAoZS5sZW5ndGggPiAwKSB7XG4gICAgZS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gICAgfSlcbiAgfSBlbHNlIHtcbiAgICBlLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gIH1cbn1cbiIsImltcG9ydCBhcGkgZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgICAgICAgIGltcG9ydCBjb250ZW50IGZyb20gXCIhIS4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5jc3NcIjtcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgZGVmYXVsdCBjb250ZW50LmxvY2FscyB8fCB7fTsiXSwic291cmNlUm9vdCI6IiJ9