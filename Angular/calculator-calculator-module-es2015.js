(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["calculator-calculator-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/calculator/calculator/calculator.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/calculator/calculator/calculator.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-emp-dashboard>\n    <sb-dashboard-head title=\"{{'Employee.Pages.Calculator'|translate}}\"></sb-dashboard-head>\n    <hr class=\"rounded\">\n    <br>\n    <sb-card>\n        <div class=\"card-header\">\n            <fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{'Employee.Pages.Calculator'|translate}}\n        </div>\n        <div class=\"card-body\"><!-- EMI Calculator Widget START -->\n            <div id=\"ecww-widgetwrapper\" style=\"min-width:250px;width:100%;\">\n                <div id=\"ecww-widget\" style=\"position:relative;padding-top:0;padding-bottom:280px;height:100%;overflow:hidden;\">\n                </div>\n                <div id=\"ecww-more\" style=\"background:#333;font:normal 13px/1 Helvetica, Arial, Verdana, Sans-serif;padding:10px 0;color:#FFF;text-align:center;width:100%;clear:both;margin:0;clear:both;float:left;\">\n                </div>\n            </div><!-- EMI Calculator Widget END -->\n        </div>\n    </sb-card>\n</sb-layout-emp-dashboard>\n");

/***/ }),

/***/ "./src/app/calculator/calculator-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/calculator/calculator-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CalculatorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorRoutingModule", function() { return CalculatorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_calculator_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/calculator/calculator/calculator.component */ "./src/app/calculator/calculator/calculator.component.ts");




const routes = [{ path: '', component: _app_calculator_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_3__["CalculatorComponent"] }];
let CalculatorRoutingModule = class CalculatorRoutingModule {
};
CalculatorRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CalculatorRoutingModule);



/***/ }),

/***/ "./src/app/calculator/calculator.module.ts":
/*!*************************************************!*\
  !*** ./src/app/calculator/calculator.module.ts ***!
  \*************************************************/
/*! exports provided: CalculatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorModule", function() { return CalculatorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _calculator_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./calculator-routing.module */ "./src/app/calculator/calculator-routing.module.ts");
/* harmony import */ var _calculator_calculator_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./calculator/calculator.component */ "./src/app/calculator/calculator/calculator.component.ts");
/* harmony import */ var _app_layout_emp_dashboard_layout_emp_dashboard_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/layout-emp-dashboard/layout-emp-dashboard.module */ "./src/app/layout-emp-dashboard/layout-emp-dashboard.module.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");
/* harmony import */ var _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @app/navigation/navigation.module */ "./src/app/navigation/navigation.module.ts");









let CalculatorModule = class CalculatorModule {
};
CalculatorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_calculator_calculator_component__WEBPACK_IMPORTED_MODULE_4__["CalculatorComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _calculator_routing_module__WEBPACK_IMPORTED_MODULE_3__["CalculatorRoutingModule"],
            _app_layout_emp_dashboard_layout_emp_dashboard_module__WEBPACK_IMPORTED_MODULE_5__["LayoutEmpDashboardModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"],
            _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_7__["AppCommonModule"],
            _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_8__["NavigationModule"],
        ],
    })
], CalculatorModule);



/***/ }),

/***/ "./src/app/calculator/calculator/calculator.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/calculator/calculator/calculator.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhbGN1bGF0b3IvY2FsY3VsYXRvci9jYWxjdWxhdG9yLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/calculator/calculator/calculator.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/calculator/calculator/calculator.component.ts ***!
  \***************************************************************/
/*! exports provided: CalculatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalculatorComponent", function() { return CalculatorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_calculator_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/calculator/services */ "./src/app/calculator/services/index.ts");



let CalculatorComponent = class CalculatorComponent {
    constructor(loanService) {
        this.loanService = loanService;
    }
    ngOnInit() {
        this.loadScript('https://emicalculator.net/widget/2.0/js/emicalc-loader.min.js');
    }
    loadScript(url) {
        const body = document.body;
        const script = document.createElement('script');
        script.innerHTML = '';
        script.src = url;
        script.async = false;
        script.defer = true;
        body.appendChild(script);
    }
};
CalculatorComponent.ctorParameters = () => [
    { type: _app_calculator_services__WEBPACK_IMPORTED_MODULE_2__["LoanEmiCalculatorService"] }
];
CalculatorComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-calculator',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./calculator.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/calculator/calculator/calculator.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./calculator.component.scss */ "./src/app/calculator/calculator/calculator.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_calculator_services__WEBPACK_IMPORTED_MODULE_2__["LoanEmiCalculatorService"]])
], CalculatorComponent);



/***/ }),

/***/ "./src/app/calculator/services/index.ts":
/*!**********************************************!*\
  !*** ./src/app/calculator/services/index.ts ***!
  \**********************************************/
/*! exports provided: services, ScriptStore, LoanEmiCalculatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _loan_emi_calculator_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loan-emi-calculator.service */ "./src/app/calculator/services/loan-emi-calculator.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScriptStore", function() { return _loan_emi_calculator_service__WEBPACK_IMPORTED_MODULE_1__["ScriptStore"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LoanEmiCalculatorService", function() { return _loan_emi_calculator_service__WEBPACK_IMPORTED_MODULE_1__["LoanEmiCalculatorService"]; });



const services = [_loan_emi_calculator_service__WEBPACK_IMPORTED_MODULE_1__["LoanEmiCalculatorService"]];



/***/ }),

/***/ "./src/app/calculator/services/loan-emi-calculator.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/calculator/services/loan-emi-calculator.service.ts ***!
  \********************************************************************/
/*! exports provided: ScriptStore, LoanEmiCalculatorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScriptStore", function() { return ScriptStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoanEmiCalculatorService", function() { return LoanEmiCalculatorService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


const ScriptStore = {
    name: 'calculator',
    src: 'https://emicalculator.net/widget/2.0/js/emicalc-loader.min.js',
};
let LoanEmiCalculatorService = class LoanEmiCalculatorService {
    constructor() {
    }
};
LoanEmiCalculatorService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], LoanEmiCalculatorService);



/***/ })

}]);
//# sourceMappingURL=calculator-calculator-module-es2015.js.map