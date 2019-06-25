webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".watermark{\r\n  position:fixed;\r\n  bottom:5px;\r\n  left:5px;\r\n  opacity:0.5;\r\n  z-index:99;\r\n  color:black;\r\n  font-size: 8px;\r\n}\r\n.sign-out-btn-position{\r\n  position:fixed;\r\n  bottom:5px;\r\n  left:5px;\r\n  z-index:99;\r\n\r\n}\r\n@media screen and (min-width: 480px) {\r\n  .field {\r\n    margin: auto;\r\n    width: 30%;\r\n  }\r\n}\r\n@media screen and (max-width: 480px) {\r\n  .field {\r\n    margin: auto;\r\n    width: 100%;\r\n  }\r\n}\r\n.btn{\r\n  background-color: #62b6af;\r\n  border-radius: 50px;\r\n\r\n}\r\nbody{font-family: arial}\r\n.jumbotron{width:450px; margin:0 auto; padding:2rem;}\r\n.marginBottom { margin-bottom: .75rem;}\r\n.profilePicture{\r\n  width: 55px;\r\n  height: 55px;\r\n  border-radius: 20px;\r\n}\r\n.toolbar {\r\n  background: -webkit-gradient(linear, right top, left top, from(#a2b9bc), to(#a2b9bc));\r\n  background: linear-gradient(270deg, #a2b9bc, #a2b9bc);\r\n  background-size: 400% 400%;\r\n\r\n  -webkit-animation: AnimationName 30s ease infinite;\r\n  animation: AnimationName 30s ease infinite;\r\n}\r\nul.topnav {\r\n  list-style-type: none;\r\n  margin: 0;\r\n  padding: 0;\r\n  overflow: hidden;\r\n  background-color: transparent;\r\n}\r\nul.topnav li {\r\n  float: left;\r\n}\r\nul.topnav li a {\r\n  display: block;\r\n  color: black;\r\n  text-align: center;\r\n  padding: 14px 16px;\r\n  text-decoration: none;\r\n}\r\nul.topnav li.right {\r\n  float: right;\r\n}\r\nul.topnav li.right:hover {\r\n  background-color: white;\r\n  border-radius: 10%;\r\n}\r\n@media screen and (max-width: 600px) {\r\n  ul.topnav li.right,\r\n  ul.topnav li {\r\n    float: none;\r\n  }\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<ul class=\"topnav\">\r\n  <li>\r\n    <a class=\"active\" href=\"main-app\"><img src=\"../favicon.ico\" [ngStyle]=\"{'max-height':'55px'}\"/></a>\r\n  </li>\r\n  <li *ngIf=\"globals.authorizationLevel > 1\"><a routerLink=\"/users\" class=\"menuFont\"><img src=\"../assets/users.svg\"\r\n                                                                                          [ngStyle]=\"{'max-height':'55px','width': '43px','max-height': '55px','border': '2px solid black','border-radius': '50px'}\"/></a>\r\n  </li>\r\n  <li *ngIf=\"globals.authorizationLevel > 1\"><a routerLink=\"/excel-managment\" class=\"menuFont\"><img src=\"../assets/excel.svg\"\r\n                                                                                          [ngStyle]=\"{'max-height':'55px','width': '43px','max-height': '55px','border': '2px solid black','border-radius': '50px'}\"/></a>\r\n  </li>\r\n  <li *ngIf=\"!authorized\" class=\"right\" style=\"padding : 14px 16px\">\r\n    <button (click)=\"socialSignIn('google')\" class=\"btn btn-primary my-2\">כנס/י דרך חשבון הגוגל שלך</button>\r\n  </li>\r\n  <li *ngIf=\"authorized\" class=\"right\" style=\"padding : 14px 16px\"><img src=\"{{user.image}}\" class=\"profilePicture\">\r\n  </li>\r\n  <li *ngIf=\"authorized\" class=\"right\" style=\"padding : 30px 16px\">{{user.name}} </li>\r\n</ul>\r\n\r\n<router-outlet></router-outlet>\r\n<div class=\"watermark\">\r\n  @JackNathan products\r\n</div>\r\n\r\n<div *ngIf=\"authorized\" class=\"sign-out-btn-position\">\r\n  <button class=\"btn btn-danger\" (click)=\"signOut()\">Sign out</button>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__speaker_service__ = __webpack_require__("../../../../../src/app/speaker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular5_social_login__ = __webpack_require__("../../../../angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular5_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular5_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppComponent = (function () {
    function AppComponent(service, socialAuthService, globals, router) {
        this.service = service;
        this.socialAuthService = socialAuthService;
        this.globals = globals;
        this.router = router;
        this.authorized = false;
    }
    AppComponent.prototype.socialSignIn = function (socialPlatform) {
        var _this = this;
        var socialPlatformProvider;
        if (socialPlatform == "google") {
            socialPlatformProvider = __WEBPACK_IMPORTED_MODULE_2_angular5_social_login__["GoogleLoginProvider"].PROVIDER_ID;
        }
        this.socialAuthService.signIn(socialPlatformProvider).then(function (userData) {
            console.log(socialPlatform + " sign in data : ", userData);
            // Now sign-in with userData
            if (userData != null) {
                _this.globals.authorized = true;
                _this.authorized = true;
                _this.user = userData;
                var user = {
                    email: _this.user.email
                };
                _this.service.getUserAuthorizationLevel(user).subscribe(function (data) {
                    _this.globals.authorizationLevel = parseInt(data.authorisationLevel);
                });
            }
        });
    };
    AppComponent.prototype.signOut = function () {
        this.socialAuthService.signOut();
        this.authorized = false;
        this.globals.authorized = false;
        this.globals.authorizationLevel = 0;
    };
    AppComponent.prototype.ngOnInit = function () {
        console.log(this.router.url);
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__speaker_service__["a" /* SpeakerService */], __WEBPACK_IMPORTED_MODULE_2_angular5_social_login__["AuthService"], __WEBPACK_IMPORTED_MODULE_3__globals__["a" /* Globals */], __WEBPACK_IMPORTED_MODULE_4__angular_router__["a" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export getAuthServiceConfigs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_material_select__ = __webpack_require__("../../../material/esm5/select.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__speaker_service__ = __webpack_require__("../../../../../src/app/speaker.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__ = __webpack_require__("../../../../angular5-social-login/angular5-social-login.umd.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular5_social_login___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_angular5_social_login__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__users_users_component__ = __webpack_require__("../../../../../src/app/users/users.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__main_app_main_app_component__ = __webpack_require__("../../../../../src/app/main-app/main-app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__globals__ = __webpack_require__("../../../../../src/app/globals.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__excel_managment_excel_managment_component__ = __webpack_require__("../../../../../src/app/excel-managment/excel-managment.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__grapecity_spread_sheets_angular__ = __webpack_require__("../../../../@grapecity/spread-sheets-angular/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__grapecity_spread_sheets_angular___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16__grapecity_spread_sheets_angular__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

















// Configs
function getAuthServiceConfigs() {
    var config = new __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__["AuthServiceConfig"]([
        {
            id: __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__["GoogleLoginProvider"].PROVIDER_ID,
            provider: new __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__["GoogleLoginProvider"]("527666316846-q39apovkqlod3fa876o7toecppnohbgs.apps.googleusercontent.com")
        },
    ]);
    return config;
}
var appRoutes = [
    { path: 'users', component: __WEBPACK_IMPORTED_MODULE_10__users_users_component__["a" /* UsersComponent */] },
    { path: 'main-app', component: __WEBPACK_IMPORTED_MODULE_13__main_app_main_app_component__["a" /* MainAppComponent */] },
    { path: 'excel-managment', component: __WEBPACK_IMPORTED_MODULE_15__excel_managment_excel_managment_component__["a" /* ExcelManagmentComponent */] },
    { path: '**', component: __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */] }
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_10__users_users_component__["a" /* UsersComponent */],
                __WEBPACK_IMPORTED_MODULE_13__main_app_main_app_component__["a" /* MainAppComponent */],
                __WEBPACK_IMPORTED_MODULE_15__excel_managment_excel_managment_component__["a" /* ExcelManagmentComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["b" /* MatCardModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_16__grapecity_spread_sheets_angular__["SpreadSheetsModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["e" /* MatInputModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["d" /* MatFormFieldModule */],
                __WEBPACK_IMPORTED_MODULE_11__angular_material__["a" /* MatAutocompleteModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser_animations__["a" /* NoopAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_material_select__["a" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__["SocialLoginModule"],
                __WEBPACK_IMPORTED_MODULE_12__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { onSameUrlNavigation: 'reload' }),
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__speaker_service__["a" /* SpeakerService */],
                {
                    provide: __WEBPACK_IMPORTED_MODULE_9_angular5_social_login__["AuthServiceConfig"],
                    useFactory: getAuthServiceConfigs
                }, __WEBPACK_IMPORTED_MODULE_14__globals__["a" /* Globals */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/excel-managment/excel-managment.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".loadExcelInput{\r\n  border:1px solid darkgray;\r\n  width:95vw;\r\n  margin-top:5px;\r\n  padding:2px 0px 2px 0px;\r\n}\r\n.exportExcel{\r\n  border:1px solid darkgray;\r\n  width:95vw;\r\n  margin-top:5px;\r\n  padding:2px 0px 2px 0px;\r\n}\r\np{\r\n  font-weight: bold\r\n}\r\n.instruction-text{\r\n  font-family: Georgia, serif;\r\nfont-size: 22px;\r\nletter-spacing: 2px;\r\nword-spacing: 2px;\r\ncolor: #000000;\r\nfont-weight: 400;\r\ntext-decoration: none;\r\nfont-style: normal;\r\nfont-variant: normal;\r\ntext-transform: none;\r\ntext-align: right;\r\n}\r\n.tables-name-scrol-section{\r\n  width: 50%;\r\n  height: 480px;\r\n  \r\n}\r\n.scroller-section{\r\n   /*background-color: #DCDCDC;*/\r\n  width: 100%;\r\n  height: 450px;\r\n  overflow: scroll;\r\n}\r\n.mat-checkbox-background{\r\n  background-color: darkgreen !important;\r\n}\r\n::ng-deep .mat-checkbox .mat-checkbox-frame {\r\n  border-color: violet;\r\n}\r\n::ng-deep .mat-checkbox-checked .mat-checkbox-background {\r\n  background-color: darkcyan !important;\r\n}\r\n.title-text{\r\n  font-size: 18px;\r\n}\r\n.buttom-save-button {\r\n  padding: 0;\r\n  border: none;\r\n  font: inherit;\r\n  color: inherit;\r\n  background-color: transparent;\r\n  /* show a hand cursor on hover; some argue that we\r\n  should keep the default arrow cursor for buttons */\r\n  cursor: pointer;\r\n}\r\n.buttom-save-button {\r\n\tbackground-color:darkcyan;\r\n\tborder-radius:28px;\r\n\tborder:1px solid darkcyan;\r\n\tdisplay:inline-block;\r\n\tcursor:pointer;\r\n\tcolor:#ffffff;\r\n\tfont-family:Arial;\r\n\tfont-size:17px;\r\n\tpadding:16px 31px;\r\n\ttext-decoration:none;\r\n\ttext-shadow:0px 1px 0px darkcyan;\r\n}\r\n.buttom-save-button:hover {\r\n\tbackground-color:#5cbf2a;\r\n}\r\n.buttom-save-buttonactive {\r\n\tposition:relative;\r\n\ttop:1px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/excel-managment/excel-managment.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"instruction-text\">\n  <div>א) השורה הראשונה באקסל צריכה להיות שורת העמודות [כלומר: חברה,מחיר,שם מוצר וכו,] </div>\n  <div>ב) צריך ששמות העמודות יהיו זהים בכל טבלה</div>\n  <div>ג) תצתרך לבחור איזה סוג עמודה זו האם היא עמודת טקסט או מספרי [לרוב מספרי ישמש למחיר]</div>\n</section>\n<br><br><br><br>\n\n<mat-card>\n  <section class=\"flex-container\">\n\n    <div class=\"flex-container-element tables-name-scrol-section\">\n      <section class=\"title-text\">הטבלאות שיוצגו</section>\n      <section class=\"scroller-section\">\n        <div *ngFor=\"let tableName of spreadsheetTablesNames\">\n          <mat-form-field>\n            <input matInput [(ngModel)]=\"tableName.name\">\n          </mat-form-field>\n          <mat-checkbox class=\"example-margin\" [(ngModel)]=\"tableName.checked\"></mat-checkbox>\n        </div>\n      </section>\n    </div>\n    <div class=\"flex-container-element tables-name-scrol-section\">\n      <section class=\"title-text\">העמודות שיוצגו</section>\n      <section class=\"scroller-section\">\n        <div *ngFor=\"let column of spreadsheetColumnsNames\">\n          <mat-form-field>\n            <input matInput [(ngModel)]=\"column.name\">\n          </mat-form-field>\n          <mat-form-field style=\"max-width: 120px\">\n              <mat-label>עמודת טקסט או מספר</mat-label>\n              <mat-select [(value)]=\"column.type_kind\">\n                <mat-option value=\"string\">טקסט</mat-option>\n                <mat-option value=\"number\">מספרי</mat-option>\n              </mat-select>\n            </mat-form-field>\n          \n          <mat-checkbox class=\"example-margin\" [(ngModel)]=\"column.checked\"></mat-checkbox>\n        </div>\n      </section>\n    </div>\n\n    <!--div class=\"flex-container-element tables-name-scrol-section\" >\n    <section class=\"title-text\">העמודות שיוצגו</section>\n\n      \n    <section class=\"scroller-section\">\n      <div *ngFor=\"let column of spreadsheetColumnsNames\">\n        <mat-form-field style=\"max-width: 100px\">\n          <input matInput [(ngModel)]=\"column.name\">\n        </mat-form-field>\n        <mat-form-field style=\"max-width: 120px\">\n            <mat-label>עמודת טקסט או מספר</mat-label>\n            <mat-select [(value)]=\"column.type_kind\">\n              <mat-option value=\"number\">מספרי</mat-option>\n              <mat-option value=\"string\">טקסט</mat-option>\n            </mat-select>\n          </mat-form-field>\n        <mat-checkbox class=\"example-margin\" [(ngModel)]=\"column.public_display\"> <mat-label>לכולם</mat-label></mat-checkbox>\n        <mat-checkbox class=\"example-margin\" [(ngModel)]=\"column.vip_display\"><mat-label>ל-vip</mat-label></mat-checkbox>\n      </div>\n    </section>\n  </div-->\n  </section>\n  <button class=\"buttom-save-button\" (click)=\"updateTableStructure()\" >עדכן טבלאות</button>\n</mat-card>"

/***/ }),

/***/ "../../../../../src/app/excel-managment/excel-managment.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExcelManagmentComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grapecity_spread_sheets_charts__ = __webpack_require__("../../../../@grapecity/spread-sheets-charts/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__grapecity_spread_sheets_charts___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__grapecity_spread_sheets_charts__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__speaker_service__ = __webpack_require__("../../../../../src/app/speaker.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExcelManagmentComponent = (function () {
    function ExcelManagmentComponent(service) {
        this.service = service;
        this.spreadsheetTablesNames = [];
        this.spreadsheetColumnsNames = [];
    }
    ExcelManagmentComponent.prototype.updateTableStructure = function () {
        var value = {
            tables: this.spreadsheetTablesNames,
            columns: this.spreadsheetColumnsNames
        };
        this.service.updateTablesAndColumnsStructure(value).subscribe(function (data) {
        });
    };
    ExcelManagmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getSpreadsheetTablesName().subscribe(function (data) {
            for (var _i = 0, _a = data.tables_names; _i < _a.length; _i++) {
                var table_name = _a[_i];
                _this.spreadsheetTablesNames.push({ name: table_name, checked: true });
            }
        });
        this.service.getSpreadsheetColumnsName().subscribe(function (data) {
            for (var _i = 0, _a = data.columns_names; _i < _a.length; _i++) {
                var column_name = _a[_i];
                _this.spreadsheetColumnsNames.push({ name: column_name, checked: true, type_kind: 'string' });
            }
        });
    };
    ExcelManagmentComponent.prototype.getViewTable = function () {
        var _this = this;
        this.service.getSpreadsheetTablesName().subscribe(function (data) {
            for (var _i = 0, _a = data.tables_names; _i < _a.length; _i++) {
                var table_name = _a[_i];
                _this.spreadsheetTablesNames.push({ name: table_name, checked: true });
            }
        });
        this.service.getSpreadsheetColumnsName().subscribe(function (data) {
            for (var _i = 0, _a = data.columns_names; _i < _a.length; _i++) {
                var column_name = _a[_i];
                _this.spreadsheetColumnsNames.push({ name: column_name, public_display: true, vip_display: true, type_kind: 'string' });
            }
        });
    };
    ExcelManagmentComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-excel-managment',
            template: __webpack_require__("../../../../../src/app/excel-managment/excel-managment.component.html"),
            styles: [__webpack_require__("../../../../../src/app/excel-managment/excel-managment.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__speaker_service__["a" /* SpeakerService */]])
    ], ExcelManagmentComponent);
    return ExcelManagmentComponent;
}());



/***/ }),

/***/ "../../../../../src/app/globals.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Globals; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Globals = (function () {
    function Globals() {
        this.languageSelected = 'hebrew';
        this.languages = [
            {
                value: 'hebrew',
                viewValue: 'עברית'
            }, {
                value: 'english',
                viewValue: 'English'
            }, {
                value: 'russian',
                viewValue: 'Р усский'
            }, {
                value: 'franch',
                viewValue: 'Francais'
            }
        ];
        this.authorizationLevel = 0;
        this.index = -1;
        this.filteredObj = function (str) {
            this.dialogTextes.find(function (item, i) {
                if (item.name === str) {
                    this.index = i;
                    return i;
                }
            });
        };
    }
    Globals = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], Globals);
    return Globals;
}());



/***/ }),

/***/ "../../../../../src/app/main-app/main-app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".watermark{\r\n  position:fixed;\r\n  bottom:5px;\r\n  right:5px;\r\n  opacity:0.5;\r\n  z-index:99;\r\n  color:black;\r\n  font-size: 8px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main-app/main-app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"text-align:center\">\n  <a href=\"http://speakerphone.co.il/\"> <img width=\"300\" alt=\"Angular Logo\" src=\"sfLogo.png\"></a>\n</div>\n\n<form class=\"center\">\n    <div *ngFor=\"let col of chosenColumns\">\n        <mat-form-field [ngStyle]=\"{'width':'100%'}\">\n            <mat-select placeholder=\"{{col.key}}\" [(ngModel)]=\"col.value\" name=\"{{col.key}}\"\n            (selectionChange)=\"getNextData(col.key,col.value)\">\n            <mat-option *ngFor=\"let prmSelec of col.option\" [value]=\"prmSelec\">\n              &nbsp;&nbsp;&nbsp;&nbsp; {{prmSelec}}\n            </mat-option>\n          </mat-select>\n        </mat-form-field>\n\n    </div>\n\n\n  <ul>\n    <li *ngFor=\"let dt of dataList\">\n      {{dt}} &nbsp;&nbsp; {{data[0][dt]}}\n    </li>\n  </ul>\n</form>"

/***/ }),

/***/ "../../../../../src/app/main-app/main-app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainAppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__speaker_service__ = __webpack_require__("../../../../../src/app/speaker.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainAppComponent = (function () {
    function MainAppComponent(service) {
        this.service = service;
        this.authorized = false;
        this.chosenColumns = [];
        this.selections = [];
        this.getChosenColumns();
        this.getNextData(undefined, undefined);
    }
    MainAppComponent.prototype.ngOnInit = function () {
    };
    MainAppComponent.prototype.getNextData = function (col, val) {
        var _this = this;
        var selectionsContains = function (selections, col) {
            var isExist = false;
            for (var i in selections) {
                if (Object.keys(selections[i])[0] === col.key) {
                    isExist = true;
                    break;
                }
            }
            return isExist;
        };
        if (col !== undefined && val !== undefined) {
            var slct = {};
            slct[col] = val;
            var existAtIndex = -1;
            for (var i in this.selections) {
                if (Object.keys(this.selections[i])[0] === col) {
                    existAtIndex = parseInt(i);
                    break;
                }
            }
            if (existAtIndex > -1) {
                this.selections[existAtIndex][col] = val;
                this.selections.splice((existAtIndex + 1), this.selections.length);
                // Remove at key
                for (var iCC in this.chosenColumns) {
                    if (!selectionsContains(this.selections, this.chosenColumns[iCC])) {
                        this.chosenColumns[iCC].options = [];
                    }
                }
            }
            else {
                this.selections.push(slct);
            }
        }
        var value = {
            selections: this.selections,
            chosenColumns: this.chosenColumns,
            currentCol: col
        };
        this.service.getNextData(value).subscribe(function (data) {
            // When Result Delete unused Property
            if (Object.keys(data.data[0]).length > _this.chosenColumns.length) {
                _this.data = data.data;
                for (var _i = 0, _a = _this.chosenColumns; _i < _a.length; _i++) {
                    var row = _a[_i];
                    delete _this.data[0][row.key];
                }
                delete _this.data[0]['id'];
                _this.dataList = Object.getOwnPropertyNames(_this.data[0]);
            }
            for (var i in _this.chosenColumns) {
                if (_this.chosenColumns[i].key === Object.keys(data.data[0])[0]) {
                    _this.chosenColumns[i].option = [];
                    for (var _b = 0, _c = data.data; _b < _c.length; _b++) {
                        var opt = _c[_b];
                        _this.chosenColumns[i].option.push(opt[_this.chosenColumns[i].key]);
                    }
                }
            }
        });
    };
    MainAppComponent.prototype.getChosenColumns = function () {
        var _this = this;
        this.service.getChosenColumns().subscribe(function (data) {
            for (var _i = 0, _a = data.data; _i < _a.length; _i++) {
                var dt = _a[_i];
                var col = {
                    key: dt.name,
                    option: [],
                    value: ""
                };
                _this.chosenColumns.push(col);
            }
        });
    };
    MainAppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-main-app',
            template: __webpack_require__("../../../../../src/app/main-app/main-app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/main-app/main-app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__speaker_service__["a" /* SpeakerService */]])
    ], MainAppComponent);
    return MainAppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/speaker.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SpeakerService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__ = __webpack_require__("../../../../rxjs/_esm5/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__("../../../../rxjs/_esm5/Rx.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SpeakerService = (function () {
    function SpeakerService(http, Http1) {
        this.http = http;
        this.Http1 = Http1;
        this.serveIpAndPortUrl = 'http://127.0.0.1:5611';
        this.getCorrectionsURL = this.serveIpAndPortUrl + '/api/get_corrections';
        this.getUserAuthorizationLevelUrl = this.serveIpAndPortUrl + '/api/get_user_authorization_level';
        this.getUsersByPrefixUrl = this.serveIpAndPortUrl + '/api/get_users_by_prefix';
        this.updateAuthorisationLavelUrl = this.serveIpAndPortUrl + '/api/update_user_authorization_lavel';
        this.getSpreadsheetTablesNameUrl = this.serveIpAndPortUrl + '/api/get_spreadsheet_tables_names';
        this.getSpreadsheetColumnsNameUrl = this.serveIpAndPortUrl + '/api/get_spreadsheet_columns_names';
        this.updateTablesAndColumnsStructureUrl = this.serveIpAndPortUrl + '/api/update_tables_and_columns_structures';
        this.getChosenColumnsUrl = this.serveIpAndPortUrl + '/api/get_chosen_columns';
        this.getPrimarySelectionUrl = this.serveIpAndPortUrl + '/api/get_primary_selection';
        this.getNextDataUrl = this.serveIpAndPortUrl + '/api/get_next_data';
    }
    SpeakerService.prototype.getNextData = function (data) {
        return this.Http1.post(this.getNextDataUrl, data).map(function (data) {
            return data.json();
        });
    };
    SpeakerService.prototype.getChosenColumns = function () {
        return this.Http1.get(this.getChosenColumnsUrl).map(function (data) {
            return data.json();
        });
    };
    SpeakerService.prototype.updateTablesAndColumnsStructure = function (value) {
        return this.Http1.post(this.updateTablesAndColumnsStructureUrl, value).map(function (data) {
            return data.json();
        });
    };
    SpeakerService.prototype.getSpreadsheetColumnsName = function () {
        return this.Http1.get(this.getSpreadsheetColumnsNameUrl).map(function (data) {
            return data.json();
        });
    };
    SpeakerService.prototype.getSpreadsheetTablesName = function () {
        return this.Http1.get(this.getSpreadsheetTablesNameUrl).map(function (data) {
            return data.json();
        });
    };
    SpeakerService.prototype.getUserAuthorizationLevel = function (value) {
        return this.Http1.post(this.getUserAuthorizationLevelUrl, value).map(function (data) {
            return data.json();
        });
    };
    SpeakerService.prototype.getUsersByPrefix = function (email) {
        return this.Http1.post(this.getUsersByPrefixUrl, email).map(function (data) {
            return data.json();
        });
    };
    SpeakerService.prototype.updateAuthorisationLavel = function (value) {
        return this.Http1.post(this.updateAuthorisationLavelUrl, value).map(function (data) {
            return data.json();
        });
    };
    SpeakerService.prototype.getTripOfEvent = function (eventIndexes) {
        return this.Http1.post(this.getCorrectionsURL, eventIndexes).map(function (data) {
            return data.json();
        });
    };
    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    SpeakerService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_observable_of__["a" /* of */])(result);
        };
    };
    SpeakerService.prototype.dateEquals = function (fisrtDate, secondDate) {
        if ((fisrtDate.getUTCFullYear() == secondDate.getUTCFullYear()) &&
            (fisrtDate.getUTCMonth() == secondDate.getUTCMonth()) &&
            (fisrtDate.getDay() == secondDate.getDay()) &&
            (fisrtDate.getUTCHours() == secondDate.getUTCHours()) &&
            (fisrtDate.getUTCMinutes() == secondDate.getUTCMinutes()) &&
            (fisrtDate.getUTCSeconds() == secondDate.getUTCSeconds())) {
            return true;
        }
        else {
            return false;
        }
    };
    SpeakerService.prototype.dateSmaller = function (firstDate, secondDate) {
        if ((firstDate.getUTCFullYear() < secondDate.getUTCFullYear()) ||
            ((firstDate.getUTCFullYear() == secondDate.getUTCFullYear()) && (firstDate.getUTCMonth() < secondDate.getUTCMonth())) ||
            ((firstDate.getUTCFullYear() == secondDate.getUTCFullYear()) && (firstDate.getUTCMonth() == secondDate.getUTCMonth()) && (firstDate.getDay() < secondDate.getDay())) ||
            ((firstDate.getUTCFullYear() == secondDate.getUTCFullYear()) && (firstDate.getUTCMonth() == secondDate.getUTCMonth()) && (firstDate.getDay() == secondDate.getDay()) && (firstDate.getUTCHours() < secondDate.getUTCHours())) ||
            ((firstDate.getUTCFullYear() == secondDate.getUTCFullYear()) && (firstDate.getUTCMonth() == secondDate.getUTCMonth()) && (firstDate.getDay() == secondDate.getDay()) && (firstDate.getUTCHours() == secondDate.getUTCHours()) && (firstDate.getUTCMinutes() < secondDate.getUTCMinutes())) ||
            ((firstDate.getUTCFullYear() == secondDate.getUTCFullYear()) && (firstDate.getUTCMonth() == secondDate.getUTCMonth()) && (firstDate.getDay() == secondDate.getDay()) && (firstDate.getUTCHours() == secondDate.getUTCHours()) && (firstDate.getUTCMinutes() == secondDate.getUTCMinutes()) && (firstDate.getUTCSeconds() < secondDate.getUTCSeconds()))) {
            return true;
        }
        else {
            return false;
        }
    };
    SpeakerService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
    ], SpeakerService);
    return SpeakerService;
}());



/***/ }),

/***/ "../../../../../src/app/users/users.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".lavelSection{\r\n  max-width: 50px;\r\n}\r\n\r\n.emsilSection{\r\n  min-width: 250px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/users/users.component.html":
/***/ (function(module, exports) {

module.exports = "<section class=\"center\" style=\"min-width: 1000px\">\n  <mat-form-field class=\"trip_id_size\">\n    <input matInput placeholder=\"הכנס מייל משתמש\" [(ngModel)]=\"userPrefix\"\n           (keydown)=\"keyDownFunction($event)\">\n  </mat-form-field>\n\n\n  <div *ngFor=\"let user of suggestedUsers\">\n    <mat-form-field class=\"emsilSection\">\n      <input matInput [(ngModel)]=\"user.email\">\n    </mat-form-field>\n    <mat-form-field class=\"lavelSection\">\n      <input matInput [(ngModel)]=\"user.authorisation_level\"\n             (ngModelChange)=\"authorisationLavelChange(user.id,user.authorisation_level)\" type=\"number\">\n    </mat-form-field>\n  </div>\n"

/***/ }),

/***/ "../../../../../src/app/users/users.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__speaker_service__ = __webpack_require__("../../../../../src/app/speaker.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UsersComponent = (function () {
    function UsersComponent(service) {
        this.service = service;
        this.userPrefix = "";
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent.prototype.keyDownFunction = function (evt) {
        var _this = this;
        if (this.userPrefix !== "") {
            var value = {
                email: this.userPrefix
            };
            this.service.getUsersByPrefix(value).subscribe(function (data) {
                _this.suggestedUsers = data.users;
            });
        }
    };
    UsersComponent.prototype.authorisationLavelChange = function (id, lavel) {
        var _this = this;
        var value = {
            id: id,
            lavel: lavel
        };
        this.service.updateAuthorisationLavel(value).subscribe(function (data) {
            _this.suggestedUsers = data.users;
        });
    };
    UsersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-users',
            template: __webpack_require__("../../../../../src/app/users/users.component.html"),
            styles: [__webpack_require__("../../../../../src/app/users/users.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__speaker_service__["a" /* SpeakerService */]])
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map