function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loan-foreclosure-loan-foreclosure-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/loan-foreclosure/dialog/dialog.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loan-foreclosure/dialog/dialog.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoanForeclosureDialogDialogComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"data\">\r\n    <h1 mat-dialog-title align=\"center\" id=\"title\">Letter for Loan Closure</h1>\r\n    <mat-dialog-content class=\"mat-typography\">\r\n        <h3 id=\"date\">Date: {{date| date:'dd-MM-yyyy'}}</h3>\r\n        <br/>\r\n        <h3 id=\"company\">ABC Company</h3>\r\n        <h3 id=\"address1\">Nariman Point</h3>\r\n        <h3 id=\"address2\">Mumbai</h3>\r\n        <br/>\r\n        <h3 id=\"salutation\">Dear {{name}}</h3>\r\n        <h3 id=\"content\">We would like to notify that all the dues of {{name}} having Employee Id as {{id}} has been cleared and the loan of {{this.loanDate}} with loan amount = {{this.amount}} has been closed.</h3>\r\n        <br/>\r\n        <h3 id=\"thank\">Thanking You</h3>\r\n        <br>\r\n        <h3 id=\"bottom1\">Yours faithfully</h3>\r\n        <h3 id=\"bottom2\">Amita Gupta</h3>\r\n        <h3 id=\"bottom3\">Manager</h3>\r\n    </mat-dialog-content>\r\n</div>\r\n<mat-dialog-actions align=\"end\">\r\n    <button class=\"btn-danger\" mat-button mat-dialog-close>Cancel</button>\r\n    <button class=\"btn-success\" mat-button (click)=\"onConfirmClick()\" cdkFocusInitial>Print</button>\r\n</mat-dialog-actions>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/loan-foreclosure/loan-foreclosure.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loan-foreclosure/loan-foreclosure.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoanForeclosureLoanForeclosureComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-layout-dashboard>\r\n    <sb-dashboard-head title=\"{{'Accountant.Pages.Foreclosure'| translate}}\"></sb-dashboard-head>\r\n    <hr class=\"rounded\">\r\n    <br>\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-2 col-md-1\"></div>\r\n        <div class=\"col-xl-8 col-md-10\">\r\n            <sb-card>\r\n                <div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{'Accountant.Pages.Foreclosure'| translate}}</div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <form class=\"form-inline\" [formGroup]=\"searchForm\" (ngSubmit)=\"showTable()\">\r\n                        <label>\r\n                            <input type=\"text\" placeholder=\"Enter Employee No\" formControlName=\"employeeNo\"/>\r\n                        </label>\r\n                        <button type=\"submit\" [disabled]=\"!searchForm.valid\">{{'Accountant.GetInfo'| translate}}</button>\r\n                    </form>\r\n                    <table class=\"table table-striped\" *ngIf=\"table\" id=\"content\">\r\n                        <tbody>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.EmployeeNo'| translate}}</td>\r\n                            <td>{{text}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.EmployeeName'| translate}}</td>\r\n                            <td>{{name}}</td>\r\n                        </tr>\r\n                        <!--tr>\r\n                            <td>{{'Accountant.Tables.LoanType'| translate}}</td>\r\n                            <td>{{loanType}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.Active'| translate}}</td>\r\n                            <td>{{loanAmount| indianCurrency}}</td>\r\n                        </tr-->\r\n                        <!--tr>\r\n                            <td>{{'Accountant.Tables.LoanDate'| translate}}</td>\r\n                            <td>{{loanDate| date:'dd-MM-yyyy'}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.Amt'| translate}}</td>\r\n                            <td>{{payAmount| indianCurrency}}</td>\r\n                        </tr-->\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.DateForeclosure'| translate}}</td>\r\n                            <td>\r\n                                <label>\r\n                                    <input type=\"date\" [(ngModel)]=\"date\" name=\"date\"/>\r\n                                </label>\r\n                            </td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </sb-card>\r\n        </div>\r\n        <div class=\"col-xl-2 col-md-1\"></div>\r\n    </div>\r\n    <div *ngIf=\"table\">\r\n        <sb-card>\r\n            <div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{'Accountant.Tables.LoanDetails'| translate}}</div>\r\n            <div class=\"card-body table-responsive\">\r\n                <table class=\"table table-striped\" *ngIf=\"table\">\r\n                    <thead>\r\n                        <tr>\r\n                            <td>{{'Accountant.Tables.LoanDate'| translate}}</td>\r\n                            <td>{{'Accountant.Tables.Loan'| translate}}</td>\r\n                            <td>{{'Accountant.Tables.Duration'| translate}}</td>\r\n                            <td>{{'Accountant.Tables.LoanType'| translate}}</td>\r\n                            <td>{{'Accountant.Tables.PrincipleOutstanding'| translate}}</td>\r\n                            <td>{{'Accountant.Tables.CloseLoan'| translate}}</td>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody *ngFor=\"let loan of loanData; let i=index;\">\r\n                        <tr>\r\n                            <td>{{loan.date| date:'dd-MM-yyyy'}}</td>\r\n                            <td>{{loan.amount| indianCurrency}}</td>\r\n                            <td>{{loan.duration}}</td>\r\n                            <td>{{loan.type}}</td>\r\n                            <td>{{loan.pending| indianCurrency}}</td>\r\n                            <td>\r\n                                <label>\r\n                                    <input type=\"checkbox\" (click)=\"pay(i)\"/>\r\n                                </label>\r\n                            </td>\r\n                        </tr>\r\n                        <tr *ngIf=\"payMode[i]\" align=\"center\">\r\n                            <td colspan=\"6\">\r\n                                <table class=\"table\">\r\n                                    <tbody>\r\n                                    <tr>\r\n                                        <td>{{'Accountant.Tables.Mode' | translate}}</td>\r\n                                        <td>\r\n                                            <label>\r\n                                                <select class=\"custom-select\" [(ngModel)]=\"type[i]\">\r\n                                                    <option>{{'Accountant.Tables.Cash' | translate}}</option>\r\n                                                    <option>{{'Accountant.Tables.Cheque' | translate}}</option>\r\n                                                </select>\r\n                                            </label>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr *ngIf=\"type == 'Cheque'\">\r\n                                        <td>{{'Accountant.Tables.BankName' | translate}}</td>\r\n                                        <td>\r\n                                            <label>\r\n                                                <select class=\"custom-select\" name=\"bankName\" [(ngModel)]=\"bankName[i]\">\r\n                                                    <option *ngFor=\"let val of bankList\">{{val.bankName}}</option>\r\n                                                </select>\r\n                                            </label>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr *ngIf=\"type == 'Cheque'\">\r\n                                        <td>{{'Accountant.Tables.ChequeDate' | translate}}</td>\r\n                                        <td>\r\n                                            <label>\r\n                                                <input type=\"date\" [(ngModel)]=\"chequeDate[i]\" name=\"chequeDate\"/>\r\n                                            </label>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr *ngIf=\"type == 'Cheque'\">\r\n                                        <td>{{'Accountant.Tables.ChequeNo' | translate}}</td>\r\n                                        <td>\r\n                                            <label>\r\n                                                <input type=\"text\" [(ngModel)]=\"chequeNo[i]\" name=\"chequeNo\"/>\r\n                                            </label>\r\n                                        </td>\r\n                                    </tr>\r\n                                    <tr>\r\n                                        <td>{{'Accountant.Tables.Remark'| translate}}</td>\r\n                                        <td>\r\n                                            <label>\r\n                                                <input type=\"text\" [(ngModel)]=\"purpose[i]\" name=\"purpose\"/>\r\n                                            </label>\r\n                                        </td>\r\n                                    </tr>\r\n                                    </tbody>\r\n                                </table>\r\n                                <button (click)=\"close(loan.loanId, loan.amount, loan.date, type[i], bankName[i],chequeDate[i],chequeNo[i],purpose[i],loan.pending)\">{{'Accountant.Tables.Submit'| translate}}</button>\r\n                            </td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n        </sb-card>\r\n    </div>\r\n</sb-layout-dashboard>\r\n\r\n";
    /***/
  },

  /***/
  "./src/app/loan-foreclosure/dialog/dialog.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/loan-foreclosure/dialog/dialog.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoanForeclosureDialogDialogComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvYW4tZm9yZWNsb3N1cmUvZGlhbG9nL2RpYWxvZy5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/loan-foreclosure/dialog/dialog.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/loan-foreclosure/dialog/dialog.component.ts ***!
    \*************************************************************/

  /*! exports provided: DialogComponent */

  /***/
  function srcAppLoanForeclosureDialogDialogComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! pdfmake/build/pdfmake */
    "./node_modules/pdfmake/build/pdfmake.js");
    /* harmony import */


    var pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! pdfmake/build/vfs_fonts */
    "./node_modules/pdfmake/build/vfs_fonts.js");
    /* harmony import */


    var pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4__);

    pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default.a.vfs = pdfmake_build_vfs_fonts__WEBPACK_IMPORTED_MODULE_4___default.a.pdfMake.vfs;

    var DialogComponent = /*#__PURE__*/function () {
      function DialogComponent(data, dialogRef) {
        _classCallCheck(this, DialogComponent);

        this.data = data;
        this.dialogRef = dialogRef;
        this.id = '';
        this.name = '';
        this.date = '';
        this.amount = '';
        this.loanDate = '';

        if (data) {
          this.id = data.id || this.id;
          this.name = data.name || this.name;
          this.date = data.date || this.date;
          this.amount = data.amount || this.amount;
          this.loanDate = data.loandate || this.loanDate;
        }

        this.dialogRef.updateSize('300vw', '300vw');
      }

      _createClass(DialogComponent, [{
        key: "onConfirmClick",
        value: function onConfirmClick() {
          // @ts-ignore
          var docDefinition = {
            title: 'Loan Closure Letter',
            content: [{
              // @ts-ignore
              text: document.getElementById('title').innerText,
              style: 'header',
              alignment: 'center'
            }, {
              text: '\n'
            }, {
              text: '\n'
            }, {
              // @ts-ignore
              text: document.getElementById('date').innerText
            }, {
              text: '\n'
            }, {
              // @ts-ignore
              text: document.getElementById('company').innerText
            }, {
              // @ts-ignore
              text: document.getElementById('address1').innerText
            }, {
              // @ts-ignore
              text: document.getElementById('address2').innerText
            }, {
              text: '\n'
            }, {
              // @ts-ignore
              text: document.getElementById('salutation').innerText
            }, {
              text: '\n'
            }, {
              // @ts-ignore
              text: 'We would like to notify that all the dues of ' + this.name + ' having Employee Id as ' + this.id + ' has been cleared and the loan of ' + this.loanDate + ' with loan amount = ' + this.amount + ' has been closed.',
              alignment: 'justify'
            }, {
              text: '\n'
            }, {
              // @ts-ignore
              text: document.getElementById('thank').innerText
            }, {
              text: '\n'
            }, {
              // @ts-ignore
              text: document.getElementById('bottom1').innerText
            }, {
              // @ts-ignore
              text: document.getElementById('bottom2').innerText
            }, {
              // @ts-ignore
              text: document.getElementById('bottom3').innerText
            }],
            styles: {
              header: {
                fontSize: 18,
                bold: true,
                margin: [0, 0, 0, 10]
              }
            }
          }; // @ts-ignore

          pdfmake_build_pdfmake__WEBPACK_IMPORTED_MODULE_3___default.a.createPdf(docDefinition).download('Loan Closure Letter.pdf');
          this.dialogRef.close(true);
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
      "./node_modules/raw-loader/dist/cjs.js!./src/app/loan-foreclosure/dialog/dialog.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dialog.component.scss */
      "./src/app/loan-foreclosure/dialog/dialog.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])], DialogComponent);
    /***/
  },

  /***/
  "./src/app/loan-foreclosure/loan-foreclosure-routing.module.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/loan-foreclosure/loan-foreclosure-routing.module.ts ***!
    \*********************************************************************/

  /*! exports provided: LoanForeclosureRoutingModule */

  /***/
  function srcAppLoanForeclosureLoanForeclosureRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoanForeclosureRoutingModule", function () {
      return LoanForeclosureRoutingModule;
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


    var _loan_foreclosure_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./loan-foreclosure.component */
    "./src/app/loan-foreclosure/loan-foreclosure.component.ts");

    var routes = [{
      path: '',
      component: _loan_foreclosure_component__WEBPACK_IMPORTED_MODULE_3__["LoanForeclosureComponent"]
    }];

    var LoanForeclosureRoutingModule = function LoanForeclosureRoutingModule() {
      _classCallCheck(this, LoanForeclosureRoutingModule);
    };

    LoanForeclosureRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoanForeclosureRoutingModule);
    /***/
  },

  /***/
  "./src/app/loan-foreclosure/loan-foreclosure.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/loan-foreclosure/loan-foreclosure.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoanForeclosureLoanForeclosureComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "table td {\n  padding: 30px;\n}\n\n#date {\n  padding-top: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hbi1mb3JlY2xvc3VyZS9DOlxcVXNlcnNcXFBSQUtIQVJcXERvY3VtZW50c1xcQW5ndWxhciBQcm9qZWN0XFxLb3NoaW1hXFxTb2NpZXR5X0Jhbmtpbmcvc3JjXFxhcHBcXGxvYW4tZm9yZWNsb3N1cmVcXGxvYW4tZm9yZWNsb3N1cmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvYW4tZm9yZWNsb3N1cmUvbG9hbi1mb3JlY2xvc3VyZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7QUNDSjs7QURDQTtFQUNJLGlCQUFBO0FDRUoiLCJmaWxlIjoic3JjL2FwcC9sb2FuLWZvcmVjbG9zdXJlL2xvYW4tZm9yZWNsb3N1cmUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJ0YWJsZSB0ZHtcclxuICAgIHBhZGRpbmc6MzBweDtcclxufVxyXG4jZGF0ZXtcclxuICAgIHBhZGRpbmctdG9wOiA1MHB4O1xyXG59XHJcbiIsInRhYmxlIHRkIHtcbiAgcGFkZGluZzogMzBweDtcbn1cblxuI2RhdGUge1xuICBwYWRkaW5nLXRvcDogNTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/loan-foreclosure/loan-foreclosure.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/loan-foreclosure/loan-foreclosure.component.ts ***!
    \****************************************************************/

  /*! exports provided: LoanForeclosureComponent */

  /***/
  function srcAppLoanForeclosureLoanForeclosureComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoanForeclosureComponent", function () {
      return LoanForeclosureComponent;
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


    var _app_loan_foreclosure_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/loan-foreclosure/dialog/dialog.component */
    "./src/app/loan-foreclosure/dialog/dialog.component.ts");
    /* harmony import */


    var _app_loan_foreclosure_services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/loan-foreclosure/services */
    "./src/app/loan-foreclosure/services/index.ts");
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


    var LoanForeclosureComponent = /*#__PURE__*/function () {
      function LoanForeclosureComponent(loanService, dialog, fb) {
        _classCallCheck(this, LoanForeclosureComponent);

        this.loanService = loanService;
        this.dialog = dialog;
        this.fb = fb;
        this.table = false;
        this.disable = true;
        this.loanData = [];
        this.payAmount = 0;
        this.searchForm = this.fb.group({
          employeeNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]))
        });
      }

      _createClass(LoanForeclosureComponent, [{
        key: "showTable",
        value: function showTable() {
          var _this = this;

          // @ts-ignore
          this.text = this.searchForm.get('employeeNo').value;
          var data = {
            userId: this.text
          };
          console.log(data);
          this.loanService.getData(data).subscribe(function (result) {
            _this.loanData = [];
            console.log(result);

            if (result.nameData.length === 0) {
              _this.table = false;
              sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Oops!',
                text: 'This user does not exists!',
                icon: 'error'
              });
            } else if (!result.loanData || result.loanData.length === 0) {
              _this.table = false;
              sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                title: 'Oops!',
                text: 'No loan exists!',
                icon: 'error'
              });
            } else {
              console.log(result.loanData);
              _this.payMode = new Array(result.loanData.length);
              _this.bankName = new Array(result.loanData.length);
              _this.purpose = new Array(result.loanData.length);
              _this.chequeDate = new Array(result.loanData.length);
              _this.chequeNo = new Array(result.loanData.length);
              _this.type = new Array(result.loanData.length); // tslint:disable-next-line:prefer-for-of

              for (var j = 0; j < result.loanData.length; j++) {
                _this.loanAmount = result.loanData[j].loanData.loanAmount;
                _this.loanDate = result.loanData[j].loanData.date;
                _this.payAmount = _this.loanAmount;

                if (result.loanData[j].loanBook) {
                  // tslint:disable-next-line:prefer-for-of
                  for (var k = 0; k < result.loanData[j].loanBook.length; k++) {
                    var interest = _this.payAmount * (result.loanData[j].loanData.interest / 1200);
                    var amount = result.loanData[j].loanBook[k].credit - interest;
                    _this.payAmount -= amount;
                  }
                }

                if (_this.payAmount < 0) {
                  _this.payAmount = 0;
                }

                _this.loanType = result.loanData[0].loanData.loanType;

                _this.loanData.push({
                  // @ts-ignore
                  loanId: result.loanData[0].loanData.loanId,
                  // @ts-ignore
                  date: _this.loanDate,
                  // @ts-ignore
                  amount: _this.loanAmount,
                  // @ts-ignore
                  duration: result.loanData[0].loanData.loanDuration,
                  // @ts-ignore
                  type: _this.loanType,
                  // @ts-ignore
                  pending: (Math.round(_this.payAmount * 100) / 100).toFixed(0)
                });
              }

              _this.name = result.nameData[0].name;
              _this.table = true;
            }
          }, function (error1) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
              title: 'Oops!',
              text: 'Try again!',
              icon: 'error'
            });
          });
        }
      }, {
        key: "close",
        value: function close(loanid, loanAmount, loanDate, type, bankname, chequedate, chequeno, purpose, payamount) {
          var _this2 = this;

          if (!payamount || !type || !purpose || !this.date) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
              title: 'Oops!',
              text: 'Fill all the details!',
              icon: 'error'
            });
          } else {
            console.log(bankname);
            var dialogRef = this.dialog.open(_app_loan_foreclosure_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], {
              data: {
                id: this.text,
                name: this.name,
                date: this.date,
                amount: loanAmount,
                loandate: loanDate
              },
              height: '600px',
              width: '700px'
            });
            dialogRef.afterClosed().subscribe(function (result) {
              var closeData = [];

              if (result) {
                closeData.push({
                  userId: _this2.text,
                  loanId: loanid,
                  date: _this2.date,
                  mode: type,
                  bankName: bankname,
                  chequeDate: chequedate,
                  chequeNo: chequeno,
                  particulars: purpose,
                  amount: payamount,
                  type: 'Close Loan',
                  status: 'Fore Closure',
                  close: true
                });

                _this2.loanService.sendData(closeData).subscribe(function (resultData) {
                  sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    text: 'Loan Closed!',
                    icon: 'success'
                  }).then(function (isConfirm) {
                    if (isConfirm) {
                      _this2.loanData = _this2.loanData.filter(function (value) {
                        return value === loanid;
                      });
                      console.log(_this2.loanData);

                      if (_this2.loanData.length === 0) {
                        // @ts-ignore
                        _this2.table = false;
                        _this2.text = null;
                        _this2.date = null;
                        _this2.loanAmount = null;
                        _this2.payAmount = 0;
                        _this2.loanDate = null;
                      }
                    }
                  });
                }, function (error1) {
                  sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_5___default.a.fire({
                    title: 'Oops!',
                    text: 'Try again!',
                    icon: 'error'
                  });
                });
              }
            });
          }
        }
      }, {
        key: "pay",
        value: function pay(index) {
          this.payMode[index] = !this.payMode[index];
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.loanService.getBankList().subscribe(function (result) {
            _this3.bankList = result;
            console.log(_this3.bankList);
          });
          this.loanData = [];
        }
      }]);

      return LoanForeclosureComponent;
    }();

    LoanForeclosureComponent.ctorParameters = function () {
      return [{
        type: _app_loan_foreclosure_services__WEBPACK_IMPORTED_MODULE_4__["LoanForeclosureService"]
      }, {
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
      }];
    };

    LoanForeclosureComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-loan-foreclosure',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./loan-foreclosure.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/loan-foreclosure/loan-foreclosure.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./loan-foreclosure.component.scss */
      "./src/app/loan-foreclosure/loan-foreclosure.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_loan_foreclosure_services__WEBPACK_IMPORTED_MODULE_4__["LoanForeclosureService"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])], LoanForeclosureComponent);
    /***/
  },

  /***/
  "./src/app/loan-foreclosure/loan-foreclosure.module.ts":
  /*!*************************************************************!*\
    !*** ./src/app/loan-foreclosure/loan-foreclosure.module.ts ***!
    \*************************************************************/

  /*! exports provided: LoanForeclosureModule */

  /***/
  function srcAppLoanForeclosureLoanForeclosureModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoanForeclosureModule", function () {
      return LoanForeclosureModule;
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


    var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material-moment-adapter */
    "./node_modules/@angular/material-moment-adapter/fesm2015/material-moment-adapter.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/fesm2015/input.js");
    /* harmony import */


    var _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/app-common/app-common.module */
    "./src/app/app-common/app-common.module.ts");
    /* harmony import */


    var _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @app/navigation/navigation.module */
    "./src/app/navigation/navigation.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./dialog/dialog.component */
    "./src/app/loan-foreclosure/dialog/dialog.component.ts");
    /* harmony import */


    var _loan_foreclosure_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./loan-foreclosure-routing.module */
    "./src/app/loan-foreclosure/loan-foreclosure-routing.module.ts");
    /* harmony import */


    var _loan_foreclosure_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./loan-foreclosure.component */
    "./src/app/loan-foreclosure/loan-foreclosure.component.ts");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _app_layout_dashboard_layout_dashboard_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @app/layout-dashboard/layout-dashboard.module */
    "./src/app/layout-dashboard/layout-dashboard.module.ts");

    var LoanForeclosureModule = function LoanForeclosureModule() {
      _classCallCheck(this, LoanForeclosureModule);
    };

    LoanForeclosureModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_loan_foreclosure_component__WEBPACK_IMPORTED_MODULE_13__["LoanForeclosureComponent"], _dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _loan_foreclosure_routing_module__WEBPACK_IMPORTED_MODULE_12__["LoanForeclosureRoutingModule"], _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_9__["NavigationModule"], _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_8__["AppCommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_10__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_6__["MatDatepickerModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["MatNativeDateModule"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_4__["MatMomentDateModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_14__["MatDialogModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_15__["MatButtonModule"], _app_layout_dashboard_layout_dashboard_module__WEBPACK_IMPORTED_MODULE_16__["LayoutDashboardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      exports: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"]],
      entryComponents: [_dialog_dialog_component__WEBPACK_IMPORTED_MODULE_11__["DialogComponent"]]
    })], LoanForeclosureModule);
    /***/
  },

  /***/
  "./src/app/loan-foreclosure/services/index.ts":
  /*!****************************************************!*\
    !*** ./src/app/loan-foreclosure/services/index.ts ***!
    \****************************************************/

  /*! exports provided: services, LoanForeclosureService */

  /***/
  function srcAppLoanForeclosureServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "services", function () {
      return services;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _loan_foreclosure_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./loan-foreclosure.service */
    "./src/app/loan-foreclosure/services/loan-foreclosure.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "LoanForeclosureService", function () {
      return _loan_foreclosure_service__WEBPACK_IMPORTED_MODULE_1__["LoanForeclosureService"];
    });

    var services = [_loan_foreclosure_service__WEBPACK_IMPORTED_MODULE_1__["LoanForeclosureService"]];
    /***/
  },

  /***/
  "./src/app/loan-foreclosure/services/loan-foreclosure.service.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/loan-foreclosure/services/loan-foreclosure.service.ts ***!
    \***********************************************************************/

  /*! exports provided: LoanForeclosureService */

  /***/
  function srcAppLoanForeclosureServicesLoanForeclosureServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoanForeclosureService", function () {
      return LoanForeclosureService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoanForeclosureService = /*#__PURE__*/function () {
      function LoanForeclosureService(http) {
        _classCallCheck(this, LoanForeclosureService);

        this.http = http;
      }

      _createClass(LoanForeclosureService, [{
        key: "getBankList",
        value: function getBankList() {
          var url = 'http://206.189.129.219:8080/getBankList';
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
          headers.append('Accept', 'application/json');
          headers.append('content-type', 'application/json');
          return this.http.get(url, {
            headers: headers
          });
        }
      }, {
        key: "getData",
        value: function getData(data) {
          console.log(data);
          var url = 'http://206.189.129.219:8080/getLoanData';
          return this.http.post(url, data);
        }
      }, {
        key: "sendData",
        value: function sendData(data) {
          console.log(data);
          var url = 'http://206.189.129.219:8080/sendLoanForeCloseData';
          var closeData = {
            closeData: data
          };
          return this.http.post(url, closeData);
        }
      }]);

      return LoanForeclosureService;
    }();

    LoanForeclosureService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    LoanForeclosureService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], LoanForeclosureService);
    /***/
  }
}]);
//# sourceMappingURL=loan-foreclosure-loan-foreclosure-module-es5.js.map