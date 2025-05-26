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

/***/ "./js/main.ts":
/*!********************!*\
  !*** ./js/main.ts ***!
  \********************/
/***/ (() => {

eval("\n// ✅ Create Employee Based on Salary\nfunction createEmployee(salary) {\n    if (salary >= 1000) {\n        return { salary, workDirectorTasks: () => console.log(\"Getting to director tasks\") };\n    }\n    return { salary, workTeacherTasks: () => console.log(\"Getting to work\") };\n}\n// ✅ Type Predicate to Identify Directors\nfunction isDirector(employee) {\n    return employee.workDirectorTasks !== undefined;\n}\n// ✅ Function to Execute Work Based on Role\nfunction executeWork(employee) {\n    if (isDirector(employee)) {\n        employee.workDirectorTasks();\n    }\n    else {\n        employee.workTeacherTasks();\n    }\n}\n// ✅ Test the Functions\nconsole.log(\"Testing executeWork function:\");\nexecuteWork(createEmployee(200)); // Expected Output: Getting to work\nexecuteWork(createEmployee(1000)); // Expected Output: Getting to director tasks\n\n\n//# sourceURL=webpack://task_2/./js/main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./js/main.ts"]();
/******/ 	
/******/ })()
;