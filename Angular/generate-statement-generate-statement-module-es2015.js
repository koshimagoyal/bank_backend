(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["generate-statement-generate-statement-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/generate-statement/dialog.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/generate-statement/dialog.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"data\">\n    <h1 mat-dialog-title align=\"center\" id=\"title\">Bank Statement</h1>\n    <mat-dialog-content class=\"mat-typography\">\n        <h3 id=\"empId\">Employee Id: {{id}}</h3>\n        <h3 id=\"empName\">Employee Name: {{name}}</h3>\n        <br>\n        <table class=\"table table-borderless\">\n            <thead>\n                <tr>\n                    <th>Particulars</th>\n                    <th>Value</th>\n                </tr>\n            </thead>\n            <tbody>\n            <tr>\n                <td>Start Date</td>\n                <td id=\"start\">{{start| date:'dd-MM-yyyy'}}</td>\n            </tr>\n            <tr>\n                <td>End Date</td>\n                <td id=\"end\">{{end| date:'dd-MM-yyyy'}}</td>\n            </tr>\n            <tr>\n                <td>Balance</td>\n                <td id=\"bal\">{{balance| indianCurrency}}</td>\n            </tr>\n            </tbody>\n        </table>\n        <br>\n        <h1 id=\"subDetail1\">Operating Account Details</h1>\n        <table class=\"table table-bordered\">\n            <thead>\n            <tr>\n                <th style=\"width: 16.66%;\">Date</th>\n                <th style=\"width: 60%;\">Particulars</th>\n                <th>Mode</th>\n                <th>Deposit</th>\n                <th>Withdrawal</th>\n            </tr>\n            </thead>\n            <tbody *ngFor=\"let val of accountData\">\n            <tr>\n                <td *ngIf=\"isDate(val.account.date); else notDate\">{{val.account.date| date:'dd-MM-yyyy'}}</td>\n                <ng-template #notDate>\n                    <td>{{val.account.date}}</td>\n                </ng-template>\n                <td *ngIf=\"val.account.particulars; else not\">{{val.account.particulars}}</td>\n                <td *ngIf=\"val.account.mode; else not\">{{val.account.mode}}</td>\n                <td class=\"table-success\" *ngIf=\"val.account.credit; else not\" id=\"deposit\">{{val.account.credit| indianCurrency}}</td>\n                <td class=\"table-danger\" *ngIf=\"val.account.debit; else not\" id=\"withDraw\">{{val.account.debit| indianCurrency}}</td>\n            </tr>\n            <tr>\n                <td *ngIf=\"val.cheque\" align=\"center\" colspan=\"5\">\n                    <h3 style=\"font-weight: bold\">Cheque Details</h3>\n                    <table style=\"width: 100%;\">\n                        <thead>\n                        <tr>\n                            <th style=\"width: 16.66%;\">Cheque Date</th>\n                            <th style=\"width: 60%;\">Bank Name</th>\n                            <th>Cheque Number</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr>\n                            <td *ngIf=\"val.cheque[0].chequeDate; else not\">{{val.cheque[0].chequeDate| date:'dd-MM-yyyy'}}</td>\n                            <td class=\"col-5\" *ngIf=\"val.cheque[0].bankName; else not\">{{val.cheque[0].bankName}}</td>\n                            <td *ngIf=\"val.cheque[0].chequeNo; else not\">{{val.cheque[0].chequeNo}}</td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </td>\n            </tr>\n            </tbody>\n        </table>\n        <br>\n        <h1 id=\"subDetail2\">Loan Account Details</h1>\n        <table class=\"table table-bordered\">\n            <thead>\n                <tr>\n                    <th>Loan Date</th>\n                    <th>Loan Amount</th>\n                    <th>Loan Duration</th>\n                    <th>Loan Type</th>\n                    <th>Close Loan</th>\n                    <th>Closure Status</th>\n                    <th>Date of Loan Closure</th>\n                </tr>\n            </thead>\n            <tbody *ngFor=\"let data of loanData;\">\n            <tr>\n                <td *ngIf=\"isDate(data.loanData.date); else notDate\">{{data.loanData.date| date:'dd-MM-yyyy'}}</td>\n                <ng-template #notDate>\n                    <td>{{data.loanData.date}}</td>\n                </ng-template>\n                <td *ngIf=\"data.loanData.loanAmount; else not\">{{data.loanData.loanAmount| indianCurrency}}</td>\n                <td *ngIf=\"data.loanData.loanDuration; else not\">{{data.loanData.loanDuration}}</td>\n                <td *ngIf=\"data.loanData.loanType; else not\">{{data.loanData.loanType}}</td>\n                <td *ngIf=\"data.loanData.closeLoan; else not\">{{data.loanData.closeLoan}}</td>\n                <td *ngIf=\"data.loanData.closeStatus; else not\">{{data.loanData.closeStatus}}</td>\n                <td *ngIf=\"data.loanData.dateOfClosure; else not\">{{data.loanData.dateOfClosure| date:'dd-MM-yyyy'}}</td>\n            </tr>\n            <tr>\n                <td *ngIf=\"data.loanBook\" align=\"center\" colspan=\"7\">\n                    <h3 style=\"font-weight: bold\">EMI Details</h3>\n                    <table style=\"width: 100%;\">\n                        <thead>\n                        <tr>\n                            <th style=\"width: 16.66%;\">EMI Date</th>\n                            <th style=\"width: 60%;\">Particulars</th>\n                            <th>EMI Paid</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr *ngFor=\"let value of data.loanBook\">\n                            <td *ngIf=\"isDate(value.date); else notDate\">{{value.date}}</td>\n                            <ng-template #notDate>\n                                <td>{{value.date}}</td>\n                            </ng-template>\n                            <td class=\"col-5\" *ngIf=\"value.particulars; else not\">{{value.particulars}}</td>\n                            <td *ngIf=\"value.credit; else not\">{{value.credit| indianCurrency}}</td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </td>\n            </tr>\n            <tr>\n                <td *ngIf=\"data.closeData && data.closeData[0].mode==='Cash';else cheque\" align=\"center\" colspan=\"7\">\n                    <h3 style=\"font-weight: bold\">Loan Closure Details</h3>\n                    <table style=\"width: 100%;\">\n                        <thead>\n                        <tr>\n                            <th style=\"width: 16.66%;\">Date</th>\n                            <th>Loan Status</th>\n                            <th>Mode of Payment</th>\n                            <th>Paid Amount</th>\n                        </tr>\n                        </thead>\n                        <tbody>\n                        <tr>\n                            <td *ngIf=\"isDate(data.closeData[0].date); else notDate\">{{data.closeData[0].date| date:'dd-MM-yyyy'}}</td>\n                            <ng-template #notDate>\n                                <td>{{data.closeData[0].date}}</td>\n                            </ng-template>\n                            <td *ngIf=\"data.loanData.closeStatus; else not\">{{data.loanData.closeStatus}}</td>\n                            <td *ngIf=\"data.closeData[0].mode; else not\">{{data.closeData[0].mode}}</td>\n                            <td *ngIf=\"data.closeData[0].credit; else not\">{{data.closeData[0].credit| indianCurrency}}</td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </td>\n                <ng-template #cheque>\n                    <td *ngIf=\"data.closeData && data.closeData[0].mode==='Cheque';\" align=\"center\" colspan=\"7\">\n                        <h3 style=\"font-weight: bold\">Loan Closure Details</h3>\n                        <table style=\"width: 100%;\">\n                            <thead>\n                            <tr>\n                                <th style=\"width: 16.66%;\">Date</th>\n                                <th>Loan Status</th>\n                                <th>Mode of Payment</th>\n                                <th>Paid Amount</th>\n                                <th>Cheque Date</th>\n                                <th>Bank Name</th>\n                                <th>Cheque Number</th>\n                            </tr>\n                            </thead>\n                            <tbody>\n                            <tr>\n                                <td *ngIf=\"isDate(data.closeData[0].date); else notDate\">{{data.closeData[0].date| date:'dd-MM-yyyy'}}</td>\n                                <ng-template #notDate>\n                                    <td>{{data.closeData[0].date}}</td>\n                                </ng-template>\n                                <td *ngIf=\"data.loanData.closeStatus; else not\">{{data.loanData.closeStatus}}</td>\n                                <td *ngIf=\"data.closeData[0].mode; else not\">{{data.closeData[0].mode}}</td>\n                                <td *ngIf=\"data.closeData[0].credit; else not\">{{data.closeData[0].credit| indianCurrency}}</td>\n                                <td *ngIf=\"data.chequeData[0].chequeDate; else not\">{{data.chequeData[0].chequeDate| date:'dd-MM-yyyy'}}</td>\n                                <td *ngIf=\"data.chequeData[0].bankName; else not\">{{data.chequeData[0].bankName}}</td>\n                                <td *ngIf=\"data.chequeData[0].chequeNo; else not\">{{data.chequeData[0].chequeNo}}</td>\n                            </tr>\n                            </tbody>\n                        </table>\n                    </td>\n                </ng-template>\n            </tr>\n            </tbody>\n        </table>\n        <ng-template #not>\n            <td>-</td>\n        </ng-template>\n    </mat-dialog-content>\n</div>\n<mat-dialog-actions align=\"end\">\n    <button class=\"btn-danger\" mat-button mat-dialog-close>Cancel</button>\n    <button class=\"btn-success\" mat-button (click)=\"onConfirmClick()\" cdkFocusInitial>Download</button>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/generate-statement/generate-statement.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/generate-statement/generate-statement.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard>\n    <sb-dashboard-head title=\"{{'Accountant.Pages.GenerateStatement' | translate}}\"></sb-dashboard-head>\n    <hr class=\"rounded\">\n    <br>\n    <div class=\"row\">\n        <div class=\"col-xl-2 col-md-1\"></div>\n        <div class=\"col-xl-8 col-md-10\">\n            <sb-card>\n                <div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{'Accountant.Pages.GenerateStatement' | translate}}</div>\n                <div class=\"card-body table-responsive\">\n                    <form class=\"form-inline\" [formGroup]=\"searchForm\" (ngSubmit)=\"showTable()\">\n                        <label>\n                            <input type=\"text\" placeholder=\"Enter Employee No\" formControlName=\"employeeNo\"/>\n                        </label>\n                        <button type=\"submit\" [disabled]=\"!searchForm.valid\">{{'Accountant.GetInfo'| translate}}</button>\n                    </form>\n                    <form class=\"form-inline\" [formGroup]=\"reportForm\" (ngSubmit)=\"openDialog()\">\n                        <table class=\"table table-striped\" *ngIf=\"table\" id=\"content\">\n                            <tbody>\n                            <tr>\n                                <td>{{'Accountant.Tables.EmployeeNo' | translate}}</td>\n                                <td><div style=\"margin-left: 16%;\">{{text}}</div></td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.EmployeeName' | translate}}</td>\n                                <td><div style=\"margin-left: 16%;\">{{name}}</div></td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.Balance' | translate}}</td>\n                                <td><div style=\"margin-left: 16%;\">{{balance| indianCurrency}}</div></td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.Start' | translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"date\" formControlName=\"start\"/>\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"reportForm.get('start').hasError('required')\">Required!</div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.End' | translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"date\" formControlName=\"end\"/>\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"reportForm.get('end').hasError('required')\">Required!</div>\n                                </td>\n                            </tr>\n                            </tbody>\n                            <button type=\"submit\" [disabled]=\"!reportForm.valid\">{{'Accountant.Pages.GenerateStatement' | translate}}</button>\n                        </table>\n                    </form>\n                </div>\n            </sb-card>\n        </div>\n        <div class=\"col-xl-2 col-md-1\"></div>\n    </div>\n</sb-layout-dashboard>\n");

/***/ }),

/***/ "./src/app/generate-statement/dialog.component.ts":
/*!********************************************************!*\
  !*** ./src/app/generate-statement/dialog.component.ts ***!
  \********************************************************/
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



// @ts-ignore



pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_5___default.a.pdfMake.vfs;
let DialogComponent = class DialogComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.id = '';
        this.name = '';
        this.start = '';
        this.end = '';
        this.balance = 0;
        this.accountData = [];
        this.loanData = [];
        console.log(data);
        if (data) {
            this.id = data.id || this.id;
            this.name = data.name || this.name;
            this.start = data.start || this.start;
            this.end = data.end || this.end;
            this.balance = data.balance || this.balance;
            this.accountData = data.accountData || this.accountData;
            this.loanData = data.loanData || this.loanData;
        }
        // this.dialogRef.updateSize('300vw', '300vw');
    }
    createAccountBody(data) {
        const body = [];
        const columns = [
            { text: 'Date', style: 'tableHeader' },
            { text: 'Particulars', style: 'tableHeader' },
            { text: 'Mode', style: 'tableHeader' },
            { text: 'Deposit', style: 'tableHeader', fillColor: '#7CFC00' },
            { text: 'Withdrawal', style: 'tableHeader', fillColor: '#DC143C' },
        ];
        body.push(columns);
        data.forEach(val => {
            if (val.account.credit === null) {
                if (this.isDate(val.account.date)) {
                    body.push([
                        moment__WEBPACK_IMPORTED_MODULE_3___default()(val.account.date).format('DD-MM-YYYY'),
                        val.account.particulars.toString(),
                        val.account.mode.toString(),
                        { text: '-', fillColor: '#7CFC00' },
                        { text: val.account.debit, fillColor: '#DC143C' },
                    ]);
                }
                else {
                    body.push([
                        val.account.date.toString(),
                        val.account.particulars.toString(),
                        val.account.mode.toString(),
                        { text: '-', fillColor: '#7CFC00' },
                        { text: val.account.debit, fillColor: '#DC143C' },
                    ]);
                }
            }
            else {
                if (this.isDate(val.account.date)) {
                    body.push([
                        moment__WEBPACK_IMPORTED_MODULE_3___default()(val.account.date).format('DD-MM-YYYY'),
                        val.account.particulars.toString(),
                        val.account.mode.toString(),
                        { text: val.account.credit, fillColor: '#7CFC00' },
                        { text: '-', fillColor: '#DC143C' },
                    ]);
                }
                else {
                    body.push([
                        val.account.date.toString(),
                        val.account.particulars.toString(),
                        val.account.mode.toString(),
                        { text: val.account.credit, fillColor: '#7CFC00' },
                        { text: '-', fillColor: '#DC143C' }
                    ]);
                }
            }
            if (val.cheque) {
                body.push([this.createChequeTable(val.cheque), {}, {}, {}, {}]);
            }
        });
        console.log(body);
        return body;
    }
    createChequeTable(data) {
        return {
            colSpan: 5,
            alignment: 'center',
            style: 'nestedTable',
            table: {
                widths: ['14.28%', '*', '14.28%', '*', '14.28%'],
                headerRows: 1,
                body: this.createChequeBody(data),
            },
        };
    }
    createChequeBody(data) {
        const body = [];
        body.push([
            { text: 'Cheque Details', colSpan: 5, style: 'subheader', alignment: 'center' },
            {},
            {},
            {},
            {},
        ]);
        body.push([
            { text: 'Cheque Date', style: 'tableHeader', alignment: 'center' },
            { text: 'Bank Name', colSpan: 2, style: 'tableHeader', alignment: 'center' },
            {},
            { text: 'Cheque Number', colSpan: 2, style: 'tableHeader', alignment: 'center' },
            {},
        ]);
        data.forEach(val => {
            console.log(val);
            if (this.isDate(val.chequeDate)) {
                body.push([
                    {
                        text: moment__WEBPACK_IMPORTED_MODULE_3___default()(val.chequeDate).format('DD-MM-YYYY'),
                        alignment: 'center',
                    },
                    { text: val.bankName.toString(), colSpan: 2, alignment: 'center' },
                    {},
                    { text: val.chequeNo.toString(), colSpan: 2, alignment: 'center' },
                    {},
                ]);
            }
            else {
                body.push([
                    { text: val.chequeDate.toString(), alignment: 'center' },
                    { text: val.bankName.toString(), colSpan: 2, alignment: 'center' },
                    {},
                    { text: val.chequeNo.toString(), colSpan: 2, alignment: 'center' },
                    {},
                ]);
            }
        });
        return body;
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
        ];
        body.push(columns);
        data.forEach(val => {
            if (this.isDate(val.loanData.date)) {
                if (this.isDate(val.loanData.dateOfClosure)) {
                    if (val.loanData.closeLoan === 0) {
                        body.push([
                            moment__WEBPACK_IMPORTED_MODULE_3___default()(val.loanData.date).format('DD-MM-YYYY'),
                            val.loanData.loanAmount.toString(),
                            val.loanData.loanDuration.toString(),
                            val.loanData.loanType.toString(),
                            'No',
                            val.loanData.closeStatus.toString(),
                            moment__WEBPACK_IMPORTED_MODULE_3___default()(val.loanData.dateOfClosure).format('DD-MM-YYYY'),
                        ]);
                    }
                    else {
                        body.push([
                            moment__WEBPACK_IMPORTED_MODULE_3___default()(val.loanData.date).format('DD-MM-YYYY'),
                            val.loanData.loanAmount.toString(),
                            val.loanData.loanDuration.toString(),
                            val.loanData.loanType.toString(),
                            'Yes',
                            val.loanData.closeStatus.toString(),
                            moment__WEBPACK_IMPORTED_MODULE_3___default()(val.loanData.dateOfClosure).format('DD-MM-YYYY'),
                        ]);
                    }
                }
                else {
                    if (val.loanData.closeLoan === 0) {
                        body.push([
                            moment__WEBPACK_IMPORTED_MODULE_3___default()(val.loanData.date).format('DD-MM-YYYY'),
                            val.loanData.loanAmount.toString(),
                            val.loanData.loanDuration.toString(),
                            val.loanData.loanType.toString(),
                            'No',
                            val.loanData.closeStatus,
                            val.loanData.dateOfClosure,
                        ]);
                    }
                    else {
                        body.push([
                            moment__WEBPACK_IMPORTED_MODULE_3___default()(val.loanData.date).format('DD-MM-YYYY'),
                            val.loanData.loanAmount.toString(),
                            val.loanData.loanDuration.toString(),
                            val.loanData.loanType.toString(),
                            'Yes',
                            val.loanData.closeStatus,
                            val.loanData.dateOfClosure,
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
                            moment__WEBPACK_IMPORTED_MODULE_3___default()(val.loanData.dateOfClosure).format('DD-MM-YYYY'),
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
                            moment__WEBPACK_IMPORTED_MODULE_3___default()(val.loanData.dateOfClosure).format('DD-MM-YYYY'),
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
                            val.loanData.dateOfClosure,
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
                            val.loanData.dateOfClosure,
                        ]);
                    }
                }
            }
            if (val.loanBook) {
                body.push([this.createLoanBookTable(val.loanBook), {}, {}, {}, {}, {}, {}]);
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
                ]);
            }
        });
        console.log(body);
        return body;
    }
    createLoanBookTable(data) {
        return {
            colSpan: 7,
            alignment: 'center',
            style: 'nestedTable',
            table: {
                widths: ['14.28%', '*', '14.28%', '*', '*', '14.28%', '*'],
                headerRows: 1,
                body: this.createLoanBookBody(data),
            },
        };
    }
    createLoanBookBody(data) {
        const body = [];
        body.push([
            { text: 'EMI Details', colSpan: 7, style: 'subheader', alignment: 'center' },
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
            { text: 'EMI Paid', colSpan: 2, style: 'tableHeader', alignment: 'center' },
            {},
        ]);
        data.forEach(val => {
            console.log(val);
            if (this.isDate(val.date)) {
                body.push([
                    {
                        text: moment__WEBPACK_IMPORTED_MODULE_3___default()(val.date).format('DD-MM-YYYY'),
                        colSpan: 2,
                        alignment: 'center',
                    },
                    {},
                    { text: val.particulars.toString(), colSpan: 3, alignment: 'center' },
                    {},
                    {},
                    { text: val.credit.toString(), colSpan: 2, alignment: 'center' },
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
                    { text: val.credit.toString(), colSpan: 2, alignment: 'center' },
                    {},
                ]);
            }
        });
        return body;
    }
    createCloseTable(data, loanData, chequeData) {
        return {
            colSpan: 7,
            alignment: 'center',
            style: 'nestedTable',
            table: {
                widths: ['14.28%', '*', '*', '*', '*', '*', '*'],
                headerRows: 1,
                body: this.createCloseBody(data, loanData, chequeData),
            },
        };
    }
    createCloseBody(data, loanData, chequeData) {
        const body = [];
        body.push([
            { text: 'Loan Closure Details', colSpan: 7, style: 'subheader', alignment: 'center' },
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
                { text: 'Mode of Payment', style: 'tableHeader', alignment: 'center' },
                { text: 'Paid Amount', colSpan: 2, style: 'tableHeader', alignment: 'center' },
                {},
            ]);
            if (this.isDate(data[0].date)) {
                body.push([
                    {
                        text: moment__WEBPACK_IMPORTED_MODULE_3___default()(data[0].date).format('DD-MM-YYYY'),
                        colSpan: 2,
                        alignment: 'center',
                    },
                    {},
                    { text: loanData.closeStatus, colSpan: 2, alignment: 'center' },
                    {},
                    { text: data[0].mode.toString(), alignment: 'center' },
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
                    { text: data[0].mode.toString(), alignment: 'center' },
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
                { text: 'Cheque Number', style: 'tableHeader', alignment: 'center' },
            ]);
            if (this.isDate(data[0].date)) {
                if (this.isDate(chequeData[0].chequeDate)) {
                    body.push([
                        {
                            text: moment__WEBPACK_IMPORTED_MODULE_3___default()(data[0].date).format('DD-MM-YYYY'),
                            alignment: 'center',
                        },
                        { text: loanData.closeStatus, alignment: 'center' },
                        { text: data[0].mode.toString(), alignment: 'center' },
                        { text: data[0].credit.toString(), alignment: 'center' },
                        {
                            text: moment__WEBPACK_IMPORTED_MODULE_3___default()(chequeData[0].chequeDate).format('DD-MM-YYYY'),
                            alignment: 'center',
                        },
                        { text: chequeData[0].bankName.toString(), alignment: 'center' },
                        { text: chequeData[0].chequeNo.toString(), alignment: 'center' },
                    ]);
                }
                else {
                    body.push([
                        {
                            text: moment__WEBPACK_IMPORTED_MODULE_3___default()(data[0].date).format('DD-MM-YYYY'),
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
                        { text: chequeData[0].chequeNo.toString(), alignment: 'center' },
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
                            text: moment__WEBPACK_IMPORTED_MODULE_3___default()(chequeData[0].chequeDate).format('DD-MM-YYYY'),
                            alignment: 'center',
                        },
                        { text: chequeData[0].bankName.toString(), alignment: 'center' },
                        { text: chequeData[0].chequeNo.toString(), alignment: 'center' },
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
                        { text: chequeData[0].chequeNo.toString(), alignment: 'center' },
                    ]);
                }
            }
            return body;
        }
    }
    onConfirmClick() {
        // @ts-ignore
        const docDefinition = {
            pageSize: 'A4',
            pageOrientation: 'landscape',
            pageMargins: [20, 20, 20, 30],
            content: [
                {
                    // @ts-ignore
                    text: document.getElementById('title').innerText,
                    style: 'header',
                    alignment: 'center',
                },
                { text: '\n' },
                { text: '\n' },
                {
                    style: 'tableExample',
                    table: {
                        widths: ['15%', '*', '*', '*', '*', '25%', '*'],
                        body: [
                            [
                                {
                                    text: 'Employee Id',
                                    style: 'tableHeader',
                                    alignment: 'right ',
                                },
                                this.id,
                                {},
                                {},
                                {},
                                {
                                    text: 'Employee Name',
                                    style: 'tableHeader',
                                    alignment: 'right',
                                },
                                this.name,
                            ],
                        ],
                    },
                    layout: 'noBorders',
                    alignment: 'center',
                },
                { text: '\n' },
                {
                    style: 'tableExample',
                    table: {
                        alignment: 'center',
                        widths: ['30%', '30%'],
                        headerRows: 1,
                        body: [
                            [
                                {
                                    text: 'Particulars',
                                    style: 'tableHeader',
                                },
                                {
                                    text: 'Value',
                                    style: 'tableHeader',
                                },
                            ],
                            [
                                {
                                    text: 'Start Date',
                                },
                                // @ts-ignore
                                document.getElementById('start').innerHTML,
                            ],
                            [
                                {
                                    text: 'End Date',
                                },
                                // @ts-ignore
                                document.getElementById('end').innerHTML,
                            ],
                            [
                                {
                                    text: 'Balance',
                                },
                                // @ts-ignore
                                document.getElementById('bal').innerHTML,
                            ],
                        ],
                    },
                },
                { text: '\n' },
                // @ts-ignore
                { text: document.getElementById('subDetail1').innerText, style: 'subheader' },
                {
                    style: 'tableExample',
                    table: {
                        widths: ['16.66%', '50%', '*', '*', '*'],
                        headerRows: 1,
                        body: this.createAccountBody(this.accountData),
                    },
                },
                // @ts-ignore
                { text: document.getElementById('subDetail2').innerText, style: 'subheader' },
                {
                    style: 'tableExample',
                    table: {
                        widths: ['*', '*', '*', '*', '*', '*', '*'],
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
        };
        // @ts-ignore
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_4___default.a.createPdf(docDefinition).download('Bank Statement.pdf');
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
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/generate-statement/dialog.component.html")).default,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
], DialogComponent);



/***/ }),

/***/ "./src/app/generate-statement/generate-statement-routing.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/generate-statement/generate-statement-routing.module.ts ***!
  \*************************************************************************/
/*! exports provided: GenerateStatementRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateStatementRoutingModule", function() { return GenerateStatementRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _generate_statement_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./generate-statement.component */ "./src/app/generate-statement/generate-statement.component.ts");




const routes = [{ path: '', component: _generate_statement_component__WEBPACK_IMPORTED_MODULE_3__["GenerateStatementComponent"] }];
let GenerateStatementRoutingModule = class GenerateStatementRoutingModule {
};
GenerateStatementRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], GenerateStatementRoutingModule);



/***/ }),

/***/ "./src/app/generate-statement/generate-statement.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/generate-statement/generate-statement.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2dlbmVyYXRlLXN0YXRlbWVudC9nZW5lcmF0ZS1zdGF0ZW1lbnQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/generate-statement/generate-statement.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/generate-statement/generate-statement.component.ts ***!
  \********************************************************************/
/*! exports provided: GenerateStatementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateStatementComponent", function() { return GenerateStatementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/fesm2015/snack-bar.js");
/* harmony import */ var _app_generate_statement_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/generate-statement/dialog.component */ "./src/app/generate-statement/dialog.component.ts");
/* harmony import */ var _app_generate_statement_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/generate-statement/services */ "./src/app/generate-statement/services/index.ts");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






// @ts-ignore


let GenerateStatementComponent = class GenerateStatementComponent {
    constructor(dialog, snackBar, generateService, fb) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.generateService = generateService;
        this.fb = fb;
        this.table = false;
        this.balance = 0;
        this.loanData = [];
        this.accountData = [];
        this.searchForm = this.fb.group({
            employeeNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])),
        });
        this.reportForm = this.fb.group({
            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])),
            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])),
        });
    }
    showTable() {
        // @ts-ignore
        this.text = this.searchForm.get('employeeNo').value;
        console.log(this.text);
        this.generateService.getData(this.text).subscribe(result => {
            console.log(result);
            if (result.nameData.length === 0) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
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
                this.name = result.nameData[0].name;
                this.table = true;
            }
        }, error1 => {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                title: 'Oops!',
                text: 'Try again!',
                icon: 'error',
            });
        });
        return this.balance;
    }
    openDialog() {
        const data = {
            userId: this.text,
            // @ts-ignore
            start: this.reportForm.get('start').value,
            // @ts-ignore
            end: this.reportForm.get('end').value,
        };
        this.generateService.getDialogData(data).subscribe(result => {
            console.log(result);
            if (result.accountData.length === 0) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    title: 'Oops!',
                    text: 'Data in this range does not exists!',
                    icon: 'error',
                });
            }
            else {
                console.log(result);
                this.accountData = result.accountData;
                this.loanData = result.loanData;
                const dialogRef = this.dialog.open(_app_generate_statement_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], {
                    data: {
                        id: this.text,
                        name: this.name,
                        // @ts-ignore
                        start: this.reportForm.get('start').value,
                        // @ts-ignore
                        end: this.reportForm.get('end').value,
                        balance: this.balance,
                        accountData: this.accountData,
                        loanData: this.loanData,
                    },
                    height: '600px',
                    width: '800px',
                });
                dialogRef.afterClosed().subscribe(res => {
                    if (res) {
                        this.table = false;
                        this.searchForm = this.fb.group({
                            employeeNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])),
                        });
                        this.reportForm = this.fb.group({
                            start: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])),
                            end: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])),
                        });
                    }
                });
            }
        }, error1 => {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                title: 'Oops!',
                text: 'Try again!',
                icon: 'error',
            });
        });
    }
    ngOnInit() { }
};
GenerateStatementComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _app_generate_statement_services__WEBPACK_IMPORTED_MODULE_5__["GenerateStatementService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }
];
GenerateStatementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-generate-statement',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./generate-statement.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/generate-statement/generate-statement.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./generate-statement.component.scss */ "./src/app/generate-statement/generate-statement.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
        _app_generate_statement_services__WEBPACK_IMPORTED_MODULE_5__["GenerateStatementService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
], GenerateStatementComponent);



/***/ }),

/***/ "./src/app/generate-statement/generate-statement.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/generate-statement/generate-statement.module.ts ***!
  \*****************************************************************/
/*! exports provided: GenerateStatementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateStatementModule", function() { return GenerateStatementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");
/* harmony import */ var _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/navigation/navigation.module */ "./src/app/navigation/navigation.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./dialog.component */ "./src/app/generate-statement/dialog.component.ts");
/* harmony import */ var _generate_statement_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./generate-statement-routing.module */ "./src/app/generate-statement/generate-statement-routing.module.ts");
/* harmony import */ var _generate_statement_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./generate-statement.component */ "./src/app/generate-statement/generate-statement.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/fesm2015/button.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/fesm2015/snack-bar.js");
/* harmony import */ var _app_layout_dashboard_layout_dashboard_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @app/layout-dashboard/layout-dashboard.module */ "./src/app/layout-dashboard/layout-dashboard.module.ts");














let GenerateStatementModule = class GenerateStatementModule {
};
GenerateStatementModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_generate_statement_component__WEBPACK_IMPORTED_MODULE_9__["GenerateStatementComponent"], _dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _generate_statement_routing_module__WEBPACK_IMPORTED_MODULE_8__["GenerateStatementRoutingModule"],
            _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__["NavigationModule"],
            _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_11__["MatDialogModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_12__["MatSnackBarModule"],
            _app_layout_dashboard_layout_dashboard_module__WEBPACK_IMPORTED_MODULE_13__["LayoutDashboardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        entryComponents: [_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"]],
    })
], GenerateStatementModule);



/***/ }),

/***/ "./src/app/generate-statement/services/generate-statement.service.ts":
/*!***************************************************************************!*\
  !*** ./src/app/generate-statement/services/generate-statement.service.ts ***!
  \***************************************************************************/
/*! exports provided: GenerateStatementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GenerateStatementService", function() { return GenerateStatementService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let GenerateStatementService = class GenerateStatementService {
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
    getDialogData(data) {
        const url = 'http://drsunitanayak.com:8080/getAllUserData';
        return this.http.post(url, data);
    }
};
GenerateStatementService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
GenerateStatementService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], GenerateStatementService);



/***/ }),

/***/ "./src/app/generate-statement/services/index.ts":
/*!******************************************************!*\
  !*** ./src/app/generate-statement/services/index.ts ***!
  \******************************************************/
/*! exports provided: services, GenerateStatementService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _generate_statement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./generate-statement.service */ "./src/app/generate-statement/services/generate-statement.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GenerateStatementService", function() { return _generate_statement_service__WEBPACK_IMPORTED_MODULE_1__["GenerateStatementService"]; });



const services = [_generate_statement_service__WEBPACK_IMPORTED_MODULE_1__["GenerateStatementService"]];



/***/ })

}]);
//# sourceMappingURL=generate-statement-generate-statement-module-es2015.js.map