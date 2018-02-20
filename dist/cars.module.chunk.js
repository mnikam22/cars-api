webpackJsonp(["cars.module"],{

/***/ "../../../../../src/app/modules/cars/cars.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var CarsComponent = (function () {
    function CarsComponent() {
        this.title = 'app';
    }
    CarsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '',
            template: '<router-outlet></router-outlet>'
        })
    ], CarsComponent);
    return CarsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/cars/cars.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CarsModule", function() { return CarsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cars_component__ = __webpack_require__("../../../../../src/app/modules/cars/cars.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listing_listing_component__ = __webpack_require__("../../../../../src/app/modules/cars/listing/listing.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__details_details_component__ = __webpack_require__("../../../../../src/app/modules/cars/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__upload_image_upload_image_component__ = __webpack_require__("../../../../../src/app/modules/cars/upload-image/upload-image.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__upload_make_logo_upload_make_logo__ = __webpack_require__("../../../../../src/app/modules/cars/upload-make-logo/upload-make-logo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var carsRoutes = [{
        path: '',
        children: [{
                path: 'listing',
                component: __WEBPACK_IMPORTED_MODULE_3__listing_listing_component__["a" /* CarsListingComponent */]
            },
            {
                path: 'details',
                component: __WEBPACK_IMPORTED_MODULE_4__details_details_component__["a" /* CarsDetailsComponent */]
            },
            {
                path: 'upload-image',
                component: __WEBPACK_IMPORTED_MODULE_5__upload_image_upload_image_component__["a" /* UploadCarImageComponent */]
            },
            {
                path: 'upload-make-logo',
                component: __WEBPACK_IMPORTED_MODULE_8__upload_make_logo_upload_make_logo__["a" /* UploadMakeLogoComponent */]
            }
        ],
        component: __WEBPACK_IMPORTED_MODULE_2__cars_component__["a" /* CarsComponent */]
    }];
var CarsModule = (function () {
    function CarsModule() {
    }
    CarsModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__cars_component__["a" /* CarsComponent */],
                __WEBPACK_IMPORTED_MODULE_3__listing_listing_component__["a" /* CarsListingComponent */],
                __WEBPACK_IMPORTED_MODULE_4__details_details_component__["a" /* CarsDetailsComponent */],
                __WEBPACK_IMPORTED_MODULE_5__upload_image_upload_image_component__["a" /* UploadCarImageComponent */],
                __WEBPACK_IMPORTED_MODULE_8__upload_make_logo_upload_make_logo__["a" /* UploadMakeLogoComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forChild(carsRoutes),
                __WEBPACK_IMPORTED_MODULE_6__angular_common__["b" /* CommonModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["a" /* FormsModule */]
            ],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]]
        })
    ], CarsModule);
    return CarsModule;
}());



/***/ }),

/***/ "../../../../../src/app/modules/cars/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <section class=\"b-pageHeader\">\r\n    <div class=\"container\">\r\n        <h1 class=\"wow zoomInLeft\" data-wow-delay=\"0.5s\">Car Details</h1>\r\n    </div>\r\n</section> --><!--b-pageHeader-->\r\n\r\n<!-- <div class=\"b-breadCumbs s-shadow wow zoomInUp\" data-wow-delay=\"0.5s\">\r\n    <div class=\"container\">\r\n        <a href=\"home.html\" class=\"b-breadCumbs__page\">Home</a><span class=\"fa fa-angle-right\"></span><a href=\"listings.html\" class=\"b-breadCumbs__page\">Luxury Cars</a><span class=\"fa fa-angle-right\"></span><a href=\"listingsTwo.html\" class=\"b-breadCumbs__page\">Nissan</a><span class=\"fa fa-angle-right\"></span><a href=\"detail.html\" class=\"b-breadCumbs__page m-active\">Nissan Maxima</a>\r\n    </div>\r\n</div> --><!--b-breadCumbs-->\r\n\r\n<!-- <div class=\"b-infoBar\">\r\n    <div class=\"container\">\r\n        <div class=\"row wow zoomInUp\" data-wow-delay=\"0.5s\">\r\n            <div class=\"col-xs-3\">\r\n                <div class=\"b-infoBar__premium\">Premium Listing</div>\r\n            </div>\r\n            <div class=\"col-xs-9\">\r\n                <div class=\"b-infoBar__btns\">\r\n                    <a href=\"#\" class=\"btn m-btn m-infoBtn\">SHARE THIS VEHICLE<span class=\"fa fa-angle-right\"></span></a>\r\n                    <a href=\"#\" class=\"btn m-btn m-infoBtn\">ADD TO FAVOURITES<span class=\"fa fa-angle-right\"></span></a>\r\n                    <a href=\"#\" class=\"btn m-btn m-infoBtn\">PRINT THIS PAGE<span class=\"fa fa-angle-right\"></span></a>\r\n                    <a href=\"#\" class=\"btn m-btn m-infoBtn\">DOWNLOAD MANUAL<span class=\"fa fa-angle-right\"></span></a>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div> --><!--b-infoBar-->\r\n\r\n\r\n<section class=\"b-detail s-shadow\">\r\n    \r\n\t\t\t<div class=\"container\">\r\n\t\t\t\t<header class=\"b-detail__head s-lineDownLeft wow zoomInUp\" data-wow-delay=\"0.5s\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-sm-9 col-xs-12\">\r\n\t\t\t\t\t\t\t<div class=\"b-detail__head-title\">\r\n\t\t\t\t\t\t\t\t<h1 *ngIf=\"carDetails.model_info && carDetails.model_info.model\">{{carDetails.model_info.make.name}} - {{carDetails.model_info.model.name}}</h1>\r\n\t\t\t\t\t\t\t\t<!-- <h3>Fully Redesigned Upscale Midsize Car</h3> -->\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- <div class=\"col-sm-3 col-xs-12\">\r\n\t\t\t\t\t\t\t<div class=\"b-detail__head-price\">\r\n\t\t\t\t\t\t\t\t<div class=\"b-detail__head-price-num\">$44,380</div>\r\n\t\t\t\t\t\t\t\t<p>Included Taxes &amp; Checkup</p>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</header>\r\n\t\t\t\t<div class=\"b-detail__main\">\r\n\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t<div class=\"col-md-8 col-xs-12\">\r\n\t\t\t\t\t\t\t<div class=\"b-detail__main-info\">\r\n\t\t\t\t\t\t\t\t<div class=\"b-detail__main-info-images wow zoomInUp\" data-wow-delay=\"0.5s\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"row m-smallPadding\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-10\">\r\n\t\t\t\t\t\t\t\t\t\t\t<ul class=\"b-detail__main-info-images-big bxslider enable-bx-slider\" data-pager-custom=\"#bx-pager\" data-mode=\"horizontal\" data-pager-slide=\"true\" data-mode-pager=\"vertical\" data-pager-qty=\"5\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<li class=\"s-relative\">                                     \r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<!-- <a data-toggle=\"modal\" data-target=\"#myModal\" href=\"#\" class=\"b-items__cars-one-img-video\"><span class=\"fa fa-film\"></span>VIDEO</a> -->\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t<img *ngIf=\"carDetails.model_info && carDetails.model_info.model\" class=\"img-responsive center-block\" src=\"{{apiImageUrl}}{{carDetails.model_info.model.image_original}}\"/>\r\n\t\t\t\t\t\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<!-- <div class=\"b-detail__main-info-characteristics wow zoomInUp\" data-wow-delay=\"0.5s\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"b-detail__main-info-characteristics-one\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"b-detail__main-info-characteristics-one-top\">\r\n\t\t\t\t\t\t\t\t\t\t\t<div><span class=\"fa fa-car\"></span></div>\r\n\t\t\t\t\t\t\t\t\t\t\t<p>Brand New</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"b-detail__main-info-characteristics-one-bottom\">\r\n\t\t\t\t\t\t\t\t\t\t\tStatus\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t<div class=\"b-detail__main-info-text wow zoomInUp\" data-wow-delay=\"0.5s\">\r\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"b-detail__main-aside-about-form-links\">\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"j-tab m-active s-lineDownCenter\" data-to='#info1'>GENERAL INQUIRY</a>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"j-tab\" data-to='#info2'>SCHEDULE TEST DRIVE</a>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"j-tab\" data-to='#info3'>GENERAL INQUIRY</a>\r\n\t\t\t\t\t\t\t\t\t\t<a href=\"#\" class=\"j-tab\" data-to='#info4'>SCHEDULE TEST DRIVE</a>\r\n\t\t\t\t\t\t\t\t\t</div> \r\n\t\t\t\t\t\t\t\t\t<div id=\"info1\">\r\n\t\t\t\t\t\t\t\t\t\t<p>The 2016 Nissan Maxima is powered by a 3.5-liter V6 engine with 300 horsepower, 10 more than the engine in the outgoing\r\n\t\t\t\t\t\t\t\t\t\t\tmodel. A continuously variable transmission and front-wheel drive are standard in all models. Nissan expects the 2016 Maxima\r\n\t\t\t\t\t\t\t\t\t\t\tto return 22/30 mpg city/highway, which is an improvement over the previous model's EPA-estimated 19/26 mpg.</p>\r\n\t\t\t\t\t\t\t\t\t\t<p>\r\n\t\t\t\t\t\t\t\t\t\t\tThe 2016 Nissan Maxima seats five and comes with a power-adjustable driver,seat, an eight-speaker audio system, Bluetooth,\r\n\t\t\t\t\t\t\t\t\t\t\tsatellite radio, HD Radio, push-button start, a rearview camera, two USB ports, the NissanConnect infotainment system,\r\n\t\t\t\t\t\t\t\t\t\t\tnavigation, an 8-inch color display screen and voice controls for phone, audio and navigation functions. Leather upholstery,\r\n\t\t\t\t\t\t\t\t\t\t\theated and ventilated front seats, an 11-speaker Bose audio system, a 360-degree parking camera system, adaptive cruise\r\n\t\t\t\t\t\t\t\t\t\t\tcontrol, blind spot warning, rear cross traffic alert, front and rear parking sensors and forward collision warning with automatic\r\n\t\t\t\t\t\t\t\t\t\t\tbraking are available. The 2016 Nissan Maxima starts at $33,235 including destination fees.</p>\r\n\t\t\t\t\t\t\t\t\t\t<p>The full review of the 2016 Nissan Maxima is coming soon. In the meantime, you can see pictures, research prices or view and\r\n\t\t\t\t\t\t\t\t\t\t\tcompare specs for the 2016 Nissan Maxima. If you, considering the 2014 Nissan Maxima, you can read our review.</p>\r\n\t\t\t\t\t\t\t\t\t\t<p>Vestibulum auctor lacinia nunc. Nunc ut turpis.Sed libero magna, fermentum viverra, egestas non, fermentum sed, elit. Aenean\r\n\t\t\t\t\t\t\t\t\t\t\terat orci, mollis quis gravida sed, mollis a, quam. Integer fermentum neque egestas orci. Nunc posuere, felis sit amet faucibus\r\n\t\t\t\t\t\t\t\t\t\t\tconvallis tortor enim viverra quam, hendrerit interdum dui quam ut lacus. Donec quis quam in ante condimentum blan erdit.\r\n\t\t\t\t\t\t\t\t\t\t\tInteger et urna. Vestibulum nisl. Ut ante est, imperdiet dignissim eleifend sit amet lacinia tempor justo. Nunc ornare atm nibh.\r\n\t\t\t\t\t\t\t\t\t\t\tFusce ut felis. </p>\r\n\t\t\t\t\t\t\t\t\t\t<p>Donec ullamcorper nisi ac lectus. Proin at orci. Suspendisse nec orci nec elit convallis porttitor. Praesent sit amet turpis eu nisl\r\n\t\t\t\t\t\t\t\t\t\t\tfaucibus pharetra. Sed eu felis. Etiam eleifend nisl nec lectus. Ut suscipit pede eu diam. Aenean vitae quam. Cras felis. Sed utdw\r\n\t\t\t\t\t\t\t\t\t\t\tnibh. Duis libero. Vivamus pharetra libero non facilisis imperdiet mi augue feugiat nisl.</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div id=\"info2\">\r\n\t\t\t\t\t\t\t\t\t\t<p>The full review of the 2016 Nissan Maxima is coming soon. In the meantime, you can see pictures, research prices or view and\r\n\t\t\t\t\t\t\t\t\t\t\tcompare specs for the 2016 Nissan Maxima. If you‚considering the 2014 Nissan Maxima, you can read our review.</p>\r\n\t\t\t\t\t\t\t\t\t\t<p>Vestibulum auctor lacinia nunc. Nunc ut turpis.Sed libero magna, fermentum viverra, egestas non, fermentum sed, elit. Aenean\r\n\t\t\t\t\t\t\t\t\t\t\terat orci, mollis quis gravida sed, mollis a, quam. Integer fermentum neque egestas orci. Nunc posuere, felis sit amet faucibus\r\n\t\t\t\t\t\t\t\t\t\t\tconvallis tortor enim viverra quam, hendrerit interdum dui quam ut lacus. Donec quis quam in ante condimentum blan erdit.\r\n\t\t\t\t\t\t\t\t\t\t\tInteger et urna. Vestibulum nisl. Ut ante est, imperdiet dignissim eleifend sit amet lacinia tempor justo. Nunc ornare atm nibh.\r\n\t\t\t\t\t\t\t\t\t\t\tFusce ut felis. </p>\r\n\t\t\t\t\t\t\t\t\t\t<p>Donec ullamcorper nisi ac lectus. Proin at orci. Suspendisse nec orci nec elit convallis porttitor. Praesent sit amet turpis eu nisl\r\n\t\t\t\t\t\t\t\t\t\t\tfaucibus pharetra. Sed eu felis. Etiam eleifend nisl nec lectus. Ut suscipit pede eu diam. Aenean vitae quam. Cras felis. Sed utdw\r\n\t\t\t\t\t\t\t\t\t\t\tnibh. Duis libero. Vivamus pharetra libero non facilisis imperdiet mi augue feugiat nisl.</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div id=\"info3\">\r\n\t\t\t\t\t\t\t\t\t\t<p>Vestibulum auctor lacinia nunc. Nunc ut turpis.Sed libero magna, fermentum viverra, egestas non, fermentum sed, elit. Aenean\r\n\t\t\t\t\t\t\t\t\t\t\terat orci, mollis quis gravida sed, mollis a, quam. Integer fermentum neque egestas orci. Nunc posuere, felis sit amet faucibus\r\n\t\t\t\t\t\t\t\t\t\t\tconvallis tortor enim viverra quam, hendrerit interdum dui quam ut lacus. Donec quis quam in ante condimentum blan erdit.\r\n\t\t\t\t\t\t\t\t\t\t\tInteger et urna. Vestibulum nisl. Ut ante est, imperdiet dignissim eleifend sit amet lacinia tempor justo. Nunc ornare atm nibh.\r\n\t\t\t\t\t\t\t\t\t\t\tFusce ut felis. </p>\r\n\t\t\t\t\t\t\t\t\t\t<p>Donec ullamcorper nisi ac lectus. Proin at orci. Suspendisse nec orci nec elit convallis porttitor. Praesent sit amet turpis eu nisl\r\n\t\t\t\t\t\t\t\t\t\t\tfaucibus pharetra. Sed eu felis. Etiam eleifend nisl nec lectus. Ut suscipit pede eu diam. Aenean vitae quam. Cras felis. Sed utdw\r\n\t\t\t\t\t\t\t\t\t\t\tnibh. Duis libero. Vivamus pharetra libero non facilisis imperdiet mi augue feugiat nisl.</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div id=\"info4\">\r\n\t\t\t\t\t\t\t\t\t\t<p>Donec ullamcorper nisi ac lectus. Proin at orci. Suspendisse nec orci nec elit convallis porttitor. Praesent sit amet turpis eu nisl\r\n\t\t\t\t\t\t\t\t\t\t\tfaucibus pharetra. Sed eu felis. Etiam eleifend nisl nec lectus. Ut suscipit pede eu diam. Aenean vitae quam. Cras felis. Sed utdw\r\n\t\t\t\t\t\t\t\t\t\t\tnibh. Duis libero. Vivamus pharetra libero non facilisis imperdiet mi augue feugiat nisl.</p>\r\n\t\t\t\t\t\t\t\t\t</div>-->\r\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t<h2 class=\"s-titleDet\">Seller Listings</h2>\r\n\t\t\t\t\t\t\t\t<table class=\"table table-striped table-hover table-bordered\">\r\n\t\t\t\t\t\t\t\t\t<thead>\r\n\t\t\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t\t<th>Vendor</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Monthly Lease price</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Payment Down</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>Term of lease</th>\r\n\t\t\t\t\t\t\t\t\t\t<th>&nbsp;</th>\r\n\t\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t\t</thead>\r\n\t\t\t\t\t\t\t\t\t<tbody>\r\n\t\t\t\t\t\t\t\t\t\t<tr *ngFor=\"let listing of carDetails.listings\">\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"listing.dealer\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t{{listing.dealer.businessname}}\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<span *ngIf=\"!listing.dealer\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t\tN/A\r\n\t\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t {{listing.monthly_lease_price }} USD\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t {{listing.money_down }} USD\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t {{listing.term_of_lease }} Months\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-success\" type=\"button\" (click)=\"openModal(template, listing._id)\">CONTACT</button>\r\n\t\t\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t\t</tr>\t\r\n\t\t\t\t\t\t\t\t\t</tbody>\t\r\n\t\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-4 col-xs-12\">\r\n\t\t\t\t\t\t\t<aside class=\"b-detail__main-aside\">\r\n\t\t\t\t\t\t\t\t<div class=\"b-detail__main-aside-desc wow zoomInUp\" data-wow-delay=\"0.5s\">\r\n\t\t\t\t\t\t\t\t\t<h2 class=\"s-titleDet\">Description</h2>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"b-detail__main-aside-desc-title\">Make</h4>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"b-detail__main-aside-desc-value\" *ngIf=\"carDetails.model_info\">{{carDetails.model_info.make.name}}</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<h4 class=\"b-detail__main-aside-desc-title\">Model</h4>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-6\">\r\n\t\t\t\t\t\t\t\t\t\t\t<p class=\"b-detail__main-aside-desc-value\" *ngIf=\"carDetails.model_info\">{{carDetails.model_info.model.name}}</p>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col-md-12\">\r\n\t\t\t\t\t\t\t\t\t<img src=\"https://dummyimage.com/300x600/ccc/000&text=Advertisement\">\r\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</aside>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\r\n</section>\r\n\r\n<section class=\"b-related m-home\">\r\n\t\t<div class=\"container\">\r\n\t\t\t<h5 class=\"s-titleBg wow zoomInUp\" data-wow-delay=\"0.5s\" style=\"visibility: visible; animation-delay: 0.5s; animation-name: zoomInUp;\">FIND OUT MORE</h5><br>\r\n\t\t\t<h2 class=\"s-title wow zoomInUp\" data-wow-delay=\"0.5s\" style=\"visibility: visible; animation-delay: 0.5s; animation-name: zoomInUp;\">RELATED VEHICLES ON SALE</h2>\r\n\t\t\t<div class=\"row\"> \r\n\t\t\t\t<div class=\"col-md-3 col-xs-6\" *ngFor=\"let related of relatedModels\">\r\n\t\t\t\t\t<div class=\"b-auto__main-item wow zoomInLeft\" data-wow-delay=\"0.5s\" style=\"height: 336px; visibility: visible; animation-delay: 0.5s; animation-name: zoomInLeft;\">\r\n\t\t\t\t\t\t<img *ngIf=\"related.image_original\" class=\"img-responsive center-block\" src=\"{{apiImageUrl}}{{related.image_original}}\" />\r\n\t\t\t\t\t\t<!-- <div class=\"b-world__item-val\">\r\n\t\t\t\t\t\t\t<span class=\"b-world__item-val-title\">REGISTERED <span>2014</span></span>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t<h2>\r\n\t\t\t\t\t\t\t<a routerLink=\"/cars/details\" [queryParams]=\"{ model: related.model_id }\">\t{{related.name}}\r\n\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t</h2>\r\n\t\t\t\t\t\t<!-- <div class=\"b-auto__main-item-info s-lineDownLeft\">\r\n\t\t\t\t\t\t\t<span class=\"m-price\">\r\n\t\t\t\t\t\t\t\t$44,380\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t<span class=\"m-number\">\r\n\t\t\t\t\t\t\t\t<span class=\"fa fa-tachometer\"></span>35,000 KM\r\n\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t<!-- <div class=\"b-featured__item-links m-auto\">\r\n\t\t\t\t\t\t\t<a href=\"#\">Used</a>\r\n\t\t\t\t\t\t\t<a href=\"#\">2014</a>\r\n\t\t\t\t\t\t\t<a href=\"#\">Manual</a>\r\n\t\t\t\t\t\t\t<a href=\"#\">Orange</a>\r\n\t\t\t\t\t\t\t<a href=\"#\">Petrol</a>\r\n\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t\t\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</section>\r\n\r\n\r\n\r\n<ng-template #template> \r\n<form id=\"form1\" action=\"\" #doEnquiryForm=\"ngForm\" (ngSubmit)=\"doEnquiry(doEnquiryForm)\" class=\"s-form wow zoomInUp\">                       \r\n<div class=\"modal-header\">\r\n\t\r\n\t<button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n\t<span aria-hidden=\"true\">&times;</span>\r\n\t</button>\r\n\t<h4 class=\"modal-title\">INQUIRE ABOUT THIS VEHICLE</h4>\r\n</div>\r\n<div class=\"modal-body row refine_search\">\r\n\t\t\t<div class=\"col-md-12 col-lg-12\">\r\n\t\t\t\t<div class=\"b-detail__main-aside-about wow zoomInUp\" data-wow-delay=\"0.5s\">\r\n\t\t\t\t\t\t<div *ngIf=\"showSuccess\" class=\"alert alert-success\">\r\n\t\t\t\t\t\t\t<strong>Success!</strong> Thanks for enquiry. We have forwarded message to dealer . He will contact you soon.\r\n\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"col-md-6\"> \r\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"FIRST NAME\" name=\"firstname\" [(ngModel)]=\"newEnquiry.firstname\" #firstname=\"ngModel\"> \r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"LAST NAME\" name=\"lastname\" [(ngModel)]=\"newEnquiry.lastname\" #lastname=\"ngModel\"> \r\n\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t<input type=\"email\" placeholder=\"EMAIL ADDRESS\" value=\"\" name=\"email\" [(ngModel)]=\"newEnquiry.email\" #email=\"ngModel\"/>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t<input type=\"text\" placeholder=\"PHONE NO.\" name=\"phone\" [(ngModel)]=\"newEnquiry.phone\" #phone=\"ngModel\"/>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"col-md-6\">\r\n\t\t\t\t\t\t\t<textarea name=\"text\" placeholder=\"Message\" [(ngModel)]=\"newEnquiry.message\" #message=\"ngModel\"></textarea>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<!-- <div><input type=\"checkbox\" name=\"one\" value=\"\" /><label>Send me a copy of this message</label></div>\r\n\t\t\t\t\t\t<div><input type=\"checkbox\" name=\"two\" value=\"\" /><label>Send me a copy of this message</label></div> -->\t\t\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\r\n\t\t\t\t</div>                             \r\n\t\t\t</div>\r\n\t\t\t\r\n</div>\r\n<div class=\"modal-footer\">\r\n\t<button type=\"submit\" class=\"btn m-btn\">SEND MESSAGE<span class=\"fa fa-angle-right\"></span></button>\r\n</div>\r\n</form>\r\n</ng-template>"

/***/ }),

/***/ "../../../../../src/app/modules/cars/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarsDetailsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_configs_configs_service__ = __webpack_require__("../../../../../src/app/shared/services/configs/configs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__shared_services_helper_helper_service__ = __webpack_require__("../../../../../src/app/shared/services/helper/helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_block_ui__ = __webpack_require__("../../../../block-ui/jquery.blockUI.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_block_ui__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var CarsDetailsComponent = (function () {
    function CarsDetailsComponent(renderer, route, router, http, config, modalService, helper) {
        this.renderer = renderer;
        this.route = route;
        this.router = router;
        this.http = http;
        this.config = config;
        this.modalService = modalService;
        this.helper = helper;
        this.title = 'app';
        this.carDetails = {};
        this.relatedModels = [];
        this.apiImageUrl = this.config.getAPIUrl() + 'uploads/';
        this.newEnquiry = {};
        this.currentModelId = false;
        this.showSuccess = false;
        this.selectedListingId = false;
        this.renderer.addClass(document.body, 'm-detail');
        this.helper.showLoader();
    }
    CarsDetailsComponent.prototype.openModal = function (template, listingId) {
        var self = this;
        self.selectedListingId = listingId;
        self.newEnquiry = {};
        this.modalRef = this.modalService.show(template);
    };
    CarsDetailsComponent.prototype.doEnquiry = function (data) {
        var self = this;
        var newEnquiryData = {
            listing_id: self.selectedListingId,
            first_name: data.value.firstname,
            last_name: data.value.lastname,
            email: data.value.email,
            phone: data.value.phone,
            messsage: data.value.messsage
        };
        self.helper.showLoader();
        self.http.post(self.config.getAPIUrl() + 'enquiry/new', newEnquiryData).subscribe(function (enquiry_data) {
            self.helper.showMessage("success", "Enquiry have been submitted successfully. Dealer will get back to you soon .");
            self.helper.hideLoader();
        }, function (error) {
            self.helper.showMessage("error", "Error in submitting enquiry!!");
            self.helper.hideLoader();
        });
    };
    CarsDetailsComponent.prototype.ngOnInit = function () {
        var self = this;
        this.route
            .queryParams
            .subscribe(function (params) {
            self.http.get(self.config.getAPIUrl() + 'enquiry/list').subscribe(function (enquiries) {
                console.log(enquiries, "enquiries");
            });
            self.http.get(self.config.getAPIUrl() + 'car/model/details/' + params.model).subscribe(function (details) {
                self.carDetails = details;
                self.helper.hideLoader();
                self.http.get(self.config.getAPIUrl() + 'car/model/related/' + params.model).subscribe(function (related_models) {
                    self.relatedModels = related_models;
                }, function (error) {
                    //console.log("error occured while getting listing");
                });
            }, function (error) {
                //console.log("error occured while getting listing");
            });
        });
    };
    CarsDetailsComponent.prototype.ngOnDestroy = function () {
        this.renderer.removeClass(document.body, 'm-detail');
    };
    CarsDetailsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '',
            template: __webpack_require__("../../../../../src/app/modules/cars/details/details.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_configs_configs_service__["a" /* ConfigurationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__shared_services_configs_configs_service__["a" /* ConfigurationService */], __WEBPACK_IMPORTED_MODULE_5_ngx_bootstrap__["a" /* BsModalService */], __WEBPACK_IMPORTED_MODULE_4__shared_services_helper_helper_service__["a" /* HelperService */]])
    ], CarsDetailsComponent);
    return CarsDetailsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/cars/listing/listing.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" id=\"brandLogoBanner\">\r\n        <div class=\"col-md-12 text-center\">                        \r\n            <img src=\"{{apiImageUrl}}{{makeData.message.logo}}\"/>\r\n        </div>\r\n        <div class=\"col-dm-12 text-center\">\r\n            <h2>All {{makeData.message.name}} cars</h2>\r\n        </div>\r\n    </div>\r\n<div class=\"b-items\">\t\r\n        <div class=\"container\">\r\n            \r\n            <div class=\"row\" style=\"margin-bottom: 20px;\">\r\n                <div class=\"col-lg-12 col-md-12 text-right\">\r\n                    <button class=\"btn m-btn m-readMore wow zoomInUp\" (click)=\"openModal(template)\"> REFINE YOUR SEARCH <span class=\"fa fa-angle-right\"></span> </button>\r\n                </div>\r\n            </div>\r\n\r\n            \r\n            <div class=\"row\"> \r\n                    <ng-template #template>                                \r\n                      <div class=\"modal-header\">\r\n                        <h4 class=\"modal-title\">REFINE SEARCH</h4>\r\n                        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\r\n                          <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                      </div>\r\n                      <div class=\"modal-body row refine_search\">\r\n                            <div class=\"col-md-12 col-lg-12\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <label>SELECT A MAKE</label>\r\n                                        <div class=\"relative\">\r\n                                            <select name=\"select1\" class=\"m-select\" name=\"selectMake\" [(ngModel)]=\"search.make\" #selectMake=\"ngModel\">\r\n                                                <option value=\"\" selected=\"\">Any Make</option>\r\n                                                <option *ngFor=\"let mk of allmakes\" [value]=\"mk.make_id\">{{mk.name}}</option>\r\n                                            </select>\r\n                                            <span class=\"fa fa-caret-down\"></span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- <div class=\"col-md-6\">\r\n                                        <label>SELECT A MODEL</label>\r\n                                        <div class=\"relative\">\r\n                                            <select class=\"m-select\" name=\"selectModels\" [(ngModel)]=\"search.model\">\r\n                                                    <option value=\"\">Select</option>\r\n                                                    <option *ngFor=\"let md of selectedModels\" [value]=\"md.name\">{{md.name}}</option>\r\n                                            </select>\r\n                                            <span class=\"fa fa-caret-down\"></span>\r\n                                        </div>\r\n                                    </div> -->\r\n\r\n                                    <div class=\"col-md-6\">\r\n                                        <label>STATE</label>\r\n                                        <div class=\"relative\">\r\n                                            <select name=\"select1\" class=\"m-select\">\r\n                                                <option value=\"\" selected=\"\">Any State</option>\r\n                                            </select>\r\n                                            <span class=\"fa fa-caret-down\"></span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-6\">\r\n                                        <label>YEAR</label>\r\n                                        <div class=\"relative\">\r\n                                            <select name=\"select1\" class=\"m-select\">\r\n                                                <option value=\"\" selected=\"\">Any Year</option>\r\n                                            </select>\r\n                                            <span class=\"fa fa-caret-down\"></span>\r\n                                        </div>\r\n                                    </div>                                    \r\n                                </div>\r\n                                <footer class=\"col-md-12 col-lg-12\">\r\n                                    <div class=\"col-md-6 col-lg-6\">\r\n                                        <button type=\"button\" class=\"btn m-btn btn-info\" (click)=\"doSearch()\">FILTER VEHICLES<span class=\"fa fa-angle-right\"></span></button>\r\n                                    </div>\r\n                                    <div class=\"col-md-6 col-lg-6\">\r\n                                        <button type=\"button\" class=\"btn m-btn btn-danger\">RESET FILTERS<span class=\"fa fa-angle-right\"></span></button>                                        \r\n                                    </div>\r\n                                </footer>\r\n                      </div>\r\n                    </ng-template>\r\n\r\n                    \r\n                <div class=\"col-lg-12 col-sm-8 col-xs-12\" >                    \r\n                    <div class=\"col-lg-3 col-md-3 col-xs-12\" *ngFor=\"let car of searchListings\">\r\n                        <div class=\"b-items__cell wow zoomInUp\" data-wow-delay=\"0.5s\" style=\"height: 300px; visibility: visible; animation-delay: 0.5s; animation-name: zoomInUp;\">\r\n                            <div class=\"b-items__cars-one-img\">\r\n                                <img src=\"{{apiImageUrl}}{{car.image_original}}\"/>\r\n                            </div>\r\n                            <div class=\"b-items__cell-info\">\r\n                                <div class=\"s-lineDownLeft b-items__cell-info-title\">\r\n                                    <h2 class=\"\">{{car.name}}</h2>\r\n                                </div>                                \r\n                                <div class=\"row m-smallPadding\">\r\n                                    <div class=\"col-xs-6\">\r\n                                        \r\n                                        <h5 class=\"b-items__cell-info-price\">$29,415</h5>\r\n                                    </div>\r\n                                    <div class=\"col-xs-6\">                                        \r\n                                        <a href=\"#\" routerLink=\"/cars/details\" [queryParams]=\"{ model: car.model_id }\" class=\"btn m-btn\">VIEW DETAILS<span class=\"fa fa-angle-right\"></span></a>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-12 col-ld-12 text-right\">\r\n                        <div class=\"b-items__pagination wow zoomInUp\" data-wow-delay=\"0.5s\">\r\n                                <div class=\"b-items__pagination-main\">\r\n                                    <a href=\"#\" class=\"m-left\"><span class=\"fa fa-angle-left\"></span></a>\r\n                                    <span class=\"m-active\"><a href=\"#\">1</a></span>\r\n                                    <span><a href=\"#\">2</a></span>\r\n                                    <span><a href=\"#\">3</a></span>\r\n                                    <span><a href=\"#\">4</a></span>\r\n                                    <a href=\"#\" class=\"m-right\"><span class=\"fa fa-angle-right\"></span></a>    \r\n                                </div>\r\n                            </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    \r\n</div>\r\n\r\n\r\n<!-- Modal for refine search -->\r\n\r\n\r\n<!-- Modal -->\r\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\">\r\n    <div class=\"modal-dialog\">\r\n  \r\n      <!-- Modal content-->\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n          <h4 class=\"modal-title\">Modal Header</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <p>Some text in the modal.</p>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n        </div>\r\n      </div>\r\n  \r\n    </div>\r\n  </div>"

/***/ }),

/***/ "../../../../../src/app/modules/cars/listing/listing.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CarsListingComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_services_configs_configs_service__ = __webpack_require__("../../../../../src/app/shared/services/configs/configs.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__ = __webpack_require__("../../../../ngx-bootstrap/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CarsListingComponent = (function () {
    function CarsListingComponent(renderer, route, router, http, config, modalService) {
        this.renderer = renderer;
        this.route = route;
        this.router = router;
        this.http = http;
        this.config = config;
        this.modalService = modalService;
        this.title = 'app';
        this.searchListings = [];
        this.makeData = {};
        this.apiImageUrl = this.config.getAPIUrl() + 'uploads/';
        this.allmakes = [];
        this.selectedModels = [];
        this.carsImages = ['aston.jpg', 'audi.jpg', 'jaguar.jpg', 'mers.jpg'];
        this.search = {};
        this.renderer.addClass(document.body, 'm-listTable');
    }
    CarsListingComponent.prototype.openModal = function (template) {
        this.modalRef = this.modalService.show(template);
    };
    CarsListingComponent.prototype.doSearch = function () {
        var self = this;
        this.modalRef.hide();
        self.router.navigate(['cars/listing'], { queryParams: { make: self.search.make } });
    };
    CarsListingComponent.prototype.selectDetails = function (attr, data) {
        var self = this;
        if (attr == 'make') {
            self.http.get(self.config.getAPIUrl() + "car/makes/models/" + data).subscribe(function (models) {
                self.selectedModels = models;
                console.log(models, "models");
            }, function (error) {
                console.log(error, "error occured");
            });
        }
    };
    CarsListingComponent.prototype.ngOnInit = function () {
        var self = this;
        /* self.http.get(self.config.getAPIUrl()+ "car/makes").subscribe(makes=>{
          self.allmakes = makes;
        },error=>{
            console.log(error, "error occured");
        }) */
        this.route
            .queryParams
            .subscribe(function (params) {
            // Defaults to 0 if no query param provided.
            self.http.get(self.config.getAPIUrl() + 'car/makes/models_data/' + params.make + "/1/10").subscribe(function (listings) {
                self.searchListings = listings;
            }, function (error) {
                console.log("error occured while getting listing");
            });
            self.http.get(self.config.getAPIUrl() + 'car/make/' + params.make).subscribe(function (makeData) {
                self.makeData = makeData;
            }, function (error) {
                console.log("error occured while getting listing");
            });
        });
    };
    CarsListingComponent.prototype.ngOnDestroy = function () {
        this.renderer.removeClass(document.body, 'm-listTable');
    };
    CarsListingComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '',
            template: __webpack_require__("../../../../../src/app/modules/cars/listing/listing.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_3__shared_services_configs_configs_service__["a" /* ConfigurationService */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_3__shared_services_configs_configs_service__["a" /* ConfigurationService */], __WEBPACK_IMPORTED_MODULE_4_ngx_bootstrap__["a" /* BsModalService */]])
    ], CarsListingComponent);
    return CarsListingComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/cars/upload-image/upload-image.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"b-pageHeader\">\r\n    <div class=\"container\">\r\n        <h1 class=\"wow zoomInLeft\" data-wow-delay=\"0.5s\" style=\"visibility: visible; animation-delay: 0.5s; animation-name: zoomInLeft;\">Submit Your Car</h1>        \r\n    </div>\r\n</section>\r\n\r\n<div class=\"b-submit\">\r\n\t<div class=\"container\">\t\t\t\t\r\n\t\t<div class=\"row\">\t\t\t\t\r\n\t\t\t<div class=\"col-lg-9 col-md-8 col-sm-7 col-xs-6\">\r\n\t\t\t\t<div class=\"b-submit__main\">\r\n\t\t\t\t\t<header class=\"s-headerSubmit s-lineDownLeft wow zoomInUp\" data-wow-delay=\"0.5s\" style=\"visibility: visible; animation-delay: 0.5s; animation-name: zoomInUp;\">\r\n\t\t\t\t\t\t<h2 class=\"\">Upload Image</h2>\r\n\t\t\t\t\t</header>\r\n\t\t\t\t\t<form class=\"s-submit clearfix\" #uploadImageForm=\"ngForm\" (ngSubmit)=\"uploadImage(uploadImageForm)\">\r\n\t\t\t\t\t\t<div class=\"row\" [hidden]=\"activeStep != 1\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-6 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"b-submit__main-element wow zoomInUp\" data-wow-delay=\"0.5s\" style=\"visibility: visible; animation-delay: 0.5s; animation-name: zoomInUp;\">\r\n\t\t\t\t\t\t\t\t\t<label>Enter Make <span>*</span></label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"s-relative\">\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"m-select\" name=\"selectMake\" (ngModelChange)=\"selectDetails('make',$event)\" [(ngModel)]=\"car.make\" #selectMake=\"ngModel\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Select Make</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let mk of allmakes\" [value]=\"mk.make_id\">{{mk.name}}</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"fa fa-caret-down\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"col-md-6 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"b-submit__main-element wow zoomInUp\" data-wow-delay=\"0.5s\" style=\"visibility: visible; animation-delay: 0.5s; animation-name: zoomInUp;\">\r\n\t\t\t\t\t\t\t\t\t<label>Enter Vehicle Model <span>*</span></label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"s-relative\">\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"m-select\" name=\"selectModels\" [(ngModel)]=\"car.model\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Select Model</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let md of selectedModels\" [value]=\"md.model_id\">{{md.name}}</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"fa fa-caret-down\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\t\t\t\t\t\t\t\t\t\t\r\n                            </div>\r\n\r\n                            <div class=\"col-md-12 col-xs-12\">\r\n                                <input type=\"text\" name=\"image_url\" id=\"image_url\" [(ngModel)]=\"car.image_url\">\r\n                            </div>\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<button type=\"submit\" [disabled]=\"!car.make || !car.model\" class=\"btn m-btn pull-right wow zoomInUp\" data-wow-delay=\"0.5s\" style=\"visibility: visible; animation-delay: 0.5s; animation-name: zoomInUp;\">Upload Image<span class=\"fa fa-angle-right\"></span></button>\t\t\t\t\t\t\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/cars/upload-image/upload-image.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadCarImageComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery__ = __webpack_require__("../../../../jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_toastr__ = __webpack_require__("../../../../toastr/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_block_ui__ = __webpack_require__("../../../../block-ui/jquery.blockUI.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_configs_configs_service__ = __webpack_require__("../../../../../src/app/shared/services/configs/configs.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UploadCarImageComponent = (function () {
    function UploadCarImageComponent(renderer, http, config) {
        this.renderer = renderer;
        this.http = http;
        this.config = config;
        this.title = 'app';
        this.dealer = {};
        this.loginMsg = false;
        this.car = {};
        this.selectedModels = [];
        this.activeStep = 1;
        this.allmakes = [];
        //loggedInUser = JSON.parse(localStorage.getItem('user'));
        this.carSuccess = false;
        this.renderer.addClass(document.body, 'm-submit1');
    }
    UploadCarImageComponent.prototype.nextTab = function () {
    };
    UploadCarImageComponent.prototype.loadListings = function () {
    };
    UploadCarImageComponent.prototype.ngOnInit = function () {
        var self = this;
        self.http.get(self.config.getAPIUrl() + "car/makes").subscribe(function (makes) {
            self.allmakes = makes;
        }, function (error) {
            console.log(error, "error occured");
        });
    };
    UploadCarImageComponent.prototype.ngAfterViewInit = function () {
        //toastr.info('Are you the 6 fingered man?');
        //$.blockUI();
    };
    UploadCarImageComponent.prototype.uploadImage = function (data) {
        var self = this;
        //self.carSuccess = true;
        __WEBPACK_IMPORTED_MODULE_2_jquery__["blockUI"]();
        self.http.post(self.config.getAPIUrl() + "car/upload_model_image/" + data.value.selectModels, { image_url: data.value.image_url }).subscribe(function (result) {
            __WEBPACK_IMPORTED_MODULE_2_jquery__["unblockUI"]();
            __WEBPACK_IMPORTED_MODULE_3_toastr__["success"]('Image uploaded succesfully');
            console.log(result, "models");
        }, function (error) {
            __WEBPACK_IMPORTED_MODULE_2_jquery__["unblockUI"]();
            console.log(error, "error occured");
        });
    };
    UploadCarImageComponent.prototype.selectDetails = function (attr, data) {
        var self = this;
        if (attr == 'make') {
            self.http.get(self.config.getAPIUrl() + "car/makes/models/" + data).subscribe(function (models) {
                self.selectedModels = models;
                console.log(models, "models");
            }, function (error) {
                console.log(error, "error occured");
            });
        }
    };
    UploadCarImageComponent.prototype.ngOnDestroy = function () {
        this.renderer.removeClass(document.body, 'm-submit1');
    };
    UploadCarImageComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '',
            template: __webpack_require__("../../../../../src/app/modules/cars/upload-image/upload-image.component.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_5__shared_services_configs_configs_service__["a" /* ConfigurationService */]]
        })
        //API for cars make and and their models
        //https://vpic.nhtsa.dot.gov/api/
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__shared_services_configs_configs_service__["a" /* ConfigurationService */]])
    ], UploadCarImageComponent);
    return UploadCarImageComponent;
}());



/***/ }),

/***/ "../../../../../src/app/modules/cars/upload-make-logo/upload-make-logo.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"b-pageHeader\">\r\n    <div class=\"container\">\r\n        <h1 class=\"wow zoomInLeft\" data-wow-delay=\"0.5s\" style=\"visibility: visible; animation-delay: 0.5s; animation-name: zoomInLeft;\">Upload Car Logo</h1>        \r\n    </div>\r\n</section>\r\n<div class=\"b-submit\">\r\n\t<div class=\"container\">\t\t\t\t\r\n\t\t<div class=\"row\">\t\t\t\t\r\n\t\t\t<div class=\"col-lg-9 col-md-8 col-sm-7 col-xs-6\">\r\n\t\t\t\t<div class=\"b-submit__main\">\r\n\t\t\t\t\t<header class=\"s-headerSubmit s-lineDownLeft wow zoomInUp\" data-wow-delay=\"0.5s\" style=\"visibility: visible; animation-delay: 0.5s; animation-name: zoomInUp;\">\r\n\t\t\t\t\t\t<h2 class=\"\">Upload Logo</h2>\r\n\t\t\t\t\t</header>\r\n\t\t\t\t\t<form class=\"s-submit clearfix\" #uplodLogoForm=\"ngForm\" (ngSubmit)=\"uploadLogo(uplodLogoForm)\">\r\n\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t<div class=\"col-md-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<div class=\"b-submit__main-element wow zoomInUp\" data-wow-delay=\"0.5s\" style=\"visibility: visible; animation-delay: 0.5s; animation-name: zoomInUp;\">\r\n\t\t\t\t\t\t\t\t\t<label>Enter Make <span>*</span></label>\r\n\t\t\t\t\t\t\t\t\t<div class=\"s-relative\">\r\n\t\t\t\t\t\t\t\t\t\t<select class=\"m-select\" name=\"selectMakeId\" [(ngModel)]=\"car.make\" #selectMakeId=\"ngModel\">\r\n\t\t\t\t\t\t\t\t\t\t\t<option value=\"\">Select Make</option>\r\n\t\t\t\t\t\t\t\t\t\t\t<option *ngFor=\"let mk of allmakes\" [value]=\"mk.make_id\">{{mk.name}}</option>\r\n\t\t\t\t\t\t\t\t\t\t</select>\r\n\t\t\t\t\t\t\t\t\t\t<span class=\"fa fa-caret-down\"></span>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n                            <div class=\"col-md-12 col-xs-12\">\r\n\t\t\t\t\t\t\t\t<label>Enter Make <span>*</span></label>\r\n                                <input type=\"text\" name=\"image_url\" id=\"image_url\" [(ngModel)]=\"car.image_url\">\r\n                            </div>\r\n\t\t\t\t\t\t</div>\t\t\t\t\t\t\r\n\t\t\t\t\t\t\r\n\t\t\t\t\t\t<button type=\"submit\" class=\"btn m-btn pull-right wow zoomInUp\" data-wow-delay=\"0.5s\" style=\"visibility: visible; animation-delay: 0.5s; animation-name: zoomInUp;\">Upload Logo<span class=\"fa fa-angle-right\"></span></button>\r\n\t\t\t\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t</form>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "../../../../../src/app/modules/cars/upload-make-logo/upload-make-logo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UploadMakeLogoComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_services_helper_helper_service__ = __webpack_require__("../../../../../src/app/shared/services/helper/helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_toastr__ = __webpack_require__("../../../../toastr/toastr.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_toastr___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_toastr__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_block_ui__ = __webpack_require__("../../../../block-ui/jquery.blockUI.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_block_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_block_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_services_configs_configs_service__ = __webpack_require__("../../../../../src/app/shared/services/configs/configs.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UploadMakeLogoComponent = (function () {
    function UploadMakeLogoComponent(renderer, http, config, helper) {
        this.renderer = renderer;
        this.http = http;
        this.config = config;
        this.helper = helper;
        this.title = 'app';
        this.car = { make: "" };
        this.allmakes = [];
        //loggedInUser = JSON.parse(localStorage.getItem('user'));
        this.carSuccess = false;
        this.renderer.addClass(document.body, 'm-submit1');
    }
    UploadMakeLogoComponent.prototype.ngOnInit = function () {
        var self = this;
        self.helper.showLoader();
        self.http.get(self.config.getAPIUrl() + "car/makes").subscribe(function (makes) {
            self.allmakes = makes;
            self.helper.hideLoader();
        }, function (error) {
            self.helper.showMessage("error", "Error in loading");
        });
    };
    UploadMakeLogoComponent.prototype.uploadLogo = function (data) {
        var self = this;
        self.helper.showLoader();
        self.http.post(self.config.getAPIUrl() + "car/upload_make_logo/" + data.value.selectMakeId, { image_url: data.value.image_url }).subscribe(function (result) {
            self.helper.hideLoader();
            __WEBPACK_IMPORTED_MODULE_3_toastr__["success"]('Image uploaded succesfully');
        }, function (error) {
            self.helper.hideLoader();
            self.helper.showMessage("error", "Error in uplaoding image");
        });
    };
    UploadMakeLogoComponent.prototype.ngOnDestroy = function () {
        this.renderer.removeClass(document.body, 'm-submit1');
    };
    UploadMakeLogoComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '',
            template: __webpack_require__("../../../../../src/app/modules/cars/upload-make-logo/upload-make-logo.html"),
            providers: [__WEBPACK_IMPORTED_MODULE_5__shared_services_configs_configs_service__["a" /* ConfigurationService */]]
        })
        //API for cars make and and their models
        //https://vpic.nhtsa.dot.gov/api/
        ,
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Renderer2 */], __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_5__shared_services_configs_configs_service__["a" /* ConfigurationService */], __WEBPACK_IMPORTED_MODULE_2__shared_services_helper_helper_service__["a" /* HelperService */]])
    ], UploadMakeLogoComponent);
    return UploadMakeLogoComponent;
}());



/***/ })

});
//# sourceMappingURL=cars.module.chunk.js.map