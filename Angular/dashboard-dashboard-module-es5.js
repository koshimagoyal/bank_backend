function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["dashboard-dashboard-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-layout-dashboard>\n    <sb-dashboard-head title=\"{{'Accountant.Title'|translate}}\">\n    </sb-dashboard-head>\n    <hr class=\"rounded\">\n    <br>\n    <div class=\"row\">\n        <div class=\"col-xl-3 col-md-6\">\n            <sb-card-view-details text=\"{{noOfLoans| indianCurrency}}\" background=\"bg-danger\">\n                <div class=\"card-body\">\n                    <fa-icon class=\"mr-1 fa-pull-right\" style=\"opacity: 0.5; font-size: 30px;\" [icon]='[\"fas\", \"money-check\"]'></fa-icon>\n                    <p style=\"margin-top: 10px;\">{{'Accountant.Cards.People'| translate}}</p>\n                </div>\n            </sb-card-view-details>\n        </div>\n        <div class=\"col-xl-3 col-md-6\">\n            <sb-card-view-details text=\"{{loanAmount| indianCurrency}}\" background=\"bg-primary\">\n                <div class=\"card-body\">\n                    <fa-icon class=\"mr-1 fa-pull-right\" style=\"opacity: 0.5; font-size: 30px;\" [icon]='[\"fas\", \"rupee-sign\"]'></fa-icon>\n                    <p style=\"margin-top: 10px;\">{{'Accountant.Cards.Loan'| translate}}</p>\n                </div>\n            </sb-card-view-details>\n        </div>\n        <div class=\"col-xl-3 col-md-6\">\n            <sb-card-view-details  text=\"{{amount| indianCurrency}}\" background=\"bg-success\">\n                <div class=\"card-body\">\n                    <fa-icon class=\"mr-1 fa-pull-right\" style=\"opacity: 0.5; font-size: 30px;\" [icon]='[\"fas\", \"coins\"]'></fa-icon>\n                    <p style=\"margin-top: 10px;\">{{'Accountant.Cards.Amount'| translate}}</p>\n                </div>\n            </sb-card-view-details>\n        </div>\n        <div class=\"col-xl-3 col-md-6\">\n            <sb-card-view-details  text=\"{{interest| indianCurrency}}\" background=\"bg-warning\">\n                <div class=\"card-body\">\n                    <fa-icon class=\"mr-1 fa-pull-right\" style=\"opacity: 0.5; font-size: 30px;\" [icon]='[\"fas\", \"hand-holding-usd\"]'></fa-icon>\n                    <p style=\"margin-top: 10px;\">{{'Accountant.Cards.Interest'| translate}}</p>\n                </div>\n            </sb-card-view-details>\n        </div>\n    </div>\n    <!--Cash Balance Table-->\n    <sb-card *ngIf=\"balanceCash\">\n        <div class=\"card-header\">\n            <div class=\"row\">\n                <div class=\"col\" style=\"margin-top: 10px;\">\n                    <fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{\"Accountant.Tables.CashBal\" | translate}}\n                </div>\n            </div>\n        </div>\n        <ng-template #not>\n            <td>-</td>\n        </ng-template>\n        <div class=\"card-body table-responsive\">\n            <table class=\"table table-striped\" style=\"text-align: center;\">\n                <thead>\n                <tr>\n                    <th>{{'Accountant.Credit'| translate}}</th>\n                    <th>{{'Accountant.Debit'| translate}}</th>\n                    <th>{{'Accountant.Tables.Total'| translate}}</th>\n                </tr>\n                </thead>\n                <tbody *ngFor=\"let val of balanceCash\">\n                <tr>\n                    <td *ngIf=\"val.credit; else not\">{{val.credit| indianCurrency}}</td>\n                    <td *ngIf=\"val.debit; else not\">{{val.debit| indianCurrency}}</td>\n                    <td>{{(val.credit-val.debit)| indianCurrency}}</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </sb-card>\n    <!--Bank Balance Table-->\n    <sb-card *ngIf=\"balanceBank\">\n        <div class=\"card-header\">\n            <div class=\"row\">\n                <div class=\"col\" style=\"margin-top: 10px;\">\n                    <fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{\"Accountant.Tables.BankBal\" | translate}}\n                </div>\n            </div>\n        </div>\n        <ng-template #not>\n            <td>-</td>\n        </ng-template>\n        <div class=\"card-body table-responsive\">\n            <table class=\"table table-striped\" style=\"text-align: center;\">\n                <thead>\n                <tr>\n                    <th>{{'Accountant.Tables.BankName'| translate}}</th>\n                    <th>{{'Accountant.Credit'| translate}}</th>\n                    <th>{{'Accountant.Debit'| translate}}</th>\n                    <th>{{'Accountant.Tables.Total'| translate}}</th>\n                </tr>\n                </thead>\n                <tbody *ngFor=\"let val of balanceBank\">\n                <tr>\n                    <td *ngIf=\"val.bankName; else not\">{{val.bankName}}</td>\n                    <td *ngIf=\"val.credit; else not\">{{val.credit| indianCurrency}}</td>\n                    <td *ngIf=\"val.debit; else not\">{{val.debit| indianCurrency}}</td>\n                    <td>{{(val.credit-val.debit)| indianCurrency}}</td>\n                </tr>\n                </tbody>\n            </table>\n        </div>\n    </sb-card>\n    <!--Loan Approval Table-->\n    <sb-card *ngIf=\"loanApprove\">\n        <div class=\"card-header\">\n            <div class=\"row\">\n                <div class=\"col\" style=\"margin-top: 10px;\">\n                    <fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{\"Accountant.Tables.LoanApprove\" | translate}}\n                </div>\n                <div class=\"col\">\n                    <input type=\"text\" placeholder=\"Search..\" [(ngModel)]=\"term\"/>\n                </div>\n            </div>\n        </div>\n        <ng-template #not>\n            <td>-</td>\n        </ng-template>\n        <div class=\"card-body table-responsive\">\n            <table class=\"table table-striped\">\n                <thead>\n                <tr>\n                    <td>{{'Accountant.Tables.EmployeeNo'| translate}}</td>\n                    <td>{{'Accountant.Tables.LoanDate'| translate}}</td>\n                    <td>{{'Accountant.Tables.Loan'| translate}}</td>\n                    <td>{{'Accountant.Tables.Duration'| translate}}</td>\n                    <td>{{'Accountant.Tables.LoanType'| translate}}</td>\n                    <td>{{'Accountant.Tables.AR'| translate}}</td>\n                </tr>\n                </thead>\n                <tbody *ngFor=\"let loan of loanData | filter: term | paginate: { itemsPerPage:5, currentPage: p}; let i=index;\">\n                <tr>\n                    <td *ngIf=\"loan.userId; else not\">{{loan.userId}}</td>\n                    <td *ngIf=\"loan.date; else not\">{{loan.date| date:'dd-MM-yyyy'}}</td>\n                    <td *ngIf=\"loan.loanAmount; else not\">{{loan.loanAmount| indianCurrency}}</td>\n                    <td *ngIf=\"loan.loanDuration; else not\">{{loan.loanDuration}}</td>\n                    <td *ngIf=\"loan.loanType; else not\">{{loan.loanType}}</td>\n                    <td>\n                        <label>\n                            <input type=\"checkbox\" (click)=\"approve(i)\"/>\n                        </label>\n                    </td>\n                </tr>\n                <tr *ngIf=\"approveMode[i]\" align=\"center\">\n                    <td colspan=\"6\">\n                        <table class=\"table\">\n                            <tbody>\n                            <tr>\n                                <td>{{'Accountant.Tables.Interest'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"number\" [(ngModel)]=\"interestAmt[i]\" name=\"interest\" />\n                                    </label>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                        <div class=\"row\">\n                            <div class=\"col\">\n                                <button (click)=\"approveLoan(loan.userId,loan.loanId, interestAmt[i])\">{{'Accountant.Tables.Approve'| translate}}</button>\n                            </div>\n                            <div class=\"col\">\n                                <button (click)=\"rejectLoan(loan.userId,loan.loanId)\">{{'Accountant.Tables.Reject'| translate}}</button>\n                            </div>\n                        </div>\n                    </td>\n                </tr>\n                </tbody>\n            </table>\n            <div class=\"pagination\">\n                <pagination-controls (pageChange)=\"p=$event\"></pagination-controls>\n            </div>\n        </div>\n    </sb-card>\n</sb-layout-dashboard>\n";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/dashboard/dashboard-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: DashboardRoutingModule */

  /***/
  function srcAppDashboardDashboardRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardRoutingModule", function () {
      return DashboardRoutingModule;
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


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");

    var routes = [{
      path: '',
      component: _dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]
    }];

    var DashboardRoutingModule = function DashboardRoutingModule() {
      _classCallCheck(this, DashboardRoutingModule);
    };

    DashboardRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], DashboardRoutingModule);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.scss":
  /*!****************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.scss ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".headers {\n  color: white;\n}\n\n.pagination a {\n  border-radius: 5px;\n}\n\n.pagination a.active {\n  border-radius: 5px;\n}\n\n/* Style the search box inside the navigation bar */\n\n.card-header input[type=text] {\n  border-radius: 5px;\n  float: right;\n  padding: 6px;\n  margin-right: 16px;\n  font-size: 17px;\n  border: 1px solid #000000;\n}\n\n/* When the screen is less than 600px wide, stack the links and the search field vertically instead of horizontally */\n\n@media screen and (max-width: 600px) {\n  .card-header a, .card-header input[type=text] {\n    border-radius: 5px;\n    float: none;\n    display: block;\n    text-align: left;\n    width: 100%;\n    margin: 0;\n    padding: 14px;\n  }\n\n  .card-header input[type=text] {\n    border: 1px solid #ccc;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcTGVub3ZvXFxEb3dubG9hZHNcXFNvY2lldHlfQmFua2luZy9zcmNcXGFwcFxcZGFzaGJvYXJkXFxkYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxZQUFBO0FDREo7O0FER0E7RUFDSSxrQkFBQTtBQ0FKOztBREdBO0VBQ0ksa0JBQUE7QUNBSjs7QURFQSxtREFBQTs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBLHFIQUFBOztBQUNBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtJQUNBLGFBQUE7RUNDTjs7RURDRTtJQUNJLHNCQUFBO0VDRU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvdmFyaWFibGVzLnNjc3MnO1xuXG4uaGVhZGVyc3tcbiAgICBjb2xvcjogd2hpdGU7XG59XG4ucGFnaW5hdGlvbiBhIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wYWdpbmF0aW9uIGEuYWN0aXZlIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG4vKiBTdHlsZSB0aGUgc2VhcmNoIGJveCBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyICovXG4uY2FyZC1oZWFkZXIgaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgIGZsb2F0OiByaWdodDtcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNnB4O1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xufVxuXG4vKiBXaGVuIHRoZSBzY3JlZW4gaXMgbGVzcyB0aGFuIDYwMHB4IHdpZGUsIHN0YWNrIHRoZSBsaW5rcyBhbmQgdGhlIHNlYXJjaCBmaWVsZCB2ZXJ0aWNhbGx5IGluc3RlYWQgb2YgaG9yaXpvbnRhbGx5ICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAgIC5jYXJkLWhlYWRlciBhLCAuY2FyZC1oZWFkZXIgaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgZmxvYXQ6IG5vbmU7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBwYWRkaW5nOiAxNHB4O1xuICAgIH1cbiAgICAuY2FyZC1oZWFkZXIgaW5wdXRbdHlwZT10ZXh0XSB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gICAgfVxufVxuIiwiLmhlYWRlcnMge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5wYWdpbmF0aW9uIGEge1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5wYWdpbmF0aW9uIGEuYWN0aXZlIHtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xufVxuXG4vKiBTdHlsZSB0aGUgc2VhcmNoIGJveCBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyICovXG4uY2FyZC1oZWFkZXIgaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiA2cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xufVxuXG4vKiBXaGVuIHRoZSBzY3JlZW4gaXMgbGVzcyB0aGFuIDYwMHB4IHdpZGUsIHN0YWNrIHRoZSBsaW5rcyBhbmQgdGhlIHNlYXJjaCBmaWVsZCB2ZXJ0aWNhbGx5IGluc3RlYWQgb2YgaG9yaXpvbnRhbGx5ICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY2FyZC1oZWFkZXIgYSwgLmNhcmQtaGVhZGVyIGlucHV0W3R5cGU9dGV4dF0ge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAxNHB4O1xuICB9XG5cbiAgLmNhcmQtaGVhZGVyIGlucHV0W3R5cGU9dGV4dF0ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/dashboard/dashboard.component.ts ***!
    \**************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
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


    var _app_dashboard_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/dashboard/services */
    "./src/app/dashboard/services/index.ts");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! sweetalert2/dist/sweetalert2.js */
    "./node_modules/sweetalert2/dist/sweetalert2.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3__); // @ts-ignore


    var DashboardComponent = /*#__PURE__*/function () {
      function DashboardComponent(dashboardService) {
        _classCallCheck(this, DashboardComponent);

        this.dashboardService = dashboardService;
        this.loanAmount = 0;
        this.interestAmount = 0;
        this.principleAmount = 0;
        this.noOfLoans = 0;
        this.loanApprove = false;
        this.loanData = [];
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.dashboardService.getData().subscribe(function (result) {
            if (result) {
              console.log(result);
              console.log(result.loan.length);
              _this.noOfLoans = result.loan.length; // tslint:disable-next-line:prefer-for-of

              for (var i = 0; i < result.loan.length; i++) {
                var principle = result.loan[i].loanData.loanAmount;
                _this.loanAmount += principle;
                var r = result.loan[i].loanData.interest / 1200;

                if (result.loan[i].loanBook) {
                  // tslint:disable-next-line:prefer-for-of
                  for (var j = 0; j < result.loan[i].loanBook.length; j++) {
                    var emi = result.loan[i].loanBook[j].credit;
                    var interest = principle * r;
                    var amt = emi - interest;
                    _this.principleAmount += amt;
                    _this.interestAmount += interest;
                  }
                }
              }

              _this.amount = (Math.round(_this.principleAmount * 100) / 100).toFixed(0);
              _this.interest = (Math.round(_this.interestAmount * 100) / 100).toFixed(0);
            }
          }, function (error1) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
              title: 'Oops!',
              text: 'Try again!',
              icon: 'error'
            });
          });
          this.dashboardService.getLoanData().subscribe(function (result) {
            if (result) {
              console.log(result);
              console.log(result.data.length);

              if (result.data.length !== 0) {
                _this.approveMode = new Array(result.data.length);
                _this.interestAmt = new Array(result.data.length);
                _this.loanData = result.data;
                _this.loanApprove = true;
              }
            }
          }, function (error1) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
              title: 'Oops!',
              text: 'Try again!',
              icon: 'error'
            });
          });
          this.dashboardService.getBal().subscribe(function (result) {
            if (result) {
              console.log(result);
              _this.balanceCash = result.cash;
              _this.balanceBank = result.bank;
            }
          }, function (error1) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
              title: 'Oops!',
              text: 'Try again!',
              icon: 'error'
            });
          });
        }
      }, {
        key: "approve",
        value: function approve(index) {
          this.approveMode[index] = !this.approveMode[index];
        }
      }, {
        key: "approveLoan",
        value: function approveLoan(text, id, loanInterest) {
          var data = {
            userId: text,
            loanId: id,
            interest: loanInterest,
            closeLoan: false
          };
          console.log(data);
          this.dashboardService.approveLoan(data).subscribe(function (result) {
            if (result) {
              sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                text: 'Approved!',
                icon: 'success'
              }).then(function (isConfirm) {
                if (isConfirm) {
                  window.location.reload();
                }
              });
            }
          }, function (error1) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
              title: 'Oops!',
              text: 'Try again!',
              icon: 'error'
            });
          });
        }
      }, {
        key: "rejectLoan",
        value: function rejectLoan(text, id) {
          var data = {
            userId: text,
            loanId: id
          };
          console.log(data);
          this.dashboardService.rejectLoan(data).subscribe(function (result) {
            if (result) {
              sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
                text: 'Rejected!',
                icon: 'success'
              }).then(function (isConfirm) {
                if (isConfirm) {
                  window.location.reload();
                }
              });
            }
          }, function (error1) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_3___default.a.fire({
              title: 'Oops!',
              text: 'Try again!',
              icon: 'error'
            });
          });
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _app_dashboard_services__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]
      }];
    };

    DashboardComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-dashboard',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/dashboard/dashboard.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_dashboard_services__WEBPACK_IMPORTED_MODULE_2__["DashboardService"]])], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/dashboard/dashboard.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/dashboard/dashboard.module.ts ***!
    \***********************************************/

  /*! exports provided: DashboardModule */

  /***/
  function srcAppDashboardDashboardModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardModule", function () {
      return DashboardModule;
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


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/app-common/app-common.module */
    "./src/app/app-common/app-common.module.ts");
    /* harmony import */


    var _app_layout_dashboard_layout_dashboard_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/layout-dashboard/layout-dashboard.module */
    "./src/app/layout-dashboard/layout-dashboard.module.ts");
    /* harmony import */


    var _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/navigation/navigation.module */
    "./src/app/navigation/navigation.module.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _dashboard_routing_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./dashboard-routing.module */
    "./src/app/dashboard/dashboard-routing.module.ts");
    /* harmony import */


    var _dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./dashboard.component */
    "./src/app/dashboard/dashboard.component.ts");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/ng2-search-filter.js");

    var DashboardModule = function DashboardModule() {
      _classCallCheck(this, DashboardModule);
    };

    DashboardModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"]],
      imports: [_dashboard_routing_module__WEBPACK_IMPORTED_MODULE_9__["DashboardRoutingModule"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_5__["AppCommonModule"], _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_7__["NavigationModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_8__["TranslateModule"], _app_layout_dashboard_layout_dashboard_module__WEBPACK_IMPORTED_MODULE_6__["LayoutDashboardModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_12__["Ng2SearchPipeModule"]],
      providers: []
    })], DashboardModule);
    /***/
  },

  /***/
  "./src/app/dashboard/services/dashboard.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/dashboard/services/dashboard.service.ts ***!
    \*********************************************************/

  /*! exports provided: DashboardService */

  /***/
  function srcAppDashboardServicesDashboardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
      return DashboardService;
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

    var DashboardService = /*#__PURE__*/function () {
      function DashboardService(httpService) {
        _classCallCheck(this, DashboardService);

        this.httpService = httpService;
      }

      _createClass(DashboardService, [{
        key: "getData",
        value: function getData() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
          headers.append('Accept', 'application/json');
          headers.append('content-type', 'application/json');
          var url = 'http://drsunitanayak.com/getAllLoanData';
          return this.httpService.get(url, {
            headers: headers
          });
        }
      }, {
        key: "getBal",
        value: function getBal() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
          headers.append('Accept', 'application/json');
          headers.append('content-type', 'application/json');
          var url = 'http://drsunitanayak.com/getCashBank';
          return this.httpService.get(url, {
            headers: headers
          });
        }
      }, {
        key: "getLoanData",
        value: function getLoanData() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
          headers.append('Accept', 'application/json');
          headers.append('content-type', 'application/json');
          var url = 'http://drsunitanayak.com/getApprovalLoans';
          return this.httpService.get(url, {
            headers: headers
          });
        }
      }, {
        key: "approveLoan",
        value: function approveLoan(data) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
          headers.append('Accept', 'application/json');
          headers.append('content-type', 'application/json');
          var url = 'http://drsunitanayak.com/approveLoan';
          return this.httpService.post(url, data, {
            headers: headers
          });
        }
      }, {
        key: "rejectLoan",
        value: function rejectLoan(data) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
          headers.append('Accept', 'application/json');
          headers.append('content-type', 'application/json');
          var url = 'http://drsunitanayak.com/rejectLoan';
          return this.httpService.post(url, data, {
            headers: headers
          });
        }
      }]);

      return DashboardService;
    }();

    DashboardService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    DashboardService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], DashboardService);
    /***/
  },

  /***/
  "./src/app/dashboard/services/index.ts":
  /*!*********************************************!*\
    !*** ./src/app/dashboard/services/index.ts ***!
    \*********************************************/

  /*! exports provided: services, DashboardService */

  /***/
  function srcAppDashboardServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _dashboard_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./dashboard.service */
    "./src/app/dashboard/services/dashboard.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "DashboardService", function () {
      return _dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"];
    });

    var services = [_dashboard_service__WEBPACK_IMPORTED_MODULE_1__["DashboardService"]];
    /***/
  }
}]);
//# sourceMappingURL=dashboard-dashboard-module-es5.js.map