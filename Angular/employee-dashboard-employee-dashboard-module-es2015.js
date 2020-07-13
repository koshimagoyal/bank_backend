(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["employee-dashboard-employee-dashboard-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-dashboard/employee-dashboard/employee-dashboard.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-dashboard/employee-dashboard/employee-dashboard.component.html ***!
  \*******************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-emp-dashboard>\r\n    <sb-dashboard-head title=\"{{user.name}}'s {{'Common.Title'|translate}}\"></sb-dashboard-head>\r\n    <hr class=\"rounded\">\r\n    <br>\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-3 col-md-6\">\r\n            <sb-card-view-details link=\"\" text=\"{{loanAmount| indianCurrency}}\" background=\"bg-primary\">\r\n                <div class=\"card-body\">\r\n                    <fa-icon class=\"mr-1 fa-pull-right\" style=\"opacity: 0.5; font-size: 30px;\" [icon]='[\"fas\", \"hockey-puck\"]'></fa-icon>\r\n                    <p style=\"margin-top: 10px;\">{{'Employee.Cards.Loan'| translate}}</p>\r\n                </div>\r\n            </sb-card-view-details>\r\n        </div>\r\n        <div class=\"col-xl-3 col-md-6\">\r\n            <sb-card-view-details link=\"\" text=\"{{emi| indianCurrency}}\" background=\"bg-warning\">\r\n                <div class=\"card-body\">\r\n                    <fa-icon class=\"mr-1 fa-pull-right\" style=\"opacity: 0.5; font-size: 30px;\" [icon]='[\"fas\", \"wallet\"]'></fa-icon>\r\n                    <p style=\"margin-top: 10px;\">{{'Employee.Cards.Deposit'| translate}}</p>\r\n                </div>\r\n            </sb-card-view-details>\r\n        </div>\r\n        <div class=\"col-xl-3 col-md-6\">\r\n            <sb-card-view-details link=\"\" text=\"{{amount| indianCurrency}}\" background=\"bg-success\">\r\n                <div class=\"card-body\">\r\n                    <fa-icon class=\"mr-1 fa-pull-right\" style=\"opacity: 0.5; font-size: 30px;\" [icon]='[\"fas\", \"coins\"]'></fa-icon>\r\n                    <p style=\"margin-top: 10px;\">{{'Employee.Cards.Debit'| translate}}</p>\r\n                </div>\r\n            </sb-card-view-details>\r\n        </div>\r\n        <div class=\"col-xl-3 col-md-6\">\r\n            <sb-card-view-details link=\"\" text=\"{{balance| indianCurrency}}\" background=\"bg-danger\">\r\n                <div class=\"card-body\">\r\n                    <fa-icon class=\"mr-1 fa-pull-right\" style=\"opacity: 0.5; font-size: 30px;\" [icon]='[\"fas\", \"money-check\"]'></fa-icon>\r\n                    <p style=\"margin-top: 10px;\">{{'Employee.Cards.Credit'| translate}}</p>\r\n                </div>\r\n            </sb-card-view-details>\r\n        </div>\r\n    </div>\r\n    <!--PassBook Table-->\r\n    <sb-card>\r\n        <div class=\"card-header\">\r\n            <div class=\"row\">\r\n                <div class=\"col\" style=\"margin-top: 10px;\">\r\n                    <fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{\"Employee.Passbook.Title\" | translate}}\r\n                </div>\r\n                <div class=\"col\">\r\n                    <input type=\"text\" placeholder=\"Search..\" [(ngModel)]=\"term\"/>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <ng-template #not>\r\n            <td>-</td>\r\n        </ng-template>\r\n        <div class=\"card-body table-responsive\">\r\n            <table class=\"table table-bordered\">\r\n                <thead>\r\n                <tr>\r\n                    <th style=\"width: 16.66%;\" scope=\"col\"><span>{{\"Employee.Passbook.Date\" | translate}}</span></th>\r\n                    <th style=\"width: 60%;\" scope=\"col\"><span>{{\"Employee.Passbook.Particulars\" | translate}}</span></th>\r\n                    <th scope=\"col\"><span>Mode</span></th>\r\n                    <th scope=\"col\"><span>{{\"Employee.Passbook.Deposit\" | translate}}</span></th>\r\n                    <th scope=\"col\"><span>{{\"Employee.Passbook.Withdrawal\" | translate}}</span></th>\r\n                </tr>\r\n                </thead>\r\n                <tbody *ngFor=\"let val of account | filter: term | paginate: { itemsPerPage:5, currentPage: p} \">\r\n                <tr>\r\n                    <th scope=\"row\" *ngIf=\"isDate(val.account.date); else notDate\">{{ val.account.date| date:'dd-MM-yyyy' }}</th>\r\n                    <ng-template #notDate>\r\n                        <th scope=\"row\">{{val.account.date}}</th>\r\n                    </ng-template>\r\n                    <td *ngIf=\"val.account.particulars; else not\">{{val.account.particulars}}</td>\r\n                    <td *ngIf=\"val.account.mode; else not\">{{val.account.mode}}</td>\r\n                    <td class=\"table-success\" *ngIf=\"val.account.credit; else not\">{{val.account.credit| indianCurrency}}</td>\r\n                    <td class=\"table-danger\" *ngIf=\"val.account.debit; else not\">{{val.account.debit| indianCurrency}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td *ngIf=\"val.cheque\" align=\"center\" colspan=\"5\">\r\n                        <h6 style=\"font-weight: bold\">Cheque Details</h6>\r\n                        <table style=\"width: 100%;\">\r\n                            <thead>\r\n                            <tr>\r\n                                <td style=\"width: 16.66%;\">Cheque Date</td>\r\n                                <td style=\"width: 60%;\">Bank Name</td>\r\n                                <td>Cheque Number</td>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                            <tr>\r\n                                <td *ngIf=\"val.cheque[0].chequeDate; else not\">{{val.cheque[0].chequeDate| date:'dd-MM-yyyy'}}</td>\r\n                                <td class=\"col-5\" *ngIf=\"val.cheque[0].bankName; else not\">{{val.cheque[0].bankName}}</td>\r\n                                <td *ngIf=\"val.cheque[0].chequeNo; else not\">{{val.cheque[0].chequeNo}}</td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n            <div class=\"pagination\">\r\n                <pagination-controls (pageChange)=\"p=$event\"></pagination-controls>\r\n            </div>\r\n        </div>\r\n    </sb-card>\r\n    <!--Loan Table-->\r\n    <ng-container *ngFor=\"let data of loans; let i = index\">\r\n        <sb-card>\r\n            <div class=\"card-header bg-primary headers\">\r\n                <div class=\"row\">\r\n                    <div class=\"col\" style=\"margin-top: 10px; color: white;\">\r\n                        <h5><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"rupee-sign\"]'></fa-icon>&nbsp;{{'Employee.Loan'| translate}} ({{data.loanData.date| date:'dd-MM-yyyy'}})</h5>\r\n                    </div>\r\n                    <div class=\"col\" style=\"color: white;\">\r\n                        <fa-icon class=\"fa-pull-right rotate\" [ngClass]=\"{'clicked': show[i]}\" (click)=\"showTable(i)\" [icon]='[\"fas\",\"caret-right\"]' style=\"margin-top: 10px;\">\r\n                        </fa-icon>&nbsp;\r\n                        <span class=\"float-right\" style=\"margin: 10px;\"><h5 *ngIf=\"data.loanData.loanAmount; else not\">{{data.loanData.loanAmount| indianCurrency}}</h5></span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-header\" *ngIf=\"show[i]  && data.loanBook\">\r\n                <div class=\"row\">\r\n                    <div class=\"col\" style=\"margin-top: 10px;\">\r\n                        <fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>&nbsp;{{\"Employee.Loanbook.Title\" | translate}}\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"card-body table-responsive\" *ngIf=\"show[i] && data.loanBook\">\r\n                <table class=\"table table-striped\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th style=\"width: 16.66%;\" scope=\"col\"><span>{{\"Employee.Loanbook.Date\" | translate}}</span></th>\r\n                        <th style=\"width: 60%;\" scope=\"col\"><span>{{\"Employee.Loanbook.Particulars\" | translate}}</span></th>\r\n                        <th scope=\"col\"><span>{{\"Employee.Loanbook.Emi\" | translate}}</span></th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr *ngFor=\"let val of data.loanBook\">\r\n                        <th scope=\"row\" *ngIf=\"isDate(val.date); else notDate\">{{val.date| date:'dd-MM-yyyy'}}</th>\r\n                        <ng-template #notDate>\r\n                            <th scope=\"row\">{{val.date}}</th>\r\n                        </ng-template>\r\n                        <td *ngIf=\"val.particulars; else not\">{{val.particulars}}</td>\r\n                        <td *ngIf=\"val.credit; else not\">{{val.credit| indianCurrency}}</td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <div class=\"card-body table-responsive\" *ngIf=\"show[i] && data.closeData && data.closeData[0].mode==='Cash';else cheque\">\r\n                <h3 style=\"font-weight: bold; text-align: center;\">Loan Closure Details</h3>\r\n                <table class=\"table table-striped\">\r\n                    <thead>\r\n                    <tr>\r\n                        <th scope=\"col\"><span>{{\"Accountant.Tables.ShowDate\" | translate}}</span></th>\r\n                        <th scope=\"col\"><span>{{\"Accountant.Tables.LoanStatus\"  | translate}}</span></th>\r\n                        <th scope=\"col\"><span>{{\"Accountant.Tables.Mode\" | translate}}</span></th>\r\n                        <th scope=\"col\"><span>{{\"Accountant.Tables.Pay\" | translate}}</span></th>\r\n                    </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                    <tr>\r\n                        <th scope=\"row\" *ngIf=\"isDate(data.closeData[0].date); else notDate\">{{data.closeData[0].date| date:'dd-MM-yyyy'}}</th>\r\n                        <ng-template #notDate>\r\n                            <th scope=\"row\">{{data.closeData[0].date}}</th>\r\n                        </ng-template>\r\n                        <td *ngIf=\"data.loanData.closeStatus; else not\">{{data.loanData.closeStatus}}</td>\r\n                        <td *ngIf=\"data.closeData[0].mode; else not\">{{data.closeData[0].mode}}</td>\r\n                        <td *ngIf=\"data.closeData[0].credit; else not\">{{data.closeData[0].credit| indianCurrency}}</td>\r\n                    </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <ng-template #cheque>\r\n                <div class=\"card-body table-responsive\" *ngIf=\"show[i] && data.closeData && data.closeData[0].mode==='Cheque'\">\r\n                    <h3 style=\"font-weight: bold; text-align: center;\">Loan Closure Details</h3>\r\n                    <table class=\"table table-striped\">\r\n                        <thead>\r\n                        <tr>\r\n                            <th scope=\"col\"><span>{{\"Accountant.Tables.ShowDate\" | translate}}</span></th>\r\n                            <th scope=\"col\"><span>{{\"Accountant.Tables.LoanStatus\"  | translate}}</span></th>\r\n                            <th scope=\"col\"><span>{{\"Accountant.Tables.Mode\" | translate}}</span></th>\r\n                            <th scope=\"col\"><span>{{\"Accountant.Tables.Pay\" | translate}}</span></th>\r\n                            <th scope=\"col\"><span>{{\"Accountant.Tables.ChequeDate\" | translate}}</span></th>\r\n                            <th scope=\"col\"><span>{{\"Accountant.Tables.BankName\"  | translate}}</span></th>\r\n                            <th scope=\"col\"><span>{{\"Accountant.Tables.ChequeNo\" | translate}}</span></th>\r\n                        </tr>\r\n                        </thead>\r\n                        <tbody>\r\n                        <tr>\r\n                            <th scope=\"row\" *ngIf=\"isDate(data.closeData[0].date); else notDate\">{{data.closeData[0].date| date:'dd-MM-yyyy'}}</th>\r\n                            <ng-template #notDate>\r\n                                <th scope=\"row\">{{data.closeData[0].date}}</th>\r\n                            </ng-template>\r\n                            <td *ngIf=\"data.loanData.closeStatus; else not\">{{data.loanData.closeStatus}}</td>\r\n                            <td *ngIf=\"data.closeData[0].mode; else not\">{{data.closeData[0].mode}}</td>\r\n                            <td *ngIf=\"data.closeData[0].credit; else not\">{{data.closeData[0].credit| indianCurrency}}</td>\r\n                            <td *ngIf=\"data.chequeData[0].chequeDate; else not\">{{data.chequeData[0].chequeDate| indianCurrency}}</td>\r\n                            <td *ngIf=\"data.chequeData[0].bankName; else not\">{{data.chequeData[0].bankName| indianCurrency}}</td>\r\n                            <td *ngIf=\"data.chequeData[0].chequeNo; else not\">{{data.chequeData[0].chequeNo| indianCurrency}}</td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </ng-template>\r\n        </sb-card>\r\n    </ng-container>\r\n</sb-layout-emp-dashboard>\r\n");

/***/ }),

/***/ "./src/app/employee-dashboard/employee-dashboard-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/employee-dashboard/employee-dashboard-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: EmployeeDashboardRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDashboardRoutingModule", function() { return EmployeeDashboardRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_employee_dashboard_employee_dashboard_employee_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/employee-dashboard/employee-dashboard/employee-dashboard.component */ "./src/app/employee-dashboard/employee-dashboard/employee-dashboard.component.ts");




const routes = [{ path: '', component: _app_employee_dashboard_employee_dashboard_employee_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["EmployeeDashboardComponent"] }];
let EmployeeDashboardRoutingModule = class EmployeeDashboardRoutingModule {
};
EmployeeDashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], EmployeeDashboardRoutingModule);



/***/ }),

/***/ "./src/app/employee-dashboard/employee-dashboard.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/employee-dashboard/employee-dashboard.module.ts ***!
  \*****************************************************************/
/*! exports provided: EmployeeDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDashboardModule", function() { return EmployeeDashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _employee_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./employee-dashboard-routing.module */ "./src/app/employee-dashboard/employee-dashboard-routing.module.ts");
/* harmony import */ var _employee_dashboard_employee_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./employee-dashboard/employee-dashboard.component */ "./src/app/employee-dashboard/employee-dashboard/employee-dashboard.component.ts");
/* harmony import */ var _app_layout_emp_dashboard_layout_emp_dashboard_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/layout-emp-dashboard/layout-emp-dashboard.module */ "./src/app/layout-emp-dashboard/layout-emp-dashboard.module.ts");
/* harmony import */ var _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/navigation/navigation.module */ "./src/app/navigation/navigation.module.ts");
/* harmony import */ var _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");












let EmployeeDashboardModule = class EmployeeDashboardModule {
};
EmployeeDashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_employee_dashboard_employee_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["EmployeeDashboardComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _employee_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_3__["EmployeeDashboardRoutingModule"],
            _app_layout_emp_dashboard_layout_emp_dashboard_module__WEBPACK_IMPORTED_MODULE_5__["LayoutEmpDashboardModule"],
            _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_6__["NavigationModule"],
            _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_7__["AppCommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_9__["TranslateModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_10__["NgxPaginationModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_11__["Ng2SearchPipeModule"],
        ],
    })
], EmployeeDashboardModule);



/***/ }),

/***/ "./src/app/employee-dashboard/employee-dashboard/employee-dashboard.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/employee-dashboard/employee-dashboard/employee-dashboard.component.scss ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headers {\n  color: white;\n}\n\n.pagination a {\n  border-radius: 5px;\n}\n\n.pagination a.active {\n  border-radius: 5px;\n}\n\n/* Style the search box inside the navigation bar */\n\n.card-header input[type=text] {\n  border-radius: 5px;\n  float: right;\n  padding: 6px;\n  margin-right: 16px;\n  font-size: 17px;\n  border: 1px solid #000000;\n}\n\n.rotate {\n  margin: 10px;\n  transition: all 0s ease-out !important;\n}\n\n.clicked {\n  transform: rotate(90deg);\n}\n\n/* When the screen is less than 600px wide, stack the links and the search field vertically instead of horizontally */\n\n@media screen and (max-width: 600px) {\n  .card-header a, .card-header input[type=text] {\n    border-radius: 5px;\n    float: none;\n    display: block;\n    text-align: left;\n    width: 100%;\n    margin: 0;\n    padding: 14px;\n  }\n\n  .card-header input[type=text] {\n    border: 1px solid #ccc;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtZGFzaGJvYXJkL2VtcGxveWVlLWRhc2hib2FyZC9DOlxcVXNlcnNcXFBSQUtIQVJcXERvY3VtZW50c1xcQW5ndWxhciBQcm9qZWN0XFxLb3NoaW1hXFxTb2NpZXR5X0Jhbmtpbmcvc3JjXFxhcHBcXGVtcGxveWVlLWRhc2hib2FyZFxcZW1wbG95ZWUtZGFzaGJvYXJkXFxlbXBsb3llZS1kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2VtcGxveWVlLWRhc2hib2FyZC9lbXBsb3llZS1kYXNoYm9hcmQvZW1wbG95ZWUtZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtBQ0RKOztBREdBO0VBQ0ksa0JBQUE7QUNBSjs7QURHQTtFQUNJLGtCQUFBO0FDQUo7O0FERUEsbURBQUE7O0FBQ0E7RUFDSSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxzQ0FBQTtBQ0VKOztBREFBO0VBQ0ksd0JBQUE7QUNHSjs7QURBQSxxSEFBQTs7QUFDQTtFQUNJO0lBQ0ksa0JBQUE7SUFDQSxXQUFBO0lBQ0EsY0FBQTtJQUNBLGdCQUFBO0lBQ0EsV0FBQTtJQUNBLFNBQUE7SUFDQSxhQUFBO0VDR047O0VEREU7SUFDSSxzQkFBQTtFQ0lOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS1kYXNoYm9hcmQvZW1wbG95ZWUtZGFzaGJvYXJkL2VtcGxveWVlLWRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ3N0eWxlcy92YXJpYWJsZXMuc2Nzcyc7XHJcblxyXG4uaGVhZGVyc3tcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxufVxyXG4ucGFnaW5hdGlvbiBhIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLnBhZ2luYXRpb24gYS5hY3RpdmUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcbi8qIFN0eWxlIHRoZSBzZWFyY2ggYm94IGluc2lkZSB0aGUgbmF2aWdhdGlvbiBiYXIgKi9cclxuLmNhcmQtaGVhZGVyIGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgcGFkZGluZzogNnB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xyXG4gICAgZm9udC1zaXplOiAxN3B4O1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcclxufVxyXG4ucm90YXRlIHtcclxuICAgIG1hcmdpbjogMTBweDtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwcyBlYXNlLW91dCAhaW1wb3J0YW50O1xyXG59XHJcbi5jbGlja2VkIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDkwZGVnKVxyXG59XHJcblxyXG4vKiBXaGVuIHRoZSBzY3JlZW4gaXMgbGVzcyB0aGFuIDYwMHB4IHdpZGUsIHN0YWNrIHRoZSBsaW5rcyBhbmQgdGhlIHNlYXJjaCBmaWVsZCB2ZXJ0aWNhbGx5IGluc3RlYWQgb2YgaG9yaXpvbnRhbGx5ICovXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcbiAgICAuY2FyZC1oZWFkZXIgYSwgLmNhcmQtaGVhZGVyIGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICBmbG9hdDogbm9uZTtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICBwYWRkaW5nOiAxNHB4O1xyXG4gICAgfVxyXG4gICAgLmNhcmQtaGVhZGVyIGlucHV0W3R5cGU9dGV4dF0ge1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XHJcbiAgICB9XHJcbn1cclxuIiwiLmhlYWRlcnMge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wYWdpbmF0aW9uIGEge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wYWdpbmF0aW9uIGEuYWN0aXZlIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4vKiBTdHlsZSB0aGUgc2VhcmNoIGJveCBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyICovXG4uY2FyZC1oZWFkZXIgaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiA2cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xufVxuXG4ucm90YXRlIHtcbiAgbWFyZ2luOiAxMHB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMHMgZWFzZS1vdXQgIWltcG9ydGFudDtcbn1cblxuLmNsaWNrZWQge1xuICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XG59XG5cbi8qIFdoZW4gdGhlIHNjcmVlbiBpcyBsZXNzIHRoYW4gNjAwcHggd2lkZSwgc3RhY2sgdGhlIGxpbmtzIGFuZCB0aGUgc2VhcmNoIGZpZWxkIHZlcnRpY2FsbHkgaW5zdGVhZCBvZiBob3Jpem9udGFsbHkgKi9cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5jYXJkLWhlYWRlciBhLCAuY2FyZC1oZWFkZXIgaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZsb2F0OiBub25lO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDE0cHg7XG4gIH1cblxuICAuY2FyZC1oZWFkZXIgaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgfVxufSJdfQ== */");

/***/ }),

/***/ "./src/app/employee-dashboard/employee-dashboard/employee-dashboard.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/employee-dashboard/employee-dashboard/employee-dashboard.component.ts ***!
  \***************************************************************************************/
/*! exports provided: EmployeeDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDashboardComponent", function() { return EmployeeDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_employee_dashboard_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/employee-dashboard/services */ "./src/app/employee-dashboard/services/index.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__);




// @ts-ignore

let EmployeeDashboardComponent = class EmployeeDashboardComponent {
    constructor(dashboardService, session) {
        this.dashboardService = dashboardService;
        this.session = session;
        this.loanAmount = 0;
        this.loanDebit = 0;
        this.emi = 0;
        this.balance = 0;
    }
    ngOnInit() {
        this.user = this.session.retrieve('user');
        console.log(this.user);
        const text = this.user.id;
        console.log(text);
        this.dashboardService.getData(text).subscribe(result => {
            if (result) {
                console.log(result);
                this.show = [result.loanData.length];
                this.q = new Array(result.loanData.length);
                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < result.loanData.length; i++) {
                    let principle = result.loanData[i].loanData.loanAmount;
                    this.loanAmount += principle;
                    const r = result.loanData[i].loanData.interest / 100;
                    if (result.loanData[i].loanBook) {
                        // tslint:disable-next-line:prefer-for-of
                        for (let j = 0; j < result.loanData[i].loanBook.length; j++) {
                            const emi = result.loanData[i].loanBook[j].credit;
                            const amt = emi * r;
                            principle -= amt;
                            this.emi += emi;
                            console.log(principle);
                        }
                    }
                    this.loanDebit += principle;
                    console.log(this.loanDebit);
                    this.show[i] = false;
                }
                this.amount = (Math.round(this.loanDebit * 100) / 100).toFixed(0);
                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < result.accountData.length; i++) {
                    this.balance +=
                        result.accountData[i].account.credit -
                            result.accountData[i].account.debit;
                }
                this.account = result.accountData;
                this.loans = result.loanData;
            }
        }, error1 => {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Oops!',
                text: 'Try again!',
                icon: 'error',
            });
        });
    }
    showTable(event) {
        console.log(event);
        if (this.show[event]) {
            this.show[event] = false;
        }
        else {
            this.show[event] = true;
        }
    }
    isDate(d) {
        const result = Date.parse(d);
        if (!result)
            return false;
        else
            return true;
    }
};
EmployeeDashboardComponent.ctorParameters = () => [
    { type: _app_employee_dashboard_services__WEBPACK_IMPORTED_MODULE_2__["DashboardService"] },
    { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"] }
];
EmployeeDashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-employee-dashboard',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./employee-dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-dashboard/employee-dashboard/employee-dashboard.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./employee-dashboard.component.scss */ "./src/app/employee-dashboard/employee-dashboard/employee-dashboard.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_employee_dashboard_services__WEBPACK_IMPORTED_MODULE_2__["DashboardService"],
        ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"]])
], EmployeeDashboardComponent);



/***/ }),

/***/ "./src/app/employee-dashboard/services/dashboard.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/employee-dashboard/services/dashboard.service.ts ***!
  \******************************************************************/
/*! exports provided: DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return DashboardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DashboardService = class DashboardService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getData(text) {
        const data = {
            userId: text,
        };
        const url = 'http://206.189.129.219:8080/get/userData';
        return this.httpService.post(url, data);
    }
};
DashboardService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DashboardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], DashboardService);



/***/ }),

/***/ "./src/app/employee-dashboard/services/index.ts":
/*!******************************************************!*\
  !*** ./src/app/employee-dashboard/services/index.ts ***!
  \******************************************************/
/*! exports provided: services, DashboardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard.service */ "./src/app/employee-dashboard/services/dashboard.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DashboardService", function() { return _dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]; });



const services = [_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]];



/***/ })

}]);
//# sourceMappingURL=employee-dashboard-employee-dashboard-module-es2015.js.map