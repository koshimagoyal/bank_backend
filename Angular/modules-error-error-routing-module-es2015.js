(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-error-error-routing-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/error/containers/error-401/error-401.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/error/containers/error-401/error-401.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-error\r\n    ><div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-lg-6\">\r\n                <div class=\"text-center mt-4\">\r\n                    <h1 class=\"display-1\">401</h1>\r\n                    <p class=\"lead\">Unauthorized</p>\r\n                    <p>Access to this resource is denied.</p>\r\n                    <a routerLink=\"/login\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"arrow-left\"]'></fa-icon>Return</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div></sb-layout-error\r\n>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/error/containers/error-404/error-404.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/error/containers/error-404/error-404.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-error\r\n    ><div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-lg-6\">\r\n                <div class=\"text-center mt-4\">\r\n                    <img class=\"mb-4 img-error\" src=\"assets/img/error-404-monochrome.svg\" />\r\n                    <p class=\"lead\">This requested URL was not found on this server.</p>\r\n                    <a routerLink=\"/login\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"arrow-left\"]'></fa-icon>Return</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div></sb-layout-error\r\n>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/modules/error/containers/error-500/error-500.component.html":
/*!***************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/modules/error/containers/error-500/error-500.component.html ***!
  \***************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-error\r\n    ><div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-lg-6\">\r\n                <div class=\"text-center mt-4\">\r\n                    <h1 class=\"display-1\">500</h1>\r\n                    <p class=\"lead\">Internal Server Error</p>\r\n                    <a routerLink=\"/login\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"arrow-left\"]'></fa-icon>Return</a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div></sb-layout-error\r\n>\r\n");

/***/ }),

/***/ "./src/modules/error/components/index.ts":
/*!***********************************************!*\
  !*** ./src/modules/error/components/index.ts ***!
  \***********************************************/
/*! exports provided: components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

const components = [];


/***/ }),

/***/ "./src/modules/error/containers/error-401/error-401.component.scss":
/*!*************************************************************************!*\
  !*** ./src/modules/error/containers/error-401/error-401.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9lcnJvci9jb250YWluZXJzL2Vycm9yLTQwMS9lcnJvci00MDEuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/modules/error/containers/error-401/error-401.component.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/error/containers/error-401/error-401.component.ts ***!
  \***********************************************************************/
/*! exports provided: Error401Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error401Component", function() { return Error401Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Error401Component = class Error401Component {
    constructor() { }
    ngOnInit() { }
};
Error401Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-error-401',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./error-401.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/error/containers/error-401/error-401.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./error-401.component.scss */ "./src/modules/error/containers/error-401/error-401.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], Error401Component);



/***/ }),

/***/ "./src/modules/error/containers/error-404/error-404.component.scss":
/*!*************************************************************************!*\
  !*** ./src/modules/error/containers/error-404/error-404.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9lcnJvci9jb250YWluZXJzL2Vycm9yLTQwNC9lcnJvci00MDQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/modules/error/containers/error-404/error-404.component.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/error/containers/error-404/error-404.component.ts ***!
  \***********************************************************************/
/*! exports provided: Error404Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return Error404Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Error404Component = class Error404Component {
    constructor() { }
    ngOnInit() { }
};
Error404Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-error-404',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./error-404.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/error/containers/error-404/error-404.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./error-404.component.scss */ "./src/modules/error/containers/error-404/error-404.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], Error404Component);



/***/ }),

/***/ "./src/modules/error/containers/error-500/error-500.component.scss":
/*!*************************************************************************!*\
  !*** ./src/modules/error/containers/error-500/error-500.component.scss ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvbW9kdWxlcy9lcnJvci9jb250YWluZXJzL2Vycm9yLTUwMC9lcnJvci01MDAuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/modules/error/containers/error-500/error-500.component.ts":
/*!***********************************************************************!*\
  !*** ./src/modules/error/containers/error-500/error-500.component.ts ***!
  \***********************************************************************/
/*! exports provided: Error500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Error500Component", function() { return Error500Component; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let Error500Component = class Error500Component {
    constructor() { }
    ngOnInit() { }
};
Error500Component = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-error-500',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./error-500.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/modules/error/containers/error-500/error-500.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./error-500.component.scss */ "./src/modules/error/containers/error-500/error-500.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], Error500Component);



/***/ }),

/***/ "./src/modules/error/containers/index.ts":
/*!***********************************************!*\
  !*** ./src/modules/error/containers/index.ts ***!
  \***********************************************/
/*! exports provided: containers, Error401Component, Error404Component, Error500Component */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _error_401_error_401_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error-401/error-401.component */ "./src/modules/error/containers/error-401/error-401.component.ts");
/* harmony import */ var _error_404_error_404_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./error-404/error-404.component */ "./src/modules/error/containers/error-404/error-404.component.ts");
/* harmony import */ var _error_500_error_500_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error-500/error-500.component */ "./src/modules/error/containers/error-500/error-500.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Error401Component", function() { return _error_401_error_401_component__WEBPACK_IMPORTED_MODULE_1__["Error401Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Error404Component", function() { return _error_404_error_404_component__WEBPACK_IMPORTED_MODULE_2__["Error404Component"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Error500Component", function() { return _error_500_error_500_component__WEBPACK_IMPORTED_MODULE_3__["Error500Component"]; });





const containers = [_error_401_error_401_component__WEBPACK_IMPORTED_MODULE_1__["Error401Component"], _error_404_error_404_component__WEBPACK_IMPORTED_MODULE_2__["Error404Component"], _error_500_error_500_component__WEBPACK_IMPORTED_MODULE_3__["Error500Component"]];





/***/ }),

/***/ "./src/modules/error/error-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/modules/error/error-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ROUTES, ErrorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ROUTES", function() { return ROUTES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorRoutingModule", function() { return ErrorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _error_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./error.module */ "./src/modules/error/error.module.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./containers */ "./src/modules/error/containers/index.ts");

/* tslint:disable: ordered-imports*/


/* Module */

/* Containers */

/* Routes */
const ROUTES = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '404',
    },
    {
        path: '401',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["Error401Component"],
        data: {
            title: 'Error 401 - SB Admin Angular',
        },
    },
    {
        path: '404',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["Error404Component"],
        data: {
            title: 'Error 404 - SB Admin Angular',
        },
    },
    {
        path: '500',
        canActivate: [],
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["Error500Component"],
        data: {
            title: 'Error 500 - SB Admin Angular',
        },
    },
    {
        path: '**',
        pathMatch: 'full',
        component: _containers__WEBPACK_IMPORTED_MODULE_4__["Error404Component"],
    },
];
let ErrorRoutingModule = class ErrorRoutingModule {
};
ErrorRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_error_module__WEBPACK_IMPORTED_MODULE_3__["ErrorModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(ROUTES)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ErrorRoutingModule);



/***/ }),

/***/ "./src/modules/error/error.module.ts":
/*!*******************************************!*\
  !*** ./src/modules/error/error.module.ts ***!
  \*******************************************/
/*! exports provided: ErrorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorModule", function() { return ErrorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");
/* harmony import */ var _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/navigation/navigation.module */ "./src/app/navigation/navigation.module.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components */ "./src/modules/error/components/index.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./containers */ "./src/modules/error/containers/index.ts");
/* harmony import */ var _guards__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./guards */ "./src/modules/error/guards/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services */ "./src/modules/error/services/index.ts");

/* tslint:disable: ordered-imports*/




/* Modules */


/* Components */

/* Containers */

/* Guards */

/* Services */

let ErrorModule = class ErrorModule {
};
ErrorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"],
            _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"],
        ],
        providers: [..._services__WEBPACK_IMPORTED_MODULE_10__["services"], ..._guards__WEBPACK_IMPORTED_MODULE_9__["guards"]],
        declarations: [..._containers__WEBPACK_IMPORTED_MODULE_8__["containers"], ..._components__WEBPACK_IMPORTED_MODULE_7__["components"]],
        exports: [..._containers__WEBPACK_IMPORTED_MODULE_8__["containers"], ..._components__WEBPACK_IMPORTED_MODULE_7__["components"]],
    })
], ErrorModule);



/***/ }),

/***/ "./src/modules/error/guards/error.guard.ts":
/*!*************************************************!*\
  !*** ./src/modules/error/guards/error.guard.ts ***!
  \*************************************************/
/*! exports provided: ErrorGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorGuard", function() { return ErrorGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ErrorGuard = class ErrorGuard {
    canActivate() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(true);
    }
};
ErrorGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], ErrorGuard);



/***/ }),

/***/ "./src/modules/error/guards/index.ts":
/*!*******************************************!*\
  !*** ./src/modules/error/guards/index.ts ***!
  \*******************************************/
/*! exports provided: guards, ErrorGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "guards", function() { return guards; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _error_guard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.guard */ "./src/modules/error/guards/error.guard.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorGuard", function() { return _error_guard__WEBPACK_IMPORTED_MODULE_1__["ErrorGuard"]; });



const guards = [_error_guard__WEBPACK_IMPORTED_MODULE_1__["ErrorGuard"]];



/***/ }),

/***/ "./src/modules/error/services/error.service.ts":
/*!*****************************************************!*\
  !*** ./src/modules/error/services/error.service.ts ***!
  \*****************************************************/
/*! exports provided: ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return ErrorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



let ErrorService = class ErrorService {
    constructor() { }
    getError$() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])({});
    }
};
ErrorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], ErrorService);



/***/ }),

/***/ "./src/modules/error/services/index.ts":
/*!*********************************************!*\
  !*** ./src/modules/error/services/index.ts ***!
  \*********************************************/
/*! exports provided: services, ErrorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _error_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./error.service */ "./src/modules/error/services/error.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ErrorService", function() { return _error_service__WEBPACK_IMPORTED_MODULE_1__["ErrorService"]; });



const services = [_error_service__WEBPACK_IMPORTED_MODULE_1__["ErrorService"]];



/***/ })

}]);
//# sourceMappingURL=modules-error-error-routing-module-es2015.js.map