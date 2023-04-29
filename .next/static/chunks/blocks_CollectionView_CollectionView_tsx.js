"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["blocks_CollectionView_CollectionView_tsx"],{

/***/ "./blocks/CollectionView/CollectionView.tsx":
/*!**************************************************!*\
  !*** ./blocks/CollectionView/CollectionView.tsx ***!
  \**************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_seo__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-seo */ \"./node_modules/next-seo/lib/next-seo.module.js\");\n/* harmony import */ var theme_ui__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! theme-ui */ \"./node_modules/theme-ui/dist/theme-ui.esm.js\");\n/* harmony import */ var _theme_ui_components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @theme-ui/components */ \"./node_modules/@theme-ui/components/dist/theme-ui-components.esm.js\");\n/* harmony import */ var _config_shopify__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @config/shopify */ \"./config/shopify.ts\");\n/* harmony import */ var _ProductGrid_ProductGrid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../ProductGrid/ProductGrid */ \"./blocks/ProductGrid/ProductGrid.tsx\");\n/* harmony import */ var _lib_shopify_storefront_data_hooks_src_api_operations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @lib/shopify/storefront-data-hooks/src/api/operations */ \"./lib/shopify/storefront-data-hooks/src/api/operations.ts\");\n/** @jsxRuntime classic */ /** @jsx jsx */ var _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst CollectionPreview = (param)=>{\n    let { collection: initialCollection , productGridOptions , renderSeo  } = param;\n    _s();\n    const [collection, setCollection] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(initialCollection);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>setCollection(initialCollection), [\n        initialCollection\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        const fetchCollection = async ()=>{\n            setLoading(true);\n            const result = await (0,_lib_shopify_storefront_data_hooks_src_api_operations__WEBPACK_IMPORTED_MODULE_4__.getCollection)(_config_shopify__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                handle: collection\n            });\n            setCollection(result);\n            setLoading(false);\n        };\n        if (typeof collection === \"string\") {\n            fetchCollection();\n        }\n    }, [\n        collection\n    ]);\n    if (!collection || typeof collection === \"string\" || loading) {\n        return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_theme_ui_components__WEBPACK_IMPORTED_MODULE_6__.Box, {\n            __source: {\n                fileName: \"/home/kylosonic/Downloads/nextjs-shopify-master/blocks/CollectionView/CollectionView.tsx\",\n                lineNumber: 44,\n                columnNumber: 12\n            },\n            __self: undefined\n        }, \"Loading...\");\n    }\n    const { title , description , products  } = collection;\n    return /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_theme_ui_components__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        sx: {\n            display: \"flex\",\n            flexDirection: \"column\"\n        },\n        key: collection.id,\n        __source: {\n            fileName: \"/home/kylosonic/Downloads/nextjs-shopify-master/blocks/CollectionView/CollectionView.tsx\",\n            lineNumber: 50,\n            columnNumber: 5\n        },\n        __self: undefined\n    }, renderSeo && /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(next_seo__WEBPACK_IMPORTED_MODULE_1__.NextSeo, {\n        title: collection.title,\n        description: collection.description,\n        openGraph: {\n            type: \"website\",\n            title,\n            description\n        },\n        __source: {\n            fileName: \"/home/kylosonic/Downloads/nextjs-shopify-master/blocks/CollectionView/CollectionView.tsx\",\n            lineNumber: 52,\n            columnNumber: 9\n        },\n        __self: undefined\n    }), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"div\", {\n        sx: {\n            display: \"flex\",\n            flexDirection: \"column\"\n        },\n        __source: {\n            fileName: \"/home/kylosonic/Downloads/nextjs-shopify-master/blocks/CollectionView/CollectionView.tsx\",\n            lineNumber: 62,\n            columnNumber: 7\n        },\n        __self: undefined\n    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"span\", {\n        sx: {\n            mt: 0,\n            mb: 2\n        },\n        __source: {\n            fileName: \"/home/kylosonic/Downloads/nextjs-shopify-master/blocks/CollectionView/CollectionView.tsx\",\n            lineNumber: 63,\n            columnNumber: 9\n        },\n        __self: undefined\n    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_theme_ui_components__WEBPACK_IMPORTED_MODULE_6__.Heading, {\n        __source: {\n            fileName: \"/home/kylosonic/Downloads/nextjs-shopify-master/blocks/CollectionView/CollectionView.tsx\",\n            lineNumber: 64,\n            columnNumber: 11\n        },\n        __self: undefined\n    }, collection.title)), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(\"div\", {\n        dangerouslySetInnerHTML: {\n            __html: collection.description\n        },\n        __source: {\n            fileName: \"/home/kylosonic/Downloads/nextjs-shopify-master/blocks/CollectionView/CollectionView.tsx\",\n            lineNumber: 66,\n            columnNumber: 9\n        },\n        __self: undefined\n    })), /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_theme_ui_components__WEBPACK_IMPORTED_MODULE_6__.Box, {\n        sx: {\n            p: 5\n        },\n        __source: {\n            fileName: \"/home/kylosonic/Downloads/nextjs-shopify-master/blocks/CollectionView/CollectionView.tsx\",\n            lineNumber: 68,\n            columnNumber: 7\n        },\n        __self: undefined\n    }, /*#__PURE__*/ (0,theme_ui__WEBPACK_IMPORTED_MODULE_5__.jsx)(_ProductGrid_ProductGrid__WEBPACK_IMPORTED_MODULE_3__.ProductGrid, Object.assign({}, productGridOptions, {\n        products: products,\n        __source: {\n            fileName: \"/home/kylosonic/Downloads/nextjs-shopify-master/blocks/CollectionView/CollectionView.tsx\",\n            lineNumber: 69,\n            columnNumber: 9\n        },\n        __self: undefined\n    }))));\n};\n_s(CollectionPreview, \"NTRMpYt80BbM13cfHWBscPIlHmI=\");\n_c = CollectionPreview;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CollectionPreview);\nvar _c;\n$RefreshReg$(_c, \"CollectionPreview\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ibG9ja3MvQ29sbGVjdGlvblZpZXcvQ29sbGVjdGlvblZpZXcudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLHdCQUF3QixHQUN4QixhQUFhO0FBQ3lDO0FBQ3BCO0FBQ0o7QUFDcUI7QUFDUjtBQUMrQjtBQUNXO0FBVXJGLE1BQU1VLG9CQUErQixTQUkvQjtRQUpnQyxFQUNwQ0MsWUFBWUMsa0JBQWlCLEVBQzdCQyxtQkFBa0IsRUFDbEJDLFVBQVMsRUFDVjs7SUFDQyxNQUFNLENBQUNILFlBQVlJLGNBQWMsR0FBR2QsK0NBQVFBLENBQUNXO0lBQzdDLE1BQU0sQ0FBQ0ksU0FBU0MsV0FBVyxHQUFHaEIsK0NBQVFBLENBQUMsS0FBSztJQUU1Q0MsZ0RBQVNBLENBQUMsSUFBTWEsY0FBY0gsb0JBQW9CO1FBQUNBO0tBQWtCO0lBRXJFVixnREFBU0EsQ0FBQyxJQUFNO1FBQ2QsTUFBTWdCLGtCQUFrQixVQUFZO1lBQ2xDRCxXQUFXLElBQUk7WUFDZixNQUFNRSxTQUFTLE1BQU1WLG9HQUFhQSxDQUFDRix1REFBYUEsRUFBRTtnQkFDaERhLFFBQVFUO1lBQ1Y7WUFDQUksY0FBY0k7WUFDZEYsV0FBVyxLQUFLO1FBQ2xCO1FBQ0EsSUFBSSxPQUFPTixlQUFlLFVBQVU7WUFDbENPO1FBQ0YsQ0FBQztJQUNILEdBQUc7UUFBQ1A7S0FBVztJQUVmLElBQUksQ0FBQ0EsY0FBYyxPQUFPQSxlQUFlLFlBQVlLLFNBQVM7UUFDNUQscUJBQU8sOENBQUNYLHFEQUFHQTs7Ozs7OztXQUFDO0lBQ2QsQ0FBQztJQUVELE1BQU0sRUFBRWdCLE1BQUssRUFBRUMsWUFBVyxFQUFFQyxTQUFRLEVBQUUsR0FBR1o7SUFFekMscUJBQ0UsOENBQUNOLHFEQUFHQTtRQUFDbUIsSUFBSTtZQUFFQyxTQUFTO1lBQVFDLGVBQWU7UUFBUztRQUFHQyxLQUFLaEIsV0FBV2lCLEVBQUU7Ozs7Ozs7T0FDdEVkLDJCQUNDLDhDQUFDWCw2Q0FBT0E7UUFDTmtCLE9BQU9WLFdBQVdVLEtBQUs7UUFDdkJDLGFBQWFYLFdBQVdXLFdBQVc7UUFDbkNPLFdBQVc7WUFDVEMsTUFBTTtZQUNOVDtZQUNBQztRQUNGOzs7Ozs7O3NCQUdKLDhDQUFDUztRQUFJUCxJQUFJO1lBQUVDLFNBQVM7WUFBUUMsZUFBZTtRQUFTOzs7Ozs7O3FCQUNsRCw4Q0FBQ007UUFBS1IsSUFBSTtZQUFFUyxJQUFJO1lBQUdDLElBQUk7UUFBRTs7Ozs7OztxQkFDdkIsOENBQUM1Qix5REFBT0E7Ozs7Ozs7T0FBRUssV0FBV1UsS0FBSyxrQkFFNUIsOENBQUNVO1FBQUlJLHlCQUF5QjtZQUFFQyxRQUFRekIsV0FBV1csV0FBVztRQUFFOzs7Ozs7O3VCQUVsRSw4Q0FBQ2pCLHFEQUFHQTtRQUFDbUIsSUFBSTtZQUFFYSxHQUFHO1FBQUU7Ozs7Ozs7cUJBQ2QsOENBQUM3QixpRUFBV0Esb0JBQUtLO1FBQW9CVSxVQUFVQTs7Ozs7Ozs7QUFJdkQ7R0F0RE1iO0tBQUFBO0FBd0ROLCtEQUFlQSxpQkFBaUJBLEVBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYmxvY2tzL0NvbGxlY3Rpb25WaWV3L0NvbGxlY3Rpb25WaWV3LnRzeD9hMzY4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKiBAanN4UnVudGltZSBjbGFzc2ljICovXG4vKiogQGpzeCBqc3ggKi9cbmltcG9ydCBSZWFjdCwgeyBGQywgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgTmV4dFNlbyB9IGZyb20gJ25leHQtc2VvJ1xuaW1wb3J0IHsganN4IH0gZnJvbSAndGhlbWUtdWknXG5pbXBvcnQgeyBCb3gsIEhlYWRpbmcgfSBmcm9tICdAdGhlbWUtdWkvY29tcG9uZW50cydcbmltcG9ydCBzaG9waWZ5Q29uZmlnIGZyb20gJ0Bjb25maWcvc2hvcGlmeSdcbmltcG9ydCB7IFByb2R1Y3RHcmlkLCBQcm9kdWN0R3JpZFByb3BzIH0gZnJvbSAnLi4vUHJvZHVjdEdyaWQvUHJvZHVjdEdyaWQnXG5pbXBvcnQgeyBnZXRDb2xsZWN0aW9uIH0gZnJvbSAnQGxpYi9zaG9waWZ5L3N0b3JlZnJvbnQtZGF0YS1ob29rcy9zcmMvYXBpL29wZXJhdGlvbnMnXG5cbmludGVyZmFjZSBQcm9wcyB7XG4gIGNsYXNzTmFtZT86IHN0cmluZ1xuICBjaGlsZHJlbj86IGFueVxuICBjb2xsZWN0aW9uOiBzdHJpbmcgfCBhbnkgLy8gU2hvcGlmeUJ1eS5Db2xsZWN0aW9uIG9uY2UgdGhlaXIgdHlwZXMgYXJlIHVwIHRvIGRhdGVcbiAgcHJvZHVjdEdyaWRPcHRpb25zOiBQcm9kdWN0R3JpZFByb3BzXG4gIHJlbmRlclNlbz86IGJvb2xlYW5cbn1cblxuY29uc3QgQ29sbGVjdGlvblByZXZpZXc6IEZDPFByb3BzPiA9ICh7XG4gIGNvbGxlY3Rpb246IGluaXRpYWxDb2xsZWN0aW9uLFxuICBwcm9kdWN0R3JpZE9wdGlvbnMsXG4gIHJlbmRlclNlbyxcbn0pID0+IHtcbiAgY29uc3QgW2NvbGxlY3Rpb24sIHNldENvbGxlY3Rpb25dID0gdXNlU3RhdGUoaW5pdGlhbENvbGxlY3Rpb24pXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiBzZXRDb2xsZWN0aW9uKGluaXRpYWxDb2xsZWN0aW9uKSwgW2luaXRpYWxDb2xsZWN0aW9uXSlcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGNvbnN0IGZldGNoQ29sbGVjdGlvbiA9IGFzeW5jICgpID0+IHtcbiAgICAgIHNldExvYWRpbmcodHJ1ZSlcbiAgICAgIGNvbnN0IHJlc3VsdCA9IGF3YWl0IGdldENvbGxlY3Rpb24oc2hvcGlmeUNvbmZpZywge1xuICAgICAgICBoYW5kbGU6IGNvbGxlY3Rpb24sXG4gICAgICB9KVxuICAgICAgc2V0Q29sbGVjdGlvbihyZXN1bHQpXG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKVxuICAgIH1cbiAgICBpZiAodHlwZW9mIGNvbGxlY3Rpb24gPT09ICdzdHJpbmcnKSB7XG4gICAgICBmZXRjaENvbGxlY3Rpb24oKVxuICAgIH1cbiAgfSwgW2NvbGxlY3Rpb25dKVxuXG4gIGlmICghY29sbGVjdGlvbiB8fCB0eXBlb2YgY29sbGVjdGlvbiA9PT0gJ3N0cmluZycgfHwgbG9hZGluZykge1xuICAgIHJldHVybiA8Qm94PkxvYWRpbmcuLi48L0JveD5cbiAgfVxuXG4gIGNvbnN0IHsgdGl0bGUsIGRlc2NyaXB0aW9uLCBwcm9kdWN0cyB9ID0gY29sbGVjdGlvblxuXG4gIHJldHVybiAoXG4gICAgPEJveCBzeD17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nIH19IGtleT17Y29sbGVjdGlvbi5pZH0+XG4gICAgICB7cmVuZGVyU2VvICYmIChcbiAgICAgICAgPE5leHRTZW9cbiAgICAgICAgICB0aXRsZT17Y29sbGVjdGlvbi50aXRsZX1cbiAgICAgICAgICBkZXNjcmlwdGlvbj17Y29sbGVjdGlvbi5kZXNjcmlwdGlvbn1cbiAgICAgICAgICBvcGVuR3JhcGg9e3tcbiAgICAgICAgICAgIHR5cGU6ICd3ZWJzaXRlJyxcbiAgICAgICAgICAgIHRpdGxlLFxuICAgICAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgICl9XG4gICAgICA8ZGl2IHN4PXt7IGRpc3BsYXk6ICdmbGV4JywgZmxleERpcmVjdGlvbjogJ2NvbHVtbicgfX0+XG4gICAgICAgIDxzcGFuIHN4PXt7IG10OiAwLCBtYjogMiB9fT5cbiAgICAgICAgICA8SGVhZGluZz57Y29sbGVjdGlvbi50aXRsZX08L0hlYWRpbmc+XG4gICAgICAgIDwvc3Bhbj5cbiAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGNvbGxlY3Rpb24uZGVzY3JpcHRpb24hIH19IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxCb3ggc3g9e3sgcDogNSB9fT5cbiAgICAgICAgPFByb2R1Y3RHcmlkIHsuLi5wcm9kdWN0R3JpZE9wdGlvbnN9IHByb2R1Y3RzPXtwcm9kdWN0c30gLz5cbiAgICAgIDwvQm94PlxuICAgIDwvQm94PlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IENvbGxlY3Rpb25QcmV2aWV3XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIk5leHRTZW8iLCJqc3giLCJCb3giLCJIZWFkaW5nIiwic2hvcGlmeUNvbmZpZyIsIlByb2R1Y3RHcmlkIiwiZ2V0Q29sbGVjdGlvbiIsIkNvbGxlY3Rpb25QcmV2aWV3IiwiY29sbGVjdGlvbiIsImluaXRpYWxDb2xsZWN0aW9uIiwicHJvZHVjdEdyaWRPcHRpb25zIiwicmVuZGVyU2VvIiwic2V0Q29sbGVjdGlvbiIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZmV0Y2hDb2xsZWN0aW9uIiwicmVzdWx0IiwiaGFuZGxlIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInByb2R1Y3RzIiwic3giLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImtleSIsImlkIiwib3BlbkdyYXBoIiwidHlwZSIsImRpdiIsInNwYW4iLCJtdCIsIm1iIiwiZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUwiLCJfX2h0bWwiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./blocks/CollectionView/CollectionView.tsx\n"));

/***/ })

}]);