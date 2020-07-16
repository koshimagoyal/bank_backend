function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/layout-emp-dashboard/layout-emp-dashboard.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/layout-emp-dashboard/layout-emp-dashboard.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLayoutEmpDashboardLayoutEmpDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<span [ngClass]='{\"sb-nav-fixed\": !static}'>\n    <sb-top-nav></sb-top-nav>\n    <div id=\"layoutSidenav\">\n        <div id=\"layoutSidenav_nav\">\n            <nav class=\"sb-sidenav accordion\" id=\"sidenavAccordion\" [ngClass]=\"sidenavStyle\">\n                <div class=\"sb-sidenav-menu\">\n                    <div class=\"nav\">\n                        <!--dashboard menu-->\n                        <div>\n                            <div class=\"sb-sidenav-menu-heading\">{{'Common.SideNav.Heading1'| translate}}</div>\n                            <div>\n                                <a class=\"nav-link\" [routerLink]=\"['/employee-dashboard']\" (click)=\"expanded = !expanded\" [ngClass]=\"{active: isActive, collapsed: !expanded}\">\n                                    <div class=\"sb-nav-link-icon\">\n                                        <fa-icon [icon]='[\"fas\", \"tachometer-alt\"]'></fa-icon>\n                                    </div>{{'Common.Title'| translate}}\n                                </a>\n                            </div>\n                        </div>\n                        <!--layouts menu-->\n                        <div>\n                            <div class=\"sb-sidenav-menu-heading\">{{'Common.SideNav.Heading2'| translate}}</div>\n                            <div>\n                                <a class=\"nav-link\" [routerLink]=\"['/loan-eligibility-table']\" (click)=\"expanded = !expanded\" [ngClass]=\"{active: isActive, collapsed: !expanded}\">\n                                    {{'Employee.Pages.Eligible'| translate}}\n                                </a>\n                            </div>\n                            <div>\n                                <a class=\"nav-link\" href=\"/calculator\" (click)=\"expanded = !expanded\" [ngClass]=\"{active: isActive, collapsed: !expanded}\">\n                                    {{'Employee.Pages.Calculator'| translate}}\n                                </a>\n                            </div>\n                            <div>\n                                <a class=\"nav-link\" [routerLink]=\"['/apply-loan']\" (click)=\"expanded = !expanded\" [ngClass]=\"{active: isActive, collapsed: !expanded}\">\n                                    {{'Employee.Pages.Apply'| translate}}\n                                </a>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            <div class=\"sb-sidenav-footer\">\n            <div class=\"small\">{{'Common.User.LoggedIn'|translate}}</div>\n                <span>{{user.name}}</span>\n            </div>\n        </nav>\n        </div>\n        <div id=\"layoutSidenav_content\">\n            <main>\n                <div class=\"container-fluid\"><ng-content></ng-content></div>\n            </main>\n            <sb-footer></sb-footer>\n        </div>\n    </div>\n</span>\n\n";
    /***/
  },

  /***/
  "./src/app/layout-emp-dashboard/layout-emp-dashboard-routing.module.ts":
  /*!*****************************************************************************!*\
    !*** ./src/app/layout-emp-dashboard/layout-emp-dashboard-routing.module.ts ***!
    \*****************************************************************************/

  /*! exports provided: LayoutEmpDashboardRoutingModule */

  /***/
  function srcAppLayoutEmpDashboardLayoutEmpDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutEmpDashboardRoutingModule", function () {
      return LayoutEmpDashboardRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_layout_emp_dashboard_layout_emp_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/layout-emp-dashboard/layout-emp-dashboard.component */
    "./src/app/layout-emp-dashboard/layout-emp-dashboard.component.ts");

    var routes = [{
      path: '',
      component: _app_layout_emp_dashboard_layout_emp_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["LayoutEmpDashboardComponent"]
    }];

    var LayoutEmpDashboardRoutingModule = function LayoutEmpDashboardRoutingModule() {
      _classCallCheck(this, LayoutEmpDashboardRoutingModule);
    };

    LayoutEmpDashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LayoutEmpDashboardRoutingModule);
    /***/
  },

  /***/
  "./src/app/layout-emp-dashboard/layout-emp-dashboard.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/layout-emp-dashboard/layout-emp-dashboard.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLayoutEmpDashboardLayoutEmpDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xheW91dC1lbXAtZGFzaGJvYXJkL2xheW91dC1lbXAtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/layout-emp-dashboard/layout-emp-dashboard.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/layout-emp-dashboard/layout-emp-dashboard.component.ts ***!
    \************************************************************************/

  /*! exports provided: LayoutEmpDashboardComponent */

  /***/
  function srcAppLayoutEmpDashboardLayoutEmpDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutEmpDashboardComponent", function () {
      return LayoutEmpDashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_top_nav_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/top-nav/services */
    "./src/app/top-nav/services/index.ts");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var LayoutEmpDashboardComponent = /*#__PURE__*/function () {
      function LayoutEmpDashboardComponent(navigationService, changeDetectorRef, session) {
        _classCallCheck(this, LayoutEmpDashboardComponent);

        this.navigationService = navigationService;
        this.changeDetectorRef = changeDetectorRef;
        this.session = session;
        this["static"] = false;
        this.light = false;
        this.expanded = false;
        this.sideNavHidden = false;
        this.subscription = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subscription"]();
        this.sidenavStyle = 'sb-sidenav-dark';
      }

      _createClass(LayoutEmpDashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          if (this.light) {
            this.sidenavStyle = 'sb-sidenav-light';
          }

          this.subscription.add(this.navigationService.sideNavVisible$().subscribe(function (isVisible) {
            _this.sideNavHidden = !isVisible;

            _this.changeDetectorRef.markForCheck();
          }));
          this.user = this.session.retrieve('user');
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }]);

      return LayoutEmpDashboardComponent;
    }();

    LayoutEmpDashboardComponent.ctorParameters = function () {
      return [{
        type: _app_top_nav_services__WEBPACK_IMPORTED_MODULE_2__["NavigationService"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]
      }, {
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], LayoutEmpDashboardComponent.prototype, "static", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], LayoutEmpDashboardComponent.prototype, "light", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], LayoutEmpDashboardComponent.prototype, "isActive", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('class.sb-sidenav-toggled'), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], LayoutEmpDashboardComponent.prototype, "sideNavHidden", void 0);
    LayoutEmpDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-layout-emp-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./layout-emp-dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/layout-emp-dashboard/layout-emp-dashboard.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./layout-emp-dashboard.component.scss */
      "./src/app/layout-emp-dashboard/layout-emp-dashboard.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_top_nav_services__WEBPACK_IMPORTED_MODULE_2__["NavigationService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"]])], LayoutEmpDashboardComponent);
    /***/
  },

  /***/
  "./src/app/layout-emp-dashboard/layout-emp-dashboard.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/layout-emp-dashboard/layout-emp-dashboard.module.ts ***!
    \*********************************************************************/

  /*! exports provided: LayoutEmpDashboardModule */

  /***/
  function srcAppLayoutEmpDashboardLayoutEmpDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutEmpDashboardModule", function () {
      return LayoutEmpDashboardModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/navigation/navigation.module */
    "./src/app/navigation/navigation.module.ts");
    /* harmony import */


    var _app_top_nav_top_nav_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/top-nav/top-nav.module */
    "./src/app/top-nav/top-nav.module.ts");
    /* harmony import */


    var _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @fortawesome/angular-fontawesome */
    "./node_modules/@fortawesome/angular-fontawesome/fesm2015/angular-fontawesome.js");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _layout_emp_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./layout-emp-dashboard-routing.module */
    "./src/app/layout-emp-dashboard/layout-emp-dashboard-routing.module.ts");
    /* harmony import */


    var _layout_emp_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./layout-emp-dashboard.component */
    "./src/app/layout-emp-dashboard/layout-emp-dashboard.component.ts");

    var LayoutEmpDashboardModule = function LayoutEmpDashboardModule() {
      _classCallCheck(this, LayoutEmpDashboardModule);
    };

    LayoutEmpDashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_layout_emp_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["LayoutEmpDashboardComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _layout_emp_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_8__["LayoutEmpDashboardRoutingModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _app_top_nav_top_nav_module__WEBPACK_IMPORTED_MODULE_5__["TopNavModule"], _fortawesome_angular_fontawesome__WEBPACK_IMPORTED_MODULE_6__["FontAwesomeModule"], _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_4__["NavigationModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]],
      exports: [_layout_emp_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["LayoutEmpDashboardComponent"]]
    })], LayoutEmpDashboardModule);
    /***/
  },

  /***/
  "./src/app/upload-all/services/index.ts":
  /*!**********************************************!*\
    !*** ./src/app/upload-all/services/index.ts ***!
    \**********************************************/

  /*! exports provided: services, UploadAllService */

  /***/
  function srcAppUploadAllServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "services", function () {
      return services;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _upload_all_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./upload-all.service */
    "./src/app/upload-all/services/upload-all.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UploadAllService", function () {
      return _upload_all_service__WEBPACK_IMPORTED_MODULE_1__["UploadAllService"];
    });

    var services = [_upload_all_service__WEBPACK_IMPORTED_MODULE_1__["UploadAllService"]];
    /***/
  },

  /***/
  "./src/app/upload-all/services/upload-all.service.ts":
  /*!***********************************************************!*\
    !*** ./src/app/upload-all/services/upload-all.service.ts ***!
    \***********************************************************/

  /*! exports provided: UploadAllService */

  /***/
  function srcAppUploadAllServicesUploadAllServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadAllService", function () {
      return UploadAllService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var UploadAllService = /*#__PURE__*/function () {
      function UploadAllService(httpService) {
        _classCallCheck(this, UploadAllService);

        this.httpService = httpService;
      }

      _createClass(UploadAllService, [{
        key: "getBankList",
        value: function getBankList() {
          var url = 'http://drsunitanayak.com/getBankList';
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
          headers.append('Accept', 'application/json');
          headers.append('content-type', 'application/json');
          return this.httpService.get(url, {
            headers: headers
          });
        }
      }, {
        key: "sendData",
        value: function sendData(data) {
          console.log(data);
          var url = 'http://drsunitanayak.com/createUserAccount';
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
          headers.append('Accept', 'application/json');
          headers.append('content-type', 'application/json');
          return this.httpService.post(url, data, {
            headers: headers
          });
        }
      }, {
        key: "sendBankData",
        value: function sendBankData(data) {
          console.log(data);
          var url = 'http://drsunitanayak.com/sendBankData';
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
          headers.append('Accept', 'application/json');
          headers.append('content-type', 'application/json');
          return this.httpService.post(url, data, {
            headers: headers
          });
        }
      }, {
        key: "getLoanData",
        value: function getLoanData(data) {
          console.log(data);
          var url = 'http://drsunitanayak.com/getData/loanData';
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
          headers.append('Accept', 'application/json');
          headers.append('content-type', 'application/json');
          return this.httpService.post(url, data, {
            headers: headers
          });
        }
      }, {
        key: "getCreditData",
        value: function getCreditData(data) {
          console.log(data);
          var url = 'http://drsunitanayak.com/getData/creditData';
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
          headers.append('Accept', 'application/json');
          headers.append('content-type', 'application/json');
          return this.httpService.post(url, data, {
            headers: headers
          });
        }
      }, {
        key: "getDebitData",
        value: function getDebitData(data) {
          console.log(data);
          var url = 'http://drsunitanayak.com/getData/debitData';
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
          headers.append('Accept', 'application/json');
          headers.append('content-type', 'application/json');
          return this.httpService.post(url, data, {
            headers: headers
          });
        }
      }, {
        key: "getExpenseData",
        value: function getExpenseData(data) {
          console.log(data);
          var url = 'http://drsunitanayak.com/getData/expenseData';
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
          headers.append('Accept', 'application/json');
          headers.append('content-type', 'application/json');
          return this.httpService.post(url, data, {
            headers: headers
          });
        }
      }, {
        key: "getCreditDebitExpenseData",
        value: function getCreditDebitExpenseData(data) {
          console.log(data);
          var url = 'http://drsunitanayak.com/getData/creditDebitExpenseData';
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
          headers.append('Accept', 'application/json');
          headers.append('content-type', 'application/json');
          return this.httpService.post(url, data, {
            headers: headers
          });
        }
      }, {
        key: "getCashData",
        value: function getCashData(data) {
          console.log(data);
          var url = 'http://drsunitanayak.com/getData/cashData';
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
          headers.append('Accept', 'application/json');
          headers.append('content-type', 'application/json');
          return this.httpService.post(url, data, {
            headers: headers
          });
        }
      }, {
        key: "getChequeData",
        value: function getChequeData(data) {
          console.log(data);
          var url = 'http://drsunitanayak.com/getData/chequeData';
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
          headers.append('Accept', 'application/json');
          headers.append('content-type', 'application/json');
          return this.httpService.post(url, data, {
            headers: headers
          });
        }
      }]);

      return UploadAllService;
    }();

    UploadAllService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    UploadAllService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], UploadAllService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map