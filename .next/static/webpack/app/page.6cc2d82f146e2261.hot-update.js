"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-client)/./components/Main/Main.jsx":
/*!**********************************!*\
  !*** ./components/Main/Main.jsx ***!
  \**********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _app_utils_GlobalsApi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/_utils/GlobalsApi */ \"(app-client)/./app/_utils/GlobalsApi.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-client)/./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _MainD__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./MainD */ \"(app-client)/./components/Main/MainD.jsx\");\n/* harmony import */ var _ui_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../ui/button */ \"(app-client)/./components/ui/button.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n// Assuming that item?.image?.url is a valid URL\n// ... (your existing code)\n// ... (your existing code)\nconst Main = ()=>{\n    _s();\n    const [banner, setBanner] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([]);\n    const [bannerD, setBannerD] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)([\n        \"Web Developer.\",\n        \"Freelancer.\",\n        \"Full Stack developer.\",\n        \"MERN Stack developer\"\n    ]);\n    const [displayedText, setDisplayedText] = (0,react__WEBPACK_IMPORTED_MODULE_3__.useState)(\"\");\n    (0,react__WEBPACK_IMPORTED_MODULE_3__.useEffect)(()=>{\n        const getBannerAndAnimate = async ()=>{\n            try {\n                const resp = await _app_utils_GlobalsApi__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getAllBanner();\n                setBanner(resp === null || resp === void 0 ? void 0 : resp.banners);\n                animateText();\n            } catch (error) {\n                console.error(\"Error fetching banner:\", error);\n            }\n        };\n        getBannerAndAnimate();\n        return ()=>{\n            // Cleanup the interval when the component unmounts\n            clearInterval(animationInterval);\n        };\n    }, []); // Empty dependency array to run only once on mount\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-full border h-[700px]\",\n        children: banner.map((item, index)=>{\n            var _item_image;\n            /*#__PURE__*/ return (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                style: {\n                    backgroundImage: \"'url(\".concat(item === null || item === void 0 ? void 0 : (_item_image = item.image) === null || _item_image === void 0 ? void 0 : _item_image.url, \")'\"),\n                    width: \"100%\",\n                    height: \"100%\",\n                    backgroundRepeat: \"no-repeat\",\n                    backgroundSize: \"cover\"\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex h-[100%] flex-col justify-center items-center\",\n                    \"data-aos\": \"zoom-in-down\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                            className: \"text-[35px] text-slate-950 \",\n                            style: {\n                                fontWeight: \"600\"\n                            },\n                            children: item === null || item === void 0 ? void 0 : item.firstName\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Hp Victus\\\\Desktop\\\\CRUD_MongoDB-main\\\\components\\\\Main\\\\Main.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"flex gap-5\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-[35px] text-slate-950 \",\n                                    children: \"I'm a \"\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Hp Victus\\\\Desktop\\\\CRUD_MongoDB-main\\\\components\\\\Main\\\\Main.jsx\",\n                                    lineNumber: 50,\n                                    columnNumber: 15\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                                    className: \"text-[35px] text-slate-950\",\n                                    children: displayedText\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\Hp Victus\\\\Desktop\\\\CRUD_MongoDB-main\\\\components\\\\Main\\\\Main.jsx\",\n                                    lineNumber: 51,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\Hp Victus\\\\Desktop\\\\CRUD_MongoDB-main\\\\components\\\\Main\\\\Main.jsx\",\n                            lineNumber: 49,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"mb-10\",\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_MainD__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                item: item === null || item === void 0 ? void 0 : item.programing\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Hp Victus\\\\Desktop\\\\CRUD_MongoDB-main\\\\components\\\\Main\\\\Main.jsx\",\n                                lineNumber: 54,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Hp Victus\\\\Desktop\\\\CRUD_MongoDB-main\\\\components\\\\Main\\\\Main.jsx\",\n                            lineNumber: 53,\n                            columnNumber: 13\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ui_button__WEBPACK_IMPORTED_MODULE_5__.Button, {\n                                className: \" w-32 p-6 btn rounded-lg hover:w-36   text-white\",\n                                style: {\n                                    transition: \"2s all\"\n                                },\n                                children: \"Contact\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\Hp Victus\\\\Desktop\\\\CRUD_MongoDB-main\\\\components\\\\Main\\\\Main.jsx\",\n                                lineNumber: 57,\n                                columnNumber: 15\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\Hp Victus\\\\Desktop\\\\CRUD_MongoDB-main\\\\components\\\\Main\\\\Main.jsx\",\n                            lineNumber: 56,\n                            columnNumber: 13\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\Hp Victus\\\\Desktop\\\\CRUD_MongoDB-main\\\\components\\\\Main\\\\Main.jsx\",\n                    lineNumber: 47,\n                    columnNumber: 11\n                }, undefined)\n            }, index, false, {\n                fileName: \"C:\\\\Users\\\\Hp Victus\\\\Desktop\\\\CRUD_MongoDB-main\\\\components\\\\Main\\\\Main.jsx\",\n                lineNumber: 46,\n                columnNumber: 9\n            }, undefined);\n        })\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Hp Victus\\\\Desktop\\\\CRUD_MongoDB-main\\\\components\\\\Main\\\\Main.jsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Main, \"Ns8bBax4Tyof2vPsqsbmR1AcwHw=\");\n_c = Main;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Main);\nvar _c;\n$RefreshReg$(_c, \"Main\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vY29tcG9uZW50cy9NYWluL01haW4uanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWlEO0FBQ2xCO0FBQ21CO0FBQ3RCO0FBQ1U7QUFFdEMsZ0RBQWdEO0FBQ2hELDJCQUEyQjtBQUUzQiwyQkFBMkI7QUFFM0IsTUFBTU8sT0FBTzs7SUFDWCxNQUFNLENBQUNDLFFBQVFDLFVBQVUsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUN2QyxNQUFNLENBQUNNLFNBQVNDLFdBQVcsR0FBR1AsK0NBQVFBLENBQUM7UUFDckM7UUFDQTtRQUNBO1FBQ0E7S0FDRDtJQUNELE1BQU0sQ0FBQ1EsZUFBZUMsaUJBQWlCLEdBQUdULCtDQUFRQSxDQUFDO0lBRW5ERCxnREFBU0EsQ0FBQztRQUNSLE1BQU1XLHNCQUFzQjtZQUMxQixJQUFJO2dCQUNGLE1BQU1DLE9BQU8sTUFBTWYsNkRBQVVBLENBQUNnQjtnQkFDOUJQLFVBQVVNLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTUU7Z0JBQ2hCQztZQUNGLEVBQUUsT0FBT0MsT0FBTztnQkFDZEMsUUFBUUQsTUFBTSwwQkFBMEJBO1lBQzFDO1FBQ0Y7UUFFQUw7UUFFQSxPQUFPO1lBQ0wsbURBQW1EO1lBQ25ETyxjQUFjQztRQUNoQjtJQUNGLEdBQUcsRUFBRSxHQUFHLG1EQUFtRDtJQUkzRCxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDWmhCLE9BQU9pQixJQUFJLENBQUNDLE1BQU1DO2dCQUNrQ0Q7MEJBQW5ELHFFQUFDSDtnQkFBZ0JLLE9BQU87b0JBQUVDLGlCQUFpQixRQUF5QixPQUFqQkgsaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxDQUFBQSxjQUFBQSxLQUFNSSxtQkFBTkoseUJBQUFBLEtBQUFBLElBQUFBLFlBQWFLLEtBQUk7b0JBQUtDLE9BQU87b0JBQVFDLFFBQVE7b0JBQVFDLGtCQUFrQjtvQkFBYUMsZ0JBQWdCO2dCQUFROzBCQUM3Siw0RUFBQ1o7b0JBQUlDLFdBQVU7b0JBQXFEWSxZQUFTOztzQ0FDM0UsOERBQUNDOzRCQUFHYixXQUFVOzRCQUE4QkksT0FBTztnQ0FBRVUsWUFBWTs0QkFBTTtzQ0FBSVosaUJBQUFBLGtCQUFBQSxLQUFBQSxJQUFBQSxLQUFNYTs7Ozs7O3NDQUNqRiw4REFBQ2hCOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ2E7b0NBQUdiLFdBQVU7OENBQThCOzs7Ozs7OENBQzVDLDhEQUFDYTtvQ0FBR2IsV0FBVTs4Q0FBOEJaOzs7Ozs7Ozs7Ozs7c0NBRTlDLDhEQUFDVzs0QkFBSUMsV0FBVTtzQ0FDYiw0RUFBQ25CLDhDQUFLQTtnQ0FBQ3FCLE1BQU1BLGlCQUFBQSxrQkFBQUEsS0FBQUEsSUFBQUEsS0FBTWM7Ozs7Ozs7Ozs7O3NDQUVyQiw4REFBQ2pCO3NDQUNDLDRFQUFDakIsOENBQU1BO2dDQUFDa0IsV0FBVTtnQ0FBbURJLE9BQU87b0NBQUNhLFlBQVc7Z0NBQVE7MENBQUc7Ozs7Ozs7Ozs7Ozs7Ozs7O2VBWC9GZDs7Ozs7Ozs7Ozs7QUFrQmxCO0dBcERNcEI7S0FBQUE7QUFzRE4sK0RBQWVBLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9NYWluL01haW4uanN4PzE3YTYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEdsb2JhbHNBcGkgZnJvbSAnQC9hcHAvX3V0aWxzL0dsb2JhbHNBcGknO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSAnbmV4dC9pbWFnZSc7XHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBNYWluRCBmcm9tICcuL01haW5EJztcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSAnLi4vdWkvYnV0dG9uJztcclxuXHJcbi8vIEFzc3VtaW5nIHRoYXQgaXRlbT8uaW1hZ2U/LnVybCBpcyBhIHZhbGlkIFVSTFxyXG4vLyAuLi4gKHlvdXIgZXhpc3RpbmcgY29kZSlcclxuXHJcbi8vIC4uLiAoeW91ciBleGlzdGluZyBjb2RlKVxyXG5cclxuY29uc3QgTWFpbiA9ICgpID0+IHtcclxuICBjb25zdCBbYmFubmVyLCBzZXRCYW5uZXJdID0gdXNlU3RhdGUoW10pO1xyXG4gIGNvbnN0IFtiYW5uZXJELCBzZXRCYW5uZXJEXSA9IHVzZVN0YXRlKFtcclxuICAgICdXZWIgRGV2ZWxvcGVyLicsXHJcbiAgICAnRnJlZWxhbmNlci4nLFxyXG4gICAgJ0Z1bGwgU3RhY2sgZGV2ZWxvcGVyLicsXHJcbiAgICAnTUVSTiBTdGFjayBkZXZlbG9wZXInXHJcbiAgXSk7XHJcbiAgY29uc3QgW2Rpc3BsYXllZFRleHQsIHNldERpc3BsYXllZFRleHRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgZ2V0QmFubmVyQW5kQW5pbWF0ZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCByZXNwID0gYXdhaXQgR2xvYmFsc0FwaS5nZXRBbGxCYW5uZXIoKTtcclxuICAgICAgICBzZXRCYW5uZXIocmVzcD8uYmFubmVycyk7XHJcbiAgICAgICAgYW5pbWF0ZVRleHQoKTtcclxuICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgYmFubmVyOlwiLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZ2V0QmFubmVyQW5kQW5pbWF0ZSgpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgIC8vIENsZWFudXAgdGhlIGludGVydmFsIHdoZW4gdGhlIGNvbXBvbmVudCB1bm1vdW50c1xyXG4gICAgICBjbGVhckludGVydmFsKGFuaW1hdGlvbkludGVydmFsKTtcclxuICAgIH07XHJcbiAgfSwgW10pOyAvLyBFbXB0eSBkZXBlbmRlbmN5IGFycmF5IHRvIHJ1biBvbmx5IG9uY2Ugb24gbW91bnRcclxuXHJcbiBcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSd3LWZ1bGwgYm9yZGVyIGgtWzcwMHB4XScgPlxyXG4gICAgICB7YmFubmVyLm1hcCgoaXRlbSwgaW5kZXgpID0+IChcclxuICAgICAgICA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYCd1cmwoJHtpdGVtPy5pbWFnZT8udXJsfSknYCwgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMTAwJVwiLCBiYWNrZ3JvdW5kUmVwZWF0OiBcIm5vLXJlcGVhdFwiLCBiYWNrZ3JvdW5kU2l6ZTogXCJjb3ZlclwiIH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXggaC1bMTAwJV0gZmxleC1jb2wganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyJyBkYXRhLWFvcz1cInpvb20taW4tZG93blwiPlxyXG4gICAgICAgICAgICA8aDEgY2xhc3NOYW1lPSd0ZXh0LVszNXB4XSB0ZXh0LXNsYXRlLTk1MCAnIHN0eWxlPXt7IGZvbnRXZWlnaHQ6IFwiNjAwXCIgfX0+e2l0ZW0/LmZpcnN0TmFtZX08L2gxPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBnYXAtNSc+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzTmFtZT0ndGV4dC1bMzVweF0gdGV4dC1zbGF0ZS05NTAgJz5JJ20gYSA8L2gxPlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9J3RleHQtWzM1cHhdIHRleHQtc2xhdGUtOTUwJz57ZGlzcGxheWVkVGV4dH08L2gxPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9J21iLTEwJz5cclxuICAgICAgICAgICAgICA8TWFpbkQgaXRlbT17aXRlbT8ucHJvZ3JhbWluZ30gLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXY+IFxyXG4gICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPScgdy0zMiBwLTYgYnRuIHJvdW5kZWQtbGcgaG92ZXI6dy0zNiAgIHRleHQtd2hpdGUnIHN0eWxlPXt7dHJhbnNpdGlvbjonMnMgYWxsJ319PkNvbnRhY3Q8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgKSl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTWFpbjtcclxuIl0sIm5hbWVzIjpbIkdsb2JhbHNBcGkiLCJJbWFnZSIsIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJNYWluRCIsIkJ1dHRvbiIsIk1haW4iLCJiYW5uZXIiLCJzZXRCYW5uZXIiLCJiYW5uZXJEIiwic2V0QmFubmVyRCIsImRpc3BsYXllZFRleHQiLCJzZXREaXNwbGF5ZWRUZXh0IiwiZ2V0QmFubmVyQW5kQW5pbWF0ZSIsInJlc3AiLCJnZXRBbGxCYW5uZXIiLCJiYW5uZXJzIiwiYW5pbWF0ZVRleHQiLCJlcnJvciIsImNvbnNvbGUiLCJjbGVhckludGVydmFsIiwiYW5pbWF0aW9uSW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJtYXAiLCJpdGVtIiwiaW5kZXgiLCJzdHlsZSIsImJhY2tncm91bmRJbWFnZSIsImltYWdlIiwidXJsIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJkYXRhLWFvcyIsImgxIiwiZm9udFdlaWdodCIsImZpcnN0TmFtZSIsInByb2dyYW1pbmciLCJ0cmFuc2l0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./components/Main/Main.jsx\n"));

/***/ })

});