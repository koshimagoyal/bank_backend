(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["credit-entry-credit-entry-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/credit-entry/credit-entry.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/credit-entry/credit-entry.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard>\n    <sb-dashboard-head title=\"{{'Accountant.Pages.Credit'| translate}}\"></sb-dashboard-head>\n    <hr class=\"rounded\">\n    <br>\n    <div class=\"row\">\n        <div class=\"col-xl-2 col-md-1\"></div>\n        <div class=\"col-xl-8 col-md-10\">\n            <sb-card>\n                <div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{'Accountant.Pages.Credit'| translate}}</div>\n                <div class=\"card-body table-responsive\">\n                    <form class=\"form-inline\" [formGroup]=\"searchForm\" (ngSubmit)=\"showTable()\">\n                        <label>\n                            <input type=\"text\" placeholder=\"Enter Employee No\" formControlName=\"employeeNo\"/>\n                        </label>\n                        <button type=\"submit\" [disabled]=\"!searchForm.valid\">{{'Accountant.GetInfo'| translate}}</button>\n                    </form>\n                    <table class=\"table table-striped\" *ngIf=\"table\" id=\"content\">\n                        <tbody>\n                        <tr>\n                            <td>{{'Accountant.Tables.EmployeeNo'| translate}}</td>\n                            <td>{{text}}</td>\n                        </tr>\n                        <tr>\n                            <td>{{'Accountant.Tables.EmployeeName'| translate}}</td>\n                            <td>{{name}}</td>\n                        </tr>\n                        <tr>\n                            <td>{{'Accountant.Tables.Corpus'| translate}}</td>\n                            <td>{{corpusData| indianCurrency}}</td>\n                        </tr>\n                        <tr>\n                            <td>{{'Accountant.Tables.Balance'| translate}}</td>\n                            <td>{{balance| indianCurrency}}</td>\n                        </tr>\n                        <tr>\n                            <td>{{'Accountant.Tables.Date'| translate}}</td>\n                            <td>\n                                <label>\n                                    <input type=\"date\" [(ngModel)]=\"date\" name=\"date\"/>\n                                </label>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>{{'Accountant.Tables.CreditAmount'| translate}}</td>\n                            <td>\n                                <label>\n                                    <input type=\"number\" [(ngModel)]=\"creditAmount\" name=\"amount\"/>\n                                </label>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>{{'Accountant.Tables.Mode' | translate}}</td>\n                            <td>\n                                <label>\n                                    <select class=\"custom-select\" [(ngModel)]=\"type\">\n                                        <option>{{'Accountant.Tables.Cash' | translate}}</option>\n                                        <option>{{'Accountant.Tables.Cheque' | translate}}</option>\n                                    </select>\n                                </label>\n                            </td>\n                        </tr>\n                        <tr *ngIf=\"type == 'Cheque'\">\n                            <td>{{'Accountant.Tables.BankName' | translate}}</td>\n                            <td>\n                                <label>\n                                    <input type=\"text\" [(ngModel)]=\"bankName\" name=\"bankName\"/>\n                                </label>\n                            </td>\n                        </tr>\n                        <tr *ngIf=\"type == 'Cheque'\">\n                            <td>{{'Accountant.Tables.ChequeDate' | translate}}</td>\n                            <td>\n                                <label>\n                                    <input type=\"date\" [(ngModel)]=\"chequeDate\" name=\"chequeDate\"/>\n                                </label>\n                            </td>\n                        </tr>\n                        <tr *ngIf=\"type == 'Cheque'\">\n                            <td>{{'Accountant.Tables.ChequeNo' | translate}}</td>\n                            <td>\n                                <label>\n                                    <input type=\"text\" [(ngModel)]=\"chequeNo\" name=\"chequeNo\"/>\n                                </label>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>{{'Accountant.Tables.Remark'| translate}}</td>\n                            <td>\n                                <label>\n                                    <input type=\"text\" [(ngModel)]=\"purpose\" name=\"purpose\"/>\n                                </label>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                    <button *ngIf=\"table\" (click)=\"send()\">{{'Accountant.Tables.Submit'| translate}}</button>\n                </div>\n            </sb-card>\n        </div>\n        <div class=\"col-xl-2 col-md-1\"></div>\n    </div>\n</sb-layout-dashboard>\n\n");

/***/ }),

/***/ "./src/app/credit-entry/credit-entry-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/credit-entry/credit-entry-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: CreditEntryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditEntryRoutingModule", function() { return CreditEntryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _credit_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./credit-entry.component */ "./src/app/credit-entry/credit-entry.component.ts");




const routes = [{ path: '', component: _credit_entry_component__WEBPACK_IMPORTED_MODULE_3__["CreditEntryComponent"] }];
let CreditEntryRoutingModule = class CreditEntryRoutingModule {
};
CreditEntryRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CreditEntryRoutingModule);



/***/ }),

/***/ "./src/app/credit-entry/credit-entry.component.scss":
/*!**********************************************************!*\
  !*** ./src/app/credit-entry/credit-entry.component.scss ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NyZWRpdC1lbnRyeS9jcmVkaXQtZW50cnkuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/credit-entry/credit-entry.component.ts":
/*!********************************************************!*\
  !*** ./src/app/credit-entry/credit-entry.component.ts ***!
  \********************************************************/
/*! exports provided: CreditEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditEntryComponent", function() { return CreditEntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_credit_entry_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/credit-entry/services */ "./src/app/credit-entry/services/index.ts");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



// @ts-ignore


let CreditEntryComponent = class CreditEntryComponent {
    constructor(creditService, fb) {
        this.creditService = creditService;
        this.fb = fb;
        this.table = false;
        this.balance = 0;
        this.corpusData = 0;
        this.searchForm = this.fb.group({
            employeeNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
        });
    }
    showTable() {
        // @ts-ignore
        this.text = this.searchForm.get('employeeNo').value;
        console.log(this.text);
        this.creditService.getData(this.text).subscribe(result => {
            console.log(result);
            if (result.nameData.length === 0) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: 'Oops!',
                    text: 'This user does not exists!',
                    icon: 'error',
                });
            }
            else {
                console.log(result);
                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < result.balance.length; i++) {
                    this.balance =
                        this.balance + result.balance[i].credit - result.balance[i].debit;
                }
                console.log(this.balance);
                this.name = result.nameData[0].name;
                this.table = true;
            }
        }, error1 => {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Oops!',
                text: 'Try again!',
                icon: 'error',
            });
        });
        return this.balance;
    }
    send() {
        if (!this.text || !this.creditAmount || !this.purpose || !this.type || !this.date) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Oops!',
                text: 'Fill all the details!',
                icon: 'error',
            });
        }
        else {
            const accountData = {
                userId: this.text,
                credit: this.creditAmount,
                particulars: this.purpose,
                mode: this.type,
                type: 'Operational',
                date: this.date,
                bankName: this.bankName,
                chequeDate: this.chequeDate,
                chequeNo: this.chequeNo,
            };
            this.creditService.sendData(accountData).subscribe(result => {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    text: 'Sent!',
                    icon: 'success',
                }).then((isConfirm) => {
                    if (isConfirm) {
                        // @ts-ignore
                        this.table = false;
                        this.text = null;
                        this.creditAmount = null;
                        this.purpose = null;
                        this.date = null;
                        this.balance = 0;
                        this.chequeNo = null;
                        this.chequeDate = null;
                        this.bankName = null;
                        this.type = null;
                        this.searchForm = this.fb.group({
                            employeeNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
                        });
                    }
                });
            }, error1 => {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: 'Oops!',
                    text: 'Try again!',
                    icon: 'error',
                });
            });
        }
    }
    ngOnInit() {
        this.creditService.getCorpusData().subscribe(result => {
            console.log(result);
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < result.balance.length; i++) {
                this.corpusData =
                    this.corpusData + result.balance[i].credit - result.balance[i].debit;
            }
            console.log(this.corpusData);
        }, error1 => {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Oops!',
                text: 'Try again!',
                icon: 'error',
            });
        });
        return this.corpusData;
    }
};
CreditEntryComponent.ctorParameters = () => [
    { type: _app_credit_entry_services__WEBPACK_IMPORTED_MODULE_2__["CreditEntryService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
CreditEntryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-credit-entry',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./credit-entry.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/credit-entry/credit-entry.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./credit-entry.component.scss */ "./src/app/credit-entry/credit-entry.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_credit_entry_services__WEBPACK_IMPORTED_MODULE_2__["CreditEntryService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], CreditEntryComponent);



/***/ }),

/***/ "./src/app/credit-entry/credit-entry.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/credit-entry/credit-entry.module.ts ***!
  \*****************************************************/
/*! exports provided: CreditEntryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditEntryModule", function() { return CreditEntryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");
/* harmony import */ var _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/navigation/navigation.module */ "./src/app/navigation/navigation.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _credit_entry_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./credit-entry-routing.module */ "./src/app/credit-entry/credit-entry-routing.module.ts");
/* harmony import */ var _credit_entry_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./credit-entry.component */ "./src/app/credit-entry/credit-entry.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services */ "./src/app/credit-entry/services/index.ts");
/* harmony import */ var _app_layout_dashboard_layout_dashboard_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/layout-dashboard/layout-dashboard.module */ "./src/app/layout-dashboard/layout-dashboard.module.ts");











let CreditEntryModule = class CreditEntryModule {
};
CreditEntryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_credit_entry_component__WEBPACK_IMPORTED_MODULE_8__["CreditEntryComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _credit_entry_routing_module__WEBPACK_IMPORTED_MODULE_7__["CreditEntryRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"],
            _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__["NavigationModule"],
            _app_layout_dashboard_layout_dashboard_module__WEBPACK_IMPORTED_MODULE_10__["LayoutDashboardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        providers: [..._services__WEBPACK_IMPORTED_MODULE_9__["services"]],
    })
], CreditEntryModule);



/***/ }),

/***/ "./src/app/credit-entry/services/credit-entry.service.ts":
/*!***************************************************************!*\
  !*** ./src/app/credit-entry/services/credit-entry.service.ts ***!
  \***************************************************************/
/*! exports provided: CreditEntryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditEntryService", function() { return CreditEntryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let CreditEntryService = class CreditEntryService {
    constructor(http) {
        this.http = http;
    }
    getData(text) {
        console.log(text);
        const url = 'http://drsunitanayak.com:8080/getOperationalAccountData';
        const data = {
            userId: text,
        };
        return this.http.post(url, data);
    }
    getCorpusData() {
        const url = 'http://drsunitanayak.com:8080/getCorpusData';
        return this.http.get(url);
    }
    sendData(data) {
        console.log(data);
        const url = 'http://drsunitanayak.com:8080/sendCreditEntry';
        return this.http.post(url, data);
    }
};
CreditEntryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CreditEntryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], CreditEntryService);



/***/ }),

/***/ "./src/app/credit-entry/services/index.ts":
/*!************************************************!*\
  !*** ./src/app/credit-entry/services/index.ts ***!
  \************************************************/
/*! exports provided: services, CreditEntryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _credit_entry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./credit-entry.service */ "./src/app/credit-entry/services/credit-entry.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CreditEntryService", function() { return _credit_entry_service__WEBPACK_IMPORTED_MODULE_1__["CreditEntryService"]; });



const services = [_credit_entry_service__WEBPACK_IMPORTED_MODULE_1__["CreditEntryService"]];



/***/ })

}]);
//# sourceMappingURL=credit-entry-credit-entry-module-es2015.js.map