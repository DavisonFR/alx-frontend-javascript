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

/***/ "./task_1/js/main.ts":
/*!***************************!*\
  !*** ./task_1/js/main.ts ***!
  \***************************/
/***/ (() => {

eval("\r\n// 3. Implement the class using both interfaces\r\nclass StudentClass {\r\n    constructor({ firstName, lastName }) {\r\n        this.firstName = firstName;\r\n        this.lastName = lastName;\r\n    }\r\n    workOnHomework() {\r\n        return 'Currently working';\r\n    }\r\n    displayName() {\r\n        return this.firstName;\r\n    }\r\n}\r\n// 4. Create an instance and test the methods\r\nconst student = new StudentClass({ firstName: \"Dawit\", lastName: \"Firew\" });\r\nconsole.log(student.displayName()); // Should print: Dawit\r\nconsole.log(student.workOnHomework()); // Should print: Currently working\r\n\n\n//# sourceURL=webpack://alx-frontend-javascript/./task_1/js/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./task_1/js/main.ts"]();
/******/ 	
/******/ })()
;