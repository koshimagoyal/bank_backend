function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~excel-table-excel-table-module~generate-emi-generate-emi-module~loan-foreclosure-loan-forecl~b5d52a7d"], {
  /***/
  "./node_modules/@angular/cdk/fesm2015/text-field.js":
  /*!**********************************************************!*\
    !*** ./node_modules/@angular/cdk/fesm2015/text-field.js ***!
    \**********************************************************/

  /*! exports provided: AutofillMonitor, CdkAutofill, CdkTextareaAutosize, TextFieldModule */

  /***/
  function node_modulesAngularCdkFesm2015TextFieldJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutofillMonitor", function () {
      return AutofillMonitor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkAutofill", function () {
      return CdkAutofill;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTextareaAutosize", function () {
      return CdkTextareaAutosize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextFieldModule", function () {
      return TextFieldModule;
    });
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/text-field/autofill.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Options to pass to the animationstart listener.
     * @type {?}
     */


    var listenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({
      passive: true
    });
    /**
     * An injectable service that can be used to monitor the autofill state of an input.
     * Based on the following blog post:
     * https://medium.com/\@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
     */

    var AutofillMonitor = /*#__PURE__*/function () {
      /**
       * @param {?} _platform
       * @param {?} _ngZone
       */
      function AutofillMonitor(_platform, _ngZone) {
        _classCallCheck(this, AutofillMonitor);

        this._platform = _platform;
        this._ngZone = _ngZone;
        this._monitoredElements = new Map();
      }
      /**
       * @param {?} elementOrRef
       * @return {?}
       */


      _createClass(AutofillMonitor, [{
        key: "monitor",
        value: function monitor(elementOrRef) {
          var _this = this;

          if (!this._platform.isBrowser) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
          }
          /** @type {?} */


          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceElement"])(elementOrRef);
          /** @type {?} */

          var info = this._monitoredElements.get(element);

          if (info) {
            return info.subject.asObservable();
          }
          /** @type {?} */


          var result = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          /** @type {?} */

          var cssClass = 'cdk-text-field-autofilled';
          /** @type {?} */

          var listener =
          /** @type {?} */

          /**
          * @param {?} event
          * @return {?}
          */
          function listener(event) {
            // Animation events fire on initial element render, we check for the presence of the autofill
            // CSS class to make sure this is a real change in state, not just the initial render before
            // we fire off events.
            if (event.animationName === 'cdk-text-field-autofill-start' && !element.classList.contains(cssClass)) {
              element.classList.add(cssClass);

              _this._ngZone.run(
              /**
              * @return {?}
              */
              function () {
                return result.next({
                  target:
                  /** @type {?} */
                  event.target,
                  isAutofilled: true
                });
              });
            } else if (event.animationName === 'cdk-text-field-autofill-end' && element.classList.contains(cssClass)) {
              element.classList.remove(cssClass);

              _this._ngZone.run(
              /**
              * @return {?}
              */
              function () {
                return result.next({
                  target:
                  /** @type {?} */
                  event.target,
                  isAutofilled: false
                });
              });
            }
          };

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            element.addEventListener('animationstart', listener, listenerOptions);
            element.classList.add('cdk-text-field-autofill-monitored');
          });

          this._monitoredElements.set(element, {
            subject: result,
            unlisten:
            /**
            * @return {?}
            */
            function unlisten() {
              element.removeEventListener('animationstart', listener, listenerOptions);
            }
          });

          return result.asObservable();
        }
        /**
         * @param {?} elementOrRef
         * @return {?}
         */

      }, {
        key: "stopMonitoring",
        value: function stopMonitoring(elementOrRef) {
          /** @type {?} */
          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceElement"])(elementOrRef);
          /** @type {?} */

          var info = this._monitoredElements.get(element);

          if (info) {
            info.unlisten();
            info.subject.complete();
            element.classList.remove('cdk-text-field-autofill-monitored');
            element.classList.remove('cdk-text-field-autofilled');

            this._monitoredElements["delete"](element);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this2 = this;

          this._monitoredElements.forEach(
          /**
          * @param {?} _info
          * @param {?} element
          * @return {?}
          */
          function (_info, element) {
            return _this2.stopMonitoring(element);
          });
        }
      }]);

      return AutofillMonitor;
    }();

    AutofillMonitor.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    AutofillMonitor.ctorParameters = function () {
      return [{
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };
    /** @nocollapse */


    AutofillMonitor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function AutofillMonitor_Factory() {
        return new AutofillMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      },
      token: AutofillMonitor,
      providedIn: "root"
    });

    if (false) {}
    /**
     * A directive that can be used to monitor the autofill state of an input.
     */


    var CdkAutofill = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} _autofillMonitor
       */
      function CdkAutofill(_elementRef, _autofillMonitor) {
        _classCallCheck(this, CdkAutofill);

        this._elementRef = _elementRef;
        this._autofillMonitor = _autofillMonitor;
        /**
         * Emits when the autofill state of the element changes.
         */

        this.cdkAutofill = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      /**
       * @return {?}
       */


      _createClass(CdkAutofill, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this._autofillMonitor.monitor(this._elementRef).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return _this3.cdkAutofill.emit(event);
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._autofillMonitor.stopMonitoring(this._elementRef);
        }
      }]);

      return CdkAutofill;
    }();

    CdkAutofill.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: '[cdkAutofill]'
      }]
    }];
    /** @nocollapse */

    CdkAutofill.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: AutofillMonitor
      }];
    };

    CdkAutofill.propDecorators = {
      cdkAutofill: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/text-field/autosize.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Directive to automatically resize a textarea to fit its content.
     */


    var CdkTextareaAutosize = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} _platform
       * @param {?} _ngZone
       * @param {?=} document
       */
      function CdkTextareaAutosize(_elementRef, _platform, _ngZone,
      /** @breaking-change 11.0.0 make document required */
      document) {
        _classCallCheck(this, CdkTextareaAutosize);

        this._elementRef = _elementRef;
        this._platform = _platform;
        this._ngZone = _ngZone;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._enabled = true;
        /**
         * Value of minRows as of last resize. If the minRows has decreased, the
         * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
         * does not have the same problem because it does not affect the textarea's scrollHeight.
         */

        this._previousMinRows = -1;
        this._document = document;
        this._textareaElement =
        /** @type {?} */
        this._elementRef.nativeElement;
        this._measuringClass = _platform.FIREFOX ? 'cdk-textarea-autosize-measuring-firefox' : 'cdk-textarea-autosize-measuring';
      }
      /**
       * Minimum amount of rows in the textarea.
       * @return {?}
       */


      _createClass(CdkTextareaAutosize, [{
        key: "_setMinHeight",

        /**
         * Sets the minimum height of the textarea as determined by minRows.
         * @return {?}
         */
        value: function _setMinHeight() {
          /** @type {?} */
          var minHeight = this.minRows && this._cachedLineHeight ? "".concat(this.minRows * this._cachedLineHeight, "px") : null;

          if (minHeight) {
            this._textareaElement.style.minHeight = minHeight;
          }
        }
        /**
         * Sets the maximum height of the textarea as determined by maxRows.
         * @return {?}
         */

      }, {
        key: "_setMaxHeight",
        value: function _setMaxHeight() {
          /** @type {?} */
          var maxHeight = this.maxRows && this._cachedLineHeight ? "".concat(this.maxRows * this._cachedLineHeight, "px") : null;

          if (maxHeight) {
            this._textareaElement.style.maxHeight = maxHeight;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this4 = this;

          if (this._platform.isBrowser) {
            // Remember the height which we started with in case autosizing is disabled
            this._initialHeight = this._textareaElement.style.height;
            this.resizeToFitContent();

            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var window = _this4._getWindow();

              Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["auditTime"])(16), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this4._destroyed)).subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this4.resizeToFitContent(true);
              });
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Cache the height of a single-row textarea if it has not already been cached.
         *
         * We need to know how large a single "row" of a textarea is in order to apply minRows and
         * maxRows. For the initial version, we will assume that the height of a single line in the
         * textarea does not ever change.
         * @private
         * @return {?}
         */

      }, {
        key: "_cacheTextareaLineHeight",
        value: function _cacheTextareaLineHeight() {
          if (this._cachedLineHeight) {
            return;
          } // Use a clone element because we have to override some styles.

          /** @type {?} */


          var textareaClone =
          /** @type {?} */
          this._textareaElement.cloneNode(false);

          textareaClone.rows = 1; // Use `position: absolute` so that this doesn't cause a browser layout and use
          // `visibility: hidden` so that nothing is rendered. Clear any other styles that
          // would affect the height.

          textareaClone.style.position = 'absolute';
          textareaClone.style.visibility = 'hidden';
          textareaClone.style.border = 'none';
          textareaClone.style.padding = '0';
          textareaClone.style.height = '';
          textareaClone.style.minHeight = '';
          textareaClone.style.maxHeight = ''; // In Firefox it happens that textarea elements are always bigger than the specified amount
          // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
          // As a workaround that removes the extra space for the scrollbar, we can just set overflow
          // to hidden. This ensures that there is no invalid calculation of the line height.
          // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654

          textareaClone.style.overflow = 'hidden';

          /** @type {?} */
          this._textareaElement.parentNode.appendChild(textareaClone);

          this._cachedLineHeight = textareaClone.clientHeight;

          /** @type {?} */
          this._textareaElement.parentNode.removeChild(textareaClone); // Min and max heights have to be re-calculated if the cached line height changes


          this._setMinHeight();

          this._setMaxHeight();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this._platform.isBrowser) {
            this.resizeToFitContent();
          }
        }
        /**
         * Resize the textarea to fit its content.
         * @param {?=} force Whether to force a height recalculation. By default the height will be
         *    recalculated only if the value changed since the last call.
         * @return {?}
         */

      }, {
        key: "resizeToFitContent",
        value: function resizeToFitContent() {
          var _this5 = this;

          var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          // If autosizing is disabled, just skip everything else
          if (!this._enabled) {
            return;
          }

          this._cacheTextareaLineHeight(); // If we haven't determined the line-height yet, we know we're still hidden and there's no point
          // in checking the height of the textarea.


          if (!this._cachedLineHeight) {
            return;
          }
          /** @type {?} */


          var textarea =
          /** @type {?} */
          this._elementRef.nativeElement;
          /** @type {?} */

          var value = textarea.value; // Only resize if the value or minRows have changed since these calculations can be expensive.

          if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
            return;
          }
          /** @type {?} */


          var placeholderText = textarea.placeholder; // Reset the textarea height to auto in order to shrink back to its default size.
          // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
          // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
          // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
          // need to be removed temporarily.

          textarea.classList.add(this._measuringClass);
          textarea.placeholder = ''; // The measuring class includes a 2px padding to workaround an issue with Chrome,
          // so we account for that extra space here by subtracting 4 (2px top + 2px bottom).

          /** @type {?} */

          var height = textarea.scrollHeight - 4; // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.

          textarea.style.height = "".concat(height, "px");
          textarea.classList.remove(this._measuringClass);
          textarea.placeholder = placeholderText;

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            if (typeof requestAnimationFrame !== 'undefined') {
              requestAnimationFrame(
              /**
              * @return {?}
              */
              function () {
                return _this5._scrollToCaretPosition(textarea);
              });
            } else {
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                return _this5._scrollToCaretPosition(textarea);
              });
            }
          });

          this._previousValue = value;
          this._previousMinRows = this._minRows;
        }
        /**
         * Resets the textarea to its original size
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          // Do not try to change the textarea, if the initialHeight has not been determined yet
          // This might potentially remove styles when reset() is called before ngAfterViewInit
          if (this._initialHeight !== undefined) {
            this._textareaElement.style.height = this._initialHeight;
          }
        } // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
        // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
        // can move this back into `host`.
        // tslint:disable:no-host-decorator-in-concrete

        /**
         * @return {?}
         */

      }, {
        key: "_noopInputHandler",
        value: function _noopInputHandler() {} // no-op handler that ensures we're running change detection on input events.

        /**
         * Access injected document if available or fallback to global document reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getDocument",
        value: function _getDocument() {
          return this._document || document;
        }
        /**
         * Use defaultView of injected document if available or fallback to global window reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getWindow",
        value: function _getWindow() {
          /** @type {?} */
          var doc = this._getDocument();

          return doc.defaultView || window;
        }
        /**
         * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
         * prevent it from scrolling to the caret position. We need to re-set the selection
         * in order for it to scroll to the proper position.
         * @private
         * @param {?} textarea
         * @return {?}
         */

      }, {
        key: "_scrollToCaretPosition",
        value: function _scrollToCaretPosition(textarea) {
          var selectionStart = textarea.selectionStart,
              selectionEnd = textarea.selectionEnd;
          /** @type {?} */

          var document = this._getDocument(); // IE will throw an "Unspecified error" if we try to set the selection range after the
          // element has been removed from the DOM. Assert that the directive hasn't been destroyed
          // between the time we requested the animation frame and when it was executed.
          // Also note that we have to assert that the textarea is focused before we set the
          // selection range. Setting the selection range on a non-focused textarea will cause
          // it to receive focus on IE and Edge.


          if (!this._destroyed.isStopped && document.activeElement === textarea) {
            textarea.setSelectionRange(selectionStart, selectionEnd);
          }
        }
      }, {
        key: "minRows",
        get: function get() {
          return this._minRows;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._minRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);

          this._setMinHeight();
        }
        /**
         * Maximum amount of rows in the textarea.
         * @return {?}
         */

      }, {
        key: "maxRows",
        get: function get() {
          return this._maxRows;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._maxRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);

          this._setMaxHeight();
        }
        /**
         * Whether autosizing is enabled or not
         * @return {?}
         */

      }, {
        key: "enabled",
        get: function get() {
          return this._enabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value); // Only act if the actual value changed. This specifically helps to not run
          // resizeToFitContent too early (i.e. before ngAfterViewInit)

          if (this._enabled !== value) {
            (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
          }
        }
      }]);

      return CdkTextareaAutosize;
    }();

    CdkTextareaAutosize.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: 'textarea[cdkTextareaAutosize]',
        exportAs: 'cdkTextareaAutosize',
        host: {
          'class': 'cdk-textarea-autosize',
          // Textarea elements that have the directive applied should have a single row by default.
          // Browsers normally show two rows by default and therefore this limits the minRows binding.
          'rows': '1'
        }
      }]
    }];
    /** @nocollapse */

    CdkTextareaAutosize.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }];
    };

    CdkTextareaAutosize.propDecorators = {
      minRows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkAutosizeMinRows']
      }],
      maxRows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkAutosizeMaxRows']
      }],
      enabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkTextareaAutosize']
      }],
      _noopInputHandler: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
        args: ['input']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/text-field/text-field-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TextFieldModule = function TextFieldModule() {
      _classCallCheck(this, TextFieldModule);
    };

    TextFieldModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        declarations: [CdkAutofill, CdkTextareaAutosize],
        imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]],
        exports: [CdkAutofill, CdkTextareaAutosize]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/text-field/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=text-field.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material-moment-adapter/fesm2015/material-moment-adapter.js":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/@angular/material-moment-adapter/fesm2015/material-moment-adapter.js ***!
    \*******************************************************************************************/

  /*! exports provided: MAT_MOMENT_DATE_ADAPTER_OPTIONS, MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY, MAT_MOMENT_DATE_FORMATS, MatMomentDateModule, MomentDateAdapter, MomentDateModule */

  /***/
  function node_modulesAngularMaterialMomentAdapterFesm2015MaterialMomentAdapterJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_MOMENT_DATE_ADAPTER_OPTIONS", function () {
      return MAT_MOMENT_DATE_ADAPTER_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY", function () {
      return MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_MOMENT_DATE_FORMATS", function () {
      return MAT_MOMENT_DATE_FORMATS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatMomentDateModule", function () {
      return MatMomentDateModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MomentDateAdapter", function () {
      return MomentDateAdapter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MomentDateModule", function () {
      return MomentDateModule;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material-moment-adapter/adapter/moment-date-adapter.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var moment = moment__WEBPACK_IMPORTED_MODULE_2___default.a || moment__WEBPACK_IMPORTED_MODULE_2__;
    /**
     * Configurable options for {\@see MomentDateAdapter}.
     * @record
     */

    function MatMomentDateAdapterOptions() {}

    if (false) {}
    /**
     * InjectionToken for moment date adapter to configure options.
     * @type {?}
     */


    var MAT_MOMENT_DATE_ADAPTER_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('MAT_MOMENT_DATE_ADAPTER_OPTIONS', {
      providedIn: 'root',
      factory: MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function MAT_MOMENT_DATE_ADAPTER_OPTIONS_FACTORY() {
      return {
        useUtc: false
      };
    }
    /**
     * Creates an array and fills it with values.
     * @template T
     * @param {?} length
     * @param {?} valueFunction
     * @return {?}
     */


    function range(length, valueFunction) {
      /** @type {?} */
      var valuesArray = Array(length);

      for (var i = 0; i < length; i++) {
        valuesArray[i] = valueFunction(i);
      }

      return valuesArray;
    }
    /**
     * Adapts Moment.js Dates for use with Angular Material.
     */


    var MomentDateAdapter = /*#__PURE__*/function (_angular_material_cor) {
      _inherits(MomentDateAdapter, _angular_material_cor);

      var _super = _createSuper(MomentDateAdapter);

      /**
       * @param {?} dateLocale
       * @param {?=} _options
       */
      function MomentDateAdapter(dateLocale, _options) {
        var _this6;

        _classCallCheck(this, MomentDateAdapter);

        _this6 = _super.call(this);
        _this6._options = _options;

        _this6.setLocale(dateLocale || moment.locale());

        return _this6;
      }
      /**
       * @param {?} locale
       * @return {?}
       */


      _createClass(MomentDateAdapter, [{
        key: "setLocale",
        value: function setLocale(locale) {
          var _this7 = this;

          _get(_getPrototypeOf(MomentDateAdapter.prototype), "setLocale", this).call(this, locale);
          /** @type {?} */


          var momentLocaleData = moment.localeData(locale);
          this._localeData = {
            firstDayOfWeek: momentLocaleData.firstDayOfWeek(),
            longMonths: momentLocaleData.months(),
            shortMonths: momentLocaleData.monthsShort(),
            dates: range(31,
            /**
            * @param {?} i
            * @return {?}
            */
            function (i) {
              return _this7.createDate(2017, 0, i + 1).format('D');
            }),
            longDaysOfWeek: momentLocaleData.weekdays(),
            shortDaysOfWeek: momentLocaleData.weekdaysShort(),
            narrowDaysOfWeek: momentLocaleData.weekdaysMin()
          };
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getYear",
        value: function getYear(date) {
          return this.clone(date).year();
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getMonth",
        value: function getMonth(date) {
          return this.clone(date).month();
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getDate",
        value: function getDate(date) {
          return this.clone(date).date();
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getDayOfWeek",
        value: function getDayOfWeek(date) {
          return this.clone(date).day();
        }
        /**
         * @param {?} style
         * @return {?}
         */

      }, {
        key: "getMonthNames",
        value: function getMonthNames(style) {
          // Moment.js doesn't support narrow month names, so we just use short if narrow is requested.
          return style == 'long' ? this._localeData.longMonths : this._localeData.shortMonths;
        }
        /**
         * @return {?}
         */

      }, {
        key: "getDateNames",
        value: function getDateNames() {
          return this._localeData.dates;
        }
        /**
         * @param {?} style
         * @return {?}
         */

      }, {
        key: "getDayOfWeekNames",
        value: function getDayOfWeekNames(style) {
          if (style == 'long') {
            return this._localeData.longDaysOfWeek;
          }

          if (style == 'short') {
            return this._localeData.shortDaysOfWeek;
          }

          return this._localeData.narrowDaysOfWeek;
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getYearName",
        value: function getYearName(date) {
          return this.clone(date).format('YYYY');
        }
        /**
         * @return {?}
         */

      }, {
        key: "getFirstDayOfWeek",
        value: function getFirstDayOfWeek() {
          return this._localeData.firstDayOfWeek;
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "getNumDaysInMonth",
        value: function getNumDaysInMonth(date) {
          return this.clone(date).daysInMonth();
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "clone",
        value: function clone(date) {
          return date.clone().locale(this.locale);
        }
        /**
         * @param {?} year
         * @param {?} month
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "createDate",
        value: function createDate(year, month, date) {
          // Moment.js will create an invalid date if any of the components are out of bounds, but we
          // explicitly check each case so we can throw more descriptive errors.
          if (month < 0 || month > 11) {
            throw Error("Invalid month index \"".concat(month, "\". Month index has to be between 0 and 11."));
          }

          if (date < 1) {
            throw Error("Invalid date \"".concat(date, "\". Date has to be greater than 0."));
          }
          /** @type {?} */


          var result = this._createMoment({
            year: year,
            month: month,
            date: date
          }).locale(this.locale); // If the result isn't valid, the date must have been out of bounds for this month.


          if (!result.isValid()) {
            throw Error("Invalid date \"".concat(date, "\" for month with index \"").concat(month, "\"."));
          }

          return result;
        }
        /**
         * @return {?}
         */

      }, {
        key: "today",
        value: function today() {
          return this._createMoment().locale(this.locale);
        }
        /**
         * @param {?} value
         * @param {?} parseFormat
         * @return {?}
         */

      }, {
        key: "parse",
        value: function parse(value, parseFormat) {
          if (value && typeof value == 'string') {
            return this._createMoment(value, parseFormat, this.locale);
          }

          return value ? this._createMoment(value).locale(this.locale) : null;
        }
        /**
         * @param {?} date
         * @param {?} displayFormat
         * @return {?}
         */

      }, {
        key: "format",
        value: function format(date, displayFormat) {
          date = this.clone(date);

          if (!this.isValid(date)) {
            throw Error('MomentDateAdapter: Cannot format invalid date.');
          }

          return date.format(displayFormat);
        }
        /**
         * @param {?} date
         * @param {?} years
         * @return {?}
         */

      }, {
        key: "addCalendarYears",
        value: function addCalendarYears(date, years) {
          return this.clone(date).add({
            years: years
          });
        }
        /**
         * @param {?} date
         * @param {?} months
         * @return {?}
         */

      }, {
        key: "addCalendarMonths",
        value: function addCalendarMonths(date, months) {
          return this.clone(date).add({
            months: months
          });
        }
        /**
         * @param {?} date
         * @param {?} days
         * @return {?}
         */

      }, {
        key: "addCalendarDays",
        value: function addCalendarDays(date, days) {
          return this.clone(date).add({
            days: days
          });
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "toIso8601",
        value: function toIso8601(date) {
          return this.clone(date).format();
        }
        /**
         * Returns the given value if given a valid Moment or null. Deserializes valid ISO 8601 strings
         * (https://www.ietf.org/rfc/rfc3339.txt) and valid Date objects into valid Moments and empty
         * string into null. Returns an invalid date for all other values.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "deserialize",
        value: function deserialize(value) {
          /** @type {?} */
          var date;

          if (value instanceof Date) {
            date = this._createMoment(value).locale(this.locale);
          } else if (this.isDateInstance(value)) {
            // Note: assumes that cloning also sets the correct locale.
            return this.clone(value);
          }

          if (typeof value === 'string') {
            if (!value) {
              return null;
            }

            date = this._createMoment(value, moment.ISO_8601).locale(this.locale);
          }

          if (date && this.isValid(date)) {
            return this._createMoment(date).locale(this.locale);
          }

          return _get(_getPrototypeOf(MomentDateAdapter.prototype), "deserialize", this).call(this, value);
        }
        /**
         * @param {?} obj
         * @return {?}
         */

      }, {
        key: "isDateInstance",
        value: function isDateInstance(obj) {
          return moment.isMoment(obj);
        }
        /**
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "isValid",
        value: function isValid(date) {
          return this.clone(date).isValid();
        }
        /**
         * @return {?}
         */

      }, {
        key: "invalid",
        value: function invalid() {
          return moment.invalid();
        }
        /**
         * Creates a Moment instance while respecting the current UTC settings.
         * @private
         * @param {?} date
         * @param {?=} format
         * @param {?=} locale
         * @return {?}
         */

      }, {
        key: "_createMoment",
        value: function _createMoment(date, format, locale) {
          var _ref = this._options || {},
              strict = _ref.strict,
              useUtc = _ref.useUtc;

          return useUtc ? moment.utc(date, format, locale, strict) : moment(date, format, locale, strict);
        }
      }]);

      return MomentDateAdapter;
    }(_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"]);

    MomentDateAdapter.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }];
    /** @nocollapse */

    MomentDateAdapter.ctorParameters = function () {
      return [{
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_LOCALE"]]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
          args: [MAT_MOMENT_DATE_ADAPTER_OPTIONS]
        }]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material-moment-adapter/adapter/moment-date-formats.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /** @type {?} */


    var MAT_MOMENT_DATE_FORMATS = {
      parse: {
        dateInput: 'l'
      },
      display: {
        dateInput: 'l',
        monthYearLabel: 'MMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY'
      }
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material-moment-adapter/adapter/index.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    var MomentDateModule = function MomentDateModule() {
      _classCallCheck(this, MomentDateModule);
    };

    MomentDateModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        providers: [{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["DateAdapter"],
          useClass: MomentDateAdapter,
          deps: [_angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_LOCALE"], MAT_MOMENT_DATE_ADAPTER_OPTIONS]
        }]
      }]
    }];
    var ɵ0 = MAT_MOMENT_DATE_FORMATS;

    var MatMomentDateModule = function MatMomentDateModule() {
      _classCallCheck(this, MatMomentDateModule);
    };

    MatMomentDateModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{
        imports: [MomentDateModule],
        providers: [{
          provide: _angular_material_core__WEBPACK_IMPORTED_MODULE_1__["MAT_DATE_FORMATS"],
          useValue: ɵ0
        }]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material-moment-adapter/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=material-moment-adapter.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/fesm2015/datepicker.js":
  /*!***************************************************************!*\
    !*** ./node_modules/@angular/material/fesm2015/datepicker.js ***!
    \***************************************************************/

  /*! exports provided: MAT_DATEPICKER_SCROLL_STRATEGY, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER, MAT_DATEPICKER_VALIDATORS, MAT_DATEPICKER_VALUE_ACCESSOR, MatCalendar, MatCalendarBody, MatCalendarCell, MatCalendarHeader, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerInputEvent, MatDatepickerIntl, MatDatepickerModule, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatMultiYearView, MatYearView, matDatepickerAnimations, yearsPerPage, yearsPerRow */

  /***/
  function node_modulesAngularMaterialFesm2015DatepickerJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY", function () {
      return MAT_DATEPICKER_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY", function () {
      return MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER", function () {
      return MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_VALIDATORS", function () {
      return MAT_DATEPICKER_VALIDATORS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_DATEPICKER_VALUE_ACCESSOR", function () {
      return MAT_DATEPICKER_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCalendar", function () {
      return MatCalendar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCalendarBody", function () {
      return MatCalendarBody;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCalendarCell", function () {
      return MatCalendarCell;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatCalendarHeader", function () {
      return MatCalendarHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDatepicker", function () {
      return MatDatepicker;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDatepickerContent", function () {
      return MatDatepickerContent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDatepickerInput", function () {
      return MatDatepickerInput;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDatepickerInputEvent", function () {
      return MatDatepickerInputEvent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDatepickerIntl", function () {
      return MatDatepickerIntl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDatepickerModule", function () {
      return MatDatepickerModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDatepickerToggle", function () {
      return MatDatepickerToggle;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatDatepickerToggleIcon", function () {
      return MatDatepickerToggleIcon;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatMonthView", function () {
      return MatMonthView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatMultiYearView", function () {
      return MatMultiYearView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatYearView", function () {
      return MatYearView;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matDatepickerAnimations", function () {
      return matDatepickerAnimations;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "yearsPerPage", function () {
      return yearsPerPage;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "yearsPerRow", function () {
      return yearsPerRow;
    });
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/fesm2015/dialog.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/fesm2015/scrolling.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/fesm2015/keycodes.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/fesm2015/input.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/datepicker/datepicker-errors.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * \@docs-private
     * @param {?} provider
     * @return {?}
     */


    function createMissingDateImplError(provider) {
      return Error("MatDatepicker: No provider found for ".concat(provider, ". You must import one of the following ") + "modules at your application root: MatNativeDateModule, MatMomentDateModule, or provide a " + "custom implementation.");
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/datepicker/datepicker-intl.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Datepicker data that requires internationalization.
     */


    var MatDatepickerIntl = /*#__PURE__*/function () {
      function MatDatepickerIntl() {
        _classCallCheck(this, MatDatepickerIntl);

        /**
         * Stream that emits whenever the labels here are changed. Use this to notify
         * components if the labels have changed after initialization.
         */
        this.changes = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /**
         * A label for the calendar popup (used by screen readers).
         */

        this.calendarLabel = 'Calendar';
        /**
         * A label for the button used to open the calendar popup (used by screen readers).
         */

        this.openCalendarLabel = 'Open calendar';
        /**
         * A label for the previous month button (used by screen readers).
         */

        this.prevMonthLabel = 'Previous month';
        /**
         * A label for the next month button (used by screen readers).
         */

        this.nextMonthLabel = 'Next month';
        /**
         * A label for the previous year button (used by screen readers).
         */

        this.prevYearLabel = 'Previous year';
        /**
         * A label for the next year button (used by screen readers).
         */

        this.nextYearLabel = 'Next year';
        /**
         * A label for the previous multi-year button (used by screen readers).
         */

        this.prevMultiYearLabel = 'Previous 20 years';
        /**
         * A label for the next multi-year button (used by screen readers).
         */

        this.nextMultiYearLabel = 'Next 20 years';
        /**
         * A label for the 'switch to month view' button (used by screen readers).
         */

        this.switchToMonthViewLabel = 'Choose date';
        /**
         * A label for the 'switch to year view' button (used by screen readers).
         */

        this.switchToMultiYearViewLabel = 'Choose month and year';
      }
      /**
       * Formats a range of years.
       * @param {?} start
       * @param {?} end
       * @return {?}
       */


      _createClass(MatDatepickerIntl, [{
        key: "formatYearRange",
        value: function formatYearRange(start, end) {
          return "".concat(start, " \u2013 ").concat(end);
        }
      }]);

      return MatDatepickerIntl;
    }();

    MatDatepickerIntl.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    MatDatepickerIntl.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"])({
      factory: function MatDatepickerIntl_Factory() {
        return new MatDatepickerIntl();
      },
      token: MatDatepickerIntl,
      providedIn: "root"
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/datepicker/calendar-body.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * An internal class that represents the data corresponding to a single calendar cell.
     * \@docs-private
     */


    var MatCalendarCell =
    /**
     * @param {?} value
     * @param {?} displayValue
     * @param {?} ariaLabel
     * @param {?} enabled
     * @param {?=} cssClasses
     */
    function MatCalendarCell(value, displayValue, ariaLabel, enabled) {
      var cssClasses = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

      _classCallCheck(this, MatCalendarCell);

      this.value = value;
      this.displayValue = displayValue;
      this.ariaLabel = ariaLabel;
      this.enabled = enabled;
      this.cssClasses = cssClasses;
    };

    if (false) {}
    /**
     * An internal component used to display calendar data in a table.
     * \@docs-private
     */


    var MatCalendarBody = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} _ngZone
       */
      function MatCalendarBody(_elementRef, _ngZone) {
        _classCallCheck(this, MatCalendarBody);

        this._elementRef = _elementRef;
        this._ngZone = _ngZone;
        /**
         * The number of columns in the table.
         */

        this.numCols = 7;
        /**
         * The cell number of the active cell in the table.
         */

        this.activeCell = 0;
        /**
         * The aspect ratio (width / height) to use for the cells in the table. This aspect ratio will be
         * maintained even as the table resizes.
         */

        this.cellAspectRatio = 1;
        /**
         * Emits when a new value is selected.
         */

        this.selectedValueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
      }
      /**
       * @param {?} cell
       * @return {?}
       */


      _createClass(MatCalendarBody, [{
        key: "_cellClicked",
        value: function _cellClicked(cell) {
          if (cell.enabled) {
            this.selectedValueChange.emit(cell.value);
          }
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var columnChanges = changes['numCols'];
          var rows = this.rows,
              numCols = this.numCols;

          if (changes['rows'] || columnChanges) {
            this._firstRowOffset = rows && rows.length && rows[0].length ? numCols - rows[0].length : 0;
          }

          if (changes['cellAspectRatio'] || columnChanges || !this._cellPadding) {
            this._cellPadding = "".concat(50 * this.cellAspectRatio / numCols, "%");
          }

          if (columnChanges || !this._cellWidth) {
            this._cellWidth = "".concat(100 / numCols, "%");
          }
        }
        /**
         * @param {?} rowIndex
         * @param {?} colIndex
         * @return {?}
         */

      }, {
        key: "_isActiveCell",
        value: function _isActiveCell(rowIndex, colIndex) {
          /** @type {?} */
          var cellNumber = rowIndex * this.numCols + colIndex; // Account for the fact that the first row may not have as many cells.

          if (rowIndex) {
            cellNumber -= this._firstRowOffset;
          }

          return cellNumber == this.activeCell;
        }
        /**
         * Focuses the active cell after the microtask queue is empty.
         * @return {?}
         */

      }, {
        key: "_focusActiveCell",
        value: function _focusActiveCell() {
          var _this8 = this;

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this8._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1)).subscribe(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var activeCell = _this8._elementRef.nativeElement.querySelector('.mat-calendar-body-active');

              if (activeCell) {
                activeCell.focus();
              }
            });
          });
        }
      }]);

      return MatCalendarBody;
    }();

    MatCalendarBody.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
      args: [{
        selector: '[mat-calendar-body]',
        template: "<!--\n  If there's not enough space in the first row, create a separate label row. We mark this row as\n  aria-hidden because we don't want it to be read out as one of the weeks in the month.\n-->\n<tr *ngIf=\"_firstRowOffset < labelMinRequiredCells\" aria-hidden=\"true\">\n  <td class=\"mat-calendar-body-label\"\n      [attr.colspan]=\"numCols\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n    {{label}}\n  </td>\n</tr>\n\n<!-- Create the first row separately so we can include a special spacer cell. -->\n<tr *ngFor=\"let row of rows; let rowIndex = index\" role=\"row\">\n  <!--\n    We mark this cell as aria-hidden so it doesn't get read out as one of the days in the week.\n    The aspect ratio of the table cells is maintained by setting the top and bottom padding as a\n    percentage of the width (a variant of the trick described here:\n    https://www.w3schools.com/howto/howto_css_aspect_ratio.asp).\n  -->\n  <td *ngIf=\"rowIndex === 0 && _firstRowOffset\"\n      aria-hidden=\"true\"\n      class=\"mat-calendar-body-label\"\n      [attr.colspan]=\"_firstRowOffset\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n    {{_firstRowOffset >= labelMinRequiredCells ? label : ''}}\n  </td>\n  <td *ngFor=\"let item of row; let colIndex = index\"\n      role=\"gridcell\"\n      class=\"mat-calendar-body-cell mat-focus-indicator\"\n      [ngClass]=\"item.cssClasses\"\n      [tabindex]=\"_isActiveCell(rowIndex, colIndex) ? 0 : -1\"\n      [class.mat-calendar-body-disabled]=\"!item.enabled\"\n      [class.mat-calendar-body-active]=\"_isActiveCell(rowIndex, colIndex)\"\n      [attr.aria-label]=\"item.ariaLabel\"\n      [attr.aria-disabled]=\"!item.enabled || null\"\n      [attr.aria-selected]=\"selectedValue === item.value\"\n      (click)=\"_cellClicked(item)\"\n      [style.width]=\"_cellWidth\"\n      [style.paddingTop]=\"_cellPadding\"\n      [style.paddingBottom]=\"_cellPadding\">\n      <div class=\"mat-calendar-body-cell-content\"\n        [class.mat-calendar-body-selected]=\"selectedValue === item.value\"\n        [class.mat-calendar-body-today]=\"todayValue === item.value\">\n        {{item.displayValue}}\n      </div>\n  </td>\n</tr>\n",
        host: {
          'class': 'mat-calendar-body',
          'role': 'grid',
          'aria-readonly': 'true'
        },
        exportAs: 'matCalendarBody',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
        styles: [".mat-calendar-body{min-width:224px}.mat-calendar-body-label{height:0;line-height:0;text-align:left;padding-left:4.7142857143%;padding-right:4.7142857143%}.mat-calendar-body-cell{position:relative;height:0;line-height:0;text-align:center;outline:none;cursor:pointer}.mat-calendar-body-disabled{cursor:default}.mat-calendar-body-cell-content{position:absolute;top:5%;left:5%;display:flex;align-items:center;justify-content:center;box-sizing:border-box;width:90%;height:90%;line-height:1;border-width:1px;border-style:solid;border-radius:999px}.cdk-high-contrast-active .mat-calendar-body-cell-content{border:none}.cdk-high-contrast-active .mat-datepicker-popup:not(:empty),.cdk-high-contrast-active .mat-calendar-body-selected{outline:solid 1px}.cdk-high-contrast-active .mat-calendar-body-today{outline:dotted 1px}.cdk-high-contrast-active .cdk-keyboard-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected),.cdk-high-contrast-active .cdk-program-focused .mat-calendar-body-active>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){outline:dotted 2px}[dir=rtl] .mat-calendar-body-label{text-align:right}@media(hover: none){.mat-calendar-body-cell:not(.mat-calendar-body-disabled):hover>.mat-calendar-body-cell-content:not(.mat-calendar-body-selected){background-color:transparent}}\n"]
      }]
    }];
    /** @nocollapse */

    MatCalendarBody.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }];
    };

    MatCalendarBody.propDecorators = {
      label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      rows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      todayValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      selectedValue: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      labelMinRequiredCells: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      numCols: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      activeCell: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      cellAspectRatio: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      selectedValueChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/datepicker/month-view.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var DAYS_PER_WEEK = 7;
    /**
     * An internal component used to display a single month in the datepicker.
     * \@docs-private
     * @template D
     */

    var MatMonthView = /*#__PURE__*/function () {
      /**
       * @param {?} _changeDetectorRef
       * @param {?} _dateFormats
       * @param {?} _dateAdapter
       * @param {?=} _dir
       */
      function MatMonthView(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
        _classCallCheck(this, MatMonthView);

        this._changeDetectorRef = _changeDetectorRef;
        this._dateFormats = _dateFormats;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        /**
         * Emits when a new date is selected.
         */

        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when any date is selected.
         */

        this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when any date is activated.
         */

        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();

        if (!this._dateAdapter) {
          throw createMissingDateImplError('DateAdapter');
        }

        if (!this._dateFormats) {
          throw createMissingDateImplError('MAT_DATE_FORMATS');
        }

        this._activeDate = this._dateAdapter.today();
      }
      /**
       * The date to display in this month view (everything other than the month and year is ignored).
       * @return {?}
       */


      _createClass(MatMonthView, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          var _this9 = this;

          this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(null)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this9._init();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._rerenderSubscription.unsubscribe();
        }
        /**
         * Handles when a new date is selected.
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "_dateSelected",
        value: function _dateSelected(date) {
          if (this._selectedDate != date) {
            /** @type {?} */
            var selectedYear = this._dateAdapter.getYear(this.activeDate);
            /** @type {?} */


            var selectedMonth = this._dateAdapter.getMonth(this.activeDate);
            /** @type {?} */


            var selectedDate = this._dateAdapter.createDate(selectedYear, selectedMonth, date);

            this.selectedChange.emit(selectedDate);
          }

          this._userSelection.emit();
        }
        /**
         * Handles keydown events on the calendar body when calendar is in month view.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleCalendarBodyKeydown",
        value: function _handleCalendarBodyKeydown(event) {
          // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
          // disabled ones from being selected. This may not be ideal, we should look into whether
          // navigation should skip over disabled dates, and if so, how to implement that efficiently.
          // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
          // disabled ones from being selected. This may not be ideal, we should look into whether
          // navigation should skip over disabled dates, and if so, how to implement that efficiently.

          /** @type {?} */
          var oldActiveDate = this._activeDate;
          /** @type {?} */

          var isRtl = this._isRtl();

          switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["LEFT_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? 1 : -1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["RIGHT_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, isRtl ? -1 : 1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, -7);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 7);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"]:
              this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, 1 - this._dateAdapter.getDate(this._activeDate));
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["END"]:
              this.activeDate = this._dateAdapter.addCalendarDays(this._activeDate, this._dateAdapter.getNumDaysInMonth(this._activeDate) - this._dateAdapter.getDate(this._activeDate));
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_UP"]:
              this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, -1) : this._dateAdapter.addCalendarMonths(this._activeDate, -1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_DOWN"]:
              this.activeDate = event.altKey ? this._dateAdapter.addCalendarYears(this._activeDate, 1) : this._dateAdapter.addCalendarMonths(this._activeDate, 1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]:
              if (!this.dateFilter || this.dateFilter(this._activeDate)) {
                this._dateSelected(this._dateAdapter.getDate(this._activeDate));

                this._userSelection.emit(); // Prevent unexpected default actions such as form submission.


                event.preventDefault();
              }

              return;

            default:
              // Don't prevent default or focus active cell on keys that we don't explicitly handle.
              return;
          }

          if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
          }

          this._focusActiveCell(); // Prevent unexpected default actions such as form submission.


          event.preventDefault();
        }
        /**
         * Initializes this month view.
         * @return {?}
         */

      }, {
        key: "_init",
        value: function _init() {
          this._selectedDate = this._getDateInCurrentMonth(this.selected);
          this._todayDate = this._getDateInCurrentMonth(this._dateAdapter.today());
          this._monthLabel = this._dateAdapter.getMonthNames('short')[this._dateAdapter.getMonth(this.activeDate)].toLocaleUpperCase();
          /** @type {?} */

          var firstOfMonth = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), 1);

          this._firstWeekOffset = (DAYS_PER_WEEK + this._dateAdapter.getDayOfWeek(firstOfMonth) - this._dateAdapter.getFirstDayOfWeek()) % DAYS_PER_WEEK;

          this._initWeekdays();

          this._createWeekCells();

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Focuses the active cell after the microtask queue is empty.
         * @return {?}
         */

      }, {
        key: "_focusActiveCell",
        value: function _focusActiveCell() {
          this._matCalendarBody._focusActiveCell();
        }
        /**
         * Initializes the weekdays.
         * @private
         * @return {?}
         */

      }, {
        key: "_initWeekdays",
        value: function _initWeekdays() {
          /** @type {?} */
          var firstDayOfWeek = this._dateAdapter.getFirstDayOfWeek();
          /** @type {?} */


          var narrowWeekdays = this._dateAdapter.getDayOfWeekNames('narrow');
          /** @type {?} */


          var longWeekdays = this._dateAdapter.getDayOfWeekNames('long'); // Rotate the labels for days of the week based on the configured first day of the week.

          /** @type {?} */


          var weekdays = longWeekdays.map(
          /**
          * @param {?} long
          * @param {?} i
          * @return {?}
          */
          function (_long, i) {
            return {
              "long": _long,
              narrow: narrowWeekdays[i]
            };
          });
          this._weekdays = weekdays.slice(firstDayOfWeek).concat(weekdays.slice(0, firstDayOfWeek));
        }
        /**
         * Creates MatCalendarCells for the dates in this month.
         * @private
         * @return {?}
         */

      }, {
        key: "_createWeekCells",
        value: function _createWeekCells() {
          /** @type {?} */
          var daysInMonth = this._dateAdapter.getNumDaysInMonth(this.activeDate);
          /** @type {?} */


          var dateNames = this._dateAdapter.getDateNames();

          this._weeks = [[]];

          for (var i = 0, cell = this._firstWeekOffset; i < daysInMonth; i++, cell++) {
            if (cell == DAYS_PER_WEEK) {
              this._weeks.push([]);

              cell = 0;
            }
            /** @type {?} */


            var date = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), this._dateAdapter.getMonth(this.activeDate), i + 1);
            /** @type {?} */


            var enabled = this._shouldEnableDate(date);
            /** @type {?} */


            var ariaLabel = this._dateAdapter.format(date, this._dateFormats.display.dateA11yLabel);
            /** @type {?} */


            var cellClasses = this.dateClass ? this.dateClass(date) : undefined;

            this._weeks[this._weeks.length - 1].push(new MatCalendarCell(i + 1, dateNames[i], ariaLabel, enabled, cellClasses));
          }
        }
        /**
         * Date filter for the month
         * @private
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "_shouldEnableDate",
        value: function _shouldEnableDate(date) {
          return !!date && (!this.minDate || this._dateAdapter.compareDate(date, this.minDate) >= 0) && (!this.maxDate || this._dateAdapter.compareDate(date, this.maxDate) <= 0) && (!this.dateFilter || this.dateFilter(date));
        }
        /**
         * Gets the date in this month that the given Date falls on.
         * Returns null if the given Date is in another month.
         * @private
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "_getDateInCurrentMonth",
        value: function _getDateInCurrentMonth(date) {
          return date && this._hasSameMonthAndYear(date, this.activeDate) ? this._dateAdapter.getDate(date) : null;
        }
        /**
         * Checks whether the 2 dates are non-null and fall within the same month of the same year.
         * @private
         * @param {?} d1
         * @param {?} d2
         * @return {?}
         */

      }, {
        key: "_hasSameMonthAndYear",
        value: function _hasSameMonthAndYear(d1, d2) {
          return !!(d1 && d2 && this._dateAdapter.getMonth(d1) == this._dateAdapter.getMonth(d2) && this._dateAdapter.getYear(d1) == this._dateAdapter.getYear(d2));
        }
        /**
         * @private
         * @param {?} obj The object to check.
         * @return {?} The given object if it is both a date instance and valid, otherwise null.
         */

      }, {
        key: "_getValidDateOrNull",
        value: function _getValidDateOrNull(obj) {
          return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
        }
        /**
         * Determines whether the user has the RTL layout direction.
         * @private
         * @return {?}
         */

      }, {
        key: "_isRtl",
        value: function _isRtl() {
          return this._dir && this._dir.value === 'rtl';
        }
      }, {
        key: "activeDate",
        get: function get() {
          return this._activeDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var oldActiveDate = this._activeDate;
          /** @type {?} */

          var validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();

          this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);

          if (!this._hasSameMonthAndYear(oldActiveDate, this._activeDate)) {
            this._init();
          }
        }
        /**
         * The currently selected date.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          return this._selected;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
          this._selectedDate = this._getDateInCurrentMonth(this._selected);
        }
        /**
         * The minimum selectable date.
         * @return {?}
         */

      }, {
        key: "minDate",
        get: function get() {
          return this._minDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        /**
         * The maximum selectable date.
         * @return {?}
         */

      }, {
        key: "maxDate",
        get: function get() {
          return this._maxDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
      }]);

      return MatMonthView;
    }();

    MatMonthView.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
      args: [{
        selector: 'mat-month-view',
        template: "<table class=\"mat-calendar-table\" role=\"presentation\">\n  <thead class=\"mat-calendar-table-header\">\n    <tr>\n      <th scope=\"col\" *ngFor=\"let day of _weekdays\" [attr.aria-label]=\"day.long\">{{day.narrow}}</th>\n    </tr>\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"7\" aria-hidden=\"true\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]=\"_monthLabel\"\n         [rows]=\"_weeks\"\n         [todayValue]=\"_todayDate!\"\n         [selectedValue]=\"_selectedDate!\"\n         [labelMinRequiredCells]=\"3\"\n         [activeCell]=\"_dateAdapter.getDate(activeDate) - 1\"\n         (selectedValueChange)=\"_dateSelected($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
        exportAs: 'matMonthView',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    MatMonthView.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
        }]
      }, {
        type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }];
    };

    MatMonthView.propDecorators = {
      activeDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      minDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      maxDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      dateFilter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      dateClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      selectedChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      _userSelection: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      activeDateChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      _matCalendarBody: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: [MatCalendarBody]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/datepicker/multi-year-view.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var yearsPerPage = 24;
    /** @type {?} */

    var yearsPerRow = 4;
    /**
     * An internal component used to display a year selector in the datepicker.
     * \@docs-private
     * @template D
     */

    var MatMultiYearView = /*#__PURE__*/function () {
      /**
       * @param {?} _changeDetectorRef
       * @param {?} _dateAdapter
       * @param {?=} _dir
       */
      function MatMultiYearView(_changeDetectorRef, _dateAdapter, _dir) {
        _classCallCheck(this, MatMultiYearView);

        this._changeDetectorRef = _changeDetectorRef;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        /**
         * Emits when a new year is selected.
         */

        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits the selected year. This doesn't imply a change on the selected date
         */

        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when any date is activated.
         */

        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();

        if (!this._dateAdapter) {
          throw createMissingDateImplError('DateAdapter');
        }

        this._activeDate = this._dateAdapter.today();
      }
      /**
       * The date to display in this multi-year view (everything other than the year is ignored).
       * @return {?}
       */


      _createClass(MatMultiYearView, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          var _this10 = this;

          this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(null)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this10._init();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._rerenderSubscription.unsubscribe();
        }
        /**
         * Initializes this multi-year view.
         * @return {?}
         */

      }, {
        key: "_init",
        value: function _init() {
          var _this11 = this;

          this._todayYear = this._dateAdapter.getYear(this._dateAdapter.today()); // We want a range years such that we maximize the number of
          // enabled dates visible at once. This prevents issues where the minimum year
          // is the last item of a page OR the maximum year is the first item of a page.
          // The offset from the active year to the "slot" for the starting year is the
          // *actual* first rendered year in the multi-year view.

          /** @type {?} */

          var activeYear = this._dateAdapter.getYear(this._activeDate);
          /** @type {?} */


          var minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
          this._years = [];

          for (var i = 0, row = []; i < yearsPerPage; i++) {
            row.push(minYearOfPage + i);

            if (row.length == yearsPerRow) {
              this._years.push(row.map(
              /**
              * @param {?} year
              * @return {?}
              */
              function (year) {
                return _this11._createCellForYear(year);
              }));

              row = [];
            }
          }

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Handles when a new year is selected.
         * @param {?} year
         * @return {?}
         */

      }, {
        key: "_yearSelected",
        value: function _yearSelected(year) {
          this.yearSelected.emit(this._dateAdapter.createDate(year, 0, 1));
          /** @type {?} */

          var month = this._dateAdapter.getMonth(this.activeDate);
          /** @type {?} */


          var daysInMonth = this._dateAdapter.getNumDaysInMonth(this._dateAdapter.createDate(year, month, 1));

          this.selectedChange.emit(this._dateAdapter.createDate(year, month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
        }
        /**
         * Handles keydown events on the calendar body when calendar is in multi-year view.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleCalendarBodyKeydown",
        value: function _handleCalendarBodyKeydown(event) {
          /** @type {?} */
          var oldActiveDate = this._activeDate;
          /** @type {?} */

          var isRtl = this._isRtl();

          switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["LEFT_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? 1 : -1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["RIGHT_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, isRtl ? -1 : 1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -yearsPerRow);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerRow);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, -getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate));
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["END"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, yearsPerPage - getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate) - 1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_UP"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -yearsPerPage * 10 : -yearsPerPage);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_DOWN"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? yearsPerPage * 10 : yearsPerPage);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]:
              this._yearSelected(this._dateAdapter.getYear(this._activeDate));

              break;

            default:
              // Don't prevent default or focus active cell on keys that we don't explicitly handle.
              return;
          }

          if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
          }

          this._focusActiveCell(); // Prevent unexpected default actions such as form submission.


          event.preventDefault();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_getActiveCell",
        value: function _getActiveCell() {
          return getActiveOffset(this._dateAdapter, this.activeDate, this.minDate, this.maxDate);
        }
        /**
         * Focuses the active cell after the microtask queue is empty.
         * @return {?}
         */

      }, {
        key: "_focusActiveCell",
        value: function _focusActiveCell() {
          this._matCalendarBody._focusActiveCell();
        }
        /**
         * Creates an MatCalendarCell for the given year.
         * @private
         * @param {?} year
         * @return {?}
         */

      }, {
        key: "_createCellForYear",
        value: function _createCellForYear(year) {
          /** @type {?} */
          var yearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(year, 0, 1));

          return new MatCalendarCell(year, yearName, yearName, this._shouldEnableYear(year));
        }
        /**
         * Whether the given year is enabled.
         * @private
         * @param {?} year
         * @return {?}
         */

      }, {
        key: "_shouldEnableYear",
        value: function _shouldEnableYear(year) {
          // disable if the year is greater than maxDate lower than minDate
          if (year === undefined || year === null || this.maxDate && year > this._dateAdapter.getYear(this.maxDate) || this.minDate && year < this._dateAdapter.getYear(this.minDate)) {
            return false;
          } // enable if it reaches here and there's no filter defined


          if (!this.dateFilter) {
            return true;
          }
          /** @type {?} */


          var firstOfYear = this._dateAdapter.createDate(year, 0, 1); // If any date in the year is enabled count the year as enabled.


          for (var date = firstOfYear; this._dateAdapter.getYear(date) == year; date = this._dateAdapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
              return true;
            }
          }

          return false;
        }
        /**
         * @private
         * @param {?} obj The object to check.
         * @return {?} The given object if it is both a date instance and valid, otherwise null.
         */

      }, {
        key: "_getValidDateOrNull",
        value: function _getValidDateOrNull(obj) {
          return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
        }
        /**
         * Determines whether the user has the RTL layout direction.
         * @private
         * @return {?}
         */

      }, {
        key: "_isRtl",
        value: function _isRtl() {
          return this._dir && this._dir.value === 'rtl';
        }
      }, {
        key: "activeDate",
        get: function get() {
          return this._activeDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var oldActiveDate = this._activeDate;
          /** @type {?} */

          var validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();

          this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);

          if (!isSameMultiYearView(this._dateAdapter, oldActiveDate, this._activeDate, this.minDate, this.maxDate)) {
            this._init();
          }
        }
        /**
         * The currently selected date.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          return this._selected;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
          this._selectedYear = this._selected && this._dateAdapter.getYear(this._selected);
        }
        /**
         * The minimum selectable date.
         * @return {?}
         */

      }, {
        key: "minDate",
        get: function get() {
          return this._minDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        /**
         * The maximum selectable date.
         * @return {?}
         */

      }, {
        key: "maxDate",
        get: function get() {
          return this._maxDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
      }]);

      return MatMultiYearView;
    }();

    MatMultiYearView.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
      args: [{
        selector: 'mat-multi-year-view',
        template: "<table class=\"mat-calendar-table\" role=\"presentation\">\n  <thead class=\"mat-calendar-table-header\">\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [rows]=\"_years\"\n         [todayValue]=\"_todayYear\"\n         [selectedValue]=\"_selectedYear!\"\n         [numCols]=\"4\"\n         [cellAspectRatio]=\"4 / 7\"\n         [activeCell]=\"_getActiveCell()\"\n         (selectedValueChange)=\"_yearSelected($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
        exportAs: 'matMultiYearView',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    MatMultiYearView.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }];
    };

    MatMultiYearView.propDecorators = {
      activeDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      minDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      maxDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      dateFilter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      selectedChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      yearSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      activeDateChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      _matCalendarBody: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: [MatCalendarBody]
      }]
    };

    if (false) {}
    /**
     * @template D
     * @param {?} dateAdapter
     * @param {?} date1
     * @param {?} date2
     * @param {?} minDate
     * @param {?} maxDate
     * @return {?}
     */


    function isSameMultiYearView(dateAdapter, date1, date2, minDate, maxDate) {
      /** @type {?} */
      var year1 = dateAdapter.getYear(date1);
      /** @type {?} */

      var year2 = dateAdapter.getYear(date2);
      /** @type {?} */

      var startingYear = getStartingYear(dateAdapter, minDate, maxDate);
      return Math.floor((year1 - startingYear) / yearsPerPage) === Math.floor((year2 - startingYear) / yearsPerPage);
    }
    /**
     * When the multi-year view is first opened, the active year will be in view.
     * So we compute how many years are between the active year and the *slot* where our
     * "startingYear" will render when paged into view.
     * @template D
     * @param {?} dateAdapter
     * @param {?} activeDate
     * @param {?} minDate
     * @param {?} maxDate
     * @return {?}
     */


    function getActiveOffset(dateAdapter, activeDate, minDate, maxDate) {
      /** @type {?} */
      var activeYear = dateAdapter.getYear(activeDate);
      return euclideanModulo(activeYear - getStartingYear(dateAdapter, minDate, maxDate), yearsPerPage);
    }
    /**
     * We pick a "starting" year such that either the maximum year would be at the end
     * or the minimum year would be at the beginning of a page.
     * @template D
     * @param {?} dateAdapter
     * @param {?} minDate
     * @param {?} maxDate
     * @return {?}
     */


    function getStartingYear(dateAdapter, minDate, maxDate) {
      /** @type {?} */
      var startingYear = 0;

      if (maxDate) {
        /** @type {?} */
        var maxYear = dateAdapter.getYear(maxDate);
        startingYear = maxYear - yearsPerPage + 1;
      } else if (minDate) {
        startingYear = dateAdapter.getYear(minDate);
      }

      return startingYear;
    }
    /**
     * Gets remainder that is non-negative, even if first number is negative
     * @param {?} a
     * @param {?} b
     * @return {?}
     */


    function euclideanModulo(a, b) {
      return (a % b + b) % b;
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/datepicker/year-view.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * An internal component used to display a single year in the datepicker.
     * \@docs-private
     * @template D
     */


    var MatYearView = /*#__PURE__*/function () {
      /**
       * @param {?} _changeDetectorRef
       * @param {?} _dateFormats
       * @param {?} _dateAdapter
       * @param {?=} _dir
       */
      function MatYearView(_changeDetectorRef, _dateFormats, _dateAdapter, _dir) {
        _classCallCheck(this, MatYearView);

        this._changeDetectorRef = _changeDetectorRef;
        this._dateFormats = _dateFormats;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._rerenderSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        /**
         * Emits when a new month is selected.
         */

        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits the selected month. This doesn't imply a change on the selected date
         */

        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when any date is activated.
         */

        this.activeDateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();

        if (!this._dateAdapter) {
          throw createMissingDateImplError('DateAdapter');
        }

        if (!this._dateFormats) {
          throw createMissingDateImplError('MAT_DATE_FORMATS');
        }

        this._activeDate = this._dateAdapter.today();
      }
      /**
       * The date to display in this year view (everything other than the year is ignored).
       * @return {?}
       */


      _createClass(MatYearView, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          var _this12 = this;

          this._rerenderSubscription = this._dateAdapter.localeChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["startWith"])(null)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this12._init();
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._rerenderSubscription.unsubscribe();
        }
        /**
         * Handles when a new month is selected.
         * @param {?} month
         * @return {?}
         */

      }, {
        key: "_monthSelected",
        value: function _monthSelected(month) {
          /** @type {?} */
          var normalizedDate = this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1);

          this.monthSelected.emit(normalizedDate);
          /** @type {?} */

          var daysInMonth = this._dateAdapter.getNumDaysInMonth(normalizedDate);

          this.selectedChange.emit(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, Math.min(this._dateAdapter.getDate(this.activeDate), daysInMonth)));
        }
        /**
         * Handles keydown events on the calendar body when calendar is in year view.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_handleCalendarBodyKeydown",
        value: function _handleCalendarBodyKeydown(event) {
          // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
          // disabled ones from being selected. This may not be ideal, we should look into whether
          // navigation should skip over disabled dates, and if so, how to implement that efficiently.
          // TODO(mmalerba): We currently allow keyboard navigation to disabled dates, but just prevent
          // disabled ones from being selected. This may not be ideal, we should look into whether
          // navigation should skip over disabled dates, and if so, how to implement that efficiently.

          /** @type {?} */
          var oldActiveDate = this._activeDate;
          /** @type {?} */

          var isRtl = this._isRtl();

          switch (event.keyCode) {
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["LEFT_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? 1 : -1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["RIGHT_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, isRtl ? -1 : 1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -4);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"]:
              this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 4);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["HOME"]:
              this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, -this._dateAdapter.getMonth(this._activeDate));
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["END"]:
              this.activeDate = this._dateAdapter.addCalendarMonths(this._activeDate, 11 - this._dateAdapter.getMonth(this._activeDate));
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_UP"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? -10 : -1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["PAGE_DOWN"]:
              this.activeDate = this._dateAdapter.addCalendarYears(this._activeDate, event.altKey ? 10 : 1);
              break;

            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ENTER"]:
            case _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["SPACE"]:
              this._monthSelected(this._dateAdapter.getMonth(this._activeDate));

              break;

            default:
              // Don't prevent default or focus active cell on keys that we don't explicitly handle.
              return;
          }

          if (this._dateAdapter.compareDate(oldActiveDate, this.activeDate)) {
            this.activeDateChange.emit(this.activeDate);
          }

          this._focusActiveCell(); // Prevent unexpected default actions such as form submission.


          event.preventDefault();
        }
        /**
         * Initializes this year view.
         * @return {?}
         */

      }, {
        key: "_init",
        value: function _init() {
          var _this13 = this;

          this._selectedMonth = this._getMonthInCurrentYear(this.selected);
          this._todayMonth = this._getMonthInCurrentYear(this._dateAdapter.today());
          this._yearLabel = this._dateAdapter.getYearName(this.activeDate);
          /** @type {?} */

          var monthNames = this._dateAdapter.getMonthNames('short'); // First row of months only contains 5 elements so we can fit the year label on the same row.


          this._months = [[0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11]].map(
          /**
          * @param {?} row
          * @return {?}
          */
          function (row) {
            return row.map(
            /**
            * @param {?} month
            * @return {?}
            */
            function (month) {
              return _this13._createCellForMonth(month, monthNames[month]);
            });
          });

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Focuses the active cell after the microtask queue is empty.
         * @return {?}
         */

      }, {
        key: "_focusActiveCell",
        value: function _focusActiveCell() {
          this._matCalendarBody._focusActiveCell();
        }
        /**
         * Gets the month in this year that the given Date falls on.
         * Returns null if the given Date is in another year.
         * @private
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "_getMonthInCurrentYear",
        value: function _getMonthInCurrentYear(date) {
          return date && this._dateAdapter.getYear(date) == this._dateAdapter.getYear(this.activeDate) ? this._dateAdapter.getMonth(date) : null;
        }
        /**
         * Creates an MatCalendarCell for the given month.
         * @private
         * @param {?} month
         * @param {?} monthName
         * @return {?}
         */

      }, {
        key: "_createCellForMonth",
        value: function _createCellForMonth(month, monthName) {
          /** @type {?} */
          var ariaLabel = this._dateAdapter.format(this._dateAdapter.createDate(this._dateAdapter.getYear(this.activeDate), month, 1), this._dateFormats.display.monthYearA11yLabel);

          return new MatCalendarCell(month, monthName.toLocaleUpperCase(), ariaLabel, this._shouldEnableMonth(month));
        }
        /**
         * Whether the given month is enabled.
         * @private
         * @param {?} month
         * @return {?}
         */

      }, {
        key: "_shouldEnableMonth",
        value: function _shouldEnableMonth(month) {
          /** @type {?} */
          var activeYear = this._dateAdapter.getYear(this.activeDate);

          if (month === undefined || month === null || this._isYearAndMonthAfterMaxDate(activeYear, month) || this._isYearAndMonthBeforeMinDate(activeYear, month)) {
            return false;
          }

          if (!this.dateFilter) {
            return true;
          }
          /** @type {?} */


          var firstOfMonth = this._dateAdapter.createDate(activeYear, month, 1); // If any date in the month is enabled count the month as enabled.


          for (var date = firstOfMonth; this._dateAdapter.getMonth(date) == month; date = this._dateAdapter.addCalendarDays(date, 1)) {
            if (this.dateFilter(date)) {
              return true;
            }
          }

          return false;
        }
        /**
         * Tests whether the combination month/year is after this.maxDate, considering
         * just the month and year of this.maxDate
         * @private
         * @param {?} year
         * @param {?} month
         * @return {?}
         */

      }, {
        key: "_isYearAndMonthAfterMaxDate",
        value: function _isYearAndMonthAfterMaxDate(year, month) {
          if (this.maxDate) {
            /** @type {?} */
            var maxYear = this._dateAdapter.getYear(this.maxDate);
            /** @type {?} */


            var maxMonth = this._dateAdapter.getMonth(this.maxDate);

            return year > maxYear || year === maxYear && month > maxMonth;
          }

          return false;
        }
        /**
         * Tests whether the combination month/year is before this.minDate, considering
         * just the month and year of this.minDate
         * @private
         * @param {?} year
         * @param {?} month
         * @return {?}
         */

      }, {
        key: "_isYearAndMonthBeforeMinDate",
        value: function _isYearAndMonthBeforeMinDate(year, month) {
          if (this.minDate) {
            /** @type {?} */
            var minYear = this._dateAdapter.getYear(this.minDate);
            /** @type {?} */


            var minMonth = this._dateAdapter.getMonth(this.minDate);

            return year < minYear || year === minYear && month < minMonth;
          }

          return false;
        }
        /**
         * @private
         * @param {?} obj The object to check.
         * @return {?} The given object if it is both a date instance and valid, otherwise null.
         */

      }, {
        key: "_getValidDateOrNull",
        value: function _getValidDateOrNull(obj) {
          return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
        }
        /**
         * Determines whether the user has the RTL layout direction.
         * @private
         * @return {?}
         */

      }, {
        key: "_isRtl",
        value: function _isRtl() {
          return this._dir && this._dir.value === 'rtl';
        }
      }, {
        key: "activeDate",
        get: function get() {
          return this._activeDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var oldActiveDate = this._activeDate;
          /** @type {?} */

          var validDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value)) || this._dateAdapter.today();

          this._activeDate = this._dateAdapter.clampDate(validDate, this.minDate, this.maxDate);

          if (this._dateAdapter.getYear(oldActiveDate) !== this._dateAdapter.getYear(this._activeDate)) {
            this._init();
          }
        }
        /**
         * The currently selected date.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          return this._selected;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
          this._selectedMonth = this._getMonthInCurrentYear(this._selected);
        }
        /**
         * The minimum selectable date.
         * @return {?}
         */

      }, {
        key: "minDate",
        get: function get() {
          return this._minDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        /**
         * The maximum selectable date.
         * @return {?}
         */

      }, {
        key: "maxDate",
        get: function get() {
          return this._maxDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
      }]);

      return MatYearView;
    }();

    MatYearView.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
      args: [{
        selector: 'mat-year-view',
        template: "<table class=\"mat-calendar-table\" role=\"presentation\">\n  <thead class=\"mat-calendar-table-header\">\n    <tr><th class=\"mat-calendar-table-header-divider\" colspan=\"4\"></th></tr>\n  </thead>\n  <tbody mat-calendar-body\n         [label]=\"_yearLabel\"\n         [rows]=\"_months\"\n         [todayValue]=\"_todayMonth!\"\n         [selectedValue]=\"_selectedMonth!\"\n         [labelMinRequiredCells]=\"2\"\n         [numCols]=\"4\"\n         [cellAspectRatio]=\"4 / 7\"\n         [activeCell]=\"_dateAdapter.getMonth(activeDate)\"\n         (selectedValueChange)=\"_monthSelected($event)\"\n         (keydown)=\"_handleCalendarBodyKeydown($event)\">\n  </tbody>\n</table>\n",
        exportAs: 'matYearView',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    MatYearView.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
        }]
      }, {
        type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }];
    };

    MatYearView.propDecorators = {
      activeDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      minDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      maxDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      dateFilter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      selectedChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      monthSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      activeDateChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      _matCalendarBody: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: [MatCalendarBody]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/datepicker/calendar.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Default header for MatCalendar
     * @template D
     */


    var MatCalendarHeader = /*#__PURE__*/function () {
      /**
       * @param {?} _intl
       * @param {?} calendar
       * @param {?} _dateAdapter
       * @param {?} _dateFormats
       * @param {?} changeDetectorRef
       */
      function MatCalendarHeader(_intl, calendar, _dateAdapter, _dateFormats, changeDetectorRef) {
        _classCallCheck(this, MatCalendarHeader);

        this._intl = _intl;
        this.calendar = calendar;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this.calendar.stateChanges.subscribe(
        /**
        * @return {?}
        */
        function () {
          return changeDetectorRef.markForCheck();
        });
      }
      /**
       * The label for the current calendar view.
       * @return {?}
       */


      _createClass(MatCalendarHeader, [{
        key: "currentPeriodClicked",

        /**
         * Handles user clicks on the period label.
         * @return {?}
         */
        value: function currentPeriodClicked() {
          this.calendar.currentView = this.calendar.currentView == 'month' ? 'multi-year' : 'month';
        }
        /**
         * Handles user clicks on the previous button.
         * @return {?}
         */

      }, {
        key: "previousClicked",
        value: function previousClicked() {
          this.calendar.activeDate = this.calendar.currentView == 'month' ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, -1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? -1 : -yearsPerPage);
        }
        /**
         * Handles user clicks on the next button.
         * @return {?}
         */

      }, {
        key: "nextClicked",
        value: function nextClicked() {
          this.calendar.activeDate = this.calendar.currentView == 'month' ? this._dateAdapter.addCalendarMonths(this.calendar.activeDate, 1) : this._dateAdapter.addCalendarYears(this.calendar.activeDate, this.calendar.currentView == 'year' ? 1 : yearsPerPage);
        }
        /**
         * Whether the previous period button is enabled.
         * @return {?}
         */

      }, {
        key: "previousEnabled",
        value: function previousEnabled() {
          if (!this.calendar.minDate) {
            return true;
          }

          return !this.calendar.minDate || !this._isSameView(this.calendar.activeDate, this.calendar.minDate);
        }
        /**
         * Whether the next period button is enabled.
         * @return {?}
         */

      }, {
        key: "nextEnabled",
        value: function nextEnabled() {
          return !this.calendar.maxDate || !this._isSameView(this.calendar.activeDate, this.calendar.maxDate);
        }
        /**
         * Whether the two dates represent the same view in the current view mode (month or year).
         * @private
         * @param {?} date1
         * @param {?} date2
         * @return {?}
         */

      }, {
        key: "_isSameView",
        value: function _isSameView(date1, date2) {
          if (this.calendar.currentView == 'month') {
            return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2) && this._dateAdapter.getMonth(date1) == this._dateAdapter.getMonth(date2);
          }

          if (this.calendar.currentView == 'year') {
            return this._dateAdapter.getYear(date1) == this._dateAdapter.getYear(date2);
          } // Otherwise we are in 'multi-year' view.


          return isSameMultiYearView(this._dateAdapter, date1, date2, this.calendar.minDate, this.calendar.maxDate);
        }
      }, {
        key: "periodButtonText",
        get: function get() {
          if (this.calendar.currentView == 'month') {
            return this._dateAdapter.format(this.calendar.activeDate, this._dateFormats.display.monthYearLabel).toLocaleUpperCase();
          }

          if (this.calendar.currentView == 'year') {
            return this._dateAdapter.getYearName(this.calendar.activeDate);
          } // The offset from the active year to the "slot" for the starting year is the
          // *actual* first rendered year in the multi-year view, and the last year is
          // just yearsPerPage - 1 away.

          /** @type {?} */


          var activeYear = this._dateAdapter.getYear(this.calendar.activeDate);
          /** @type {?} */


          var minYearOfPage = activeYear - getActiveOffset(this._dateAdapter, this.calendar.activeDate, this.calendar.minDate, this.calendar.maxDate);
          /** @type {?} */

          var maxYearOfPage = minYearOfPage + yearsPerPage - 1;
          /** @type {?} */

          var minYearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(minYearOfPage, 0, 1));
          /** @type {?} */


          var maxYearName = this._dateAdapter.getYearName(this._dateAdapter.createDate(maxYearOfPage, 0, 1));

          return this._intl.formatYearRange(minYearName, maxYearName);
        }
        /**
         * @return {?}
         */

      }, {
        key: "periodButtonLabel",
        get: function get() {
          return this.calendar.currentView == 'month' ? this._intl.switchToMultiYearViewLabel : this._intl.switchToMonthViewLabel;
        }
        /**
         * The label for the previous button.
         * @return {?}
         */

      }, {
        key: "prevButtonLabel",
        get: function get() {
          return {
            'month': this._intl.prevMonthLabel,
            'year': this._intl.prevYearLabel,
            'multi-year': this._intl.prevMultiYearLabel
          }[this.calendar.currentView];
        }
        /**
         * The label for the next button.
         * @return {?}
         */

      }, {
        key: "nextButtonLabel",
        get: function get() {
          return {
            'month': this._intl.nextMonthLabel,
            'year': this._intl.nextYearLabel,
            'multi-year': this._intl.nextMultiYearLabel
          }[this.calendar.currentView];
        }
      }]);

      return MatCalendarHeader;
    }();

    MatCalendarHeader.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
      args: [{
        selector: 'mat-calendar-header',
        template: "<div class=\"mat-calendar-header\">\n  <div class=\"mat-calendar-controls\">\n    <button mat-button type=\"button\" class=\"mat-calendar-period-button\"\n            (click)=\"currentPeriodClicked()\" [attr.aria-label]=\"periodButtonLabel\"\n            cdkAriaLive=\"polite\">\n      {{periodButtonText}}\n      <div class=\"mat-calendar-arrow\"\n           [class.mat-calendar-invert]=\"calendar.currentView != 'month'\"></div>\n    </button>\n\n    <div class=\"mat-calendar-spacer\"></div>\n\n    <ng-content></ng-content>\n\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-previous-button\"\n            [disabled]=\"!previousEnabled()\" (click)=\"previousClicked()\"\n            [attr.aria-label]=\"prevButtonLabel\">\n    </button>\n\n    <button mat-icon-button type=\"button\" class=\"mat-calendar-next-button\"\n            [disabled]=\"!nextEnabled()\" (click)=\"nextClicked()\"\n            [attr.aria-label]=\"nextButtonLabel\">\n    </button>\n  </div>\n</div>\n",
        exportAs: 'matCalendarHeader',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush
      }]
    }];
    /** @nocollapse */

    MatCalendarHeader.ctorParameters = function () {
      return [{
        type: MatDatepickerIntl
      }, {
        type: MatCalendar,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(
          /**
          * @return {?}
          */
          function () {
            return MatCalendar;
          })]
        }]
      }, {
        type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }];
    };

    if (false) {}
    /**
     * A calendar that is used as part of the datepicker.
     * \@docs-private
     * @template D
     */


    var MatCalendar = /*#__PURE__*/function () {
      /**
       * @param {?} _intl
       * @param {?} _dateAdapter
       * @param {?} _dateFormats
       * @param {?} _changeDetectorRef
       */
      function MatCalendar(_intl, _dateAdapter, _dateFormats, _changeDetectorRef) {
        var _this14 = this;

        _classCallCheck(this, MatCalendar);

        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._changeDetectorRef = _changeDetectorRef;
        /**
         * Used for scheduling that focus should be moved to the active cell on the next tick.
         * We need to schedule it, rather than do it immediately, because we have to wait
         * for Angular to re-evaluate the view children.
         */

        this._moveFocusOnNextTick = false;
        /**
         * Whether the calendar should be started in month or year view.
         */

        this.startView = 'month';
        /**
         * Emits when the currently selected date changes.
         */

        this.selectedChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits the year chosen in multiyear view.
         * This doesn't imply a change on the selected date.
         */

        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits the month chosen in year view.
         * This doesn't imply a change on the selected date.
         */

        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when any date is selected.
         */

        this._userSelection = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits whenever there is a state change that the header may need to respond to.
         */

        this.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();

        if (!this._dateAdapter) {
          throw createMissingDateImplError('DateAdapter');
        }

        if (!this._dateFormats) {
          throw createMissingDateImplError('MAT_DATE_FORMATS');
        }

        this._intlChanges = _intl.changes.subscribe(
        /**
        * @return {?}
        */
        function () {
          _changeDetectorRef.markForCheck();

          _this14.stateChanges.next();
        });
      }
      /**
       * A date representing the period (month or year) to start the calendar in.
       * @return {?}
       */


      _createClass(MatCalendar, [{
        key: "ngAfterContentInit",

        /**
         * @return {?}
         */
        value: function ngAfterContentInit() {
          this._calendarHeaderPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](this.headerComponent || MatCalendarHeader);
          this.activeDate = this.startAt || this._dateAdapter.today(); // Assign to the private property since we don't want to move focus on init.

          this._currentView = this.startView;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          if (this._moveFocusOnNextTick) {
            this._moveFocusOnNextTick = false;
            this.focusActiveCell();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._intlChanges.unsubscribe();

          this.stateChanges.complete();
        }
        /**
         * @param {?} changes
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          /** @type {?} */
          var change = changes['minDate'] || changes['maxDate'] || changes['dateFilter'];

          if (change && !change.firstChange) {
            /** @type {?} */
            var view = this._getCurrentViewComponent();

            if (view) {
              // We need to `detectChanges` manually here, because the `minDate`, `maxDate` etc. are
              // passed down to the view via data bindings which won't be up-to-date when we call `_init`.
              this._changeDetectorRef.detectChanges();

              view._init();
            }
          }

          this.stateChanges.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "focusActiveCell",
        value: function focusActiveCell() {
          this._getCurrentViewComponent()._focusActiveCell();
        }
        /**
         * Updates today's date after an update of the active date
         * @return {?}
         */

      }, {
        key: "updateTodaysDate",
        value: function updateTodaysDate() {
          /** @type {?} */
          var currentView = this.currentView;
          /** @type {?} */

          var view;

          if (currentView === 'month') {
            view = this.monthView;
          } else if (currentView === 'year') {
            view = this.yearView;
          } else {
            view = this.multiYearView;
          }

          view._init();
        }
        /**
         * Handles date selection in the month view.
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "_dateSelected",
        value: function _dateSelected(date) {
          if (date && !this._dateAdapter.sameDate(date, this.selected)) {
            this.selectedChange.emit(date);
          }
        }
        /**
         * Handles year selection in the multiyear view.
         * @param {?} normalizedYear
         * @return {?}
         */

      }, {
        key: "_yearSelectedInMultiYearView",
        value: function _yearSelectedInMultiYearView(normalizedYear) {
          this.yearSelected.emit(normalizedYear);
        }
        /**
         * Handles month selection in the year view.
         * @param {?} normalizedMonth
         * @return {?}
         */

      }, {
        key: "_monthSelectedInYearView",
        value: function _monthSelectedInYearView(normalizedMonth) {
          this.monthSelected.emit(normalizedMonth);
        }
        /**
         * @return {?}
         */

      }, {
        key: "_userSelected",
        value: function _userSelected() {
          this._userSelection.emit();
        }
        /**
         * Handles year/month selection in the multi-year/year views.
         * @param {?} date
         * @param {?} view
         * @return {?}
         */

      }, {
        key: "_goToDateInView",
        value: function _goToDateInView(date, view) {
          this.activeDate = date;
          this.currentView = view;
        }
        /**
         * @private
         * @param {?} obj The object to check.
         * @return {?} The given object if it is both a date instance and valid, otherwise null.
         */

      }, {
        key: "_getValidDateOrNull",
        value: function _getValidDateOrNull(obj) {
          return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
        }
        /**
         * Returns the component instance that corresponds to the current calendar view.
         * @private
         * @return {?}
         */

      }, {
        key: "_getCurrentViewComponent",
        value: function _getCurrentViewComponent() {
          return this.monthView || this.yearView || this.multiYearView;
        }
      }, {
        key: "startAt",
        get: function get() {
          return this._startAt;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._startAt = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        /**
         * The currently selected date.
         * @return {?}
         */

      }, {
        key: "selected",
        get: function get() {
          return this._selected;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._selected = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        /**
         * The minimum selectable date.
         * @return {?}
         */

      }, {
        key: "minDate",
        get: function get() {
          return this._minDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._minDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        /**
         * The maximum selectable date.
         * @return {?}
         */

      }, {
        key: "maxDate",
        get: function get() {
          return this._maxDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._maxDate = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        /**
         * The current active date. This determines which time period is shown and which date is
         * highlighted when using keyboard navigation.
         * @return {?}
         */

      }, {
        key: "activeDate",
        get: function get() {
          return this._clampedActiveDate;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._clampedActiveDate = this._dateAdapter.clampDate(value, this.minDate, this.maxDate);
          this.stateChanges.next();

          this._changeDetectorRef.markForCheck();
        }
        /**
         * Whether the calendar is in month view.
         * @return {?}
         */

      }, {
        key: "currentView",
        get: function get() {
          return this._currentView;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._currentView = value;
          this._moveFocusOnNextTick = true;

          this._changeDetectorRef.markForCheck();
        }
      }]);

      return MatCalendar;
    }();

    MatCalendar.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
      args: [{
        selector: 'mat-calendar',
        template: "\n<ng-template [cdkPortalOutlet]=\"_calendarHeaderPortal\"></ng-template>\n\n<div class=\"mat-calendar-content\" [ngSwitch]=\"currentView\" cdkMonitorSubtreeFocus tabindex=\"-1\">\n  <mat-month-view\n      *ngSwitchCase=\"'month'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      [dateClass]=\"dateClass\"\n      (selectedChange)=\"_dateSelected($event)\"\n      (_userSelection)=\"_userSelected()\">\n  </mat-month-view>\n\n  <mat-year-view\n      *ngSwitchCase=\"'year'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      (monthSelected)=\"_monthSelectedInYearView($event)\"\n      (selectedChange)=\"_goToDateInView($event, 'month')\">\n  </mat-year-view>\n\n  <mat-multi-year-view\n      *ngSwitchCase=\"'multi-year'\"\n      [(activeDate)]=\"activeDate\"\n      [selected]=\"selected\"\n      [dateFilter]=\"dateFilter\"\n      [maxDate]=\"maxDate\"\n      [minDate]=\"minDate\"\n      (yearSelected)=\"_yearSelectedInMultiYearView($event)\"\n      (selectedChange)=\"_goToDateInView($event, 'year')\">\n  </mat-multi-year-view>\n</div>\n",
        host: {
          'class': 'mat-calendar'
        },
        exportAs: 'matCalendar',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
        styles: [".mat-calendar{display:block}.mat-calendar-header{padding:8px 8px 0 8px}.mat-calendar-content{padding:0 8px 8px 8px;outline:none}.mat-calendar-controls{display:flex;margin:5% calc(33% / 7 - 16px)}.mat-calendar-controls .mat-icon-button:hover .mat-button-focus-overlay{opacity:.04}.mat-calendar-spacer{flex:1 1 auto}.mat-calendar-period-button{min-width:0}.mat-calendar-arrow{display:inline-block;width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top-width:5px;border-top-style:solid;margin:0 0 0 5px;vertical-align:middle}.mat-calendar-arrow.mat-calendar-invert{transform:rotate(180deg)}[dir=rtl] .mat-calendar-arrow{margin:0 5px 0 0}.mat-calendar-previous-button,.mat-calendar-next-button{position:relative}.mat-calendar-previous-button::after,.mat-calendar-next-button::after{top:0;left:0;right:0;bottom:0;position:absolute;content:\"\";margin:15.5px;border:0 solid currentColor;border-top-width:2px}[dir=rtl] .mat-calendar-previous-button,[dir=rtl] .mat-calendar-next-button{transform:rotate(180deg)}.mat-calendar-previous-button::after{border-left-width:2px;transform:translateX(2px) rotate(-45deg)}.mat-calendar-next-button::after{border-right-width:2px;transform:translateX(-2px) rotate(45deg)}.mat-calendar-table{border-spacing:0;border-collapse:collapse;width:100%}.mat-calendar-table-header th{text-align:center;padding:0 0 8px 0}.mat-calendar-table-header-divider{position:relative;height:1px}.mat-calendar-table-header-divider::after{content:\"\";position:absolute;top:0;left:-8px;right:-8px;height:1px}\n"]
      }]
    }];
    /** @nocollapse */

    MatCalendar.ctorParameters = function () {
      return [{
        type: MatDatepickerIntl
      }, {
        type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
        }]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }];
    };

    MatCalendar.propDecorators = {
      headerComponent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      startAt: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      startView: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      selected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      minDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      maxDate: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      dateFilter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      dateClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      selectedChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      yearSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      monthSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      _userSelection: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      monthView: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: [MatMonthView]
      }],
      yearView: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: [MatYearView]
      }],
      multiYearView: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: [MatMultiYearView]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/datepicker/datepicker-animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by the Material datepicker.
     * \@docs-private
     * @type {?}
     */


    var matDatepickerAnimations = {
      /**
       * Transforms the height of the datepicker's calendar.
       */
      transformPanel: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('transformPanel', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
        opacity: 0,
        transform: 'scale(1, 0.8)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('void => enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('120ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
        opacity: 1,
        transform: 'scale(1, 1)'
      }))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('100ms linear', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
        opacity: 0
      })))]),

      /**
       * Fades in the content of the calendar.
       */
      fadeInCalendar: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('fadeInCalendar', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('void', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
        opacity: 1
      })), // TODO(crisbeto): this animation should be removed since it isn't quite on spec, but we
      // need to keep it until #12440 gets in, otherwise the exit animation will look glitchy.
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('void => *', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('120ms 100ms cubic-bezier(0.55, 0, 0.55, 0.2)'))])
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/datepicker/datepicker.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Used to generate a unique ID for each datepicker instance.
     * @type {?}
     */

    var datepickerUid = 0;
    /**
     * Injection token that determines the scroll handling while the calendar is open.
     * @type {?}
     */

    var MAT_DATEPICKER_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["InjectionToken"]('mat-datepicker-scroll-strategy');
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */

    function MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.reposition();
        }
      );
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER = {
      provide: MAT_DATEPICKER_SCROLL_STRATEGY,
      deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]],
      useFactory: MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY
    }; // Boilerplate for applying mixins to MatDatepickerContent.

    /**
     * \@docs-private
     */

    var MatDatepickerContentBase =
    /**
     * @param {?} _elementRef
     */
    function MatDatepickerContentBase(_elementRef) {
      _classCallCheck(this, MatDatepickerContentBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /** @type {?} */


    var _MatDatepickerContentMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["mixinColor"])(MatDatepickerContentBase);
    /**
     * Component used as the content for the datepicker dialog and popup. We use this instead of using
     * MatCalendar directly as the content so we can control the initial focus. This also gives us a
     * place to put additional features of the popup that are not part of the calendar itself in the
     * future. (e.g. confirmation buttons).
     * \@docs-private
     * @template D
     */


    var MatDatepickerContent = /*#__PURE__*/function (_MatDatepickerContent) {
      _inherits(MatDatepickerContent, _MatDatepickerContent);

      var _super2 = _createSuper(MatDatepickerContent);

      /**
       * @param {?} elementRef
       * @param {?=} _changeDetectorRef
       */
      function MatDatepickerContent(elementRef, _changeDetectorRef) {
        var _this15;

        _classCallCheck(this, MatDatepickerContent);

        _this15 = _super2.call(this, elementRef);
        _this15._changeDetectorRef = _changeDetectorRef;
        /**
         * Current state of the animation.
         */

        _this15._animationState = 'enter';
        /**
         * Emits when an animation has finished.
         */

        _this15._animationDone = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        return _this15;
      }
      /**
       * @return {?}
       */


      _createClass(MatDatepickerContent, [{
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this._calendar.focusActiveCell();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._animationDone.complete();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_startExitAnimation",
        value: function _startExitAnimation() {
          this._animationState = 'void'; // @breaking-change 11.0.0 Remove null check for `_changeDetectorRef`.

          if (this._changeDetectorRef) {
            this._changeDetectorRef.markForCheck();
          }
        }
      }]);

      return MatDatepickerContent;
    }(_MatDatepickerContentMixinBase);

    MatDatepickerContent.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
      args: [{
        selector: 'mat-datepicker-content',
        template: "<mat-calendar cdkTrapFocus\n    [id]=\"datepicker.id\"\n    [ngClass]=\"datepicker.panelClass\"\n    [startAt]=\"datepicker.startAt\"\n    [startView]=\"datepicker.startView\"\n    [minDate]=\"datepicker._minDate\"\n    [maxDate]=\"datepicker._maxDate\"\n    [dateFilter]=\"datepicker._dateFilter\"\n    [headerComponent]=\"datepicker.calendarHeaderComponent\"\n    [selected]=\"datepicker._selected\"\n    [dateClass]=\"datepicker.dateClass\"\n    [@fadeInCalendar]=\"'enter'\"\n    (selectedChange)=\"datepicker.select($event)\"\n    (yearSelected)=\"datepicker._selectYear($event)\"\n    (monthSelected)=\"datepicker._selectMonth($event)\"\n    (_userSelection)=\"datepicker.close()\">\n</mat-calendar>\n",
        host: {
          'class': 'mat-datepicker-content',
          '[@transformPanel]': '_animationState',
          '(@transformPanel.done)': '_animationDone.next()',
          '[class.mat-datepicker-content-touch]': 'datepicker.touchUi'
        },
        animations: [matDatepickerAnimations.transformPanel, matDatepickerAnimations.fadeInCalendar],
        exportAs: 'matDatepickerContent',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
        inputs: ['color'],
        styles: [".mat-datepicker-content{display:block;border-radius:4px}.mat-datepicker-content .mat-calendar{width:296px;height:354px}.mat-datepicker-content-touch{display:block;max-height:80vh;overflow:auto;margin:-24px}.mat-datepicker-content-touch .mat-calendar{min-width:250px;min-height:312px;max-width:750px;max-height:788px}@media all and (orientation: landscape){.mat-datepicker-content-touch .mat-calendar{width:64vh;height:80vh}}@media all and (orientation: portrait){.mat-datepicker-content-touch .mat-calendar{width:80vw;height:100vw}}\n"]
      }]
    }];
    /** @nocollapse */

    MatDatepickerContent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }];
    };

    MatDatepickerContent.propDecorators = {
      _calendar: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: [MatCalendar]
      }]
    };

    if (false) {} // TODO(mmalerba): We use a component instead of a directive here so the user can use implicit
    // template reference variables (e.g. #d vs #d="matDatepicker"). We can change this to a directive
    // if angular adds support for `exportAs: '$implicit'` on directives.

    /**
     * Component responsible for managing the datepicker popup/dialog.
     * @template D
     */


    var MatDatepicker = /*#__PURE__*/function () {
      /**
       * @param {?} _dialog
       * @param {?} _overlay
       * @param {?} _ngZone
       * @param {?} _viewContainerRef
       * @param {?} scrollStrategy
       * @param {?} _dateAdapter
       * @param {?} _dir
       * @param {?} _document
       */
      function MatDatepicker(_dialog, _overlay, _ngZone, _viewContainerRef, scrollStrategy, _dateAdapter, _dir, _document) {
        _classCallCheck(this, MatDatepicker);

        this._dialog = _dialog;
        this._overlay = _overlay;
        this._ngZone = _ngZone;
        this._viewContainerRef = _viewContainerRef;
        this._dateAdapter = _dateAdapter;
        this._dir = _dir;
        this._document = _document;
        /**
         * The view that the calendar should start in.
         */

        this.startView = 'month';
        this._touchUi = false;
        /**
         * Emits selected year in multiyear view.
         * This doesn't imply a change on the selected date.
         */

        this.yearSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits selected month in year view.
         * This doesn't imply a change on the selected date.
         */

        this.monthSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the datepicker has been opened.
         */

        this.openedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the datepicker has been closed.
         */

        this.closedStream = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        this._opened = false;
        /**
         * The id for the datepicker calendar.
         */

        this.id = "mat-datepicker-".concat(datepickerUid++);
        this._validSelected = null;
        /**
         * The element that was focused before the datepicker was opened.
         */

        this._focusedElementBeforeOpen = null;
        /**
         * Subscription to value changes in the associated input element.
         */

        this._inputSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        /**
         * Emits when the datepicker is disabled.
         */

        this._disabledChange = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
        /**
         * Emits new selected date when selected date changes.
         */

        this._selectedChanged = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();

        if (!this._dateAdapter) {
          throw createMissingDateImplError('DateAdapter');
        }

        this._scrollStrategy = scrollStrategy;
      }
      /**
       * The date to open the calendar to initially.
       * @return {?}
       */


      _createClass(MatDatepicker, [{
        key: "ngOnDestroy",

        /**
         * @return {?}
         */
        value: function ngOnDestroy() {
          this._destroyPopup();

          this.close();

          this._inputSubscription.unsubscribe();

          this._disabledChange.complete();
        }
        /**
         * Selects the given date
         * @param {?} date
         * @return {?}
         */

      }, {
        key: "select",
        value: function select(date) {
          /** @type {?} */
          var oldValue = this._selected;
          this._selected = date;

          if (!this._dateAdapter.sameDate(oldValue, this._selected)) {
            this._selectedChanged.next(date);
          }
        }
        /**
         * Emits the selected year in multiyear view
         * @param {?} normalizedYear
         * @return {?}
         */

      }, {
        key: "_selectYear",
        value: function _selectYear(normalizedYear) {
          this.yearSelected.emit(normalizedYear);
        }
        /**
         * Emits selected month in year view
         * @param {?} normalizedMonth
         * @return {?}
         */

      }, {
        key: "_selectMonth",
        value: function _selectMonth(normalizedMonth) {
          this.monthSelected.emit(normalizedMonth);
        }
        /**
         * Register an input with this datepicker.
         * @param {?} input The datepicker input to register with this datepicker.
         * @return {?}
         */

      }, {
        key: "_registerInput",
        value: function _registerInput(input) {
          var _this16 = this;

          if (this._datepickerInput) {
            throw Error('A MatDatepicker can only be associated with a single input.');
          }

          this._datepickerInput = input;
          this._inputSubscription = this._datepickerInput._valueChange.subscribe(
          /**
          * @param {?} value
          * @return {?}
          */
          function (value) {
            return _this16._selected = value;
          });
        }
        /**
         * Open the calendar.
         * @return {?}
         */

      }, {
        key: "open",
        value: function open() {
          if (this._opened || this.disabled) {
            return;
          }

          if (!this._datepickerInput) {
            throw Error('Attempted to open an MatDatepicker with no associated input.');
          }

          if (this._document) {
            this._focusedElementBeforeOpen = this._document.activeElement;
          }

          this.touchUi ? this._openAsDialog() : this._openAsPopup();
          this._opened = true;
          this.openedStream.emit();
        }
        /**
         * Close the calendar.
         * @return {?}
         */

      }, {
        key: "close",
        value: function close() {
          var _this17 = this;

          if (!this._opened) {
            return;
          }

          if (this._popupComponentRef && this._popupRef) {
            /** @type {?} */
            var instance = this._popupComponentRef.instance;

            instance._startExitAnimation();

            instance._animationDone.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1)).subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this17._destroyPopup();
            });
          }

          if (this._dialogRef) {
            this._dialogRef.close();

            this._dialogRef = null;
          }
          /** @type {?} */


          var completeClose =
          /**
          * @return {?}
          */
          function completeClose() {
            // The `_opened` could've been reset already if
            // we got two events in quick succession.
            if (_this17._opened) {
              _this17._opened = false;

              _this17.closedStream.emit();

              _this17._focusedElementBeforeOpen = null;
            }
          };

          if (this._focusedElementBeforeOpen && typeof this._focusedElementBeforeOpen.focus === 'function') {
            // Because IE moves focus asynchronously, we can't count on it being restored before we've
            // marked the datepicker as closed. If the event fires out of sequence and the element that
            // we're refocusing opens the datepicker on focus, the user could be stuck with not being
            // able to close the calendar at all. We work around it by making the logic, that marks
            // the datepicker as closed, async as well.
            this._focusedElementBeforeOpen.focus();

            setTimeout(completeClose);
          } else {
            completeClose();
          }
        }
        /**
         * Open the calendar as a dialog.
         * @private
         * @return {?}
         */

      }, {
        key: "_openAsDialog",
        value: function _openAsDialog() {
          var _this18 = this;

          // Usually this would be handled by `open` which ensures that we can only have one overlay
          // open at a time, however since we reset the variables in async handlers some overlays
          // may slip through if the user opens and closes multiple times in quick succession (e.g.
          // by holding down the enter key).
          if (this._dialogRef) {
            this._dialogRef.close();
          }

          this._dialogRef = this._dialog.open(MatDatepickerContent, {
            direction: this._dir ? this._dir.value : 'ltr',
            viewContainerRef: this._viewContainerRef,
            panelClass: 'mat-datepicker-dialog',
            // These values are all the same as the defaults, but we set them explicitly so that the
            // datepicker dialog behaves consistently even if the user changed the defaults.
            hasBackdrop: true,
            disableClose: false,
            width: '',
            height: '',
            minWidth: '',
            minHeight: '',
            maxWidth: '80vw',
            maxHeight: '',
            position: {},
            autoFocus: true,
            // `MatDialog` has focus restoration built in, however we want to disable it since the
            // datepicker also has focus restoration for dropdown mode. We want to do this, in order
            // to ensure that the timing is consistent between dropdown and dialog modes since `MatDialog`
            // restores focus when the animation is finished, but the datepicker does it immediately.
            // Furthermore, this avoids any conflicts where the datepicker consumer might move focus
            // inside the `closed` event which is dispatched immediately.
            restoreFocus: false
          });

          this._dialogRef.afterClosed().subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this18.close();
          });

          this._dialogRef.componentInstance.datepicker = this;
          this._dialogRef.componentInstance.color = this.color;
        }
        /**
         * Open the calendar as a popup.
         * @private
         * @return {?}
         */

      }, {
        key: "_openAsPopup",
        value: function _openAsPopup() {
          var _this19 = this;

          /** @type {?} */
          var portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["ComponentPortal"](MatDatepickerContent, this._viewContainerRef);

          this._destroyPopup();

          this._createPopup();
          /** @type {?} */


          var ref = this._popupComponentRef =
          /** @type {?} */
          this._popupRef.attach(portal);

          ref.instance.datepicker = this;
          ref.instance.color = this.color; // Update the position once the calendar has rendered.

          this._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["take"])(1)).subscribe(
          /**
          * @return {?}
          */
          function () {
            /** @type {?} */
            _this19._popupRef.updatePosition();
          });
        }
        /**
         * Create the popup.
         * @private
         * @return {?}
         */

      }, {
        key: "_createPopup",
        value: function _createPopup() {
          var _this20 = this;

          /** @type {?} */
          var overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayConfig"]({
            positionStrategy: this._createPopupPositionStrategy(),
            hasBackdrop: true,
            backdropClass: 'mat-overlay-transparent-backdrop',
            direction: this._dir,
            scrollStrategy: this._scrollStrategy(),
            panelClass: 'mat-datepicker-popup'
          });
          this._popupRef = this._overlay.create(overlayConfig);

          this._popupRef.overlayElement.setAttribute('role', 'dialog');

          Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this._popupRef.backdropClick(), this._popupRef.detachments(), this._popupRef.keydownEvents().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_12__["filter"])(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            // Closing on alt + up is only valid when there's an input associated with the datepicker.
            return event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["ESCAPE"] || _this20._datepickerInput && event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["UP_ARROW"];
          }))).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            if (event) {
              event.preventDefault();
            }

            _this20.close();
          });
        }
        /**
         * Destroys the current popup overlay.
         * @private
         * @return {?}
         */

      }, {
        key: "_destroyPopup",
        value: function _destroyPopup() {
          if (this._popupRef) {
            this._popupRef.dispose();

            this._popupRef = this._popupComponentRef = null;
          }
        }
        /**
         * Create the popup PositionStrategy.
         * @private
         * @return {?}
         */

      }, {
        key: "_createPopupPositionStrategy",
        value: function _createPopupPositionStrategy() {
          return this._overlay.position().flexibleConnectedTo(this._datepickerInput.getConnectedOverlayOrigin()).withTransformOriginOn('.mat-datepicker-content').withFlexibleDimensions(false).withViewportMargin(8).withLockedPosition().withPositions([{
            originX: 'start',
            originY: 'bottom',
            overlayX: 'start',
            overlayY: 'top'
          }, {
            originX: 'start',
            originY: 'top',
            overlayX: 'start',
            overlayY: 'bottom'
          }, {
            originX: 'end',
            originY: 'bottom',
            overlayX: 'end',
            overlayY: 'top'
          }, {
            originX: 'end',
            originY: 'top',
            overlayX: 'end',
            overlayY: 'bottom'
          }]);
        }
        /**
         * @private
         * @param {?} obj The object to check.
         * @return {?} The given object if it is both a date instance and valid, otherwise null.
         */

      }, {
        key: "_getValidDateOrNull",
        value: function _getValidDateOrNull(obj) {
          return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
        }
      }, {
        key: "startAt",
        get: function get() {
          // If an explicit startAt is set we start there, otherwise we start at whatever the currently
          // selected value is.
          return this._startAt || (this._datepickerInput ? this._datepickerInput.value : null);
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._startAt = this._getValidDateOrNull(this._dateAdapter.deserialize(value));
        }
        /**
         * Color palette to use on the datepicker's calendar.
         * @return {?}
         */

      }, {
        key: "color",
        get: function get() {
          return this._color || (this._datepickerInput ? this._datepickerInput._getThemePalette() : undefined);
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._color = value;
        }
        /**
         * Whether the calendar UI is in touch mode. In touch mode the calendar opens in a dialog rather
         * than a popup and elements have more padding to allow for bigger touch targets.
         * @return {?}
         */

      }, {
        key: "touchUi",
        get: function get() {
          return this._touchUi;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._touchUi = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the datepicker pop-up should be disabled.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this._disabled === undefined && this._datepickerInput ? this._datepickerInput.disabled : !!this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);

          if (newValue !== this._disabled) {
            this._disabled = newValue;

            this._disabledChange.next(newValue);
          }
        }
        /**
         * Whether the calendar is open.
         * @return {?}
         */

      }, {
        key: "opened",
        get: function get() {
          return this._opened;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          value ? this.open() : this.close();
        }
        /**
         * The currently selected date.
         * @return {?}
         */

      }, {
        key: "_selected",
        get: function get() {
          return this._validSelected;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._validSelected = value;
        }
        /**
         * The minimum selectable date.
         * @return {?}
         */

      }, {
        key: "_minDate",
        get: function get() {
          return this._datepickerInput && this._datepickerInput.min;
        }
        /**
         * The maximum selectable date.
         * @return {?}
         */

      }, {
        key: "_maxDate",
        get: function get() {
          return this._datepickerInput && this._datepickerInput.max;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_dateFilter",
        get: function get() {
          return this._datepickerInput && this._datepickerInput._dateFilter;
        }
      }]);

      return MatDatepicker;
    }();

    MatDatepicker.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
      args: [{
        selector: 'mat-datepicker',
        template: '',
        exportAs: 'matDatepicker',
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None
      }]
    }];
    /** @nocollapse */

    MatDatepicker.ctorParameters = function () {
      return [{
        type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]
      }, {
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["Overlay"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewContainerRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [MAT_DATEPICKER_SCROLL_STRATEGY]
        }]
      }, {
        type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_11__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"]]
        }]
      }];
    };

    MatDatepicker.propDecorators = {
      calendarHeaderComponent: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      startAt: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      startView: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      color: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      touchUi: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      yearSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      monthSelected: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      panelClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      dateClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      openedStream: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
        args: ['opened']
      }],
      closedStream: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"],
        args: ['closed']
      }],
      opened: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/datepicker/datepicker-input.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_DATEPICKER_VALUE_ACCESSOR = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALUE_ACCESSOR"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatDatepickerInput;
      }),
      multi: true
    };
    /**
     * \@docs-private
     * @type {?}
     */

    var MAT_DATEPICKER_VALIDATORS = {
      provide: _angular_forms__WEBPACK_IMPORTED_MODULE_15__["NG_VALIDATORS"],
      useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["forwardRef"])(
      /**
      * @return {?}
      */
      function () {
        return MatDatepickerInput;
      }),
      multi: true
    };
    /**
     * An event used for datepicker input and change events. We don't always have access to a native
     * input or change event because the event may have been triggered by the user clicking on the
     * calendar popup. For consistency, we always use MatDatepickerInputEvent instead.
     * @template D
     */

    var MatDatepickerInputEvent =
    /**
     * @param {?} target
     * @param {?} targetElement
     */
    function MatDatepickerInputEvent(target, targetElement) {
      _classCallCheck(this, MatDatepickerInputEvent);

      this.target = target;
      this.targetElement = targetElement;
      this.value = this.target.value;
    };

    if (false) {}
    /**
     * Directive used to connect an input to a MatDatepicker.
     * @template D
     */


    var MatDatepickerInput = /*#__PURE__*/function () {
      /**
       * @param {?} _elementRef
       * @param {?} _dateAdapter
       * @param {?} _dateFormats
       * @param {?} _formField
       */
      function MatDatepickerInput(_elementRef, _dateAdapter, _dateFormats, _formField) {
        var _this21 = this;

        _classCallCheck(this, MatDatepickerInput);

        this._elementRef = _elementRef;
        this._dateAdapter = _dateAdapter;
        this._dateFormats = _dateFormats;
        this._formField = _formField;
        /**
         * Emits when a `change` event is fired on this `<input>`.
         */

        this.dateChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when an `input` event is fired on this `<input>`.
         */

        this.dateInput = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the value changes (either due to user input or programmatic change).
         */

        this._valueChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();
        /**
         * Emits when the disabled state has changed
         */

        this._disabledChange = new _angular_core__WEBPACK_IMPORTED_MODULE_4__["EventEmitter"]();

        this._onTouched =
        /**
        * @return {?}
        */
        function () {};

        this._cvaOnChange =
        /**
        * @return {?}
        */
        function () {};

        this._validatorOnChange =
        /**
        * @return {?}
        */
        function () {};

        this._datepickerSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        this._localeSubscription = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        /**
         * The form control validator for whether the input parses.
         */

        this._parseValidator =
        /**
        * @return {?}
        */
        function () {
          return _this21._lastValueValid ? null : {
            'matDatepickerParse': {
              'text': _this21._elementRef.nativeElement.value
            }
          };
        };
        /**
         * The form control validator for the min date.
         */


        this._minValidator =
        /**
        * @param {?} control
        * @return {?}
        */
        function (control) {
          /** @type {?} */
          var controlValue = _this21._getValidDateOrNull(_this21._dateAdapter.deserialize(control.value));

          return !_this21.min || !controlValue || _this21._dateAdapter.compareDate(_this21.min, controlValue) <= 0 ? null : {
            'matDatepickerMin': {
              'min': _this21.min,
              'actual': controlValue
            }
          };
        };
        /**
         * The form control validator for the max date.
         */


        this._maxValidator =
        /**
        * @param {?} control
        * @return {?}
        */
        function (control) {
          /** @type {?} */
          var controlValue = _this21._getValidDateOrNull(_this21._dateAdapter.deserialize(control.value));

          return !_this21.max || !controlValue || _this21._dateAdapter.compareDate(_this21.max, controlValue) >= 0 ? null : {
            'matDatepickerMax': {
              'max': _this21.max,
              'actual': controlValue
            }
          };
        };
        /**
         * The form control validator for the date filter.
         */


        this._filterValidator =
        /**
        * @param {?} control
        * @return {?}
        */
        function (control) {
          /** @type {?} */
          var controlValue = _this21._getValidDateOrNull(_this21._dateAdapter.deserialize(control.value));

          return !_this21._dateFilter || !controlValue || _this21._dateFilter(controlValue) ? null : {
            'matDatepickerFilter': true
          };
        };
        /**
         * The combined form control validator for this input.
         */


        this._validator = _angular_forms__WEBPACK_IMPORTED_MODULE_15__["Validators"].compose([this._parseValidator, this._minValidator, this._maxValidator, this._filterValidator]);
        /**
         * Whether the last value set on the input was valid.
         */

        this._lastValueValid = false;

        if (!this._dateAdapter) {
          throw createMissingDateImplError('DateAdapter');
        }

        if (!this._dateFormats) {
          throw createMissingDateImplError('MAT_DATE_FORMATS');
        } // Update the displayed date when the locale changes.


        this._localeSubscription = _dateAdapter.localeChanges.subscribe(
        /**
        * @return {?}
        */
        function () {
          _this21.value = _this21.value;
        });
      }
      /**
       * The datepicker that this input is associated with.
       * @param {?} value
       * @return {?}
       */


      _createClass(MatDatepickerInput, [{
        key: "ngAfterViewInit",

        /**
         * @return {?}
         */
        value: function ngAfterViewInit() {
          this._isInitialized = true;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._datepickerSubscription.unsubscribe();

          this._localeSubscription.unsubscribe();

          this._valueChange.complete();

          this._disabledChange.complete();
        }
        /**
         * \@docs-private
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnValidatorChange",
        value: function registerOnValidatorChange(fn) {
          this._validatorOnChange = fn;
        }
        /**
         * \@docs-private
         * @param {?} c
         * @return {?}
         */

      }, {
        key: "validate",
        value: function validate(c) {
          return this._validator ? this._validator(c) : null;
        }
        /**
         * @deprecated
         * \@breaking-change 8.0.0 Use `getConnectedOverlayOrigin` instead
         * @return {?}
         */

      }, {
        key: "getPopupConnectionElementRef",
        value: function getPopupConnectionElementRef() {
          return this.getConnectedOverlayOrigin();
        }
        /**
         * Gets the element that the datepicker popup should be connected to.
         * @return {?} The element to connect the popup to.
         */

      }, {
        key: "getConnectedOverlayOrigin",
        value: function getConnectedOverlayOrigin() {
          return this._formField ? this._formField.getConnectedOverlayOrigin() : this._elementRef;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this.value = value;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this._cvaOnChange = fn;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} fn
         * @return {?}
         */

      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this._onTouched = fn;
        } // Implemented as part of ControlValueAccessor.

        /**
         * @param {?} isDisabled
         * @return {?}
         */

      }, {
        key: "setDisabledState",
        value: function setDisabledState(isDisabled) {
          this.disabled = isDisabled;
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_onKeydown",
        value: function _onKeydown(event) {
          /** @type {?} */
          var isAltDownArrow = event.altKey && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_10__["DOWN_ARROW"];

          if (this._datepicker && isAltDownArrow && !this._elementRef.nativeElement.readOnly) {
            this._datepicker.open();

            event.preventDefault();
          }
        }
        /**
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_onInput",
        value: function _onInput(value) {
          /** @type {?} */
          var lastValueWasValid = this._lastValueValid;
          /** @type {?} */

          var date = this._dateAdapter.parse(value, this._dateFormats.parse.dateInput);

          this._lastValueValid = !date || this._dateAdapter.isValid(date);
          date = this._getValidDateOrNull(date);

          if (!this._dateAdapter.sameDate(date, this._value)) {
            this._value = date;

            this._cvaOnChange(date);

            this._valueChange.emit(date);

            this.dateInput.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
          } else if (lastValueWasValid !== this._lastValueValid) {
            this._validatorOnChange();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onChange",
        value: function _onChange() {
          this.dateChange.emit(new MatDatepickerInputEvent(this, this._elementRef.nativeElement));
        }
        /**
         * Returns the palette used by the input's form field, if any.
         * @return {?}
         */

      }, {
        key: "_getThemePalette",
        value: function _getThemePalette() {
          return this._formField ? this._formField.color : undefined;
        }
        /**
         * Handles blur events on the input.
         * @return {?}
         */

      }, {
        key: "_onBlur",
        value: function _onBlur() {
          // Reformat the input only if we have a valid value.
          if (this.value) {
            this._formatValue(this.value);
          }

          this._onTouched();
        }
        /**
         * Formats a value and sets it on the input element.
         * @private
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "_formatValue",
        value: function _formatValue(value) {
          this._elementRef.nativeElement.value = value ? this._dateAdapter.format(value, this._dateFormats.display.dateInput) : '';
        }
        /**
         * @private
         * @param {?} obj The object to check.
         * @return {?} The given object if it is both a date instance and valid, otherwise null.
         */

      }, {
        key: "_getValidDateOrNull",
        value: function _getValidDateOrNull(obj) {
          return this._dateAdapter.isDateInstance(obj) && this._dateAdapter.isValid(obj) ? obj : null;
        }
      }, {
        key: "matDatepicker",
        set: function set(value) {
          var _this22 = this;

          if (!value) {
            return;
          }

          this._datepicker = value;

          this._datepicker._registerInput(this);

          this._datepickerSubscription.unsubscribe();

          this._datepickerSubscription = this._datepicker._selectedChanged.subscribe(
          /**
          * @param {?} selected
          * @return {?}
          */
          function (selected) {
            _this22.value = selected;

            _this22._cvaOnChange(selected);

            _this22._onTouched();

            _this22.dateInput.emit(new MatDatepickerInputEvent(_this22, _this22._elementRef.nativeElement));

            _this22.dateChange.emit(new MatDatepickerInputEvent(_this22, _this22._elementRef.nativeElement));
          });
        }
        /**
         * Function that can be used to filter out dates within the datepicker.
         * @param {?} value
         * @return {?}
         */

      }, {
        key: "matDatepickerFilter",
        set: function set(value) {
          this._dateFilter = value;

          this._validatorOnChange();
        }
        /**
         * The value of the input.
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this._value;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          value = this._dateAdapter.deserialize(value);
          this._lastValueValid = !value || this._dateAdapter.isValid(value);
          value = this._getValidDateOrNull(value);
          /** @type {?} */

          var oldDate = this.value;
          this._value = value;

          this._formatValue(value);

          if (!this._dateAdapter.sameDate(oldDate, value)) {
            this._valueChange.emit(value);
          }
        }
        /**
         * The minimum valid date.
         * @return {?}
         */

      }, {
        key: "min",
        get: function get() {
          return this._min;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._min = this._getValidDateOrNull(this._dateAdapter.deserialize(value));

          this._validatorOnChange();
        }
        /**
         * The maximum valid date.
         * @return {?}
         */

      }, {
        key: "max",
        get: function get() {
          return this._max;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._max = this._getValidDateOrNull(this._dateAdapter.deserialize(value));

          this._validatorOnChange();
        }
        /**
         * Whether the datepicker-input is disabled.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return !!this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var newValue = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);
          /** @type {?} */

          var element = this._elementRef.nativeElement;

          if (this._disabled !== newValue) {
            this._disabled = newValue;

            this._disabledChange.emit(newValue);
          } // We need to null check the `blur` method, because it's undefined during SSR.
          // In Ivy static bindings are invoked earlier, before the element is attached to the DOM.
          // This can cause an error to be thrown in some browsers (IE/Edge) which assert that the
          // element has been inserted.


          if (newValue && this._isInitialized && element.blur) {
            // Normally, native input elements automatically blur if they turn disabled. This behavior
            // is problematic, because it would mean that it triggers another change detection cycle,
            // which then causes a changed after checked error if the input element was focused before.
            element.blur();
          }
        }
      }]);

      return MatDatepickerInput;
    }();

    MatDatepickerInput.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
      args: [{
        selector: 'input[matDatepicker]',
        providers: [MAT_DATEPICKER_VALUE_ACCESSOR, MAT_DATEPICKER_VALIDATORS, {
          provide: _angular_material_input__WEBPACK_IMPORTED_MODULE_17__["MAT_INPUT_VALUE_ACCESSOR"],
          useExisting: MatDatepickerInput
        }],
        host: {
          '[attr.aria-haspopup]': '_datepicker ? "dialog" : null',
          '[attr.aria-owns]': '(_datepicker?.opened && _datepicker.id) || null',
          '[attr.min]': 'min ? _dateAdapter.toIso8601(min) : null',
          '[attr.max]': 'max ? _dateAdapter.toIso8601(max) : null',
          '[disabled]': 'disabled',
          '(input)': '_onInput($event.target.value)',
          '(change)': '_onChange()',
          '(blur)': '_onBlur()',
          '(keydown)': '_onKeydown($event)'
        },
        exportAs: 'matDatepickerInput'
      }]
    }];
    /** @nocollapse */

    MatDatepickerInput.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ElementRef"]
      }, {
        type: _angular_material_core__WEBPACK_IMPORTED_MODULE_8__["DateAdapter"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_8__["MAT_DATE_FORMATS"]]
        }]
      }, {
        type: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MatFormField"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Inject"],
          args: [_angular_material_form_field__WEBPACK_IMPORTED_MODULE_16__["MAT_FORM_FIELD"]]
        }]
      }];
    };

    MatDatepickerInput.propDecorators = {
      matDatepicker: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      matDatepickerFilter: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      min: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      max: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      dateChange: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }],
      dateInput: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Output"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/datepicker/datepicker-toggle.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Can be used to override the icon of a `matDatepickerToggle`.
     */


    var MatDatepickerToggleIcon = function MatDatepickerToggleIcon() {
      _classCallCheck(this, MatDatepickerToggleIcon);
    };

    MatDatepickerToggleIcon.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Directive"],
      args: [{
        selector: '[matDatepickerToggleIcon]'
      }]
    }];
    /**
     * @template D
     */

    var MatDatepickerToggle = /*#__PURE__*/function () {
      /**
       * @param {?} _intl
       * @param {?} _changeDetectorRef
       * @param {?} defaultTabIndex
       */
      function MatDatepickerToggle(_intl, _changeDetectorRef, defaultTabIndex) {
        _classCallCheck(this, MatDatepickerToggle);

        this._intl = _intl;
        this._changeDetectorRef = _changeDetectorRef;
        this._stateChanges = rxjs__WEBPACK_IMPORTED_MODULE_9__["Subscription"].EMPTY;
        /** @type {?} */

        var parsedTabIndex = Number(defaultTabIndex);
        this.tabIndex = parsedTabIndex || parsedTabIndex === 0 ? parsedTabIndex : null;
      }
      /**
       * Whether the toggle button is disabled.
       * @return {?}
       */


      _createClass(MatDatepickerToggle, [{
        key: "ngOnChanges",

        /**
         * @param {?} changes
         * @return {?}
         */
        value: function ngOnChanges(changes) {
          if (changes['datepicker']) {
            this._watchStateChanges();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._stateChanges.unsubscribe();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          this._watchStateChanges();
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_open",
        value: function _open(event) {
          if (this.datepicker && !this.disabled) {
            this.datepicker.open();
            event.stopPropagation();
          }
        }
        /**
         * @private
         * @return {?}
         */

      }, {
        key: "_watchStateChanges",
        value: function _watchStateChanges() {
          var _this23 = this;

          /** @type {?} */
          var datepickerDisabled = this.datepicker ? this.datepicker._disabledChange : Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])();
          /** @type {?} */

          var inputDisabled = this.datepicker && this.datepicker._datepickerInput ? this.datepicker._datepickerInput._disabledChange : Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])();
          /** @type {?} */

          var datepickerToggled = this.datepicker ? Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this.datepicker.openedStream, this.datepicker.closedStream) : Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["of"])();

          this._stateChanges.unsubscribe();

          this._stateChanges = Object(rxjs__WEBPACK_IMPORTED_MODULE_9__["merge"])(this._intl.changes, datepickerDisabled, inputDisabled, datepickerToggled).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this23._changeDetectorRef.markForCheck();
          });
        }
      }, {
        key: "disabled",
        get: function get() {
          if (this._disabled === undefined && this.datepicker) {
            return this.datepicker.disabled;
          }

          return !!this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_13__["coerceBooleanProperty"])(value);
        }
      }]);

      return MatDatepickerToggle;
    }();

    MatDatepickerToggle.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
      args: [{
        selector: 'mat-datepicker-toggle',
        template: "<button\n  #button\n  mat-icon-button\n  type=\"button\"\n  [attr.aria-haspopup]=\"datepicker ? 'dialog' : null\"\n  [attr.aria-label]=\"_intl.openCalendarLabel\"\n  [attr.tabindex]=\"disabled ? -1 : tabIndex\"\n  [disabled]=\"disabled\"\n  [disableRipple]=\"disableRipple\"\n  (click)=\"_open($event)\">\n\n  <svg\n    *ngIf=\"!_customIcon\"\n    class=\"mat-datepicker-toggle-default-icon\"\n    viewBox=\"0 0 24 24\"\n    width=\"24px\"\n    height=\"24px\"\n    fill=\"currentColor\"\n    focusable=\"false\">\n    <path d=\"M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z\"/>\n  </svg>\n\n  <ng-content select=\"[matDatepickerToggleIcon]\"></ng-content>\n</button>\n",
        host: {
          'class': 'mat-datepicker-toggle',
          // Always set the tabindex to -1 so that it doesn't overlap with any custom tabindex the
          // consumer may have provided, while still being able to receive focus.
          '[attr.tabindex]': 'disabled ? null : -1',
          '[class.mat-datepicker-toggle-active]': 'datepicker && datepicker.opened',
          '[class.mat-accent]': 'datepicker && datepicker.color === "accent"',
          '[class.mat-warn]': 'datepicker && datepicker.color === "warn"',
          '(focus)': '_button.focus()'
        },
        exportAs: 'matDatepickerToggle',
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectionStrategy"].OnPush,
        styles: [".mat-form-field-appearance-legacy .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-datepicker-toggle-default-icon{width:1em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-datepicker-toggle-default-icon{display:block;width:1.5em;height:1.5em}.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-datepicker-toggle-default-icon,.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-datepicker-toggle-default-icon{margin:auto}\n"]
      }]
    }];
    /** @nocollapse */

    MatDatepickerToggle.ctorParameters = function () {
      return [{
        type: MatDatepickerIntl
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ChangeDetectorRef"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Attribute"],
          args: ['tabindex']
        }]
      }];
    };

    MatDatepickerToggle.propDecorators = {
      datepicker: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"],
        args: ['for']
      }],
      tabIndex: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      disableRipple: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Input"]
      }],
      _customIcon: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ContentChild"],
        args: [MatDatepickerToggleIcon]
      }],
      _button: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["ViewChild"],
        args: ['button']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/datepicker/datepicker-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatDatepickerModule = function MatDatepickerModule() {
      _classCallCheck(this, MatDatepickerModule);
    };

    MatDatepickerModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["NgModule"],
      args: [{
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_1__["OverlayModule"], _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_0__["A11yModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_2__["PortalModule"]],
        exports: [_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_7__["CdkScrollableModule"], MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader],
        declarations: [MatCalendar, MatCalendarBody, MatDatepicker, MatDatepickerContent, MatDatepickerInput, MatDatepickerToggle, MatDatepickerToggleIcon, MatMonthView, MatYearView, MatMultiYearView, MatCalendarHeader],
        providers: [MatDatepickerIntl, MAT_DATEPICKER_SCROLL_STRATEGY_FACTORY_PROVIDER],
        entryComponents: [MatDatepickerContent, MatCalendarHeader]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/datepicker/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=datepicker.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/fesm2015/form-field.js":
  /*!***************************************************************!*\
    !*** ./node_modules/@angular/material/fesm2015/form-field.js ***!
    \***************************************************************/

  /*! exports provided: MAT_FORM_FIELD, MAT_FORM_FIELD_DEFAULT_OPTIONS, MatError, MatFormField, MatFormFieldControl, MatFormFieldModule, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix, getMatFormFieldDuplicatedHintError, getMatFormFieldMissingControlError, getMatFormFieldPlaceholderConflictError, matFormFieldAnimations */

  /***/
  function node_modulesAngularMaterialFesm2015FormFieldJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD", function () {
      return MAT_FORM_FIELD;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_FORM_FIELD_DEFAULT_OPTIONS", function () {
      return MAT_FORM_FIELD_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatError", function () {
      return MatError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFormField", function () {
      return MatFormField;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFormFieldControl", function () {
      return MatFormFieldControl;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatFormFieldModule", function () {
      return MatFormFieldModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatHint", function () {
      return MatHint;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatLabel", function () {
      return MatLabel;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPlaceholder", function () {
      return MatPlaceholder;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatPrefix", function () {
      return MatPrefix;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSuffix", function () {
      return MatSuffix;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatFormFieldDuplicatedHintError", function () {
      return getMatFormFieldDuplicatedHintError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatFormFieldMissingControlError", function () {
      return getMatFormFieldMissingControlError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatFormFieldPlaceholderConflictError", function () {
      return getMatFormFieldPlaceholderConflictError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matFormFieldAnimations", function () {
      return matFormFieldAnimations;
    });
    /* harmony import */


    var _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/observers */
    "./node_modules/@angular/cdk/fesm2015/observers.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/error.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var nextUniqueId = 0;
    /**
     * Single error message to be shown underneath the form field.
     */

    var MatError = function MatError() {
      _classCallCheck(this, MatError);

      this.id = "mat-error-".concat(nextUniqueId++);
    };

    MatError.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
      args: [{
        selector: 'mat-error',
        host: {
          'class': 'mat-error',
          'role': 'alert',
          '[attr.id]': 'id'
        }
      }]
    }];
    MatError.propDecorators = {
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/form-field-animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by the MatFormField.
     * \@docs-private
     * @type {?}
     */


    var matFormFieldAnimations = {
      /**
       * Animation that transitions the form field's error and hint messages.
       */
      transitionMessages: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('transitionMessages', [// TODO(mmalerba): Use angular animations for label animation as well.
      Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        opacity: 1,
        transform: 'translateY(0%)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('void => enter', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        opacity: 0,
        transform: 'translateY(-100%)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('300ms cubic-bezier(0.55, 0, 0.55, 0.2)')])])
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/form-field-control.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * An interface which allows a control to work inside of a `MatFormField`.
     * @abstract
     * @template T
     */

    var MatFormFieldControl = function MatFormFieldControl() {
      _classCallCheck(this, MatFormFieldControl);
    };

    MatFormFieldControl.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"]
    }];

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/form-field-errors.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * \@docs-private
     * @return {?}
     */


    function getMatFormFieldPlaceholderConflictError() {
      return Error('Placeholder attribute and child element were both specified.');
    }
    /**
     * \@docs-private
     * @param {?} align
     * @return {?}
     */


    function getMatFormFieldDuplicatedHintError(align) {
      return Error("A hint was already declared for 'align=\"".concat(align, "\"'."));
    }
    /**
     * \@docs-private
     * @return {?}
     */


    function getMatFormFieldMissingControlError() {
      return Error('mat-form-field must contain a MatFormFieldControl.');
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/hint.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */


    var nextUniqueId$1 = 0;
    /**
     * Hint text to be shown underneath the form field control.
     */

    var MatHint = function MatHint() {
      _classCallCheck(this, MatHint);

      /**
       * Whether to align the hint label at the start or end of the line.
       */
      this.align = 'start';
      /**
       * Unique ID for the hint. Used for the aria-describedby on the form field control.
       */

      this.id = "mat-hint-".concat(nextUniqueId$1++);
    };

    MatHint.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
      args: [{
        selector: 'mat-hint',
        host: {
          'class': 'mat-hint',
          '[class.mat-right]': 'align == "end"',
          '[attr.id]': 'id',
          // Remove align attribute to prevent it from interfering with layout.
          '[attr.align]': 'null'
        }
      }]
    }];
    MatHint.propDecorators = {
      align: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/label.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The floating label for a `mat-form-field`.
     */


    var MatLabel = function MatLabel() {
      _classCallCheck(this, MatLabel);
    };

    MatLabel.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
      args: [{
        selector: 'mat-label'
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/placeholder.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The placeholder text for an `MatFormField`.
     * @deprecated Use `<mat-label>` to specify the label and the `placeholder` attribute to specify the
     *     placeholder.
     * \@breaking-change 8.0.0
     */

    var MatPlaceholder = function MatPlaceholder() {
      _classCallCheck(this, MatPlaceholder);
    };

    MatPlaceholder.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
      args: [{
        selector: 'mat-placeholder'
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/prefix.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Prefix to be placed in front of the form field.
     */

    var MatPrefix = function MatPrefix() {
      _classCallCheck(this, MatPrefix);
    };

    MatPrefix.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
      args: [{
        selector: '[matPrefix]'
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/suffix.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Suffix to be placed at the end of the form field.
     */

    var MatSuffix = function MatSuffix() {
      _classCallCheck(this, MatSuffix);
    };

    MatSuffix.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Directive"],
      args: [{
        selector: '[matSuffix]'
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/form-field.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /** @type {?} */

    var nextUniqueId$2 = 0;
    /** @type {?} */

    var floatingLabelScale = 0.75;
    /** @type {?} */

    var outlineGapPadding = 5;
    /**
     * Boilerplate for applying mixins to MatFormField.
     * \@docs-private
     */

    var MatFormFieldBase =
    /**
     * @param {?} _elementRef
     */
    function MatFormFieldBase(_elementRef) {
      _classCallCheck(this, MatFormFieldBase);

      this._elementRef = _elementRef;
    };

    if (false) {}
    /**
     * Base class to which we're applying the form field mixins.
     * \@docs-private
     * @type {?}
     */


    var _MatFormFieldMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["mixinColor"])(MatFormFieldBase, 'primary');
    /**
     * Represents the default options for the form field that can be configured
     * using the `MAT_FORM_FIELD_DEFAULT_OPTIONS` injection token.
     * @record
     */


    function MatFormFieldDefaultOptions() {}

    if (false) {}
    /**
     * Injection token that can be used to configure the
     * default options for all form field within an app.
     * @type {?}
     */


    var MAT_FORM_FIELD_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MAT_FORM_FIELD_DEFAULT_OPTIONS');
    /**
     * Injection token that can be used to inject an instances of `MatFormField`. It serves
     * as alternative token to the actual `MatFormField` class which would cause unnecessary
     * retention of the `MatFormField` class and its component metadata.
     * @type {?}
     */

    var MAT_FORM_FIELD = new _angular_core__WEBPACK_IMPORTED_MODULE_2__["InjectionToken"]('MatFormField');
    /**
     * Container for form controls that applies Material Design styling and behavior.
     */

    var MatFormField = /*#__PURE__*/function (_MatFormFieldMixinBas) {
      _inherits(MatFormField, _MatFormFieldMixinBas);

      var _super3 = _createSuper(MatFormField);

      /**
       * @param {?} _elementRef
       * @param {?} _changeDetectorRef
       * @param {?} labelOptions
       * @param {?} _dir
       * @param {?} _defaults
       * @param {?} _platform
       * @param {?} _ngZone
       * @param {?} _animationMode
       */
      function MatFormField(_elementRef, _changeDetectorRef, labelOptions, _dir, _defaults, _platform, _ngZone, _animationMode) {
        var _this24;

        _classCallCheck(this, MatFormField);

        _this24 = _super3.call(this, _elementRef);
        _this24._elementRef = _elementRef;
        _this24._changeDetectorRef = _changeDetectorRef;
        _this24._dir = _dir;
        _this24._defaults = _defaults;
        _this24._platform = _platform;
        _this24._ngZone = _ngZone;
        /**
         * Whether the outline gap needs to be calculated
         * immediately on the next change detection run.
         */

        _this24._outlineGapCalculationNeededImmediately = false;
        /**
         * Whether the outline gap needs to be calculated next time the zone has stabilized.
         */

        _this24._outlineGapCalculationNeededOnStable = false;
        _this24._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Override for the logic that disables the label animation in certain cases.
         */

        _this24._showAlwaysAnimate = false;
        /**
         * State of the mat-hint and mat-error animations.
         */

        _this24._subscriptAnimationState = '';
        _this24._hintLabel = ''; // Unique id for the hint label.

        _this24._hintLabelId = "mat-hint-".concat(nextUniqueId$2++); // Unique id for the internal form field label.

        _this24._labelId = "mat-form-field-label-".concat(nextUniqueId$2++);
        _this24._labelOptions = labelOptions ? labelOptions : {};
        _this24.floatLabel = _this24._getDefaultFloatLabelState();
        _this24._animationsEnabled = _animationMode !== 'NoopAnimations'; // Set the default through here so we invoke the setter on the first run.

        _this24.appearance = _defaults && _defaults.appearance ? _defaults.appearance : 'legacy';
        _this24._hideRequiredMarker = _defaults && _defaults.hideRequiredMarker != null ? _defaults.hideRequiredMarker : false;
        return _this24;
      }
      /**
       * The form-field appearance style.
       * @return {?}
       */


      _createClass(MatFormField, [{
        key: "getConnectedOverlayOrigin",

        /**
         * Gets an ElementRef for the element that a overlay attached to the form-field should be
         * positioned relative to.
         * @return {?}
         */
        value: function getConnectedOverlayOrigin() {
          return this._connectionContainerRef || this._elementRef;
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this25 = this;

          this._validateControlChild();
          /** @type {?} */


          var control = this._control;

          if (control.controlType) {
            this._elementRef.nativeElement.classList.add("mat-form-field-type-".concat(control.controlType));
          } // Subscribe to changes in the child control state in order to update the form field UI.


          control.stateChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(
          /** @type {?} */
          null)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this25._validatePlaceholders();

            _this25._syncDescribedByIds();

            _this25._changeDetectorRef.markForCheck();
          }); // Run change detection if the value changes.

          if (control.ngControl && control.ngControl.valueChanges) {
            control.ngControl.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(
            /**
            * @return {?}
            */
            function () {
              return _this25._changeDetectorRef.markForCheck();
            });
          } // Note that we have to run outside of the `NgZone` explicitly,
          // in order to avoid throwing users into an infinite loop
          // if `zone-patch-rxjs` is included.


          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _this25._ngZone.onStable.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(_this25._destroyed)).subscribe(
            /**
            * @return {?}
            */
            function () {
              if (_this25._outlineGapCalculationNeededOnStable) {
                _this25.updateOutlineGap();
              }
            });
          }); // Run change detection and update the outline if the suffix or prefix changes.


          Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["merge"])(this._prefixChildren.changes, this._suffixChildren.changes).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this25._outlineGapCalculationNeededOnStable = true;

            _this25._changeDetectorRef.markForCheck();
          }); // Re-validate when the number of hints changes.

          this._hintChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this25._processHints();

            _this25._changeDetectorRef.markForCheck();
          }); // Update the aria-described by when the number of errors changes.


          this._errorChildren.changes.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["startWith"])(null)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this25._syncDescribedByIds();

            _this25._changeDetectorRef.markForCheck();
          });

          if (this._dir) {
            this._dir.change.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(this._destroyed)).subscribe(
            /**
            * @return {?}
            */
            function () {
              if (typeof requestAnimationFrame === 'function') {
                _this25._ngZone.runOutsideAngular(
                /**
                * @return {?}
                */
                function () {
                  requestAnimationFrame(
                  /**
                  * @return {?}
                  */
                  function () {
                    return _this25.updateOutlineGap();
                  });
                });
              } else {
                _this25.updateOutlineGap();
              }
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterContentChecked",
        value: function ngAfterContentChecked() {
          this._validateControlChild();

          if (this._outlineGapCalculationNeededImmediately) {
            this.updateOutlineGap();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          // Avoid animations on load.
          this._subscriptAnimationState = 'enter';

          this._changeDetectorRef.detectChanges();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Determines whether a class from the NgControl should be forwarded to the host element.
         * @param {?} prop
         * @return {?}
         */

      }, {
        key: "_shouldForward",
        value: function _shouldForward(prop) {
          /** @type {?} */
          var ngControl = this._control ? this._control.ngControl : null;
          return ngControl && ngControl[prop];
        }
        /**
         * @return {?}
         */

      }, {
        key: "_hasPlaceholder",
        value: function _hasPlaceholder() {
          return !!(this._control && this._control.placeholder || this._placeholderChild);
        }
        /**
         * @return {?}
         */

      }, {
        key: "_hasLabel",
        value: function _hasLabel() {
          return !!this._labelChild;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_shouldLabelFloat",
        value: function _shouldLabelFloat() {
          return this._canLabelFloat && (this._control.shouldLabelFloat || this._shouldAlwaysFloat);
        }
        /**
         * @return {?}
         */

      }, {
        key: "_hideControlPlaceholder",
        value: function _hideControlPlaceholder() {
          // In the legacy appearance the placeholder is promoted to a label if no label is given.
          return this.appearance === 'legacy' && !this._hasLabel() || this._hasLabel() && !this._shouldLabelFloat();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_hasFloatingLabel",
        value: function _hasFloatingLabel() {
          // In the legacy appearance the placeholder is promoted to a label if no label is given.
          return this._hasLabel() || this.appearance === 'legacy' && this._hasPlaceholder();
        }
        /**
         * Determines whether to display hints or errors.
         * @return {?}
         */

      }, {
        key: "_getDisplayedMessages",
        value: function _getDisplayedMessages() {
          return this._errorChildren && this._errorChildren.length > 0 && this._control.errorState ? 'error' : 'hint';
        }
        /**
         * Animates the placeholder up and locks it in position.
         * @return {?}
         */

      }, {
        key: "_animateAndLockLabel",
        value: function _animateAndLockLabel() {
          var _this26 = this;

          if (this._hasFloatingLabel() && this._canLabelFloat) {
            // If animations are disabled, we shouldn't go in here,
            // because the `transitionend` will never fire.
            if (this._animationsEnabled && this._label) {
              this._showAlwaysAnimate = true;
              Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["fromEvent"])(this._label.nativeElement, 'transitionend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
              /**
              * @return {?}
              */
              function () {
                _this26._showAlwaysAnimate = false;
              });
            }

            this.floatLabel = 'always';

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * Ensure that there is only one placeholder (either `placeholder` attribute on the child control
         * or child element with the `mat-placeholder` directive).
         * @private
         * @return {?}
         */

      }, {
        key: "_validatePlaceholders",
        value: function _validatePlaceholders() {
          if (this._control.placeholder && this._placeholderChild) {
            throw getMatFormFieldPlaceholderConflictError();
          }
        }
        /**
         * Does any extra processing that is required when handling the hints.
         * @private
         * @return {?}
         */

      }, {
        key: "_processHints",
        value: function _processHints() {
          this._validateHints();

          this._syncDescribedByIds();
        }
        /**
         * Ensure that there is a maximum of one of each `<mat-hint>` alignment specified, with the
         * attribute being considered as `align="start"`.
         * @private
         * @return {?}
         */

      }, {
        key: "_validateHints",
        value: function _validateHints() {
          var _this27 = this;

          if (this._hintChildren) {
            /** @type {?} */
            var startHint;
            /** @type {?} */

            var endHint;

            this._hintChildren.forEach(
            /**
            * @param {?} hint
            * @return {?}
            */
            function (hint) {
              if (hint.align === 'start') {
                if (startHint || _this27.hintLabel) {
                  throw getMatFormFieldDuplicatedHintError('start');
                }

                startHint = hint;
              } else if (hint.align === 'end') {
                if (endHint) {
                  throw getMatFormFieldDuplicatedHintError('end');
                }

                endHint = hint;
              }
            });
          }
        }
        /**
         * Gets the default float label state.
         * @private
         * @return {?}
         */

      }, {
        key: "_getDefaultFloatLabelState",
        value: function _getDefaultFloatLabelState() {
          return this._defaults && this._defaults.floatLabel || this._labelOptions["float"] || 'auto';
        }
        /**
         * Sets the list of element IDs that describe the child control. This allows the control to update
         * its `aria-describedby` attribute accordingly.
         * @private
         * @return {?}
         */

      }, {
        key: "_syncDescribedByIds",
        value: function _syncDescribedByIds() {
          if (this._control) {
            /** @type {?} */
            var ids = [];

            if (this._getDisplayedMessages() === 'hint') {
              /** @type {?} */
              var startHint = this._hintChildren ? this._hintChildren.find(
              /**
              * @param {?} hint
              * @return {?}
              */
              function (hint) {
                return hint.align === 'start';
              }) : null;
              /** @type {?} */

              var endHint = this._hintChildren ? this._hintChildren.find(
              /**
              * @param {?} hint
              * @return {?}
              */
              function (hint) {
                return hint.align === 'end';
              }) : null;

              if (startHint) {
                ids.push(startHint.id);
              } else if (this._hintLabel) {
                ids.push(this._hintLabelId);
              }

              if (endHint) {
                ids.push(endHint.id);
              }
            } else if (this._errorChildren) {
              ids = this._errorChildren.map(
              /**
              * @param {?} error
              * @return {?}
              */
              function (error) {
                return error.id;
              });
            }

            this._control.setDescribedByIds(ids);
          }
        }
        /**
         * Throws an error if the form field's control is missing.
         * @protected
         * @return {?}
         */

      }, {
        key: "_validateControlChild",
        value: function _validateControlChild() {
          if (!this._control) {
            throw getMatFormFieldMissingControlError();
          }
        }
        /**
         * Updates the width and position of the gap in the outline. Only relevant for the outline
         * appearance.
         * @return {?}
         */

      }, {
        key: "updateOutlineGap",
        value: function updateOutlineGap() {
          /** @type {?} */
          var labelEl = this._label ? this._label.nativeElement : null;

          if (this.appearance !== 'outline' || !labelEl || !labelEl.children.length || !labelEl.textContent.trim()) {
            return;
          }

          if (!this._platform.isBrowser) {
            // getBoundingClientRect isn't available on the server.
            return;
          } // If the element is not present in the DOM, the outline gap will need to be calculated
          // the next time it is checked and in the DOM.


          if (!this._isAttachedToDOM()) {
            this._outlineGapCalculationNeededImmediately = true;
            return;
          }
          /** @type {?} */


          var startWidth = 0;
          /** @type {?} */

          var gapWidth = 0;
          /** @type {?} */

          var container = this._connectionContainerRef.nativeElement;
          /** @type {?} */

          var startEls = container.querySelectorAll('.mat-form-field-outline-start');
          /** @type {?} */

          var gapEls = container.querySelectorAll('.mat-form-field-outline-gap');

          if (this._label && this._label.nativeElement.children.length) {
            /** @type {?} */
            var containerRect = container.getBoundingClientRect(); // If the container's width and height are zero, it means that the element is
            // invisible and we can't calculate the outline gap. Mark the element as needing
            // to be checked the next time the zone stabilizes. We can't do this immediately
            // on the next change detection, because even if the element becomes visible,
            // the `ClientRect` won't be reclaculated immediately. We reset the
            // `_outlineGapCalculationNeededImmediately` flag some we don't run the checks twice.

            if (containerRect.width === 0 && containerRect.height === 0) {
              this._outlineGapCalculationNeededOnStable = true;
              this._outlineGapCalculationNeededImmediately = false;
              return;
            }
            /** @type {?} */


            var containerStart = this._getStartEnd(containerRect);
            /** @type {?} */


            var labelStart = this._getStartEnd(labelEl.children[0].getBoundingClientRect());
            /** @type {?} */


            var labelWidth = 0;

            var _iterator = _createForOfIteratorHelper(labelEl.children),
                _step;

            try {
              for (_iterator.s(); !(_step = _iterator.n()).done;) {
                var child = _step.value;
                labelWidth += child.offsetWidth;
              }
            } catch (err) {
              _iterator.e(err);
            } finally {
              _iterator.f();
            }

            startWidth = Math.abs(labelStart - containerStart) - outlineGapPadding;
            gapWidth = labelWidth > 0 ? labelWidth * floatingLabelScale + outlineGapPadding * 2 : 0;
          }

          for (var i = 0; i < startEls.length; i++) {
            startEls[i].style.width = "".concat(startWidth, "px");
          }

          for (var _i = 0; _i < gapEls.length; _i++) {
            gapEls[_i].style.width = "".concat(gapWidth, "px");
          }

          this._outlineGapCalculationNeededOnStable = this._outlineGapCalculationNeededImmediately = false;
        }
        /**
         * Gets the start end of the rect considering the current directionality.
         * @private
         * @param {?} rect
         * @return {?}
         */

      }, {
        key: "_getStartEnd",
        value: function _getStartEnd(rect) {
          return this._dir && this._dir.value === 'rtl' ? rect.right : rect.left;
        }
        /**
         * Checks whether the form field is attached to the DOM.
         * @private
         * @return {?}
         */

      }, {
        key: "_isAttachedToDOM",
        value: function _isAttachedToDOM() {
          /** @type {?} */
          var element = this._elementRef.nativeElement;

          if (element.getRootNode) {
            /** @type {?} */
            var rootNode = element.getRootNode(); // If the element is inside the DOM the root node will be either the document
            // or the closest shadow root, otherwise it'll be the element itself.

            return rootNode && rootNode !== element;
          } // Otherwise fall back to checking if it's in the document. This doesn't account for
          // shadow DOM, however browser that support shadow DOM should support `getRootNode` as well.


          return (
            /** @type {?} */
            document.documentElement.contains(element)
          );
        }
      }, {
        key: "appearance",
        get: function get() {
          return this._appearance;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          /** @type {?} */
          var oldValue = this._appearance;
          this._appearance = value || this._defaults && this._defaults.appearance || 'legacy';

          if (this._appearance === 'outline' && oldValue !== value) {
            this._outlineGapCalculationNeededOnStable = true;
          }
        }
        /**
         * Whether the required marker should be hidden.
         * @return {?}
         */

      }, {
        key: "hideRequiredMarker",
        get: function get() {
          return this._hideRequiredMarker;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._hideRequiredMarker = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_5__["coerceBooleanProperty"])(value);
        }
        /**
         * Whether the floating label should always float or not.
         * @return {?}
         */

      }, {
        key: "_shouldAlwaysFloat",
        get: function get() {
          return this.floatLabel === 'always' && !this._showAlwaysAnimate;
        }
        /**
         * Whether the label can float or not.
         * @return {?}
         */

      }, {
        key: "_canLabelFloat",
        get: function get() {
          return this.floatLabel !== 'never';
        }
        /**
         * Text for the form field hint.
         * @return {?}
         */

      }, {
        key: "hintLabel",
        get: function get() {
          return this._hintLabel;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._hintLabel = value;

          this._processHints();
        }
        /**
         * Whether the label should always float, never float or float as the user types.
         *
         * Note: only the legacy appearance supports the `never` option. `never` was originally added as a
         * way to make the floating label emulate the behavior of a standard input placeholder. However
         * the form field now supports both floating labels and placeholders. Therefore in the non-legacy
         * appearances the `never` option has been disabled in favor of just using the placeholder.
         * @return {?}
         */

      }, {
        key: "floatLabel",
        get: function get() {
          return this.appearance !== 'legacy' && this._floatLabel === 'never' ? 'auto' : this._floatLabel;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== this._floatLabel) {
            this._floatLabel = value || this._getDefaultFloatLabelState();

            this._changeDetectorRef.markForCheck();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_control",
        get: function get() {
          // TODO(crisbeto): we need this workaround in order to support both Ivy and ViewEngine.
          //  We should clean this up once Ivy is the default renderer.
          return this._explicitFormFieldControl || this._controlNonStatic || this._controlStatic;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._explicitFormFieldControl = value;
        }
        /**
         * @return {?}
         */

      }, {
        key: "_labelChild",
        get: function get() {
          return this._labelChildNonStatic || this._labelChildStatic;
        }
      }]);

      return MatFormField;
    }(_MatFormFieldMixinBase);

    MatFormField.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
      args: [{
        selector: 'mat-form-field',
        exportAs: 'matFormField',
        template: "<div class=\"mat-form-field-wrapper\">\n  <div class=\"mat-form-field-flex\" #connectionContainer\n       (click)=\"_control.onContainerClick && _control.onContainerClick($event)\">\n\n    <!-- Outline used for outline appearance. -->\n    <ng-container *ngIf=\"appearance == 'outline'\">\n      <div class=\"mat-form-field-outline\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n      <div class=\"mat-form-field-outline mat-form-field-outline-thick\">\n        <div class=\"mat-form-field-outline-start\"></div>\n        <div class=\"mat-form-field-outline-gap\"></div>\n        <div class=\"mat-form-field-outline-end\"></div>\n      </div>\n    </ng-container>\n\n    <div class=\"mat-form-field-prefix\" *ngIf=\"_prefixChildren.length\">\n      <ng-content select=\"[matPrefix]\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-infix\" #inputContainer>\n      <ng-content></ng-content>\n\n      <span class=\"mat-form-field-label-wrapper\">\n        <!-- We add aria-owns as a workaround for an issue in JAWS & NVDA where the label isn't\n             read if it comes before the control in the DOM. -->\n        <label class=\"mat-form-field-label\"\n               (cdkObserveContent)=\"updateOutlineGap()\"\n               [cdkObserveContentDisabled]=\"appearance != 'outline'\"\n               [id]=\"_labelId\"\n               [attr.for]=\"_control.id\"\n               [attr.aria-owns]=\"_control.id\"\n               [class.mat-empty]=\"_control.empty && !_shouldAlwaysFloat\"\n               [class.mat-form-field-empty]=\"_control.empty && !_shouldAlwaysFloat\"\n               [class.mat-accent]=\"color == 'accent'\"\n               [class.mat-warn]=\"color == 'warn'\"\n               #label\n               *ngIf=\"_hasFloatingLabel()\"\n               [ngSwitch]=\"_hasLabel()\">\n\n          <!-- @breaking-change 8.0.0 remove in favor of mat-label element an placeholder attr. -->\n          <ng-container *ngSwitchCase=\"false\">\n            <ng-content select=\"mat-placeholder\"></ng-content>\n            <span>{{_control.placeholder}}</span>\n          </ng-container>\n\n          <ng-content select=\"mat-label\" *ngSwitchCase=\"true\"></ng-content>\n\n          <!-- @breaking-change 8.0.0 remove `mat-placeholder-required` class -->\n          <span\n            class=\"mat-placeholder-required mat-form-field-required-marker\"\n            aria-hidden=\"true\"\n            *ngIf=\"!hideRequiredMarker && _control.required && !_control.disabled\">&#32;*</span>\n        </label>\n      </span>\n    </div>\n\n    <div class=\"mat-form-field-suffix\" *ngIf=\"_suffixChildren.length\">\n      <ng-content select=\"[matSuffix]\"></ng-content>\n    </div>\n  </div>\n\n  <!-- Underline used for legacy, standard, and box appearances. -->\n  <div class=\"mat-form-field-underline\" #underline\n       *ngIf=\"appearance != 'outline'\">\n    <span class=\"mat-form-field-ripple\"\n          [class.mat-accent]=\"color == 'accent'\"\n          [class.mat-warn]=\"color == 'warn'\"></span>\n  </div>\n\n  <div class=\"mat-form-field-subscript-wrapper\"\n       [ngSwitch]=\"_getDisplayedMessages()\">\n    <div *ngSwitchCase=\"'error'\" [@transitionMessages]=\"_subscriptAnimationState\">\n      <ng-content select=\"mat-error\"></ng-content>\n    </div>\n\n    <div class=\"mat-form-field-hint-wrapper\" *ngSwitchCase=\"'hint'\"\n      [@transitionMessages]=\"_subscriptAnimationState\">\n      <!-- TODO(mmalerba): use an actual <mat-hint> once all selectors are switched to mat-* -->\n      <div *ngIf=\"hintLabel\" [id]=\"_hintLabelId\" class=\"mat-hint\">{{hintLabel}}</div>\n      <ng-content select=\"mat-hint:not([align='end'])\"></ng-content>\n      <div class=\"mat-form-field-hint-spacer\"></div>\n      <ng-content select=\"mat-hint[align='end']\"></ng-content>\n    </div>\n  </div>\n</div>\n",
        animations: [matFormFieldAnimations.transitionMessages],
        host: {
          'class': 'mat-form-field',
          '[class.mat-form-field-appearance-standard]': 'appearance == "standard"',
          '[class.mat-form-field-appearance-fill]': 'appearance == "fill"',
          '[class.mat-form-field-appearance-outline]': 'appearance == "outline"',
          '[class.mat-form-field-appearance-legacy]': 'appearance == "legacy"',
          '[class.mat-form-field-invalid]': '_control.errorState',
          '[class.mat-form-field-can-float]': '_canLabelFloat',
          '[class.mat-form-field-should-float]': '_shouldLabelFloat()',
          '[class.mat-form-field-has-label]': '_hasFloatingLabel()',
          '[class.mat-form-field-hide-placeholder]': '_hideControlPlaceholder()',
          '[class.mat-form-field-disabled]': '_control.disabled',
          '[class.mat-form-field-autofilled]': '_control.autofilled',
          '[class.mat-focused]': '_control.focused',
          '[class.mat-accent]': 'color == "accent"',
          '[class.mat-warn]': 'color == "warn"',
          '[class.ng-untouched]': '_shouldForward("untouched")',
          '[class.ng-touched]': '_shouldForward("touched")',
          '[class.ng-pristine]': '_shouldForward("pristine")',
          '[class.ng-dirty]': '_shouldForward("dirty")',
          '[class.ng-valid]': '_shouldForward("valid")',
          '[class.ng-invalid]': '_shouldForward("invalid")',
          '[class.ng-pending]': '_shouldForward("pending")',
          '[class._mat-animation-noopable]': '!_animationsEnabled'
        },
        inputs: ['color'],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectionStrategy"].OnPush,
        providers: [{
          provide: MAT_FORM_FIELD,
          useExisting: MatFormField
        }],
        styles: [".mat-form-field{display:inline-block;position:relative;text-align:left}[dir=rtl] .mat-form-field{text-align:right}.mat-form-field-wrapper{position:relative}.mat-form-field-flex{display:inline-flex;align-items:baseline;box-sizing:border-box;width:100%}.mat-form-field-prefix,.mat-form-field-suffix{white-space:nowrap;flex:none;position:relative}.mat-form-field-infix{display:block;position:relative;flex:auto;min-width:0;width:180px}.cdk-high-contrast-active .mat-form-field-infix{border-image:linear-gradient(transparent, transparent)}.mat-form-field-label-wrapper{position:absolute;left:0;box-sizing:content-box;width:100%;height:100%;overflow:hidden;pointer-events:none}[dir=rtl] .mat-form-field-label-wrapper{left:auto;right:0}.mat-form-field-label{position:absolute;left:0;font:inherit;pointer-events:none;width:100%;white-space:nowrap;text-overflow:ellipsis;overflow:hidden;transform-origin:0 0;transition:transform 400ms cubic-bezier(0.25, 0.8, 0.25, 1),color 400ms cubic-bezier(0.25, 0.8, 0.25, 1),width 400ms cubic-bezier(0.25, 0.8, 0.25, 1);display:none}[dir=rtl] .mat-form-field-label{transform-origin:100% 0;left:auto;right:0}.mat-form-field-empty.mat-form-field-label,.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-label{display:block}.mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-form-field-autofill-control:-webkit-autofill+.mat-form-field-label-wrapper .mat-form-field-label{display:block;transition:none}.mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:none}.mat-form-field-can-float .mat-input-server:focus+.mat-form-field-label-wrapper .mat-form-field-label,.mat-form-field-can-float .mat-input-server[placeholder]:not(:placeholder-shown)+.mat-form-field-label-wrapper .mat-form-field-label{display:block}.mat-form-field-label:not(.mat-form-field-empty){transition:none}.mat-form-field-underline{position:absolute;width:100%;pointer-events:none;transform:scale3d(1, 1.0001, 1)}.mat-form-field-ripple{position:absolute;left:0;width:100%;transform-origin:50%;transform:scaleX(0.5);opacity:0;transition:background-color 300ms cubic-bezier(0.55, 0, 0.55, 0.2)}.mat-form-field.mat-focused .mat-form-field-ripple,.mat-form-field.mat-form-field-invalid .mat-form-field-ripple{opacity:1;transform:scaleX(1);transition:transform 300ms cubic-bezier(0.25, 0.8, 0.25, 1),opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1),background-color 300ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-subscript-wrapper{position:absolute;box-sizing:border-box;width:100%;overflow:hidden}.mat-form-field-subscript-wrapper .mat-icon,.mat-form-field-label-wrapper .mat-icon{width:1em;height:1em;font-size:inherit;vertical-align:baseline}.mat-form-field-hint-wrapper{display:flex}.mat-form-field-hint-spacer{flex:1 0 1em}.mat-error{display:block}.mat-form-field-control-wrapper{position:relative}.mat-form-field._mat-animation-noopable .mat-form-field-label,.mat-form-field._mat-animation-noopable .mat-form-field-ripple{transition:none}\n", ".mat-form-field-appearance-fill .mat-form-field-flex{border-radius:4px 4px 0 0;padding:.75em .75em 0 .75em}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-flex{outline:solid 1px}.mat-form-field-appearance-fill .mat-form-field-underline::before{content:\"\";display:block;position:absolute;bottom:0;height:1px;width:100%}.mat-form-field-appearance-fill .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-fill .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-fill:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-fill._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}.mat-form-field-appearance-fill .mat-form-field-subscript-wrapper{padding:0 1em}\n", ".mat-input-element{font:inherit;background:transparent;color:currentColor;border:none;outline:none;padding:0;margin:0;width:100%;max-width:100%;vertical-align:bottom;text-align:inherit}.mat-input-element:-moz-ui-invalid{box-shadow:none}.mat-input-element::-ms-clear,.mat-input-element::-ms-reveal{display:none}.mat-input-element,.mat-input-element::-webkit-search-cancel-button,.mat-input-element::-webkit-search-decoration,.mat-input-element::-webkit-search-results-button,.mat-input-element::-webkit-search-results-decoration{-webkit-appearance:none}.mat-input-element::-webkit-contacts-auto-fill-button,.mat-input-element::-webkit-caps-lock-indicator,.mat-input-element::-webkit-credentials-auto-fill-button{visibility:hidden}.mat-input-element[type=date],.mat-input-element[type=datetime],.mat-input-element[type=datetime-local],.mat-input-element[type=month],.mat-input-element[type=week],.mat-input-element[type=time]{line-height:1}.mat-input-element[type=date]::after,.mat-input-element[type=datetime]::after,.mat-input-element[type=datetime-local]::after,.mat-input-element[type=month]::after,.mat-input-element[type=week]::after,.mat-input-element[type=time]::after{content:\" \";white-space:pre;width:1px}.mat-input-element::-webkit-inner-spin-button,.mat-input-element::-webkit-calendar-picker-indicator,.mat-input-element::-webkit-clear-button{font-size:.75em}.mat-input-element::placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-moz-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-moz-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element::-webkit-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element::-webkit-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-input-element:-ms-input-placeholder{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;transition:color 400ms 133.3333333333ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-input-element:-ms-input-placeholder:-ms-input-placeholder{-ms-user-select:text}.mat-form-field-hide-placeholder .mat-input-element::placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-moz-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element::-webkit-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}.mat-form-field-hide-placeholder .mat-input-element:-ms-input-placeholder{color:transparent !important;-webkit-text-fill-color:transparent;transition:none}textarea.mat-input-element{resize:vertical;overflow:auto}textarea.mat-input-element.cdk-textarea-autosize{resize:none}textarea.mat-input-element{padding:2px 0;margin:-2px 0}select.mat-input-element{-moz-appearance:none;-webkit-appearance:none;position:relative;background-color:transparent;display:inline-flex;box-sizing:border-box;padding-top:1em;top:-1em;margin-bottom:-1em}select.mat-input-element::-ms-expand{display:none}select.mat-input-element::-moz-focus-inner{border:0}select.mat-input-element:not(:disabled){cursor:pointer}select.mat-input-element::-ms-value{color:inherit;background:none}.mat-focused .cdk-high-contrast-active select.mat-input-element::-ms-value{color:inherit}.mat-form-field-type-mat-native-select .mat-form-field-infix::after{content:\"\";width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid;position:absolute;top:50%;right:0;margin-top:-2.5px;pointer-events:none}[dir=rtl] .mat-form-field-type-mat-native-select .mat-form-field-infix::after{right:auto;left:0}.mat-form-field-type-mat-native-select .mat-input-element{padding-right:15px}[dir=rtl] .mat-form-field-type-mat-native-select .mat-input-element{padding-right:0;padding-left:15px}.mat-form-field-type-mat-native-select .mat-form-field-label-wrapper{max-width:calc(100% - 10px)}.mat-form-field-type-mat-native-select.mat-form-field-appearance-outline .mat-form-field-infix::after{margin-top:-5px}.mat-form-field-type-mat-native-select.mat-form-field-appearance-fill .mat-form-field-infix::after{margin-top:-10px}\n", ".mat-form-field-appearance-legacy .mat-form-field-label{transform:perspective(100px);-ms-transform:none}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon{width:1em}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button{font:inherit;vertical-align:baseline}.mat-form-field-appearance-legacy .mat-form-field-prefix .mat-icon-button .mat-icon,.mat-form-field-appearance-legacy .mat-form-field-suffix .mat-icon-button .mat-icon{font-size:inherit}.mat-form-field-appearance-legacy .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-legacy .mat-form-field-ripple{top:0;height:2px;overflow:hidden}.cdk-high-contrast-active .mat-form-field-appearance-legacy .mat-form-field-ripple{height:0;border-top:solid 2px}.mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-legacy.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-legacy.mat-form-field-invalid:not(.mat-focused) .mat-form-field-ripple{height:1px}\n", ".mat-form-field-appearance-outline .mat-form-field-wrapper{margin:.25em 0}.mat-form-field-appearance-outline .mat-form-field-flex{padding:0 .75em 0 .75em;margin-top:-0.25em;position:relative}.mat-form-field-appearance-outline .mat-form-field-prefix,.mat-form-field-appearance-outline .mat-form-field-suffix{top:.25em}.mat-form-field-appearance-outline .mat-form-field-outline{display:flex;position:absolute;top:.25em;left:0;right:0;bottom:0;pointer-events:none}.mat-form-field-appearance-outline .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-end{border:1px solid currentColor;min-width:5px}.mat-form-field-appearance-outline .mat-form-field-outline-start{border-radius:5px 0 0 5px;border-right-style:none}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-start{border-right-style:solid;border-left-style:none;border-radius:0 5px 5px 0}.mat-form-field-appearance-outline .mat-form-field-outline-end{border-radius:0 5px 5px 0;border-left-style:none;flex-grow:1}[dir=rtl] .mat-form-field-appearance-outline .mat-form-field-outline-end{border-left-style:solid;border-right-style:none;border-radius:5px 0 0 5px}.mat-form-field-appearance-outline .mat-form-field-outline-gap{border-radius:.000001px;border:1px solid currentColor;border-left-style:none;border-right-style:none}.mat-form-field-appearance-outline.mat-form-field-can-float.mat-form-field-should-float .mat-form-field-outline-gap{border-top-color:transparent}.mat-form-field-appearance-outline .mat-form-field-outline-thick{opacity:0}.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-start,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-end,.mat-form-field-appearance-outline .mat-form-field-outline-thick .mat-form-field-outline-gap{border-width:2px}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline{opacity:0;transition:opacity 100ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline.mat-focused .mat-form-field-outline-thick,.mat-form-field-appearance-outline.mat-form-field-invalid .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline{opacity:0;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-outline:not(.mat-form-field-disabled) .mat-form-field-flex:hover .mat-form-field-outline-thick{opacity:1}.mat-form-field-appearance-outline .mat-form-field-subscript-wrapper{padding:0 1em}.mat-form-field-appearance-outline._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-start,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-end,.mat-form-field-appearance-outline._mat-animation-noopable .mat-form-field-outline-gap{transition:none}\n", ".mat-form-field-appearance-standard .mat-form-field-flex{padding-top:.75em}.mat-form-field-appearance-standard .mat-form-field-underline{height:1px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-underline{height:0;border-top:solid 1px}.mat-form-field-appearance-standard .mat-form-field-ripple{bottom:0;height:2px}.cdk-high-contrast-active .mat-form-field-appearance-standard .mat-form-field-ripple{height:0;border-top:2px}.mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{background-position:0;background-color:transparent}.cdk-high-contrast-active .mat-form-field-appearance-standard.mat-form-field-disabled .mat-form-field-underline{border-top-style:dotted;border-top-width:2px}.mat-form-field-appearance-standard:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{opacity:1;transform:none;transition:opacity 600ms cubic-bezier(0.25, 0.8, 0.25, 1)}.mat-form-field-appearance-standard._mat-animation-noopable:not(.mat-form-field-disabled) .mat-form-field-flex:hover~.mat-form-field-underline .mat-form-field-ripple{transition:none}\n"]
      }]
    }];
    /** @nocollapse */

    MatFormField.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ChangeDetectorRef"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MAT_LABEL_GLOBAL_OPTIONS"]]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_4__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [MAT_FORM_FIELD_DEFAULT_OPTIONS]
        }]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgZone"]
      }, {
        type: String,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Inject"],
          args: [_angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["ANIMATION_MODULE_TYPE"]]
        }]
      }];
    };

    MatFormField.propDecorators = {
      appearance: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      hideRequiredMarker: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      hintLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      floatLabel: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Input"]
      }],
      underlineRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: ['underline']
      }],
      _connectionContainerRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: ['connectionContainer', {
          "static": true
        }]
      }],
      _inputContainerRef: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: ['inputContainer']
      }],
      _label: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
        args: ['label']
      }],
      _controlNonStatic: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
        args: [MatFormFieldControl]
      }],
      _controlStatic: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
        args: [MatFormFieldControl, {
          "static": true
        }]
      }],
      _labelChildNonStatic: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
        args: [MatLabel]
      }],
      _labelChildStatic: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
        args: [MatLabel, {
          "static": true
        }]
      }],
      _placeholderChild: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChild"],
        args: [MatPlaceholder]
      }],
      _errorChildren: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
        args: [MatError, {
          descendants: true
        }]
      }],
      _hintChildren: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
        args: [MatHint, {
          descendants: true
        }]
      }],
      _prefixChildren: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
        args: [MatPrefix, {
          descendants: true
        }]
      }],
      _suffixChildren: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ContentChildren"],
        args: [MatSuffix, {
          descendants: true
        }]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/form-field-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatFormFieldModule = function MatFormFieldModule() {
      _classCallCheck(this, MatFormFieldModule);
    };

    MatFormFieldModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
      args: [{
        declarations: [MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], _angular_cdk_observers__WEBPACK_IMPORTED_MODULE_0__["ObserversModule"]],
        exports: [_angular_material_core__WEBPACK_IMPORTED_MODULE_3__["MatCommonModule"], MatError, MatFormField, MatHint, MatLabel, MatPlaceholder, MatPrefix, MatSuffix]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/form-field/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=form-field.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/fesm2015/input.js":
  /*!**********************************************************!*\
    !*** ./node_modules/@angular/material/fesm2015/input.js ***!
    \**********************************************************/

  /*! exports provided: MAT_INPUT_VALUE_ACCESSOR, MatInput, MatInputModule, MatTextareaAutosize, getMatInputUnsupportedTypeError */

  /***/
  function node_modulesAngularMaterialFesm2015InputJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_INPUT_VALUE_ACCESSOR", function () {
      return MAT_INPUT_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatInput", function () {
      return MatInput;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatInputModule", function () {
      return MatInputModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTextareaAutosize", function () {
      return MatTextareaAutosize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatInputUnsupportedTypeError", function () {
      return getMatInputUnsupportedTypeError;
    });
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/fesm2015/text-field.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/fesm2015/form-field.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/input/autosize.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Directive to automatically resize a textarea to fit its content.
     * @deprecated Use `cdkTextareaAutosize` from `\@angular/cdk/text-field` instead.
     * \@breaking-change 8.0.0
     */


    var MatTextareaAutosize = /*#__PURE__*/function (_angular_cdk_text_fie) {
      _inherits(MatTextareaAutosize, _angular_cdk_text_fie);

      var _super4 = _createSuper(MatTextareaAutosize);

      function MatTextareaAutosize() {
        _classCallCheck(this, MatTextareaAutosize);

        return _super4.apply(this, arguments);
      }

      _createClass(MatTextareaAutosize, [{
        key: "matAutosizeMinRows",

        /**
         * @return {?}
         */
        get: function get() {
          return this.minRows;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.minRows = value;
        }
        /**
         * @return {?}
         */

      }, {
        key: "matAutosizeMaxRows",
        get: function get() {
          return this.maxRows;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.maxRows = value;
        }
        /**
         * @return {?}
         */

      }, {
        key: "matAutosize",
        get: function get() {
          return this.enabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.enabled = value;
        }
        /**
         * @return {?}
         */

      }, {
        key: "matTextareaAutosize",
        get: function get() {
          return this.enabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.enabled = value;
        }
      }]);

      return MatTextareaAutosize;
    }(_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["CdkTextareaAutosize"]);

    MatTextareaAutosize.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: 'textarea[mat-autosize], textarea[matTextareaAutosize]',
        exportAs: 'matTextareaAutosize',
        inputs: ['cdkAutosizeMinRows', 'cdkAutosizeMaxRows'],
        host: {
          'class': 'cdk-textarea-autosize mat-autosize',
          // Textarea elements that have the directive applied should have a single row by default.
          // Browsers normally show two rows by default and therefore this limits the minRows binding.
          'rows': '1'
        }
      }]
    }];
    MatTextareaAutosize.propDecorators = {
      matAutosizeMinRows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      matAutosizeMaxRows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      matAutosize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['mat-autosize']
      }],
      matTextareaAutosize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/input/input-errors.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * \@docs-private
     * @param {?} type
     * @return {?}
     */

    function getMatInputUnsupportedTypeError(type) {
      return Error("Input type \"".concat(type, "\" isn't supported by matInput."));
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/input/input-value-accessor.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This token is used to inject the object whose value should be set into `MatInput`. If none is
     * provided, the native `HTMLInputElement` is used. Directives like `MatDatepickerInput` can provide
     * themselves for this token, in order to make `MatInput` delegate the getting and setting of the
     * value to them.
     * @type {?}
     */


    var MAT_INPUT_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MAT_INPUT_VALUE_ACCESSOR');
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/input/input.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Invalid input type. Using one of these will throw an MatInputUnsupportedTypeError.

    /** @type {?} */

    var MAT_INPUT_INVALID_TYPES = ['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'range', 'reset', 'submit'];
    /** @type {?} */

    var nextUniqueId = 0; // Boilerplate for applying mixins to MatInput.

    /**
     * \@docs-private
     */

    var MatInputBase =
    /**
     * @param {?} _defaultErrorStateMatcher
     * @param {?} _parentForm
     * @param {?} _parentFormGroup
     * @param {?} ngControl
     */
    function MatInputBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
      _classCallCheck(this, MatInputBase);

      this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
      this._parentForm = _parentForm;
      this._parentFormGroup = _parentFormGroup;
      this.ngControl = ngControl;
    };

    if (false) {}
    /** @type {?} */


    var _MatInputMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinErrorState"])(MatInputBase);
    /**
     * Directive that allows a native input to work inside a `MatFormField`.
     */


    var MatInput = /*#__PURE__*/function (_MatInputMixinBase2) {
      _inherits(MatInput, _MatInputMixinBase2);

      var _super5 = _createSuper(MatInput);

      /**
       * @param {?} _elementRef
       * @param {?} _platform
       * @param {?} ngControl
       * @param {?} _parentForm
       * @param {?} _parentFormGroup
       * @param {?} _defaultErrorStateMatcher
       * @param {?} inputValueAccessor
       * @param {?} _autofillMonitor
       * @param {?} ngZone
       */
      function MatInput(_elementRef, _platform, ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, inputValueAccessor, _autofillMonitor, ngZone) {
        var _this28;

        _classCallCheck(this, MatInput);

        _this28 = _super5.call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl);
        _this28._elementRef = _elementRef;
        _this28._platform = _platform;
        _this28.ngControl = ngControl;
        _this28._autofillMonitor = _autofillMonitor;
        _this28._uid = "mat-input-".concat(nextUniqueId++);
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */

        _this28.focused = false;
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */

        _this28.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */

        _this28.controlType = 'mat-input';
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */

        _this28.autofilled = false;
        _this28._disabled = false;
        _this28._required = false;
        _this28._type = 'text';
        _this28._readonly = false;
        _this28._neverEmptyInputTypes = ['date', 'datetime', 'datetime-local', 'month', 'time', 'week'].filter(
        /**
        * @param {?} t
        * @return {?}
        */
        function (t) {
          return Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["getSupportedInputTypes"])().has(t);
        });
        /** @type {?} */

        var element = _this28._elementRef.nativeElement;
        /** @type {?} */

        var nodeName = element.nodeName.toLowerCase(); // If no input value accessor was explicitly specified, use the element as the input value
        // accessor.

        _this28._inputValueAccessor = inputValueAccessor || element;
        _this28._previousNativeValue = _this28.value; // Force setter to be called in case id was not specified.

        _this28.id = _this28.id; // On some versions of iOS the caret gets stuck in the wrong place when holding down the delete
        // key. In order to get around this we need to "jiggle" the caret loose. Since this bug only
        // exists on iOS, we only bother to install the listener on iOS.

        if (_platform.IOS) {
          ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _elementRef.nativeElement.addEventListener('keyup',
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              /** @type {?} */
              var el =
              /** @type {?} */
              event.target;

              if (!el.value && !el.selectionStart && !el.selectionEnd) {
                // Note: Just setting `0, 0` doesn't fix the issue. Setting
                // `1, 1` fixes it for the first time that you type text and
                // then hold delete. Toggling to `1, 1` and then back to
                // `0, 0` seems to completely fix it.
                el.setSelectionRange(1, 1);
                el.setSelectionRange(0, 0);
              }
            });
          });
        }

        _this28._isServer = !_this28._platform.isBrowser;
        _this28._isNativeSelect = nodeName === 'select';
        _this28._isTextarea = nodeName === 'textarea';

        if (_this28._isNativeSelect) {
          _this28.controlType =
          /** @type {?} */
          element.multiple ? 'mat-native-select-multiple' : 'mat-native-select';
        }

        return _this28;
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * \@docs-private
       * @return {?}
       */


      _createClass(MatInput, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this29 = this;

          if (this._platform.isBrowser) {
            this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              _this29.autofilled = event.isAutofilled;

              _this29.stateChanges.next();
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.stateChanges.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.stateChanges.complete();

          if (this._platform.isBrowser) {
            this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.ngControl) {
            // We need to re-evaluate this on every change detection cycle, because there are some
            // error triggers that we can't subscribe to (e.g. parent form submissions). This means
            // that whatever logic is in here has to be super lean or we risk destroying the performance.
            this.updateErrorState();
          } // We need to dirty-check the native element's value, because there are some cases where
          // we won't be notified when it changes (e.g. the consumer isn't using forms or they're
          // updating the value using `emitEvent: false`).


          this._dirtyCheckNativeValue();
        }
        /**
         * Focuses the input.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus(options) {
          this._elementRef.nativeElement.focus(options);
        } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.

        /**
         * Callback for the cases where the focused state of the input changes.
         * @param {?} isFocused
         * @return {?}
         */
        // tslint:disable:no-host-decorator-in-concrete
        // tslint:enable:no-host-decorator-in-concrete

      }, {
        key: "_focusChanged",
        value: function _focusChanged(isFocused) {
          if (isFocused !== this.focused && (!this.readonly || !isFocused)) {
            this.focused = isFocused;
            this.stateChanges.next();
          }
        } // We have to use a `HostListener` here in order to support both Ivy and ViewEngine.
        // In Ivy the `host` bindings will be merged when this class is extended, whereas in
        // ViewEngine they're overwritten.
        // TODO(crisbeto): we move this back into `host` once Ivy is turned on by default.
        // tslint:disable-next-line:no-host-decorator-in-concrete

        /**
         * @return {?}
         */

      }, {
        key: "_onInput",
        value: function _onInput() {} // This is a noop function and is used to let Angular know whenever the value changes.
        // Angular will run a new change detection each time the `input` event has been dispatched.
        // It's necessary that Angular recognizes the value change, because when floatingLabel
        // is set to false and Angular forms aren't used, the placeholder won't recognize the
        // value changes and will not disappear.
        // Listening to the input event wouldn't be necessary when the input is using the
        // FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.

        /**
         * Does some manual dirty checking on the native input `value` property.
         * @protected
         * @return {?}
         */

      }, {
        key: "_dirtyCheckNativeValue",
        value: function _dirtyCheckNativeValue() {
          /** @type {?} */
          var newValue = this._elementRef.nativeElement.value;

          if (this._previousNativeValue !== newValue) {
            this._previousNativeValue = newValue;
            this.stateChanges.next();
          }
        }
        /**
         * Make sure the input is a supported type.
         * @protected
         * @return {?}
         */

      }, {
        key: "_validateType",
        value: function _validateType() {
          if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1) {
            throw getMatInputUnsupportedTypeError(this._type);
          }
        }
        /**
         * Checks whether the input type is one of the types that are never empty.
         * @protected
         * @return {?}
         */

      }, {
        key: "_isNeverEmpty",
        value: function _isNeverEmpty() {
          return this._neverEmptyInputTypes.indexOf(this._type) > -1;
        }
        /**
         * Checks whether the input is invalid based on the native validation.
         * @protected
         * @return {?}
         */

      }, {
        key: "_isBadInput",
        value: function _isBadInput() {
          // The `validity` property won't be present on platform-server.

          /** @type {?} */
          var validity =
          /** @type {?} */
          this._elementRef.nativeElement.validity;
          return validity && validity.badInput;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "setDescribedByIds",

        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @param {?} ids
         * @return {?}
         */
        value: function setDescribedByIds(ids) {
          this._ariaDescribedby = ids.join(' ');
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "onContainerClick",
        value: function onContainerClick() {
          // Do not re-focus the input element if the element is already focused. Otherwise it can happen
          // that someone clicks on a time input and the cursor resets to the "hours" field while the
          // "minutes" field was actually clicked. See: https://github.com/angular/components/issues/12849
          if (!this.focused) {
            this.focus();
          }
        }
      }, {
        key: "disabled",
        get: function get() {
          if (this.ngControl && this.ngControl.disabled !== null) {
            return this.ngControl.disabled;
          }

          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value); // Browsers may not fire the blur event if the input is disabled too quickly.
          // Reset from here to ensure that the element doesn't become stuck.

          if (this.focused) {
            this.focused = false;
            this.stateChanges.next();
          }
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "id",
        get: function get() {
          return this._id;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._id = value || this._uid;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "required",
        get: function get() {
          return this._required;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
        /**
         * Input type of the element.
         * @return {?}
         */

      }, {
        key: "type",
        get: function get() {
          return this._type;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._type = value || 'text';

          this._validateType(); // When using Angular inputs, developers are no longer able to set the properties on the native
          // input element. To ensure that bindings for `type` work, we need to sync the setter
          // with the native property. Textarea elements don't support the type property or attribute.


          if (!this._isTextarea && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["getSupportedInputTypes"])().has(this._type)) {
            /** @type {?} */
            this._elementRef.nativeElement.type = this._type;
          }
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this._inputValueAccessor.value;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== this.value) {
            this._inputValueAccessor.value = value;
            this.stateChanges.next();
          }
        }
        /**
         * Whether the element is readonly.
         * @return {?}
         */

      }, {
        key: "readonly",
        get: function get() {
          return this._readonly;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._readonly = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
      }, {
        key: "empty",
        get: function get() {
          return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "shouldLabelFloat",
        get: function get() {
          if (this._isNativeSelect) {
            // For a single-selection `<select>`, the label should float when the selected option has
            // a non-empty display value. For a `<select multiple>`, the label *always* floats to avoid
            // overlapping the label with the options.

            /** @type {?} */
            var selectElement =
            /** @type {?} */
            this._elementRef.nativeElement;
            /** @type {?} */

            var firstOption = selectElement.options[0]; // On most browsers the `selectedIndex` will always be 0, however on IE and Edge it'll be
            // -1 if the `value` is set to something, that isn't in the list of options, at a later point.

            return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
          } else {
            return this.focused || !this.empty;
          }
        }
      }]);

      return MatInput;
    }(_MatInputMixinBase);

    MatInput.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
      args: [{
        selector: "input[matInput], textarea[matInput], select[matNativeControl],\n      input[matNativeControl], textarea[matNativeControl]",
        exportAs: 'matInput',
        host: {
          /**
           * \@breaking-change 8.0.0 remove .mat-form-field-autofill-control in favor of AutofillMonitor.
           */
          'class': 'mat-input-element mat-form-field-autofill-control',
          '[class.mat-input-server]': '_isServer',
          // Native input properties that are overwritten by Angular inputs need to be synced with
          // the native input element. Otherwise property bindings for those don't work.
          '[attr.id]': 'id',
          '[attr.placeholder]': 'placeholder',
          '[disabled]': 'disabled',
          '[required]': 'required',
          '[attr.readonly]': 'readonly && !_isNativeSelect || null',
          '[attr.aria-describedby]': '_ariaDescribedby || null',
          '[attr.aria-invalid]': 'errorState',
          '[attr.aria-required]': 'required.toString()'
        },
        providers: [{
          provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldControl"],
          useExisting: MatInput
        }]
      }]
    }];
    /** @nocollapse */

    MatInput.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [MAT_INPUT_VALUE_ACCESSOR]
        }]
      }, {
        type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    MatInput.propDecorators = {
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      placeholder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      required: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      errorStateMatcher: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      readonly: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      _focusChanged: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
        args: ['focus', ['true']]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
        args: ['blur', ['false']]
      }],
      _onInput: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
        args: ['input']
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/input/input-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatInputModule = function MatInputModule() {
      _classCallCheck(this, MatInputModule);
    };

    MatInputModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
      args: [{
        declarations: [MatInput, MatTextareaAutosize],
        imports: [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]],
        exports: [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
        // be used together with `MatFormField`.
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], MatInput, MatTextareaAutosize],
        providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/input/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=input.js.map

    /***/
  }
}]);
//# sourceMappingURL=default~excel-table-excel-table-module~generate-emi-generate-emi-module~loan-foreclosure-loan-forecl~b5d52a7d-es5.js.map