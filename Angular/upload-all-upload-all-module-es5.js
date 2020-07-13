function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["upload-all-upload-all-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-all/dialog/dialog.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload-all/dialog/dialog.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUploadAllDialogDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div>\n    <h1 mat-dialog-title align=\"center\" *ngIf=\"category == 'Loan Disbursal Records'\">Loan Disbursal Records</h1>\n    <h1 mat-dialog-title align=\"center\" *ngIf=\"category == 'All Cash Transactions'\">All Cash Transactions</h1>\n    <h1 mat-dialog-title align=\"center\" *ngIf=\"category == 'All Cheque Transactions'\">All Cheque Transactions</h1>\n    <h1 mat-dialog-title align=\"center\" *ngIf=\"category == 'Credit Transactions'\">Credit Transactions</h1>\n    <h1 mat-dialog-title align=\"center\" *ngIf=\"category == 'Debit Transactions'\">Debit Transactions</h1>\n    <h1 mat-dialog-title align=\"center\" *ngIf=\"category == 'Expense Deductions'\">Expense Deductions</h1>\n    <h1 mat-dialog-title align=\"center\" *ngIf=\"category == 'Credit+Debit+Expense Transactions'\">Credit+Debit+Expense Transactions</h1>\n    <mat-dialog-content class=\"mat-typography\">\n        <br>\n        <table id=\"tab\" class=\"table table-borderless text-center\">\n            <thead>\n            <tr>\n                <th>Start Date</th>\n                <th>End Date</th>\n            </tr>\n            </thead>\n            <tbody>\n            <tr>\n                <td id=\"start\">{{start| date:'dd-MM-yyyy'}}</td>\n                <td id=\"end\">{{end| date:'dd-MM-yyyy'}}</td>\n            </tr>\n            </tbody>\n        </table>\n        <br>\n        <ng-container *ngIf=\"category == 'Loan Disbursal Records'\">\n            <h1>Loan Details</h1>\n            <table class=\"table table-bordered\">\n                <thead>\n                <tr>\n                    <th>Loan Date</th>\n                    <th>Loan Amount</th>\n                    <th>Loan Duration</th>\n                    <th>Loan Type</th>\n                    <th>Close Loan</th>\n                    <th>Closure Status</th>\n                    <th>Date of Loan Closure</th>\n                    <th>User Id</th>\n                </tr>\n                </thead>\n                <tbody *ngFor=\"let data of loanData;\">\n                <tr>\n                    <td *ngIf=\"isDate(data.loanData.date); else notDate\">{{data.loanData.date| date:'dd-MM-yyyy'}}</td>\n                    <ng-template #notDate>\n                        <td>{{data.loanData.date}}</td>\n                    </ng-template>\n                    <td *ngIf=\"data.loanData.loanAmount; else not\">{{data.loanData.loanAmount| indianCurrency}}</td>\n                    <td *ngIf=\"data.loanData.loanDuration; else not\">{{data.loanData.loanDuration}}</td>\n                    <td *ngIf=\"data.loanData.loanType; else not\">{{data.loanData.loanType}}</td>\n                    <td *ngIf=\"data.loanData.closeLoan; else not\">{{data.loanData.closeLoan}}</td>\n                    <td *ngIf=\"data.loanData.closeStatus; else not\">{{data.loanData.closeStatus}}</td>\n                    <td *ngIf=\"isDate(data.loanData.dateOfClosure); else notDate\">{{data.loanData.dateOfClosure| date:'dd-MM-yyyy'}}</td>\n                    <ng-template #notDate>\n                        <td>{{data.loanData.dateOfClosure}}</td>\n                    </ng-template>\n                    <td *ngIf=\"data.loanData.userId; else not\">{{data.loanData.userId}}</td>\n                </tr>\n                <tr>\n                    <td *ngIf=\"data.loanBook\" align=\"center\" colspan=\"8\">\n                        <h3 style=\"font-weight: bold\">EMI Details</h3>\n                        <table style=\"width: 100%;\">\n                            <thead>\n                            <tr>\n                                <th style=\"width: 16.66%;\">EMI Date</th>\n                                <th style=\"width: 60%;\">Particulars</th>\n                                <th>EMI Paid</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr *ngFor=\"let value of data.loanBook\">\n                                <td *ngIf=\"isDate(value.date); else notDate\">{{value.date}}</td>\n                                <ng-template #notDate>\n                                    <td>{{value.date}}</td>\n                                </ng-template>\n                                <td class=\"col-5\" *ngIf=\"value.particulars; else not\">{{value.particulars}}</td>\n                                <td *ngIf=\"value.credit; else not\">{{value.credit| indianCurrency}}</td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </td>\n                </tr>\n                <tr>\n                    <td *ngIf=\"data.closeData && data.closeData[0].mode==='Cash';else cheque\" align=\"center\" colspan=\"8\">\n                        <h3 style=\"font-weight: bold\">Loan Closure Details</h3>\n                        <table style=\"width: 100%;\">\n                            <thead>\n                            <tr>\n                                <th style=\"width: 16.66%;\">Date</th>\n                                <th>Loan Status</th>\n                                <th>Mode of Payment</th>\n                                <th>Paid Amount</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr>\n                                <td *ngIf=\"isDate(data.closeData[0].date); else notDate\">{{data.closeData[0].date| date:'dd-MM-yyyy'}}</td>\n                                <ng-template #notDate>\n                                    <td>{{data.closeData[0].date}}</td>\n                                </ng-template>\n                                <td *ngIf=\"data.loanData.closeStatus; else not\">{{data.loanData.closeStatus}}</td>\n                                <td *ngIf=\"data.closeData[0].mode; else not\">{{data.closeData[0].mode}}</td>\n                                <td *ngIf=\"data.closeData[0].credit; else not\">{{data.closeData[0].credit| indianCurrency}}</td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </td>\n                    <ng-template #cheque>\n                        <td *ngIf=\"data.closeData && data.closeData[0].mode==='Cheque';\" align=\"center\" colspan=\"8\">\n                            <h3 style=\"font-weight: bold\">Loan Closure Details</h3>\n                            <table style=\"width: 100%;\">\n                                <thead>\n                                <tr>\n                                    <th style=\"width: 16.66%;\">Date</th>\n                                    <th>Loan Status</th>\n                                    <th>Mode of Payment</th>\n                                    <th>Paid Amount</th>\n                                    <th>Cheque Date</th>\n                                    <th>Bank Name</th>\n                                    <th>Cheque Number</th>\n                                </tr>\n                                </thead>\n                                <tbody>\n                                <tr>\n                                    <td *ngIf=\"isDate(data.closeData[0].date); else notDate\">{{data.closeData[0].date| date:'dd-MM-yyyy'}}</td>\n                                    <ng-template #notDate>\n                                        <td>{{data.closeData[0].date}}</td>\n                                    </ng-template>\n                                    <td *ngIf=\"data.loanData.closeStatus; else not\">{{data.loanData.closeStatus}}</td>\n                                    <td *ngIf=\"data.closeData[0].mode; else not\">{{data.closeData[0].mode}}</td>\n                                    <td *ngIf=\"data.closeData[0].credit; else not\">{{data.closeData[0].credit| indianCurrency}}</td>\n                                    <td *ngIf=\"data.chequeData[0].chequeDate; else not\">{{data.chequeData[0].chequeDate| date: 'dd-MM-yyyy'}}</td>\n                                    <td *ngIf=\"data.chequeData[0].bankName; else not\">{{data.chequeData[0].bankName}}</td>\n                                    <td *ngIf=\"data.chequeData[0].chequeNo; else not\">{{data.chequeData[0].chequeNo}}</td>\n                                </tr>\n                                </tbody>\n                            </table>\n                        </td>\n                    </ng-template>\n                </tr>\n                </tbody>\n            </table>\n        </ng-container>\n        <ng-container *ngIf=\"category == 'All Cash Transactions'\">\n            <h1>Cash Transactions</h1>\n            <table class=\"table table-bordered\">\n                <thead>\n                <tr>\n                    <th style=\"width: 16.66%;\">Date</th>\n                    <th style=\"width: 60%;\">Particulars</th>\n                    <th>Credit</th>\n                    <th>Debit</th>\n                    <th>Type</th>\n                    <th>User Id</th>\n                </tr>\n                </thead>\n                <tbody *ngFor=\"let val of accountData\">\n                <tr>\n                    <td *ngIf=\"isDate(val.date); else notDate\">{{val.date| date:'dd-MM-yyyy'}}</td>\n                    <ng-template #notDate>\n                        <td>{{val.date}}</td>\n                    </ng-template>\n                    <td *ngIf=\"val.particulars; else not\">{{val.particulars}}</td>\n                    <td class=\"table-success\" *ngIf=\"val.credit; else not\">{{val.credit| indianCurrency}}</td>\n                    <td class=\"table-danger\" *ngIf=\"val.debit; else not\">{{val.debit| indianCurrency}}</td>\n                    <td *ngIf=\"val.type; else not\">{{val.type}}</td>\n                    <td *ngIf=\"val.userId; else not\">{{val.userId}}</td>\n                </tr>\n                </tbody>\n            </table>\n        </ng-container>\n        <ng-container *ngIf=\"category == 'All Cheque Transactions'\">\n            <h1>Cheque Transactions</h1>\n            <table class=\"table table-bordered\">\n                <thead>\n                <tr>\n                    <th style=\"width: 16.66%;\">Date</th>\n                    <th style=\"width: 60%;\">Particulars</th>\n                    <th>Credit</th>\n                    <th>Debit</th>\n                    <th>Type</th>\n                    <th>User Id</th>\n                </tr>\n                </thead>\n                <tbody *ngFor=\"let val of accountData\">\n                <tr>\n                    <td *ngIf=\"isDate(val.account.date); else notDate\">{{val.account.date| date:'dd-MM-yyyy'}}</td>\n                    <ng-template #notDate>\n                        <td>{{val.account.date}}</td>\n                    </ng-template>\n                    <td *ngIf=\"val.account.particulars; else not\">{{val.account.particulars}}</td>\n                    <td class=\"table-success\" *ngIf=\"val.account.credit; else not\">{{val.account.credit| indianCurrency}}</td>\n                    <td class=\"table-danger\" *ngIf=\"val.account.debit; else not\">{{val.account.debit| indianCurrency}}</td>\n                    <td *ngIf=\"val.account.type; else not\">{{val.account.type}}</td>\n                    <td *ngIf=\"val.account.userId; else not\">{{val.account.userId}}</td>\n                </tr>\n                <tr>\n                    <td *ngIf=\"val.cheque\" align=\"center\" colspan=\"6\">\n                        <h3 style=\"font-weight: bold\">Cheque Details</h3>\n                        <table style=\"width: 100%;\">\n                            <thead>\n                            <tr>\n                                <th style=\"width: 16.66%;\">Cheque Date</th>\n                                <th style=\"width: 60%;\">Bank Name</th>\n                                <th>Cheque Number</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr>\n                                <td *ngIf=\"val.cheque[0].chequeDate; else not\">{{val.cheque[0].chequeDate| date:'dd-MM-yyyy'}}</td>\n                                <td class=\"col-5\" *ngIf=\"val.cheque[0].bankName; else not\">{{val.cheque[0].bankName}}</td>\n                                <td *ngIf=\"val.cheque[0].chequeNo; else not\">{{val.cheque[0].chequeNo}}</td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </ng-container>\n        <ng-container *ngIf=\"category == 'Credit Transactions'\">\n            <h1>Credit Transactions</h1>\n            <table class=\"table table-bordered\">\n                <thead>\n                <tr>\n                    <th style=\"width: 16.66%;\">Date</th>\n                    <th style=\"width: 60%;\">Particulars</th>\n                    <th>Mode</th>\n                    <th>Credit</th>\n                    <th>Type</th>\n                    <th>User Id</th>\n                </tr>\n                </thead>\n                <tbody *ngFor=\"let val of accountData\">\n                <tr>\n                    <td *ngIf=\"isDate(val.account.date); else notDate\">{{val.account.date| date:'dd-MM-yyyy'}}</td>\n                    <ng-template #notDate>\n                        <td>{{val.account.date}}</td>\n                    </ng-template>\n                    <td *ngIf=\"val.account.particulars; else not\">{{val.account.particulars}}</td>\n                    <td *ngIf=\"val.account.mode; else not\">{{val.account.mode}}</td>\n                    <td class=\"table-success\" *ngIf=\"val.account.credit; else not\">{{val.account.credit| indianCurrency}}</td>\n                    <td *ngIf=\"val.account.type; else not\">{{val.account.type}}</td>\n                    <td *ngIf=\"val.account.userId; else not\">{{val.account.userId}}</td>\n                </tr>\n                <tr>\n                    <td *ngIf=\"val.cheque\" align=\"center\" colspan=\"6\">\n                        <h3 style=\"font-weight: bold\">Cheque Details</h3>\n                        <table style=\"width: 100%;\">\n                            <thead>\n                            <tr>\n                                <th style=\"width: 16.66%;\">Cheque Date</th>\n                                <th style=\"width: 60%;\">Bank Name</th>\n                                <th>Cheque Number</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr>\n                                <td *ngIf=\"val.cheque[0].chequeDate; else not\">{{val.cheque[0].chequeDate| date:'dd-MM-yyyy'}}</td>\n                                <td class=\"col-5\" *ngIf=\"val.cheque[0].bankName; else not\">{{val.cheque[0].bankName}}</td>\n                                <td *ngIf=\"val.cheque[0].chequeNo; else not\">{{val.cheque[0].chequeNo}}</td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </ng-container>\n        <ng-container *ngIf=\"category == 'Debit Transactions'\">\n            <h1>Debit Transactions</h1>\n            <table class=\"table table-bordered\">\n                <thead>\n                <tr>\n                    <th style=\"width: 16.66%;\">Date</th>\n                    <th style=\"width: 60%;\">Particulars</th>\n                    <th>Mode</th>\n                    <th>Debit</th>\n                    <th>Type</th>\n                    <th>User Id</th>\n                </tr>\n                </thead>\n                <tbody *ngFor=\"let val of accountData\">\n                <tr>\n                    <td *ngIf=\"isDate(val.account.date); else notDate\">{{val.account.date| date:'dd-MM-yyyy'}}</td>\n                    <ng-template #notDate>\n                        <td>{{val.account.date}}</td>\n                    </ng-template>\n                    <td *ngIf=\"val.account.particulars; else not\">{{val.account.particulars}}</td>\n                    <td *ngIf=\"val.account.mode; else not\">{{val.account.mode}}</td>\n                    <td class=\"table-danger\" *ngIf=\"val.account.debit; else not\">{{val.account.debit| indianCurrency}}</td>\n                    <td *ngIf=\"val.account.type; else not\">{{val.account.type}}</td>\n                    <td *ngIf=\"val.account.userId; else not\">{{val.account.userId}}</td>\n                </tr>\n                <tr>\n                    <td *ngIf=\"val.cheque\" align=\"center\" colspan=\"6\">\n                        <h3 style=\"font-weight: bold\">Cheque Details</h3>\n                        <table style=\"width: 100%;\">\n                            <thead>\n                            <tr>\n                                <th style=\"width: 16.66%;\">Cheque Date</th>\n                                <th style=\"width: 60%;\">Bank Name</th>\n                                <th>Cheque Number</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr>\n                                <td *ngIf=\"val.cheque[0].chequeDate; else not\">{{val.cheque[0].chequeDate| date:'dd-MM-yyyy'}}</td>\n                                <td class=\"col-5\" *ngIf=\"val.cheque[0].bankName; else not\">{{val.cheque[0].bankName}}</td>\n                                <td *ngIf=\"val.cheque[0].chequeNo; else not\">{{val.cheque[0].chequeNo}}</td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </ng-container>\n        <ng-container *ngIf=\"category == 'Expense Deductions'\">\n            <h1 id=\"subDetail\">Expense Details</h1>\n            <table class=\"table table-bordered\">\n                <thead>\n                <tr id=\"headers\">\n                    <th style=\"width: 16.66%;\">Date</th>\n                    <th style=\"width: 60%;\">Particulars</th>\n                    <th>Mode</th>\n                    <th>Credit</th>\n                    <th>Debit</th>\n                    <th>User Id</th>\n                </tr>\n                </thead>\n                <tbody *ngFor=\"let val of accountData\">\n                <tr>\n                    <td *ngIf=\"isDate(val.account.date); else notDate\" id=\"date\">{{val.account.date| date:'dd-MM-yyyy'}}</td>\n                    <ng-template #notDate>\n                        <td>{{val.account.date}}</td>\n                    </ng-template>\n                    <td *ngIf=\"val.account.particulars; else not\">{{val.account.particulars}}</td>\n                    <td *ngIf=\"val.account.mode; else not\">{{val.account.mode}}</td>\n                    <td class=\"table-success\" *ngIf=\"val.account.credit; else not\">{{val.account.credit| indianCurrency}}</td>\n                    <td class=\"table-danger\" *ngIf=\"val.account.debit; else not\" id=\"debit\">{{val.account.debit| indianCurrency}}</td>\n                    <td *ngIf=\"val.account.userId; else not\">{{val.account.userId}}</td>\n                </tr>\n                <tr>\n                    <td *ngIf=\"val.cheque\" align=\"center\" colspan=\"6\">\n                        <h3 style=\"font-weight: bold\">Cheque Details</h3>\n                        <table style=\"width: 100%;\">\n                            <thead>\n                            <tr>\n                                <th style=\"width: 16.66%;\">Cheque Date</th>\n                                <th style=\"width: 60%;\">Bank Name</th>\n                                <th>Cheque Number</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr>\n                                <td *ngIf=\"val.cheque[0].chequeDate; else not\">{{val.cheque[0].chequeDate| date:'dd-MM-yyyy'}}</td>\n                                <td class=\"col-5\" *ngIf=\"val.cheque[0].bankName; else not\">{{val.cheque[0].bankName}}</td>\n                                <td *ngIf=\"val.cheque[0].chequeNo; else not\">{{val.cheque[0].chequeNo}}</td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </ng-container>\n        <ng-container *ngIf=\"category == 'Credit+Debit+Expense Transactions'\">\n            <h1>Credit + Debit + Expense Transactions</h1>\n            <table class=\"table table-bordered\">\n                <thead>\n                <tr>\n                    <th style=\"width: 16.66%;\">Date</th>\n                    <th style=\"width: 60%;\">Particulars</th>\n                    <th>Mode</th>\n                    <th>Credit</th>\n                    <th>Debit</th>\n                    <th>Type</th>\n                    <th>User Id</th>\n                </tr>\n                </thead>\n                <tbody *ngFor=\"let val of accountData\">\n                <tr>\n                    <td *ngIf=\"isDate(val.account.date); else notDate\">{{val.account.date| date:'dd-MM-yyyy'}}</td>\n                    <ng-template #notDate>\n                        <td>{{val.account.date}}</td>\n                    </ng-template>\n                    <td *ngIf=\"val.account.particulars; else not\">{{val.account.particulars}}</td>\n                    <td *ngIf=\"val.account.mode; else not\">{{val.account.mode}}</td>\n                    <td class=\"table-success\" *ngIf=\"val.account.credit; else not\">{{val.account.credit| indianCurrency}}</td>\n                    <td class=\"table-danger\" *ngIf=\"val.account.debit; else not\">{{val.account.debit| indianCurrency}}</td>\n                    <td *ngIf=\"val.account.type; else not\">{{val.account.type}}</td>\n                    <td *ngIf=\"val.account.userId; else not\">{{val.account.userId}}</td>\n                </tr>\n                <tr>\n                    <td *ngIf=\"val.cheque\" align=\"center\" colspan=\"7\">\n                        <h3 style=\"font-weight: bold\">Cheque Details</h3>\n                        <table style=\"width: 100%;\">\n                            <thead>\n                            <tr>\n                                <th style=\"width: 16.66%;\">Cheque Date</th>\n                                <th style=\"width: 60%;\">Bank Name</th>\n                                <th>Cheque Number</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr>\n                                <td *ngIf=\"val.cheque[0].chequeDate; else not\">{{val.cheque[0].chequeDate| date:'dd-MM-yyyy'}}</td>\n                                <td class=\"col-5\" *ngIf=\"val.cheque[0].bankName; else not\">{{val.cheque[0].bankName}}</td>\n                                <td *ngIf=\"val.cheque[0].chequeNo; else not\">{{val.cheque[0].chequeNo}}</td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n        </ng-container>\n        <br>\n        <ng-template #not>\n            <td>-</td>\n        </ng-template>\n    </mat-dialog-content>\n</div>\n<mat-dialog-actions align=\"end\">\n    <button class=\"btn-danger\" mat-button mat-dialog-close>Cancel</button>\n    <button class=\"btn-success\" mat-button (click)=\"onConfirmClick()\" cdkFocusInitial>Download</button>\n</mat-dialog-actions>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-all/upload-all.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/upload-all/upload-all.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUploadAllUploadAllComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-layout-dashboard>\n    <sb-dashboard-head title=\"{{'Accountant.Pages.Upload'| translate}}\"></sb-dashboard-head>\n    <hr class=\"rounded\">\n    <br>\n    <div class=\"row\">\n        <div class=\"col-sm-2\"></div>\n        <div class=\"col\">\n            <button class=\"btn-primary\" (click)=\"showEmployeeAccountInfo()\">{{'Accountant.Tables.CreateEmp'| translate}}</button>\n        </div>\n        <div class=\"col\">\n            <button class=\"btn-primary\" (click)=\"showBankAccountInfo()\">{{'Accountant.Tables.CreateBank'| translate}}</button>\n        </div>\n        <div class=\"col\">\n            <button class=\"btn-primary\" (click)=\"showReportInfo()\">{{'Accountant.Tables.Generate'| translate}}</button>\n        </div>\n        <div class=\"col-sm-2\"></div>\n    </div>\n    <br>\n    <br>\n    <div class=\"row\" *ngIf=\"employeeAccount\">\n        <div class=\"col-xl-2 col-md-1\"></div>\n        <div class=\"col-xl-8 col-md-10\">\n            <sb-card>\n                <div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{'Accountant.Tables.CreateEmp'| translate}}</div>\n                <div class=\"card-body table-responsive\">\n                    <form [formGroup]=\"employeeForm\" (ngSubmit)=\"send()\">\n                        <table class=\"table table-striped\">\n                            <tbody>\n                            <tr>\n                                <td>{{'Accountant.Tables.EmployeeNo'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"number form-control\" formControlName=\"employeeId\" required />\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('employeeId').hasError('required')\">Required!</div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.EmployeeName'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"text\" formControlName=\"employeeName\" required />\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('employeeName').hasError('required')\">Required!</div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.Father'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"text\" formControlName=\"fatherName\" />\n                                    </label>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.PermAddress'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"text\" formControlName=\"permAddress\" />\n                                    </label>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.SameAddress'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"checkbox\" (click)=\"sameAddress($event)\" />\n                                    </label>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.CurrAddress'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"text\" formControlName=\"currAddress\" />\n                                    </label>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.Email'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"email\" formControlName=\"email\" />\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('email').hasError('email')\">Provide valid email</div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.MobNo'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"number\" formControlName=\"mobileNo\" minlength=\"10\" maxlength=\"10\" />\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('mobileNo').hasError('min')\">Number should be of 10 digits</div>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('mobileNo').hasError('max')\">Number should be of 10 digits</div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.AltMobNo'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"number\" formControlName=\"altMobileNo\" minlength=\"10\" maxlength=\"10\" />\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('altMobileNo').hasError('min')\">Number should be of 10 digits</div>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('altMobileNo').hasError('max')\">Number should be of 10 digits</div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.Landline'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"number\" formControlName=\"landlineNo\" />\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('landlineNo').hasError('pattern')\">Invalid Number!</div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.PAN'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"number\" formControlName=\"pan\" />\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('pan').hasError('pattern')\">Invalid Number!</div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.Aadhar'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"number\" formControlName=\"aadharNo\" />\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('aadharNo').hasError('pattern')\">Invalid Number!</div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.EnrollDate'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"date\" formControlName=\"enrollDate\" required/>\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('enrollDate').hasError('required')\">Required!</div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.Fee'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"number\" formControlName=\"amount\" required/>\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('amount').hasError('required')\">Required!</div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.Mode' | translate}}</td>\n                                <td>\n                                    <label>\n                                        <select class=\"custom-select\" formControlName=\"type\" required>\n                                            <option>{{'Accountant.Tables.Cash' | translate}}</option>\n                                            <option>{{'Accountant.Tables.Cheque' | translate}}</option>\n                                        </select>\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('type').hasError('required')\">Required!</div>\n                                </td>\n                            </tr>\n                            <tr *ngIf=\"employeeForm.get('type').value == 'Cheque';\">\n                                <td>{{'Accountant.Tables.BankName' | translate}}</td>\n                                <td>\n                                    <label>\n                                        <select class=\"custom-select\" formControlName=\"bankName\">\n                                            <option *ngFor=\"let val of bankList\">{{val.bankName}}</option>\n                                        </select>\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('bankName').hasError('required')\">Required!</div>\n                                </td>\n                            </tr>\n                            <tr *ngIf=\"employeeForm.get('type').value == 'Cheque'\">\n                                <td>{{'Accountant.Tables.ChequeDate' | translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"date\" formControlName=\"chequeDate\"/>\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('chequeDate').hasError('required')\">Required!</div>\n                                </td>\n                            </tr>\n                            <tr *ngIf=\"employeeForm.get('type').value == 'Cheque'\">\n                                <td>{{'Accountant.Tables.ChequeNo' | translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"text\" formControlName=\"chequeNo\"/>\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('chequeNo').hasError('required')\">Required!</div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.Remark'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"text\" formControlName=\"purpose\" maxlength=\"1000\"/>\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('purpose').hasError('required')\">Required!</div>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                        <button type=\"submit\">{{'Accountant.Tables.Submit'| translate}}</button>\n                    </form>\n                </div>\n            </sb-card>\n        </div>\n        <div class=\"col-xl-2 col-md-1\"></div>\n    </div>\n    <div class=\"row\" *ngIf=\"report\">\n        <div class=\"col-xl-2 col-md-1\"></div>\n        <div class=\"col-xl-8 col-md-10\">\n            <sb-card>\n                <div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{'Accountant.Tables.Generate'| translate}}</div>\n                <div class=\"card-body table-responsive\">\n                    <form [formGroup]=\"reportForm\" (ngSubmit)=\"openDialog()\">\n                        <table class=\"table table-striped\" id=\"content\">\n                        <tbody>\n                        <tr>\n                            <td>{{'Accountant.Tables.Start'| translate}}</td>\n                            <td>\n                                <label>\n                                    <input type=\"date\" formControlName=\"startDate\"/>\n                                </label>\n                                <div class=\"alert alert-danger error-box\" *ngIf=\"reportForm.get('startDate').hasError('required')\">Required!</div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>{{'Accountant.Tables.End'| translate}}</td>\n                            <td>\n                                <label>\n                                    <input type=\"date\" formControlName=\"endDate\"/>\n                                </label>\n                                <div class=\"alert alert-danger error-box\" *ngIf=\"reportForm.get('endDate').hasError('required')\">Required!</div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>{{'Accountant.Tables.Category'| translate}}</td>\n                            <td>\n                                <label>\n                                    <select class=\"custom-select\" formControlName=\"category\">\n                                        <option>{{'Accountant.Tables.LoanRecord'| translate}}</option>\n                                        <option>{{'Accountant.Tables.CreditRecord'| translate}}</option>\n                                        <option>{{'Accountant.Tables.DebitRecord'| translate}}</option>\n                                        <option>{{'Accountant.Tables.ExpenseRecord'| translate}}</option>\n                                        <option>{{'Accountant.Tables.CdeRecord'| translate}}</option>\n                                        <option>{{'Accountant.Tables.CashRecord'| translate}}</option>\n                                        <option>{{'Accountant.Tables.ChequeRecord'| translate}}</option>\n                                    </select>\n                                </label>\n                                <div class=\"alert alert-danger error-box\" *ngIf=\"reportForm.get('category').hasError('required')\">Required!</div>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                        <button type=\"submit\" [disabled]=\"!this.reportForm.valid\">{{'Accountant.Tables.Submit'| translate}}</button>\n                    </form>\n                </div>\n            </sb-card>\n        </div>\n        <div class=\"col-xl-2 col-md-1\"></div>\n    </div>\n    <div class=\"row\" *ngIf=\"bankAccount\">\n        <div class=\"col-xl-2 col-md-1\"></div>\n        <div class=\"col-xl-8 col-md-10\">\n            <sb-card>\n                <div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{'Accountant.Tables.CreateBank'| translate}}</div>\n                <div class=\"card-body table-responsive\">\n                    <form [formGroup]=\"bankForm\" (ngSubmit)=\"sendBankData()\">\n                        <table class=\"table table-striped\">\n                        <tbody>\n                        <tr>\n                            <td>{{'Accountant.Tables.BankName' | translate}}</td>\n                            <td>\n                                <label>\n                                    <input type=\"text\" formControlName=\"bankName\" required />\n                                </label>\n                                <div class=\"alert alert-danger error-box\" *ngIf=\"bankForm.get('bankName').hasError('required')\">Required!</div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>{{'Accountant.Tables.Address' | translate}}</td>\n                            <td>\n                                <label>\n                                    <input type=\"text\" class=\"form-control\" maxlength=\"1000\" formControlName=\"bankAddress\"/>\n                                </label>\n                                <div class=\"alert alert-danger error-box\" *ngIf=\"bankForm.get('bankAddress').hasError('required')\">Required!</div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>{{'Accountant.Tables.AccountNo' | translate}}</td>\n                            <td>\n                                <label>\n                                    <input type=\"number\" class=\"form-control\" formControlName=\"accountNo\" pattern=\"^\\d{9,18}$\"/>\n                                </label>\n                                <div class=\"alert alert-danger error-box\" *ngIf=\"bankForm.get('accountNo').hasError('required')\">Required!</div>\n                                <div class=\"alert alert-danger error-box\" *ngIf=\"bankForm.get('accountNo').hasError('pattern')\">Length should be from 9 to 18</div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>{{'Accountant.Tables.TypeAccount' | translate}}</td>\n                            <td>\n                                <label>\n                                    <select class=\"custom-select form-control\" required formControlName=\"accountType\">\n                                        <option>{{'Accountant.Tables.SavingAcc' | translate}}</option>\n                                        <option>{{'Accountant.Tables.Current' | translate}}</option>\n                                    </select>\n                                </label>\n                                <div class=\"alert alert-danger error-box\" *ngIf=\"bankForm.get('accountType').hasError('required')\">Required!</div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>{{'Accountant.Tables.Nickname' | translate}}</td>\n                            <td>\n                                <label>\n                                    <input type=\"text\" formControlName=\"nickName\" maxlength=\"12\" required/>\n                                </label>\n                                <div class=\"alert alert-danger error-box\" *ngIf=\"bankForm.get('nickName').hasError('required')\">Required!</div>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>{{'Accountant.Tables.Code' | translate}}</td>\n                            <td>\n                                <label>\n                                    <input type=\"text\" formControlName=\"code\" required pattern=\"^[A-Z]{4}[0][A-Z0-9]{6}$\" minlength=\"11\" maxlength=\"11\" />\n                                </label>\n                                <div class=\"alert alert-danger error-box\" *ngIf=\"bankForm.get('code').hasError('required')\">Required!</div>\n                                <div class=\"alert alert-danger error-box\" *ngIf=\"bankForm.get('code').hasError('pattern')\">Invalid Format!</div>\n                                <div class=\"alert alert-danger error-box\" *ngIf=\"bankForm.get('code').hasError('minlength')\">Minimum Length should be 11</div>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                        <button type=\"submit\" [disabled]=\"!this.bankForm.valid\">{{'Accountant.Tables.Submit'| translate}}</button>\n                    </form>\n                </div>\n            </sb-card>\n        </div>\n        <div class=\"col-xl-2 col-md-1\"></div>\n    </div>\n</sb-layout-dashboard>\n\n\n\n";
    /***/
  },

  /***/
  "./src/app/upload-all/dialog/dialog.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/upload-all/dialog/dialog.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUploadAllDialogDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC1hbGwvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/upload-all/dialog/dialog.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/upload-all/dialog/dialog.component.ts ***!
    \*******************************************************/

  /*! exports provided: DialogComponent */

  /***/
  function srcAppUploadAllDialogDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DialogComponent", function () {
      return DialogComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! pdfmake/build/pdfmake */
    "./node_modules/pdfmake/build/pdfmake.js");
    /* harmony import */


    var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! pdfmake/build/vfs_fonts */
    "./node_modules/pdfmake/build/vfs_fonts.js");
    /* harmony import */


    var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5__);

    pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5___default.a.pdfMake.vfs;

    var DialogComponent = /*#__PURE__*/function () {
      function DialogComponent(data, dialogRef) {
        _classCallCheck(this, DialogComponent);

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

      _createClass(DialogComponent, [{
        key: "createLoanBody",
        value: function createLoanBody(data) {
          var _this = this;

          var body = [];
          var columns = [{
            text: 'Loan Date',
            style: 'tableHeader'
          }, {
            text: 'Loan Amount',
            style: 'tableHeader'
          }, {
            text: 'Loan Duration',
            style: 'tableHeader'
          }, {
            text: 'Loan Type',
            style: 'tableHeader'
          }, {
            text: 'Close Loan',
            style: 'tableHeader'
          }, {
            text: 'Closure Status',
            style: 'tableHeader'
          }, {
            text: 'Date of Loan Closure',
            style: 'tableHeader'
          }, {
            text: 'User Id',
            style: 'tableHeader'
          }];
          body.push(columns);
          data.forEach(function (val) {
            if (_this.isDate(val.loanData.date)) {
              if (_this.isDate(val.loanData.dateOfClosure)) {
                if (val.loanData.closeLoan === 0) {
                  body.push([// @ts-ignore
                  moment__WEBPACK_IMPORTED_MODULE_3__(val.loanData.date).format('DD-MM-YYYY'), val.loanData.loanAmount.toString(), val.loanData.loanDuration.toString(), val.loanData.loanType.toString(), 'No', val.loanData.closeStatus.toString(), // @ts-ignore
                  moment__WEBPACK_IMPORTED_MODULE_3__(val.loanData.dateOfClosure).format('DD-MM-YYYY'), val.loanData.userId]);
                } else {
                  body.push([// @ts-ignore
                  moment__WEBPACK_IMPORTED_MODULE_3__(val.loanData.date).format('DD-MM-YYYY'), val.loanData.loanAmount.toString(), val.loanData.loanDuration.toString(), val.loanData.loanType.toString(), 'Yes', val.loanData.closeStatus.toString(), // @ts-ignore
                  moment__WEBPACK_IMPORTED_MODULE_3__(val.loanData.dateOfClosure).format('DD-MM-YYYY'), val.loanData.userId]);
                }
              } else {
                if (val.loanData.closeLoan === 0) {
                  body.push([// @ts-ignore
                  moment__WEBPACK_IMPORTED_MODULE_3__(val.loanData.date).format('DD-MM-YYYY'), val.loanData.loanAmount.toString(), val.loanData.loanDuration.toString(), val.loanData.loanType.toString(), 'No', val.loanData.closeStatus, val.loanData.dateOfClosure, val.loanData.userId]);
                } else {
                  body.push([// @ts-ignore
                  moment__WEBPACK_IMPORTED_MODULE_3__(val.loanData.date).format('DD-MM-YYYY'), val.loanData.loanAmount.toString(), val.loanData.loanDuration.toString(), val.loanData.loanType.toString(), 'Yes', val.loanData.closeStatus, val.loanData.dateOfClosure, val.loanData.userId]);
                }
              }
            } else {
              if (_this.isDate(val.loanData.dateOfClosure)) {
                if (val.loanData.closeLoan === 0) {
                  body.push([val.loanData.date.toString(), val.loanData.loanAmount.toString(), val.loanData.loanDuration.toString(), val.loanData.loanType.toString(), 'No', val.loanData.closeStatus, // @ts-ignore
                  moment__WEBPACK_IMPORTED_MODULE_3__(val.loanData.dateOfClosure).format('DD-MM-YYYY'), val.loanData.userId]);
                } else {
                  body.push([val.loanData.date.toString(), val.loanData.loanAmount.toString(), val.loanData.loanDuration.toString(), val.loanData.loanType.toString(), 'Yes', val.loanData.closeStatus, // @ts-ignore
                  moment__WEBPACK_IMPORTED_MODULE_3__(val.loanData.dateOfClosure).format('DD-MM-YYYY'), val.loanData.userId]);
                }
              } else {
                if (val.loanData.closeLoan === 0) {
                  body.push([val.loanData.date.toString(), val.loanData.loanAmount.toString(), val.loanData.loanDuration.toString(), val.loanData.loanType.toString(), 'No', val.loanData.closeStatus, // @ts-ignore
                  moment__WEBPACK_IMPORTED_MODULE_3__(val.loanData.dateOfClosure).format('DD-MM-YYYY'), val.loanData.userId]);
                } else {
                  body.push([val.loanData.date.toString(), val.loanData.loanAmount.toString(), val.loanData.loanDuration.toString(), val.loanData.loanType.toString(), 'Yes', val.loanData.closeStatus, // @ts-ignore
                  moment__WEBPACK_IMPORTED_MODULE_3__(val.loanData.dateOfClosure).format('DD-MM-YYYY'), val.loanData.userId]);
                }

                body.push([val.loanData.date.toString(), val.loanData.loanAmount.toString(), val.loanData.loanDuration.toString(), val.loanData.loanType.toString(), val.loanData.closeLoan.toString(), val.loanData.closeStatus, val.loanData.dateOfClosure, val.loanData.userId]);
              }
            }

            if (val.loanBook) {
              body.push([_this.createLoanBookTable(val.loanBook), {}, {}, {}, {}, {}, {}, {}]);
            }

            if (val.closeData) {
              body.push([_this.createCloseTable(val.closeData, val.loanData, val.chequeData), {}, {}, {}, {}, {}, {}, {}]);
            }
          });
          console.log(body);
          return body;
        }
      }, {
        key: "createLoanBookTable",
        value: function createLoanBookTable(data) {
          return {
            colSpan: 8,
            alignment: 'center',
            style: 'nestedTable',
            table: {
              widths: ['*', '*', '*', '*', '*', '*', '*', '*'],
              headerRows: 1,
              body: this.createLoanBookBody(data)
            }
          };
        }
      }, {
        key: "createLoanBookBody",
        value: function createLoanBookBody(data) {
          var _this2 = this;

          var body = [];
          body.push([{
            text: 'EMI Details',
            colSpan: 8,
            style: 'subheader',
            alignment: 'center'
          }, {}, {}, {}, {}, {}, {}]);
          body.push([{
            text: 'EMI Date',
            colSpan: 2,
            style: 'tableHeader',
            alignment: 'center'
          }, {}, {
            text: 'Particulars',
            colSpan: 3,
            style: 'tableHeader',
            alignment: 'center'
          }, {}, {}, {
            text: 'EMI Paid',
            colSpan: 3,
            style: 'tableHeader',
            alignment: 'center'
          }, {}, {}]);
          data.forEach(function (val) {
            console.log(val);

            if (_this2.isDate(val.date)) {
              body.push([{
                // @ts-ignore
                text: moment__WEBPACK_IMPORTED_MODULE_3__(val.date).format('DD-MM-YYYY'),
                colSpan: 2,
                alignment: 'center'
              }, {}, {
                text: val.particulars.toString(),
                colSpan: 3,
                alignment: 'center'
              }, {}, {}, {
                text: val.credit.toString(),
                colSpan: 3,
                alignment: 'center'
              }, {}, {}]);
            } else {
              body.push([{
                text: val.date.toString(),
                colSpan: 2,
                alignment: 'center'
              }, {}, {
                text: val.particulars.toString(),
                colSpan: 3,
                alignment: 'center'
              }, {}, {}, {
                text: val.credit.toString(),
                colSpan: 3,
                alignment: 'center'
              }, {}, {}]);
            }
          });
          return body;
        }
      }, {
        key: "createCloseTable",
        value: function createCloseTable(data, loanData, chequeData) {
          return {
            colSpan: 8,
            alignment: 'center',
            style: 'nestedTable',
            table: {
              widths: ['14.66%', 'auto', '*', '*', '*', '*', '*', 'auto'],
              headerRows: 1,
              body: this.createCloseBody(data, loanData, chequeData)
            }
          };
        }
      }, {
        key: "createCloseBody",
        value: function createCloseBody(data, loanData, chequeData) {
          var body = [];
          body.push([{
            text: 'Loan Closure Details',
            colSpan: 8,
            style: 'subheader',
            alignment: 'center'
          }, {}, {}, {}, {}, {}, {}, {}]);

          if (data[0].mode === 'Cash') {
            body.push([{
              text: 'Date',
              colSpan: 2,
              style: 'tableHeader',
              alignment: 'center'
            }, {}, {
              text: 'Loan Status',
              colSpan: 2,
              style: 'tableHeader',
              alignment: 'center'
            }, {}, {
              text: 'Mode of Payment',
              colSpan: 2,
              style: 'tableHeader',
              alignment: 'center'
            }, {}, {
              text: 'Paid Amount',
              colSpan: 2,
              style: 'tableHeader',
              alignment: 'center'
            }, {}]);

            if (this.isDate(data[0].date)) {
              body.push([{
                // @ts-ignore
                text: moment__WEBPACK_IMPORTED_MODULE_3__(data[0].date).format('DD-MM-YYYY'),
                colSpan: 2,
                alignment: 'center'
              }, {}, {
                text: loanData.closeStatus,
                colSpan: 2,
                alignment: 'center'
              }, {}, {
                text: data[0].mode.toString(),
                colSpan: 2,
                alignment: 'center'
              }, {}, {
                text: data[0].credit.toString(),
                colSpan: 2,
                alignment: 'center'
              }, {}]);
            } else {
              body.push([{
                text: data[0].date.toString(),
                colSpan: 2,
                alignment: 'center'
              }, {}, {
                text: loanData.closeStatus,
                colSpan: 2,
                alignment: 'center'
              }, {}, {
                text: data[0].mode.toString(),
                colSpan: 2,
                alignment: 'center'
              }, {}, {
                text: data[0].credit.toString(),
                colSpan: 2,
                alignment: 'center'
              }, {}]);
            }

            return body;
          } else {
            body.push([{
              text: 'Date',
              style: 'tableHeader',
              alignment: 'center'
            }, {
              text: 'Loan Status',
              style: 'tableHeader',
              alignment: 'center'
            }, {
              text: 'Mode of Payment',
              style: 'tableHeader',
              alignment: 'center'
            }, {
              text: 'Paid Amount',
              style: 'tableHeader',
              alignment: 'center'
            }, {
              text: 'Cheque Date',
              style: 'tableHeader',
              alignment: 'center'
            }, {
              text: 'Bank Name',
              style: 'tableHeader',
              alignment: 'center'
            }, {
              text: 'Cheque Number',
              colSpan: 2,
              style: 'tableHeader',
              alignment: 'center'
            }, {}]);

            if (this.isDate(data[0].date)) {
              if (this.isDate(chequeData[0].chequeDate)) {
                body.push([{
                  // @ts-ignore
                  text: moment__WEBPACK_IMPORTED_MODULE_3__(data[0].date).format('DD-MM-YYYY'),
                  alignment: 'center'
                }, {
                  text: loanData.closeStatus,
                  alignment: 'center'
                }, {
                  text: data[0].mode.toString(),
                  alignment: 'center'
                }, {
                  text: data[0].credit.toString(),
                  alignment: 'center'
                }, {
                  // @ts-ignore
                  text: moment__WEBPACK_IMPORTED_MODULE_3__(chequeData[0].chequeDate).format('DD-MM-YYYY'),
                  alignment: 'center'
                }, {
                  text: chequeData[0].bankName.toString(),
                  alignment: 'center'
                }, {
                  text: chequeData[0].chequeNo.toString(),
                  colSpan: 2,
                  alignment: 'center'
                }, {}]);
              } else {
                body.push([{
                  // @ts-ignore
                  text: moment__WEBPACK_IMPORTED_MODULE_3__(data[0].date).format('DD-MM-YYYY'),
                  alignment: 'center'
                }, {
                  text: loanData.closeStatus,
                  alignment: 'center'
                }, {
                  text: data[0].mode.toString(),
                  alignment: 'center'
                }, {
                  text: data[0].credit.toString(),
                  alignment: 'center'
                }, {
                  text: chequeData[0].chequeDate,
                  alignment: 'center'
                }, {
                  text: chequeData[0].bankName.toString(),
                  alignment: 'center'
                }, {
                  text: chequeData[0].chequeNo.toString(),
                  colSpan: 2,
                  alignment: 'center'
                }, {}]);
              }
            } else {
              if (this.isDate(chequeData[0].chequeDate)) {
                body.push([{
                  text: data[0].date,
                  alignment: 'center'
                }, {
                  text: loanData.closeStatus,
                  alignment: 'center'
                }, {
                  text: data[0].mode.toString(),
                  alignment: 'center'
                }, {
                  text: data[0].credit.toString(),
                  alignment: 'center'
                }, {
                  // @ts-ignore
                  text: moment__WEBPACK_IMPORTED_MODULE_3__(chequeData[0].chequeDate).format('DD-MM-YYYY'),
                  alignment: 'center'
                }, {
                  text: chequeData[0].bankName.toString(),
                  alignment: 'center'
                }, {
                  text: chequeData[0].chequeNo.toString(),
                  colSpan: 2,
                  alignment: 'center'
                }, {}]);
              } else {
                body.push([{
                  text: data[0].date,
                  alignment: 'center'
                }, {
                  text: loanData.closeStatus,
                  alignment: 'center'
                }, {
                  text: data[0].mode.toString(),
                  alignment: 'center'
                }, {
                  text: data[0].credit.toString(),
                  alignment: 'center'
                }, {
                  text: chequeData[0].chequeDate,
                  alignment: 'center'
                }, {
                  text: chequeData[0].bankName.toString(),
                  alignment: 'center'
                }, {
                  text: chequeData[0].chequeNo.toString(),
                  colSpan: 2,
                  alignment: 'center'
                }, {}]);
              }
            }

            return body;
          }
        }
      }, {
        key: "createCashBody",
        value: function createCashBody(data) {
          var _this3 = this;

          var columns = [{
            text: 'Date',
            style: 'tableHeader'
          }, {
            text: 'Particulars',
            style: 'tableHeader'
          }, {
            text: 'Credit',
            style: 'tableHeader',
            fillColor: '#7CFC00'
          }, {
            text: 'Debit',
            style: 'tableHeader',
            fillColor: '#DC143C'
          }, {
            text: 'Type',
            style: 'tableHeader'
          }, {
            text: 'User Id',
            style: 'tableHeader'
          }];
          var body = [];
          body.push(columns);
          data.forEach(function (val) {
            if (_this3.isDate(val.date)) {
              if (val.credit === null) {
                body.push([// @ts-ignore
                moment__WEBPACK_IMPORTED_MODULE_3__(val.date).format('DD-MM-YYYY'), val.particulars.toString(), {
                  text: '-',
                  fillColor: '#7CFC00'
                }, {
                  text: val.debit,
                  fillColor: '#DC143C'
                }, val.type, val.userId.toString()]);
              } else {
                body.push([// @ts-ignore
                moment__WEBPACK_IMPORTED_MODULE_3__(val.date).format('DD-MM-YYYY'), val.particulars.toString(), {
                  text: val.credit.toString(),
                  fillColor: '#7CFC00'
                }, {
                  text: '-',
                  fillColor: '#DC143C'
                }, val.type, val.userId.toString()]);
              }
            } else {
              if (val.credit === null) {
                body.push([val.date, val.particulars.toString(), {
                  text: '-',
                  fillColor: '#7CFC00'
                }, {
                  text: val.debit,
                  fillColor: '#DC143C'
                }, val.type, val.userId.toString()]);
              } else {
                body.push([val.date.toString(), val.particulars.toString(), {
                  text: val.credit.toString(),
                  fillColor: '#7CFC00'
                }, {
                  text: '-',
                  fillColor: '#DC143C'
                }, val.type, val.userId.toString()]);
              }
            }
          });
          console.log(body);
          return body;
        }
      }, {
        key: "createChequeTranBody",
        value: function createChequeTranBody(data) {
          var _this4 = this;

          var columns = [{
            text: 'Date',
            style: 'tableHeader'
          }, {
            text: 'Particulars',
            style: 'tableHeader'
          }, {
            text: 'Credit',
            style: 'tableHeader',
            fillColor: '#7CFC00'
          }, {
            text: 'Debit',
            style: 'tableHeader',
            fillColor: '#DC143C'
          }, {
            text: 'Type',
            style: 'tableHeader'
          }, {
            text: 'User Id',
            style: 'tableHeader'
          }];
          var body = [];
          body.push(columns);
          data.forEach(function (val) {
            if (_this4.isDate(val.account.date)) {
              if (val.account.credit === null) {
                body.push([// @ts-ignore
                moment__WEBPACK_IMPORTED_MODULE_3__(val.account.date).format('DD-MM-YYYY'), val.account.particulars.toString(), {
                  text: '-',
                  fillColor: '#7CFC00'
                }, {
                  text: val.account.debit,
                  fillColor: '#DC143C'
                }, val.account.type, val.account.userId.toString()]);
              } else {
                body.push([// @ts-ignore
                moment__WEBPACK_IMPORTED_MODULE_3__(val.account.date).format('DD-MM-YYYY'), val.account.particulars.toString(), {
                  text: val.account.credit,
                  fillColor: '#7CFC00'
                }, {
                  text: '-',
                  fillColor: '#DC143C'
                }, val.account.type, val.account.userId.toString()]);
              }
            } else {
              if (val.account.credit === null) {
                body.push([val.account.date, val.account.particulars.toString(), {
                  text: '-',
                  fillColor: '#7CFC00'
                }, {
                  text: val.account.debit,
                  fillColor: '#DC143C'
                }, val.account.type, val.account.userId.toString()]);
              } else {
                body.push([val.account.date.toString(), val.account.particulars.toString(), val.account.mode.toString(), {
                  text: val.account.credit,
                  fillColor: '#7CFC00'
                }, {
                  text: '-',
                  fillColor: '#DC143C'
                }, val.account.type, val.account.userId.toString()]);
              }
            }

            if (val.cheque) {
              body.push([_this4.createChequeTable(val.cheque), {}, {}, {}, {}, {}]);
            }
          });
          console.log(body);
          return body;
        }
      }, {
        key: "createCreditBody",
        value: function createCreditBody(data) {
          var _this5 = this;

          var body = [];
          var columns = [{
            text: 'Date',
            style: 'tableHeader'
          }, {
            text: 'Particulars',
            style: 'tableHeader'
          }, {
            text: 'Mode',
            style: 'tableHeader'
          }, {
            text: 'Credit',
            style: 'tableHeader',
            fillColor: '#7CFC00'
          }, {
            text: 'Type',
            style: 'tableHeader'
          }, {
            text: 'User Id',
            style: 'tableHeader'
          }];
          body.push(columns);
          data.forEach(function (val) {
            if (_this5.isDate(val.account.date)) {
              if (val.account.credit === null) {
                body.push([// @ts-ignore
                moment__WEBPACK_IMPORTED_MODULE_3__(val.account.date).format('DD-MM-YYYY'), val.account.particulars.toString(), val.account.mode, {
                  text: '-',
                  fillColor: '#7CFC00'
                }, val.account.type, val.account.userId.toString()]);
              } else {
                body.push([// @ts-ignore
                moment__WEBPACK_IMPORTED_MODULE_3__(val.account.date).format('DD-MM-YYYY'), val.account.particulars.toString(), val.account.mode, {
                  text: val.account.credit.toString(),
                  fillColor: '#7CFC00'
                }, val.account.type, val.account.userId.toString()]);
              }
            } else {
              if (val.account.credit === null) {
                body.push([val.account.date, val.account.particulars.toString(), val.account.mode, {
                  text: '-',
                  fillColor: '#7CFC00'
                }, val.account.type, val.account.userId.toString()]);
              } else {
                body.push([val.account.date.toString(), val.account.particulars.toString(), val.account.mode, {
                  text: val.account.credit.toString(),
                  fillColor: '#7CFC00'
                }, val.account.type, val.account.userId.toString()]);
              }
            }

            if (val.cheque) {
              body.push([_this5.createChequeTable(val.cheque), {}, {}, {}, {}, {}]);
            }
          });
          console.log(body);
          return body;
        }
      }, {
        key: "createDebitBody",
        value: function createDebitBody(data) {
          var _this6 = this;

          var body = [];
          var columns = [{
            text: 'Date',
            style: 'tableHeader'
          }, {
            text: 'Particulars',
            style: 'tableHeader'
          }, {
            text: 'Mode',
            style: 'tableHeader'
          }, {
            text: 'Debit',
            style: 'tableHeader',
            fillColor: '#DC143C'
          }, {
            text: 'Type',
            style: 'tableHeader'
          }, {
            text: 'User Id',
            style: 'tableHeader'
          }];
          body.push(columns);
          data.forEach(function (val) {
            if (_this6.isDate(val.account.date)) {
              if (val.account.debit === null) {
                body.push([// @ts-ignore
                moment__WEBPACK_IMPORTED_MODULE_3__(val.account.date).format('DD-MM-YYYY'), val.account.particulars.toString(), val.account.mode.toString(), {
                  text: '-',
                  fillColor: '#DC143C'
                }, val.account.type, val.account.userId.toString()]);
              } else {
                body.push([// @ts-ignore
                moment__WEBPACK_IMPORTED_MODULE_3__(val.account.date).format('DD-MM-YYYY'), val.account.particulars.toString(), val.account.mode.toString(), {
                  text: val.account.debit.toString(),
                  fillColor: '#DC143C'
                }, val.account.type, val.account.userId.toString()]);
              }
            } else {
              if (val.account.debit === null) {
                body.push([val.account.date, val.account.particulars.toString(), val.account.mode.toString(), {
                  text: '-',
                  fillColor: '#DC143C'
                }, val.account.type, val.account.userId.toString()]);
              } else {
                body.push([val.account.date.toString(), val.account.particulars.toString(), val.account.mode.toString(), {
                  text: val.account.debit.toString(),
                  fillColor: '#DC143C'
                }, val.account.type, val.account.userId.toString()]);
              }
            }

            if (val.cheque) {
              body.push([_this6.createChequeTable(val.cheque), {}, {}, {}, {}, {}]);
            }
          });
          console.log(body);
          return body;
        }
      }, {
        key: "createBody",
        value: function createBody(data) {
          var _this7 = this;

          var body = [];
          var columns = [{
            text: 'Date',
            style: 'tableHeader'
          }, {
            text: 'Particulars',
            style: 'tableHeader'
          }, {
            text: 'Mode',
            style: 'tableHeader'
          }, {
            text: 'Credit',
            style: 'tableHeader',
            fillColor: '#7CFC00'
          }, {
            text: 'Debit',
            style: 'tableHeader',
            fillColor: '#DC143C'
          }, {
            text: 'User Id',
            style: 'tableHeader'
          }];
          body.push(columns);
          data.forEach(function (val) {
            if (_this7.isDate(val.account.date)) {
              if (val.account.credit === null) {
                body.push([// @ts-ignore
                moment__WEBPACK_IMPORTED_MODULE_3__(val.account.date).format('DD-MM-YYYY'), val.account.particulars.toString(), val.account.mode.toString(), {
                  text: '-',
                  fillColor: '#7CFC00'
                }, {
                  text: val.account.debit,
                  fillColor: '#DC143C'
                }, val.account.userId.toString()]);
              } else {
                body.push([// @ts-ignore
                moment__WEBPACK_IMPORTED_MODULE_3__(val.account.date).format('DD-MM-YYYY'), val.account.particulars.toString(), val.account.mode.toString(), {
                  text: val.account.credit,
                  fillColor: '#7CFC00'
                }, {
                  text: '-',
                  fillColor: '#DC143C'
                }, val.account.userId.toString()]);
              }
            } else {
              if (val.account.credit === null) {
                body.push([val.account.date, val.account.particulars.toString(), val.account.mode.toString(), {
                  text: '-',
                  fillColor: '#7CFC00'
                }, {
                  text: val.account.debit,
                  fillColor: '#DC143C'
                }, val.account.userId.toString()]);
              } else {
                body.push([val.account.date.toString(), val.account.particulars.toString(), val.account.mode.toString(), {
                  text: val.account.credit,
                  fillColor: '#7CFC00'
                }, {
                  text: '-',
                  fillColor: '#DC143C'
                }, val.account.userId.toString()]);
              }
            }

            if (val.cheque) {
              body.push([_this7.createChequeTable(val.cheque), {}, {}, {}, {}, {}]);
            }
          });
          console.log(body);
          return body;
        }
      }, {
        key: "createChequeTable",
        value: function createChequeTable(data) {
          return {
            colSpan: 6,
            alignment: 'center',
            style: 'nestedTable',
            table: {
              widths: ['16.66%', '*', '16.66%', '*', '16.66%', '*'],
              headerRows: 1,
              body: this.createChequeBody(data)
            }
          };
        }
      }, {
        key: "createChequeBody",
        value: function createChequeBody(data) {
          var _this8 = this;

          var body = [];
          body.push([{
            text: 'Cheque Details',
            colSpan: 6,
            style: 'subheader',
            alignment: 'center'
          }, {}, {}, {}, {}, {}]);
          body.push([{
            text: 'Cheque Date',
            colSpan: 2,
            style: 'tableHeader',
            alignment: 'center'
          }, {}, {
            text: 'Bank Name',
            colSpan: 2,
            style: 'tableHeader',
            alignment: 'center'
          }, {}, {
            text: 'Cheque Number',
            colSpan: 2,
            style: 'tableHeader',
            alignment: 'center'
          }, {}]);
          data.forEach(function (val) {
            if (_this8.isDate(val.chequeDate)) {
              body.push([{
                // @ts-ignore
                text: moment__WEBPACK_IMPORTED_MODULE_3__(val.chequeDate.toString()).format('DD-MM-YYYY'),
                colSpan: 2,
                alignment: 'center'
              }, {}, {
                text: val.bankName.toString(),
                colSpan: 2,
                alignment: 'center'
              }, {}, {
                text: val.chequeNo.toString(),
                colSpan: 2,
                alignment: 'center'
              }, {}]);
            } else {
              body.push([{
                text: val.chequeDate.toString(),
                colSpan: 2,
                alignment: 'center'
              }, {}, {
                text: val.bankName.toString(),
                colSpan: 2,
                alignment: 'center'
              }, {}, {
                text: val.chequeNo.toString(),
                colSpan: 2,
                alignment: 'center'
              }, {}]);
            }
          });
          return body;
        }
      }, {
        key: "createCDEBody",
        value: function createCDEBody(data) {
          var _this9 = this;

          var body = [];
          var columns = [{
            text: 'Date',
            style: 'tableHeader'
          }, {
            text: 'Particulars',
            style: 'tableHeader'
          }, {
            text: 'Mode',
            style: 'tableHeader'
          }, {
            text: 'Credit',
            style: 'tableHeader',
            fillColor: '#7CFC00'
          }, {
            text: 'Debit',
            style: 'tableHeader',
            fillColor: '#DC143C'
          }, {
            text: 'Type',
            style: 'tableHeader'
          }, {
            text: 'User Id',
            style: 'tableHeader'
          }];
          body.push(columns);
          data.forEach(function (val) {
            if (_this9.isDate(val.account.date)) {
              if (val.account.credit === null) {
                body.push([// @ts-ignore
                moment__WEBPACK_IMPORTED_MODULE_3__(val.account.date).format('DD-MM-YYYY'), val.account.particulars.toString(), val.account.mode, {
                  text: '-',
                  fillColor: '#7CFC00'
                }, {
                  text: val.account.debit,
                  fillColor: '#DC143C'
                }, val.account.type, val.account.userId.toString()]);
              } else {
                body.push([// @ts-ignore
                moment__WEBPACK_IMPORTED_MODULE_3__(val.account.date).format('DD-MM-YYYY'), val.account.particulars.toString(), val.account.mode, {
                  text: val.account.credit,
                  fillColor: '#7CFC00'
                }, {
                  text: '-',
                  fillColor: '#DC143C'
                }, val.account.type, val.account.userId.toString()]);
              }
            } else {
              if (val.account.credit === null) {
                body.push([val.account.date, val.account.particulars.toString(), val.account.mode, {
                  text: '-',
                  fillColor: '#7CFC00'
                }, {
                  text: val.account.debit,
                  fillColor: '#DC143C'
                }, val.account.type, val.account.userId.toString()]);
              } else {
                body.push([val.account.date.toString(), val.account.particulars.toString(), val.account.mode, {
                  text: val.account.credit,
                  fillColor: '#7CFC00'
                }, {
                  text: '-',
                  fillColor: '#DC143C'
                }, val.account.type, val.account.userId.toString()]);
              }
            }

            if (val.cheque) {
              body.push([_this9.createCDEChequeTable(val.cheque), {}, {}, {}, {}, {}]);
            }
          });
          console.log(body);
          return body;
        }
      }, {
        key: "createCDEChequeTable",
        value: function createCDEChequeTable(data) {
          return {
            colSpan: 7,
            alignment: 'center',
            style: 'nestedTable',
            table: {
              widths: ['14.66%', '*', '14.66%', '*', '*', '14.66%', '*'],
              headerRows: 1,
              body: this.createCDEChequeBody(data)
            }
          };
        }
      }, {
        key: "createCDEChequeBody",
        value: function createCDEChequeBody(data) {
          var _this10 = this;

          var body = [];
          body.push([{
            text: 'Cheque Details',
            colSpan: 7,
            style: 'subheader',
            alignment: 'center'
          }, {}, {}, {}, {}, {}, {}]);
          body.push([{
            text: 'Cheque Date',
            colSpan: 2,
            style: 'tableHeader',
            alignment: 'center'
          }, {}, {
            text: 'Bank Name',
            colSpan: 3,
            style: 'tableHeader',
            alignment: 'center'
          }, {}, {}, {
            text: 'Cheque Number',
            colSpan: 2,
            style: 'tableHeader',
            alignment: 'center'
          }, {}]);
          data.forEach(function (val) {
            if (_this10.isDate(val.chequeDate)) {
              body.push([{
                // @ts-ignore
                text: moment__WEBPACK_IMPORTED_MODULE_3__(val.chequeDate.toString()).format('DD-MM-YYYY'),
                colSpan: 2,
                alignment: 'center'
              }, {}, {
                text: val.bankName.toString(),
                colSpan: 3,
                alignment: 'center'
              }, {}, {}, {
                text: val.chequeNo.toString(),
                colSpan: 2,
                alignment: 'center'
              }, {}]);
            } else {
              body.push([{
                text: val.chequeDate.toString(),
                colSpan: 2,
                alignment: 'center'
              }, {}, {
                text: val.bankName.toString(),
                colSpan: 3,
                alignment: 'center'
              }, {}, {}, {
                text: val.chequeNo.toString(),
                colSpan: 2,
                alignment: 'center'
              }, {}]);
            }
          });
          return body;
        }
      }, {
        key: "onConfirmClick",
        value: function onConfirmClick() {
          if (this.category === 'Loan Disbursal Records') {
            // @ts-ignore
            var docDefinition = {
              pageSize: 'A4',
              pageOrientation: 'landscape',
              pageMargins: [20, 20, 20, 30],
              content: [{
                text: this.category,
                style: 'header',
                alignment: 'center'
              }, {
                text: '\n'
              }, {
                text: '\n'
              }, {
                style: 'tableExample',
                table: {
                  widths: ['12%', '*', '*', '*', '*', '*', '*', '*', '*', '*', '15%'],
                  body: [[{
                    text: 'Start Date',
                    style: 'tableHeader',
                    alignment: 'right '
                  }, // @ts-ignore
                  document.getElementById('start').innerHTML, {}, {}, {}, {}, {}, {}, {}, {
                    text: 'End Date',
                    style: 'tableHeader',
                    alignment: 'right'
                  }, // @ts-ignore
                  document.getElementById('end').innerHTML]]
                },
                layout: 'noBorders',
                alignment: 'center'
              }, {
                text: '\n'
              }, {
                text: 'Loan Details',
                style: 'subheader'
              }, {
                style: 'tableExample',
                table: {
                  widths: ['10%', '*', '*', '*', '*', '*', '*', '*'],
                  headerRows: 1,
                  body: this.createLoanBody(this.loanData)
                }
              }],
              styles: {
                header: {
                  fontSize: 18,
                  bold: true,
                  margin: [0, 0, 0, 10]
                },
                subheader: {
                  fontSize: 16,
                  bold: true,
                  margin: [0, 10, 0, 5]
                },
                tableExample: {
                  margin: [0, 15, 0, 15]
                },
                nestedTable: {
                  margin: [5, 5, 5, 5]
                },
                tableHeader: {
                  bold: true,
                  fontSize: 13,
                  color: 'black'
                }
              },
              defaultStyle: {
                alignment: 'justify'
              }
            }; // @ts-ignore

            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.createPdf(docDefinition).download('Loan Disbursal Records.pdf');
          } else if (this.category === 'All Cash Transactions') {
            // @ts-ignore
            var _docDefinition = {
              pageSize: 'A4',
              pageOrientation: 'landscape',
              pageMargins: [20, 20, 20, 30],
              content: [{
                text: this.category,
                style: 'header',
                alignment: 'center'
              }, {
                text: '\n'
              }, {
                text: '\n'
              }, {
                style: 'tableExample',
                table: {
                  widths: ['12%', '*', '*', '*', '*', '*', '*', '*', '*', '*', '15%'],
                  body: [[{
                    text: 'Start Date',
                    style: 'tableHeader',
                    alignment: 'right '
                  }, // @ts-ignore
                  document.getElementById('start').innerHTML, {}, {}, {}, {}, {}, {}, {}, {
                    text: 'End Date',
                    style: 'tableHeader',
                    alignment: 'right'
                  }, // @ts-ignore
                  document.getElementById('end').innerHTML]]
                },
                layout: 'noBorders',
                alignment: 'center'
              }, {
                text: '\n'
              }, {
                text: 'Cash Transactions',
                style: 'subheader'
              }, {
                style: 'tableExample',
                table: {
                  widths: ['14%', '50%', '*', '*', '*', '*'],
                  headerRows: 1,
                  body: this.createCashBody(this.accountData)
                }
              }],
              styles: {
                header: {
                  fontSize: 18,
                  bold: true,
                  margin: [0, 0, 0, 10]
                },
                subheader: {
                  fontSize: 16,
                  bold: true,
                  margin: [0, 10, 0, 5]
                },
                tableExample: {
                  margin: [0, 15, 0, 15]
                },
                nestedTable: {
                  margin: [5, 5, 5, 5]
                },
                tableHeader: {
                  bold: true,
                  fontSize: 13,
                  color: 'black'
                }
              },
              defaultStyle: {
                alignment: 'justify'
              }
            }; // @ts-ignore

            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.createPdf(_docDefinition).download('Cash Transactions.pdf');
          } else if (this.category === 'All Cheque Transactions') {
            // @ts-ignore
            var _docDefinition2 = {
              pageSize: 'A4',
              pageOrientation: 'landscape',
              pageMargins: [20, 20, 20, 30],
              content: [{
                text: this.category,
                style: 'header',
                alignment: 'center'
              }, {
                text: '\n'
              }, {
                text: '\n'
              }, {
                style: 'tableExample',
                table: {
                  widths: ['12%', '*', '*', '*', '*', '*', '*', '*', '*', '*', '15%'],
                  body: [[{
                    text: 'Start Date',
                    style: 'tableHeader',
                    alignment: 'right '
                  }, // @ts-ignore
                  document.getElementById('start').innerHTML, {}, {}, {}, {}, {}, {}, {}, {
                    text: 'End Date',
                    style: 'tableHeader',
                    alignment: 'right'
                  }, // @ts-ignore
                  document.getElementById('end').innerHTML]]
                },
                layout: 'noBorders',
                alignment: 'center'
              }, {
                text: '\n'
              }, {
                text: '\n'
              }, {
                text: 'Cheque Transactions',
                style: 'subheader'
              }, {
                style: 'tableExample',
                table: {
                  widths: ['14%', '50%', '*', '*', '*', '*'],
                  headerRows: 1,
                  body: this.createChequeTranBody(this.accountData)
                }
              }],
              styles: {
                header: {
                  fontSize: 18,
                  bold: true,
                  margin: [0, 0, 0, 10]
                },
                subheader: {
                  fontSize: 16,
                  bold: true,
                  margin: [0, 10, 0, 5]
                },
                tableExample: {
                  margin: [0, 15, 0, 15]
                },
                nestedTable: {
                  margin: [5, 5, 5, 5]
                },
                tableHeader: {
                  bold: true,
                  fontSize: 13,
                  color: 'black'
                }
              },
              defaultStyle: {
                alignment: 'justify'
              }
            }; // @ts-ignore

            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.createPdf(_docDefinition2).download('Cheque Transactions.pdf');
          } else if (this.category === 'Credit Transactions') {
            // @ts-ignore
            var _docDefinition3 = {
              pageSize: 'A4',
              pageOrientation: 'landscape',
              pageMargins: [20, 20, 20, 30],
              content: [{
                text: this.category,
                style: 'header',
                alignment: 'center'
              }, {
                text: '\n'
              }, {
                text: '\n'
              }, {
                style: 'tableExample',
                table: {
                  widths: ['12%', '*', '*', '*', '*', '*', '*', '*', '*', '*', '15%'],
                  body: [[{
                    text: 'Start Date',
                    style: 'tableHeader',
                    alignment: 'right '
                  }, // @ts-ignore
                  document.getElementById('start').innerHTML, {}, {}, {}, {}, {}, {}, {}, {
                    text: 'End Date',
                    style: 'tableHeader',
                    alignment: 'right'
                  }, // @ts-ignore
                  document.getElementById('end').innerHTML]]
                },
                layout: 'noBorders',
                alignment: 'center'
              }, {
                text: '\n'
              }, {
                text: 'Credit Transactions',
                style: 'subheader'
              }, {
                style: 'tableExample',
                table: {
                  widths: ['*', '50%', '*', '*', '*', '*'],
                  headerRows: 1,
                  body: this.createCreditBody(this.accountData)
                }
              }],
              styles: {
                header: {
                  fontSize: 18,
                  bold: true,
                  margin: [0, 0, 0, 10]
                },
                subheader: {
                  fontSize: 16,
                  bold: true,
                  margin: [0, 10, 0, 5]
                },
                tableExample: {
                  margin: [0, 15, 0, 15]
                },
                nestedTable: {
                  margin: [5, 5, 5, 5]
                },
                tableHeader: {
                  bold: true,
                  fontSize: 13,
                  color: 'black'
                }
              },
              defaultStyle: {
                alignment: 'justify'
              }
            }; // @ts-ignore

            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.createPdf(_docDefinition3).download('Credit Transactions.pdf');
          } else if (this.category === 'Debit Transactions') {
            // @ts-ignore
            var _docDefinition4 = {
              pageSize: 'A4',
              pageOrientation: 'landscape',
              pageMargins: [20, 20, 20, 30],
              content: [{
                text: this.category,
                style: 'header',
                alignment: 'center'
              }, {
                text: '\n'
              }, {
                text: '\n'
              }, {
                style: 'tableExample',
                table: {
                  widths: ['12%', '*', '*', '*', '*', '*', '*', '*', '*', '*', '15%'],
                  body: [[{
                    text: 'Start Date',
                    style: 'tableHeader',
                    alignment: 'right '
                  }, // @ts-ignore
                  document.getElementById('start').innerHTML, {}, {}, {}, {}, {}, {}, {}, {
                    text: 'End Date',
                    style: 'tableHeader',
                    alignment: 'right'
                  }, // @ts-ignore
                  document.getElementById('end').innerHTML]]
                },
                layout: 'noBorders',
                alignment: 'center'
              }, {
                text: '\n'
              }, {
                text: 'Debit Transactions',
                style: 'subheader'
              }, {
                style: 'tableExample',
                table: {
                  widths: ['*', '50%', '*', '*', '*', '*'],
                  headerRows: 1,
                  body: this.createDebitBody(this.accountData)
                }
              }],
              styles: {
                header: {
                  fontSize: 18,
                  bold: true,
                  margin: [0, 0, 0, 10]
                },
                subheader: {
                  fontSize: 16,
                  bold: true,
                  margin: [0, 10, 0, 5]
                },
                tableExample: {
                  margin: [0, 15, 0, 15]
                },
                nestedTable: {
                  margin: [5, 5, 5, 5]
                },
                tableHeader: {
                  bold: true,
                  fontSize: 13,
                  color: 'black'
                }
              },
              defaultStyle: {
                alignment: 'justify'
              }
            }; // @ts-ignore

            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.createPdf(_docDefinition4).download('Debit Transactions.pdf');
          } else if (this.category === 'Expense Deductions') {
            // @ts-ignore
            var _docDefinition5 = {
              pageSize: 'A4',
              pageOrientation: 'landscape',
              pageMargins: [20, 20, 20, 30],
              content: [{
                text: this.category,
                style: 'header',
                alignment: 'center'
              }, {
                text: '\n'
              }, {
                text: '\n'
              }, {
                style: 'tableExample',
                table: {
                  widths: ['12%', '*', '*', '*', '*', '*', '*', '*', '*', '*', '15%'],
                  body: [[{
                    text: 'Start Date',
                    style: 'tableHeader',
                    alignment: 'right '
                  }, // @ts-ignore
                  document.getElementById('start').innerHTML, {}, {}, {}, {}, {}, {}, {}, {
                    text: 'End Date',
                    style: 'tableHeader',
                    alignment: 'right'
                  }, // @ts-ignore
                  document.getElementById('end').innerHTML]]
                },
                layout: 'noBorders',
                alignment: 'center'
              }, {
                text: '\n'
              }, // @ts-ignore
              {
                text: document.getElementById('subDetail').innerText,
                style: 'subheader'
              }, {
                style: 'tableExample',
                table: {
                  widths: ['16.66%', '50%', '*', '*', '*', '*'],
                  headerRows: 1,
                  body: this.createBody(this.accountData)
                }
              }],
              styles: {
                header: {
                  fontSize: 18,
                  bold: true,
                  margin: [0, 0, 0, 10]
                },
                subheader: {
                  fontSize: 16,
                  bold: true,
                  margin: [0, 10, 0, 5]
                },
                tableExample: {
                  margin: [0, 15, 0, 15]
                },
                nestedTable: {
                  margin: [5, 5, 5, 5]
                },
                tableHeader: {
                  bold: true,
                  fontSize: 13,
                  color: 'black'
                }
              },
              defaultStyle: {
                alignment: 'justify'
              }
            }; // @ts-ignore

            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.createPdf(_docDefinition5).download('Expense Deduction Report.pdf');
          } else {
            // @ts-ignore
            var _docDefinition6 = {
              pageSize: 'A4',
              pageOrientation: 'landscape',
              pageMargins: [20, 20, 20, 30],
              content: [{
                text: this.category,
                style: 'header',
                alignment: 'center'
              }, {
                text: '\n'
              }, {
                text: '\n'
              }, {
                style: 'tableExample',
                table: {
                  widths: ['12%', '*', '*', '*', '*', '*', '*', '*', '*', '*', '15%'],
                  body: [[{
                    text: 'Start Date',
                    style: 'tableHeader',
                    alignment: 'right '
                  }, // @ts-ignore
                  document.getElementById('start').innerHTML, {}, {}, {}, {}, {}, {}, {}, {
                    text: 'End Date',
                    style: 'tableHeader',
                    alignment: 'right'
                  }, // @ts-ignore
                  document.getElementById('end').innerHTML]]
                },
                layout: 'noBorders',
                alignment: 'center'
              }, {
                text: '\n'
              }, {
                text: 'Credit + Debit + Expense Transactions',
                style: 'subheader'
              }, {
                style: 'tableExample',
                table: {
                  widths: ['*', '50%', '*', '*', '*', '*', '*'],
                  headerRows: 1,
                  body: this.createCDEBody(this.accountData)
                }
              }],
              styles: {
                header: {
                  fontSize: 18,
                  bold: true,
                  margin: [0, 0, 0, 10]
                },
                subheader: {
                  fontSize: 16,
                  bold: true,
                  margin: [0, 10, 0, 5]
                },
                tableExample: {
                  margin: [0, 15, 0, 15]
                },
                nestedTable: {
                  margin: [5, 5, 5, 5]
                },
                tableHeader: {
                  bold: true,
                  fontSize: 13,
                  color: 'black'
                }
              },
              defaultStyle: {
                alignment: 'justify'
              }
            }; // @ts-ignore

            pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.createPdf(_docDefinition6).download('Credit+Debit+Expense Transactions.pdf');
          }

          this.dialogRef.close(true);
        }
      }, {
        key: "isDate",
        value: function isDate(d) {
          var result = Date.parse(d);
          if (!result) return false;else return true;
        }
      }]);

      return DialogComponent;
    }();

    DialogComponent.ctorParameters = function () {
      return [{
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
        }]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]
      }];
    };

    DialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-dialog',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dialog.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-all/dialog/dialog.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dialog.component.scss */
      "./src/app/upload-all/dialog/dialog.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])], DialogComponent);
    /***/
  },

  /***/
  "./src/app/upload-all/upload-all-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/upload-all/upload-all-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: UploadAllRoutingModule */

  /***/
  function srcAppUploadAllUploadAllRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadAllRoutingModule", function () {
      return UploadAllRoutingModule;
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


    var _upload_all_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./upload-all.component */
    "./src/app/upload-all/upload-all.component.ts");

    var routes = [{
      path: '',
      component: _upload_all_component__WEBPACK_IMPORTED_MODULE_3__["UploadAllComponent"]
    }];

    var UploadAllRoutingModule = function UploadAllRoutingModule() {
      _classCallCheck(this, UploadAllRoutingModule);
    };

    UploadAllRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UploadAllRoutingModule);
    /***/
  },

  /***/
  "./src/app/upload-all/upload-all.component.scss":
  /*!******************************************************!*\
    !*** ./src/app/upload-all/upload-all.component.scss ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUploadAllUploadAllComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".error-box {\n  padding: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBsb2FkLWFsbC9DOlxcVXNlcnNcXExlbm92b1xcRG93bmxvYWRzXFxTb2NpZXR5X0Jhbmtpbmcvc3JjXFxhcHBcXHVwbG9hZC1hbGxcXHVwbG9hZC1hbGwuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3VwbG9hZC1hbGwvdXBsb2FkLWFsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL3VwbG9hZC1hbGwvdXBsb2FkLWFsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5lcnJvci1ib3gge1xuICAgIHBhZGRpbmc6IDEwcHg7XG59XG4iLCIuZXJyb3ItYm94IHtcbiAgcGFkZGluZzogMTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/upload-all/upload-all.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/upload-all/upload-all.component.ts ***!
    \****************************************************/

  /*! exports provided: UploadAllComponent */

  /***/
  function srcAppUploadAllUploadAllComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadAllComponent", function () {
      return UploadAllComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _app_upload_all_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/upload-all/dialog/dialog.component */
    "./src/app/upload-all/dialog/dialog.component.ts");
    /* harmony import */


    var _app_upload_all_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/upload-all/services */
    "./src/app/upload-all/services/index.ts");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! sweetalert2/dist/sweetalert2.js */
    "./node_modules/sweetalert2/dist/sweetalert2.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js"); // @ts-ignore


    var UploadAllComponent = /*#__PURE__*/function () {
      function UploadAllComponent(service, dialog, fb) {
        _classCallCheck(this, UploadAllComponent);

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
          purpose: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]))
        });
        this.bankForm = this.fb.group({
          bankName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
          bankAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
          accountNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^\\d{9,18}$')])),
          accountType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
          nickName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
          code: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[A-Z]{4}[0][A-Z0-9]{6}$')]))
        });
        this.reportForm = this.fb.group({
          startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
          endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
          category: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]))
        });
      }

      _createClass(UploadAllComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this11 = this;

          this.service.getBankList().subscribe(function (result) {
            _this11.bankList = result;
            console.log(_this11.bankList);
          });
        }
      }, {
        key: "send",
        value: function send() {
          var _this12 = this;

          if ( // @ts-ignore
          !this.employeeForm.get('employeeId').value || // @ts-ignore
          !this.employeeForm.get('employeeName').value || // @ts-ignore
          !this.employeeForm.get('enrollDate').value || // @ts-ignore
          !this.employeeForm.get('amount').value || // @ts-ignore
          !this.employeeForm.get('type').value || // @ts-ignore
          !this.employeeForm.get('purpose').value) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
              title: 'Oops!',
              text: 'Fill Mandatory Fields!',
              icon: 'error'
            });
          } else if ( // @ts-ignore
          this.employeeForm.get('type').value === 'Cheque' && ( // @ts-ignore
          !this.employeeForm.get('chequeDate').value || // @ts-ignore
          !this.employeeForm.get('chequeNo').value || // @ts-ignore
          !this.employeeForm.get('bankName').value)) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
              title: 'Oops!',
              text: 'Fill Mandatory Fields!',
              icon: 'error'
            });
          } else {
            var pass = '';
            var str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ' + 'abcdefghijklmnopqrstuvwxyz0123456789@#$';

            for (var i = 1; i <= 5; i++) {
              var _char = Math.floor(Math.random() * str.length + 1);

              pass += str.charAt(_char);
            } // @ts-ignore


            var passw = pass.slice(0, 3) + this.employeeForm.get('employeeName').value.slice(0, 2) + pass.slice(3);
            var data = {
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
              particulars: this.employeeForm.get('purpose').value
            };
            console.log(data);
            this.service.sendData(data).subscribe(function (result) {
              if (result) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                  text: 'Account Created',
                  icon: 'success'
                }).then(function (isConfirm) {
                  if (isConfirm) {
                    _this12.employeeForm = _this12.fb.group({
                      employeeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                      employeeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                      fatherName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                      permAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                      currAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](''),
                      email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email])),
                      mobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(10)])),
                      altMobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(10)])),
                      landlineNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[0-9]d{2,4}-d{6,8}$')])),
                      pan: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')])),
                      aadharNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$')])),
                      enrollDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                      amount: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                      type: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                      bankName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                      chequeDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                      chequeNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                      purpose: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]))
                    });
                  }
                });
              }
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
        key: "showEmployeeAccountInfo",
        value: function showEmployeeAccountInfo() {
          this.employeeAccount = true;
          this.bankAccount = false;
          this.report = false;
        }
      }, {
        key: "showBankAccountInfo",
        value: function showBankAccountInfo() {
          this.bankAccount = true;
          this.report = false;
          this.employeeAccount = false;
        }
      }, {
        key: "showReportInfo",
        value: function showReportInfo() {
          this.report = true;
          this.employeeAccount = false;
          this.bankAccount = false;
        }
      }, {
        key: "sameAddress",
        value: function sameAddress(event) {
          console.log(event.target.checked);

          if (event.target.checked) {
            // @ts-ignore
            this.employeeForm.get('currAddress').setValue(this.employeeForm.get('permAddress').value);
          } else {
            // @ts-ignore
            this.employeeForm.get('currAddress').setValue(null);
          }
        }
      }, {
        key: "openDialog",
        value: function openDialog() {
          var _this13 = this;

          var data = {
            // @ts-ignore
            start: this.reportForm.get('startDate').value,
            // @ts-ignore
            end: this.reportForm.get('endDate').value,
            // @ts-ignore
            category: this.reportForm.get('category').value
          };
          console.log(data);

          if ( // @ts-ignore
          this.reportForm.get('category').value === 'Loan Disbursal Records') {
            this.service.getLoanData(data).subscribe(function (result) {
              console.log(result);

              if (result.loanData.length === 0) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                  title: 'Oops!',
                  text: 'Data in this range does not exists!',
                  icon: 'error'
                });
              } else {
                console.log(result);

                var dialogRef = _this13.dialog.open(_app_upload_all_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
                  data: {
                    loan: result.loanData,
                    // @ts-ignore
                    start: _this13.reportForm.get('startDate').value,
                    // @ts-ignore
                    end: _this13.reportForm.get('endDate').value,
                    // @ts-ignore
                    category: _this13.reportForm.get('category').value
                  },
                  height: '600px',
                  width: '850px'
                });

                dialogRef.afterClosed().subscribe(function (ress) {
                  console.log(ress);

                  if (ress === '') {
                    console.log(ress);
                    _this13.reportForm = _this13.fb.group({
                      startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                      endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                      category: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]))
                    });
                  }
                });
              }
            }, function (error1) {
              sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Oops!',
                text: 'Try again!',
                icon: 'error'
              });
            });
          } else if ( // @ts-ignore
          this.reportForm.get('category').value === 'Credit Transactions') {
            this.service.getCreditData(data).subscribe(function (result) {
              console.log(result);

              if (result.accountData.length === 0) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                  title: 'Oops!',
                  text: 'Data in this range does not exists!',
                  icon: 'error'
                });
              } else {
                console.log(result);

                var dialogRef = _this13.dialog.open(_app_upload_all_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
                  data: {
                    accountData: result.accountData,
                    // @ts-ignore
                    start: _this13.reportForm.get('startDate').value,
                    // @ts-ignore
                    end: _this13.reportForm.get('endDate').value,
                    // @ts-ignore
                    category: _this13.reportForm.get('category').value
                  },
                  height: '600px',
                  width: '850px'
                });

                dialogRef.afterClosed().subscribe(function (ress) {
                  if (ress === '') {
                    console.log(ress);
                    _this13.reportForm = _this13.fb.group({
                      startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                      endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                      category: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]))
                    });
                  }
                });
              }
            }, function (error1) {
              sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Oops!',
                text: 'Try again!',
                icon: 'error'
              });
            });
          } else if ( // @ts-ignore
          this.reportForm.get('category').value === 'Debit Transactions') {
            this.service.getDebitData(data).subscribe(function (result) {
              console.log(result);

              if (result.accountData.length === 0) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                  title: 'Oops!',
                  text: 'Data in this range does not exists!',
                  icon: 'error'
                });
              } else {
                console.log(result);

                var dialogRef = _this13.dialog.open(_app_upload_all_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
                  data: {
                    accountData: result.accountData,
                    // @ts-ignore
                    start: _this13.reportForm.get('startDate').value,
                    // @ts-ignore
                    end: _this13.reportForm.get('endDate').value,
                    // @ts-ignore
                    category: _this13.reportForm.get('category').value
                  },
                  height: '600px',
                  width: '850px'
                });

                dialogRef.afterClosed().subscribe(function (ress) {
                  if (ress === '') {
                    console.log(ress);
                    _this13.reportForm = _this13.fb.group({
                      startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                      endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                      category: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]))
                    });
                  }
                });
              }
            }, function (error1) {
              sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Oops!',
                text: 'Try again!',
                icon: 'error'
              });
            });
          } else if ( // @ts-ignore
          this.reportForm.get('category').value === 'Expense Deductions') {
            this.service.getExpenseData(data).subscribe(function (result) {
              console.log(result);

              if (result.accountData.length === 0) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                  title: 'Oops!',
                  text: 'Data in this range does not exists!',
                  icon: 'error'
                });
              } else {
                console.log(result);

                var dialogRef = _this13.dialog.open(_app_upload_all_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
                  data: {
                    accountData: result.accountData,
                    // @ts-ignore
                    start: _this13.reportForm.get('startDate').value,
                    // @ts-ignore
                    end: _this13.reportForm.get('endDate').value,
                    // @ts-ignore
                    category: _this13.reportForm.get('category').value
                  },
                  height: '600px',
                  width: '850px'
                });

                dialogRef.afterClosed().subscribe(function (ress) {
                  if (ress === '') {
                    console.log(ress);
                    _this13.reportForm = _this13.fb.group({
                      startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                      endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                      category: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]))
                    });
                  }
                });
              }
            }, function (error1) {
              sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Oops!',
                text: 'Try again!',
                icon: 'error'
              });
            });
          } else if ( // @ts-ignore
          this.reportForm.get('category').value === 'Credit+Debit+Expense Transactions') {
            this.service.getCreditDebitExpenseData(data).subscribe(function (result) {
              console.log(result);

              if (result.accountData.length === 0) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                  title: 'Oops!',
                  text: 'Data in this range does not exists!',
                  icon: 'error'
                });
              } else {
                console.log(result);

                var dialogRef = _this13.dialog.open(_app_upload_all_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
                  data: {
                    accountData: result.accountData,
                    // @ts-ignore
                    start: _this13.reportForm.get('startDate').value,
                    // @ts-ignore
                    end: _this13.reportForm.get('endDate').value,
                    // @ts-ignore
                    category: _this13.reportForm.get('category').value
                  },
                  height: '600px',
                  width: '850px'
                });

                dialogRef.afterClosed().subscribe(function (ress) {
                  if (ress === '') {
                    console.log(ress);
                    _this13.reportForm = _this13.fb.group({
                      startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                      endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                      category: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]))
                    });
                  }
                });
              }
            }, function (error1) {
              sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Oops!',
                text: 'Try again!',
                icon: 'error'
              });
            });
          } else if ( // @ts-ignore
          this.reportForm.get('category').value === 'All Cash Transactions') {
            this.service.getCashData(data).subscribe(function (result) {
              console.log(result);

              if (result.accountData.length === 0) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                  title: 'Oops!',
                  text: 'Data in this range does not exists!',
                  icon: 'error'
                });
              } else {
                console.log(result);

                var dialogRef = _this13.dialog.open(_app_upload_all_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
                  data: {
                    accountData: result.accountData,
                    // @ts-ignore
                    start: _this13.reportForm.get('startDate').value,
                    // @ts-ignore
                    end: _this13.reportForm.get('endDate').value,
                    // @ts-ignore
                    category: _this13.reportForm.get('category').value
                  },
                  height: '600px',
                  width: '850px'
                });

                dialogRef.afterClosed().subscribe(function (ress) {
                  _this13.reportForm = _this13.fb.group({
                    startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                    endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                    category: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]))
                  });
                });
              }
            }, function (error1) {
              sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Oops!',
                text: 'Try again!',
                icon: 'error'
              });
            });
          } else {
            this.service.getChequeData(data).subscribe(function (result) {
              console.log(result);

              if (result.accountData.length === 0) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                  title: 'Oops!',
                  text: 'Data in this range does not exists!',
                  icon: 'error'
                });
              } else {
                console.log(result);

                var dialogRef = _this13.dialog.open(_app_upload_all_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
                  data: {
                    accountData: result.accountData,
                    // @ts-ignore
                    start: _this13.reportForm.get('startDate').value,
                    // @ts-ignore
                    end: _this13.reportForm.get('endDate').value,
                    // @ts-ignore
                    category: _this13.reportForm.get('category').value
                  },
                  height: '600px',
                  width: '850px'
                });

                dialogRef.afterClosed().subscribe(function (ress) {
                  _this13.reportForm = _this13.fb.group({
                    startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                    endDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                    category: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]))
                  });
                });
              }
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
        key: "sendBankData",
        value: function sendBankData() {
          var _this14 = this;

          var data = {
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
            code: this.bankForm.get('code').value
          };
          console.log(data);
          this.service.sendBankData(data).subscribe(function (result) {
            if (result) {
              sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                text: 'Account Created',
                icon: 'success'
              }).then(function (isConfirm) {
                if (isConfirm) {
                  _this14.bankForm = _this14.fb.group({
                    bankName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                    bankAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                    accountNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^\\d{9,18}$')])),
                    accountType: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                    nickName: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required])),
                    code: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(11), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern('^[A-Z]{4}[0][A-Z0-9]{6}$')]))
                  });

                  _this14.service.getBankList().subscribe(function (ress) {
                    _this14.bankList = ress;
                    console.log(_this14.bankList);
                  });
                }
              });
            }
          }, function (error1) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
              title: 'Oops!',
              text: 'Try again!',
              icon: 'error'
            });
          });
        }
      }]);

      return UploadAllComponent;
    }();

    UploadAllComponent.ctorParameters = function () {
      return [{
        type: _app_upload_all_services__WEBPACK_IMPORTED_MODULE_4__["UploadAllService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }];
    };

    UploadAllComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-upload-all',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./upload-all.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/upload-all/upload-all.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./upload-all.component.scss */
      "./src/app/upload-all/upload-all.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_upload_all_services__WEBPACK_IMPORTED_MODULE_4__["UploadAllService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])], UploadAllComponent);
    /***/
  },

  /***/
  "./src/app/upload-all/upload-all.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/upload-all/upload-all.module.ts ***!
    \*************************************************/

  /*! exports provided: UploadAllModule */

  /***/
  function srcAppUploadAllUploadAllModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploadAllModule", function () {
      return UploadAllModule;
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


    var _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/navigation/navigation.module */
    "./src/app/navigation/navigation.module.ts");
    /* harmony import */


    var _app_upload_all_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/upload-all/services */
    "./src/app/upload-all/services/index.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/snack-bar */
    "./node_modules/@angular/material/fesm2015/snack-bar.js");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./dialog/dialog.component */
    "./src/app/upload-all/dialog/dialog.component.ts");
    /* harmony import */


    var _upload_all_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./upload-all-routing.module */
    "./src/app/upload-all/upload-all-routing.module.ts");
    /* harmony import */


    var _upload_all_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./upload-all.component */
    "./src/app/upload-all/upload-all.component.ts");
    /* harmony import */


    var _app_layout_dashboard_layout_dashboard_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @app/layout-dashboard/layout-dashboard.module */
    "./src/app/layout-dashboard/layout-dashboard.module.ts");

    var UploadAllModule = function UploadAllModule() {
      _classCallCheck(this, UploadAllModule);
    };

    UploadAllModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_upload_all_component__WEBPACK_IMPORTED_MODULE_13__["UploadAllComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _upload_all_routing_module__WEBPACK_IMPORTED_MODULE_12__["UploadAllRoutingModule"], _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__["NavigationModule"], _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_10__["MatSnackBarModule"], _app_layout_dashboard_layout_dashboard_module__WEBPACK_IMPORTED_MODULE_14__["LayoutDashboardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      providers: _toConsumableArray(_app_upload_all_services__WEBPACK_IMPORTED_MODULE_6__["services"]),
      entryComponents: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"]]
    })], UploadAllModule);
    /***/
  }
}]);
//# sourceMappingURL=upload-all-upload-all-module-es5.js.map