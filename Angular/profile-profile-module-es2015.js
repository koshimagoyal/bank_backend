(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["profile-profile-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile/profile.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile/profile.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<sb-layout-dashboard>\r\n    <sb-dashboard-head title=\"{{'Accountant.Pages.Update'| translate}}\"></sb-dashboard-head>\r\n    <hr class=\"rounded\">\r\n    <br>\r\n    <div class=\"row\">\r\n        <div class=\"col-xl-2 col-md-1\"></div>\r\n        <div class=\"col-xl-8 col-md-10\">\r\n            <sb-card>\r\n                <div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{'Accountant.Pages.Update'| translate}}</div>\r\n                <div class=\"card-body\">\r\n                    <form [formGroup]=\"employeeForm\" (ngSubmit)=\"send()\">\r\n                        <table class=\"table table-striped table-responsive\">\r\n                            <tbody>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.Image'| translate}}</td>\r\n                                <td>\r\n                                    <img [src]=\"url\" height=\"200\"> <br/>\r\n                                    <input type='file' (change)=\"onSelectFile($event)\">\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.EmployeeNo'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"number\" [(ngModel)]=\"employeeId\" formControlName=\"employeeId\" required />\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('employeeId').hasError('required')\">Required!</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.EmployeeName'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"text\" [(ngModel)]=\"employeeName\" formControlName=\"employeeName\" required />\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('employeeName').hasError('required')\">Required!</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.Father'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"text\" [(ngModel)]=\"fatherName\" formControlName=\"fatherName\" />\r\n                                    </label>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.PermAddress'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"text\" [(ngModel)]=\"permAddress\" formControlName=\"permAddress\" />\r\n                                    </label>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.SameAddress'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"checkbox\" (click)=\"sameAddress($event)\" [(ngModel)]=\"check\" />\r\n                                    </label>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.CurrAddress'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"text\" [(ngModel)]=\"currAddress\" value=\"{{currAddress}}\" formControlName=\"currAddress\" />\r\n                                    </label>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.Email'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"email\" [(ngModel)]=\"email\" formControlName=\"email\" />\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('email').hasError('email')\">Provide valid email</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.MobNo'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"number\" [(ngModel)]=\"mobileNo\" formControlName=\"mobileNo\" maxlength=\"10\" />\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('mobileNo').hasError('min')\">Number should be of 10 digits</div>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('mobileNo').hasError('max')\">Number should be of 10 digits</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.AltMobNo'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"number\" [(ngModel)]=\"altMobileNo\" formControlName=\"altMobileNo\" maxlength=\"10\" />\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('altMobileNo').hasError('min')\">Number should be of 10 digits</div>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('altMobileNo').hasError('max')\">Number should be of 10 digits</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.Landline'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"number\" [(ngModel)]=\"landlineNo\" formControlName=\"landlineNo\" maxlength=\"10\" />\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('landlineNo').hasError('pattern')\">Invalid Number!</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.PAN'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"number\" [(ngModel)]=\"pan\" formControlName=\"pan\" />\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('pan').hasError('pattern')\">Invalid Number!</div>\r\n                                </td>\r\n                            </tr>\r\n                            <tr>\r\n                                <td>{{'Accountant.Tables.Aadhar'| translate}}</td>\r\n                                <td>\r\n                                    <label>\r\n                                        <input type=\"number\" [(ngModel)]=\"aadharNo\" formControlName=\"aadharNo\" />\r\n                                    </label>\r\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('aadharNo').hasError('pattern')\">Invalid Number!</div>\r\n                                </td>\r\n                            </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <button type=\"submit\" [disabled]=\"!employeeForm.valid\">{{'Accountant.Tables.Submit'| translate}}</button>\r\n                    </form>\r\n                </div>\r\n            </sb-card>\r\n        </div>\r\n        <div class=\"col-xl-2 col-md-1\"></div>\r\n    </div>\r\n</sb-layout-dashboard>\r\n\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./src/app/profile/profile-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/profile/profile-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProfileRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileRoutingModule", function() { return ProfileRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_profile_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/profile/profile/profile.component */ "./src/app/profile/profile/profile.component.ts");




const routes = [{ path: '', component: _app_profile_profile_profile_component__WEBPACK_IMPORTED_MODULE_3__["ProfileComponent"] }];
let ProfileRoutingModule = class ProfileRoutingModule {
};
ProfileRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ProfileRoutingModule);



/***/ }),

/***/ "./src/app/profile/profile.module.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/profile.module.ts ***!
  \*******************************************/
/*! exports provided: ProfileModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileModule", function() { return ProfileModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/app-common/app-common.module */ "./src/app/app-common/app-common.module.ts");
/* harmony import */ var _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @app/navigation/navigation.module */ "./src/app/navigation/navigation.module.ts");
/* harmony import */ var _app_upload_all_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/upload-all/services */ "./src/app/upload-all/services/index.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _profile_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./profile-routing.module */ "./src/app/profile/profile-routing.module.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile/profile.component.ts");
/* harmony import */ var _app_layout_dashboard_layout_dashboard_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @app/layout-dashboard/layout-dashboard.module */ "./src/app/layout-dashboard/layout-dashboard.module.ts");











let ProfileModule = class ProfileModule {
};
ProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _profile_routing_module__WEBPACK_IMPORTED_MODULE_8__["ProfileRoutingModule"],
            _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__["NavigationModule"],
            _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _app_layout_dashboard_layout_dashboard_module__WEBPACK_IMPORTED_MODULE_10__["LayoutDashboardModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
        ],
        providers: [..._app_upload_all_services__WEBPACK_IMPORTED_MODULE_6__["services"]],
    })
], ProfileModule);



/***/ }),

/***/ "./src/app/profile/profile/profile.component.scss":
/*!********************************************************!*\
  !*** ./src/app/profile/profile/profile.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("/*img {\n    height: 100%;\n    width: 100%;\n    border-radius: 50%;\n}\n.hoverable{\n    position: relative;\n    display: block;\n    cursor: pointer;\n    height: 50px;\n    width: 50px;\n    border: 2px solid #000000;\n    border-radius: 50%;\n    margin-top: 15px;\n    margin-left:5px;\n}\n.hoverable .hover-text{\n    position: absolute;\n    display: none;\n    font-size: 10px;\n    top: 50%;\n    left:  50%;\n    transform: translate(-50%,-50%);\n    z-index: 2;\n}\n.hoverable .background{\n    position: absolute;\n    display: none;\n    top: 0;\n    left:  0;\n    bottom: 0;\n    right: 0;\n    background-color:rgba(255, 255, 255, 0.5);\n    pointer-events: none;\n    border-radius: 50%;\n    z-index: 1;\n}\n.hoverable:hover .hover-text{\n    display: block;\n}\n.hoverable:hover .background{\n    display: block;\n}\n\n#fileInput{\n    display: none;\n}*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvZmlsZS9wcm9maWxlL0M6XFxVc2Vyc1xcUFJBS0hBUlxcRG9jdW1lbnRzXFxBbmd1bGFyIFByb2plY3RcXEtvc2hpbWFcXFNvY2lldHlfQmFua2luZy9zcmNcXGFwcFxccHJvZmlsZVxccHJvZmlsZVxccHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQUFBIiwiZmlsZSI6InNyYy9hcHAvcHJvZmlsZS9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKmltZyB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxufVxyXG4uaG92ZXJhYmxle1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMwMDAwMDA7XHJcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgbWFyZ2luLWxlZnQ6NXB4O1xyXG59XHJcbi5ob3ZlcmFibGUgLmhvdmVyLXRleHR7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiAgNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgIHotaW5kZXg6IDI7XHJcbn1cclxuLmhvdmVyYWJsZSAuYmFja2dyb3VuZHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAgMDtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XHJcbiAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIHotaW5kZXg6IDE7XHJcbn1cclxuLmhvdmVyYWJsZTpob3ZlciAuaG92ZXItdGV4dHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5ob3ZlcmFibGU6aG92ZXIgLmJhY2tncm91bmR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuI2ZpbGVJbnB1dHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbn0qL1xyXG4iXX0= */");

/***/ }),

/***/ "./src/app/profile/profile/profile.component.ts":
/*!******************************************************!*\
  !*** ./src/app/profile/profile/profile.component.ts ***!
  \******************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_profile_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @app/profile/services */ "./src/app/profile/services/index.ts");
/* harmony import */ var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-webstorage */ "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! sweetalert2/dist/sweetalert2.js */ "./node_modules/sweetalert2/dist/sweetalert2.js");
/* harmony import */ var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




// @ts-ignore


let ProfileComponent = class ProfileComponent {
    constructor(service, session, fb) {
        this.service = service;
        this.session = session;
        this.fb = fb;
        this.url = '';
        this.formData = new FormData();
        this.employeeForm = this.fb.group({
            employeeId: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])),
            employeeName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required])),
            fatherName: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            permAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            check: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            currAddress: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](''),
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].email])),
            mobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].max(9999999999)])),
            altMobileNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].min(1000000000), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].max(9999999999)])),
            landlineNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[0-9]d{2,4}-d{6,8}$')])),
            pan: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('[A-Z]{5}[0-9]{4}[A-Z]{1}')])),
            aadharNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$')])),
        });
    }
    ngOnInit() {
        this.formData = new FormData();
        const user = this.session.retrieve('user');
        this.employeeId = user.id;
        this.service.getData(this.employeeId).subscribe(result => {
            if (result.nameData.length === 0) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Oops!',
                    text: 'This user does not exists!',
                    icon: 'error',
                });
            }
            else {
                console.log(result);
                this.employeeName = result.nameData[0].name;
                this.fatherName = result.nameData[0].fatherName;
                this.permAddress = result.nameData[0].permanentAddress;
                this.currAddress = result.nameData[0].currentAddress;
                this.email = result.nameData[0].email;
                this.mobileNo = result.nameData[0].mobileNo1;
                this.altMobileNo = result.nameData[0].mobileNo2;
                this.landlineNo = result.nameData[0].landline;
                this.pan = result.nameData[0].pan;
                this.aadharNo = result.nameData[0].adharNo;
                this.enrollDate = result.nameData[0].enrollmentDate;
            }
        }, error1 => {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Oops!',
                text: 'Try again!',
                icon: 'error',
            });
        });
    }
    sameAddress(event) {
        console.log(event.target.checked);
        if (event.target.checked) {
            this.currAddress = this.permAddress;
        }
        else {
            this.currAddress = null;
        }
    }
    send() {
        const data = {
            userId: this.employeeId,
            name: this.employeeName,
            father: this.fatherName,
            permanentAddress: this.permAddress,
            currentAddress: this.currAddress,
            email: this.email,
            mobile1: this.mobileNo,
            mobile2: this.altMobileNo,
            landline: this.landlineNo,
            pan: this.pan,
            adharNo: this.aadharNo,
            enroll: this.enrollDate,
        };
        this.formData.append('data', JSON.stringify(data));
        this.service.sendData(this.formData).subscribe(result => {
            if (result.nameData.length === 0) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    title: 'Oops!',
                    text: 'This user does not exists!',
                    icon: 'error',
                });
            }
            else {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                    text: 'Sent!',
                    icon: 'success',
                }).then((isConfirm) => {
                    if (isConfirm) {
                        this.formData = new FormData();
                        window.location.reload();
                    }
                });
            }
        }, error1 => {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Oops!',
                text: 'Try again!',
                icon: 'error',
            });
        });
    }
    onSelectFile(event) {
        if (event.target.files && event.target.files[0]) {
            const reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url
            reader.onload = e => {
                // called once readAsDataURL is completed
                // @ts-ignore
                this.url = e.target.result;
            };
            // @ts-ignore
            this.formData.append('file', event.target.files[0], event.target.files[0].name);
        }
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _app_profile_services__WEBPACK_IMPORTED_MODULE_2__["ProfileService"] },
    { type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
];
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'sb-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile/profile.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile/profile.component.scss")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_profile_services__WEBPACK_IMPORTED_MODULE_2__["ProfileService"],
        ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])
], ProfileComponent);



/***/ }),

/***/ "./src/app/profile/services/index.ts":
/*!*******************************************!*\
  !*** ./src/app/profile/services/index.ts ***!
  \*******************************************/
/*! exports provided: services, ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "services", function() { return services; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./profile.service */ "./src/app/profile/services/profile.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return _profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]; });



const services = [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]];



/***/ }),

/***/ "./src/app/profile/services/profile.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/profile/services/profile.service.ts ***!
  \*****************************************************/
/*! exports provided: ProfileService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileService", function() { return ProfileService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");



let ProfileService = class ProfileService {
    constructor(httpService) {
        this.httpService = httpService;
    }
    getData(text) {
        console.log(text);
        const url = 'http://206.189.129.219:8080/getUserData';
        const data = {
            userId: text,
        };
        return this.httpService.post(url, data);
    }
    sendData(data) {
        console.log(data);
        const url = 'http://206.189.129.219:8080/updateUserData';
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
        headers.append('Accept', 'application/json');
        headers.append('content-type', 'application/json');
        return this.httpService.post(url, data, { headers });
    }
};
ProfileService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }
];
ProfileService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
        providedIn: 'root',
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
], ProfileService);



/***/ })

}]);
//# sourceMappingURL=profile-profile-module-es2015.js.map