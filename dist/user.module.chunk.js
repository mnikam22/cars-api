webpackJsonp(["user.module"],{

/***/ "../../../../../src/app/modules/user/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "This is user dashboard"

/***/ }),

/***/ "../../../../../src/app/modules/user/dashboard/dashboard.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDashboardComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_configs_configs_service__ = __webpack_require__("../../../../../src/app/shared/services/configs/configs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_toastr__ = __webpack_require__("../../../../toastr/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_block_ui__ = __webpack_require__("../../../../block-ui/jquery.blockUI.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_block_ui__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserDashboardComponent = (function () {
    function UserDashboardComponent(renderer, http, router, config, userService) {
        this.renderer = renderer;
        this.http = http;
        this.router = router;
        this.config = config;
        this.userService = userService;
        this.title = 'app';
        this.dealer = {};
        this.loginMsg = false;
        //this.renderer.addClass(document.body, 'm-detail');
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
    };
    UserDashboardComponent.prototype.dealerLogin = function (data) {
        data = data.value;
        var self = this;
        self.dealer = {
            email: data.email,
            password: data.password,
        };
        __WEBPACK_IMPORTED_MODULE_5_jquery__["blockUI"]({ css: { backgroundColor: 'none', border: 'none' }, message: __WEBPACK_IMPORTED_MODULE_5_jquery__("<img src='/assets/images/logo/loader.gif'>") });
        self.http.post(self.config.getAPIUrl() + "user/login", self.dealer).subscribe(function (response) {
            var loginData = response;
            if (!loginData.error) {
                //self.loginMsg = {error: false, message:"Login Successfull. Redirecting to dashboard" };
                localStorage.setItem('dealertoken', loginData.token);
                localStorage.setItem('user', JSON.stringify(loginData.user));
                self.userService.updateUser();
                __WEBPACK_IMPORTED_MODULE_6_toastr__["error"]("Success !! Redirecting to dashboard");
                setTimeout(function () {
                    self.router.navigate(['/user/dashboard']);
                }, 2000);
            }
            else {
                //self.loginMsg.error = true;
                //self.loginMsg.message = loginData.message;
                __WEBPACK_IMPORTED_MODULE_6_toastr__["error"](loginData.message);
                localStorage.setItem('dealertoken', false);
                __WEBPACK_IMPORTED_MODULE_5_jquery__["unblockUI"]();
            }
        }, function (error) {
            console.log(error, "error");
            //self.loginMsg = error.json() ;
            __WEBPACK_IMPORTED_MODULE_5_jquery__["unblockUI"]();
            __WEBPACK_IMPORTED_MODULE_6_toastr__["error"](error.error.message);
        });
    };
    UserDashboardComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '',
            template: __webpack_require__("../../../../../src/app/modules/user/dashboard/dashboard.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_configs_configs_service__["a" /* ConfigurationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__shared_services_configs_configs_service__["a" /* ConfigurationService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_user_user_service__["a" /* UserService */]])
    ], UserDashboardComponent);
    return UserDashboardComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/user/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"b-pageHeader\">\r\n    <div class=\"container\">\r\n        <h1 class=\"wow zoomInLeft\" data-wow-delay=\"0.5s\" style=\"visibility: visible; animation-delay: 0.5s; animation-name: zoomInLeft;\">Customer Login</h1>        \r\n    </div>\r\n</section>\r\n\r\n<section class=\"b-contacts s-shadow\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">\r\n            </div>    \r\n            <div class=\"col-xs-6\">\r\n                <div class=\"b-contacts__form\">\r\n                    <h2 data-wow-delay=\"0.5s\" style=\"visibility: visible; animation-delay: 0.5s; animation-name: zoomInUp;\">\r\n                        <h2 class=\"s-titleDet\">Customer Login</h2> \r\n                    </h2>\r\n                    <p data-wow-delay=\"0.5s\" >Enter your credentials below to login as customer.</p>\r\n                    <div id=\"success\"></div> \r\n                    <h5 *ngIf=\"loginMsg && loginMsg.error\" class=\"label-danger\">{{loginMsg.message}}</h5>\r\n                    <h5 *ngIf=\"loginMsg && !loginMsg.error\" class=\"label-success\">{{loginMsg.message}}</h5>\r\n                    <form #dealerLoginForm=\"ngForm\" id=\"contactForm\" novalidate=\"\" class=\"s-form wow zoomInUp\" data-wow-delay=\"0.5s\" style=\"visibility: visible; animation-delay: 0.5s; animation-name: zoomInUp;\" (ngSubmit)=\"dealerLogin(dealerLoginForm)\">                        \r\n                        <input type=\"text\" placeholder=\"EMAIL\" value=\"\" name=\"email\" id=\"email\" #email=\"ngModel\" ngModel>\r\n                        <input type=\"password\" placeholder=\"PASSWORD\" value=\"\" name=\"password\" id=\"password\" #password=\"ngModel\" ngModel>\r\n                        <button type=\"submit\" class=\"btn m-btn\">SUBMIT NOW<span class=\"fa fa-angle-right\"></span></button>\r\n                    </form>\r\n                </div>\r\n            </div>            \r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/modules/user/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_configs_configs_service__ = __webpack_require__("../../../../../src/app/shared/services/configs/configs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_toastr__ = __webpack_require__("../../../../toastr/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_block_ui__ = __webpack_require__("../../../../block-ui/jquery.blockUI.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_block_ui__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UserLoginComponent = (function () {
    function UserLoginComponent(renderer, http, router, config, userService) {
        this.renderer = renderer;
        this.http = http;
        this.router = router;
        this.config = config;
        this.userService = userService;
        this.title = 'app';
        this.dealer = {};
        this.loginMsg = false;
    }
    UserLoginComponent.prototype.dealerLogin = function (data) {
        data = data.value;
        var self = this;
        self.dealer = {
            email: data.email,
            password: data.password,
        };
        __WEBPACK_IMPORTED_MODULE_5_jquery__["blockUI"]({ css: { backgroundColor: 'none', border: 'none' }, message: __WEBPACK_IMPORTED_MODULE_5_jquery__("<img src='/assets/images/logo/loader.gif'>") });
        self.http.post(self.config.getAPIUrl() + "user/login", self.dealer).subscribe(function (response) {
            var loginData = response;
            if (!loginData.error) {
                localStorage.setItem('authtoken', loginData.token);
                localStorage.setItem('user', JSON.stringify(loginData.user));
                self.userService.updateUser();
                __WEBPACK_IMPORTED_MODULE_6_toastr__["success"]("Login success !! Redirecting to dashboard");
                setTimeout(function () {
                    self.router.navigate(['/user/profile/' + loginData.user._id]);
                }, 2000);
            }
            else {
                __WEBPACK_IMPORTED_MODULE_6_toastr__["error"](loginData.message);
                localStorage.setItem('authtoken', false);
                __WEBPACK_IMPORTED_MODULE_5_jquery__["unblockUI"]();
            }
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_5_jquery__["unblockUI"]();
            __WEBPACK_IMPORTED_MODULE_6_toastr__["error"](error.error.message);
        });
    };
    UserLoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '',
            template: __webpack_require__("../../../../../src/app/modules/user/login/login.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_configs_configs_service__["a" /* ConfigurationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__shared_services_configs_configs_service__["a" /* ConfigurationService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_user_user_service__["a" /* UserService */]])
    ], UserLoginComponent);
    return UserLoginComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/user/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"b-pageHeader\">\r\n    <div class=\"container\">\r\n        <h1 class=\"wow zoomInLeft\" data-wow-delay=\"0.5s\" style=\"visibility: visible; animation-delay: 0.5s; animation-name: zoomInLeft;\">Your Profile</h1>        \r\n    </div>\r\n</section>\r\n<section class=\"b-detail s-shadow\">    \r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-md-6\">\r\n                <table class=\"table table-bordered table-striped table-hover\">\r\n                    <tbody>\r\n                        <tr>\r\n                            <td><b>First Name</b></td>\r\n                            <td>{{user.first_name}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td><b>Last Name</b></td>\r\n                            <td>{{user.last_name}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td><b>Email</b></td>\r\n                            <td>{{user.email}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td><b>Contact No</b></td>\r\n                            <td>{{user.mobile_no}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n            </div>\r\n            <!-- <div class=\"col-md-6\">\r\n                {{user.first_name}}\r\n            </div> -->\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/modules/user/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UpdateUserProfileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_configs_configs_service__ = __webpack_require__("../../../../../src/app/shared/services/configs/configs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_user_user_service__ = __webpack_require__("../../../../../src/app/shared/services/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_toastr__ = __webpack_require__("../../../../toastr/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_block_ui__ = __webpack_require__("../../../../block-ui/jquery.blockUI.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_block_ui__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var UpdateUserProfileComponent = (function () {
    function UpdateUserProfileComponent(renderer, http, route, router, config, userService) {
        this.renderer = renderer;
        this.http = http;
        this.route = route;
        this.router = router;
        this.config = config;
        this.userService = userService;
        this.user = {};
        this.title = 'app';
        this.dealer = {};
        this.loginMsg = false;
        //this.renderer.addClass(document.body, 'm-detail');
    }
    UpdateUserProfileComponent.prototype.ngOnInit = function () {
        var self = this;
        __WEBPACK_IMPORTED_MODULE_5_jquery__["blockUI"]({ css: { backgroundColor: 'none', border: 'none' }, message: __WEBPACK_IMPORTED_MODULE_5_jquery__("<img src='/assets/images/logo/loader.gif'>") });
        this.route
            .queryParams
            .subscribe(function (params) {
            var userId = self.route.snapshot.paramMap.get('user');
            self.http.get(self.config.getAPIUrl() + ("user/details/" + userId)).subscribe(function (user_response) {
                self.user = user_response;
                __WEBPACK_IMPORTED_MODULE_5_jquery__["unblockUI"]();
            }, function (error) {
                //console.log("error occured while getting listing");
                __WEBPACK_IMPORTED_MODULE_5_jquery__["unblockUI"]();
            });
        });
        /* self.http.post(self.config.getAPIUrl()+ "user/login", self.dealer ).subscribe(response => {
          let loginData:any = response;
          if(!loginData.error){
            //self.loginMsg = {error: false, message:"Login Successfull. Redirecting to dashboard" };
            localStorage.setItem('dealertoken', loginData.token);
            localStorage.setItem('user' , JSON.stringify(loginData.user));
            self.userService.updateUser();
            toastr.error("Success !! Redirecting to dashboard");
            setTimeout(function(){
                self.router.navigate(['/user/dashboard']);
            }, 2000);
          }
          else{
            //self.loginMsg.error = true;
              //self.loginMsg.message = loginData.message;
              toastr.error(loginData.message);
              localStorage.setItem('dealertoken', false);
              $.unblockUI();
          }
        },error=>{
            console.log(error, "error");
          //self.loginMsg = error.json() ;
          $.unblockUI();
          toastr.error(error.error.message);
        }); */
    };
    UpdateUserProfileComponent.prototype.dealerLogin = function (data) {
        data = data.value;
        var self = this;
        self.dealer = {
            email: data.email,
            password: data.password,
        };
        __WEBPACK_IMPORTED_MODULE_5_jquery__["blockUI"]({ css: { backgroundColor: 'none', border: 'none' }, message: __WEBPACK_IMPORTED_MODULE_5_jquery__("<img src='/assets/images/logo/loader.gif'>") });
        self.http.post(self.config.getAPIUrl() + "user/login", self.dealer).subscribe(function (response) {
            var loginData = response;
            if (!loginData.error) {
                //self.loginMsg = {error: false, message:"Login Successfull. Redirecting to dashboard" };
                localStorage.setItem('dealertoken', loginData.token);
                localStorage.setItem('user', JSON.stringify(loginData.user));
                self.userService.updateUser();
                __WEBPACK_IMPORTED_MODULE_6_toastr__["error"]("Success !! Redirecting to dashboard");
                setTimeout(function () {
                    self.router.navigate(['/user/dashboard']);
                }, 2000);
            }
            else {
                //self.loginMsg.error = true;
                //self.loginMsg.message = loginData.message;
                __WEBPACK_IMPORTED_MODULE_6_toastr__["error"](loginData.message);
                localStorage.setItem('dealertoken', false);
                __WEBPACK_IMPORTED_MODULE_5_jquery__["unblockUI"]();
            }
        }, function (error) {
            console.log(error, "error");
            //self.loginMsg = error.json() ;
            __WEBPACK_IMPORTED_MODULE_5_jquery__["unblockUI"]();
            __WEBPACK_IMPORTED_MODULE_6_toastr__["error"](error.error.message);
        });
    };
    UpdateUserProfileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '',
            template: __webpack_require__("../../../../../src/app/modules/user/profile/profile.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_configs_configs_service__["a" /* ConfigurationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__shared_services_configs_configs_service__["a" /* ConfigurationService */], __WEBPACK_IMPORTED_MODULE_3__shared_services_user_user_service__["a" /* UserService */]])
    ], UpdateUserProfileComponent);
    return UpdateUserProfileComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/user/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"b-pageHeader\">\r\n    <div class=\"container\">\r\n        <h1 class=\"wow zoomInLeft\" data-wow-delay=\"0.5s\" style=\"visibility: visible; animation-delay: 0.5s; animation-name: zoomInLeft;\">Customer Signup</h1>\r\n    </div>\r\n</section>\r\n\r\n<section class=\"b-contacts s-shadow\">\r\n    <div class=\"container\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-3\">\r\n            </div>    \r\n            <div class=\"col-xs-6\">\r\n                <div class=\"b-contacts__form\">\r\n                    <h2 data-wow-delay=\"0.5s\" style=\"visibility: visible; animation-delay: 0.5s; animation-name: zoomInUp;\">\r\n                        <h2 class=\"s-titleDet\">Customer Signup Form</h2> \r\n                    </h2>\r\n                    <p data-wow-delay=\"0.5s\" >Enter your details below to signup as customer.</p>\r\n                    <form #customerSignupForm=\"ngForm\" id=\"contactForm\" novalidate=\"\" class=\"s-form wow zoomInUp\" data-wow-delay=\"0.5s\" style=\"visibility: visible; animation-delay: 0.5s; animation-name: zoomInUp;\" (ngSubmit)=\"customerSignup(customerSignupForm)\">\r\n                        <input type=\"text\" placeholder=\"FIRST NAME\" value=\"\" name=\"firstname\" id=\"firstname\" #firstname=\"ngModel\" [(ngModel)]=\"customer.firstname\">\r\n                        <input type=\"text\" placeholder=\"LAST NAME\" value=\"\" name=\"lastname\" id=\"lastname\" #lastname=\"ngModel\" [(ngModel)]=\"customer.lastname\">\r\n                        <input type=\"text\" placeholder=\"EMAIL\" value=\"\" name=\"email\" id=\"email\" #email=\"ngModel\" [(ngModel)]=\"customer.email\">\r\n                        <input type=\"text\" placeholder=\"CONTACT NO\" value=\"\" name=\"mobile_no\" id=\"mobile_no\" #mobile_no=\"ngModel\" [(ngModel)]=\"customer.mobile_no\">\r\n                        <input type=\"password\" placeholder=\"PASSWORD\" value=\"\" name=\"password\" id=\"password\" #password=\"ngModel\" [(ngModel)]=\"customer.password\">\r\n                        <button type=\"submit\" class=\"btn m-btn\">SUBMIT<span class=\"fa fa-angle-right\"></span></button>\r\n                    </form>\r\n                </div>\r\n            </div>\r\n            \r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "../../../../../src/app/modules/user/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_configs_configs_service__ = __webpack_require__("../../../../../src/app/shared/services/configs/configs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_toastr__ = __webpack_require__("../../../../toastr/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_block_ui__ = __webpack_require__("../../../../block-ui/jquery.blockUI.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_block_ui__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { Http } from '@angular/http';





var UserSignupComponent = (function () {
    function UserSignupComponent(renderer, http, config) {
        this.renderer = renderer;
        this.http = http;
        this.config = config;
        this.title = 'app';
        this.customer = {};
        this.signupsMsg = false;
    }
    UserSignupComponent.prototype.customerSignup = function (data) {
        data = data.value;
        var self = this;
        __WEBPACK_IMPORTED_MODULE_3_jquery__["blockUI"]({ css: { backgroundColor: 'none', border: 'none' }, message: __WEBPACK_IMPORTED_MODULE_3_jquery__("<img src='/assets/images/logo/loader.gif'>") });
        self.customer = {
            first_name: data.firstname,
            last_name: data.lastname,
            email: data.email,
            password: data.password,
            mobile_no: data.mobile_no
        };
        self.http.post(self.config.getAPIUrl() + "user/signup", self.customer).subscribe(function (response) {
            //self.signupsMsg = {error: false, message : };
            __WEBPACK_IMPORTED_MODULE_3_jquery__["unblockUI"]();
            __WEBPACK_IMPORTED_MODULE_4_toastr__["success"]("Customer signup successfull !!!");
            self.customer = {};
        }, function (error) {
            //self.signupsMsg = {error: true , message : "Error in signup as customer. Please try again"};
            __WEBPACK_IMPORTED_MODULE_4_toastr__["error"]("Error in user signup. Please check the validation or try again later");
            __WEBPACK_IMPORTED_MODULE_3_jquery__["unblockUI"]();
        });
    };
    UserSignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '',
            template: __webpack_require__("../../../../../src/app/modules/user/signup/signup.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_2__shared_services_configs_configs_service__["a" /* ConfigurationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__shared_services_configs_configs_service__["a" /* ConfigurationService */]])
    ], UserSignupComponent);
    return UserSignupComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserComponent = (function () {
    function UserComponent() {
        this.title = 'app';
    }
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '',
            template: '<router-outlet></router-outlet>'
        })
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/user/user.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_component__ = __webpack_require__("../../../../../src/app/modules/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__ = __webpack_require__("../../../../../src/app/modules/user/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_login_component__ = __webpack_require__("../../../../../src/app/modules/user/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__ = __webpack_require__("../../../../../src/app/modules/user/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__ = __webpack_require__("../../../../../src/app/modules/user/dashboard/dashboard.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var userRoutes = [{
        path: '',
        children: [{
                path: 'signup',
                component: __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__["a" /* UserSignupComponent */]
            },
            {
                path: 'login',
                component: __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* UserLoginComponent */]
            },
            {
                path: 'profile/:user',
                component: __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__["a" /* UpdateUserProfileComponent */]
            }
        ],
        component: __WEBPACK_IMPORTED_MODULE_2__user_component__["a" /* UserComponent */]
    }];
var UserModule = (function () {
    function UserModule() {
    }
    UserModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_3__signup_signup_component__["a" /* UserSignupComponent */],
                __WEBPACK_IMPORTED_MODULE_6__login_login_component__["a" /* UserLoginComponent */],
                __WEBPACK_IMPORTED_MODULE_7__profile_profile_component__["a" /* UpdateUserProfileComponent */],
                __WEBPACK_IMPORTED_MODULE_8__dashboard_dashboard_component__["a" /* UserDashboardComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(userRoutes),
                __WEBPACK_IMPORTED_MODULE_4__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["a" /* FormsModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], UserModule);
    return UserModule;
}());



/***/ })

});
//# sourceMappingURL=user.module.chunk.js.map