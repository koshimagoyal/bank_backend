function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["miscellaneous-page-miscellaneous-page-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/miscellaneous-page/miscellaneous-page/miscellaneous-page.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/miscellaneous-page/miscellaneous-page/miscellaneous-page.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppMiscellaneousPageMiscellaneousPageMiscellaneousPageComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-layout-dashboard>\n    <sb-dashboard-head title=\"{{'Accountant.Pages.Transfer'| translate}}\"></sb-dashboard-head>\n    <hr class=\"rounded\">\n    <br>\n    <div class=\"row\">\n        <div class=\"col-sm-1\"></div>\n        <div class=\"col\">\n            <button class=\"btn-primary\" (click)=\"showSearch()\">{{'Accountant.Tables.SearchCheque'| translate}}</button>\n        </div>\n        <div class=\"col\">\n            <button class=\"btn-primary\" (click)=\"showCash()\">{{'Accountant.Tables.TransferCash'| translate}}</button>\n        </div>\n        <div class=\"col\">\n            <button class=\"btn-primary\" (click)=\"showCheque()\">{{'Accountant.Tables.TransferBank'| translate}}</button>\n        </div>\n    </div>\n    <br>\n    <br>\n    <div class=\"row\" *ngIf=\"search\">\n        <div class=\"col-xl-2 col-md-1\"></div>\n        <div class=\"col-xl-8 col-md-10\">\n            <sb-card>\n                <div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{'Accountant.Tables.SearchCheque'| translate}}</div>\n                <div class=\"card-body table-responsive\">\n                    <form class=\"form-inline\" [formGroup]=\"searchForm\" (ngSubmit)=\"showTable()\">\n                        <label>\n                            <input type=\"text\" placeholder=\"Enter Cheque Number\" formControlName=\"chequeNo\"/>\n                        </label>\n                        <button type=\"submit\" [disabled]=\"!searchForm.valid\">{{'Accountant.GetInfo'| translate}}</button>\n                    </form>\n                    <table class=\"table table-striped\" *ngIf=\"table\" id=\"contennnt\">\n                        <tbody>\n                        <tr>\n                            <td>{{'Accountant.Tables.ShowDate'| translate}}</td>\n                            <td>{{date| date:'dd-MM-yyyy'}}</td>\n                        </tr>\n                        <tr>\n                            <td>{{'Accountant.Tables.AmountReceived'| translate}}</td>\n                            <td>{{amount| indianCurrency}}</td>\n                        </tr>\n                        <tr>\n                            <td>{{'Accountant.Tables.ChequeDate'| translate}}</td>\n                            <td>{{chequeDate| date:'dd-MM-yyyy'}}</td>\n                        </tr>\n                        <tr>\n                            <td>{{'Accountant.Tables.BankName'| translate}}</td>\n                            <td>{{bankName}}</td>\n                        </tr>\n                        <tr>\n                            <td>{{'Accountant.Tables.EmployeeNo'| translate}}</td>\n                            <td>{{employeeId}}</td>\n                        </tr>\n                        <tr>\n                            <td>{{'Accountant.Tables.EmployeeName'| translate}}</td>\n                            <td>{{employeeName}}</td>\n                        </tr>\n                        <tr>\n                            <td>{{'Accountant.Tables.Purpose'| translate}}</td>\n                            <td>{{purpose}}</td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </sb-card>\n        </div>\n        <div class=\"col-xl-2 col-md-1\"></div>\n    </div>\n    <div class=\"row\" *ngIf=\"cash\">\n        <div class=\"col-xl-2 col-md-1\"></div>\n        <div class=\"col-xl-8 col-md-10\">\n            <sb-card>\n                <div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{'Accountant.Tables.TransferCash'| translate}}</div>\n                <div class=\"card-body table-responsive\">\n                    <form [formGroup]=\"cashForm\" (ngSubmit)=\"send()\">\n                        <table class=\"table table-striped\" id=\"contennt\">\n                            <tbody>\n                            <tr>\n                                <td>{{'Accountant.Tables.Date'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"date\" formControlName=\"date\"/>\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"cashForm.get('date').hasError('required')\">Required!</div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.Amount'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"number\" formControlName=\"amount\"/>\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"cashForm.get('amount').hasError('required')\">Required!</div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.BankName' | translate}}</td>\n                                <td>\n                                    <label>\n                                        <select class=\"custom-select\" formControlName=\"bankName\">\n                                            <option *ngFor=\"let val of bankList\">{{val.bankName}}</option>\n                                        </select>\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"cashForm.get('bankName').hasError('required')\">Required!</div>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                        <button type=\"submit\" [disabled]=\"!cashForm.valid\">{{'Accountant.Tables.Submit'| translate}}</button>\n                    </form>\n                </div>\n            </sb-card>\n        </div>\n        <div class=\"col-xl-2 col-md-1\"></div>\n    </div>\n    <div class=\"row\" *ngIf=\"cheque\">\n        <div class=\"col-xl-2 col-md-1\"></div>\n        <div class=\"col-xl-8 col-md-10\">\n            <sb-card>\n                <div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{'Accountant.Tables.TransferBank'| translate}}</div>\n                <div class=\"card-body table-responsive\">\n                    <form [formGroup]=\"chequeForm\" (ngSubmit)=\"send()\">\n                        <table class=\"table table-striped\" id=\"contentt\">\n                            <tbody>\n                            <tr>\n                                <td>{{'Accountant.Tables.Date'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"date\" formControlName=\"date\" required/>\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"chequeForm.get('date').hasError('required')\">Required!</div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.Amount'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"number\" formControlName=\"amount\" required/>\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"chequeForm.get('amount').hasError('required')\">Required!</div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.BankName' | translate}}</td>\n                                <td>\n                                    <label>\n                                        <select class=\"custom-select\" formControlName=\"bankName\">\n                                            <option *ngFor=\"let val of bankList\">{{val.bankName}}</option>\n                                        </select>\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"chequeForm.get('bankName').hasError('required')\">Required!</div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.ChequeDate' | translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"date\" formControlName=\"chequeDate\"/>\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"chequeForm.get('chequeDate').hasError('required')\">Required!</div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.ChequeNo' | translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"text\" formControlName=\"chequeNo\"/>\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"chequeForm.get('chequeNo').hasError('required')\">Required!</div>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                        <button type=\"submit\" [disabled]=\"!chequeForm.valid\">{{'Accountant.Tables.Submit'| translate}}</button>\n                    </form>\n                </div>\n            </sb-card>\n        </div>\n        <div class=\"col-xl-2 col-md-1\"></div>\n    </div>\n</sb-layout-dashboard>\n\n\n\n";
    /***/
  },

  /***/
  "./src/app/miscellaneous-page/miscellaneous-page-routing.module.ts":
  /*!*************************************************************************!*\
    !*** ./src/app/miscellaneous-page/miscellaneous-page-routing.module.ts ***!
    \*************************************************************************/

  /*! exports provided: MiscellaneousPageRoutingModule */

  /***/
  function srcAppMiscellaneousPageMiscellaneousPageRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MiscellaneousPageRoutingModule", function () {
      return MiscellaneousPageRoutingModule;
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


    var _app_miscellaneous_page_miscellaneous_page_miscellaneous_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/miscellaneous-page/miscellaneous-page/miscellaneous-page.component */
    "./src/app/miscellaneous-page/miscellaneous-page/miscellaneous-page.component.ts");

    var routes = [{
      path: '',
      component: _app_miscellaneous_page_miscellaneous_page_miscellaneous_page_component__WEBPACK_IMPORTED_MODULE_3__["MiscellaneousPageComponent"]
    }];

    var MiscellaneousPageRoutingModule = function MiscellaneousPageRoutingModule() {
      _classCallCheck(this, MiscellaneousPageRoutingModule);
    };

    MiscellaneousPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], MiscellaneousPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/miscellaneous-page/miscellaneous-page.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/miscellaneous-page/miscellaneous-page.module.ts ***!
    \*****************************************************************/

  /*! exports provided: MiscellaneousPageModule */

  /***/
  function srcAppMiscellaneousPageMiscellaneousPageModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MiscellaneousPageModule", function () {
      return MiscellaneousPageModule;
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


    var _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/app-common/app-common.module */
    "./src/app/app-common/app-common.module.ts");
    /* harmony import */


    var _app_miscellaneous_page_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/miscellaneous-page/services */
    "./src/app/miscellaneous-page/services/index.ts");
    /* harmony import */


    var _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/navigation/navigation.module */
    "./src/app/navigation/navigation.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _miscellaneous_page_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./miscellaneous-page-routing.module */
    "./src/app/miscellaneous-page/miscellaneous-page-routing.module.ts");
    /* harmony import */


    var _miscellaneous_page_miscellaneous_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./miscellaneous-page/miscellaneous-page.component */
    "./src/app/miscellaneous-page/miscellaneous-page/miscellaneous-page.component.ts");
    /* harmony import */


    var _app_layout_dashboard_layout_dashboard_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @app/layout-dashboard/layout-dashboard.module */
    "./src/app/layout-dashboard/layout-dashboard.module.ts");

    var MiscellaneousPageModule = function MiscellaneousPageModule() {
      _classCallCheck(this, MiscellaneousPageModule);
    };

    MiscellaneousPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_miscellaneous_page_miscellaneous_page_component__WEBPACK_IMPORTED_MODULE_9__["MiscellaneousPageComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _miscellaneous_page_routing_module__WEBPACK_IMPORTED_MODULE_8__["MiscellaneousPageRoutingModule"], _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"], _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_layout_dashboard_layout_dashboard_module__WEBPACK_IMPORTED_MODULE_10__["LayoutDashboardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      providers: _toConsumableArray(_app_miscellaneous_page_services__WEBPACK_IMPORTED_MODULE_5__["services"])
    })], MiscellaneousPageModule);
    /***/
  },

  /***/
  "./src/app/miscellaneous-page/miscellaneous-page/miscellaneous-page.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/miscellaneous-page/miscellaneous-page/miscellaneous-page.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppMiscellaneousPageMiscellaneousPageMiscellaneousPageComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21pc2NlbGxhbmVvdXMtcGFnZS9taXNjZWxsYW5lb3VzLXBhZ2UvbWlzY2VsbGFuZW91cy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/miscellaneous-page/miscellaneous-page/miscellaneous-page.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/miscellaneous-page/miscellaneous-page/miscellaneous-page.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: MiscellaneousPageComponent */

  /***/
  function srcAppMiscellaneousPageMiscellaneousPageMiscellaneousPageComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MiscellaneousPageComponent", function () {
      return MiscellaneousPageComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _app_miscellaneous_page_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/miscellaneous-page/services */
    "./src/app/miscellaneous-page/services/index.ts");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2/dist/sweetalert2.js */
    "./node_modules/sweetalert2/dist/sweetalert2.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__); // @ts-ignore


    var MiscellaneousPageComponent = /*#__PURE__*/function () {
      function MiscellaneousPageComponent(service, session, fb) {
        _classCallCheck(this, MiscellaneousPageComponent);

        this.service = service;
        this.session = session;
        this.fb = fb;
        this.cheque = false;
        this.cash = false;
        this.search = true;
        this.table = false;
        this.searchForm = this.fb.group({
          chequeNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
        });
        this.cashForm = this.fb.group({
          date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
          amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
          bankName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
        });
        this.chequeForm = this.fb.group({
          date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
          amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
          bankName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
          chequeDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
          chequeNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
        });
      }

      _createClass(MiscellaneousPageComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.service.getBankList().subscribe(function (result) {
            _this.bankList = result;
            console.log(_this.bankList);
          });
          var user = this.session.retrieve('user');
          this.text = user.id;
        }
      }, {
        key: "send",
        value: function send() {
          var _this2 = this;

          if (this.cash) {
            var data = {
              userId: this.text,
              // @ts-ignore
              date: this.cashForm.get('date').value,
              mode: 'Cash',
              typeCash: 'Transfer Cash',
              typeBank: 'Transfer Bank',
              // @ts-ignore
              amount: this.cashForm.get('amount').value,
              // @ts-ignore
              bankName: this.cashForm.get('bankName').value,
              cashPurpose: 'Transfered to ' + // @ts-ignore
              this.cashForm.get('bankName').value + ' on ' + // @ts-ignore
              this.cashForm.get('date').value,
              // @ts-ignore
              bankPurpose: 'Transfered from Cash Account on ' + this.cashForm.get('date').value
            };
            console.log(data);
            this.service.transferCash(data).subscribe(function (result) {
              sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                text: 'Sent!',
                icon: 'success'
              }).then(function (isConfirm) {
                if (isConfirm) {
                  // @ts-ignore
                  _this2.date = null;
                  _this2.chequeNo = null;
                  _this2.chequeDate = null;
                  _this2.bankName = null;
                  _this2.purpose = null;
                  _this2.employeeId = null;
                  _this2.employeeName = null;
                  _this2.amount = null;
                  _this2.cashForm = _this2.fb.group({
                    date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
                    amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
                    bankName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
                  });
                }
              });
            }, function (error1) {
              sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Oops!',
                text: 'Try again!',
                icon: 'error'
              });
            });
          } else {
            var _data = {
              userId: this.text,
              // @ts-ignore
              date: this.chequeForm.get('date').value,
              mode: 'Cheque',
              typeCash: 'Transfer Cash',
              typeBank: 'Transfer Bank',
              // @ts-ignore
              amount: this.chequeForm.get('amount').value,
              // @ts-ignore
              bankName: this.chequeForm.get('bankName').value,
              // @ts-ignore
              chequeDate: this.chequeForm.get('chequeDate').value,
              // @ts-ignore
              chequeNo: this.chequeForm.get('chequeNo').value,
              // @ts-ignore
              cashPurpose: 'Transfered from ' + // @ts-ignore
              this.chequeForm.get('bankName').value + ' on ' + // @ts-ignore
              this.chequeForm.get('date').value,
              // @ts-ignore
              bankPurpose: 'Transfered to Cash Account on ' + this.chequeForm.get('date').value
            };
            console.log(_data);
            this.service.withdrawCash(_data).subscribe(function (result) {
              sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                text: 'Sent!',
                icon: 'success'
              }).then(function (isConfirm) {
                if (isConfirm) {
                  // @ts-ignore
                  _this2.date = null;
                  _this2.chequeNo = null;
                  _this2.chequeDate = null;
                  _this2.bankName = null;
                  _this2.purpose = null;
                  _this2.employeeId = null;
                  _this2.employeeName = null;
                  _this2.amount = null;
                  _this2.chequeForm = _this2.fb.group({
                    date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
                    amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
                    bankName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
                    chequeDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
                    chequeNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
                    purpose: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
                  });
                }
              });
            }, function (error1) {
              sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Oops!',
                text: 'Try again!',
                icon: 'error'
              });
            });
          }
        }
      }, {
        key: "showCheque",
        value: function showCheque() {
          this.cheque = true;
          this.search = false;
          this.cash = false;
          this.date = null;
          this.chequeNo = null;
          this.chequeDate = null;
          this.bankName = null;
          this.purpose = null;
          this.employeeId = null;
          this.employeeName = null;
          this.amount = null;
          this.searchForm = this.fb.group({
            chequeNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]))
          });
        }
      }, {
        key: "showCash",
        value: function showCash() {
          this.cheque = false;
          this.search = false;
          this.cash = true;
          this.date = null;
          this.chequeNo = null;
          this.chequeDate = null;
          this.bankName = null;
          this.purpose = null;
          this.employeeId = null;
          this.employeeName = null;
          this.amount = null;
        }
      }, {
        key: "showTable",
        value: function showTable() {
          var _this3 = this;

          this.date = null;
          this.chequeDate = null;
          this.bankName = null;
          this.purpose = null;
          this.employeeId = null;
          this.employeeName = null;
          this.amount = null;
          this.table = false; // @ts-ignore

          this.chequeNo = this.searchForm.get('chequeNo').value;
          console.log(this.chequeNo);
          this.service.searchCheque(this.chequeNo).subscribe(function (result) {
            console.log(result.data);

            if (result.data.length === 0) {
              sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Oops!',
                text: 'This cheque does not exists!',
                icon: 'error'
              });
            } else {
              console.log(result.data);
              _this3.date = result.data[0].date;
              _this3.chequeDate = result.data[0].chequeDate;
              _this3.bankName = result.data[0].bankName;
              _this3.purpose = result.data[0].particulars;
              _this3.employeeId = result.data[0].userId;
              _this3.employeeName = result.data[0].name;

              if (result.data[0].credit) {
                _this3.amount = result.data[0].credit;
              } else {
                _this3.amount = result.data[0].debit;
              }

              _this3.table = true;
            }
          }, function (error1) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
              title: 'Oops!',
              text: 'Try again!',
              icon: 'error'
            });
          });
        }
      }, {
        key: "showSearch",
        value: function showSearch() {
          this.cheque = false;
          this.search = true;
          this.cash = false;
        }
      }]);

      return MiscellaneousPageComponent;
    }();

    MiscellaneousPageComponent.ctorParameters = function () {
      return [{
        type: _app_miscellaneous_page_services__WEBPACK_IMPORTED_MODULE_3__["MiscellaneousService"]
      }, {
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["SessionStorageService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    MiscellaneousPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-miscellaneous-page',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./miscellaneous-page.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/miscellaneous-page/miscellaneous-page/miscellaneous-page.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./miscellaneous-page.component.scss */
      "./src/app/miscellaneous-page/miscellaneous-page/miscellaneous-page.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_miscellaneous_page_services__WEBPACK_IMPORTED_MODULE_3__["MiscellaneousService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["SessionStorageService"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])], MiscellaneousPageComponent);
    /***/
  },

  /***/
  "./src/app/miscellaneous-page/services/index.ts":
  /*!******************************************************!*\
    !*** ./src/app/miscellaneous-page/services/index.ts ***!
    \******************************************************/

  /*! exports provided: services, MiscellaneousService */

  /***/
  function srcAppMiscellaneousPageServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _miscellaneous_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./miscellaneous.service */
    "./src/app/miscellaneous-page/services/miscellaneous.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "MiscellaneousService", function () {
      return _miscellaneous_service__WEBPACK_IMPORTED_MODULE_1__["MiscellaneousService"];
    });

    var services = [_miscellaneous_service__WEBPACK_IMPORTED_MODULE_1__["MiscellaneousService"]];
    /***/
  },

  /***/
  "./src/app/miscellaneous-page/services/miscellaneous.service.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/miscellaneous-page/services/miscellaneous.service.ts ***!
    \**********************************************************************/

  /*! exports provided: MiscellaneousService */

  /***/
  function srcAppMiscellaneousPageServicesMiscellaneousServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MiscellaneousService", function () {
      return MiscellaneousService;
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

    var MiscellaneousService = /*#__PURE__*/function () {
      function MiscellaneousService(http) {
        _classCallCheck(this, MiscellaneousService);

        this.http = http;
      }

      _createClass(MiscellaneousService, [{
        key: "getBankList",
        value: function getBankList() {
          var url = 'http://drsunitanayak.com/getBankList';
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
          headers.append('Accept', 'application/json');
          headers.append('content-type', 'application/json');
          return this.http.get(url, {
            headers: headers
          });
        }
      }, {
        key: "searchCheque",
        value: function searchCheque(text) {
          console.log(text);
          var url = 'http://drsunitanayak.com/searchCheque';
          var data = {
            chequeNo: text
          };
          return this.http.post(url, data);
        }
      }, {
        key: "transferCash",
        value: function transferCash(data) {
          console.log(data);
          var url = 'http://drsunitanayak.com/transferCash';
          return this.http.post(url, data);
        }
      }, {
        key: "withdrawCash",
        value: function withdrawCash(data) {
          console.log(data);
          var url = 'http://drsunitanayak.com/withdrawCash';
          return this.http.post(url, data);
        }
      }]);

      return MiscellaneousService;
    }();

    MiscellaneousService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    MiscellaneousService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], MiscellaneousService);
    /***/
  }
}]);
//# sourceMappingURL=miscellaneous-page-miscellaneous-page-module-es5.js.map