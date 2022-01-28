/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

eval("const module = __webpack_require__(/*! ./module/firstModule.js */ \"./src/js/module/firstModule.js\");\n\n(function () {\n  let body = document.querySelector(\"body\");\n  let textDay = document.createElement(\"p\");\n  let dateText = document.createElement(\"p\");\n  let ul = document.createElement(\"ul\");\n  let table = document.createElement(\"div\");\n\n  let date = new Date();\n  let date1 = new Date(2021, 11, 1);\n  let date2 = new Date(2022,0 ,1);\n  let date3 = Math.round((date2 - date1) / 1000 / 3600 / 24);\n\n  let monthArr = [\n    \"Январь\",\n    \"Февраль\",\n    \"Март\",\n    \"Апрель\",\n    \"Май\",\n    \"Июнь\",\n    \"Июль\",\n    \"Август\",\n    \"Сентябрь\",\n    \"Октябрь\",\n    \"Ноябрь\",\n    \"Декабрь\",\n  ];\n  let daysArr = [\n    \"воскресенье\",\n    \"понедельник\",\n    \"вторник\",\n    \"среда\",\n    \"четверг\",\n    \"пятница\",\n    \"суббота\",\n  ];\n\n  for (let i = 1; i <= date3; i++) {\n    let li = document.createElement(\"li\");\n    li.classList.add(\"calendar__list\");\n\n    if (i == date.getDate()) {\n      li.classList.add(\"active\");\n    }\n\n    ul.appendChild(li);\n    li.innerText = i;\n  }\n  body.appendChild(ul);\n  ul.classList.add(\"linear\");\n\n  dateText.innerHTML = `${date.getFullYear()} год / ${\n    monthArr[date.getMonth()]\n  }`;\n  textDay.innerText = daysArr[date.getDay()];\n\n  body.insertAdjacentElement(\"beforeBegin\", dateText);\n  body.insertAdjacentElement(\"beforeBegin\", textDay);\n  body.insertAdjacentElement(\"afterEnd\", table);\n\n  dateText.classList.add(\"calendar__date-text\");\n  textDay.classList.add(\"text-day\");\n  table.classList.add(\"day__table\");\n\n  function addZero(num) {\n    if (num >= 0 && num <= 9) {\n      return \"0\" + num;\n    } else {\n      return num;\n    }\n  }\n  let numb = 0;\n  body.addEventListener(\"click\", (e) => {\n    numb = Number(e.target.innerHTML);\n    console.log(e.target.tagName);\n\n    if (e.target.tagName != \"LI\") {\n      table.innerHTML = \"\";\n    } else {\n      let date2 = new Date(2022, 0, numb);\n      let dayForTable = daysArr[date2.getDay()];\n\n      table.innerHTML = dayForTable;\n    }\n  });\n})();\n\n\n//# sourceURL=webpack://assambly/./src/js/main.js?");

/***/ }),

/***/ "./src/js/module/firstModule.js":
/*!**************************************!*\
  !*** ./src/js/module/firstModule.js ***!
  \**************************************/
/***/ (function(module) {

eval("module.exports = () => {\n  \n}\n\n//# sourceURL=webpack://assambly/./src/js/module/firstModule.js?");

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
/******/ 			// no module.id needed
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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;