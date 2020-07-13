(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["debit-entry-debit-entry-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/debit-entry/debit-entry.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/debit-entry/debit-entry.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard>\r\n    <sb-dashboard-head title=\"{{'Accountant.Pages.Debit'| translate}}\"></sb-dashboard-head>\r\n    <hr class=\"rounded\">\r\n    <br>\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-2 col-md-1\"></div>\r\n        <div class=\"col-xl-8 col-md-10\">\r\n            <sb-card>\r\n                <div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{'Accountant.Pages.Debit'| translate}}</div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <form class=\"form-inline\" [formGroup]=\"searchForm\" (ngSubmit)=\"showTable()\">\r\n                        <label>\r\n                            <input type=\"text\" placeholder=\"Enter Employee No\" formControlName=\"employeeNo\"/>\r\n                        </label>\r\n                        <button type=\"submit\" [disabled]=\"!searchForm.valid\">{{'Accountant.GetInfo'| translate}}</button>\r\n                    </form>\r\n                    <table class=\"table table-striped\" *ngIf=\"table\" id=\"content\">\r\n                        <tbody>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.EmployeeNo'| translate}}</td>\r\n                            <td>{{text}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.EmployeeName'| translate}}</td>\r\n                            <td>{{name}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.Corpus'| translate}}</td>\r\n                            <td>{{corpusData| indianCurrency}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.Balance'| translate}}</td>\r\n                            <td>{{balance| indianCurrency}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.Date'| translate}}</td>\r\n                            <td>\r\n                                <label>\r\n                                    <input type=\"date\" [(ngModel)]=\"date\" name=\"date\"/>\r\n                                </label>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.DebitAmount'| translate}}</td>\r\n                            <td>\r\n                                <label>\r\n                                    <input type=\"number\" [(ngModel)]=\"debitAmount\" (focusout)=\"debit($event)\" name=\"amount\"/>\r\n                                </label>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.Mode' | translate}}</td>\r\n                            <td>\r\n                                <label>\r\n                                    <select class=\"custom-select\" [(ngModel)]=\"type\">\r\n                                        <option>{{'Accountant.Tables.Cash' | translate}}</option>\r\n                                        <option>{{'Accountant.Tables.Cheque' | translate}}</option>\r\n                                    </select>\r\n                                </label>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"type == 'Cheque'\">\r\n                            <td>{{'Accountant.Tables.BankName' | translate}}</td>\r\n                            <td>\r\n                                <label>\r\n                                    <select class=\"custom-select\" name=\"bankName\" [(ngModel)]=\"bankName\">\r\n                                        <option *ngFor=\"let val of bankList\">{{val.bankName}}</option>\r\n                                    </select>\r\n                                </label>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"type == 'Cheque'\">\r\n                            <td>{{'Accountant.Tables.ChequeDate' | translate}}</td>\r\n                            <td>\r\n                                <label>\r\n                                    <input type=\"date\" [(ngModel)]=\"chequeDate\" name=\"chequeDate\"/>\r\n                                </label>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"type == 'Cheque'\">\r\n                            <td>{{'Accountant.Tables.ChequeNo' | translate}}</td>\r\n                            <td>\r\n                                <label>\r\n                                    <input type=\"text\" [(ngModel)]=\"chequeNo\" name=\"chequeNo\"/>\r\n                                </label>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.Remark'| translate}}</td>\r\n                            <td>\r\n                                <label>\r\n                                    <input type=\"text\" [(ngModel)]=\"purpose\" name=\"purpose\"/>\r\n                                </label>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <button *ngIf=\"table\" (click)=\"send()\">{{'Accountant.Tables.Submit'| translate}}</button>\r\n                </div>\r\n            </sb-card>\r\n        </div>\r\n        <div class=\"col-xl-2 col-md-1\"></div>\r\n    </div>\r\n</sb-layout-dashboard>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/debit-entry/debit-entry-routing.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/debit-entry/debit-entry-routing.module.ts ***!
  \***********************************************************/
/*! exports provided: DebitEntryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebitEntryRoutingModule", function() { return DebitEntryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _debit_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./debit-entry.component */ "./src/app/debit-entry/debit-entry.component.ts");




const routes = [{ path: '', component: _debit_entry_component__WEBPACK_IMPORTED_MODULE_3__["DebitEntryComponent"] }];
let DebitEntryRoutingModule = class DebitEntryRoutingModule {
};
DebitEntryRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DebitEntryRoutingModule);



/***/ }),

/***/ "./src/app/debit-entry/debit-entry.component.scss":
/*!********************************************************!*\
  !*** ./src/app/debit-entry/debit-entry.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RlYml0LWVudHJ5L2RlYml0LWVudHJ5LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/debit-entry/debit-entry.component.ts":
/*!******************************************************!*\
  !*** ./src/app/debit-entry/debit-entry.component.ts ***!
  \******************************************************/
/*! exports provided: DebitEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebitEntryComponent", function() { return DebitEntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_debit_entry_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/debit-entry/services */ "./src/app/debit-entry/services/index.ts");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



// @ts-ignore


let DebitEntryComponent = class DebitEntryComponent {
    constructor(debitService, fb) {
        this.debitService = debitService;
        this.fb = fb;
        this.balance = 0;
        this.table = false;
        this.corpusData = 0;
        this.searchForm = this.fb.group({
            employeeNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
        });
    }
    send() {
        if (!this.text || !this.debitAmount || !this.purpose || !this.type || !this.date) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Oops!',
                text: 'Fill all the details!',
                icon: 'error',
            });
        }
        else {
            const accountData = {
                userId: this.text,
                debit: this.debitAmount,
                particulars: this.purpose,
                mode: this.type,
                type: 'Operational',
                date: this.date,
                chequeDate: this.chequeDate,
                chequeNo: this.chequeNo,
                bankName: this.bankName,
            };
            this.debitService.sendData(accountData).subscribe(result => {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    text: 'Sent!',
                    icon: 'success',
                }).then((isConfirm) => {
                    if (isConfirm) {
                        // @ts-ignore
                        this.table = false;
                        this.text = null;
                        this.debitAmount = null;
                        this.purpose = null;
                        this.date = null;
                        this.chequeDate = null;
                        this.chequeNo = null;
                        this.bankName = null;
                        this.balance = 0;
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
    showTable() {
        // @ts-ignore
        this.text = this.searchForm.get('employeeNo').value;
        console.log(this.text);
        this.debitService.getData(this.text).subscribe(result => {
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
    debit($event) {
        console.log(this.balance);
        if ($event.target.value > this.balance) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Oops!',
                text: 'Balance is less than debit amount',
                icon: 'error',
            });
        }
    }
    ngOnInit() {
        this.debitService.getBankList().subscribe(result => {
            this.bankList = result;
            console.log(this.bankList);
        });
        this.debitService.getCorpusData().subscribe(result => {
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
DebitEntryComponent.ctorParameters = () => [
    { type: _app_debit_entry_services__WEBPACK_IMPORTED_MODULE_2__["DebitEntryService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
DebitEntryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-debit-entry',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./debit-entry.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/debit-entry/debit-entry.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./debit-entry.component.scss */ "./src/app/debit-entry/debit-entry.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_debit_entry_services__WEBPACK_IMPORTED_MODULE_2__["DebitEntryService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], DebitEntryComponent);



/***/ }),

/***/ "./src/app/debit-entry/debit-entry.module.ts":
/*!***************************************************!*\
  !*** ./src/app/debit-entry/debit-entry.module.ts ***!
  \***************************************************/
/*! exports provided: DebitEntryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebitEntryModule", function() { return DebitEntryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");
/* harmony import */ var _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/navigation/navigation.module */ "./src/app/navigation/navigation.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _debit_entry_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./debit-entry-routing.module */ "./src/app/debit-entry/debit-entry-routing.module.ts");
/* harmony import */ var _debit_entry_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./debit-entry.component */ "./src/app/debit-entry/debit-entry.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./services */ "./src/app/debit-entry/services/index.ts");
/* harmony import */ var _app_layout_dashboard_layout_dashboard_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/layout-dashboard/layout-dashboard.module */ "./src/app/layout-dashboard/layout-dashboard.module.ts");











let DebitEntryModule = class DebitEntryModule {
};
DebitEntryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_debit_entry_component__WEBPACK_IMPORTED_MODULE_8__["DebitEntryComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _debit_entry_routing_module__WEBPACK_IMPORTED_MODULE_7__["DebitEntryRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"],
            _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__["NavigationModule"],
            _app_layout_dashboard_layout_dashboard_module__WEBPACK_IMPORTED_MODULE_10__["LayoutDashboardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        providers: [..._services__WEBPACK_IMPORTED_MODULE_9__["services"]],
    })
], DebitEntryModule);



/***/ }),

/***/ "./src/app/debit-entry/services/debit-entry.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/debit-entry/services/debit-entry.service.ts ***!
  \*************************************************************/
/*! exports provided: DebitEntryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DebitEntryService", function() { return DebitEntryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let DebitEntryService = class DebitEntryService {
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
    getData(text) {
        console.log(text);
        const url = 'http://206.189.129.219:8080/getOperationalAccountData';
        const data = {
            userId: text,
        };
        return this.http.post(url, data);
    }
    getCorpusData() {
        const url = 'http://206.189.129.219:8080/getCorpusData';
        return this.http.get(url);
    }
    sendData(data) {
        console.log(data);
        const url = 'http://206.189.129.219:8080/sendDebitEntry';
        return this.http.post(url, data);
    }
};
DebitEntryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DebitEntryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], DebitEntryService);



/***/ }),

/***/ "./src/app/debit-entry/services/index.ts":
/*!***********************************************!*\
  !*** ./src/app/debit-entry/services/index.ts ***!
  \***********************************************/
/*! exports provided: services, DebitEntryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _debit_entry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./debit-entry.service */ "./src/app/debit-entry/services/debit-entry.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DebitEntryService", function() { return _debit_entry_service__WEBPACK_IMPORTED_MODULE_1__["DebitEntryService"]; });



const services = [_debit_entry_service__WEBPACK_IMPORTED_MODULE_1__["DebitEntryService"]];



/***/ })

}]);
//# sourceMappingURL=debit-entry-debit-entry-module-es2015.js.map