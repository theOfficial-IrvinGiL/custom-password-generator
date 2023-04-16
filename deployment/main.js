(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"center\" *ngIf=\"showGeneratePasswordButton\">\n  <button mat-raised-button (click)=\"openDialog()\">\n    <h2>Generate Password</h2>\n  </button>\n\n\n</div>\n<div class=\"result-section\" *ngIf=\"generatedPassword\">\n  <mat-card>\n    <mat-card-title>\n      <h4>🔐 Your Custom Password</h4>\n    </mat-card-title>\n    <div class=\"text-area-section\">\n      <mat-form-field appearance=\"outline\">\n            <textarea #password\n                      matInput\n                      readonly\n                      cdkTextareaAutosize\n                      cdkAutosizeMinRows=\"1\"\n                      cdkAutosizeMaxRows=\"5\"\n                      [value]=\"generatedPassword\"\n                      style=\"text-align: center;\"></textarea>\n      </mat-form-field>\n\n    </div>\n    <div>\n      <mat-card-actions align=\"center\">\n        <button mat-raised-button\n                color=\"primary\"\n                (click)=\"copyGeneratedPasswordToClipboard(password)\">\n          Copy to Clipboard\n        </button>\n        <button mat-raised-button\n                color=\"secondary\"\n                (click)=\"generateAgain()\">\n          Generate Again\n        </button>\n      </mat-card-actions>\n    </div>\n\n\n  </mat-card>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  height: 100vh; }\n\n.center button {\n  background: #2BA55C; }\n\n.result-section {\n  margin-top: 5%;\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center; }\n\n.result-section mat-card {\n  width: 70%; }\n\nmat-card {\n  background: #2BA55C; }\n\nmat-card-title {\n  background: inherit;\n  margin: 10px;\n  text-align: center; }\n\n.text-area-section {\n  display: flex;\n  flex-direction: row;\n  align-items: stretch;\n  justify-content: center; }\n\nmat-card {\n  display: flex;\n  flex-direction: column;\n  align-items: stretch;\n  justify-content: center; }\n\nmat-form-field {\n  width: 100%;\n  margin: 5%; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lydmluZ2lsL1NhbmRCb3gvY3VzdG9tLXBhc3N3b3JkLWdlbmVyYXRvci9zcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1CO0VBQ25CLGFBQWEsRUFBQTs7QUFHZjtFQUNFLG1CQUFtQixFQUFBOztBQUdyQjtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQix1QkFBdUIsRUFBQTs7QUFJekI7RUFDRSxVQUFVLEVBQUE7O0FBR1o7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGtCQUFrQixFQUFBOztBQUdwQjtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsb0JBQW9CO0VBQ3BCLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsb0JBQW9CO0VBQ3BCLHVCQUF1QixFQUFBOztBQUd6QjtFQUNFLFdBQVc7RUFDWCxVQUFVLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2VudGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGhlaWdodDogMTAwdmg7XG59XG5cbi5jZW50ZXIgYnV0dG9uIHtcbiAgYmFja2dyb3VuZDogIzJCQTU1Qztcbn1cblxuLnJlc3VsdC1zZWN0aW9uIHtcbiAgbWFyZ2luLXRvcDogNSU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXG59XG5cbi5yZXN1bHQtc2VjdGlvbiBtYXQtY2FyZCB7XG4gIHdpZHRoOiA3MCU7XG59XG5cbm1hdC1jYXJkIHtcbiAgYmFja2dyb3VuZDogIzJCQTU1Qztcbn1cblxubWF0LWNhcmQtdGl0bGUge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xuICBtYXJnaW46IDEwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRleHQtYXJlYS1zZWN0aW9uIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5tYXQtY2FyZCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxubWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luOiA1JTtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_password_generator_dialog_password_generator_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/password-generator-dialog/password-generator-dialog.component */ "./src/app/components/password-generator-dialog/password-generator-dialog.component.ts");
/* harmony import */ var _service_generate_password_generate_password_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/generate-password/generate-password.service */ "./src/app/service/generate-password/generate-password.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/esm5/snack-bar.es5.js");






var AppComponent = /** @class */ (function () {
    function AppComponent(dialog, generatePasswordService, snackbar) {
        this.dialog = dialog;
        this.generatePasswordService = generatePasswordService;
        this.snackbar = snackbar;
        this.title = 'custom-password-generator';
        this.showGeneratePasswordButton = true;
        this.generatedPassword = null;
        this.passwordLength = null;
        this.includeLetters = null;
        this.includeNumbers = null;
        this.includeSpecialCharacters = null;
        this.snackbarDurationInSeconds = 3;
        this.snackbarHorizontalPosition = 'center';
        this.snackbarVerticalPosition = 'top';
        this.dialogConfig = {
            disableClose: true,
            width: '70%',
            height: '60%',
            data: {
                passwordLength: this.passwordLength,
                includeLetters: this.includeLetters,
                includeNumbers: this.includeNumbers,
                includeSpecialCharacters: this.includeSpecialCharacters
            }
        };
    }
    AppComponent.prototype.openDialog = function () {
        var _this = this;
        this.showGeneratePasswordButton = false;
        var dialogReference = this.dialog.open(_components_password_generator_dialog_password_generator_dialog_component__WEBPACK_IMPORTED_MODULE_3__["PasswordGeneratorDialogComponent"], this.dialogConfig);
        dialogReference.afterClosed().subscribe(function (result) {
            if (result === undefined) {
                _this.showGeneratePasswordButton = true;
            }
            else if (result.passwordLength) {
                _this.generatedPassword = _this.generatePasswordService.generatePassword(result.passwordLength, result.includeNumbers, result.includeLetters, result.includeSpecialCharacters);
            }
        });
    };
    AppComponent.prototype.copyGeneratedPasswordToClipboard = function (password) {
        password.select();
        document.execCommand('copy');
        password.setSelectionRange(0, 0);
        this.openSnackbar();
    };
    AppComponent.prototype.generateAgain = function () {
        this.generatedPassword = null;
        this.showGeneratePasswordButton = true;
    };
    AppComponent.prototype.openSnackbar = function () {
        var copiedToClipboardMessage = 'Copied to clipboard 🗒';
        var dismissAction = 'Dismiss';
        this.snackbar.open(copiedToClipboardMessage, dismissAction, {
            duration: this.snackbarDurationInSeconds * 1000,
            horizontalPosition: this.snackbarHorizontalPosition,
            verticalPosition: this.snackbarVerticalPosition
        });
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            _service_generate_password_generate_password_service__WEBPACK_IMPORTED_MODULE_4__["GeneratePasswordService"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/header/header.component */ "./src/app/components/header/header.component.ts");
/* harmony import */ var _material_material_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./material/material.module */ "./src/app/material/material.module.ts");
/* harmony import */ var _components_password_generator_dialog_password_generator_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/password-generator-dialog/password-generator-dialog.component */ "./src/app/components/password-generator-dialog/password-generator-dialog.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"],
                _components_password_generator_dialog_password_generator_dialog_component__WEBPACK_IMPORTED_MODULE_8__["PasswordGeneratorDialogComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _material_material_module__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
            entryComponents: [
                _components_password_generator_dialog_password_generator_dialog_component__WEBPACK_IMPORTED_MODULE_8__["PasswordGeneratorDialogComponent"]
            ]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>\n  <!--\n  -->\n  <span class=\"application-name\">Custom Password Generator</span>\n  <span class=\"example-spacer\"></span>\n\n  <a class=\"link-icon\" href=\"https://www.facebook.com/ehrbhein\" target=\"_blank\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\"\n         class=\"bi bi-facebook\"\n         viewBox=\"0 0 16 16\">\n      <path\n        d=\"M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z\"/>\n    </svg>\n  </a>\n\n  <a class=\"link-icon\" href=\"https://github.com/theOfficial-IrvinGiL\" target=\"_blank\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" class=\"bi bi-github\"\n         viewBox=\"0 0 16 16\">\n      <path\n        d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"/>\n    </svg>\n  </a>\n\n\n  <a class=\"link-icon\" href=\"https://twitter.com/ehrbhein\" target=\"_blank\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\" fill=\"currentColor\" class=\"bi bi-twitter\"\n         viewBox=\"0 0 16 16\">\n      <path\n        d=\"M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z\"/>\n    </svg>\n  </a>\n\n  <!--  <button mat-icon-button class=\"example-icon favorite-icon\" aria-label=\"Example icon-button with heart icon\">-->\n  <!--    <mat-icon>favorite</mat-icon>-->\n  <!--  </button>-->\n  <!--  <button mat-icon-button class=\"example-icon\" aria-label=\"Example icon-button with share icon\">-->\n  <!--    <mat-icon>share</mat-icon>-->\n  <!--  </button>-->\n</mat-toolbar>\n"

/***/ }),

/***/ "./src/app/components/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".example-spacer {\n  flex: 1 1 auto; }\n\n.application-name {\n  margin-left: 10px; }\n\nmat-toolbar {\n  background: #2BA55C; }\n\n.link-icon {\n  color: #FFFFFF;\n  margin-right: 1%; }\n\n.link-icon svg {\n  width: 25px;\n  height: 25px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lydmluZ2lsL1NhbmRCb3gvY3VzdG9tLXBhc3N3b3JkLWdlbmVyYXRvci9zcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGNBQWMsRUFBQTs7QUFHaEI7RUFDRSxpQkFBaUIsRUFBQTs7QUFHbkI7RUFDRSxtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxjQUFjO0VBQ2QsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsV0FBVztFQUNYLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLXNwYWNlciB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuXG4uYXBwbGljYXRpb24tbmFtZSB7XG4gIG1hcmdpbi1sZWZ0OiAxMHB4O1xufVxuXG5tYXQtdG9vbGJhciB7XG4gIGJhY2tncm91bmQ6ICMyQkE1NUM7XG59XG5cbi5saW5rLWljb24ge1xuICBjb2xvcjogI0ZGRkZGRjtcbiAgbWFyZ2luLXJpZ2h0OiAxJTtcbn1cblxuLmxpbmstaWNvbiBzdmcge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAyNXB4O1xufVxuXG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/components/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/components/header/header.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/components/password-generator-dialog/password-generator-dialog.component.html":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/password-generator-dialog/password-generator-dialog.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"mat-dialog-container\">\n\n  <div mat-dialog-title class=\"dialog-title\">\n    <div class=\"mat-title\">Customize</div>\n    <button mat-icon-button mat-dialog-close (click)=\"closeDialog()\">\n      <mat-icon>close</mat-icon>\n    </button>\n  </div>\n  <div class=\"mat-typography\">Drag the slider to set password length.</div>\n\n  <form id=\"myForm\" #myForm=\"ngForm\" (ngSubmit)=\"submitCustomizationData()\">\n    <section class=\"customize-section\">\n      <mat-slider class=\"dialog-slider\"\n                  max=\"100\"\n                  step=\"1\"\n                  [(value)]=\"data.passwordLength\"\n                  required\n                  name=\"passwordLengthSlider\"></mat-slider>\n\n      <mat-form-field>\n        <mat-label>Password length</mat-label>\n        <input matInput\n               type=\"number\"\n               [(ngModel)]=\"data.passwordLength\"\n               required\n               name=\"passwordLengthInput\"\n               max=\"100\">\n        <mat-error>\n          Acceptable password length is 8-100\n        </mat-error>\n      </mat-form-field>\n\n      <div class=\"checkbox-section\">\n        <div>\n          <mat-checkbox\n            [(ngModel)]=\"data.includeLetters\"\n            name=\"includeLettersCheckbox\">Include letters\n          </mat-checkbox>\n        </div>\n        <div>\n          <mat-checkbox\n            [(ngModel)]=\"data.includeNumbers\"\n            name=\"includeNumbers\">Include numbers\n          </mat-checkbox>\n        </div>\n        <div>\n          <mat-checkbox\n            [(ngModel)]=\"data.includeSpecialCharacters\"\n            name=\"includeSpecialCharactersCheckbox\">Include special characters\n          </mat-checkbox>\n        </div>\n\n      </div>\n\n    </section>\n\n    <div class=\"button-section\">\n      <button mat-raised-button type=\"submit\" [disabled]=\"!passwordLengthIsValid()\">Generate</button>\n    </div>\n  </form>\n\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/password-generator-dialog/password-generator-dialog.component.scss":
/*!***********************************************************************************************!*\
  !*** ./src/app/components/password-generator-dialog/password-generator-dialog.component.scss ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog-title {\n  display: flex;\n  justify-content: space-between;\n  align-items: center; }\n\n.dialog-slider {\n  width: 100%; }\n\nmat-form-field input {\n  width: 100%; }\n\n.checkbox-section {\n  margin-top: 2%; }\n\n.checkbox-section div {\n  margin-top: 1%; }\n\n.button-section {\n  margin-top: 5%;\n  display: flex;\n  justify-content: center; }\n\n.button-section button {\n  background: #2BA55C; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2lydmluZ2lsL1NhbmRCb3gvY3VzdG9tLXBhc3N3b3JkLWdlbmVyYXRvci9zcmMvYXBwL2NvbXBvbmVudHMvcGFzc3dvcmQtZ2VuZXJhdG9yLWRpYWxvZy9wYXNzd29yZC1nZW5lcmF0b3ItZGlhbG9nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixtQkFBbUIsRUFBQTs7QUFHckI7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxXQUFXLEVBQUE7O0FBR2I7RUFDRSxjQUFjLEVBQUE7O0FBR2hCO0VBQ0UsY0FBYyxFQUFBOztBQUdoQjtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IsdUJBQXVCLEVBQUE7O0FBR3pCO0VBQ0UsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Bhc3N3b3JkLWdlbmVyYXRvci1kaWFsb2cvcGFzc3dvcmQtZ2VuZXJhdG9yLWRpYWxvZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5kaWFsb2ctdGl0bGUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5kaWFsb2ctc2xpZGVye1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LWZvcm0tZmllbGQgaW5wdXQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuLmNoZWNrYm94LXNlY3Rpb24ge1xuICBtYXJnaW4tdG9wOiAyJTtcbn1cblxuLmNoZWNrYm94LXNlY3Rpb24gZGl2IHtcbiAgbWFyZ2luLXRvcDogMSU7XG59XG5cbi5idXR0b24tc2VjdGlvbiB7XG4gIG1hcmdpbi10b3A6IDUlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmJ1dHRvbi1zZWN0aW9uIGJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMyQkE1NUM7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/password-generator-dialog/password-generator-dialog.component.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/password-generator-dialog/password-generator-dialog.component.ts ***!
  \*********************************************************************************************/
/*! exports provided: PasswordGeneratorDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PasswordGeneratorDialogComponent", function() { return PasswordGeneratorDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var PasswordGeneratorDialogComponent = /** @class */ (function () {
    function PasswordGeneratorDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.data.includeLetters = true;
    }
    PasswordGeneratorDialogComponent.prototype.ngOnInit = function () {
        this.clearDialogForm();
    };
    PasswordGeneratorDialogComponent.prototype.submitCustomizationData = function () {
        this.dialogRef.close(this.data);
    };
    PasswordGeneratorDialogComponent.prototype.closeDialog = function () {
        this.dialogRef.close(undefined);
    };
    PasswordGeneratorDialogComponent.prototype.passwordLengthIsValid = function () {
        if (!this.notAllCheckBoxAreUnchecked()) {
            return false;
        }
        return (this.data.passwordLength >= 8 && this.data.passwordLength <= 100);
    };
    PasswordGeneratorDialogComponent.prototype.clearDialogForm = function () {
        this.data.passwordLength = null;
        this.data.includeNumbers = null;
        this.data.includeSpecialCharacters = null;
    };
    PasswordGeneratorDialogComponent.prototype.notAllCheckBoxAreUnchecked = function () {
        var customControls = [this.data.includeLetters,
            this.data.includeNumbers,
            this.data.includeSpecialCharacters];
        return (customControls.find(function (item) { return item === true; })) ? true : false;
    };
    PasswordGeneratorDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-password-generator-dialog',
            template: __webpack_require__(/*! ./password-generator-dialog.component.html */ "./src/app/components/password-generator-dialog/password-generator-dialog.component.html"),
            styles: [__webpack_require__(/*! ./password-generator-dialog.component.scss */ "./src/app/components/password-generator-dialog/password-generator-dialog.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], PasswordGeneratorDialogComponent);
    return PasswordGeneratorDialogComponent;
}());



/***/ }),

/***/ "./src/app/material/material.module.ts":
/*!*********************************************!*\
  !*** ./src/app/material/material.module.ts ***!
  \*********************************************/
/*! exports provided: MaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MaterialModule", function() { return MaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var material = [
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatToolbarModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatIconModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatButtonModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatInputModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCheckboxModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatCardModule"],
    _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatSnackBarModule"]
];
var MaterialModule = /** @class */ (function () {
    function MaterialModule() {
    }
    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [material],
            imports: [material]
        })
    ], MaterialModule);
    return MaterialModule;
}());



/***/ }),

/***/ "./src/app/service/generate-password/generate-password.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/service/generate-password/generate-password.service.ts ***!
  \************************************************************************/
/*! exports provided: GeneratePasswordService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeneratePasswordService", function() { return GeneratePasswordService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GeneratePasswordService = /** @class */ (function () {
    function GeneratePasswordService() {
    }
    GeneratePasswordService.prototype.createPassword = function () {
    };
    GeneratePasswordService.prototype.generatePassword = function (length, includeNumbers, includeLetters, includeSpecialCharacters) {
        var numbers = '0123456789';
        var letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        var specialCharacters = '!@#$%^&*()_+-=[]{}|;:,.<>?';
        var characters = '';
        if (includeNumbers) {
            characters += numbers;
        }
        if (includeLetters) {
            characters += letters;
        }
        if (includeSpecialCharacters) {
            characters += specialCharacters;
        }
        var password = '';
        for (var i = 0; i < length; i++) {
            password += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return password;
    };
    GeneratePasswordService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GeneratePasswordService);
    return GeneratePasswordService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
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


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/irvingil/SandBox/custom-password-generator/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map