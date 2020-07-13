(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["miscellaneous-page-miscellaneous-page-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/miscellaneous-page/miscellaneous-page/miscellaneous-page.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/miscellaneous-page/miscellaneous-page/miscellaneous-page.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard>\r\n    <sb-dashboard-head title=\"{{'Accountant.Pages.Transfer'| translate}}\"></sb-dashboard-head>\r\n    <hr class=\"rounded\">\r\n    <br>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-1\"></div>\r\n        <div class=\"col\">\r\n            <button class=\"btn-primary\" (click)=\"showSearch()\">{{'Accountant.Tables.SearchCheque'| translate}}</button>\r\n        </div>\r\n        <div class=\"col\">\r\n            <button class=\"btn-primary\" (click)=\"showCash()\">{{'Accountant.Tables.TransferCash'| translate}}</button>\r\n        </div>\r\n        <div class=\"col\">\r\n            <button class=\"btn-primary\" (click)=\"showCheque()\">{{'Accountant.Tables.TransferBank'| translate}}</button>\r\n        </div>\r\n    </div>\r\n    <br>\r\n    <br>\r\n    <div class=\"row\" *ngIf=\"search\">\r\n        <div class=\"col-xl-2 col-md-1\"></div>\r\n        <div class=\"col-xl-8 col-md-10\">\r\n            <sb-card>\r\n                <div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{'Accountant.Tables.SearchCheque'| translate}}</div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <form class=\"form-inline\" [formGroup]=\"searchForm\" (ngSubmit)=\"showTable()\">\r\n                        <label>\r\n                            <input type=\"text\" placeholder=\"Enter Cheque Number\" formControlName=\"chequeNo\"/>\r\n                        </label>\r\n                        <button type=\"submit\" [disabled]=\"!searchForm.valid\">{{'Accountant.GetInfo'| translate}}</button>\r\n                    </form>\r\n                    <table class=\"table table-striped\" *ngIf=\"table\" id=\"contennnt\">\r\n                        <tbody>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.ShowDate'| translate}}</td>\r\n                            <td>{{date| date:'dd-MM-yyyy'}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.AmountReceived'| translate}}</td>\r\n                            <td>{{amount| indianCurrency}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.ChequeDate'| translate}}</td>\r\n                            <td>{{chequeDate| date:'dd-MM-yyyy'}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.BankName'| translate}}</td>\r\n                            <td>{{bankName}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.EmployeeNo'| translate}}</td>\r\n                            <td>{{employeeId}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.EmployeeName'| translate}}</td>\r\n                            <td>{{employeeName}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.Purpose'| translate}}</td>\r\n                            <td>{{purpose}}</td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </sb-card>\r\n        </div>\r\n        <div class=\"col-xl-2 col-md-1\"></div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"cash\">\r\n        <div class=\"col-xl-2 col-md-1\"></div>\r\n        <div class=\"col-xl-8 col-md-10\">\r\n            <sb-card>\r\n                <div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{'Accountant.Tables.TransferCash'| translate}}</div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <form [formGroup]=\"cashForm\" (ngSubmit)=\"send()\">\r\n                        <table class=\"table table-striped\" id=\"contennt\">\r\n                            <tbody>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.Date'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"date\" formControlName=\"date\"/>\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"cashForm.get('date').hasError('required')\">Required!</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.Amount'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"number\" formControlName=\"amount\"/>\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"cashForm.get('amount').hasError('required')\">Required!</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.BankName' | translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <select class=\"custom-select\" formControlName=\"bankName\">\r\n                                            <option *ngFor=\"let val of bankList\">{{val.bankName}}</option>\r\n                                        </select>\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"cashForm.get('bankName').hasError('required')\">Required!</div>\r\n                                </td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <button type=\"submit\" [disabled]=\"!cashForm.valid\">{{'Accountant.Tables.Submit'| translate}}</button>\r\n                    </form>\r\n                </div>\r\n            </sb-card>\r\n        </div>\r\n        <div class=\"col-xl-2 col-md-1\"></div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"cheque\">\r\n        <div class=\"col-xl-2 col-md-1\"></div>\r\n        <div class=\"col-xl-8 col-md-10\">\r\n            <sb-card>\r\n                <div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{'Accountant.Tables.TransferBank'| translate}}</div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <form [formGroup]=\"chequeForm\" (ngSubmit)=\"send()\">\r\n                        <table class=\"table table-striped\" id=\"contentt\">\r\n                            <tbody>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.Date'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"date\" formControlName=\"date\" required/>\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"chequeForm.get('date').hasError('required')\">Required!</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.Amount'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"number\" formControlName=\"amount\" required/>\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"chequeForm.get('amount').hasError('required')\">Required!</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.BankName' | translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <select class=\"custom-select\" formControlName=\"bankName\">\r\n                                            <option *ngFor=\"let val of bankList\">{{val.bankName}}</option>\r\n                                        </select>\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"chequeForm.get('bankName').hasError('required')\">Required!</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.ChequeDate' | translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"date\" formControlName=\"chequeDate\"/>\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"chequeForm.get('chequeDate').hasError('required')\">Required!</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.ChequeNo' | translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"text\" formControlName=\"chequeNo\"/>\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"chequeForm.get('chequeNo').hasError('required')\">Required!</div>\r\n                                </td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <button type=\"submit\" [disabled]=\"!chequeForm.valid\">{{'Accountant.Tables.Submit'| translate}}</button>\r\n                    </form>\r\n                </div>\r\n            </sb-card>\r\n        </div>\r\n        <div class=\"col-xl-2 col-md-1\"></div>\r\n    </div>\r\n</sb-layout-dashboard>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/miscellaneous-page/miscellaneous-page-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/miscellaneous-page/miscellaneous-page-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: MiscellaneousPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousPageRoutingModule", function() { return MiscellaneousPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_miscellaneous_page_miscellaneous_page_miscellaneous_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/miscellaneous-page/miscellaneous-page/miscellaneous-page.component */ "./src/app/miscellaneous-page/miscellaneous-page/miscellaneous-page.component.ts");




const routes = [{ path: '', component: _app_miscellaneous_page_miscellaneous_page_miscellaneous_page_component__WEBPACK_IMPORTED_MODULE_3__["MiscellaneousPageComponent"] }];
let MiscellaneousPageRoutingModule = class MiscellaneousPageRoutingModule {
};
MiscellaneousPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], MiscellaneousPageRoutingModule);



/***/ }),

/***/ "./src/app/miscellaneous-page/miscellaneous-page.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/miscellaneous-page/miscellaneous-page.module.ts ***!
  \*****************************************************************/
/*! exports provided: MiscellaneousPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousPageModule", function() { return MiscellaneousPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");
/* harmony import */ var _app_miscellaneous_page_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/miscellaneous-page/services */ "./src/app/miscellaneous-page/services/index.ts");
/* harmony import */ var _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/navigation/navigation.module */ "./src/app/navigation/navigation.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _miscellaneous_page_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./miscellaneous-page-routing.module */ "./src/app/miscellaneous-page/miscellaneous-page-routing.module.ts");
/* harmony import */ var _miscellaneous_page_miscellaneous_page_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./miscellaneous-page/miscellaneous-page.component */ "./src/app/miscellaneous-page/miscellaneous-page/miscellaneous-page.component.ts");
/* harmony import */ var _app_layout_dashboard_layout_dashboard_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/layout-dashboard/layout-dashboard.module */ "./src/app/layout-dashboard/layout-dashboard.module.ts");











let MiscellaneousPageModule = class MiscellaneousPageModule {
};
MiscellaneousPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_miscellaneous_page_miscellaneous_page_component__WEBPACK_IMPORTED_MODULE_9__["MiscellaneousPageComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _miscellaneous_page_routing_module__WEBPACK_IMPORTED_MODULE_8__["MiscellaneousPageRoutingModule"],
            _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"],
            _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_layout_dashboard_layout_dashboard_module__WEBPACK_IMPORTED_MODULE_10__["LayoutDashboardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        providers: [..._app_miscellaneous_page_services__WEBPACK_IMPORTED_MODULE_5__["services"]],
    })
], MiscellaneousPageModule);



/***/ }),

/***/ "./src/app/miscellaneous-page/miscellaneous-page/miscellaneous-page.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/miscellaneous-page/miscellaneous-page/miscellaneous-page.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21pc2NlbGxhbmVvdXMtcGFnZS9taXNjZWxsYW5lb3VzLXBhZ2UvbWlzY2VsbGFuZW91cy1wYWdlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/miscellaneous-page/miscellaneous-page/miscellaneous-page.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/miscellaneous-page/miscellaneous-page/miscellaneous-page.component.ts ***!
  \***************************************************************************************/
/*! exports provided: MiscellaneousPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousPageComponent", function() { return MiscellaneousPageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_miscellaneous_page_services__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/miscellaneous-page/services */ "./src/app/miscellaneous-page/services/index.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__);





// @ts-ignore

let MiscellaneousPageComponent = class MiscellaneousPageComponent {
    constructor(service, session, fb) {
        this.service = service;
        this.session = session;
        this.fb = fb;
        this.cheque = false;
        this.cash = false;
        this.search = true;
        this.table = false;
        this.searchForm = this.fb.group({
            chequeNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
        });
        this.cashForm = this.fb.group({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            bankName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
        });
        this.chequeForm = this.fb.group({
            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            bankName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            chequeDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
            chequeNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
        });
    }
    ngOnInit() {
        this.service.getBankList().subscribe(result => {
            this.bankList = result;
            console.log(this.bankList);
        });
        const user = this.session.retrieve('user');
        this.text = user.id;
    }
    send() {
        if (this.cash) {
            const data = {
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
                cashPurpose: 'Transfered to ' +
                    // @ts-ignore
                    this.cashForm.get('bankName').value +
                    ' on ' +
                    // @ts-ignore
                    this.cashForm.get('date').value,
                // @ts-ignore
                bankPurpose: 'Transfered from Cash Account on ' + this.cashForm.get('date').value,
            };
            console.log(data);
            this.service.transferCash(data).subscribe(result => {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    text: 'Sent!',
                    icon: 'success',
                }).then((isConfirm) => {
                    if (isConfirm) {
                        // @ts-ignore
                        this.date = null;
                        this.chequeNo = null;
                        this.chequeDate = null;
                        this.bankName = null;
                        this.purpose = null;
                        this.employeeId = null;
                        this.employeeName = null;
                        this.amount = null;
                        this.cashForm = this.fb.group({
                            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
                            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
                            bankName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
                        });
                    }
                });
            }, error1 => {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: 'Oops!',
                    text: 'Try again!',
                    icon: 'error',
                });
            });
        }
        else {
            const data = {
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
                cashPurpose: 'Transfered from ' +
                    // @ts-ignore
                    this.chequeForm.get('bankName').value +
                    ' on ' +
                    // @ts-ignore
                    this.chequeForm.get('date').value,
                // @ts-ignore
                bankPurpose: 'Transfered to Cash Account on ' + this.chequeForm.get('date').value,
            };
            console.log(data);
            this.service.withdrawCash(data).subscribe(result => {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    text: 'Sent!',
                    icon: 'success',
                }).then((isConfirm) => {
                    if (isConfirm) {
                        // @ts-ignore
                        this.date = null;
                        this.chequeNo = null;
                        this.chequeDate = null;
                        this.bankName = null;
                        this.purpose = null;
                        this.employeeId = null;
                        this.employeeName = null;
                        this.amount = null;
                        this.chequeForm = this.fb.group({
                            date: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
                            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
                            bankName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
                            chequeDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
                            chequeNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
                            purpose: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
                        });
                    }
                });
            }, error1 => {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: 'Oops!',
                    text: 'Try again!',
                    icon: 'error',
                });
            });
        }
    }
    showCheque() {
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
            chequeNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])),
        });
    }
    showCash() {
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
    showTable() {
        this.date = null;
        this.chequeDate = null;
        this.bankName = null;
        this.purpose = null;
        this.employeeId = null;
        this.employeeName = null;
        this.amount = null;
        this.table = false;
        // @ts-ignore
        this.chequeNo = this.searchForm.get('chequeNo').value;
        console.log(this.chequeNo);
        this.service.searchCheque(this.chequeNo).subscribe(result => {
            console.log(result.data);
            if (result.data.length === 0) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: 'Oops!',
                    text: 'This cheque does not exists!',
                    icon: 'error',
                });
            }
            else {
                console.log(result.data);
                this.date = result.data[0].date;
                this.chequeDate = result.data[0].chequeDate;
                this.bankName = result.data[0].bankName;
                this.purpose = result.data[0].particulars;
                this.employeeId = result.data[0].userId;
                this.employeeName = result.data[0].name;
                if (result.data[0].credit) {
                    this.amount = result.data[0].credit;
                }
                else {
                    this.amount = result.data[0].debit;
                }
                this.table = true;
            }
        }, error1 => {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Oops!',
                text: 'Try again!',
                icon: 'error',
            });
        });
    }
    showSearch() {
        this.cheque = false;
        this.search = true;
        this.cash = false;
    }
};
MiscellaneousPageComponent.ctorParameters = () => [
    { type: _app_miscellaneous_page_services__WEBPACK_IMPORTED_MODULE_3__["MiscellaneousService"] },
    { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["SessionStorageService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
MiscellaneousPageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-miscellaneous-page',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./miscellaneous-page.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/miscellaneous-page/miscellaneous-page/miscellaneous-page.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./miscellaneous-page.component.scss */ "./src/app/miscellaneous-page/miscellaneous-page/miscellaneous-page.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_miscellaneous_page_services__WEBPACK_IMPORTED_MODULE_3__["MiscellaneousService"],
        ngx_webstorage__WEBPACK_IMPORTED_MODULE_4__["SessionStorageService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], MiscellaneousPageComponent);



/***/ }),

/***/ "./src/app/miscellaneous-page/services/index.ts":
/*!******************************************************!*\
  !*** ./src/app/miscellaneous-page/services/index.ts ***!
  \******************************************************/
/*! exports provided: services, MiscellaneousService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _miscellaneous_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./miscellaneous.service */ "./src/app/miscellaneous-page/services/miscellaneous.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousService", function() { return _miscellaneous_service__WEBPACK_IMPORTED_MODULE_1__["MiscellaneousService"]; });



const services = [_miscellaneous_service__WEBPACK_IMPORTED_MODULE_1__["MiscellaneousService"]];



/***/ }),

/***/ "./src/app/miscellaneous-page/services/miscellaneous.service.ts":
/*!**********************************************************************!*\
  !*** ./src/app/miscellaneous-page/services/miscellaneous.service.ts ***!
  \**********************************************************************/
/*! exports provided: MiscellaneousService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MiscellaneousService", function() { return MiscellaneousService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let MiscellaneousService = class MiscellaneousService {
    constructor(http) {
        this.http = http;
    }
    getBankList() {
        const url = 'http://206.189.129.219:8080/getBankList';
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json');
        return this.http.get(url, { headers });
    }
    searchCheque(text) {
        console.log(text);
        const url = 'http://206.189.129.219:8080/searchCheque';
        const data = {
            chequeNo: text,
        };
        return this.http.post(url, data);
    }
    transferCash(data) {
        console.log(data);
        const url = 'http://206.189.129.219:8080/transferCash';
        return this.http.post(url, data);
    }
    withdrawCash(data) {
        console.log(data);
        const url = 'http://206.189.129.219:8080/withdrawCash';
        return this.http.post(url, data);
    }
};
MiscellaneousService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
MiscellaneousService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], MiscellaneousService);



/***/ })

}]);
//# sourceMappingURL=miscellaneous-page-miscellaneous-page-module-es2015.js.map