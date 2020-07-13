(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loan-entry-loan-entry-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loan-entry/loan-entry.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loan-entry/loan-entry.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard>\r\n    <sb-dashboard-head title=\"{{'Accountant.Pages.Entry'| translate}}\"></sb-dashboard-head>\r\n    <hr class=\"rounded\">\r\n    <br>\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-2 col-md-1\"></div>\r\n        <div class=\"col-xl-8 col-md-10\">\r\n            <sb-card>\r\n                <div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{'Accountant.Pages.Entry'| translate}}</div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <form class=\"form-inline\" [formGroup]=\"searchForm\" (ngSubmit)=\"showTable()\">\r\n                        <label>\r\n                            <input type=\"text\" placeholder=\"Enter Employee No\" formControlName=\"employeeNo\"/>\r\n                        </label>\r\n                        <button type=\"submit\" [disabled]=\"!searchForm.valid\">{{'Accountant.GetInfo'| translate}}</button>\r\n                    </form>\r\n                    <table class=\"table table-striped\" *ngIf=\"table\" id=\"content\">\r\n                        <tbody>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.EmployeeNo'| translate}}</td>\r\n                            <td>{{text}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.EmployeeName'| translate}}</td>\r\n                            <td>{{name}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.Corpus'| translate}}</td>\r\n                            <td>{{corpusData| indianCurrency}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.Deposit'| translate}}</td>\r\n                            <td>{{depositData| indianCurrency}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.PreviousLoans'| translate}}</td>\r\n                            <td>\r\n                                <label>\r\n                                    <input type=\"checkbox\" (change)=\"focusoutHandler($event)\" />\r\n                                </label>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.Date'| translate}}</td>\r\n                            <td>\r\n                                <label>\r\n                                    <input type=\"date\" [(ngModel)]=\"date\" name=\"date\"/>\r\n                                </label>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.LoanType'| translate}}</td>\r\n                            <td>\r\n                                <label>\r\n                                    <select class=\"custom-select\" [(ngModel)]=\"type\">\r\n                                        <option>{{'Accountant.Tables.Personal'| translate}}</option>\r\n                                        <option>{{'Accountant.Tables.Emergency'| translate}}</option>\r\n                                    </select>\r\n                                </label>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.Interest'| translate}}</td>\r\n                            <td>\r\n                                <label>\r\n                                    <input type=\"number\" [(ngModel)]=\"interest\" name=\"interest\" />\r\n                                </label>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.Loan'| translate}} (in INR)</td>\r\n                            <td>\r\n                                <label>\r\n                                    <input type=\"number\" [(ngModel)]=\"loanAmount\" name=\"amount\"/>\r\n                                </label>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.Duration'| translate}} (in Months)</td>\r\n                            <td>\r\n                                <label>\r\n                                    <input type=\"number\" [(ngModel)]=\"duration\" name=\"duration\"/>\r\n                                </label>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                    <button *ngIf=\"table\" (click)=\"send()\">{{'Accountant.Tables.Submit'| translate}}</button>\r\n                </div>\r\n            </sb-card>\r\n        </div>\r\n        <div class=\"col-xl-2 col-md-1\"></div>\r\n    </div>\r\n    <div *ngIf=\"show\">\r\n        <ng-container *ngFor=\"let data of loans; let i = index\">\r\n            <sb-card>\r\n                <div class=\"card-header bg-primary headers\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col\" style=\"margin-top: 10px; color: white;\">\r\n                            <h5><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"rupee-sign\"]'></fa-icon>&nbsp;{{'Employee.Loan'| translate}} ({{data.loanData.date| date:'dd-MM-yyyy'}})</h5>\r\n                        </div>\r\n                        <div class=\"col\" style=\"color: white;\">\r\n                            <span class=\"float-right\" style=\"margin: 10px;\"><h5 *ngIf=\"data.loanData.loanAmount; else not\">{{data.loanData.loanAmount| indianCurrency}}</h5></span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <ng-template #not>\r\n                    <td>-</td>\r\n                </ng-template>\r\n                <div class=\"card-header\" *ngIf=\"data.loanBook\">\r\n                    <div class=\"row\">\r\n                        <div class=\"col\" style=\"margin-top: 10px;\">\r\n                            <fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>&nbsp;{{\"Employee.Loanbook.Title\" | translate}}\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card-body table-responsive\" *ngIf=\"data.loanBook\">\r\n                    <table class=\"table table-striped\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th style=\"width: 16.66%;\" scope=\"col\"><span>{{\"Employee.Loanbook.Date\" | translate}}</span></th>\r\n                            <th style=\"width: 60%;\" scope=\"col\"><span>{{\"Employee.Loanbook.Particulars\" | translate}}</span></th>\r\n                            <th scope=\"col\"><span>{{\"Employee.Loanbook.Emi\" | translate}}</span></th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr *ngFor=\"let val of data.loanBook\">\r\n                            <th scope=\"row\" *ngIf=\"isDate(val.date); else notDate\">{{val.date| date:'dd-MM-yyyy'}}</th>\r\n                            <ng-template #notDate>\r\n                                <th scope=\"row\">{{val.date}}</th>\r\n                            </ng-template>\r\n                            <td *ngIf=\"val.particulars; else not\">{{val.particulars}}</td>\r\n                            <td *ngIf=\"val.credit; else not\">{{val.credit| indianCurrency}}</td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <div class=\"card-body table-responsive\" *ngIf=\"data.closeData && data.closeData[0].mode==='Cash';else cheque\">\r\n                    <h3 style=\"font-weight: bold; text-align: center;\">Loan Closure Details</h3>\r\n                    <table class=\"table table-striped\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th scope=\"col\"><span>{{\"Accountant.Tables.ShowDate\" | translate}}</span></th>\r\n                            <th scope=\"col\"><span>{{\"Accountant.Tables.LoanStatus\"  | translate}}</span></th>\r\n                            <th scope=\"col\"><span>{{\"Accountant.Tables.Mode\" | translate}}</span></th>\r\n                            <th scope=\"col\"><span>{{\"Accountant.Tables.Pay\" | translate}}</span></th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr>\r\n                            <th scope=\"row\" *ngIf=\"isDate(data.closeData[0].date); else notDate\">{{data.closeData[0].date| date:'dd-MM-yyyy'}}</th>\r\n                            <ng-template #notDate>\r\n                                <th scope=\"row\">{{data.closeData[0].date}}</th>\r\n                            </ng-template>\r\n                            <td *ngIf=\"data.loanData.closeStatus; else not\">{{data.loanData.closeStatus}}</td>\r\n                            <td *ngIf=\"data.closeData[0].mode; else not\">{{data.closeData[0].mode}}</td>\r\n                            <td *ngIf=\"data.closeData[0].credit; else not\">{{data.closeData[0].credit| indianCurrency}}</td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n                <ng-template #cheque>\r\n                    <div class=\"card-body table-responsive\" *ngIf=\"data.closeData && data.closeData[0].mode==='Cheque'\">\r\n                        <h3 style=\"font-weight: bold; text-align: center;\">{{\"Accountant.Tables.LoanStatus\" | translate}}</h3>\r\n                        <table class=\"table table-striped\">\r\n                            <thead>\r\n                            <tr>\r\n                                <th scope=\"col\"><span>{{\"Accountant.Tables.ShowDate\" | translate}}</span></th>\r\n                                <th scope=\"col\"><span>{{\"Accountant.Tables.LoanStatus\"  | translate}}</span></th>\r\n                                <th scope=\"col\"><span>{{\"Accountant.Tables.Mode\" | translate}}</span></th>\r\n                                <th scope=\"col\"><span>{{\"Accountant.Tables.Pay\" | translate}}</span></th>\r\n                                <th scope=\"col\"><span>{{\"Accountant.Tables.ChequeDate\" | translate}}</span></th>\r\n                                <th scope=\"col\"><span>{{\"Accountant.Tables.BankName\"  | translate}}</span></th>\r\n                                <th scope=\"col\"><span>{{\"Accountant.Tables.ChequeNo\" | translate}}</span></th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                            <tr>\r\n                                <th scope=\"row\" *ngIf=\"isDate(data.closeData[0].date); else notDate\">{{data.closeData[0].date| date:'dd-MM-yyyy'}}</th>\r\n                                <ng-template #notDate>\r\n                                    <th scope=\"row\">{{data.closeData[0].date}}</th>\r\n                                </ng-template>\r\n                                <td *ngIf=\"data.loanData.closeStatus; else not\">{{data.loanData.closeStatus}}</td>\r\n                                <td *ngIf=\"data.closeData[0].mode; else not\">{{data.closeData[0].mode}}</td>\r\n                                <td *ngIf=\"data.closeData[0].credit; else not\">{{data.closeData[0].credit| indianCurrency}}</td>\r\n                                <td *ngIf=\"data.chequeData[0].chequeDate; else not\">{{data.chequeData[0].chequeDate| indianCurrency}}</td>\r\n                                <td *ngIf=\"data.chequeData[0].bankName; else not\">{{data.chequeData[0].bankName| indianCurrency}}</td>\r\n                                <td *ngIf=\"data.chequeData[0].chequeNo; else not\">{{data.chequeData[0].chequeNo| indianCurrency}}</td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n                </ng-template>\r\n            </sb-card>\r\n        </ng-container>\r\n    </div>\r\n</sb-layout-dashboard>\r\n");

/***/ }),

/***/ "./src/app/loan-entry/loan-entry-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/loan-entry/loan-entry-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: LoanEntryRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanEntryRoutingModule", function() { return LoanEntryRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _loan_entry_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-entry.component */ "./src/app/loan-entry/loan-entry.component.ts");




const routes = [{ path: '', component: _loan_entry_component__WEBPACK_IMPORTED_MODULE_3__["LoanEntryComponent"] }];
let LoanEntryRoutingModule = class LoanEntryRoutingModule {
};
LoanEntryRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoanEntryRoutingModule);



/***/ }),

/***/ "./src/app/loan-entry/loan-entry.component.scss":
/*!******************************************************!*\
  !*** ./src/app/loan-entry/loan-entry.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYW4tZW50cnkvbG9hbi1lbnRyeS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/loan-entry/loan-entry.component.ts":
/*!****************************************************!*\
  !*** ./src/app/loan-entry/loan-entry.component.ts ***!
  \****************************************************/
/*! exports provided: LoanEntryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanEntryComponent", function() { return LoanEntryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_loan_entry_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/loan-entry/services */ "./src/app/loan-entry/services/index.ts");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");



// @ts-ignore


let LoanEntryComponent = class LoanEntryComponent {
    constructor(loanService, fb) {
        this.loanService = loanService;
        this.fb = fb;
        this.depositData = 23478;
        this.table = false;
        this.corpusData = 0;
        this.show = false;
        this.searchForm = this.fb.group({
            employeeNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])),
        });
    }
    showTable() {
        // @ts-ignore
        this.text = this.searchForm.get('employeeNo').value;
        console.log(this.text);
        this.loanService.getData(this.text).subscribe(result => {
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
    }
    focusoutHandler($event) {
        if ($event.target.checked) {
            this.loanService.getAllData(this.text).subscribe(result => {
                if (result) {
                    console.log(result);
                    if (result.length === 0) {
                        sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                            title: 'Oops!',
                            text: 'No Previous Loan Exists!',
                            icon: 'error',
                        });
                    }
                    else {
                        this.loanTerm = [result.loanData.length];
                        this.loans = result.loanData;
                        this.show = true;
                    }
                }
            }, error1 => {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    title: 'Oops!',
                    text: 'Try again!',
                    icon: 'error',
                });
            });
        }
        else {
            this.show = false;
        }
    }
    send() {
        if (!this.text ||
            !this.loanAmount ||
            !this.duration ||
            !this.date ||
            !this.type ||
            !this.interest) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Oops!',
                text: 'Fill all the details!',
                icon: 'error',
            });
        }
        else {
            this.data = {
                userId: this.text,
                loanAmount: this.loanAmount,
                loanDuration: this.duration,
                date: this.date,
                loanType: this.type,
                interest: this.interest,
                closeLoan: false,
            };
            this.loanService.sendData(this.data).subscribe(result => {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    text: 'Sent!',
                    icon: 'success',
                }).then((isConfirm) => {
                    if (isConfirm) {
                        // @ts-ignore
                        this.table = false;
                        this.text = null;
                        this.date = null;
                        this.loanAmount = null;
                        this.type = null;
                        this.duration = null;
                        this.interest = null;
                        this.show = false;
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
        this.loanService.getCorpusData().subscribe(result => {
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
    isDate(d) {
        const result = Date.parse(d);
        if (!result)
            return false;
        else
            return true;
    }
};
LoanEntryComponent.ctorParameters = () => [
    { type: _app_loan_entry_services__WEBPACK_IMPORTED_MODULE_2__["LoanEntryService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
LoanEntryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-loan-entry',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./loan-entry.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loan-entry/loan-entry.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./loan-entry.component.scss */ "./src/app/loan-entry/loan-entry.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_loan_entry_services__WEBPACK_IMPORTED_MODULE_2__["LoanEntryService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], LoanEntryComponent);



/***/ }),

/***/ "./src/app/loan-entry/loan-entry.module.ts":
/*!*************************************************!*\
  !*** ./src/app/loan-entry/loan-entry.module.ts ***!
  \*************************************************/
/*! exports provided: LoanEntryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanEntryModule", function() { return LoanEntryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");
/* harmony import */ var _app_loan_entry_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/loan-entry/services */ "./src/app/loan-entry/services/index.ts");
/* harmony import */ var _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/navigation/navigation.module */ "./src/app/navigation/navigation.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _loan_entry_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./loan-entry-routing.module */ "./src/app/loan-entry/loan-entry-routing.module.ts");
/* harmony import */ var _loan_entry_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./loan-entry.component */ "./src/app/loan-entry/loan-entry.component.ts");
/* harmony import */ var _app_layout_dashboard_layout_dashboard_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/layout-dashboard/layout-dashboard.module */ "./src/app/layout-dashboard/layout-dashboard.module.ts");













let LoanEntryModule = class LoanEntryModule {
};
LoanEntryModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_loan_entry_component__WEBPACK_IMPORTED_MODULE_11__["LoanEntryComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _loan_entry_routing_module__WEBPACK_IMPORTED_MODULE_10__["LoanEntryRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"],
            _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_9__["NgxPaginationModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_8__["Ng2SearchPipeModule"],
            _app_layout_dashboard_layout_dashboard_module__WEBPACK_IMPORTED_MODULE_12__["LayoutDashboardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        providers: [..._app_loan_entry_services__WEBPACK_IMPORTED_MODULE_5__["services"]],
    })
], LoanEntryModule);



/***/ }),

/***/ "./src/app/loan-entry/services/index.ts":
/*!**********************************************!*\
  !*** ./src/app/loan-entry/services/index.ts ***!
  \**********************************************/
/*! exports provided: services, LoanEntryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _loan_entry_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loan-entry.service */ "./src/app/loan-entry/services/loan-entry.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoanEntryService", function() { return _loan_entry_service__WEBPACK_IMPORTED_MODULE_1__["LoanEntryService"]; });



const services = [_loan_entry_service__WEBPACK_IMPORTED_MODULE_1__["LoanEntryService"]];



/***/ }),

/***/ "./src/app/loan-entry/services/loan-entry.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/loan-entry/services/loan-entry.service.ts ***!
  \***********************************************************/
/*! exports provided: LoanEntryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanEntryService", function() { return LoanEntryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let LoanEntryService = class LoanEntryService {
    constructor(http) {
        this.http = http;
    }
    getData(text) {
        console.log(text);
        const url = 'http://206.189.129.219:8080/getUserData';
        const data = {
            userId: text,
        };
        return this.http.post(url, data);
    }
    getCorpusData() {
        const url = 'http://206.189.129.219:8080/getCorpusData';
        return this.http.get(url);
    }
    getAllData(text) {
        const data = {
            userId: text,
        };
        const url = 'http://206.189.129.219:8080/getUserLoanData';
        return this.http.post(url, data);
    }
    sendData(data) {
        console.log(data);
        const url = 'http://206.189.129.219:8080/sendLoanEntry';
        return this.http.post(url, data);
    }
};
LoanEntryService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
LoanEntryService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], LoanEntryService);



/***/ })

}]);
//# sourceMappingURL=loan-entry-loan-entry-module-es2015.js.map