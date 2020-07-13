(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apply-loan-apply-loan-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/apply-loan/apply-loan.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/apply-loan/apply-loan.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-emp-dashboard>\n    <sb-dashboard-head title=\"{{'Employee.Pages.Apply'| translate}}\"></sb-dashboard-head>\n    <hr class=\"rounded\">\n    <br>\n    <div class=\"row\">\n        <div class=\"col-xl-2 col-md-1\"></div>\n        <div class=\"col-xl-8 col-md-10\">\n            <sb-card>\n                <div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{'Employee.Pages.Apply'| translate}}</div>\n                <div class=\"card-body table-responsive\">\n                    <table class=\"table table-striped\" id=\"content\">\n                        <tbody>\n                        <tr>\n                            <td>{{'Accountant.Tables.EmployeeNo'| translate}}</td>\n                            <td>{{text}}</td>\n                        </tr>\n                        <tr>\n                            <td>{{'Accountant.Tables.EmployeeName'| translate}}</td>\n                            <td>{{name}}</td>\n                        </tr>\n                        <tr>\n                            <td>{{'Accountant.Tables.Date'| translate}}</td>\n                            <td>\n                                <label>\n                                    <input type=\"date\" [(ngModel)]=\"date\" name=\"date\"/>\n                                </label>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>{{'Accountant.Tables.LoanType'| translate}}</td>\n                            <td>\n                                <label>\n                                    <select class=\"custom-select\" [(ngModel)]=\"type\">\n                                        <option>{{'Accountant.Tables.Personal'| translate}}</option>\n                                        <option>{{'Accountant.Tables.Emergency'| translate}}</option>\n                                    </select>\n                                </label>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>{{'Accountant.Tables.Loan'| translate}} (in INR)</td>\n                            <td>\n                                <label>\n                                    <input type=\"number\" [(ngModel)]=\"loanAmount\" name=\"amount\"/>\n                                </label>\n                            </td>\n                        </tr>\n                        <tr>\n                            <td>{{'Accountant.Tables.Duration'| translate}} (in Months)</td>\n                            <td>\n                                <label>\n                                    <input type=\"number\" [(ngModel)]=\"duration\" name=\"duration\"/>\n                                </label>\n                            </td>\n                        </tr>\n                        </tbody>\n                    </table>\n                    <button style=\"float:right;\" (click)=\"send()\">{{'Accountant.Tables.Submit'| translate}}</button>\n                </div>\n            </sb-card>\n        </div>\n        <div class=\"col-xl-2 col-md-1\"></div>\n    </div>\n\n</sb-layout-emp-dashboard>\n");

/***/ }),

/***/ "./src/app/apply-loan/apply-loan-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/apply-loan/apply-loan-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: ApplyLoanRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyLoanRoutingModule", function() { return ApplyLoanRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _apply_loan_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apply-loan.component */ "./src/app/apply-loan/apply-loan.component.ts");




const routes = [{ path: '', component: _apply_loan_component__WEBPACK_IMPORTED_MODULE_3__["ApplyLoanComponent"] }];
let ApplyLoanRoutingModule = class ApplyLoanRoutingModule {
};
ApplyLoanRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], ApplyLoanRoutingModule);



/***/ }),

/***/ "./src/app/apply-loan/apply-loan.component.scss":
/*!******************************************************!*\
  !*** ./src/app/apply-loan/apply-loan.component.scss ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGx5LWxvYW4vYXBwbHktbG9hbi5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/apply-loan/apply-loan.component.ts":
/*!****************************************************!*\
  !*** ./src/app/apply-loan/apply-loan.component.ts ***!
  \****************************************************/
/*! exports provided: ApplyLoanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyLoanComponent", function() { return ApplyLoanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_apply_loan_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/apply-loan/services */ "./src/app/apply-loan/services/index.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__);




// @ts-ignore

let ApplyLoanComponent = class ApplyLoanComponent {
    constructor(loanService, session) {
        this.loanService = loanService;
        this.session = session;
        this.interest = 0;
    }
    ngOnInit() {
        const user = this.session.retrieve('user');
        this.text = user.id;
        this.name = user.name;
    }
    send() {
        if (!this.text || !this.loanAmount || !this.duration || !this.date || !this.type) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Oops!',
                text: 'Fill All the Details!',
                icon: 'error',
            });
        }
        else {
            this.data = {
                userId: this.text,
                loanAmount: this.loanAmount,
                loanDuration: this.duration,
                date: this.date,
                closeLoan: true,
                loanType: this.type,
                interest: this.interest,
            };
            this.loanService.sendData(this.data).subscribe(result => {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    text: 'Sent!',
                    icon: 'success',
                }).then((isConfirm) => {
                    if (isConfirm) {
                        // @ts-ignore
                        this.text = null;
                        this.date = null;
                        this.loanAmount = null;
                        this.type = null;
                        this.duration = null;
                    }
                });
            }, error1 => {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Oops!',
                    text: 'Try again!',
                    icon: 'error',
                });
            });
        }
    }
};
ApplyLoanComponent.ctorParameters = () => [
    { type: _app_apply_loan_services__WEBPACK_IMPORTED_MODULE_2__["ApplyLoanService"] },
    { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"] }
];
ApplyLoanComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-apply-loan',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./apply-loan.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/apply-loan/apply-loan.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./apply-loan.component.scss */ "./src/app/apply-loan/apply-loan.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_apply_loan_services__WEBPACK_IMPORTED_MODULE_2__["ApplyLoanService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"]])
], ApplyLoanComponent);



/***/ }),

/***/ "./src/app/apply-loan/apply-loan.module.ts":
/*!*************************************************!*\
  !*** ./src/app/apply-loan/apply-loan.module.ts ***!
  \*************************************************/
/*! exports provided: ApplyLoanModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyLoanModule", function() { return ApplyLoanModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");
/* harmony import */ var _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/navigation/navigation.module */ "./src/app/navigation/navigation.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _apply_loan_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apply-loan-routing.module */ "./src/app/apply-loan/apply-loan-routing.module.ts");
/* harmony import */ var _apply_loan_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./apply-loan.component */ "./src/app/apply-loan/apply-loan.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_layout_emp_dashboard_layout_emp_dashboard_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/layout-emp-dashboard/layout-emp-dashboard.module */ "./src/app/layout-emp-dashboard/layout-emp-dashboard.module.ts");










let ApplyLoanModule = class ApplyLoanModule {
};
ApplyLoanModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_apply_loan_component__WEBPACK_IMPORTED_MODULE_7__["ApplyLoanComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _apply_loan_routing_module__WEBPACK_IMPORTED_MODULE_6__["ApplyLoanRoutingModule"],
            _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_4__["NavigationModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_5__["TranslateModule"],
            _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_3__["AppCommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
            _app_layout_emp_dashboard_layout_emp_dashboard_module__WEBPACK_IMPORTED_MODULE_9__["LayoutEmpDashboardModule"],
        ],
    })
], ApplyLoanModule);



/***/ }),

/***/ "./src/app/apply-loan/services/apply-loan.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/apply-loan/services/apply-loan.service.ts ***!
  \***********************************************************/
/*! exports provided: ApplyLoanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplyLoanService", function() { return ApplyLoanService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ApplyLoanService = class ApplyLoanService {
    constructor(http) {
        this.http = http;
    }
    sendData(data) {
        console.log(data);
        const url = 'http://206.189.129.219:8080/sendLoanEntry';
        return this.http.post(url, data);
    }
};
ApplyLoanService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ApplyLoanService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ApplyLoanService);



/***/ }),

/***/ "./src/app/apply-loan/services/index.ts":
/*!**********************************************!*\
  !*** ./src/app/apply-loan/services/index.ts ***!
  \**********************************************/
/*! exports provided: services, ApplyLoanService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _apply_loan_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apply-loan.service */ "./src/app/apply-loan/services/apply-loan.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ApplyLoanService", function() { return _apply_loan_service__WEBPACK_IMPORTED_MODULE_1__["ApplyLoanService"]; });



const services = [_apply_loan_service__WEBPACK_IMPORTED_MODULE_1__["ApplyLoanService"]];



/***/ })

}]);
//# sourceMappingURL=apply-loan-apply-loan-module-es2015.js.map