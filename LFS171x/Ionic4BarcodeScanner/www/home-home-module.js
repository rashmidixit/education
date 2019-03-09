(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home-home-module"],{

/***/ "./node_modules/@ionic-native/fingerprint-aio/ngx/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@ionic-native/fingerprint-aio/ngx/index.js ***!
  \*****************************************************************/
/*! exports provided: FingerprintAIO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FingerprintAIO", function() { return FingerprintAIO; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FingerprintAIO = /** @class */ (function (_super) {
    __extends(FingerprintAIO, _super);
    function FingerprintAIO() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FingerprintAIO.prototype.isAvailable = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "isAvailable", {}, arguments); };
    FingerprintAIO.prototype.show = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["cordova"])(this, "show", {}, arguments); };
    FingerprintAIO.pluginName = "FingerprintAIO";
    FingerprintAIO.plugin = "cordova-plugin-fingerprint-aio";
    FingerprintAIO.pluginRef = "Fingerprint";
    FingerprintAIO.repo = "https://github.com/NiklasMerz/cordova-plugin-fingerprint-aio";
    FingerprintAIO.platforms = ["Android", "iOS"];
    FingerprintAIO = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        })
    ], FingerprintAIO);
    return FingerprintAIO;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_1__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbmdlcnByaW50LWFpby9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQzs7SUFtRXBDLGtDQUFpQjs7OztJQU1uRCxvQ0FBVztJQVVYLDZCQUFJLGFBQUMsT0FBMkI7Ozs7OztJQWhCckIsY0FBYztRQUgxQixVQUFVLENBQUM7WUFDVixVQUFVLEVBQUUsTUFBTTtTQUNuQixDQUFDO09BQ1csY0FBYzt5QkFwRTNCO0VBb0VvQyxpQkFBaUI7U0FBeEMsY0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5leHBvcnQgaW50ZXJmYWNlIEZpbmdlcnByaW50T3B0aW9ucyB7XG4gIC8qKlxuICAgKiBLZXkgZm9yIHBsYXRmb3JtIGtleWNoYWluXG4gICAqL1xuICBjbGllbnRJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBTZWNyZXQgcGFzc3dvcmQuIE9ubHkgZm9yIGFuZHJvaWRcbiAgICovXG4gIGNsaWVudFNlY3JldD86IHN0cmluZztcblxuICAvKipcbiAgICogRGlzYWJsZSAndXNlIGJhY2t1cCcgb3B0aW9uLiBPbmx5IGZvciBhbmRyb2lkIChvcHRpb25hbClcbiAgICovXG4gIGRpc2FibGVCYWNrdXA/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBUaXRsZSBvZiBmYWxsYmFjayBidXR0b24uIE9ubHkgZm9yIGlPU1xuICAgKi9cbiAgbG9jYWxpemVkRmFsbGJhY2tUaXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogRGVzY3JpcHRpb24gaW4gYXV0aGVudGljYXRpb24gZGlhbG9ndWUuIE9ubHkgZm9yIGlPU1xuICAgKi9cbiAgbG9jYWxpemVkUmVhc29uPzogc3RyaW5nO1xufVxuXG4vKipcbiAqIEBuYW1lIEZpbmdlcnByaW50IEFJT1xuICogQGRlc2NyaXB0aW9uXG4gKiBVc2Ugc2ltcGxlIGZpbmdlcnByaW50IGF1dGhlbnRpY2F0aW9uIG9uIEFuZHJvaWQgYW5kIGlPUy5cbiAqIFJlcXVpcmVzIENvcmRvdmEgcGx1Z2luOiBjb3Jkb3ZhLXBsdWdpbi1maW5nZXJwcmludC1haW8uIEZvciBtb3JlIGluZm8gYWJvdXQgcGx1Z2luLCB2aXN0OiBodHRwczovL2dpdGh1Yi5jb20vTmlrbGFzTWVyei9jb3Jkb3ZhLXBsdWdpbi1maW5nZXJwcmludC1haW9cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IEZpbmdlcnByaW50QUlPIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maW5nZXJwcmludC1haW8vbmd4JztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIGZhaW86IEZpbmdlcnByaW50QUlPKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmZhaW8uc2hvdyh7XG4gKiAgICAgY2xpZW50SWQ6ICdGaW5nZXJwcmludC1EZW1vJyxcbiAqICAgICBjbGllbnRTZWNyZXQ6ICdwYXNzd29yZCcsIC8vT25seSBuZWNlc3NhcnkgZm9yIEFuZHJvaWRcbiAqICAgICBkaXNhYmxlQmFja3VwOnRydWUsICAvL09ubHkgZm9yIEFuZHJvaWQob3B0aW9uYWwpXG4gKiAgICAgbG9jYWxpemVkRmFsbGJhY2tUaXRsZTogJ1VzZSBQaW4nLCAvL09ubHkgZm9yIGlPU1xuICogICAgIGxvY2FsaXplZFJlYXNvbjogJ1BsZWFzZSBhdXRoZW50aWNhdGUnIC8vT25seSBmb3IgaU9TXG4gKiB9KVxuICogLnRoZW4oKHJlc3VsdDogYW55KSA9PiBjb25zb2xlLmxvZyhyZXN1bHQpKVxuICogLmNhdGNoKChlcnJvcjogYW55KSA9PiBjb25zb2xlLmxvZyhlcnJvcikpO1xuICpcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIEZpbmdlcnByaW50T3B0aW9uc1xuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZpbmdlcnByaW50QUlPJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tZmluZ2VycHJpbnQtYWlvJyxcbiAgcGx1Z2luUmVmOiAnRmluZ2VycHJpbnQnLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL05pa2xhc01lcnovY29yZG92YS1wbHVnaW4tZmluZ2VycHJpbnQtYWlvJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBGaW5nZXJwcmludEFJTyBleHRlbmRzIElvbmljTmF0aXZlUGx1Z2luIHtcbiAgLyoqXG4gICAqIENoZWNrIGlmIGZpbmdlcnByaW50IGF1dGhlbnRpY2F0aW9uIGlzIGF2YWlsYWJsZVxuICAgKiBAcmV0dXJuIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBwcm9taXNlIHdpdGggcmVzdWx0XG4gICAqL1xuICBAQ29yZG92YSgpXG4gIGlzQXZhaWxhYmxlKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFNob3cgYXV0aGVudGljYXRpb24gZGlhbG9ndWVcbiAgICogQHBhcmFtIHtGaW5nZXJwcmludE9wdGlvbnN9IG9wdGlvbnMgT3B0aW9ucyBmb3IgcGxhdGZvcm0gc3BlY2lmaWMgZmluZ2VycHJpbnQgQVBJXG4gICAqIEByZXR1cm4ge1Byb21pc2U8YW55Pn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aGVuIGF1dGhlbnRpY2F0aW9uIHdhcyBzdWNjZXNzZnVsXG4gICAqL1xuICBAQ29yZG92YSgpXG4gIHNob3cob3B0aW9uczogRmluZ2VycHJpbnRPcHRpb25zKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./src/app/home/home.module.ts":
/*!*************************************!*\
  !*** ./src/app/home/home.module.ts ***!
  \*************************************/
/*! exports provided: HomePageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePageModule", function() { return HomePageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _home_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home.page */ "./src/app/home/home.page.ts");







let HomePageModule = class HomePageModule {
};
HomePageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]
                }
            ])
        ],
        declarations: [_home_page__WEBPACK_IMPORTED_MODULE_6__["HomePage"]]
    })
], HomePageModule);



/***/ }),

/***/ "./src/app/home/home.page.html":
/*!*************************************!*\
  !*** ./src/app/home/home.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n</ion-header>\n\n<ion-content>\n\n  <iframe src=\"http://10.44.15.85:3000/rahaf\" style=\"height: 100%; width: 100%;\"></iframe>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/home/home.page.scss":
/*!*************************************!*\
  !*** ./src/app/home/home.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/home/home.page.ts":
/*!***********************************!*\
  !*** ./src/app/home/home.page.ts ***!
  \***********************************/
/*! exports provided: HomePage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomePage", function() { return HomePage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/fingerprint-aio/ngx */ "./node_modules/@ionic-native/fingerprint-aio/ngx/index.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");






let HomePage = class HomePage {
    constructor(fingerprint, platform, barcode, navCtrl) {
        this.fingerprint = fingerprint;
        this.platform = platform;
        this.barcode = barcode;
        this.navCtrl = navCtrl;
        this.fingerprintOptions = {
            clientId: 'fingerprint-demo',
            clientSecret: 'password',
            disableBackup: true
        };
        this.scanBarcode = this.scanBarcode.bind(this);
        this.showFingerprintAuthDlg = this.showFingerprintAuthDlg.bind(this);
        this.receiveMessage = this.receiveMessage.bind(this);
        window.addEventListener("message", this.receiveMessage, false);
    }
    showFingerprintAuthDlg(message) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            try {
                yield this.platform.ready();
                const available = yield this.fingerprint.isAvailable();
                console.log(available);
                if (available === "finger") {
                    const result = yield this.fingerprint.show(this.fingerprintOptions);
                    console.log(result);
                    window.frames[0].postMessage({
                        event: "FingerPrintAccepted",
                        params: message.data.params
                    }, "*");
                }
            }
            catch (e) {
                console.error(e);
            }
        });
    }
    scanBarcode() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const result = yield this.barcode.scan();
            console.log(result);
            window.frames[0].postMessage({
                event: "BarcodeScanned",
                params: { did: result.text }
            }, "*");
        });
    }
    receiveMessage(message) {
        //alert(message.data);
        console.log(message.data.params);
        console.log(message.data.event);
        //  this.scanBarcode();
        if (message.data.event.toLowerCase() === "InvokeBarCode".toLowerCase()) {
            console.log("Inside If_else");
            this.scanBarcode();
        }
        else if (message.data.event.toLowerCase() == "InvokeFingerPrint".toLowerCase()) {
            console.log("In side auth fingerprint");
            this.showFingerprintAuthDlg(message);
            //alert(message.data);
        }
    }
};
HomePage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! ./home.page.html */ "./src/app/home/home.page.html"),
        styles: [__webpack_require__(/*! ./home.page.scss */ "./src/app/home/home.page.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_3__["FingerprintAIO"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["Platform"], _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_4__["BarcodeScanner"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]])
], HomePage);



/***/ })

}]);
//# sourceMappingURL=home-home-module.js.map