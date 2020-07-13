(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["login-login-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-auth>\r\n    <div class=\"container\">\r\n        <div class=\"row justify-content-center\">\r\n            <div class=\"col-lg-5\">\r\n                <div class=\"card shadow-lg border-0 rounded-lg mt-5\">\r\n                    <div class=\"card-header\"><h3 class=\"text-center font-weight-light my-4\">Login</h3></div>\r\n                    <div class=\"card-body\">\r\n                        <form [formGroup]=\"form\" (ngSubmit)=\"login()\">\r\n                            <div class=\"form-group\">\r\n                                <label class=\"small mb-1\" for=\"inputUserId\">User Id</label>\r\n                                <input class=\"form-control py-4\" id=\"inputUserId\" type=\"number\" placeholder=\"Enter User Id\" formControlName=\"userId\"/>\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <label class=\"small mb-1\" for=\"inputPassword\">Password</label>\r\n                                <input class=\"form-control py-4\" id=\"inputPassword\" type=\"password\" placeholder=\"Enter password\" formControlName=\"password\" />\r\n                            </div>\r\n                            <div class=\"form-group\">\r\n                                <div class=\"custom-control custom-checkbox\">\r\n                                    <input class=\"custom-control-input\" id=\"rememberPasswordCheck\" type=\"checkbox\" />\r\n                                    <label class=\"custom-control-label\" for=\"rememberPasswordCheck\">Remember password</label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group d-flex align-items-center justify-content-between mt-4 mb-0\">\r\n                                <a class=\"small\" routerLink=\"/auth/forgot-password\">Forgot Password?</a>\r\n                                <button class=\"btn btn-primary\">Login</button></div>\r\n                        </form>\r\n                    </div>\r\n                    <div class=\"card-footer text-center\">\r\n                        <div class=\"small\"><a routerLink=\"/auth/register\">Need an account? Sign up!</a></div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</sb-layout-auth>\r\n");

/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");




const routes = [{ path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] }];
let LoginRoutingModule = class LoginRoutingModule {
};
LoginRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], LoginRoutingModule);



/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_login_model_login__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/login/model/login */ "./src/app/login/model/login.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services */ "./src/app/login/services/index.ts");






// @ts-ignore


let LoginComponent = class LoginComponent {
    constructor(router, authService, fb, session) {
        this.router = router;
        this.authService = authService;
        this.fb = fb;
        this.session = session;
        this.userLogin = new _app_login_model_login__WEBPACK_IMPORTED_MODULE_4__["Login"]();
        this.form = this.fb.group({
            userId: [],
            password: [''],
        });
    }
    login() {
        // @ts-ignore
        this.userLogin.userId = this.form.get('userId').value;
        // @ts-ignore
        this.userLogin.password = this.form.get('password').value;
        if (!this.userLogin.userId || !this.userLogin.password) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                title: 'Oops!',
                text: 'Try again!',
                icon: 'error',
            });
        }
        else {
            this.authService.getLoginAuth$(this.userLogin).subscribe((data) => {
                console.log(data);
                if (data.length === 0) {
                    sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                        title: 'Oops!',
                        text: 'Data does not exists!',
                        icon: 'error',
                    });
                }
                else {
                    const user = {
                        id: data[0].userId,
                        name: data[0].name,
                        email: data[0].email,
                        address: data[0].currentAddress,
                        role: data[0].roleId,
                    };
                    this.session.store('user', user);
                    if (data[0].role === 'employee') {
                        this.router.navigateByUrl('/employee-dashboard');
                    }
                    else if (data[0].role === 'admin') {
                        this.router.navigateByUrl('/dashboard');
                    }
                    else {
                        this.router.navigateByUrl('/error/error-401');
                    }
                }
            });
        }
    }
    ngOnInit() { }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: _services__WEBPACK_IMPORTED_MODULE_7__["AuthService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_5__["SessionStorageService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        _services__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        ngx_webstorage__WEBPACK_IMPORTED_MODULE_5__["SessionStorageService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/navigation/navigation.module */ "./src/app/navigation/navigation.module.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services */ "./src/app/login/services/index.ts");








let LoginModule = class LoginModule {
};
LoginModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_login_component__WEBPACK_IMPORTED_MODULE_6__["LoginComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginRoutingModule"], _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_4__["NavigationModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
        providers: [..._services__WEBPACK_IMPORTED_MODULE_7__["services"]],
    })
], LoginModule);



/***/ }),

/***/ "./src/app/login/model/login.ts":
/*!**************************************!*\
  !*** ./src/app/login/model/login.ts ***!
  \**************************************/
/*! exports provided: Login */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Login", function() { return Login; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");

class Login {
}


/***/ })

}]);
//# sourceMappingURL=login-login-module-es2015.js.map