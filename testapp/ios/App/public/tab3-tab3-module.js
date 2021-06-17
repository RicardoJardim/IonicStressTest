(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "/s3u":
/*!**********************************************************!*\
  !*** ./node_modules/@capacitor/camera/dist/esm/index.js ***!
  \**********************************************************/
/*! exports provided: CameraSource, CameraDirection, CameraResultType, Camera */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Camera", function() { return Camera; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ "dTEF");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraSource", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraSource"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraDirection", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraDirection"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CameraResultType", function() { return _definitions__WEBPACK_IMPORTED_MODULE_1__["CameraResultType"]; });


const Camera = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('Camera', {
    web: () => Promise.all(/*! import() | web */[__webpack_require__.e("common"), __webpack_require__.e("web")]).then(__webpack_require__.bind(null, /*! ./web */ "wzPO")).then(m => new m.CameraWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "3WFG":
/*!**********************************************!*\
  !*** ./src/app/services/calendar.service.ts ***!
  \**********************************************/
/*! exports provided: CalendarService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CalendarService", function() { return CalendarService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/calendar/ngx */ "8P2a");

/* eslint-disable @typescript-eslint/prefer-for-of */


let CalendarService = class CalendarService {
    constructor(calendar) {
        this.calendar = calendar;
    }
    getCalendarList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.calendar.listCalendars().then((msg) => {
                console.log(msg);
                this.onSuccess(msg);
            }, (err) => {
                console.log(err);
                this.onError(err);
            });
        });
    }
    onSuccess(contacts) {
        let list = '';
        for (let i = 0; i < contacts.length; i++) {
            console.log(contacts[i]);
            list += contacts[i] + '\n';
        }
        alert(list);
    }
    onError(contactError) {
        alert('onError! ' + contactError.toString());
    }
};
CalendarService.ctorParameters = () => [
    { type: _ionic_native_calendar_ngx__WEBPACK_IMPORTED_MODULE_2__["Calendar"] }
];
CalendarService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], CalendarService);



/***/ }),

/***/ "6/gD":
/*!*******************************************!*\
  !*** ./src/app/services/photo.service.ts ***!
  \*******************************************/
/*! exports provided: PhotoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PhotoService", function() { return PhotoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/camera */ "/s3u");

/* eslint-disable @typescript-eslint/naming-convention */


let PhotoService = class PhotoService {
    constructor() { }
    addNewToGallery() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Take a photo
            const capturedPhoto = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Camera,
                quality: 100,
            });
            const imageUrl = capturedPhoto.webPath;
            // Can be set to the src of an image now
            alert(imageUrl);
        });
    }
    getGallery() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            // Take a photo
            const capturedPhoto = yield _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["Camera"].getPhoto({
                resultType: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraResultType"].Uri,
                source: _capacitor_camera__WEBPACK_IMPORTED_MODULE_2__["CameraSource"].Photos,
                quality: 100,
            });
            const imageUrl = capturedPhoto.webPath;
            // Can be set to the src of an image now
            console.log(imageUrl);
            alert(imageUrl);
        });
    }
};
PhotoService.ctorParameters = () => [];
PhotoService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], PhotoService);



/***/ }),

/***/ "IqiF":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tab3.page.html */ "h1hx");
/* harmony import */ var _tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tab3.page.scss */ "nRCe");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_photo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/photo.service */ "6/gD");
/* harmony import */ var _services_gps_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/gps.service */ "vCEr");
/* harmony import */ var _services_calendar_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/calendar.service */ "3WFG");
/* harmony import */ var _services_contacts_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../services/contacts.service */ "dkb4");








let Tab3Page = class Tab3Page {
    constructor(photoService, gpsService, calendarService, contactsService) {
        this.photoService = photoService;
        this.gpsService = gpsService;
        this.calendarService = calendarService;
        this.contactsService = contactsService;
        this.onClickFunction = (args) => { };
        this.openCamera = (args) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            this.photoService.addNewToGallery();
        });
        this.openGallery = (args) => {
            this.photoService.getGallery();
        };
        this.openGps = (args) => {
            this.gpsService.getCurrentPosition();
        };
        this.openCalendar = (args) => {
            this.calendarService.getCalendarList();
        };
        this.openContacts = (args) => {
            this.contactsService.getCalendarList();
        };
    }
};
Tab3Page.ctorParameters = () => [
    { type: _services_photo_service__WEBPACK_IMPORTED_MODULE_4__["PhotoService"] },
    { type: _services_gps_service__WEBPACK_IMPORTED_MODULE_5__["GpsService"] },
    { type: _services_calendar_service__WEBPACK_IMPORTED_MODULE_6__["CalendarService"] },
    { type: _services_contacts_service__WEBPACK_IMPORTED_MODULE_7__["ContactsService"] }
];
Tab3Page = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tab3',
        template: _raw_loader_tab3_page_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tab3_page_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], Tab3Page);



/***/ }),

/***/ "OcaV":
/*!*********************************************!*\
  !*** ./src/app/tab3/tab3-routing.module.ts ***!
  \*********************************************/
/*! exports provided: Tab3PageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageRoutingModule", function() { return Tab3PageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tab3.page */ "IqiF");




const routes = [
    {
        path: '',
        component: _tab3_page__WEBPACK_IMPORTED_MODULE_3__["Tab3Page"],
    }
];
let Tab3PageRoutingModule = class Tab3PageRoutingModule {
};
Tab3PageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], Tab3PageRoutingModule);



/***/ }),

/***/ "R6Ch":
/*!*********************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/definitions.js ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

//# sourceMappingURL=definitions.js.map

/***/ }),

/***/ "aa/T":
/*!***************************************************************!*\
  !*** ./node_modules/@capacitor/geolocation/dist/esm/index.js ***!
  \***************************************************************/
/*! exports provided: Geolocation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Geolocation", function() { return Geolocation; });
/* harmony import */ var _capacitor_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @capacitor/core */ "FUe0");
/* harmony import */ var _definitions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./definitions */ "R6Ch");
/* empty/unused harmony star reexport */
const Geolocation = Object(_capacitor_core__WEBPACK_IMPORTED_MODULE_0__["registerPlugin"])('Geolocation', {
    web: () => Promise.all(/*! import() | web */[__webpack_require__.e("common"), __webpack_require__.e("web")]).then(__webpack_require__.bind(null, /*! ./web */ "7ogy")).then(m => new m.GeolocationWeb()),
});


//# sourceMappingURL=index.js.map

/***/ }),

/***/ "dkb4":
/*!**********************************************!*\
  !*** ./src/app/services/contacts.service.ts ***!
  \**********************************************/
/*! exports provided: ContactsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactsService", function() { return ContactsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/contacts/ngx */ "TzAO");

/* eslint-disable @typescript-eslint/prefer-for-of */


let ContactsService = class ContactsService {
    constructor(contacts) {
        this.contacts = contacts;
    }
    getCalendarList() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const options = new _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_2__["ContactFindOptions"]();
            options.filter = '';
            options.multiple = true;
            this.contacts.find(['displayName', 'name'], options).then((msg) => {
                console.log(msg);
                this.onSuccess(msg);
            }, (err) => {
                console.log(err);
                this.onError(err);
            });
        });
    }
    onSuccess(contacts) {
        let list = '';
        for (let i = 0; i < contacts.length; i++) {
            console.log(contacts[i]);
            list += contacts[i].displayName + '\n';
        }
        alert(list);
    }
    onError(contactError) {
        alert('onError! ' + contactError.toString());
    }
};
ContactsService.ctorParameters = () => [
    { type: _ionic_native_contacts_ngx__WEBPACK_IMPORTED_MODULE_2__["Contacts"] }
];
ContactsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], ContactsService);



/***/ }),

/***/ "h1hx":
/*!***************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tab3/tab3.page.html ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content [fullscreen]=\"true\">\n  <div style=\"padding-top: 50px\">\n    <app-button name=\"camera\" [callbackFunction]=\"openCamera\"></app-button>\n    <app-button name=\"gallery\" [callbackFunction]=\"openGallery\"></app-button>\n    <app-button name=\"gps\" [callbackFunction]=\"openGps\"></app-button>\n    <app-button name=\"calendar\" [callbackFunction]=\"openCalendar\"></app-button>\n    <app-button name=\"contacts\" [callbackFunction]=\"openContacts\"></app-button>\n  </div>\n</ion-content>\n");

/***/ }),

/***/ "k+ul":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "IqiF");
/* harmony import */ var _button_button_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../button/button.module */ "sJxD");
/* harmony import */ var _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tab3-routing.module */ "OcaV");









let Tab3PageModule = class Tab3PageModule {
};
Tab3PageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
        imports: [
            _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
            _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _button_button_module__WEBPACK_IMPORTED_MODULE_7__["ButtonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }]),
            _tab3_routing_module__WEBPACK_IMPORTED_MODULE_8__["Tab3PageRoutingModule"],
        ],
        declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]],
    })
], Tab3PageModule);



/***/ }),

/***/ "nRCe":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  --ion-background-color: green;\n  margin-left: auto;\n  margin-right: auto;\n  align-items: center;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3RhYjMucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsNkJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUNGIiwiZmlsZSI6InRhYjMucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLWNvbnRlbnQge1xuICAtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yOiBncmVlbjtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuIl19 */");

/***/ }),

/***/ "vCEr":
/*!*****************************************!*\
  !*** ./src/app/services/gps.service.ts ***!
  \*****************************************/
/*! exports provided: GpsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GpsService", function() { return GpsService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @capacitor/geolocation */ "aa/T");

/* eslint-disable @typescript-eslint/naming-convention */


let GpsService = class GpsService {
    constructor() { }
    getCurrentPosition() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const coordinates = yield _capacitor_geolocation__WEBPACK_IMPORTED_MODULE_2__["Geolocation"].getCurrentPosition();
            console.log('Current', coordinates);
            alert(coordinates.coords.longitude + ' ' + coordinates.coords.latitude);
        });
    }
};
GpsService.ctorParameters = () => [];
GpsService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root',
    })
], GpsService);



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map