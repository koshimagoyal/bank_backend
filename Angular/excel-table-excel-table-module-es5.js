function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["excel-table-excel-table-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/excel-table/excel-table.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/excel-table/excel-table.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppExcelTableExcelTableComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<sb-layout-dashboard>\n    <sb-dashboard-head title=\"{{'Accountant.Pages.Sheet' | translate}}\"></sb-dashboard-head>\n    <hr class=\"rounded\">\n    <br>\n    <div class=\"row\">\n        <div class=\"col\">\n            <sb-card>\n                <div class=\"card-header\">\n                    <div class=\"row\">\n                        <div class=\"col\" style=\"margin-top: 10px;\">\n                            <fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>&nbsp;{{\"Accountant.Tables.Sheet1\" | translate}}\n                        </div>\n                        <div class=\"col\">\n                            <label>\n                                <input type=\"text\" placeholder=\"Search..\" [(ngModel)]=\"searchTerm\"/>\n                            </label>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"card-body table-responsive\">\n                    <mat-form-field style=\"float: right;\">\n                        <mat-label>{{'Accountant.Tables.Month'| translate}}</mat-label>\n                        <label>\n                            <input matInput [readonly]=\"inputReadonly\" [matDatepicker]=\"dp\" [matDatepickerFilter]=\"disable\" [formControl]=\"date\">\n                        </label>\n                        <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n                        <mat-datepicker [touchUi]=\"true\" #dp\n                                        startView=\"multi-year\"\n                                        (yearSelected)=\"chosenYearHandler($event)\"\n                                        (monthSelected)=\"chosenMonthHandler($event, dp)\"\n                                        panelClass=\"example-month-picker\">\n                        </mat-datepicker>\n                    </mat-form-field>\n                    <br/>\n                    <input type=\"file\" (change)=\"onChange($event)\" multiple=\"false\"  placeholder=\"Upload file\" accept=\".xlsx\" name=\"file\">\n                    <br/>\n                    <table class=\"table table-striped\" *ngIf=\"show\">\n                        <tbody>\n                        <tr *ngFor=\"let row of data | filter: searchTerm | paginate: { id: 'p1', itemsPerPage:5, currentPage: p}\">\n                            <td *ngFor=\"let val of row\">{{val}}</td>\n                        </tr>\n                        </tbody>\n                    </table>\n                    <div class=\"pagination\" *ngIf=\"show\">\n                        <pagination-controls id=\"p1\" (pageChange)=\"p=$event\"></pagination-controls>\n                    </div>\n                </div>\n            </sb-card>\n        </div>\n        <div class=\"col\">\n            <sb-card>\n                <div class=\"card-header\">\n                    <div class=\"row\">\n                        <div class=\"col\" style=\"margin-top: 10px;\">\n                            <fa-icon class=\"mr-1\" [icon]='[\"fas\", \"table\"]'></fa-icon>&nbsp;{{\"Accountant.Tables.Sheet2\" | translate}}\n                        </div>\n                        <div class=\"col\">\n                            <label>\n                                <input type=\"text\" placeholder=\"Search..\" [(ngModel)]=\"term\"/>\n                            </label>\n                        </div>\n                    </div>\n                </div>\n                <br>\n                <div class=\"card-body table-responsive\">\n                    <mat-form-field style=\"float: right;\">\n                        <mat-label>{{'Accountant.Tables.Month'| translate}}</mat-label>\n                        <label>\n                            <input matInput [readonly]=\"inputReadonly\" [matDatepicker]=\"ep\" [formControl]=\"emiDate\" [matDatepickerFilter]=\"disableLoan\">\n                        </label>\n                        <mat-datepicker-toggle matSuffix [for]=\"ep\"></mat-datepicker-toggle>\n                        <mat-datepicker [touchUi]=\"true\" #ep\n                                        startView=\"multi-year\"\n                                        (yearSelected)=\"chosenAnotherYearHandler($event)\"\n                                        (monthSelected)=\"chosenAnotherMonthHandler($event, ep)\"\n                                        panelClass=\"example-month-picker\">\n                        </mat-datepicker>\n                    </mat-form-field>\n                    <br/>\n                    <input type=\"file\" (change)=\"onFileChange($event)\" multiple=\"false\"  placeholder=\"Upload file\" accept=\".xlsx\" />\n                    <br/>\n                    <table class=\"table table-striped\" *ngIf=\"emiTable\">\n                        <tbody>\n                        <tr *ngFor=\"let row of emiData | filter: term | paginate: { id: 'p2',\n                                                      itemsPerPage: 5,\n                                                      currentPage: page }\">\n                            <td *ngFor=\"let val of row\">{{val}}</td>\n                        </tr>\n                        </tbody>\n                    </table>\n                    <div class=\"pagination\" *ngIf=\"emiTable\">\n                        <pagination-controls id=\"p2\" (pageChange)=\"page=$event\"></pagination-controls>\n                    </div>\n                </div>\n            </sb-card>\n        </div>\n    </div>\n</sb-layout-dashboard>\n";
    /***/
  },

  /***/
  "./src/app/excel-table/excel-table-routing.module.ts":
  /*!***********************************************************!*\
    !*** ./src/app/excel-table/excel-table-routing.module.ts ***!
    \***********************************************************/

  /*! exports provided: ExcelTableRoutingModule */

  /***/
  function srcAppExcelTableExcelTableRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExcelTableRoutingModule", function () {
      return ExcelTableRoutingModule;
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


    var _excel_table_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./excel-table.component */
    "./src/app/excel-table/excel-table.component.ts");

    var routes = [{
      path: '',
      component: _excel_table_component__WEBPACK_IMPORTED_MODULE_3__["ExcelTableComponent"]
    }];

    var ExcelTableRoutingModule = function ExcelTableRoutingModule() {
      _classCallCheck(this, ExcelTableRoutingModule);
    };

    ExcelTableRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], ExcelTableRoutingModule);
    /***/
  },

  /***/
  "./src/app/excel-table/excel-table.component.scss":
  /*!********************************************************!*\
    !*** ./src/app/excel-table/excel-table.component.scss ***!
    \********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppExcelTableExcelTableComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".example-month-picker .mat-calendar-period-button {\n  pointer-events: none;\n}\n\n.example-month-picker .mat-calendar-arrow {\n  display: none;\n}\n\n/* Style the search box inside the navigation bar */\n\n.card-header input[type=text] {\n  border-radius: 5px;\n  float: right;\n  padding: 6px;\n  margin-right: 16px;\n  font-size: 17px;\n  border: 1px solid #000000;\n}\n\n/* When the screen is less than 600px wide, stack the links and the search field vertically instead of horizontally */\n\n@media screen and (max-width: 600px) {\n  .card-header a, .card-header input[type=text] {\n    border-radius: 5px;\n    float: none;\n    display: block;\n    text-align: left;\n    width: 100%;\n    margin: 0;\n    padding: 14px;\n  }\n\n  .card-header input[type=text] {\n    border: 1px solid #ccc;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZXhjZWwtdGFibGUvQzpcXFVzZXJzXFxMZW5vdm9cXERvd25sb2Fkc1xcU29jaWV0eV9CYW5raW5nL3NyY1xcYXBwXFxleGNlbC10YWJsZVxcZXhjZWwtdGFibGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2V4Y2VsLXRhYmxlL2V4Y2VsLXRhYmxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksb0JBQUE7QUNDSjs7QURFQTtFQUNJLGFBQUE7QUNDSjs7QURDQSxtREFBQTs7QUFDQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtBQ0VKOztBRENBLHFIQUFBOztBQUNBO0VBQ0k7SUFDSSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7SUFDQSxXQUFBO0lBQ0EsU0FBQTtJQUNBLGFBQUE7RUNFTjs7RURBRTtJQUNJLHNCQUFBO0VDR047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2V4Y2VsLXRhYmxlL2V4Y2VsLXRhYmxlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmV4YW1wbGUtbW9udGgtcGlja2VyIC5tYXQtY2FsZW5kYXItcGVyaW9kLWJ1dHRvbiB7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5leGFtcGxlLW1vbnRoLXBpY2tlciAubWF0LWNhbGVuZGFyLWFycm93IHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuLyogU3R5bGUgdGhlIHNlYXJjaCBib3ggaW5zaWRlIHRoZSBuYXZpZ2F0aW9uIGJhciAqL1xuLmNhcmQtaGVhZGVyIGlucHV0W3R5cGU9dGV4dF0ge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmbG9hdDogcmlnaHQ7XG4gICAgcGFkZGluZzogNnB4O1xuICAgIG1hcmdpbi1yaWdodDogMTZweDtcbiAgICBmb250LXNpemU6IDE3cHg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgIzAwMDAwMDtcbn1cblxuLyogV2hlbiB0aGUgc2NyZWVuIGlzIGxlc3MgdGhhbiA2MDBweCB3aWRlLCBzdGFjayB0aGUgbGlua3MgYW5kIHRoZSBzZWFyY2ggZmllbGQgdmVydGljYWxseSBpbnN0ZWFkIG9mIGhvcml6b250YWxseSAqL1xuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAuY2FyZC1oZWFkZXIgYSwgLmNhcmQtaGVhZGVyIGlucHV0W3R5cGU9dGV4dF0ge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICAgIGZsb2F0OiBub25lO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgcGFkZGluZzogMTRweDtcbiAgICB9XG4gICAgLmNhcmQtaGVhZGVyIGlucHV0W3R5cGU9dGV4dF0ge1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIH1cbn1cbiIsIi5leGFtcGxlLW1vbnRoLXBpY2tlciAubWF0LWNhbGVuZGFyLXBlcmlvZC1idXR0b24ge1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cblxuLmV4YW1wbGUtbW9udGgtcGlja2VyIC5tYXQtY2FsZW5kYXItYXJyb3cge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiBTdHlsZSB0aGUgc2VhcmNoIGJveCBpbnNpZGUgdGhlIG5hdmlnYXRpb24gYmFyICovXG4uY2FyZC1oZWFkZXIgaW5wdXRbdHlwZT10ZXh0XSB7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZmxvYXQ6IHJpZ2h0O1xuICBwYWRkaW5nOiA2cHg7XG4gIG1hcmdpbi1yaWdodDogMTZweDtcbiAgZm9udC1zaXplOiAxN3B4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjMDAwMDAwO1xufVxuXG4vKiBXaGVuIHRoZSBzY3JlZW4gaXMgbGVzcyB0aGFuIDYwMHB4IHdpZGUsIHN0YWNrIHRoZSBsaW5rcyBhbmQgdGhlIHNlYXJjaCBmaWVsZCB2ZXJ0aWNhbGx5IGluc3RlYWQgb2YgaG9yaXpvbnRhbGx5ICovXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuY2FyZC1oZWFkZXIgYSwgLmNhcmQtaGVhZGVyIGlucHV0W3R5cGU9dGV4dF0ge1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBmbG9hdDogbm9uZTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAxNHB4O1xuICB9XG5cbiAgLmNhcmQtaGVhZGVyIGlucHV0W3R5cGU9dGV4dF0ge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIH1cbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/excel-table/excel-table.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/excel-table/excel-table.component.ts ***!
    \******************************************************/

  /*! exports provided: MY_FORMATS, ExcelTableComponent */

  /***/
  function srcAppExcelTableExcelTableComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MY_FORMATS", function () {
      return MY_FORMATS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExcelTableComponent", function () {
      return ExcelTableComponent;
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


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material-moment-adapter */
    "./node_modules/@angular/material-moment-adapter/fesm2015/material-moment-adapter.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _app_excel_table_services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/excel-table/services */
    "./src/app/excel-table/services/index.ts");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! sweetalert2/dist/sweetalert2.js */
    "./node_modules/sweetalert2/dist/sweetalert2.js");
    /* harmony import */


    var sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! xlsx */
    "./node_modules/xlsx/xlsx.js");
    /* harmony import */


    var xlsx__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(xlsx__WEBPACK_IMPORTED_MODULE_8__); // tslint:disable-next-line:no-duplicate-imports
    // @ts-ignore


    var moment = moment__WEBPACK_IMPORTED_MODULE_6___default.a || moment__WEBPACK_IMPORTED_MODULE_6__;
    var MY_FORMATS = {
      parse: {
        dateInput: 'MM-YYYY'
      },
      display: {
        dateInput: 'MM-YYYY',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY'
      }
    };

    var ExcelTableComponent = /*#__PURE__*/function () {
      function ExcelTableComponent(tableService) {
        _classCallCheck(this, ExcelTableComponent);

        this.tableService = tableService;
        this.data = [[,], [,]];
        this.emiData = [[,], [,]];
        this.show = false;
        this.emiTable = false;
        this.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](moment(new Date('01-01-2000')));
        this.emiDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](moment(new Date('01-01-2000')));
        this.disableData = [];
        this.disableLoanData = [];
        this.inputReadonly = true;
      }

      _createClass(ExcelTableComponent, [{
        key: "chosenYearHandler",
        value: function chosenYearHandler(normalizedYear) {
          var ctrlValue = this.date.value;
          ctrlValue.year(normalizedYear.year());
          this.date.setValue(ctrlValue);
        }
      }, {
        key: "chosenMonthHandler",
        value: function chosenMonthHandler(normalizedMonth, datepicker) {
          var ctrlValue = this.date.value;
          ctrlValue.month(normalizedMonth.month());
          this.date.setValue(ctrlValue);
          datepicker.close();
        }
      }, {
        key: "chosenAnotherYearHandler",
        value: function chosenAnotherYearHandler(normalizedYear) {
          var ctrlValue = this.emiDate.value;
          ctrlValue.year(normalizedYear.year());
          this.emiDate.setValue(ctrlValue);
        }
      }, {
        key: "chosenAnotherMonthHandler",
        value: function chosenAnotherMonthHandler(normalizedMonth, datepicker) {
          var ctrlValue = this.emiDate.value;
          ctrlValue.month(normalizedMonth.month());
          this.emiDate.setValue(ctrlValue);
          datepicker.close();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.tableService.getData().subscribe(function (result) {
            console.log(result); // tslint:disable-next-line:prefer-for-of

            for (var i = 0; i < result.length; i++) {
              if (result[i].sheetName.includes('Deposits')) {
                // @ts-ignore
                _this.disableData.push(moment(result[i].dateOfSheet, 'MM-YYYY'));
              } else {
                // @ts-ignore
                _this.disableLoanData.push(moment(result[i].dateOfSheet, 'MM-YYYY'));
              }
            }
          });

          this.disable = function (d) {
            // @ts-ignore
            return !_this.disableData.find(function (x) {
              return d.month() === moment(x).month() && d.year() === moment(x).year();
            });
          };

          this.disableLoan = function (d) {
            return !_this.disableLoanData.find(function (x) {
              return d.month() === moment(x).month() && d.year() === moment(x).year();
            });
          };
        }
      }, {
        key: "onChange",
        value: function onChange(evt) {
          var _this2 = this;

          /* wire up file reader */
          var target = evt.target;

          if (target.files.length !== 1) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
              title: 'Oops!',
              text: 'File Already Uploaded!',
              icon: 'error'
            }).then(function (isConfirm) {
              if (isConfirm) {
                _this2.emiTable = false;

                _this2.emiDate.setValue('');

                evt.target.value = null;
              }
            });
            throw new Error('Cannot use multiple files');
          }

          var reader = new FileReader();

          reader.onload = function (e) {
            /* read workbook */
            var bstr = e.target.result;
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_8__["read"](bstr, {
              type: 'binary'
            });
            /* grab first sheet */

            var wsname = wb.SheetNames[0];
            var ws = wb.Sheets[wsname];
            /* save data */

            _this2.data = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].sheet_to_json(ws, {
              header: 1
            });
            _this2.show = true;
            console.log(_this2.data);
          };

          reader.readAsBinaryString(target.files[0]);
          console.log(target.files[0]);
          var formData = new FormData();
          formData.append('file', evt.target.files[0], evt.target.files[0].name);
          formData.append('date', this.date.value.format('MM-YYYY'));
          console.log(formData);
          this.tableService.uploadFile(formData).subscribe(function (result) {
            if (result) {
              var send = {
                data: _this2.data,
                date: _this2.date.value.format('MM-YYYY')
              };

              _this2.tableService.sendData(send).subscribe(function (res) {
                if (res) {
                  sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                    text: 'Data Successfully Inserted',
                    icon: 'success'
                  }).then(function (isConfirm) {
                    if (isConfirm) {
                      // @ts-ignore
                      _this2.disableData.push(moment(send.date, 'MM-YYYY'));

                      _this2.disable = function (d) {
                        return !_this2.disableData.find(function (x) {
                          return d.month() === moment(x).month() && d.year() === moment(x).year();
                        });
                      };

                      _this2.date = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](moment(new Date('01-01-2000')));
                      _this2.show = false;
                      evt.target.value = null;
                    }
                  });
                }
              }, function (error1) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                  title: 'Oops!',
                  text: 'Try again!',
                  icon: 'error'
                });
              });
            }
          }, function (error1) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
              title: 'Oops!',
              text: 'Try again!',
              icon: 'error'
            });
          });
        }
      }, {
        key: "onFileChange",
        value: function onFileChange(evt) {
          var _this3 = this;

          /* wire up file reader */
          var target = evt.target;

          if (target.files.length !== 1) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
              title: 'Oops!',
              text: 'File Already Uploaded!',
              icon: 'error'
            }).then(function (isConfirm) {
              if (isConfirm) {
                _this3.emiTable = false;

                _this3.emiDate.setValue('');

                evt.target.value = null;
              }
            });
            throw new Error('Cannot use multiple files');
          }

          var reader = new FileReader();

          reader.onload = function (e) {
            var bstr = e.target.result;
            var wb = xlsx__WEBPACK_IMPORTED_MODULE_8__["read"](bstr, {
              type: 'binary'
            });
            var wsname = wb.SheetNames[0];
            var ws = wb.Sheets[wsname];
            _this3.emiTable = true;
            _this3.emiData = xlsx__WEBPACK_IMPORTED_MODULE_8__["utils"].sheet_to_json(ws, {
              header: 1
            });
            _this3.emiData = _this3.emiData.slice(2);
            console.log(_this3.emiData);
          };

          reader.readAsBinaryString(target.files[0]);
          var formData = new FormData();
          formData.append('file', evt.target.files[0], evt.target.files[0].name);
          formData.append('date', this.emiDate.value.format('MM-YYYY'));
          console.log(formData);
          this.tableService.uploadFile(formData).subscribe(function (result) {
            if (result) {
              var send = {
                data: _this3.emiData,
                date: _this3.emiDate.value.format('MM-YYYY')
              };

              _this3.tableService.sendLoanData(send).subscribe(function (res) {
                if (res) {
                  _this3.tableService.getEmiData().subscribe(function (emiResData) {
                    console.log(emiResData);

                    if (emiResData.length !== 0) {
                      var closeData = []; // tslint:disable-next-line:prefer-for-of

                      for (var i = 0; i < emiResData.length; i++) {
                        if (emiResData[i].month === emiResData[i].loanDuration) {
                          closeData.push({
                            loanId: emiResData[i].loanId,
                            date: send.date,
                            status: 'Auto Closure',
                            close: true
                          });
                        }
                      }

                      _this3.tableService.closeLoan(closeData).subscribe(function (r) {
                        if (r) {
                          sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                            text: 'Data Successfully Inserted',
                            icon: 'success'
                          }).then(function (isConfirm) {
                            if (isConfirm) {
                              // @ts-ignore
                              _this3.disableLoanData.push( // @ts-ignore
                              moment(send.date, 'MM-YYYY'));

                              _this3.disableLoan = function (d) {
                                return !_this3.disableLoanData.find(function (x) {
                                  return d.month() === moment(x).month() && d.year() === moment(x).year();
                                });
                              };

                              _this3.emiDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](moment(new Date('01-01-2000')));
                              _this3.emiTable = false;
                              evt.target.value = null;
                            }
                          });
                        } else {
                          console.log(r);
                        }
                      });
                    } else {
                      sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                        text: 'Data Successfully Inserted',
                        icon: 'success'
                      }).then(function (isConfirm) {
                        if (isConfirm) {
                          // @ts-ignore
                          _this3.disableData.push( // @ts-ignore
                          moment(send.date, 'MM-YYYY'));

                          _this3.disable = function (d) {
                            return !_this3.disableData.find(function (x) {
                              return d.month() === moment(x).month() && d.year() === moment(x).year();
                            });
                          };

                          _this3.emiDate = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
                          _this3.emiTable = false;
                          evt.target.value = null;
                        }
                      });
                    }
                  });
                }
              }, function (error1) {
                sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                  title: 'Oops!',
                  text: 'Try again!',
                  icon: 'error'
                });
              });
            }
          }, function (error1) {
            sweetalert2_dist_sweetalert2_js__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
              title: 'Oops!',
              text: 'Try again!',
              icon: 'error'
            });
          });
        }
      }]);

      return ExcelTableComponent;
    }();

    ExcelTableComponent.ctorParameters = function () {
      return [{
        type: _app_excel_table_services__WEBPACK_IMPORTED_MODULE_5__["TablesService"]
      }];
    };

    ExcelTableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'sb-excel-table',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./excel-table.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/excel-table/excel-table.component.html"))["default"],
      providers: [{
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["DateAdapter"],
        useClass: _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MomentDateAdapter"],
        deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_LOCALE"], _angular_material_moment_adapter__WEBPACK_IMPORTED_MODULE_3__["MAT_MOMENT_DATE_ADAPTER_OPTIONS"]]
      }, {
        provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MAT_DATE_FORMATS"],
        useValue: MY_FORMATS
      }],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./excel-table.component.scss */
      "./src/app/excel-table/excel-table.component.scss"))["default"]]
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_app_excel_table_services__WEBPACK_IMPORTED_MODULE_5__["TablesService"]])], ExcelTableComponent);
    /***/
  },

  /***/
  "./src/app/excel-table/excel-table.module.ts":
  /*!***************************************************!*\
    !*** ./src/app/excel-table/excel-table.module.ts ***!
    \***************************************************/

  /*! exports provided: ExcelTableModule */

  /***/
  function srcAppExcelTableExcelTableModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExcelTableModule", function () {
      return ExcelTableModule;
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


    var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @ngx-translate/core */
    "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
    /* harmony import */


    var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/datepicker */
    "./node_modules/@angular/material/fesm2015/datepicker.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/fesm2015/input.js");
    /* harmony import */


    var ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ng2-search-filter */
    "./node_modules/ng2-search-filter/ng2-search-filter.js");
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var _excel_table_routing_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./excel-table-routing.module */
    "./src/app/excel-table/excel-table-routing.module.ts");
    /* harmony import */


    var _excel_table_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./excel-table.component */
    "./src/app/excel-table/excel-table.component.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./services */
    "./src/app/excel-table/services/index.ts");
    /* harmony import */


    var _app_layout_dashboard_layout_dashboard_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @app/layout-dashboard/layout-dashboard.module */
    "./src/app/layout-dashboard/layout-dashboard.module.ts");

    var ExcelTableModule = function ExcelTableModule() {
      _classCallCheck(this, ExcelTableModule);
    };

    ExcelTableModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_excel_table_component__WEBPACK_IMPORTED_MODULE_13__["ExcelTableComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _excel_table_routing_module__WEBPACK_IMPORTED_MODULE_12__["ExcelTableRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _app_app_common_app_common_module__WEBPACK_IMPORTED_MODULE_4__["AppCommonModule"], _app_navigation_navigation_module__WEBPACK_IMPORTED_MODULE_5__["NavigationModule"], _ngx_translate_core__WEBPACK_IMPORTED_MODULE_6__["TranslateModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"], _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInputModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"], ng2_search_filter__WEBPACK_IMPORTED_MODULE_10__["Ng2SearchPipeModule"], _app_layout_dashboard_layout_dashboard_module__WEBPACK_IMPORTED_MODULE_15__["LayoutDashboardModule"]],
      providers: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DecimalPipe"]].concat(_toConsumableArray(_services__WEBPACK_IMPORTED_MODULE_14__["services"]))
    })], ExcelTableModule);
    /***/
  },

  /***/
  "./src/app/excel-table/services/index.ts":
  /*!***********************************************!*\
    !*** ./src/app/excel-table/services/index.ts ***!
    \***********************************************/

  /*! exports provided: services, TablesService */

  /***/
  function srcAppExcelTableServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
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


    var _tables_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./tables.service */
    "./src/app/excel-table/services/tables.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "TablesService", function () {
      return _tables_service__WEBPACK_IMPORTED_MODULE_1__["TablesService"];
    });

    var services = [_tables_service__WEBPACK_IMPORTED_MODULE_1__["TablesService"]];
    /***/
  },

  /***/
  "./src/app/excel-table/services/tables.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/excel-table/services/tables.service.ts ***!
    \********************************************************/

  /*! exports provided: TablesService */

  /***/
  function srcAppExcelTableServicesTablesServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TablesService", function () {
      return TablesService;
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

    var TablesService = /*#__PURE__*/function () {
      function TablesService(httpService) {
        _classCallCheck(this, TablesService);

        this.httpService = httpService;
      }

      _createClass(TablesService, [{
        key: "sendData",
        value: function sendData(getData) {
          console.log(getData);
          var data = getData.data;
          var ddate = getData.date;
          var url = 'http://drsunitanayak.com/sendDepositData';
          var account = [];

          for (var j = 1; j < data.length; j++) {
            account.push([ddate, data[j][0], data[j][1], 'Deposit deducted from salary of ' + ddate, 'Cash', 'Operational']);
          }

          var send = {
            accountData: account
          };
          console.log(send);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
          headers.append('Accept', 'application/json');
          headers.append('content-type', 'application/json');
          return this.httpService.post(url, send, {
            headers: headers
          });
        }
      }, {
        key: "sendLoanData",
        value: function sendLoanData(getData) {
          var data = getData.data;
          var ddate = getData.date;
          var url = 'http://drsunitanayak.com/sendLoanData';
          var loan = [];
          var loanBook = [];

          for (var j = 1; j < data.length; j++) {
            loan.push([data[j][0], data[j][1], data[j][2], data[j][3]]);
            loanBook.push([ddate, data[j][4], 'EMI debited from Salary of ' + ddate, 'Cash', 'EMI']);
          }

          var send = {
            loanData: loan,
            loanBookData: loanBook
          };
          console.log(send);
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
          headers.append('Accept', 'application/json');
          headers.append('content-type', 'application/json');
          return this.httpService.post(url, send, {
            headers: headers
          });
        }
      }, {
        key: "uploadFile",
        value: function uploadFile(data) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
          headers.append('Accept', 'application/json');
          headers.append('content-type', 'multipart/form-data');
          console.log(data);
          var url = 'http://drsunitanayak.com/sendExcel';
          return this.httpService.post(url, data, {
            headers: headers
          });
        }
      }, {
        key: "getData",
        value: function getData() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
          headers.append('Accept', 'application/json');
          headers.append('content-type', 'application/json');
          var url = 'http://drsunitanayak.com/monthYear';
          return this.httpService.get(url, {
            headers: headers
          });
        }
      }, {
        key: "getEmiData",
        value: function getEmiData() {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
          headers.append('Accept', 'application/json');
          headers.append('content-type', 'application/json');
          var url = 'http://drsunitanayak.com/getLoanEmiData';
          return this.httpService.get(url, {
            headers: headers
          });
        }
      }, {
        key: "closeLoan",
        value: function closeLoan(data) {
          var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]();
          headers.append('Access-Control-Allow-Origin', '*');
          headers.append('Access-Control-Allow-Methods', 'POST,GET,OPTIONS,PUT');
          headers.append('Accept', 'application/json');
          headers.append('content-type', 'application/json');
          var url = 'http://drsunitanayak.com/sendLoanAutoCloseData';
          var closeData = {
            closeData: data
          };
          return this.httpService.post(url, closeData, {
            headers: headers
          });
        }
      }]);

      return TablesService;
    }();

    TablesService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]
      }];
    };

    TablesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])], TablesService);
    /***/
  }
}]);
//# sourceMappingURL=excel-table-excel-table-module-es5.js.map