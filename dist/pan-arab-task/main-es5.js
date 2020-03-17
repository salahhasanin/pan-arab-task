(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet> </router-outlet>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all-articals/all-articals.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/all-articals/all-articals.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsAllArticalsAllArticalsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h1 class=\"header mb-5 mt-3\">Latest News</h1>\n<div class=\"container mt-5\">\n  <div class=\"row \">\n    <!-- section1 mainArticle -->\n    <div class=\"col-xl-4 col-lg-4 col-md-6 col-12\">\n      <div\n        class=\"articals\"\n        *ngFor=\"let artical of eachArtical | slice: 0:1; let i = index\"\n      >\n        <div class=\"card mainArticleCard\">\n          <img\n            class=\"card-img-top mainArticleImage\"\n            [src]=\"artical.urlToImage\"\n            alt=\"Card image cap\"\n          />\n          <div class=\"card-body\">\n            <h5 class=\"card-title firstCardTitle\">{{ artical.title }}</h5>\n            <p class=\"card-text\">{{ artical.description }}</p>\n            <button (click)=\"sendItem(artical.title)\" class=\"btn btn-primary\">\n              Show More\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- section2 two Article next to mainArticle -->\n    <div class=\"col-xl-4 col-lg-4 col-md-6 col-12 \">\n      <div\n        class=\"articals\"\n        *ngFor=\"let artical of eachArtical | slice: 1:3; let i = index\"\n      >\n        <div class=\"card twoArticleCard\">\n          <img\n            class=\"card-img-top twoArticleImage\"\n            [src]=\"artical.urlToImage\"\n            alt=\"Card image cap\"\n          />\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">{{ artical.title }}</h5>\n\n            <button (click)=\"sendItem(artical.title)\" class=\"btn btn-primary\">\n              Show More\n            </button>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- section3 recent post -->\n    <div class=\"col-4 recentPost d-none d-lg-block d-xl-block\">\n      <h6>Recent Post</h6>\n      <div\n        class=\"articals\"\n        *ngFor=\"let artical of eachArtical | slice: 6:9; let i = index\"\n      >\n        <div class=\"row mb-5\">\n          <div class=\"col-5 mr-3\">\n            <img class=\"recentPostImage\" [src]=\"artical.urlToImage\" />\n          </div>\n\n          <div class=\"col-6 recentPostTitle\">\n            <a [routerLink]=\"\" (click)=\"sendItem(artical.title)\">\n              {{ artical.title }}\n            </a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"row\">\n    <!-- section4 horizontal artical-->\n    <div class=\"col-8\">\n      <h6 class=\"mb-3\">Editors Picks</h6>\n      <div\n        class=\"articals  mb-5\"\n        *ngFor=\"let artical of eachArtical | slice: 3:6; let i = index\"\n      >\n        <div class=\"card\">\n          <div class=\"card-horizontal\">\n            <div class=\"row\">\n              <div class=\"col-3\">\n                <div class=\"img-square-wrapper\">\n                  <img\n                    class=\"horizontalarticalImage\"\n                    [src]=\"artical.urlToImage\"\n                    alt=\"Card image cap\"\n                  />\n                </div>\n              </div>\n              <div class=\"col-9\">\n                <a [routerLink]=\"\" (click)=\"sendItem(artical.title)\">\n                  <div class=\"card-body\">\n                    <h4 class=\"card-title\">{{ artical.title }}</h4>\n                    <p class=\"card-text\">{{ artical.description }}</p>\n                  </div>\n                </a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <!-- section5 Most Popular-->\n    <div class=\"col-4 recentPost MostPopular d-none d-lg-block d-xl-block\">\n      <h6>5 Most Popular</h6>\n      <div\n        class=\"articals\"\n        *ngFor=\"let artical of eachArtical | slice: 0:5; let i = index\"\n      >\n        <a [routerLink]=\"\" (click)=\"sendItem(artical.title)\">\n          <div class=\"col-12 mb-3 MostPopularTitle\">\n            <span>{{ i + 1 }}.</span> {{ artical.title }}\n          </div>\n        </a>\n      </div>\n    </div>\n  </div>\n\n  <!-- section6 Trending-->\n  <div class=\"col-12\">\n    <div class=\"drawLine\"></div>\n  </div>\n  <h6 class=\"mt-3 mb-4\">Trending</h6>\n  <div class=\"row\">\n    <div\n      class=\"articals col-3 mb-5\"\n      *ngFor=\"let artical of eachArtical | slice: 3:7; let i = index\"\n    >\n      <div class=\"card trendingCard\">\n        <img\n          class=\"card-img-top trendingCardImage\"\n          [src]=\"artical.urlToImage\"\n          alt=\"Card image cap\"\n        />\n        <div class=\"card-body\">\n          <a [routerLink]=\"\" (click)=\"sendItem(artical.title)\">\n            <h5 class=\"card-title trendingCardTitle\">\n              {{ artical.title }}\n            </h5>\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/each-artical/each-artical.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/each-artical/each-artical.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEachArticalEachArticalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- header -->\n<div class=\"container\">\n  <div class=\"col-12 mt-5 header\">\n    {{ specificArtical.title }}\n  </div>\n  <div class=\"drawLine\"></div>\n</div>\n\n<div class=\"container mt-5\">\n  <div class=\"row\">\n    <!-- table style -->\n    <div class=\"col-2\">\n      <table class=\"table social\">\n        <tr>\n          <td class=\"tableTD\">\n            23 Share\n          </td>\n        </tr>\n        <tr>\n          <td><i class=\"far fa-envelope float-left ml-2\"></i>email</td>\n        </tr>\n        <tr>\n          <td><i class=\"fab fa-facebook-f float-left ml-2\"></i>facebook</td>\n        </tr>\n        <tr>\n          <td><i class=\"fab fa-twitter float-left ml-2\"></i>twitter</td>\n        </tr>\n        <tr>\n          <td><i class=\"fas fa-share float-left ml-2\"></i>more</td>\n        </tr>\n      </table>\n    </div>\n    <div class=\"col-9\">\n      <img\n        [src]=\"specificArtical.urlToImage\"\n        class=\"img-fluid mb-3\"\n        alt=\"Responsive image\"\n      />\n      <div class=\"mb-5\">{{ specificArtical.content }}</div>\n\n      <div class=\"commentSection\">\n        <h2 class=\"mt-5 mb-3 formHeader\">Comments</h2>\n        <div class=\"comments min-vh-20\">\n          <div class=\"container\">\n            <div *ngIf=\"commentList\">\n              <div *ngFor=\"let comments of commentList\">\n                <div class=\"row commentContent mb-3\">\n                  <img\n                    class=\"rounded commentImg\"\n                    src=\"../../../assets/images/iconPerson2.png\"\n                  />\n                  <div class=\"col-11\">\n                    <div class=\"mb-2 commentPerson\">\n                      Person\n                    </div>\n                    <div>{{ comments.msg }}</div>\n                  </div>\n                  <div class=\"drawLine\"></div>\n                </div>\n              </div>\n            </div>\n\n            <form\n              [formGroup]=\"commentForm\"\n              (ngSubmit)=\"onSubmitComment()\"\n              class=\"bg-light col-xl-12 col-lg-12 col-md-6 col-sm-7 col-10 \"\n            >\n              <div class=\"input-group \">\n                <input\n                  type=\"text\"\n                  placeholder=\"Type a message\"\n                  formControlName=\"msg\"\n                  aria-describedby=\"button-addon2\"\n                  class=\"form-control rounded-0 border-0 py-4 bg-light\"\n                  [ngClass]=\"{\n                    error: submittedComment && commentForm.controls.msg.errors\n                  }\"\n                />\n                <div\n                  *ngIf=\"\n                    submittedComment ||\n                    (commentForm.get('msg').invalid &&\n                      (commentForm.get('msg').dirty ||\n                        commentForm.get('msg').touched))\n                  \"\n                  class=\"validall\"\n                >\n                  <div\n                    class=\"validall\"\n                    *ngIf=\"commentForm.controls.msg.errors?.required\"\n                  >\n                    <sup>*</sup>No comment exist\n                  </div>\n                  <div\n                    class=\"validall\"\n                    *ngIf=\"commentForm.controls.msg.errors?.pattern\"\n                  >\n                    <sup>*</sup>Please enter letters and numbers only\n                  </div>\n                </div>\n                <div class=\"input-group-append\">\n                  <button id=\"button-addon2\" type=\"submit\" class=\"btn btn-link\">\n                    <i class=\"fa fa-paper-plane\"></i>\n                  </button>\n                </div>\n              </div>\n            </form>\n          </div>\n        </div>\n      </div>\n      <h2 class=\"mt-5 mb-3 formHeader\">Join the Conversation</h2>\n      <form [formGroup]=\"joinform\" (ngSubmit)=\"onSubmit()\">\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-7\">\n            <input\n              type=\"text\"\n              class=\"form-control\"\n              placeholder=\"Name\"\n              formControlName=\"fullName\"\n              [ngClass]=\"{\n                error: submitted && joinform.controls.fullName.errors\n              }\"\n              id=\"fullName\"\n            />\n            <div\n              *ngIf=\"\n                submitted ||\n                (joinform.get('fullName').invalid &&\n                  (joinform.get('fullName').dirty ||\n                    joinform.get('fullName').touched))\n              \"\n              class=\"validall\"\n            >\n              <div\n                class=\"validall\"\n                *ngIf=\"joinform.controls.fullName.errors?.required\"\n              >\n                <sup>*</sup>Please enter your FullName\n              </div>\n              <div\n                class=\"validall\"\n                *ngIf=\"joinform.controls.fullName.errors?.pattern\"\n              >\n                <sup>*</sup>Please enter letter only\n              </div>\n              <div\n                class=\"validall\"\n                *ngIf=\"joinform.controls.fullName.errors?.minLength\"\n              >\n                <sup>*</sup> Minimum length is 2\n              </div>\n              <div\n                class=\"validall\"\n                *ngIf=\"joinform.controls.fullName.errors?.maxLength\"\n              >\n                <sup>*</sup> Maximum length is 50\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-7\">\n            <input\n              type=\"email\"\n              class=\"form-control\"\n              placeholder=\"Email\"\n              formControlName=\"email\"\n              [ngClass]=\"{\n                error: submitted && joinform.controls.email.errors\n              }\"\n              id=\"Email\"\n            />\n            <div\n              *ngIf=\"\n                submitted ||\n                (joinform.get('email').invalid &&\n                  (joinform.get('email').dirty ||\n                    joinform.get('email').touched))\n              \"\n              class=\"validall\"\n            >\n              <div\n                class=\"validall\"\n                *ngIf=\"joinform.controls.email.errors?.required\"\n              >\n                <sup>*</sup>Please enter your email\n              </div>\n              <div\n                class=\"validall\"\n                *ngIf=\"joinform.controls.email.errors?.pattern\"\n              >\n                <sup>*</sup>Please enter valid email\n              </div>\n            </div>\n          </div>\n        </div>\n\n        <div class=\"form-row\">\n          <div class=\"form-group col-md-12\">\n            <textarea\n              class=\"form-control\"\n              rows=\"10\"\n              placeholder=\"Message\"\n              formControlName=\"message\"\n              [ngClass]=\"{\n                error: submitted && joinform.controls.email.errors\n              }\"\n              id=\"Message\"\n            >\n            </textarea>\n            <div\n              *ngIf=\"\n                submitted ||\n                (joinform.get('message').invalid &&\n                  (joinform.get('message').dirty ||\n                    joinform.get('message').touched))\n              \"\n              class=\"validall\"\n            >\n              <div\n                class=\"validall\"\n                *ngIf=\"joinform.controls.message.errors?.required\"\n              >\n                <sup>*</sup>Please enter message\n              </div>\n              <div\n                class=\"validall\"\n                *ngIf=\"joinform.controls.message.errors?.minLength\"\n              >\n                <sup>*</sup>Minimum length is 3 Character\n              </div>\n            </div>\n          </div>\n        </div>\n        <button type=\"submit\" class=\"contactBTN\">Send</button>\n      </form>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) try {
          if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
          if (y = 0, t) op = [op[0] & 2, t.value];

          switch (op[0]) {
            case 0:
            case 1:
              t = op;
              break;

            case 4:
              _.label++;
              return {
                value: op[1],
                done: false
              };

            case 5:
              _.label++;
              y = op[1];
              op = [0];
              continue;

            case 7:
              op = _.ops.pop();

              _.trys.pop();

              continue;

            default:
              if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                _ = 0;
                continue;
              }

              if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                _.label = op[1];
                break;
              }

              if (op[0] === 6 && _.label < t[1]) {
                _.label = t[1];
                t = op;
                break;
              }

              if (t && _.label < t[2]) {
                _.label = t[2];

                _.ops.push(op);

                break;
              }

              if (t[2]) _.ops.pop();

              _.trys.pop();

              continue;
          }

          op = body.call(thisArg, _);
        } catch (e) {
          op = [6, e];
          y = 0;
        } finally {
          f = t = 0;
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) ar = ar.concat(__read(arguments[i]));

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;

      for (var r = Array(s), k = 0, i = 0; i < il; i++) for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) r[k] = a[j];

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
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
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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

    const routes = [];
    let AppRoutingModule = class AppRoutingModule {};
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let AppComponent = class AppComponent {
      constructor() {
        this.title = 'pan-arab-task';
      }

    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_artical_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./services/artical.service */
    "./src/app/services/artical.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _components_all_articals_all_articals_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/all-articals/all-articals.component */
    "./src/app/components/all-articals/all-articals.component.ts");
    /* harmony import */


    var _components_each_artical_each_artical_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/each-artical/each-artical.component */
    "./src/app/components/each-artical/each-artical.component.ts");
    /* harmony import */


    var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../../node_modules/@angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./routes */
    "./src/app/routes.ts");

    let AppModule = class AppModule {};
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], _components_all_articals_all_articals_component__WEBPACK_IMPORTED_MODULE_7__["AllArticalsComponent"], _components_each_artical_each_artical_component__WEBPACK_IMPORTED_MODULE_8__["EachArticalComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_11__["appRoutes"])],
      providers: [_services_artical_service__WEBPACK_IMPORTED_MODULE_1__["ArticalService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/all-articals/all-articals.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/all-articals/all-articals.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsAllArticalsAllArticalsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\r\n  text-align: center;\r\n}\r\n.drawLine {\r\n  border-bottom: 1px solid grey;\r\n}\r\n.card {\r\n  border: none;\r\n  /* margin-left: auto; */\r\n}\r\na {\r\n  color: black;\r\n}\r\na:hover {\r\n  text-decoration: none;\r\n}\r\nspan {\r\n  color: red;\r\n  font-weight: bold;\r\n}\r\nh6 {\r\n  color: red;\r\n  font-weight: bold;\r\n  font-size: 20px;\r\n}\r\n.next-article {\r\n  -webkit-column-count: 5;\r\n     -moz-column-count: 5;\r\n          column-count: 5;\r\n}\r\n/*section1 mainArticle  */\r\n.firstCardTitle {\r\n  font-weight: bolder;\r\n  font-size: 35px;\r\n}\r\n.mainArticleCard {\r\n  width: 22rem;\r\n}\r\n.mainArticleImage {\r\n  height: 13rem;\r\n}\r\n/* section2 two Article next to mainArticle */\r\n.twoArticleCard {\r\n  width: 18rem;\r\n  height: 25rem;\r\n}\r\n.twoArticleCard .twoArticleImage {\r\n  height: 10rem;\r\n}\r\n/* section3 recent post */\r\n.recentPost {\r\n  height: 100%;\r\n  padding-top: 10px;\r\n  padding-bottom: 10px;\r\n  border: none;\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  border-radius: 5px;\r\n  border-color: gray;\r\n}\r\n.recentPostImage {\r\n  width: 160px;\r\n  height: 170;\r\n}\r\n.recentPostTitle {\r\n  vertical-align: middle;\r\n}\r\n/* section4 horizontal Artical */\r\n.horizontalarticalImage {\r\n  width: 200px;\r\n  height: 200px;\r\n}\r\n/* section5 Most Popular */\r\n.MostPopular {\r\n  bottom: 150px;\r\n}\r\n.MostPopular .MostPopularTitle {\r\n  vertical-align: middle;\r\n}\r\n/* section6 Trending */\r\n.trendingCard {\r\n  width: 15rem;\r\n  height: 25rem;\r\n}\r\n.trendingCard .trendingCardImage {\r\n  height: 10rem;\r\n}\r\n.trendingCard .trendingCardTitle {\r\n  -webkit-box-pack: center;\r\n          justify-content: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hbGwtYXJ0aWNhbHMvYWxsLWFydGljYWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLDZCQUE2QjtBQUMvQjtBQUVBO0VBQ0UsWUFBWTtFQUNaLHVCQUF1QjtBQUN6QjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFVBQVU7RUFDVixpQkFBaUI7RUFDakIsZUFBZTtBQUNqQjtBQUVBO0VBQ0UsdUJBQWU7S0FBZixvQkFBZTtVQUFmLGVBQWU7QUFDakI7QUFFQSx5QkFBeUI7QUFDekI7RUFDRSxtQkFBbUI7RUFDbkIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQSw2Q0FBNkM7QUFDN0M7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQSx5QkFBeUI7QUFDekI7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixZQUFZO0VBQ1osbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFDQSxnQ0FBZ0M7QUFDaEM7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBQ0EsMEJBQTBCO0FBQzFCO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxzQkFBc0I7QUFDeEI7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxZQUFZO0VBQ1osYUFBYTtBQUNmO0FBRUE7RUFDRSxhQUFhO0FBQ2Y7QUFFQTtFQUNFLHdCQUF1QjtVQUF2Qix1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2FsbC1hcnRpY2Fscy9hbGwtYXJ0aWNhbHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXIge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4uZHJhd0xpbmUge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBncmV5O1xyXG59XHJcblxyXG4uY2FyZCB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIC8qIG1hcmdpbi1sZWZ0OiBhdXRvOyAqL1xyXG59XHJcbmEge1xyXG4gIGNvbG9yOiBibGFjaztcclxufVxyXG5hOmhvdmVyIHtcclxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbn1cclxuc3BhbiB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5oNiB7XHJcbiAgY29sb3I6IHJlZDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5uZXh0LWFydGljbGUge1xyXG4gIGNvbHVtbi1jb3VudDogNTtcclxufVxyXG5cclxuLypzZWN0aW9uMSBtYWluQXJ0aWNsZSAgKi9cclxuLmZpcnN0Q2FyZFRpdGxlIHtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxufVxyXG4ubWFpbkFydGljbGVDYXJkIHtcclxuICB3aWR0aDogMjJyZW07XHJcbn1cclxuLm1haW5BcnRpY2xlSW1hZ2Uge1xyXG4gIGhlaWdodDogMTNyZW07XHJcbn1cclxuLyogc2VjdGlvbjIgdHdvIEFydGljbGUgbmV4dCB0byBtYWluQXJ0aWNsZSAqL1xyXG4udHdvQXJ0aWNsZUNhcmQge1xyXG4gIHdpZHRoOiAxOHJlbTtcclxuICBoZWlnaHQ6IDI1cmVtO1xyXG59XHJcbi50d29BcnRpY2xlQ2FyZCAudHdvQXJ0aWNsZUltYWdlIHtcclxuICBoZWlnaHQ6IDEwcmVtO1xyXG59XHJcbi8qIHNlY3Rpb24zIHJlY2VudCBwb3N0ICovXHJcbi5yZWNlbnRQb3N0IHtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDEwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDEwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1jb2xvcjogZ3JheTtcclxufVxyXG4ucmVjZW50UG9zdEltYWdlIHtcclxuICB3aWR0aDogMTYwcHg7XHJcbiAgaGVpZ2h0OiAxNzA7XHJcbn1cclxuLnJlY2VudFBvc3RUaXRsZSB7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxufVxyXG4vKiBzZWN0aW9uNCBob3Jpem9udGFsIEFydGljYWwgKi9cclxuLmhvcml6b250YWxhcnRpY2FsSW1hZ2Uge1xyXG4gIHdpZHRoOiAyMDBweDtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcbi8qIHNlY3Rpb241IE1vc3QgUG9wdWxhciAqL1xyXG4uTW9zdFBvcHVsYXIge1xyXG4gIGJvdHRvbTogMTUwcHg7XHJcbn1cclxuLk1vc3RQb3B1bGFyIC5Nb3N0UG9wdWxhclRpdGxlIHtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4vKiBzZWN0aW9uNiBUcmVuZGluZyAqL1xyXG4udHJlbmRpbmdDYXJkIHtcclxuICB3aWR0aDogMTVyZW07XHJcbiAgaGVpZ2h0OiAyNXJlbTtcclxufVxyXG5cclxuLnRyZW5kaW5nQ2FyZCAudHJlbmRpbmdDYXJkSW1hZ2Uge1xyXG4gIGhlaWdodDogMTByZW07XHJcbn1cclxuXHJcbi50cmVuZGluZ0NhcmQgLnRyZW5kaW5nQ2FyZFRpdGxlIHtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/all-articals/all-articals.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/all-articals/all-articals.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AllArticalsComponent */

  /***/
  function srcAppComponentsAllArticalsAllArticalsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AllArticalsComponent", function () {
      return AllArticalsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_artical_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/artical.service */
    "./src/app/services/artical.service.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    let AllArticalsComponent = class AllArticalsComponent {
      constructor(articalServices, router) {
        this.articalServices = articalServices;
        this.router = router;
      }

      ngOnInit() {
        this.showAllArticals();
      }

      showAllArticals() {
        this.articalServices.getAllArticals().subscribe(res => {
          this.allArticals = res;
          this.eachArtical = this.allArticals.articles; // console.log(this.eachArtical);
        });
      }

      sendItem(title) {
        this.index = this.eachArtical.findIndex(x => x.title === title);
        this.articalInfo = {
          urlToImage: this.eachArtical[this.index].urlToImage,
          content: this.eachArtical[this.index].content,
          author: this.eachArtical[this.index].author,
          title: this.eachArtical[this.index].title,
          description: this.eachArtical[this.index].description,
          url: this.eachArtical[this.index].url,
          publishedAt: this.eachArtical[this.index].publishedAt
        };
        this.articalServices.setArtical(this.articalInfo);
        this.articalServices.changeMessage(this.eachArtical[this.index]);
        this.router.navigate(["/artical"]);
      }

    };

    AllArticalsComponent.ctorParameters = () => [{
      type: _services_artical_service__WEBPACK_IMPORTED_MODULE_1__["ArticalService"]
    }, {
      type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
    }];

    AllArticalsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
      selector: "app-all-articals",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./all-articals.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/all-articals/all-articals.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./all-articals.component.css */
      "./src/app/components/all-articals/all-articals.component.css")).default]
    })], AllArticalsComponent);
    /***/
  },

  /***/
  "./src/app/components/each-artical/each-artical.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/components/each-artical/each-artical.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEachArticalEachArticalComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".header {\r\n  font-size: 35px;\r\n  font-weight: bolder;\r\n}\r\n/* table style  */\r\n.tableTD {\r\n  height: 100px;\r\n  vertical-align: middle;\r\n  font-weight: bolder;\r\n  font-size: 40px;\r\n  line-height: 40px;\r\n}\r\n.container .row table {\r\n  text-align: center;\r\n  border-style: solid;\r\n  border-width: 0.5px;\r\n  border-radius: 7px;\r\n  border-color: darkgray;\r\n}\r\n.container .row .social tr td {\r\n  border-radius: 5px;\r\n}\r\n/* comment style */\r\n.commentImg {\r\n  width: 50px;\r\n  height: 40px;\r\n}\r\n.commentPerson {\r\n  font-weight: bold;\r\n  font-size: 15px;\r\n}\r\n.formHeader {\r\n  font-weight: lighter;\r\n}\r\n.contactBTN {\r\n  color: #ffffff;\r\n  background-color: #cc0000;\r\n  text-align: center;\r\n  vertical-align: middle;\r\n  height: 40px;\r\n  width: 140px;\r\n  font-weight: bold;\r\n  border: none;\r\n  border-radius: 7px;\r\n}\r\n.comments {\r\n  height: 100%;\r\n  padding: 10px;\r\n  border-style: solid;\r\n  border-width: 1px;\r\n  border-radius: 5px;\r\n  border-color: gray;\r\n}\r\n.drawLine {\r\n  border-bottom: 10px solid #ebebe0;\r\n}\r\nform {\r\n  /* position: fixed; */\r\n  border-radius: 7px;\r\n  /* margin-top: 5px; */\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lYWNoLWFydGljYWwvZWFjaC1hcnRpY2FsLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsbUJBQW1CO0FBQ3JCO0FBQ0EsaUJBQWlCO0FBQ2pCO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLHNCQUFzQjtBQUN4QjtBQUNBO0VBQ0Usa0JBQWtCO0FBQ3BCO0FBQ0Esa0JBQWtCO0FBQ2xCO0VBQ0UsV0FBVztFQUNYLFlBQVk7QUFDZDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7QUFDQTtFQUNFLG9CQUFvQjtBQUN0QjtBQUNBO0VBQ0UsY0FBYztFQUNkLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsc0JBQXNCO0VBQ3RCLFlBQVk7RUFDWixZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lYWNoLWFydGljYWwvZWFjaC1hcnRpY2FsLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyIHtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGRlcjtcclxufVxyXG4vKiB0YWJsZSBzdHlsZSAgKi9cclxuLnRhYmxlVEQge1xyXG4gIGhlaWdodDogMTAwcHg7XHJcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICBmb250LXdlaWdodDogYm9sZGVyO1xyXG4gIGZvbnQtc2l6ZTogNDBweDtcclxuICBsaW5lLWhlaWdodDogNDBweDtcclxufVxyXG5cclxuLmNvbnRhaW5lciAucm93IHRhYmxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcclxuICBib3JkZXItd2lkdGg6IDAuNXB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxuICBib3JkZXItY29sb3I6IGRhcmtncmF5O1xyXG59XHJcbi5jb250YWluZXIgLnJvdyAuc29jaWFsIHRyIHRkIHtcclxuICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbn1cclxuLyogY29tbWVudCBzdHlsZSAqL1xyXG4uY29tbWVudEltZyB7XHJcbiAgd2lkdGg6IDUwcHg7XHJcbiAgaGVpZ2h0OiA0MHB4O1xyXG59XHJcbi5jb21tZW50UGVyc29uIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE1cHg7XHJcbn1cclxuLmZvcm1IZWFkZXIge1xyXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xyXG59XHJcbi5jb250YWN0QlROIHtcclxuICBjb2xvcjogI2ZmZmZmZjtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2MwMDAwO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG4gIGhlaWdodDogNDBweDtcclxuICB3aWR0aDogMTQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJvcmRlci1yYWRpdXM6IDdweDtcclxufVxyXG4uY29tbWVudHMge1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJvcmRlci1zdHlsZTogc29saWQ7XHJcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1jb2xvcjogZ3JheTtcclxufVxyXG4uZHJhd0xpbmUge1xyXG4gIGJvcmRlci1ib3R0b206IDEwcHggc29saWQgI2ViZWJlMDtcclxufVxyXG5mb3JtIHtcclxuICAvKiBwb3NpdGlvbjogZml4ZWQ7ICovXHJcbiAgYm9yZGVyLXJhZGl1czogN3B4O1xyXG4gIC8qIG1hcmdpbi10b3A6IDVweDsgKi9cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/each-artical/each-artical.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/each-artical/each-artical.component.ts ***!
    \*******************************************************************/

  /*! exports provided: EachArticalComponent */

  /***/
  function srcAppComponentsEachArticalEachArticalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EachArticalComponent", function () {
      return EachArticalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _services_artical_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./../../services/artical.service */
    "./src/app/services/artical.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    let EachArticalComponent = class EachArticalComponent {
      constructor(articalServices, fb) {
        this.articalServices = articalServices;
        this.fb = fb;
        this.submitted = false;
        this.submittedComment = false;
        this.commentList = [];
        this.articalInfo = {
          urlToImage: "",
          content: "",
          author: "",
          title: "",
          description: "",
          url: "",
          publishedAt: ""
        };
      }

      ngOnInit() {
        this.joinform = this.fb.group({
          fullName: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(50), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[a-zA-Z\s]*$/)]],
          email: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)]],
          message: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/)]]
        });
        this.commentForm = this.fb.group({
          msg: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern(/^[A-Za-z0-9 _]*[A-Za-z0-9][A-Za-z0-9 _]*$/)]]
        });
        this.articalInfo = this.articalServices.getArtical(); // console.log(this.articalInfo);

        this.articalServices.currentArtical.subscribe(res => {
          this.specificArtical = res; // console.log(this.specificArtical);
        });
      }

      onSubmit() {
        this.submitted = true;

        if (this.joinform.invalid) {
          return false;
        } else {
          this.articalServices.postMessage(this.joinform.value);
          this.joinform.reset(); // .subscribe(res => {
          //   this.joinform.reset();
          // });
        }
      }

      onSubmitComment() {
        this.submittedComment = true;

        if (this.commentForm.invalid) {
          return false;
        } else {
          this.commentList.push(this.commentForm.value);
          this.commentForm.reset(); // console.log(this.commentList);
        }
      }

    };

    EachArticalComponent.ctorParameters = () => [{
      type: _services_artical_service__WEBPACK_IMPORTED_MODULE_1__["ArticalService"]
    }, {
      type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
    }];

    EachArticalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
      selector: "app-each-artical",
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./each-artical.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/each-artical/each-artical.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./each-artical.component.css */
      "./src/app/components/each-artical/each-artical.component.css")).default]
    })], EachArticalComponent);
    /***/
  },

  /***/
  "./src/app/routes.ts":
  /*!***************************!*\
    !*** ./src/app/routes.ts ***!
    \***************************/

  /*! exports provided: appRoutes */

  /***/
  function srcAppRoutesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "appRoutes", function () {
      return appRoutes;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _components_each_artical_each_artical_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./components/each-artical/each-artical.component */
    "./src/app/components/each-artical/each-artical.component.ts");
    /* harmony import */


    var _components_all_articals_all_articals_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./components/all-articals/all-articals.component */
    "./src/app/components/all-articals/all-articals.component.ts");

    const appRoutes = [{
      path: "allarticals",
      component: _components_all_articals_all_articals_component__WEBPACK_IMPORTED_MODULE_2__["AllArticalsComponent"]
    }, {
      path: "artical",
      component: _components_each_artical_each_artical_component__WEBPACK_IMPORTED_MODULE_1__["EachArticalComponent"]
    }, {
      path: "",
      redirectTo: "/allarticals",
      pathMatch: "full"
    }, {
      path: "**",
      redirectTo: "/allarticals",
      pathMatch: "full"
    }];
    /***/
  },

  /***/
  "./src/app/services/artical.service.ts":
  /*!*********************************************!*\
    !*** ./src/app/services/artical.service.ts ***!
    \*********************************************/

  /*! exports provided: ArticalService */

  /***/
  function srcAppServicesArticalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ArticalService", function () {
      return ArticalService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    let ArticalService = class ArticalService {
      constructor(http) {
        this.http = http;
        this.articalSource = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]({});
        this.currentArtical = this.articalSource.asObservable();
        this.articalInfo = {
          urlToImage: "",
          content: "",
          author: "",
          title: "",
          description: "",
          url: "",
          publishedAt: ""
        };
      }

      getAllArticals() {
        return this.http.get("https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=33ba70d6367648b49a76910dfad62ad4");
      }

      changeMessage(artical) {
        this.articalSource.next(artical);
      }

      getArtical() {
        // console.log(this.articalInfo);
        return this.articalInfo;
      }

      setArtical(result) {
        this.articalInfo = result;
      }

      postMessage(message) {
        // return this.http.post("...", message);
        console.log(message);
      }

    };

    ArticalService.ctorParameters = () => [{
      type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
    }];

    ArticalService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: "root"
    })], ArticalService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    const environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(err => console.error(err));
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\projects\Company_tasks\pan-arab-task\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map