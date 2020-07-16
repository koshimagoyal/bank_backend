(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~apply-loan-apply-loan-module~calculator-calculator-module~close-account-close-account-module~f68ef752"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/components/dashboard-head/dashboard-head.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/components/dashboard-head/dashboard-head.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row\">\r\n    <div class=\"col\">\r\n        <h1 class=\"mt-4\">{{title}}</h1>\r\n    </div>\r\n    <div class=\"col language\">\r\n        <label for=\"\"><h6>{{'Common.Select'|translate}}</h6>\r\n            <select class=\"custom-select\" #langselect (change)=\"translate.use(langselect.value)\">\r\n                <option *ngFor=\"let lang of translate.getLangs()\" [value]=\"lang\">{{lang}}</option>\r\n            </select>\r\n        </label>\r\n    </div>\r\n</div>\r\n<!--sb-breadcrumbs *ngIf=\"!hideBreadcrumbs\"></sb-breadcrumbs-->\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/containers/footer/footer.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/containers/footer/footer.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"py-4 bg-light mt-auto\">\n    <div class=\"container-fluid\">\n        <div class=\"d-flex align-items-center justify-content-between small\">\n            <div class=\"text-muted\">Copyright &copy; Your Website 2019</div>\n            <div><a href=\"#\">Privacy Policy &middot;</a><a href=\"#\">Terms &amp; Conditions</a></div>\n        </div>\n    </div>\n</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/layouts/layout-auth/layout-auth.component.html":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/layouts/layout-auth/layout-auth.component.html ***!
  \*****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"bg-primary\" id=\"layoutAuthentication\">\n    <div id=\"layoutAuthentication_content\">\n        <main><ng-content></ng-content></main>\n    </div>\n    <div id=\"layoutAuthentication_footer\"><sb-footer></sb-footer></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/layouts/layout-error/layout-error.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/layouts/layout-error/layout-error.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"layoutError\">\n    <div id=\"layoutError_content\">\n        <main><ng-content></ng-content></main>\n    </div>\n    <div id=\"layoutError_footer\"><sb-footer></sb-footer></div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/top-nav/top-nav/top-nav.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/top-nav/top-nav/top-nav.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"sb-topnav navbar navbar-expand navbar-dark bg-dark\">\n    <p class=\"navbar-brand\">{{'Common.Title' | translate}}</p>\n    <button class=\"btn btn-link btn-sm order-1 order-lg-0\" id=\"sidebarToggle\" data-cy=\"topNavToggleSideNav\" (click)=\"toggleSideNav()\">\n        <fa-icon [icon]='[\"fas\", \"bars\"]'></fa-icon>\n    </button>\n    <ul class=\"navbar-nav ml-auto mr-0 mr-md-2 my-2 my-md-0\" style=\"float:right\">\n        <div>\n            <li class=\"nav-item dropdown dropdown-user no-caret\" ngbDropdown placement=\"bottom-right\" display=\"dynamic\">\n                <a class=\"nav-link dropdown-toggle\" id=\"userDropdown\" ngbDropdownToggle data-cy=\"userMenu\" role=\"button\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    <img [src]=\"this.navigationService.img!=null ? this.navigationService.img : 'assets/img/Image.jpg'\" width=\"50px\" height=\"50px\" class=\"rounded-circle\">\n                </a>\n                <div class=\"dropdown-menu dropdown-menu-right\" ngbDropdownMenu aria-labelledby=\"dropdownUser\">\n                    <h6 class=\"dropdown-header\">\n                        <div class=\"dropdown-user-details\">\n                            <div class=\"dropdown-user-details-name\" *ngIf=\"user.id\">{{'Accountant.Tables.EmployeeNo'| translate}} - {{ user.id }}</div>\n                            <div class=\"dropdown-user-details-name\" *ngIf=\"user.name\">{{'Accountant.Tables.EmployeeName'| translate}} - {{ user.name }}</div>\n                            <div class=\"dropdown-user-details-name\" *ngIf=\"user.email\">{{'Accountant.Tables.Email'| translate}} - {{ user.email }}</div>\n                            <div class=\"dropdown-user-details-email\" *ngIf=\"user.address\">{{'Accountant.Tables.CurrAddress'| translate}} - {{ user.address }}</div>\n                        </div>\n                    </h6>\n                    <ng-container *ngIf=\"user.role === 1; else emp\">\n                        <div class=\"dropdown-divider\"></div>\n                        <a class=\"dropdown-item\" routerLink=\"/profile\">{{'Accountant.Pages.Edit'| translate}}</a>\n                    </ng-container>\n                    <ng-template #emp>\n                        <div class=\"dropdown-divider\"></div>\n                        <a class=\"dropdown-item\" routerLink=\"/emp-profile\">{{'Accountant.Pages.Edit'| translate}}</a>\n                    </ng-template>\n                    <div class=\"dropdown-divider\"></div>\n                    <a class=\"dropdown-item\" routerLink=\"/login\">{{'Common.User.Logout'|translate}}</a>\n                </div>\n            </li>\n        </div>\n\n    </ul>\n</nav>\n");

/***/ }),

/***/ "./src/app/navigation/components/dashboard-head/dashboard-head.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/navigation/components/dashboard-head/dashboard-head.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".language {\n  align-items: end;\n  text-align: end;\n  align-content: end;\n  margin-top: 20px;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2aWdhdGlvbi9jb21wb25lbnRzL2Rhc2hib2FyZC1oZWFkL0M6XFxVc2Vyc1xcTGVub3ZvXFxEb3dubG9hZHNcXFNvY2lldHlfQmFua2luZy9zcmNcXGFwcFxcbmF2aWdhdGlvblxcY29tcG9uZW50c1xcZGFzaGJvYXJkLWhlYWRcXGRhc2hib2FyZC1oZWFkLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9uYXZpZ2F0aW9uL2NvbXBvbmVudHMvZGFzaGJvYXJkLWhlYWQvZGFzaGJvYXJkLWhlYWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtBQ0FKIiwiZmlsZSI6InNyYy9hcHAvbmF2aWdhdGlvbi9jb21wb25lbnRzL2Rhc2hib2FyZC1oZWFkL2Rhc2hib2FyZC1oZWFkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnc3R5bGVzL3ZhcmlhYmxlcy5zY3NzJztcbi5sYW5ndWFnZXtcbiAgICBhbGlnbi1pdGVtczogZW5kO1xuICAgIHRleHQtYWxpZ246IGVuZDtcbiAgICBhbGlnbi1jb250ZW50OiBlbmQ7XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICBmbG9hdDogcmlnaHQ7XG59XG4iLCIubGFuZ3VhZ2Uge1xuICBhbGlnbi1pdGVtczogZW5kO1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIGFsaWduLWNvbnRlbnQ6IGVuZDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgZmxvYXQ6IHJpZ2h0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/navigation/components/dashboard-head/dashboard-head.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/navigation/components/dashboard-head/dashboard-head.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DashboardHeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardHeadComponent", function() { return DashboardHeadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");



let DashboardHeadComponent = class DashboardHeadComponent {
    constructor(translate) {
        this.translate = translate;
        this.hideBreadcrumbs = false;
        this.translate.addLangs(['english', 'hindi']);
        this.translate.setDefaultLang('english');
        const browserLang = this.translate.currentLang;
        this.translate.use(browserLang);
    }
    ngOnInit() { }
};
DashboardHeadComponent.ctorParameters = () => [
    { type: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)
], DashboardHeadComponent.prototype, "title", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], DashboardHeadComponent.prototype, "hideBreadcrumbs", void 0);
DashboardHeadComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-dashboard-head',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard-head.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/components/dashboard-head/dashboard-head.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard-head.component.scss */ "./src/app/navigation/components/dashboard-head/dashboard-head.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
], DashboardHeadComponent);



/***/ }),

/***/ "./src/app/navigation/components/index.ts":
/*!************************************************!*\
  !*** ./src/app/navigation/components/index.ts ***!
  \************************************************/
/*! exports provided: components, DashboardHeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dashboard_head_dashboard_head_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard-head/dashboard-head.component */ "./src/app/navigation/components/dashboard-head/dashboard-head.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardHeadComponent", function() { return _dashboard_head_dashboard_head_component__WEBPACK_IMPORTED_MODULE_1__["DashboardHeadComponent"]; });



const components = [_dashboard_head_dashboard_head_component__WEBPACK_IMPORTED_MODULE_1__["DashboardHeadComponent"]];



/***/ }),

/***/ "./src/app/navigation/containers/footer/footer.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/navigation/containers/footer/footer.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vY29udGFpbmVycy9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/navigation/containers/footer/footer.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/navigation/containers/footer/footer.component.ts ***!
  \******************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() { }
};
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-footer',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/containers/footer/footer.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./footer.component.scss */ "./src/app/navigation/containers/footer/footer.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/navigation/containers/index.ts":
/*!************************************************!*\
  !*** ./src/app/navigation/containers/index.ts ***!
  \************************************************/
/*! exports provided: containers, FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "containers", function() { return containers; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/navigation/containers/footer/footer.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return _footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]; });



const containers = [_footer_footer_component__WEBPACK_IMPORTED_MODULE_1__["FooterComponent"]];



/***/ }),

/***/ "./src/app/navigation/layouts/index.ts":
/*!*********************************************!*\
  !*** ./src/app/navigation/layouts/index.ts ***!
  \*********************************************/
/*! exports provided: layouts, LayoutAuthComponent, LayoutErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "layouts", function() { return layouts; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _layout_auth_layout_auth_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./layout-auth/layout-auth.component */ "./src/app/navigation/layouts/layout-auth/layout-auth.component.ts");
/* harmony import */ var _layout_error_layout_error_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./layout-error/layout-error.component */ "./src/app/navigation/layouts/layout-error/layout-error.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutAuthComponent", function() { return _layout_auth_layout_auth_component__WEBPACK_IMPORTED_MODULE_1__["LayoutAuthComponent"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LayoutErrorComponent", function() { return _layout_error_layout_error_component__WEBPACK_IMPORTED_MODULE_2__["LayoutErrorComponent"]; });




const layouts = [_layout_auth_layout_auth_component__WEBPACK_IMPORTED_MODULE_1__["LayoutAuthComponent"], _layout_error_layout_error_component__WEBPACK_IMPORTED_MODULE_2__["LayoutErrorComponent"]];




/***/ }),

/***/ "./src/app/navigation/layouts/layout-auth/layout-auth.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/navigation/layouts/layout-auth/layout-auth.component.scss ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbGF5b3V0cy9sYXlvdXQtYXV0aC9sYXlvdXQtYXV0aC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/navigation/layouts/layout-auth/layout-auth.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/navigation/layouts/layout-auth/layout-auth.component.ts ***!
  \*************************************************************************/
/*! exports provided: LayoutAuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutAuthComponent", function() { return LayoutAuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutAuthComponent = class LayoutAuthComponent {
    constructor() { }
    ngOnInit() { }
};
LayoutAuthComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-layout-auth',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./layout-auth.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/layouts/layout-auth/layout-auth.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./layout-auth.component.scss */ "./src/app/navigation/layouts/layout-auth/layout-auth.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], LayoutAuthComponent);



/***/ }),

/***/ "./src/app/navigation/layouts/layout-error/layout-error.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/navigation/layouts/layout-error/layout-error.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25hdmlnYXRpb24vbGF5b3V0cy9sYXlvdXQtZXJyb3IvbGF5b3V0LWVycm9yLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/navigation/layouts/layout-error/layout-error.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/navigation/layouts/layout-error/layout-error.component.ts ***!
  \***************************************************************************/
/*! exports provided: LayoutErrorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutErrorComponent", function() { return LayoutErrorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LayoutErrorComponent = class LayoutErrorComponent {
    constructor() { }
    ngOnInit() { }
};
LayoutErrorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-layout-error',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./layout-error.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/navigation/layouts/layout-error/layout-error.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./layout-error.component.scss */ "./src/app/navigation/layouts/layout-error/layout-error.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], LayoutErrorComponent);



/***/ }),

/***/ "./src/app/navigation/navigation.module.ts":
/*!*************************************************!*\
  !*** ./src/app/navigation/navigation.module.ts ***!
  \*************************************************/
/*! exports provided: NavigationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationModule", function() { return NavigationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components */ "./src/app/navigation/components/index.ts");
/* harmony import */ var _containers__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./containers */ "./src/app/navigation/containers/index.ts");
/* harmony import */ var _layouts__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layouts */ "./src/app/navigation/layouts/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services */ "./src/app/navigation/services/index.ts");
/* harmony import */ var _app_top_nav_top_nav_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/top-nav/top-nav.module */ "./src/app/top-nav/top-nav.module.ts");











let NavigationModule = 
// @ts-ignore
class NavigationModule {
};
NavigationModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"], _app_top_nav_top_nav_module__WEBPACK_IMPORTED_MODULE_10__["TopNavModule"]],
        providers: [..._services__WEBPACK_IMPORTED_MODULE_9__["services"]],
        declarations: [
            ..._containers__WEBPACK_IMPORTED_MODULE_7__["containers"],
            ..._components__WEBPACK_IMPORTED_MODULE_6__["components"],
            ..._layouts__WEBPACK_IMPORTED_MODULE_8__["layouts"],
        ],
        exports: [
            ..._containers__WEBPACK_IMPORTED_MODULE_7__["containers"],
            ..._components__WEBPACK_IMPORTED_MODULE_6__["components"],
            ..._layouts__WEBPACK_IMPORTED_MODULE_8__["layouts"],
        ],
    })
    // @ts-ignore
], NavigationModule);



/***/ }),

/***/ "./src/app/navigation/services/index.ts":
/*!**********************************************!*\
  !*** ./src/app/navigation/services/index.ts ***!
  \**********************************************/
/*! exports provided: services, NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.service */ "./src/app/navigation/services/navigation.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return _navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]; });



const services = [_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]];



/***/ }),

/***/ "./src/app/navigation/services/navigation.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/navigation/services/navigation.service.ts ***!
  \***********************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let NavigationService = class NavigationService {
    constructor(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this._sideNavVisible$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](true);
    }
    sideNavVisible$() {
        return this._sideNavVisible$;
    }
    toggleSideNav(visibility) {
        if (typeof visibility !== 'undefined') {
            this._sideNavVisible$.next(visibility);
        }
        else {
            this._sideNavVisible$.next(!this._sideNavVisible$.value);
        }
    }
    getUserImage(userId) {
        const body = {
            id: userId,
        };
        console.log(body);
        this.http
            .post('http://drsunitanayak.com:8080/data/user/profileimage', body, {
            observe: 'response',
            responseType: 'blob',
        })
            .subscribe(data => {
            console.log(data);
            // @ts-ignore
            this.createImageFromBlob(data.body);
        });
    }
    createImageFromBlob(image) {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            this.img = reader.result;
        }, false);
        if (image.size > 14) {
            reader.readAsDataURL(image);
        }
    }
};
NavigationService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
NavigationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], NavigationService);



/***/ }),

/***/ "./src/app/top-nav/services/index.ts":
/*!*******************************************!*\
  !*** ./src/app/top-nav/services/index.ts ***!
  \*******************************************/
/*! exports provided: services, NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _navigation_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navigation.service */ "./src/app/top-nav/services/navigation.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return _navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]; });



const services = [_navigation_service__WEBPACK_IMPORTED_MODULE_1__["NavigationService"]];



/***/ }),

/***/ "./src/app/top-nav/services/navigation.service.ts":
/*!********************************************************!*\
  !*** ./src/app/top-nav/services/navigation.service.ts ***!
  \********************************************************/
/*! exports provided: NavigationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationService", function() { return NavigationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let NavigationService = class NavigationService {
    constructor(route, router, http) {
        this.route = route;
        this.router = router;
        this.http = http;
        this._sideNavVisible$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](true);
    }
    sideNavVisible$() {
        return this._sideNavVisible$;
    }
    toggleSideNav(visibility) {
        if (typeof visibility !== 'undefined') {
            this._sideNavVisible$.next(visibility);
        }
        else {
            this._sideNavVisible$.next(!this._sideNavVisible$.value);
        }
    }
    getUserImage(userId) {
        const body = {
            id: userId,
        };
        console.log(body);
        this.http
            .post('http://drsunitanayak.com:8080/data/user/profileimage', body, {
            observe: 'response',
            responseType: 'blob',
        })
            .subscribe(data => {
            console.log(data);
            // @ts-ignore
            this.createImageFromBlob(data.body);
        });
    }
    createImageFromBlob(image) {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            this.img = reader.result;
        }, false);
        if (image.size > 14) {
            reader.readAsDataURL(image);
        }
    }
};
NavigationService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
NavigationService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], NavigationService);



/***/ }),

/***/ "./src/app/top-nav/top-nav-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/top-nav/top-nav-routing.module.ts ***!
  \***************************************************/
/*! exports provided: TopNavRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavRoutingModule", function() { return TopNavRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_top_nav_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/top-nav/top-nav/top-nav.component */ "./src/app/top-nav/top-nav/top-nav.component.ts");




const routes = [{ path: '', component: _app_top_nav_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_3__["TopNavComponent"] }];
let TopNavRoutingModule = class TopNavRoutingModule {
};
TopNavRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TopNavRoutingModule);



/***/ }),

/***/ "./src/app/top-nav/top-nav.module.ts":
/*!*******************************************!*\
  !*** ./src/app/top-nav/top-nav.module.ts ***!
  \*******************************************/
/*! exports provided: TopNavModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavModule", function() { return TopNavModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");
/* harmony import */ var _app_top_nav_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/top-nav/services */ "./src/app/top-nav/services/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _top_nav_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./top-nav-routing.module */ "./src/app/top-nav/top-nav-routing.module.ts");
/* harmony import */ var _top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./top-nav/top-nav.component */ "./src/app/top-nav/top-nav/top-nav.component.ts");









let TopNavModule = class TopNavModule {
};
TopNavModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_8__["TopNavComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _top_nav_routing_module__WEBPACK_IMPORTED_MODULE_7__["TopNavRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"]],
        exports: [_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_8__["TopNavComponent"]],
        providers: [..._app_top_nav_services__WEBPACK_IMPORTED_MODULE_5__["services"]],
    })
], TopNavModule);



/***/ }),

/***/ "./src/app/top-nav/top-nav/top-nav.component.scss":
/*!********************************************************!*\
  !*** ./src/app/top-nav/top-nav/top-nav.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("#userDropdown {\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdG9wLW5hdi90b3AtbmF2L0M6XFxVc2Vyc1xcTGVub3ZvXFxEb3dubG9hZHNcXFNvY2lldHlfQmFua2luZy9zcmNcXGFwcFxcdG9wLW5hdlxcdG9wLW5hdlxcdG9wLW5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdG9wLW5hdi90b3AtbmF2L3RvcC1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxlQUFBO0FDREoiLCJmaWxlIjoic3JjL2FwcC90b3AtbmF2L3RvcC1uYXYvdG9wLW5hdi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XG5cbiN1c2VyRHJvcGRvd24ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbn1cbiIsIiN1c2VyRHJvcGRvd24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */");

/***/ }),

/***/ "./src/app/top-nav/top-nav/top-nav.component.ts":
/*!******************************************************!*\
  !*** ./src/app/top-nav/top-nav/top-nav.component.ts ***!
  \******************************************************/
/*! exports provided: TopNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TopNavComponent", function() { return TopNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_top_nav_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/top-nav/services */ "./src/app/top-nav/services/index.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");




let TopNavComponent = class TopNavComponent {
    constructor(session, navigationService) {
        this.session = session;
        this.navigationService = navigationService;
    }
    ngOnInit() {
        this.user = this.session.retrieve('user');
        console.log(this.user);
        this.navigationService.getUserImage(this.user.id);
    }
    toggleSideNav() {
        this.navigationService.toggleSideNav();
    }
};
TopNavComponent.ctorParameters = () => [
    { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"] },
    { type: _app_top_nav_services__WEBPACK_IMPORTED_MODULE_2__["NavigationService"] }
];
TopNavComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-top-nav',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./top-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/top-nav/top-nav/top-nav.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./top-nav.component.scss */ "./src/app/top-nav/top-nav/top-nav.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"],
        _app_top_nav_services__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]])
], TopNavComponent);



/***/ })

}]);
//# sourceMappingURL=default~apply-loan-apply-loan-module~calculator-calculator-module~close-account-close-account-module~f68ef752-es2015.js.map