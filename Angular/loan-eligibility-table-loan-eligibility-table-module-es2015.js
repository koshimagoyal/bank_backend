(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loan-eligibility-table-loan-eligibility-table-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/loan-eligibility-table/loan-eligibility-table.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/loan-eligibility-table/loan-eligibility-table.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-emp-dashboard>\r\n    <sb-dashboard-head title=\"{{'Employee.Pages.Eligible'|translate}}\"></sb-dashboard-head>\r\n    <hr class=\"rounded\">\r\n    <br>\r\n    <div *ngIf=\"eligible; else not\">\r\n        <button type=\"button\" class=\"btn bg-primary btn-style\" [routerLink]=\"['/apply-loan']\">{{'Employee.Pages.Apply'|translate}}</button>\r\n    </div>\r\n    <ng-template #not>\r\n        <div>\r\n            <button type=\"button\" class=\"btn bg-primary btn-style\" [routerLink]=\"['/apply-loan']\" disabled>{{'Employee.Pages.Apply'|translate}}</button>\r\n        </div>\r\n    </ng-template>\r\n    <br/><br/><br/>\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-2 col-md-1\"></div>\r\n        <div class=\"col-xl-8 col-md-10\">\r\n            <sb-card>\r\n                <div class=\"card-header\">\r\n                    <fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{'Employee.Pages.Eligible'|translate}}\r\n                </div>\r\n                <div class=\"card-body table-responsive\">\r\n                    <table class=\"table table-striped\">\r\n                        <tbody>\r\n                        <tr>\r\n                            <td>{{'Employee.Personal'| translate}}</td>\r\n                            <td>{{personal}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Employee.Emergency'| translate}}</td>\r\n                            <td>{{emergency}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Employee.LoanEligible.EligibleAmount'| translate}}</td>\r\n                            <td>{{eligibleAmount| indianCurrency}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td>{{'Employee.LoanEligible.Amount'| translate}}</td>\r\n                            <td>{{eligibleLeftAmount| indianCurrency}}</td>\r\n                        </tr>\r\n                        </tbody>\r\n                    </table>\r\n                </div>\r\n            </sb-card>\r\n        </div>\r\n        <div class=\"col-xl-2 col-md-1\"></div>\r\n    </div>\r\n    <ng-container *ngFor=\"let val of loanData\">\r\n        <sb-card>\r\n            <div class=\"card-header bg-primary headers\">\r\n                <div class=\"row\">\r\n                    <div class=\"col\" style=\"margin-top: 10px;\">\r\n                        <h5><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"rupee-sign\"]'></fa-icon>&nbsp;{{'Employee.Loan'| translate}} ({{val.date| date:'dd-MM-yyyy'}})</h5>\r\n                    </div>\r\n                    <div class=\"col\">\r\n                        <span class=\"float-right\" style=\"margin: 10px;\"><h5>{{val.loanAmount| indianCurrency}}</h5></span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </sb-card>\r\n    </ng-container>\r\n</sb-layout-emp-dashboard>\r\n\r\n");

/***/ }),

/***/ "./src/app/loan-eligibility-table/loan-eligibility-table-routing.module.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/loan-eligibility-table/loan-eligibility-table-routing.module.ts ***!
  \*********************************************************************************/
/*! exports provided: LoanEligibilityTableRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanEligibilityTableRoutingModule", function() { return LoanEligibilityTableRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _loan_eligibility_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./loan-eligibility-table.component */ "./src/app/loan-eligibility-table/loan-eligibility-table.component.ts");




const routes = [{ path: '', component: _loan_eligibility_table_component__WEBPACK_IMPORTED_MODULE_3__["LoanEligibilityTableComponent"] }];
let LoanEligibilityTableRoutingModule = class LoanEligibilityTableRoutingModule {
};
LoanEligibilityTableRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], LoanEligibilityTableRoutingModule);



/***/ }),

/***/ "./src/app/loan-eligibility-table/loan-eligibility-table.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/loan-eligibility-table/loan-eligibility-table.component.scss ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".headers {\n  color: white;\n}\n\n.btn-style {\n  color: white;\n  float: right;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9hbi1lbGlnaWJpbGl0eS10YWJsZS9DOlxcVXNlcnNcXFBSQUtIQVJcXERvY3VtZW50c1xcQW5ndWxhciBQcm9qZWN0XFxLb3NoaW1hXFxTb2NpZXR5X0Jhbmtpbmcvc3JjXFxhcHBcXGxvYW4tZWxpZ2liaWxpdHktdGFibGVcXGxvYW4tZWxpZ2liaWxpdHktdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2xvYW4tZWxpZ2liaWxpdHktdGFibGUvbG9hbi1lbGlnaWJpbGl0eS10YWJsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLFlBQUE7QUNESjs7QURHQTtFQUNJLFlBQUE7RUFDQSxZQUFBO0FDQUoiLCJmaWxlIjoic3JjL2FwcC9sb2FuLWVsaWdpYmlsaXR5LXRhYmxlL2xvYW4tZWxpZ2liaWxpdHktdGFibGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdzdHlsZXMvdmFyaWFibGVzLnNjc3MnO1xyXG5cclxuLmhlYWRlcnN7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn1cclxuLmJ0bi1zdHlsZXtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZsb2F0OiByaWdodDtcclxufVxyXG5cclxuIiwiLmhlYWRlcnMge1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5idG4tc3R5bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZsb2F0OiByaWdodDtcbn0iXX0= */");

/***/ }),

/***/ "./src/app/loan-eligibility-table/loan-eligibility-table.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/loan-eligibility-table/loan-eligibility-table.component.ts ***!
  \****************************************************************************/
/*! exports provided: LoanEligibilityTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanEligibilityTableComponent", function() { return LoanEligibilityTableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_loan_eligibility_table_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/loan-eligibility-table/services */ "./src/app/loan-eligibility-table/services/index.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__);




// @ts-ignore

let LoanEligibilityTableComponent = class LoanEligibilityTableComponent {
    constructor(session, loanService) {
        this.session = session;
        this.loanService = loanService;
        this.eligibleLoan = 0;
        this.eligible = true;
        this.loanData = [];
    }
    ngOnInit() {
        const user = this.session.retrieve('user');
        this.text = user.id;
        this.loanService.getData(this.text).subscribe(result => {
            console.log(result);
            if (result.length === 0) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Oops!',
                    text: 'This user does not exists!',
                    icon: 'error',
                });
            }
            else {
                console.log(result);
                console.log(result.body);
                console.log(result.loanData);
                this.eligibleNoLoan = result.eligibleData;
                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < result.balance.length; i++) {
                    this.eligibleLoan += result.balance[i].credit - result.balance[i].debit;
                }
                let amt = 0;
                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < result.eligibleData.length; i++) {
                    if (result.eligibleData[i].loanType === 'personal')
                        this.personal = result.eligibleData[i].eligibleNoOfLoanType;
                    else
                        this.emergency = result.eligibleData[i].eligibleNoOfLoanType;
                    if (this.emergency === null) {
                        this.emergency = 'Multiple Number of Times';
                    }
                    amt = result.eligibleData[i].eligibleNoOfCorpusAmount;
                }
                this.eligibleAmount = amt * this.eligibleLoan;
                const loan = result.loanData.length;
                this.eligible = loan < this.eligibleLoan;
                let amount = 0;
                // tslint:disable-next-line:prefer-for-of
                for (let i = 0; i < result.loanData.length; i++) {
                    amount += result.loanData[i].loanAmount;
                }
                this.eligibleLeftAmount = this.eligibleLoan - amount;
                if (this.eligibleLeftAmount < 0)
                    this.eligibleLeftAmount = 0;
                this.loanData = result.loanData;
                console.log(this.loanData);
                console.log(this.eligibleLeftAmount + ' ' + this.eligibleAmount);
            }
        }, error1 => {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Oops!',
                text: 'Try again!',
                icon: 'error',
            });
        });
        return this.eligible;
    }
};
LoanEligibilityTableComponent.ctorParameters = () => [
    { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"] },
    { type: _app_loan_eligibility_table_services__WEBPACK_IMPORTED_MODULE_2__["LoanEligibleService"] }
];
LoanEligibilityTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-loan-eligibility-table',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./loan-eligibility-table.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/loan-eligibility-table/loan-eligibility-table.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./loan-eligibility-table.component.scss */ "./src/app/loan-eligibility-table/loan-eligibility-table.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"], _app_loan_eligibility_table_services__WEBPACK_IMPORTED_MODULE_2__["LoanEligibleService"]])
], LoanEligibilityTableComponent);



/***/ }),

/***/ "./src/app/loan-eligibility-table/loan-eligibility-table.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/loan-eligibility-table/loan-eligibility-table.module.ts ***!
  \*************************************************************************/
/*! exports provided: LoanEligibilityTableModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanEligibilityTableModule", function() { return LoanEligibilityTableModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");
/* harmony import */ var _app_layout_emp_dashboard_layout_emp_dashboard_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/layout-emp-dashboard/layout-emp-dashboard.module */ "./src/app/layout-emp-dashboard/layout-emp-dashboard.module.ts");
/* harmony import */ var _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/navigation/navigation.module */ "./src/app/navigation/navigation.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _loan_eligibility_table_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./loan-eligibility-table-routing.module */ "./src/app/loan-eligibility-table/loan-eligibility-table-routing.module.ts");
/* harmony import */ var _loan_eligibility_table_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./loan-eligibility-table.component */ "./src/app/loan-eligibility-table/loan-eligibility-table.component.ts");









let LoanEligibilityTableModule = class LoanEligibilityTableModule {
};
LoanEligibilityTableModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_loan_eligibility_table_component__WEBPACK_IMPORTED_MODULE_8__["LoanEligibilityTableComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _loan_eligibility_table_routing_module__WEBPACK_IMPORTED_MODULE_7__["LoanEligibilityTableRoutingModule"],
            _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__["NavigationModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_3__["AppCommonModule"],
            _app_layout_emp_dashboard_layout_emp_dashboard_module__WEBPACK_IMPORTED_MODULE_4__["LayoutEmpDashboardModule"],
        ],
    })
], LoanEligibilityTableModule);



/***/ }),

/***/ "./src/app/loan-eligibility-table/services/index.ts":
/*!**********************************************************!*\
  !*** ./src/app/loan-eligibility-table/services/index.ts ***!
  \**********************************************************/
/*! exports provided: services, LoanEligibleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _loan_eligible_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loan-eligible.service */ "./src/app/loan-eligibility-table/services/loan-eligible.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoanEligibleService", function() { return _loan_eligible_service__WEBPACK_IMPORTED_MODULE_1__["LoanEligibleService"]; });



const services = [_loan_eligible_service__WEBPACK_IMPORTED_MODULE_1__["LoanEligibleService"]];



/***/ }),

/***/ "./src/app/loan-eligibility-table/services/loan-eligible.service.ts":
/*!**************************************************************************!*\
  !*** ./src/app/loan-eligibility-table/services/loan-eligible.service.ts ***!
  \**************************************************************************/
/*! exports provided: LoanEligibleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanEligibleService", function() { return LoanEligibleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let LoanEligibleService = class LoanEligibleService {
    constructor(http) {
        this.http = http;
    }
    getData(text) {
        console.log(text);
        const url = 'http://206.189.129.219:8080/getEligibleData';
        const data = {
            userId: text,
        };
        return this.http.post(url, data);
    }
};
LoanEligibleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
LoanEligibleService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], LoanEligibleService);



/***/ })

}]);
//# sourceMappingURL=loan-eligibility-table-loan-eligibility-table-module-es2015.js.map