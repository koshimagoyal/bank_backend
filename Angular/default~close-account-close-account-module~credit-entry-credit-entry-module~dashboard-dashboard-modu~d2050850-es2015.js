(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~close-account-close-account-module~credit-entry-credit-entry-module~dashboard-dashboard-modu~d2050850"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout-dashboard/layout-dashboard.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout-dashboard/layout-dashboard.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<span [ngClass]='{\"sb-nav-fixed\": !static}'>\r\n    <sb-top-nav></sb-top-nav>\r\n    <div id=\"layoutSidenav\">\r\n        <div id=\"layoutSidenav_nav\">\r\n            <nav class=\"sb-sidenav accordion\" id=\"sidenavAccordion\" [ngClass]=\"sidenavStyle\">\r\n                <div class=\"sb-sidenav-menu\">\r\n                    <div class=\"nav\">\r\n                        <!--dashboard menu-->\r\n                        <div>\r\n                            <div class=\"sb-sidenav-menu-heading\">{{'Common.SideNav.Heading1'| translate}}</div>\r\n                            <div>\r\n                                <a class=\"nav-link\" [routerLink]=\"['/dashboard']\" (click)=\"expanded = !expanded\" [ngClass]=\"{active: isActive, collapsed: !expanded}\">\r\n                                    <div class=\"sb-nav-link-icon\">\r\n                                        <fa-icon [icon]='[\"fas\", \"tachometer-alt\"]'></fa-icon>\r\n                                    </div>{{'Accountant.Title'| translate}}\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                        <!--layouts menu-->\r\n                        <div>\r\n                            <div class=\"sb-sidenav-menu-heading\">{{'Common.SideNav.Heading2'| translate}}</div>\r\n                            <div>\r\n                                <a class=\"nav-link\" [routerLink]=\"['/excel-table']\" (click)=\"expanded = !expanded\" [ngClass]=\"{active: isActive, collapsed: !expanded}\">\r\n                                    {{'Accountant.Pages.Sheet'| translate}}\r\n                                </a>\r\n                            </div>\r\n                            <!--div>\r\n                                <a class=\"nav-link\" [routerLink]=\"['/add-corpus']\" (click)=\"expanded = !expanded\" [ngClass]=\"{active: isActive, collapsed: !expanded}\">\r\n                                    {{'Accountant.Pages.Addition'| translate}}\r\n                                </a>\r\n                            </div-->\r\n                            <div>\r\n                                <a class=\"nav-link\" [routerLink]=\"['/generate-emi']\" (click)=\"expanded = !expanded\" [ngClass]=\"{active: isActive, collapsed: !expanded}\">\r\n                                    {{'Accountant.Pages.Generate'| translate}}\r\n                                </a>\r\n                            </div>\r\n                            <div>\r\n                                <a class=\"nav-link\" [routerLink]=\"['/loan-entry']\" (click)=\"expanded = !expanded\" [ngClass]=\"{active: isActive, collapsed: !expanded}\">\r\n                                    {{'Accountant.Pages.Entry'| translate}}\r\n                                </a>\r\n                            </div>\r\n                            <div>\r\n                                <a class=\"nav-link\" [routerLink]=\"['/loan-foreclosure']\" (click)=\"expanded = !expanded\" [ngClass]=\"{active: isActive, collapsed: !expanded}\">\r\n                                    {{'Accountant.Pages.Foreclosure'| translate}}\r\n                                </a>\r\n                            </div>\r\n                            <div>\r\n                                <a class=\"nav-link\" [routerLink]=\"['/credit-entry']\" (click)=\"expanded = !expanded\" [ngClass]=\"{active: isActive, collapsed: !expanded}\">\r\n                                    {{'Accountant.Pages.Credit'| translate}}\r\n                                </a>\r\n                            </div>\r\n                            <div>\r\n                                <a class=\"nav-link\" [routerLink]=\"['/debit-entry']\" (click)=\"expanded = !expanded\" [ngClass]=\"{active: isActive, collapsed: !expanded}\">\r\n                                    {{'Accountant.Pages.Debit'| translate}}\r\n                                </a>\r\n                            </div>\r\n                            <div>\r\n                                <a class=\"nav-link\" [routerLink]=\"['/expense']\" (click)=\"expanded = !expanded\" [ngClass]=\"{active: isActive, collapsed: !expanded}\">\r\n                                    {{'Accountant.Pages.Deduction'| translate}}\r\n                                </a>\r\n                            </div>\r\n                            <div>\r\n                                <a class=\"nav-link\" [routerLink]=\"['/generate-statement']\" (click)=\"expanded = !expanded\" [ngClass]=\"{active: isActive, collapsed: !expanded}\">\r\n                                    {{'Accountant.Pages.GenerateStatement'| translate}}\r\n                                </a>\r\n                            </div>\r\n                            <!--div>\r\n                                <a class=\"nav-link\" [routerLink]=\"['/fy-dividend-calculate']\" (click)=\"expanded = !expanded\" [ngClass]=\"{active: isActive, collapsed: !expanded}\">\r\n                                    {{'Accountant.Pages.Calculate'| translate}}\r\n                                </a>\r\n                            </div-->\r\n                            <div>\r\n                                <a class=\"nav-link\" [routerLink]=\"['/close-account']\" (click)=\"expanded = !expanded\" [ngClass]=\"{active: isActive, collapsed: !expanded}\">\r\n                                    {{'Accountant.Pages.Closure'| translate}}\r\n                                </a>\r\n                            </div>\r\n                            <!--div>\r\n                                <a class=\"nav-link\" [routerLink]=\"['/bank-account']\" (click)=\"expanded = !expanded\" [ngClass]=\"{active: isActive, collapsed: !expanded}\">\r\n                                    {{'Accountant.Pages.Create'| translate}}\r\n                                </a>\r\n                            </div-->\r\n                            <div>\r\n                                <a class=\"nav-link\" [routerLink]=\"['/cash-cheque']\" (click)=\"expanded = !expanded\" [ngClass]=\"{active: isActive, collapsed: !expanded}\">\r\n                                    {{'Accountant.Pages.Transfer'| translate}}\r\n                                </a>\r\n                            </div>\r\n                            <div>\r\n                                <a class=\"nav-link\" [routerLink]=\"['/upload-all']\" (click)=\"expanded = !expanded\" [ngClass]=\"{active: isActive, collapsed: !expanded}\">\r\n                                    {{'Accountant.Pages.Upload'| translate}}\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            <div class=\"sb-sidenav-footer\">\r\n            <div class=\"small\">{{'Common.User.LoggedIn'|translate}}</div>\r\n                <span>{{user.name}}</span>\r\n            </div>\r\n        </nav>\r\n        </div>\r\n        <div id=\"layoutSidenav_content\">\r\n            <main>\r\n                <div class=\"container-fluid\"><ng-content></ng-content></div>\r\n            </main>\r\n            <sb-footer></sb-footer>\r\n        </div>\r\n    </div>\r\n</span>\r\n");

/***/ }),

/***/ "./src/app/layout-dashboard/layout-dashboard-routing.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/layout-dashboard/layout-dashboard-routing.module.ts ***!
  \*********************************************************************/
/*! exports provided: LayoutDashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutDashboardRoutingModule", function() { return LayoutDashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_layout_dashboard_layout_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/layout-dashboard/layout-dashboard.component */ "./src/app/layout-dashboard/layout-dashboard.component.ts");




const routes = [{ path: '', component: _app_layout_dashboard_layout_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["LayoutDashboardComponent"] }];
let LayoutDashboardRoutingModule = class LayoutDashboardRoutingModule {
};
LayoutDashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LayoutDashboardRoutingModule);



/***/ }),

/***/ "./src/app/layout-dashboard/layout-dashboard.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/layout-dashboard/layout-dashboard.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC1kYXNoYm9hcmQvbGF5b3V0LWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/layout-dashboard/layout-dashboard.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/layout-dashboard/layout-dashboard.component.ts ***!
  \****************************************************************/
/*! exports provided: LayoutDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutDashboardComponent", function() { return LayoutDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_top_nav_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/top-nav/services */ "./src/app/top-nav/services/index.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");





let LayoutDashboardComponent = class LayoutDashboardComponent {
    constructor(navigationService, changeDetectorRef, session) {
        this.navigationService = navigationService;
        this.changeDetectorRef = changeDetectorRef;
        this.session = session;
        this.static = false;
        this.light = false;
        this.expanded = false;
        this.sideNavHidden = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.sidenavStyle = 'sb-sidenav-dark';
    }
    ngOnInit() {
        if (this.light) {
            this.sidenavStyle = 'sb-sidenav-light';
        }
        this.subscription.add(this.navigationService.sideNavVisible$().subscribe(isVisible => {
            this.sideNavHidden = !isVisible;
            this.changeDetectorRef.markForCheck();
        }));
        this.user = this.session.retrieve('user');
    }
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
};
LayoutDashboardComponent.ctorParameters = () => [
    { type: _app_top_nav_services__WEBPACK_IMPORTED_MODULE_2__["NavigationService"] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
    { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], LayoutDashboardComponent.prototype, "static", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], LayoutDashboardComponent.prototype, "light", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)
], LayoutDashboardComponent.prototype, "isActive", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.sb-sidenav-toggled'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
], LayoutDashboardComponent.prototype, "sideNavHidden", void 0);
LayoutDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-layout-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./layout-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/layout-dashboard/layout-dashboard.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./layout-dashboard.component.scss */ "./src/app/layout-dashboard/layout-dashboard.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_top_nav_services__WEBPACK_IMPORTED_MODULE_2__["NavigationService"],
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"],
        ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"]])
], LayoutDashboardComponent);



/***/ }),

/***/ "./src/app/layout-dashboard/layout-dashboard.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/layout-dashboard/layout-dashboard.module.ts ***!
  \*************************************************************/
/*! exports provided: LayoutDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutDashboardModule", function() { return LayoutDashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/navigation/navigation.module */ "./src/app/navigation/navigation.module.ts");
/* harmony import */ var _app_top_nav_top_nav_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/top-nav/top-nav.module */ "./src/app/top-nav/top-nav.module.ts");
/* harmony import */ var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @fortawesome/angular-fontawesome */ "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _layout_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./layout-dashboard-routing.module */ "./src/app/layout-dashboard/layout-dashboard-routing.module.ts");
/* harmony import */ var _layout_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./layout-dashboard.component */ "./src/app/layout-dashboard/layout-dashboard.component.ts");










let LayoutDashboardModule = class LayoutDashboardModule {
};
LayoutDashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_layout_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["LayoutDashboardComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _layout_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_8__["LayoutDashboardRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _app_top_nav_top_nav_module__WEBPACK_IMPORTED_MODULE_5__["TopNavModule"],
            _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"],
            _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_4__["NavigationModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
        ],
        exports: [_layout_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["LayoutDashboardComponent"]],
    })
], LayoutDashboardModule);



/***/ })

}]);
//# sourceMappingURL=default~close-account-close-account-module~credit-entry-credit-entry-module~dashboard-dashboard-modu~d2050850-es2015.js.map