function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["emp-profile-emp-profile-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/emp-profile/emp-profile/emp-profile.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/emp-profile/emp-profile/emp-profile.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEmpProfileEmpProfileEmpProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-layout-emp-dashboard>\n    <sb-dashboard-head title=\"{{'Accountant.Pages.Update'| translate}}\"></sb-dashboard-head>\n    <hr class=\"rounded\">\n    <br>\n    <div class=\"row\">\n        <div class=\"col-xl-2 col-md-1\"></div>\n        <div class=\"col-xl-8 col-md-10\">\n            <sb-card>\n                <div class=\"card-header\"><fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>{{'Accountant.Pages.Update'| translate}}</div>\n                <div class=\"card-body\">\n                    <form [formGroup]=\"employeeForm\" (ngSubmit)=\"send()\">\n                        <table class=\"table table-striped table-responsive\">\n                            <tbody>\n                            <tr>\n                                <td>{{'Accountant.Tables.Image'| translate}}</td>\n                                <td>\n                                    <img [src]=\"url\" height=\"200\"> <br/>\n                                    <input type='file' (change)=\"onSelectFile($event)\">\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.EmployeeNo'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"number\" [(ngModel)]=\"employeeId\" formControlName=\"employeeId\" required />\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('employeeId').hasError('required')\">Required!</div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.EmployeeName'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"text\" [(ngModel)]=\"employeeName\" formControlName=\"employeeName\" required />\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('employeeName').hasError('required')\">Required!</div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.Father'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"text\" [(ngModel)]=\"fatherName\" formControlName=\"fatherName\" />\n                                    </label>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.PermAddress'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"text\" [(ngModel)]=\"permAddress\" formControlName=\"permAddress\" />\n                                    </label>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.SameAddress'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"checkbox\" (click)=\"sameAddress($event)\" [(ngModel)]=\"check\" />\n                                    </label>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.CurrAddress'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"text\" [(ngModel)]=\"currAddress\" value=\"{{currAddress}}\" formControlName=\"currAddress\" />\n                                    </label>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.Email'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"email\" [(ngModel)]=\"email\" formControlName=\"email\" />\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('email').hasError('email')\">Provide valid email</div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.MobNo'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"number\" [(ngModel)]=\"mobileNo\" formControlName=\"mobileNo\" maxlength=\"10\" />\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('mobileNo').hasError('min')\">Number should be of 10 digits</div>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('mobileNo').hasError('max')\">Number should be of 10 digits</div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.AltMobNo'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"number\" [(ngModel)]=\"altMobileNo\" formControlName=\"altMobileNo\" maxlength=\"10\" />\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('altMobileNo').hasError('min')\">Number should be of 10 digits</div>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('altMobileNo').hasError('max')\">Number should be of 10 digits</div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.Landline'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"number\" [(ngModel)]=\"landlineNo\" formControlName=\"landlineNo\" maxlength=\"10\" />\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('landlineNo').hasError('pattern')\">Invalid Number!</div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.PAN'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"number\" [(ngModel)]=\"pan\" formControlName=\"pan\" />\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('pan').hasError('pattern')\">Invalid Number!</div>\n                                </td>\n                            </tr>\n                            <tr>\n                                <td>{{'Accountant.Tables.Aadhar'| translate}}</td>\n                                <td>\n                                    <label>\n                                        <input type=\"number\" [(ngModel)]=\"aadharNo\" formControlName=\"aadharNo\" />\n                                    </label>\n                                    <div class=\"alert alert-danger error-box\" *ngIf=\"employeeForm.get('aadharNo').hasError('pattern')\">Invalid Number!</div>\n                                </td>\n                            </tr>\n                            </tbody>\n                        </table>\n                        <button type=\"submit\" [disabled]=\"!employeeForm.valid\">{{'Accountant.Tables.Submit'| translate}}</button>\n                    </form>\n                </div>\n            </sb-card>\n        </div>\n        <div class=\"col-xl-2 col-md-1\"></div>\n    </div>\n</sb-layout-emp-dashboard>\n\n\n\n\n\n";
    /***/
  },

  /***/
  "./src/app/emp-profile/emp-profile-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/emp-profile/emp-profile-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: EmpProfileRoutingModule */

  /***/
  function srcAppEmpProfileEmpProfileRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmpProfileRoutingModule", function () {
      return EmpProfileRoutingModule;
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


    var _app_emp_profile_emp_profile_emp_profile_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/emp-profile/emp-profile/emp-profile.component */
    "./src/app/emp-profile/emp-profile/emp-profile.component.ts");

    var routes = [{
      path: '',
      component: _app_emp_profile_emp_profile_emp_profile_component__WEBPACK_IMPORTED_MODULE_3__["EmpProfileComponent"]
    }];

    var EmpProfileRoutingModule = function EmpProfileRoutingModule() {
      _classCallCheck(this, EmpProfileRoutingModule);
    };

    EmpProfileRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EmpProfileRoutingModule);
    /***/
  },

  /***/
  "./src/app/emp-profile/emp-profile.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/emp-profile/emp-profile.module.ts ***!
    \***************************************************/

  /*! exports provided: EmpProfileModule */

  /***/
  function srcAppEmpProfileEmpProfileModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmpProfileModule", function () {
      return EmpProfileModule;
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


    var _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/app-common/app-common.module */
    "./src/app/app-common/app-common.module.ts");
    /* harmony import */


    var _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/navigation/navigation.module */
    "./src/app/navigation/navigation.module.ts");
    /* harmony import */


    var _app_upload_all_services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/upload-all/services */
    "./src/app/upload-all/services/index.ts");
    /* harmony import */


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _emp_profile_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./emp-profile-routing.module */
    "./src/app/emp-profile/emp-profile-routing.module.ts");
    /* harmony import */


    var _emp_profile_emp_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./emp-profile/emp-profile.component */
    "./src/app/emp-profile/emp-profile/emp-profile.component.ts");
    /* harmony import */


    var _app_layout_emp_dashboard_layout_emp_dashboard_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @app/layout-emp-dashboard/layout-emp-dashboard.module */
    "./src/app/layout-emp-dashboard/layout-emp-dashboard.module.ts");

    var EmpProfileModule = function EmpProfileModule() {
      _classCallCheck(this, EmpProfileModule);
    };

    EmpProfileModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_emp_profile_emp_profile_component__WEBPACK_IMPORTED_MODULE_9__["EmpProfileComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _emp_profile_routing_module__WEBPACK_IMPORTED_MODULE_8__["EmpProfileRoutingModule"], _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__["NavigationModule"], _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_layout_emp_dashboard_layout_emp_dashboard_module__WEBPACK_IMPORTED_MODULE_10__["LayoutEmpDashboardModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      providers: _toConsumableArray(_app_upload_all_services__WEBPACK_IMPORTED_MODULE_6__["services"])
    })], EmpProfileModule);
    /***/
  },

  /***/
  "./src/app/emp-profile/emp-profile/emp-profile.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/emp-profile/emp-profile/emp-profile.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEmpProfileEmpProfileEmpProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcC1wcm9maWxlL2VtcC1wcm9maWxlL2VtcC1wcm9maWxlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/emp-profile/emp-profile/emp-profile.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/emp-profile/emp-profile/emp-profile.component.ts ***!
    \******************************************************************/

  /*! exports provided: EmpProfileComponent */

  /***/
  function srcAppEmpProfileEmpProfileEmpProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmpProfileComponent", function () {
      return EmpProfileComponent;
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


    var _app_emp_profile_services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/emp-profile/services */
    "./src/app/emp-profile/services/index.ts");
    /* harmony import */


    var ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-webstorage */
    "./node_modules/ngx-webstorage/fesm2015/ngx-webstorage.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! sweetalert2/dist/sweetalert2.js */
    "./node_modules/sweetalert2/dist/sweetalert2.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js"); // @ts-ignore


    var EmpProfileComponent = /*#__PURE__*/function () {
      function EmpProfileComponent(service, session, fb) {
        _classCallCheck(this, EmpProfileComponent);

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
          aadharNo: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern('^[2-9]{1}[0-9]{3}\\s[0-9]{4}\\s[0-9]{4}$')]))
        });
      }

      _createClass(EmpProfileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.formData = new FormData();
          var user = this.session.retrieve('user');
          this.employeeId = user.id;
          this.service.getData(this.employeeId).subscribe(function (result) {
            if (result.nameData.length === 0) {
              sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Oops!',
                text: 'This user does not exists!',
                icon: 'error'
              });
            } else {
              console.log(result);
              _this.employeeName = result.nameData[0].name;
              _this.fatherName = result.nameData[0].fatherName;
              _this.permAddress = result.nameData[0].permanentAddress;
              _this.currAddress = result.nameData[0].currentAddress;
              _this.email = result.nameData[0].email;
              _this.mobileNo = result.nameData[0].mobileNo1;
              _this.altMobileNo = result.nameData[0].mobileNo2;
              _this.landlineNo = result.nameData[0].landline;
              _this.pan = result.nameData[0].pan;
              _this.aadharNo = result.nameData[0].adharNo;
              _this.enrollDate = result.nameData[0].enrollmentDate;
            }
          }, function (error1) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
              title: 'Oops!',
              text: 'Try again!',
              icon: 'error'
            });
          });
        }
      }, {
        key: "sameAddress",
        value: function sameAddress(event) {
          console.log(event.target.checked);

          if (event.target.checked) {
            this.currAddress = this.permAddress;
          } else {
            this.currAddress = null;
          }
        }
      }, {
        key: "send",
        value: function send() {
          var _this2 = this;

          var data = {
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
            enroll: this.enrollDate
          };
          this.formData.append('data', JSON.stringify(data));
          this.service.sendData(this.formData).subscribe(function (result) {
            if (result.nameData.length === 0) {
              sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                title: 'Oops!',
                text: 'This user does not exists!',
                icon: 'error'
              });
            } else {
              sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
                text: 'Sent!',
                icon: 'success'
              }).then(function (isConfirm) {
                if (isConfirm) {
                  _this2.formData = new FormData();
                  window.location.reload();
                }
              });
            }
          }, function (error1) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_4___default.a.fire({
              title: 'Oops!',
              text: 'Try again!',
              icon: 'error'
            });
          });
        }
      }, {
        key: "onSelectFile",
        value: function onSelectFile(event) {
          var _this3 = this;

          if (event.target.files && event.target.files[0]) {
            var reader = new FileReader();
            reader.readAsDataURL(event.target.files[0]); // read file as data url

            reader.onload = function (e) {
              // called once readAsDataURL is completed
              // @ts-ignore
              _this3.url = e.target.result;
            }; // @ts-ignore


            this.formData.append('file', event.target.files[0], event.target.files[0].name);
          }
        }
      }]);

      return EmpProfileComponent;
    }();

    EmpProfileComponent.ctorParameters = function () {
      return [{
        type: _app_emp_profile_services__WEBPACK_IMPORTED_MODULE_2__["ProfileService"]
      }, {
        type: ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]
      }];
    };

    EmpProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-emp-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./emp-profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/emp-profile/emp-profile/emp-profile.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./emp-profile.component.scss */
      "./src/app/emp-profile/emp-profile/emp-profile.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_emp_profile_services__WEBPACK_IMPORTED_MODULE_2__["ProfileService"], ngx_webstorage__WEBPACK_IMPORTED_MODULE_3__["SessionStorageService"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"]])], EmpProfileComponent);
    /***/
  },

  /***/
  "./src/app/emp-profile/services/index.ts":
  /*!***********************************************!*\
    !*** ./src/app/emp-profile/services/index.ts ***!
    \***********************************************/

  /*! exports provided: services, ProfileService */

  /***/
  function srcAppEmpProfileServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _profile_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./profile.service */
    "./src/app/emp-profile/services/profile.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
      return _profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"];
    });

    var services = [_profile_service__WEBPACK_IMPORTED_MODULE_1__["ProfileService"]];
    /***/
  },

  /***/
  "./src/app/emp-profile/services/profile.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/emp-profile/services/profile.service.ts ***!
    \*********************************************************/

  /*! exports provided: ProfileService */

  /***/
  function srcAppEmpProfileServicesProfileServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileService", function () {
      return ProfileService;
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

    var ProfileService = /*#__PURE__*/function () {
      function ProfileService(httpService) {
        _classCallCheck(this, ProfileService);

        this.httpService = httpService;
      }

      _createClass(ProfileService, [{
        key: "getData",
        value: function getData(text) {
          console.log(text);
          var url = 'http://drsunitanayak.com/getUserData';
          var data = {
            userId: text
          };
          return this.httpService.post(url, data);
        }
      }, {
        key: "sendData",
        value: function sendData(data) {
          console.log(data);
          var url = 'http://drsunitanayak.com/updateUserData';
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
          headers.append('Accept', 'application/json');
          headers.append('content-type', 'application/json');
          return this.httpService.post(url, data, {
            headers: headers
          });
        }
      }]);

      return ProfileService;
    }();

    ProfileService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    ProfileService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
      providedIn: 'root'
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], ProfileService);
    /***/
  }
}]);
//# sourceMappingURL=emp-profile-emp-profile-module-es5.js.map