function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~close-account-close-account-module~generate-statement-generate-statement-module~upload-all-u~9cc96008"], {
  /***/
  "./node_modules/@angular/cdk/fesm2015/layout.js":
  /*!******************************************************!*\
    !*** ./node_modules/@angular/cdk/fesm2015/layout.js ***!
    \******************************************************/

  /*! exports provided: BreakpointObserver, Breakpoints, LayoutModule, MediaMatcher */

  /***/
  function node_modulesAngularCdkFesm2015LayoutJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreakpointObserver", function () {
      return BreakpointObserver;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Breakpoints", function () {
      return Breakpoints;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
      return LayoutModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MediaMatcher", function () {
      return MediaMatcher;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/fesm2015/platform.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/layout/layout-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var LayoutModule = function LayoutModule() {
      _classCallCheck(this, LayoutModule);
    };

    LayoutModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
      args: [{}]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/layout/media-matcher.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Global registry for all dynamically-created, injected media queries.
     * @type {?}
     */

    var mediaQueriesForWebkitCompatibility = new Set();
    /**
     * Style tag that holds all of the dynamically-created media queries.
     * @type {?}
     */

    var mediaQueryStyleNode;
    /**
     * A utility for calling matchMedia queries.
     */

    var MediaMatcher = /*#__PURE__*/function () {
      /**
       * @param {?} _platform
       */
      function MediaMatcher(_platform) {
        _classCallCheck(this, MediaMatcher);

        this._platform = _platform;
        this._matchMedia = this._platform.isBrowser && window.matchMedia ? // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
        // call it from a different scope.
        window.matchMedia.bind(window) : noopMatchMedia;
      }
      /**
       * Evaluates the given media query and returns the native MediaQueryList from which results
       * can be retrieved.
       * Confirms the layout engine will trigger for the selector query provided and returns the
       * MediaQueryList for the query provided.
       * @param {?} query
       * @return {?}
       */


      _createClass(MediaMatcher, [{
        key: "matchMedia",
        value: function matchMedia(query) {
          if (this._platform.WEBKIT) {
            createEmptyStyleRule(query);
          }

          return this._matchMedia(query);
        }
      }]);

      return MediaMatcher;
    }();

    MediaMatcher.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    MediaMatcher.ctorParameters = function () {
      return [{
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]
      }];
    };
    /** @nocollapse */


    MediaMatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function MediaMatcher_Factory() {
        return new MediaMatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]));
      },
      token: MediaMatcher,
      providedIn: "root"
    });

    if (false) {}
    /**
     * For Webkit engines that only trigger the MediaQueryListListener when
     * there is at least one CSS selector for the respective media query.
     * @param {?} query
     * @return {?}
     */


    function createEmptyStyleRule(query) {
      if (mediaQueriesForWebkitCompatibility.has(query)) {
        return;
      }

      try {
        if (!mediaQueryStyleNode) {
          mediaQueryStyleNode = document.createElement('style');
          mediaQueryStyleNode.setAttribute('type', 'text/css');

          /** @type {?} */
          document.head.appendChild(mediaQueryStyleNode);
        }

        if (mediaQueryStyleNode.sheet) {
          /** @type {?} */
          mediaQueryStyleNode.sheet.insertRule("@media ".concat(query, " {.fx-query-test{ }}"), 0);
          mediaQueriesForWebkitCompatibility.add(query);
        }
      } catch (e) {
        console.error(e);
      }
    }
    /**
     * No-op matchMedia replacement for non-browser platforms.
     * @param {?} query
     * @return {?}
     */


    function noopMatchMedia(query) {
      // Use `as any` here to avoid adding additional necessary properties for
      // the noop matcher.
      return (
        /** @type {?} */
        {
          matches: query === 'all' || query === '',
          media: query,
          addListener:
          /**
          * @return {?}
          */
          function addListener() {},
          removeListener:
          /**
          * @return {?}
          */
          function removeListener() {}
        }
      );
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/layout/breakpoints-observer.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The current state of a layout breakpoint.
     * @record
     */


    function BreakpointState() {}

    if (false) {}
    /**
     * The current state of a layout breakpoint.
     * @record
     */


    function InternalBreakpointState() {}

    if (false) {}
    /**
     * @record
     */


    function Query() {}

    if (false) {}
    /**
     * Utility for checking the matching state of \@media queries.
     */


    var BreakpointObserver = /*#__PURE__*/function () {
      /**
       * @param {?} _mediaMatcher
       * @param {?} _zone
       */
      function BreakpointObserver(_mediaMatcher, _zone) {
        _classCallCheck(this, BreakpointObserver);

        this._mediaMatcher = _mediaMatcher;
        this._zone = _zone;
        /**
         * A map of all media queries currently being listened for.
         */

        this._queries = new Map();
        /**
         * A subject for all other observables to takeUntil based on.
         */

        this._destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }
      /**
       * Completes the active subject, signalling to all other observables to complete.
       * @return {?}
       */


      _createClass(BreakpointObserver, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroySubject.next();

          this._destroySubject.complete();
        }
        /**
         * Whether one or more media queries match the current viewport size.
         * @param {?} value One or more media queries to check.
         * @return {?} Whether any of the media queries match.
         */

      }, {
        key: "isMatched",
        value: function isMatched(value) {
          var _this = this;

          /** @type {?} */
          var queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(value));
          return queries.some(
          /**
          * @param {?} mediaQuery
          * @return {?}
          */
          function (mediaQuery) {
            return _this._registerQuery(mediaQuery).mql.matches;
          });
        }
        /**
         * Gets an observable of results for the given queries that will emit new results for any changes
         * in matching of the given queries.
         * @param {?} value One or more media queries to check.
         * @return {?} A stream of matches for the given queries.
         */

      }, {
        key: "observe",
        value: function observe(value) {
          var _this2 = this;

          /** @type {?} */
          var queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(value));
          /** @type {?} */

          var observables = queries.map(
          /**
          * @param {?} query
          * @return {?}
          */
          function (query) {
            return _this2._registerQuery(query).observable;
          });
          /** @type {?} */

          var stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(observables); // Emit the first state immediately, and then debounce the subsequent emissions.

          stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["concat"])(stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)), stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(0)));
          return stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
          /**
          * @param {?} breakpointStates
          * @return {?}
          */
          function (breakpointStates) {
            /** @type {?} */
            var response = {
              matches: false,
              breakpoints: {}
            };
            breakpointStates.forEach(
            /**
            * @param {?} state
            * @return {?}
            */
            function (state) {
              response.matches = response.matches || state.matches;
              response.breakpoints[state.query] = state.matches;
            });
            return response;
          }));
        }
        /**
         * Registers a specific query to be listened for.
         * @private
         * @param {?} query
         * @return {?}
         */

      }, {
        key: "_registerQuery",
        value: function _registerQuery(query) {
          var _this3 = this;

          // Only set up a new MediaQueryList if it is not already being listened for.
          if (this._queries.has(query)) {
            return (
              /** @type {?} */
              this._queries.get(query)
            );
          }
          /** @type {?} */


          var mql = this._mediaMatcher.matchMedia(query); // Create callback for match changes and add it is as a listener.

          /** @type {?} */


          var queryObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
            // back into the zone because matchMedia is only included in Zone.js by loading the
            // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
            // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
            // patches it.

            /** @type {?} */
            var handler =
            /**
            * @param {?} e
            * @return {?}
            */
            function handler(e) {
              return _this3._zone.run(
              /**
              * @return {?}
              */
              function () {
                return observer.next(e);
              });
            };

            mql.addListener(handler);
            return (
              /**
              * @return {?}
              */
              function () {
                mql.removeListener(handler);
              }
            );
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(mql), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
          /**
          * @param {?} nextMql
          * @return {?}
          */
          function (nextMql) {
            return {
              query: query,
              matches: nextMql.matches
            };
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroySubject)); // Add the MediaQueryList to the set of queries.

          /** @type {?} */

          var output = {
            observable: queryObservable,
            mql: mql
          };

          this._queries.set(query, output);

          return output;
        }
      }]);

      return BreakpointObserver;
    }();

    BreakpointObserver.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
      args: [{
        providedIn: 'root'
      }]
    }];
    /** @nocollapse */

    BreakpointObserver.ctorParameters = function () {
      return [{
        type: MediaMatcher
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };
    /** @nocollapse */


    BreakpointObserver.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function BreakpointObserver_Factory() {
        return new BreakpointObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MediaMatcher), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      },
      token: BreakpointObserver,
      providedIn: "root"
    });

    if (false) {}
    /**
     * Split each query string into separate query strings if two queries are provided as comma
     * separated.
     * @param {?} queries
     * @return {?}
     */


    function splitQueries(queries) {
      return queries.map(
      /**
      * @param {?} query
      * @return {?}
      */
      function (query) {
        return query.split(',');
      }).reduce(
      /**
      * @param {?} a1
      * @param {?} a2
      * @return {?}
      */
      function (a1, a2) {
        return a1.concat(a2);
      }).map(
      /**
      * @param {?} query
      * @return {?}
      */
      function (query) {
        return query.trim();
      });
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/layout/breakpoints.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // PascalCase is being used as Breakpoints is used like an enum.
    // tslint:disable-next-line:variable-name

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     * @type {?}
     */


    var Breakpoints = {
      XSmall: '(max-width: 599.99px)',
      Small: '(min-width: 600px) and (max-width: 959.99px)',
      Medium: '(min-width: 960px) and (max-width: 1279.99px)',
      Large: '(min-width: 1280px) and (max-width: 1919.99px)',
      XLarge: '(min-width: 1920px)',
      Handset: '(max-width: 599.99px) and (orientation: portrait), ' + '(max-width: 959.99px) and (orientation: landscape)',
      Tablet: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait), ' + '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
      Web: '(min-width: 840px) and (orientation: portrait), ' + '(min-width: 1280px) and (orientation: landscape)',
      HandsetPortrait: '(max-width: 599.99px) and (orientation: portrait)',
      TabletPortrait: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)',
      WebPortrait: '(min-width: 840px) and (orientation: portrait)',
      HandsetLandscape: '(max-width: 959.99px) and (orientation: landscape)',
      TabletLandscape: '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
      WebLandscape: '(min-width: 1280px) and (orientation: landscape)'
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/layout/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=layout.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/material/fesm2015/snack-bar.js":
  /*!**************************************************************!*\
    !*** ./node_modules/@angular/material/fesm2015/snack-bar.js ***!
    \**************************************************************/

  /*! exports provided: MAT_SNACK_BAR_DATA, MAT_SNACK_BAR_DEFAULT_OPTIONS, MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY, MatSnackBar, MatSnackBarConfig, MatSnackBarContainer, MatSnackBarModule, MatSnackBarRef, SimpleSnackBar, matSnackBarAnimations */

  /***/
  function node_modulesAngularMaterialFesm2015SnackBarJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SNACK_BAR_DATA", function () {
      return MAT_SNACK_BAR_DATA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SNACK_BAR_DEFAULT_OPTIONS", function () {
      return MAT_SNACK_BAR_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY", function () {
      return MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSnackBar", function () {
      return MatSnackBar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSnackBarConfig", function () {
      return MatSnackBarConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSnackBarContainer", function () {
      return MatSnackBarContainer;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSnackBarModule", function () {
      return MatSnackBarModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatSnackBarRef", function () {
      return MatSnackBarRef;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SimpleSnackBar", function () {
      return SimpleSnackBar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matSnackBarAnimations", function () {
      return matSnackBarAnimations;
    });
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/fesm2015/portal.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/fesm2015/core.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/fesm2015/button.js");
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


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/fesm2015/a11y.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/fesm2015/layout.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/snack-bar/snack-bar-ref.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Event that is emitted when a snack bar is dismissed.
     * @record
     */


    function MatSnackBarDismiss() {}

    if (false) {}
    /**
     * Maximum amount of milliseconds that can be passed into setTimeout.
     * @type {?}
     */


    var MAX_TIMEOUT = Math.pow(2, 31) - 1;
    /**
     * Reference to a snack bar dispatched from the snack bar service.
     * @template T
     */

    var MatSnackBarRef = /*#__PURE__*/function () {
      /**
       * @param {?} containerInstance
       * @param {?} _overlayRef
       */
      function MatSnackBarRef(containerInstance, _overlayRef) {
        var _this4 = this;

        _classCallCheck(this, MatSnackBarRef);

        this._overlayRef = _overlayRef;
        /**
         * Subject for notifying the user that the snack bar has been dismissed.
         */

        this._afterDismissed = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Subject for notifying the user that the snack bar has opened and appeared.
         */

        this._afterOpened = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Subject for notifying the user that the snack bar action was called.
         */

        this._onAction = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Whether the snack bar was dismissed using the action button.
         */

        this._dismissedByAction = false;
        this.containerInstance = containerInstance; // Dismiss snackbar on action.

        this.onAction().subscribe(
        /**
        * @return {?}
        */
        function () {
          return _this4.dismiss();
        });

        containerInstance._onExit.subscribe(
        /**
        * @return {?}
        */
        function () {
          return _this4._finishDismiss();
        });
      }
      /**
       * Dismisses the snack bar.
       * @return {?}
       */


      _createClass(MatSnackBarRef, [{
        key: "dismiss",
        value: function dismiss() {
          if (!this._afterDismissed.closed) {
            this.containerInstance.exit();
          }

          clearTimeout(this._durationTimeoutId);
        }
        /**
         * Marks the snackbar action clicked.
         * @return {?}
         */

      }, {
        key: "dismissWithAction",
        value: function dismissWithAction() {
          if (!this._onAction.closed) {
            this._dismissedByAction = true;

            this._onAction.next();

            this._onAction.complete();
          }
        }
        /**
         * Marks the snackbar action clicked.
         * @deprecated Use `dismissWithAction` instead.
         * \@breaking-change 8.0.0
         * @return {?}
         */

      }, {
        key: "closeWithAction",
        value: function closeWithAction() {
          this.dismissWithAction();
        }
        /**
         * Dismisses the snack bar after some duration
         * @param {?} duration
         * @return {?}
         */

      }, {
        key: "_dismissAfter",
        value: function _dismissAfter(duration) {
          var _this5 = this;

          // Note that we need to cap the duration to the maximum value for setTimeout, because
          // it'll revert to 1 if somebody passes in something greater (e.g. `Infinity`). See #17234.
          this._durationTimeoutId = setTimeout(
          /**
          * @return {?}
          */
          function () {
            return _this5.dismiss();
          }, Math.min(duration, MAX_TIMEOUT));
        }
        /**
         * Marks the snackbar as opened
         * @return {?}
         */

      }, {
        key: "_open",
        value: function _open() {
          if (!this._afterOpened.closed) {
            this._afterOpened.next();

            this._afterOpened.complete();
          }
        }
        /**
         * Cleans up the DOM after closing.
         * @private
         * @return {?}
         */

      }, {
        key: "_finishDismiss",
        value: function _finishDismiss() {
          this._overlayRef.dispose();

          if (!this._onAction.closed) {
            this._onAction.complete();
          }

          this._afterDismissed.next({
            dismissedByAction: this._dismissedByAction
          });

          this._afterDismissed.complete();

          this._dismissedByAction = false;
        }
        /**
         * Gets an observable that is notified when the snack bar is finished closing.
         * @return {?}
         */

      }, {
        key: "afterDismissed",
        value: function afterDismissed() {
          return this._afterDismissed.asObservable();
        }
        /**
         * Gets an observable that is notified when the snack bar has opened and appeared.
         * @return {?}
         */

      }, {
        key: "afterOpened",
        value: function afterOpened() {
          return this.containerInstance._onEnter;
        }
        /**
         * Gets an observable that is notified when the snack bar action is called.
         * @return {?}
         */

      }, {
        key: "onAction",
        value: function onAction() {
          return this._onAction.asObservable();
        }
      }]);

      return MatSnackBarRef;
    }();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/snack-bar/snack-bar-config.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that can be used to access the data that was passed in to a snack bar.
     * @type {?}
     */


    var MAT_SNACK_BAR_DATA = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('MatSnackBarData');
    /**
     * Configuration used when opening a snack-bar.
     * @template D
     */

    var MatSnackBarConfig = function MatSnackBarConfig() {
      _classCallCheck(this, MatSnackBarConfig);

      /**
       * The politeness level for the MatAriaLiveAnnouncer announcement.
       */
      this.politeness = 'assertive';
      /**
       * Message to be announced by the LiveAnnouncer. When opening a snackbar without a custom
       * component or template, the announcement message will default to the specified message.
       */

      this.announcementMessage = '';
      /**
       * The length of time in milliseconds to wait before automatically dismissing the snack bar.
       */

      this.duration = 0;
      /**
       * Data being injected into the child component.
       */

      this.data = null;
      /**
       * The horizontal position to place the snack bar.
       */

      this.horizontalPosition = 'center';
      /**
       * The vertical position to place the snack bar.
       */

      this.verticalPosition = 'bottom';
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/snack-bar/simple-snack-bar.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * A component used to open as the default snack bar, matching material spec.
     * This should only be used internally by the snack bar service.
     */


    var SimpleSnackBar = /*#__PURE__*/function () {
      /**
       * @param {?} snackBarRef
       * @param {?} data
       */
      function SimpleSnackBar(snackBarRef, data) {
        _classCallCheck(this, SimpleSnackBar);

        this.snackBarRef = snackBarRef;
        this.data = data;
      }
      /**
       * Performs the action on the snack bar.
       * @return {?}
       */


      _createClass(SimpleSnackBar, [{
        key: "action",
        value: function action() {
          this.snackBarRef.dismissWithAction();
        }
        /**
         * If the action button should be shown.
         * @return {?}
         */

      }, {
        key: "hasAction",
        get: function get() {
          return !!this.data.action;
        }
      }]);

      return SimpleSnackBar;
    }();

    SimpleSnackBar.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
      args: [{
        selector: 'simple-snack-bar',
        template: "<span>{{data.message}}</span>\n<div class=\"mat-simple-snackbar-action\"  *ngIf=\"hasAction\">\n  <button mat-button (click)=\"action()\">{{data.action}}</button>\n</div>\n",
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        host: {
          'class': 'mat-simple-snackbar'
        },
        styles: [".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}\n"]
      }]
    }];
    /** @nocollapse */

    SimpleSnackBar.ctorParameters = function () {
      return [{
        type: MatSnackBarRef
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_SNACK_BAR_DATA]
        }]
      }];
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/snack-bar/snack-bar-animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by the Material snack bar.
     * \@docs-private
     * @type {?}
     */


    var matSnackBarAnimations = {
      /**
       * Animation that shows and hides a snack bar.
       */
      snackBarState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('state', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        transform: 'scale(0.8)',
        opacity: 0
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        transform: 'scale(1)',
        opacity: 1
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('150ms cubic-bezier(0, 0, 0.2, 1)')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => void, * => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])('75ms cubic-bezier(0.4, 0.0, 1, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        opacity: 0
      })))])
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/snack-bar/snack-bar-container.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Internal component that wraps user-provided snack bar content.
     * \@docs-private
     */

    var MatSnackBarContainer = /*#__PURE__*/function (_angular_cdk_portal__) {
      _inherits(MatSnackBarContainer, _angular_cdk_portal__);

      var _super = _createSuper(MatSnackBarContainer);

      /**
       * @param {?} _ngZone
       * @param {?} _elementRef
       * @param {?} _changeDetectorRef
       * @param {?} snackBarConfig
       */
      function MatSnackBarContainer(_ngZone, _elementRef, _changeDetectorRef, snackBarConfig) {
        var _this6;

        _classCallCheck(this, MatSnackBarContainer);

        _this6 = _super.call(this);
        _this6._ngZone = _ngZone;
        _this6._elementRef = _elementRef;
        _this6._changeDetectorRef = _changeDetectorRef;
        _this6.snackBarConfig = snackBarConfig;
        /**
         * Whether the component has been destroyed.
         */

        _this6._destroyed = false;
        /**
         * Subject for notifying that the snack bar has exited from view.
         */

        _this6._onExit = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * Subject for notifying that the snack bar has finished entering the view.
         */

        _this6._onEnter = new rxjs__WEBPACK_IMPORTED_MODULE_6__["Subject"]();
        /**
         * The state of the snack bar animations.
         */

        _this6._animationState = 'void';
        /**
         * Attaches a DOM portal to the snack bar container.
         * @deprecated To be turned into a method.
         * \@breaking-change 10.0.0
         */

        _this6.attachDomPortal =
        /**
        * @param {?} portal
        * @return {?}
        */
        function (portal) {
          _this6._assertNotAttached();

          _this6._applySnackBarClasses();

          return _this6._portalOutlet.attachDomPortal(portal);
        }; // Based on the ARIA spec, `alert` and `status` roles have an
        // implicit `assertive` and `polite` politeness respectively.


        if (snackBarConfig.politeness === 'assertive' && !snackBarConfig.announcementMessage) {
          _this6._role = 'alert';
        } else if (snackBarConfig.politeness === 'off') {
          _this6._role = null;
        } else {
          _this6._role = 'status';
        }

        return _this6;
      }
      /**
       * Attach a component portal as content to this snack bar container.
       * @template T
       * @param {?} portal
       * @return {?}
       */


      _createClass(MatSnackBarContainer, [{
        key: "attachComponentPortal",
        value: function attachComponentPortal(portal) {
          this._assertNotAttached();

          this._applySnackBarClasses();

          return this._portalOutlet.attachComponentPortal(portal);
        }
        /**
         * Attach a template portal as content to this snack bar container.
         * @template C
         * @param {?} portal
         * @return {?}
         */

      }, {
        key: "attachTemplatePortal",
        value: function attachTemplatePortal(portal) {
          this._assertNotAttached();

          this._applySnackBarClasses();

          return this._portalOutlet.attachTemplatePortal(portal);
        }
        /**
         * Handle end of animations, updating the state of the snackbar.
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "onAnimationEnd",
        value: function onAnimationEnd(event) {
          var fromState = event.fromState,
              toState = event.toState;

          if (toState === 'void' && fromState !== 'void' || toState === 'hidden') {
            this._completeExit();
          }

          if (toState === 'visible') {
            // Note: we shouldn't use `this` inside the zone callback,
            // because it can cause a memory leak.

            /** @type {?} */
            var onEnter = this._onEnter;

            this._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              onEnter.next();
              onEnter.complete();
            });
          }
        }
        /**
         * Begin animation of snack bar entrance into view.
         * @return {?}
         */

      }, {
        key: "enter",
        value: function enter() {
          if (!this._destroyed) {
            this._animationState = 'visible';

            this._changeDetectorRef.detectChanges();
          }
        }
        /**
         * Begin animation of the snack bar exiting from view.
         * @return {?}
         */

      }, {
        key: "exit",
        value: function exit() {
          // Note: this one transitions to `hidden`, rather than `void`, in order to handle the case
          // where multiple snack bars are opened in quick succession (e.g. two consecutive calls to
          // `MatSnackBar.open`).
          this._animationState = 'hidden'; // Mark this element with an 'exit' attribute to indicate that the snackbar has
          // been dismissed and will soon be removed from the DOM. This is used by the snackbar
          // test harness.

          this._elementRef.nativeElement.setAttribute('mat-exit', '');

          return this._onExit;
        }
        /**
         * Makes sure the exit callbacks have been invoked when the element is destroyed.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed = true;

          this._completeExit();
        }
        /**
         * Waits for the zone to settle before removing the element. Helps prevent
         * errors where we end up removing an element which is in the middle of an animation.
         * @private
         * @return {?}
         */

      }, {
        key: "_completeExit",
        value: function _completeExit() {
          var _this7 = this;

          this._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["take"])(1)).subscribe(
          /**
          * @return {?}
          */
          function () {
            _this7._onExit.next();

            _this7._onExit.complete();
          });
        }
        /**
         * Applies the various positioning and user-configured CSS classes to the snack bar.
         * @private
         * @return {?}
         */

      }, {
        key: "_applySnackBarClasses",
        value: function _applySnackBarClasses() {
          /** @type {?} */
          var element = this._elementRef.nativeElement;
          /** @type {?} */

          var panelClasses = this.snackBarConfig.panelClass;

          if (panelClasses) {
            if (Array.isArray(panelClasses)) {
              // Note that we can't use a spread here, because IE doesn't support multiple arguments.
              panelClasses.forEach(
              /**
              * @param {?} cssClass
              * @return {?}
              */
              function (cssClass) {
                return element.classList.add(cssClass);
              });
            } else {
              element.classList.add(panelClasses);
            }
          }

          if (this.snackBarConfig.horizontalPosition === 'center') {
            element.classList.add('mat-snack-bar-center');
          }

          if (this.snackBarConfig.verticalPosition === 'top') {
            element.classList.add('mat-snack-bar-top');
          }
        }
        /**
         * Asserts that no content is already attached to the container.
         * @private
         * @return {?}
         */

      }, {
        key: "_assertNotAttached",
        value: function _assertNotAttached() {
          if (this._portalOutlet.hasAttached()) {
            throw Error('Attempting to attach snack bar content after content is already attached');
          }
        }
      }]);

      return MatSnackBarContainer;
    }(_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["BasePortalOutlet"]);

    MatSnackBarContainer.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
      args: [{
        selector: 'snack-bar-container',
        template: "<ng-template cdkPortalOutlet></ng-template>\n",
        // In Ivy embedded views will be change detected from their declaration place, rather than
        // where they were stamped out. This means that we can't have the snack bar container be OnPush,
        // because it might cause snack bars that were opened from a template not to be out of date.
        // tslint:disable-next-line:validate-decorators
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].Default,
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        animations: [matSnackBarAnimations.snackBarState],
        host: {
          '[attr.role]': '_role',
          'class': 'mat-snack-bar-container',
          '[@state]': '_animationState',
          '(@state.done)': 'onAnimationEnd($event)'
        },
        styles: [".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}.cdk-high-contrast-active .mat-snack-bar-container{border:solid 1px}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}\n"]
      }]
    }];
    /** @nocollapse */

    MatSnackBarContainer.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }, {
        type: MatSnackBarConfig
      }];
    };

    MatSnackBarContainer.propDecorators = {
      _portalOutlet: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
        args: [_angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["CdkPortalOutlet"], {
          "static": true
        }]
      }]
    };

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/snack-bar/snack-bar-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatSnackBarModule = function MatSnackBarModule() {
      _classCallCheck(this, MatSnackBarModule);
    };

    MatSnackBarModule.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
      args: [{
        imports: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]],
        exports: [MatSnackBarContainer, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]],
        declarations: [MatSnackBarContainer, SimpleSnackBar],
        entryComponents: [MatSnackBarContainer, SimpleSnackBar]
      }]
    }];
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/snack-bar/snack-bar.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Injection token that can be used to specify default snack bar.
     * @type {?}
     */

    var MAT_SNACK_BAR_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-snack-bar-default-options', {
      providedIn: 'root',
      factory: MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function MAT_SNACK_BAR_DEFAULT_OPTIONS_FACTORY() {
      return new MatSnackBarConfig();
    }
    /**
     * Service to dispatch Material Design snack bar messages.
     */


    var MatSnackBar = /*#__PURE__*/function () {
      /**
       * @param {?} _overlay
       * @param {?} _live
       * @param {?} _injector
       * @param {?} _breakpointObserver
       * @param {?} _parentSnackBar
       * @param {?} _defaultConfig
       */
      function MatSnackBar(_overlay, _live, _injector, _breakpointObserver, _parentSnackBar, _defaultConfig) {
        _classCallCheck(this, MatSnackBar);

        this._overlay = _overlay;
        this._live = _live;
        this._injector = _injector;
        this._breakpointObserver = _breakpointObserver;
        this._parentSnackBar = _parentSnackBar;
        this._defaultConfig = _defaultConfig;
        /**
         * Reference to the current snack bar in the view *at this level* (in the Angular injector tree).
         * If there is a parent snack-bar service, all operations should delegate to that parent
         * via `_openedSnackBarRef`.
         */

        this._snackBarRefAtThisLevel = null;
      }
      /**
       * Reference to the currently opened snackbar at *any* level.
       * @return {?}
       */


      _createClass(MatSnackBar, [{
        key: "openFromComponent",

        /**
         * Creates and dispatches a snack bar with a custom component for the content, removing any
         * currently opened snack bars.
         *
         * @template T
         * @param {?} component Component to be instantiated.
         * @param {?=} config Extra configuration for the snack bar.
         * @return {?}
         */
        value: function openFromComponent(component, config) {
          return (
            /** @type {?} */
            this._attach(component, config)
          );
        }
        /**
         * Creates and dispatches a snack bar with a custom template for the content, removing any
         * currently opened snack bars.
         *
         * @param {?} template Template to be instantiated.
         * @param {?=} config Extra configuration for the snack bar.
         * @return {?}
         */

      }, {
        key: "openFromTemplate",
        value: function openFromTemplate(template, config) {
          return this._attach(template, config);
        }
        /**
         * Opens a snackbar with a message and an optional action.
         * @param {?} message The message to show in the snackbar.
         * @param {?=} action The label for the snackbar action.
         * @param {?=} config Additional configuration options for the snackbar.
         * @return {?}
         */

      }, {
        key: "open",
        value: function open(message) {
          var action = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
          var config = arguments.length > 2 ? arguments[2] : undefined;

          /** @type {?} */
          var _config = Object.assign(Object.assign({}, this._defaultConfig), config); // Since the user doesn't have access to the component, we can
          // override the data to pass in our own message and action.


          _config.data = {
            message: message,
            action: action
          };

          if (!_config.announcementMessage) {
            _config.announcementMessage = message;
          }

          return this.openFromComponent(SimpleSnackBar, _config);
        }
        /**
         * Dismisses the currently-visible snack bar.
         * @return {?}
         */

      }, {
        key: "dismiss",
        value: function dismiss() {
          if (this._openedSnackBarRef) {
            this._openedSnackBarRef.dismiss();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          // Only dismiss the snack bar at the current level on destroy.
          if (this._snackBarRefAtThisLevel) {
            this._snackBarRefAtThisLevel.dismiss();
          }
        }
        /**
         * Attaches the snack bar container component to the overlay.
         * @private
         * @param {?} overlayRef
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "_attachSnackBarContainer",
        value: function _attachSnackBarContainer(overlayRef, config) {
          /** @type {?} */
          var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
          /** @type {?} */

          var injector = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalInjector"](userInjector || this._injector, new WeakMap([[MatSnackBarConfig, config]]));
          /** @type {?} */

          var containerPortal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](MatSnackBarContainer, config.viewContainerRef, injector);
          /** @type {?} */

          var containerRef = overlayRef.attach(containerPortal);
          containerRef.instance.snackBarConfig = config;
          return containerRef.instance;
        }
        /**
         * Places a new component or a template as the content of the snack bar container.
         * @private
         * @template T
         * @param {?} content
         * @param {?=} userConfig
         * @return {?}
         */

      }, {
        key: "_attach",
        value: function _attach(content, userConfig) {
          /** @type {?} */
          var config = Object.assign(Object.assign(Object.assign({}, new MatSnackBarConfig()), this._defaultConfig), userConfig);
          /** @type {?} */

          var overlayRef = this._createOverlay(config);
          /** @type {?} */


          var container = this._attachSnackBarContainer(overlayRef, config);
          /** @type {?} */


          var snackBarRef = new MatSnackBarRef(container, overlayRef);

          if (content instanceof _angular_core__WEBPACK_IMPORTED_MODULE_3__["TemplateRef"]) {
            /** @type {?} */
            var portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["TemplatePortal"](content,
            /** @type {?} */
            null,
            /** @type {?} */
            {
              $implicit: config.data,
              snackBarRef: snackBarRef
            });
            snackBarRef.instance = container.attachTemplatePortal(portal);
          } else {
            /** @type {?} */
            var injector = this._createInjector(config, snackBarRef);
            /** @type {?} */


            var _portal = new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["ComponentPortal"](content, undefined, injector);
            /** @type {?} */


            var contentRef = container.attachComponentPortal(_portal); // We can't pass this via the injector, because the injector is created earlier.

            snackBarRef.instance = contentRef.instance;
          } // Subscribe to the breakpoint observer and attach the mat-snack-bar-handset class as
          // appropriate. This class is applied to the overlay element because the overlay must expand to
          // fill the width of the screen for full width snackbars.


          this._breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["Breakpoints"].HandsetPortrait).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["takeUntil"])(overlayRef.detachments())).subscribe(
          /**
          * @param {?} state
          * @return {?}
          */
          function (state) {
            /** @type {?} */
            var classList = overlayRef.overlayElement.classList;
            /** @type {?} */

            var className = 'mat-snack-bar-handset';
            state.matches ? classList.add(className) : classList.remove(className);
          });

          this._animateSnackBar(snackBarRef, config);

          this._openedSnackBarRef = snackBarRef;
          return this._openedSnackBarRef;
        }
        /**
         * Animates the old snack bar out and the new one in.
         * @private
         * @param {?} snackBarRef
         * @param {?} config
         * @return {?}
         */

      }, {
        key: "_animateSnackBar",
        value: function _animateSnackBar(snackBarRef, config) {
          var _this8 = this;

          // When the snackbar is dismissed, clear the reference to it.
          snackBarRef.afterDismissed().subscribe(
          /**
          * @return {?}
          */
          function () {
            // Clear the snackbar ref if it hasn't already been replaced by a newer snackbar.
            if (_this8._openedSnackBarRef == snackBarRef) {
              _this8._openedSnackBarRef = null;
            }

            if (config.announcementMessage) {
              _this8._live.clear();
            }
          });

          if (this._openedSnackBarRef) {
            // If a snack bar is already in view, dismiss it and enter the
            // new snack bar after exit animation is complete.
            this._openedSnackBarRef.afterDismissed().subscribe(
            /**
            * @return {?}
            */
            function () {
              snackBarRef.containerInstance.enter();
            });

            this._openedSnackBarRef.dismiss();
          } else {
            // If no snack bar is in view, enter the new snack bar.
            snackBarRef.containerInstance.enter();
          } // If a dismiss timeout is provided, set up dismiss based on after the snackbar is opened.


          if (config.duration && config.duration > 0) {
            snackBarRef.afterOpened().subscribe(
            /**
            * @return {?}
            */
            function () {
              return snackBarRef._dismissAfter(
              /** @type {?} */
              config.duration);
            });
          }

          if (config.announcementMessage) {
            this._live.announce(config.announcementMessage, config.politeness);
          }
        }
        /**
         * Creates a new overlay and places it in the correct location.
         * @private
         * @param {?} config The user-specified snack bar config.
         * @return {?}
         */

      }, {
        key: "_createOverlay",
        value: function _createOverlay(config) {
          /** @type {?} */
          var overlayConfig = new _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayConfig"]();
          overlayConfig.direction = config.direction;
          /** @type {?} */

          var positionStrategy = this._overlay.position().global(); // Set horizontal position.

          /** @type {?} */


          var isRtl = config.direction === 'rtl';
          /** @type {?} */

          var isLeft = config.horizontalPosition === 'left' || config.horizontalPosition === 'start' && !isRtl || config.horizontalPosition === 'end' && isRtl;
          /** @type {?} */

          var isRight = !isLeft && config.horizontalPosition !== 'center';

          if (isLeft) {
            positionStrategy.left('0');
          } else if (isRight) {
            positionStrategy.right('0');
          } else {
            positionStrategy.centerHorizontally();
          } // Set horizontal position.


          if (config.verticalPosition === 'top') {
            positionStrategy.top('0');
          } else {
            positionStrategy.bottom('0');
          }

          overlayConfig.positionStrategy = positionStrategy;
          return this._overlay.create(overlayConfig);
        }
        /**
         * Creates an injector to be used inside of a snack bar component.
         * @private
         * @template T
         * @param {?} config Config that was used to create the snack bar.
         * @param {?} snackBarRef Reference to the snack bar.
         * @return {?}
         */

      }, {
        key: "_createInjector",
        value: function _createInjector(config, snackBarRef) {
          /** @type {?} */
          var userInjector = config && config.viewContainerRef && config.viewContainerRef.injector;
          return new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_1__["PortalInjector"](userInjector || this._injector, new WeakMap([[MatSnackBarRef, snackBarRef], [MAT_SNACK_BAR_DATA, config.data]]));
        }
      }, {
        key: "_openedSnackBarRef",
        get: function get() {
          /** @type {?} */
          var parent = this._parentSnackBar;
          return parent ? parent._openedSnackBarRef : this._snackBarRefAtThisLevel;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (this._parentSnackBar) {
            this._parentSnackBar._openedSnackBarRef = value;
          } else {
            this._snackBarRefAtThisLevel = value;
          }
        }
      }]);

      return MatSnackBar;
    }();

    MatSnackBar.decorators = [{
      type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"],
      args: [{
        providedIn: MatSnackBarModule
      }]
    }];
    /** @nocollapse */

    MatSnackBar.ctorParameters = function () {
      return [{
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["LiveAnnouncer"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Injector"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["BreakpointObserver"]
      }, {
        type: MatSnackBar,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["SkipSelf"]
        }]
      }, {
        type: MatSnackBarConfig,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_SNACK_BAR_DEFAULT_OPTIONS]
        }]
      }];
    };
    /** @nocollapse */


    MatSnackBar.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"])({
      factory: function MatSnackBar_Factory() {
        return new MatSnackBar(Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_9__["LiveAnnouncer"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_3__["INJECTOR"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_10__["BreakpointObserver"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(MatSnackBar, 12), Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"])(MAT_SNACK_BAR_DEFAULT_OPTIONS));
      },
      token: MatSnackBar,
      providedIn: MatSnackBarModule
    });

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/snack-bar/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=snack-bar.js.map

    /***/

  }
}]);
//# sourceMappingURL=default~close-account-close-account-module~generate-statement-generate-statement-module~upload-all-u~9cc96008-es5.js.map