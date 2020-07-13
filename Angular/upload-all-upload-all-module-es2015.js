(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upload-all-upload-all-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-all/dialog/dialog.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload-all/dialog/dialog.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div>\r\n    <h1 mat-dialog-title align=\"center\" *ngIf=\"category == 'Loan Disbursal Records'\">Loan Disbursal Records</h1>\r\n    <h1 mat-dialog-title align=\"center\" *ngIf=\"category == 'All Cash Transactions'\">All Cash Transactions</h1>\r\n    <h1 mat-dialog-title align=\"center\" *ngIf=\"category == 'All Cheque Transactions'\">All Cheque Transactions</h1>\r\n    <h1 mat-dialog-title align=\"center\" *ngIf=\"category == 'Credit Transactions'\">Credit Transactions</h1>\r\n    <h1 mat-dialog-title align=\"center\" *ngIf=\"category == 'Debit Transactions'\">Debit Transactions</h1>\r\n    <h1 mat-dialog-title align=\"center\" *ngIf=\"category == 'Expense Deductions'\">Expense Deductions</h1>\r\n    <h1 mat-dialog-title align=\"center\" *ngIf=\"category == 'Credit+Debit+Expense Transactions'\">Credit+Debit+Expense Transactions</h1>\r\n    <mat-dialog-content class=\"mat-typography\">\r\n        <br>\r\n        <table id=\"tab\" class=\"table table-borderless text-center\">\r\n            <thead>\r\n            <tr>\r\n                <th>Start Date</th>\r\n                <th>End Date</th>\r\n            </tr>\r\n            </thead>\r\n            <tbody>\r\n            <tr>\r\n                <td id=\"start\">{{start| date:'dd-MM-yyyy'}}</td>\r\n                <td id=\"end\">{{end| date:'dd-MM-yyyy'}}</td>\r\n            </tr>\r\n            </tbody>\r\n        </table>\r\n        <br>\r\n        <ng-container *ngIf=\"category == 'Loan Disbursal Records'\">\r\n            <h1>Loan Details</h1>\r\n            <table class=\"table table-bordered\">\r\n                <thead>\r\n                <tr>\r\n                    <th>Loan Date</th>\r\n                    <th>Loan Amount</th>\r\n                    <th>Loan Duration</th>\r\n                    <th>Loan Type</th>\r\n                    <th>Close Loan</th>\r\n                    <th>Closure Status</th>\r\n                    <th>Date of Loan Closure</th>\r\n                    <th>User Id</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody *ngFor=\"let data of loanData;\">\r\n                <tr>\r\n                    <td *ngIf=\"isDate(data.loanData.date); else notDate\">{{data.loanData.date| date:'dd-MM-yyyy'}}</td>\r\n                    <ng-template #notDate>\r\n                        <td>{{data.loanData.date}}</td>\r\n                    </ng-template>\r\n                    <td *ngIf=\"data.loanData.loanAmount; else not\">{{data.loanData.loanAmount| indianCurrency}}</td>\r\n                    <td *ngIf=\"data.loanData.loanDuration; else not\">{{data.loanData.loanDuration}}</td>\r\n                    <td *ngIf=\"data.loanData.loanType; else not\">{{data.loanData.loanType}}</td>\r\n                    <td *ngIf=\"data.loanData.closeLoan; else not\">{{data.loanData.closeLoan}}</td>\r\n                    <td *ngIf=\"data.loanData.closeStatus; else not\">{{data.loanData.closeStatus}}</td>\r\n                    <td *ngIf=\"isDate(data.loanData.dateOfClosure); else notDate\">{{data.loanData.dateOfClosure| date:'dd-MM-yyyy'}}</td>\r\n                    <ng-template #notDate>\r\n                        <td>{{data.loanData.dateOfClosure}}</td>\r\n                    </ng-template>\r\n                    <td *ngIf=\"data.loanData.userId; else not\">{{data.loanData.userId}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td *ngIf=\"data.loanBook\" align=\"center\" colspan=\"8\">\r\n                        <h3 style=\"font-weight: bold\">EMI Details</h3>\r\n                        <table style=\"width: 100%;\">\r\n                            <thead>\r\n                            <tr>\r\n                                <th style=\"width: 16.66%;\">EMI Date</th>\r\n                                <th style=\"width: 60%;\">Particulars</th>\r\n                                <th>EMI Paid</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                            <tr *ngFor=\"let value of data.loanBook\">\r\n                                <td *ngIf=\"isDate(value.date); else notDate\">{{value.date}}</td>\r\n                                <ng-template #notDate>\r\n                                    <td>{{value.date}}</td>\r\n                                </ng-template>\r\n                                <td class=\"col-5\" *ngIf=\"value.particulars; else not\">{{value.particulars}}</td>\r\n                                <td *ngIf=\"value.credit; else not\">{{value.credit| indianCurrency}}</td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </td>\r\n                </tr>\r\n                <tr>\r\n                    <td *ngIf=\"data.closeData && data.closeData[0].mode==='Cash';else cheque\" align=\"center\" colspan=\"8\">\r\n                        <h3 style=\"font-weight: bold\">Loan Closure Details</h3>\r\n                        <table style=\"width: 100%;\">\r\n                            <thead>\r\n                            <tr>\r\n                                <th style=\"width: 16.66%;\">Date</th>\r\n                                <th>Loan Status</th>\r\n                                <th>Mode of Payment</th>\r\n                                <th>Paid Amount</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                            <tr>\r\n                                <td *ngIf=\"isDate(data.closeData[0].date); else notDate\">{{data.closeData[0].date| date:'dd-MM-yyyy'}}</td>\r\n                                <ng-template #notDate>\r\n                                    <td>{{data.closeData[0].date}}</td>\r\n                                </ng-template>\r\n                                <td *ngIf=\"data.loanData.closeStatus; else not\">{{data.loanData.closeStatus}}</td>\r\n                                <td *ngIf=\"data.closeData[0].mode; else not\">{{data.closeData[0].mode}}</td>\r\n                                <td *ngIf=\"data.closeData[0].credit; else not\">{{data.closeData[0].credit| indianCurrency}}</td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </td>\r\n                    <ng-template #cheque>\r\n                        <td *ngIf=\"data.closeData && data.closeData[0].mode==='Cheque';\" align=\"center\" colspan=\"8\">\r\n                            <h3 style=\"font-weight: bold\">Loan Closure Details</h3>\r\n                            <table style=\"width: 100%;\">\r\n                                <thead>\r\n                                <tr>\r\n                                    <th style=\"width: 16.66%;\">Date</th>\r\n                                    <th>Loan Status</th>\r\n                                    <th>Mode of Payment</th>\r\n                                    <th>Paid Amount</th>\r\n                                    <th>Cheque Date</th>\r\n                                    <th>Bank Name</th>\r\n                                    <th>Cheque Number</th>\r\n                                </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                <tr>\r\n                                    <td *ngIf=\"isDate(data.closeData[0].date); else notDate\">{{data.closeData[0].date| date:'dd-MM-yyyy'}}</td>\r\n                                    <ng-template #notDate>\r\n                                        <td>{{data.closeData[0].date}}</td>\r\n                                    </ng-template>\r\n                                    <td *ngIf=\"data.loanData.closeStatus; else not\">{{data.loanData.closeStatus}}</td>\r\n                                    <td *ngIf=\"data.closeData[0].mode; else not\">{{data.closeData[0].mode}}</td>\r\n                                    <td *ngIf=\"data.closeData[0].credit; else not\">{{data.closeData[0].credit| indianCurrency}}</td>\r\n                                    <td *ngIf=\"data.chequeData[0].chequeDate; else not\">{{data.chequeData[0].chequeDate| date: 'dd-MM-yyyy'}}</td>\r\n                                    <td *ngIf=\"data.chequeData[0].bankName; else not\">{{data.chequeData[0].bankName}}</td>\r\n                                    <td *ngIf=\"data.chequeData[0].chequeNo; else not\">{{data.chequeData[0].chequeNo}}</td>\r\n                                </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </td>\r\n                    </ng-template>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"category == 'All Cash Transactions'\">\r\n            <h1>Cash Transactions</h1>\r\n            <table class=\"table table-bordered\">\r\n                <thead>\r\n                <tr>\r\n                    <th style=\"width: 16.66%;\">Date</th>\r\n                    <th style=\"width: 60%;\">Particulars</th>\r\n                    <th>Credit</th>\r\n                    <th>Debit</th>\r\n                    <th>Type</th>\r\n                    <th>User Id</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody *ngFor=\"let val of accountData\">\r\n                <tr>\r\n                    <td *ngIf=\"isDate(val.date); else notDate\">{{val.date| date:'dd-MM-yyyy'}}</td>\r\n                    <ng-template #notDate>\r\n                        <td>{{val.date}}</td>\r\n                    </ng-template>\r\n                    <td *ngIf=\"val.particulars; else not\">{{val.particulars}}</td>\r\n                    <td class=\"table-success\" *ngIf=\"val.credit; else not\">{{val.credit| indianCurrency}}</td>\r\n                    <td class=\"table-danger\" *ngIf=\"val.debit; else not\">{{val.debit| indianCurrency}}</td>\r\n                    <td *ngIf=\"val.type; else not\">{{val.type}}</td>\r\n                    <td *ngIf=\"val.userId; else not\">{{val.userId}}</td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"category == 'All Cheque Transactions'\">\r\n            <h1>Cheque Transactions</h1>\r\n            <table class=\"table table-bordered\">\r\n                <thead>\r\n                <tr>\r\n                    <th style=\"width: 16.66%;\">Date</th>\r\n                    <th style=\"width: 60%;\">Particulars</th>\r\n                    <th>Credit</th>\r\n                    <th>Debit</th>\r\n                    <th>Type</th>\r\n                    <th>User Id</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody *ngFor=\"let val of accountData\">\r\n                <tr>\r\n                    <td *ngIf=\"isDate(val.account.date); else notDate\">{{val.account.date| date:'dd-MM-yyyy'}}</td>\r\n                    <ng-template #notDate>\r\n                        <td>{{val.account.date}}</td>\r\n                    </ng-template>\r\n                    <td *ngIf=\"val.account.particulars; else not\">{{val.account.particulars}}</td>\r\n                    <td class=\"table-success\" *ngIf=\"val.account.credit; else not\">{{val.account.credit| indianCurrency}}</td>\r\n                    <td class=\"table-danger\" *ngIf=\"val.account.debit; else not\">{{val.account.debit| indianCurrency}}</td>\r\n                    <td *ngIf=\"val.account.type; else not\">{{val.account.type}}</td>\r\n                    <td *ngIf=\"val.account.userId; else not\">{{val.account.userId}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td *ngIf=\"val.cheque\" align=\"center\" colspan=\"6\">\r\n                        <h3 style=\"font-weight: bold\">Cheque Details</h3>\r\n                        <table style=\"width: 100%;\">\r\n                            <thead>\r\n                            <tr>\r\n                                <th style=\"width: 16.66%;\">Cheque Date</th>\r\n                                <th style=\"width: 60%;\">Bank Name</th>\r\n                                <th>Cheque Number</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                            <tr>\r\n                                <td *ngIf=\"val.cheque[0].chequeDate; else not\">{{val.cheque[0].chequeDate| date:'dd-MM-yyyy'}}</td>\r\n                                <td class=\"col-5\" *ngIf=\"val.cheque[0].bankName; else not\">{{val.cheque[0].bankName}}</td>\r\n                                <td *ngIf=\"val.cheque[0].chequeNo; else not\">{{val.cheque[0].chequeNo}}</td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"category == 'Credit Transactions'\">\r\n            <h1>Credit Transactions</h1>\r\n            <table class=\"table table-bordered\">\r\n                <thead>\r\n                <tr>\r\n                    <th style=\"width: 16.66%;\">Date</th>\r\n                    <th style=\"width: 60%;\">Particulars</th>\r\n                    <th>Mode</th>\r\n                    <th>Credit</th>\r\n                    <th>Type</th>\r\n                    <th>User Id</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody *ngFor=\"let val of accountData\">\r\n                <tr>\r\n                    <td *ngIf=\"isDate(val.account.date); else notDate\">{{val.account.date| date:'dd-MM-yyyy'}}</td>\r\n                    <ng-template #notDate>\r\n                        <td>{{val.account.date}}</td>\r\n                    </ng-template>\r\n                    <td *ngIf=\"val.account.particulars; else not\">{{val.account.particulars}}</td>\r\n                    <td *ngIf=\"val.account.mode; else not\">{{val.account.mode}}</td>\r\n                    <td class=\"table-success\" *ngIf=\"val.account.credit; else not\">{{val.account.credit| indianCurrency}}</td>\r\n                    <td *ngIf=\"val.account.type; else not\">{{val.account.type}}</td>\r\n                    <td *ngIf=\"val.account.userId; else not\">{{val.account.userId}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td *ngIf=\"val.cheque\" align=\"center\" colspan=\"6\">\r\n                        <h3 style=\"font-weight: bold\">Cheque Details</h3>\r\n                        <table style=\"width: 100%;\">\r\n                            <thead>\r\n                            <tr>\r\n                                <th style=\"width: 16.66%;\">Cheque Date</th>\r\n                                <th style=\"width: 60%;\">Bank Name</th>\r\n                                <th>Cheque Number</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                            <tr>\r\n                                <td *ngIf=\"val.cheque[0].chequeDate; else not\">{{val.cheque[0].chequeDate| date:'dd-MM-yyyy'}}</td>\r\n                                <td class=\"col-5\" *ngIf=\"val.cheque[0].bankName; else not\">{{val.cheque[0].bankName}}</td>\r\n                                <td *ngIf=\"val.cheque[0].chequeNo; else not\">{{val.cheque[0].chequeNo}}</td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"category == 'Debit Transactions'\">\r\n            <h1>Debit Transactions</h1>\r\n            <table class=\"table table-bordered\">\r\n                <thead>\r\n                <tr>\r\n                    <th style=\"width: 16.66%;\">Date</th>\r\n                    <th style=\"width: 60%;\">Particulars</th>\r\n                    <th>Mode</th>\r\n                    <th>Debit</th>\r\n                    <th>Type</th>\r\n                    <th>User Id</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody *ngFor=\"let val of accountData\">\r\n                <tr>\r\n                    <td *ngIf=\"isDate(val.account.date); else notDate\">{{val.account.date| date:'dd-MM-yyyy'}}</td>\r\n                    <ng-template #notDate>\r\n                        <td>{{val.account.date}}</td>\r\n                    </ng-template>\r\n                    <td *ngIf=\"val.account.particulars; else not\">{{val.account.particulars}}</td>\r\n                    <td *ngIf=\"val.account.mode; else not\">{{val.account.mode}}</td>\r\n                    <td class=\"table-danger\" *ngIf=\"val.account.debit; else not\">{{val.account.debit| indianCurrency}}</td>\r\n                    <td *ngIf=\"val.account.type; else not\">{{val.account.type}}</td>\r\n                    <td *ngIf=\"val.account.userId; else not\">{{val.account.userId}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td *ngIf=\"val.cheque\" align=\"center\" colspan=\"6\">\r\n                        <h3 style=\"font-weight: bold\">Cheque Details</h3>\r\n                        <table style=\"width: 100%;\">\r\n                            <thead>\r\n                            <tr>\r\n                                <th style=\"width: 16.66%;\">Cheque Date</th>\r\n                                <th style=\"width: 60%;\">Bank Name</th>\r\n                                <th>Cheque Number</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                            <tr>\r\n                                <td *ngIf=\"val.cheque[0].chequeDate; else not\">{{val.cheque[0].chequeDate| date:'dd-MM-yyyy'}}</td>\r\n                                <td class=\"col-5\" *ngIf=\"val.cheque[0].bankName; else not\">{{val.cheque[0].bankName}}</td>\r\n                                <td *ngIf=\"val.cheque[0].chequeNo; else not\">{{val.cheque[0].chequeNo}}</td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"category == 'Expense Deductions'\">\r\n            <h1 id=\"subDetail\">Expense Details</h1>\r\n            <table class=\"table table-bordered\">\r\n                <thead>\r\n                <tr id=\"headers\">\r\n                    <th style=\"width: 16.66%;\">Date</th>\r\n                    <th style=\"width: 60%;\">Particulars</th>\r\n                    <th>Mode</th>\r\n                    <th>Credit</th>\r\n                    <th>Debit</th>\r\n                    <th>User Id</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody *ngFor=\"let val of accountData\">\r\n                <tr>\r\n                    <td *ngIf=\"isDate(val.account.date); else notDate\" id=\"date\">{{val.account.date| date:'dd-MM-yyyy'}}</td>\r\n                    <ng-template #notDate>\r\n                        <td>{{val.account.date}}</td>\r\n                    </ng-template>\r\n                    <td *ngIf=\"val.account.particulars; else not\">{{val.account.particulars}}</td>\r\n                    <td *ngIf=\"val.account.mode; else not\">{{val.account.mode}}</td>\r\n                    <td class=\"table-success\" *ngIf=\"val.account.credit; else not\">{{val.account.credit| indianCurrency}}</td>\r\n                    <td class=\"table-danger\" *ngIf=\"val.account.debit; else not\" id=\"debit\">{{val.account.debit| indianCurrency}}</td>\r\n                    <td *ngIf=\"val.account.userId; else not\">{{val.account.userId}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td *ngIf=\"val.cheque\" align=\"center\" colspan=\"6\">\r\n                        <h3 style=\"font-weight: bold\">Cheque Details</h3>\r\n                        <table style=\"width: 100%;\">\r\n                            <thead>\r\n                            <tr>\r\n                                <th style=\"width: 16.66%;\">Cheque Date</th>\r\n                                <th style=\"width: 60%;\">Bank Name</th>\r\n                                <th>Cheque Number</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                            <tr>\r\n                                <td *ngIf=\"val.cheque[0].chequeDate; else not\">{{val.cheque[0].chequeDate| date:'dd-MM-yyyy'}}</td>\r\n                                <td class=\"col-5\" *ngIf=\"val.cheque[0].bankName; else not\">{{val.cheque[0].bankName}}</td>\r\n                                <td *ngIf=\"val.cheque[0].chequeNo; else not\">{{val.cheque[0].chequeNo}}</td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </ng-container>\r\n        <ng-container *ngIf=\"category == 'Credit+Debit+Expense Transactions'\">\r\n            <h1>Credit + Debit + Expense Transactions</h1>\r\n            <table class=\"table table-bordered\">\r\n                <thead>\r\n                <tr>\r\n                    <th style=\"width: 16.66%;\">Date</th>\r\n                    <th style=\"width: 60%;\">Particulars</th>\r\n                    <th>Mode</th>\r\n                    <th>Credit</th>\r\n                    <th>Debit</th>\r\n                    <th>Type</th>\r\n                    <th>User Id</th>\r\n                </tr>\r\n                </thead>\r\n                <tbody *ngFor=\"let val of accountData\">\r\n                <tr>\r\n                    <td *ngIf=\"isDate(val.account.date); else notDate\">{{val.account.date| date:'dd-MM-yyyy'}}</td>\r\n                    <ng-template #notDate>\r\n                        <td>{{val.account.date}}</td>\r\n                    </ng-template>\r\n                    <td *ngIf=\"val.account.particulars; else not\">{{val.account.particulars}}</td>\r\n                    <td *ngIf=\"val.account.mode; else not\">{{val.account.mode}}</td>\r\n                    <td class=\"table-success\" *ngIf=\"val.account.credit; else not\">{{val.account.credit| indianCurrency}}</td>\r\n                    <td class=\"table-danger\" *ngIf=\"val.account.debit; else not\">{{val.account.debit| indianCurrency}}</td>\r\n                    <td *ngIf=\"val.account.type; else not\">{{val.account.type}}</td>\r\n                    <td *ngIf=\"val.account.userId; else not\">{{val.account.userId}}</td>\r\n                </tr>\r\n                <tr>\r\n                    <td *ngIf=\"val.cheque\" align=\"center\" colspan=\"7\">\r\n                        <h3 style=\"font-weight: bold\">Cheque Details</h3>\r\n                        <table style=\"width: 100%;\">\r\n                            <thead>\r\n                            <tr>\r\n                                <th style=\"width: 16.66%;\">Cheque Date</th>\r\n                                <th style=\"width: 60%;\">Bank Name</th>\r\n                                <th>Cheque Number</th>\r\n                            </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                            <tr>\r\n                                <td *ngIf=\"val.cheque[0].chequeDate; else not\">{{val.cheque[0].chequeDate| date:'dd-MM-yyyy'}}</td>\r\n                                <td class=\"col-5\" *ngIf=\"val.cheque[0].bankName; else not\">{{val.cheque[0].bankName}}</td>\r\n                                <td *ngIf=\"val.cheque[0].chequeNo; else not\">{{val.cheque[0].chequeNo}}</td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </td>\r\n                </tr>\r\n                </tbody>\r\n            </table>\r\n        </ng-container>\r\n        <br>\r\n        <ng-template #not>\r\n            <td>-</td>\r\n        </ng-template>\r\n    </mat-dialog-content>\r\n</div>\r\n<mat-dialog-actions align=\"end\">\r\n    <button class=\"btn-danger\" mat-button mat-dialog-close>Cancel</button>\r\n    <button class=\"btn-success\" mat-button (click)=\"onConfirmClick()\" cdkFocusInitial>Download</button>\r\n</mat-dialog-actions>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-all/upload-all.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload-all/upload-all.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard>\r\n    <sb-dashboard-head title=\"{{'Accountant.Pages.Upload'| translate}}\"></sb-dashboard-head>\r\n    <hr class=\"rounded\">\r\n    <br>\r\n    <div class=\"row\">\r\n        <div class=\"col-sm-2\"></div>\r\n        <div class=\"col\">\r\n            <button class=\"btn-primary\" (click)=\"showEmployeeAccountInfo()\">{{'Accountant.Tables.CreateEmp'| translate}}</button>\r\n        </div>\r\n        <div class=\"col\">\r\n            <button class=\"btn-primary\" (click)=\"showBankAccountInfo()\">{{'Accountant.Tables.CreateBank'| translate}}</button>\r\n        </div>\r\n        <div class=\"col\">\r\n            <button class=\"btn-primary\" (click)=\"showReportInfo()\">{{'Accountant.Tables.Generate'| translate}}</button>\r\n        </div>\r\n        <div class=\"col-sm-2\"></div>\r\n    </div>\r\n    <br>\r\n    <br>\r\n    <div class=\"row\" *ngIf=\"employeeAccount\">\r\n        <div class=\"col-xl-2 col-md-1\"></div>\r\n        <div class=\"col-xl-8 col-md-10\">\r\n            <sb-card>\r\n                <div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{'Accountant.Tables.CreateEmp'| translate}}</div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <form [formGroup]=\"employeeForm\" (ngSubmit)=\"send()\">\r\n                        <table class=\"table table-striped\">\r\n                            <tbody>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.EmployeeNo'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"number form-control\" formControlName=\"employeeId\" required />\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('employeeId').hasError('required')\">Required!</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.EmployeeName'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"text\" formControlName=\"employeeName\" required />\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('employeeName').hasError('required')\">Required!</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.Father'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"text\" formControlName=\"fatherName\" />\r\n                                    </label>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.PermAddress'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"text\" formControlName=\"permAddress\" />\r\n                                    </label>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.SameAddress'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"checkbox\" (click)=\"sameAddress($event)\" />\r\n                                    </label>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.CurrAddress'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"text\" formControlName=\"currAddress\" />\r\n                                    </label>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.Email'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"email\" formControlName=\"email\" />\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('email').hasError('email')\">Provide valid email</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.MobNo'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"number\" formControlName=\"mobileNo\" minlength=\"10\" maxlength=\"10\" />\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('mobileNo').hasError('min')\">Number should be of 10 digits</div>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('mobileNo').hasError('max')\">Number should be of 10 digits</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.AltMobNo'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"number\" formControlName=\"altMobileNo\" minlength=\"10\" maxlength=\"10\" />\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('altMobileNo').hasError('min')\">Number should be of 10 digits</div>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('altMobileNo').hasError('max')\">Number should be of 10 digits</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.Landline'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"number\" formControlName=\"landlineNo\" />\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('landlineNo').hasError('pattern')\">Invalid Number!</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.PAN'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"number\" formControlName=\"pan\" />\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('pan').hasError('pattern')\">Invalid Number!</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.Aadhar'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"number\" formControlName=\"aadharNo\" />\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('aadharNo').hasError('pattern')\">Invalid Number!</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.EnrollDate'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"date\" formControlName=\"enrollDate\" required/>\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('enrollDate').hasError('required')\">Required!</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.Fee'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"number\" formControlName=\"amount\" required/>\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('amount').hasError('required')\">Required!</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.Mode' | translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <select class=\"custom-select\" formControlName=\"type\" required>\r\n                                            <option>{{'Accountant.Tables.Cash' | translate}}</option>\r\n                                            <option>{{'Accountant.Tables.Cheque' | translate}}</option>\r\n                                        </select>\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('type').hasError('required')\">Required!</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr *ngIf=\"employeeForm.get('type').value == 'Cheque';\">\r\n                                <td>{{'Accountant.Tables.BankName' | translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <select class=\"custom-select\" formControlName=\"bankName\">\r\n                                            <option *ngFor=\"let val of bankList\">{{val.bankName}}</option>\r\n                                        </select>\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('bankName').hasError('required')\">Required!</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr *ngIf=\"employeeForm.get('type').value == 'Cheque'\">\r\n                                <td>{{'Accountant.Tables.ChequeDate' | translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"date\" formControlName=\"chequeDate\"/>\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('chequeDate').hasError('required')\">Required!</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr *ngIf=\"employeeForm.get('type').value == 'Cheque'\">\r\n                                <td>{{'Accountant.Tables.ChequeNo' | translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"text\" formControlName=\"chequeNo\"/>\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('chequeNo').hasError('required')\">Required!</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.Remark'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"text\" formControlName=\"purpose\" maxlength=\"1000\"/>\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('purpose').hasError('required')\">Required!</div>\r\n                                </td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <button type=\"submit\">{{'Accountant.Tables.Submit'| translate}}</button>\r\n                    </form>\r\n                </div>\r\n            </sb-card>\r\n        </div>\r\n        <div class=\"col-xl-2 col-md-1\"></div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"report\">\r\n        <div class=\"col-xl-2 col-md-1\"></div>\r\n        <div class=\"col-xl-8 col-md-10\">\r\n            <sb-card>\r\n                <div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{'Accountant.Tables.Generate'| translate}}</div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <form [formGroup]=\"reportForm\" (ngSubmit)=\"openDialog()\">\r\n                        <table class=\"table table-striped\" id=\"content\">\r\n                        <tbody>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.Start'| translate}}</td>\r\n                            <td>\r\n                                <label>\r\n                                    <input type=\"date\" formControlName=\"startDate\"/>\r\n                                </label>\r\n                                <div class=\"alert alert-danger error-box\" *ngIf=\"reportForm.get('startDate').hasError('required')\">Required!</div>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.End'| translate}}</td>\r\n                            <td>\r\n                                <label>\r\n                                    <input type=\"date\" formControlName=\"endDate\"/>\r\n                                </label>\r\n                                <div class=\"alert alert-danger error-box\" *ngIf=\"reportForm.get('endDate').hasError('required')\">Required!</div>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.Category'| translate}}</td>\r\n                            <td>\r\n                                <label>\r\n                                    <select class=\"custom-select\" formControlName=\"category\">\r\n                                        <option>{{'Accountant.Tables.LoanRecord'| translate}}</option>\r\n                                        <option>{{'Accountant.Tables.CreditRecord'| translate}}</option>\r\n                                        <option>{{'Accountant.Tables.DebitRecord'| translate}}</option>\r\n                                        <option>{{'Accountant.Tables.ExpenseRecord'| translate}}</option>\r\n                                        <option>{{'Accountant.Tables.CdeRecord'| translate}}</option>\r\n                                        <option>{{'Accountant.Tables.CashRecord'| translate}}</option>\r\n                                        <option>{{'Accountant.Tables.ChequeRecord'| translate}}</option>\r\n                                    </select>\r\n                                </label>\r\n                                <div class=\"alert alert-danger error-box\" *ngIf=\"reportForm.get('category').hasError('required')\">Required!</div>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                        <button type=\"submit\" [disabled]=\"!this.reportForm.valid\">{{'Accountant.Tables.Submit'| translate}}</button>\r\n                    </form>\r\n                </div>\r\n            </sb-card>\r\n        </div>\r\n        <div class=\"col-xl-2 col-md-1\"></div>\r\n    </div>\r\n    <div class=\"row\" *ngIf=\"bankAccount\">\r\n        <div class=\"col-xl-2 col-md-1\"></div>\r\n        <div class=\"col-xl-8 col-md-10\">\r\n            <sb-card>\r\n                <div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{'Accountant.Tables.CreateBank'| translate}}</div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <form [formGroup]=\"bankForm\" (ngSubmit)=\"sendBankData()\">\r\n                        <table class=\"table table-striped\">\r\n                        <tbody>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.BankName' | translate}}</td>\r\n                            <td>\r\n                                <label>\r\n                                    <input type=\"text\" formControlName=\"bankName\" required />\r\n                                </label>\r\n                                <div class=\"alert alert-danger error-box\" *ngIf=\"bankForm.get('bankName').hasError('required')\">Required!</div>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.Address' | translate}}</td>\r\n                            <td>\r\n                                <label>\r\n                                    <input type=\"text\" class=\"form-control\" maxlength=\"1000\" formControlName=\"bankAddress\"/>\r\n                                </label>\r\n                                <div class=\"alert alert-danger error-box\" *ngIf=\"bankForm.get('bankAddress').hasError('required')\">Required!</div>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.AccountNo' | translate}}</td>\r\n                            <td>\r\n                                <label>\r\n                                    <input type=\"number\" class=\"form-control\" formControlName=\"accountNo\" pattern=\"^\\d{9,18}$\"/>\r\n                                </label>\r\n                                <div class=\"alert alert-danger error-box\" *ngIf=\"bankForm.get('accountNo').hasError('required')\">Required!</div>\r\n                                <div class=\"alert alert-danger error-box\" *ngIf=\"bankForm.get('accountNo').hasError('pattern')\">Length should be from 9 to 18</div>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.TypeAccount' | translate}}</td>\r\n                            <td>\r\n                                <label>\r\n                                    <select class=\"custom-select form-control\" required formControlName=\"accountType\">\r\n                                        <option>{{'Accountant.Tables.SavingAcc' | translate}}</option>\r\n                                        <option>{{'Accountant.Tables.Current' | translate}}</option>\r\n                                    </select>\r\n                                </label>\r\n                                <div class=\"alert alert-danger error-box\" *ngIf=\"bankForm.get('accountType').hasError('required')\">Required!</div>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.Nickname' | translate}}</td>\r\n                            <td>\r\n                                <label>\r\n                                    <input type=\"text\" formControlName=\"nickName\" maxlength=\"12\" required/>\r\n                                </label>\r\n                                <div class=\"alert alert-danger error-box\" *ngIf=\"bankForm.get('nickName').hasError('required')\">Required!</div>\r\n                            </td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.Code' | translate}}</td>\r\n                            <td>\r\n                                <label>\r\n                                    <input type=\"text\" formControlName=\"code\" required pattern=\"^[A-Z]{4}[0][A-Z0-9]{6}$\" minlength=\"11\" maxlength=\"11\" />\r\n                                </label>\r\n                                <div class=\"alert alert-danger error-box\" *ngIf=\"bankForm.get('code').hasError('required')\">Required!</div>\r\n                                <div class=\"alert alert-danger error-box\" *ngIf=\"bankForm.get('code').hasError('pattern')\">Invalid Format!</div>\r\n                                <div class=\"alert alert-danger error-box\" *ngIf=\"bankForm.get('code').hasError('minlength')\">Minimum Length should be 11</div>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                        <button type=\"submit\" [disabled]=\"!this.bankForm.valid\">{{'Accountant.Tables.Submit'| translate}}</button>\r\n                    </form>\r\n                </div>\r\n            </sb-card>\r\n        </div>\r\n        <div class=\"col-xl-2 col-md-1\"></div>\r\n    </div>\r\n</sb-layout-dashboard>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/upload-all/dialog/dialog.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/upload-all/dialog/dialog.component.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC1hbGwvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/upload-all/dialog/dialog.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/upload-all/dialog/dialog.component.ts ***!
  \*******************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5__);






pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5___default.a.pdfMake.vfs;
let DialogComponent = class DialogComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.start = '';
        this.end = '';
        this.accountData = [];
        this.loanData = [];
        this.category = '';
        console.log(data);
        if (data) {
            this.accountData = data.accountData || this.accountData;
            this.loanData = data.loan || this.loanData;
            this.category = data.category || this.category;
            this.start = data.start || this.start;
            this.end = data.end || this.end;
        }
    }
    createLoanBody(data) {
        const body = [];
        const columns = [
            { text: 'Loan Date', style: 'tableHeader' },
            { text: 'Loan Amount', style: 'tableHeader' },
            { text: 'Loan Duration', style: 'tableHeader' },
            { text: 'Loan Type', style: 'tableHeader' },
            { text: 'Close Loan', style: 'tableHeader' },
            { text: 'Closure Status', style: 'tableHeader' },
            { text: 'Date of Loan Closure', style: 'tableHeader' },
            { text: 'User Id', style: 'tableHeader' },
        ];
        body.push(columns);
        data.forEach(val => {
            if (this.isDate(val.loanData.date)) {
                if (this.isDate(val.loanData.dateOfClosure)) {
                    if (val.loanData.closeLoan === 0) {
                        body.push([
                            // @ts-ignore
                            moment__WEBPACK_IMPORTED_MODULE_3__(val.loanData.date).format('DD-MM-YYYY'),
                            val.loanData.loanAmount.toString(),
                            val.loanData.loanDuration.toString(),
                            val.loanData.loanType.toString(),
                            'No',
                            val.loanData.closeStatus.toString(),
                            // @ts-ignore
                            moment__WEBPACK_IMPORTED_MODULE_3__(val.loanData.dateOfClosure).format('DD-MM-YYYY'),
                            val.loanData.userId,
                        ]);
                    }
                    else {
                        body.push([
                            // @ts-ignore
                            moment__WEBPACK_IMPORTED_MODULE_3__(val.loanData.date).format('DD-MM-YYYY'),
                            val.loanData.loanAmount.toString(),
                            val.loanData.loanDuration.toString(),
                            val.loanData.loanType.toString(),
                            'Yes',
                            val.loanData.closeStatus.toString(),
                            // @ts-ignore
                            moment__WEBPACK_IMPORTED_MODULE_3__(val.loanData.dateOfClosure).format('DD-MM-YYYY'),
                            val.loanData.userId,
                        ]);
                    }
                }
                else {
                    if (val.loanData.closeLoan === 0) {
                        body.push([
                            // @ts-ignore
                            moment__WEBPACK_IMPORTED_MODULE_3__(val.loanData.date).format('DD-MM-YYYY'),
                            val.loanData.loanAmount.toString(),
                            val.loanData.loanDuration.toString(),
                            val.loanData.loanType.toString(),
                            'No',
                            val.loanData.closeStatus,
                            val.loanData.dateOfClosure,
                            val.loanData.userId,
                        ]);
                    }
                    else {
                        body.push([
                            // @ts-ignore
                            moment__WEBPACK_IMPORTED_MODULE_3__(val.loanData.date).format('DD-MM-YYYY'),
                            val.loanData.loanAmount.toString(),
                            val.loanData.loanDuration.toString(),
                            val.loanData.loanType.toString(),
                            'Yes',
                            val.loanData.closeStatus,
                            val.loanData.dateOfClosure,
                            val.loanData.userId,
                        ]);
                    }
                }
            }
            else {
                if (this.isDate(val.loanData.dateOfClosure)) {
                    if (val.loanData.closeLoan === 0) {
                        body.push([
                            val.loanData.date.toString(),
                            val.loanData.loanAmount.toString(),
                            val.loanData.loanDuration.toString(),
                            val.loanData.loanType.toString(),
                            'No',
                            val.loanData.closeStatus,
                            // @ts-ignore
                            moment__WEBPACK_IMPORTED_MODULE_3__(val.loanData.dateOfClosure).format('DD-MM-YYYY'),
                            val.loanData.userId,
                        ]);
                    }
                    else {
                        body.push([
                            val.loanData.date.toString(),
                            val.loanData.loanAmount.toString(),
                            val.loanData.loanDuration.toString(),
                            val.loanData.loanType.toString(),
                            'Yes',
                            val.loanData.closeStatus,
                            // @ts-ignore
                            moment__WEBPACK_IMPORTED_MODULE_3__(val.loanData.dateOfClosure).format('DD-MM-YYYY'),
                            val.loanData.userId,
                        ]);
                    }
                }
                else {
                    if (val.loanData.closeLoan === 0) {
                        body.push([
                            val.loanData.date.toString(),
                            val.loanData.loanAmount.toString(),
                            val.loanData.loanDuration.toString(),
                            val.loanData.loanType.toString(),
                            'No',
                            val.loanData.closeStatus,
                            // @ts-ignore
                            moment__WEBPACK_IMPORTED_MODULE_3__(val.loanData.dateOfClosure).format('DD-MM-YYYY'),
                            val.loanData.userId,
                        ]);
                    }
                    else {
                        body.push([
                            val.loanData.date.toString(),
                            val.loanData.loanAmount.toString(),
                            val.loanData.loanDuration.toString(),
                            val.loanData.loanType.toString(),
                            'Yes',
                            val.loanData.closeStatus,
                            // @ts-ignore
                            moment__WEBPACK_IMPORTED_MODULE_3__(val.loanData.dateOfClosure).format('DD-MM-YYYY'),
                            val.loanData.userId,
                        ]);
                    }
                    body.push([
                        val.loanData.date.toString(),
                        val.loanData.loanAmount.toString(),
                        val.loanData.loanDuration.toString(),
                        val.loanData.loanType.toString(),
                        val.loanData.closeLoan.toString(),
                        val.loanData.closeStatus,
                        val.loanData.dateOfClosure,
                        val.loanData.userId,
                    ]);
                }
            }
            if (val.loanBook) {
                body.push([this.createLoanBookTable(val.loanBook), {}, {}, {}, {}, {}, {}, {}]);
            }
            if (val.closeData) {
                body.push([
                    this.createCloseTable(val.closeData, val.loanData, val.chequeData),
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                    {},
                ]);
            }
        });
        console.log(body);
        return body;
    }
    createLoanBookTable(data) {
        return {
            colSpan: 8,
            alignment: 'center',
            style: 'nestedTable',
            table: {
                widths: ['*', '*', '*', '*', '*', '*', '*', '*'],
                headerRows: 1,
                body: this.createLoanBookBody(data),
            },
        };
    }
    createLoanBookBody(data) {
        const body = [];
        body.push([
            { text: 'EMI Details', colSpan: 8, style: 'subheader', alignment: 'center' },
            {},
            {},
            {},
            {},
            {},
            {},
        ]);
        body.push([
            { text: 'EMI Date', colSpan: 2, style: 'tableHeader', alignment: 'center' },
            {},
            { text: 'Particulars', colSpan: 3, style: 'tableHeader', alignment: 'center' },
            {},
            {},
            { text: 'EMI Paid', colSpan: 3, style: 'tableHeader', alignment: 'center' },
            {},
            {},
        ]);
        data.forEach(val => {
            console.log(val);
            if (this.isDate(val.date)) {
                body.push([
                    {
                        // @ts-ignore
                        text: moment__WEBPACK_IMPORTED_MODULE_3__(val.date).format('DD-MM-YYYY'),
                        colSpan: 2,
                        alignment: 'center',
                    },
                    {},
                    { text: val.particulars.toString(), colSpan: 3, alignment: 'center' },
                    {},
                    {},
                    { text: val.credit.toString(), colSpan: 3, alignment: 'center' },
                    {},
                    {},
                ]);
            }
            else {
                body.push([
                    { text: val.date.toString(), colSpan: 2, alignment: 'center' },
                    {},
                    { text: val.particulars.toString(), colSpan: 3, alignment: 'center' },
                    {},
                    {},
                    { text: val.credit.toString(), colSpan: 3, alignment: 'center' },
                    {},
                    {},
                ]);
            }
        });
        return body;
    }
    createCloseTable(data, loanData, chequeData) {
        return {
            colSpan: 8,
            alignment: 'center',
            style: 'nestedTable',
            table: {
                widths: ['14.66%', 'auto', '*', '*', '*', '*', '*', 'auto'],
                headerRows: 1,
                body: this.createCloseBody(data, loanData, chequeData),
            },
        };
    }
    createCloseBody(data, loanData, chequeData) {
        const body = [];
        body.push([
            { text: 'Loan Closure Details', colSpan: 8, style: 'subheader', alignment: 'center' },
            {},
            {},
            {},
            {},
            {},
            {},
            {},
        ]);
        if (data[0].mode === 'Cash') {
            body.push([
                { text: 'Date', colSpan: 2, style: 'tableHeader', alignment: 'center' },
                {},
                { text: 'Loan Status', colSpan: 2, style: 'tableHeader', alignment: 'center' },
                {},
                { text: 'Mode of Payment', colSpan: 2, style: 'tableHeader', alignment: 'center' },
                {},
                { text: 'Paid Amount', colSpan: 2, style: 'tableHeader', alignment: 'center' },
                {},
            ]);
            if (this.isDate(data[0].date)) {
                body.push([
                    {
                        // @ts-ignore
                        text: moment__WEBPACK_IMPORTED_MODULE_3__(data[0].date).format('DD-MM-YYYY'),
                        colSpan: 2,
                        alignment: 'center',
                    },
                    {},
                    { text: loanData.closeStatus, colSpan: 2, alignment: 'center' },
                    {},
                    { text: data[0].mode.toString(), colSpan: 2, alignment: 'center' },
                    {},
                    { text: data[0].credit.toString(), colSpan: 2, alignment: 'center' },
                    {},
                ]);
            }
            else {
                body.push([
                    {
                        text: data[0].date.toString(),
                        colSpan: 2,
                        alignment: 'center',
                    },
                    {},
                    { text: loanData.closeStatus, colSpan: 2, alignment: 'center' },
                    {},
                    { text: data[0].mode.toString(), colSpan: 2, alignment: 'center' },
                    {},
                    { text: data[0].credit.toString(), colSpan: 2, alignment: 'center' },
                    {},
                ]);
            }
            return body;
        }
        else {
            body.push([
                { text: 'Date', style: 'tableHeader', alignment: 'center' },
                { text: 'Loan Status', style: 'tableHeader', alignment: 'center' },
                { text: 'Mode of Payment', style: 'tableHeader', alignment: 'center' },
                { text: 'Paid Amount', style: 'tableHeader', alignment: 'center' },
                { text: 'Cheque Date', style: 'tableHeader', alignment: 'center' },
                { text: 'Bank Name', style: 'tableHeader', alignment: 'center' },
                { text: 'Cheque Number', colSpan: 2, style: 'tableHeader', alignment: 'center' },
                {},
            ]);
            if (this.isDate(data[0].date)) {
                if (this.isDate(chequeData[0].chequeDate)) {
                    body.push([
                        {
                            // @ts-ignore
                            text: moment__WEBPACK_IMPORTED_MODULE_3__(data[0].date).format('DD-MM-YYYY'),
                            alignment: 'center',
                        },
                        { text: loanData.closeStatus, alignment: 'center' },
                        { text: data[0].mode.toString(), alignment: 'center' },
                        { text: data[0].credit.toString(), alignment: 'center' },
                        {
                            // @ts-ignore
                            text: moment__WEBPACK_IMPORTED_MODULE_3__(chequeData[0].chequeDate).format('DD-MM-YYYY'),
                            alignment: 'center',
                        },
                        { text: chequeData[0].bankName.toString(), alignment: 'center' },
                        {
                            text: chequeData[0].chequeNo.toString(),
                            colSpan: 2,
                            alignment: 'center',
                        },
                        {},
                    ]);
                }
                else {
                    body.push([
                        {
                            // @ts-ignore
                            text: moment__WEBPACK_IMPORTED_MODULE_3__(data[0].date).format('DD-MM-YYYY'),
                            alignment: 'center',
                        },
                        { text: loanData.closeStatus, alignment: 'center' },
                        { text: data[0].mode.toString(), alignment: 'center' },
                        { text: data[0].credit.toString(), alignment: 'center' },
                        {
                            text: chequeData[0].chequeDate,
                            alignment: 'center',
                        },
                        { text: chequeData[0].bankName.toString(), alignment: 'center' },
                        {
                            text: chequeData[0].chequeNo.toString(),
                            colSpan: 2,
                            alignment: 'center',
                        },
                        {},
                    ]);
                }
            }
            else {
                if (this.isDate(chequeData[0].chequeDate)) {
                    body.push([
                        {
                            text: data[0].date,
                            alignment: 'center',
                        },
                        { text: loanData.closeStatus, alignment: 'center' },
                        { text: data[0].mode.toString(), alignment: 'center' },
                        { text: data[0].credit.toString(), alignment: 'center' },
                        {
                            // @ts-ignore
                            text: moment__WEBPACK_IMPORTED_MODULE_3__(chequeData[0].chequeDate).format('DD-MM-YYYY'),
                            alignment: 'center',
                        },
                        { text: chequeData[0].bankName.toString(), alignment: 'center' },
                        {
                            text: chequeData[0].chequeNo.toString(),
                            colSpan: 2,
                            alignment: 'center',
                        },
                        {},
                    ]);
                }
                else {
                    body.push([
                        {
                            text: data[0].date,
                            alignment: 'center',
                        },
                        { text: loanData.closeStatus, alignment: 'center' },
                        { text: data[0].mode.toString(), alignment: 'center' },
                        { text: data[0].credit.toString(), alignment: 'center' },
                        {
                            text: chequeData[0].chequeDate,
                            alignment: 'center',
                        },
                        { text: chequeData[0].bankName.toString(), alignment: 'center' },
                        {
                            text: chequeData[0].chequeNo.toString(),
                            colSpan: 2,
                            alignment: 'center',
                        },
                        {},
                    ]);
                }
            }
            return body;
        }
    }
    createCashBody(data) {
        const columns = [
            { text: 'Date', style: 'tableHeader' },
            { text: 'Particulars', style: 'tableHeader' },
            { text: 'Credit', style: 'tableHeader', fillColor: '#7CFC00' },
            { text: 'Debit', style: 'tableHeader', fillColor: '#DC143C' },
            { text: 'Type', style: 'tableHeader' },
            { text: 'User Id', style: 'tableHeader' },
        ];
        const body = [];
        body.push(columns);
        data.forEach(val => {
            if (this.isDate(val.date)) {
                if (val.credit === null) {
                    body.push([
                        // @ts-ignore
                        moment__WEBPACK_IMPORTED_MODULE_3__(val.date).format('DD-MM-YYYY'),
                        val.particulars.toString(),
                        { text: '-', fillColor: '#7CFC00' },
                        { text: val.debit, fillColor: '#DC143C' },
                        val.type,
                        val.userId.toString(),
                    ]);
                }
                else {
                    body.push([
                        // @ts-ignore
                        moment__WEBPACK_IMPORTED_MODULE_3__(val.date).format('DD-MM-YYYY'),
                        val.particulars.toString(),
                        { text: val.credit.toString(), fillColor: '#7CFC00' },
                        { text: '-', fillColor: '#DC143C' },
                        val.type,
                        val.userId.toString(),
                    ]);
                }
            }
            else {
                if (val.credit === null) {
                    body.push([
                        val.date,
                        val.particulars.toString(),
                        { text: '-', fillColor: '#7CFC00' },
                        { text: val.debit, fillColor: '#DC143C' },
                        val.type,
                        val.userId.toString(),
                    ]);
                }
                else {
                    body.push([
                        val.date.toString(),
                        val.particulars.toString(),
                        { text: val.credit.toString(), fillColor: '#7CFC00' },
                        { text: '-', fillColor: '#DC143C' },
                        val.type,
                        val.userId.toString(),
                    ]);
                }
            }
        });
        console.log(body);
        return body;
    }
    createChequeTranBody(data) {
        const columns = [
            { text: 'Date', style: 'tableHeader' },
            { text: 'Particulars', style: 'tableHeader' },
            { text: 'Credit', style: 'tableHeader', fillColor: '#7CFC00' },
            { text: 'Debit', style: 'tableHeader', fillColor: '#DC143C' },
            { text: 'Type', style: 'tableHeader' },
            { text: 'User Id', style: 'tableHeader' },
        ];
        const body = [];
        body.push(columns);
        data.forEach(val => {
            if (this.isDate(val.account.date)) {
                if (val.account.credit === null) {
                    body.push([
                        // @ts-ignore
                        moment__WEBPACK_IMPORTED_MODULE_3__(val.account.date).format('DD-MM-YYYY'),
                        val.account.particulars.toString(),
                        { text: '-', fillColor: '#7CFC00' },
                        { text: val.account.debit, fillColor: '#DC143C' },
                        val.account.type,
                        val.account.userId.toString(),
                    ]);
                }
                else {
                    body.push([
                        // @ts-ignore
                        moment__WEBPACK_IMPORTED_MODULE_3__(val.account.date).format('DD-MM-YYYY'),
                        val.account.particulars.toString(),
                        { text: val.account.credit, fillColor: '#7CFC00' },
                        { text: '-', fillColor: '#DC143C' },
                        val.account.type,
                        val.account.userId.toString(),
                    ]);
                }
            }
            else {
                if (val.account.credit === null) {
                    body.push([
                        val.account.date,
                        val.account.particulars.toString(),
                        { text: '-', fillColor: '#7CFC00' },
                        { text: val.account.debit, fillColor: '#DC143C' },
                        val.account.type,
                        val.account.userId.toString(),
                    ]);
                }
                else {
                    body.push([
                        val.account.date.toString(),
                        val.account.particulars.toString(),
                        val.account.mode.toString(),
                        { text: val.account.credit, fillColor: '#7CFC00' },
                        { text: '-', fillColor: '#DC143C' },
                        val.account.type,
                        val.account.userId.toString(),
                    ]);
                }
            }
            if (val.cheque) {
                body.push([this.createChequeTable(val.cheque), {}, {}, {}, {}, {}]);
            }
        });
        console.log(body);
        return body;
    }
    createCreditBody(data) {
        const body = [];
        const columns = [
            { text: 'Date', style: 'tableHeader' },
            { text: 'Particulars', style: 'tableHeader' },
            { text: 'Mode', style: 'tableHeader' },
            { text: 'Credit', style: 'tableHeader', fillColor: '#7CFC00' },
            { text: 'Type', style: 'tableHeader' },
            { text: 'User Id', style: 'tableHeader' },
        ];
        body.push(columns);
        data.forEach(val => {
            if (this.isDate(val.account.date)) {
                if (val.account.credit === null) {
                    body.push([
                        // @ts-ignore
                        moment__WEBPACK_IMPORTED_MODULE_3__(val.account.date).format('DD-MM-YYYY'),
                        val.account.particulars.toString(),
                        val.account.mode,
                        { text: '-', fillColor: '#7CFC00' },
                        val.account.type,
                        val.account.userId.toString(),
                    ]);
                }
                else {
                    body.push([
                        // @ts-ignore
                        moment__WEBPACK_IMPORTED_MODULE_3__(val.account.date).format('DD-MM-YYYY'),
                        val.account.particulars.toString(),
                        val.account.mode,
                        { text: val.account.credit.toString(), fillColor: '#7CFC00' },
                        val.account.type,
                        val.account.userId.toString(),
                    ]);
                }
            }
            else {
                if (val.account.credit === null) {
                    body.push([
                        val.account.date,
                        val.account.particulars.toString(),
                        val.account.mode,
                        { text: '-', fillColor: '#7CFC00' },
                        val.account.type,
                        val.account.userId.toString(),
                    ]);
                }
                else {
                    body.push([
                        val.account.date.toString(),
                        val.account.particulars.toString(),
                        val.account.mode,
                        { text: val.account.credit.toString(), fillColor: '#7CFC00' },
                        val.account.type,
                        val.account.userId.toString(),
                    ]);
                }
            }
            if (val.cheque) {
                body.push([this.createChequeTable(val.cheque), {}, {}, {}, {}, {}]);
            }
        });
        console.log(body);
        return body;
    }
    createDebitBody(data) {
        const body = [];
        const columns = [
            { text: 'Date', style: 'tableHeader' },
            { text: 'Particulars', style: 'tableHeader' },
            { text: 'Mode', style: 'tableHeader' },
            { text: 'Debit', style: 'tableHeader', fillColor: '#DC143C' },
            { text: 'Type', style: 'tableHeader' },
            { text: 'User Id', style: 'tableHeader' },
        ];
        body.push(columns);
        data.forEach(val => {
            if (this.isDate(val.account.date)) {
                if (val.account.debit === null) {
                    body.push([
                        // @ts-ignore
                        moment__WEBPACK_IMPORTED_MODULE_3__(val.account.date).format('DD-MM-YYYY'),
                        val.account.particulars.toString(),
                        val.account.mode.toString(),
                        { text: '-', fillColor: '#DC143C' },
                        val.account.type,
                        val.account.userId.toString(),
                    ]);
                }
                else {
                    body.push([
                        // @ts-ignore
                        moment__WEBPACK_IMPORTED_MODULE_3__(val.account.date).format('DD-MM-YYYY'),
                        val.account.particulars.toString(),
                        val.account.mode.toString(),
                        { text: val.account.debit.toString(), fillColor: '#DC143C' },
                        val.account.type,
                        val.account.userId.toString(),
                    ]);
                }
            }
            else {
                if (val.account.debit === null) {
                    body.push([
                        val.account.date,
                        val.account.particulars.toString(),
                        val.account.mode.toString(),
                        { text: '-', fillColor: '#DC143C' },
                        val.account.type,
                        val.account.userId.toString(),
                    ]);
                }
                else {
                    body.push([
                        val.account.date.toString(),
                        val.account.particulars.toString(),
                        val.account.mode.toString(),
                        { text: val.account.debit.toString(), fillColor: '#DC143C' },
                        val.account.type,
                        val.account.userId.toString(),
                    ]);
                }
            }
            if (val.cheque) {
                body.push([this.createChequeTable(val.cheque), {}, {}, {}, {}, {}]);
            }
        });
        console.log(body);
        return body;
    }
    createBody(data) {
        const body = [];
        const columns = [
            { text: 'Date', style: 'tableHeader' },
            { text: 'Particulars', style: 'tableHeader' },
            { text: 'Mode', style: 'tableHeader' },
            { text: 'Credit', style: 'tableHeader', fillColor: '#7CFC00' },
            { text: 'Debit', style: 'tableHeader', fillColor: '#DC143C' },
            { text: 'User Id', style: 'tableHeader' },
        ];
        body.push(columns);
        data.forEach(val => {
            if (this.isDate(val.account.date)) {
                if (val.account.credit === null) {
                    body.push([
                        // @ts-ignore
                        moment__WEBPACK_IMPORTED_MODULE_3__(val.account.date).format('DD-MM-YYYY'),
                        val.account.particulars.toString(),
                        val.account.mode.toString(),
                        { text: '-', fillColor: '#7CFC00' },
                        { text: val.account.debit, fillColor: '#DC143C' },
                        val.account.userId.toString(),
                    ]);
                }
                else {
                    body.push([
                        // @ts-ignore
                        moment__WEBPACK_IMPORTED_MODULE_3__(val.account.date).format('DD-MM-YYYY'),
                        val.account.particulars.toString(),
                        val.account.mode.toString(),
                        { text: val.account.credit, fillColor: '#7CFC00' },
                        { text: '-', fillColor: '#DC143C' },
                        val.account.userId.toString(),
                    ]);
                }
            }
            else {
                if (val.account.credit === null) {
                    body.push([
                        val.account.date,
                        val.account.particulars.toString(),
                        val.account.mode.toString(),
                        { text: '-', fillColor: '#7CFC00' },
                        { text: val.account.debit, fillColor: '#DC143C' },
                        val.account.userId.toString(),
                    ]);
                }
                else {
                    body.push([
                        val.account.date.toString(),
                        val.account.particulars.toString(),
                        val.account.mode.toString(),
                        { text: val.account.credit, fillColor: '#7CFC00' },
                        { text: '-', fillColor: '#DC143C' },
                        val.account.userId.toString(),
                    ]);
                }
            }
            if (val.cheque) {
                body.push([this.createChequeTable(val.cheque), {}, {}, {}, {}, {}]);
            }
        });
        console.log(body);
        return body;
    }
    createChequeTable(data) {
        return {
            colSpan: 6,
            alignment: 'center',
            style: 'nestedTable',
            table: {
                widths: ['16.66%', '*', '16.66%', '*', '16.66%', '*'],
                headerRows: 1,
                body: this.createChequeBody(data),
            },
        };
    }
    createChequeBody(data) {
        const body = [];
        body.push([
            { text: 'Cheque Details', colSpan: 6, style: 'subheader', alignment: 'center' },
            {},
            {},
            {},
            {},
            {},
        ]);
        body.push([
            { text: 'Cheque Date', colSpan: 2, style: 'tableHeader', alignment: 'center' },
            {},
            { text: 'Bank Name', colSpan: 2, style: 'tableHeader', alignment: 'center' },
            {},
            { text: 'Cheque Number', colSpan: 2, style: 'tableHeader', alignment: 'center' },
            {},
        ]);
        data.forEach(val => {
            if (this.isDate(val.chequeDate)) {
                body.push([
                    {
                        // @ts-ignore
                        text: moment__WEBPACK_IMPORTED_MODULE_3__(val.chequeDate.toString()).format('DD-MM-YYYY'),
                        colSpan: 2,
                        alignment: 'center',
                    },
                    {},
                    { text: val.bankName.toString(), colSpan: 2, alignment: 'center' },
                    {},
                    { text: val.chequeNo.toString(), colSpan: 2, alignment: 'center' },
                    {},
                ]);
            }
            else {
                body.push([
                    { text: val.chequeDate.toString(), colSpan: 2, alignment: 'center' },
                    {},
                    { text: val.bankName.toString(), colSpan: 2, alignment: 'center' },
                    {},
                    { text: val.chequeNo.toString(), colSpan: 2, alignment: 'center' },
                    {},
                ]);
            }
        });
        return body;
    }
    createCDEBody(data) {
        const body = [];
        const columns = [
            { text: 'Date', style: 'tableHeader' },
            { text: 'Particulars', style: 'tableHeader' },
            { text: 'Mode', style: 'tableHeader' },
            { text: 'Credit', style: 'tableHeader', fillColor: '#7CFC00' },
            { text: 'Debit', style: 'tableHeader', fillColor: '#DC143C' },
            { text: 'Type', style: 'tableHeader' },
            { text: 'User Id', style: 'tableHeader' },
        ];
        body.push(columns);
        data.forEach(val => {
            if (this.isDate(val.account.date)) {
                if (val.account.credit === null) {
                    body.push([
                        // @ts-ignore
                        moment__WEBPACK_IMPORTED_MODULE_3__(val.account.date).format('DD-MM-YYYY'),
                        val.account.particulars.toString(),
                        val.account.mode,
                        { text: '-', fillColor: '#7CFC00' },
                        { text: val.account.debit, fillColor: '#DC143C' },
                        val.account.type,
                        val.account.userId.toString(),
                    ]);
                }
                else {
                    body.push([
                        // @ts-ignore
                        moment__WEBPACK_IMPORTED_MODULE_3__(val.account.date).format('DD-MM-YYYY'),
                        val.account.particulars.toString(),
                        val.account.mode,
                        { text: val.account.credit, fillColor: '#7CFC00' },
                        { text: '-', fillColor: '#DC143C' },
                        val.account.type,
                        val.account.userId.toString(),
                    ]);
                }
            }
            else {
                if (val.account.credit === null) {
                    body.push([
                        val.account.date,
                        val.account.particulars.toString(),
                        val.account.mode,
                        { text: '-', fillColor: '#7CFC00' },
                        { text: val.account.debit, fillColor: '#DC143C' },
                        val.account.type,
                        val.account.userId.toString(),
                    ]);
                }
                else {
                    body.push([
                        val.account.date.toString(),
                        val.account.particulars.toString(),
                        val.account.mode,
                        { text: val.account.credit, fillColor: '#7CFC00' },
                        { text: '-', fillColor: '#DC143C' },
                        val.account.type,
                        val.account.userId.toString(),
                    ]);
                }
            }
            if (val.cheque) {
                body.push([this.createCDEChequeTable(val.cheque), {}, {}, {}, {}, {}]);
            }
        });
        console.log(body);
        return body;
    }
    createCDEChequeTable(data) {
        return {
            colSpan: 7,
            alignment: 'center',
            style: 'nestedTable',
            table: {
                widths: ['14.66%', '*', '14.66%', '*', '*', '14.66%', '*'],
                headerRows: 1,
                body: this.createCDEChequeBody(data),
            },
        };
    }
    createCDEChequeBody(data) {
        const body = [];
        body.push([
            { text: 'Cheque Details', colSpan: 7, style: 'subheader', alignment: 'center' },
            {},
            {},
            {},
            {},
            {},
            {},
        ]);
        body.push([
            { text: 'Cheque Date', colSpan: 2, style: 'tableHeader', alignment: 'center' },
            {},
            { text: 'Bank Name', colSpan: 3, style: 'tableHeader', alignment: 'center' },
            {},
            {},
            { text: 'Cheque Number', colSpan: 2, style: 'tableHeader', alignment: 'center' },
            {},
        ]);
        data.forEach(val => {
            if (this.isDate(val.chequeDate)) {
                body.push([
                    {
                        // @ts-ignore
                        text: moment__WEBPACK_IMPORTED_MODULE_3__(val.chequeDate.toString()).format('DD-MM-YYYY'),
                        colSpan: 2,
                        alignment: 'center',
                    },
                    {},
                    { text: val.bankName.toString(), colSpan: 3, alignment: 'center' },
                    {},
                    {},
                    { text: val.chequeNo.toString(), colSpan: 2, alignment: 'center' },
                    {},
                ]);
            }
            else {
                body.push([
                    { text: val.chequeDate.toString(), colSpan: 2, alignment: 'center' },
                    {},
                    { text: val.bankName.toString(), colSpan: 3, alignment: 'center' },
                    {},
                    {},
                    { text: val.chequeNo.toString(), colSpan: 2, alignment: 'center' },
                    {},
                ]);
            }
        });
        return body;
    }
    onConfirmClick() {
        if (this.category === 'Loan Disbursal Records') {
            // @ts-ignore
            const docDefinition = {
                pageSize: 'A4',
                pageOrientation: 'landscape',
                pageMargins: [20, 20, 20, 30],
                content: [
                    { text: this.category, style: 'header', alignment: 'center' },
                    { text: '\n' },
                    { text: '\n' },
                    {
                        style: 'tableExample',
                        table: {
                            widths: ['12%', '*', '*', '*', '*', '*', '*', '*', '*', '*', '15%'],
                            body: [
                                [
                                    {
                                        text: 'Start Date',
                                        style: 'tableHeader',
                                        alignment: 'right ',
                                    },
                                    // @ts-ignore
                                    document.getElementById('start').innerHTML,
                                    {},
                                    {},
                                    {},
                                    {},
                                    {},
                                    {},
                                    {},
                                    {
                                        text: 'End Date',
                                        style: 'tableHeader',
                                        alignment: 'right',
                                    },
                                    // @ts-ignore
                                    document.getElementById('end').innerHTML,
                                ],
                            ],
                        },
                        layout: 'noBorders',
                        alignment: 'center',
                    },
                    { text: '\n' },
                    { text: 'Loan Details', style: 'subheader' },
                    {
                        style: 'tableExample',
                        table: {
                            widths: ['10%', '*', '*', '*', '*', '*', '*', '*'],
                            headerRows: 1,
                            body: this.createLoanBody(this.loanData),
                        },
                    },
                ],
                styles: {
                    header: {
                        fontSize: 18,
                        bold: true,
                        margin: [0, 0, 0, 10],
                    },
                    subheader: {
                        fontSize: 16,
                        bold: true,
                        margin: [0, 10, 0, 5],
                    },
                    tableExample: {
                        margin: [0, 15, 0, 15],
                    },
                    nestedTable: {
                        margin: [5, 5, 5, 5],
                    },
                    tableHeader: {
                        bold: true,
                        fontSize: 13,
                        color: 'black',
                    },
                },
                defaultStyle: {
                    alignment: 'justify',
                },
            };
            // @ts-ignore
            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.createPdf(docDefinition).download('Loan Disbursal Records.pdf');
        }
        else if (this.category === 'All Cash Transactions') {
            // @ts-ignore
            const docDefinition = {
                pageSize: 'A4',
                pageOrientation: 'landscape',
                pageMargins: [20, 20, 20, 30],
                content: [
                    { text: this.category, style: 'header', alignment: 'center' },
                    { text: '\n' },
                    { text: '\n' },
                    {
                        style: 'tableExample',
                        table: {
                            widths: ['12%', '*', '*', '*', '*', '*', '*', '*', '*', '*', '15%'],
                            body: [
                                [
                                    {
                                        text: 'Start Date',
                                        style: 'tableHeader',
                                        alignment: 'right ',
                                    },
                                    // @ts-ignore
                                    document.getElementById('start').innerHTML,
                                    {},
                                    {},
                                    {},
                                    {},
                                    {},
                                    {},
                                    {},
                                    {
                                        text: 'End Date',
                                        style: 'tableHeader',
                                        alignment: 'right',
                                    },
                                    // @ts-ignore
                                    document.getElementById('end').innerHTML,
                                ],
                            ],
                        },
                        layout: 'noBorders',
                        alignment: 'center',
                    },
                    { text: '\n' },
                    { text: 'Cash Transactions', style: 'subheader' },
                    {
                        style: 'tableExample',
                        table: {
                            widths: ['14%', '50%', '*', '*', '*', '*'],
                            headerRows: 1,
                            body: this.createCashBody(this.accountData),
                        },
                    },
                ],
                styles: {
                    header: {
                        fontSize: 18,
                        bold: true,
                        margin: [0, 0, 0, 10],
                    },
                    subheader: {
                        fontSize: 16,
                        bold: true,
                        margin: [0, 10, 0, 5],
                    },
                    tableExample: {
                        margin: [0, 15, 0, 15],
                    },
                    nestedTable: {
                        margin: [5, 5, 5, 5],
                    },
                    tableHeader: {
                        bold: true,
                        fontSize: 13,
                        color: 'black',
                    },
                },
                defaultStyle: {
                    alignment: 'justify',
                },
            };
            // @ts-ignore
            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.createPdf(docDefinition).download('Cash Transactions.pdf');
        }
        else if (this.category === 'All Cheque Transactions') {
            // @ts-ignore
            const docDefinition = {
                pageSize: 'A4',
                pageOrientation: 'landscape',
                pageMargins: [20, 20, 20, 30],
                content: [
                    { text: this.category, style: 'header', alignment: 'center' },
                    { text: '\n' },
                    { text: '\n' },
                    {
                        style: 'tableExample',
                        table: {
                            widths: ['12%', '*', '*', '*', '*', '*', '*', '*', '*', '*', '15%'],
                            body: [
                                [
                                    {
                                        text: 'Start Date',
                                        style: 'tableHeader',
                                        alignment: 'right ',
                                    },
                                    // @ts-ignore
                                    document.getElementById('start').innerHTML,
                                    {},
                                    {},
                                    {},
                                    {},
                                    {},
                                    {},
                                    {},
                                    {
                                        text: 'End Date',
                                        style: 'tableHeader',
                                        alignment: 'right',
                                    },
                                    // @ts-ignore
                                    document.getElementById('end').innerHTML,
                                ],
                            ],
                        },
                        layout: 'noBorders',
                        alignment: 'center',
                    },
                    { text: '\n' },
                    { text: '\n' },
                    { text: 'Cheque Transactions', style: 'subheader' },
                    {
                        style: 'tableExample',
                        table: {
                            widths: ['14%', '50%', '*', '*', '*', '*'],
                            headerRows: 1,
                            body: this.createChequeTranBody(this.accountData),
                        },
                    },
                ],
                styles: {
                    header: {
                        fontSize: 18,
                        bold: true,
                        margin: [0, 0, 0, 10],
                    },
                    subheader: {
                        fontSize: 16,
                        bold: true,
                        margin: [0, 10, 0, 5],
                    },
                    tableExample: {
                        margin: [0, 15, 0, 15],
                    },
                    nestedTable: {
                        margin: [5, 5, 5, 5],
                    },
                    tableHeader: {
                        bold: true,
                        fontSize: 13,
                        color: 'black',
                    },
                },
                defaultStyle: {
                    alignment: 'justify',
                },
            };
            // @ts-ignore
            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.createPdf(docDefinition).download('Cheque Transactions.pdf');
        }
        else if (this.category === 'Credit Transactions') {
            // @ts-ignore
            const docDefinition = {
                pageSize: 'A4',
                pageOrientation: 'landscape',
                pageMargins: [20, 20, 20, 30],
                content: [
                    { text: this.category, style: 'header', alignment: 'center' },
                    { text: '\n' },
                    { text: '\n' },
                    {
                        style: 'tableExample',
                        table: {
                            widths: ['12%', '*', '*', '*', '*', '*', '*', '*', '*', '*', '15%'],
                            body: [
                                [
                                    {
                                        text: 'Start Date',
                                        style: 'tableHeader',
                                        alignment: 'right ',
                                    },
                                    // @ts-ignore
                                    document.getElementById('start').innerHTML,
                                    {},
                                    {},
                                    {},
                                    {},
                                    {},
                                    {},
                                    {},
                                    {
                                        text: 'End Date',
                                        style: 'tableHeader',
                                        alignment: 'right',
                                    },
                                    // @ts-ignore
                                    document.getElementById('end').innerHTML,
                                ],
                            ],
                        },
                        layout: 'noBorders',
                        alignment: 'center',
                    },
                    { text: '\n' },
                    { text: 'Credit Transactions', style: 'subheader' },
                    {
                        style: 'tableExample',
                        table: {
                            widths: ['*', '50%', '*', '*', '*', '*'],
                            headerRows: 1,
                            body: this.createCreditBody(this.accountData),
                        },
                    },
                ],
                styles: {
                    header: {
                        fontSize: 18,
                        bold: true,
                        margin: [0, 0, 0, 10],
                    },
                    subheader: {
                        fontSize: 16,
                        bold: true,
                        margin: [0, 10, 0, 5],
                    },
                    tableExample: {
                        margin: [0, 15, 0, 15],
                    },
                    nestedTable: {
                        margin: [5, 5, 5, 5],
                    },
                    tableHeader: {
                        bold: true,
                        fontSize: 13,
                        color: 'black',
                    },
                },
                defaultStyle: {
                    alignment: 'justify',
                },
            };
            // @ts-ignore
            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.createPdf(docDefinition).download('Credit Transactions.pdf');
        }
        else if (this.category === 'Debit Transactions') {
            // @ts-ignore
            const docDefinition = {
                pageSize: 'A4',
                pageOrientation: 'landscape',
                pageMargins: [20, 20, 20, 30],
                content: [
                    { text: this.category, style: 'header', alignment: 'center' },
                    { text: '\n' },
                    { text: '\n' },
                    {
                        style: 'tableExample',
                        table: {
                            widths: ['12%', '*', '*', '*', '*', '*', '*', '*', '*', '*', '15%'],
                            body: [
                                [
                                    {
                                        text: 'Start Date',
                                        style: 'tableHeader',
                                        alignment: 'right ',
                                    },
                                    // @ts-ignore
                                    document.getElementById('start').innerHTML,
                                    {},
                                    {},
                                    {},
                                    {},
                                    {},
                                    {},
                                    {},
                                    {
                                        text: 'End Date',
                                        style: 'tableHeader',
                                        alignment: 'right',
                                    },
                                    // @ts-ignore
                                    document.getElementById('end').innerHTML,
                                ],
                            ],
                        },
                        layout: 'noBorders',
                        alignment: 'center',
                    },
                    { text: '\n' },
                    { text: 'Debit Transactions', style: 'subheader' },
                    {
                        style: 'tableExample',
                        table: {
                            widths: ['*', '50%', '*', '*', '*', '*'],
                            headerRows: 1,
                            body: this.createDebitBody(this.accountData),
                        },
                    },
                ],
                styles: {
                    header: {
                        fontSize: 18,
                        bold: true,
                        margin: [0, 0, 0, 10],
                    },
                    subheader: {
                        fontSize: 16,
                        bold: true,
                        margin: [0, 10, 0, 5],
                    },
                    tableExample: {
                        margin: [0, 15, 0, 15],
                    },
                    nestedTable: {
                        margin: [5, 5, 5, 5],
                    },
                    tableHeader: {
                        bold: true,
                        fontSize: 13,
                        color: 'black',
                    },
                },
                defaultStyle: {
                    alignment: 'justify',
                },
            };
            // @ts-ignore
            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.createPdf(docDefinition).download('Debit Transactions.pdf');
        }
        else if (this.category === 'Expense Deductions') {
            // @ts-ignore
            const docDefinition = {
                pageSize: 'A4',
                pageOrientation: 'landscape',
                pageMargins: [20, 20, 20, 30],
                content: [
                    { text: this.category, style: 'header', alignment: 'center' },
                    { text: '\n' },
                    { text: '\n' },
                    {
                        style: 'tableExample',
                        table: {
                            widths: ['12%', '*', '*', '*', '*', '*', '*', '*', '*', '*', '15%'],
                            body: [
                                [
                                    {
                                        text: 'Start Date',
                                        style: 'tableHeader',
                                        alignment: 'right ',
                                    },
                                    // @ts-ignore
                                    document.getElementById('start').innerHTML,
                                    {},
                                    {},
                                    {},
                                    {},
                                    {},
                                    {},
                                    {},
                                    {
                                        text: 'End Date',
                                        style: 'tableHeader',
                                        alignment: 'right',
                                    },
                                    // @ts-ignore
                                    document.getElementById('end').innerHTML,
                                ],
                            ],
                        },
                        layout: 'noBorders',
                        alignment: 'center',
                    },
                    { text: '\n' },
                    // @ts-ignore
                    { text: document.getElementById('subDetail').innerText, style: 'subheader' },
                    {
                        style: 'tableExample',
                        table: {
                            widths: ['16.66%', '50%', '*', '*', '*', '*'],
                            headerRows: 1,
                            body: this.createBody(this.accountData),
                        },
                    },
                ],
                styles: {
                    header: {
                        fontSize: 18,
                        bold: true,
                        margin: [0, 0, 0, 10],
                    },
                    subheader: {
                        fontSize: 16,
                        bold: true,
                        margin: [0, 10, 0, 5],
                    },
                    tableExample: {
                        margin: [0, 15, 0, 15],
                    },
                    nestedTable: {
                        margin: [5, 5, 5, 5],
                    },
                    tableHeader: {
                        bold: true,
                        fontSize: 13,
                        color: 'black',
                    },
                },
                defaultStyle: {
                    alignment: 'justify',
                },
            };
            // @ts-ignore
            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.createPdf(docDefinition).download('Expense Deduction Report.pdf');
        }
        else {
            // @ts-ignore
            const docDefinition = {
                pageSize: 'A4',
                pageOrientation: 'landscape',
                pageMargins: [20, 20, 20, 30],
                content: [
                    { text: this.category, style: 'header', alignment: 'center' },
                    { text: '\n' },
                    { text: '\n' },
                    {
                        style: 'tableExample',
                        table: {
                            widths: ['12%', '*', '*', '*', '*', '*', '*', '*', '*', '*', '15%'],
                            body: [
                                [
                                    {
                                        text: 'Start Date',
                                        style: 'tableHeader',
                                        alignment: 'right ',
                                    },
                                    // @ts-ignore
                                    document.getElementById('start').innerHTML,
                                    {},
                                    {},
                                    {},
                                    {},
                                    {},
                                    {},
                                    {},
                                    {
                                        text: 'End Date',
                                        style: 'tableHeader',
                                        alignment: 'right',
                                    },
                                    // @ts-ignore
                                    document.getElementById('end').innerHTML,
                                ],
                            ],
                        },
                        layout: 'noBorders',
                        alignment: 'center',
                    },
                    { text: '\n' },
                    { text: 'Credit + Debit + Expense Transactions', style: 'subheader' },
                    {
                        style: 'tableExample',
                        table: {
                            widths: ['*', '50%', '*', '*', '*', '*', '*'],
                            headerRows: 1,
                            body: this.createCDEBody(this.accountData),
                        },
                    },
                ],
                styles: {
                    header: {
                        fontSize: 18,
                        bold: true,
                        margin: [0, 0, 0, 10],
                    },
                    subheader: {
                        fontSize: 16,
                        bold: true,
                        margin: [0, 10, 0, 5],
                    },
                    tableExample: {
                        margin: [0, 15, 0, 15],
                    },
                    nestedTable: {
                        margin: [5, 5, 5, 5],
                    },
                    tableHeader: {
                        bold: true,
                        fontSize: 13,
                        color: 'black',
                    },
                },
                defaultStyle: {
                    alignment: 'justify',
                },
            };
            // @ts-ignore
            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.createPdf(docDefinition).download('Credit+Debit+Expense Transactions.pdf');
        }
        this.dialogRef.close(true);
    }
    isDate(d) {
        const result = Date.parse(d);
        if (!result)
            return false;
        else
            return true;
    }
};
DialogComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
DialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-dialog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-all/dialog/dialog.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./dialog.component.scss */ "./src/app/upload-all/dialog/dialog.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
], DialogComponent);



/***/ }),

/***/ "./src/app/upload-all/upload-all-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/upload-all/upload-all-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: UploadAllRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadAllRoutingModule", function() { return UploadAllRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _upload_all_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./upload-all.component */ "./src/app/upload-all/upload-all.component.ts");




const routes = [{ path: '', component: _upload_all_component__WEBPACK_IMPORTED_MODULE_3__["UploadAllComponent"] }];
let UploadAllRoutingModule = class UploadAllRoutingModule {
};
UploadAllRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], UploadAllRoutingModule);



/***/ }),

/***/ "./src/app/upload-all/upload-all.component.scss":
/*!******************************************************!*\
  !*** ./src/app/upload-all/upload-all.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".error-box {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkLWFsbC9DOlxcVXNlcnNcXFBSQUtIQVJcXERvY3VtZW50c1xcQW5ndWxhciBQcm9qZWN0XFxLb3NoaW1hXFxTb2NpZXR5X0Jhbmtpbmcvc3JjXFxhcHBcXHVwbG9hZC1hbGxcXHVwbG9hZC1hbGwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VwbG9hZC1hbGwvdXBsb2FkLWFsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC1hbGwvdXBsb2FkLWFsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1ib3gge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxufVxyXG4iLCIuZXJyb3ItYm94IHtcbiAgcGFkZGluZzogMTBweDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/upload-all/upload-all.component.ts":
/*!****************************************************!*\
  !*** ./src/app/upload-all/upload-all.component.ts ***!
  \****************************************************/
/*! exports provided: UploadAllComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadAllComponent", function() { return UploadAllComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _app_upload_all_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/upload-all/dialog/dialog.component */ "./src/app/upload-all/dialog/dialog.component.ts");
/* harmony import */ var _app_upload_all_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/upload-all/services */ "./src/app/upload-all/services/index.ts");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");





// @ts-ignore


let UploadAllComponent = class UploadAllComponent {
    constructor(service, dialog, fb) {
        this.service = service;
        this.dialog = dialog;
        this.fb = fb;
        this.employeeAccount = true;
        this.bankAccount = false;
        this.report = false;
        this.disable = true;
        this.check = null;
        this.employeeForm = this.fb.group({
            employeeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            employeeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            fatherName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            permAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            check: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            currAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email])),
            mobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].max(9999999999)])),
            altMobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].max(9999999999)])),
            landlineNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[0-9]d{2,4}-d{6,8}$')])),
            pan: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')])),
            aadharNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$')])),
            enrollDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            type: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            bankName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            chequeDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            chequeNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            purpose: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
        });
        this.bankForm = this.fb.group({
            bankName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            bankAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            accountNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^\\d{9,18}$')])),
            accountType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            nickName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(11),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[A-Z]{4}[0][A-Z0-9]{6}$'),
            ])),
        });
        this.reportForm = this.fb.group({
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
        });
    }
    ngOnInit() {
        this.service.getBankList().subscribe(result => {
            this.bankList = result;
            console.log(this.bankList);
        });
    }
    send() {
        if (
        // @ts-ignore
        !this.employeeForm.get('employeeId').value ||
            // @ts-ignore
            !this.employeeForm.get('employeeName').value ||
            // @ts-ignore
            !this.employeeForm.get('enrollDate').value ||
            // @ts-ignore
            !this.employeeForm.get('amount').value ||
            // @ts-ignore
            !this.employeeForm.get('type').value ||
            // @ts-ignore
            !this.employeeForm.get('purpose').value) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Oops!',
                text: 'Fill Mandatory Fields!',
                icon: 'error',
            });
        }
        else if (
        // @ts-ignore
        this.employeeForm.get('type').value === 'Cheque' &&
            // @ts-ignore
            (!this.employeeForm.get('chequeDate').value ||
                // @ts-ignore
                !this.employeeForm.get('chequeNo').value ||
                // @ts-ignore
                !this.employeeForm.get('bankName').value)) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Oops!',
                text: 'Fill Mandatory Fields!',
                icon: 'error',
            });
        }
        else {
            let pass = '';
            const str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$';
            for (let i = 1; i <= 5; i++) {
                const char = Math.floor(Math.random() * str.length + 1);
                pass += str.charAt(char);
            }
            // @ts-ignore
            const passw = pass.slice(0, 3) + this.employeeForm.get('employeeName').value.slice(0, 2) + pass.slice(3);
            const data = {
                // @ts-ignore
                userId: this.employeeForm.get('employeeId').value,
                // @ts-ignore
                name: this.employeeForm.get('employeeName').value,
                password: passw,
                // @ts-ignore
                fatherName: this.employeeForm.get('fatherName').value,
                // @ts-ignore
                permanentAddress: this.employeeForm.get('permAddress').value,
                // @ts-ignore
                currentAddress: this.employeeForm.get('currAddress').value,
                // @ts-ignore
                email: this.employeeForm.get('email').value,
                // @ts-ignore
                mobileNo1: this.employeeForm.get('mobileNo').value,
                // @ts-ignore
                mobileNo2: this.employeeForm.get('altMobileNo').value,
                // @ts-ignore
                landline: this.employeeForm.get('landlineNo').value,
                // @ts-ignore
                pan: this.employeeForm.get('pan').value,
                // @ts-ignore
                aadharNo: this.employeeForm.get('aadharNo').value,
                // @ts-ignore
                enrollmentDate: this.employeeForm.get('enrollDate').value,
                roleId: 2,
                closeAccount: false,
                // @ts-ignore
                credit: this.employeeForm.get('amount').value,
                // @ts-ignore
                mode: this.employeeForm.get('type').value,
                // @ts-ignore
                bankName: this.employeeForm.get('bankName').value,
                // @ts-ignore
                chequeDate: this.employeeForm.get('chequeDate').value,
                // @ts-ignore
                chequeNo: this.employeeForm.get('chequeNo').value,
                // @ts-ignore
                particulars: this.employeeForm.get('purpose').value,
            };
            console.log(data);
            this.service.sendData(data).subscribe(result => {
                if (result) {
                    sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        text: 'Account Created',
                        icon: 'success',
                    }).then((isConfirm) => {
                        if (isConfirm) {
                            this.employeeForm = this.fb.group({
                                employeeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                                employeeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                                fatherName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                                permAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                                currAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                                email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email])),
                                mobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(10)])),
                                altMobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(10)])),
                                landlineNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[0-9]d{2,4}-d{6,8}$'),
                                ])),
                                pan: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}'),
                                ])),
                                aadharNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$'),
                                ])),
                                enrollDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                                amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                                type: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                                bankName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                                chequeDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                                chequeNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                                purpose: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                            });
                        }
                    });
                }
            }, error1 => {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: 'Oops!',
                    text: 'Try again!',
                    icon: 'error',
                });
            });
        }
    }
    showEmployeeAccountInfo() {
        this.employeeAccount = true;
        this.bankAccount = false;
        this.report = false;
    }
    showBankAccountInfo() {
        this.bankAccount = true;
        this.report = false;
        this.employeeAccount = false;
    }
    showReportInfo() {
        this.report = true;
        this.employeeAccount = false;
        this.bankAccount = false;
    }
    sameAddress(event) {
        console.log(event.target.checked);
        if (event.target.checked) {
            // @ts-ignore
            this.employeeForm.get('currAddress').setValue(this.employeeForm.get('permAddress').value);
        }
        else {
            // @ts-ignore
            this.employeeForm.get('currAddress').setValue(null);
        }
    }
    openDialog() {
        const data = {
            // @ts-ignore
            start: this.reportForm.get('startDate').value,
            // @ts-ignore
            end: this.reportForm.get('endDate').value,
            // @ts-ignore
            category: this.reportForm.get('category').value,
        };
        console.log(data);
        if (
        // @ts-ignore
        this.reportForm.get('category').value === 'Loan Disbursal Records') {
            this.service.getLoanData(data).subscribe(result => {
                console.log(result);
                if (result.loanData.length === 0) {
                    sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        title: 'Oops!',
                        text: 'Data in this range does not exists!',
                        icon: 'error',
                    });
                }
                else {
                    console.log(result);
                    const dialogRef = this.dialog.open(_app_upload_all_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
                        data: {
                            loan: result.loanData,
                            // @ts-ignore
                            start: this.reportForm.get('startDate').value,
                            // @ts-ignore
                            end: this.reportForm.get('endDate').value,
                            // @ts-ignore
                            category: this.reportForm.get('category').value,
                        },
                        height: '600px',
                        width: '850px',
                    });
                    dialogRef.afterClosed().subscribe(ress => {
                        console.log(ress);
                        if (ress === '') {
                            console.log(ress);
                            this.reportForm = this.fb.group({
                                startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                                endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                                category: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                            });
                        }
                    });
                }
            }, error1 => {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: 'Oops!',
                    text: 'Try again!',
                    icon: 'error',
                });
            });
        }
        else if (
        // @ts-ignore
        this.reportForm.get('category').value === 'Credit Transactions') {
            this.service.getCreditData(data).subscribe(result => {
                console.log(result);
                if (result.accountData.length === 0) {
                    sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        title: 'Oops!',
                        text: 'Data in this range does not exists!',
                        icon: 'error',
                    });
                }
                else {
                    console.log(result);
                    const dialogRef = this.dialog.open(_app_upload_all_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
                        data: {
                            accountData: result.accountData,
                            // @ts-ignore
                            start: this.reportForm.get('startDate').value,
                            // @ts-ignore
                            end: this.reportForm.get('endDate').value,
                            // @ts-ignore
                            category: this.reportForm.get('category').value,
                        },
                        height: '600px',
                        width: '850px',
                    });
                    dialogRef.afterClosed().subscribe(ress => {
                        if (ress === '') {
                            console.log(ress);
                            this.reportForm = this.fb.group({
                                startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                                endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                                category: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                            });
                        }
                    });
                }
            }, error1 => {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: 'Oops!',
                    text: 'Try again!',
                    icon: 'error',
                });
            });
        }
        else if (
        // @ts-ignore
        this.reportForm.get('category').value === 'Debit Transactions') {
            this.service.getDebitData(data).subscribe(result => {
                console.log(result);
                if (result.accountData.length === 0) {
                    sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        title: 'Oops!',
                        text: 'Data in this range does not exists!',
                        icon: 'error',
                    });
                }
                else {
                    console.log(result);
                    const dialogRef = this.dialog.open(_app_upload_all_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
                        data: {
                            accountData: result.accountData,
                            // @ts-ignore
                            start: this.reportForm.get('startDate').value,
                            // @ts-ignore
                            end: this.reportForm.get('endDate').value,
                            // @ts-ignore
                            category: this.reportForm.get('category').value,
                        },
                        height: '600px',
                        width: '850px',
                    });
                    dialogRef.afterClosed().subscribe(ress => {
                        if (ress === '') {
                            console.log(ress);
                            this.reportForm = this.fb.group({
                                startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                                endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                                category: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                            });
                        }
                    });
                }
            }, error1 => {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: 'Oops!',
                    text: 'Try again!',
                    icon: 'error',
                });
            });
        }
        else if (
        // @ts-ignore
        this.reportForm.get('category').value === 'Expense Deductions') {
            this.service.getExpenseData(data).subscribe(result => {
                console.log(result);
                if (result.accountData.length === 0) {
                    sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        title: 'Oops!',
                        text: 'Data in this range does not exists!',
                        icon: 'error',
                    });
                }
                else {
                    console.log(result);
                    const dialogRef = this.dialog.open(_app_upload_all_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
                        data: {
                            accountData: result.accountData,
                            // @ts-ignore
                            start: this.reportForm.get('startDate').value,
                            // @ts-ignore
                            end: this.reportForm.get('endDate').value,
                            // @ts-ignore
                            category: this.reportForm.get('category').value,
                        },
                        height: '600px',
                        width: '850px',
                    });
                    dialogRef.afterClosed().subscribe(ress => {
                        if (ress === '') {
                            console.log(ress);
                            this.reportForm = this.fb.group({
                                startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                                endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                                category: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                            });
                        }
                    });
                }
            }, error1 => {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: 'Oops!',
                    text: 'Try again!',
                    icon: 'error',
                });
            });
        }
        else if (
        // @ts-ignore
        this.reportForm.get('category').value === 'Credit+Debit+Expense Transactions') {
            this.service.getCreditDebitExpenseData(data).subscribe(result => {
                console.log(result);
                if (result.accountData.length === 0) {
                    sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        title: 'Oops!',
                        text: 'Data in this range does not exists!',
                        icon: 'error',
                    });
                }
                else {
                    console.log(result);
                    const dialogRef = this.dialog.open(_app_upload_all_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
                        data: {
                            accountData: result.accountData,
                            // @ts-ignore
                            start: this.reportForm.get('startDate').value,
                            // @ts-ignore
                            end: this.reportForm.get('endDate').value,
                            // @ts-ignore
                            category: this.reportForm.get('category').value,
                        },
                        height: '600px',
                        width: '850px',
                    });
                    dialogRef.afterClosed().subscribe(ress => {
                        if (ress === '') {
                            console.log(ress);
                            this.reportForm = this.fb.group({
                                startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                                endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                                category: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                            });
                        }
                    });
                }
            }, error1 => {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: 'Oops!',
                    text: 'Try again!',
                    icon: 'error',
                });
            });
        }
        else if (
        // @ts-ignore
        this.reportForm.get('category').value === 'All Cash Transactions') {
            this.service.getCashData(data).subscribe(result => {
                console.log(result);
                if (result.accountData.length === 0) {
                    sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        title: 'Oops!',
                        text: 'Data in this range does not exists!',
                        icon: 'error',
                    });
                }
                else {
                    console.log(result);
                    const dialogRef = this.dialog.open(_app_upload_all_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
                        data: {
                            accountData: result.accountData,
                            // @ts-ignore
                            start: this.reportForm.get('startDate').value,
                            // @ts-ignore
                            end: this.reportForm.get('endDate').value,
                            // @ts-ignore
                            category: this.reportForm.get('category').value,
                        },
                        height: '600px',
                        width: '850px',
                    });
                    dialogRef.afterClosed().subscribe(ress => {
                        this.reportForm = this.fb.group({
                            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                        });
                    });
                }
            }, error1 => {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: 'Oops!',
                    text: 'Try again!',
                    icon: 'error',
                });
            });
        }
        else {
            this.service.getChequeData(data).subscribe(result => {
                console.log(result);
                if (result.accountData.length === 0) {
                    sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                        title: 'Oops!',
                        text: 'Data in this range does not exists!',
                        icon: 'error',
                    });
                }
                else {
                    console.log(result);
                    const dialogRef = this.dialog.open(_app_upload_all_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
                        data: {
                            accountData: result.accountData,
                            // @ts-ignore
                            start: this.reportForm.get('startDate').value,
                            // @ts-ignore
                            end: this.reportForm.get('endDate').value,
                            // @ts-ignore
                            category: this.reportForm.get('category').value,
                        },
                        height: '600px',
                        width: '850px',
                    });
                    dialogRef.afterClosed().subscribe(ress => {
                        this.reportForm = this.fb.group({
                            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                            endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                            category: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                        });
                    });
                }
            }, error1 => {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: 'Oops!',
                    text: 'Try again!',
                    icon: 'error',
                });
            });
        }
    }
    sendBankData() {
        const data = {
            // @ts-ignore
            bankName: this.bankForm.get('bankName').value,
            // @ts-ignore
            bankAddress: this.bankForm.get('bankAddress').value,
            // @ts-ignore
            accountNo: this.bankForm.get('accountNo').value,
            // @ts-ignore
            accountType: this.bankForm.get('accountType').value,
            // @ts-ignore
            nickname: this.bankForm.get('nickName').value,
            // @ts-ignore
            code: this.bankForm.get('code').value,
        };
        console.log(data);
        this.service.sendBankData(data).subscribe(result => {
            if (result) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    text: 'Account Created',
                    icon: 'success',
                }).then((isConfirm) => {
                    if (isConfirm) {
                        this.bankForm = this.fb.group({
                            bankName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                            bankAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                            accountNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^\\d{9,18}$'),
                            ])),
                            accountType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                            nickName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                            code: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([
                                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required,
                                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(11),
                                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[A-Z]{4}[0][A-Z0-9]{6}$'),
                            ])),
                        });
                        this.service.getBankList().subscribe(ress => {
                            this.bankList = ress;
                            console.log(this.bankList);
                        });
                    }
                });
            }
        }, error1 => {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Oops!',
                text: 'Try again!',
                icon: 'error',
            });
        });
    }
};
UploadAllComponent.ctorParameters = () => [
    { type: _app_upload_all_services__WEBPACK_IMPORTED_MODULE_4__["UploadAllService"] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
];
UploadAllComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-upload-all',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./upload-all.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-all/upload-all.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./upload-all.component.scss */ "./src/app/upload-all/upload-all.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_upload_all_services__WEBPACK_IMPORTED_MODULE_4__["UploadAllService"],
        _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
], UploadAllComponent);



/***/ }),

/***/ "./src/app/upload-all/upload-all.module.ts":
/*!*************************************************!*\
  !*** ./src/app/upload-all/upload-all.module.ts ***!
  \*************************************************/
/*! exports provided: UploadAllModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadAllModule", function() { return UploadAllModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");
/* harmony import */ var _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/navigation/navigation.module */ "./src/app/navigation/navigation.module.ts");
/* harmony import */ var _app_upload_all_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/upload-all/services */ "./src/app/upload-all/services/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/fesm2015/snack-bar.js");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/upload-all/dialog/dialog.component.ts");
/* harmony import */ var _upload_all_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./upload-all-routing.module */ "./src/app/upload-all/upload-all-routing.module.ts");
/* harmony import */ var _upload_all_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./upload-all.component */ "./src/app/upload-all/upload-all.component.ts");
/* harmony import */ var _app_layout_dashboard_layout_dashboard_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @app/layout-dashboard/layout-dashboard.module */ "./src/app/layout-dashboard/layout-dashboard.module.ts");















let UploadAllModule = class UploadAllModule {
};
UploadAllModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_upload_all_component__WEBPACK_IMPORTED_MODULE_13__["UploadAllComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _upload_all_routing_module__WEBPACK_IMPORTED_MODULE_12__["UploadAllRoutingModule"],
            _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__["NavigationModule"],
            _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"],
            _app_layout_dashboard_layout_dashboard_module__WEBPACK_IMPORTED_MODULE_14__["LayoutDashboardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        providers: [..._app_upload_all_services__WEBPACK_IMPORTED_MODULE_6__["services"]],
        entryComponents: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"]],
    })
], UploadAllModule);



/***/ })

}]);
//# sourceMappingURL=upload-all-upload-all-module-es2015.js.map