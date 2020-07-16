(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["close-account-close-account-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/close-account/close-account.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/close-account/close-account.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard>\n    <sb-dashboard-head title=\"{{'Accountant.Tables.CloseAcc'|translate}}\"></sb-dashboard-head>\n    <hr class=\"rounded\">\n    <br>\n    <div class=\"row\">\n        <div class=\"col-xl-2 col-md-1\"></div>\n        <div class=\"col-xl-8 col-md-10\">\n            <sb-card>\n                <div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{\"Accountant.Tables.CloseAcc\"| translate}}</div>\n                <div class=\"card-body table-responsive\">\n                    <form class=\"form-inline\" [formGroup]=\"searchForm\" (ngSubmit)=\"showTable()\">\n                        <label>\n                            <input type=\"text\" placeholder=\"Enter Employee No\" formControlName=\"employeeNo\"/>\n                        </label>\n                        <button type=\"submit\" [disabled]=\"!searchForm.valid\">{{'Accountant.GetInfo'| translate}}</button>\n                    </form>\n                    <table class=\"table table-striped\" *ngIf=\"table\" id=\"content\">\n                        <tbody>\n                        <tr>\n                            <td>{{\"Accountant.Tables.EmployeeNo\"| translate}}</td>\n                            <td>{{text}}</td>\n                        </tr>\n                        <tr>\n                            <td>{{'Accountant.Tables.EmployeeName' | translate}}</td>\n                            <td>{{name}}</td>\n                        </tr>\n                        <tr>\n                            <td>{{'Accountant.Tables.Date' | translate}}</td>\n                            <td>\n                                <label>\n                                    <input type=\"date\" [(ngModel)]=\"date\" name=\"date\" />\n                                </label>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>{{\"Accountant.Tables.LoanStatus\" | translate}}</td>\n                            <td *ngIf=\"loanClose; else not\">{{\"Accountant.Tables.Closed\" | translate}}</td>\n                            <ng-template #not>\n                                <td>{{\"Accountant.Tables.Not\" | translate}}</td>\n                            </ng-template>\n                        </tr>\n                        <tr *ngIf=\"hide\">\n                            <td>{{\"Accountant.Tables.GenerateLetter\"| translate}}</td>\n                            <td>\n                                <label>\n                                    <input type=\"checkbox\" (change)=\"openDialog($event)\"/>\n                                </label>\n                            </td>\n                        </tr>\n                        <tr *ngIf=\"hide\">\n                            <td>{{\"Accountant.Tables.Letter\"| translate}}</td>\n                            <td>\n                                <label>\n                                    <input type=\"checkbox\" [disabled]=\"disable\"/>\n                                </label>\n                            </td>\n                        </tr>\n                        <tr *ngIf=\"hide\">\n                            <td>{{\"Accountant.Tables.Settlement\"| translate}}</td>\n                            <td>\n                                <label>\n                                    <input type=\"checkbox\" [disabled]=\"disable\"/>\n                                </label>\n                            </td>\n                        </tr>\n                        <tr *ngIf=\"hide\">\n                            <td>{{\"Accountant.Tables.Close\"| translate}}</td>\n                            <td>\n                                <label>\n                                    <input type=\"checkbox\" [disabled]=\"disable\" (change)=\"close()\"/>\n                                </label>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                </div>\n            </sb-card>\n        </div>\n        <div class=\"col-xl-2 col-md-1\"></div>\n    </div>\n</sb-layout-dashboard>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/close-account/dialog/dialog.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/close-account/dialog/dialog.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"data\">\n    <br>\n    <h1 mat-dialog-title align=\"center\" id=\"title\">Letter for Account Closure</h1>\n    <mat-dialog-content class=\"mat-typography\">\n        <h3 id=\"date\">Date: {{date| date:'dd-MM-yyyy'}}</h3>\n        <br/>\n        <h3 id=\"company\">ABC Company</h3>\n        <h3 id=\"address1\">Nariman Point</h3>\n        <h3 id=\"address2\">Mumbai</h3>\n        <br/>\n        <h3 id=\"salutation\">Dear {{name}}</h3>\n        <h3>We would like to notify that all the dues of {{name}} having Employee Id as {{id}} has been cleared and the account is ready to be closed. Please submit this letter with your signature</h3>\n        <br/>\n        <h3 id=\"thank\">Thanking You</h3>\n        <br>\n        <h3 id=\"bottom1\">Yours faithfully</h3>\n        <h3 id=\"bottom2\">Amita Gupta</h3>\n        <h3 id=\"bottom3\">Manager</h3>\n    </mat-dialog-content>\n</div>\n<mat-dialog-actions align=\"end\">\n    <button class=\"btn-danger\" mat-button mat-dialog-close>Cancel</button>\n    <button class=\"btn-success\" mat-button (click)=\"onConfirmClick()\" cdkFocusInitial>Print</button>\n</mat-dialog-actions>\n");

/***/ }),

/***/ "./src/app/close-account/close-account-routing.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/close-account/close-account-routing.module.ts ***!
  \***************************************************************/
/*! exports provided: CloseAccountRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseAccountRoutingModule", function() { return CloseAccountRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _close_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./close-account.component */ "./src/app/close-account/close-account.component.ts");




const routes = [{ path: '', component: _close_account_component__WEBPACK_IMPORTED_MODULE_3__["CloseAccountComponent"] }];
let CloseAccountRoutingModule = class CloseAccountRoutingModule {
};
CloseAccountRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CloseAccountRoutingModule);



/***/ }),

/***/ "./src/app/close-account/close-account.component.scss":
/*!************************************************************!*\
  !*** ./src/app/close-account/close-account.component.scss ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Nsb3NlLWFjY291bnQvY2xvc2UtYWNjb3VudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/close-account/close-account.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/close-account/close-account.component.ts ***!
  \**********************************************************/
/*! exports provided: CloseAccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseAccountComponent", function() { return CloseAccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/fesm2015/snack-bar.js");
/* harmony import */ var _app_close_account_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/close-account/dialog/dialog.component */ "./src/app/close-account/dialog/dialog.component.ts");
/* harmony import */ var _app_close_account_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/close-account/services */ "./src/app/close-account/services/index.ts");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");






// @ts-ignore


let CloseAccountComponent = class CloseAccountComponent {
    constructor(dialog, snackBar, closeAccount, fb) {
        this.dialog = dialog;
        this.snackBar = snackBar;
        this.closeAccount = closeAccount;
        this.fb = fb;
        this.table = false;
        this.loanClose = false;
        this.hide = false;
        this.disable = true;
        this.searchForm = this.fb.group({
            employeeNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_7__["Validators"].required])),
        });
    }
    showTable() {
        // @ts-ignore
        this.text = this.searchForm.get('employeeNo').value;
        console.log(this.text);
        this.closeAccount.getData(this.text).subscribe(result => {
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
                this.name = result.nameData[0].name;
                this.loanClose = result.loanData.length === 0;
                this.hide = this.loanClose;
                this.table = true;
            }
        }, error1 => {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                title: 'Oops!',
                text: 'Try again!',
                icon: 'error',
            });
        });
        return this.loanClose;
    }
    close() {
        const data = {
            date: this.date,
            close: true,
            userId: this.text,
        };
        this.closeAccount.sendData(data).subscribe(resultData => {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                text: 'Sent!',
                icon: 'success',
            }).then((isConfirm) => {
                if (isConfirm) {
                    // @ts-ignore
                    this.table = false;
                    this.text = null;
                    this.date = null;
                }
            });
        }, error1 => {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                title: 'Oops!',
                text: 'Try again!',
                icon: 'error',
            });
        });
    }
    openDialog(event) {
        if (event.target.checked) {
            const dialogRef = this.dialog.open(_app_close_account_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], {
                data: {
                    id: this.text,
                    name: this.name,
                    date: this.date,
                },
                height: '600px',
                width: '700px',
            });
            dialogRef.afterClosed().subscribe(result => {
                if (result) {
                    this.disable = !this.disable;
                }
                else {
                    event.target.checked = false;
                }
            });
        }
    }
    ngOnInit() { }
};
CloseAccountComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
    { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"] },
    { type: _app_close_account_services__WEBPACK_IMPORTED_MODULE_5__["CloseAccountService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"] }
];
CloseAccountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-close-account',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./close-account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/close-account/close-account.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./close-account.component.scss */ "./src/app/close-account/close-account.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
        _app_close_account_services__WEBPACK_IMPORTED_MODULE_5__["CloseAccountService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormBuilder"]])
], CloseAccountComponent);



/***/ }),

/***/ "./src/app/close-account/close-account.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/close-account/close-account.module.ts ***!
  \*******************************************************/
/*! exports provided: CloseAccountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseAccountModule", function() { return CloseAccountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");
/* harmony import */ var _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/navigation/navigation.module */ "./src/app/navigation/navigation.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/fesm2015/snack-bar.js");
/* harmony import */ var _close_account_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./close-account-routing.module */ "./src/app/close-account/close-account-routing.module.ts");
/* harmony import */ var _close_account_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./close-account.component */ "./src/app/close-account/close-account.component.ts");
/* harmony import */ var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./dialog/dialog.component */ "./src/app/close-account/dialog/dialog.component.ts");
/* harmony import */ var _app_layout_dashboard_layout_dashboard_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @app/layout-dashboard/layout-dashboard.module */ "./src/app/layout-dashboard/layout-dashboard.module.ts");













let CloseAccountModule = class CloseAccountModule {
};
CloseAccountModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_close_account_component__WEBPACK_IMPORTED_MODULE_10__["CloseAccountComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _close_account_routing_module__WEBPACK_IMPORTED_MODULE_9__["CloseAccountRoutingModule"],
            _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__["NavigationModule"],
            _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_8__["MatSnackBarModule"],
            _app_layout_dashboard_layout_dashboard_module__WEBPACK_IMPORTED_MODULE_12__["LayoutDashboardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        exports: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"]],
        entryComponents: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"]],
    })
], CloseAccountModule);



/***/ }),

/***/ "./src/app/close-account/dialog/dialog.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/close-account/dialog/dialog.component.ts ***!
  \**********************************************************/
/*! exports provided: DialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogComponent", function() { return DialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/fesm2015/dialog.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! pdfmake/build/pdfmake */ "./node_modules/pdfmake/build/pdfmake.js");
/* harmony import */ var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! pdfmake/build/vfs_fonts */ "./node_modules/pdfmake/build/vfs_fonts.js");
/* harmony import */ var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__);





pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___default.a.pdfMake.vfs;
let DialogComponent = class DialogComponent {
    constructor(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.id = '';
        this.name = '';
        this.date = '';
        if (data) {
            this.id = data.id || this.id;
            this.name = data.name || this.name;
            this.date = data.date || this.date;
            // if (data.buttonText) {
            //  this.cancelButtonText = data.buttonText.cancel || this.cancelButtonText;
            // }
        }
        this.dialogRef.updateSize('300vw', '300vw');
    }
    onConfirmClick() {
        // @ts-ignore
        const docDefinition = {
            title: 'Account Closure Letter',
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
                    // @ts-ignore
                    text: document.getElementById('date').innerText,
                },
                { text: '\n' },
                {
                    // @ts-ignore
                    text: document.getElementById('company').innerText,
                },
                {
                    // @ts-ignore
                    text: document.getElementById('address1').innerText,
                },
                {
                    // @ts-ignore
                    text: document.getElementById('address2').innerText,
                },
                { text: '\n' },
                {
                    // @ts-ignore
                    text: document.getElementById('salutation').innerText,
                },
                { text: '\n' },
                {
                    // @ts-ignore
                    text: 'We would like to notify that all the dues of ' +
                        this.name +
                        ' having Employee Id as ' +
                        this.id +
                        ' has been cleared the account is ready to be closed. Please submit this letter with your signature.',
                    alignment: 'justify',
                },
                { text: '\n' },
                {
                    // @ts-ignore
                    text: document.getElementById('thank').innerText,
                },
                { text: '\n' },
                {
                    // @ts-ignore
                    text: document.getElementById('bottom1').innerText,
                },
                {
                    // @ts-ignore
                    text: document.getElementById('bottom2').innerText,
                },
                {
                    // @ts-ignore
                    text: document.getElementById('bottom3').innerText,
                },
            ],
            styles: {
                header: {
                    fontSize: 18,
                    bold: true,
                    margin: [0, 0, 0, 10],
                },
            },
        };
        // @ts-ignore
        pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default.a.createPdf(docDefinition).download('Account Closure Letter.pdf');
        this.dialogRef.close(true);
    }
};
DialogComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
];
DialogComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-dialog',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/close-account/dialog/dialog.component.html")).default,
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
], DialogComponent);



/***/ }),

/***/ "./src/app/close-account/services/close-account.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/close-account/services/close-account.service.ts ***!
  \*****************************************************************/
/*! exports provided: CloseAccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CloseAccountService", function() { return CloseAccountService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let CloseAccountService = class CloseAccountService {
    constructor(http) {
        this.http = http;
    }
    getData(text) {
        console.log(text);
        const url = 'http://drsunitanayak.com/getCloseData';
        const data = {
            userId: text,
        };
        return this.http.post(url, data);
    }
    sendData(data) {
        console.log(data);
        const url = 'http://drsunitanayak.com/closeAccount';
        return this.http.post(url, data);
    }
};
CloseAccountService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
CloseAccountService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], CloseAccountService);



/***/ }),

/***/ "./src/app/close-account/services/index.ts":
/*!*************************************************!*\
  !*** ./src/app/close-account/services/index.ts ***!
  \*************************************************/
/*! exports provided: services, CloseAccountService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _close_account_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./close-account.service */ "./src/app/close-account/services/close-account.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CloseAccountService", function() { return _close_account_service__WEBPACK_IMPORTED_MODULE_1__["CloseAccountService"]; });



const services = [_close_account_service__WEBPACK_IMPORTED_MODULE_1__["CloseAccountService"]];



/***/ })

}]);
//# sourceMappingURL=close-account-close-account-module-es2015.js.map