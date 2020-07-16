(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login',
    },
    {
        path: 'calculator',
        loadChildren: () => Promise.all(/*! import() | calculator-calculator-module */[__webpack_require__.e("default~app-common-app-common-module~apply-loan-apply-loan-module~calculator-calculator-module~close~2891ff17"), __webpack_require__.e("default~apply-loan-apply-loan-module~calculator-calculator-module~close-account-close-account-module~f68ef752"), __webpack_require__.e("common"), __webpack_require__.e("calculator-calculator-module")]).then(__webpack_require__.bind(null, /*! ./calculator/calculator.module */ "./src/app/calculator/calculator.module.ts")).then(m => m.CalculatorModule),
    },
    {
        path: 'employee-dashboard',
        loadChildren: () => Promise.all(/*! import() | employee-dashboard-employee-dashboard-module */[__webpack_require__.e("default~app-common-app-common-module~apply-loan-apply-loan-module~calculator-calculator-module~close~2891ff17"), __webpack_require__.e("default~apply-loan-apply-loan-module~calculator-calculator-module~close-account-close-account-module~f68ef752"), __webpack_require__.e("default~apply-loan-apply-loan-module~close-account-close-account-module~credit-entry-credit-entry-mo~986d90bb"), __webpack_require__.e("common"), __webpack_require__.e("employee-dashboard-employee-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./employee-dashboard/employee-dashboard.module */ "./src/app/employee-dashboard/employee-dashboard.module.ts")).then(m => m.EmployeeDashboardModule),
    },
    {
        path: 'profile',
        loadChildren: () => Promise.all(/*! import() | profile-profile-module */[__webpack_require__.e("default~app-common-app-common-module~apply-loan-apply-loan-module~calculator-calculator-module~close~2891ff17"), __webpack_require__.e("default~apply-loan-apply-loan-module~calculator-calculator-module~close-account-close-account-module~f68ef752"), __webpack_require__.e("default~apply-loan-apply-loan-module~close-account-close-account-module~credit-entry-credit-entry-mo~986d90bb"), __webpack_require__.e("default~close-account-close-account-module~credit-entry-credit-entry-module~dashboard-dashboard-modu~d2050850"), __webpack_require__.e("common"), __webpack_require__.e("profile-profile-module")]).then(__webpack_require__.bind(null, /*! ./profile/profile.module */ "./src/app/profile/profile.module.ts")).then(m => m.ProfileModule),
    },
    {
        path: 'emp-profile',
        loadChildren: () => Promise.all(/*! import() | emp-profile-emp-profile-module */[__webpack_require__.e("default~app-common-app-common-module~apply-loan-apply-loan-module~calculator-calculator-module~close~2891ff17"), __webpack_require__.e("default~apply-loan-apply-loan-module~calculator-calculator-module~close-account-close-account-module~f68ef752"), __webpack_require__.e("default~apply-loan-apply-loan-module~close-account-close-account-module~credit-entry-credit-entry-mo~986d90bb"), __webpack_require__.e("common"), __webpack_require__.e("emp-profile-emp-profile-module")]).then(__webpack_require__.bind(null, /*! ./emp-profile/emp-profile.module */ "./src/app/emp-profile/emp-profile.module.ts")).then(m => m.EmpProfileModule),
    },
    {
        path: 'cash-cheque',
        loadChildren: () => Promise.all(/*! import() | miscellaneous-page-miscellaneous-page-module */[__webpack_require__.e("default~app-common-app-common-module~apply-loan-apply-loan-module~calculator-calculator-module~close~2891ff17"), __webpack_require__.e("default~apply-loan-apply-loan-module~calculator-calculator-module~close-account-close-account-module~f68ef752"), __webpack_require__.e("default~apply-loan-apply-loan-module~close-account-close-account-module~credit-entry-credit-entry-mo~986d90bb"), __webpack_require__.e("default~close-account-close-account-module~credit-entry-credit-entry-module~dashboard-dashboard-modu~d2050850"), __webpack_require__.e("miscellaneous-page-miscellaneous-page-module")]).then(__webpack_require__.bind(null, /*! ./miscellaneous-page/miscellaneous-page.module */ "./src/app/miscellaneous-page/miscellaneous-page.module.ts")).then(m => m.MiscellaneousPageModule),
    },
    {
        path: 'dashboard',
        loadChildren: () => Promise.all(/*! import() | dashboard-dashboard-module */[__webpack_require__.e("default~app-common-app-common-module~apply-loan-apply-loan-module~calculator-calculator-module~close~2891ff17"), __webpack_require__.e("default~apply-loan-apply-loan-module~calculator-calculator-module~close-account-close-account-module~f68ef752"), __webpack_require__.e("default~apply-loan-apply-loan-module~close-account-close-account-module~credit-entry-credit-entry-mo~986d90bb"), __webpack_require__.e("default~close-account-close-account-module~credit-entry-credit-entry-module~dashboard-dashboard-modu~d2050850"), __webpack_require__.e("dashboard-dashboard-module")]).then(__webpack_require__.bind(null, /*! ./dashboard/dashboard.module */ "./src/app/dashboard/dashboard.module.ts")).then(m => m.DashboardModule),
    },
    {
        path: 'loan-entry',
        loadChildren: () => Promise.all(/*! import() | loan-entry-loan-entry-module */[__webpack_require__.e("default~app-common-app-common-module~apply-loan-apply-loan-module~calculator-calculator-module~close~2891ff17"), __webpack_require__.e("default~apply-loan-apply-loan-module~calculator-calculator-module~close-account-close-account-module~f68ef752"), __webpack_require__.e("default~apply-loan-apply-loan-module~close-account-close-account-module~credit-entry-credit-entry-mo~986d90bb"), __webpack_require__.e("default~close-account-close-account-module~credit-entry-credit-entry-module~dashboard-dashboard-modu~d2050850"), __webpack_require__.e("loan-entry-loan-entry-module")]).then(__webpack_require__.bind(null, /*! ./loan-entry/loan-entry.module */ "./src/app/loan-entry/loan-entry.module.ts")).then(m => m.LoanEntryModule),
    },
    {
        path: 'loan-eligibility-table',
        loadChildren: () => Promise.all(/*! import() | loan-eligibility-table-loan-eligibility-table-module */[__webpack_require__.e("default~app-common-app-common-module~apply-loan-apply-loan-module~calculator-calculator-module~close~2891ff17"), __webpack_require__.e("default~apply-loan-apply-loan-module~calculator-calculator-module~close-account-close-account-module~f68ef752"), __webpack_require__.e("default~apply-loan-apply-loan-module~close-account-close-account-module~credit-entry-credit-entry-mo~986d90bb"), __webpack_require__.e("common"), __webpack_require__.e("loan-eligibility-table-loan-eligibility-table-module")]).then(__webpack_require__.bind(null, /*! ./loan-eligibility-table/loan-eligibility-table.module */ "./src/app/loan-eligibility-table/loan-eligibility-table.module.ts")).then(m => m.LoanEligibilityTableModule),
    },
    {
        path: 'common',
        loadChildren: () => __webpack_require__.e(/*! import() | app-common-app-common-module */ "default~app-common-app-common-module~apply-loan-apply-loan-module~calculator-calculator-module~close~2891ff17").then(__webpack_require__.bind(null, /*! ./app-common/app-common.module */ "./src/app/app-common/app-common.module.ts")).then(m => m.AppCommonModule),
    },
    {
        path: 'apply-loan',
        loadChildren: () => Promise.all(/*! import() | apply-loan-apply-loan-module */[__webpack_require__.e("default~app-common-app-common-module~apply-loan-apply-loan-module~calculator-calculator-module~close~2891ff17"), __webpack_require__.e("default~apply-loan-apply-loan-module~calculator-calculator-module~close-account-close-account-module~f68ef752"), __webpack_require__.e("default~apply-loan-apply-loan-module~close-account-close-account-module~credit-entry-credit-entry-mo~986d90bb"), __webpack_require__.e("common"), __webpack_require__.e("apply-loan-apply-loan-module")]).then(__webpack_require__.bind(null, /*! ./apply-loan/apply-loan.module */ "./src/app/apply-loan/apply-loan.module.ts")).then(m => m.ApplyLoanModule),
    },
    {
        path: 'close-account',
        loadChildren: () => Promise.all(/*! import() | close-account-close-account-module */[__webpack_require__.e("default~app-common-app-common-module~apply-loan-apply-loan-module~calculator-calculator-module~close~2891ff17"), __webpack_require__.e("default~apply-loan-apply-loan-module~calculator-calculator-module~close-account-close-account-module~f68ef752"), __webpack_require__.e("default~apply-loan-apply-loan-module~close-account-close-account-module~credit-entry-credit-entry-mo~986d90bb"), __webpack_require__.e("default~close-account-close-account-module~credit-entry-credit-entry-module~dashboard-dashboard-modu~d2050850"), __webpack_require__.e("default~close-account-close-account-module~excel-table-excel-table-module~generate-emi-generate-emi-~29c9285b"), __webpack_require__.e("default~close-account-close-account-module~generate-statement-generate-statement-module~loan-foreclo~04219756"), __webpack_require__.e("default~close-account-close-account-module~generate-statement-generate-statement-module~upload-all-u~9cc96008"), __webpack_require__.e("close-account-close-account-module")]).then(__webpack_require__.bind(null, /*! ./close-account/close-account.module */ "./src/app/close-account/close-account.module.ts")).then(m => m.CloseAccountModule),
    },
    {
        path: 'credit-entry',
        loadChildren: () => Promise.all(/*! import() | credit-entry-credit-entry-module */[__webpack_require__.e("default~app-common-app-common-module~apply-loan-apply-loan-module~calculator-calculator-module~close~2891ff17"), __webpack_require__.e("default~apply-loan-apply-loan-module~calculator-calculator-module~close-account-close-account-module~f68ef752"), __webpack_require__.e("default~apply-loan-apply-loan-module~close-account-close-account-module~credit-entry-credit-entry-mo~986d90bb"), __webpack_require__.e("default~close-account-close-account-module~credit-entry-credit-entry-module~dashboard-dashboard-modu~d2050850"), __webpack_require__.e("credit-entry-credit-entry-module")]).then(__webpack_require__.bind(null, /*! ./credit-entry/credit-entry.module */ "./src/app/credit-entry/credit-entry.module.ts")).then(m => m.CreditEntryModule),
    },
    {
        path: 'debit-entry',
        loadChildren: () => Promise.all(/*! import() | debit-entry-debit-entry-module */[__webpack_require__.e("default~app-common-app-common-module~apply-loan-apply-loan-module~calculator-calculator-module~close~2891ff17"), __webpack_require__.e("default~apply-loan-apply-loan-module~calculator-calculator-module~close-account-close-account-module~f68ef752"), __webpack_require__.e("default~apply-loan-apply-loan-module~close-account-close-account-module~credit-entry-credit-entry-mo~986d90bb"), __webpack_require__.e("default~close-account-close-account-module~credit-entry-credit-entry-module~dashboard-dashboard-modu~d2050850"), __webpack_require__.e("debit-entry-debit-entry-module")]).then(__webpack_require__.bind(null, /*! ./debit-entry/debit-entry.module */ "./src/app/debit-entry/debit-entry.module.ts")).then(m => m.DebitEntryModule),
    },
    {
        path: 'excel-table',
        loadChildren: () => Promise.all(/*! import() | excel-table-excel-table-module */[__webpack_require__.e("default~app-common-app-common-module~apply-loan-apply-loan-module~calculator-calculator-module~close~2891ff17"), __webpack_require__.e("default~apply-loan-apply-loan-module~calculator-calculator-module~close-account-close-account-module~f68ef752"), __webpack_require__.e("default~apply-loan-apply-loan-module~close-account-close-account-module~credit-entry-credit-entry-mo~986d90bb"), __webpack_require__.e("default~close-account-close-account-module~credit-entry-credit-entry-module~dashboard-dashboard-modu~d2050850"), __webpack_require__.e("default~close-account-close-account-module~excel-table-excel-table-module~generate-emi-generate-emi-~29c9285b"), __webpack_require__.e("default~excel-table-excel-table-module~generate-emi-generate-emi-module~generate-statement-generate-~16181aaf"), __webpack_require__.e("default~excel-table-excel-table-module~generate-emi-generate-emi-module~loan-foreclosure-loan-forecl~b5d52a7d"), __webpack_require__.e("default~excel-table-excel-table-module~generate-emi-generate-emi-module"), __webpack_require__.e("excel-table-excel-table-module")]).then(__webpack_require__.bind(null, /*! ./excel-table/excel-table.module */ "./src/app/excel-table/excel-table.module.ts")).then(m => m.ExcelTableModule),
    },
    { path: 'login', loadChildren: () => Promise.all(/*! import() | login-login-module */[__webpack_require__.e("default~app-common-app-common-module~apply-loan-apply-loan-module~calculator-calculator-module~close~2891ff17"), __webpack_require__.e("default~apply-loan-apply-loan-module~calculator-calculator-module~close-account-close-account-module~f68ef752"), __webpack_require__.e("default~apply-loan-apply-loan-module~close-account-close-account-module~credit-entry-credit-entry-mo~986d90bb"), __webpack_require__.e("login-login-module")]).then(__webpack_require__.bind(null, /*! ./login/login.module */ "./src/app/login/login.module.ts")).then(m => m.LoginModule) },
    {
        path: 'expense',
        loadChildren: () => Promise.all(/*! import() | expense-expense-module */[__webpack_require__.e("default~app-common-app-common-module~apply-loan-apply-loan-module~calculator-calculator-module~close~2891ff17"), __webpack_require__.e("default~apply-loan-apply-loan-module~calculator-calculator-module~close-account-close-account-module~f68ef752"), __webpack_require__.e("default~apply-loan-apply-loan-module~close-account-close-account-module~credit-entry-credit-entry-mo~986d90bb"), __webpack_require__.e("default~close-account-close-account-module~credit-entry-credit-entry-module~dashboard-dashboard-modu~d2050850"), __webpack_require__.e("expense-expense-module")]).then(__webpack_require__.bind(null, /*! ./expense/expense.module */ "./src/app/expense/expense.module.ts")).then(m => m.ExpenseModule),
    },
    {
        path: 'generate-emi',
        loadChildren: () => Promise.all(/*! import() | generate-emi-generate-emi-module */[__webpack_require__.e("default~app-common-app-common-module~apply-loan-apply-loan-module~calculator-calculator-module~close~2891ff17"), __webpack_require__.e("default~apply-loan-apply-loan-module~calculator-calculator-module~close-account-close-account-module~f68ef752"), __webpack_require__.e("default~apply-loan-apply-loan-module~close-account-close-account-module~credit-entry-credit-entry-mo~986d90bb"), __webpack_require__.e("default~close-account-close-account-module~credit-entry-credit-entry-module~dashboard-dashboard-modu~d2050850"), __webpack_require__.e("default~close-account-close-account-module~excel-table-excel-table-module~generate-emi-generate-emi-~29c9285b"), __webpack_require__.e("default~excel-table-excel-table-module~generate-emi-generate-emi-module~generate-statement-generate-~16181aaf"), __webpack_require__.e("default~excel-table-excel-table-module~generate-emi-generate-emi-module~loan-foreclosure-loan-forecl~b5d52a7d"), __webpack_require__.e("default~excel-table-excel-table-module~generate-emi-generate-emi-module"), __webpack_require__.e("generate-emi-generate-emi-module")]).then(__webpack_require__.bind(null, /*! ./generate-emi/generate-emi.module */ "./src/app/generate-emi/generate-emi.module.ts")).then(m => m.GenerateEmiModule),
    },
    {
        path: 'generate-statement',
        loadChildren: () => Promise.all(/*! import() | generate-statement-generate-statement-module */[__webpack_require__.e("default~app-common-app-common-module~apply-loan-apply-loan-module~calculator-calculator-module~close~2891ff17"), __webpack_require__.e("default~apply-loan-apply-loan-module~calculator-calculator-module~close-account-close-account-module~f68ef752"), __webpack_require__.e("default~apply-loan-apply-loan-module~close-account-close-account-module~credit-entry-credit-entry-mo~986d90bb"), __webpack_require__.e("default~close-account-close-account-module~credit-entry-credit-entry-module~dashboard-dashboard-modu~d2050850"), __webpack_require__.e("default~close-account-close-account-module~excel-table-excel-table-module~generate-emi-generate-emi-~29c9285b"), __webpack_require__.e("default~excel-table-excel-table-module~generate-emi-generate-emi-module~generate-statement-generate-~16181aaf"), __webpack_require__.e("default~close-account-close-account-module~generate-statement-generate-statement-module~loan-foreclo~04219756"), __webpack_require__.e("default~close-account-close-account-module~generate-statement-generate-statement-module~upload-all-u~9cc96008"), __webpack_require__.e("generate-statement-generate-statement-module")]).then(__webpack_require__.bind(null, /*! ./generate-statement/generate-statement.module */ "./src/app/generate-statement/generate-statement.module.ts")).then(m => m.GenerateStatementModule),
    },
    {
        path: 'loan-foreclosure',
        loadChildren: () => Promise.all(/*! import() | loan-foreclosure-loan-foreclosure-module */[__webpack_require__.e("default~app-common-app-common-module~apply-loan-apply-loan-module~calculator-calculator-module~close~2891ff17"), __webpack_require__.e("default~apply-loan-apply-loan-module~calculator-calculator-module~close-account-close-account-module~f68ef752"), __webpack_require__.e("default~apply-loan-apply-loan-module~close-account-close-account-module~credit-entry-credit-entry-mo~986d90bb"), __webpack_require__.e("default~close-account-close-account-module~credit-entry-credit-entry-module~dashboard-dashboard-modu~d2050850"), __webpack_require__.e("default~close-account-close-account-module~excel-table-excel-table-module~generate-emi-generate-emi-~29c9285b"), __webpack_require__.e("default~excel-table-excel-table-module~generate-emi-generate-emi-module~generate-statement-generate-~16181aaf"), __webpack_require__.e("default~close-account-close-account-module~generate-statement-generate-statement-module~loan-foreclo~04219756"), __webpack_require__.e("default~excel-table-excel-table-module~generate-emi-generate-emi-module~loan-foreclosure-loan-forecl~b5d52a7d"), __webpack_require__.e("loan-foreclosure-loan-foreclosure-module")]).then(__webpack_require__.bind(null, /*! ./loan-foreclosure/loan-foreclosure.module */ "./src/app/loan-foreclosure/loan-foreclosure.module.ts")).then(m => m.LoanForeclosureModule),
    },
    {
        path: 'upload-all',
        loadChildren: () => Promise.all(/*! import() | upload-all-upload-all-module */[__webpack_require__.e("default~app-common-app-common-module~apply-loan-apply-loan-module~calculator-calculator-module~close~2891ff17"), __webpack_require__.e("default~apply-loan-apply-loan-module~calculator-calculator-module~close-account-close-account-module~f68ef752"), __webpack_require__.e("default~apply-loan-apply-loan-module~close-account-close-account-module~credit-entry-credit-entry-mo~986d90bb"), __webpack_require__.e("default~close-account-close-account-module~credit-entry-credit-entry-module~dashboard-dashboard-modu~d2050850"), __webpack_require__.e("default~close-account-close-account-module~excel-table-excel-table-module~generate-emi-generate-emi-~29c9285b"), __webpack_require__.e("default~excel-table-excel-table-module~generate-emi-generate-emi-module~generate-statement-generate-~16181aaf"), __webpack_require__.e("default~close-account-close-account-module~generate-statement-generate-statement-module~loan-foreclo~04219756"), __webpack_require__.e("default~close-account-close-account-module~generate-statement-generate-statement-module~upload-all-u~9cc96008"), __webpack_require__.e("common"), __webpack_require__.e("upload-all-upload-all-module")]).then(__webpack_require__.bind(null, /*! ./upload-all/upload-all.module */ "./src/app/upload-all/upload-all.module.ts")).then(m => m.UploadAllModule),
    },
    {
        path: '**',
        pathMatch: 'full',
        loadChildren: () => Promise.all(/*! import() | modules-error-error-routing-module */[__webpack_require__.e("default~app-common-app-common-module~apply-loan-apply-loan-module~calculator-calculator-module~close~2891ff17"), __webpack_require__.e("default~apply-loan-apply-loan-module~calculator-calculator-module~close-account-close-account-module~f68ef752"), __webpack_require__.e("modules-error-error-routing-module")]).then(__webpack_require__.bind(null, /*! modules/error/error-routing.module */ "./src/modules/error/error-routing.module.ts")).then(m => m.ErrorRoutingModule),
    },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");





let AppComponent = class AppComponent {
    constructor(router, titleService) {
        this.router = router;
        this.titleService = titleService;
        this.title = 'ABC Banking Company';
        this.router.events
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__["ChildActivationEnd"]))
            .subscribe(event => {
            let snapshot = event.snapshot;
            while (snapshot.firstChild !== null) {
                snapshot = snapshot.firstChild;
            }
            this.titleService.setTitle(snapshot.data.title || 'ABC Banking Company');
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["Title"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: translateHttpLoaderFactory, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "translateHttpLoaderFactory", function() { return translateHttpLoaderFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/fesm2015/ngx-translate-http-loader.js");
/* harmony import */ var ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng2-search-filter */ "./node_modules/ng2-search-filter/ng2-search-filter.js");
/* harmony import */ var ngx_pagination__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pagination */ "./node_modules/ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _app_login_services__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @app/login/services */ "./src/app/login/services/index.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");













function translateHttpLoaderFactory(httpBackend) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_5__["TranslateHttpLoader"](new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"](httpBackend));
}
let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_11__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClientModule"],
            ngx_pagination__WEBPACK_IMPORTED_MODULE_7__["NgxPaginationModule"],
            ng2_search_filter__WEBPACK_IMPORTED_MODULE_6__["Ng2SearchPipeModule"],
            ngx_webstorage__WEBPACK_IMPORTED_MODULE_10__["NgxWebstorageModule"].forRoot(),
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateModule"].forRoot({
                loader: {
                    provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_4__["TranslateLoader"],
                    deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpBackend"]],
                    useFactory: translateHttpLoaderFactory,
                },
            }),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_8__["BrowserAnimationsModule"],
        ],
        providers: [..._app_login_services__WEBPACK_IMPORTED_MODULE_9__["services"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]],
        exports: [],
    })
], AppModule);



/***/ }),

/***/ "./src/app/login/services/auth.service.ts":
/*!************************************************!*\
  !*** ./src/app/login/services/auth.service.ts ***!
  \************************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let AuthService = class AuthService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getLoginAuth$(data) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json');
        console.log(data);
        const url = 'http://drsunitanayak.com:8080/login';
        return this.httpService.post(url, data, { headers });
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
AuthService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], AuthService);



/***/ }),

/***/ "./src/app/login/services/index.ts":
/*!*****************************************!*\
  !*** ./src/app/login/services/index.ts ***!
  \*****************************************/
/*! exports provided: services, AuthService, UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/login/services/auth.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./user.service */ "./src/app/login/services/user.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]; });




const services = [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"], _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]];




/***/ }),

/***/ "./src/app/login/services/user.service.ts":
/*!************************************************!*\
  !*** ./src/app/login/services/user.service.ts ***!
  \************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



const userSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
let UserService = class UserService {
    constructor() { }
    set user(user) {
        userSubject.next(user);
    }
    get user$() {
        return userSubject.asObservable();
    }
};
UserService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], UserService);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
    production: false,
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])()
    .bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Lenovo\Downloads\Society_Banking\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map