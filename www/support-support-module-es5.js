function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["support-support-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesSupportSupportHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = " \n \n \n<ion-item translucent>\n  <ion-menu-button></ion-menu-button>\n  <ion-title  >Contact us</ion-title>\n</ion-item>\n<ion-content>\n   \n<ion-card>\n <form #submitForm=\"ngForm\" novalidate (ngSubmit)=\"submit(submitForm)\">\n    <ion-list lines=\"none\">\n      <ion-item>\n        <ion-label position=\"stacked\" color=\"primary\">Enter your message below</ion-label>\n        <ion-textarea [(ngModel)]=\"supportMessage\" name=\"supportQuestion\" #supportQuestion=\"ngModel\" rows=\"6\" required></ion-textarea>\n      </ion-item>\n    </ion-list>\n\n    <ion-text color=\"danger\">\n      <p [hidden]=\"supportQuestion.valid || submitted === false\" class=\"ion-padding-start\">\n       Message is required\n      </p>\n    </ion-text>\n\n    <div class=\"ion-padding\">\n      <ion-button expand=\"block\" type=\"submit\">Submit</ion-button>\n    </div>\n  </form></ion-card>\n \n</ion-content>\n \n \n";
    /***/
  },

  /***/
  "./src/app/pages/support/support-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/support/support-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: SupportPageRoutingModule */

  /***/
  function srcAppPagesSupportSupportRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportPageRoutingModule", function () {
      return SupportPageRoutingModule;
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


    var _support__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./support */
    "./src/app/pages/support/support.ts");

    var routes = [{
      path: '',
      component: _support__WEBPACK_IMPORTED_MODULE_3__["SupportPage"]
    }];

    var SupportPageRoutingModule = function SupportPageRoutingModule() {
      _classCallCheck(this, SupportPageRoutingModule);
    };

    SupportPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], SupportPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/support/support.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/support/support.module.ts ***!
    \*************************************************/

  /*! exports provided: SupportModule */

  /***/
  function srcAppPagesSupportSupportModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportModule", function () {
      return SupportModule;
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


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _support__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./support */
    "./src/app/pages/support/support.ts");
    /* harmony import */


    var _support_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./support-routing.module */
    "./src/app/pages/support/support-routing.module.ts");

    var SupportModule = function SupportModule() {
      _classCallCheck(this, SupportModule);
    };

    SupportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _support_routing_module__WEBPACK_IMPORTED_MODULE_6__["SupportPageRoutingModule"]],
      declarations: [_support__WEBPACK_IMPORTED_MODULE_5__["SupportPage"]]
    })], SupportModule);
    /***/
  },

  /***/
  "./src/app/pages/support/support.scss":
  /*!********************************************!*\
    !*** ./src/app/pages/support/support.scss ***!
    \********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesSupportSupportScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".support-logo {\n  padding: 20px 0;\n  min-height: 200px;\n  text-align: center;\n}\n\n.support-logo img {\n  max-width: 150px;\n}\n\n.list {\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2FydC9Eb2N1bWVudHMvcG9ydGZvbGlvL3Rlc3Qvc3JjL2FwcC9wYWdlcy9zdXBwb3J0L3N1cHBvcnQuc2NzcyIsInNyYy9hcHAvcGFnZXMvc3VwcG9ydC9zdXBwb3J0LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NGOztBREVBO0VBQ0UsZ0JBQUE7QUNDRjs7QURFQTtFQUNFLGdCQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9zdXBwb3J0L3N1cHBvcnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdXBwb3J0LWxvZ28ge1xuICBwYWRkaW5nOiAyMHB4IDA7XG4gIG1pbi1oZWlnaHQ6IDIwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5zdXBwb3J0LWxvZ28gaW1nIHtcbiAgbWF4LXdpZHRoOiAxNTBweDtcbn1cblxuLmxpc3Qge1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuIiwiLnN1cHBvcnQtbG9nbyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgbWluLWhlaWdodDogMjAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnN1cHBvcnQtbG9nbyBpbWcge1xuICBtYXgtd2lkdGg6IDE1MHB4O1xufVxuXG4ubGlzdCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/pages/support/support.ts":
  /*!******************************************!*\
    !*** ./src/app/pages/support/support.ts ***!
    \******************************************/

  /*! exports provided: SupportPage */

  /***/
  function srcAppPagesSupportSupportTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportPage", function () {
      return SupportPage;
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


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/auth.service */
    "./src/app/services/auth.service.ts");

    var SupportPage =
    /*#__PURE__*/
    function () {
      function SupportPage(alertCtrl, toastCtrl, db, authService) {
        _classCallCheck(this, SupportPage);

        this.alertCtrl = alertCtrl;
        this.toastCtrl = toastCtrl;
        this.db = db;
        this.authService = authService;
        this.submitted = false;
      }

      _createClass(SupportPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.authService.appUser$.subscribe(function (appUser) {
            return _this.appUser = appUser.uid;
          });
        }
      }, {
        key: "submit",
        value: function submit(form) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var toast;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.submitted = true;

                    if (!form.valid) {
                      _context.next = 10;
                      break;
                    }

                    this.db.collection('support').add({
                      "message": this.supportMessage,
                      "user": this.appUser,
                      "time": Date.now()
                    });
                    this.supportMessage = '';
                    this.submitted = false;
                    _context.next = 7;
                    return this.toastCtrl.create({
                      message: 'Your support request has been sent.',
                      duration: 3000
                    });

                  case 7:
                    toast = _context.sent;
                    _context.next = 10;
                    return toast.present();

                  case 10:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return SupportPage;
    }();

    SupportPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]
      }];
    };

    SupportPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'page-support',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./support.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/support/support.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./support.scss */
      "./src/app/pages/support/support.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ToastController"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"], _services_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"]])], SupportPage);
    /***/
  }
}]);
//# sourceMappingURL=support-support-module-es5.js.map