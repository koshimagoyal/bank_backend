(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard>\r\n    <sb-dashboard-head title=\"{{'Accountant.Title'|translate}}\">\r\n    </sb-dashboard-head>\r\n    <hr class=\"rounded\">\r\n    <br>\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-3 col-md-6\">\r\n            <sb-card-view-details text=\"{{noOfLoans| indianCurrency}}\" background=\"bg-danger\">\r\n                <div class=\"card-body\">\r\n                    <fa-icon class=\"mr-1 fa-pull-right\" style=\"opacity: 0.5; font-size: 30px;\" [icon]='[\"fas\", \"money-check\"]'></fa-icon>\r\n                    <p style=\"margin-top: 10px;\">{{'Accountant.Cards.People'| translate}}</p>\r\n                </div>\r\n            </sb-card-view-details>\r\n        </div>\r\n        <div class=\"col-xl-3 col-md-6\">\r\n            <sb-card-view-details text=\"{{loanAmount| indianCurrency}}\" background=\"bg-primary\">\r\n                <div class=\"card-body\">\r\n                    <fa-icon class=\"mr-1 fa-pull-right\" style=\"opacity: 0.5; font-size: 30px;\" [icon]='[\"fas\", \"rupee-sign\"]'></fa-icon>\r\n                    <p style=\"margin-top: 10px;\">{{'Accountant.Cards.Loan'| translate}}</p>\r\n                </div>\r\n            </sb-card-view-details>\r\n        </div>\r\n        <div class=\"col-xl-3 col-md-6\">\r\n            <sb-card-view-details  text=\"{{amount| indianCurrency}}\" background=\"bg-success\">\r\n                <div class=\"card-body\">\r\n                    <fa-icon class=\"mr-1 fa-pull-right\" style=\"opacity: 0.5; font-size: 30px;\" [icon]='[\"fas\", \"coins\"]'></fa-icon>\r\n                    <p style=\"margin-top: 10px;\">{{'Accountant.Cards.Amount'| translate}}</p>\r\n                </div>\r\n            </sb-card-view-details>\r\n        </div>\r\n        <div class=\"col-xl-3 col-md-6\">\r\n            <sb-card-view-details  text=\"{{interest| indianCurrency}}\" background=\"bg-warning\">\r\n                <div class=\"card-body\">\r\n                    <fa-icon class=\"mr-1 fa-pull-right\" style=\"opacity: 0.5; font-size: 30px;\" [icon]='[\"fas\", \"hand-holding-usd\"]'></fa-icon>\r\n                    <p style=\"margin-top: 10px;\">{{'Accountant.Cards.Interest'| translate}}</p>\r\n                </div>\r\n            </sb-card-view-details>\r\n        </div>\r\n    </div>\r\n    <!--Cash Balance Table-->\r\n    <sb-card *ngIf=\"balanceCash\">\r\n        <div class=\"card-header\">\r\n            <div class=\"row\">\r\n                <div class=\"col\" style=\"margin-top: 10px;\">\r\n                    <fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{\"Accountant.Tables.CashBal\" | translate}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <ng-template #not>\r\n            <td>-</td>\r\n        </ng-template>\r\n        <div class=\"card-body table-responsive\">\r\n            <table class=\"table table-striped\" style=\"text-align: center;\">\r\n                <thead>\r\n                <tr>\r\n                    <th>{{'Accountant.Credit'| translate}}</th>\r\n                    <th>{{'Accountant.Debit'| translate}}</th>\r\n                    <th>{{'Accountant.Tables.Total'| translate}}</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody *ngFor=\"let val of balanceCash\">\r\n                <tr>\r\n                    <td *ngIf=\"val.credit; else not\">{{val.credit| indianCurrency}}</td>\r\n                    <td *ngIf=\"val.debit; else not\">{{val.debit| indianCurrency}}</td>\r\n                    <td>{{(val.credit-val.debit)| indianCurrency}}</td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </sb-card>\r\n    <!--Bank Balance Table-->\r\n    <sb-card *ngIf=\"balanceBank\">\r\n        <div class=\"card-header\">\r\n            <div class=\"row\">\r\n                <div class=\"col\" style=\"margin-top: 10px;\">\r\n                    <fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{\"Accountant.Tables.BankBal\" | translate}}\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <ng-template #not>\r\n            <td>-</td>\r\n        </ng-template>\r\n        <div class=\"card-body table-responsive\">\r\n            <table class=\"table table-striped\" style=\"text-align: center;\">\r\n                <thead>\r\n                <tr>\r\n                    <th>{{'Accountant.Tables.BankName'| translate}}</th>\r\n                    <th>{{'Accountant.Credit'| translate}}</th>\r\n                    <th>{{'Accountant.Debit'| translate}}</th>\r\n                    <th>{{'Accountant.Tables.Total'| translate}}</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody *ngFor=\"let val of balanceBank\">\r\n                <tr>\r\n                    <td *ngIf=\"val.bankName; else not\">{{val.bankName}}</td>\r\n                    <td *ngIf=\"val.credit; else not\">{{val.credit| indianCurrency}}</td>\r\n                    <td *ngIf=\"val.debit; else not\">{{val.debit| indianCurrency}}</td>\r\n                    <td>{{(val.credit-val.debit)| indianCurrency}}</td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </div>\r\n    </sb-card>\r\n    <!--Loan Approval Table-->\r\n    <sb-card *ngIf=\"loanApprove\">\r\n        <div class=\"card-header\">\r\n            <div class=\"row\">\r\n                <div class=\"col\" style=\"margin-top: 10px;\">\r\n                    <fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{\"Accountant.Tables.LoanApprove\" | translate}}\r\n                </div>\r\n                <div class=\"col\">\r\n                    <input type=\"text\" placeholder=\"Search..\" [(ngModel)]=\"term\"/>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <ng-template #not>\r\n            <td>-</td>\r\n        </ng-template>\r\n        <div class=\"card-body table-responsive\">\r\n            <table class=\"table table-striped\">\r\n                <thead>\r\n                <tr>\r\n                    <td>{{'Accountant.Tables.EmployeeNo'| translate}}</td>\r\n                    <td>{{'Accountant.Tables.LoanDate'| translate}}</td>\r\n                    <td>{{'Accountant.Tables.Loan'| translate}}</td>\r\n                    <td>{{'Accountant.Tables.Duration'| translate}}</td>\r\n                    <td>{{'Accountant.Tables.LoanType'| translate}}</td>\r\n                    <td>{{'Accountant.Tables.AR'| translate}}</td>\r\n                </tr>\r\n                </thead>\r\n                <tbody *ngFor=\"let loan of loanData | filter: term | paginate: { itemsPerPage:5, currentPage: p}; let i=index;\">\r\n                <tr>\r\n                    <td *ngIf=\"loan.userId; else not\">{{loan.userId}}</td>\r\n                    <td *ngIf=\"loan.date; else not\">{{loan.date| date:'dd-MM-yyyy'}}</td>\r\n                    <td *ngIf=\"loan.loanAmount; else not\">{{loan.loanAmount| indianCurrency}}</td>\r\n                    <td *ngIf=\"loan.loanDuration; else not\">{{loan.loanDuration}}</td>\r\n                    <td *ngIf=\"loan.loanType; else not\">{{loan.loanType}}</td>\r\n                    <td>\r\n                        <label>\r\n                            <input type=\"checkbox\" (click)=\"approve(i)\"/>\r\n                        </label>\r\n                    </td>\r\n                </tr>\r\n                <tr *ngIf=\"approveMode[i]\" align=\"center\">\r\n                    <td colspan=\"6\">\r\n                        <table class=\"table\">\r\n                            <tbody>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.Interest'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"number\" [(ngModel)]=\"interestAmt[i]\" name=\"interest\" />\r\n                                    </label>\r\n                                </td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <div class=\"row\">\r\n                            <div class=\"col\">\r\n                                <button (click)=\"approveLoan(loan.userId,loan.loanId, interestAmt[i])\">{{'Accountant.Tables.Approve'| translate}}</button>\r\n                            </div>\r\n                            <div class=\"col\">\r\n                                <button (click)=\"rejectLoan(loan.userId,loan.loanId)\">{{'Accountant.Tables.Reject'| translate}}</button>\r\n                            </div>\r\n                        </div>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n            <div class=\"pagination\">\r\n                <pagination-controls (pageChange)=\"p=$event\"></pagination-controls>\r\n            </div>\r\n        </div>\r\n    </sb-card>\r\n</sb-layout-dashboard>\r\n");

/***/ }),

/***/ "./src/app/dashboard/dashboard-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: DashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function() { return DashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");




const routes = [{ path: '', component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] }];
let DashboardRoutingModule = class DashboardRoutingModule {
};
DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], DashboardRoutingModule);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.scss":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.scss ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headers {\n  color: white;\n}\n\n.pagination a {\n  border-radius: 5px;\n}\n\n.pagination a.active {\n  border-radius: 5px;\n}\n\n/* Style the search box inside the navigation bar */\n\n.card-header input[type=text] {\n  border-radius: 5px;\n  float: right;\n  padding: 6px;\n  margin-right: 16px;\n  font-size: 17px;\n  border: 1px solid #000000;\n}\n\n/* When the screen is less than 600px wide, stack the links and the search field vertically instead of horizontally */\n\n@media screen and (max-width: 600px) {\n  .card-header a, .card-header input[type=text] {\n    border-radius: 5px;\n    float: none;\n    display: block;\n    text-align: left;\n    width: 100%;\n    margin: 0;\n    padding: 14px;\n  }\n\n  .card-header input[type=text] {\n    border: 1px solid #ccc;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcUFJBS0hBUlxcRG9jdW1lbnRzXFxBbmd1bGFyIFByb2plY3RcXEtvc2hpbWFcXFNvY2lldHlfQmFua2luZy9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0FDREo7O0FER0E7RUFDSSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7QUNBSjs7QURFQSxtREFBQTs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBLHFIQUFBOztBQUNBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtJQUNBLGFBQUE7RUNDTjs7RURDRTtJQUNJLHNCQUFBO0VDRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmhlYWRlcnN7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLnBhZ2luYXRpb24gYSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuXHJcbi5wYWdpbmF0aW9uIGEuYWN0aXZlIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG4vKiBTdHlsZSB0aGUgc2VhcmNoIGJveCBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyICovXHJcbi5jYXJkLWhlYWRlciBpbnB1dFt0eXBlPXRleHRdIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmc6IDZweDtcclxuICAgIG1hcmdpbi1yaWdodDogMTZweDtcclxuICAgIGZvbnQtc2l6ZTogMTdweDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XHJcbn1cclxuXHJcbi8qIFdoZW4gdGhlIHNjcmVlbiBpcyBsZXNzIHRoYW4gNjAwcHggd2lkZSwgc3RhY2sgdGhlIGxpbmtzIGFuZCB0aGUgc2VhcmNoIGZpZWxkIHZlcnRpY2FsbHkgaW5zdGVhZCBvZiBob3Jpem9udGFsbHkgKi9cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcclxuICAgIC5jYXJkLWhlYWRlciBhLCAuY2FyZC1oZWFkZXIgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgICAgIGZsb2F0OiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDE0cHg7XHJcbiAgICB9XHJcbiAgICAuY2FyZC1oZWFkZXIgaW5wdXRbdHlwZT10ZXh0XSB7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIH1cclxufVxyXG4iLCIuaGVhZGVycyB7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cblxuLnBhZ2luYXRpb24gYSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbn1cblxuLnBhZ2luYXRpb24gYS5hY3RpdmUge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi8qIFN0eWxlIHRoZSBzZWFyY2ggYm94IGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIgKi9cbi5jYXJkLWhlYWRlciBpbnB1dFt0eXBlPXRleHRdIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBmbG9hdDogcmlnaHQ7XG4gIHBhZGRpbmc6IDZweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICBmb250LXNpemU6IDE3cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMwMDAwMDA7XG59XG5cbi8qIFdoZW4gdGhlIHNjcmVlbiBpcyBsZXNzIHRoYW4gNjAwcHggd2lkZSwgc3RhY2sgdGhlIGxpbmtzIGFuZCB0aGUgc2VhcmNoIGZpZWxkIHZlcnRpY2FsbHkgaW5zdGVhZCBvZiBob3Jpem9udGFsbHkgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jYXJkLWhlYWRlciBhLCAuY2FyZC1oZWFkZXIgaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZsb2F0OiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDE0cHg7XG4gIH1cblxuICAuY2FyZC1oZWFkZXIgaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_dashboard_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/dashboard/services */ "./src/app/dashboard/services/index.ts");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__);



// @ts-ignore

let DashboardComponent = class DashboardComponent {
    constructor(dashboardService) {
        this.dashboardService = dashboardService;
        this.loanAmount = 0;
        this.interestAmount = 0;
        this.principleAmount = 0;
        this.noOfLoans = 0;
        this.loanApprove = false;
        this.loanData = [];
    }
    ngOnInit() {
        this.dashboardService.getData().subscribe(result => {
            if (result) {
                console.log(result);
                console.log(result.loan.length);
                this.noOfLoans = result.loan.length;
                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < result.loan.length; i++) {
                    const principle = result.loan[i].loanData.loanAmount;
                    this.loanAmount += principle;
                    const r = result.loan[i].loanData.interest / 1200;
                    if (result.loan[i].loanBook) {
                        // tslint:disable-next-line:prefer-for-of
                        for (let j = 0; j < result.loan[i].loanBook.length; j++) {
                            const emi = result.loan[i].loanBook[j].credit;
                            const interest = principle * r;
                            const amt = emi - interest;
                            this.principleAmount += amt;
                            this.interestAmount += interest;
                        }
                    }
                }
                this.amount = (Math.round(this.principleAmount * 100) / 100).toFixed(0);
                this.interest = (Math.round(this.interestAmount * 100) / 100).toFixed(0);
            }
        }, error1 => {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Oops!',
                text: 'Try again!',
                icon: 'error',
            });
        });
        this.dashboardService.getLoanData().subscribe(result => {
            if (result) {
                console.log(result);
                console.log(result.data.length);
                if (result.data.length !== 0) {
                    this.approveMode = new Array(result.data.length);
                    this.interestAmt = new Array(result.data.length);
                    this.loanData = result.data;
                    this.loanApprove = true;
                }
            }
        }, error1 => {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Oops!',
                text: 'Try again!',
                icon: 'error',
            });
        });
        this.dashboardService.getBal().subscribe(result => {
            if (result) {
                console.log(result);
                this.balanceCash = result.cash;
                this.balanceBank = result.bank;
            }
        }, error1 => {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Oops!',
                text: 'Try again!',
                icon: 'error',
            });
        });
    }
    approve(index) {
        this.approveMode[index] = !this.approveMode[index];
    }
    approveLoan(text, id, loanInterest) {
        const data = {
            userId: text,
            loanId: id,
            interest: loanInterest,
            closeLoan: false,
        };
        console.log(data);
        this.dashboardService.approveLoan(data).subscribe(result => {
            if (result) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    text: 'Approved!',
                    icon: 'success',
                }).then((isConfirm) => {
                    if (isConfirm) {
                        window.location.reload();
                    }
                });
            }
        }, error1 => {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Oops!',
                text: 'Try again!',
                icon: 'error',
            });
        });
    }
    rejectLoan(text, id) {
        const data = {
            userId: text,
            loanId: id,
        };
        console.log(data);
        this.dashboardService.rejectLoan(data).subscribe(result => {
            if (result) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                    text: 'Rejected!',
                    icon: 'success',
                }).then((isConfirm) => {
                    if (isConfirm) {
                        window.location.reload();
                    }
                });
            }
        }, error1 => {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                title: 'Oops!',
                text: 'Try again!',
                icon: 'error',
            });
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _app_dashboard_services__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] }
];
DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/dashboard/dashboard.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_dashboard_services__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]])
], DashboardComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.module.ts":
/*!***********************************************!*\
  !*** ./src/app/dashboard/dashboard.module.ts ***!
  \***********************************************/
/*! exports provided: DashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardModule", function() { return DashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");
/* harmony import */ var _app_layout_dashboard_layout_dashboard_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/layout-dashboard/layout-dashboard.module */ "./src/app/layout-dashboard/layout-dashboard.module.ts");
/* harmony import */ var _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/navigation/navigation.module */ "./src/app/navigation/navigation.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./dashboard-routing.module */ "./src/app/dashboard/dashboard-routing.module.ts");
/* harmony import */ var _dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");













let DashboardModule = class DashboardModule {
};
DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"]],
        imports: [
            _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_9__["DashboardRoutingModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"],
            _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_7__["NavigationModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"],
            _app_layout_dashboard_layout_dashboard_module__WEBPACK_IMPORTED_MODULE_6__["LayoutDashboardModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__["Ng2SearchPipeModule"],
        ],
        providers: [],
    })
], DashboardModule);



/***/ }),

/***/ "./src/app/dashboard/services/dashboard.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/dashboard/services/dashboard.service.ts ***!
  \*********************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let DashboardService = class DashboardService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getData() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json');
        const url = 'http://206.189.129.219:8080/getAllLoanData';
        return this.httpService.get(url, { headers });
    }
    getBal() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json');
        const url = 'http://206.189.129.219:8080/getCashBank';
        return this.httpService.get(url, { headers });
    }
    getLoanData() {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json');
        const url = 'http://206.189.129.219:8080/getApprovalLoans';
        return this.httpService.get(url, { headers });
    }
    approveLoan(data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json');
        const url = 'http://206.189.129.219:8080/approveLoan';
        return this.httpService.post(url, data, { headers });
    }
    rejectLoan(data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json');
        const url = 'http://206.189.129.219:8080/rejectLoan';
        return this.httpService.post(url, data, { headers });
    }
};
DashboardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
DashboardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], DashboardService);



/***/ }),

/***/ "./src/app/dashboard/services/index.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/services/index.ts ***!
  \*********************************************/
/*! exports provided: services, DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.service */ "./src/app/dashboard/services/dashboard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return _dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]; });



const services = [_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]];



/***/ })

}]);
//# sourceMappingURL=dashboard-dashboard-module-es2015.js.map