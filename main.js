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
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/admin-panel/admin-panel.component.css":
/*!*******************************************************!*\
  !*** ./src/app/admin-panel/admin-panel.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".admin-panel__container{\r\n  align-items: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  margin: 0 auto;\r\n  top: 95px;\r\n  position: relative;\r\n  width: 95%;\r\n}\r\n\r\n.admin-panel__dashboard-button_on{\r\n  background-color: #f1f1f1;\r\n  color: #000;\r\n  border: none;\r\n  border-radius: 15px;\r\n  outline: none;\r\n  padding: 15px 20px;\r\n}\r\n\r\n.admin-panel__dashboard-button_on::after{\r\n  content: 'Toggle light theme';\r\n}\r\n\r\n.admin-panel__dashboard-button_off{\r\n  background-color: #000;\r\n  color: #fff;\r\n  border: none;\r\n  border-radius: 15px;\r\n  outline: none;\r\n  padding: 15px 20px;\r\n}\r\n\r\n.admin-panel__dashboard-button_off::after{\r\n  content: 'Toggle dark theme';\r\n}\r\n\r\n.admin-panel__categories-button_on{\r\n  background-color: #2c4f78;\r\n  border: none;\r\n  border-radius: 15px;\r\n  outline: none;\r\n  padding: 15px 20px;\r\n}\r\n\r\n.admin-panel__categories-button_on::after{\r\n  content: 'Toggle categories off';\r\n}\r\n\r\n.admin-panel__categories-button_off{\r\n  background-color: #782f32;\r\n  border: none;\r\n  border-radius: 15px;\r\n  outline: none;\r\n  padding: 15px 20px;\r\n}\r\n\r\n.admin-panel__categories-button_off::after{\r\n  content: 'Toggle log in on';\r\n}\r\n\r\n.admin-panel__logIn-button_on{\r\n  background-color: #2c4f78;\r\n  border: none;\r\n  border-radius: 15px;\r\n  outline: none;\r\n  padding: 15px 20px;\r\n}\r\n\r\n.admin-panel__logIn-button_on::after{\r\n  content: 'Toggle log in off';\r\n}\r\n\r\n.admin-panel__logIn-button_off{\r\n  background-color: #782f32;\r\n  border: none;\r\n  border-radius: 15px;\r\n  outline: none;\r\n  padding: 15px 20px;\r\n}\r\n\r\n.admin-panel__logIn-button_off::after{\r\n  content: 'Toggle log in on';\r\n}\r\n"

/***/ }),

/***/ "./src/app/admin-panel/admin-panel.component.html":
/*!********************************************************!*\
  !*** ./src/app/admin-panel/admin-panel.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"admin-panel__container\">\n  <img src=\"{{userInfo.logo}}\">\n  <h1>{{userInfo.username}}</h1>\n  <h2>{{userInfo.id}}</h2>\n  <button class=\"admin-panel__dashboard-button_{{toggleTheme}}\" (click)=\"toggleThemeColor()\"></button>\n  <button class=\"admin-panel__categories-button_{{toggleCategories}}\" (click)=\"toggleButton('categories')\"></button>\n  <button class=\"admin-panel__logIn-button_{{toggleLogIn}}\" (click)=\"toggleButton('logIn')\">Toggle log in view</button>\n</div>\n"

/***/ }),

/***/ "./src/app/admin-panel/admin-panel.component.ts":
/*!******************************************************!*\
  !*** ./src/app/admin-panel/admin-panel.component.ts ***!
  \******************************************************/
/*! exports provided: AdminPanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminPanelComponent", function() { return AdminPanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_user_info__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/user-info */ "./src/app/services/user-info.ts");
/* harmony import */ var _services_theme_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/theme-info */ "./src/app/services/theme-info.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminPanelComponent = /** @class */ (function () {
    function AdminPanelComponent(router) {
        this.router = router;
        this.userInfo = _services_user_info__WEBPACK_IMPORTED_MODULE_1__["USERINFO"];
    }
    AdminPanelComponent.prototype.toggleThemeColor = function () {
        if (_services_theme_info__WEBPACK_IMPORTED_MODULE_2__["THEME"].color === 'light') {
            _services_theme_info__WEBPACK_IMPORTED_MODULE_2__["THEME"].color = 'dark';
            this.toggleTheme = 'on';
        }
        else {
            _services_theme_info__WEBPACK_IMPORTED_MODULE_2__["THEME"].color = 'light';
            this.toggleTheme = 'off';
        }
    };
    AdminPanelComponent.prototype.toggleButton = function (button) {
        if (button === 'categories') {
            _services_theme_info__WEBPACK_IMPORTED_MODULE_2__["THEME"].categories = !_services_theme_info__WEBPACK_IMPORTED_MODULE_2__["THEME"].categories;
            if (this.toggleCategories === 'off') {
                this.toggleCategories = 'on';
            }
            else {
                this.toggleCategories = 'off';
            }
        }
        if (button === 'logIn') {
            _services_theme_info__WEBPACK_IMPORTED_MODULE_2__["THEME"].logIn = !_services_theme_info__WEBPACK_IMPORTED_MODULE_2__["THEME"].logIn;
            if (this.toggleLogIn === 'off') {
                this.toggleLogIn = 'on';
            }
            else {
                this.toggleLogIn = 'off';
            }
        }
    };
    AdminPanelComponent.prototype.ngOnInit = function () {
        this.toggleTheme = 'off';
        this.toggleCategories = 'off';
        this.toggleLogIn = 'off';
        if (this.userInfo.rights !== 'admin') {
            this.router.navigate(['/']);
        }
    };
    AdminPanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin-panel',
            template: __webpack_require__(/*! ./admin-panel.component.html */ "./src/app/admin-panel/admin-panel.component.html"),
            styles: [__webpack_require__(/*! ./admin-panel.component.css */ "./src/app/admin-panel/admin-panel.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], AdminPanelComponent);
    return AdminPanelComponent;
}());



/***/ }),

/***/ "./src/app/app-dashboard/app-dashboard.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/app-dashboard/app-dashboard.module.ts ***!
  \*******************************************************/
/*! exports provided: AppDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppDashboardModule", function() { return AppDashboardModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _app_app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../app/app.component */ "./src/app/app/app.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/app-dashboard/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppDashboardModule = /** @class */ (function () {
    function AppDashboardModule() {
    }
    AppDashboardModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"]
            ],
            exports: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]],
            declarations: [_app_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"]]
        })
    ], AppDashboardModule);
    return AppDashboardModule;
}());



/***/ }),

/***/ "./src/app/app-dashboard/dashboard/dashboard.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/app-dashboard/dashboard/dashboard.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "main{\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  justify-content: space-between;\r\n  margin: 0 auto;\r\n  top: 95px;\r\n  position: relative;\r\n  width: 95%;\r\n}\r\n\r\n.dashboard_light{\r\n  color: #000;\r\n}\r\n\r\n.dashboard_dark{\r\n  color: #fff;\r\n}\r\n\r\n.dashboard__app__container{\r\n  display: flex;\r\n  flex-basis: 25%;\r\n  margin: 0 auto;\r\n  justify-content: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app-dashboard/dashboard/dashboard.component.html":
/*!******************************************************************!*\
  !*** ./src/app/app-dashboard/dashboard/dashboard.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"dashboard_{{theme.color}}\">\n  <div *ngFor=\"let app of this.getInfo()\" class=\"dashboard__app__container\">\n    <app-app [app]=\"app\"></app-app>\n  </div>\n</main>\n"

/***/ }),

/***/ "./src/app/app-dashboard/dashboard/dashboard.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/app-dashboard/dashboard/dashboard.component.ts ***!
  \****************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_get_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/get-data.service */ "./src/app/services/get-data.service.ts");
/* harmony import */ var _services_apps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/apps */ "./src/app/services/apps.ts");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_theme_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/theme-info */ "./src/app/services/theme-info.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(data, auth) {
        this.data = data;
        this.auth = auth;
        this.apps = _services_apps__WEBPACK_IMPORTED_MODULE_2__["APPS"];
        this.theme = _services_theme_info__WEBPACK_IMPORTED_MODULE_4__["THEME"];
    }
    DashboardComponent.prototype.getInfo = function () {
        return this.apps;
    };
    DashboardComponent.prototype.ngOnInit = function () {
        this.auth.appsInfoCheck();
        if (this.auth.getLocalToken()) {
            this.auth.localTokenFetch();
        }
        else {
            this.auth.remoteTokenFetch();
        }
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/app-dashboard/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/app-dashboard/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_services_get_data_service__WEBPACK_IMPORTED_MODULE_1__["GetDataService"],
            _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-dashboard/dashboard/dashboard.component */ "./src/app/app-dashboard/dashboard/dashboard.component.ts");
/* harmony import */ var _categories_categories_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./categories/categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _modal_window_modal_window_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal-window/modal-window.component */ "./src/app/modal-window/modal-window.component.ts");
/* harmony import */ var _search_dashboard_search_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./search-dashboard/search-dashboard.component */ "./src/app/search-dashboard/search-dashboard.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin-panel/admin-panel.component */ "./src/app/admin-panel/admin-panel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var appRoutes = [
    { path: '', component: _app_dashboard_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'categories', component: _categories_categories_component__WEBPACK_IMPORTED_MODULE_4__["CategoriesComponent"], pathMatch: 'prefix' },
    { path: 'app/:id', component: _modal_window_modal_window_component__WEBPACK_IMPORTED_MODULE_5__["ModalWindowComponent"] },
    { path: 'search/:id', component: _search_dashboard_search_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["SearchDashboardComponent"] },
    { path: 'auth', component: _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"] },
    { path: 'admin/panel', component: _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_8__["AdminPanelComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "app-root{\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\r\n<router-outlet></router-outlet>\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _header_header_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.module */ "./src/app/header/header.module.ts");
/* harmony import */ var _app_dashboard_app_dashboard_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-dashboard/app-dashboard.module */ "./src/app/app-dashboard/app-dashboard.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _categories_categories_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./categories/categories.module */ "./src/app/categories/categories.module.ts");
/* harmony import */ var _modal_window_modal_window_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modal-window/modal-window.component */ "./src/app/modal-window/modal-window.component.ts");
/* harmony import */ var _search_dashboard_search_dashboard_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./search-dashboard/search-dashboard.component */ "./src/app/search-dashboard/search-dashboard.component.ts");
/* harmony import */ var _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin-panel/admin-panel.component */ "./src/app/admin-panel/admin-panel.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _modal_window_modal_window_component__WEBPACK_IMPORTED_MODULE_8__["ModalWindowComponent"],
                _search_dashboard_search_dashboard_component__WEBPACK_IMPORTED_MODULE_9__["SearchDashboardComponent"],
                _admin_panel_admin_panel_component__WEBPACK_IMPORTED_MODULE_10__["AdminPanelComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                _header_header_module__WEBPACK_IMPORTED_MODULE_3__["HeaderModule"],
                _app_dashboard_app_dashboard_module__WEBPACK_IMPORTED_MODULE_4__["AppDashboardModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_6__["AppRoutingModule"],
                _categories_categories_module__WEBPACK_IMPORTED_MODULE_7__["CategoriesModule"]
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app/app.component.css":
/*!***************************************!*\
  !*** ./src/app/app/app.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app__name{\r\n  font-size: 26px;\r\n  font-weight: 400;\r\n  margin: 5px auto 0 auto;\r\n}\r\n\r\n.app__dev{\r\n  font-size: 22px;\r\n  font-weight: 400;\r\n  margin: 0 auto;\r\n}\r\n\r\n.app__ratings{\r\n  font-size: 18px;\r\n  font-weight: 400;\r\n}\r\n\r\n.app__verified{\r\n  color: #25633d;\r\n}\r\n\r\n.app__logo{\r\n  height: 60%;\r\n  margin: 0 auto;\r\n  width: 60%;\r\n}\r\n\r\n.app__last-row{\r\n  display: flex;\r\n  justify-content: space-between;\r\n}\r\n\r\n.app__container_light{\r\n  background-color: #f1f1f1;\r\n  border: 2px solid #24292e;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  height: 250px;\r\n  padding: 15px 10px;\r\n  margin: 0 auto 10px auto;\r\n  width: 250px;\r\n}\r\n\r\n.app__container_dark{\r\n  background-color: #24292e;\r\n  border: 2px solid #fff;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  height: 250px;\r\n  padding: 15px 10px;\r\n  margin: 0 auto 10px auto;\r\n  width: 250px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app/app.component.html":
/*!****************************************!*\
  !*** ./src/app/app/app.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app__container_{{theme.color}}\" (click)=\"toggleModal()\">\r\n  <img src=\"../../../assets/{{app.logo}}\" class='app__logo'/>\r\n  <h2 class=\"app__name\">{{app.app_name}}</h2>\r\n  <h3 class=\"app__dev\">{{app.publisher_name}}</h3>\r\n  <div class=\"app__last-row\">\r\n    <h4 class=\"app__ratings\">{{app.all_rating}}/5</h4>\r\n    <h4 class=\"app__verified\" *ngIf=\"app.top_developer\">Verified</h4>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/app/app.component.ts":
/*!**************************************!*\
  !*** ./src/app/app/app.component.ts ***!
  \**************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/app */ "./src/app/services/app.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_theme_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/theme-info */ "./src/app/services/theme-info.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        this.router = router;
        this.theme = _services_theme_info__WEBPACK_IMPORTED_MODULE_3__["THEME"];
    }
    AppComponent.prototype.toggleModal = function () {
        this.router.navigate(['/app/' + this.app.id]);
    };
    AppComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _services_app__WEBPACK_IMPORTED_MODULE_1__["App"])
    ], AppComponent.prototype, "app", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-app',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/categories/categories-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/categories/categories-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CategoriesRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesRoutingModule", function() { return CategoriesRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var categoriesRoutes = [
    { path: 'categories/:category', component: _categories_component__WEBPACK_IMPORTED_MODULE_2__["CategoriesComponent"] }
];
var CategoriesRoutingModule = /** @class */ (function () {
    function CategoriesRoutingModule() {
    }
    CategoriesRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(categoriesRoutes)
            ],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]],
            declarations: []
        })
    ], CategoriesRoutingModule);
    return CategoriesRoutingModule;
}());



/***/ }),

/***/ "./src/app/categories/categories.component.css":
/*!*****************************************************!*\
  !*** ./src/app/categories/categories.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".categories{\r\n  top:95px;\r\n  position: relative;\r\n}\r\n\r\n.categories__button{\r\n  background: none;\r\n  border: none;\r\n  padding: 5px 10px;\r\n  outline: none;\r\n}\r\n\r\n.categories__container_null{\r\n  align-items: center;\r\n  background: #f1f1f1;\r\n  display: flex;\r\n  justify-content: center;\r\n  height: 500px;\r\n  width: 100%;\r\n}\r\n\r\n.categories__add__panel{\r\n  display: flex;\r\n}\r\n\r\n.categories__add__panel a{\r\n  color: #25633d;\r\n  margin: 0 5px;\r\n  padding: 5px 10px;\r\n  text-decoration: none;\r\n}\r\n\r\n.categories__add__panel__container{\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/categories/categories.component.html":
/*!******************************************************!*\
  !*** ./src/app/categories/categories.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"categories\">\n  <div class=\"categories__panel\">\n    <div class=\"categories__add__panel__container\">\n      <button (click)=\"toggleCategoriesMenu()\" class=\"categories__button\">Choose any category {{symbol}}</button>\n      <div class=\"categories__add__panel\" *ngIf=\"menuIsOpen\">\n        <a routerLink=\"/categories/kids\">For kids</a>\n        <a routerLink=\"/categories/adults\">For adults</a>\n        <a routerLink=\"/categories/multiplayer\">Multi player games</a>\n      </div>\n    </div>\n    <main>\n      <div *ngIf=\"!category\" class=\"categories__container_null\">Choose your category</div>\n      <div *ngFor=\"let app of filteredArr\">\n        <span *ngIf=\"error\">{{error}}</span>\n        <app-app [app]=\"app\"></app-app>\n      </div>\n    </main>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/categories/categories.component.ts":
/*!****************************************************!*\
  !*** ./src/app/categories/categories.component.ts ***!
  \****************************************************/
/*! exports provided: CategoriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesComponent", function() { return CategoriesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_get_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/get-data.service */ "./src/app/services/get-data.service.ts");
/* harmony import */ var _services_apps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/apps */ "./src/app/services/apps.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriesComponent = /** @class */ (function () {
    function CategoriesComponent(data, route) {
        this.data = data;
        this.route = route;
        this.apps = _services_apps__WEBPACK_IMPORTED_MODULE_2__["APPS"];
    }
    CategoriesComponent.prototype.toggleCategoriesMenu = function () {
        this.menuIsOpen = !this.menuIsOpen;
        if (this.menuIsOpen) {
            this.symbol = '◄';
        }
        else {
            this.symbol = '►';
        }
    };
    CategoriesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.menuIsOpen = false;
        this.symbol = '►';
        if (!_services_apps__WEBPACK_IMPORTED_MODULE_2__["APPS"].length) {
            this.data.fetchInfo().subscribe(function (res) {
                _services_apps__WEBPACK_IMPORTED_MODULE_2__["APPS"].push.apply(_services_apps__WEBPACK_IMPORTED_MODULE_2__["APPS"], res);
                _this.route.params.subscribe(function (params) {
                    _this.category = params['category'];
                    _this.filteredArr = _this.data.filterData(_this.category, _this.apps);
                });
            });
        }
        else {
            this.route.params.subscribe(function (params) {
                _this.category = params['category'];
                try {
                    _this.filteredArr = _this.data.filterData(_this.category, _this.apps);
                }
                catch (e) {
                    if (e.message === 'input problems') {
                        _this.error = e.message;
                    }
                }
            });
        }
    };
    CategoriesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-categories',
            template: __webpack_require__(/*! ./categories.component.html */ "./src/app/categories/categories.component.html"),
            styles: [__webpack_require__(/*! ./categories.component.css */ "./src/app/categories/categories.component.css")]
        }),
        __metadata("design:paramtypes", [_services_get_data_service__WEBPACK_IMPORTED_MODULE_1__["GetDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], CategoriesComponent);
    return CategoriesComponent;
}());



/***/ }),

/***/ "./src/app/categories/categories.module.ts":
/*!*************************************************!*\
  !*** ./src/app/categories/categories.module.ts ***!
  \*************************************************/
/*! exports provided: CategoriesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesModule", function() { return CategoriesModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _categories_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./categories.component */ "./src/app/categories/categories.component.ts");
/* harmony import */ var _categories_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./categories-routing.module */ "./src/app/categories/categories-routing.module.ts");
/* harmony import */ var _app_dashboard_app_dashboard_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-dashboard/app-dashboard.module */ "./src/app/app-dashboard/app-dashboard.module.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var CategoriesModule = /** @class */ (function () {
    function CategoriesModule() {
    }
    CategoriesModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _categories_routing_module__WEBPACK_IMPORTED_MODULE_3__["CategoriesRoutingModule"],
                _app_dashboard_app_dashboard_module__WEBPACK_IMPORTED_MODULE_4__["AppDashboardModule"]
            ],
            exports: [_categories_component__WEBPACK_IMPORTED_MODULE_2__["CategoriesComponent"]],
            declarations: [_categories_component__WEBPACK_IMPORTED_MODULE_2__["CategoriesComponent"]]
        })
    ], CategoriesModule);
    return CategoriesModule;
}());



/***/ }),

/***/ "./src/app/constants.ts":
/*!******************************!*\
  !*** ./src/app/constants.ts ***!
  \******************************/
/*! exports provided: KEYBOARD, CLIENT_ID, REDIRECT_URI */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KEYBOARD", function() { return KEYBOARD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLIENT_ID", function() { return CLIENT_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REDIRECT_URI", function() { return REDIRECT_URI; });
var KEYBOARD = {
    ENTER: 13
};
var CLIENT_ID = 'e538cfcbe2e6441ca9575cc7e7873b62';
var REDIRECT_URI = 'http://192.168.1.51:4200';


/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "header{\r\n  align-items: center;\r\n  box-shadow: 1px 1px 3px 2px rgba(0,0,0,0.7);\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: space-between;\r\n  height: 80px;\r\n  position: fixed;\r\n  width: 100%;\r\n  z-index: 2;\r\n}\r\n\r\n.header_light{\r\n  background-color: #f1f1f1;\r\n}\r\n\r\n.header_dark{\r\n  background-color: #24292e;\r\n}\r\n\r\n.logo{\r\n  margin-left: 15px;\r\n}\r\n\r\napp-navigation{\r\n  margin-right: 15px;\r\n  width: 40%;\r\n}\r\n\r\napp-search{\r\n  width: 30%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header_{{theme.color}}\">\n  <div class=\"logo\">\n    <img src=\"../../assets/logo.png\"/>\n  </div>\n  <app-search></app-search>\n  <app-navigation></app-navigation>\n</header>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_get_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/get-data.service */ "./src/app/services/get-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_theme_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/theme-info */ "./src/app/services/theme-info.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(data, route) {
        this.data = data;
        this.route = route;
        this.theme = _services_theme_info__WEBPACK_IMPORTED_MODULE_3__["THEME"];
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var token = this.route.snapshot.queryParams['access_token'];
        console.log(token);
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [_services_get_data_service__WEBPACK_IMPORTED_MODULE_1__["GetDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/header/header.module.ts":
/*!*****************************************!*\
  !*** ./src/app/header/header.module.ts ***!
  \*****************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./navigation/navigation.component */ "./src/app/header/navigation/navigation.component.ts");
/* harmony import */ var _header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _search_search_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search/search.component */ "./src/app/header/search/search.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-menu/user-menu.component */ "./src/app/header/user-menu/user-menu.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"]
            ],
            exports: [_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
            declarations: [_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_2__["NavigationComponent"], _header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"], _search_search_component__WEBPACK_IMPORTED_MODULE_5__["SearchComponent"], _user_menu_user_menu_component__WEBPACK_IMPORTED_MODULE_7__["UserMenuComponent"]]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/header/navigation/navigation.component.css":
/*!************************************************************!*\
  !*** ./src/app/header/navigation/navigation.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header__nav{\r\n  width: 100%;\r\n}\r\n\r\n.header__nav ul{\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: center;\r\n}\r\n\r\n.header__nav li{\r\n  padding: 15px 0;\r\n  width: 33%;\r\n  text-align: center;\r\n}\r\n\r\n.header__nav li:hover{\r\n  background-color: #24292e;\r\n  color: #f1af41;\r\n}\r\n\r\n.header__nav a{\r\n  color: inherit;\r\n  cursor: pointer;\r\n  text-decoration: none;\r\n}\r\n\r\n.user-panel__container{\r\n  position: relative;\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/navigation/navigation.component.html":
/*!*************************************************************!*\
  !*** ./src/app/header/navigation/navigation.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"header__nav\">\n  <ul>\n    <li><a routerLink=\"/\">Main page</a></li>\n    <li *ngIf=\"theme.categories\"><a routerLink=\"/categories\">Categories</a></li>\n    <li (click)=\"auth.logIn()\" *ngIf=\"!userInfo.username && theme.logIn\">Log in</li>\n    <li *ngIf=\"userInfo.username && theme.logIn\" class=\"user-panel__container\" (click)=\"toggleMenu()\">\n      {{userInfo.username}}\n      <app-user-menu *ngIf=\"isMenuOpen\"></app-user-menu>\n    </li>\n  </ul>\n</nav>\n\n"

/***/ }),

/***/ "./src/app/header/navigation/navigation.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/header/navigation/navigation.component.ts ***!
  \***********************************************************/
/*! exports provided: NavigationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavigationComponent", function() { return NavigationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _services_user_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user-info */ "./src/app/services/user-info.ts");
/* harmony import */ var _services_theme_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/theme-info */ "./src/app/services/theme-info.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var NavigationComponent = /** @class */ (function () {
    function NavigationComponent(auth) {
        this.auth = auth;
        this.userInfo = _services_user_info__WEBPACK_IMPORTED_MODULE_2__["USERINFO"];
        this.theme = _services_theme_info__WEBPACK_IMPORTED_MODULE_3__["THEME"];
    }
    NavigationComponent.prototype.toggleMenu = function () {
        this.isMenuOpen = !this.isMenuOpen;
    };
    NavigationComponent.prototype.ngOnInit = function () {
        this.isMenuOpen = false;
    };
    NavigationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navigation',
            template: __webpack_require__(/*! ./navigation.component.html */ "./src/app/header/navigation/navigation.component.html"),
            styles: [__webpack_require__(/*! ./navigation.component.css */ "./src/app/header/navigation/navigation.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], NavigationComponent);
    return NavigationComponent;
}());



/***/ }),

/***/ "./src/app/header/search/search.component.css":
/*!****************************************************!*\
  !*** ./src/app/header/search/search.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header__search{\r\n  border: none;\r\n  box-shadow: 0 2px 2px 0 rgba(0,0,0,0.16), 0 0 0 1px rgba(0,0,0,0.08);\r\n  padding: 10px 0;\r\n  width: 100%;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/header/search/search.component.html":
/*!*****************************************************!*\
  !*** ./src/app/header/search/search.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<input type=\"text\" class=\"header__search\" placeholder=\"Find new application here\" [(ngModel)] = \"searchLine\" (keydown)=\"handleClick($event)\" >\n"

/***/ }),

/***/ "./src/app/header/search/search.component.ts":
/*!***************************************************!*\
  !*** ./src/app/header/search/search.component.ts ***!
  \***************************************************/
/*! exports provided: SearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchComponent", function() { return SearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../constants */ "./src/app/constants.ts");
/* harmony import */ var _services_get_data_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/get-data.service */ "./src/app/services/get-data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchComponent = /** @class */ (function () {
    function SearchComponent(data, router) {
        this.data = data;
        this.router = router;
    }
    SearchComponent.prototype.handleClick = function (e) {
        if (e.keyCode === _constants__WEBPACK_IMPORTED_MODULE_1__["KEYBOARD"].ENTER) {
            this.router.navigate(['/search/' + this.searchLine]);
        }
    };
    SearchComponent.prototype.ngOnInit = function () {
    };
    SearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search',
            template: __webpack_require__(/*! ./search.component.html */ "./src/app/header/search/search.component.html"),
            styles: [__webpack_require__(/*! ./search.component.css */ "./src/app/header/search/search.component.css")]
        }),
        __metadata("design:paramtypes", [_services_get_data_service__WEBPACK_IMPORTED_MODULE_2__["GetDataService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SearchComponent);
    return SearchComponent;
}());



/***/ }),

/***/ "./src/app/header/user-menu/user-menu.component.css":
/*!**********************************************************!*\
  !*** ./src/app/header/user-menu/user-menu.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-panel{\r\n  -webkit-animation: open__user-panel 600ms linear;\r\n          animation: open__user-panel 600ms linear;\r\n  position: absolute;\r\n  top: 100%;\r\n  width: 100%;\r\n}\r\n\r\n.user-panel li{\r\n  background-color: aliceblue;\r\n  color: #000;\r\n  padding: 5px 10px;\r\n}\r\n\r\n.user-panel li:hover{\r\n  background-color: #42424d;\r\n  color: #f1af41;\r\n}\r\n\r\n.user-panel li a{\r\n  color: inherit;\r\n  text-decoration: none;\r\n}\r\n\r\n.user-panel a{\r\n  display: block;\r\n  width: 100%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/header/user-menu/user-menu.component.html":
/*!***********************************************************!*\
  !*** ./src/app/header/user-menu/user-menu.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"user-panel\">\n  <ul>\n    <li *ngIf=\"auth.checkRights() === 'admin'\"><a routerLink=\"/admin/panel\">Admin panel</a></li>\n    <li (click)=\"logOut()\">Log out</li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "./src/app/header/user-menu/user-menu.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/header/user-menu/user-menu.component.ts ***!
  \*********************************************************/
/*! exports provided: UserMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserMenuComponent", function() { return UserMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserMenuComponent = /** @class */ (function () {
    function UserMenuComponent(auth, router) {
        this.auth = auth;
        this.router = router;
    }
    UserMenuComponent.prototype.logOut = function () {
        this.auth.deleteLocalToken();
        this.router.navigate(['/']);
    };
    UserMenuComponent.prototype.ngOnInit = function () {
    };
    UserMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-menu',
            template: __webpack_require__(/*! ./user-menu.component.html */ "./src/app/header/user-menu/user-menu.component.html"),
            styles: [__webpack_require__(/*! ./user-menu.component.css */ "./src/app/header/user-menu/user-menu.component.css")]
        }),
        __metadata("design:paramtypes", [_services_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], UserMenuComponent);
    return UserMenuComponent;
}());



/***/ }),

/***/ "./src/app/modal-window/modal-window.component.css":
/*!*********************************************************!*\
  !*** ./src/app/modal-window/modal-window.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app__container_full{\r\n  align-items: center;\r\n  display: flex;\r\n  flex-direction: column;\r\n  justify-content: center;\r\n  margin: 0 auto;\r\n  width: 50%;\r\n}\r\n\r\n.app__container_full h2,h3,h4,h5{\r\n  font-weight: 400;\r\n}\r\n\r\n.app__container_full img{\r\n  width: -webkit-fit-content;\r\n  width: -moz-fit-content;\r\n  width: fit-content;\r\n}\r\n"

/***/ }),

/***/ "./src/app/modal-window/modal-window.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modal-window/modal-window.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"app__container_full\" *ngIf=\"isReady\">\n  <img src=\"../../assets/{{app.logo}}\" alt=\"appLogo\">\n  <h2>Name of app: {{app.app_name}}</h2>\n  <h3>Age: {{app.content_rating}}+</h3>\n  <h3>Rating: {{app.all_rating}}/5</h3>\n  <h4>Downloads: {{app.downloads}}</h4>\n  <h4>Required os: {{app.requires_os}}</h4>\n  <h5>Price: {{app.price}}</h5>\n</div>\n"

/***/ }),

/***/ "./src/app/modal-window/modal-window.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modal-window/modal-window.component.ts ***!
  \********************************************************/
/*! exports provided: ModalWindowComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalWindowComponent", function() { return ModalWindowComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_apps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/apps */ "./src/app/services/apps.ts");
/* harmony import */ var _services_get_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/get-data.service */ "./src/app/services/get-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ModalWindowComponent = /** @class */ (function () {
    function ModalWindowComponent(route, data) {
        this.route = route;
        this.data = data;
        this.apps = _services_apps__WEBPACK_IMPORTED_MODULE_2__["APPS"];
    }
    ModalWindowComponent.prototype.getApp = function () {
        var _this = this;
        return this.apps.filter(function (app) {
            return app.id === _this.id;
        })[0];
    };
    ModalWindowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isReady = false;
        if (!_services_apps__WEBPACK_IMPORTED_MODULE_2__["APPS"].length) {
            this.data.fetchInfo().subscribe(function (res) {
                _services_apps__WEBPACK_IMPORTED_MODULE_2__["APPS"].push.apply(_services_apps__WEBPACK_IMPORTED_MODULE_2__["APPS"], res);
                _this.route.params.subscribe(function (params) {
                    _this.id = params['id'];
                    _this.app = _this.getApp();
                    console.log(_this.app);
                    _this.isReady = true;
                });
            });
        }
        else {
            this.route.params.subscribe(function (params) {
                _this.id = params['id'];
                _this.app = _this.getApp();
                _this.isReady = true;
            });
        }
    };
    ModalWindowComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-modal-window',
            template: __webpack_require__(/*! ./modal-window.component.html */ "./src/app/modal-window/modal-window.component.html"),
            styles: [__webpack_require__(/*! ./modal-window.component.css */ "./src/app/modal-window/modal-window.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"],
            _services_get_data_service__WEBPACK_IMPORTED_MODULE_3__["GetDataService"]])
    ], ModalWindowComponent);
    return ModalWindowComponent;
}());



/***/ }),

/***/ "./src/app/search-dashboard/search-dashboard.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/search-dashboard/search-dashboard.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search__component{\r\n  display: flex;\r\n  flex-flow: row wrap;\r\n  justify-content: space-between;\r\n  position: relative;\r\n  top:95px;\r\n  width: 100%;\r\n}\r\n\r\n.search__app__container{\r\n  width: 25%;\r\n}\r\n"

/***/ }),

/***/ "./src/app/search-dashboard/search-dashboard.component.html":
/*!******************************************************************!*\
  !*** ./src/app/search-dashboard/search-dashboard.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"search__component\">\n  <div *ngFor=\"let app of app\" class=\"search__app__container\">\n    <app-app [app]=\"app\"></app-app>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/search-dashboard/search-dashboard.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/search-dashboard/search-dashboard.component.ts ***!
  \****************************************************************/
/*! exports provided: SearchDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchDashboardComponent", function() { return SearchDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_get_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/get-data.service */ "./src/app/services/get-data.service.ts");
/* harmony import */ var _services_apps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/apps */ "./src/app/services/apps.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchDashboardComponent = /** @class */ (function () {
    function SearchDashboardComponent(route, data) {
        this.route = route;
        this.data = data;
        this.apps = _services_apps__WEBPACK_IMPORTED_MODULE_2__["APPS"];
    }
    SearchDashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isReady = false;
        if (!_services_apps__WEBPACK_IMPORTED_MODULE_2__["APPS"].length) {
            this.data.fetchInfo().subscribe(function (res) {
                _services_apps__WEBPACK_IMPORTED_MODULE_2__["APPS"].push.apply(_services_apps__WEBPACK_IMPORTED_MODULE_2__["APPS"], res);
                _this.route.params.subscribe(function (params) {
                    _this.id = params['id'];
                    _this.app = _this.data.findApps(_this.id);
                    console.log(_this.app);
                    _this.isReady = true;
                });
            });
        }
        else {
            this.route.params.subscribe(function (params) {
                _this.id = params['id'];
                _this.app = _this.data.findApps(_this.id);
                _this.isReady = true;
            });
        }
    };
    SearchDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-dashboard',
            template: __webpack_require__(/*! ./search-dashboard.component.html */ "./src/app/search-dashboard/search-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./search-dashboard.component.css */ "./src/app/search-dashboard/search-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _services_get_data_service__WEBPACK_IMPORTED_MODULE_1__["GetDataService"]])
    ], SearchDashboardComponent);
    return SearchDashboardComponent;
}());



/***/ }),

/***/ "./src/app/services/app.ts":
/*!*********************************!*\
  !*** ./src/app/services/app.ts ***!
  \*********************************/
/*! exports provided: App */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "App", function() { return App; });
var App = /** @class */ (function () {
    function App() {
    }
    return App;
}());



/***/ }),

/***/ "./src/app/services/apps.ts":
/*!**********************************!*\
  !*** ./src/app/services/apps.ts ***!
  \**********************************/
/*! exports provided: APPS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APPS", function() { return APPS; });
var APPS = [];


/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constants */ "./src/app/constants.ts");
/* harmony import */ var _user_info__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-info */ "./src/app/services/user-info.ts");
/* harmony import */ var _apps__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apps */ "./src/app/services/apps.ts");
/* harmony import */ var _get_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./get-data.service */ "./src/app/services/get-data.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var AuthService = /** @class */ (function () {
    function AuthService(http, router, route, data) {
        this.http = http;
        this.router = router;
        this.route = route;
        this.data = data;
    }
    AuthService.prototype.logIn = function () {
        window.location.href =
            "https://api.instagram.com/oauth/authorize/?client_id=" + _constants__WEBPACK_IMPORTED_MODULE_3__["CLIENT_ID"] + "&redirect_uri=" + _constants__WEBPACK_IMPORTED_MODULE_3__["REDIRECT_URI"] + "&response_type=token";
    };
    AuthService.prototype.getToken = function () {
        return this.route.fragment;
    };
    AuthService.prototype.getUserData = function (token) {
        this.saveLocalToken(token);
        return this.http.get('https://api.instagram.com/v1/users/self/?access_token=' + token);
    };
    AuthService.prototype.saveLocalToken = function (token) {
        localStorage.setItem('appStoreToken', token);
    };
    AuthService.prototype.getLocalToken = function () {
        return localStorage.getItem('appStoreToken');
    };
    AuthService.prototype.setUserData = function (userData) {
        _user_info__WEBPACK_IMPORTED_MODULE_4__["USERINFO"].username = userData.data.username;
        _user_info__WEBPACK_IMPORTED_MODULE_4__["USERINFO"].logo = userData.data.profile_picture;
        _user_info__WEBPACK_IMPORTED_MODULE_4__["USERINFO"].id = parseInt(userData.data.id, 10);
        console.log(userData);
        if (_user_info__WEBPACK_IMPORTED_MODULE_4__["USERINFO"].id === 4165236905) {
            _user_info__WEBPACK_IMPORTED_MODULE_4__["USERINFO"].rights = 'admin';
        }
        else {
            _user_info__WEBPACK_IMPORTED_MODULE_4__["USERINFO"].rights = 'logged';
        }
    };
    AuthService.prototype.appsInfoCheck = function () {
        if (!_apps__WEBPACK_IMPORTED_MODULE_5__["APPS"].length) {
            this.data.fetchInfo().subscribe(function (res) {
                _apps__WEBPACK_IMPORTED_MODULE_5__["APPS"].push.apply(_apps__WEBPACK_IMPORTED_MODULE_5__["APPS"], res);
            });
        }
    };
    AuthService.prototype.localTokenFetch = function () {
        var _this = this;
        var token = this.getLocalToken();
        console.log(token);
        this.getUserData(token).subscribe(function (userData) {
            _this.setUserData(userData);
            console.log('local storage');
        });
    };
    AuthService.prototype.remoteTokenFetch = function () {
        var _this = this;
        this.getToken().subscribe(function (token) {
            if (token) {
                token = token.slice(13, token.length);
                _this.getUserData(token).subscribe(function (userData) {
                    _this.setUserData(userData);
                    console.log('fetching');
                });
            }
        });
    };
    AuthService.prototype.deleteLocalToken = function () {
        localStorage.removeItem('appStoreToken');
        _user_info__WEBPACK_IMPORTED_MODULE_4__["USERINFO"].username = '';
        _user_info__WEBPACK_IMPORTED_MODULE_4__["USERINFO"].id = null;
        _user_info__WEBPACK_IMPORTED_MODULE_4__["USERINFO"].logo = '';
    };
    AuthService.prototype.checkRights = function () {
        if (_user_info__WEBPACK_IMPORTED_MODULE_4__["USERINFO"].rights) {
            if (_user_info__WEBPACK_IMPORTED_MODULE_4__["USERINFO"].rights === 'admin') {
                return 'admin';
            }
            else {
                return 'logged';
            }
        }
        else {
            return 'non-logged';
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _get_data_service__WEBPACK_IMPORTED_MODULE_6__["GetDataService"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/get-data.service.ts":
/*!**********************************************!*\
  !*** ./src/app/services/get-data.service.ts ***!
  \**********************************************/
/*! exports provided: GetDataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetDataService", function() { return GetDataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _apps__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apps */ "./src/app/services/apps.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var GetDataService = /** @class */ (function () {
    function GetDataService(http, router) {
        this.http = http;
        this.router = router;
    }
    // TODO: subject behaviour
    GetDataService.prototype.fetchInfo = function () {
        return this.http.get('./assets/info.json');
    };
    GetDataService.prototype.filterData = function (category, info) {
        if (category) {
            switch (category) {
                case 'kids': {
                    return info.filter(function (app) {
                        return app.content_rating === 6;
                    });
                }
                case 'adults': {
                    return info.filter(function (app) {
                        return app.content_rating === 18;
                    });
                }
                case 'multiplayer': {
                    return info.filter(function (app) {
                        return app.content_rating_info === 'Multiplayer';
                    });
                }
                default: {
                    this.router.navigate(['/']);
                }
            }
        }
    };
    // search by 2 fields in lowercase
    GetDataService.prototype.findApps = function (searchLine) {
        return _apps__WEBPACK_IMPORTED_MODULE_2__["APPS"].filter(function (app) {
            return app.app_name.toLocaleLowerCase().indexOf(searchLine.toLocaleLowerCase()) + 1
                || app.publisher_name.toLocaleLowerCase().indexOf(searchLine.toLocaleLowerCase()) + 1;
        });
    };
    GetDataService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], GetDataService);
    return GetDataService;
}());



/***/ }),

/***/ "./src/app/services/theme-info.ts":
/*!****************************************!*\
  !*** ./src/app/services/theme-info.ts ***!
  \****************************************/
/*! exports provided: THEME */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "THEME", function() { return THEME; });
var THEME = {
    color: 'light',
    categories: true,
    logIn: true
};


/***/ }),

/***/ "./src/app/services/user-info.ts":
/*!***************************************!*\
  !*** ./src/app/services/user-info.ts ***!
  \***************************************/
/*! exports provided: USERINFO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "USERINFO", function() { return USERINFO; });
var USERINFO = {
    username: '',
    logo: '',
    id: null,
    rights: ''
};


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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\projects\app-store\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map