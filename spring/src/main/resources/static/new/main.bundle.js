webpackJsonp([1,4],{

/***/ 10:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "/*!\n * Start Bootstrap - Blog Home (http://startbootstrap.com/)\n * Copyright 2013-2016 Start Bootstrap\n * Licensed under MIT (https://github.com/BlackrockDigital/startbootstrap/blob/gh-pages/LICENSE)\n */\n\nbody {\n    padding-top: 10px;\n    /* Required padding for .navbar-fixed-top. Remove if using .navbar-static-top. Change if height of navigation changes. */\n    background: rgba(95, 95, 95, 1);\n    background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(95, 95, 95, 1)), color-stop(44%, rgba(255, 255, 255, 1)), color-stop(57%, rgba(255, 255, 255, 1)), color-stop(100%, rgba(95, 95, 95, 1)));\n    background: linear-gradient(to bottom, rgba(95, 95, 95, 1) 0%, rgba(255, 255, 255, 1) 44%, rgba(255, 255, 255, 1) 57%, rgba(95, 95, 95, 1) 100%);\n    filter: progid: DXImageTransform.Microsoft.gradient( startColorstr='#5f5f5f', endColorstr='#5f5f5f', GradientType=0);\n}\n\nfooter {\n    margin: 50px 0;\n    text-align: center;\n}\n\n.col-md-8>h1>small {\n    color: white;\n}\n\n/*Artist*/\n\n#canciones-artista{\n    margin-left: 10px;\n}\n\n/* fin artista*/\n\n\n\n/*navbar-header*/\n\n.navbar-inverse {\n    margin: 0;\n    background-color: #222;\n}\n\n#header {\n    display: -webkit-inline-box;\n}\n\n#header a {\n    color: aqua;\n    font-family: \"trebuchet ms\", \"arial\", sans-serif;\n    font-weight: bold;\n    font-size: 2em;\n    margin-top: 0.4em;\n}\n\n.navbar>.container-fluid .navbar-brand {\n    margin-left: 15px;\n}\n\n\n/* color cortina\n.navbar-nav>li>.dropdown-menu {\n    background-color: #18BC9C;\n    border: 6px solid darkcyan;\n    color: white;\n}\n*/\n\n#navbar a{\n     color: aqua;\n     margin-top: 1em;\n     margin-right: 15px;\n    margin-left: 20px;\n    float: right;\n}\n\n#navbar li>a{\n     color: black;\n}\n\n\n#navbar li>a>span{\n       color: aqua;\n     margin-right: 15px;\n    margin-left: 20px;\n    margin-bottom: 0em;\n    font-size: 1.1em;\n    top:0px;\n}\n\n#navbar{\n    position: initial;\n}\n\n#dropdown-options{\n     position: absolute;\n     left: 87%;\n    margin: 2px 20em 0 0;\n    padding: 0;\n}\n\n\n#search {\n    position: relative;\n    left: 50px;\n    width: auto;\n    margin-top: 0.9em;\n}\n\n#search-button {\n    position: absolute;\n    left: 1px;\n    bottom: 0px;\n    width: initial;\n}\n\n#logo-navbar {\n    width: 60px;\n    height: 55px;\n    margin-top: 0.7em;\n    margin-bottom: 0.7em;\n}\n\n.img-circle {\n    margin-top: 0.4em;\n    margin-right: 0.4em;\n    width: 60px;\n    height: 55px;\n}\n\n\n/* final navabar*/\n\n\n/*widget home (cajas a la derecha) */\n\n.well {\n    margin-top: 4em;\n    margin-right: 1em;\n}\n\n\n/*final widget*/\n\n\n#nplay {\n    width: 130px;\n}\n\n#nfollowed {\n    width: 130px;\n}\n\n#nfollowing {\n    width: 130px;\n}\n\n\n/*Final de los botones*/\n\n\n/*boton follow jumbotron en las paginas searchUtent*/\n\n.follow {\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 1.5em;\n    font-weight: bold;\n}\n\n.follow-btn {\n    text-align: center;\n    font-family: sans-serif;\n    font-size: 0.7em;\n}\n\n\n/*final boton */\n\n\n/*Enlace para new playlist*/\n\n#newPlay {\n    font-size: 1.5em;\n    position: relative;\n    top: 0.2em;\n}\n\n\n/*fin*/\n\n\n/*Botones de modificaciones en create, edit, config*/\n\n.uploadImg {\n    text-align: center;\n    margin: 1em 0 1em 0;\n}\n\n\n/*fin*/\n\n\n/*cortina de changePassword*/\n\n.changePass {\n    margin-left: 15.5em;\n    width: 20em;\n    margin-top: -1em;\n}\n\n#oldpassBox {\n    width: 17em;\n    margin-left: 0.7em;\n}\n\n#donePass {\n    margin-left: 15em;\n    margin-bottom: 1em;\n}\n\n.changeImg {\n    margin-top: 2em;\n    margin-left: 2.5em;\n    width: 18em;\n}\n\n#oldimgBox {\n    width: 15em;\n    margin-left: 0.4em;\n}\n\n#doneImg {\n    margin-left: 13em;\n    margin-bottom: 1em;\n}\n\n\n/*fin cortina*/\n\n\n/* jumbotron editPlaylist y createPlaylist*/\n\n.form-playlist {\n    margin-top: 1em;\n    color: white;\n}\n\n.editlogo {\n    margin: auto;\n    margin-bottom: 2em;\n}\n\n\n/* fin  jumbotron editPlaylist y createPlaylist*/\n\n\n/* jumbotron config*/\n\n.form-utent {\n    margin-top: 1em;\n    color: white;\n}\n\n\n/*fin jumbotron config*/\n\n\n/*Boton de add new song y save/return en create playlist*/\n\n.save-return {\n    margin-left: 4em;\n    margin-right: 4em;\n}\n\n\n/*fin*/\n\n\n/*Editar link de youtube, en edit playlist*/\n\n.editLink {\n    position: relative;\n    left: 63.8em;\n}\n\n.returnE {\n    position: relative;\n    left: 79.5em;\n}\n\n.trash {\n    position: relative;\n    right: 15em;\n    top: 0.7em;\n}\n\n#artist {\n    position: relative;\n    left: 1.4em;\n}\n\n\n/*Fin*/\n\n\n/*Separar las canciones favoritas*/\n\n.eliminarFav {\n    position: relative;\n    left: 77em;\n    top: -2em;\n}\n\n\n/*Final*/\n\n\n/*Imagen de usuario en la pagina de seguidores*/\n\n#userImSeg {\n    width: 250px;\n    height: 250px;\n    background-repeat: no-repeat;\n    background-position: 50%;\n    border-radius: 50%;\n    background-size: 100% auto;\n}\n\n\n/*final*/\n\n\n/*Editar el perfil del usuario*/\n\n#userEdit {\n    width: 250px;\n    height: 250px;\n    background-repeat: no-repeat;\n    background-position: 50%;\n    border-radius: 50%;\n    background-size: 100% auto;\n    position: relative;\n    bottom: 1em;\n    left: 6em;\n}\n\n\n/*\n.save {\n    margin-left: 5em;\n}\n\n.returnEdit {\n    margin: auto;\n}\n*/\n\n#cityBox {\n    position: relative;\n    left: 1em;\n}\n\n#stateBox {\n    position: relative;\n    left: 1em;\n}\n\n.changePass {}\n\n\n/*fin*/\n\n\n/*final navbar buttons*/\n\n\n/* cajas playlist*/\n\n#table {\n    background-color: whitesmoke;\n    margin-bottom: 1em;\n    margin-top: 1em;\n    border-radius: 4px;\n}\n\n\n/*final cajas playlists*/\n\n\n/*tag*/\n\na.tag {\n    padding: 10px 18px;\n    margin: 0 8px 8px 0;\n    border: 1px solid #120707;\n    border-radius: 30px;\n    display: inline-block;\n    color: #666;\n    background-color: white;\n}\n\n\n/*final tag*/\n\n\n/*pie*/\n\n.footer {\n    text-align: center;\n    font-size: 1.25em;\n    font-weight: 300;\n    color: #222;\n    font-family: 'Lobster', cursive;\n}\n\n.intro-text .name {\n    display: block;\n}\n\n.star-light {\n    border: 1px solid #222;\n}\n\n\n/*final pie*/\n\n\n/*inicio playlist*/\n\n#reproductor {\n    text-align: -webkit-center;\n    height: 35em;\n}\n\n/* #reproductor>iframe { */\n/*     width: 70%; */\n/*     height: 100%; */\n/*     max-height: 480px; */\n/*     max-width: 854px; */\n/* } */\n\n.recomendaciones {\n    text-align: center;\n}\n\n.recomendaciones-list {\n    background-color: whitesmoke;\n}\n\n#degradado {\n    /*Safari*/\n    /*Opera*/\n    /*Firefox*/\n    background: linear-gradient(#5f5f5f, white);\n    /*Standard*/\n}\n\n#degradadoinverso {\n    /*Safari*/\n    /*Opera*/\n    /*Firefox*/\n    background: linear-gradient(white, #5f5f5f);\n    /*Standard*/\n}\n\n#suscripcion>span {\n    margin-right: 10px;\n    margin-top: 5px;\n    float: left;\n}\n\n#descripcion {\n    margin-top: 10px;\n}\n\n\n/*fin playlist*/\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCreateArtistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminCreateArtistComponent = (function () {
    function AdminCreateArtistComponent(router, activatedRoute, loginService, adminService) {
        this.router = router;
        this.loginService = loginService;
        this.adminService = adminService;
        this.user = loginService.user;
        this.artist = { name: '', country: '' };
    }
    AdminCreateArtistComponent.prototype.createArtist = function (event, nameArtist, countryArtist) {
        var _this = this;
        event.preventDefault();
        this.artist.name = nameArtist;
        this.artist.country = countryArtist;
        this.adminService.createArtist(this.artist).subscribe(function (artist) {
            _this.artist = artist;
            _this.goToEdit(artist.id_artist);
        }, function (error) { return console.error(error); });
    };
    AdminCreateArtistComponent.prototype.goToEdit = function (id_artist) {
        this.router.navigate(['/admin-edit-artist', id_artist]);
    };
    return AdminCreateArtistComponent;
}());
AdminCreateArtistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(253),
        styles: [__webpack_require__(10), __webpack_require__(9), __webpack_require__(8), __webpack_require__(11)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__admin_service__["a" /* AdminService */]) === "function" && _d || Object])
], AdminCreateArtistComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=admin-create-artist.component.js.map

/***/ }),

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artist_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__admin_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminCreateSongComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminCreateSongComponent = (function () {
    function AdminCreateSongComponent(router, activatedRoute, loginService, adminService, artistService) {
        var _this = this;
        this.router = router;
        this.loginService = loginService;
        this.adminService = adminService;
        this.artistService = artistService;
        this.user = loginService.user;
        this.song = { title: '', link_youtube: '' };
        var id_artist = activatedRoute.params.subscribe(function (params) {
            _this.artistService.getArtist(params['id_artist']).subscribe(function (artist) {
                _this.artist = artist;
            }, function (error) { return console.error(error); });
        });
    }
    AdminCreateSongComponent.prototype.createSong = function (event, title, link) {
        var _this = this;
        event.preventDefault();
        this.song.title = title;
        this.song.link_youtube = link;
        this.adminService.createSong(this.artist.id_artist, this.song).subscribe(function (song) {
            _this.song = song;
            _this.goToEditSong(song.id_song);
        }, function (error) { return console.error(error); });
    };
    AdminCreateSongComponent.prototype.goToEditSong = function (id_song) {
        this.router.navigate(['/admin-edit-song', id_song]);
    };
    AdminCreateSongComponent.prototype.goToAdminHome = function (id_artist) {
        this.router.navigate(['/admin-home']);
    };
    return AdminCreateSongComponent;
}());
AdminCreateSongComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(254),
        styles: [__webpack_require__(10), __webpack_require__(9), __webpack_require__(8), __webpack_require__(11)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__admin_service__["a" /* AdminService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__artist_service__["a" /* ArtistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__artist_service__["a" /* ArtistService */]) === "function" && _e || Object])
], AdminCreateSongComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=admin-create-song.component.js.map

/***/ }),

/***/ 108:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__artist_service__ = __webpack_require__(21);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminEditArtistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminEditArtistComponent = (function () {
    function AdminEditArtistComponent(router, activatedRoute, loginService, adminService, artistService) {
        var _this = this;
        this.router = router;
        this.loginService = loginService;
        this.adminService = adminService;
        this.artistService = artistService;
        this.user = loginService.user;
        var id_artist = activatedRoute.params.subscribe(function (params) {
            _this.artistService.getArtist(params['id_artist']).subscribe(function (artist) {
                _this.artist = artist;
            }, function (error) { return console.error(error); });
        });
    }
    AdminEditArtistComponent.prototype.editTag = function (event, tagToRemove, tagToAdd) {
        var _this = this;
        event.preventDefault();
        this.adminService.editTagArtist(this.artist.name, tagToRemove, tagToAdd).subscribe(function (artist) {
            _this.artist = artist;
        }, function (error) { return console.error(error); });
    };
    AdminEditArtistComponent.prototype.editArtist = function (event, name, country) {
        var _this = this;
        event.preventDefault();
        this.adminService.editArtist(this.artist.name, name, country).subscribe(function (artist) {
            _this.artist = artist;
        }, function (error) { return console.error(error); });
    };
    AdminEditArtistComponent.prototype.goToCreateSong = function (id_artist) {
        this.router.navigate(['/admin-create-song', id_artist]);
    };
    return AdminEditArtistComponent;
}());
AdminEditArtistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(255),
        styles: [__webpack_require__(10), __webpack_require__(9), __webpack_require__(8), __webpack_require__(11)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__admin_service__["a" /* AdminService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__artist_service__["a" /* ArtistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__artist_service__["a" /* ArtistService */]) === "function" && _e || Object])
], AdminEditArtistComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=admin-edit-artist.component.js.map

/***/ }),

/***/ 109:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__song_service__ = __webpack_require__(43);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminEditSongComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AdminEditSongComponent = (function () {
    function AdminEditSongComponent(router, activatedRoute, loginService, adminService, songService) {
        var _this = this;
        this.router = router;
        this.loginService = loginService;
        this.adminService = adminService;
        this.songService = songService;
        this.user = loginService.user;
        var id_song = activatedRoute.params.subscribe(function (params) {
            _this.songService.getSong(params['id_song']).subscribe(function (song) {
                _this.song = song;
                _this.artists = song.artistsOfSong;
            }, function (error) { return console.error(error); });
        });
    }
    AdminEditSongComponent.prototype.editSong = function (event, title, link) {
        var _this = this;
        event.preventDefault();
        this.adminService.editSong(this.song.id_song, title, link).subscribe(function (song) {
            _this.song = song;
        }, function (error) { return console.error(error); });
    };
    AdminEditSongComponent.prototype.editArtistSong = function (event, artistToRemove, artistToAdd) {
        var _this = this;
        event.preventDefault();
        this.adminService.editArtistSong(this.song.id_song, artistToRemove, artistToAdd).subscribe(function (song) {
            _this.song = song;
            _this.artists = song.artistsOfSong;
        }, function (error) { return console.error(error); });
    };
    AdminEditSongComponent.prototype.goToAdminHome = function () {
        this.router.navigate(['/admin-home']);
    };
    return AdminEditSongComponent;
}());
AdminEditSongComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(256),
        styles: [__webpack_require__(10), __webpack_require__(9), __webpack_require__(8), __webpack_require__(11)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__admin_service__["a" /* AdminService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__song_service__["a" /* SongService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__song_service__["a" /* SongService */]) === "function" && _e || Object])
], AdminEditSongComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=admin-edit-song.component.js.map

/***/ }),

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "\n#description p {\n    font-family: sans-serif;\n    font-size: 2em;\n    font-weight: bold;\n    color: white;\n    text-align: center;\n}\n\n#description {\n    text-align: center;\n    margin: 6em 0 4em 0;\n}\n\n#description img {\n    text-align: center;\n}\n\n#description span {\n    color: white;\n    text-align: center;\n}\n\n#name-jumbotron p {\n    font-family: sans-serif;\n    font-size: 2em;\n    font-weight: bold;\n    color: white;\n    text-align: center;\n}\n\n#form-image{\n    font-family: sans-serif;\n    font-size: 1em;\n    font-weight: bold;\n    color: white;\n    text-align: center;\n}\n\n#input-image {\n\tdisplay: -webkit-inline-box;\n}\n\n#input-titleImage{\n\tcolor:black;\n}\n\n#userlogo {\n    width: 200px;\n    height: 200px;\n    border-radius: 50%;\n    margin: auto;\n}\n\n#cajas {\n    padding: 10px 20px;\n    font-size: 2em;\n    border-radius: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 110:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__admin_service__ = __webpack_require__(42);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminHomeComponent = (function () {
    function AdminHomeComponent(router, activatedRoute, loginService, adminService) {
        this.router = router;
        this.loginService = loginService;
        this.adminService = adminService;
        this.user = loginService.user;
        this.getAllArtists();
    }
    AdminHomeComponent.prototype.getAllArtists = function () {
        var _this = this;
        this.adminService.getAllArtists().subscribe(function (artists) { _this.artists = artists; }, function (error) { return console.error(error); });
    };
    return AdminHomeComponent;
}());
AdminHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(257),
        styles: [__webpack_require__(10), __webpack_require__(9), __webpack_require__(8), __webpack_require__(11)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__admin_service__["a" /* AdminService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__admin_service__["a" /* AdminService */]) === "function" && _d || Object])
], AdminHomeComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=admin-home.component.js.map

/***/ }),

/***/ 111:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__song_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__artist_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tag_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var ArtistDetailComponent = (function () {
    //followers:User[];
    function ArtistDetailComponent(router, activatedRoute, artistService, songService, loginService, userService, tagService) {
        var _this = this;
        this.router = router;
        this.artistService = artistService;
        this.songService = songService;
        this.loginService = loginService;
        this.userService = userService;
        this.tagService = tagService;
        var id_artist = activatedRoute.params.subscribe(function (params) {
            _this.user = loginService.user;
            _this.artistService.getArtist(params['id_artist']).subscribe(function (artist) {
                _this.artist = artist,
                    _this.songs = artist.songsOfArtist;
                _this.getFavorites();
                //this.followers=artist.followersOfArtist;
                _this.isFollowed(artist.followersOfArtist);
                //this.artistService.getArtistFollowers(params['id_artist']).subscribe(
                // followers =>{
                //    this.followers=followers,
                //    this.isFollowed();
                //  },
                //  error =>  console.error(error)
                //  );
            }, function (error) { return console.error(error); });
        });
        this.getTopTag();
        this.getTopArtist();
    }
    ArtistDetailComponent.prototype.getArtist = function (id_artist) {
        var _this = this;
        this.artistService.getArtist(id_artist).subscribe(function (artist) { _this.artist = artist; }, function (error) { return console.error(error); });
    };
    ArtistDetailComponent.prototype.getTopArtist = function () {
        var _this = this;
        this.artistService.getTop3Artist().subscribe(function (topArtists) { return _this.topArtists = topArtists; }, function (error) { return console.error(error); });
    };
    ArtistDetailComponent.prototype.getTopTag = function () {
        var _this = this;
        this.tagService.getTop3Tag().subscribe(function (topTags) { return _this.topTags = topTags; }, function (error) { return console.error(error); });
    };
    ArtistDetailComponent.prototype.addFavorite = function (id_song) {
        var _this = this;
        this.songService.addFavorite(id_song).subscribe(function (favoriteSongs) {
            _this.loginService.reqIsLogged,
                _this.favoriteSongs = favoriteSongs,
                _this.isFavorite(favoriteSongs);
        }, function (error) { return console.error(error); });
    };
    ArtistDetailComponent.prototype.getFavorites = function () {
        var _this = this;
        if (this.loginService.isLogged) {
            this.userService.getMyFavorites(this.user.id_user).subscribe(function (favoriteSongs) {
                _this.favoriteSongs = favoriteSongs,
                    _this.isFavorite(favoriteSongs);
            }, function (error) { return console.error(error); });
        }
    };
    ArtistDetailComponent.prototype.isFavorite = function (favoriteSongs) {
        if (this.loginService.isLogged) {
            for (var _i = 0, _a = this.songs; _i < _a.length; _i++) {
                var song = _a[_i];
                for (var _b = 0, favoriteSongs_1 = favoriteSongs; _b < favoriteSongs_1.length; _b++) {
                    var favoriteSong = favoriteSongs_1[_b];
                    if (song.id_song === favoriteSong.id_song)
                        song.isIdLogged = true;
                } //secondfor
            } //first for
        }
    };
    ArtistDetailComponent.prototype.isFollowed = function (followers) {
        if (this.loginService.isLogged) {
            for (var _i = 0, followers_1 = followers; _i < followers_1.length; _i++) {
                var follower = followers_1[_i];
                if (follower.id_user === this.user.id_user)
                    this.artist.idLogged = true;
            }
        }
    };
    ArtistDetailComponent.prototype.removeFollow = function (id_artist) {
        var _this = this;
        this.artistService.removeFollow(id_artist).subscribe(function (artist) {
            _this.artist = artist,
                //this.followers=artist.followersOfArtist,
                _this.isFollowed(artist.followersOfArtist);
        }, function (error) { return console.error(error); });
    };
    ArtistDetailComponent.prototype.addFollow = function (id_artist) {
        var _this = this;
        this.artistService.addFollow(id_artist).subscribe(function (artist) {
            _this.artist = artist,
                //this.followers=artist.followersOfArtist,
                _this.isFollowed(artist.followersOfArtist);
        }, function (error) { return console.error(error); });
    };
    ArtistDetailComponent.prototype.goToFollowers = function (id_artist) {
        this.router.navigate(['/artist-followers', id_artist]);
    };
    return ArtistDetailComponent;
}());
ArtistDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(259),
        styles: [__webpack_require__(10), __webpack_require__(9), __webpack_require__(8), __webpack_require__(11)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__artist_service__["a" /* ArtistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__artist_service__["a" /* ArtistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__song_service__["a" /* SongService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__song_service__["a" /* SongService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_6__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__user_service__["a" /* UserService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_5__tag_service__["a" /* TagService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__tag_service__["a" /* TagService */]) === "function" && _g || Object])
], ArtistDetailComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=artist-detail.component.js.map

/***/ }),

/***/ 112:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__song_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__artist_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tag_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistFollowersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ArtistFollowersComponent = (function () {
    function ArtistFollowersComponent(router, activatedRoute, artistService, songService, loginService, tagService) {
        var _this = this;
        this.router = router;
        this.artistService = artistService;
        this.songService = songService;
        this.loginService = loginService;
        this.tagService = tagService;
        var id_artist = activatedRoute.params.subscribe(function (params) {
            _this.user = loginService.user;
            _this.artistService.getArtist(params['id_artist']).subscribe(function (artist) { return _this.artist = artist; }, function (error) { return console.error(error); });
            _this.artistService.getArtistFollowers(params['id_artist']).subscribe(function (followers) { return _this.followers = followers; }, function (error) { return console.error(error); });
        });
    } //constructor
    ArtistFollowersComponent.prototype.goToFollowers = function (id_artist) {
        this.router.navigate(['/artist-followers', id_artist]);
    };
    return ArtistFollowersComponent;
}());
ArtistFollowersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(260),
        styles: [__webpack_require__(10), __webpack_require__(9), __webpack_require__(8), __webpack_require__(11)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__artist_service__["a" /* ArtistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__artist_service__["a" /* ArtistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__song_service__["a" /* SongService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__song_service__["a" /* SongService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__tag_service__["a" /* TagService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__tag_service__["a" /* TagService */]) === "function" && _f || Object])
], ArtistFollowersComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=artist-followers.component.js.map

/***/ }),

/***/ 113:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ConfigComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ConfigComponent = (function () {
    function ConfigComponent(router, activatedRoute, loginService, userService) {
        var _this = this;
        this.router = router;
        this.loginService = loginService;
        this.userService = userService;
        //this.userLogged = loginService.user;
        var id_user = activatedRoute.params.subscribe(function (params) {
            if (loginService.isLogged) {
                _this.userService.getUser(params['id_user']).subscribe(function (user) { _this.userLogged = user; }, function (error) { return console.error(error); });
            }
        });
    }
    ConfigComponent.prototype.changeData = function (biography, country, city) {
        var _this = this;
        this.userLogged.city = city;
        this.userLogged.biography = biography;
        this.userLogged.country = country;
        this.userService.changeData(this.userLogged.id_user, biography, country, city).subscribe(function (user) {
            _this.userLogged = user,
                _this.loginService.reqIsLogged();
        }, function (error) { return console.error(error); });
    };
    ConfigComponent.prototype.changeImage = function (event) {
        var _this = this;
        var files = event.target.files;
        console.log(files);
        this.userService.changeImage(this.userLogged.id_user, files).subscribe(function (user) {
            _this.userLogged = user;
            _this.loginService.reqIsLogged();
            _this.router.navigate(['/config', _this.userLogged.id_user]);
        }, function (error) { return console.error(error); });
    };
    return ConfigComponent;
}());
ConfigComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(261),
        styles: [__webpack_require__(10), __webpack_require__(9), __webpack_require__(8), __webpack_require__(11)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _d || Object])
], ConfigComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=config.component.js.map

/***/ }),

/***/ 114:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playlist_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreatePlaylistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CreatePlaylistComponent = (function () {
    function CreatePlaylistComponent(router, activatedRoute, playlistService, userService, loginService) {
        this.router = router;
        this.playlistService = playlistService;
        this.userService = userService;
        this.loginService = loginService;
        this.tags = [];
        this.user = loginService.user;
    } //constructor
    CreatePlaylistComponent.prototype.createPlaylist = function (title, description, tag) {
        var _this = this;
        this.tag = { id_tag: 1, name: tag };
        this.tags.push(this.tag);
        this.date = new Date();
        console.log(this.date);
        this.playlist = { title: title, creatorName: this.user.name,
            creatorId: this.user.id_user };
        this.playlistService.createPlaylist(this.playlist, this.user.id_user, description, tag).subscribe(function (playlist) { return _this.goToEditPlaylist(playlist.id_playlist); }, function (error) { return console.error(error); });
    };
    CreatePlaylistComponent.prototype.goToEditPlaylist = function (id_playlist) {
        this.router.navigate(['edit-playlist', id_playlist]);
    };
    return CreatePlaylistComponent;
}());
CreatePlaylistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(262),
        styles: [__webpack_require__(11), __webpack_require__(10), __webpack_require__(9), __webpack_require__(8), __webpack_require__(24), __webpack_require__(36)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__playlist_service__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__playlist_service__["a" /* PlaylistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]) === "function" && _e || Object])
], CreatePlaylistComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=create-playlist.component.js.map

/***/ }),

/***/ 115:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playlist_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditPlaylistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var EditPlaylistComponent = (function () {
    function EditPlaylistComponent(router, activatedRoute, playlistService, userService, loginService) {
        var _this = this;
        this.router = router;
        this.playlistService = playlistService;
        this.userService = userService;
        this.loginService = loginService;
        var id_playlist = activatedRoute.params.subscribe(function (params) {
            _this.user = loginService.user;
            _this.playlistService.getPlaylist(params['id_playlist']).subscribe(function (playlist) {
                if (playlist.creatorId == _this.user.id_user) {
                    _this.playlist = playlist;
                    _this.songs = _this.playlist.songsOfPlaylist;
                    _this.tags = _this.playlist.tagsOfPlaylist;
                }
            }, function (error) { return console.error(error); });
            var id_user = _this.user.id_user;
            _this.userService.getUserFavorites(id_user).subscribe(function (favoriteSongs) { return _this.favoriteSongs = favoriteSongs; }, function (error) { return console.error(error); });
        });
    } //constructor
    EditPlaylistComponent.prototype.changeUserPlaylist = function (event, title, description, tagToRemove, tagToAdd) {
        var _this = this;
        event.preventDefault();
        console.log("Title: " + title);
        console.log("Description: " + description);
        console.log("TagToRemove: " + tagToRemove);
        console.log("TagToAdd: " + tagToAdd);
        if (title !== "")
            this.playlist.title = title;
        if (description !== "")
            this.playlist.description = description;
        //if(tagToAdd===this.tagToAddWritten) tagToAdd="";
        //if(tagToRemove===this.tagToRemoveWritten) tagToRemove="";
        this.playlistService.changeUserPlaylist(this.playlist, tagToAdd, tagToRemove).subscribe(function (playlist) {
            _this.playlist = playlist,
                _this.tags = playlist.tagsOfPlaylist;
        }, function (error) { return console.error(error); });
    };
    EditPlaylistComponent.prototype.addFavoriteSongToPlaylist = function (event, id_song) {
        var _this = this;
        event.preventDefault();
        this.playlistService.addFavoriteSongToPlaylist(this.playlist.id_playlist, id_song).subscribe(function (playlist) {
            _this.playlist = playlist,
                _this.songs = playlist.songsOfPlaylist;
        }, function (error) { return console.error(error); });
    };
    EditPlaylistComponent.prototype.addSong = function (event, title, artist) {
        var _this = this;
        console.log(title);
        console.log(artist);
        event.preventDefault();
        this.playlistService.addSongToPlaylist(this.playlist.id_playlist, title, artist).subscribe(function (playlist) {
            _this.playlist = playlist,
                _this.songs = playlist.songsOfPlaylist;
        }, function (error) { return console.error(error); });
    };
    EditPlaylistComponent.prototype.removeSong = function (event, id_song) {
        var _this = this;
        event.preventDefault();
        this.playlistService.removeSong(this.playlist.id_playlist, id_song).subscribe(function (playlist) {
            _this.playlist = playlist,
                _this.songs = playlist.songsOfPlaylist;
        }, function (error) { return console.error(error); });
    };
    return EditPlaylistComponent;
}());
EditPlaylistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(263),
        styles: [__webpack_require__(11), __webpack_require__(10), __webpack_require__(9), __webpack_require__(8), __webpack_require__(24), __webpack_require__(36)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__playlist_service__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__playlist_service__["a" /* PlaylistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]) === "function" && _e || Object])
], EditPlaylistComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=edit-playlist.component.js.map

/***/ }),

/***/ 116:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__playlist_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__artist_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tag_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomeComponent = (function () {
    function HomeComponent(playlistService, artistService, tagService, loginService, userService) {
        this.playlistService = playlistService;
        this.artistService = artistService;
        this.tagService = tagService;
        this.loginService = loginService;
        this.userService = userService;
        //topPlaylists:Playlist[];
        this.topPlaylists = [];
        this.topArtists = [];
        this.topTags = [];
        this.admin = loginService.isAdmin;
        if (!this.admin) {
            this.getTopPlaylist();
            this.getTopArtist();
            this.getTopTag();
            this.user = loginService.user;
            this.login = loginService.isLogged;
            if (this.login === true) {
                this.getWallPlaylistsLogged();
                this.getArtistsFollowed();
            }
            else {
                this.getWallPlaylistsNotLogged();
            }
        }
    }
    HomeComponent.prototype.getTopPlaylist = function () {
        var _this = this;
        this.playlistService.getTop3Playlist().subscribe(function (topPlaylists) { return _this.topPlaylists = topPlaylists; }, function (error) { return console.error(error); });
    };
    HomeComponent.prototype.getTopArtist = function () {
        var _this = this;
        this.artistService.getTop3Artist().subscribe(function (topArtists) { return _this.topArtists = topArtists; }, function (error) { return console.error(error); });
    };
    HomeComponent.prototype.getTopTag = function () {
        var _this = this;
        this.tagService.getTop3Tag().subscribe(function (topTags) { return _this.topTags = topTags; }, function (error) { return console.error(error); });
    };
    HomeComponent.prototype.getWallPlaylistsNotLogged = function () {
        var _this = this;
        this.playlistService.getWallPlaylistsNotLogged().subscribe(function (playlists) { return _this.playlists = playlists; }, function (error) { return console.error(error); });
    };
    HomeComponent.prototype.getWallPlaylistsLogged = function () {
        var _this = this;
        this.playlistService.getWallPlaylistsLogged(this.user.id_user).subscribe(function (playlists) { return _this.playlists = playlists; }, function (error) { return console.error(error); });
    };
    HomeComponent.prototype.getArtistsFollowed = function () {
        var _this = this;
        this.userService.getArtistsFollowed(this.user.id_user).subscribe(function (artistsFollowed) { return _this.artistsFollowed = artistsFollowed; }, function (error) { return console.error(error); });
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(264),
        styles: [__webpack_require__(10), __webpack_require__(9), __webpack_require__(8)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__playlist_service__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__playlist_service__["a" /* PlaylistService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__artist_service__["a" /* ArtistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__artist_service__["a" /* ArtistService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__tag_service__["a" /* TagService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__tag_service__["a" /* TagService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */]) === "function" && _e || Object])
], HomeComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=home-playlist.component.js.map

/***/ }),

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = (function () {
    function LoginComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
    }
    LoginComponent.prototype.logIn = function (event, user, pass) {
        var _this = this;
        event.preventDefault();
        this.loginService.logIn(user, pass).subscribe(function (u) {
            console.log(u),
                _this.navigate();
        }, 
        //error => alert('Invalid user or password')
        function (error) {
            console.log(error),
                alert('Invalid user or password');
        });
    };
    LoginComponent.prototype.logOut = function () {
        this.loginService.logOut().subscribe(function (response) { }, function (error) { return console.log('Error when trying to log out: ' + error); });
    };
    LoginComponent.prototype.navigate = function () {
        this.router.navigate(['/']);
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'login',
        template: __webpack_require__(265),
        styles: [__webpack_require__(10), __webpack_require__(9), __webpack_require__(8), __webpack_require__(142), __webpack_require__(143)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _b || Object])
], LoginComponent);

var _a, _b;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ 118:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__song_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyFavoritesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyFavoritesComponent = (function () {
    function MyFavoritesComponent(router, activatedRoute, songService, userService, loginService) {
        var _this = this;
        this.router = router;
        this.songService = songService;
        this.userService = userService;
        this.loginService = loginService;
        activatedRoute.params.subscribe(function (params) {
            loginService.reqIsLogged();
            _this.user = _this.loginService.user;
            var id_user = _this.user.id_user;
            _this.userService.getMyFavorites(params['id_user']).subscribe(function (songs) { return _this.songs = songs; }, function (error) { return console.error(error); });
        });
    }
    MyFavoritesComponent.prototype.removeFavorite = function (id_song) {
        var _this = this;
        this.songService.removeFavorite(id_song).subscribe(function (songs) { return _this.songs = songs; }, function (error) { return console.error(error); });
    };
    MyFavoritesComponent.prototype.goToFollowers = function (id_user) {
        this.router.navigate(['/my-followers', id_user]);
    };
    MyFavoritesComponent.prototype.goToFollowing = function (id_user) {
        this.router.navigate(['/my-following', id_user]);
    };
    return MyFavoritesComponent;
}());
MyFavoritesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(266),
        styles: [__webpack_require__(11), __webpack_require__(10), __webpack_require__(9), __webpack_require__(8), __webpack_require__(24), __webpack_require__(36)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__song_service__["a" /* SongService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__song_service__["a" /* SongService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]) === "function" && _e || Object])
], MyFavoritesComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=my-favorites.component.js.map

/***/ }),

/***/ 119:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__artist_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tag_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyFollowersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyFollowersComponent = (function () {
    function MyFollowersComponent(router, activatedRoute, artistService, userService, loginService, tagService) {
        var _this = this;
        this.router = router;
        this.artistService = artistService;
        this.userService = userService;
        this.loginService = loginService;
        this.tagService = tagService;
        var id_user = activatedRoute.params.subscribe(function (params) {
            loginService.reqIsLogged();
            _this.user = loginService.user;
            _this.followers = _this.user.followers;
        });
    } //constructor
    MyFollowersComponent.prototype.goToFollowers = function (id_user) {
        this.router.navigate(['/my-followers', id_user]);
    };
    MyFollowersComponent.prototype.goToFollowing = function (id_user) {
        this.router.navigate(['/my-following', id_user]);
    };
    return MyFollowersComponent;
}());
MyFollowersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(267),
        styles: [__webpack_require__(10), __webpack_require__(9), __webpack_require__(8), __webpack_require__(11)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__artist_service__["a" /* ArtistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__artist_service__["a" /* ArtistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__tag_service__["a" /* TagService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__tag_service__["a" /* TagService */]) === "function" && _f || Object])
], MyFollowersComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=my-followers.component.js.map

/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = (function () {
    function UserService(http) {
        this.http = http;
    }
    ;
    UserService.prototype.getUserPlaylist = function (id_user) {
        var _this = this;
        //let url="http://localhost:4200/api/UserPlaylists/"+id_user;
        var url = "https://localhost:8443/api/UserPlaylists/" + id_user;
        console.log(url);
        return this.http.get(url).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    UserService.prototype.getMyPlaylist = function (id_user) {
        var _this = this;
        //let url="http://localhost:4200/api/MyPlaylists/"+id_user;
        var url = "https://localhost:8443/api/MyPlaylists/" + id_user;
        console.log(url);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true });
        return this.http.get(url, options).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    UserService.prototype.getUserLike = function (id_user) {
        var _this = this;
        //let url="http://localhost:4200/api/Playlist/UserLikes/"+id_user;
        var url = "https://localhost:8443/api/Playlist/UserLikes/" + id_user;
        console.log(url);
        return this.http.get(url).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    UserService.prototype.getMyLikes = function (id_user) {
        var _this = this;
        //let url="http://localhost:4200/api/Playlist/MyLikes/"+id_user;
        var url = "https://localhost:8443/api/Playlist/MyLikes/" + id_user;
        console.log(url);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true });
        return this.http.get(url, options).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    UserService.prototype.getUserFavorites = function (id_user) {
        var _this = this;
        //let url="http://localhost:4200/api/UserFavorites/"+id_user;
        var url = "https://localhost:8443/api/UserFavorites/" + id_user;
        console.log(url);
        return this.http.get(url).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    UserService.prototype.getMyFavorites = function (id_user) {
        var _this = this;
        //let url="http://localhost:4200/api/MyFavorites/"+id_user;
        var url = "https://localhost:8443/api/MyFavorites/" + id_user;
        console.log(url);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true });
        return this.http.get(url, options).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    UserService.prototype.getUser = function (id_user) {
        var _this = this;
        //let url="http://localhost:4200/api/User/"+id_user;
        var url = "https://localhost:8443/api/User/" + id_user;
        console.log(url);
        return this.http.get(url).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    UserService.prototype.getUserByName = function (name) {
        var _this = this;
        //let url="http://localhost:4200/api/User/SearchByName?key="+name;
        var url = "https://localhost:8443/api/User/SearchByName?key=" + name;
        console.log(url);
        return this.http.get(url).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    UserService.prototype.createNewUser = function (user) {
        var _this = this;
        //let url="http://localhost:4200/api/NewUser";
        var url = "https://localhost:8443/api/NewUser";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({
            'Content-Type': 'application/json',
        });
        return this.http.post(url, user, headers)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    UserService.prototype.getArtistsFollowed = function (id_user) {
        var _this = this;
        //let url="http://localhost:4200/api/ArtistFollowedByUser/"+id_user;
        var url = "https://localhost:8443/api/ArtistFollowedByUser/" + id_user;
        console.log(url);
        return this.http.get(url).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    UserService.prototype.addFollow = function (id_user) {
        var _this = this;
        //let url="http://localhost:4200/api/FollowUser/"+id_user;
        var url = "https://localhost:8443/api/FollowUser/" + id_user;
        //const body = JSON.stringify(playlist);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({
            'Content-Type': 'application/json',
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.post(url, options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    UserService.prototype.removeFollow = function (id_user) {
        var _this = this;
        //let url="http://localhost:4200/api/NotFollowUser/"+id_user;
        var url = "https://localhost:8443/api/NotFollowUser/" + id_user;
        //const body = JSON.stringify(playlist);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({
            'Content-Type': 'application/json',
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.delete(url, options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    UserService.prototype.changeData = function (id_user, biography, country, city) {
        var _this = this;
        var params = '?biography=' + biography + '&country=' + country + '&city=' + city;
        //let url="http://localhost:4200/api/ConfigUserData/"+id_user+params;
        var url = "https://localhost:8443/api/ConfigUserData/" + id_user + params;
        console.log(url);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({
            'Content-Type': 'application/json',
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.put(url, options).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    UserService.prototype.changeImage = function (id_user, files) {
        var _this = this;
        //let url="http://localhost:4200/api/image/upload/"+id_user;
        var url = "https://localhost:8443/api/image/upload/" + id_user;
        var formData = new FormData();
        for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
            var file = files_1[_i];
            formData.append('file', file);
        }
        //console.log(files[0]);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({});
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        headers.delete("Content-Type");
        return this.http.post(url, formData, options).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    UserService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Server error (' + error.status + '): ' + error.text);
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], UserService);

var _a;
//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ 120:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__artist_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tag_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyFollowingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyFollowingComponent = (function () {
    function MyFollowingComponent(router, activatedRoute, artistService, userService, loginService, tagService) {
        var _this = this;
        this.router = router;
        this.artistService = artistService;
        this.userService = userService;
        this.loginService = loginService;
        this.tagService = tagService;
        var id_user = activatedRoute.params.subscribe(function (params) {
            loginService.reqIsLogged();
            _this.user = loginService.user;
            _this.following = _this.user.following;
        });
    } //constructor
    MyFollowingComponent.prototype.goToFollowers = function (id_user) {
        this.router.navigate(['/my-followers', id_user]);
    };
    MyFollowingComponent.prototype.goToFollowing = function (id_user) {
        this.router.navigate(['/my-following', id_user]);
    };
    return MyFollowingComponent;
}());
MyFollowingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(268),
        styles: [__webpack_require__(10), __webpack_require__(9), __webpack_require__(8), __webpack_require__(11)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__artist_service__["a" /* ArtistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__artist_service__["a" /* ArtistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__tag_service__["a" /* TagService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__tag_service__["a" /* TagService */]) === "function" && _f || Object])
], MyFollowingComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=my-following.component.js.map

/***/ }),

/***/ 121:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playlist_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyLikesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyLikesComponent = (function () {
    function MyLikesComponent(router, activatedRoute, playlistService, userService, loginService) {
        var _this = this;
        this.router = router;
        this.playlistService = playlistService;
        this.userService = userService;
        this.loginService = loginService;
        activatedRoute.params.subscribe(function (params) {
            loginService.reqIsLogged();
            _this.user = _this.loginService.user;
            var id_user = _this.user.id_user;
            _this.userService.getMyLikes(params['id_user']).subscribe(function (playlists) { return _this.playlists = playlists; }, function (error) { return console.error(error); });
        });
    }
    MyLikesComponent.prototype.removeLike = function (id_playlist) {
        var _this = this;
        this.playlistService.removeLike(id_playlist).subscribe(function (playlists) { return _this.playlists = playlists; }, function (error) { return console.error(error); });
    };
    MyLikesComponent.prototype.goToFollowers = function (id_user) {
        this.router.navigate(['/my-followers', id_user]);
    };
    MyLikesComponent.prototype.goToFollowing = function (id_user) {
        this.router.navigate(['/my-following', id_user]);
    };
    return MyLikesComponent;
}());
MyLikesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(269),
        styles: [__webpack_require__(11), __webpack_require__(10), __webpack_require__(9), __webpack_require__(8), __webpack_require__(24), __webpack_require__(36)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__playlist_service__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__playlist_service__["a" /* PlaylistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]) === "function" && _e || Object])
], MyLikesComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=my-likes.component.js.map

/***/ }),

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playlist_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyPlaylistsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyPlaylistsComponent = (function () {
    function MyPlaylistsComponent(router, activatedRoute, playlistService, userService, loginService) {
        var _this = this;
        this.router = router;
        this.playlistService = playlistService;
        this.userService = userService;
        this.loginService = loginService;
        activatedRoute.params.subscribe(function (params) {
            loginService.reqIsLogged();
            _this.user = _this.loginService.user;
            var id_user = _this.user.id_user;
            _this.userService.getMyPlaylist(params['id_user']).subscribe(function (playlists) { return _this.playlists = playlists; }, function (error) { return console.error(error); });
        });
    }
    MyPlaylistsComponent.prototype.remove = function (id_playlist) {
        var _this = this;
        this.playlistService.removePlaylist(id_playlist).subscribe(function (playlists) { return _this.playlists = playlists; }, function (error) { return console.error(error); });
    };
    MyPlaylistsComponent.prototype.goToFollowers = function (id_user) {
        this.router.navigate(['/my-followers', id_user]);
    };
    MyPlaylistsComponent.prototype.goToFollowing = function (id_user) {
        this.router.navigate(['/my-following', id_user]);
    };
    return MyPlaylistsComponent;
}());
MyPlaylistsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(270),
        styles: [__webpack_require__(11), __webpack_require__(10), __webpack_require__(9), __webpack_require__(8), __webpack_require__(24), __webpack_require__(36)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__playlist_service__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__playlist_service__["a" /* PlaylistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]) === "function" && _e || Object])
], MyPlaylistsComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=my-playlists.component.js.map

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playlist_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__song_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__user_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistDetailComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var PlaylistDetailComponent = (function () {
    function PlaylistDetailComponent(router, activatedRoute, playlistService, loginService, songService, userService) {
        var _this = this;
        this.router = router;
        this.playlistService = playlistService;
        this.loginService = loginService;
        this.songService = songService;
        this.userService = userService;
        var id_playlist = activatedRoute.params.subscribe(function (params) {
            _this.user = loginService.user;
            _this.playlistService.getPlaylist(params['id_playlist']).subscribe(function (playlist) {
                _this.playlist = playlist,
                    _this.songs = playlist.songsOfPlaylist;
                _this.getFavorites();
                _this.getMyLikes();
            }, function (error) { return console.error(error); });
        });
        this.getTopPlaylist();
    }
    PlaylistDetailComponent.prototype.getMyLikes = function () {
        var _this = this;
        if (this.loginService.isLogged) {
            this.userService.getMyLikes(this.user.id_user).subscribe(function (likedPlaylists) {
                _this.likedPlaylists = likedPlaylists,
                    _this.isLiked(likedPlaylists);
            }, function (error) { return console.error(error); });
        }
    };
    PlaylistDetailComponent.prototype.isLiked = function (likedPlaylists) {
        for (var _i = 0, likedPlaylists_1 = likedPlaylists; _i < likedPlaylists_1.length; _i++) {
            var playlist = likedPlaylists_1[_i];
            if (playlist.id_playlist === this.playlist.id_playlist)
                this.playlist.isIdLogged = true;
        }
    };
    PlaylistDetailComponent.prototype.getTopPlaylist = function () {
        var _this = this;
        this.playlistService.getTop3Playlist().subscribe(function (topPlaylists) { return _this.topPlaylists = topPlaylists; }, function (error) { return console.error(error); });
    };
    PlaylistDetailComponent.prototype.addLike = function (id_playlist) {
        var _this = this;
        this.playlistService.addLike(id_playlist).subscribe(function (likedPlaylists) {
            _this.likedPlaylists = likedPlaylists,
                _this.isLiked(likedPlaylists);
        }, function (error) { return console.error(error); });
    };
    PlaylistDetailComponent.prototype.addFavorite = function (id_song) {
        var _this = this;
        this.songService.addFavorite(id_song).subscribe(function (favoriteSongs) {
            _this.loginService.reqIsLogged,
                _this.favoriteSongs = favoriteSongs,
                _this.isFavorite(favoriteSongs);
        }, function (error) { return console.error(error); });
    };
    PlaylistDetailComponent.prototype.getFavorites = function () {
        var _this = this;
        if (this.loginService.isLogged) {
            this.userService.getMyFavorites(this.user.id_user).subscribe(function (favoriteSongs) {
                _this.favoriteSongs = favoriteSongs,
                    _this.isFavorite(favoriteSongs);
            }, function (error) { return console.error(error); });
        }
    };
    PlaylistDetailComponent.prototype.isFavorite = function (favoriteSongs) {
        if (this.loginService.isLogged) {
            for (var _i = 0, _a = this.songs; _i < _a.length; _i++) {
                var song = _a[_i];
                for (var _b = 0, favoriteSongs_1 = favoriteSongs; _b < favoriteSongs_1.length; _b++) {
                    var favoriteSong = favoriteSongs_1[_b];
                    if (song.id_song === favoriteSong.id_song)
                        song.isIdLogged = true;
                } //secondfor
            } //first for
        }
    };
    return PlaylistDetailComponent;
}());
PlaylistDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(272),
        styles: [__webpack_require__(10), __webpack_require__(9), __webpack_require__(8), __webpack_require__(24)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__playlist_service__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__playlist_service__["a" /* PlaylistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__song_service__["a" /* SongService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__song_service__["a" /* SongService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__user_service__["a" /* UserService */]) === "function" && _f || Object])
], PlaylistDetailComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=playlist-detail.component.js.map

/***/ }),

/***/ 124:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__playlist_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tag_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__artist_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_router__ = __webpack_require__(5);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var SearchComponent = (function () {
    function SearchComponent(router, activatedRoute, playlistService, artistService, tagService, userService, loginService) {
        var _this = this;
        this.router = router;
        this.playlistService = playlistService;
        this.artistService = artistService;
        this.tagService = tagService;
        this.userService = userService;
        this.loginService = loginService;
        this.topArtists = [];
        this.topPlaylists = [];
        this.topTags = [];
        var key = activatedRoute.params.subscribe(function (params) {
            _this.tagPlaylists = [];
            _this.titlePlaylists = [];
            _this.playlistService.getPlaylistByTag(params['key']).subscribe(function (tagPlaylists) {
                _this.tagPlaylists = tagPlaylists,
                    _this.key = activatedRoute.snapshot.params['key'];
            }, function (error) { return console.error(error); });
            _this.playlistService.getPlaylistByTitle(params['key']).subscribe(function (titlePlaylists) {
                _this.titlePlaylists = titlePlaylists,
                    _this.key = activatedRoute.snapshot.params['key'];
            }, function (error) { return console.error(error); });
            _this.userService.getUserByName(params['key']).subscribe(function (user) { _this.userByName = user; }, function (error) { return console.log(error); });
        });
        this.getTopPlaylist();
        this.getTopArtist();
        this.getTopTag();
        this.login = loginService.isLogged;
    }
    SearchComponent.prototype.getTopPlaylist = function () {
        var _this = this;
        this.playlistService.getTop3Playlist().subscribe(function (topPlaylists) { return _this.topPlaylists = topPlaylists; }, function (error) { return console.error(error); });
    };
    SearchComponent.prototype.getTopArtist = function () {
        var _this = this;
        this.artistService.getTop3Artist().subscribe(function (topArtists) { return _this.topArtists = topArtists; }, function (error) { return console.error(error); });
    };
    SearchComponent.prototype.getTopTag = function () {
        var _this = this;
        this.tagService.getTop3Tag().subscribe(function (topTags) { return _this.topTags = topTags; }, function (error) { return console.error(error); });
    };
    return SearchComponent;
}());
SearchComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(273),
        styles: [__webpack_require__(10), __webpack_require__(9), __webpack_require__(8), __webpack_require__(24)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__playlist_service__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__playlist_service__["a" /* PlaylistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__artist_service__["a" /* ArtistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__artist_service__["a" /* ArtistService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__tag_service__["a" /* TagService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__tag_service__["a" /* TagService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */]) === "function" && _g || Object])
], SearchComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=search.component.js.map

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SignInComponent = (function () {
    function SignInComponent(router, loginService, userService) {
        this.router = router;
        this.loginService = loginService;
        this.userService = userService;
        this.user = { name: "", country: "", passwordHash: "", email: "", roles: ["ROLE_USER"] };
    }
    SignInComponent.prototype.signIn = function (event, username, email, password) {
        var _this = this;
        event.preventDefault();
        this.user.name = username;
        this.user.email = email;
        this.user.passwordHash = password;
        this.userService.createNewUser(this.user).subscribe(function (user) {
            console.log(user);
            _this.goToLogin();
        }, function (error) { return console.error(error); });
    };
    SignInComponent.prototype.goToLogin = function () {
        this.router.navigate(['login']);
    };
    return SignInComponent;
}());
SignInComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(274),
        styles: [__webpack_require__(10), __webpack_require__(9), __webpack_require__(8), __webpack_require__(142), __webpack_require__(143)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _c || Object])
], SignInComponent);

var _a, _b, _c;
//# sourceMappingURL=sign-in.component.js.map

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playlist_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFavoriteComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserFavoriteComponent = (function () {
    function UserFavoriteComponent(router, activatedRoute, playlistService, userService, loginService) {
        var _this = this;
        this.router = router;
        this.playlistService = playlistService;
        this.userService = userService;
        this.loginService = loginService;
        var id_user = activatedRoute.params.subscribe(function (params) {
            _this.userLogged = loginService.user;
            _this.followed = false;
            _this.userService.getUserFavorites(params['id_user']).subscribe(function (songs) { return _this.songs = songs; }, function (error) { return console.error(error); });
            _this.userService.getUser(params['id_user']).subscribe(function (user) {
                _this.user = user,
                    _this.isFollowedByUserLogged();
            }, function (error) { return console.error(error); });
        });
    }
    UserFavoriteComponent.prototype.goToFollowers = function (id_user) {
        this.router.navigate(['/user-followers', id_user]);
    };
    UserFavoriteComponent.prototype.goToFollowing = function (id_user) {
        this.router.navigate(['/user-following', id_user]);
    };
    UserFavoriteComponent.prototype.isFollowedByUserLogged = function () {
        var userLogged;
        var following;
        userLogged = this.loginService.user;
        if (userLogged) {
            following = userLogged.following;
            for (var _i = 0, following_1 = following; _i < following_1.length; _i++) {
                var follow = following_1[_i];
                if (follow.id_user === this.user.id_user) {
                    this.followed = true;
                }
            }
        }
        else {
            this.followed = true;
        }
    };
    UserFavoriteComponent.prototype.addFollow = function (id_user) {
        var _this = this;
        this.userService.addFollow(id_user).subscribe(function (userLogged) {
            _this.userLogged = userLogged,
                _this.followed = true;
            _this.loginService.reqIsLogged();
        }, function (error) { return console.error(error); });
    };
    UserFavoriteComponent.prototype.removeFollow = function (id_user) {
        var _this = this;
        this.userService.removeFollow(id_user).subscribe(function (userLogged) {
            _this.userLogged = userLogged,
                _this.followed = false;
            _this.loginService.reqIsLogged();
        }, function (error) { return console.error(error); });
    };
    return UserFavoriteComponent;
}());
UserFavoriteComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(275),
        styles: [__webpack_require__(11), __webpack_require__(10), __webpack_require__(9), __webpack_require__(8), __webpack_require__(24), __webpack_require__(36)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__playlist_service__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__playlist_service__["a" /* PlaylistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]) === "function" && _e || Object])
], UserFavoriteComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=user-favorites.component.js.map

/***/ }),

/***/ 127:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__artist_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tag_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFollowersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserFollowersComponent = (function () {
    function UserFollowersComponent(router, activatedRoute, artistService, userService, loginService, tagService) {
        var _this = this;
        this.router = router;
        this.artistService = artistService;
        this.userService = userService;
        this.loginService = loginService;
        this.tagService = tagService;
        var id_user = activatedRoute.params.subscribe(function (params) {
            _this.userLogged = loginService.user;
            _this.followed = false;
            _this.userService.getUser(params['id_user']).subscribe(function (user) {
                _this.user = user,
                    _this.followers = user.followers;
                _this.isFollowedByUserLogged();
            }, function (error) { return console.error(error); });
        });
    } //constructor
    UserFollowersComponent.prototype.goToFollowers = function (id_user) {
        this.router.navigate(['/user-followers', id_user]);
    };
    UserFollowersComponent.prototype.goToFollowing = function (id_user) {
        this.router.navigate(['/user-following', id_user]);
    };
    UserFollowersComponent.prototype.isFollowedByUserLogged = function () {
        var userLogged;
        var following;
        userLogged = this.loginService.user;
        if (userLogged) {
            following = userLogged.following;
            for (var _i = 0, following_1 = following; _i < following_1.length; _i++) {
                var follow = following_1[_i];
                if (follow.id_user === this.user.id_user) {
                    this.followed = true;
                }
            }
        }
        else {
            this.followed = true;
        }
    };
    UserFollowersComponent.prototype.addFollow = function (id_user) {
        var _this = this;
        this.userService.addFollow(id_user).subscribe(function (userLogged) {
            _this.userLogged = userLogged,
                _this.followed = true;
            _this.loginService.reqIsLogged();
        }, function (error) { return console.error(error); });
    };
    UserFollowersComponent.prototype.removeFollow = function (id_user) {
        var _this = this;
        this.userService.removeFollow(id_user).subscribe(function (userLogged) {
            _this.userLogged = userLogged,
                _this.followed = false;
            _this.loginService.reqIsLogged();
        }, function (error) { return console.error(error); });
    };
    return UserFollowersComponent;
}());
UserFollowersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(276),
        styles: [__webpack_require__(10), __webpack_require__(9), __webpack_require__(8), __webpack_require__(11)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__artist_service__["a" /* ArtistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__artist_service__["a" /* ArtistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__tag_service__["a" /* TagService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__tag_service__["a" /* TagService */]) === "function" && _f || Object])
], UserFollowersComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=user-followers.component.js.map

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__artist_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__login_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tag_service__ = __webpack_require__(27);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserFollowingComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var UserFollowingComponent = (function () {
    function UserFollowingComponent(router, activatedRoute, artistService, userService, loginService, tagService) {
        var _this = this;
        this.router = router;
        this.artistService = artistService;
        this.userService = userService;
        this.loginService = loginService;
        this.tagService = tagService;
        var id_user = activatedRoute.params.subscribe(function (params) {
            _this.followed = false;
            _this.userLogged = loginService.user;
            _this.userService.getUser(params['id_user']).subscribe(function (user) {
                _this.user = user,
                    _this.following = user.following;
                _this.isFollowedByUserLogged();
            }, function (error) { return console.error(error); });
        });
    } //constructor
    UserFollowingComponent.prototype.goToFollowers = function (id_user) {
        this.router.navigate(['/user-followers', id_user]);
    };
    UserFollowingComponent.prototype.goToFollowing = function (id_user) {
        this.router.navigate(['/user-following', id_user]);
    };
    UserFollowingComponent.prototype.isFollowedByUserLogged = function () {
        var userLogged;
        var following;
        userLogged = this.loginService.user;
        if (userLogged) {
            following = userLogged.following;
            for (var _i = 0, following_1 = following; _i < following_1.length; _i++) {
                var follow = following_1[_i];
                if (follow.id_user === this.user.id_user) {
                    this.followed = true;
                }
            }
        }
        else {
            this.followed = true;
        }
    };
    UserFollowingComponent.prototype.addFollow = function (id_user) {
        var _this = this;
        this.userService.addFollow(id_user).subscribe(function (userLogged) {
            _this.userLogged = userLogged,
                _this.followed = true;
            _this.loginService.reqIsLogged();
        }, function (error) { return console.error(error); });
    };
    UserFollowingComponent.prototype.removeFollow = function (id_user) {
        var _this = this;
        this.userService.removeFollow(id_user).subscribe(function (userLogged) {
            _this.userLogged = userLogged,
                _this.followed = false;
            _this.loginService.reqIsLogged();
        }, function (error) { return console.error(error); });
    };
    return UserFollowingComponent;
}());
UserFollowingComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(277),
        styles: [__webpack_require__(10), __webpack_require__(9), __webpack_require__(8), __webpack_require__(11)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__artist_service__["a" /* ArtistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__artist_service__["a" /* ArtistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__login_service__["a" /* LoginService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__tag_service__["a" /* TagService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__tag_service__["a" /* TagService */]) === "function" && _f || Object])
], UserFollowingComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=user-following.component.js.map

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playlist_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserLikeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserLikeComponent = (function () {
    function UserLikeComponent(router, activatedRoute, playlistService, userService, loginService) {
        var _this = this;
        this.router = router;
        this.playlistService = playlistService;
        this.userService = userService;
        this.loginService = loginService;
        var id_user = activatedRoute.params.subscribe(function (params) {
            _this.followed = false;
            _this.userLogged = _this.loginService.user;
            _this.userService.getUserLike(params['id_user']).subscribe(function (playlists) { return _this.playlists = playlists; }, function (error) { return console.error(error); });
            _this.userService.getUser(params['id_user']).subscribe(function (user) {
                _this.user = user,
                    _this.isFollowedByUserLogged();
            }, function (error) { return console.error(error); });
            //this.getProfileImage();
        });
    }
    UserLikeComponent.prototype.goToFollowers = function (id_user) {
        this.router.navigate(['/user-followers', id_user]);
    };
    UserLikeComponent.prototype.goToFollowing = function (id_user) {
        this.router.navigate(['/user-following', id_user]);
    };
    UserLikeComponent.prototype.isFollowedByUserLogged = function () {
        var userLogged;
        var following;
        userLogged = this.loginService.user;
        if (userLogged) {
            following = userLogged.following;
            for (var _i = 0, following_1 = following; _i < following_1.length; _i++) {
                var follow = following_1[_i];
                if (follow.id_user === this.user.id_user) {
                    this.followed = true;
                }
            }
        }
        else {
            this.followed = true;
        }
    };
    UserLikeComponent.prototype.addFollow = function (id_user) {
        var _this = this;
        this.userService.addFollow(id_user).subscribe(function (userLogged) {
            _this.userLogged = userLogged,
                _this.followed = true;
            _this.loginService.reqIsLogged();
        }, function (error) { return console.error(error); });
    };
    UserLikeComponent.prototype.removeFollow = function (id_user) {
        var _this = this;
        this.userService.removeFollow(id_user).subscribe(function (userLogged) {
            _this.userLogged = userLogged,
                _this.followed = false;
            _this.loginService.reqIsLogged();
        }, function (error) { return console.error(error); });
    };
    return UserLikeComponent;
}());
UserLikeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(278),
        styles: [__webpack_require__(11), __webpack_require__(10), __webpack_require__(9), __webpack_require__(8), __webpack_require__(24), __webpack_require__(36)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__playlist_service__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__playlist_service__["a" /* PlaylistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]) === "function" && _e || Object])
], UserLikeComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=user-likes.component.js.map

/***/ }),

/***/ 130:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__playlist_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__login_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_service__ = __webpack_require__(12);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPlaylistComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var UserPlaylistComponent = (function () {
    function UserPlaylistComponent(router, activatedRoute, playlistService, userService, loginService) {
        var _this = this;
        this.router = router;
        this.playlistService = playlistService;
        this.userService = userService;
        this.loginService = loginService;
        var id_user = activatedRoute.params.subscribe(function (params) {
            _this.followed = false;
            _this.userLogged = _this.loginService.user;
            _this.userService.getUserPlaylist(params['id_user']).subscribe(function (playlists) { return _this.playlists = playlists; }, function (error) { return console.error(error); });
            _this.userService.getUser(params['id_user']).subscribe(function (user) {
                _this.user = user,
                    _this.isFollowedByUserLogged();
            }, function (error) { return console.error(error); });
        });
    } //constructor
    UserPlaylistComponent.prototype.goToFollowers = function (id_user) {
        this.router.navigate(['/user-followers', id_user]);
    };
    UserPlaylistComponent.prototype.goToFollowing = function (id_user) {
        this.router.navigate(['/user-following', id_user]);
    };
    UserPlaylistComponent.prototype.isFollowedByUserLogged = function () {
        var following;
        if (this.userLogged) {
            following = this.userLogged.following;
            for (var _i = 0, following_1 = following; _i < following_1.length; _i++) {
                var follow = following_1[_i];
                if (follow.id_user === this.user.id_user) {
                    this.followed = true;
                }
            }
        }
    };
    UserPlaylistComponent.prototype.addFollow = function (id_user) {
        var _this = this;
        this.userService.addFollow(id_user).subscribe(function (userLogged) {
            _this.userLogged = userLogged,
                _this.followed = true;
            _this.loginService.reqIsLogged();
        }, function (error) { return console.error(error); });
    };
    UserPlaylistComponent.prototype.removeFollow = function (id_user) {
        var _this = this;
        this.userService.removeFollow(id_user).subscribe(function (userLogged) {
            _this.userLogged = userLogged,
                _this.followed = false;
            _this.loginService.reqIsLogged();
        }, function (error) { return console.error(error); });
    };
    return UserPlaylistComponent;
}());
UserPlaylistComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        template: __webpack_require__(279),
        styles: [__webpack_require__(11), __webpack_require__(10), __webpack_require__(9), __webpack_require__(8), __webpack_require__(24), __webpack_require__(36)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__playlist_service__["a" /* PlaylistService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__playlist_service__["a" /* PlaylistService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__user_service__["a" /* UserService */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__login_service__["a" /* LoginService */]) === "function" && _e || Object])
], UserPlaylistComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=user-playlist.component.js.map

/***/ }),

/***/ 142:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "#login {\n    background-color: #18BC9C;\n}\n\n#register {\n    background-color: #18BC9C;\n}\n\n#logo-login {\n    position: relative;\n    top: 15px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 143:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "/* remove codrops styles and reset the whole thing */\n#container_demo{\n\t text-align: left;\n\t margin: 0;\n\t padding: 0;\n\t margin: 0 auto;\n\t font-family: \"Trebuchet MS\",\"Myriad Pro\",Arial,sans-serif;\n}\n\n/** fonts used for the icons\n@font-face {\n    font-family: 'FontomasCustomRegular';\n    src: url('fonts/fontomas-webfont.eot');\n    src: url('fonts/fontomas-webfont.eot?#iefix') format('embedded-opentype'),\n         url('fonts/fontomas-webfont.woff') format('woff'),\n         url('fonts/fontomas-webfont.ttf') format('truetype'),\n         url('fonts/fontomas-webfont.svg#FontomasCustomRegular') format('svg');\n    font-weight: normal;\n    font-style: normal;\n}\n@font-face {\n    font-family: 'FranchiseRegular';\n    src: url('fonts/franchise-bold-webfont.eot');\n    src: url('fonts/franchise-bold-webfont.eot?#iefix') format('embedded-opentype'),\n         url('fonts/franchise-bold-webfont.woff') format('woff'),\n         url('fonts/franchise-bold-webfont.ttf') format('truetype'),\n         url('fonts/franchise-bold-webfont.svg#FranchiseRegular') format('svg');\n    font-weight: normal;\n    font-style: normal;\n\n} **/ \na.hiddenanchor{\n\tdisplay: none;\n}\n/** The wrapper that will contain our two forms **/\n#wrapper{\n\twidth: 60%;\n\tright: 0px;\n\tmin-height: 560px;\t\n\tmargin: 0px auto;\t\n\twidth: 500px;\n\tposition: relative;\t\n}\n/**** Styling the form elements **/\n\n/**** general text styling ****/\n#wrapper a{\n\tcolor: rgb(95, 155, 198);\n\ttext-decoration: underline;\n}\n\n#wrapper h1{\n\tfont-size: 48px;\n\tcolor: rgb(6, 106, 117);\n\tpadding: 2px 0 10px 0;\n\tfont-family: 'FranchiseRegular','Arial Narrow',Arial,sans-serif;\n\tfont-weight: bold;\n\ttext-align: center;\n\tpadding-bottom: 30px;\n}\n/** For the moment only webkit supports the background-clip:text; */\n#wrapper h1{\n    background: -webkit-repeating-linear-gradient(-45deg, \n\trgb(18, 83, 93) , \n\trgb(18, 83, 93) 20px, \n\trgb(64, 111, 118) 20px, \n\trgb(64, 111, 118) 40px, \n\trgb(18, 83, 93) 40px);\n\t-webkit-text-fill-color: transparent;\n\t-webkit-background-clip: text;\n}\n#wrapper h1:after{\n\tcontent: ' ';\n\tdisplay: block;\n\twidth: 100%;\n\theight: 2px;\n\tmargin-top: 10px; \n\tbackground: linear-gradient(to left, rgba(147,184,189,0) 0%,rgba(147,184,189,0.8) 20%,rgba(147,184,189,1) 53%,rgba(147,184,189,0.8) 79%,rgba(147,184,189,0) 100%); \n\n}\n\n#wrapper p{\n\tmargin-bottom:15px;\n}\n#wrapper p:first-child{\n\tmargin: 0px;\n}\n#wrapper label{\n\tcolor: rgb(64, 92, 96);\n\tposition: relative;\n}\n\n/**** advanced input styling ****/\n/* placeholder */\n::-webkit-input-placeholder  { \n\tcolor: rgb(190, 188, 188); \n\tfont-style: italic;\n}\ninput:-moz-placeholder,\ntextarea:-moz-placeholder{ \n\tcolor: rgb(190, 188, 188);\n\tfont-style: italic;\n} \ninput {\n  outline: none;\n}\n/* all the input except submit and checkbox */\n#wrapper input:not([type=\"checkbox\"]){\n\twidth: 92%;\n\tmargin-top: 4px;\n\tpadding: 10px 5px 10px 32px;\t\n\tborder: 1px solid rgb(178, 178, 178);\n\t-webkit-appearance: textfield;\n\tbox-sizing : content-box;\n\tborder-radius: 3px;\n\tbox-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.6) inset;\n\ttransition: all 0.2s linear;\n}\n#wrapper input:not([type=\"checkbox\"]):active,\n#wrapper input:not([type=\"checkbox\"]):focus{\n\tborder: 1px solid rgba(91, 90, 90, 0.7);\n\tbackground: rgba(238, 236, 240, 0.2);\n\tbox-shadow: 0px 1px 4px 0px rgba(168, 168, 168, 0.9) inset;\n} \n\n/*styling both submit buttons */\n#wrapper p.button input{\n\twidth: 36%;\n\tcursor: pointer;\t\n\tbackground: rgb(61, 157, 179);\n\tpadding: 8px 5px;\n\tfont-family: 'BebasNeueRegular','Arial Narrow',Arial,sans-serif;\n\tcolor: #fff;\n\tfont-size: 24px;\t\n\tborder: 1px solid rgb(28, 108, 122);\t\n\tmargin-bottom: 10px;\t\n\ttext-shadow: 0 1px 1px rgba(0, 0, 0, 0.5);\n\tborder-radius: 3px;\n\tbox-shadow:0px 1px 6px 4px rgba(0, 0, 0, 0.07) inset,\n\t        0px 0px 0px 3px rgb(254, 254, 254),\n\t        0px 5px 3px 3px rgb(210, 210, 210);\n\ttransition: all 0.2s linear;\n}\n#wrapper p.button input:hover{\n\tbackground: rgb(74, 179, 198);\n}\n#wrapper p.button input:active,\n#wrapper p.button input:focus{\n\tbackground: rgb(40, 137, 154);\n\tposition: relative;\n\ttop: 1px;\n\tborder: 1px solid rgb(12, 76, 87);\n\tbox-shadow: 0px 1px 6px 4px rgba(0, 0, 0, 0.2) inset;\n}\np.login.button,\np.signin.button{\n    margin: 5px;\n\ttext-align: right;\n}\n\n\n/* styling the checkbox \"keep me logged in\"*/\n.keeplogin{\n\tmargin-top: -5px;\n}\n.keeplogin input,\n.keeplogin label{\n\tdisplay: inline-block;\n\tfont-size: 12px;\t\n\tfont-style: italic;\n}\n.keeplogin input#loginkeeping{\n\tmargin-right: 5px;\n}\n.keeplogin label{\n\twidth: 80%;\n}\n\n/*styling the links to change from one form to another */\n\np.change_link{\n\tposition: absolute;\n\tcolor: rgb(127, 124, 124);\n\tleft: 0px;\n\theight: 20px;\n\twidth: 440px;\n\tpadding: 17px 30px 20px 30px;\n\tfont-size: 16px\t;\n\ttext-align: right;\n\tborder-top: 1px solid rgb(219, 229, 232);\n\tborder-radius: 0 0  5px 5px;\n\tbackground: rgb(225, 234, 235);\n\tbackground: -webkit-repeating-linear-gradient(-45deg, \n\trgb(247, 247, 247) , \n\trgb(247, 247, 247) 15px, \n\trgb(225, 234, 235) 15px, \n\trgb(225, 234, 235) 30px, \n\trgb(247, 247, 247) 30px\n\t);\n\tbackground: repeating-linear-gradient(-45deg, \n\trgb(247, 247, 247) , \n\trgb(247, 247, 247) 15px, \n\trgb(225, 234, 235) 15px, \n\trgb(225, 234, 235) 30px, \n\trgb(247, 247, 247) 30px\n\t);\n}\n#wrapper p.change_link a {\n\tdisplay: inline-block;\n\tfont-weight: bold;\n\tbackground: rgb(247, 248, 241);\n\tpadding: 2px 6px;\n\tcolor: rgb(29, 162, 193);\n\tmargin-left: 10px;\n\ttext-decoration: none;\n\tborder-radius: 4px;\n\tborder: 1px solid rgb(203, 213, 214);\n\ttransition: all 0.4s  linear;\n}\n#wrapper p.change_link a:hover {\n\tcolor: rgb(57, 191, 215);\n\tbackground: rgb(247, 247, 247);\n\tborder: 1px solid rgb(74, 179, 198);\n}\n#wrapper p.change_link a:active{\n\tposition: relative;\n\ttop: 1px;\n}\n/** Styling both forms **/\n#register, \n#login{\n\tposition: absolute;\n\ttop: 0px;\n\twidth: 88%;\t\n\tpadding: 18px 6% 60px 6%;\n\tmargin: 0 0 35px 0;\n\tbackground: rgb(247, 247, 247);\n\tborder: 1px solid rgba(147, 184, 189,0.8);\n\tbox-shadow: 0pt 2px 5px rgba(105, 108, 109,  0.7),\t0px 0px 8px 5px rgba(208, 223, 226, 0.4) inset;\n\t-webkit-box-shadow: 5px;\n\tborder-radius: 5px;\n}\n#register{\t\n\tz-index: 21;\n\topacity: 0;\n}\n#login{\n\tz-index: 22;\n}\n#toregister:target ~ #wrapper #register,\n#tologin:target ~ #wrapper #login{\n\tz-index: 22;\n\t-webkit-animation-name: fadeInLeft;\n\tanimation-name: fadeInLeft;\n\t-webkit-animation-delay: .1s;\n\tanimation-delay: .1s;\n}\n#toregister:target ~ #wrapper #login,\n#tologin:target ~ #wrapper #register{\n\t-webkit-animation-name: fadeOutLeft;\n\tanimation-name: fadeOutLeft;\n}\n\n/** the actual animation, credit where due : http://daneden.me/animate/ ***/\n.animate{\n\t-webkit-animation-duration: 0.5s;\n\t-webkit-animation-timing-function: ease;\n\t-webkit-animation-fill-mode: both;\n\t\n\t-moz-animation-duration: 0.5s;\n\t-moz-animation-timing-function: ease;\n\t-moz-animation-fill-mode: both;\n\t\n\t-o-animation-duration: 0.5s;\n\t-o-animation-timing-function: ease;\n\t-o-animation-fill-mode: both;\n\t\n\t-ms-animation-duration: 0.5s;\n\t-ms-animation-timing-function: ease;\n\t-ms-animation-fill-mode: both;\n\t\n\tanimation-duration: 0.5s;\n\tanimation-timing-function: ease;\n\tanimation-fill-mode: both;\n}\n\n/** yerk some ugly IE fixes 'cause I know someone will ask \"why does it look ugly in IE?\", no matter how many warnings I will put in the article */\n\n.lt8 #wrapper input{\n\tpadding: 10px 5px 10px 32px;\n    width: 92%;\n}\n.lt8 #wrapper input[type=checkbox]{\n\twidth: 10px;\n\tpadding: 0;\n}\n.lt8 #wrapper h1{\n\tcolor: #066A75;\n}\n.lt8 #register{\t\n\tdisplay: none;\n}\n.lt8 p.change_link,\n.ie9 p.change_link{\n\tposition: absolute;\n\theight: 90px;\n\tbackground: transparent;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 144:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "glyphicons-halflings-regular.89889688147bd7575d63.svg";

/***/ }),

/***/ 183:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "glyphicons-halflings-regular.e18bbf611f2a2e43afc0.ttf";

/***/ }),

/***/ 184:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "glyphicons-halflings-regular.fa2772327f55d8198301.woff";

/***/ }),

/***/ 185:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "glyphicons-halflings-regular.448c34a56d699c29117a.woff2";

/***/ }),

/***/ 186:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 186;


/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(197);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
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
    function AppComponent(router, loginService) {
        this.router = router;
        this.loginService = loginService;
        this.userLogged = loginService.user;
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(258),
        styles: [__webpack_require__(10), __webpack_require__(9), __webpack_require__(8)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_playlist_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__login_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__playlist_detail_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__artist_detail_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__artist_followers_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__user_playlist_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__user_likes_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__user_favorites_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__search_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__playlist_service__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__artist_service__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__tag_service__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_service__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__song_service__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__login_service__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__admin_service__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__app_routing__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__mynavbar_component__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_dropdown__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_ngx_dropdown___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_23_ngx_dropdown__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__my_playlists_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__my_likes_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__my_favorites_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__edit_playlist_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__create_playlist_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__my_followers_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__my_following_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__user_followers_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__user_following_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__config_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__admin_home_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__admin_create_artist_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__admin_edit_artist_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__admin_edit_song_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__admin_create_song_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__sign_in_component__ = __webpack_require__(125);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        declarations: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_7__playlist_detail_component__["a" /* PlaylistDetailComponent */], __WEBPACK_IMPORTED_MODULE_5__home_playlist_component__["a" /* HomeComponent */], __WEBPACK_IMPORTED_MODULE_6__login_component__["a" /* LoginComponent */], __WEBPACK_IMPORTED_MODULE_13__search_component__["a" /* SearchComponent */],
            __WEBPACK_IMPORTED_MODULE_10__user_playlist_component__["a" /* UserPlaylistComponent */], __WEBPACK_IMPORTED_MODULE_8__artist_detail_component__["a" /* ArtistDetailComponent */], __WEBPACK_IMPORTED_MODULE_11__user_likes_component__["a" /* UserLikeComponent */], __WEBPACK_IMPORTED_MODULE_12__user_favorites_component__["a" /* UserFavoriteComponent */], __WEBPACK_IMPORTED_MODULE_22__mynavbar_component__["a" /* MyNavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_24__my_playlists_component__["a" /* MyPlaylistsComponent */], __WEBPACK_IMPORTED_MODULE_25__my_likes_component__["a" /* MyLikesComponent */], __WEBPACK_IMPORTED_MODULE_26__my_favorites_component__["a" /* MyFavoritesComponent */], __WEBPACK_IMPORTED_MODULE_27__edit_playlist_component__["a" /* EditPlaylistComponent */], __WEBPACK_IMPORTED_MODULE_28__create_playlist_component__["a" /* CreatePlaylistComponent */],
            __WEBPACK_IMPORTED_MODULE_9__artist_followers_component__["a" /* ArtistFollowersComponent */], __WEBPACK_IMPORTED_MODULE_29__my_followers_component__["a" /* MyFollowersComponent */], __WEBPACK_IMPORTED_MODULE_30__my_following_component__["a" /* MyFollowingComponent */], __WEBPACK_IMPORTED_MODULE_31__user_followers_component__["a" /* UserFollowersComponent */], __WEBPACK_IMPORTED_MODULE_32__user_following_component__["a" /* UserFollowingComponent */],
            __WEBPACK_IMPORTED_MODULE_33__config_component__["a" /* ConfigComponent */], __WEBPACK_IMPORTED_MODULE_34__admin_home_component__["a" /* AdminHomeComponent */], __WEBPACK_IMPORTED_MODULE_35__admin_create_artist_component__["a" /* AdminCreateArtistComponent */], __WEBPACK_IMPORTED_MODULE_36__admin_edit_artist_component__["a" /* AdminEditArtistComponent */], __WEBPACK_IMPORTED_MODULE_37__admin_edit_song_component__["a" /* AdminEditSongComponent */],
            __WEBPACK_IMPORTED_MODULE_38__admin_create_song_component__["a" /* AdminCreateSongComponent */], __WEBPACK_IMPORTED_MODULE_39__sign_in_component__["a" /* SignInComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */], __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormsModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */], __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */], __WEBPACK_IMPORTED_MODULE_21__app_routing__["a" /* routing */], __WEBPACK_IMPORTED_MODULE_23_ngx_dropdown__["DropdownModule"]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]],
        providers: [__WEBPACK_IMPORTED_MODULE_14__playlist_service__["a" /* PlaylistService */], __WEBPACK_IMPORTED_MODULE_15__artist_service__["a" /* ArtistService */], __WEBPACK_IMPORTED_MODULE_16__tag_service__["a" /* TagService */], __WEBPACK_IMPORTED_MODULE_17__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_18__song_service__["a" /* SongService */], __WEBPACK_IMPORTED_MODULE_19__login_service__["a" /* LoginService */], __WEBPACK_IMPORTED_MODULE_20__admin_service__["a" /* AdminService */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_playlist_component__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_component__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__playlist_detail_component__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__artist_detail_component__ = __webpack_require__(111);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__artist_followers_component__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_playlist_component__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__user_likes_component__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__user_favorites_component__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__search_component__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__my_playlists_component__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__my_likes_component__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__my_favorites_component__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__edit_playlist_component__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__create_playlist_component__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__my_followers_component__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__my_following_component__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__user_followers_component__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__user_following_component__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__config_component__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__admin_home_component__ = __webpack_require__(110);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__admin_create_artist_component__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__admin_edit_artist_component__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__admin_edit_song_component__ = __webpack_require__(109);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__admin_create_song_component__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__sign_in_component__ = __webpack_require__(125);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


























var appRoutes = [
    { path: 'playlist/:id_playlist', component: __WEBPACK_IMPORTED_MODULE_3__playlist_detail_component__["a" /* PlaylistDetailComponent */] },
    { path: 'artist/:id_artist', component: __WEBPACK_IMPORTED_MODULE_4__artist_detail_component__["a" /* ArtistDetailComponent */] },
    { path: 'artist-followers/:id_artist', component: __WEBPACK_IMPORTED_MODULE_5__artist_followers_component__["a" /* ArtistFollowersComponent */] },
    { path: 'user-playlist/:id_user', component: __WEBPACK_IMPORTED_MODULE_6__user_playlist_component__["a" /* UserPlaylistComponent */] },
    { path: 'user-likes/:id_user', component: __WEBPACK_IMPORTED_MODULE_7__user_likes_component__["a" /* UserLikeComponent */] },
    { path: 'user-favorites/:id_user', component: __WEBPACK_IMPORTED_MODULE_8__user_favorites_component__["a" /* UserFavoriteComponent */] },
    { path: 'my-playlists/:id_user', component: __WEBPACK_IMPORTED_MODULE_10__my_playlists_component__["a" /* MyPlaylistsComponent */] },
    { path: 'my-likes/:id_user', component: __WEBPACK_IMPORTED_MODULE_11__my_likes_component__["a" /* MyLikesComponent */] },
    { path: 'my-favorites/:id_user', component: __WEBPACK_IMPORTED_MODULE_12__my_favorites_component__["a" /* MyFavoritesComponent */] },
    { path: 'my-followers/:id_user', component: __WEBPACK_IMPORTED_MODULE_15__my_followers_component__["a" /* MyFollowersComponent */] },
    { path: 'my-following/:id_user', component: __WEBPACK_IMPORTED_MODULE_16__my_following_component__["a" /* MyFollowingComponent */] },
    { path: 'user-followers/:id_user', component: __WEBPACK_IMPORTED_MODULE_17__user_followers_component__["a" /* UserFollowersComponent */] },
    { path: 'user-following/:id_user', component: __WEBPACK_IMPORTED_MODULE_18__user_following_component__["a" /* UserFollowingComponent */] },
    { path: 'search/:key', component: __WEBPACK_IMPORTED_MODULE_9__search_component__["a" /* SearchComponent */] },
    { path: 'config/:id_user', component: __WEBPACK_IMPORTED_MODULE_19__config_component__["a" /* ConfigComponent */] },
    { path: 'edit-playlist/:id_playlist', component: __WEBPACK_IMPORTED_MODULE_13__edit_playlist_component__["a" /* EditPlaylistComponent */] },
    { path: 'create-playlist', component: __WEBPACK_IMPORTED_MODULE_14__create_playlist_component__["a" /* CreatePlaylistComponent */] },
    { path: 'admin-home', component: __WEBPACK_IMPORTED_MODULE_20__admin_home_component__["a" /* AdminHomeComponent */] },
    { path: 'admin-create-artist', component: __WEBPACK_IMPORTED_MODULE_21__admin_create_artist_component__["a" /* AdminCreateArtistComponent */] },
    { path: 'admin-edit-artist/:id_artist', component: __WEBPACK_IMPORTED_MODULE_22__admin_edit_artist_component__["a" /* AdminEditArtistComponent */] },
    { path: 'admin-edit-song/:id_song', component: __WEBPACK_IMPORTED_MODULE_23__admin_edit_song_component__["a" /* AdminEditSongComponent */] },
    { path: 'admin-create-song/:id_artist', component: __WEBPACK_IMPORTED_MODULE_24__admin_create_song_component__["a" /* AdminCreateSongComponent */] },
    { path: 'new', component: __WEBPACK_IMPORTED_MODULE_1__home_playlist_component__["a" /* HomeComponent */] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_2__login_component__["a" /* LoginComponent */] },
    { path: 'sign-in', component: __WEBPACK_IMPORTED_MODULE_25__sign_in_component__["a" /* SignInComponent */] },
    { path: '', redirectTo: 'new', pathMatch: 'full' }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* RouterModule */].forRoot(appRoutes);
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_service__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyNavbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MyNavbarComponent = (function () {
    function MyNavbarComponent(router, activatedRoute, loginService) {
        var _this = this;
        this.router = router;
        this.loginService = loginService;
        activatedRoute.params.subscribe(function (params) {
            _this.userLogged = loginService.user;
        });
    }
    MyNavbarComponent.prototype.logout = function () {
        var _this = this;
        this.loginService.logOut().subscribe(function (response) {
            console.log(response),
                _this.router.navigate(['/login']);
        }, function (error) { return console.error(error); });
    };
    MyNavbarComponent.prototype.search = function () {
        this.router.navigate(['search/' + this.key]);
    };
    MyNavbarComponent.prototype.goToConfig = function () {
        this.router.navigate(['config/' + this.userLogged.id_user]);
    };
    MyNavbarComponent.prototype.goToMyPlaylists = function () {
        this.router.navigate(['my-playlists/' + this.userLogged.id_user]);
    };
    return MyNavbarComponent;
}());
MyNavbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'MyNavbar',
        template: __webpack_require__(271),
        styles: [__webpack_require__(10), __webpack_require__(9), __webpack_require__(8), __webpack_require__(24)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__login_service__["a" /* LoginService */]) === "function" && _c || Object])
], MyNavbarComponent);

var _a, _b, _c;
//# sourceMappingURL=mynavbar.component.js.map

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 21:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ArtistService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ArtistService = (function () {
    function ArtistService(http) {
        this.http = http;
    }
    ;
    ArtistService.prototype.getArtist = function (id_artist) {
        var _this = this;
        //let url="http://localhost:4200/api/Artist/"+id_artist;
        var url = "https://localhost:8443/api/Artist/" + id_artist;
        console.log(url);
        return this.http.get(url).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    ArtistService.prototype.getArtistFollowers = function (id_artist) {
        var _this = this;
        //let url="http://localhost:4200/api/ArtistFollowers/"+id_artist;
        var url = "https://localhost:8443/api/ArtistFollowers/" + id_artist;
        console.log(url);
        return this.http.get(url).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    ArtistService.prototype.getTop3Artist = function () {
        //let url="http://localhost:4200/api/Artist/Top3"
        var url = "https://localhost:8443/api/Artist/Top3";
        return this.http.get(url).map(function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    ArtistService.prototype.getArtistByName = function (key) {
        var _this = this;
        //let url="http://localhost:4200/api/Artist/SearchByName?key="+key;
        var url = "https://localhost:8443/api/Artist/SearchByName?key=" + key;
        return this.http.get(url).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    ArtistService.prototype.removeFollow = function (id_artist) {
        var _this = this;
        //let url="http://localhost:4200/api/NotFollowArtist?idArtist="+id_artist;
        var url = "https://localhost:8443/api/NotFollowArtist?idArtist=" + id_artist;
        return this.http.delete(url).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    ArtistService.prototype.addFollow = function (id_artist) {
        var _this = this;
        //let url="http://localhost:4200/api/FollowArtist?idArtist="+id_artist;
        var url = "https://localhost:8443/api/FollowArtist?idArtist=" + id_artist;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({
            'Content-Type': 'application/json',
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.post(url, options).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    ArtistService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Server error (' + error.status + '): ' + error.text);
    };
    return ArtistService;
}());
ArtistService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], ArtistService);

var _a;
//# sourceMappingURL=artist.service.js.map

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlaylistService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlaylistService = (function () {
    function PlaylistService(http) {
        this.http = http;
    }
    //  getPlaylist(id: number | string) {
    //    return this.playlists.find(playlist => playlist.id === +id);
    //  }
    PlaylistService.prototype.getPlaylist = function (id_playlist) {
        var _this = this;
        //let url="http://localhost:4200/api/Playlist/"+id_playlist;
        var url = "https://localhost:8443/api/Playlist/" + id_playlist;
        console.log(url);
        return this.http.get(url).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    PlaylistService.prototype.removePlaylist = function (id_playlist) {
        var _this = this;
        //let url="http://localhost:4200/api/DeletePlaylist/"+id_playlist;
        var url = "https://localhost:8443/api/DeletePlaylist/" + id_playlist;
        console.log(url);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({
            'Content-Type': 'application/json',
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.delete(url, options).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    PlaylistService.prototype.addLike = function (id_playlist) {
        var _this = this;
        //let url="http://localhost:4200/api/Playlist/Like?idPlaylist="+id_playlist;
        var url = "https://localhost:8443/api/Playlist/Like?idPlaylist=" + id_playlist;
        console.log(url);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({
            'Content-Type': 'application/json',
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.post(url, options).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    PlaylistService.prototype.removeLike = function (id_playlist) {
        var _this = this;
        //let url="http://localhost:4200/api/Playlist/NotLike?idPlaylist="+id_playlist;
        var url = "https://localhost:8443/api/Playlist/NotLike?idPlaylist=" + id_playlist;
        console.log(url);
        return this.http.delete(url).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    PlaylistService.prototype.getTop3Playlist = function () {
        var _this = this;
        //let url="http://localhost:4200/api/Playlist/Top3"
        var url = "https://localhost:8443/api/Playlist/Top3";
        return this.http.get(url).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    PlaylistService.prototype.getPlaylistByTitle = function (key) {
        var _this = this;
        //let url="http://localhost:4200/api/Playlist/SearchByTitle?key="+key;
        var url = "https://localhost:8443/api/Playlist/SearchByTitle?key=" + key;
        return this.http.get(url).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    PlaylistService.prototype.getPlaylistByTag = function (key) {
        var _this = this;
        //let url="http://localhost:4200/api/Playlist/SearchByTag?key="+key;
        var url = "https://localhost:8443/api/Playlist/SearchByTag?key=" + key;
        return this.http.get(url).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    PlaylistService.prototype.getWallPlaylistsNotLogged = function () {
        var _this = this;
        //let url="http://localhost:4200/api/Playlist/WallNotLogged"
        var url = "https://localhost:8443/api/Playlist/WallNotLogged";
        return this.http.get(url).map(
        //response => this.extractPlaylists(response))
        function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    PlaylistService.prototype.getWallPlaylistsLogged = function (id_user) {
        var _this = this;
        //let url="http://localhost:4200/api/Playlist/WallLogged/"+id_user;
        var url = "https://localhost:8443/api/Playlist/WallLogged/" + id_user;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true });
        return this.http.get(url, options).map(
        //response => this.extractPlaylists(response))
        function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    PlaylistService.prototype.changeUserPlaylist = function (playlist, tagToAdd, tagToRemove) {
        var _this = this;
        var title = playlist.title;
        var description = playlist.description;
        var params = '?title=' + title + '&description=' + description;
        if (tagToAdd !== "")
            params = params + '&tagToAdd=' + tagToAdd;
        if (tagToRemove !== "")
            params = params + '&tagToRemove=' + tagToRemove;
        //let url="http://localhost:4200/api/EditPlaylist/"+playlist.id_playlist+params;
        var url = "https://localhost:8443/api/EditPlaylist/" + playlist.id_playlist + params;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({
            'Content-Type': 'application/json',
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.put(url, options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    PlaylistService.prototype.addFavoriteSongToPlaylist = function (id_playlist, id_song) {
        var _this = this;
        var params = '?favorite=' + id_song;
        //let url="http://localhost:4200/api/EditPlaylist/"+id_playlist+params;
        var url = "https://localhost:8443/api/EditPlaylist/" + id_playlist + params;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({
            'Content-Type': 'application/json',
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.put(url, options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    PlaylistService.prototype.addSongToPlaylist = function (id_playlist, title, artist) {
        var _this = this;
        var params = '?titleSong=' + title + '&artist=' + artist;
        //let url="http://localhost:4200/api/EditPlaylist/"+id_playlist+params;
        var url = "https://localhost:8443/api/EditPlaylist/" + id_playlist + params;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({
            'Content-Type': 'application/json',
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.put(url, options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    PlaylistService.prototype.removeSong = function (id_playlist, id_song) {
        var _this = this;
        var params = '?songToRemove=' + id_song;
        //let url="http://localhost:4200/api/EditPlaylist/"+id_playlist+params;
        var url = "https://localhost:8443/api/EditPlaylist/" + id_playlist + params;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({
            'Content-Type': 'application/json',
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.put(url, options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    PlaylistService.prototype.createPlaylist = function (playlist, id_user, description, tag) {
        var _this = this;
        var params = '?tag=' + tag;
        if (description !== "")
            params = params + '&description=' + description;
        //let url="http://localhost:4200/api/CreatePlaylist/"+id_user+params;
        var url = "https://localhost:8443/api/CreatePlaylist/" + id_user + params;
        var body = JSON.stringify(playlist);
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({
            'Content-Type': 'application/json',
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.post(url, body, options)
            .map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    PlaylistService.prototype.extractTitles = function (response) {
        return response.json().map(function (topPlaylists) { return topPlaylists.title; });
    };
    PlaylistService.prototype.extractPlaylists = function (response) {
        return response.json().map(function (playlists) { return playlists; });
    };
    PlaylistService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Server error (' + error.status + '): ' + error.text);
    };
    return PlaylistService;
}());
PlaylistService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], PlaylistService);

var _a;
//# sourceMappingURL=playlist.service.js.map

/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "/*!\n * Bootstrap v3.3.7 (http://getbootstrap.com)\n * Copyright 2011-2016 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n */\n/*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */\nhtml {\n  font-family: sans-serif;\n  -webkit-text-size-adjust: 100%;\n      -ms-text-size-adjust: 100%;\n}\nbody {\n  margin: 0;\n}\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmain,\nmenu,\nnav,\nsection,\nsummary {\n  display: block;\n}\naudio,\ncanvas,\nprogress,\nvideo {\n  display: inline-block;\n  vertical-align: baseline;\n}\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n[hidden],\ntemplate {\n  display: none;\n}\na {\n  background-color: transparent;\n}\na:active,\na:hover {\n  outline: 0;\n}\nabbr[title] {\n  border-bottom: 1px dotted;\n}\nb,\nstrong {\n  font-weight: bold;\n}\ndfn {\n  font-style: italic;\n}\nh1 {\n  margin: .67em 0;\n  font-size: 2em;\n}\nmark {\n  color: #000;\n  background: #ff0;\n}\nsmall {\n  font-size: 80%;\n}\nsub,\nsup {\n  position: relative;\n  font-size: 75%;\n  line-height: 0;\n  vertical-align: baseline;\n}\nsup {\n  top: -.5em;\n}\nsub {\n  bottom: -.25em;\n}\nimg {\n  border: 0;\n}\nsvg:not(:root) {\n  overflow: hidden;\n}\nfigure {\n  margin: 1em 40px;\n}\nhr {\n  height: 0;\n  box-sizing: content-box;\n}\npre {\n  overflow: auto;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: monospace, monospace;\n  font-size: 1em;\n}\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  margin: 0;\n  font: inherit;\n  color: inherit;\n}\nbutton {\n  overflow: visible;\n}\nbutton,\nselect {\n  text-transform: none;\n}\nbutton,\nhtml input[type=\"button\"],\ninput[type=\"reset\"],\ninput[type=\"submit\"] {\n  -webkit-appearance: button;\n  cursor: pointer;\n}\nbutton[disabled],\nhtml input[disabled] {\n  cursor: default;\n}\nbutton::-moz-focus-inner,\ninput::-moz-focus-inner {\n  padding: 0;\n  border: 0;\n}\ninput {\n  line-height: normal;\n}\ninput[type=\"checkbox\"],\ninput[type=\"radio\"] {\n  box-sizing: border-box;\n  padding: 0;\n}\ninput[type=\"number\"]::-webkit-inner-spin-button,\ninput[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\ninput[type=\"search\"] {\n  box-sizing: content-box;\n  -webkit-appearance: textfield;\n}\ninput[type=\"search\"]::-webkit-search-cancel-button,\ninput[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\nfieldset {\n  padding: .35em .625em .75em;\n  margin: 0 2px;\n  border: 1px solid #c0c0c0;\n}\nlegend {\n  padding: 0;\n  border: 0;\n}\ntextarea {\n  overflow: auto;\n}\noptgroup {\n  font-weight: bold;\n}\ntable {\n  border-spacing: 0;\n  border-collapse: collapse;\n}\ntd,\nth {\n  padding: 0;\n}\n/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */\n@media print {\n  *,\n  *:before,\n  *:after {\n    color: #000 !important;\n    text-shadow: none !important;\n    background: transparent !important;\n    box-shadow: none !important;\n  }\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n  a[href]:after {\n    content: \" (\" attr(href) \")\";\n  }\n  abbr[title]:after {\n    content: \" (\" attr(title) \")\";\n  }\n  a[href^=\"#\"]:after,\n  a[href^=\"javascript:\"]:after {\n    content: \"\";\n  }\n  pre,\n  blockquote {\n    border: 1px solid #999;\n\n    page-break-inside: avoid;\n  }\n  thead {\n    display: table-header-group;\n  }\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n  img {\n    max-width: 100% !important;\n  }\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n  .navbar {\n    display: none;\n  }\n  .btn > .caret,\n  .dropup > .btn > .caret {\n    border-top-color: #000 !important;\n  }\n  .label {\n    border: 1px solid #000;\n  }\n  .table {\n    border-collapse: collapse !important;\n  }\n  .table td,\n  .table th {\n    background-color: #fff !important;\n  }\n  .table-bordered th,\n  .table-bordered td {\n    border: 1px solid #ddd !important;\n  }\n}\n@font-face {\n  font-family: 'Glyphicons Halflings';\n\n  src: url(" + __webpack_require__(64) + ");\n  src: url(" + __webpack_require__(64) + "?#iefix) format('embedded-opentype'), url(" + __webpack_require__(185) + ") format('woff2'), url(" + __webpack_require__(184) + ") format('woff'), url(" + __webpack_require__(183) + ") format('truetype'), url(" + __webpack_require__(144) + "#glyphicons_halflingsregular) format('svg');\n}\n.glyphicon {\n  position: relative;\n  top: 1px;\n  display: inline-block;\n  font-family: 'Glyphicons Halflings';\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1;\n\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale;\n}\n.glyphicon-asterisk:before {\n  content: \"*\";\n}\n.glyphicon-plus:before {\n  content: \"+\";\n}\n.glyphicon-euro:before,\n.glyphicon-eur:before {\n  content: \"\\20AC\";\n}\n.glyphicon-minus:before {\n  content: \"\\2212\";\n}\n.glyphicon-cloud:before {\n  content: \"\\2601\";\n}\n.glyphicon-envelope:before {\n  content: \"\\2709\";\n}\n.glyphicon-pencil:before {\n  content: \"\\270F\";\n}\n.glyphicon-glass:before {\n  content: \"\\E001\";\n}\n.glyphicon-music:before {\n  content: \"\\E002\";\n}\n.glyphicon-search:before {\n  content: \"\\E003\";\n}\n.glyphicon-heart:before {\n  content: \"\\E005\";\n}\n.glyphicon-star:before {\n  content: \"\\E006\";\n}\n.glyphicon-star-empty:before {\n  content: \"\\E007\";\n}\n.glyphicon-user:before {\n  content: \"\\E008\";\n}\n.glyphicon-film:before {\n  content: \"\\E009\";\n}\n.glyphicon-th-large:before {\n  content: \"\\E010\";\n}\n.glyphicon-th:before {\n  content: \"\\E011\";\n}\n.glyphicon-th-list:before {\n  content: \"\\E012\";\n}\n.glyphicon-ok:before {\n  content: \"\\E013\";\n}\n.glyphicon-remove:before {\n  content: \"\\E014\";\n}\n.glyphicon-zoom-in:before {\n  content: \"\\E015\";\n}\n.glyphicon-zoom-out:before {\n  content: \"\\E016\";\n}\n.glyphicon-off:before {\n  content: \"\\E017\";\n}\n.glyphicon-signal:before {\n  content: \"\\E018\";\n}\n.glyphicon-cog:before {\n  content: \"\\E019\";\n}\n.glyphicon-trash:before {\n  content: \"\\E020\";\n}\n.glyphicon-home:before {\n  content: \"\\E021\";\n}\n.glyphicon-file:before {\n  content: \"\\E022\";\n}\n.glyphicon-time:before {\n  content: \"\\E023\";\n}\n.glyphicon-road:before {\n  content: \"\\E024\";\n}\n.glyphicon-download-alt:before {\n  content: \"\\E025\";\n}\n.glyphicon-download:before {\n  content: \"\\E026\";\n}\n.glyphicon-upload:before {\n  content: \"\\E027\";\n}\n.glyphicon-inbox:before {\n  content: \"\\E028\";\n}\n.glyphicon-play-circle:before {\n  content: \"\\E029\";\n}\n.glyphicon-repeat:before {\n  content: \"\\E030\";\n}\n.glyphicon-refresh:before {\n  content: \"\\E031\";\n}\n.glyphicon-list-alt:before {\n  content: \"\\E032\";\n}\n.glyphicon-lock:before {\n  content: \"\\E033\";\n}\n.glyphicon-flag:before {\n  content: \"\\E034\";\n}\n.glyphicon-headphones:before {\n  content: \"\\E035\";\n}\n.glyphicon-volume-off:before {\n  content: \"\\E036\";\n}\n.glyphicon-volume-down:before {\n  content: \"\\E037\";\n}\n.glyphicon-volume-up:before {\n  content: \"\\E038\";\n}\n.glyphicon-qrcode:before {\n  content: \"\\E039\";\n}\n.glyphicon-barcode:before {\n  content: \"\\E040\";\n}\n.glyphicon-tag:before {\n  content: \"\\E041\";\n}\n.glyphicon-tags:before {\n  content: \"\\E042\";\n}\n.glyphicon-book:before {\n  content: \"\\E043\";\n}\n.glyphicon-bookmark:before {\n  content: \"\\E044\";\n}\n.glyphicon-print:before {\n  content: \"\\E045\";\n}\n.glyphicon-camera:before {\n  content: \"\\E046\";\n}\n.glyphicon-font:before {\n  content: \"\\E047\";\n}\n.glyphicon-bold:before {\n  content: \"\\E048\";\n}\n.glyphicon-italic:before {\n  content: \"\\E049\";\n}\n.glyphicon-text-height:before {\n  content: \"\\E050\";\n}\n.glyphicon-text-width:before {\n  content: \"\\E051\";\n}\n.glyphicon-align-left:before {\n  content: \"\\E052\";\n}\n.glyphicon-align-center:before {\n  content: \"\\E053\";\n}\n.glyphicon-align-right:before {\n  content: \"\\E054\";\n}\n.glyphicon-align-justify:before {\n  content: \"\\E055\";\n}\n.glyphicon-list:before {\n  content: \"\\E056\";\n}\n.glyphicon-indent-left:before {\n  content: \"\\E057\";\n}\n.glyphicon-indent-right:before {\n  content: \"\\E058\";\n}\n.glyphicon-facetime-video:before {\n  content: \"\\E059\";\n}\n.glyphicon-picture:before {\n  content: \"\\E060\";\n}\n.glyphicon-map-marker:before {\n  content: \"\\E062\";\n}\n.glyphicon-adjust:before {\n  content: \"\\E063\";\n}\n.glyphicon-tint:before {\n  content: \"\\E064\";\n}\n.glyphicon-edit:before {\n  content: \"\\E065\";\n}\n.glyphicon-share:before {\n  content: \"\\E066\";\n}\n.glyphicon-check:before {\n  content: \"\\E067\";\n}\n.glyphicon-move:before {\n  content: \"\\E068\";\n}\n.glyphicon-step-backward:before {\n  content: \"\\E069\";\n}\n.glyphicon-fast-backward:before {\n  content: \"\\E070\";\n}\n.glyphicon-backward:before {\n  content: \"\\E071\";\n}\n.glyphicon-play:before {\n  content: \"\\E072\";\n}\n.glyphicon-pause:before {\n  content: \"\\E073\";\n}\n.glyphicon-stop:before {\n  content: \"\\E074\";\n}\n.glyphicon-forward:before {\n  content: \"\\E075\";\n}\n.glyphicon-fast-forward:before {\n  content: \"\\E076\";\n}\n.glyphicon-step-forward:before {\n  content: \"\\E077\";\n}\n.glyphicon-eject:before {\n  content: \"\\E078\";\n}\n.glyphicon-chevron-left:before {\n  content: \"\\E079\";\n}\n.glyphicon-chevron-right:before {\n  content: \"\\E080\";\n}\n.glyphicon-plus-sign:before {\n  content: \"\\E081\";\n}\n.glyphicon-minus-sign:before {\n  content: \"\\E082\";\n}\n.glyphicon-remove-sign:before {\n  content: \"\\E083\";\n}\n.glyphicon-ok-sign:before {\n  content: \"\\E084\";\n}\n.glyphicon-question-sign:before {\n  content: \"\\E085\";\n}\n.glyphicon-info-sign:before {\n  content: \"\\E086\";\n}\n.glyphicon-screenshot:before {\n  content: \"\\E087\";\n}\n.glyphicon-remove-circle:before {\n  content: \"\\E088\";\n}\n.glyphicon-ok-circle:before {\n  content: \"\\E089\";\n}\n.glyphicon-ban-circle:before {\n  content: \"\\E090\";\n}\n.glyphicon-arrow-left:before {\n  content: \"\\E091\";\n}\n.glyphicon-arrow-right:before {\n  content: \"\\E092\";\n}\n.glyphicon-arrow-up:before {\n  content: \"\\E093\";\n}\n.glyphicon-arrow-down:before {\n  content: \"\\E094\";\n}\n.glyphicon-share-alt:before {\n  content: \"\\E095\";\n}\n.glyphicon-resize-full:before {\n  content: \"\\E096\";\n}\n.glyphicon-resize-small:before {\n  content: \"\\E097\";\n}\n.glyphicon-exclamation-sign:before {\n  content: \"\\E101\";\n}\n.glyphicon-gift:before {\n  content: \"\\E102\";\n}\n.glyphicon-leaf:before {\n  content: \"\\E103\";\n}\n.glyphicon-fire:before {\n  content: \"\\E104\";\n}\n.glyphicon-eye-open:before {\n  content: \"\\E105\";\n}\n.glyphicon-eye-close:before {\n  content: \"\\E106\";\n}\n.glyphicon-warning-sign:before {\n  content: \"\\E107\";\n}\n.glyphicon-plane:before {\n  content: \"\\E108\";\n}\n.glyphicon-calendar:before {\n  content: \"\\E109\";\n}\n.glyphicon-random:before {\n  content: \"\\E110\";\n}\n.glyphicon-comment:before {\n  content: \"\\E111\";\n}\n.glyphicon-magnet:before {\n  content: \"\\E112\";\n}\n.glyphicon-chevron-up:before {\n  content: \"\\E113\";\n}\n.glyphicon-chevron-down:before {\n  content: \"\\E114\";\n}\n.glyphicon-retweet:before {\n  content: \"\\E115\";\n}\n.glyphicon-shopping-cart:before {\n  content: \"\\E116\";\n}\n.glyphicon-folder-close:before {\n  content: \"\\E117\";\n}\n.glyphicon-folder-open:before {\n  content: \"\\E118\";\n}\n.glyphicon-resize-vertical:before {\n  content: \"\\E119\";\n}\n.glyphicon-resize-horizontal:before {\n  content: \"\\E120\";\n}\n.glyphicon-hdd:before {\n  content: \"\\E121\";\n}\n.glyphicon-bullhorn:before {\n  content: \"\\E122\";\n}\n.glyphicon-bell:before {\n  content: \"\\E123\";\n}\n.glyphicon-certificate:before {\n  content: \"\\E124\";\n}\n.glyphicon-thumbs-up:before {\n  content: \"\\E125\";\n}\n.glyphicon-thumbs-down:before {\n  content: \"\\E126\";\n}\n.glyphicon-hand-right:before {\n  content: \"\\E127\";\n}\n.glyphicon-hand-left:before {\n  content: \"\\E128\";\n}\n.glyphicon-hand-up:before {\n  content: \"\\E129\";\n}\n.glyphicon-hand-down:before {\n  content: \"\\E130\";\n}\n.glyphicon-circle-arrow-right:before {\n  content: \"\\E131\";\n}\n.glyphicon-circle-arrow-left:before {\n  content: \"\\E132\";\n}\n.glyphicon-circle-arrow-up:before {\n  content: \"\\E133\";\n}\n.glyphicon-circle-arrow-down:before {\n  content: \"\\E134\";\n}\n.glyphicon-globe:before {\n  content: \"\\E135\";\n}\n.glyphicon-wrench:before {\n  content: \"\\E136\";\n}\n.glyphicon-tasks:before {\n  content: \"\\E137\";\n}\n.glyphicon-filter:before {\n  content: \"\\E138\";\n}\n.glyphicon-briefcase:before {\n  content: \"\\E139\";\n}\n.glyphicon-fullscreen:before {\n  content: \"\\E140\";\n}\n.glyphicon-dashboard:before {\n  content: \"\\E141\";\n}\n.glyphicon-paperclip:before {\n  content: \"\\E142\";\n}\n.glyphicon-heart-empty:before {\n  content: \"\\E143\";\n}\n.glyphicon-link:before {\n  content: \"\\E144\";\n}\n.glyphicon-phone:before {\n  content: \"\\E145\";\n}\n.glyphicon-pushpin:before {\n  content: \"\\E146\";\n}\n.glyphicon-usd:before {\n  content: \"\\E148\";\n}\n.glyphicon-gbp:before {\n  content: \"\\E149\";\n}\n.glyphicon-sort:before {\n  content: \"\\E150\";\n}\n.glyphicon-sort-by-alphabet:before {\n  content: \"\\E151\";\n}\n.glyphicon-sort-by-alphabet-alt:before {\n  content: \"\\E152\";\n}\n.glyphicon-sort-by-order:before {\n  content: \"\\E153\";\n}\n.glyphicon-sort-by-order-alt:before {\n  content: \"\\E154\";\n}\n.glyphicon-sort-by-attributes:before {\n  content: \"\\E155\";\n}\n.glyphicon-sort-by-attributes-alt:before {\n  content: \"\\E156\";\n}\n.glyphicon-unchecked:before {\n  content: \"\\E157\";\n}\n.glyphicon-expand:before {\n  content: \"\\E158\";\n}\n.glyphicon-collapse-down:before {\n  content: \"\\E159\";\n}\n.glyphicon-collapse-up:before {\n  content: \"\\E160\";\n}\n.glyphicon-log-in:before {\n  content: \"\\E161\";\n}\n.glyphicon-flash:before {\n  content: \"\\E162\";\n}\n.glyphicon-log-out:before {\n  content: \"\\E163\";\n}\n.glyphicon-new-window:before {\n  content: \"\\E164\";\n}\n.glyphicon-record:before {\n  content: \"\\E165\";\n}\n.glyphicon-save:before {\n  content: \"\\E166\";\n}\n.glyphicon-open:before {\n  content: \"\\E167\";\n}\n.glyphicon-saved:before {\n  content: \"\\E168\";\n}\n.glyphicon-import:before {\n  content: \"\\E169\";\n}\n.glyphicon-export:before {\n  content: \"\\E170\";\n}\n.glyphicon-send:before {\n  content: \"\\E171\";\n}\n.glyphicon-floppy-disk:before {\n  content: \"\\E172\";\n}\n.glyphicon-floppy-saved:before {\n  content: \"\\E173\";\n}\n.glyphicon-floppy-remove:before {\n  content: \"\\E174\";\n}\n.glyphicon-floppy-save:before {\n  content: \"\\E175\";\n}\n.glyphicon-floppy-open:before {\n  content: \"\\E176\";\n}\n.glyphicon-credit-card:before {\n  content: \"\\E177\";\n}\n.glyphicon-transfer:before {\n  content: \"\\E178\";\n}\n.glyphicon-cutlery:before {\n  content: \"\\E179\";\n}\n.glyphicon-header:before {\n  content: \"\\E180\";\n}\n.glyphicon-compressed:before {\n  content: \"\\E181\";\n}\n.glyphicon-earphone:before {\n  content: \"\\E182\";\n}\n.glyphicon-phone-alt:before {\n  content: \"\\E183\";\n}\n.glyphicon-tower:before {\n  content: \"\\E184\";\n}\n.glyphicon-stats:before {\n  content: \"\\E185\";\n}\n.glyphicon-sd-video:before {\n  content: \"\\E186\";\n}\n.glyphicon-hd-video:before {\n  content: \"\\E187\";\n}\n.glyphicon-subtitles:before {\n  content: \"\\E188\";\n}\n.glyphicon-sound-stereo:before {\n  content: \"\\E189\";\n}\n.glyphicon-sound-dolby:before {\n  content: \"\\E190\";\n}\n.glyphicon-sound-5-1:before {\n  content: \"\\E191\";\n}\n.glyphicon-sound-6-1:before {\n  content: \"\\E192\";\n}\n.glyphicon-sound-7-1:before {\n  content: \"\\E193\";\n}\n.glyphicon-copyright-mark:before {\n  content: \"\\E194\";\n}\n.glyphicon-registration-mark:before {\n  content: \"\\E195\";\n}\n.glyphicon-cloud-download:before {\n  content: \"\\E197\";\n}\n.glyphicon-cloud-upload:before {\n  content: \"\\E198\";\n}\n.glyphicon-tree-conifer:before {\n  content: \"\\E199\";\n}\n.glyphicon-tree-deciduous:before {\n  content: \"\\E200\";\n}\n.glyphicon-cd:before {\n  content: \"\\E201\";\n}\n.glyphicon-save-file:before {\n  content: \"\\E202\";\n}\n.glyphicon-open-file:before {\n  content: \"\\E203\";\n}\n.glyphicon-level-up:before {\n  content: \"\\E204\";\n}\n.glyphicon-copy:before {\n  content: \"\\E205\";\n}\n.glyphicon-paste:before {\n  content: \"\\E206\";\n}\n.glyphicon-alert:before {\n  content: \"\\E209\";\n}\n.glyphicon-equalizer:before {\n  content: \"\\E210\";\n}\n.glyphicon-king:before {\n  content: \"\\E211\";\n}\n.glyphicon-queen:before {\n  content: \"\\E212\";\n}\n.glyphicon-pawn:before {\n  content: \"\\E213\";\n}\n.glyphicon-bishop:before {\n  content: \"\\E214\";\n}\n.glyphicon-knight:before {\n  content: \"\\E215\";\n}\n.glyphicon-baby-formula:before {\n  content: \"\\E216\";\n}\n.glyphicon-tent:before {\n  content: \"\\26FA\";\n}\n.glyphicon-blackboard:before {\n  content: \"\\E218\";\n}\n.glyphicon-bed:before {\n  content: \"\\E219\";\n}\n.glyphicon-apple:before {\n  content: \"\\F8FF\";\n}\n.glyphicon-erase:before {\n  content: \"\\E221\";\n}\n.glyphicon-hourglass:before {\n  content: \"\\231B\";\n}\n.glyphicon-lamp:before {\n  content: \"\\E223\";\n}\n.glyphicon-duplicate:before {\n  content: \"\\E224\";\n}\n.glyphicon-piggy-bank:before {\n  content: \"\\E225\";\n}\n.glyphicon-scissors:before {\n  content: \"\\E226\";\n}\n.glyphicon-bitcoin:before {\n  content: \"\\E227\";\n}\n.glyphicon-btc:before {\n  content: \"\\E227\";\n}\n.glyphicon-xbt:before {\n  content: \"\\E227\";\n}\n.glyphicon-yen:before {\n  content: \"\\A5\";\n}\n.glyphicon-jpy:before {\n  content: \"\\A5\";\n}\n.glyphicon-ruble:before {\n  content: \"\\20BD\";\n}\n.glyphicon-rub:before {\n  content: \"\\20BD\";\n}\n.glyphicon-scale:before {\n  content: \"\\E230\";\n}\n.glyphicon-ice-lolly:before {\n  content: \"\\E231\";\n}\n.glyphicon-ice-lolly-tasted:before {\n  content: \"\\E232\";\n}\n.glyphicon-education:before {\n  content: \"\\E233\";\n}\n.glyphicon-option-horizontal:before {\n  content: \"\\E234\";\n}\n.glyphicon-option-vertical:before {\n  content: \"\\E235\";\n}\n.glyphicon-menu-hamburger:before {\n  content: \"\\E236\";\n}\n.glyphicon-modal-window:before {\n  content: \"\\E237\";\n}\n.glyphicon-oil:before {\n  content: \"\\E238\";\n}\n.glyphicon-grain:before {\n  content: \"\\E239\";\n}\n.glyphicon-sunglasses:before {\n  content: \"\\E240\";\n}\n.glyphicon-text-size:before {\n  content: \"\\E241\";\n}\n.glyphicon-text-color:before {\n  content: \"\\E242\";\n}\n.glyphicon-text-background:before {\n  content: \"\\E243\";\n}\n.glyphicon-object-align-top:before {\n  content: \"\\E244\";\n}\n.glyphicon-object-align-bottom:before {\n  content: \"\\E245\";\n}\n.glyphicon-object-align-horizontal:before {\n  content: \"\\E246\";\n}\n.glyphicon-object-align-left:before {\n  content: \"\\E247\";\n}\n.glyphicon-object-align-vertical:before {\n  content: \"\\E248\";\n}\n.glyphicon-object-align-right:before {\n  content: \"\\E249\";\n}\n.glyphicon-triangle-right:before {\n  content: \"\\E250\";\n}\n.glyphicon-triangle-left:before {\n  content: \"\\E251\";\n}\n.glyphicon-triangle-bottom:before {\n  content: \"\\E252\";\n}\n.glyphicon-triangle-top:before {\n  content: \"\\E253\";\n}\n.glyphicon-console:before {\n  content: \"\\E254\";\n}\n.glyphicon-superscript:before {\n  content: \"\\E255\";\n}\n.glyphicon-subscript:before {\n  content: \"\\E256\";\n}\n.glyphicon-menu-left:before {\n  content: \"\\E257\";\n}\n.glyphicon-menu-right:before {\n  content: \"\\E258\";\n}\n.glyphicon-menu-down:before {\n  content: \"\\E259\";\n}\n.glyphicon-menu-up:before {\n  content: \"\\E260\";\n}\n* {\n  box-sizing: border-box;\n}\n*:before,\n*:after {\n  box-sizing: border-box;\n}\nhtml {\n  font-size: 10px;\n\n  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);\n}\nbody {\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #333;\n  background-color: #fff;\n}\ninput,\nbutton,\nselect,\ntextarea {\n  font-family: inherit;\n  font-size: inherit;\n  line-height: inherit;\n}\na {\n  color: #337ab7;\n  text-decoration: none;\n}\na:hover,\na:focus {\n  color: #23527c;\n  text-decoration: underline;\n}\na:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\nfigure {\n  margin: 0;\n}\nimg {\n  vertical-align: middle;\n}\n.img-responsive,\n.thumbnail > img,\n.thumbnail a > img,\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  display: block;\n  max-width: 100%;\n  height: auto;\n}\n.img-rounded {\n  border-radius: 6px;\n}\n.img-thumbnail {\n  display: inline-block;\n  max-width: 100%;\n  height: auto;\n  padding: 4px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  transition: all .2s ease-in-out;\n}\n.img-circle {\n  border-radius: 50%;\n}\nhr {\n  margin-top: 20px;\n  margin-bottom: 20px;\n  border: 0;\n  border-top: 1px solid #eee;\n}\n.sr-only {\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  padding: 0;\n  margin: -1px;\n  overflow: hidden;\n  clip: rect(0, 0, 0, 0);\n  border: 0;\n}\n.sr-only-focusable:active,\n.sr-only-focusable:focus {\n  position: static;\n  width: auto;\n  height: auto;\n  margin: 0;\n  overflow: visible;\n  clip: auto;\n}\n[role=\"button\"] {\n  cursor: pointer;\n}\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\n.h1,\n.h2,\n.h3,\n.h4,\n.h5,\n.h6 {\n  font-family: inherit;\n  font-weight: 500;\n  line-height: 1.1;\n  color: inherit;\n}\nh1 small,\nh2 small,\nh3 small,\nh4 small,\nh5 small,\nh6 small,\n.h1 small,\n.h2 small,\n.h3 small,\n.h4 small,\n.h5 small,\n.h6 small,\nh1 .small,\nh2 .small,\nh3 .small,\nh4 .small,\nh5 .small,\nh6 .small,\n.h1 .small,\n.h2 .small,\n.h3 .small,\n.h4 .small,\n.h5 .small,\n.h6 .small {\n  font-weight: normal;\n  line-height: 1;\n  color: #777;\n}\nh1,\n.h1,\nh2,\n.h2,\nh3,\n.h3 {\n  margin-top: 20px;\n  margin-bottom: 10px;\n}\nh1 small,\n.h1 small,\nh2 small,\n.h2 small,\nh3 small,\n.h3 small,\nh1 .small,\n.h1 .small,\nh2 .small,\n.h2 .small,\nh3 .small,\n.h3 .small {\n  font-size: 65%;\n}\nh4,\n.h4,\nh5,\n.h5,\nh6,\n.h6 {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\nh4 small,\n.h4 small,\nh5 small,\n.h5 small,\nh6 small,\n.h6 small,\nh4 .small,\n.h4 .small,\nh5 .small,\n.h5 .small,\nh6 .small,\n.h6 .small {\n  font-size: 75%;\n}\nh1,\n.h1 {\n  font-size: 36px;\n}\nh2,\n.h2 {\n  font-size: 30px;\n}\nh3,\n.h3 {\n  font-size: 24px;\n}\nh4,\n.h4 {\n  font-size: 18px;\n}\nh5,\n.h5 {\n  font-size: 14px;\n}\nh6,\n.h6 {\n  font-size: 12px;\n}\np {\n  margin: 0 0 10px;\n}\n.lead {\n  margin-bottom: 20px;\n  font-size: 16px;\n  font-weight: 300;\n  line-height: 1.4;\n}\n@media (min-width: 768px) {\n  .lead {\n    font-size: 21px;\n  }\n}\nsmall,\n.small {\n  font-size: 85%;\n}\nmark,\n.mark {\n  padding: .2em;\n  background-color: #fcf8e3;\n}\n.text-left {\n  text-align: left;\n}\n.text-right {\n  text-align: right;\n}\n.text-center {\n  text-align: center;\n}\n.text-justify {\n  text-align: justify;\n}\n.text-nowrap {\n  white-space: nowrap;\n}\n.text-lowercase {\n  text-transform: lowercase;\n}\n.text-uppercase {\n  text-transform: uppercase;\n}\n.text-capitalize {\n  text-transform: capitalize;\n}\n.text-muted {\n  color: #777;\n}\n.text-primary {\n  color: #337ab7;\n}\na.text-primary:hover,\na.text-primary:focus {\n  color: #286090;\n}\n.text-success {\n  color: #3c763d;\n}\na.text-success:hover,\na.text-success:focus {\n  color: #2b542c;\n}\n.text-info {\n  color: #31708f;\n}\na.text-info:hover,\na.text-info:focus {\n  color: #245269;\n}\n.text-warning {\n  color: #8a6d3b;\n}\na.text-warning:hover,\na.text-warning:focus {\n  color: #66512c;\n}\n.text-danger {\n  color: #a94442;\n}\na.text-danger:hover,\na.text-danger:focus {\n  color: #843534;\n}\n.bg-primary {\n  color: #fff;\n  background-color: #337ab7;\n}\na.bg-primary:hover,\na.bg-primary:focus {\n  background-color: #286090;\n}\n.bg-success {\n  background-color: #dff0d8;\n}\na.bg-success:hover,\na.bg-success:focus {\n  background-color: #c1e2b3;\n}\n.bg-info {\n  background-color: #d9edf7;\n}\na.bg-info:hover,\na.bg-info:focus {\n  background-color: #afd9ee;\n}\n.bg-warning {\n  background-color: #fcf8e3;\n}\na.bg-warning:hover,\na.bg-warning:focus {\n  background-color: #f7ecb5;\n}\n.bg-danger {\n  background-color: #f2dede;\n}\na.bg-danger:hover,\na.bg-danger:focus {\n  background-color: #e4b9b9;\n}\n.page-header {\n  padding-bottom: 9px;\n  margin: 40px 0 20px;\n  border-bottom: 1px solid #eee;\n}\nul,\nol {\n  margin-top: 0;\n  margin-bottom: 10px;\n}\nul ul,\nol ul,\nul ol,\nol ol {\n  margin-bottom: 0;\n}\n.list-unstyled {\n  padding-left: 0;\n  list-style: none;\n}\n.list-inline {\n  padding-left: 0;\n  margin-left: -5px;\n  list-style: none;\n}\n.list-inline > li {\n  display: inline-block;\n  padding-right: 5px;\n  padding-left: 5px;\n}\ndl {\n  margin-top: 0;\n  margin-bottom: 20px;\n}\ndt,\ndd {\n  line-height: 1.42857143;\n}\ndt {\n  font-weight: bold;\n}\ndd {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .dl-horizontal dt {\n    float: left;\n    width: 160px;\n    overflow: hidden;\n    clear: left;\n    text-align: right;\n    text-overflow: ellipsis;\n    white-space: nowrap;\n  }\n  .dl-horizontal dd {\n    margin-left: 180px;\n  }\n}\nabbr[title],\nabbr[data-original-title] {\n  cursor: help;\n  border-bottom: 1px dotted #777;\n}\n.initialism {\n  font-size: 90%;\n  text-transform: uppercase;\n}\nblockquote {\n  padding: 10px 20px;\n  margin: 0 0 20px;\n  font-size: 17.5px;\n  border-left: 5px solid #eee;\n}\nblockquote p:last-child,\nblockquote ul:last-child,\nblockquote ol:last-child {\n  margin-bottom: 0;\n}\nblockquote footer,\nblockquote small,\nblockquote .small {\n  display: block;\n  font-size: 80%;\n  line-height: 1.42857143;\n  color: #777;\n}\nblockquote footer:before,\nblockquote small:before,\nblockquote .small:before {\n  content: '\\2014   \\A0';\n}\n.blockquote-reverse,\nblockquote.pull-right {\n  padding-right: 15px;\n  padding-left: 0;\n  text-align: right;\n  border-right: 5px solid #eee;\n  border-left: 0;\n}\n.blockquote-reverse footer:before,\nblockquote.pull-right footer:before,\n.blockquote-reverse small:before,\nblockquote.pull-right small:before,\n.blockquote-reverse .small:before,\nblockquote.pull-right .small:before {\n  content: '';\n}\n.blockquote-reverse footer:after,\nblockquote.pull-right footer:after,\n.blockquote-reverse small:after,\nblockquote.pull-right small:after,\n.blockquote-reverse .small:after,\nblockquote.pull-right .small:after {\n  content: '\\A0   \\2014';\n}\naddress {\n  margin-bottom: 20px;\n  font-style: normal;\n  line-height: 1.42857143;\n}\ncode,\nkbd,\npre,\nsamp {\n  font-family: Menlo, Monaco, Consolas, \"Courier New\", monospace;\n}\ncode {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #c7254e;\n  background-color: #f9f2f4;\n  border-radius: 4px;\n}\nkbd {\n  padding: 2px 4px;\n  font-size: 90%;\n  color: #fff;\n  background-color: #333;\n  border-radius: 3px;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .25);\n}\nkbd kbd {\n  padding: 0;\n  font-size: 100%;\n  font-weight: bold;\n  box-shadow: none;\n}\npre {\n  display: block;\n  padding: 9.5px;\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.42857143;\n  color: #333;\n  word-break: break-all;\n  word-wrap: break-word;\n  background-color: #f5f5f5;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\npre code {\n  padding: 0;\n  font-size: inherit;\n  color: inherit;\n  white-space: pre-wrap;\n  background-color: transparent;\n  border-radius: 0;\n}\n.pre-scrollable {\n  max-height: 340px;\n  overflow-y: scroll;\n}\n.container {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n@media (min-width: 768px) {\n  .container {\n    width: 750px;\n  }\n}\n@media (min-width: 992px) {\n  .container {\n    width: 970px;\n  }\n}\n@media (min-width: 1200px) {\n  .container {\n    width: 1170px;\n  }\n}\n.container-fluid {\n  padding-right: 15px;\n  padding-left: 15px;\n  margin-right: auto;\n  margin-left: auto;\n}\n.row {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12 {\n  position: relative;\n  min-height: 1px;\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12 {\n  float: left;\n}\n.col-xs-12 {\n  width: 100%;\n}\n.col-xs-11 {\n  width: 91.66666667%;\n}\n.col-xs-10 {\n  width: 83.33333333%;\n}\n.col-xs-9 {\n  width: 75%;\n}\n.col-xs-8 {\n  width: 66.66666667%;\n}\n.col-xs-7 {\n  width: 58.33333333%;\n}\n.col-xs-6 {\n  width: 50%;\n}\n.col-xs-5 {\n  width: 41.66666667%;\n}\n.col-xs-4 {\n  width: 33.33333333%;\n}\n.col-xs-3 {\n  width: 25%;\n}\n.col-xs-2 {\n  width: 16.66666667%;\n}\n.col-xs-1 {\n  width: 8.33333333%;\n}\n.col-xs-pull-12 {\n  right: 100%;\n}\n.col-xs-pull-11 {\n  right: 91.66666667%;\n}\n.col-xs-pull-10 {\n  right: 83.33333333%;\n}\n.col-xs-pull-9 {\n  right: 75%;\n}\n.col-xs-pull-8 {\n  right: 66.66666667%;\n}\n.col-xs-pull-7 {\n  right: 58.33333333%;\n}\n.col-xs-pull-6 {\n  right: 50%;\n}\n.col-xs-pull-5 {\n  right: 41.66666667%;\n}\n.col-xs-pull-4 {\n  right: 33.33333333%;\n}\n.col-xs-pull-3 {\n  right: 25%;\n}\n.col-xs-pull-2 {\n  right: 16.66666667%;\n}\n.col-xs-pull-1 {\n  right: 8.33333333%;\n}\n.col-xs-pull-0 {\n  right: auto;\n}\n.col-xs-push-12 {\n  left: 100%;\n}\n.col-xs-push-11 {\n  left: 91.66666667%;\n}\n.col-xs-push-10 {\n  left: 83.33333333%;\n}\n.col-xs-push-9 {\n  left: 75%;\n}\n.col-xs-push-8 {\n  left: 66.66666667%;\n}\n.col-xs-push-7 {\n  left: 58.33333333%;\n}\n.col-xs-push-6 {\n  left: 50%;\n}\n.col-xs-push-5 {\n  left: 41.66666667%;\n}\n.col-xs-push-4 {\n  left: 33.33333333%;\n}\n.col-xs-push-3 {\n  left: 25%;\n}\n.col-xs-push-2 {\n  left: 16.66666667%;\n}\n.col-xs-push-1 {\n  left: 8.33333333%;\n}\n.col-xs-push-0 {\n  left: auto;\n}\n.col-xs-offset-12 {\n  margin-left: 100%;\n}\n.col-xs-offset-11 {\n  margin-left: 91.66666667%;\n}\n.col-xs-offset-10 {\n  margin-left: 83.33333333%;\n}\n.col-xs-offset-9 {\n  margin-left: 75%;\n}\n.col-xs-offset-8 {\n  margin-left: 66.66666667%;\n}\n.col-xs-offset-7 {\n  margin-left: 58.33333333%;\n}\n.col-xs-offset-6 {\n  margin-left: 50%;\n}\n.col-xs-offset-5 {\n  margin-left: 41.66666667%;\n}\n.col-xs-offset-4 {\n  margin-left: 33.33333333%;\n}\n.col-xs-offset-3 {\n  margin-left: 25%;\n}\n.col-xs-offset-2 {\n  margin-left: 16.66666667%;\n}\n.col-xs-offset-1 {\n  margin-left: 8.33333333%;\n}\n.col-xs-offset-0 {\n  margin-left: 0;\n}\n@media (min-width: 768px) {\n  .col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12 {\n    float: left;\n  }\n  .col-sm-12 {\n    width: 100%;\n  }\n  .col-sm-11 {\n    width: 91.66666667%;\n  }\n  .col-sm-10 {\n    width: 83.33333333%;\n  }\n  .col-sm-9 {\n    width: 75%;\n  }\n  .col-sm-8 {\n    width: 66.66666667%;\n  }\n  .col-sm-7 {\n    width: 58.33333333%;\n  }\n  .col-sm-6 {\n    width: 50%;\n  }\n  .col-sm-5 {\n    width: 41.66666667%;\n  }\n  .col-sm-4 {\n    width: 33.33333333%;\n  }\n  .col-sm-3 {\n    width: 25%;\n  }\n  .col-sm-2 {\n    width: 16.66666667%;\n  }\n  .col-sm-1 {\n    width: 8.33333333%;\n  }\n  .col-sm-pull-12 {\n    right: 100%;\n  }\n  .col-sm-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-sm-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-sm-pull-9 {\n    right: 75%;\n  }\n  .col-sm-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-sm-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-sm-pull-6 {\n    right: 50%;\n  }\n  .col-sm-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-sm-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-sm-pull-3 {\n    right: 25%;\n  }\n  .col-sm-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-sm-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-sm-pull-0 {\n    right: auto;\n  }\n  .col-sm-push-12 {\n    left: 100%;\n  }\n  .col-sm-push-11 {\n    left: 91.66666667%;\n  }\n  .col-sm-push-10 {\n    left: 83.33333333%;\n  }\n  .col-sm-push-9 {\n    left: 75%;\n  }\n  .col-sm-push-8 {\n    left: 66.66666667%;\n  }\n  .col-sm-push-7 {\n    left: 58.33333333%;\n  }\n  .col-sm-push-6 {\n    left: 50%;\n  }\n  .col-sm-push-5 {\n    left: 41.66666667%;\n  }\n  .col-sm-push-4 {\n    left: 33.33333333%;\n  }\n  .col-sm-push-3 {\n    left: 25%;\n  }\n  .col-sm-push-2 {\n    left: 16.66666667%;\n  }\n  .col-sm-push-1 {\n    left: 8.33333333%;\n  }\n  .col-sm-push-0 {\n    left: auto;\n  }\n  .col-sm-offset-12 {\n    margin-left: 100%;\n  }\n  .col-sm-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-sm-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-sm-offset-9 {\n    margin-left: 75%;\n  }\n  .col-sm-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-sm-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-sm-offset-6 {\n    margin-left: 50%;\n  }\n  .col-sm-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-sm-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-sm-offset-3 {\n    margin-left: 25%;\n  }\n  .col-sm-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-sm-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-sm-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 992px) {\n  .col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12 {\n    float: left;\n  }\n  .col-md-12 {\n    width: 100%;\n  }\n  .col-md-11 {\n    width: 91.66666667%;\n  }\n  .col-md-10 {\n    width: 83.33333333%;\n  }\n  .col-md-9 {\n    width: 75%;\n  }\n  .col-md-8 {\n    width: 66.66666667%;\n  }\n  .col-md-7 {\n    width: 58.33333333%;\n  }\n  .col-md-6 {\n    width: 50%;\n  }\n  .col-md-5 {\n    width: 41.66666667%;\n  }\n  .col-md-4 {\n    width: 33.33333333%;\n  }\n  .col-md-3 {\n    width: 25%;\n  }\n  .col-md-2 {\n    width: 16.66666667%;\n  }\n  .col-md-1 {\n    width: 8.33333333%;\n  }\n  .col-md-pull-12 {\n    right: 100%;\n  }\n  .col-md-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-md-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-md-pull-9 {\n    right: 75%;\n  }\n  .col-md-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-md-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-md-pull-6 {\n    right: 50%;\n  }\n  .col-md-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-md-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-md-pull-3 {\n    right: 25%;\n  }\n  .col-md-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-md-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-md-pull-0 {\n    right: auto;\n  }\n  .col-md-push-12 {\n    left: 100%;\n  }\n  .col-md-push-11 {\n    left: 91.66666667%;\n  }\n  .col-md-push-10 {\n    left: 83.33333333%;\n  }\n  .col-md-push-9 {\n    left: 75%;\n  }\n  .col-md-push-8 {\n    left: 66.66666667%;\n  }\n  .col-md-push-7 {\n    left: 58.33333333%;\n  }\n  .col-md-push-6 {\n    left: 50%;\n  }\n  .col-md-push-5 {\n    left: 41.66666667%;\n  }\n  .col-md-push-4 {\n    left: 33.33333333%;\n  }\n  .col-md-push-3 {\n    left: 25%;\n  }\n  .col-md-push-2 {\n    left: 16.66666667%;\n  }\n  .col-md-push-1 {\n    left: 8.33333333%;\n  }\n  .col-md-push-0 {\n    left: auto;\n  }\n  .col-md-offset-12 {\n    margin-left: 100%;\n  }\n  .col-md-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-md-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-md-offset-9 {\n    margin-left: 75%;\n  }\n  .col-md-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-md-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-md-offset-6 {\n    margin-left: 50%;\n  }\n  .col-md-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-md-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-md-offset-3 {\n    margin-left: 25%;\n  }\n  .col-md-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-md-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-md-offset-0 {\n    margin-left: 0;\n  }\n}\n@media (min-width: 1200px) {\n  .col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12 {\n    float: left;\n  }\n  .col-lg-12 {\n    width: 100%;\n  }\n  .col-lg-11 {\n    width: 91.66666667%;\n  }\n  .col-lg-10 {\n    width: 83.33333333%;\n  }\n  .col-lg-9 {\n    width: 75%;\n  }\n  .col-lg-8 {\n    width: 66.66666667%;\n  }\n  .col-lg-7 {\n    width: 58.33333333%;\n  }\n  .col-lg-6 {\n    width: 50%;\n  }\n  .col-lg-5 {\n    width: 41.66666667%;\n  }\n  .col-lg-4 {\n    width: 33.33333333%;\n  }\n  .col-lg-3 {\n    width: 25%;\n  }\n  .col-lg-2 {\n    width: 16.66666667%;\n  }\n  .col-lg-1 {\n    width: 8.33333333%;\n  }\n  .col-lg-pull-12 {\n    right: 100%;\n  }\n  .col-lg-pull-11 {\n    right: 91.66666667%;\n  }\n  .col-lg-pull-10 {\n    right: 83.33333333%;\n  }\n  .col-lg-pull-9 {\n    right: 75%;\n  }\n  .col-lg-pull-8 {\n    right: 66.66666667%;\n  }\n  .col-lg-pull-7 {\n    right: 58.33333333%;\n  }\n  .col-lg-pull-6 {\n    right: 50%;\n  }\n  .col-lg-pull-5 {\n    right: 41.66666667%;\n  }\n  .col-lg-pull-4 {\n    right: 33.33333333%;\n  }\n  .col-lg-pull-3 {\n    right: 25%;\n  }\n  .col-lg-pull-2 {\n    right: 16.66666667%;\n  }\n  .col-lg-pull-1 {\n    right: 8.33333333%;\n  }\n  .col-lg-pull-0 {\n    right: auto;\n  }\n  .col-lg-push-12 {\n    left: 100%;\n  }\n  .col-lg-push-11 {\n    left: 91.66666667%;\n  }\n  .col-lg-push-10 {\n    left: 83.33333333%;\n  }\n  .col-lg-push-9 {\n    left: 75%;\n  }\n  .col-lg-push-8 {\n    left: 66.66666667%;\n  }\n  .col-lg-push-7 {\n    left: 58.33333333%;\n  }\n  .col-lg-push-6 {\n    left: 50%;\n  }\n  .col-lg-push-5 {\n    left: 41.66666667%;\n  }\n  .col-lg-push-4 {\n    left: 33.33333333%;\n  }\n  .col-lg-push-3 {\n    left: 25%;\n  }\n  .col-lg-push-2 {\n    left: 16.66666667%;\n  }\n  .col-lg-push-1 {\n    left: 8.33333333%;\n  }\n  .col-lg-push-0 {\n    left: auto;\n  }\n  .col-lg-offset-12 {\n    margin-left: 100%;\n  }\n  .col-lg-offset-11 {\n    margin-left: 91.66666667%;\n  }\n  .col-lg-offset-10 {\n    margin-left: 83.33333333%;\n  }\n  .col-lg-offset-9 {\n    margin-left: 75%;\n  }\n  .col-lg-offset-8 {\n    margin-left: 66.66666667%;\n  }\n  .col-lg-offset-7 {\n    margin-left: 58.33333333%;\n  }\n  .col-lg-offset-6 {\n    margin-left: 50%;\n  }\n  .col-lg-offset-5 {\n    margin-left: 41.66666667%;\n  }\n  .col-lg-offset-4 {\n    margin-left: 33.33333333%;\n  }\n  .col-lg-offset-3 {\n    margin-left: 25%;\n  }\n  .col-lg-offset-2 {\n    margin-left: 16.66666667%;\n  }\n  .col-lg-offset-1 {\n    margin-left: 8.33333333%;\n  }\n  .col-lg-offset-0 {\n    margin-left: 0;\n  }\n}\ntable {\n  background-color: transparent;\n}\ncaption {\n  padding-top: 8px;\n  padding-bottom: 8px;\n  color: #777;\n  text-align: left;\n}\nth {\n  text-align: left;\n}\n.table {\n  width: 100%;\n  max-width: 100%;\n  margin-bottom: 20px;\n}\n.table > thead > tr > th,\n.table > tbody > tr > th,\n.table > tfoot > tr > th,\n.table > thead > tr > td,\n.table > tbody > tr > td,\n.table > tfoot > tr > td {\n  padding: 8px;\n  line-height: 1.42857143;\n  vertical-align: top;\n  border-top: 1px solid #ddd;\n}\n.table > thead > tr > th {\n  vertical-align: bottom;\n  border-bottom: 2px solid #ddd;\n}\n.table > caption + thead > tr:first-child > th,\n.table > colgroup + thead > tr:first-child > th,\n.table > thead:first-child > tr:first-child > th,\n.table > caption + thead > tr:first-child > td,\n.table > colgroup + thead > tr:first-child > td,\n.table > thead:first-child > tr:first-child > td {\n  border-top: 0;\n}\n.table > tbody + tbody {\n  border-top: 2px solid #ddd;\n}\n.table .table {\n  background-color: #fff;\n}\n.table-condensed > thead > tr > th,\n.table-condensed > tbody > tr > th,\n.table-condensed > tfoot > tr > th,\n.table-condensed > thead > tr > td,\n.table-condensed > tbody > tr > td,\n.table-condensed > tfoot > tr > td {\n  padding: 5px;\n}\n.table-bordered {\n  border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > tbody > tr > th,\n.table-bordered > tfoot > tr > th,\n.table-bordered > thead > tr > td,\n.table-bordered > tbody > tr > td,\n.table-bordered > tfoot > tr > td {\n  border: 1px solid #ddd;\n}\n.table-bordered > thead > tr > th,\n.table-bordered > thead > tr > td {\n  border-bottom-width: 2px;\n}\n.table-striped > tbody > tr:nth-of-type(odd) {\n  background-color: #f9f9f9;\n}\n.table-hover > tbody > tr:hover {\n  background-color: #f5f5f5;\n}\ntable col[class*=\"col-\"] {\n  position: static;\n  display: table-column;\n  float: none;\n}\ntable td[class*=\"col-\"],\ntable th[class*=\"col-\"] {\n  position: static;\n  display: table-cell;\n  float: none;\n}\n.table > thead > tr > td.active,\n.table > tbody > tr > td.active,\n.table > tfoot > tr > td.active,\n.table > thead > tr > th.active,\n.table > tbody > tr > th.active,\n.table > tfoot > tr > th.active,\n.table > thead > tr.active > td,\n.table > tbody > tr.active > td,\n.table > tfoot > tr.active > td,\n.table > thead > tr.active > th,\n.table > tbody > tr.active > th,\n.table > tfoot > tr.active > th {\n  background-color: #f5f5f5;\n}\n.table-hover > tbody > tr > td.active:hover,\n.table-hover > tbody > tr > th.active:hover,\n.table-hover > tbody > tr.active:hover > td,\n.table-hover > tbody > tr:hover > .active,\n.table-hover > tbody > tr.active:hover > th {\n  background-color: #e8e8e8;\n}\n.table > thead > tr > td.success,\n.table > tbody > tr > td.success,\n.table > tfoot > tr > td.success,\n.table > thead > tr > th.success,\n.table > tbody > tr > th.success,\n.table > tfoot > tr > th.success,\n.table > thead > tr.success > td,\n.table > tbody > tr.success > td,\n.table > tfoot > tr.success > td,\n.table > thead > tr.success > th,\n.table > tbody > tr.success > th,\n.table > tfoot > tr.success > th {\n  background-color: #dff0d8;\n}\n.table-hover > tbody > tr > td.success:hover,\n.table-hover > tbody > tr > th.success:hover,\n.table-hover > tbody > tr.success:hover > td,\n.table-hover > tbody > tr:hover > .success,\n.table-hover > tbody > tr.success:hover > th {\n  background-color: #d0e9c6;\n}\n.table > thead > tr > td.info,\n.table > tbody > tr > td.info,\n.table > tfoot > tr > td.info,\n.table > thead > tr > th.info,\n.table > tbody > tr > th.info,\n.table > tfoot > tr > th.info,\n.table > thead > tr.info > td,\n.table > tbody > tr.info > td,\n.table > tfoot > tr.info > td,\n.table > thead > tr.info > th,\n.table > tbody > tr.info > th,\n.table > tfoot > tr.info > th {\n  background-color: #d9edf7;\n}\n.table-hover > tbody > tr > td.info:hover,\n.table-hover > tbody > tr > th.info:hover,\n.table-hover > tbody > tr.info:hover > td,\n.table-hover > tbody > tr:hover > .info,\n.table-hover > tbody > tr.info:hover > th {\n  background-color: #c4e3f3;\n}\n.table > thead > tr > td.warning,\n.table > tbody > tr > td.warning,\n.table > tfoot > tr > td.warning,\n.table > thead > tr > th.warning,\n.table > tbody > tr > th.warning,\n.table > tfoot > tr > th.warning,\n.table > thead > tr.warning > td,\n.table > tbody > tr.warning > td,\n.table > tfoot > tr.warning > td,\n.table > thead > tr.warning > th,\n.table > tbody > tr.warning > th,\n.table > tfoot > tr.warning > th {\n  background-color: #fcf8e3;\n}\n.table-hover > tbody > tr > td.warning:hover,\n.table-hover > tbody > tr > th.warning:hover,\n.table-hover > tbody > tr.warning:hover > td,\n.table-hover > tbody > tr:hover > .warning,\n.table-hover > tbody > tr.warning:hover > th {\n  background-color: #faf2cc;\n}\n.table > thead > tr > td.danger,\n.table > tbody > tr > td.danger,\n.table > tfoot > tr > td.danger,\n.table > thead > tr > th.danger,\n.table > tbody > tr > th.danger,\n.table > tfoot > tr > th.danger,\n.table > thead > tr.danger > td,\n.table > tbody > tr.danger > td,\n.table > tfoot > tr.danger > td,\n.table > thead > tr.danger > th,\n.table > tbody > tr.danger > th,\n.table > tfoot > tr.danger > th {\n  background-color: #f2dede;\n}\n.table-hover > tbody > tr > td.danger:hover,\n.table-hover > tbody > tr > th.danger:hover,\n.table-hover > tbody > tr.danger:hover > td,\n.table-hover > tbody > tr:hover > .danger,\n.table-hover > tbody > tr.danger:hover > th {\n  background-color: #ebcccc;\n}\n.table-responsive {\n  min-height: .01%;\n  overflow-x: auto;\n}\n@media screen and (max-width: 767px) {\n  .table-responsive {\n    width: 100%;\n    margin-bottom: 15px;\n    overflow-y: hidden;\n    -ms-overflow-style: -ms-autohiding-scrollbar;\n    border: 1px solid #ddd;\n  }\n  .table-responsive > .table {\n    margin-bottom: 0;\n  }\n  .table-responsive > .table > thead > tr > th,\n  .table-responsive > .table > tbody > tr > th,\n  .table-responsive > .table > tfoot > tr > th,\n  .table-responsive > .table > thead > tr > td,\n  .table-responsive > .table > tbody > tr > td,\n  .table-responsive > .table > tfoot > tr > td {\n    white-space: nowrap;\n  }\n  .table-responsive > .table-bordered {\n    border: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:first-child,\n  .table-responsive > .table-bordered > tbody > tr > th:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n  .table-responsive > .table-bordered > thead > tr > td:first-child,\n  .table-responsive > .table-bordered > tbody > tr > td:first-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n    border-left: 0;\n  }\n  .table-responsive > .table-bordered > thead > tr > th:last-child,\n  .table-responsive > .table-bordered > tbody > tr > th:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n  .table-responsive > .table-bordered > thead > tr > td:last-child,\n  .table-responsive > .table-bordered > tbody > tr > td:last-child,\n  .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n    border-right: 0;\n  }\n  .table-responsive > .table-bordered > tbody > tr:last-child > th,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > th,\n  .table-responsive > .table-bordered > tbody > tr:last-child > td,\n  .table-responsive > .table-bordered > tfoot > tr:last-child > td {\n    border-bottom: 0;\n  }\n}\nfieldset {\n  min-width: 0;\n  padding: 0;\n  margin: 0;\n  border: 0;\n}\nlegend {\n  display: block;\n  width: 100%;\n  padding: 0;\n  margin-bottom: 20px;\n  font-size: 21px;\n  line-height: inherit;\n  color: #333;\n  border: 0;\n  border-bottom: 1px solid #e5e5e5;\n}\nlabel {\n  display: inline-block;\n  max-width: 100%;\n  margin-bottom: 5px;\n  font-weight: bold;\n}\ninput[type=\"search\"] {\n  box-sizing: border-box;\n}\ninput[type=\"radio\"],\ninput[type=\"checkbox\"] {\n  margin: 4px 0 0;\n  margin-top: 1px \\9;\n  line-height: normal;\n}\ninput[type=\"file\"] {\n  display: block;\n}\ninput[type=\"range\"] {\n  display: block;\n  width: 100%;\n}\nselect[multiple],\nselect[size] {\n  height: auto;\n}\ninput[type=\"file\"]:focus,\ninput[type=\"radio\"]:focus,\ninput[type=\"checkbox\"]:focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\noutput {\n  display: block;\n  padding-top: 7px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n}\n.form-control {\n  display: block;\n  width: 100%;\n  height: 34px;\n  padding: 6px 12px;\n  font-size: 14px;\n  line-height: 1.42857143;\n  color: #555;\n  background-color: #fff;\n  background-image: none;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;\n}\n.form-control:focus {\n  border-color: #66afe9;\n  outline: 0;\n  box-shadow: inset 0 1px 1px rgba(0,0,0,.075), 0 0 8px rgba(102, 175, 233, .6);\n}\n.form-control::-moz-placeholder {\n  color: #999;\n  opacity: 1;\n}\n.form-control:-ms-input-placeholder {\n  color: #999;\n}\n.form-control::-webkit-input-placeholder {\n  color: #999;\n}\n.form-control::-ms-expand {\n  background-color: transparent;\n  border: 0;\n}\n.form-control[disabled],\n.form-control[readonly],\nfieldset[disabled] .form-control {\n  background-color: #eee;\n  opacity: 1;\n}\n.form-control[disabled],\nfieldset[disabled] .form-control {\n  cursor: not-allowed;\n}\ntextarea.form-control {\n  height: auto;\n}\ninput[type=\"search\"] {\n  -webkit-appearance: none;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  input[type=\"date\"].form-control,\n  input[type=\"time\"].form-control,\n  input[type=\"datetime-local\"].form-control,\n  input[type=\"month\"].form-control {\n    line-height: 34px;\n  }\n  input[type=\"date\"].input-sm,\n  input[type=\"time\"].input-sm,\n  input[type=\"datetime-local\"].input-sm,\n  input[type=\"month\"].input-sm,\n  .input-group-sm input[type=\"date\"],\n  .input-group-sm input[type=\"time\"],\n  .input-group-sm input[type=\"datetime-local\"],\n  .input-group-sm input[type=\"month\"] {\n    line-height: 30px;\n  }\n  input[type=\"date\"].input-lg,\n  input[type=\"time\"].input-lg,\n  input[type=\"datetime-local\"].input-lg,\n  input[type=\"month\"].input-lg,\n  .input-group-lg input[type=\"date\"],\n  .input-group-lg input[type=\"time\"],\n  .input-group-lg input[type=\"datetime-local\"],\n  .input-group-lg input[type=\"month\"] {\n    line-height: 46px;\n  }\n}\n.form-group {\n  margin-bottom: 15px;\n}\n.radio,\n.checkbox {\n  position: relative;\n  display: block;\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.radio label,\n.checkbox label {\n  min-height: 20px;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  cursor: pointer;\n}\n.radio input[type=\"radio\"],\n.radio-inline input[type=\"radio\"],\n.checkbox input[type=\"checkbox\"],\n.checkbox-inline input[type=\"checkbox\"] {\n  position: absolute;\n  margin-top: 4px \\9;\n  margin-left: -20px;\n}\n.radio + .radio,\n.checkbox + .checkbox {\n  margin-top: -5px;\n}\n.radio-inline,\n.checkbox-inline {\n  position: relative;\n  display: inline-block;\n  padding-left: 20px;\n  margin-bottom: 0;\n  font-weight: normal;\n  vertical-align: middle;\n  cursor: pointer;\n}\n.radio-inline + .radio-inline,\n.checkbox-inline + .checkbox-inline {\n  margin-top: 0;\n  margin-left: 10px;\n}\ninput[type=\"radio\"][disabled],\ninput[type=\"checkbox\"][disabled],\ninput[type=\"radio\"].disabled,\ninput[type=\"checkbox\"].disabled,\nfieldset[disabled] input[type=\"radio\"],\nfieldset[disabled] input[type=\"checkbox\"] {\n  cursor: not-allowed;\n}\n.radio-inline.disabled,\n.checkbox-inline.disabled,\nfieldset[disabled] .radio-inline,\nfieldset[disabled] .checkbox-inline {\n  cursor: not-allowed;\n}\n.radio.disabled label,\n.checkbox.disabled label,\nfieldset[disabled] .radio label,\nfieldset[disabled] .checkbox label {\n  cursor: not-allowed;\n}\n.form-control-static {\n  min-height: 34px;\n  padding-top: 7px;\n  padding-bottom: 7px;\n  margin-bottom: 0;\n}\n.form-control-static.input-lg,\n.form-control-static.input-sm {\n  padding-right: 0;\n  padding-left: 0;\n}\n.input-sm {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.input-sm {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-sm,\nselect[multiple].input-sm {\n  height: auto;\n}\n.form-group-sm .form-control {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.form-group-sm select.form-control {\n  height: 30px;\n  line-height: 30px;\n}\n.form-group-sm textarea.form-control,\n.form-group-sm select[multiple].form-control {\n  height: auto;\n}\n.form-group-sm .form-control-static {\n  height: 30px;\n  min-height: 32px;\n  padding: 6px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.input-lg {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.input-lg {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-lg,\nselect[multiple].input-lg {\n  height: auto;\n}\n.form-group-lg .form-control {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n.form-group-lg select.form-control {\n  height: 46px;\n  line-height: 46px;\n}\n.form-group-lg textarea.form-control,\n.form-group-lg select[multiple].form-control {\n  height: auto;\n}\n.form-group-lg .form-control-static {\n  height: 46px;\n  min-height: 38px;\n  padding: 11px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.has-feedback {\n  position: relative;\n}\n.has-feedback .form-control {\n  padding-right: 42.5px;\n}\n.form-control-feedback {\n  position: absolute;\n  top: 0;\n  right: 0;\n  z-index: 2;\n  display: block;\n  width: 34px;\n  height: 34px;\n  line-height: 34px;\n  text-align: center;\n  pointer-events: none;\n}\n.input-lg + .form-control-feedback,\n.input-group-lg + .form-control-feedback,\n.form-group-lg .form-control + .form-control-feedback {\n  width: 46px;\n  height: 46px;\n  line-height: 46px;\n}\n.input-sm + .form-control-feedback,\n.input-group-sm + .form-control-feedback,\n.form-group-sm .form-control + .form-control-feedback {\n  width: 30px;\n  height: 30px;\n  line-height: 30px;\n}\n.has-success .help-block,\n.has-success .control-label,\n.has-success .radio,\n.has-success .checkbox,\n.has-success .radio-inline,\n.has-success .checkbox-inline,\n.has-success.radio label,\n.has-success.checkbox label,\n.has-success.radio-inline label,\n.has-success.checkbox-inline label {\n  color: #3c763d;\n}\n.has-success .form-control {\n  border-color: #3c763d;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-success .form-control:focus {\n  border-color: #2b542c;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #67b168;\n}\n.has-success .input-group-addon {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #3c763d;\n}\n.has-success .form-control-feedback {\n  color: #3c763d;\n}\n.has-warning .help-block,\n.has-warning .control-label,\n.has-warning .radio,\n.has-warning .checkbox,\n.has-warning .radio-inline,\n.has-warning .checkbox-inline,\n.has-warning.radio label,\n.has-warning.checkbox label,\n.has-warning.radio-inline label,\n.has-warning.checkbox-inline label {\n  color: #8a6d3b;\n}\n.has-warning .form-control {\n  border-color: #8a6d3b;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-warning .form-control:focus {\n  border-color: #66512c;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #c0a16b;\n}\n.has-warning .input-group-addon {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #8a6d3b;\n}\n.has-warning .form-control-feedback {\n  color: #8a6d3b;\n}\n.has-error .help-block,\n.has-error .control-label,\n.has-error .radio,\n.has-error .checkbox,\n.has-error .radio-inline,\n.has-error .checkbox-inline,\n.has-error.radio label,\n.has-error.checkbox label,\n.has-error.radio-inline label,\n.has-error.checkbox-inline label {\n  color: #a94442;\n}\n.has-error .form-control {\n  border-color: #a94442;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075);\n}\n.has-error .form-control:focus {\n  border-color: #843534;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .075), 0 0 6px #ce8483;\n}\n.has-error .input-group-addon {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #a94442;\n}\n.has-error .form-control-feedback {\n  color: #a94442;\n}\n.has-feedback label ~ .form-control-feedback {\n  top: 25px;\n}\n.has-feedback label.sr-only ~ .form-control-feedback {\n  top: 0;\n}\n.help-block {\n  display: block;\n  margin-top: 5px;\n  margin-bottom: 10px;\n  color: #737373;\n}\n@media (min-width: 768px) {\n  .form-inline .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .form-inline .form-control-static {\n    display: inline-block;\n  }\n  .form-inline .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .form-inline .input-group .input-group-addon,\n  .form-inline .input-group .input-group-btn,\n  .form-inline .input-group .form-control {\n    width: auto;\n  }\n  .form-inline .input-group > .form-control {\n    width: 100%;\n  }\n  .form-inline .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio,\n  .form-inline .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .form-inline .radio label,\n  .form-inline .checkbox label {\n    padding-left: 0;\n  }\n  .form-inline .radio input[type=\"radio\"],\n  .form-inline .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .form-inline .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox,\n.form-horizontal .radio-inline,\n.form-horizontal .checkbox-inline {\n  padding-top: 7px;\n  margin-top: 0;\n  margin-bottom: 0;\n}\n.form-horizontal .radio,\n.form-horizontal .checkbox {\n  min-height: 27px;\n}\n.form-horizontal .form-group {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .control-label {\n    padding-top: 7px;\n    margin-bottom: 0;\n    text-align: right;\n  }\n}\n.form-horizontal .has-feedback .form-control-feedback {\n  right: 15px;\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-lg .control-label {\n    padding-top: 11px;\n    font-size: 18px;\n  }\n}\n@media (min-width: 768px) {\n  .form-horizontal .form-group-sm .control-label {\n    padding-top: 6px;\n    font-size: 12px;\n  }\n}\n.btn {\n  display: inline-block;\n  padding: 6px 12px;\n  margin-bottom: 0;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  -ms-touch-action: manipulation;\n      touch-action: manipulation;\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n      -ms-user-select: none;\n          user-select: none;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.btn:focus,\n.btn:active:focus,\n.btn.active:focus,\n.btn.focus,\n.btn:active.focus,\n.btn.active.focus {\n  outline: 5px auto -webkit-focus-ring-color;\n  outline-offset: -2px;\n}\n.btn:hover,\n.btn:focus,\n.btn.focus {\n  color: #333;\n  text-decoration: none;\n}\n.btn:active,\n.btn.active {\n  background-image: none;\n  outline: 0;\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n}\n.btn.disabled,\n.btn[disabled],\nfieldset[disabled] .btn {\n  cursor: not-allowed;\n  filter: alpha(opacity=65);\n  box-shadow: none;\n  opacity: .65;\n}\na.btn.disabled,\nfieldset[disabled] a.btn {\n  pointer-events: none;\n}\n.btn-default {\n  color: #333;\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-default:focus,\n.btn-default.focus {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #8c8c8c;\n}\n.btn-default:hover {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  color: #333;\n  background-color: #e6e6e6;\n  border-color: #adadad;\n}\n.btn-default:active:hover,\n.btn-default.active:hover,\n.open > .dropdown-toggle.btn-default:hover,\n.btn-default:active:focus,\n.btn-default.active:focus,\n.open > .dropdown-toggle.btn-default:focus,\n.btn-default:active.focus,\n.btn-default.active.focus,\n.open > .dropdown-toggle.btn-default.focus {\n  color: #333;\n  background-color: #d4d4d4;\n  border-color: #8c8c8c;\n}\n.btn-default:active,\n.btn-default.active,\n.open > .dropdown-toggle.btn-default {\n  background-image: none;\n}\n.btn-default.disabled:hover,\n.btn-default[disabled]:hover,\nfieldset[disabled] .btn-default:hover,\n.btn-default.disabled:focus,\n.btn-default[disabled]:focus,\nfieldset[disabled] .btn-default:focus,\n.btn-default.disabled.focus,\n.btn-default[disabled].focus,\nfieldset[disabled] .btn-default.focus {\n  background-color: #fff;\n  border-color: #ccc;\n}\n.btn-default .badge {\n  color: #fff;\n  background-color: #333;\n}\n.btn-primary {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n.btn-primary:focus,\n.btn-primary.focus {\n  color: #fff;\n  background-color: #286090;\n  border-color: #122b40;\n}\n.btn-primary:hover {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  color: #fff;\n  background-color: #286090;\n  border-color: #204d74;\n}\n.btn-primary:active:hover,\n.btn-primary.active:hover,\n.open > .dropdown-toggle.btn-primary:hover,\n.btn-primary:active:focus,\n.btn-primary.active:focus,\n.open > .dropdown-toggle.btn-primary:focus,\n.btn-primary:active.focus,\n.btn-primary.active.focus,\n.open > .dropdown-toggle.btn-primary.focus {\n  color: #fff;\n  background-color: #204d74;\n  border-color: #122b40;\n}\n.btn-primary:active,\n.btn-primary.active,\n.open > .dropdown-toggle.btn-primary {\n  background-image: none;\n}\n.btn-primary.disabled:hover,\n.btn-primary[disabled]:hover,\nfieldset[disabled] .btn-primary:hover,\n.btn-primary.disabled:focus,\n.btn-primary[disabled]:focus,\nfieldset[disabled] .btn-primary:focus,\n.btn-primary.disabled.focus,\n.btn-primary[disabled].focus,\nfieldset[disabled] .btn-primary.focus {\n  background-color: #337ab7;\n  border-color: #2e6da4;\n}\n.btn-primary .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.btn-success {\n  color: #fff;\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn-success:focus,\n.btn-success.focus {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #255625;\n}\n.btn-success:hover {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  color: #fff;\n  background-color: #449d44;\n  border-color: #398439;\n}\n.btn-success:active:hover,\n.btn-success.active:hover,\n.open > .dropdown-toggle.btn-success:hover,\n.btn-success:active:focus,\n.btn-success.active:focus,\n.open > .dropdown-toggle.btn-success:focus,\n.btn-success:active.focus,\n.btn-success.active.focus,\n.open > .dropdown-toggle.btn-success.focus {\n  color: #fff;\n  background-color: #398439;\n  border-color: #255625;\n}\n.btn-success:active,\n.btn-success.active,\n.open > .dropdown-toggle.btn-success {\n  background-image: none;\n}\n.btn-success.disabled:hover,\n.btn-success[disabled]:hover,\nfieldset[disabled] .btn-success:hover,\n.btn-success.disabled:focus,\n.btn-success[disabled]:focus,\nfieldset[disabled] .btn-success:focus,\n.btn-success.disabled.focus,\n.btn-success[disabled].focus,\nfieldset[disabled] .btn-success.focus {\n  background-color: #5cb85c;\n  border-color: #4cae4c;\n}\n.btn-success .badge {\n  color: #5cb85c;\n  background-color: #fff;\n}\n.btn-info {\n  color: #fff;\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.btn-info:focus,\n.btn-info.focus {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #1b6d85;\n}\n.btn-info:hover {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  color: #fff;\n  background-color: #31b0d5;\n  border-color: #269abc;\n}\n.btn-info:active:hover,\n.btn-info.active:hover,\n.open > .dropdown-toggle.btn-info:hover,\n.btn-info:active:focus,\n.btn-info.active:focus,\n.open > .dropdown-toggle.btn-info:focus,\n.btn-info:active.focus,\n.btn-info.active.focus,\n.open > .dropdown-toggle.btn-info.focus {\n  color: #fff;\n  background-color: #269abc;\n  border-color: #1b6d85;\n}\n.btn-info:active,\n.btn-info.active,\n.open > .dropdown-toggle.btn-info {\n  background-image: none;\n}\n.btn-info.disabled:hover,\n.btn-info[disabled]:hover,\nfieldset[disabled] .btn-info:hover,\n.btn-info.disabled:focus,\n.btn-info[disabled]:focus,\nfieldset[disabled] .btn-info:focus,\n.btn-info.disabled.focus,\n.btn-info[disabled].focus,\nfieldset[disabled] .btn-info.focus {\n  background-color: #5bc0de;\n  border-color: #46b8da;\n}\n.btn-info .badge {\n  color: #5bc0de;\n  background-color: #fff;\n}\n.btn-warning {\n  color: #fff;\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.btn-warning:focus,\n.btn-warning.focus {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #985f0d;\n}\n.btn-warning:hover {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  color: #fff;\n  background-color: #ec971f;\n  border-color: #d58512;\n}\n.btn-warning:active:hover,\n.btn-warning.active:hover,\n.open > .dropdown-toggle.btn-warning:hover,\n.btn-warning:active:focus,\n.btn-warning.active:focus,\n.open > .dropdown-toggle.btn-warning:focus,\n.btn-warning:active.focus,\n.btn-warning.active.focus,\n.open > .dropdown-toggle.btn-warning.focus {\n  color: #fff;\n  background-color: #d58512;\n  border-color: #985f0d;\n}\n.btn-warning:active,\n.btn-warning.active,\n.open > .dropdown-toggle.btn-warning {\n  background-image: none;\n}\n.btn-warning.disabled:hover,\n.btn-warning[disabled]:hover,\nfieldset[disabled] .btn-warning:hover,\n.btn-warning.disabled:focus,\n.btn-warning[disabled]:focus,\nfieldset[disabled] .btn-warning:focus,\n.btn-warning.disabled.focus,\n.btn-warning[disabled].focus,\nfieldset[disabled] .btn-warning.focus {\n  background-color: #f0ad4e;\n  border-color: #eea236;\n}\n.btn-warning .badge {\n  color: #f0ad4e;\n  background-color: #fff;\n}\n.btn-danger {\n  color: #fff;\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.btn-danger:focus,\n.btn-danger.focus {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #761c19;\n}\n.btn-danger:hover {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  color: #fff;\n  background-color: #c9302c;\n  border-color: #ac2925;\n}\n.btn-danger:active:hover,\n.btn-danger.active:hover,\n.open > .dropdown-toggle.btn-danger:hover,\n.btn-danger:active:focus,\n.btn-danger.active:focus,\n.open > .dropdown-toggle.btn-danger:focus,\n.btn-danger:active.focus,\n.btn-danger.active.focus,\n.open > .dropdown-toggle.btn-danger.focus {\n  color: #fff;\n  background-color: #ac2925;\n  border-color: #761c19;\n}\n.btn-danger:active,\n.btn-danger.active,\n.open > .dropdown-toggle.btn-danger {\n  background-image: none;\n}\n.btn-danger.disabled:hover,\n.btn-danger[disabled]:hover,\nfieldset[disabled] .btn-danger:hover,\n.btn-danger.disabled:focus,\n.btn-danger[disabled]:focus,\nfieldset[disabled] .btn-danger:focus,\n.btn-danger.disabled.focus,\n.btn-danger[disabled].focus,\nfieldset[disabled] .btn-danger.focus {\n  background-color: #d9534f;\n  border-color: #d43f3a;\n}\n.btn-danger .badge {\n  color: #d9534f;\n  background-color: #fff;\n}\n.btn-link {\n  font-weight: normal;\n  color: #337ab7;\n  border-radius: 0;\n}\n.btn-link,\n.btn-link:active,\n.btn-link.active,\n.btn-link[disabled],\nfieldset[disabled] .btn-link {\n  background-color: transparent;\n  box-shadow: none;\n}\n.btn-link,\n.btn-link:hover,\n.btn-link:focus,\n.btn-link:active {\n  border-color: transparent;\n}\n.btn-link:hover,\n.btn-link:focus {\n  color: #23527c;\n  text-decoration: underline;\n  background-color: transparent;\n}\n.btn-link[disabled]:hover,\nfieldset[disabled] .btn-link:hover,\n.btn-link[disabled]:focus,\nfieldset[disabled] .btn-link:focus {\n  color: #777;\n  text-decoration: none;\n}\n.btn-lg,\n.btn-group-lg > .btn {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\n.btn-sm,\n.btn-group-sm > .btn {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.btn-xs,\n.btn-group-xs > .btn {\n  padding: 1px 5px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\n.btn-block {\n  display: block;\n  width: 100%;\n}\n.btn-block + .btn-block {\n  margin-top: 5px;\n}\ninput[type=\"submit\"].btn-block,\ninput[type=\"reset\"].btn-block,\ninput[type=\"button\"].btn-block {\n  width: 100%;\n}\n.fade {\n  opacity: 0;\n  transition: opacity .15s linear;\n}\n.fade.in {\n  opacity: 1;\n}\n.collapse {\n  display: none;\n}\n.collapse.in {\n  display: block;\n}\ntr.collapse.in {\n  display: table-row;\n}\ntbody.collapse.in {\n  display: table-row-group;\n}\n.collapsing {\n  position: relative;\n  height: 0;\n  overflow: hidden;\n  transition-timing-function: ease;\n  transition-duration: .35s;\n  transition-property: height, visibility;\n}\n.caret {\n  display: inline-block;\n  width: 0;\n  height: 0;\n  margin-left: 2px;\n  vertical-align: middle;\n  border-top: 4px dashed;\n  border-top: 4px solid \\9;\n  border-right: 4px solid transparent;\n  border-left: 4px solid transparent;\n}\n.dropup,\n.dropdown {\n  position: relative;\n}\n.dropdown-toggle:focus {\n  outline: 0;\n}\n.dropdown-menu {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  z-index: 1000;\n  display: none;\n  float: left;\n  min-width: 160px;\n  padding: 5px 0;\n  margin: 2px 0 0;\n  font-size: 14px;\n  text-align: left;\n  list-style: none;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, .15);\n  border-radius: 4px;\n  box-shadow: 0 6px 12px rgba(0, 0, 0, .175);\n}\n.dropdown-menu.pull-right {\n  right: 0;\n  left: auto;\n}\n.dropdown-menu .divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.dropdown-menu > li > a {\n  display: block;\n  padding: 3px 20px;\n  clear: both;\n  font-weight: normal;\n  line-height: 1.42857143;\n  color: #333;\n  white-space: nowrap;\n}\n.dropdown-menu > li > a:hover,\n.dropdown-menu > li > a:focus {\n  color: #262626;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\n.dropdown-menu > .active > a,\n.dropdown-menu > .active > a:hover,\n.dropdown-menu > .active > a:focus {\n  color: #fff;\n  text-decoration: none;\n  background-color: #337ab7;\n  outline: 0;\n}\n.dropdown-menu > .disabled > a,\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  color: #777;\n}\n.dropdown-menu > .disabled > a:hover,\n.dropdown-menu > .disabled > a:focus {\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n  background-image: none;\n  filter: progid:DXImageTransform.Microsoft.gradient(enabled = false);\n}\n.open > .dropdown-menu {\n  display: block;\n}\n.open > a {\n  outline: 0;\n}\n.dropdown-menu-right {\n  right: 0;\n  left: auto;\n}\n.dropdown-menu-left {\n  right: auto;\n  left: 0;\n}\n.dropdown-header {\n  display: block;\n  padding: 3px 20px;\n  font-size: 12px;\n  line-height: 1.42857143;\n  color: #777;\n  white-space: nowrap;\n}\n.dropdown-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 990;\n}\n.pull-right > .dropdown-menu {\n  right: 0;\n  left: auto;\n}\n.dropup .caret,\n.navbar-fixed-bottom .dropdown .caret {\n  content: \"\";\n  border-top: 0;\n  border-bottom: 4px dashed;\n  border-bottom: 4px solid \\9;\n}\n.dropup .dropdown-menu,\n.navbar-fixed-bottom .dropdown .dropdown-menu {\n  top: auto;\n  bottom: 100%;\n  margin-bottom: 2px;\n}\n@media (min-width: 768px) {\n  .navbar-right .dropdown-menu {\n    right: 0;\n    left: auto;\n  }\n  .navbar-right .dropdown-menu-left {\n    right: auto;\n    left: 0;\n  }\n}\n.btn-group,\n.btn-group-vertical {\n  position: relative;\n  display: inline-block;\n  vertical-align: middle;\n}\n.btn-group > .btn,\n.btn-group-vertical > .btn {\n  position: relative;\n  float: left;\n}\n.btn-group > .btn:hover,\n.btn-group-vertical > .btn:hover,\n.btn-group > .btn:focus,\n.btn-group-vertical > .btn:focus,\n.btn-group > .btn:active,\n.btn-group-vertical > .btn:active,\n.btn-group > .btn.active,\n.btn-group-vertical > .btn.active {\n  z-index: 2;\n}\n.btn-group .btn + .btn,\n.btn-group .btn + .btn-group,\n.btn-group .btn-group + .btn,\n.btn-group .btn-group + .btn-group {\n  margin-left: -1px;\n}\n.btn-toolbar {\n  margin-left: -5px;\n}\n.btn-toolbar .btn,\n.btn-toolbar .btn-group,\n.btn-toolbar .input-group {\n  float: left;\n}\n.btn-toolbar > .btn,\n.btn-toolbar > .btn-group,\n.btn-toolbar > .input-group {\n  margin-left: 5px;\n}\n.btn-group > .btn:not(:first-child):not(:last-child):not(.dropdown-toggle) {\n  border-radius: 0;\n}\n.btn-group > .btn:first-child {\n  margin-left: 0;\n}\n.btn-group > .btn:first-child:not(:last-child):not(.dropdown-toggle) {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn:last-child:not(:first-child),\n.btn-group > .dropdown-toggle:not(:first-child) {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group > .btn-group {\n  float: left;\n}\n.btn-group > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.btn-group > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group .dropdown-toggle:active,\n.btn-group.open .dropdown-toggle {\n  outline: 0;\n}\n.btn-group > .btn + .dropdown-toggle {\n  padding-right: 8px;\n  padding-left: 8px;\n}\n.btn-group > .btn-lg + .dropdown-toggle {\n  padding-right: 12px;\n  padding-left: 12px;\n}\n.btn-group.open .dropdown-toggle {\n  box-shadow: inset 0 3px 5px rgba(0, 0, 0, .125);\n}\n.btn-group.open .dropdown-toggle.btn-link {\n  box-shadow: none;\n}\n.btn .caret {\n  margin-left: 0;\n}\n.btn-lg .caret {\n  border-width: 5px 5px 0;\n  border-bottom-width: 0;\n}\n.dropup .btn-lg .caret {\n  border-width: 0 5px 5px;\n}\n.btn-group-vertical > .btn,\n.btn-group-vertical > .btn-group,\n.btn-group-vertical > .btn-group > .btn {\n  display: block;\n  float: none;\n  width: 100%;\n  max-width: 100%;\n}\n.btn-group-vertical > .btn-group > .btn {\n  float: none;\n}\n.btn-group-vertical > .btn + .btn,\n.btn-group-vertical > .btn + .btn-group,\n.btn-group-vertical > .btn-group + .btn,\n.btn-group-vertical > .btn-group + .btn-group {\n  margin-top: -1px;\n  margin-left: 0;\n}\n.btn-group-vertical > .btn:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn:first-child:not(:last-child) {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn:last-child:not(:first-child) {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.btn-group-vertical > .btn-group:not(:first-child):not(:last-child) > .btn {\n  border-radius: 0;\n}\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .btn:last-child,\n.btn-group-vertical > .btn-group:first-child:not(:last-child) > .dropdown-toggle {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.btn-group-vertical > .btn-group:last-child:not(:first-child) > .btn:first-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.btn-group-justified {\n  display: table;\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: separate;\n}\n.btn-group-justified > .btn,\n.btn-group-justified > .btn-group {\n  display: table-cell;\n  float: none;\n  width: 1%;\n}\n.btn-group-justified > .btn-group .btn {\n  width: 100%;\n}\n.btn-group-justified > .btn-group .dropdown-menu {\n  left: auto;\n}\n[data-toggle=\"buttons\"] > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"radio\"],\n[data-toggle=\"buttons\"] > .btn input[type=\"checkbox\"],\n[data-toggle=\"buttons\"] > .btn-group > .btn input[type=\"checkbox\"] {\n  position: absolute;\n  clip: rect(0, 0, 0, 0);\n  pointer-events: none;\n}\n.input-group {\n  position: relative;\n  display: table;\n  border-collapse: separate;\n}\n.input-group[class*=\"col-\"] {\n  float: none;\n  padding-right: 0;\n  padding-left: 0;\n}\n.input-group .form-control {\n  position: relative;\n  z-index: 2;\n  float: left;\n  width: 100%;\n  margin-bottom: 0;\n}\n.input-group .form-control:focus {\n  z-index: 3;\n}\n.input-group-lg > .form-control,\n.input-group-lg > .input-group-addon,\n.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n  border-radius: 6px;\n}\nselect.input-group-lg > .form-control,\nselect.input-group-lg > .input-group-addon,\nselect.input-group-lg > .input-group-btn > .btn {\n  height: 46px;\n  line-height: 46px;\n}\ntextarea.input-group-lg > .form-control,\ntextarea.input-group-lg > .input-group-addon,\ntextarea.input-group-lg > .input-group-btn > .btn,\nselect[multiple].input-group-lg > .form-control,\nselect[multiple].input-group-lg > .input-group-addon,\nselect[multiple].input-group-lg > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-sm > .form-control,\n.input-group-sm > .input-group-addon,\n.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n  border-radius: 3px;\n}\nselect.input-group-sm > .form-control,\nselect.input-group-sm > .input-group-addon,\nselect.input-group-sm > .input-group-btn > .btn {\n  height: 30px;\n  line-height: 30px;\n}\ntextarea.input-group-sm > .form-control,\ntextarea.input-group-sm > .input-group-addon,\ntextarea.input-group-sm > .input-group-btn > .btn,\nselect[multiple].input-group-sm > .form-control,\nselect[multiple].input-group-sm > .input-group-addon,\nselect[multiple].input-group-sm > .input-group-btn > .btn {\n  height: auto;\n}\n.input-group-addon,\n.input-group-btn,\n.input-group .form-control {\n  display: table-cell;\n}\n.input-group-addon:not(:first-child):not(:last-child),\n.input-group-btn:not(:first-child):not(:last-child),\n.input-group .form-control:not(:first-child):not(:last-child) {\n  border-radius: 0;\n}\n.input-group-addon,\n.input-group-btn {\n  width: 1%;\n  white-space: nowrap;\n  vertical-align: middle;\n}\n.input-group-addon {\n  padding: 6px 12px;\n  font-size: 14px;\n  font-weight: normal;\n  line-height: 1;\n  color: #555;\n  text-align: center;\n  background-color: #eee;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n.input-group-addon.input-sm {\n  padding: 5px 10px;\n  font-size: 12px;\n  border-radius: 3px;\n}\n.input-group-addon.input-lg {\n  padding: 10px 16px;\n  font-size: 18px;\n  border-radius: 6px;\n}\n.input-group-addon input[type=\"radio\"],\n.input-group-addon input[type=\"checkbox\"] {\n  margin-top: 0;\n}\n.input-group .form-control:first-child,\n.input-group-addon:first-child,\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group > .btn,\n.input-group-btn:first-child > .dropdown-toggle,\n.input-group-btn:last-child > .btn:not(:last-child):not(.dropdown-toggle),\n.input-group-btn:last-child > .btn-group:not(:last-child) > .btn {\n  border-top-right-radius: 0;\n  border-bottom-right-radius: 0;\n}\n.input-group-addon:first-child {\n  border-right: 0;\n}\n.input-group .form-control:last-child,\n.input-group-addon:last-child,\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group > .btn,\n.input-group-btn:last-child > .dropdown-toggle,\n.input-group-btn:first-child > .btn:not(:first-child),\n.input-group-btn:first-child > .btn-group:not(:first-child) > .btn {\n  border-top-left-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.input-group-addon:last-child {\n  border-left: 0;\n}\n.input-group-btn {\n  position: relative;\n  font-size: 0;\n  white-space: nowrap;\n}\n.input-group-btn > .btn {\n  position: relative;\n}\n.input-group-btn > .btn + .btn {\n  margin-left: -1px;\n}\n.input-group-btn > .btn:hover,\n.input-group-btn > .btn:focus,\n.input-group-btn > .btn:active {\n  z-index: 2;\n}\n.input-group-btn:first-child > .btn,\n.input-group-btn:first-child > .btn-group {\n  margin-right: -1px;\n}\n.input-group-btn:last-child > .btn,\n.input-group-btn:last-child > .btn-group {\n  z-index: 2;\n  margin-left: -1px;\n}\n.nav {\n  padding-left: 0;\n  margin-bottom: 0;\n  list-style: none;\n}\n.nav > li {\n  position: relative;\n  display: block;\n}\n.nav > li > a {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n}\n.nav > li > a:hover,\n.nav > li > a:focus {\n  text-decoration: none;\n  background-color: #eee;\n}\n.nav > li.disabled > a {\n  color: #777;\n}\n.nav > li.disabled > a:hover,\n.nav > li.disabled > a:focus {\n  color: #777;\n  text-decoration: none;\n  cursor: not-allowed;\n  background-color: transparent;\n}\n.nav .open > a,\n.nav .open > a:hover,\n.nav .open > a:focus {\n  background-color: #eee;\n  border-color: #337ab7;\n}\n.nav .nav-divider {\n  height: 1px;\n  margin: 9px 0;\n  overflow: hidden;\n  background-color: #e5e5e5;\n}\n.nav > li > a > img {\n  max-width: none;\n}\n.nav-tabs {\n  border-bottom: 1px solid #ddd;\n}\n.nav-tabs > li {\n  float: left;\n  margin-bottom: -1px;\n}\n.nav-tabs > li > a {\n  margin-right: 2px;\n  line-height: 1.42857143;\n  border: 1px solid transparent;\n  border-radius: 4px 4px 0 0;\n}\n.nav-tabs > li > a:hover {\n  border-color: #eee #eee #ddd;\n}\n.nav-tabs > li.active > a,\n.nav-tabs > li.active > a:hover,\n.nav-tabs > li.active > a:focus {\n  color: #555;\n  cursor: default;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-bottom-color: transparent;\n}\n.nav-tabs.nav-justified {\n  width: 100%;\n  border-bottom: 0;\n}\n.nav-tabs.nav-justified > li {\n  float: none;\n}\n.nav-tabs.nav-justified > li > a {\n  margin-bottom: 5px;\n  text-align: center;\n}\n.nav-tabs.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-tabs.nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs.nav-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n.nav-tabs.nav-justified > .active > a,\n.nav-tabs.nav-justified > .active > a:hover,\n.nav-tabs.nav-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs.nav-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs.nav-justified > .active > a,\n  .nav-tabs.nav-justified > .active > a:hover,\n  .nav-tabs.nav-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n.nav-pills > li {\n  float: left;\n}\n.nav-pills > li > a {\n  border-radius: 4px;\n}\n.nav-pills > li + li {\n  margin-left: 2px;\n}\n.nav-pills > li.active > a,\n.nav-pills > li.active > a:hover,\n.nav-pills > li.active > a:focus {\n  color: #fff;\n  background-color: #337ab7;\n}\n.nav-stacked > li {\n  float: none;\n}\n.nav-stacked > li + li {\n  margin-top: 2px;\n  margin-left: 0;\n}\n.nav-justified {\n  width: 100%;\n}\n.nav-justified > li {\n  float: none;\n}\n.nav-justified > li > a {\n  margin-bottom: 5px;\n  text-align: center;\n}\n.nav-justified > .dropdown .dropdown-menu {\n  top: auto;\n  left: auto;\n}\n@media (min-width: 768px) {\n  .nav-justified > li {\n    display: table-cell;\n    width: 1%;\n  }\n  .nav-justified > li > a {\n    margin-bottom: 0;\n  }\n}\n.nav-tabs-justified {\n  border-bottom: 0;\n}\n.nav-tabs-justified > li > a {\n  margin-right: 0;\n  border-radius: 4px;\n}\n.nav-tabs-justified > .active > a,\n.nav-tabs-justified > .active > a:hover,\n.nav-tabs-justified > .active > a:focus {\n  border: 1px solid #ddd;\n}\n@media (min-width: 768px) {\n  .nav-tabs-justified > li > a {\n    border-bottom: 1px solid #ddd;\n    border-radius: 4px 4px 0 0;\n  }\n  .nav-tabs-justified > .active > a,\n  .nav-tabs-justified > .active > a:hover,\n  .nav-tabs-justified > .active > a:focus {\n    border-bottom-color: #fff;\n  }\n}\n.tab-content > .tab-pane {\n  display: none;\n}\n.tab-content > .active {\n  display: block;\n}\n.nav-tabs .dropdown-menu {\n  margin-top: -1px;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.navbar {\n  position: relative;\n  min-height: 50px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n}\n@media (min-width: 768px) {\n  .navbar {\n    border-radius: 4px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-header {\n    float: left;\n  }\n}\n.navbar-collapse {\n  padding-right: 15px;\n  padding-left: 15px;\n  overflow-x: visible;\n  -webkit-overflow-scrolling: touch;\n  border-top: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1);\n}\n.navbar-collapse.in {\n  overflow-y: auto;\n}\n@media (min-width: 768px) {\n  .navbar-collapse {\n    width: auto;\n    border-top: 0;\n    box-shadow: none;\n  }\n  .navbar-collapse.collapse {\n    display: block !important;\n    height: auto !important;\n    padding-bottom: 0;\n    overflow: visible !important;\n  }\n  .navbar-collapse.in {\n    overflow-y: visible;\n  }\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-static-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n.navbar-fixed-top .navbar-collapse,\n.navbar-fixed-bottom .navbar-collapse {\n  max-height: 340px;\n}\n@media (max-device-width: 480px) and (orientation: landscape) {\n  .navbar-fixed-top .navbar-collapse,\n  .navbar-fixed-bottom .navbar-collapse {\n    max-height: 200px;\n  }\n}\n.container > .navbar-header,\n.container-fluid > .navbar-header,\n.container > .navbar-collapse,\n.container-fluid > .navbar-collapse {\n  margin-right: -15px;\n  margin-left: -15px;\n}\n@media (min-width: 768px) {\n  .container > .navbar-header,\n  .container-fluid > .navbar-header,\n  .container > .navbar-collapse,\n  .container-fluid > .navbar-collapse {\n    margin-right: 0;\n    margin-left: 0;\n  }\n}\n.navbar-static-top {\n  z-index: 1000;\n  border-width: 0 0 1px;\n}\n@media (min-width: 768px) {\n  .navbar-static-top {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top,\n.navbar-fixed-bottom {\n  position: fixed;\n  right: 0;\n  left: 0;\n  z-index: 1030;\n}\n@media (min-width: 768px) {\n  .navbar-fixed-top,\n  .navbar-fixed-bottom {\n    border-radius: 0;\n  }\n}\n.navbar-fixed-top {\n  top: 0;\n  border-width: 0 0 1px;\n}\n.navbar-fixed-bottom {\n  bottom: 0;\n  margin-bottom: 0;\n  border-width: 1px 0 0;\n}\n.navbar-brand {\n  float: left;\n  height: 50px;\n  padding: 15px 15px;\n  font-size: 18px;\n  line-height: 20px;\n}\n.navbar-brand:hover,\n.navbar-brand:focus {\n  text-decoration: none;\n}\n.navbar-brand > img {\n  display: block;\n}\n@media (min-width: 768px) {\n  .navbar > .container .navbar-brand,\n  .navbar > .container-fluid .navbar-brand {\n    margin-left: -15px;\n  }\n}\n.navbar-toggle {\n  position: relative;\n  float: right;\n  padding: 9px 10px;\n  margin-top: 8px;\n  margin-right: 15px;\n  margin-bottom: 8px;\n  background-color: transparent;\n  background-image: none;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.navbar-toggle:focus {\n  outline: 0;\n}\n.navbar-toggle .icon-bar {\n  display: block;\n  width: 22px;\n  height: 2px;\n  border-radius: 1px;\n}\n.navbar-toggle .icon-bar + .icon-bar {\n  margin-top: 4px;\n}\n@media (min-width: 768px) {\n  .navbar-toggle {\n    display: none;\n  }\n}\n.navbar-nav {\n  margin: 7.5px -15px;\n}\n.navbar-nav > li > a {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  line-height: 20px;\n}\n@media (max-width: 767px) {\n  .navbar-nav .open .dropdown-menu {\n    position: static;\n    float: none;\n    width: auto;\n    margin-top: 0;\n    background-color: transparent;\n    border: 0;\n    box-shadow: none;\n  }\n  .navbar-nav .open .dropdown-menu > li > a,\n  .navbar-nav .open .dropdown-menu .dropdown-header {\n    padding: 5px 15px 5px 25px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a {\n    line-height: 20px;\n  }\n  .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-nav .open .dropdown-menu > li > a:focus {\n    background-image: none;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-nav {\n    float: left;\n    margin: 0;\n  }\n  .navbar-nav > li {\n    float: left;\n  }\n  .navbar-nav > li > a {\n    padding-top: 15px;\n    padding-bottom: 15px;\n  }\n}\n.navbar-form {\n  padding: 10px 15px;\n  margin-top: 8px;\n  margin-right: -15px;\n  margin-bottom: 8px;\n  margin-left: -15px;\n  border-top: 1px solid transparent;\n  border-bottom: 1px solid transparent;\n  box-shadow: inset 0 1px 0 rgba(255, 255, 255, .1), 0 1px 0 rgba(255, 255, 255, .1);\n}\n@media (min-width: 768px) {\n  .navbar-form .form-group {\n    display: inline-block;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control {\n    display: inline-block;\n    width: auto;\n    vertical-align: middle;\n  }\n  .navbar-form .form-control-static {\n    display: inline-block;\n  }\n  .navbar-form .input-group {\n    display: inline-table;\n    vertical-align: middle;\n  }\n  .navbar-form .input-group .input-group-addon,\n  .navbar-form .input-group .input-group-btn,\n  .navbar-form .input-group .form-control {\n    width: auto;\n  }\n  .navbar-form .input-group > .form-control {\n    width: 100%;\n  }\n  .navbar-form .control-label {\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio,\n  .navbar-form .checkbox {\n    display: inline-block;\n    margin-top: 0;\n    margin-bottom: 0;\n    vertical-align: middle;\n  }\n  .navbar-form .radio label,\n  .navbar-form .checkbox label {\n    padding-left: 0;\n  }\n  .navbar-form .radio input[type=\"radio\"],\n  .navbar-form .checkbox input[type=\"checkbox\"] {\n    position: relative;\n    margin-left: 0;\n  }\n  .navbar-form .has-feedback .form-control-feedback {\n    top: 0;\n  }\n}\n@media (max-width: 767px) {\n  .navbar-form .form-group {\n    margin-bottom: 5px;\n  }\n  .navbar-form .form-group:last-child {\n    margin-bottom: 0;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-form {\n    width: auto;\n    padding-top: 0;\n    padding-bottom: 0;\n    margin-right: 0;\n    margin-left: 0;\n    border: 0;\n    box-shadow: none;\n  }\n}\n.navbar-nav > li > .dropdown-menu {\n  margin-top: 0;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.navbar-fixed-bottom .navbar-nav > li > .dropdown-menu {\n  margin-bottom: 0;\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n.navbar-btn {\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n.navbar-btn.btn-sm {\n  margin-top: 10px;\n  margin-bottom: 10px;\n}\n.navbar-btn.btn-xs {\n  margin-top: 14px;\n  margin-bottom: 14px;\n}\n.navbar-text {\n  margin-top: 15px;\n  margin-bottom: 15px;\n}\n@media (min-width: 768px) {\n  .navbar-text {\n    float: left;\n    margin-right: 15px;\n    margin-left: 15px;\n  }\n}\n@media (min-width: 768px) {\n  .navbar-left {\n    float: left !important;\n  }\n  .navbar-right {\n    float: right !important;\n    margin-right: -15px;\n  }\n  .navbar-right ~ .navbar-right {\n    margin-right: 0;\n  }\n}\n.navbar-default {\n  background-color: #f8f8f8;\n  border-color: #e7e7e7;\n}\n.navbar-default .navbar-brand {\n  color: #777;\n}\n.navbar-default .navbar-brand:hover,\n.navbar-default .navbar-brand:focus {\n  color: #5e5e5e;\n  background-color: transparent;\n}\n.navbar-default .navbar-text {\n  color: #777;\n}\n.navbar-default .navbar-nav > li > a {\n  color: #777;\n}\n.navbar-default .navbar-nav > li > a:hover,\n.navbar-default .navbar-nav > li > a:focus {\n  color: #333;\n  background-color: transparent;\n}\n.navbar-default .navbar-nav > .active > a,\n.navbar-default .navbar-nav > .active > a:hover,\n.navbar-default .navbar-nav > .active > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .disabled > a,\n.navbar-default .navbar-nav > .disabled > a:hover,\n.navbar-default .navbar-nav > .disabled > a:focus {\n  color: #ccc;\n  background-color: transparent;\n}\n.navbar-default .navbar-toggle {\n  border-color: #ddd;\n}\n.navbar-default .navbar-toggle:hover,\n.navbar-default .navbar-toggle:focus {\n  background-color: #ddd;\n}\n.navbar-default .navbar-toggle .icon-bar {\n  background-color: #888;\n}\n.navbar-default .navbar-collapse,\n.navbar-default .navbar-form {\n  border-color: #e7e7e7;\n}\n.navbar-default .navbar-nav > .open > a,\n.navbar-default .navbar-nav > .open > a:hover,\n.navbar-default .navbar-nav > .open > a:focus {\n  color: #555;\n  background-color: #e7e7e7;\n}\n@media (max-width: 767px) {\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a {\n    color: #777;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #333;\n    background-color: transparent;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #555;\n    background-color: #e7e7e7;\n  }\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-default .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #ccc;\n    background-color: transparent;\n  }\n}\n.navbar-default .navbar-link {\n  color: #777;\n}\n.navbar-default .navbar-link:hover {\n  color: #333;\n}\n.navbar-default .btn-link {\n  color: #777;\n}\n.navbar-default .btn-link:hover,\n.navbar-default .btn-link:focus {\n  color: #333;\n}\n.navbar-default .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-default .btn-link:hover,\n.navbar-default .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-default .btn-link:focus {\n  color: #ccc;\n}\n.navbar-inverse {\n  background-color: #222;\n  border-color: #080808;\n}\n.navbar-inverse .navbar-brand {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-brand:hover,\n.navbar-inverse .navbar-brand:focus {\n  color: #fff;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-text {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li > a {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-nav > li > a:hover,\n.navbar-inverse .navbar-nav > li > a:focus {\n  color: #fff;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-nav > .active > a,\n.navbar-inverse .navbar-nav > .active > a:hover,\n.navbar-inverse .navbar-nav > .active > a:focus {\n  color: #fff;\n  background-color: #080808;\n}\n.navbar-inverse .navbar-nav > .disabled > a,\n.navbar-inverse .navbar-nav > .disabled > a:hover,\n.navbar-inverse .navbar-nav > .disabled > a:focus {\n  color: #444;\n  background-color: transparent;\n}\n.navbar-inverse .navbar-toggle {\n  border-color: #333;\n}\n.navbar-inverse .navbar-toggle:hover,\n.navbar-inverse .navbar-toggle:focus {\n  background-color: #333;\n}\n.navbar-inverse .navbar-toggle .icon-bar {\n  background-color: #fff;\n}\n.navbar-inverse .navbar-collapse,\n.navbar-inverse .navbar-form {\n  border-color: #101010;\n}\n.navbar-inverse .navbar-nav > .open > a,\n.navbar-inverse .navbar-nav > .open > a:hover,\n.navbar-inverse .navbar-nav > .open > a:focus {\n  color: #fff;\n  background-color: #080808;\n}\n@media (max-width: 767px) {\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .dropdown-header {\n    border-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu .divider {\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a {\n    color: #9d9d9d;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > li > a:focus {\n    color: #fff;\n    background-color: transparent;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .active > a:focus {\n    color: #fff;\n    background-color: #080808;\n  }\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:hover,\n  .navbar-inverse .navbar-nav .open .dropdown-menu > .disabled > a:focus {\n    color: #444;\n    background-color: transparent;\n  }\n}\n.navbar-inverse .navbar-link {\n  color: #9d9d9d;\n}\n.navbar-inverse .navbar-link:hover {\n  color: #fff;\n}\n.navbar-inverse .btn-link {\n  color: #9d9d9d;\n}\n.navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link:focus {\n  color: #fff;\n}\n.navbar-inverse .btn-link[disabled]:hover,\nfieldset[disabled] .navbar-inverse .btn-link:hover,\n.navbar-inverse .btn-link[disabled]:focus,\nfieldset[disabled] .navbar-inverse .btn-link:focus {\n  color: #444;\n}\n.breadcrumb {\n  padding: 8px 15px;\n  margin-bottom: 20px;\n  list-style: none;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n}\n.breadcrumb > li {\n  display: inline-block;\n}\n.breadcrumb > li + li:before {\n  padding: 0 5px;\n  color: #ccc;\n  content: \"/\\A0\";\n}\n.breadcrumb > .active {\n  color: #777;\n}\n.pagination {\n  display: inline-block;\n  padding-left: 0;\n  margin: 20px 0;\n  border-radius: 4px;\n}\n.pagination > li {\n  display: inline;\n}\n.pagination > li > a,\n.pagination > li > span {\n  position: relative;\n  float: left;\n  padding: 6px 12px;\n  margin-left: -1px;\n  line-height: 1.42857143;\n  color: #337ab7;\n  text-decoration: none;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.pagination > li:first-child > a,\n.pagination > li:first-child > span {\n  margin-left: 0;\n  border-top-left-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\n.pagination > li:last-child > a,\n.pagination > li:last-child > span {\n  border-top-right-radius: 4px;\n  border-bottom-right-radius: 4px;\n}\n.pagination > li > a:hover,\n.pagination > li > span:hover,\n.pagination > li > a:focus,\n.pagination > li > span:focus {\n  z-index: 2;\n  color: #23527c;\n  background-color: #eee;\n  border-color: #ddd;\n}\n.pagination > .active > a,\n.pagination > .active > span,\n.pagination > .active > a:hover,\n.pagination > .active > span:hover,\n.pagination > .active > a:focus,\n.pagination > .active > span:focus {\n  z-index: 3;\n  color: #fff;\n  cursor: default;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.pagination > .disabled > span,\n.pagination > .disabled > span:hover,\n.pagination > .disabled > span:focus,\n.pagination > .disabled > a,\n.pagination > .disabled > a:hover,\n.pagination > .disabled > a:focus {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #fff;\n  border-color: #ddd;\n}\n.pagination-lg > li > a,\n.pagination-lg > li > span {\n  padding: 10px 16px;\n  font-size: 18px;\n  line-height: 1.3333333;\n}\n.pagination-lg > li:first-child > a,\n.pagination-lg > li:first-child > span {\n  border-top-left-radius: 6px;\n  border-bottom-left-radius: 6px;\n}\n.pagination-lg > li:last-child > a,\n.pagination-lg > li:last-child > span {\n  border-top-right-radius: 6px;\n  border-bottom-right-radius: 6px;\n}\n.pagination-sm > li > a,\n.pagination-sm > li > span {\n  padding: 5px 10px;\n  font-size: 12px;\n  line-height: 1.5;\n}\n.pagination-sm > li:first-child > a,\n.pagination-sm > li:first-child > span {\n  border-top-left-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.pagination-sm > li:last-child > a,\n.pagination-sm > li:last-child > span {\n  border-top-right-radius: 3px;\n  border-bottom-right-radius: 3px;\n}\n.pager {\n  padding-left: 0;\n  margin: 20px 0;\n  text-align: center;\n  list-style: none;\n}\n.pager li {\n  display: inline;\n}\n.pager li > a,\n.pager li > span {\n  display: inline-block;\n  padding: 5px 14px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 15px;\n}\n.pager li > a:hover,\n.pager li > a:focus {\n  text-decoration: none;\n  background-color: #eee;\n}\n.pager .next > a,\n.pager .next > span {\n  float: right;\n}\n.pager .previous > a,\n.pager .previous > span {\n  float: left;\n}\n.pager .disabled > a,\n.pager .disabled > a:hover,\n.pager .disabled > a:focus,\n.pager .disabled > span {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #fff;\n}\n.label {\n  display: inline;\n  padding: .2em .6em .3em;\n  font-size: 75%;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: baseline;\n  border-radius: .25em;\n}\na.label:hover,\na.label:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.label:empty {\n  display: none;\n}\n.btn .label {\n  position: relative;\n  top: -1px;\n}\n.label-default {\n  background-color: #777;\n}\n.label-default[href]:hover,\n.label-default[href]:focus {\n  background-color: #5e5e5e;\n}\n.label-primary {\n  background-color: #337ab7;\n}\n.label-primary[href]:hover,\n.label-primary[href]:focus {\n  background-color: #286090;\n}\n.label-success {\n  background-color: #5cb85c;\n}\n.label-success[href]:hover,\n.label-success[href]:focus {\n  background-color: #449d44;\n}\n.label-info {\n  background-color: #5bc0de;\n}\n.label-info[href]:hover,\n.label-info[href]:focus {\n  background-color: #31b0d5;\n}\n.label-warning {\n  background-color: #f0ad4e;\n}\n.label-warning[href]:hover,\n.label-warning[href]:focus {\n  background-color: #ec971f;\n}\n.label-danger {\n  background-color: #d9534f;\n}\n.label-danger[href]:hover,\n.label-danger[href]:focus {\n  background-color: #c9302c;\n}\n.badge {\n  display: inline-block;\n  min-width: 10px;\n  padding: 3px 7px;\n  font-size: 12px;\n  font-weight: bold;\n  line-height: 1;\n  color: #fff;\n  text-align: center;\n  white-space: nowrap;\n  vertical-align: middle;\n  background-color: #777;\n  border-radius: 10px;\n}\n.badge:empty {\n  display: none;\n}\n.btn .badge {\n  position: relative;\n  top: -1px;\n}\n.btn-xs .badge,\n.btn-group-xs > .btn .badge {\n  top: 0;\n  padding: 1px 5px;\n}\na.badge:hover,\na.badge:focus {\n  color: #fff;\n  text-decoration: none;\n  cursor: pointer;\n}\n.list-group-item.active > .badge,\n.nav-pills > .active > a > .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.list-group-item > .badge {\n  float: right;\n}\n.list-group-item > .badge + .badge {\n  margin-right: 5px;\n}\n.nav-pills > li > a > .badge {\n  margin-left: 3px;\n}\n.jumbotron {\n  padding-top: 30px;\n  padding-bottom: 30px;\n  margin-bottom: 30px;\n  color: inherit;\n  background-color: #eee;\n}\n.jumbotron h1,\n.jumbotron .h1 {\n  color: inherit;\n}\n.jumbotron p {\n  margin-bottom: 15px;\n  font-size: 21px;\n  font-weight: 200;\n}\n.jumbotron > hr {\n  border-top-color: #d5d5d5;\n}\n.container .jumbotron,\n.container-fluid .jumbotron {\n  padding-right: 15px;\n  padding-left: 15px;\n  border-radius: 6px;\n}\n.jumbotron .container {\n  max-width: 100%;\n}\n@media screen and (min-width: 768px) {\n  .jumbotron {\n    padding-top: 48px;\n    padding-bottom: 48px;\n  }\n  .container .jumbotron,\n  .container-fluid .jumbotron {\n    padding-right: 60px;\n    padding-left: 60px;\n  }\n  .jumbotron h1,\n  .jumbotron .h1 {\n    font-size: 63px;\n  }\n}\n.thumbnail {\n  display: block;\n  padding: 4px;\n  margin-bottom: 20px;\n  line-height: 1.42857143;\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  transition: border .2s ease-in-out;\n}\n.thumbnail > img,\n.thumbnail a > img {\n  margin-right: auto;\n  margin-left: auto;\n}\na.thumbnail:hover,\na.thumbnail:focus,\na.thumbnail.active {\n  border-color: #337ab7;\n}\n.thumbnail .caption {\n  padding: 9px;\n  color: #333;\n}\n.alert {\n  padding: 15px;\n  margin-bottom: 20px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n}\n.alert h4 {\n  margin-top: 0;\n  color: inherit;\n}\n.alert .alert-link {\n  font-weight: bold;\n}\n.alert > p,\n.alert > ul {\n  margin-bottom: 0;\n}\n.alert > p + p {\n  margin-top: 5px;\n}\n.alert-dismissable,\n.alert-dismissible {\n  padding-right: 35px;\n}\n.alert-dismissable .close,\n.alert-dismissible .close {\n  position: relative;\n  top: -2px;\n  right: -21px;\n  color: inherit;\n}\n.alert-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.alert-success hr {\n  border-top-color: #c9e2b3;\n}\n.alert-success .alert-link {\n  color: #2b542c;\n}\n.alert-info {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.alert-info hr {\n  border-top-color: #a6e1ec;\n}\n.alert-info .alert-link {\n  color: #245269;\n}\n.alert-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.alert-warning hr {\n  border-top-color: #f7e1b5;\n}\n.alert-warning .alert-link {\n  color: #66512c;\n}\n.alert-danger {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.alert-danger hr {\n  border-top-color: #e4b9c0;\n}\n.alert-danger .alert-link {\n  color: #843534;\n}\n@-webkit-keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n@keyframes progress-bar-stripes {\n  from {\n    background-position: 40px 0;\n  }\n  to {\n    background-position: 0 0;\n  }\n}\n.progress {\n  height: 20px;\n  margin-bottom: 20px;\n  overflow: hidden;\n  background-color: #f5f5f5;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 2px rgba(0, 0, 0, .1);\n}\n.progress-bar {\n  float: left;\n  width: 0;\n  height: 100%;\n  font-size: 12px;\n  line-height: 20px;\n  color: #fff;\n  text-align: center;\n  background-color: #337ab7;\n  box-shadow: inset 0 -1px 0 rgba(0, 0, 0, .15);\n  transition: width .6s ease;\n}\n.progress-striped .progress-bar,\n.progress-bar-striped {\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n  background-size: 40px 40px;\n}\n.progress.active .progress-bar,\n.progress-bar.active {\n  -webkit-animation: progress-bar-stripes 2s linear infinite;\n          animation: progress-bar-stripes 2s linear infinite;\n}\n.progress-bar-success {\n  background-color: #5cb85c;\n}\n.progress-striped .progress-bar-success {\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-info {\n  background-color: #5bc0de;\n}\n.progress-striped .progress-bar-info {\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-warning {\n  background-color: #f0ad4e;\n}\n.progress-striped .progress-bar-warning {\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.progress-bar-danger {\n  background-color: #d9534f;\n}\n.progress-striped .progress-bar-danger {\n  background-image:         linear-gradient(45deg, rgba(255, 255, 255, .15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, .15) 50%, rgba(255, 255, 255, .15) 75%, transparent 75%, transparent);\n}\n.media {\n  margin-top: 15px;\n}\n.media:first-child {\n  margin-top: 0;\n}\n.media,\n.media-body {\n  overflow: hidden;\n  zoom: 1;\n}\n.media-body {\n  width: 10000px;\n}\n.media-object {\n  display: block;\n}\n.media-object.img-thumbnail {\n  max-width: none;\n}\n.media-right,\n.media > .pull-right {\n  padding-left: 10px;\n}\n.media-left,\n.media > .pull-left {\n  padding-right: 10px;\n}\n.media-left,\n.media-right,\n.media-body {\n  display: table-cell;\n  vertical-align: top;\n}\n.media-middle {\n  vertical-align: middle;\n}\n.media-bottom {\n  vertical-align: bottom;\n}\n.media-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.media-list {\n  padding-left: 0;\n  list-style: none;\n}\n.list-group {\n  padding-left: 0;\n  margin-bottom: 20px;\n}\n.list-group-item {\n  position: relative;\n  display: block;\n  padding: 10px 15px;\n  margin-bottom: -1px;\n  background-color: #fff;\n  border: 1px solid #ddd;\n}\n.list-group-item:first-child {\n  border-top-left-radius: 4px;\n  border-top-right-radius: 4px;\n}\n.list-group-item:last-child {\n  margin-bottom: 0;\n  border-bottom-right-radius: 4px;\n  border-bottom-left-radius: 4px;\n}\na.list-group-item,\nbutton.list-group-item {\n  color: #555;\n}\na.list-group-item .list-group-item-heading,\nbutton.list-group-item .list-group-item-heading {\n  color: #333;\n}\na.list-group-item:hover,\nbutton.list-group-item:hover,\na.list-group-item:focus,\nbutton.list-group-item:focus {\n  color: #555;\n  text-decoration: none;\n  background-color: #f5f5f5;\n}\nbutton.list-group-item {\n  width: 100%;\n  text-align: left;\n}\n.list-group-item.disabled,\n.list-group-item.disabled:hover,\n.list-group-item.disabled:focus {\n  color: #777;\n  cursor: not-allowed;\n  background-color: #eee;\n}\n.list-group-item.disabled .list-group-item-heading,\n.list-group-item.disabled:hover .list-group-item-heading,\n.list-group-item.disabled:focus .list-group-item-heading {\n  color: inherit;\n}\n.list-group-item.disabled .list-group-item-text,\n.list-group-item.disabled:hover .list-group-item-text,\n.list-group-item.disabled:focus .list-group-item-text {\n  color: #777;\n}\n.list-group-item.active,\n.list-group-item.active:hover,\n.list-group-item.active:focus {\n  z-index: 2;\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.list-group-item.active .list-group-item-heading,\n.list-group-item.active:hover .list-group-item-heading,\n.list-group-item.active:focus .list-group-item-heading,\n.list-group-item.active .list-group-item-heading > small,\n.list-group-item.active:hover .list-group-item-heading > small,\n.list-group-item.active:focus .list-group-item-heading > small,\n.list-group-item.active .list-group-item-heading > .small,\n.list-group-item.active:hover .list-group-item-heading > .small,\n.list-group-item.active:focus .list-group-item-heading > .small {\n  color: inherit;\n}\n.list-group-item.active .list-group-item-text,\n.list-group-item.active:hover .list-group-item-text,\n.list-group-item.active:focus .list-group-item-text {\n  color: #c7ddef;\n}\n.list-group-item-success {\n  color: #3c763d;\n  background-color: #dff0d8;\n}\na.list-group-item-success,\nbutton.list-group-item-success {\n  color: #3c763d;\n}\na.list-group-item-success .list-group-item-heading,\nbutton.list-group-item-success .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-success:hover,\nbutton.list-group-item-success:hover,\na.list-group-item-success:focus,\nbutton.list-group-item-success:focus {\n  color: #3c763d;\n  background-color: #d0e9c6;\n}\na.list-group-item-success.active,\nbutton.list-group-item-success.active,\na.list-group-item-success.active:hover,\nbutton.list-group-item-success.active:hover,\na.list-group-item-success.active:focus,\nbutton.list-group-item-success.active:focus {\n  color: #fff;\n  background-color: #3c763d;\n  border-color: #3c763d;\n}\n.list-group-item-info {\n  color: #31708f;\n  background-color: #d9edf7;\n}\na.list-group-item-info,\nbutton.list-group-item-info {\n  color: #31708f;\n}\na.list-group-item-info .list-group-item-heading,\nbutton.list-group-item-info .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-info:hover,\nbutton.list-group-item-info:hover,\na.list-group-item-info:focus,\nbutton.list-group-item-info:focus {\n  color: #31708f;\n  background-color: #c4e3f3;\n}\na.list-group-item-info.active,\nbutton.list-group-item-info.active,\na.list-group-item-info.active:hover,\nbutton.list-group-item-info.active:hover,\na.list-group-item-info.active:focus,\nbutton.list-group-item-info.active:focus {\n  color: #fff;\n  background-color: #31708f;\n  border-color: #31708f;\n}\n.list-group-item-warning {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n}\na.list-group-item-warning,\nbutton.list-group-item-warning {\n  color: #8a6d3b;\n}\na.list-group-item-warning .list-group-item-heading,\nbutton.list-group-item-warning .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-warning:hover,\nbutton.list-group-item-warning:hover,\na.list-group-item-warning:focus,\nbutton.list-group-item-warning:focus {\n  color: #8a6d3b;\n  background-color: #faf2cc;\n}\na.list-group-item-warning.active,\nbutton.list-group-item-warning.active,\na.list-group-item-warning.active:hover,\nbutton.list-group-item-warning.active:hover,\na.list-group-item-warning.active:focus,\nbutton.list-group-item-warning.active:focus {\n  color: #fff;\n  background-color: #8a6d3b;\n  border-color: #8a6d3b;\n}\n.list-group-item-danger {\n  color: #a94442;\n  background-color: #f2dede;\n}\na.list-group-item-danger,\nbutton.list-group-item-danger {\n  color: #a94442;\n}\na.list-group-item-danger .list-group-item-heading,\nbutton.list-group-item-danger .list-group-item-heading {\n  color: inherit;\n}\na.list-group-item-danger:hover,\nbutton.list-group-item-danger:hover,\na.list-group-item-danger:focus,\nbutton.list-group-item-danger:focus {\n  color: #a94442;\n  background-color: #ebcccc;\n}\na.list-group-item-danger.active,\nbutton.list-group-item-danger.active,\na.list-group-item-danger.active:hover,\nbutton.list-group-item-danger.active:hover,\na.list-group-item-danger.active:focus,\nbutton.list-group-item-danger.active:focus {\n  color: #fff;\n  background-color: #a94442;\n  border-color: #a94442;\n}\n.list-group-item-heading {\n  margin-top: 0;\n  margin-bottom: 5px;\n}\n.list-group-item-text {\n  margin-bottom: 0;\n  line-height: 1.3;\n}\n.panel {\n  margin-bottom: 20px;\n  background-color: #fff;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, .05);\n}\n.panel-body {\n  padding: 15px;\n}\n.panel-heading {\n  padding: 10px 15px;\n  border-bottom: 1px solid transparent;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel-heading > .dropdown .dropdown-toggle {\n  color: inherit;\n}\n.panel-title {\n  margin-top: 0;\n  margin-bottom: 0;\n  font-size: 16px;\n  color: inherit;\n}\n.panel-title > a,\n.panel-title > small,\n.panel-title > .small,\n.panel-title > small > a,\n.panel-title > .small > a {\n  color: inherit;\n}\n.panel-footer {\n  padding: 10px 15px;\n  background-color: #f5f5f5;\n  border-top: 1px solid #ddd;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .list-group,\n.panel > .panel-collapse > .list-group {\n  margin-bottom: 0;\n}\n.panel > .list-group .list-group-item,\n.panel > .panel-collapse > .list-group .list-group-item {\n  border-width: 1px 0;\n  border-radius: 0;\n}\n.panel > .list-group:first-child .list-group-item:first-child,\n.panel > .panel-collapse > .list-group:first-child .list-group-item:first-child {\n  border-top: 0;\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .list-group:last-child .list-group-item:last-child,\n.panel > .panel-collapse > .list-group:last-child .list-group-item:last-child {\n  border-bottom: 0;\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .panel-heading + .panel-collapse > .list-group .list-group-item:first-child {\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.panel-heading + .list-group .list-group-item:first-child {\n  border-top-width: 0;\n}\n.list-group + .panel-footer {\n  border-top-width: 0;\n}\n.panel > .table,\n.panel > .table-responsive > .table,\n.panel > .panel-collapse > .table {\n  margin-bottom: 0;\n}\n.panel > .table caption,\n.panel > .table-responsive > .table caption,\n.panel > .panel-collapse > .table caption {\n  padding-right: 15px;\n  padding-left: 15px;\n}\n.panel > .table:first-child,\n.panel > .table-responsive:first-child > .table:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child {\n  border-top-left-radius: 3px;\n  border-top-right-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:first-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:first-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:first-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:first-child {\n  border-top-left-radius: 3px;\n}\n.panel > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child td:last-child,\n.panel > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > thead:first-child > tr:first-child th:last-child,\n.panel > .table:first-child > tbody:first-child > tr:first-child th:last-child,\n.panel > .table-responsive:first-child > .table:first-child > tbody:first-child > tr:first-child th:last-child {\n  border-top-right-radius: 3px;\n}\n.panel > .table:last-child,\n.panel > .table-responsive:last-child > .table:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child {\n  border-bottom-right-radius: 3px;\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:first-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:first-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:first-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:first-child {\n  border-bottom-left-radius: 3px;\n}\n.panel > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child td:last-child,\n.panel > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tbody:last-child > tr:last-child th:last-child,\n.panel > .table:last-child > tfoot:last-child > tr:last-child th:last-child,\n.panel > .table-responsive:last-child > .table:last-child > tfoot:last-child > tr:last-child th:last-child {\n  border-bottom-right-radius: 3px;\n}\n.panel > .panel-body + .table,\n.panel > .panel-body + .table-responsive,\n.panel > .table + .panel-body,\n.panel > .table-responsive + .panel-body {\n  border-top: 1px solid #ddd;\n}\n.panel > .table > tbody:first-child > tr:first-child th,\n.panel > .table > tbody:first-child > tr:first-child td {\n  border-top: 0;\n}\n.panel > .table-bordered,\n.panel > .table-responsive > .table-bordered {\n  border: 0;\n}\n.panel > .table-bordered > thead > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:first-child,\n.panel > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:first-child,\n.panel > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:first-child,\n.panel > .table-bordered > thead > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:first-child,\n.panel > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:first-child,\n.panel > .table-bordered > tfoot > tr > td:first-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:first-child {\n  border-left: 0;\n}\n.panel > .table-bordered > thead > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > th:last-child,\n.panel > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > th:last-child,\n.panel > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > th:last-child,\n.panel > .table-bordered > thead > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > thead > tr > td:last-child,\n.panel > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tbody > tr > td:last-child,\n.panel > .table-bordered > tfoot > tr > td:last-child,\n.panel > .table-responsive > .table-bordered > tfoot > tr > td:last-child {\n  border-right: 0;\n}\n.panel > .table-bordered > thead > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > td,\n.panel > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > td,\n.panel > .table-bordered > thead > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > thead > tr:first-child > th,\n.panel > .table-bordered > tbody > tr:first-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:first-child > th {\n  border-bottom: 0;\n}\n.panel > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > td,\n.panel > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > td,\n.panel > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tbody > tr:last-child > th,\n.panel > .table-bordered > tfoot > tr:last-child > th,\n.panel > .table-responsive > .table-bordered > tfoot > tr:last-child > th {\n  border-bottom: 0;\n}\n.panel > .table-responsive {\n  margin-bottom: 0;\n  border: 0;\n}\n.panel-group {\n  margin-bottom: 20px;\n}\n.panel-group .panel {\n  margin-bottom: 0;\n  border-radius: 4px;\n}\n.panel-group .panel + .panel {\n  margin-top: 5px;\n}\n.panel-group .panel-heading {\n  border-bottom: 0;\n}\n.panel-group .panel-heading + .panel-collapse > .panel-body,\n.panel-group .panel-heading + .panel-collapse > .list-group {\n  border-top: 1px solid #ddd;\n}\n.panel-group .panel-footer {\n  border-top: 0;\n}\n.panel-group .panel-footer + .panel-collapse .panel-body {\n  border-bottom: 1px solid #ddd;\n}\n.panel-default {\n  border-color: #ddd;\n}\n.panel-default > .panel-heading {\n  color: #333;\n  background-color: #f5f5f5;\n  border-color: #ddd;\n}\n.panel-default > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ddd;\n}\n.panel-default > .panel-heading .badge {\n  color: #f5f5f5;\n  background-color: #333;\n}\n.panel-default > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ddd;\n}\n.panel-primary {\n  border-color: #337ab7;\n}\n.panel-primary > .panel-heading {\n  color: #fff;\n  background-color: #337ab7;\n  border-color: #337ab7;\n}\n.panel-primary > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #337ab7;\n}\n.panel-primary > .panel-heading .badge {\n  color: #337ab7;\n  background-color: #fff;\n}\n.panel-primary > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #337ab7;\n}\n.panel-success {\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading {\n  color: #3c763d;\n  background-color: #dff0d8;\n  border-color: #d6e9c6;\n}\n.panel-success > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #d6e9c6;\n}\n.panel-success > .panel-heading .badge {\n  color: #dff0d8;\n  background-color: #3c763d;\n}\n.panel-success > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #d6e9c6;\n}\n.panel-info {\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading {\n  color: #31708f;\n  background-color: #d9edf7;\n  border-color: #bce8f1;\n}\n.panel-info > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #bce8f1;\n}\n.panel-info > .panel-heading .badge {\n  color: #d9edf7;\n  background-color: #31708f;\n}\n.panel-info > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #bce8f1;\n}\n.panel-warning {\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading {\n  color: #8a6d3b;\n  background-color: #fcf8e3;\n  border-color: #faebcc;\n}\n.panel-warning > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #faebcc;\n}\n.panel-warning > .panel-heading .badge {\n  color: #fcf8e3;\n  background-color: #8a6d3b;\n}\n.panel-warning > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #faebcc;\n}\n.panel-danger {\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading {\n  color: #a94442;\n  background-color: #f2dede;\n  border-color: #ebccd1;\n}\n.panel-danger > .panel-heading + .panel-collapse > .panel-body {\n  border-top-color: #ebccd1;\n}\n.panel-danger > .panel-heading .badge {\n  color: #f2dede;\n  background-color: #a94442;\n}\n.panel-danger > .panel-footer + .panel-collapse > .panel-body {\n  border-bottom-color: #ebccd1;\n}\n.embed-responsive {\n  position: relative;\n  display: block;\n  height: 0;\n  padding: 0;\n  overflow: hidden;\n}\n.embed-responsive .embed-responsive-item,\n.embed-responsive iframe,\n.embed-responsive embed,\n.embed-responsive object,\n.embed-responsive video {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  border: 0;\n}\n.embed-responsive-16by9 {\n  padding-bottom: 56.25%;\n}\n.embed-responsive-4by3 {\n  padding-bottom: 75%;\n}\n.well {\n  min-height: 20px;\n  padding: 19px;\n  margin-bottom: 20px;\n  background-color: #f5f5f5;\n  border: 1px solid #e3e3e3;\n  border-radius: 4px;\n  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .05);\n}\n.well blockquote {\n  border-color: #ddd;\n  border-color: rgba(0, 0, 0, .15);\n}\n.well-lg {\n  padding: 24px;\n  border-radius: 6px;\n}\n.well-sm {\n  padding: 9px;\n  border-radius: 3px;\n}\n.close {\n  float: right;\n  font-size: 21px;\n  font-weight: bold;\n  line-height: 1;\n  color: #000;\n  text-shadow: 0 1px 0 #fff;\n  filter: alpha(opacity=20);\n  opacity: .2;\n}\n.close:hover,\n.close:focus {\n  color: #000;\n  text-decoration: none;\n  cursor: pointer;\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\nbutton.close {\n  -webkit-appearance: none;\n  padding: 0;\n  cursor: pointer;\n  background: transparent;\n  border: 0;\n}\n.modal-open {\n  overflow: hidden;\n}\n.modal {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1050;\n  display: none;\n  overflow: hidden;\n  -webkit-overflow-scrolling: touch;\n  outline: 0;\n}\n.modal.fade .modal-dialog {\n  transition: -webkit-transform .3s ease-out;\n  transition: transform .3s ease-out;\n  transition:         transform .3s ease-out, -webkit-transform .3s ease-out;\n  -webkit-transform: translate(0, -25%);\n          transform: translate(0, -25%);\n}\n.modal.in .modal-dialog {\n  -webkit-transform: translate(0, 0);\n          transform: translate(0, 0);\n}\n.modal-open .modal {\n  overflow-x: hidden;\n  overflow-y: auto;\n}\n.modal-dialog {\n  position: relative;\n  width: auto;\n  margin: 10px;\n}\n.modal-content {\n  position: relative;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #999;\n  border: 1px solid rgba(0, 0, 0, .2);\n  border-radius: 6px;\n  outline: 0;\n  box-shadow: 0 3px 9px rgba(0, 0, 0, .5);\n}\n.modal-backdrop {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 1040;\n  background-color: #000;\n}\n.modal-backdrop.fade {\n  filter: alpha(opacity=0);\n  opacity: 0;\n}\n.modal-backdrop.in {\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\n.modal-header {\n  padding: 15px;\n  border-bottom: 1px solid #e5e5e5;\n}\n.modal-header .close {\n  margin-top: -2px;\n}\n.modal-title {\n  margin: 0;\n  line-height: 1.42857143;\n}\n.modal-body {\n  position: relative;\n  padding: 15px;\n}\n.modal-footer {\n  padding: 15px;\n  text-align: right;\n  border-top: 1px solid #e5e5e5;\n}\n.modal-footer .btn + .btn {\n  margin-bottom: 0;\n  margin-left: 5px;\n}\n.modal-footer .btn-group .btn + .btn {\n  margin-left: -1px;\n}\n.modal-footer .btn-block + .btn-block {\n  margin-left: 0;\n}\n.modal-scrollbar-measure {\n  position: absolute;\n  top: -9999px;\n  width: 50px;\n  height: 50px;\n  overflow: scroll;\n}\n@media (min-width: 768px) {\n  .modal-dialog {\n    width: 600px;\n    margin: 30px auto;\n  }\n  .modal-content {\n    box-shadow: 0 5px 15px rgba(0, 0, 0, .5);\n  }\n  .modal-sm {\n    width: 300px;\n  }\n}\n@media (min-width: 992px) {\n  .modal-lg {\n    width: 900px;\n  }\n}\n.tooltip {\n  position: absolute;\n  z-index: 1070;\n  display: block;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 12px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  white-space: normal;\n  filter: alpha(opacity=0);\n  opacity: 0;\n\n  line-break: auto;\n}\n.tooltip.in {\n  filter: alpha(opacity=90);\n  opacity: .9;\n}\n.tooltip.top {\n  padding: 5px 0;\n  margin-top: -3px;\n}\n.tooltip.right {\n  padding: 0 5px;\n  margin-left: 3px;\n}\n.tooltip.bottom {\n  padding: 5px 0;\n  margin-top: 3px;\n}\n.tooltip.left {\n  padding: 0 5px;\n  margin-left: -3px;\n}\n.tooltip-inner {\n  max-width: 200px;\n  padding: 3px 8px;\n  color: #fff;\n  text-align: center;\n  background-color: #000;\n  border-radius: 4px;\n}\n.tooltip-arrow {\n  position: absolute;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.tooltip.top .tooltip-arrow {\n  bottom: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-left .tooltip-arrow {\n  right: 5px;\n  bottom: 0;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.top-right .tooltip-arrow {\n  bottom: 0;\n  left: 5px;\n  margin-bottom: -5px;\n  border-width: 5px 5px 0;\n  border-top-color: #000;\n}\n.tooltip.right .tooltip-arrow {\n  top: 50%;\n  left: 0;\n  margin-top: -5px;\n  border-width: 5px 5px 5px 0;\n  border-right-color: #000;\n}\n.tooltip.left .tooltip-arrow {\n  top: 50%;\n  right: 0;\n  margin-top: -5px;\n  border-width: 5px 0 5px 5px;\n  border-left-color: #000;\n}\n.tooltip.bottom .tooltip-arrow {\n  top: 0;\n  left: 50%;\n  margin-left: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-left .tooltip-arrow {\n  top: 0;\n  right: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.tooltip.bottom-right .tooltip-arrow {\n  top: 0;\n  left: 5px;\n  margin-top: -5px;\n  border-width: 0 5px 5px;\n  border-bottom-color: #000;\n}\n.popover {\n  position: absolute;\n  top: 0;\n  left: 0;\n  z-index: 1060;\n  display: none;\n  max-width: 276px;\n  padding: 1px;\n  font-family: \"Helvetica Neue\", Helvetica, Arial, sans-serif;\n  font-size: 14px;\n  font-style: normal;\n  font-weight: normal;\n  line-height: 1.42857143;\n  text-align: left;\n  text-align: start;\n  text-decoration: none;\n  text-shadow: none;\n  text-transform: none;\n  letter-spacing: normal;\n  word-break: normal;\n  word-spacing: normal;\n  word-wrap: normal;\n  white-space: normal;\n  background-color: #fff;\n  background-clip: padding-box;\n  border: 1px solid #ccc;\n  border: 1px solid rgba(0, 0, 0, .2);\n  border-radius: 6px;\n  box-shadow: 0 5px 10px rgba(0, 0, 0, .2);\n\n  line-break: auto;\n}\n.popover.top {\n  margin-top: -10px;\n}\n.popover.right {\n  margin-left: 10px;\n}\n.popover.bottom {\n  margin-top: 10px;\n}\n.popover.left {\n  margin-left: -10px;\n}\n.popover-title {\n  padding: 8px 14px;\n  margin: 0;\n  font-size: 14px;\n  background-color: #f7f7f7;\n  border-bottom: 1px solid #ebebeb;\n  border-radius: 5px 5px 0 0;\n}\n.popover-content {\n  padding: 9px 14px;\n}\n.popover > .arrow,\n.popover > .arrow:after {\n  position: absolute;\n  display: block;\n  width: 0;\n  height: 0;\n  border-color: transparent;\n  border-style: solid;\n}\n.popover > .arrow {\n  border-width: 11px;\n}\n.popover > .arrow:after {\n  content: \"\";\n  border-width: 10px;\n}\n.popover.top > .arrow {\n  bottom: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-color: #999;\n  border-top-color: rgba(0, 0, 0, .25);\n  border-bottom-width: 0;\n}\n.popover.top > .arrow:after {\n  bottom: 1px;\n  margin-left: -10px;\n  content: \" \";\n  border-top-color: #fff;\n  border-bottom-width: 0;\n}\n.popover.right > .arrow {\n  top: 50%;\n  left: -11px;\n  margin-top: -11px;\n  border-right-color: #999;\n  border-right-color: rgba(0, 0, 0, .25);\n  border-left-width: 0;\n}\n.popover.right > .arrow:after {\n  bottom: -10px;\n  left: 1px;\n  content: \" \";\n  border-right-color: #fff;\n  border-left-width: 0;\n}\n.popover.bottom > .arrow {\n  top: -11px;\n  left: 50%;\n  margin-left: -11px;\n  border-top-width: 0;\n  border-bottom-color: #999;\n  border-bottom-color: rgba(0, 0, 0, .25);\n}\n.popover.bottom > .arrow:after {\n  top: 1px;\n  margin-left: -10px;\n  content: \" \";\n  border-top-width: 0;\n  border-bottom-color: #fff;\n}\n.popover.left > .arrow {\n  top: 50%;\n  right: -11px;\n  margin-top: -11px;\n  border-right-width: 0;\n  border-left-color: #999;\n  border-left-color: rgba(0, 0, 0, .25);\n}\n.popover.left > .arrow:after {\n  right: 1px;\n  bottom: -10px;\n  content: \" \";\n  border-right-width: 0;\n  border-left-color: #fff;\n}\n.carousel {\n  position: relative;\n}\n.carousel-inner {\n  position: relative;\n  width: 100%;\n  overflow: hidden;\n}\n.carousel-inner > .item {\n  position: relative;\n  display: none;\n  transition: .6s ease-in-out left;\n}\n.carousel-inner > .item > img,\n.carousel-inner > .item > a > img {\n  line-height: 1;\n}\n@media all and (transform-3d), (-webkit-transform-3d) {\n  .carousel-inner > .item {\n    transition: -webkit-transform .6s ease-in-out;\n    transition: transform .6s ease-in-out;\n    transition:         transform .6s ease-in-out, -webkit-transform .6s ease-in-out;\n\n    -webkit-backface-visibility: hidden;\n            backface-visibility: hidden;\n    -webkit-perspective: 1000px;\n            perspective: 1000px;\n  }\n  .carousel-inner > .item.next,\n  .carousel-inner > .item.active.right {\n    left: 0;\n    -webkit-transform: translate3d(100%, 0, 0);\n            transform: translate3d(100%, 0, 0);\n  }\n  .carousel-inner > .item.prev,\n  .carousel-inner > .item.active.left {\n    left: 0;\n    -webkit-transform: translate3d(-100%, 0, 0);\n            transform: translate3d(-100%, 0, 0);\n  }\n  .carousel-inner > .item.next.left,\n  .carousel-inner > .item.prev.right,\n  .carousel-inner > .item.active {\n    left: 0;\n    -webkit-transform: translate3d(0, 0, 0);\n            transform: translate3d(0, 0, 0);\n  }\n}\n.carousel-inner > .active,\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  display: block;\n}\n.carousel-inner > .active {\n  left: 0;\n}\n.carousel-inner > .next,\n.carousel-inner > .prev {\n  position: absolute;\n  top: 0;\n  width: 100%;\n}\n.carousel-inner > .next {\n  left: 100%;\n}\n.carousel-inner > .prev {\n  left: -100%;\n}\n.carousel-inner > .next.left,\n.carousel-inner > .prev.right {\n  left: 0;\n}\n.carousel-inner > .active.left {\n  left: -100%;\n}\n.carousel-inner > .active.right {\n  left: 100%;\n}\n.carousel-control {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 0;\n  width: 15%;\n  font-size: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\n  background-color: rgba(0, 0, 0, 0);\n  filter: alpha(opacity=50);\n  opacity: .5;\n}\n.carousel-control.left {\n  background-image:         linear-gradient(to right, rgba(0, 0, 0, .5) 0%, rgba(0, 0, 0, .0001) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);\n  background-repeat: repeat-x;\n}\n.carousel-control.right {\n  right: 0;\n  left: auto;\n  background-image:         linear-gradient(to right, rgba(0, 0, 0, .0001) 0%, rgba(0, 0, 0, .5) 100%);\n  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);\n  background-repeat: repeat-x;\n}\n.carousel-control:hover,\n.carousel-control:focus {\n  color: #fff;\n  text-decoration: none;\n  filter: alpha(opacity=90);\n  outline: 0;\n  opacity: .9;\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-left,\n.carousel-control .glyphicon-chevron-right {\n  position: absolute;\n  top: 50%;\n  z-index: 5;\n  display: inline-block;\n  margin-top: -10px;\n}\n.carousel-control .icon-prev,\n.carousel-control .glyphicon-chevron-left {\n  left: 50%;\n  margin-left: -10px;\n}\n.carousel-control .icon-next,\n.carousel-control .glyphicon-chevron-right {\n  right: 50%;\n  margin-right: -10px;\n}\n.carousel-control .icon-prev,\n.carousel-control .icon-next {\n  width: 20px;\n  height: 20px;\n  font-family: serif;\n  line-height: 1;\n}\n.carousel-control .icon-prev:before {\n  content: '\\2039';\n}\n.carousel-control .icon-next:before {\n  content: '\\203A';\n}\n.carousel-indicators {\n  position: absolute;\n  bottom: 10px;\n  left: 50%;\n  z-index: 15;\n  width: 60%;\n  padding-left: 0;\n  margin-left: -30%;\n  text-align: center;\n  list-style: none;\n}\n.carousel-indicators li {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  margin: 1px;\n  text-indent: -999px;\n  cursor: pointer;\n  background-color: #000 \\9;\n  background-color: rgba(0, 0, 0, 0);\n  border: 1px solid #fff;\n  border-radius: 10px;\n}\n.carousel-indicators .active {\n  width: 12px;\n  height: 12px;\n  margin: 0;\n  background-color: #fff;\n}\n.carousel-caption {\n  position: absolute;\n  right: 15%;\n  bottom: 20px;\n  left: 15%;\n  z-index: 10;\n  padding-top: 20px;\n  padding-bottom: 20px;\n  color: #fff;\n  text-align: center;\n  text-shadow: 0 1px 2px rgba(0, 0, 0, .6);\n}\n.carousel-caption .btn {\n  text-shadow: none;\n}\n@media screen and (min-width: 768px) {\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-prev,\n  .carousel-control .icon-next {\n    width: 30px;\n    height: 30px;\n    margin-top: -10px;\n    font-size: 30px;\n  }\n  .carousel-control .glyphicon-chevron-left,\n  .carousel-control .icon-prev {\n    margin-left: -10px;\n  }\n  .carousel-control .glyphicon-chevron-right,\n  .carousel-control .icon-next {\n    margin-right: -10px;\n  }\n  .carousel-caption {\n    right: 20%;\n    left: 20%;\n    padding-bottom: 30px;\n  }\n  .carousel-indicators {\n    bottom: 20px;\n  }\n}\n.clearfix:before,\n.clearfix:after,\n.dl-horizontal dd:before,\n.dl-horizontal dd:after,\n.container:before,\n.container:after,\n.container-fluid:before,\n.container-fluid:after,\n.row:before,\n.row:after,\n.form-horizontal .form-group:before,\n.form-horizontal .form-group:after,\n.btn-toolbar:before,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:before,\n.btn-group-vertical > .btn-group:after,\n.nav:before,\n.nav:after,\n.navbar:before,\n.navbar:after,\n.navbar-header:before,\n.navbar-header:after,\n.navbar-collapse:before,\n.navbar-collapse:after,\n.pager:before,\n.pager:after,\n.panel-body:before,\n.panel-body:after,\n.modal-header:before,\n.modal-header:after,\n.modal-footer:before,\n.modal-footer:after {\n  display: table;\n  content: \" \";\n}\n.clearfix:after,\n.dl-horizontal dd:after,\n.container:after,\n.container-fluid:after,\n.row:after,\n.form-horizontal .form-group:after,\n.btn-toolbar:after,\n.btn-group-vertical > .btn-group:after,\n.nav:after,\n.navbar:after,\n.navbar-header:after,\n.navbar-collapse:after,\n.pager:after,\n.panel-body:after,\n.modal-header:after,\n.modal-footer:after {\n  clear: both;\n}\n.center-block {\n  display: block;\n  margin-right: auto;\n  margin-left: auto;\n}\n.pull-right {\n  float: right !important;\n}\n.pull-left {\n  float: left !important;\n}\n.hide {\n  display: none !important;\n}\n.show {\n  display: block !important;\n}\n.invisible {\n  visibility: hidden;\n}\n.text-hide {\n  font: 0/0 a;\n  color: transparent;\n  text-shadow: none;\n  background-color: transparent;\n  border: 0;\n}\n.hidden {\n  display: none !important;\n}\n.affix {\n  position: fixed;\n}\n@-ms-viewport {\n  width: device-width;\n}\n.visible-xs,\n.visible-sm,\n.visible-md,\n.visible-lg {\n  display: none !important;\n}\n.visible-xs-block,\n.visible-xs-inline,\n.visible-xs-inline-block,\n.visible-sm-block,\n.visible-sm-inline,\n.visible-sm-inline-block,\n.visible-md-block,\n.visible-md-inline,\n.visible-md-inline-block,\n.visible-lg-block,\n.visible-lg-inline,\n.visible-lg-inline-block {\n  display: none !important;\n}\n@media (max-width: 767px) {\n  .visible-xs {\n    display: block !important;\n  }\n  table.visible-xs {\n    display: table !important;\n  }\n  tr.visible-xs {\n    display: table-row !important;\n  }\n  th.visible-xs,\n  td.visible-xs {\n    display: table-cell !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-block {\n    display: block !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline {\n    display: inline !important;\n  }\n}\n@media (max-width: 767px) {\n  .visible-xs-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm {\n    display: block !important;\n  }\n  table.visible-sm {\n    display: table !important;\n  }\n  tr.visible-sm {\n    display: table-row !important;\n  }\n  th.visible-sm,\n  td.visible-sm {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-block {\n    display: block !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .visible-sm-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md {\n    display: block !important;\n  }\n  table.visible-md {\n    display: table !important;\n  }\n  tr.visible-md {\n    display: table-row !important;\n  }\n  th.visible-md,\n  td.visible-md {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-block {\n    display: block !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .visible-md-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg {\n    display: block !important;\n  }\n  table.visible-lg {\n    display: table !important;\n  }\n  tr.visible-lg {\n    display: table-row !important;\n  }\n  th.visible-lg,\n  td.visible-lg {\n    display: table-cell !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-block {\n    display: block !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline {\n    display: inline !important;\n  }\n}\n@media (min-width: 1200px) {\n  .visible-lg-inline-block {\n    display: inline-block !important;\n  }\n}\n@media (max-width: 767px) {\n  .hidden-xs {\n    display: none !important;\n  }\n}\n@media (min-width: 768px) and (max-width: 991px) {\n  .hidden-sm {\n    display: none !important;\n  }\n}\n@media (min-width: 992px) and (max-width: 1199px) {\n  .hidden-md {\n    display: none !important;\n  }\n}\n@media (min-width: 1200px) {\n  .hidden-lg {\n    display: none !important;\n  }\n}\n.visible-print {\n  display: none !important;\n}\n@media print {\n  .visible-print {\n    display: block !important;\n  }\n  table.visible-print {\n    display: table !important;\n  }\n  tr.visible-print {\n    display: table-row !important;\n  }\n  th.visible-print,\n  td.visible-print {\n    display: table-cell !important;\n  }\n}\n.visible-print-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-block {\n    display: block !important;\n  }\n}\n.visible-print-inline {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline {\n    display: inline !important;\n  }\n}\n.visible-print-inline-block {\n  display: none !important;\n}\n@media print {\n  .visible-print-inline-block {\n    display: inline-block !important;\n  }\n}\n@media print {\n  .hidden-print {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=bootstrap.css.map */\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

module.exports = "<MyNavbar></MyNavbar>\n<div class=\"jumbotron\" style=\"background-color:grey;\">\n        <div class=\"container uploadImg\">\n            <div class=\"col-md-12\">\n            \n                <div class=\"form-group form-utent\">\n                    <label for=\"Bio\">Artist Name</label>\n \t\t\t\t\t<input #nameArtist type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"\" required>\n                \t<div class=\"form-group form-utent\">\n                        <label for=\"Link\" id=\"artistcouny+try\">Country</label>\n                        <input #countryArtist type=\"text\" class=\"form-control\" name=\"country\" placeholder=\"\" required> \n                    </div>\n                    <div class=\"form-group form-utent\">\n                        <button (click)=\"createArtist($event,nameArtist.value,countryArtist.value)\" type=\"button\" style=\"color:black;\" name=\"sendData\">Create</button>\n                    </div>\n                    \n                        \n                       <div class=\"form-group form-utent\">\n                        <a [routerLink]=\"['/admin-home']\">\n                        <input type=\"button\" style=\"color:black;\" name=\"back\" value=\"Back\"/>\n                        </a>\n                        </div>\n                \n            </div>\n            </div>\n            </div>\n            </div>"

/***/ }),

/***/ 254:
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"artist\" class=\"jumbotron\" style=\"background-color:grey;\">\n        <div class=\"container uploadImg\">\n            <div class=\"col-md-6\">\n            \n                <div class=\"form-group form-utent\">\n                \t<div class=\"form-group form-utent\">\n                        <label for=\"Bio\">Song Title</label>\n \t\t\t\t\t    <input #title type=\"text\" class=\"form-control\" name=\"title\" placeholder=\"\" required>\n                        <label for=\"Link\" id=\"artistcouny+try\">Link Youtube</label>\n                        <input #link type=\"text\" class=\"form-control\" name=\"link_youtube\" placeholder=\"\" required> \n                    </div>\n                    <div class=\"form-group form-utent\">\n                        <button type=\"button\" (click)=\"createSong($event,title.value,link.value)\" style=\"color:black;\" name=\"sendData\">Create</button>\n                    </div>\n                 <div class=\"form-group form-utent\">\n                        <button type=\"button\" (click)=\"goToAdminHome()\" style=\"color:black;\" name=\"back\">Back</button>\n                        </div>\n                \n            </div>\n            </div>\n            </div>\n"

/***/ }),

/***/ 255:
/***/ (function(module, exports) {

module.exports = "<MyNavbar></MyNavbar>\n<div *ngIf=\"artist\" class=\"jumbotron\" style=\"background-color:grey;\">\n        <div class=\"container uploadImg\">\n            <div class=\"col-md-12\">\n            \n                <div class=\"well\">\n                    <h4>Artists</h4>\n                    <div class=\"row\">\n                    <button type=\"button\" (click)=\"goToCreateSong(artist.id_artist)\" style=\"color:black;margin-bottom:5px\" name=\"sendData\">Create Song</button>\n                    <div class=\"form-group\" style=\"color:black\">\n                        <label>Tags:</label>\n                        <a *ngFor=\"let tag of artist.tagsOfArtist\" class=\"tag\">{{tag.name}}</a>\n                        <input type=\"text\" #tagToRemove class=\"form-control\" name=\"tagToRemove\" placeholder=\"Tag to Remove\" style=\"margin-bottom: 1em;\" >\n                         <input type=\"text\" #tagToAdd class=\"form-control\" name=\"tagToAdd\" placeholder=\"Tag to Add\" >\n                    </div>\n                        <button type=\"button\" (click)=\"editTag($event,tagToRemove.value,tagToAdd.value)\" style=\"color:black;\" name=\"sendData\">Save Changes</button>\n                    </div>\n                    <!-- /.row -->\n                </div>\n                \n                \n\n            </div>\n            <div class=\"form-group form-utent\">\n                    <label for=\"Bio\">Artist Name</label>\n \t\t\t\t\t<input #nameArtist type=\"text\" class=\"form-control\" name=\"name\" placeholder=\"{{artist.name}}\" required>\n                \t<div class=\"form-group form-utent\">\n                        <label for=\"Link\" id=\"artistcouny+try\">Country</label>\n                        <input #countryArtist type=\"text\" class=\"form-control\" name=\"country\" placeholder=\"{{artist.country}}\" required> \n                    </div>\n                    <div class=\"form-group form-utent\">\n                        <button (click)=\"editArtist($event,nameArtist.value,countryArtist.value)\" type=\"button\" style=\"color:black;\" name=\"sendData\">Save Changes</button>\n                    </div>\n                    \n                        \n                       <div class=\"form-group form-utent\">\n                        <a [routerLink]=\"['/admin-home']\">\n                        <input type=\"button\" style=\"color:black;\" name=\"back\" value=\"Back\"/>\n                        </a>\n                        </div>\n                \n            </div>\n            </div>\n\n            <div class=\"container\">\n                <div class=\"row\"> Songs\n                         <div class=\"col-md-12\">\n                            <ul>\n                                <li *ngFor=\"let song of artist.songsOfArtist\"><a style=\"color:white\" [routerLink]=\"['/admin-edit-song',song.id_song]\">{{song.title}}</a> </li>                        \n                            </ul>\n                          </div>\n                </div>\n            </div>\n</div>"

/***/ }),

/***/ 256:
/***/ (function(module, exports) {

module.exports = " <MyNavbar></MyNavbar>\n <div *ngIf=\"song\" class=\"jumbotron\" style=\"background-color:grey;\">\n        <div class=\"container uploadImg\">\n            <div class=\"col-md-6\">\n            \n                <div class=\"well\">\n                    <h4>Artists</h4>\n                    <div class=\"row\">\n                    <div class=\"form-group\" style=\"color:black\">\n                        <span *ngFor=\"let artist of artists\">{{artist.name}}, </span>\n                        <input type=\"text\" #artistToRemove class=\"form-control\" name=\"artistToRemove\" placeholder=\"Artist to Remove\" style=\"margin-bottom: 1em;\" >\n                         <input type=\"text\" #artistToAdd class=\"form-control\" name=\"artistToAdd\" placeholder=\"Artist to Add\" >\n                    </div>\n                        <button type=\"button\" (click)=\"editArtistSong($event,artistToRemove.value,artistToAdd.value)\" style=\"color:black;\" name=\"sendData\">Save Changes</button>\n                    </div>\n                    <!-- /.row -->\n                </div>\n            </div>\n             <div class=\"col-md-6\">\n                        \n                \t<div class=\"form-group form-utent\">\n                        <label for=\"Bio\">Song Title</label>\n \t\t\t\t\t    <input #title type=\"text\" class=\"form-control\" name=\"title\" placeholder=\"{{song.title}}\" >\n                        <label for=\"Link\" id=\"artistcouny+try\">Link Youtube</label>\n                        <input #link type=\"text\" class=\"form-control\" name=\"link_youtube\" placeholder=\"{{song.link_youtube}}\" > \n                    </div>\n                    <div class=\"form-group form-utent\">\n                        <button type=\"button\" (click)=\"editSong($event,title.value,link.value)\" style=\"color:black;\" name=\"sendData\">Save changes</button>\n                    </div>\n                 <div class=\"form-group form-utent\">\n                        \n                        <button type=\"button\" (click)=\"goToAdminHome()\" style=\"color:black;\" name=\"back\">Back</button>\n                       \n                        </div>\n            </div>\n        </div>\n </div>"

/***/ }),

/***/ 257:
/***/ (function(module, exports) {

module.exports = "<MyNavbar></MyNavbar>\n<div *ngIf=\"user\" class=\"jumbotron\" style=\"background-color:grey;\">\n        <div class=\"container\">\n            <div class=\"col-md-3 name-jumbotron\">\n                <p>Admin Menu  </p>\n                <p><img class=\"img-responsive\" id=\"userlogo\" src=\"../assets/img/user.jpg\" width=\"60\" height=\"55\"> </p>\n            </div>\n            <div class=\"col-md-3 description\">\n            <a [routerLink]=\"['/admin-create-artist']\">\n                <button type=\"button\" class=\"btn btn-primary btn-lg cajas\">Create Artists</button>\n                </a>\n            </div>\n       \n        </div>\n    </div>\n    \n    <div class=\"container\">\n        <div class=\"row\">\n        <div class=\"col-md-12\">\n        Artists\n        <ul class=\"list-unstyled\" style=\"margin-left:15px\">\n                            <li *ngFor=\"let artist of artists\"><a [routerLink]=\"['/admin-edit-artist',artist.id_artist]\">{{artist.name}}</a> </li>\n       </ul>\n   \n    </div>\n    </div>\n    </div>"

/***/ }),

/***/ 258:
/***/ (function(module, exports) {

module.exports = "<!doctype html>\n<html>\n<body>\n     \n    <router-outlet></router-outlet>\n  <footer>\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"intro-text\">\n                    <hr class=\"star-light\"> <span class=\"footer\">Musine </span> </div>\n            </div>\n        </div>\n        <!-- /.row -->\n    </footer>\n</body>\n</html>\n "

/***/ }),

/***/ 259:
/***/ (function(module, exports) {

module.exports = "<MyNavbar></MyNavbar>\n<div *ngIf=\"artist\" class=\"jumbotron\" style=\"background-color:grey;\">\n    <div class=\"container\">\n        \n        <div class=\"col-md-4\" id=\"name-jumbotron\">\n         <p>{{artist.name}}</p>\n         <p *ngIf=\"user && artist.idLogged\"><button type=\"submit\" (click)=\"removeFollow(artist.id_artist)\" class=\"btn btn-success follow-btn\">Following<span class=\"glyphicon glyphicon-ok\"></span> </button></p>\n         <p *ngIf=\"user && !artist.idLogged\"><button type=\"submit\" (click)=\"addFollow(artist.id_artist)\" class=\"btn btn-danger follow-btn\">Not Following</button></p>\n         <p><img class=\"img-responsive\" id=\"userlogo\" src=\"../assets/img/artist.png\" width=\"60\" height=\"55\"> </p>\n        </div>\n        <div class=\"col-md-3\" id=\"description\">\n                <button type=\"button\" class=\"btn btn-primary btn-lg\" id=\"cajas\" (click)=\"goToFollowers(artist.id_artist)\">{{artist.followers}}</button>\n            <p>Followers</p>\n        </div>\n         <div class=\"col-md-3\" id=\"description\">\n            <div id=\"Caja4\">\n                <p>Related tags:</p><u><b> <a class=\"tag\" *ngFor='let tag of artist.tagsOfArtist' [routerLink]=\"['/search', tag.name]\" > {{tag.name}}  </a></b></u></div>\n        </div>\n         <div class=\"col-md-2\" id=\"description\">\n            <p>{{artist.country}}</p>\n        </div>\n    </div>\n</div>\n<br clear=\"all\">\n<div id=\"musica\">\n    <div class=\"row\">\n        <div class=\"col-md-8\">\n             <div class=\"panel panel-default\" id=\"canciones-artista\">\n                 <div class=\"panel-heading\"> Songs </div>\n                 <div class=\"container\">\n                     <div *ngIf=\"songs\" class=\"col-md-8\">\n                          <div class=\"text-center\"> <span>List tracks</span> </div>\n                          <div *ngFor=\"let song of songs\" style=\"text-align:left\" id=\"pag\">\n                            <hr>\n                            <p><button *ngIf=\"user && !song.isIdLogged\" class=\"button\" (click)=\"addFavorite(song.id_song)\">Add Favorite</button><p>\n                            <span>Title: </span>{{song?.title}} <a href=\"{{song.link_youtube}}\" class=\"pull-right\"><i class=\"fa fa-play-circle-o\"></i>Link Youtube </a>\n                            <hr> </div>\n                     </div>\n                 </div>\n             </div>\n        </div>\n        <div id=\"playlists-grupo\" class=\"col-md-4\">\n            <div class=\"well\">\n                <h4>Top Artists</h4>\n                <div class=\"row\">\n                    <ul class=\"list-unstyled\" style=\"margin-left:15px\">\n                        <li *ngFor=\"let a of topArtists\"><a [routerLink]=\"['/artist', a.id_artist]\">  {{a?.name}} </a></li>\n                    </ul>\n                </div>\n                <!-- /.row -->\n            </div>\n            <div class=\"well\">\n                    <h4>Top Tags</h4>\n                    <div class=\"row\">\n                       <ul class=\"list-unstyled\" style=\"margin-left:15px\">\n                       \n                           <li *ngFor=\"let tag of topTags\"> <a [routerLink]=\"['/search', tag.name]\" class=\"tag\">{{tag.name}} </a></li>\n                    \n                        </ul>\n                    </div>\n                    <!-- /.row -->\n                </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ 260:
/***/ (function(module, exports) {

module.exports = "<MyNavbar></MyNavbar>\n<div *ngIf=\"artist\" class=\"jumbotron\" style=\"background-color:grey;\">\n    <div class=\"container\">\n        \n        <div class=\"col-md-4\" id=\"name-jumbotron\">\n         <p>{{artist.name}}</p>\n         <p *ngIf=\"user\"><button type=\"submit\" class=\"btn btn-success follow-btn\">Following<span class=\"glyphicon glyphicon-ok\"></span> </button></p>\n         <p><img class=\"img-responsive\" id=\"userlogo\" src=\"../assets/img/artist.png\" width=\"60\" height=\"55\"> </p>\n        </div>\n        <div class=\"col-md-3\" id=\"description\">\n                <button type=\"button\" class=\"btn btn-primary btn-lg\" id=\"cajas\" (click)=\"goToFollowers(artist.id_artist)\">{{artist.followers}}</button>\n            <p>Followers</p>\n        </div>\n         <div class=\"col-md-3\" id=\"description\">\n            <div id=\"Caja4\">\n                <p>Related tags:</p><u><b> <a class=\"tag\" *ngFor='let tag of artist.tagsOfArtist' [routerLink]=\"['/search', tag.name]\" > {{tag.name}}  </a></b></u></div>\n        </div>\n         <div class=\"col-md-2\" id=\"description\">\n            <p>{{artist.country}}</p>\n        </div>\n    </div>\n</div>\n\n <div class=\"row\">\n        <div class=\"col-md-12 follow\">\n            <p>Is following by</p>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-6 follow\" id=\"pag\" *ngFor=\"let follower of followers\">\n            <div><img src=\"/api/image/{{follower.profileImage}}\" width=\"200\" height=\"200\" class=\"img-circle\" /> \n            <a *ngIf=\"!user || follower.id_user!==user.id_user\" [routerLink]=\"['/user-playlist', follower.id_user]\"><span>{{follower.name}}</span></a>\n            <a *ngIf=\"user && follower.id_user===user.id_user\" [routerLink]=\"['/my-playlists', follower.id_user]\"><span>{{follower.name}}</span></a>\n            </div>\n       </div>\n    </div>\n\t\n    <hr>\n   <div *ngIf=\"artist\" class=\"row save-return\">\n        <div class=\"col-md-12\" style=\"text-align:right\">\n            <a [routerLink]=\"['/artist', artist.id_artist]\">\n                <button type=\"button\" class=\"btn btn-danger\">Return</button>\n            </a>\n        </div>\n    </div>"

/***/ }),

/***/ 261:
/***/ (function(module, exports) {

module.exports = "<MyNavbar></MyNavbar>\r\n<div class=\"jumbotron\" *ngIf=\"userLogged\" style=\"background-color:grey;\">\r\n        <div class=\"container uploadImg\">\r\n            <div class=\"col-md-6\" id=\"name-jumbotron\">\r\n                <p>{{userLogged.name}} </p>\r\n                <p><img class=\"img-responsive\" id=\"userlogo\" src=\"/api/image/{{userLogged.profileImage}}\" width=\"60\" height=\"55\"> </p>\r\n                <div enctype=\"multipart/form-data\" id=\"form-image\">\r\n                    <!-- (change)=\"selectFile($event)\"-->\r\n\t\t\t\t\t<div><input #file type=\"file\" (change)=\"changeImage($event)\" name=\"file\" id=\"input-image\" /></div>\r\n\t\t\t\t\t\t\t\t\r\n                </div>\r\n               \r\n              \r\n            </div>\r\n            <div class=\"col-md-6\">\r\n                <div class=\"form-group form-utent\">\r\n                    <label for=\"Bio\">Biography</label>\r\n                    \t\t\r\n<!--                     <input type=\"text\" class=\"form-control\" name=\"biography\" placeholder=\"{{u.biography}}\"> -->\r\n \t\t\t\t\t<textarea #biography class=\"form-control\" rows=\"5\" name=\"biography\" placeholder=\"{{userLogged.biography}}\"></textarea>\r\n                </div>\r\n                <div class=\"form-group form-utent\">\r\n                    <label for=\"Country\">Country</label>\r\n                    <select #country id=\"listaDeshabilitada\" class=\"form-control\" name=\"country\">\r\n                        <option>{{userLogged.country}}</option>\r\n                        <option>Spain</option>\r\n                        <option>Italy</option>\r\n                        <option>France</option>\r\n                        <option>Portugal</option>\r\n                        <option>U.K</option>\r\n                        <option>U.S.A</option>\r\n                        <option>China</option>\r\n                        <option>Japan</option>\r\n                        <option>Mexico</option>\r\n                        <option>Venezuela</option>\r\n                    </select>\r\n                </div>\r\n                <div class=\"form-group form-utent\">\r\n                    <label for=\"City\">City</label>\r\n                    <textarea #city class=\"form-control\" rows=\"1\" name=\"city\" placeholder=\"{{userLogged.city}}\"></textarea>\r\n                    <button type=\"button\" (click)=\"changeData(biography.value, country.value, city.value)\" style=\"color:black;margin-top:5px\">Save Changes</button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div *ngIf=\"userLogged\" class=\"row save-return\">\r\n        <div class=\"col-md-12\" style=\"text-align:right\">\r\n            <a [routerLink]=\"['/my-playlists', userLogged.id_user]\">\r\n                <button type=\"button\" class=\"btn btn-danger\">Return</button>\r\n            </a>\r\n        </div>\r\n    </div>\r\n"

/***/ }),

/***/ 262:
/***/ (function(module, exports) {

module.exports = "<MyNavbar></MyNavbar>\n<div class=\"jumbotron\" style=\"background-color:grey;\">\n        <div class=\"container uploadImg\">\n            <div class=\"col-md-6\"> <img class=\"img-responsive editlogo\" src=\"../assets/img/playlist.png\" width=\"250em\">\n            </div>\n            <div class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label>Title for your playlist:</label>\n                        <input #title type=\"text\" class=\"form-control\" name='title' required> </div>\n                    <div class=\"form-group\">\n                        <label for=\"comment\">Description:</label>\n                        <textarea #description class=\"form-control\" rows=\"5\" name=\"description\"></textarea>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Tag (only the first)</label>\n                        <input #tag type=\"text\" class=\"form-control\" name=\"tag\" required> </div>\n                    <button type=\"button\" (click)=\"createPlaylist(title.value,description.value,tag.value)\" style=\"color:black;\" name=\"sendData\">Add new playlist</button> \n            </div>\n        </div>\n    </div>\n    <div class=\"row save-return\">\n        <div class=\"col-md-12\" style=\"text-align:right\">\n            <a [routerLink]=\"['/my-playlists', user.id_user]\">\n                <button type=\"button\" class=\"btn btn-danger\">Return</button>\n            </a>\n        </div>\n    </div>"

/***/ }),

/***/ 263:
/***/ (function(module, exports) {

module.exports = " <MyNavbar></MyNavbar>\n <div class=\"jumbotron\" style=\"background-color:grey;\">\n        <div class=\"container uploadImg\">\n            <div class=\"col-md-6\" style=\"text-align: -webkit-center;\"> <img class=\"img-responsive edit-logo\" src=\"../assets/img/playlist.png\">\n                \n            </div>\n            <div *ngIf=\"playlist\" class=\"col-md-6\">\n                    <div class=\"form-group\">\n                        <label>Title of the playlist</label>\n                        <input #title type=\"text\" class=\"form-control\" name=\"title\" placeholder=\"{{playlist.title}}\" >\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Description:</label>\n                        <textarea #description class=\"form-control\" rows=\"5\" name=\"description\" placeholder=\"{{playlist.description}}\" ></textarea>\n                    </div>\n                    <div class=\"form-group\">\n                        <label>Tags</label>\n                        <a *ngFor=\"let tag of tags\" class=\"tag\" [routerLink]=\"['/search', tag.name]\"> {{tag.name}}  </a>\n                        <input  #tagToRemove type=\"text\" class=\"form-control\" name=\"tagToRemove\" placeholder=\"Tag to Remove\" style=\"margin-bottom: 1em;\" >\n                         <input  #tagToAdd type=\"text\" class=\"form-control\" name=\"tagToAdd\" placeholder=\"Tag to add\" >\n                         </div>\n                        <button type=\"button\" (click)=\"changeUserPlaylist($event,title.value,description.value,tagToRemove.value,tagToAdd.value)\" style=\"color:black;\" name=\"sendData\">Save Changes</button>\n            </div>\n        </div>\n    </div>\n\n            \n    \n    <div class=\"container\">\n        <div class=\"well\">\n            <div class=\"text-center\"> <span>List tracks</span> </div>\n            <hr>\n            <div class=\"row\" *ngFor=\"let song of songs\">\n                <div class=\"col-md-12\">\n                <button type=\"button\" (click)=\"removeSong($event,song.id_song)\" name=\"ToRemove\" class=\"pull-right\">Remove</button><span class=\"glyphicon glyphicon-trash pull-right\"></span>\n                \n                <span>Title: {{song.title}} </span><a href=\"{{song.link_youtube}}\" class=\"pull-right\"> Link Youtube</a>\n                    <p><span>Artist: <a *ngFor=\"let artist of song.artistsOfSong\" [routerLink]=\"['/artist', artist.id_artist]\"> {{artist?.name}}</a></span> </p>\n                    \n             </div>\n            </div>\n             <div class=\"row\">\n                <div class=\"form-group\">\n                    <label>Title of the song:</label>\n                    <input #titleSong type=\"text\" class=\"form-control\" name=\"titleSong\"> </div>\n                <div class=\"form-group\">\n                    <label>Artists:</label>\n                    <input #artist type=\"text\" class=\"form-control\" name=\"artist\"> </div>\n                <div class=\"form-group\">\n                <div class=\"col-md-12\" style=\"text-align:right\">\n      \t\t\n                   <button type=\"button\" (click)=\"addSong($event,titleSong.value,artist.value)\" name=\"addFromForm\">Add Song</button>\n             \n                </div>\n               \n            </div>\n             </div>\n\n    \n            <div class=\"text-center\"> <span>List Favorite Songs</span> </div>\n            <hr>\n            <div class=\"row\" *ngIf=\"favoriteSongs\">\n                <div *ngFor=\"let song of favoriteSongs\" class=\"col-md-12\">\n                \n                <button type=\"button\" (click)=\"addFavoriteSongToPlaylist($event,song.id_song)\" name=\"add\" class=\"pull-right\">Add</button>\n            \n                <span>Title: {{song.title}} </span><a href=\"{{song.link_youtube}}\" class=\"pull-right\"> Link Youtube</a>\n                    <p><span>Artist: <a *ngFor=\"let artist of song.artistsOfSong\" [routerLink]=\"['/artist', artist.id_artist]\"> {{artist.name}}</a></span> </p>\n                \n                </div>\n            </div>\n\n\n     \n\n     </div>\n     <div class=\"row save-return\">\n        <div class=\"col-md-12\" style=\"text-align:right\">\n            <a [routerLink]=\"['/my-playlists', user.id_user]\">\n                <button type=\"button\" class=\"btn btn-danger\">Return</button>\n            </a>\n        </div>\n    </div>\n        </div>  "

/***/ }),

/***/ 264:
/***/ (function(module, exports) {

module.exports = "\n<MyNavbar></MyNavbar>\n<a *ngIf=\"admin\" [routerLink]=\"['/admin-home']\"> admin-page</a> \n<div class=\"container\" *ngIf=\"!admin\">\n    <div class=\"row\">\n            <!-- Blog Entries Column -->\n            <div class=\"col-md-8\">\n                <h1 class=\"page-header\">\n                    Enjoy your music\n                    <small>Choose your favourite playlist</small>\n                </h1>\n                <img class=\"img-responsive\" src=\"../assets/img/logo.png\" alt=\"\">\n                <hr>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.</p>\n                <hr> </div>\n    <div class=\"col-md-4\">\n                <!-- Blog Categories Well -->\n                <div class=\"well\">\n                    <h4>Top Playlists</h4>\n                    <div class=\"row\">\n                        <ul class=\"list-unstyled\" style=\"margin-left:15px\">\n                       \n                           <li *ngFor=\"let playlist of topPlaylists\"><a [routerLink]=\"['/playlist', playlist.id_playlist]\"> {{playlist.title}}</a> </li>\n                    \n                        </ul>\n                    </div>\n                    <!-- /.row -->\n                </div>\n                <!-- Side Widget Well -->\n                <div class=\"well\">\n                    <h4>Top Artists</h4>\n                    <div class=\"row\">\n                        <ul class=\"list-unstyled\" style=\"margin-left:15px\">\n                       \n                           <li *ngFor=\"let artist of topArtists\"><a [routerLink]=\"['/artist', artist.id_artist]\">  {{artist.name}} </a></li>\n                    \n                        </ul>\n                    </div>\n                    <!-- /.row -->\n                </div>\n                <div class=\"well\">\n                    <h4>Top Tags</h4>\n                    <div class=\"row\">\n                       <ul class=\"list-unstyled\" style=\"margin-left:15px\">\n                       \n                           <li *ngFor=\"let tag of topTags\"> <a class=\"tag\" [routerLink]=\"['/search', tag.name]\">{{tag.name}} </a></li>\n                    \n                        </ul>\n                    </div>\n                    <!-- /.row -->\n                </div>\n            </div>\n<!--row -->\n             </div>\n        <div *ngIf=\"user\" class=\"row\">\n            \n         <h3><b>Artists followed</b></h3>\n       <ul>\n        <li *ngFor=\"let artist of artistsFollowed\"><a style=\"color:black\" [routerLink]=\"['/artist', artist.id_artist]\">{{artist.name}}</a> </li>\n       </ul>\n        </div>\n        <td>\n            <h3><b>Playlists</b></h3>\n        <div class=\"row wall\">\n             <div class=\"col-md-6\" *ngFor=\"let playlist of playlists\">\n                 <table id=\"table\">\n                    <tr>\n                         <th><a [routerLink]=\"['/playlist', playlist.id_playlist]\">{{playlist.title}} </a><span class=\"posted\">Posted by  \n        \t\n                    \t\t<a [routerLink]=\"['/user-playlist', playlist.creatorId]\">{{playlist.creatorName}}</a></span> </th>\n                    </tr>\n                    <tr style=\"height:200px;\">\n                        <th><img class=\"img-responsive\" src=\"../assets/img/playlist.png\"></th>\n                        <th>\n                            <ul>\n                                <p><span class=\"glyphicon glyphicon-time\"></span> Posted on date {{playlist.date}}</p>\n                                <hr>\n                                <p><span class=\"glyphicon glyphicon-thumbs-up\"></span> {{playlist.nLikes}} <span class=\"glyphicon glyphicon-list\"></span> {{playlist.nTracks}}</p>\n                                <p><a *ngFor=\"let tag of playlist.tagsOfPlaylist\" class=\"tag\" title=\"tag\" [routerLink]=\"['/search', tag.name]\">{{tag.name}}</a></p>\n                                <p style=\"text-align:right\"><a class=\"opcion_playlist\"></a> </p>\n                            </ul>\n                        </th>\n                    </tr>\n                </table>\n            </div>\n            </div>\n    </div>"

/***/ }),

/***/ 265:
/***/ (function(module, exports) {

module.exports = "<html lang=\"en\" class=\"no-js\">\n\n<head>\n    <meta charset=\"UTF-8\" />\n    <!--Titulo del navegador -->\n    <title>Musine</title>\n    <!--Configuraciones que venian por defecto en la plantilla y no hizo falta cambiar -->\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n    <meta name=\"description\" content=\"Login and Registration Form for Musine\" />\n    <meta name=\"keywords\" content=\"html5, css3, form, switch, animation, :target, pseudo-class\" />\n    <meta name=\"author\" content=\"Team 21\" />\n    <!--Icono con el logo de la pagina para la pestaña del navegador -->\n    <link rel=\"icon\" type=\"image/png\" href=\"../assets/img/musine.png\">\n    <!--Diferentes estilos que fueron incorporados a la plantilla -->\n  </head>\n\n<body>\n    <header style=\"text-align:center; margin-bottom:2em;\">\n            <!--Mensaje de bienvenida a la pagina -->\n            <h1>Welcome to  <a [routerLink]=\"['/new']\">Musine <img src=\"../assets/img/musine.png\" width=\"60\" height=\"55\" style=\"color: aqua;\"></a></h1>\n            <!--Invitacion a iniciar sesion con otras redes sociales -->\n<!--             <nav class=\"codrops-demos\"> <span>You can also <strong>\"log in\"</strong> with</span> <a href=\"facebook.html\" id=\"btnFacebook\" class=\"current-demo\">Facebook</a> <a href=\"google.html\" id=\"btnFacebook\">Google</a> </nav> -->\n        </header>\n    <!--Contenedor de toda la pagina -->\n    <div class=\"container\">\n        <!-- Codrops top bar -->\n        <section>\n            <div id=\"container_demo\">\n                <!--Seccion que permite hacer el cambio entre log in y sing up -->\n                <a class=\"hiddenanchor\" id=\"tologin\"></a>\n                <div id=\"wrapper\">\n                    <div id=\"login\" class=\"animate form\" style=\"margin-top: 2em;background-color: #18BC9C;\">\n                        <!--Formulario que venia por defecto en la plantilla, al cual se le cambiaron aspectos textuales -->\n                            <h1>Log in</h1>\n                            <p>\n                                <label for=\"username\" class=\"uname\"> Enter your username: </label>\n                                <input #user id=\"username\" name=\"username\" required=\"required\" type=\"text\" placeholder=\"User\" /> </p>\n                            <p>\n                                <label for=\"password\" class=\"youpasswd\"> Password: </label>\n                                <input #pass id=\"password\" name=\"password\" required=\"required\" type=\"password\" placeholder=\"************\" /> </p>\n\n                            <p class=\"btnLogin\">\n                                \n                                <button type=\"button\" (click)=\"logIn($event, user.value, pass.value)\">Log In</button>\t</p>\n                                <p class=\"change_link\"> Not registered? <a [routerLink]=\"['/sign-in']\" class=\"to_register\">Register</a> </p>\n                    </div>\n                </div>\n            </div>\n        </section>\n    </div>\n</body>\n\n</html>"

/***/ }),

/***/ 266:
/***/ (function(module, exports) {

module.exports = "<MyNavbar></MyNavbar>\n<div *ngIf=\"user\" class=\"jumbotron\" style=\"background-color:grey;\">\n        <div class=\"container\">\n            <div class=\"col-md-3\" id=\"name-jumbotron\">\n                <p>{{user.name}}\n                </p>\n                <p><img class=\"img-responsive\" id=\"userlogo\" src=\"/api/image/{{user.profileImage}}\" width=\"60\" height=\"55\"> </p>\n            </div>\n            <div class=\"col-md-3\" id=\"description\">\n                <p>{{playlists?.length}}</p>\n                <p>Created playlist</p>\n            </div>\n          <div class=\"col-md-3\" id=\"description\">\n                <a>\n                    <button type=\"button\" (click)=\"goToFollowers(user.id_user)\" class=\"btn btn-primary btn-lg\" id=\"cajas\">{{user.followers.length}}</button>\n                </a>\n                <p>Followers</p>\n            </div>\n            <div class=\"col-md-3\" id=\"description\">\n                <a>\n                    <button type=\"button\" (click)=\"goToFollowing(user.id_user)\" class=\"btn btn-primary btn-lg\" id=\"cajas\">{{user.following.length}}</button>\n                </a>\n                <p>Following</p>\n            </div>\n        </div>\n    </div>\n    <nav class=\"navbar navbar-default\" *ngIf=\"user\">\n        <div class=\"col-md-4 utent_button\">\n            <a [routerLink]=\"['/my-playlists', user.id_user]\">\n                <button type=\"button\" class=\"btn btn-default btn-lg\"><span class=\"glyphicon glyphicon-cd\"></span> PLAYLISTS</button>\n            </a>\n        </div>\n        <div class=\"col-md-4 utent_button\">\n            <a [routerLink]=\"['/my-likes', user.id_user]\"> \n                <button type=\"button\" class=\"btn btn-default btn-lg\"><span class=\"glyphicon glyphicon-thumbs-up\"></span> LIKES</button>\n            </a>\n        </div>\n        <div class=\"col-md-4 utent_button\">\n            <a [routerLink]=\"['/my-favorites', user.id_user]\">\n                <button type=\"button\" class=\"btn btn-default btn-lg active\"><span class=\"glyphicon glyphicon glyphicon-star-empty\"></span> FAVORITE TRACKS</button>\n            </a>\n        </div>\n    </nav>\n    <div class=\"container\">\n        <div class=\"well\">\n            <div class=\"text-center\"> <span>List tracks</span> </div>\n            <hr>\n           <div class=\"row\" id=\"pag\" *ngIf=\"songs\">\n                <div *ngFor=\"let song of songs\"><span>Title: </span>{{song.title}} <a href=\"{{song.link_youtube}}\" class=\"pull-right\"><i class=\"fa fa-play-circle-o\"></i>Link Youtube </a>\n                            <p><span>Artist: <a *ngFor=\"let artist of song.artistsOfSong\" [routerLink]=\"['/artist', artist.id_artist]\"> {{artist?.name}}</a></span></p>\n                             <p><button type=\"button\" (click)=\"removeFavorite(song.id_song)\"><span class=\"glyphicon glyphicon-trash\">Remove</span></button></p>\n                        </div>\n            \n            </div>\n            \n            <!-- Paginacion --> \n    \n\t\n            \n        </div>\n    </div>\n"

/***/ }),

/***/ 267:
/***/ (function(module, exports) {

module.exports = "<MyNavbar></MyNavbar>\n<div *ngIf=\"user\" class=\"jumbotron\" style=\"background-color:grey;\">\n        <div class=\"container\">\n            <div class=\"col-md-4\" id=\"name-jumbotron\">\n                <p>{{user.name}}\n                </p>\n                <p><img class=\"img-responsive\" id=\"userlogo\" src=\"/api/image/{{user.profileImage}}\" width=\"60\" height=\"55\"> </p>\n            </div>\n          <div class=\"col-md-4\" id=\"description\">\n                <a>\n                    <button type=\"button\" (click)=\"goToFollowers(user.id_user)\" class=\"btn btn-primary btn-lg\" id=\"cajas\">{{user.followers.length}}</button>\n                </a>\n                <p>Followers</p>\n            </div>\n            <div class=\"col-md-4\" id=\"description\">\n                <a>\n                    <button type=\"button\" (click)=\"goToFollowing(user.id_user)\" class=\"btn btn-primary btn-lg\" id=\"cajas\">{{user.following.length}}</button>\n                </a>\n                <p>Following</p>\n            </div>\n        </div>\n    </div>\n\n<div class=\"row\">\n        <div class=\"col-md-12 follow\">\n            <p>You are following by</p>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-6 follow\" id=\"pag\" *ngFor=\"let follower of followers\">\n            <div><img src=\"/api/image/{{follower.profileImage}}\" width=\"200\" height=\"200\" class=\"img-circle\" /> \n            <a *ngIf=\"!user || follower.id_user!==user.id_user\" [routerLink]=\"['/user-playlist', follower.id_user]\"><span>{{follower.name}}</span></a>\n            <a *ngIf=\"user && follower.id_user===user.id_user\" [routerLink]=\"['/my-playlists', follower.id_user]\"><span>{{follower.name}}</span></a>\n            </div>\n       </div>\n    </div>\n\t\n    <hr>\n   <div *ngIf=\"user\" class=\"row save-return\">\n        <div class=\"col-md-12\" style=\"text-align:right\">\n            <a [routerLink]=\"['/my-playlists', user.id_user]\">\n                <button type=\"button\" class=\"btn btn-danger\">Return</button>\n            </a>\n        </div>\n    </div>"

/***/ }),

/***/ 268:
/***/ (function(module, exports) {

module.exports = "<MyNavbar></MyNavbar>\n<div *ngIf=\"user\" class=\"jumbotron\" style=\"background-color:grey;\">\n        <div class=\"container\">\n            <div class=\"col-md-4\" id=\"name-jumbotron\">\n                <p>{{user.name}}\n                </p>\n                <p><img class=\"img-responsive\" id=\"userlogo\" src=\"/api/image/{{user.profileImage}}\" width=\"60\" height=\"55\"> </p>\n            </div>\n          <div class=\"col-md-4\" id=\"description\">\n                <a>\n                    <button type=\"button\" (click)=\"goToFollowers(user.id_user)\" class=\"btn btn-primary btn-lg\" id=\"cajas\">{{user.followers.length}}</button>\n                </a>\n                <p>Followers</p>\n            </div>\n            <div class=\"col-md-4\" id=\"description\">\n                <a>\n                    <button type=\"button\" (click)=\"goToFollowing(user.id_user)\" class=\"btn btn-primary btn-lg\" id=\"cajas\">{{user.following.length}}</button>\n                </a>\n                <p>Following</p>\n            </div>\n        </div>\n    </div>\n\n<div class=\"row\">\n        <div class=\"col-md-12 follow\">\n            <p>You are following</p>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-6 follow\" id=\"pag\" *ngFor=\"let follow of following\">\n            <div><img src=\"/api/image/{{follow.profileImage}}\" width=\"200\" height=\"200\" class=\"img-circle\" /> \n            <a *ngIf=\"!user || follow.id_user!==user.id_user\" [routerLink]=\"['/user-playlist', follow.id_user]\"><span>{{follow.name}}</span></a>\n            <a *ngIf=\"user && follow.id_user===user.id_user\" [routerLink]=\"['/my-playlists', follow.id_user]\"><span>{{follow.name}}</span></a>\n            </div>\n       </div>\n    </div>\n\t\n    <hr>\n   <div *ngIf=\"user\" class=\"row save-return\">\n        <div class=\"col-md-12\" style=\"text-align:right\">\n            <a [routerLink]=\"['/my-playlists', user.id_user]\">\n                <button type=\"button\" class=\"btn btn-danger\">Return</button>\n            </a>\n        </div>\n    </div>"

/***/ }),

/***/ 269:
/***/ (function(module, exports) {

module.exports = "<MyNavbar></MyNavbar>\n<div *ngIf=\"user\" class=\"jumbotron\" style=\"background-color:grey;\">\n        <div class=\"container\">\n            <div class=\"col-md-3\" id=\"name-jumbotron\">\n                <p>{{user.name}}\n                </p>\n                <p><img class=\"img-responsive\" id=\"userlogo\" src=\"/api/image/{{user.profileImage}}\" width=\"60\" height=\"55\"> </p>\n            </div>\n            <div class=\"col-md-3\" id=\"description\">\n                <p>{{playlists?.length}}</p>\n                <p>Created playlist</p>\n            </div>\n          <div class=\"col-md-3\" id=\"description\">\n                <a>\n                    <button type=\"button\" (click)=\"goToFollowers(user.id_user)\" class=\"btn btn-primary btn-lg\" id=\"cajas\">{{user.followers.length}}</button>\n                </a>\n                <p>Followers</p>\n            </div>\n            <div class=\"col-md-3\" id=\"description\">\n                <a>\n                    <button type=\"button\" (click)=\"goToFollowing(user.id_user)\" class=\"btn btn-primary btn-lg\" id=\"cajas\">{{user.following.length}}</button>\n                </a>\n                <p>Following</p>\n            </div>\n        </div>\n    </div>\n    <nav class=\"navbar navbar-default\" *ngIf=\"user\">\n        <div class=\"col-md-4 utent_button\">\n            <a [routerLink]=\"['/my-playlists', user.id_user]\">\n                <button type=\"button\" class=\"btn btn-default btn-lg\"><span class=\"glyphicon glyphicon-cd\"></span> PLAYLISTS</button>\n            </a>\n        </div>\n        <div class=\"col-md-4 utent_button\">\n            <a [routerLink]=\"['/my-likes', user.id_user]\"> \n                <button type=\"button\" class=\"btn btn-default btn-lg active\"><span class=\"glyphicon glyphicon-thumbs-up\"></span> LIKES</button>\n            </a>\n        </div>\n        <div class=\"col-md-4 utent_button\">\n            <a [routerLink]=\"['/my-favorites', user.id_user]\">\n                <button type=\"button\" class=\"btn btn-default btn-lg\"><span class=\"glyphicon glyphicon glyphicon-star-empty\"></span> FAVORITE TRACKS</button>\n            </a>\n        </div>\n    </nav>\n\n    <!-- Page Content -->\n     <div class=\"container\">\n         <td>\n            <h3><b>Playlists</b></h3>\n        <div class=\"row wall\" *ngIf=\"playlists\">\n             <div class=\"col-md-6\" *ngFor=\"let playlist of playlists\">\n                 <table id=\"table\">\n                    <tr>\n                         <th><a [routerLink]=\"['/playlist', playlist.id_playlist]\">{{playlist.title}} </a><span class=\"posted\">Posted by  \n        \t\n                    \t\t<a [routerLink]=\"['/user-playlist', playlist.creatorId]\">{{playlist.creatorName}}</a></span> </th>\n                    </tr>\n                    <tr style=\"height:200px;\">\n                        <th><img class=\"img-responsive\" src=\"../assets/img/playlist.png\"></th>\n                        <th>\n                            <ul>\n                                <p><span class=\"glyphicon glyphicon-time\"></span> Posted on date {{playlist.date}}</p>\n                                <hr>\n                                <p><span class=\"glyphicon glyphicon-thumbs-up\"></span> {{playlist.nLikes}} <span class=\"glyphicon glyphicon-list\"></span> {{playlist.nTracks}}</p>\n                                <p><a *ngFor=\"let tag of playlist.tagsOfPlaylist\" class=\"tag\" title=\"tag\" [routerLink]=\"['/search', tag.name]\">{{tag.name}}</a></p>\n                                <p style=\"text-align:right\"><a class=\"opcion_playlist\"></a> </p>\n                                <p><button type=\"button\" (click)=\"removeLike(playlist.id_playlist)\"><span class=\"glyphicon glyphicon-thumbs-down\">Not Like</span></button></p>\n                            </ul>\n                        </th>\n                    </tr>\n                </table>\n            </div>\n            </div>\n     </div>"

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TagService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TagService = (function () {
    function TagService(http) {
        this.http = http;
    }
    ;
    TagService.prototype.getTop3Tag = function () {
        //let url="http://localhost:4200/api/Tag/Top3"
        var url = "https://localhost:8443/api/Tag/Top3";
        return this.http.get(url).map(
        //response => this.extractNames(response))
        function (response) { return response.json(); })
            .catch(function (error) { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Server error'); });
    };
    TagService.prototype.extractNames = function (response) {
        return response.json().map(function (topTags) { return topTags.name; });
    };
    return TagService;
}());
TagService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], TagService);

var _a;
//# sourceMappingURL=tag.service.js.map

/***/ }),

/***/ 270:
/***/ (function(module, exports) {

module.exports = "<MyNavbar></MyNavbar>\n<div *ngIf=\"user\" class=\"jumbotron\" style=\"background-color:grey;\">\n        <div class=\"container\">\n            <div class=\"col-md-3\" id=\"name-jumbotron\">\n                <p>{{user.name}}\n                </p>\n                <p><img class=\"img-responsive\" id=\"userlogo\" src=\"/api/image/{{user.profileImage}}\" width=\"60\" height=\"55\"> </p>\n            </div>\n            <div class=\"col-md-3\" id=\"description\">\n                <p>{{playlists?.length}}</p>\n                <p>Created playlist</p>\n            </div>\n          <div class=\"col-md-3\" id=\"description\">\n                <a>\n                    <button type=\"button\" (click)=\"goToFollowers(user.id_user)\" class=\"btn btn-primary btn-lg\" id=\"cajas\">{{user.followers.length}}</button>\n                </a>\n                <p>Followers</p>\n            </div>\n            <div class=\"col-md-3\" id=\"description\">\n                <a>\n                    <button type=\"button\" (click)=\"goToFollowing(user.id_user)\" class=\"btn btn-primary btn-lg\" id=\"cajas\">{{user.following.length}}</button>\n                </a>\n                <p>Following</p>\n            </div>\n        </div>\n    </div>\n    <nav class=\"navbar navbar-default\" *ngIf=\"user\">\n        <div class=\"col-md-4 utent_button\">\n            <a [routerLink]=\"['/my-playlists', user.id_user]\">\n                <button type=\"button\" class=\"btn btn-default btn-lg active\"><span class=\"glyphicon glyphicon-cd\"></span> PLAYLISTS</button>\n            </a>\n        </div>\n        <div class=\"col-md-4 utent_button\">\n            <a [routerLink]=\"['/my-likes', user.id_user]\"> \n                <button type=\"button\" class=\"btn btn-default btn-lg\"><span class=\"glyphicon glyphicon-thumbs-up\"></span> LIKES</button>\n            </a>\n        </div>\n        <div class=\"col-md-4 utent_button\">\n            <a [routerLink]=\"['/my-favorites', user.id_user]\">\n                <button type=\"button\" class=\"btn btn-default btn-lg\"><span class=\"glyphicon glyphicon glyphicon-star-empty\"></span> FAVORITE TRACKS</button>\n            </a>\n        </div>\n    </nav>\n\n    <!-- Page Content -->\n     <div class=\"container\">\n         <td>\n            <h3><b>Playlists</b></h3>\n            <img src=\"../assets/img/+.png\" width=\"25\" height=\"25\" /> <a [routerLink]=\"['/create-playlist']\" id=\"newPlay\">New Playlist</a>\n        <div class=\"row wall\" *ngIf=\"playlists\">\n             <div class=\"col-md-6\" *ngFor=\"let playlist of playlists\">\n                 <table id=\"table\">\n                    <tr>\n                         <th><a [routerLink]=\"['/playlist', playlist.id_playlist]\">{{playlist.title}} </a><span class=\"posted\">Posted by  \n        \t\n                    \t\t<a [routerLink]=\"['/user-playlist', playlist.creatorId]\">{{playlist.creatorName}}</a></span> </th>\n                    </tr>\n                    <tr style=\"height:200px;\">\n                        <th><img class=\"img-responsive\" src=\"../assets/img/playlist.png\"></th>\n                        <th>\n                            <ul>\n                                <p><span class=\"glyphicon glyphicon-time\"></span> Posted on date {{playlist.date}}</p>\n                                <hr>\n                                <p><span class=\"glyphicon glyphicon-thumbs-up\"></span> {{playlist.nLikes}} <span class=\"glyphicon glyphicon-list\"></span> {{playlist.nTracks}}</p>\n                                <p><a *ngFor=\"let tag of playlist.tagsOfPlaylist\" class=\"tag\" title=\"tag\" [routerLink]=\"['/search', tag.name]\">{{tag.name}}</a></p>\n                                <p style=\"text-align:right\"><a class=\"opcion_playlist\"></a> </p>\n                                <p><a [routerLink]=\"['/edit-playlist',playlist.id_playlist]\"><span class=\"glyphicon glyphicon-pencil\"> Edit</span></a></p>\n                                <p><button type=\"button\" (click)=\"remove(playlist.id_playlist)\"><span class=\"glyphicon glyphicon-trash\"></span>Remove</button></p>\n                            </ul>\n                        </th>\n                    </tr>\n                </table>\n            </div>\n            </div>\n     </div>"

/***/ }),

/***/ 271:
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-inverse\" style=\"height: 5.5em;\">\r\n        <div class=\"navbar-header\" id=\"header\"><span class=\"icon-bar\"></span> <a class=\"navbar-brand\" [routerLink]=\"['/']\"><span>Musine</span></a> <img class=\"img-responsive\" id=\"logo-navbar\" src=\"../assets/img/musine.png\" width=\"60\" height=\"55\"> </div>\r\n            <form class=\"navbar-form navbar-left\" action=\"/SearchPlaylist\">\r\n                <div class=\"input-group\" id=\"search\">\r\n                    <input type=\"text\" class=\"form-control\" placeholder=\"Search\" name=\"key\" [(ngModel)]=\"key\">\r\n                    <div class=\"input-group-btn\">\r\n                        <button class=\"btn btn-default\" type=\"submit\" (click)=\"search()\" id=\"search-button\" > <i class=\"glyphicon glyphicon-search\"></i></button>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n                <img *ngIf=\"userLogged\" class=\"img-responsive img-circle\" src=\"/api/image/{{userLogged.profileImage}}\" style=\"height: 55px;width: 60px;position: relative;left: 54%;\">\r\n                <div *ngIf=\"userLogged\" id=\"navbar\" class=\"dropdown\" dropdown [dropdownToggle]=\"true\">\r\n                    <a class=\"dropdown-toggle\" data-toggle=\"dropdown\" dropdown-open style=\"margin-top: 0;position: relative;bottom: 2.5em;\">My Account<span class=\"caret\"></span></a>\r\n                    <ul class=\"dropdown-menu\" id=\"dropdown-options\">\r\n                        <li><a [routerLink]=\"['/config',userLogged.id_user]\" (click)=\"goToConfig()\">My Profile</a></li>\r\n                        <li><a [routerLink]=\"['/my-playlists',userLogged.id_user]\" (click)=\"goToMyPlaylists()\">My Playlists</a></li>\r\n                        <li><a [routerLink]=\"['/new']\" (click)=\"logout()\">Log Out</a></li>\r\n                    </ul>\r\n                </div>\r\n             <div *ngIf=\"!userLogged\" id=\"navbar\">\r\n            <ul class=\"nav navbar-nav navbar-right\">\r\n                    <li><a [routerLink]=\"['/login']\"><span class=\"glyphicon glyphicon-log-in\"> Login</span></a></li>\r\n                    <li><a [routerLink]=\"['/sign-in']\"><span class=\"glyphicon glyphicon-user\"> SignIn</span></a></li>\r\n                </ul>\r\n             </div>\r\n    </nav>"

/***/ }),

/***/ 272:
/***/ (function(module, exports) {

module.exports = "<MyNavbar></MyNavbar>\n<div class=\"col-md-12\" id=\"degradado\">\n        <div class=\"container\" id=\"reproductor\">\n            <img class=\"img-responsive\" src=\"../assets/img/cascos.jpg\" alt=\"\">\n        </div>\n    </div>\n    <div *ngIf=\"playlist\" class=\"col-md-12\" id=\"degradadoinverso\">\n        <div class=\"col-md-8\">\n            <div class=\"well\" id=\"general-info\">\n                <h3 id=\"titulo-playlist\">{{playlist.title}}</h3>\n                <div class=\"btn-group\" id=\"suscripcion\"> \n                <span><a href=\"/UserPlaylists/{{playlist.creatorId}}\">{{playlist.creatorName}} </a></span>\n                </div>\n                <p id=\"descripcion\">{{playlist.description}}</p>\n                <div class=\"container\">\n                    <div class=\"row\" id=\"playlist-buttons\">\n                        <div class=\"col-md-6\" id=\"actions\">\n                            <div *ngIf=\"user && !playlist.isIdLogged\" class=\"btn-group\">\n                                 <button (click)=\"addLike(playlist.id_playlist)\" type=\"button\">Like</button>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n            <div *ngIf=\"songs\" id=\"tracklist\">\n                <div class=\"well\">\n                    <div class=\"text-center\"> <span>List tracks</span> </div>\n                    \n                    <hr>\n                        <div *ngFor=\"let song of songs\">\n                            <p><button *ngIf=\"user && !song.isIdLogged\" class=\"button\" (click)=\"addFavorite(song.id_song)\">Add Favorite</button><p>\n                            <span>Title: </span>{{song.title}} <a href=\"{{song.link_youtube}}\" class=\"pull-right\"><i class=\"fa fa-play-circle-o\"></i>Link Youtube </a>\n                            <p><span>Artist: <a *ngFor=\"let artist of song.artistsOfSong\" [routerLink]=\"['/artist', artist.id_artist]\"> {{artist?.name}}</a></span></p>\n                        </div>\n                   \n                </div>\n                \n\t<div class=\"col-md-12\" style=\"text-align:center\" id=\"spin\"></div>\n\t<div id='more'></div>\n                \n            </div>\n        </div>\n        <div class=\"col-md-4\">\n            <div class=\"recomendaciones\">\n                <h3>Recommendation Playlists</h3>\n                <!-- Blog Categories Well -->\n                <div class=\"well\">\n                    <h4>Top Playlists</h4>\n                    <div class=\"row\">\n                        <ul class=\"list-unstyled\" style=\"margin-left:15px\">\n                       \n                           <li *ngFor=\"let p of topPlaylists\"><a [routerLink]=\"['/playlist', p.id_playlist]\"> {{p.title}}</a></li>\n                    \n                        </ul>\n                    </div>\n                    <!-- /.row -->\n                </div>\n    \t\t</div>\n    \t</div>"

/***/ }),

/***/ 273:
/***/ (function(module, exports) {

module.exports = "<MyNavbar></MyNavbar>\n<div class=\"container\">\n        <div class=\"row\">\n            <!-- Blog Entries Column -->\n            <div class=\"col-md-8\">\n                <h1 class=\"page-header\">\n                    Searched by:\n                    <small>{{key}}</small>\n                </h1> <img class=\"img-responsive\" src=\"../assets/img/cascos.jpg\" alt=\"\">\n                <hr>\n                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, veritatis, tempora, necessitatibus inventore nisi quam quia repellat ut tempore laborum possimus eum dicta id animi corrupti debitis ipsum officiis rerum.</p>\n                <hr> </div>\n            <div class=\"col-md-4\">\n                <!-- Blog Categories Well -->\n                <div class=\"well\">\n                    <h4>Top Playlists</h4>\n                    <div class=\"row\">\n                        <ul class=\"list-unstyled\" style=\"margin-left:15px\">\n                       \n                           <li *ngFor=\"let playlist of topPlaylists\"><a [routerLink]=\"['/playlist', playlist.id_playlist]\"> {{playlist.title}}</a> </li>\n                    \n                        </ul>\n                    </div>\n                    <!-- /.row -->\n                </div>\n                <!-- Side Widget Well -->\n                <div class=\"well\">\n                    <h4>Top Artists</h4>\n                    <div class=\"row\">\n                        <ul class=\"list-unstyled\" style=\"margin-left:15px\">\n                       \n                           <li *ngFor=\"let artist of topArtists\"><a [routerLink]=\"['/artist', artist.id_artist]\">  {{artist.name}} </a></li>\n                    \n                        </ul>\n                    </div>\n                    <!-- /.row -->\n                </div>\n                <div class=\"well\">\n                    <h4>Top Tags</h4>\n                    <div class=\"row\">\n                       <ul class=\"list-unstyled\" style=\"margin-left:15px\">\n                       \n                           <li *ngFor=\"let tag of topTags\"> <a [routerLink]=\"['/search', tag.name]\" class=\"tag\">{{tag.name}} </a></li>\n                    \n                        </ul>\n                    </div>\n                    <!-- /.row -->\n                </div>\n            </div>\n        </div>\n        <td>\n            <h3><b>Results</b></h3></td>\n            <div class=\"row wall\" *ngIf=\"userByName\">\n                <a [routerLink]=\"['/user-playlist', userByName.id_user]\">{{userByName.name}}</a>\n            </div>\n       <div class=\"row wall\" *ngIf=\"tagPlaylists!=undefined || titlePlaylists!=undefined\">\n             \n             <div class=\"col-md-6\" *ngFor=\"let playlist of tagPlaylists\">\n                 <table id=\"table\">\n                    <tr>\n                         <th><a [routerLink]=\"['/playlist', playlist.id_playlist]\">{{playlist.title}} </a><span class=\"posted\">Posted by  \n        \t\n                    \t\t<a [routerLink]=\"['/user-playlist', playlist.creatorId]\">{{playlist.creatorName}}</a></span> </th>\n                    </tr>\n                    <tr style=\"height:200px;\">\n                        <th><img class=\"img-responsive\" src=\"../assets/img/playlist.png\"></th>\n                        <th>\n                            <ul>\n                                <p><span class=\"glyphicon glyphicon-time\"></span> Posted on date {{playlist.date}}</p>\n                                <hr>\n                                <p><span class=\"glyphicon glyphicon-thumbs-up\"></span> {{playlist.nLikes}} <span class=\"glyphicon glyphicon-list\"></span> {{playlist.nTracks}}</p>\n                                <p><a *ngFor=\"let tag of playlist.tagsOfPlaylist\" class=\"tag\" title=\"tag\"  [routerLink]=\"['/search', tag.name]\">{{tag.name}}</a></p>\n                                <p style=\"text-align:right\"><a class=\"opcion_playlist\"></a> </p>\n                            </ul>\n                        </th>\n                    </tr>\n                </table>\n            </div>\n         \n\n          \n             <div class=\"col-md-6\" *ngFor=\"let playlist of titlePlaylists\">\n                 <table>\n                    <tr>\n                         <th><a [routerLink]=\"['/playlist', playlist.id_playlist]\">{{playlist.title}} </a><span class=\"posted\">Posted by  \n        \t\n                    \t\t<a href=\"UserPlaylists/{{creatorId}}\">{{playlist.creatorName}}</a></span> </th>\n                    </tr>\n                    <tr style=\"height:200px;\">\n                        <th><img class=\"img-responsive\" src=\"img/playlist.png\"></th>\n                        <th>\n                            <ul>\n                                <p><span class=\"glyphicon glyphicon-time\"></span> Posted on date {{playlist.date}}</p>\n                                <hr>\n                                <p><span class=\"glyphicon glyphicon-thumbs-up\"></span> {{playlist.nLikes}} <span class=\"glyphicon glyphicon-list\"></span> {{playlist.nTracks}}</p>\n                                <p><a *ngFor=\"let tag of playlist.tagsOfPlaylist\" class=\"tag\" title=\"tag\" href=\"/SearchPlaylist/{{name}}\">{{tag.name}}</a></p>\n                                <p style=\"text-align:right\"><a class=\"opcion_playlist\"></a> </p>\n                            </ul>\n                        </th>\n                    </tr>\n                </table>\n            </div>\n           \n        </div>\n"

/***/ }),

/***/ 274:
/***/ (function(module, exports) {

module.exports = "\n    <header style=\"text-align:center; margin-bottom:2em;\">\n            <!--Mensaje de bienvenida a la pagina -->\n            <h1>Welcome to  <a [routerLink]=\"['/new']\">Musine <img src=\"../assets/img/musine.png\" width=\"60\" height=\"55\" style=\"color: aqua;\"></a></h1>\n            <!--Invitacion a iniciar sesion con otras redes sociales -->\n<!--             <nav class=\"codrops-demos\"> <span>You can also <strong>\"log in\"</strong> with</span> <a href=\"facebook.html\" id=\"btnFacebook\" class=\"current-demo\">Facebook</a> <a href=\"google.html\" id=\"btnFacebook\">Google</a> </nav> -->\n        </header>\n    <!--Contenedor de toda la pagina -->\n    <div class=\"container\">\n        <!-- Codrops top bar -->\n        <section>\n            <div id=\"container_demo\">\n                <!--Seccion que permite hacer el cambio entre log in y sing up -->\n                <div id=\"wrapper\">\n                    <div id=\"login\" class=\"animate form\" style=\"margin-top: 2em;background-color: #18BC9C;\">\n                        <!--Formulario que venia por defecto en la plantilla, al cual se le cambiaron aspectos textuales -->\n                            <h1> Register </h1>\n                            <p>\n                                <label for=\"usernamesignup\" class=\"uname\">User</label>\n                                <input #username id=\"usernamesignup\" name=\"username\" required=\"required\" type=\"text\" placeholder=\"Username\" /> </p>\n                            <p>\n                                <label for=\"emailsignup\" class=\"youmail\"> Email</label>\n                                <input #email id=\"emailsignup\" name=\"email\" required=\"required\" type=\"email\" placeholder=\"Email\" /> </p>\n                            <p>\n                                <label for=\"passwordsignup\" class=\"youpasswd\">Password </label>\n                                <input #password id=\"passwordsignup\" name=\"password\" required=\"required\" type=\"password\" placeholder=\"************\" /> </p>\n                            <p class=\"signin button\">\n                                <button (click)=\"signIn($event,username.value,email.value,password.value)\" type=\"button\">Sign in</button> </p>\n                            <p class=\"change_link\"> Already a member? <a [routerLink]=\"['/login']\" class=\"to_register\">Log in</a> </p>\n                    </div>\n                </div>\n            </div>\n        </section>\n    </div>"

/***/ }),

/***/ 275:
/***/ (function(module, exports) {

module.exports = "<MyNavbar></MyNavbar>\n<div *ngIf=\"user\" class=\"jumbotron\" style=\"background-color:grey;\">\n        <div class=\"container\">\n            <div class=\"col-md-3\" id=\"name-jumbotron\">\n                <p>{{user.name}}\n                     <button *ngIf=\"userLogged && followed\" (click)=\"removeFollow(user.id_user)\" type=\"submit\" class=\"btn btn-success follow-btn\">Following<span class=\"glyphicon glyphicon-ok\"></span> </button>\n                     <button *ngIf=\"userLogged && !followed\" (click)=\"addFollow(user.id_user)\" type=\"submit\" class=\"btn btn-danger follow-btn\">Not Following</button>\n                </p>\n                <p><img class=\"img-responsive\" id=\"userlogo\" src=\"/api/image/{{user.profileImage}}\" width=\"60\" height=\"55\"> </p>\n            </div>\n            <div class=\"col-md-3\" id=\"description\">\n                <p>{{playlists?.length}}</p>\n                <p>Created playlist</p>\n            </div>\n          <div class=\"col-md-3\" id=\"description\">\n                <a>\n                    <button type=\"button\" (click)=\"goToFollowers(user.id_user)\" class=\"btn btn-primary btn-lg\" id=\"cajas\">{{user.followers.length}}</button>\n                </a>\n                <p>Followers</p>\n            </div>\n            <div class=\"col-md-3\" id=\"description\">\n                <a>\n                    <button type=\"button\" (click)=\"goToFollowing(user.id_user)\" class=\"btn btn-primary btn-lg\" id=\"cajas\">{{user.following.length}}</button>\n                </a>\n                <p>Following</p>\n            </div>\n        </div>\n    </div>\n    <nav class=\"navbar navbar-default\" *ngIf=\"user\">\n        <div class=\"col-md-4 utent_button\">\n            <a [routerLink]=\"['/user-playlist', user.id_user]\">\n                <button type=\"button\" class=\"btn btn-default btn-lg\"><span class=\"glyphicon glyphicon-cd\"></span> PLAYLISTS</button>\n            </a>\n        </div>\n        <div class=\"col-md-4 utent_button\">\n            <a [routerLink]=\"['/user-likes', user.id_user]\"> \n                <button type=\"button\" class=\"btn btn-default btn-lg\"><span class=\"glyphicon glyphicon-thumbs-up\"></span> LIKES</button>\n            </a>\n        </div>\n        <div class=\"col-md-4 utent_button\">\n            <a [routerLink]=\"['/user-favorites', user.id_user]\">\n                <button type=\"button\" class=\"btn btn-default btn-lg active\"><span class=\"glyphicon glyphicon glyphicon-star-empty\"></span> FAVORITE TRACKS</button>\n            </a>\n        </div>\n    </nav>\n    <div class=\"container\">\n        <div class=\"well\">\n            <div class=\"text-center\"> <span>List tracks</span> </div>\n            <hr>\n           <div class=\"row\" id=\"pag\" *ngIf=\"songs\">\n                <div *ngFor=\"let song of songs\"><span>Title: </span>{{song.title}} <a href=\"{{song.link_youtube}}\" class=\"pull-right\"><i class=\"fa fa-play-circle-o\"></i>Link Youtube </a>\n                            <p><span>Artist: <a *ngFor=\"let artist of song.artistsOfSong\" [routerLink]=\"['/artist', artist.id_artist]\"> {{artist?.name}}</a></span></p>\n                        </div>\n            \n            </div>\n            \n    \n\t\n            \n        </div>\n    </div>\n"

/***/ }),

/***/ 276:
/***/ (function(module, exports) {

module.exports = "<MyNavbar></MyNavbar>\n<div *ngIf=\"user\" class=\"jumbotron\" style=\"background-color:grey;\">\n        <div class=\"container\">\n            <div class=\"col-md-4\" id=\"name-jumbotron\">\n                <p>{{user.name}}\n                    <button *ngIf=\"userLogged && followed\" (click)=\"removeFollow(user.id_user)\" type=\"submit\" class=\"btn btn-success follow-btn\">Following<span class=\"glyphicon glyphicon-ok\"></span> </button>\n                     <button *ngIf=\"userLogged && !followed\" (click)=\"addFollow(user.id_user)\" type=\"submit\" class=\"btn btn-danger follow-btn\">Not Following</button>\n                </p>\n                <p><img class=\"img-responsive\" id=\"userlogo\" src=\"/api/image/{{user.profileImage}}\" width=\"60\" height=\"55\"> </p>\n            </div>\n          <div class=\"col-md-4\" id=\"description\">\n                <a>\n                    <button type=\"button\" (click)=\"goToFollowers(user.id_user)\" class=\"btn btn-primary btn-lg\" id=\"cajas\">{{user.followers.length}}</button>\n                </a>\n                <p>Followers</p>\n            </div>\n            <div class=\"col-md-4\" id=\"description\">\n                <a>\n                    <button type=\"button\" (click)=\"goToFollowing(user.id_user)\" class=\"btn btn-primary btn-lg\" id=\"cajas\">{{user.following.length}}</button>\n                </a>\n                <p>Following</p>\n            </div>\n        </div>\n    </div>\n\n<div class=\"row\">\n        <div class=\"col-md-12 follow\">\n            <p>He is following by</p>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-6 follow\" id=\"pag\" *ngFor=\"let follower of followers\">\n            <div><img src=\"/api/image/{{follower.profileImage}}\" width=\"200\" height=\"200\" class=\"img-circle\" /> \n            <a *ngIf=\"!user || follower.id_user!==user.id_user\" [routerLink]=\"['/user-playlist', follower.id_user]\"><span>{{follower.name}}</span></a>\n            <a *ngIf=\"user && follower.id_user===user.id_user\" [routerLink]=\"['/my-playlists', follower.id_user]\"><span>{{follower.name}}</span></a>\n            </div>\n       </div>\n    </div>\n\t\n    <hr>\n   <div *ngIf=\"user\" class=\"row save-return\">\n        <div class=\"col-md-12\" style=\"text-align:right\">\n            <a [routerLink]=\"['/user-playlist', user.id_user]\">\n                <button type=\"button\" class=\"btn btn-danger\">Return</button>\n            </a>\n        </div>\n    </div>"

/***/ }),

/***/ 277:
/***/ (function(module, exports) {

module.exports = "<MyNavbar></MyNavbar>\n<div *ngIf=\"user\" class=\"jumbotron\" style=\"background-color:grey;\">\n        <div class=\"container\">\n            <div class=\"col-md-4\" id=\"name-jumbotron\">\n                <p>{{user.name}}\n                    <button *ngIf=\"userLogged && followed\" (click)=\"removeFollow(user.id_user)\" type=\"submit\" class=\"btn btn-success follow-btn\">Following<span class=\"glyphicon glyphicon-ok\"></span> </button>\n                     <button *ngIf=\"userLogged && !followed\" (click)=\"addFollow(user.id_user)\" type=\"submit\" class=\"btn btn-danger follow-btn\">Not Following</button>\n                </p>\n                <p><img class=\"img-responsive\" id=\"userlogo\" src=\"/api/image/{{user.profileImage}}\" width=\"60\" height=\"55\"> </p>\n            </div>\n          <div class=\"col-md-4\" id=\"description\">\n                <a>\n                    <button type=\"button\" (click)=\"goToFollowers(user.id_user)\" class=\"btn btn-primary btn-lg\" id=\"cajas\">{{user.followers.length}}</button>\n                </a>\n                <p>Followers</p>\n            </div>\n            <div class=\"col-md-4\" id=\"description\">\n                <a>\n                    <button type=\"button\" (click)=\"goToFollowing(user.id_user)\" class=\"btn btn-primary btn-lg\" id=\"cajas\">{{user.following.length}}</button>\n                </a>\n                <p>Following</p>\n            </div>\n        </div>\n    </div>\n\n<div class=\"row\">\n        <div class=\"col-md-12 follow\">\n            <p>He is following</p>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-md-6 follow\" id=\"pag\" *ngFor=\"let follow of following\">\n            <div><img src=\"/api/image/{{follow.profileImage}}\" width=\"200\" height=\"200\" class=\"img-circle\" /> \n            <a *ngIf=\"!user || follow.id_user!==user.id_user\" [routerLink]=\"['/user-playlist', follow.id_user]\"><span>{{follow.name}}</span></a>\n            <a *ngIf=\"user && follow.id_user===user.id_user\" [routerLink]=\"['/my-playlists', follow.id_user]\"><span>{{follow.name}}</span></a>\n            </div>\n       </div>\n    </div>\n\t\n    <hr>\n   <div *ngIf=\"user\" class=\"row save-return\">\n        <div class=\"col-md-12\" style=\"text-align:right\">\n            <a [routerLink]=\"['/user-playlist', user.id_user]\">\n                <button type=\"button\" class=\"btn btn-danger\">Return</button>\n            </a>\n        </div>\n    </div>"

/***/ }),

/***/ 278:
/***/ (function(module, exports) {

module.exports = "<MyNavbar></MyNavbar>\n<div *ngIf=\"user\" class=\"jumbotron\" style=\"background-color:grey;\">\n        <div class=\"container\">\n            <div class=\"col-md-3\" id=\"name-jumbotron\">\n                <p>{{user.name}}\n                     <button *ngIf=\"userLogged && followed\" (click)=\"removeFollow(user.id_user)\" type=\"submit\" class=\"btn btn-success follow-btn\">Following<span class=\"glyphicon glyphicon-ok\"></span> </button>\n                     <button *ngIf=\"userLogged && !followed\" (click)=\"addFollow(user.id_user)\" type=\"submit\" class=\"btn btn-danger follow-btn\">Not Following</button>\n                </p>\n                <p><img class=\"img-responsive\" id=\"userlogo\" src=\"/api/image/{{user.profileImage}}\" width=\"60\" height=\"55\"> </p>\n            </div>\n            <div class=\"col-md-3\" id=\"description\">\n                <p>{{playlists?.length}}</p>\n                <p>Created playlist</p>\n            </div>\n          <div class=\"col-md-3\" id=\"description\">\n                <a>\n                    <button type=\"button\" (click)=\"goToFollowers(user.id_user)\" class=\"btn btn-primary btn-lg\" id=\"cajas\">{{user.followers.length}}</button>\n                </a>\n                <p>Followers</p>\n            </div>\n            <div class=\"col-md-3\" id=\"description\">\n                <a>\n                    <button type=\"button\" (click)=\"goToFollowing(user.id_user)\" class=\"btn btn-primary btn-lg\" id=\"cajas\">{{user.following.length}}</button>\n                </a>\n                <p>Following</p>\n            </div>\n        </div>\n    </div>\n    <nav class=\"navbar navbar-default\" *ngIf=\"user\">\n        <div class=\"col-md-4 utent_button\">\n            <a [routerLink]=\"['/user-playlist', user.id_user]\">\n                <button type=\"button\" class=\"btn btn-default btn-lg\"><span class=\"glyphicon glyphicon-cd\"></span> PLAYLISTS</button>\n            </a>\n        </div>\n        <div class=\"col-md-4 utent_button\">\n            <a [routerLink]=\"['/user-likes', user.id_user]\"> \n                <button type=\"button\" class=\"btn btn-default btn-lg active\"><span class=\"glyphicon glyphicon-thumbs-up\"></span> LIKES</button>\n            </a>\n        </div>\n        <div class=\"col-md-4 utent_button\">\n            <a [routerLink]=\"['/user-favorites', user.id_user]\">\n                <button type=\"button\" class=\"btn btn-default btn-lg\"><span class=\"glyphicon glyphicon glyphicon-star-empty\"></span> FAVORITE TRACKS</button>\n            </a>\n        </div>\n    </nav>\n\n    <!-- Page Content -->\n     <div class=\"container\">\n         <td>\n            <h3><b>Playlists</b></h3>\n        <div class=\"row wall\" *ngIf=\"playlists\">\n             <div class=\"col-md-6\" *ngFor=\"let playlist of playlists\">\n                 <table id=\"table\">\n                    <tr>\n                         <th><a [routerLink]=\"['/playlist', playlist.id_playlist]\">{{playlist.title}} </a><span class=\"posted\">Posted by  \n        \t\n                    \t\t<a [routerLink]=\"['/user-playlist', playlist.creatorId]\">{{playlist.creatorName}}</a></span> </th>\n                    </tr>\n                    <tr style=\"height:200px;\">\n                        <th><img class=\"img-responsive\" src=\"../assets/img/playlist.png\"></th>\n                        <th>\n                            <ul>\n                                <p><span class=\"glyphicon glyphicon-time\"></span> Posted on date {{playlist.date}}</p>\n                                <hr>\n                                <p><span class=\"glyphicon glyphicon-thumbs-up\"></span> {{playlist.nLikes}} <span class=\"glyphicon glyphicon-list\"></span> {{playlist.nTracks}}</p>\n                                <p><a *ngFor=\"let tag of playlist.tagsOfPlaylist\" class=\"tag\" title=\"tag\" [routerLink]=\"['/search', tag.name]\">{{tag.name}}</a></p>\n                                <p style=\"text-align:right\"><a class=\"opcion_playlist\"></a> </p>\n                            </ul>\n                        </th>\n                    </tr>\n                </table>\n            </div>\n            </div>\n     </div>"

/***/ }),

/***/ 279:
/***/ (function(module, exports) {

module.exports = "<MyNavbar></MyNavbar>\n<div *ngIf=\"user\" class=\"jumbotron\" style=\"background-color:grey;\">\n        <div class=\"container\">\n            <div class=\"col-md-3\" id=\"name-jumbotron\">\n                <p>{{user.name}}\n                     <button *ngIf=\"userLogged && followed\" (click)=\"removeFollow(user.id_user)\" type=\"submit\" class=\"btn btn-success follow-btn\">Following<span class=\"glyphicon glyphicon-ok\"></span> </button>\n                     <button *ngIf=\"userLogged && !followed\" (click)=\"addFollow(user.id_user)\" type=\"submit\" class=\"btn btn-danger follow-btn\">Not Following</button>\n                </p>\n                <p><img class=\"img-responsive\" id=\"userlogo\" src=\"/api/image/{{user.profileImage}}\" width=\"60\" height=\"55\"> </p>\n            </div>\n            <div class=\"col-md-3\" id=\"description\">\n                <p>{{playlists?.length}}</p>\n                <p>Created playlist</p>\n            </div>\n          <div class=\"col-md-3\" id=\"description\">\n                <a>\n                    <button type=\"button\" (click)=\"goToFollowers(user.id_user)\" class=\"btn btn-primary btn-lg\" id=\"cajas\">{{user.followers.length}}</button>\n                </a>\n                <p>Followers</p>\n            </div>\n            <div class=\"col-md-3\" id=\"description\">\n                <a>\n                    <button type=\"button\" (click)=\"goToFollowing(user.id_user)\" class=\"btn btn-primary btn-lg\" id=\"cajas\">{{user.following.length}}</button>\n                </a>\n                <p>Following</p>\n            </div>\n        </div>\n    </div>\n    <nav class=\"navbar navbar-default\" *ngIf=\"user\">\n        <div class=\"col-md-4 utent_button\">\n            <a [routerLink]=\"['/user-playlist', user.id_user]\">\n                <button type=\"button\" class=\"btn btn-default btn-lg active\"><span class=\"glyphicon glyphicon-cd\"></span> PLAYLISTS</button>\n            </a>\n        </div>\n        <div class=\"col-md-4 utent_button\">\n            <a [routerLink]=\"['/user-likes', user.id_user]\"> \n                <button type=\"button\" class=\"btn btn-default btn-lg\"><span class=\"glyphicon glyphicon-thumbs-up\"></span> LIKES</button>\n            </a>\n        </div>\n        <div class=\"col-md-4 utent_button\">\n            <a [routerLink]=\"['/user-favorites', user.id_user]\">\n                <button type=\"button\" class=\"btn btn-default btn-lg\"><span class=\"glyphicon glyphicon glyphicon-star-empty\"></span> FAVORITE TRACKS</button>\n            </a>\n        </div>\n    </nav>\n\n    <!-- Page Content -->\n     <div class=\"container\">\n         <td>\n            <h3><b>Playlists</b></h3>\n        <div class=\"row wall\" *ngIf=\"playlists\">\n             <div class=\"col-md-6\" *ngFor=\"let playlist of playlists\">\n                 <table id=\"table\">\n                    <tr>\n                         <th><a [routerLink]=\"['/playlist', playlist.id_playlist]\">{{playlist.title}} </a><span class=\"posted\">Posted by  \n        \t\n                    \t\t<a [routerLink]=\"['/user-playlist', playlist.creatorId]\">{{playlist.creatorName}}</a></span> </th>\n                    </tr>\n                    <tr style=\"height:200px;\">\n                        <th><img class=\"img-responsive\" src=\"../assets/img/playlist.png\"></th>\n                        <th>\n                            <ul>\n                                <p><span class=\"glyphicon glyphicon-time\"></span> Posted on date {{playlist.date}}</p>\n                                <hr>\n                                <p><span class=\"glyphicon glyphicon-thumbs-up\"></span> {{playlist.nLikes}} <span class=\"glyphicon glyphicon-list\"></span> {{playlist.nTracks}}</p>\n                                <p><a *ngFor=\"let tag of playlist.tagsOfPlaylist\" class=\"tag\" title=\"tag\" [routerLink]=\"['/search', tag.name]\">{{tag.name}}</a></p>\n                                <p style=\"text-align:right\"><a class=\"opcion_playlist\"></a> </p>\n                            </ul>\n                        </th>\n                    </tr>\n                </table>\n            </div>\n            </div>\n     </div>"

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "/*navbar default buttons*/\n\n.navbar-default {\n    margin-bottom: 0;\n    padding: 0px;\n}\n\n.btn-default.active {\n    width: 100%;\n    border-style: outset;\n}\n\n.btn-default {\n    width: 100%;\n    border-style: outset;\n}\n\n.utent_button {\n    margin: 0;\n    padding-left: 0;\n    padding-right: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdminService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AdminService = (function () {
    function AdminService(http) {
        this.http = http;
    }
    ;
    AdminService.prototype.getAllArtists = function () {
        var _this = this;
        //let url="http://localhost:4200/api/AdminArtists";
        var url = "https://localhost:8443/api/AdminArtists";
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true });
        return this.http.get(url, options).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    AdminService.prototype.createArtist = function (artist) {
        var _this = this;
        //let url="http://localhost:4200/api/AdminCreateArtist";
        var url = "https://localhost:8443/api/AdminCreateArtist";
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true });
        return this.http.post(url, artist, options).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    AdminService.prototype.editTagArtist = function (name, tagToRemove, tagToAdd) {
        var _this = this;
        var params = "?";
        if (tagToRemove !== "") {
            params = params + "tagToRemove=" + tagToRemove;
        }
        if (tagToAdd !== "") {
            params = params + "tagToAdd=" + tagToAdd;
        }
        //let url="http://localhost:4200/api/AdminEditArtist/"+name+params;
        var url = "https://localhost:8443/api/AdminEditArtist/" + name + params;
        console.log(url);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true });
        return this.http.put(url, options).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    AdminService.prototype.editArtist = function (name, newName, newCountry) {
        var _this = this;
        var params = "?newName=" + newName + "&country=" + newCountry;
        //let url="http://localhost:4200/api/AdminEditArtist/"+name+params;
        var url = "https://localhost:8443/api/AdminEditArtist/" + name + params;
        console.log(url);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true });
        return this.http.put(url, options).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    AdminService.prototype.editSong = function (id_song, title, link) {
        var _this = this;
        var params = "?title=" + title + "&link_youtube=" + link;
        //let url="http://localhost:4200/api/AdminEditSong/"+id_song+params;
        var url = "https://localhost:8443/api/AdminEditSong/" + id_song + params;
        console.log(url);
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true });
        return this.http.put(url, options).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    AdminService.prototype.editArtistSong = function (id_song, artistToRemove, artistToAdd) {
        var _this = this;
        var params = "?";
        var url;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true });
        if (artistToRemove !== "") {
            params = params + "nameArtist=" + artistToRemove;
            //url="http://localhost:4200/api/AdminRemoveArtistBySong/"+id_song+params;
            url = "https://localhost:8443/api/AdminRemoveArtistBySong/" + id_song + params;
            return this.http.delete(url, options).map(function (response) { return response.json(); })
                .catch(function (error) { return _this.handleError(error); });
        }
        if (artistToAdd !== "") {
            params = params + "nameArtist=" + artistToAdd;
            //url="http://localhost:4200/api/AdminAddArtistInSong/"+id_song+params;
            url = "https://localhost:8443/api/AdminAddArtistInSong/" + id_song + params;
            return this.http.post(url, options).map(function (response) { return response.json(); })
                .catch(function (error) { return _this.handleError(error); });
        }
        console.log(url);
    };
    AdminService.prototype.createSong = function (id_artist, song) {
        var _this = this;
        //let url="http://localhost:4200/api/AdminCreateSongOfArtist/"+id_artist;
        var url = "https://localhost:8443/api/AdminCreateSongOfArtist/" + id_artist;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true });
        return this.http.post(url, song, options).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    AdminService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Server error (' + error.status + '): ' + error.text);
    };
    return AdminService;
}());
AdminService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], AdminService);

var _a;
//# sourceMappingURL=admin.service.js.map

/***/ }),

/***/ 43:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SongService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SongService = (function () {
    function SongService(http) {
        this.http = http;
    }
    ;
    SongService.prototype.getSong = function (id_song) {
        var _this = this;
        //let url="http://localhost:4200/api/Song/"+id_song;
        var url = "https://localhost:8443/api/Song/" + id_song;
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true });
        return this.http.get(url, options).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    SongService.prototype.addFavorite = function (id_song) {
        var _this = this;
        //let url="http://localhost:4200/api/Song/AddFavorite?id="+id_song;
        var url = "https://localhost:8443/api/Song/AddFavorite?id=" + id_song;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({
            'Content-Type': 'application/json',
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.post(url, options).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    SongService.prototype.removeFavorite = function (id_song) {
        var _this = this;
        //let url="http://localhost:4200/api/Song/DeleteFavorite?id="+id_song;
        var url = "https://localhost:8443/api/Song/DeleteFavorite?id=" + id_song;
        console.log(url);
        return this.http.delete(url).map(function (response) { return response.json(); })
            .catch(function (error) { return _this.handleError(error); });
    };
    SongService.prototype.isFavoriteByUser = function (id_song) {
        var _this = this;
        //let url="http://localhost:4200/api/Song/isFavoritedByUser?idSong="+id_song;
        var url = "https://localhost:8443/api/Song/isFavoritedByUser?idSong=" + id_song;
        console.log(url);
        return this.http.get(url).map(function (response) { })
            .catch(function (error) { return _this.handleError(error); });
    };
    SongService.prototype.handleError = function (error) {
        console.error(error);
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].throw('Server error (' + error.status + '): ' + error.text);
    };
    return SongService;
}());
SongService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object])
], SongService);

var _a;
//# sourceMappingURL=song.service.js.map

/***/ }),

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(187);


/***/ }),

/***/ 6:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//const URL = '/api';
var URL = 'https://localhost:8443/api';
var LoginService = (function () {
    function LoginService(http, router) {
        this.http = http;
        this.router = router;
        this.isLogged = false;
        this.isAdmin = false;
        //this.reqIsLogged();
    }
    LoginService.prototype.reqIsLogged = function () {
        var _this = this;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({
            'X-Requested-With': 'XMLHttpRequest',
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true });
        this.http.get(URL + '/logIn', options).subscribe(function (response) { return _this.processLogInResponse(response); }, function (error) {
            if (error.status !== 401) {
                console.error('Error when asking if logged: ' +
                    JSON.stringify(error));
            }
        });
    };
    LoginService.prototype.processLogInResponse = function (response) {
        this.isLogged = true;
        this.user = response.json();
        this.isAdmin = this.user.roles.indexOf('ROLE_ADMIN') !== -1;
    };
    LoginService.prototype.logIn = function (user, pass) {
        var _this = this;
        var userPass = user + ':' + pass;
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Headers */]({
            //'Access-Control-Allow-Origin': '*',
            'Authorization': 'Basic ' + utf8_to_b64(userPass),
            'X-Requested-With': 'XMLHttpRequest'
        });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* RequestOptions */]({ withCredentials: true, headers: headers });
        return this.http.get(URL + '/logIn', options).map(function (response) {
            _this.processLogInResponse(response);
            return _this.user;
        });
    };
    LoginService.prototype.logOut = function () {
        var _this = this;
        //this.reqIsLogged();
        //return this.http.get('https://localhost:8443/api' + '/logOut', { withCredentials: true}).map(
        return this.http.get(URL + '/logOut', { withCredentials: true }).map(function (response) {
            _this.isLogged = false;
            _this.isAdmin = false;
            _this.user = null;
            return response;
        });
    };
    return LoginService;
}());
LoginService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _b || Object])
], LoginService);

function utf8_to_b64(str) {
    return btoa(encodeURIComponent(str).replace(/%([0-9A-F]{2})/g, function (match, p1) {
        return String.fromCharCode('0x' + p1);
    }));
}
var _a, _b;
//# sourceMappingURL=login.service.js.map

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "glyphicons-halflings-regular.f4769f9bdb7466be6508.eot";

/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "/*\nAnimate.css - http://daneden.me/animate\nLICENSED UNDER THE  MIT LICENSE (MIT)\n\nCopyright (c) 2011 Dan Eden\n\nPermission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the \"Software\"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \"AS IS\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.\n*/\n\n.animated {\n\t-webkit-animation-fill-mode: both;\n\tanimation-fill-mode: both;\n\t-webkit-animation-duration: 1s;\n\tanimation-duration: 1s;\n}\n\n.animated.hinge {\n\t-webkit-animation-duration: 2s;\n\tanimation-duration: 2s;\n}\n\n@-webkit-keyframes flash {\n\t0%, 50%, 100% {opacity: 1;}\t\n\t25%, 75% {opacity: 0;}\n}\n\n@keyframes flash {\n\t0%, 50%, 100% {opacity: 1;}\t\n\t25%, 75% {opacity: 0;}\n}\n\n.flash {\n\t-webkit-animation-name: flash;\n\tanimation-name: flash;\n}\n@-webkit-keyframes shake {\n\t0%, 100% {-webkit-transform: translateX(0);}\n\t10%, 30%, 50%, 70%, 90% {-webkit-transform: translateX(-10px);}\n\t20%, 40%, 60%, 80% {-webkit-transform: translateX(10px);}\n}\n\n@keyframes shake {\n\t0%, 100% {-webkit-transform: translateX(0);transform: translateX(0);}\n\t10%, 30%, 50%, 70%, 90% {-webkit-transform: translateX(-10px);transform: translateX(-10px);}\n\t20%, 40%, 60%, 80% {-webkit-transform: translateX(10px);transform: translateX(10px);}\n}\n\n.shake {\n\t-webkit-animation-name: shake;\n\tanimation-name: shake;\n}\n@-webkit-keyframes bounce {\n\t0%, 20%, 50%, 80%, 100% {-webkit-transform: translateY(0);}\n\t40% {-webkit-transform: translateY(-30px);}\n\t60% {-webkit-transform: translateY(-15px);}\n}\n@keyframes bounce {\n\t0%, 20%, 50%, 80%, 100% {-webkit-transform: translateY(0);transform: translateY(0);}\n\t40% {-webkit-transform: translateY(-30px);transform: translateY(-30px);}\n\t60% {-webkit-transform: translateY(-15px);transform: translateY(-15px);}\n}\n\n.bounce {\n\t-webkit-animation-name: bounce;\n\tanimation-name: bounce;\n}\n@-webkit-keyframes tada {\n\t0% {-webkit-transform: scale(1);}\t\n\t10%, 20% {-webkit-transform: scale(0.9) rotate(-3deg);}\n\t30%, 50%, 70%, 90% {-webkit-transform: scale(1.1) rotate(3deg);}\n\t40%, 60%, 80% {-webkit-transform: scale(1.1) rotate(-3deg);}\n\t100% {-webkit-transform: scale(1) rotate(0);}\n}\n\n@keyframes tada {\n\t0% {-webkit-transform: scale(1);transform: scale(1);}\t\n\t10%, 20% {-webkit-transform: scale(0.9) rotate(-3deg);transform: scale(0.9) rotate(-3deg);}\n\t30%, 50%, 70%, 90% {-webkit-transform: scale(1.1) rotate(3deg);transform: scale(1.1) rotate(3deg);}\n\t40%, 60%, 80% {-webkit-transform: scale(1.1) rotate(-3deg);transform: scale(1.1) rotate(-3deg);}\n\t100% {-webkit-transform: scale(1) rotate(0);transform: scale(1) rotate(0);}\n}\n\n.tada {\n\t-webkit-animation-name: tada;\n\tanimation-name: tada;\n}\n@-webkit-keyframes swing {\n\t20%, 40%, 60%, 80%, 100% { -webkit-transform-origin: top center; }\n\t20% { -webkit-transform: rotate(15deg); }\t\n\t40% { -webkit-transform: rotate(-10deg); }\n\t60% { -webkit-transform: rotate(5deg); }\t\n\t80% { -webkit-transform: rotate(-5deg); }\t\n\t100% { -webkit-transform: rotate(0deg); }\n}\n\n@keyframes swing {\n\t20% { -webkit-transform: rotate(15deg); transform: rotate(15deg); }\t\n\t40% { -webkit-transform: rotate(-10deg); transform: rotate(-10deg); }\n\t60% { -webkit-transform: rotate(5deg); transform: rotate(5deg); }\t\n\t80% { -webkit-transform: rotate(-5deg); transform: rotate(-5deg); }\t\n\t100% { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\n}\n\n.swing {\n\t-webkit-transform-origin: top center;\n\ttransform-origin: top center;\n\t-webkit-animation-name: swing;\n\tanimation-name: swing;\n}\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes wobble {\n  0% { -webkit-transform: translateX(0%); }\n  15% { -webkit-transform: translateX(-25%) rotate(-5deg); }\n  30% { -webkit-transform: translateX(20%) rotate(3deg); }\n  45% { -webkit-transform: translateX(-15%) rotate(-3deg); }\n  60% { -webkit-transform: translateX(10%) rotate(2deg); }\n  75% { -webkit-transform: translateX(-5%) rotate(-1deg); }\n  100% { -webkit-transform: translateX(0%); }\n}\n\n@keyframes wobble {\n  0% { -webkit-transform: translateX(0%); transform: translateX(0%); }\n  15% { -webkit-transform: translateX(-25%) rotate(-5deg); transform: translateX(-25%) rotate(-5deg); }\n  30% { -webkit-transform: translateX(20%) rotate(3deg); transform: translateX(20%) rotate(3deg); }\n  45% { -webkit-transform: translateX(-15%) rotate(-3deg); transform: translateX(-15%) rotate(-3deg); }\n  60% { -webkit-transform: translateX(10%) rotate(2deg); transform: translateX(10%) rotate(2deg); }\n  75% { -webkit-transform: translateX(-5%) rotate(-1deg); transform: translateX(-5%) rotate(-1deg); }\n  100% { -webkit-transform: translateX(0%); transform: translateX(0%); }\n}\n\n.wobble {\n\t-webkit-animation-name: wobble;\n\tanimation-name: wobble;\n}\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes pulse {\n    0% { -webkit-transform: scale(1); }\t\n\t50% { -webkit-transform: scale(1.1); }\n    100% { -webkit-transform: scale(1); }\n}\n@keyframes pulse {\n    0% { -webkit-transform: scale(1); transform: scale(1); }\t\n\t50% { -webkit-transform: scale(1.1); transform: scale(1.1); }\n    100% { -webkit-transform: scale(1); transform: scale(1); }\n}\n\n.pulse {\n\t-webkit-animation-name: pulse;\n\tanimation-name: pulse;\n}\n@-webkit-keyframes flip {\n\t0% {\n\t\t-webkit-transform: perspective(400px) rotateY(0);\n\t\t-webkit-animation-timing-function: ease-out;\n\t}\n\t40% {\n\t\t-webkit-transform: perspective(400px) translateZ(150px) rotateY(170deg);\n\t\t-webkit-animation-timing-function: ease-out;\n\t}\n\t50% {\n\t\t-webkit-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);\n\t\t-webkit-animation-timing-function: ease-in;\n\t}\n\t80% {\n\t\t-webkit-transform: perspective(400px) rotateY(360deg) scale(.95);\n\t\t-webkit-animation-timing-function: ease-in;\n\t}\n\t100% {\n\t\t-webkit-transform: perspective(400px) scale(1);\n\t\t-webkit-animation-timing-function: ease-in;\n\t}\n}\n@keyframes flip {\n\t0% {\n\t\t-webkit-transform: perspective(400px) rotateY(0);\n\t\t        transform: perspective(400px) rotateY(0);\n\t\t-webkit-animation-timing-function: ease-out;\n\t\t        animation-timing-function: ease-out;\n\t}\n\t40% {\n\t\t-webkit-transform: perspective(400px) translateZ(150px) rotateY(170deg);\n\t\t        transform: perspective(400px) translateZ(150px) rotateY(170deg);\n\t\t-webkit-animation-timing-function: ease-out;\n\t\t        animation-timing-function: ease-out;\n\t}\n\t50% {\n\t\t-webkit-transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);\n\t\t        transform: perspective(400px) translateZ(150px) rotateY(190deg) scale(1);\n\t\t-webkit-animation-timing-function: ease-in;\n\t\t        animation-timing-function: ease-in;\n\t}\n\t80% {\n\t\t-webkit-transform: perspective(400px) rotateY(360deg) scale(.95);\n\t\t        transform: perspective(400px) rotateY(360deg) scale(.95);\n\t\t-webkit-animation-timing-function: ease-in;\n\t\t        animation-timing-function: ease-in;\n\t}\n\t100% {\n\t\t-webkit-transform: perspective(400px) scale(1);\n\t\t        transform: perspective(400px) scale(1);\n\t\t-webkit-animation-timing-function: ease-in;\n\t\t        animation-timing-function: ease-in;\n\t}\n}\n\n.flip {\n\t-webkit-backface-visibility: visible !important;\n\t-webkit-animation-name: flip;\n\t-moz-backface-visibility: visible !important;\n\t-moz-animation-name: flip;\n\t-ms-backface-visibility: visible !important;\n\t-ms-animation-name: flip;\n\t-o-backface-visibility: visible !important;\n\t-o-animation-name: flip;\n\tbackface-visibility: visible !important;\n\tanimation-name: flip;\n}\n@-webkit-keyframes flipInX {\n    0% {\n        -webkit-transform: perspective(400px) rotateX(90deg);\n        opacity: 0;\n    }\n    \n    40% {\n        -webkit-transform: perspective(400px) rotateX(-10deg);\n    }\n    \n    70% {\n        -webkit-transform: perspective(400px) rotateX(10deg);\n    }\n    \n    100% {\n        -webkit-transform: perspective(400px) rotateX(0deg);\n        opacity: 1;\n    }\n}\n@keyframes flipInX {\n    0% {\n        -webkit-transform: perspective(400px) rotateX(90deg);\n                transform: perspective(400px) rotateX(90deg);\n        opacity: 0;\n    }\n    \n    40% {\n        -webkit-transform: perspective(400px) rotateX(-10deg);\n                transform: perspective(400px) rotateX(-10deg);\n    }\n    \n    70% {\n        -webkit-transform: perspective(400px) rotateX(10deg);\n                transform: perspective(400px) rotateX(10deg);\n    }\n    \n    100% {\n        -webkit-transform: perspective(400px) rotateX(0deg);\n                transform: perspective(400px) rotateX(0deg);\n        opacity: 1;\n    }\n}\n\n.flipInX {\n\t-webkit-backface-visibility: visible !important;\n\t-webkit-animation-name: flipInX;\n\t-moz-backface-visibility: visible !important;\n\t-moz-animation-name: flipInX;\n\t-ms-backface-visibility: visible !important;\n\t-ms-animation-name: flipInX;\n\t-o-backface-visibility: visible !important;\n\t-o-animation-name: flipInX;\n\tbackface-visibility: visible !important;\n\tanimation-name: flipInX;\n}\n@-webkit-keyframes flipOutX {\n    0% {\n        -webkit-transform: perspective(400px) rotateX(0deg);\n        opacity: 1;\n    }\n\t100% {\n        -webkit-transform: perspective(400px) rotateX(90deg);\n        opacity: 0;\n    }\n}\n\n@keyframes flipOutX {\n    0% {\n        -webkit-transform: perspective(400px) rotateX(0deg);\n                transform: perspective(400px) rotateX(0deg);\n        opacity: 1;\n    }\n\t100% {\n        -webkit-transform: perspective(400px) rotateX(90deg);\n                transform: perspective(400px) rotateX(90deg);\n        opacity: 0;\n    }\n}\n\n.flipOutX {\n\t-webkit-animation-name: flipOutX;\n\t-webkit-backface-visibility: visible !important;\n\t-moz-animation-name: flipOutX;\n\t-moz-backface-visibility: visible !important;\n\t-ms-animation-name: flipOutX;\n\t-ms-backface-visibility: visible !important;\n\t-o-animation-name: flipOutX;\n\t-o-backface-visibility: visible !important;\n\tanimation-name: flipOutX;\n\tbackface-visibility: visible !important;\n}\n@-webkit-keyframes flipInY {\n    0% {\n        -webkit-transform: perspective(400px) rotateY(90deg);\n        opacity: 0;\n    }\n    \n    40% {\n        -webkit-transform: perspective(400px) rotateY(-10deg);\n    }\n    \n    70% {\n        -webkit-transform: perspective(400px) rotateY(10deg);\n    }\n    \n    100% {\n        -webkit-transform: perspective(400px) rotateY(0deg);\n        opacity: 1;\n    }\n}\n@keyframes flipInY {\n    0% {\n        -webkit-transform: perspective(400px) rotateY(90deg);\n                transform: perspective(400px) rotateY(90deg);\n        opacity: 0;\n    }\n    \n    40% {\n        -webkit-transform: perspective(400px) rotateY(-10deg);\n                transform: perspective(400px) rotateY(-10deg);\n    }\n    \n    70% {\n        -webkit-transform: perspective(400px) rotateY(10deg);\n                transform: perspective(400px) rotateY(10deg);\n    }\n    \n    100% {\n        -webkit-transform: perspective(400px) rotateY(0deg);\n                transform: perspective(400px) rotateY(0deg);\n        opacity: 1;\n    }\n}\n\n.flipInY {\n\t-webkit-backface-visibility: visible !important;\n\t-webkit-animation-name: flipInY;\n\t-moz-backface-visibility: visible !important;\n\t-moz-animation-name: flipInY;\n\t-ms-backface-visibility: visible !important;\n\t-ms-animation-name: flipInY;\n\t-o-backface-visibility: visible !important;\n\t-o-animation-name: flipInY;\n\tbackface-visibility: visible !important;\n\tanimation-name: flipInY;\n}\n@-webkit-keyframes flipOutY {\n    0% {\n        -webkit-transform: perspective(400px) rotateY(0deg);\n        opacity: 1;\n    }\n\t100% {\n        -webkit-transform: perspective(400px) rotateY(90deg);\n        opacity: 0;\n    }\n}\n@keyframes flipOutY {\n    0% {\n        -webkit-transform: perspective(400px) rotateY(0deg);\n                transform: perspective(400px) rotateY(0deg);\n        opacity: 1;\n    }\n\t100% {\n        -webkit-transform: perspective(400px) rotateY(90deg);\n                transform: perspective(400px) rotateY(90deg);\n        opacity: 0;\n    }\n}\n\n.flipOutY {\n\t-webkit-backface-visibility: visible !important;\n\t-webkit-animation-name: flipOutY;\n\t-moz-backface-visibility: visible !important;\n\t-moz-animation-name: flipOutY;\n\t-ms-backface-visibility: visible !important;\n\t-ms-animation-name: flipOutY;\n\t-o-backface-visibility: visible !important;\n\t-o-animation-name: flipOutY;\n\tbackface-visibility: visible !important;\n\tanimation-name: flipOutY;\n}\n@-webkit-keyframes fadeIn {\n\t0% {opacity: 0;}\t\n\t100% {opacity: 1;}\n}\n\n@keyframes fadeIn {\n\t0% {opacity: 0;}\t\n\t100% {opacity: 1;}\n}\n\n.fadeIn {\n\t-webkit-animation-name: fadeIn;\n\tanimation-name: fadeIn;\n}\n@-webkit-keyframes fadeInUp {\n\t0% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateY(20px);\n\t}\n\t\n\t100% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateY(0);\n\t}\n}\n\n@keyframes fadeInUp {\n\t0% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateY(20px);\n\t\t        transform: translateY(20px);\n\t}\n\t\n\t100% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateY(0);\n\t\t        transform: translateY(0);\n\t}\n}\n\n.fadeInUp {\n\t-webkit-animation-name: fadeInUp;\n\tanimation-name: fadeInUp;\n}\n@-webkit-keyframes fadeInDown {\n\t0% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateY(-20px);\n\t}\n\t\n\t100% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateY(0);\n\t}\n}\n\n@keyframes fadeInDown {\n\t0% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateY(-20px);\n\t\t        transform: translateY(-20px);\n\t}\n\t\n\t100% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateY(0);\n\t\t        transform: translateY(0);\n\t}\n}\n\n.fadeInDown {\n\t-webkit-animation-name: fadeInDown;\n\tanimation-name: fadeInDown;\n}\n@-webkit-keyframes fadeInLeft {\n\t0% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateX(-20px);\n\t}\n\t\n\t100% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateX(0);\n\t}\n}\n\n@keyframes fadeInLeft {\n\t0% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateX(-20px);\n\t\t        transform: translateX(-20px);\n\t}\n\t\n\t100% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateX(0);\n\t\t        transform: translateX(0);\n\t}\n}\n\n.fadeInLeft {\n\t-webkit-animation-name: fadeInLeft;\n\tanimation-name: fadeInLeft;\n}\n@-webkit-keyframes fadeInRight {\n\t0% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateX(20px);\n\t}\n\t\n\t100% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateX(0);\n\t}\n}\n\n@keyframes fadeInRight {\n\t0% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateX(20px);\n\t\t        transform: translateX(20px);\n\t}\n\t\n\t100% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateX(0);\n\t\t        transform: translateX(0);\n\t}\n}\n\n.fadeInRight {\n\t-webkit-animation-name: fadeInRight;\n\tanimation-name: fadeInRight;\n}\n@-webkit-keyframes fadeInUpBig {\n\t0% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateY(2000px);\n\t}\n\t\n\t100% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateY(0);\n\t}\n}\n\n@keyframes fadeInUpBig {\n\t0% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateY(2000px);\n\t\t        transform: translateY(2000px);\n\t}\n\t\n\t100% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateY(0);\n\t\t        transform: translateY(0);\n\t}\n}\n\n.fadeInUpBig {\n\t-webkit-animation-name: fadeInUpBig;\n\tanimation-name: fadeInUpBig;\n}\n@-webkit-keyframes fadeInDownBig {\n\t0% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateY(-2000px);\n\t}\n\t\n\t100% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateY(0);\n\t}\n}\n\n@keyframes fadeInDownBig {\n\t0% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateY(-2000px);\n\t\t        transform: translateY(-2000px);\n\t}\n\t\n\t100% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateY(0);\n\t\t        transform: translateY(0);\n\t}\n}\n\n.fadeInDownBig {\n\t-webkit-animation-name: fadeInDownBig;\n\tanimation-name: fadeInDownBig;\n}\n@-webkit-keyframes fadeInLeftBig {\n\t0% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateX(-2000px);\n\t}\n\t\n\t100% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateX(0);\n\t}\n}\n@keyframes fadeInLeftBig {\n\t0% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateX(-2000px);\n\t\t        transform: translateX(-2000px);\n\t}\n\t\n\t100% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateX(0);\n\t\t        transform: translateX(0);\n\t}\n}\n\n.fadeInLeftBig {\n\t-webkit-animation-name: fadeInLeftBig;\n\tanimation-name: fadeInLeftBig;\n}\n@-webkit-keyframes fadeInRightBig {\n\t0% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateX(2000px);\n\t}\n\t\n\t100% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateX(0);\n\t}\n}\n\n@keyframes fadeInRightBig {\n\t0% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateX(2000px);\n\t\t        transform: translateX(2000px);\n\t}\n\t\n\t100% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateX(0);\n\t\t        transform: translateX(0);\n\t}\n}\n\n.fadeInRightBig {\n\t-webkit-animation-name: fadeInRightBig;\n\tanimation-name: fadeInRightBig;\n}\n@-webkit-keyframes fadeOut {\n\t0% {opacity: 1;}\n\t100% {opacity: 0;}\n}\n\n@keyframes fadeOut {\n\t0% {opacity: 1;}\n\t100% {opacity: 0;}\n}\n\n.fadeOut {\n\t-webkit-animation-name: fadeOut;\n\tanimation-name: fadeOut;\n}\n@-webkit-keyframes fadeOutUp {\n\t0% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateY(0);\n\t}\n\t\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateY(-20px);\n\t}\n}\n@keyframes fadeOutUp {\n\t0% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateY(0);\n\t\t        transform: translateY(0);\n\t}\n\t\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateY(-20px);\n\t\t        transform: translateY(-20px);\n\t}\n}\n\n.fadeOutUp {\n\t-webkit-animation-name: fadeOutUp;\n\tanimation-name: fadeOutUp;\n}\n@-webkit-keyframes fadeOutDown {\n\t0% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateY(0);\n\t}\n\t\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateY(20px);\n\t}\n}\n\n@keyframes fadeOutDown {\n\t0% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateY(0);\n\t\t        transform: translateY(0);\n\t}\n\t\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateY(20px);\n\t\t        transform: translateY(20px);\n\t}\n}\n\n.fadeOutDown {\n\t-webkit-animation-name: fadeOutDown;\n\tanimation-name: fadeOutDown;\n}\n@-webkit-keyframes fadeOutLeft {\n\t0% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateX(0);\n\t}\n\t\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateX(-20px);\n\t}\n}\n\n@keyframes fadeOutLeft {\n\t0% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateX(0);\n\t\t        transform: translateX(0);\n\t}\n\t\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateX(-20px);\n\t\t        transform: translateX(-20px);\n\t}\n}\n\n.fadeOutLeft {\n\t-webkit-animation-name: fadeOutLeft;\n\tanimation-name: fadeOutLeft;\n}\n@-webkit-keyframes fadeOutRight {\n\t0% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateX(0);\n\t}\n\t\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateX(20px);\n\t}\n}\n\n@keyframes fadeOutRight {\n\t0% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateX(0);\n\t\t        transform: translateX(0);\n\t}\n\t\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateX(20px);\n\t\t        transform: translateX(20px);\n\t}\n}\n\n.fadeOutRight {\n\t-webkit-animation-name: fadeOutRight;\n\tanimation-name: fadeOutRight;\n}\n@-webkit-keyframes fadeOutUpBig {\n\t0% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateY(0);\n\t}\n\t\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateY(-2000px);\n\t}\n}\n\n@keyframes fadeOutUpBig {\n\t0% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateY(0);\n\t\t        transform: translateY(0);\n\t}\n\t\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateY(-2000px);\n\t\t        transform: translateY(-2000px);\n\t}\n}\n\n.fadeOutUpBig {\n\t-webkit-animation-name: fadeOutUpBig;\n\tanimation-name: fadeOutUpBig;\n}\n@-webkit-keyframes fadeOutDownBig {\n\t0% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateY(0);\n\t}\n\t\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateY(2000px);\n\t}\n}\n\n@keyframes fadeOutDownBig {\n\t0% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateY(0);\n\t\t        transform: translateY(0);\n\t}\n\t\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateY(2000px);\n\t\t        transform: translateY(2000px);\n\t}\n}\n\n.fadeOutDownBig {\n\t-webkit-animation-name: fadeOutDownBig;\n\tanimation-name: fadeOutDownBig;\n}\n@-webkit-keyframes fadeOutLeftBig {\n\t0% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateX(0);\n\t}\n\t\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateX(-2000px);\n\t}\n}\n\n@keyframes fadeOutLeftBig {\n\t0% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateX(0);\n\t\t        transform: translateX(0);\n\t}\n\t\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateX(-2000px);\n\t\t        transform: translateX(-2000px);\n\t}\n}\n\n.fadeOutLeftBig {\n\t-webkit-animation-name: fadeOutLeftBig;\n\tanimation-name: fadeOutLeftBig;\n}\n@-webkit-keyframes fadeOutRightBig {\n\t0% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateX(0);\n\t}\n\t\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateX(2000px);\n\t}\n}\n@keyframes fadeOutRightBig {\n\t0% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateX(0);\n\t\t        transform: translateX(0);\n\t}\n\t\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateX(2000px);\n\t\t        transform: translateX(2000px);\n\t}\n}\n\n.fadeOutRightBig {\n\t-webkit-animation-name: fadeOutRightBig;\n\tanimation-name: fadeOutRightBig;\n}\n@-webkit-keyframes bounceIn {\n\t0% {\n\t\topacity: 0;\n\t\t-webkit-transform: scale(.3);\n\t}\n\t\n\t50% {\n\t\topacity: 1;\n\t\t-webkit-transform: scale(1.05);\n\t}\n\t\n\t70% {\n\t\t-webkit-transform: scale(.9);\n\t}\n\t\n\t100% {\n\t\t-webkit-transform: scale(1);\n\t}\n}\n\n@keyframes bounceIn {\n\t0% {\n\t\topacity: 0;\n\t\t-webkit-transform: scale(.3);\n\t\t        transform: scale(.3);\n\t}\n\t\n\t50% {\n\t\topacity: 1;\n\t\t-webkit-transform: scale(1.05);\n\t\t        transform: scale(1.05);\n\t}\n\t\n\t70% {\n\t\t-webkit-transform: scale(.9);\n\t\t        transform: scale(.9);\n\t}\n\t\n\t100% {\n\t\t-webkit-transform: scale(1);\n\t\t        transform: scale(1);\n\t}\n}\n\n.bounceIn {\n\t-webkit-animation-name: bounceIn;\n\tanimation-name: bounceIn;\n}\n@-webkit-keyframes bounceInUp {\n\t0% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateY(2000px);\n\t}\n\t\n\t60% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateY(-30px);\n\t}\n\t\n\t80% {\n\t\t-webkit-transform: translateY(10px);\n\t}\n\t\n\t100% {\n\t\t-webkit-transform: translateY(0);\n\t}\n}\n\n@keyframes bounceInUp {\n\t0% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateY(2000px);\n\t\t        transform: translateY(2000px);\n\t}\n\t\n\t60% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateY(-30px);\n\t\t        transform: translateY(-30px);\n\t}\n\t\n\t80% {\n\t\t-webkit-transform: translateY(10px);\n\t\t        transform: translateY(10px);\n\t}\n\t\n\t100% {\n\t\t-webkit-transform: translateY(0);\n\t\t        transform: translateY(0);\n\t}\n}\n\n.bounceInUp {\n\t-webkit-animation-name: bounceInUp;\n\tanimation-name: bounceInUp;\n}\n@-webkit-keyframes bounceInDown {\n\t0% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateY(-2000px);\n\t}\n\t\n\t60% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateY(30px);\n\t}\n\t\n\t80% {\n\t\t-webkit-transform: translateY(-10px);\n\t}\n\t\n\t100% {\n\t\t-webkit-transform: translateY(0);\n\t}\n}\n\n@keyframes bounceInDown {\n\t0% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateY(-2000px);\n\t\t        transform: translateY(-2000px);\n\t}\n\t\n\t60% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateY(30px);\n\t\t        transform: translateY(30px);\n\t}\n\t\n\t80% {\n\t\t-webkit-transform: translateY(-10px);\n\t\t        transform: translateY(-10px);\n\t}\n\t\n\t100% {\n\t\t-webkit-transform: translateY(0);\n\t\t        transform: translateY(0);\n\t}\n}\n\n.bounceInDown {\n\t-webkit-animation-name: bounceInDown;\n\tanimation-name: bounceInDown;\n}\n@-webkit-keyframes bounceInLeft {\n\t0% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateX(-2000px);\n\t}\n\t\n\t60% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateX(30px);\n\t}\n\t\n\t80% {\n\t\t-webkit-transform: translateX(-10px);\n\t}\n\t\n\t100% {\n\t\t-webkit-transform: translateX(0);\n\t}\n}\n\n@keyframes bounceInLeft {\n\t0% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateX(-2000px);\n\t\t        transform: translateX(-2000px);\n\t}\n\t\n\t60% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateX(30px);\n\t\t        transform: translateX(30px);\n\t}\n\t\n\t80% {\n\t\t-webkit-transform: translateX(-10px);\n\t\t        transform: translateX(-10px);\n\t}\n\t\n\t100% {\n\t\t-webkit-transform: translateX(0);\n\t\t        transform: translateX(0);\n\t}\n}\n\n.bounceInLeft {\n\t-webkit-animation-name: bounceInLeft;\n\tanimation-name: bounceInLeft;\n}\n@-webkit-keyframes bounceInRight {\n\t0% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateX(2000px);\n\t}\n\t\n\t60% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateX(-30px);\n\t}\n\t\n\t80% {\n\t\t-webkit-transform: translateX(10px);\n\t}\n\t\n\t100% {\n\t\t-webkit-transform: translateX(0);\n\t}\n}\n\n@keyframes bounceInRight {\n\t0% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateX(2000px);\n\t\t        transform: translateX(2000px);\n\t}\n\t\n\t60% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateX(-30px);\n\t\t        transform: translateX(-30px);\n\t}\n\t\n\t80% {\n\t\t-webkit-transform: translateX(10px);\n\t\t        transform: translateX(10px);\n\t}\n\t\n\t100% {\n\t\t-webkit-transform: translateX(0);\n\t\t        transform: translateX(0);\n\t}\n}\n\n.bounceInRight {\n\t-webkit-animation-name: bounceInRight;\n\tanimation-name: bounceInRight;\n}\n@-webkit-keyframes bounceOut {\n\t0% {\n\t\t-webkit-transform: scale(1);\n\t}\n\t\n\t25% {\n\t\t-webkit-transform: scale(.95);\n\t}\n\t\n\t50% {\n\t\topacity: 1;\n\t\t-webkit-transform: scale(1.1);\n\t}\n\t\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: scale(.3);\n\t}\t\n}\n\n@keyframes bounceOut {\n\t0% {\n\t\t-webkit-transform: scale(1);\n\t\t        transform: scale(1);\n\t}\n\t\n\t25% {\n\t\t-webkit-transform: scale(.95);\n\t\t        transform: scale(.95);\n\t}\n\t\n\t50% {\n\t\topacity: 1;\n\t\t-webkit-transform: scale(1.1);\n\t\t        transform: scale(1.1);\n\t}\n\t\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: scale(.3);\n\t\t        transform: scale(.3);\n\t}\t\n}\n\n.bounceOut {\n\t-webkit-animation-name: bounceOut;\n\tanimation-name: bounceOut;\n}\n@-webkit-keyframes bounceOutUp {\n\t0% {\n\t\t-webkit-transform: translateY(0);\n\t}\n\t\n\t20% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateY(20px);\n\t}\n\t\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateY(-2000px);\n\t}\n}\n\n@keyframes bounceOutUp {\n\t0% {\n\t\t-webkit-transform: translateY(0);\n\t\t        transform: translateY(0);\n\t}\n\t\n\t20% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateY(20px);\n\t\t        transform: translateY(20px);\n\t}\n\t\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateY(-2000px);\n\t\t        transform: translateY(-2000px);\n\t}\n}\n\n.bounceOutUp {\n\t-webkit-animation-name: bounceOutUp;\n\tanimation-name: bounceOutUp;\n}\n@-webkit-keyframes bounceOutDown {\n\t0% {\n\t\t-webkit-transform: translateY(0);\n\t}\n\t\n\t20% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateY(-20px);\n\t}\n\t\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateY(2000px);\n\t}\n}\n\n@keyframes bounceOutDown {\n\t0% {\n\t\t-webkit-transform: translateY(0);\n\t\t        transform: translateY(0);\n\t}\n\t\n\t20% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateY(-20px);\n\t\t        transform: translateY(-20px);\n\t}\n\t\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateY(2000px);\n\t\t        transform: translateY(2000px);\n\t}\n}\n\n.bounceOutDown {\n\t-webkit-animation-name: bounceOutDown;\n\tanimation-name: bounceOutDown;\n}\n@-webkit-keyframes bounceOutLeft {\n\t0% {\n\t\t-webkit-transform: translateX(0);\n\t}\n\t\n\t20% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateX(20px);\n\t}\n\t\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateX(-2000px);\n\t}\n}\n\n@keyframes bounceOutLeft {\n\t0% {\n\t\t-webkit-transform: translateX(0);\n\t\t        transform: translateX(0);\n\t}\n\t\n\t20% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateX(20px);\n\t\t        transform: translateX(20px);\n\t}\n\t\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateX(-2000px);\n\t\t        transform: translateX(-2000px);\n\t}\n}\n\n.bounceOutLeft {\n\t-webkit-animation-name: bounceOutLeft;\n\tanimation-name: bounceOutLeft;\n}\n@-webkit-keyframes bounceOutRight {\n\t0% {\n\t\t-webkit-transform: translateX(0);\n\t}\n\t\n\t20% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateX(-20px);\n\t}\n\t\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateX(2000px);\n\t}\n}\n\n@keyframes bounceOutRight {\n\t0% {\n\t\t-webkit-transform: translateX(0);\n\t\t        transform: translateX(0);\n\t}\n\t\n\t20% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateX(-20px);\n\t\t        transform: translateX(-20px);\n\t}\n\t\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateX(2000px);\n\t\t        transform: translateX(2000px);\n\t}\n}\n\n.bounceOutRight {\n\t-webkit-animation-name: bounceOutRight;\n\tanimation-name: bounceOutRight;\n}\n@-webkit-keyframes rotateIn {\n\t0% {\n\t\t-webkit-transform-origin: center center;\n\t\t-webkit-transform: rotate(-200deg);\n\t\topacity: 0;\n\t}\n\t\n\t100% {\n\t\t-webkit-transform-origin: center center;\n\t\t-webkit-transform: rotate(0);\n\t\topacity: 1;\n\t}\n}\n@keyframes rotateIn {\n\t0% {\n\t\t-webkit-transform-origin: center center;\n\t\t        transform-origin: center center;\n\t\t-webkit-transform: rotate(-200deg);\n\t\t        transform: rotate(-200deg);\n\t\topacity: 0;\n\t}\n\t\n\t100% {\n\t\t-webkit-transform-origin: center center;\n\t\t        transform-origin: center center;\n\t\t-webkit-transform: rotate(0);\n\t\t        transform: rotate(0);\n\t\topacity: 1;\n\t}\n}\n\n.rotateIn {\n\t-webkit-animation-name: rotateIn;\n\tanimation-name: rotateIn;\n}\n@-webkit-keyframes rotateInUpLeft {\n\t0% {\n\t\t-webkit-transform-origin: left bottom;\n\t\t-webkit-transform: rotate(90deg);\n\t\topacity: 0;\n\t}\n\t\n\t100% {\n\t\t-webkit-transform-origin: left bottom;\n\t\t-webkit-transform: rotate(0);\n\t\topacity: 1;\n\t}\n}\n\n@keyframes rotateInUpLeft {\n\t0% {\n\t\t-webkit-transform-origin: left bottom;\n\t\t        transform-origin: left bottom;\n\t\t-webkit-transform: rotate(90deg);\n\t\t        transform: rotate(90deg);\n\t\topacity: 0;\n\t}\n\t\n\t100% {\n\t\t-webkit-transform-origin: left bottom;\n\t\t        transform-origin: left bottom;\n\t\t-webkit-transform: rotate(0);\n\t\t        transform: rotate(0);\n\t\topacity: 1;\n\t}\n}\n\n.rotateInUpLeft {\n\t-webkit-animation-name: rotateInUpLeft;\n\tanimation-name: rotateInUpLeft;\n}\n@-webkit-keyframes rotateInDownLeft {\n\t0% {\n\t\t-webkit-transform-origin: left bottom;\n\t\t-webkit-transform: rotate(-90deg);\n\t\topacity: 0;\n\t}\n\t\n\t100% {\n\t\t-webkit-transform-origin: left bottom;\n\t\t-webkit-transform: rotate(0);\n\t\topacity: 1;\n\t}\n}\n\n@keyframes rotateInDownLeft {\n\t0% {\n\t\t-webkit-transform-origin: left bottom;\n\t\t        transform-origin: left bottom;\n\t\t-webkit-transform: rotate(-90deg);\n\t\t        transform: rotate(-90deg);\n\t\topacity: 0;\n\t}\n\t\n\t100% {\n\t\t-webkit-transform-origin: left bottom;\n\t\t        transform-origin: left bottom;\n\t\t-webkit-transform: rotate(0);\n\t\t        transform: rotate(0);\n\t\topacity: 1;\n\t}\n}\n\n.rotateInDownLeft {\n\t-webkit-animation-name: rotateInDownLeft;\n\tanimation-name: rotateInDownLeft;\n}\n@-webkit-keyframes rotateInUpRight {\n\t0% {\n\t\t-webkit-transform-origin: right bottom;\n\t\t-webkit-transform: rotate(-90deg);\n\t\topacity: 0;\n\t}\n\t\n\t100% {\n\t\t-webkit-transform-origin: right bottom;\n\t\t-webkit-transform: rotate(0);\n\t\topacity: 1;\n\t}\n}\n\n@keyframes rotateInUpRight {\n\t0% {\n\t\t-webkit-transform-origin: right bottom;\n\t\t        transform-origin: right bottom;\n\t\t-webkit-transform: rotate(-90deg);\n\t\t        transform: rotate(-90deg);\n\t\topacity: 0;\n\t}\n\t\n\t100% {\n\t\t-webkit-transform-origin: right bottom;\n\t\t        transform-origin: right bottom;\n\t\t-webkit-transform: rotate(0);\n\t\t        transform: rotate(0);\n\t\topacity: 1;\n\t}\n}\n\n.rotateInUpRight {\n\t-webkit-animation-name: rotateInUpRight;\n\tanimation-name: rotateInUpRight;\n}\n@-webkit-keyframes rotateInDownRight {\n\t0% {\n\t\t-webkit-transform-origin: right bottom;\n\t\t-webkit-transform: rotate(90deg);\n\t\topacity: 0;\n\t}\n\t\n\t100% {\n\t\t-webkit-transform-origin: right bottom;\n\t\t-webkit-transform: rotate(0);\n\t\topacity: 1;\n\t}\n}\n\n@keyframes rotateInDownRight {\n\t0% {\n\t\t-webkit-transform-origin: right bottom;\n\t\t        transform-origin: right bottom;\n\t\t-webkit-transform: rotate(90deg);\n\t\t        transform: rotate(90deg);\n\t\topacity: 0;\n\t}\n\t\n\t100% {\n\t\t-webkit-transform-origin: right bottom;\n\t\t        transform-origin: right bottom;\n\t\t-webkit-transform: rotate(0);\n\t\t        transform: rotate(0);\n\t\topacity: 1;\n\t}\n}\n\n.rotateInDownRight {\n\t-webkit-animation-name: rotateInDownRight;\n\tanimation-name: rotateInDownRight;\n}\n@-webkit-keyframes rotateOut {\n\t0% {\n\t\t-webkit-transform-origin: center center;\n\t\t-webkit-transform: rotate(0);\n\t\topacity: 1;\n\t}\n\t\n\t100% {\n\t\t-webkit-transform-origin: center center;\n\t\t-webkit-transform: rotate(200deg);\n\t\topacity: 0;\n\t}\n}\n\n@keyframes rotateOut {\n\t0% {\n\t\t-webkit-transform-origin: center center;\n\t\t        transform-origin: center center;\n\t\t-webkit-transform: rotate(0);\n\t\t        transform: rotate(0);\n\t\topacity: 1;\n\t}\n\t\n\t100% {\n\t\t-webkit-transform-origin: center center;\n\t\t        transform-origin: center center;\n\t\t-webkit-transform: rotate(200deg);\n\t\t        transform: rotate(200deg);\n\t\topacity: 0;\n\t}\n}\n\n.rotateOut {\n\t-webkit-animation-name: rotateOut;\n\tanimation-name: rotateOut;\n}\n@-webkit-keyframes rotateOutUpLeft {\n\t0% {\n\t\t-webkit-transform-origin: left bottom;\n\t\t-webkit-transform: rotate(0);\n\t\topacity: 1;\n\t}\n\t\n\t100% {\n\t\t-webkit-transform-origin: left bottom;\n\t\t-webkit-transform: rotate(-90deg);\n\t\topacity: 0;\n\t}\n}\n\n@keyframes rotateOutUpLeft {\n\t0% {\n\t\t-webkit-transform-origin: left bottom;\n\t\t        transform-origin: left bottom;\n\t\t-webkit-transform: rotate(0);\n\t\t        transform: rotate(0);\n\t\topacity: 1;\n\t}\n\t\n\t100% {\n\t\t-transform-origin: left bottom;\n\t\t-transform: rotate(-90deg);\n\t\topacity: 0;\n\t}\n}\n\n.rotateOutUpLeft {\n\t-webkit-animation-name: rotateOutUpLeft;\n\tanimation-name: rotateOutUpLeft;\n}\n@-webkit-keyframes rotateOutDownLeft {\n\t0% {\n\t\t-webkit-transform-origin: left bottom;\n\t\t-webkit-transform: rotate(0);\n\t\topacity: 1;\n\t}\n\t\n\t100% {\n\t\t-webkit-transform-origin: left bottom;\n\t\t-webkit-transform: rotate(90deg);\n\t\topacity: 0;\n\t}\n}\n\n@keyframes rotateOutDownLeft {\n\t0% {\n\t\t-webkit-transform-origin: left bottom;\n\t\t        transform-origin: left bottom;\n\t\t-webkit-transform: rotate(0);\n\t\t        transform: rotate(0);\n\t\topacity: 1;\n\t}\n\t\n\t100% {\n\t\t-webkit-transform-origin: left bottom;\n\t\t        transform-origin: left bottom;\n\t\t-webkit-transform: rotate(90deg);\n\t\t        transform: rotate(90deg);\n\t\topacity: 0;\n\t}\n}\n\n.rotateOutDownLeft {\n\t-webkit-animation-name: rotateOutDownLeft;\n\tanimation-name: rotateOutDownLeft;\n}\n@-webkit-keyframes rotateOutUpRight {\n\t0% {\n\t\t-webkit-transform-origin: right bottom;\n\t\t-webkit-transform: rotate(0);\n\t\topacity: 1;\n\t}\n\t\n\t100% {\n\t\t-webkit-transform-origin: right bottom;\n\t\t-webkit-transform: rotate(90deg);\n\t\topacity: 0;\n\t}\n}\n\n@keyframes rotateOutUpRight {\n\t0% {\n\t\t-webkit-transform-origin: right bottom;\n\t\t        transform-origin: right bottom;\n\t\t-webkit-transform: rotate(0);\n\t\t        transform: rotate(0);\n\t\topacity: 1;\n\t}\n\t\n\t100% {\n\t\t-webkit-transform-origin: right bottom;\n\t\t        transform-origin: right bottom;\n\t\t-webkit-transform: rotate(90deg);\n\t\t        transform: rotate(90deg);\n\t\topacity: 0;\n\t}\n}\n\n.rotateOutUpRight {\n\t-webkit-animation-name: rotateOutUpRight;\n\tanimation-name: rotateOutUpRight;\n}\n@-webkit-keyframes rotateOutDownRight {\n\t0% {\n\t\t-webkit-transform-origin: right bottom;\n\t\t-webkit-transform: rotate(0);\n\t\topacity: 1;\n\t}\n\t\n\t100% {\n\t\t-webkit-transform-origin: right bottom;\n\t\t-webkit-transform: rotate(-90deg);\n\t\topacity: 0;\n\t}\n}\n\n@keyframes rotateOutDownRight {\n\t0% {\n\t\t-webkit-transform-origin: right bottom;\n\t\t        transform-origin: right bottom;\n\t\t-webkit-transform: rotate(0);\n\t\t        transform: rotate(0);\n\t\topacity: 1;\n\t}\n\t\n\t100% {\n\t\t-webkit-transform-origin: right bottom;\n\t\t        transform-origin: right bottom;\n\t\t-webkit-transform: rotate(-90deg);\n\t\t        transform: rotate(-90deg);\n\t\topacity: 0;\n\t}\n}\n\n.rotateOutDownRight {\n\t-webkit-animation-name: rotateOutDownRight;\n\tanimation-name: rotateOutDownRight;\n}\n@-webkit-keyframes hinge {\n\t0% { -webkit-transform: rotate(0); -webkit-transform-origin: top left; -webkit-animation-timing-function: ease-in-out; }\t\n\t20%, 60% { -webkit-transform: rotate(80deg); -webkit-transform-origin: top left; -webkit-animation-timing-function: ease-in-out; }\t\n\t40% { -webkit-transform: rotate(60deg); -webkit-transform-origin: top left; -webkit-animation-timing-function: ease-in-out; }\t\n\t80% { -webkit-transform: rotate(60deg) translateY(0); opacity: 1; -webkit-transform-origin: top left; -webkit-animation-timing-function: ease-in-out; }\t\n\t100% { -webkit-transform: translateY(700px); opacity: 0; }\n}\n\n@keyframes hinge {\n\t0% { -webkit-transform: rotate(0); transform: rotate(0); -webkit-transform-origin: top left; transform-origin: top left; -webkit-animation-timing-function: ease-in-out; animation-timing-function: ease-in-out; }\t\n\t20%, 60% { -webkit-transform: rotate(80deg); transform: rotate(80deg); -webkit-transform-origin: top left; transform-origin: top left; -webkit-animation-timing-function: ease-in-out; animation-timing-function: ease-in-out; }\t\n\t40% { -webkit-transform: rotate(60deg); transform: rotate(60deg); -webkit-transform-origin: top left; transform-origin: top left; -webkit-animation-timing-function: ease-in-out; animation-timing-function: ease-in-out; }\t\n\t80% { -webkit-transform: rotate(60deg) translateY(0); transform: rotate(60deg) translateY(0); opacity: 1; -webkit-transform-origin: top left; transform-origin: top left; -webkit-animation-timing-function: ease-in-out; animation-timing-function: ease-in-out; }\t\n\t100% { -webkit-transform: translateY(700px); transform: translateY(700px); opacity: 0; }\n}\n\n.hinge {\n\t-webkit-animation-name: hinge;\n\tanimation-name: hinge;\n}\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes rollIn {\n\t0% { opacity: 0; -webkit-transform: translateX(-100%) rotate(-120deg); }\n\t100% { opacity: 1; -webkit-transform: translateX(0px) rotate(0deg); }\n}\n\n@keyframes rollIn {\n\t0% { opacity: 0; -webkit-transform: translateX(-100%) rotate(-120deg); transform: translateX(-100%) rotate(-120deg); }\n\t100% { opacity: 1; -webkit-transform: translateX(0px) rotate(0deg); transform: translateX(0px) rotate(0deg); }\n}\n\n.rollIn {\n\t-webkit-animation-name: rollIn;\n\tanimation-name: rollIn;\n}\n/* originally authored by Nick Pettit - https://github.com/nickpettit/glide */\n\n@-webkit-keyframes rollOut {\n    0% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateX(0px) rotate(0deg);\n\t}\n\n    100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateX(100%) rotate(120deg);\n\t}\n}\n\n@keyframes rollOut {\n    0% {\n\t\topacity: 1;\n\t\t-webkit-transform: translateX(0px) rotate(0deg);\n\t\t        transform: translateX(0px) rotate(0deg);\n\t}\n\n    100% {\n\t\topacity: 0;\n\t\t-webkit-transform: translateX(100%) rotate(120deg);\n\t\t        transform: translateX(100%) rotate(120deg);\n\t}\n}\n\n.rollOut {\n\t-webkit-animation-name: rollOut;\n\tanimation-name: rollOut;\n}\n\n\n\n\n\n\n/* extended by Codrops */\n\n@-webkit-keyframes scaleOut {\n\t0% {\n\t\topacity: 1;\n\t\t-webkit-transform: scale(1);\n\t}\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: scale(.5);\n\t}\t\n}\n\n@keyframes scaleOut {\n\t0% {\n\t\topacity: 1;\n\t\t-webkit-transform: scale(1);\n\t\t        transform: scale(1);\n\t}\n\t100% {\n\t\topacity: 0;\n\t\t-webkit-transform: scale(.5);\n\t\t        transform: scale(.5);\n\t}\t\n}\n\n.scaleOut {\n\t-webkit-animation-name: scaleOut;\n\tanimation-name: scaleOut;\n}\n\n@-webkit-keyframes scaleIn {\n\t0% {\n\t\topacity: 0;\n\t\t-webkit-transform: scale(.5);\n\t}\t\n\t100% {\n\t\topacity: 1;\n\t\t-webkit-transform: scale(1);\n\t}\n}\n\n@keyframes scaleIn {\n\t0% {\n\t\topacity: 0;\n\t\t-webkit-transform: scale(.5);\n\t\t        transform: scale(.5);\n\t}\n\t100% {\n\t\topacity: 1;\n\t\t-webkit-transform: scale(1);\n\t\t        transform: scale(1);\n\t}\n}\n\n.scaleIn {\n\t-webkit-animation-name: scaleIn;\n\tanimation-name: scaleIn;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(26)(false);
// imports


// module
exports.push([module.i, "/*!\n * Bootstrap v3.3.7 (http://getbootstrap.com)\n * Copyright 2011-2016 Twitter, Inc.\n * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)\n *//*! normalize.css v3.0.3 | MIT License | github.com/necolas/normalize.css */html{font-family:sans-serif;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%}body{margin:0}article,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}audio,canvas,progress,video{display:inline-block;vertical-align:baseline}audio:not([controls]){display:none;height:0}[hidden],template{display:none}a{background-color:transparent}a:active,a:hover{outline:0}abbr[title]{border-bottom:1px dotted}b,strong{font-weight:700}dfn{font-style:italic}h1{margin:.67em 0;font-size:2em}mark{color:#000;background:#ff0}small{font-size:80%}sub,sup{position:relative;font-size:75%;line-height:0;vertical-align:baseline}sup{top:-.5em}sub{bottom:-.25em}img{border:0}svg:not(:root){overflow:hidden}figure{margin:1em 40px}hr{height:0;box-sizing:content-box}pre{overflow:auto}code,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}button,input,optgroup,select,textarea{margin:0;font:inherit;color:inherit}button{overflow:visible}button,select{text-transform:none}button,html input[type=button],input[type=reset],input[type=submit]{-webkit-appearance:button;cursor:pointer}button[disabled],html input[disabled]{cursor:default}button::-moz-focus-inner,input::-moz-focus-inner{padding:0;border:0}input{line-height:normal}input[type=checkbox],input[type=radio]{box-sizing:border-box;padding:0}input[type=number]::-webkit-inner-spin-button,input[type=number]::-webkit-outer-spin-button{height:auto}input[type=search]{box-sizing:content-box;-webkit-appearance:textfield}input[type=search]::-webkit-search-cancel-button,input[type=search]::-webkit-search-decoration{-webkit-appearance:none}fieldset{padding:.35em .625em .75em;margin:0 2px;border:1px solid silver}legend{padding:0;border:0}textarea{overflow:auto}optgroup{font-weight:700}table{border-spacing:0;border-collapse:collapse}td,th{padding:0}/*! Source: https://github.com/h5bp/html5-boilerplate/blob/master/src/css/main.css */@media print{*,:after,:before{color:#000!important;text-shadow:none!important;background:0 0!important;box-shadow:none!important}a,a:visited{text-decoration:underline}a[href]:after{content:\" (\" attr(href) \")\"}abbr[title]:after{content:\" (\" attr(title) \")\"}a[href^=\"javascript:\"]:after,a[href^=\"#\"]:after{content:\"\"}blockquote,pre{border:1px solid #999;page-break-inside:avoid}thead{display:table-header-group}img,tr{page-break-inside:avoid}img{max-width:100%!important}h2,h3,p{orphans:3;widows:3}h2,h3{page-break-after:avoid}.navbar{display:none}.btn>.caret,.dropup>.btn>.caret{border-top-color:#000!important}.label{border:1px solid #000}.table{border-collapse:collapse!important}.table td,.table th{background-color:#fff!important}.table-bordered td,.table-bordered th{border:1px solid #ddd!important}}@font-face{font-family:'Glyphicons Halflings';src:url(" + __webpack_require__(64) + ");src:url(" + __webpack_require__(64) + "?#iefix) format('embedded-opentype'),url(" + __webpack_require__(185) + ") format('woff2'),url(" + __webpack_require__(184) + ") format('woff'),url(" + __webpack_require__(183) + ") format('truetype'),url(" + __webpack_require__(144) + "#glyphicons_halflingsregular) format('svg')}.glyphicon{position:relative;top:1px;display:inline-block;font-family:'Glyphicons Halflings';font-style:normal;font-weight:400;line-height:1;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale}.glyphicon-asterisk:before{content:\"*\"}.glyphicon-plus:before{content:\"+\"}.glyphicon-eur:before,.glyphicon-euro:before{content:\"\\20AC\"}.glyphicon-minus:before{content:\"\\2212\"}.glyphicon-cloud:before{content:\"\\2601\"}.glyphicon-envelope:before{content:\"\\2709\"}.glyphicon-pencil:before{content:\"\\270F\"}.glyphicon-glass:before{content:\"\\E001\"}.glyphicon-music:before{content:\"\\E002\"}.glyphicon-search:before{content:\"\\E003\"}.glyphicon-heart:before{content:\"\\E005\"}.glyphicon-star:before{content:\"\\E006\"}.glyphicon-star-empty:before{content:\"\\E007\"}.glyphicon-user:before{content:\"\\E008\"}.glyphicon-film:before{content:\"\\E009\"}.glyphicon-th-large:before{content:\"\\E010\"}.glyphicon-th:before{content:\"\\E011\"}.glyphicon-th-list:before{content:\"\\E012\"}.glyphicon-ok:before{content:\"\\E013\"}.glyphicon-remove:before{content:\"\\E014\"}.glyphicon-zoom-in:before{content:\"\\E015\"}.glyphicon-zoom-out:before{content:\"\\E016\"}.glyphicon-off:before{content:\"\\E017\"}.glyphicon-signal:before{content:\"\\E018\"}.glyphicon-cog:before{content:\"\\E019\"}.glyphicon-trash:before{content:\"\\E020\"}.glyphicon-home:before{content:\"\\E021\"}.glyphicon-file:before{content:\"\\E022\"}.glyphicon-time:before{content:\"\\E023\"}.glyphicon-road:before{content:\"\\E024\"}.glyphicon-download-alt:before{content:\"\\E025\"}.glyphicon-download:before{content:\"\\E026\"}.glyphicon-upload:before{content:\"\\E027\"}.glyphicon-inbox:before{content:\"\\E028\"}.glyphicon-play-circle:before{content:\"\\E029\"}.glyphicon-repeat:before{content:\"\\E030\"}.glyphicon-refresh:before{content:\"\\E031\"}.glyphicon-list-alt:before{content:\"\\E032\"}.glyphicon-lock:before{content:\"\\E033\"}.glyphicon-flag:before{content:\"\\E034\"}.glyphicon-headphones:before{content:\"\\E035\"}.glyphicon-volume-off:before{content:\"\\E036\"}.glyphicon-volume-down:before{content:\"\\E037\"}.glyphicon-volume-up:before{content:\"\\E038\"}.glyphicon-qrcode:before{content:\"\\E039\"}.glyphicon-barcode:before{content:\"\\E040\"}.glyphicon-tag:before{content:\"\\E041\"}.glyphicon-tags:before{content:\"\\E042\"}.glyphicon-book:before{content:\"\\E043\"}.glyphicon-bookmark:before{content:\"\\E044\"}.glyphicon-print:before{content:\"\\E045\"}.glyphicon-camera:before{content:\"\\E046\"}.glyphicon-font:before{content:\"\\E047\"}.glyphicon-bold:before{content:\"\\E048\"}.glyphicon-italic:before{content:\"\\E049\"}.glyphicon-text-height:before{content:\"\\E050\"}.glyphicon-text-width:before{content:\"\\E051\"}.glyphicon-align-left:before{content:\"\\E052\"}.glyphicon-align-center:before{content:\"\\E053\"}.glyphicon-align-right:before{content:\"\\E054\"}.glyphicon-align-justify:before{content:\"\\E055\"}.glyphicon-list:before{content:\"\\E056\"}.glyphicon-indent-left:before{content:\"\\E057\"}.glyphicon-indent-right:before{content:\"\\E058\"}.glyphicon-facetime-video:before{content:\"\\E059\"}.glyphicon-picture:before{content:\"\\E060\"}.glyphicon-map-marker:before{content:\"\\E062\"}.glyphicon-adjust:before{content:\"\\E063\"}.glyphicon-tint:before{content:\"\\E064\"}.glyphicon-edit:before{content:\"\\E065\"}.glyphicon-share:before{content:\"\\E066\"}.glyphicon-check:before{content:\"\\E067\"}.glyphicon-move:before{content:\"\\E068\"}.glyphicon-step-backward:before{content:\"\\E069\"}.glyphicon-fast-backward:before{content:\"\\E070\"}.glyphicon-backward:before{content:\"\\E071\"}.glyphicon-play:before{content:\"\\E072\"}.glyphicon-pause:before{content:\"\\E073\"}.glyphicon-stop:before{content:\"\\E074\"}.glyphicon-forward:before{content:\"\\E075\"}.glyphicon-fast-forward:before{content:\"\\E076\"}.glyphicon-step-forward:before{content:\"\\E077\"}.glyphicon-eject:before{content:\"\\E078\"}.glyphicon-chevron-left:before{content:\"\\E079\"}.glyphicon-chevron-right:before{content:\"\\E080\"}.glyphicon-plus-sign:before{content:\"\\E081\"}.glyphicon-minus-sign:before{content:\"\\E082\"}.glyphicon-remove-sign:before{content:\"\\E083\"}.glyphicon-ok-sign:before{content:\"\\E084\"}.glyphicon-question-sign:before{content:\"\\E085\"}.glyphicon-info-sign:before{content:\"\\E086\"}.glyphicon-screenshot:before{content:\"\\E087\"}.glyphicon-remove-circle:before{content:\"\\E088\"}.glyphicon-ok-circle:before{content:\"\\E089\"}.glyphicon-ban-circle:before{content:\"\\E090\"}.glyphicon-arrow-left:before{content:\"\\E091\"}.glyphicon-arrow-right:before{content:\"\\E092\"}.glyphicon-arrow-up:before{content:\"\\E093\"}.glyphicon-arrow-down:before{content:\"\\E094\"}.glyphicon-share-alt:before{content:\"\\E095\"}.glyphicon-resize-full:before{content:\"\\E096\"}.glyphicon-resize-small:before{content:\"\\E097\"}.glyphicon-exclamation-sign:before{content:\"\\E101\"}.glyphicon-gift:before{content:\"\\E102\"}.glyphicon-leaf:before{content:\"\\E103\"}.glyphicon-fire:before{content:\"\\E104\"}.glyphicon-eye-open:before{content:\"\\E105\"}.glyphicon-eye-close:before{content:\"\\E106\"}.glyphicon-warning-sign:before{content:\"\\E107\"}.glyphicon-plane:before{content:\"\\E108\"}.glyphicon-calendar:before{content:\"\\E109\"}.glyphicon-random:before{content:\"\\E110\"}.glyphicon-comment:before{content:\"\\E111\"}.glyphicon-magnet:before{content:\"\\E112\"}.glyphicon-chevron-up:before{content:\"\\E113\"}.glyphicon-chevron-down:before{content:\"\\E114\"}.glyphicon-retweet:before{content:\"\\E115\"}.glyphicon-shopping-cart:before{content:\"\\E116\"}.glyphicon-folder-close:before{content:\"\\E117\"}.glyphicon-folder-open:before{content:\"\\E118\"}.glyphicon-resize-vertical:before{content:\"\\E119\"}.glyphicon-resize-horizontal:before{content:\"\\E120\"}.glyphicon-hdd:before{content:\"\\E121\"}.glyphicon-bullhorn:before{content:\"\\E122\"}.glyphicon-bell:before{content:\"\\E123\"}.glyphicon-certificate:before{content:\"\\E124\"}.glyphicon-thumbs-up:before{content:\"\\E125\"}.glyphicon-thumbs-down:before{content:\"\\E126\"}.glyphicon-hand-right:before{content:\"\\E127\"}.glyphicon-hand-left:before{content:\"\\E128\"}.glyphicon-hand-up:before{content:\"\\E129\"}.glyphicon-hand-down:before{content:\"\\E130\"}.glyphicon-circle-arrow-right:before{content:\"\\E131\"}.glyphicon-circle-arrow-left:before{content:\"\\E132\"}.glyphicon-circle-arrow-up:before{content:\"\\E133\"}.glyphicon-circle-arrow-down:before{content:\"\\E134\"}.glyphicon-globe:before{content:\"\\E135\"}.glyphicon-wrench:before{content:\"\\E136\"}.glyphicon-tasks:before{content:\"\\E137\"}.glyphicon-filter:before{content:\"\\E138\"}.glyphicon-briefcase:before{content:\"\\E139\"}.glyphicon-fullscreen:before{content:\"\\E140\"}.glyphicon-dashboard:before{content:\"\\E141\"}.glyphicon-paperclip:before{content:\"\\E142\"}.glyphicon-heart-empty:before{content:\"\\E143\"}.glyphicon-link:before{content:\"\\E144\"}.glyphicon-phone:before{content:\"\\E145\"}.glyphicon-pushpin:before{content:\"\\E146\"}.glyphicon-usd:before{content:\"\\E148\"}.glyphicon-gbp:before{content:\"\\E149\"}.glyphicon-sort:before{content:\"\\E150\"}.glyphicon-sort-by-alphabet:before{content:\"\\E151\"}.glyphicon-sort-by-alphabet-alt:before{content:\"\\E152\"}.glyphicon-sort-by-order:before{content:\"\\E153\"}.glyphicon-sort-by-order-alt:before{content:\"\\E154\"}.glyphicon-sort-by-attributes:before{content:\"\\E155\"}.glyphicon-sort-by-attributes-alt:before{content:\"\\E156\"}.glyphicon-unchecked:before{content:\"\\E157\"}.glyphicon-expand:before{content:\"\\E158\"}.glyphicon-collapse-down:before{content:\"\\E159\"}.glyphicon-collapse-up:before{content:\"\\E160\"}.glyphicon-log-in:before{content:\"\\E161\"}.glyphicon-flash:before{content:\"\\E162\"}.glyphicon-log-out:before{content:\"\\E163\"}.glyphicon-new-window:before{content:\"\\E164\"}.glyphicon-record:before{content:\"\\E165\"}.glyphicon-save:before{content:\"\\E166\"}.glyphicon-open:before{content:\"\\E167\"}.glyphicon-saved:before{content:\"\\E168\"}.glyphicon-import:before{content:\"\\E169\"}.glyphicon-export:before{content:\"\\E170\"}.glyphicon-send:before{content:\"\\E171\"}.glyphicon-floppy-disk:before{content:\"\\E172\"}.glyphicon-floppy-saved:before{content:\"\\E173\"}.glyphicon-floppy-remove:before{content:\"\\E174\"}.glyphicon-floppy-save:before{content:\"\\E175\"}.glyphicon-floppy-open:before{content:\"\\E176\"}.glyphicon-credit-card:before{content:\"\\E177\"}.glyphicon-transfer:before{content:\"\\E178\"}.glyphicon-cutlery:before{content:\"\\E179\"}.glyphicon-header:before{content:\"\\E180\"}.glyphicon-compressed:before{content:\"\\E181\"}.glyphicon-earphone:before{content:\"\\E182\"}.glyphicon-phone-alt:before{content:\"\\E183\"}.glyphicon-tower:before{content:\"\\E184\"}.glyphicon-stats:before{content:\"\\E185\"}.glyphicon-sd-video:before{content:\"\\E186\"}.glyphicon-hd-video:before{content:\"\\E187\"}.glyphicon-subtitles:before{content:\"\\E188\"}.glyphicon-sound-stereo:before{content:\"\\E189\"}.glyphicon-sound-dolby:before{content:\"\\E190\"}.glyphicon-sound-5-1:before{content:\"\\E191\"}.glyphicon-sound-6-1:before{content:\"\\E192\"}.glyphicon-sound-7-1:before{content:\"\\E193\"}.glyphicon-copyright-mark:before{content:\"\\E194\"}.glyphicon-registration-mark:before{content:\"\\E195\"}.glyphicon-cloud-download:before{content:\"\\E197\"}.glyphicon-cloud-upload:before{content:\"\\E198\"}.glyphicon-tree-conifer:before{content:\"\\E199\"}.glyphicon-tree-deciduous:before{content:\"\\E200\"}.glyphicon-cd:before{content:\"\\E201\"}.glyphicon-save-file:before{content:\"\\E202\"}.glyphicon-open-file:before{content:\"\\E203\"}.glyphicon-level-up:before{content:\"\\E204\"}.glyphicon-copy:before{content:\"\\E205\"}.glyphicon-paste:before{content:\"\\E206\"}.glyphicon-alert:before{content:\"\\E209\"}.glyphicon-equalizer:before{content:\"\\E210\"}.glyphicon-king:before{content:\"\\E211\"}.glyphicon-queen:before{content:\"\\E212\"}.glyphicon-pawn:before{content:\"\\E213\"}.glyphicon-bishop:before{content:\"\\E214\"}.glyphicon-knight:before{content:\"\\E215\"}.glyphicon-baby-formula:before{content:\"\\E216\"}.glyphicon-tent:before{content:\"\\26FA\"}.glyphicon-blackboard:before{content:\"\\E218\"}.glyphicon-bed:before{content:\"\\E219\"}.glyphicon-apple:before{content:\"\\F8FF\"}.glyphicon-erase:before{content:\"\\E221\"}.glyphicon-hourglass:before{content:\"\\231B\"}.glyphicon-lamp:before{content:\"\\E223\"}.glyphicon-duplicate:before{content:\"\\E224\"}.glyphicon-piggy-bank:before{content:\"\\E225\"}.glyphicon-scissors:before{content:\"\\E226\"}.glyphicon-bitcoin:before{content:\"\\E227\"}.glyphicon-btc:before{content:\"\\E227\"}.glyphicon-xbt:before{content:\"\\E227\"}.glyphicon-yen:before{content:\"\\A5\"}.glyphicon-jpy:before{content:\"\\A5\"}.glyphicon-ruble:before{content:\"\\20BD\"}.glyphicon-rub:before{content:\"\\20BD\"}.glyphicon-scale:before{content:\"\\E230\"}.glyphicon-ice-lolly:before{content:\"\\E231\"}.glyphicon-ice-lolly-tasted:before{content:\"\\E232\"}.glyphicon-education:before{content:\"\\E233\"}.glyphicon-option-horizontal:before{content:\"\\E234\"}.glyphicon-option-vertical:before{content:\"\\E235\"}.glyphicon-menu-hamburger:before{content:\"\\E236\"}.glyphicon-modal-window:before{content:\"\\E237\"}.glyphicon-oil:before{content:\"\\E238\"}.glyphicon-grain:before{content:\"\\E239\"}.glyphicon-sunglasses:before{content:\"\\E240\"}.glyphicon-text-size:before{content:\"\\E241\"}.glyphicon-text-color:before{content:\"\\E242\"}.glyphicon-text-background:before{content:\"\\E243\"}.glyphicon-object-align-top:before{content:\"\\E244\"}.glyphicon-object-align-bottom:before{content:\"\\E245\"}.glyphicon-object-align-horizontal:before{content:\"\\E246\"}.glyphicon-object-align-left:before{content:\"\\E247\"}.glyphicon-object-align-vertical:before{content:\"\\E248\"}.glyphicon-object-align-right:before{content:\"\\E249\"}.glyphicon-triangle-right:before{content:\"\\E250\"}.glyphicon-triangle-left:before{content:\"\\E251\"}.glyphicon-triangle-bottom:before{content:\"\\E252\"}.glyphicon-triangle-top:before{content:\"\\E253\"}.glyphicon-console:before{content:\"\\E254\"}.glyphicon-superscript:before{content:\"\\E255\"}.glyphicon-subscript:before{content:\"\\E256\"}.glyphicon-menu-left:before{content:\"\\E257\"}.glyphicon-menu-right:before{content:\"\\E258\"}.glyphicon-menu-down:before{content:\"\\E259\"}.glyphicon-menu-up:before{content:\"\\E260\"}*{box-sizing:border-box}:after,:before{box-sizing:border-box}html{font-size:10px;-webkit-tap-highlight-color:rgba(0,0,0,0)}body{font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:14px;line-height:1.42857143;color:#333;background-color:#fff}button,input,select,textarea{font-family:inherit;font-size:inherit;line-height:inherit}a{color:#337ab7;text-decoration:none}a:focus,a:hover{color:#23527c;text-decoration:underline}a:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}figure{margin:0}img{vertical-align:middle}.carousel-inner>.item>a>img,.carousel-inner>.item>img,.img-responsive,.thumbnail a>img,.thumbnail>img{display:block;max-width:100%;height:auto}.img-rounded{border-radius:6px}.img-thumbnail{display:inline-block;max-width:100%;height:auto;padding:4px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:4px;transition:all .2s ease-in-out}.img-circle{border-radius:50%}hr{margin-top:20px;margin-bottom:20px;border:0;border-top:1px solid #eee}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);border:0}.sr-only-focusable:active,.sr-only-focusable:focus{position:static;width:auto;height:auto;margin:0;overflow:visible;clip:auto}[role=button]{cursor:pointer}.h1,.h2,.h3,.h4,.h5,.h6,h1,h2,h3,h4,h5,h6{font-family:inherit;font-weight:500;line-height:1.1;color:inherit}.h1 .small,.h1 small,.h2 .small,.h2 small,.h3 .small,.h3 small,.h4 .small,.h4 small,.h5 .small,.h5 small,.h6 .small,.h6 small,h1 .small,h1 small,h2 .small,h2 small,h3 .small,h3 small,h4 .small,h4 small,h5 .small,h5 small,h6 .small,h6 small{font-weight:400;line-height:1;color:#777}.h1,.h2,.h3,h1,h2,h3{margin-top:20px;margin-bottom:10px}.h1 .small,.h1 small,.h2 .small,.h2 small,.h3 .small,.h3 small,h1 .small,h1 small,h2 .small,h2 small,h3 .small,h3 small{font-size:65%}.h4,.h5,.h6,h4,h5,h6{margin-top:10px;margin-bottom:10px}.h4 .small,.h4 small,.h5 .small,.h5 small,.h6 .small,.h6 small,h4 .small,h4 small,h5 .small,h5 small,h6 .small,h6 small{font-size:75%}.h1,h1{font-size:36px}.h2,h2{font-size:30px}.h3,h3{font-size:24px}.h4,h4{font-size:18px}.h5,h5{font-size:14px}.h6,h6{font-size:12px}p{margin:0 0 10px}.lead{margin-bottom:20px;font-size:16px;font-weight:300;line-height:1.4}@media (min-width:768px){.lead{font-size:21px}}.small,small{font-size:85%}.mark,mark{padding:.2em;background-color:#fcf8e3}.text-left{text-align:left}.text-right{text-align:right}.text-center{text-align:center}.text-justify{text-align:justify}.text-nowrap{white-space:nowrap}.text-lowercase{text-transform:lowercase}.text-uppercase{text-transform:uppercase}.text-capitalize{text-transform:capitalize}.text-muted{color:#777}.text-primary{color:#337ab7}a.text-primary:focus,a.text-primary:hover{color:#286090}.text-success{color:#3c763d}a.text-success:focus,a.text-success:hover{color:#2b542c}.text-info{color:#31708f}a.text-info:focus,a.text-info:hover{color:#245269}.text-warning{color:#8a6d3b}a.text-warning:focus,a.text-warning:hover{color:#66512c}.text-danger{color:#a94442}a.text-danger:focus,a.text-danger:hover{color:#843534}.bg-primary{color:#fff;background-color:#337ab7}a.bg-primary:focus,a.bg-primary:hover{background-color:#286090}.bg-success{background-color:#dff0d8}a.bg-success:focus,a.bg-success:hover{background-color:#c1e2b3}.bg-info{background-color:#d9edf7}a.bg-info:focus,a.bg-info:hover{background-color:#afd9ee}.bg-warning{background-color:#fcf8e3}a.bg-warning:focus,a.bg-warning:hover{background-color:#f7ecb5}.bg-danger{background-color:#f2dede}a.bg-danger:focus,a.bg-danger:hover{background-color:#e4b9b9}.page-header{padding-bottom:9px;margin:40px 0 20px;border-bottom:1px solid #eee}ol,ul{margin-top:0;margin-bottom:10px}ol ol,ol ul,ul ol,ul ul{margin-bottom:0}.list-unstyled{padding-left:0;list-style:none}.list-inline{padding-left:0;margin-left:-5px;list-style:none}.list-inline>li{display:inline-block;padding-right:5px;padding-left:5px}dl{margin-top:0;margin-bottom:20px}dd,dt{line-height:1.42857143}dt{font-weight:700}dd{margin-left:0}@media (min-width:768px){.dl-horizontal dt{float:left;width:160px;overflow:hidden;clear:left;text-align:right;text-overflow:ellipsis;white-space:nowrap}.dl-horizontal dd{margin-left:180px}}abbr[data-original-title],abbr[title]{cursor:help;border-bottom:1px dotted #777}.initialism{font-size:90%;text-transform:uppercase}blockquote{padding:10px 20px;margin:0 0 20px;font-size:17.5px;border-left:5px solid #eee}blockquote ol:last-child,blockquote p:last-child,blockquote ul:last-child{margin-bottom:0}blockquote .small,blockquote footer,blockquote small{display:block;font-size:80%;line-height:1.42857143;color:#777}blockquote .small:before,blockquote footer:before,blockquote small:before{content:'\\2014   \\A0'}.blockquote-reverse,blockquote.pull-right{padding-right:15px;padding-left:0;text-align:right;border-right:5px solid #eee;border-left:0}.blockquote-reverse .small:before,.blockquote-reverse footer:before,.blockquote-reverse small:before,blockquote.pull-right .small:before,blockquote.pull-right footer:before,blockquote.pull-right small:before{content:''}.blockquote-reverse .small:after,.blockquote-reverse footer:after,.blockquote-reverse small:after,blockquote.pull-right .small:after,blockquote.pull-right footer:after,blockquote.pull-right small:after{content:'\\A0   \\2014'}address{margin-bottom:20px;font-style:normal;line-height:1.42857143}code,kbd,pre,samp{font-family:Menlo,Monaco,Consolas,\"Courier New\",monospace}code{padding:2px 4px;font-size:90%;color:#c7254e;background-color:#f9f2f4;border-radius:4px}kbd{padding:2px 4px;font-size:90%;color:#fff;background-color:#333;border-radius:3px;box-shadow:inset 0 -1px 0 rgba(0,0,0,.25)}kbd kbd{padding:0;font-size:100%;font-weight:700;box-shadow:none}pre{display:block;padding:9.5px;margin:0 0 10px;font-size:13px;line-height:1.42857143;color:#333;word-break:break-all;word-wrap:break-word;background-color:#f5f5f5;border:1px solid #ccc;border-radius:4px}pre code{padding:0;font-size:inherit;color:inherit;white-space:pre-wrap;background-color:transparent;border-radius:0}.pre-scrollable{max-height:340px;overflow-y:scroll}.container{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}@media (min-width:768px){.container{width:750px}}@media (min-width:992px){.container{width:970px}}@media (min-width:1200px){.container{width:1170px}}.container-fluid{padding-right:15px;padding-left:15px;margin-right:auto;margin-left:auto}.row{margin-right:-15px;margin-left:-15px}.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9,.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9,.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9,.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{position:relative;min-height:1px;padding-right:15px;padding-left:15px}.col-xs-1,.col-xs-10,.col-xs-11,.col-xs-12,.col-xs-2,.col-xs-3,.col-xs-4,.col-xs-5,.col-xs-6,.col-xs-7,.col-xs-8,.col-xs-9{float:left}.col-xs-12{width:100%}.col-xs-11{width:91.66666667%}.col-xs-10{width:83.33333333%}.col-xs-9{width:75%}.col-xs-8{width:66.66666667%}.col-xs-7{width:58.33333333%}.col-xs-6{width:50%}.col-xs-5{width:41.66666667%}.col-xs-4{width:33.33333333%}.col-xs-3{width:25%}.col-xs-2{width:16.66666667%}.col-xs-1{width:8.33333333%}.col-xs-pull-12{right:100%}.col-xs-pull-11{right:91.66666667%}.col-xs-pull-10{right:83.33333333%}.col-xs-pull-9{right:75%}.col-xs-pull-8{right:66.66666667%}.col-xs-pull-7{right:58.33333333%}.col-xs-pull-6{right:50%}.col-xs-pull-5{right:41.66666667%}.col-xs-pull-4{right:33.33333333%}.col-xs-pull-3{right:25%}.col-xs-pull-2{right:16.66666667%}.col-xs-pull-1{right:8.33333333%}.col-xs-pull-0{right:auto}.col-xs-push-12{left:100%}.col-xs-push-11{left:91.66666667%}.col-xs-push-10{left:83.33333333%}.col-xs-push-9{left:75%}.col-xs-push-8{left:66.66666667%}.col-xs-push-7{left:58.33333333%}.col-xs-push-6{left:50%}.col-xs-push-5{left:41.66666667%}.col-xs-push-4{left:33.33333333%}.col-xs-push-3{left:25%}.col-xs-push-2{left:16.66666667%}.col-xs-push-1{left:8.33333333%}.col-xs-push-0{left:auto}.col-xs-offset-12{margin-left:100%}.col-xs-offset-11{margin-left:91.66666667%}.col-xs-offset-10{margin-left:83.33333333%}.col-xs-offset-9{margin-left:75%}.col-xs-offset-8{margin-left:66.66666667%}.col-xs-offset-7{margin-left:58.33333333%}.col-xs-offset-6{margin-left:50%}.col-xs-offset-5{margin-left:41.66666667%}.col-xs-offset-4{margin-left:33.33333333%}.col-xs-offset-3{margin-left:25%}.col-xs-offset-2{margin-left:16.66666667%}.col-xs-offset-1{margin-left:8.33333333%}.col-xs-offset-0{margin-left:0}@media (min-width:768px){.col-sm-1,.col-sm-10,.col-sm-11,.col-sm-12,.col-sm-2,.col-sm-3,.col-sm-4,.col-sm-5,.col-sm-6,.col-sm-7,.col-sm-8,.col-sm-9{float:left}.col-sm-12{width:100%}.col-sm-11{width:91.66666667%}.col-sm-10{width:83.33333333%}.col-sm-9{width:75%}.col-sm-8{width:66.66666667%}.col-sm-7{width:58.33333333%}.col-sm-6{width:50%}.col-sm-5{width:41.66666667%}.col-sm-4{width:33.33333333%}.col-sm-3{width:25%}.col-sm-2{width:16.66666667%}.col-sm-1{width:8.33333333%}.col-sm-pull-12{right:100%}.col-sm-pull-11{right:91.66666667%}.col-sm-pull-10{right:83.33333333%}.col-sm-pull-9{right:75%}.col-sm-pull-8{right:66.66666667%}.col-sm-pull-7{right:58.33333333%}.col-sm-pull-6{right:50%}.col-sm-pull-5{right:41.66666667%}.col-sm-pull-4{right:33.33333333%}.col-sm-pull-3{right:25%}.col-sm-pull-2{right:16.66666667%}.col-sm-pull-1{right:8.33333333%}.col-sm-pull-0{right:auto}.col-sm-push-12{left:100%}.col-sm-push-11{left:91.66666667%}.col-sm-push-10{left:83.33333333%}.col-sm-push-9{left:75%}.col-sm-push-8{left:66.66666667%}.col-sm-push-7{left:58.33333333%}.col-sm-push-6{left:50%}.col-sm-push-5{left:41.66666667%}.col-sm-push-4{left:33.33333333%}.col-sm-push-3{left:25%}.col-sm-push-2{left:16.66666667%}.col-sm-push-1{left:8.33333333%}.col-sm-push-0{left:auto}.col-sm-offset-12{margin-left:100%}.col-sm-offset-11{margin-left:91.66666667%}.col-sm-offset-10{margin-left:83.33333333%}.col-sm-offset-9{margin-left:75%}.col-sm-offset-8{margin-left:66.66666667%}.col-sm-offset-7{margin-left:58.33333333%}.col-sm-offset-6{margin-left:50%}.col-sm-offset-5{margin-left:41.66666667%}.col-sm-offset-4{margin-left:33.33333333%}.col-sm-offset-3{margin-left:25%}.col-sm-offset-2{margin-left:16.66666667%}.col-sm-offset-1{margin-left:8.33333333%}.col-sm-offset-0{margin-left:0}}@media (min-width:992px){.col-md-1,.col-md-10,.col-md-11,.col-md-12,.col-md-2,.col-md-3,.col-md-4,.col-md-5,.col-md-6,.col-md-7,.col-md-8,.col-md-9{float:left}.col-md-12{width:100%}.col-md-11{width:91.66666667%}.col-md-10{width:83.33333333%}.col-md-9{width:75%}.col-md-8{width:66.66666667%}.col-md-7{width:58.33333333%}.col-md-6{width:50%}.col-md-5{width:41.66666667%}.col-md-4{width:33.33333333%}.col-md-3{width:25%}.col-md-2{width:16.66666667%}.col-md-1{width:8.33333333%}.col-md-pull-12{right:100%}.col-md-pull-11{right:91.66666667%}.col-md-pull-10{right:83.33333333%}.col-md-pull-9{right:75%}.col-md-pull-8{right:66.66666667%}.col-md-pull-7{right:58.33333333%}.col-md-pull-6{right:50%}.col-md-pull-5{right:41.66666667%}.col-md-pull-4{right:33.33333333%}.col-md-pull-3{right:25%}.col-md-pull-2{right:16.66666667%}.col-md-pull-1{right:8.33333333%}.col-md-pull-0{right:auto}.col-md-push-12{left:100%}.col-md-push-11{left:91.66666667%}.col-md-push-10{left:83.33333333%}.col-md-push-9{left:75%}.col-md-push-8{left:66.66666667%}.col-md-push-7{left:58.33333333%}.col-md-push-6{left:50%}.col-md-push-5{left:41.66666667%}.col-md-push-4{left:33.33333333%}.col-md-push-3{left:25%}.col-md-push-2{left:16.66666667%}.col-md-push-1{left:8.33333333%}.col-md-push-0{left:auto}.col-md-offset-12{margin-left:100%}.col-md-offset-11{margin-left:91.66666667%}.col-md-offset-10{margin-left:83.33333333%}.col-md-offset-9{margin-left:75%}.col-md-offset-8{margin-left:66.66666667%}.col-md-offset-7{margin-left:58.33333333%}.col-md-offset-6{margin-left:50%}.col-md-offset-5{margin-left:41.66666667%}.col-md-offset-4{margin-left:33.33333333%}.col-md-offset-3{margin-left:25%}.col-md-offset-2{margin-left:16.66666667%}.col-md-offset-1{margin-left:8.33333333%}.col-md-offset-0{margin-left:0}}@media (min-width:1200px){.col-lg-1,.col-lg-10,.col-lg-11,.col-lg-12,.col-lg-2,.col-lg-3,.col-lg-4,.col-lg-5,.col-lg-6,.col-lg-7,.col-lg-8,.col-lg-9{float:left}.col-lg-12{width:100%}.col-lg-11{width:91.66666667%}.col-lg-10{width:83.33333333%}.col-lg-9{width:75%}.col-lg-8{width:66.66666667%}.col-lg-7{width:58.33333333%}.col-lg-6{width:50%}.col-lg-5{width:41.66666667%}.col-lg-4{width:33.33333333%}.col-lg-3{width:25%}.col-lg-2{width:16.66666667%}.col-lg-1{width:8.33333333%}.col-lg-pull-12{right:100%}.col-lg-pull-11{right:91.66666667%}.col-lg-pull-10{right:83.33333333%}.col-lg-pull-9{right:75%}.col-lg-pull-8{right:66.66666667%}.col-lg-pull-7{right:58.33333333%}.col-lg-pull-6{right:50%}.col-lg-pull-5{right:41.66666667%}.col-lg-pull-4{right:33.33333333%}.col-lg-pull-3{right:25%}.col-lg-pull-2{right:16.66666667%}.col-lg-pull-1{right:8.33333333%}.col-lg-pull-0{right:auto}.col-lg-push-12{left:100%}.col-lg-push-11{left:91.66666667%}.col-lg-push-10{left:83.33333333%}.col-lg-push-9{left:75%}.col-lg-push-8{left:66.66666667%}.col-lg-push-7{left:58.33333333%}.col-lg-push-6{left:50%}.col-lg-push-5{left:41.66666667%}.col-lg-push-4{left:33.33333333%}.col-lg-push-3{left:25%}.col-lg-push-2{left:16.66666667%}.col-lg-push-1{left:8.33333333%}.col-lg-push-0{left:auto}.col-lg-offset-12{margin-left:100%}.col-lg-offset-11{margin-left:91.66666667%}.col-lg-offset-10{margin-left:83.33333333%}.col-lg-offset-9{margin-left:75%}.col-lg-offset-8{margin-left:66.66666667%}.col-lg-offset-7{margin-left:58.33333333%}.col-lg-offset-6{margin-left:50%}.col-lg-offset-5{margin-left:41.66666667%}.col-lg-offset-4{margin-left:33.33333333%}.col-lg-offset-3{margin-left:25%}.col-lg-offset-2{margin-left:16.66666667%}.col-lg-offset-1{margin-left:8.33333333%}.col-lg-offset-0{margin-left:0}}table{background-color:transparent}caption{padding-top:8px;padding-bottom:8px;color:#777;text-align:left}th{text-align:left}.table{width:100%;max-width:100%;margin-bottom:20px}.table>tbody>tr>td,.table>tbody>tr>th,.table>tfoot>tr>td,.table>tfoot>tr>th,.table>thead>tr>td,.table>thead>tr>th{padding:8px;line-height:1.42857143;vertical-align:top;border-top:1px solid #ddd}.table>thead>tr>th{vertical-align:bottom;border-bottom:2px solid #ddd}.table>caption+thead>tr:first-child>td,.table>caption+thead>tr:first-child>th,.table>colgroup+thead>tr:first-child>td,.table>colgroup+thead>tr:first-child>th,.table>thead:first-child>tr:first-child>td,.table>thead:first-child>tr:first-child>th{border-top:0}.table>tbody+tbody{border-top:2px solid #ddd}.table .table{background-color:#fff}.table-condensed>tbody>tr>td,.table-condensed>tbody>tr>th,.table-condensed>tfoot>tr>td,.table-condensed>tfoot>tr>th,.table-condensed>thead>tr>td,.table-condensed>thead>tr>th{padding:5px}.table-bordered{border:1px solid #ddd}.table-bordered>tbody>tr>td,.table-bordered>tbody>tr>th,.table-bordered>tfoot>tr>td,.table-bordered>tfoot>tr>th,.table-bordered>thead>tr>td,.table-bordered>thead>tr>th{border:1px solid #ddd}.table-bordered>thead>tr>td,.table-bordered>thead>tr>th{border-bottom-width:2px}.table-striped>tbody>tr:nth-of-type(odd){background-color:#f9f9f9}.table-hover>tbody>tr:hover{background-color:#f5f5f5}table col[class*=col-]{position:static;display:table-column;float:none}table td[class*=col-],table th[class*=col-]{position:static;display:table-cell;float:none}.table>tbody>tr.active>td,.table>tbody>tr.active>th,.table>tbody>tr>td.active,.table>tbody>tr>th.active,.table>tfoot>tr.active>td,.table>tfoot>tr.active>th,.table>tfoot>tr>td.active,.table>tfoot>tr>th.active,.table>thead>tr.active>td,.table>thead>tr.active>th,.table>thead>tr>td.active,.table>thead>tr>th.active{background-color:#f5f5f5}.table-hover>tbody>tr.active:hover>td,.table-hover>tbody>tr.active:hover>th,.table-hover>tbody>tr:hover>.active,.table-hover>tbody>tr>td.active:hover,.table-hover>tbody>tr>th.active:hover{background-color:#e8e8e8}.table>tbody>tr.success>td,.table>tbody>tr.success>th,.table>tbody>tr>td.success,.table>tbody>tr>th.success,.table>tfoot>tr.success>td,.table>tfoot>tr.success>th,.table>tfoot>tr>td.success,.table>tfoot>tr>th.success,.table>thead>tr.success>td,.table>thead>tr.success>th,.table>thead>tr>td.success,.table>thead>tr>th.success{background-color:#dff0d8}.table-hover>tbody>tr.success:hover>td,.table-hover>tbody>tr.success:hover>th,.table-hover>tbody>tr:hover>.success,.table-hover>tbody>tr>td.success:hover,.table-hover>tbody>tr>th.success:hover{background-color:#d0e9c6}.table>tbody>tr.info>td,.table>tbody>tr.info>th,.table>tbody>tr>td.info,.table>tbody>tr>th.info,.table>tfoot>tr.info>td,.table>tfoot>tr.info>th,.table>tfoot>tr>td.info,.table>tfoot>tr>th.info,.table>thead>tr.info>td,.table>thead>tr.info>th,.table>thead>tr>td.info,.table>thead>tr>th.info{background-color:#d9edf7}.table-hover>tbody>tr.info:hover>td,.table-hover>tbody>tr.info:hover>th,.table-hover>tbody>tr:hover>.info,.table-hover>tbody>tr>td.info:hover,.table-hover>tbody>tr>th.info:hover{background-color:#c4e3f3}.table>tbody>tr.warning>td,.table>tbody>tr.warning>th,.table>tbody>tr>td.warning,.table>tbody>tr>th.warning,.table>tfoot>tr.warning>td,.table>tfoot>tr.warning>th,.table>tfoot>tr>td.warning,.table>tfoot>tr>th.warning,.table>thead>tr.warning>td,.table>thead>tr.warning>th,.table>thead>tr>td.warning,.table>thead>tr>th.warning{background-color:#fcf8e3}.table-hover>tbody>tr.warning:hover>td,.table-hover>tbody>tr.warning:hover>th,.table-hover>tbody>tr:hover>.warning,.table-hover>tbody>tr>td.warning:hover,.table-hover>tbody>tr>th.warning:hover{background-color:#faf2cc}.table>tbody>tr.danger>td,.table>tbody>tr.danger>th,.table>tbody>tr>td.danger,.table>tbody>tr>th.danger,.table>tfoot>tr.danger>td,.table>tfoot>tr.danger>th,.table>tfoot>tr>td.danger,.table>tfoot>tr>th.danger,.table>thead>tr.danger>td,.table>thead>tr.danger>th,.table>thead>tr>td.danger,.table>thead>tr>th.danger{background-color:#f2dede}.table-hover>tbody>tr.danger:hover>td,.table-hover>tbody>tr.danger:hover>th,.table-hover>tbody>tr:hover>.danger,.table-hover>tbody>tr>td.danger:hover,.table-hover>tbody>tr>th.danger:hover{background-color:#ebcccc}.table-responsive{min-height:.01%;overflow-x:auto}@media screen and (max-width:767px){.table-responsive{width:100%;margin-bottom:15px;overflow-y:hidden;-ms-overflow-style:-ms-autohiding-scrollbar;border:1px solid #ddd}.table-responsive>.table{margin-bottom:0}.table-responsive>.table>tbody>tr>td,.table-responsive>.table>tbody>tr>th,.table-responsive>.table>tfoot>tr>td,.table-responsive>.table>tfoot>tr>th,.table-responsive>.table>thead>tr>td,.table-responsive>.table>thead>tr>th{white-space:nowrap}.table-responsive>.table-bordered{border:0}.table-responsive>.table-bordered>tbody>tr>td:first-child,.table-responsive>.table-bordered>tbody>tr>th:first-child,.table-responsive>.table-bordered>tfoot>tr>td:first-child,.table-responsive>.table-bordered>tfoot>tr>th:first-child,.table-responsive>.table-bordered>thead>tr>td:first-child,.table-responsive>.table-bordered>thead>tr>th:first-child{border-left:0}.table-responsive>.table-bordered>tbody>tr>td:last-child,.table-responsive>.table-bordered>tbody>tr>th:last-child,.table-responsive>.table-bordered>tfoot>tr>td:last-child,.table-responsive>.table-bordered>tfoot>tr>th:last-child,.table-responsive>.table-bordered>thead>tr>td:last-child,.table-responsive>.table-bordered>thead>tr>th:last-child{border-right:0}.table-responsive>.table-bordered>tbody>tr:last-child>td,.table-responsive>.table-bordered>tbody>tr:last-child>th,.table-responsive>.table-bordered>tfoot>tr:last-child>td,.table-responsive>.table-bordered>tfoot>tr:last-child>th{border-bottom:0}}fieldset{min-width:0;padding:0;margin:0;border:0}legend{display:block;width:100%;padding:0;margin-bottom:20px;font-size:21px;line-height:inherit;color:#333;border:0;border-bottom:1px solid #e5e5e5}label{display:inline-block;max-width:100%;margin-bottom:5px;font-weight:700}input[type=search]{box-sizing:border-box}input[type=checkbox],input[type=radio]{margin:4px 0 0;margin-top:1px\\9;line-height:normal}input[type=file]{display:block}input[type=range]{display:block;width:100%}select[multiple],select[size]{height:auto}input[type=file]:focus,input[type=checkbox]:focus,input[type=radio]:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}output{display:block;padding-top:7px;font-size:14px;line-height:1.42857143;color:#555}.form-control{display:block;width:100%;height:34px;padding:6px 12px;font-size:14px;line-height:1.42857143;color:#555;background-color:#fff;background-image:none;border:1px solid #ccc;border-radius:4px;box-shadow:inset 0 1px 1px rgba(0,0,0,.075);transition:border-color ease-in-out .15s,box-shadow ease-in-out .15s}.form-control:focus{border-color:#66afe9;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6)}.form-control::-moz-placeholder{color:#999;opacity:1}.form-control:-ms-input-placeholder{color:#999}.form-control::-webkit-input-placeholder{color:#999}.form-control::-ms-expand{background-color:transparent;border:0}.form-control[disabled],.form-control[readonly],fieldset[disabled] .form-control{background-color:#eee;opacity:1}.form-control[disabled],fieldset[disabled] .form-control{cursor:not-allowed}textarea.form-control{height:auto}input[type=search]{-webkit-appearance:none}@media screen and (-webkit-min-device-pixel-ratio:0){input[type=date].form-control,input[type=time].form-control,input[type=datetime-local].form-control,input[type=month].form-control{line-height:34px}.input-group-sm input[type=date],.input-group-sm input[type=time],.input-group-sm input[type=datetime-local],.input-group-sm input[type=month],input[type=date].input-sm,input[type=time].input-sm,input[type=datetime-local].input-sm,input[type=month].input-sm{line-height:30px}.input-group-lg input[type=date],.input-group-lg input[type=time],.input-group-lg input[type=datetime-local],.input-group-lg input[type=month],input[type=date].input-lg,input[type=time].input-lg,input[type=datetime-local].input-lg,input[type=month].input-lg{line-height:46px}}.form-group{margin-bottom:15px}.checkbox,.radio{position:relative;display:block;margin-top:10px;margin-bottom:10px}.checkbox label,.radio label{min-height:20px;padding-left:20px;margin-bottom:0;font-weight:400;cursor:pointer}.checkbox input[type=checkbox],.checkbox-inline input[type=checkbox],.radio input[type=radio],.radio-inline input[type=radio]{position:absolute;margin-top:4px\\9;margin-left:-20px}.checkbox+.checkbox,.radio+.radio{margin-top:-5px}.checkbox-inline,.radio-inline{position:relative;display:inline-block;padding-left:20px;margin-bottom:0;font-weight:400;vertical-align:middle;cursor:pointer}.checkbox-inline+.checkbox-inline,.radio-inline+.radio-inline{margin-top:0;margin-left:10px}fieldset[disabled] input[type=checkbox],fieldset[disabled] input[type=radio],input[type=checkbox].disabled,input[type=checkbox][disabled],input[type=radio].disabled,input[type=radio][disabled]{cursor:not-allowed}.checkbox-inline.disabled,.radio-inline.disabled,fieldset[disabled] .checkbox-inline,fieldset[disabled] .radio-inline{cursor:not-allowed}.checkbox.disabled label,.radio.disabled label,fieldset[disabled] .checkbox label,fieldset[disabled] .radio label{cursor:not-allowed}.form-control-static{min-height:34px;padding-top:7px;padding-bottom:7px;margin-bottom:0}.form-control-static.input-lg,.form-control-static.input-sm{padding-right:0;padding-left:0}.input-sm{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-sm{height:30px;line-height:30px}select[multiple].input-sm,textarea.input-sm{height:auto}.form-group-sm .form-control{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.form-group-sm select.form-control{height:30px;line-height:30px}.form-group-sm select[multiple].form-control,.form-group-sm textarea.form-control{height:auto}.form-group-sm .form-control-static{height:30px;min-height:32px;padding:6px 10px;font-size:12px;line-height:1.5}.input-lg{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}select.input-lg{height:46px;line-height:46px}select[multiple].input-lg,textarea.input-lg{height:auto}.form-group-lg .form-control{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}.form-group-lg select.form-control{height:46px;line-height:46px}.form-group-lg select[multiple].form-control,.form-group-lg textarea.form-control{height:auto}.form-group-lg .form-control-static{height:46px;min-height:38px;padding:11px 16px;font-size:18px;line-height:1.3333333}.has-feedback{position:relative}.has-feedback .form-control{padding-right:42.5px}.form-control-feedback{position:absolute;top:0;right:0;z-index:2;display:block;width:34px;height:34px;line-height:34px;text-align:center;pointer-events:none}.form-group-lg .form-control+.form-control-feedback,.input-group-lg+.form-control-feedback,.input-lg+.form-control-feedback{width:46px;height:46px;line-height:46px}.form-group-sm .form-control+.form-control-feedback,.input-group-sm+.form-control-feedback,.input-sm+.form-control-feedback{width:30px;height:30px;line-height:30px}.has-success .checkbox,.has-success .checkbox-inline,.has-success .control-label,.has-success .help-block,.has-success .radio,.has-success .radio-inline,.has-success.checkbox label,.has-success.checkbox-inline label,.has-success.radio label,.has-success.radio-inline label{color:#3c763d}.has-success .form-control{border-color:#3c763d;box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-success .form-control:focus{border-color:#2b542c;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #67b168}.has-success .input-group-addon{color:#3c763d;background-color:#dff0d8;border-color:#3c763d}.has-success .form-control-feedback{color:#3c763d}.has-warning .checkbox,.has-warning .checkbox-inline,.has-warning .control-label,.has-warning .help-block,.has-warning .radio,.has-warning .radio-inline,.has-warning.checkbox label,.has-warning.checkbox-inline label,.has-warning.radio label,.has-warning.radio-inline label{color:#8a6d3b}.has-warning .form-control{border-color:#8a6d3b;box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-warning .form-control:focus{border-color:#66512c;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #c0a16b}.has-warning .input-group-addon{color:#8a6d3b;background-color:#fcf8e3;border-color:#8a6d3b}.has-warning .form-control-feedback{color:#8a6d3b}.has-error .checkbox,.has-error .checkbox-inline,.has-error .control-label,.has-error .help-block,.has-error .radio,.has-error .radio-inline,.has-error.checkbox label,.has-error.checkbox-inline label,.has-error.radio label,.has-error.radio-inline label{color:#a94442}.has-error .form-control{border-color:#a94442;box-shadow:inset 0 1px 1px rgba(0,0,0,.075)}.has-error .form-control:focus{border-color:#843534;box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 6px #ce8483}.has-error .input-group-addon{color:#a94442;background-color:#f2dede;border-color:#a94442}.has-error .form-control-feedback{color:#a94442}.has-feedback label~.form-control-feedback{top:25px}.has-feedback label.sr-only~.form-control-feedback{top:0}.help-block{display:block;margin-top:5px;margin-bottom:10px;color:#737373}@media (min-width:768px){.form-inline .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.form-inline .form-control{display:inline-block;width:auto;vertical-align:middle}.form-inline .form-control-static{display:inline-block}.form-inline .input-group{display:inline-table;vertical-align:middle}.form-inline .input-group .form-control,.form-inline .input-group .input-group-addon,.form-inline .input-group .input-group-btn{width:auto}.form-inline .input-group>.form-control{width:100%}.form-inline .control-label{margin-bottom:0;vertical-align:middle}.form-inline .checkbox,.form-inline .radio{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.form-inline .checkbox label,.form-inline .radio label{padding-left:0}.form-inline .checkbox input[type=checkbox],.form-inline .radio input[type=radio]{position:relative;margin-left:0}.form-inline .has-feedback .form-control-feedback{top:0}}.form-horizontal .checkbox,.form-horizontal .checkbox-inline,.form-horizontal .radio,.form-horizontal .radio-inline{padding-top:7px;margin-top:0;margin-bottom:0}.form-horizontal .checkbox,.form-horizontal .radio{min-height:27px}.form-horizontal .form-group{margin-right:-15px;margin-left:-15px}@media (min-width:768px){.form-horizontal .control-label{padding-top:7px;margin-bottom:0;text-align:right}}.form-horizontal .has-feedback .form-control-feedback{right:15px}@media (min-width:768px){.form-horizontal .form-group-lg .control-label{padding-top:11px;font-size:18px}}@media (min-width:768px){.form-horizontal .form-group-sm .control-label{padding-top:6px;font-size:12px}}.btn{display:inline-block;padding:6px 12px;margin-bottom:0;font-size:14px;font-weight:400;line-height:1.42857143;text-align:center;white-space:nowrap;vertical-align:middle;-ms-touch-action:manipulation;touch-action:manipulation;cursor:pointer;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;background-image:none;border:1px solid transparent;border-radius:4px}.btn.active.focus,.btn.active:focus,.btn.focus,.btn:active.focus,.btn:active:focus,.btn:focus{outline:5px auto -webkit-focus-ring-color;outline-offset:-2px}.btn.focus,.btn:focus,.btn:hover{color:#333;text-decoration:none}.btn.active,.btn:active{background-image:none;outline:0;box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn.disabled,.btn[disabled],fieldset[disabled] .btn{cursor:not-allowed;filter:alpha(opacity=65);box-shadow:none;opacity:.65}a.btn.disabled,fieldset[disabled] a.btn{pointer-events:none}.btn-default{color:#333;background-color:#fff;border-color:#ccc}.btn-default.focus,.btn-default:focus{color:#333;background-color:#e6e6e6;border-color:#8c8c8c}.btn-default:hover{color:#333;background-color:#e6e6e6;border-color:#adadad}.btn-default.active,.btn-default:active,.open>.dropdown-toggle.btn-default{color:#333;background-color:#e6e6e6;border-color:#adadad}.btn-default.active.focus,.btn-default.active:focus,.btn-default.active:hover,.btn-default:active.focus,.btn-default:active:focus,.btn-default:active:hover,.open>.dropdown-toggle.btn-default.focus,.open>.dropdown-toggle.btn-default:focus,.open>.dropdown-toggle.btn-default:hover{color:#333;background-color:#d4d4d4;border-color:#8c8c8c}.btn-default.active,.btn-default:active,.open>.dropdown-toggle.btn-default{background-image:none}.btn-default.disabled.focus,.btn-default.disabled:focus,.btn-default.disabled:hover,.btn-default[disabled].focus,.btn-default[disabled]:focus,.btn-default[disabled]:hover,fieldset[disabled] .btn-default.focus,fieldset[disabled] .btn-default:focus,fieldset[disabled] .btn-default:hover{background-color:#fff;border-color:#ccc}.btn-default .badge{color:#fff;background-color:#333}.btn-primary{color:#fff;background-color:#337ab7;border-color:#2e6da4}.btn-primary.focus,.btn-primary:focus{color:#fff;background-color:#286090;border-color:#122b40}.btn-primary:hover{color:#fff;background-color:#286090;border-color:#204d74}.btn-primary.active,.btn-primary:active,.open>.dropdown-toggle.btn-primary{color:#fff;background-color:#286090;border-color:#204d74}.btn-primary.active.focus,.btn-primary.active:focus,.btn-primary.active:hover,.btn-primary:active.focus,.btn-primary:active:focus,.btn-primary:active:hover,.open>.dropdown-toggle.btn-primary.focus,.open>.dropdown-toggle.btn-primary:focus,.open>.dropdown-toggle.btn-primary:hover{color:#fff;background-color:#204d74;border-color:#122b40}.btn-primary.active,.btn-primary:active,.open>.dropdown-toggle.btn-primary{background-image:none}.btn-primary.disabled.focus,.btn-primary.disabled:focus,.btn-primary.disabled:hover,.btn-primary[disabled].focus,.btn-primary[disabled]:focus,.btn-primary[disabled]:hover,fieldset[disabled] .btn-primary.focus,fieldset[disabled] .btn-primary:focus,fieldset[disabled] .btn-primary:hover{background-color:#337ab7;border-color:#2e6da4}.btn-primary .badge{color:#337ab7;background-color:#fff}.btn-success{color:#fff;background-color:#5cb85c;border-color:#4cae4c}.btn-success.focus,.btn-success:focus{color:#fff;background-color:#449d44;border-color:#255625}.btn-success:hover{color:#fff;background-color:#449d44;border-color:#398439}.btn-success.active,.btn-success:active,.open>.dropdown-toggle.btn-success{color:#fff;background-color:#449d44;border-color:#398439}.btn-success.active.focus,.btn-success.active:focus,.btn-success.active:hover,.btn-success:active.focus,.btn-success:active:focus,.btn-success:active:hover,.open>.dropdown-toggle.btn-success.focus,.open>.dropdown-toggle.btn-success:focus,.open>.dropdown-toggle.btn-success:hover{color:#fff;background-color:#398439;border-color:#255625}.btn-success.active,.btn-success:active,.open>.dropdown-toggle.btn-success{background-image:none}.btn-success.disabled.focus,.btn-success.disabled:focus,.btn-success.disabled:hover,.btn-success[disabled].focus,.btn-success[disabled]:focus,.btn-success[disabled]:hover,fieldset[disabled] .btn-success.focus,fieldset[disabled] .btn-success:focus,fieldset[disabled] .btn-success:hover{background-color:#5cb85c;border-color:#4cae4c}.btn-success .badge{color:#5cb85c;background-color:#fff}.btn-info{color:#fff;background-color:#5bc0de;border-color:#46b8da}.btn-info.focus,.btn-info:focus{color:#fff;background-color:#31b0d5;border-color:#1b6d85}.btn-info:hover{color:#fff;background-color:#31b0d5;border-color:#269abc}.btn-info.active,.btn-info:active,.open>.dropdown-toggle.btn-info{color:#fff;background-color:#31b0d5;border-color:#269abc}.btn-info.active.focus,.btn-info.active:focus,.btn-info.active:hover,.btn-info:active.focus,.btn-info:active:focus,.btn-info:active:hover,.open>.dropdown-toggle.btn-info.focus,.open>.dropdown-toggle.btn-info:focus,.open>.dropdown-toggle.btn-info:hover{color:#fff;background-color:#269abc;border-color:#1b6d85}.btn-info.active,.btn-info:active,.open>.dropdown-toggle.btn-info{background-image:none}.btn-info.disabled.focus,.btn-info.disabled:focus,.btn-info.disabled:hover,.btn-info[disabled].focus,.btn-info[disabled]:focus,.btn-info[disabled]:hover,fieldset[disabled] .btn-info.focus,fieldset[disabled] .btn-info:focus,fieldset[disabled] .btn-info:hover{background-color:#5bc0de;border-color:#46b8da}.btn-info .badge{color:#5bc0de;background-color:#fff}.btn-warning{color:#fff;background-color:#f0ad4e;border-color:#eea236}.btn-warning.focus,.btn-warning:focus{color:#fff;background-color:#ec971f;border-color:#985f0d}.btn-warning:hover{color:#fff;background-color:#ec971f;border-color:#d58512}.btn-warning.active,.btn-warning:active,.open>.dropdown-toggle.btn-warning{color:#fff;background-color:#ec971f;border-color:#d58512}.btn-warning.active.focus,.btn-warning.active:focus,.btn-warning.active:hover,.btn-warning:active.focus,.btn-warning:active:focus,.btn-warning:active:hover,.open>.dropdown-toggle.btn-warning.focus,.open>.dropdown-toggle.btn-warning:focus,.open>.dropdown-toggle.btn-warning:hover{color:#fff;background-color:#d58512;border-color:#985f0d}.btn-warning.active,.btn-warning:active,.open>.dropdown-toggle.btn-warning{background-image:none}.btn-warning.disabled.focus,.btn-warning.disabled:focus,.btn-warning.disabled:hover,.btn-warning[disabled].focus,.btn-warning[disabled]:focus,.btn-warning[disabled]:hover,fieldset[disabled] .btn-warning.focus,fieldset[disabled] .btn-warning:focus,fieldset[disabled] .btn-warning:hover{background-color:#f0ad4e;border-color:#eea236}.btn-warning .badge{color:#f0ad4e;background-color:#fff}.btn-danger{color:#fff;background-color:#d9534f;border-color:#d43f3a}.btn-danger.focus,.btn-danger:focus{color:#fff;background-color:#c9302c;border-color:#761c19}.btn-danger:hover{color:#fff;background-color:#c9302c;border-color:#ac2925}.btn-danger.active,.btn-danger:active,.open>.dropdown-toggle.btn-danger{color:#fff;background-color:#c9302c;border-color:#ac2925}.btn-danger.active.focus,.btn-danger.active:focus,.btn-danger.active:hover,.btn-danger:active.focus,.btn-danger:active:focus,.btn-danger:active:hover,.open>.dropdown-toggle.btn-danger.focus,.open>.dropdown-toggle.btn-danger:focus,.open>.dropdown-toggle.btn-danger:hover{color:#fff;background-color:#ac2925;border-color:#761c19}.btn-danger.active,.btn-danger:active,.open>.dropdown-toggle.btn-danger{background-image:none}.btn-danger.disabled.focus,.btn-danger.disabled:focus,.btn-danger.disabled:hover,.btn-danger[disabled].focus,.btn-danger[disabled]:focus,.btn-danger[disabled]:hover,fieldset[disabled] .btn-danger.focus,fieldset[disabled] .btn-danger:focus,fieldset[disabled] .btn-danger:hover{background-color:#d9534f;border-color:#d43f3a}.btn-danger .badge{color:#d9534f;background-color:#fff}.btn-link{font-weight:400;color:#337ab7;border-radius:0}.btn-link,.btn-link.active,.btn-link:active,.btn-link[disabled],fieldset[disabled] .btn-link{background-color:transparent;box-shadow:none}.btn-link,.btn-link:active,.btn-link:focus,.btn-link:hover{border-color:transparent}.btn-link:focus,.btn-link:hover{color:#23527c;text-decoration:underline;background-color:transparent}.btn-link[disabled]:focus,.btn-link[disabled]:hover,fieldset[disabled] .btn-link:focus,fieldset[disabled] .btn-link:hover{color:#777;text-decoration:none}.btn-group-lg>.btn,.btn-lg{padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}.btn-group-sm>.btn,.btn-sm{padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}.btn-group-xs>.btn,.btn-xs{padding:1px 5px;font-size:12px;line-height:1.5;border-radius:3px}.btn-block{display:block;width:100%}.btn-block+.btn-block{margin-top:5px}input[type=button].btn-block,input[type=reset].btn-block,input[type=submit].btn-block{width:100%}.fade{opacity:0;transition:opacity .15s linear}.fade.in{opacity:1}.collapse{display:none}.collapse.in{display:block}tr.collapse.in{display:table-row}tbody.collapse.in{display:table-row-group}.collapsing{position:relative;height:0;overflow:hidden;transition-timing-function:ease;transition-duration:.35s;transition-property:height,visibility}.caret{display:inline-block;width:0;height:0;margin-left:2px;vertical-align:middle;border-top:4px dashed;border-top:4px solid\\9;border-right:4px solid transparent;border-left:4px solid transparent}.dropdown,.dropup{position:relative}.dropdown-toggle:focus{outline:0}.dropdown-menu{position:absolute;top:100%;left:0;z-index:1000;display:none;float:left;min-width:160px;padding:5px 0;margin:2px 0 0;font-size:14px;text-align:left;list-style:none;background-color:#fff;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.15);border-radius:4px;box-shadow:0 6px 12px rgba(0,0,0,.175)}.dropdown-menu.pull-right{right:0;left:auto}.dropdown-menu .divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.dropdown-menu>li>a{display:block;padding:3px 20px;clear:both;font-weight:400;line-height:1.42857143;color:#333;white-space:nowrap}.dropdown-menu>li>a:focus,.dropdown-menu>li>a:hover{color:#262626;text-decoration:none;background-color:#f5f5f5}.dropdown-menu>.active>a,.dropdown-menu>.active>a:focus,.dropdown-menu>.active>a:hover{color:#fff;text-decoration:none;background-color:#337ab7;outline:0}.dropdown-menu>.disabled>a,.dropdown-menu>.disabled>a:focus,.dropdown-menu>.disabled>a:hover{color:#777}.dropdown-menu>.disabled>a:focus,.dropdown-menu>.disabled>a:hover{text-decoration:none;cursor:not-allowed;background-color:transparent;background-image:none;filter:progid:DXImageTransform.Microsoft.gradient(enabled=false)}.open>.dropdown-menu{display:block}.open>a{outline:0}.dropdown-menu-right{right:0;left:auto}.dropdown-menu-left{right:auto;left:0}.dropdown-header{display:block;padding:3px 20px;font-size:12px;line-height:1.42857143;color:#777;white-space:nowrap}.dropdown-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:990}.pull-right>.dropdown-menu{right:0;left:auto}.dropup .caret,.navbar-fixed-bottom .dropdown .caret{content:\"\";border-top:0;border-bottom:4px dashed;border-bottom:4px solid\\9}.dropup .dropdown-menu,.navbar-fixed-bottom .dropdown .dropdown-menu{top:auto;bottom:100%;margin-bottom:2px}@media (min-width:768px){.navbar-right .dropdown-menu{right:0;left:auto}.navbar-right .dropdown-menu-left{right:auto;left:0}}.btn-group,.btn-group-vertical{position:relative;display:inline-block;vertical-align:middle}.btn-group-vertical>.btn,.btn-group>.btn{position:relative;float:left}.btn-group-vertical>.btn.active,.btn-group-vertical>.btn:active,.btn-group-vertical>.btn:focus,.btn-group-vertical>.btn:hover,.btn-group>.btn.active,.btn-group>.btn:active,.btn-group>.btn:focus,.btn-group>.btn:hover{z-index:2}.btn-group .btn+.btn,.btn-group .btn+.btn-group,.btn-group .btn-group+.btn,.btn-group .btn-group+.btn-group{margin-left:-1px}.btn-toolbar{margin-left:-5px}.btn-toolbar .btn,.btn-toolbar .btn-group,.btn-toolbar .input-group{float:left}.btn-toolbar>.btn,.btn-toolbar>.btn-group,.btn-toolbar>.input-group{margin-left:5px}.btn-group>.btn:not(:first-child):not(:last-child):not(.dropdown-toggle){border-radius:0}.btn-group>.btn:first-child{margin-left:0}.btn-group>.btn:first-child:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn:last-child:not(:first-child),.btn-group>.dropdown-toggle:not(:first-child){border-top-left-radius:0;border-bottom-left-radius:0}.btn-group>.btn-group{float:left}.btn-group>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-top-right-radius:0;border-bottom-right-radius:0}.btn-group>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-left-radius:0;border-bottom-left-radius:0}.btn-group .dropdown-toggle:active,.btn-group.open .dropdown-toggle{outline:0}.btn-group>.btn+.dropdown-toggle{padding-right:8px;padding-left:8px}.btn-group>.btn-lg+.dropdown-toggle{padding-right:12px;padding-left:12px}.btn-group.open .dropdown-toggle{box-shadow:inset 0 3px 5px rgba(0,0,0,.125)}.btn-group.open .dropdown-toggle.btn-link{box-shadow:none}.btn .caret{margin-left:0}.btn-lg .caret{border-width:5px 5px 0;border-bottom-width:0}.dropup .btn-lg .caret{border-width:0 5px 5px}.btn-group-vertical>.btn,.btn-group-vertical>.btn-group,.btn-group-vertical>.btn-group>.btn{display:block;float:none;width:100%;max-width:100%}.btn-group-vertical>.btn-group>.btn{float:none}.btn-group-vertical>.btn+.btn,.btn-group-vertical>.btn+.btn-group,.btn-group-vertical>.btn-group+.btn,.btn-group-vertical>.btn-group+.btn-group{margin-top:-1px;margin-left:0}.btn-group-vertical>.btn:not(:first-child):not(:last-child){border-radius:0}.btn-group-vertical>.btn:first-child:not(:last-child){border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn:last-child:not(:first-child){border-top-left-radius:0;border-top-right-radius:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px}.btn-group-vertical>.btn-group:not(:first-child):not(:last-child)>.btn{border-radius:0}.btn-group-vertical>.btn-group:first-child:not(:last-child)>.btn:last-child,.btn-group-vertical>.btn-group:first-child:not(:last-child)>.dropdown-toggle{border-bottom-right-radius:0;border-bottom-left-radius:0}.btn-group-vertical>.btn-group:last-child:not(:first-child)>.btn:first-child{border-top-left-radius:0;border-top-right-radius:0}.btn-group-justified{display:table;width:100%;table-layout:fixed;border-collapse:separate}.btn-group-justified>.btn,.btn-group-justified>.btn-group{display:table-cell;float:none;width:1%}.btn-group-justified>.btn-group .btn{width:100%}.btn-group-justified>.btn-group .dropdown-menu{left:auto}[data-toggle=buttons]>.btn input[type=checkbox],[data-toggle=buttons]>.btn input[type=radio],[data-toggle=buttons]>.btn-group>.btn input[type=checkbox],[data-toggle=buttons]>.btn-group>.btn input[type=radio]{position:absolute;clip:rect(0,0,0,0);pointer-events:none}.input-group{position:relative;display:table;border-collapse:separate}.input-group[class*=col-]{float:none;padding-right:0;padding-left:0}.input-group .form-control{position:relative;z-index:2;float:left;width:100%;margin-bottom:0}.input-group .form-control:focus{z-index:3}.input-group-lg>.form-control,.input-group-lg>.input-group-addon,.input-group-lg>.input-group-btn>.btn{height:46px;padding:10px 16px;font-size:18px;line-height:1.3333333;border-radius:6px}select.input-group-lg>.form-control,select.input-group-lg>.input-group-addon,select.input-group-lg>.input-group-btn>.btn{height:46px;line-height:46px}select[multiple].input-group-lg>.form-control,select[multiple].input-group-lg>.input-group-addon,select[multiple].input-group-lg>.input-group-btn>.btn,textarea.input-group-lg>.form-control,textarea.input-group-lg>.input-group-addon,textarea.input-group-lg>.input-group-btn>.btn{height:auto}.input-group-sm>.form-control,.input-group-sm>.input-group-addon,.input-group-sm>.input-group-btn>.btn{height:30px;padding:5px 10px;font-size:12px;line-height:1.5;border-radius:3px}select.input-group-sm>.form-control,select.input-group-sm>.input-group-addon,select.input-group-sm>.input-group-btn>.btn{height:30px;line-height:30px}select[multiple].input-group-sm>.form-control,select[multiple].input-group-sm>.input-group-addon,select[multiple].input-group-sm>.input-group-btn>.btn,textarea.input-group-sm>.form-control,textarea.input-group-sm>.input-group-addon,textarea.input-group-sm>.input-group-btn>.btn{height:auto}.input-group .form-control,.input-group-addon,.input-group-btn{display:table-cell}.input-group .form-control:not(:first-child):not(:last-child),.input-group-addon:not(:first-child):not(:last-child),.input-group-btn:not(:first-child):not(:last-child){border-radius:0}.input-group-addon,.input-group-btn{width:1%;white-space:nowrap;vertical-align:middle}.input-group-addon{padding:6px 12px;font-size:14px;font-weight:400;line-height:1;color:#555;text-align:center;background-color:#eee;border:1px solid #ccc;border-radius:4px}.input-group-addon.input-sm{padding:5px 10px;font-size:12px;border-radius:3px}.input-group-addon.input-lg{padding:10px 16px;font-size:18px;border-radius:6px}.input-group-addon input[type=checkbox],.input-group-addon input[type=radio]{margin-top:0}.input-group .form-control:first-child,.input-group-addon:first-child,.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group>.btn,.input-group-btn:first-child>.dropdown-toggle,.input-group-btn:last-child>.btn-group:not(:last-child)>.btn,.input-group-btn:last-child>.btn:not(:last-child):not(.dropdown-toggle){border-top-right-radius:0;border-bottom-right-radius:0}.input-group-addon:first-child{border-right:0}.input-group .form-control:last-child,.input-group-addon:last-child,.input-group-btn:first-child>.btn-group:not(:first-child)>.btn,.input-group-btn:first-child>.btn:not(:first-child),.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group>.btn,.input-group-btn:last-child>.dropdown-toggle{border-top-left-radius:0;border-bottom-left-radius:0}.input-group-addon:last-child{border-left:0}.input-group-btn{position:relative;font-size:0;white-space:nowrap}.input-group-btn>.btn{position:relative}.input-group-btn>.btn+.btn{margin-left:-1px}.input-group-btn>.btn:active,.input-group-btn>.btn:focus,.input-group-btn>.btn:hover{z-index:2}.input-group-btn:first-child>.btn,.input-group-btn:first-child>.btn-group{margin-right:-1px}.input-group-btn:last-child>.btn,.input-group-btn:last-child>.btn-group{z-index:2;margin-left:-1px}.nav{padding-left:0;margin-bottom:0;list-style:none}.nav>li{position:relative;display:block}.nav>li>a{position:relative;display:block;padding:10px 15px}.nav>li>a:focus,.nav>li>a:hover{text-decoration:none;background-color:#eee}.nav>li.disabled>a{color:#777}.nav>li.disabled>a:focus,.nav>li.disabled>a:hover{color:#777;text-decoration:none;cursor:not-allowed;background-color:transparent}.nav .open>a,.nav .open>a:focus,.nav .open>a:hover{background-color:#eee;border-color:#337ab7}.nav .nav-divider{height:1px;margin:9px 0;overflow:hidden;background-color:#e5e5e5}.nav>li>a>img{max-width:none}.nav-tabs{border-bottom:1px solid #ddd}.nav-tabs>li{float:left;margin-bottom:-1px}.nav-tabs>li>a{margin-right:2px;line-height:1.42857143;border:1px solid transparent;border-radius:4px 4px 0 0}.nav-tabs>li>a:hover{border-color:#eee #eee #ddd}.nav-tabs>li.active>a,.nav-tabs>li.active>a:focus,.nav-tabs>li.active>a:hover{color:#555;cursor:default;background-color:#fff;border:1px solid #ddd;border-bottom-color:transparent}.nav-tabs.nav-justified{width:100%;border-bottom:0}.nav-tabs.nav-justified>li{float:none}.nav-tabs.nav-justified>li>a{margin-bottom:5px;text-align:center}.nav-tabs.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-tabs.nav-justified>li{display:table-cell;width:1%}.nav-tabs.nav-justified>li>a{margin-bottom:0}}.nav-tabs.nav-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.nav-tabs.nav-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs.nav-justified>.active>a,.nav-tabs.nav-justified>.active>a:focus,.nav-tabs.nav-justified>.active>a:hover{border-bottom-color:#fff}}.nav-pills>li{float:left}.nav-pills>li>a{border-radius:4px}.nav-pills>li+li{margin-left:2px}.nav-pills>li.active>a,.nav-pills>li.active>a:focus,.nav-pills>li.active>a:hover{color:#fff;background-color:#337ab7}.nav-stacked>li{float:none}.nav-stacked>li+li{margin-top:2px;margin-left:0}.nav-justified{width:100%}.nav-justified>li{float:none}.nav-justified>li>a{margin-bottom:5px;text-align:center}.nav-justified>.dropdown .dropdown-menu{top:auto;left:auto}@media (min-width:768px){.nav-justified>li{display:table-cell;width:1%}.nav-justified>li>a{margin-bottom:0}}.nav-tabs-justified{border-bottom:0}.nav-tabs-justified>li>a{margin-right:0;border-radius:4px}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover{border:1px solid #ddd}@media (min-width:768px){.nav-tabs-justified>li>a{border-bottom:1px solid #ddd;border-radius:4px 4px 0 0}.nav-tabs-justified>.active>a,.nav-tabs-justified>.active>a:focus,.nav-tabs-justified>.active>a:hover{border-bottom-color:#fff}}.tab-content>.tab-pane{display:none}.tab-content>.active{display:block}.nav-tabs .dropdown-menu{margin-top:-1px;border-top-left-radius:0;border-top-right-radius:0}.navbar{position:relative;min-height:50px;margin-bottom:20px;border:1px solid transparent}@media (min-width:768px){.navbar{border-radius:4px}}@media (min-width:768px){.navbar-header{float:left}}.navbar-collapse{padding-right:15px;padding-left:15px;overflow-x:visible;-webkit-overflow-scrolling:touch;border-top:1px solid transparent;box-shadow:inset 0 1px 0 rgba(255,255,255,.1)}.navbar-collapse.in{overflow-y:auto}@media (min-width:768px){.navbar-collapse{width:auto;border-top:0;box-shadow:none}.navbar-collapse.collapse{display:block!important;height:auto!important;padding-bottom:0;overflow:visible!important}.navbar-collapse.in{overflow-y:visible}.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse,.navbar-static-top .navbar-collapse{padding-right:0;padding-left:0}}.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse{max-height:340px}@media (max-device-width:480px) and (orientation:landscape){.navbar-fixed-bottom .navbar-collapse,.navbar-fixed-top .navbar-collapse{max-height:200px}}.container-fluid>.navbar-collapse,.container-fluid>.navbar-header,.container>.navbar-collapse,.container>.navbar-header{margin-right:-15px;margin-left:-15px}@media (min-width:768px){.container-fluid>.navbar-collapse,.container-fluid>.navbar-header,.container>.navbar-collapse,.container>.navbar-header{margin-right:0;margin-left:0}}.navbar-static-top{z-index:1000;border-width:0 0 1px}@media (min-width:768px){.navbar-static-top{border-radius:0}}.navbar-fixed-bottom,.navbar-fixed-top{position:fixed;right:0;left:0;z-index:1030}@media (min-width:768px){.navbar-fixed-bottom,.navbar-fixed-top{border-radius:0}}.navbar-fixed-top{top:0;border-width:0 0 1px}.navbar-fixed-bottom{bottom:0;margin-bottom:0;border-width:1px 0 0}.navbar-brand{float:left;height:50px;padding:15px 15px;font-size:18px;line-height:20px}.navbar-brand:focus,.navbar-brand:hover{text-decoration:none}.navbar-brand>img{display:block}@media (min-width:768px){.navbar>.container .navbar-brand,.navbar>.container-fluid .navbar-brand{margin-left:-15px}}.navbar-toggle{position:relative;float:right;padding:9px 10px;margin-top:8px;margin-right:15px;margin-bottom:8px;background-color:transparent;background-image:none;border:1px solid transparent;border-radius:4px}.navbar-toggle:focus{outline:0}.navbar-toggle .icon-bar{display:block;width:22px;height:2px;border-radius:1px}.navbar-toggle .icon-bar+.icon-bar{margin-top:4px}@media (min-width:768px){.navbar-toggle{display:none}}.navbar-nav{margin:7.5px -15px}.navbar-nav>li>a{padding-top:10px;padding-bottom:10px;line-height:20px}@media (max-width:767px){.navbar-nav .open .dropdown-menu{position:static;float:none;width:auto;margin-top:0;background-color:transparent;border:0;box-shadow:none}.navbar-nav .open .dropdown-menu .dropdown-header,.navbar-nav .open .dropdown-menu>li>a{padding:5px 15px 5px 25px}.navbar-nav .open .dropdown-menu>li>a{line-height:20px}.navbar-nav .open .dropdown-menu>li>a:focus,.navbar-nav .open .dropdown-menu>li>a:hover{background-image:none}}@media (min-width:768px){.navbar-nav{float:left;margin:0}.navbar-nav>li{float:left}.navbar-nav>li>a{padding-top:15px;padding-bottom:15px}}.navbar-form{padding:10px 15px;margin-top:8px;margin-right:-15px;margin-bottom:8px;margin-left:-15px;border-top:1px solid transparent;border-bottom:1px solid transparent;box-shadow:inset 0 1px 0 rgba(255,255,255,.1),0 1px 0 rgba(255,255,255,.1)}@media (min-width:768px){.navbar-form .form-group{display:inline-block;margin-bottom:0;vertical-align:middle}.navbar-form .form-control{display:inline-block;width:auto;vertical-align:middle}.navbar-form .form-control-static{display:inline-block}.navbar-form .input-group{display:inline-table;vertical-align:middle}.navbar-form .input-group .form-control,.navbar-form .input-group .input-group-addon,.navbar-form .input-group .input-group-btn{width:auto}.navbar-form .input-group>.form-control{width:100%}.navbar-form .control-label{margin-bottom:0;vertical-align:middle}.navbar-form .checkbox,.navbar-form .radio{display:inline-block;margin-top:0;margin-bottom:0;vertical-align:middle}.navbar-form .checkbox label,.navbar-form .radio label{padding-left:0}.navbar-form .checkbox input[type=checkbox],.navbar-form .radio input[type=radio]{position:relative;margin-left:0}.navbar-form .has-feedback .form-control-feedback{top:0}}@media (max-width:767px){.navbar-form .form-group{margin-bottom:5px}.navbar-form .form-group:last-child{margin-bottom:0}}@media (min-width:768px){.navbar-form{width:auto;padding-top:0;padding-bottom:0;margin-right:0;margin-left:0;border:0;box-shadow:none}}.navbar-nav>li>.dropdown-menu{margin-top:0;border-top-left-radius:0;border-top-right-radius:0}.navbar-fixed-bottom .navbar-nav>li>.dropdown-menu{margin-bottom:0;border-top-left-radius:4px;border-top-right-radius:4px;border-bottom-right-radius:0;border-bottom-left-radius:0}.navbar-btn{margin-top:8px;margin-bottom:8px}.navbar-btn.btn-sm{margin-top:10px;margin-bottom:10px}.navbar-btn.btn-xs{margin-top:14px;margin-bottom:14px}.navbar-text{margin-top:15px;margin-bottom:15px}@media (min-width:768px){.navbar-text{float:left;margin-right:15px;margin-left:15px}}@media (min-width:768px){.navbar-left{float:left!important}.navbar-right{float:right!important;margin-right:-15px}.navbar-right~.navbar-right{margin-right:0}}.navbar-default{background-color:#f8f8f8;border-color:#e7e7e7}.navbar-default .navbar-brand{color:#777}.navbar-default .navbar-brand:focus,.navbar-default .navbar-brand:hover{color:#5e5e5e;background-color:transparent}.navbar-default .navbar-text{color:#777}.navbar-default .navbar-nav>li>a{color:#777}.navbar-default .navbar-nav>li>a:focus,.navbar-default .navbar-nav>li>a:hover{color:#333;background-color:transparent}.navbar-default .navbar-nav>.active>a,.navbar-default .navbar-nav>.active>a:focus,.navbar-default .navbar-nav>.active>a:hover{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav>.disabled>a,.navbar-default .navbar-nav>.disabled>a:focus,.navbar-default .navbar-nav>.disabled>a:hover{color:#ccc;background-color:transparent}.navbar-default .navbar-toggle{border-color:#ddd}.navbar-default .navbar-toggle:focus,.navbar-default .navbar-toggle:hover{background-color:#ddd}.navbar-default .navbar-toggle .icon-bar{background-color:#888}.navbar-default .navbar-collapse,.navbar-default .navbar-form{border-color:#e7e7e7}.navbar-default .navbar-nav>.open>a,.navbar-default .navbar-nav>.open>a:focus,.navbar-default .navbar-nav>.open>a:hover{color:#555;background-color:#e7e7e7}@media (max-width:767px){.navbar-default .navbar-nav .open .dropdown-menu>li>a{color:#777}.navbar-default .navbar-nav .open .dropdown-menu>li>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>li>a:hover{color:#333;background-color:transparent}.navbar-default .navbar-nav .open .dropdown-menu>.active>a,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.active>a:hover{color:#555;background-color:#e7e7e7}.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:focus,.navbar-default .navbar-nav .open .dropdown-menu>.disabled>a:hover{color:#ccc;background-color:transparent}}.navbar-default .navbar-link{color:#777}.navbar-default .navbar-link:hover{color:#333}.navbar-default .btn-link{color:#777}.navbar-default .btn-link:focus,.navbar-default .btn-link:hover{color:#333}.navbar-default .btn-link[disabled]:focus,.navbar-default .btn-link[disabled]:hover,fieldset[disabled] .navbar-default .btn-link:focus,fieldset[disabled] .navbar-default .btn-link:hover{color:#ccc}.navbar-inverse{background-color:#222;border-color:#080808}.navbar-inverse .navbar-brand{color:#9d9d9d}.navbar-inverse .navbar-brand:focus,.navbar-inverse .navbar-brand:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-text{color:#9d9d9d}.navbar-inverse .navbar-nav>li>a{color:#9d9d9d}.navbar-inverse .navbar-nav>li>a:focus,.navbar-inverse .navbar-nav>li>a:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav>.active>a,.navbar-inverse .navbar-nav>.active>a:focus,.navbar-inverse .navbar-nav>.active>a:hover{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav>.disabled>a,.navbar-inverse .navbar-nav>.disabled>a:focus,.navbar-inverse .navbar-nav>.disabled>a:hover{color:#444;background-color:transparent}.navbar-inverse .navbar-toggle{border-color:#333}.navbar-inverse .navbar-toggle:focus,.navbar-inverse .navbar-toggle:hover{background-color:#333}.navbar-inverse .navbar-toggle .icon-bar{background-color:#fff}.navbar-inverse .navbar-collapse,.navbar-inverse .navbar-form{border-color:#101010}.navbar-inverse .navbar-nav>.open>a,.navbar-inverse .navbar-nav>.open>a:focus,.navbar-inverse .navbar-nav>.open>a:hover{color:#fff;background-color:#080808}@media (max-width:767px){.navbar-inverse .navbar-nav .open .dropdown-menu>.dropdown-header{border-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu .divider{background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a{color:#9d9d9d}.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>li>a:hover{color:#fff;background-color:transparent}.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>.active>a:hover{color:#fff;background-color:#080808}.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:focus,.navbar-inverse .navbar-nav .open .dropdown-menu>.disabled>a:hover{color:#444;background-color:transparent}}.navbar-inverse .navbar-link{color:#9d9d9d}.navbar-inverse .navbar-link:hover{color:#fff}.navbar-inverse .btn-link{color:#9d9d9d}.navbar-inverse .btn-link:focus,.navbar-inverse .btn-link:hover{color:#fff}.navbar-inverse .btn-link[disabled]:focus,.navbar-inverse .btn-link[disabled]:hover,fieldset[disabled] .navbar-inverse .btn-link:focus,fieldset[disabled] .navbar-inverse .btn-link:hover{color:#444}.breadcrumb{padding:8px 15px;margin-bottom:20px;list-style:none;background-color:#f5f5f5;border-radius:4px}.breadcrumb>li{display:inline-block}.breadcrumb>li+li:before{padding:0 5px;color:#ccc;content:\"/\\A0\"}.breadcrumb>.active{color:#777}.pagination{display:inline-block;padding-left:0;margin:20px 0;border-radius:4px}.pagination>li{display:inline}.pagination>li>a,.pagination>li>span{position:relative;float:left;padding:6px 12px;margin-left:-1px;line-height:1.42857143;color:#337ab7;text-decoration:none;background-color:#fff;border:1px solid #ddd}.pagination>li:first-child>a,.pagination>li:first-child>span{margin-left:0;border-top-left-radius:4px;border-bottom-left-radius:4px}.pagination>li:last-child>a,.pagination>li:last-child>span{border-top-right-radius:4px;border-bottom-right-radius:4px}.pagination>li>a:focus,.pagination>li>a:hover,.pagination>li>span:focus,.pagination>li>span:hover{z-index:2;color:#23527c;background-color:#eee;border-color:#ddd}.pagination>.active>a,.pagination>.active>a:focus,.pagination>.active>a:hover,.pagination>.active>span,.pagination>.active>span:focus,.pagination>.active>span:hover{z-index:3;color:#fff;cursor:default;background-color:#337ab7;border-color:#337ab7}.pagination>.disabled>a,.pagination>.disabled>a:focus,.pagination>.disabled>a:hover,.pagination>.disabled>span,.pagination>.disabled>span:focus,.pagination>.disabled>span:hover{color:#777;cursor:not-allowed;background-color:#fff;border-color:#ddd}.pagination-lg>li>a,.pagination-lg>li>span{padding:10px 16px;font-size:18px;line-height:1.3333333}.pagination-lg>li:first-child>a,.pagination-lg>li:first-child>span{border-top-left-radius:6px;border-bottom-left-radius:6px}.pagination-lg>li:last-child>a,.pagination-lg>li:last-child>span{border-top-right-radius:6px;border-bottom-right-radius:6px}.pagination-sm>li>a,.pagination-sm>li>span{padding:5px 10px;font-size:12px;line-height:1.5}.pagination-sm>li:first-child>a,.pagination-sm>li:first-child>span{border-top-left-radius:3px;border-bottom-left-radius:3px}.pagination-sm>li:last-child>a,.pagination-sm>li:last-child>span{border-top-right-radius:3px;border-bottom-right-radius:3px}.pager{padding-left:0;margin:20px 0;text-align:center;list-style:none}.pager li{display:inline}.pager li>a,.pager li>span{display:inline-block;padding:5px 14px;background-color:#fff;border:1px solid #ddd;border-radius:15px}.pager li>a:focus,.pager li>a:hover{text-decoration:none;background-color:#eee}.pager .next>a,.pager .next>span{float:right}.pager .previous>a,.pager .previous>span{float:left}.pager .disabled>a,.pager .disabled>a:focus,.pager .disabled>a:hover,.pager .disabled>span{color:#777;cursor:not-allowed;background-color:#fff}.label{display:inline;padding:.2em .6em .3em;font-size:75%;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:baseline;border-radius:.25em}a.label:focus,a.label:hover{color:#fff;text-decoration:none;cursor:pointer}.label:empty{display:none}.btn .label{position:relative;top:-1px}.label-default{background-color:#777}.label-default[href]:focus,.label-default[href]:hover{background-color:#5e5e5e}.label-primary{background-color:#337ab7}.label-primary[href]:focus,.label-primary[href]:hover{background-color:#286090}.label-success{background-color:#5cb85c}.label-success[href]:focus,.label-success[href]:hover{background-color:#449d44}.label-info{background-color:#5bc0de}.label-info[href]:focus,.label-info[href]:hover{background-color:#31b0d5}.label-warning{background-color:#f0ad4e}.label-warning[href]:focus,.label-warning[href]:hover{background-color:#ec971f}.label-danger{background-color:#d9534f}.label-danger[href]:focus,.label-danger[href]:hover{background-color:#c9302c}.badge{display:inline-block;min-width:10px;padding:3px 7px;font-size:12px;font-weight:700;line-height:1;color:#fff;text-align:center;white-space:nowrap;vertical-align:middle;background-color:#777;border-radius:10px}.badge:empty{display:none}.btn .badge{position:relative;top:-1px}.btn-group-xs>.btn .badge,.btn-xs .badge{top:0;padding:1px 5px}a.badge:focus,a.badge:hover{color:#fff;text-decoration:none;cursor:pointer}.list-group-item.active>.badge,.nav-pills>.active>a>.badge{color:#337ab7;background-color:#fff}.list-group-item>.badge{float:right}.list-group-item>.badge+.badge{margin-right:5px}.nav-pills>li>a>.badge{margin-left:3px}.jumbotron{padding-top:30px;padding-bottom:30px;margin-bottom:30px;color:inherit;background-color:#eee}.jumbotron .h1,.jumbotron h1{color:inherit}.jumbotron p{margin-bottom:15px;font-size:21px;font-weight:200}.jumbotron>hr{border-top-color:#d5d5d5}.container .jumbotron,.container-fluid .jumbotron{padding-right:15px;padding-left:15px;border-radius:6px}.jumbotron .container{max-width:100%}@media screen and (min-width:768px){.jumbotron{padding-top:48px;padding-bottom:48px}.container .jumbotron,.container-fluid .jumbotron{padding-right:60px;padding-left:60px}.jumbotron .h1,.jumbotron h1{font-size:63px}}.thumbnail{display:block;padding:4px;margin-bottom:20px;line-height:1.42857143;background-color:#fff;border:1px solid #ddd;border-radius:4px;transition:border .2s ease-in-out}.thumbnail a>img,.thumbnail>img{margin-right:auto;margin-left:auto}a.thumbnail.active,a.thumbnail:focus,a.thumbnail:hover{border-color:#337ab7}.thumbnail .caption{padding:9px;color:#333}.alert{padding:15px;margin-bottom:20px;border:1px solid transparent;border-radius:4px}.alert h4{margin-top:0;color:inherit}.alert .alert-link{font-weight:700}.alert>p,.alert>ul{margin-bottom:0}.alert>p+p{margin-top:5px}.alert-dismissable,.alert-dismissible{padding-right:35px}.alert-dismissable .close,.alert-dismissible .close{position:relative;top:-2px;right:-21px;color:inherit}.alert-success{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.alert-success hr{border-top-color:#c9e2b3}.alert-success .alert-link{color:#2b542c}.alert-info{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.alert-info hr{border-top-color:#a6e1ec}.alert-info .alert-link{color:#245269}.alert-warning{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}.alert-warning hr{border-top-color:#f7e1b5}.alert-warning .alert-link{color:#66512c}.alert-danger{color:#a94442;background-color:#f2dede;border-color:#ebccd1}.alert-danger hr{border-top-color:#e4b9c0}.alert-danger .alert-link{color:#843534}@-webkit-keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}@keyframes progress-bar-stripes{from{background-position:40px 0}to{background-position:0 0}}.progress{height:20px;margin-bottom:20px;overflow:hidden;background-color:#f5f5f5;border-radius:4px;box-shadow:inset 0 1px 2px rgba(0,0,0,.1)}.progress-bar{float:left;width:0;height:100%;font-size:12px;line-height:20px;color:#fff;text-align:center;background-color:#337ab7;box-shadow:inset 0 -1px 0 rgba(0,0,0,.15);transition:width .6s ease}.progress-bar-striped,.progress-striped .progress-bar{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent);background-size:40px 40px}.progress-bar.active,.progress.active .progress-bar{-webkit-animation:progress-bar-stripes 2s linear infinite;animation:progress-bar-stripes 2s linear infinite}.progress-bar-success{background-color:#5cb85c}.progress-striped .progress-bar-success{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-info{background-color:#5bc0de}.progress-striped .progress-bar-info{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-warning{background-color:#f0ad4e}.progress-striped .progress-bar-warning{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.progress-bar-danger{background-color:#d9534f}.progress-striped .progress-bar-danger{background-image:linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)}.media{margin-top:15px}.media:first-child{margin-top:0}.media,.media-body{overflow:hidden;zoom:1}.media-body{width:10000px}.media-object{display:block}.media-object.img-thumbnail{max-width:none}.media-right,.media>.pull-right{padding-left:10px}.media-left,.media>.pull-left{padding-right:10px}.media-body,.media-left,.media-right{display:table-cell;vertical-align:top}.media-middle{vertical-align:middle}.media-bottom{vertical-align:bottom}.media-heading{margin-top:0;margin-bottom:5px}.media-list{padding-left:0;list-style:none}.list-group{padding-left:0;margin-bottom:20px}.list-group-item{position:relative;display:block;padding:10px 15px;margin-bottom:-1px;background-color:#fff;border:1px solid #ddd}.list-group-item:first-child{border-top-left-radius:4px;border-top-right-radius:4px}.list-group-item:last-child{margin-bottom:0;border-bottom-right-radius:4px;border-bottom-left-radius:4px}a.list-group-item,button.list-group-item{color:#555}a.list-group-item .list-group-item-heading,button.list-group-item .list-group-item-heading{color:#333}a.list-group-item:focus,a.list-group-item:hover,button.list-group-item:focus,button.list-group-item:hover{color:#555;text-decoration:none;background-color:#f5f5f5}button.list-group-item{width:100%;text-align:left}.list-group-item.disabled,.list-group-item.disabled:focus,.list-group-item.disabled:hover{color:#777;cursor:not-allowed;background-color:#eee}.list-group-item.disabled .list-group-item-heading,.list-group-item.disabled:focus .list-group-item-heading,.list-group-item.disabled:hover .list-group-item-heading{color:inherit}.list-group-item.disabled .list-group-item-text,.list-group-item.disabled:focus .list-group-item-text,.list-group-item.disabled:hover .list-group-item-text{color:#777}.list-group-item.active,.list-group-item.active:focus,.list-group-item.active:hover{z-index:2;color:#fff;background-color:#337ab7;border-color:#337ab7}.list-group-item.active .list-group-item-heading,.list-group-item.active .list-group-item-heading>.small,.list-group-item.active .list-group-item-heading>small,.list-group-item.active:focus .list-group-item-heading,.list-group-item.active:focus .list-group-item-heading>.small,.list-group-item.active:focus .list-group-item-heading>small,.list-group-item.active:hover .list-group-item-heading,.list-group-item.active:hover .list-group-item-heading>.small,.list-group-item.active:hover .list-group-item-heading>small{color:inherit}.list-group-item.active .list-group-item-text,.list-group-item.active:focus .list-group-item-text,.list-group-item.active:hover .list-group-item-text{color:#c7ddef}.list-group-item-success{color:#3c763d;background-color:#dff0d8}a.list-group-item-success,button.list-group-item-success{color:#3c763d}a.list-group-item-success .list-group-item-heading,button.list-group-item-success .list-group-item-heading{color:inherit}a.list-group-item-success:focus,a.list-group-item-success:hover,button.list-group-item-success:focus,button.list-group-item-success:hover{color:#3c763d;background-color:#d0e9c6}a.list-group-item-success.active,a.list-group-item-success.active:focus,a.list-group-item-success.active:hover,button.list-group-item-success.active,button.list-group-item-success.active:focus,button.list-group-item-success.active:hover{color:#fff;background-color:#3c763d;border-color:#3c763d}.list-group-item-info{color:#31708f;background-color:#d9edf7}a.list-group-item-info,button.list-group-item-info{color:#31708f}a.list-group-item-info .list-group-item-heading,button.list-group-item-info .list-group-item-heading{color:inherit}a.list-group-item-info:focus,a.list-group-item-info:hover,button.list-group-item-info:focus,button.list-group-item-info:hover{color:#31708f;background-color:#c4e3f3}a.list-group-item-info.active,a.list-group-item-info.active:focus,a.list-group-item-info.active:hover,button.list-group-item-info.active,button.list-group-item-info.active:focus,button.list-group-item-info.active:hover{color:#fff;background-color:#31708f;border-color:#31708f}.list-group-item-warning{color:#8a6d3b;background-color:#fcf8e3}a.list-group-item-warning,button.list-group-item-warning{color:#8a6d3b}a.list-group-item-warning .list-group-item-heading,button.list-group-item-warning .list-group-item-heading{color:inherit}a.list-group-item-warning:focus,a.list-group-item-warning:hover,button.list-group-item-warning:focus,button.list-group-item-warning:hover{color:#8a6d3b;background-color:#faf2cc}a.list-group-item-warning.active,a.list-group-item-warning.active:focus,a.list-group-item-warning.active:hover,button.list-group-item-warning.active,button.list-group-item-warning.active:focus,button.list-group-item-warning.active:hover{color:#fff;background-color:#8a6d3b;border-color:#8a6d3b}.list-group-item-danger{color:#a94442;background-color:#f2dede}a.list-group-item-danger,button.list-group-item-danger{color:#a94442}a.list-group-item-danger .list-group-item-heading,button.list-group-item-danger .list-group-item-heading{color:inherit}a.list-group-item-danger:focus,a.list-group-item-danger:hover,button.list-group-item-danger:focus,button.list-group-item-danger:hover{color:#a94442;background-color:#ebcccc}a.list-group-item-danger.active,a.list-group-item-danger.active:focus,a.list-group-item-danger.active:hover,button.list-group-item-danger.active,button.list-group-item-danger.active:focus,button.list-group-item-danger.active:hover{color:#fff;background-color:#a94442;border-color:#a94442}.list-group-item-heading{margin-top:0;margin-bottom:5px}.list-group-item-text{margin-bottom:0;line-height:1.3}.panel{margin-bottom:20px;background-color:#fff;border:1px solid transparent;border-radius:4px;box-shadow:0 1px 1px rgba(0,0,0,.05)}.panel-body{padding:15px}.panel-heading{padding:10px 15px;border-bottom:1px solid transparent;border-top-left-radius:3px;border-top-right-radius:3px}.panel-heading>.dropdown .dropdown-toggle{color:inherit}.panel-title{margin-top:0;margin-bottom:0;font-size:16px;color:inherit}.panel-title>.small,.panel-title>.small>a,.panel-title>a,.panel-title>small,.panel-title>small>a{color:inherit}.panel-footer{padding:10px 15px;background-color:#f5f5f5;border-top:1px solid #ddd;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.list-group,.panel>.panel-collapse>.list-group{margin-bottom:0}.panel>.list-group .list-group-item,.panel>.panel-collapse>.list-group .list-group-item{border-width:1px 0;border-radius:0}.panel>.list-group:first-child .list-group-item:first-child,.panel>.panel-collapse>.list-group:first-child .list-group-item:first-child{border-top:0;border-top-left-radius:3px;border-top-right-radius:3px}.panel>.list-group:last-child .list-group-item:last-child,.panel>.panel-collapse>.list-group:last-child .list-group-item:last-child{border-bottom:0;border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.panel-heading+.panel-collapse>.list-group .list-group-item:first-child{border-top-left-radius:0;border-top-right-radius:0}.panel-heading+.list-group .list-group-item:first-child{border-top-width:0}.list-group+.panel-footer{border-top-width:0}.panel>.panel-collapse>.table,.panel>.table,.panel>.table-responsive>.table{margin-bottom:0}.panel>.panel-collapse>.table caption,.panel>.table caption,.panel>.table-responsive>.table caption{padding-right:15px;padding-left:15px}.panel>.table-responsive:first-child>.table:first-child,.panel>.table:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child,.panel>.table:first-child>thead:first-child>tr:first-child{border-top-left-radius:3px;border-top-right-radius:3px}.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:first-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:first-child,.panel>.table:first-child>thead:first-child>tr:first-child td:first-child,.panel>.table:first-child>thead:first-child>tr:first-child th:first-child{border-top-left-radius:3px}.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table-responsive:first-child>.table:first-child>thead:first-child>tr:first-child th:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child td:last-child,.panel>.table:first-child>tbody:first-child>tr:first-child th:last-child,.panel>.table:first-child>thead:first-child>tr:first-child td:last-child,.panel>.table:first-child>thead:first-child>tr:first-child th:last-child{border-top-right-radius:3px}.panel>.table-responsive:last-child>.table:last-child,.panel>.table:last-child{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child{border-bottom-right-radius:3px;border-bottom-left-radius:3px}.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child td:first-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:first-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:first-child{border-bottom-left-radius:3px}.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table-responsive:last-child>.table:last-child>tfoot:last-child>tr:last-child th:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child td:last-child,.panel>.table:last-child>tbody:last-child>tr:last-child th:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child td:last-child,.panel>.table:last-child>tfoot:last-child>tr:last-child th:last-child{border-bottom-right-radius:3px}.panel>.panel-body+.table,.panel>.panel-body+.table-responsive,.panel>.table+.panel-body,.panel>.table-responsive+.panel-body{border-top:1px solid #ddd}.panel>.table>tbody:first-child>tr:first-child td,.panel>.table>tbody:first-child>tr:first-child th{border-top:0}.panel>.table-bordered,.panel>.table-responsive>.table-bordered{border:0}.panel>.table-bordered>tbody>tr>td:first-child,.panel>.table-bordered>tbody>tr>th:first-child,.panel>.table-bordered>tfoot>tr>td:first-child,.panel>.table-bordered>tfoot>tr>th:first-child,.panel>.table-bordered>thead>tr>td:first-child,.panel>.table-bordered>thead>tr>th:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:first-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:first-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:first-child,.panel>.table-responsive>.table-bordered>thead>tr>td:first-child,.panel>.table-responsive>.table-bordered>thead>tr>th:first-child{border-left:0}.panel>.table-bordered>tbody>tr>td:last-child,.panel>.table-bordered>tbody>tr>th:last-child,.panel>.table-bordered>tfoot>tr>td:last-child,.panel>.table-bordered>tfoot>tr>th:last-child,.panel>.table-bordered>thead>tr>td:last-child,.panel>.table-bordered>thead>tr>th:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>td:last-child,.panel>.table-responsive>.table-bordered>tbody>tr>th:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>td:last-child,.panel>.table-responsive>.table-bordered>tfoot>tr>th:last-child,.panel>.table-responsive>.table-bordered>thead>tr>td:last-child,.panel>.table-responsive>.table-bordered>thead>tr>th:last-child{border-right:0}.panel>.table-bordered>tbody>tr:first-child>td,.panel>.table-bordered>tbody>tr:first-child>th,.panel>.table-bordered>thead>tr:first-child>td,.panel>.table-bordered>thead>tr:first-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:first-child>th,.panel>.table-responsive>.table-bordered>thead>tr:first-child>td,.panel>.table-responsive>.table-bordered>thead>tr:first-child>th{border-bottom:0}.panel>.table-bordered>tbody>tr:last-child>td,.panel>.table-bordered>tbody>tr:last-child>th,.panel>.table-bordered>tfoot>tr:last-child>td,.panel>.table-bordered>tfoot>tr:last-child>th,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>td,.panel>.table-responsive>.table-bordered>tbody>tr:last-child>th,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>td,.panel>.table-responsive>.table-bordered>tfoot>tr:last-child>th{border-bottom:0}.panel>.table-responsive{margin-bottom:0;border:0}.panel-group{margin-bottom:20px}.panel-group .panel{margin-bottom:0;border-radius:4px}.panel-group .panel+.panel{margin-top:5px}.panel-group .panel-heading{border-bottom:0}.panel-group .panel-heading+.panel-collapse>.list-group,.panel-group .panel-heading+.panel-collapse>.panel-body{border-top:1px solid #ddd}.panel-group .panel-footer{border-top:0}.panel-group .panel-footer+.panel-collapse .panel-body{border-bottom:1px solid #ddd}.panel-default{border-color:#ddd}.panel-default>.panel-heading{color:#333;background-color:#f5f5f5;border-color:#ddd}.panel-default>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ddd}.panel-default>.panel-heading .badge{color:#f5f5f5;background-color:#333}.panel-default>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ddd}.panel-primary{border-color:#337ab7}.panel-primary>.panel-heading{color:#fff;background-color:#337ab7;border-color:#337ab7}.panel-primary>.panel-heading+.panel-collapse>.panel-body{border-top-color:#337ab7}.panel-primary>.panel-heading .badge{color:#337ab7;background-color:#fff}.panel-primary>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#337ab7}.panel-success{border-color:#d6e9c6}.panel-success>.panel-heading{color:#3c763d;background-color:#dff0d8;border-color:#d6e9c6}.panel-success>.panel-heading+.panel-collapse>.panel-body{border-top-color:#d6e9c6}.panel-success>.panel-heading .badge{color:#dff0d8;background-color:#3c763d}.panel-success>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#d6e9c6}.panel-info{border-color:#bce8f1}.panel-info>.panel-heading{color:#31708f;background-color:#d9edf7;border-color:#bce8f1}.panel-info>.panel-heading+.panel-collapse>.panel-body{border-top-color:#bce8f1}.panel-info>.panel-heading .badge{color:#d9edf7;background-color:#31708f}.panel-info>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#bce8f1}.panel-warning{border-color:#faebcc}.panel-warning>.panel-heading{color:#8a6d3b;background-color:#fcf8e3;border-color:#faebcc}.panel-warning>.panel-heading+.panel-collapse>.panel-body{border-top-color:#faebcc}.panel-warning>.panel-heading .badge{color:#fcf8e3;background-color:#8a6d3b}.panel-warning>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#faebcc}.panel-danger{border-color:#ebccd1}.panel-danger>.panel-heading{color:#a94442;background-color:#f2dede;border-color:#ebccd1}.panel-danger>.panel-heading+.panel-collapse>.panel-body{border-top-color:#ebccd1}.panel-danger>.panel-heading .badge{color:#f2dede;background-color:#a94442}.panel-danger>.panel-footer+.panel-collapse>.panel-body{border-bottom-color:#ebccd1}.embed-responsive{position:relative;display:block;height:0;padding:0;overflow:hidden}.embed-responsive .embed-responsive-item,.embed-responsive embed,.embed-responsive iframe,.embed-responsive object,.embed-responsive video{position:absolute;top:0;bottom:0;left:0;width:100%;height:100%;border:0}.embed-responsive-16by9{padding-bottom:56.25%}.embed-responsive-4by3{padding-bottom:75%}.well{min-height:20px;padding:19px;margin-bottom:20px;background-color:#f5f5f5;border:1px solid #e3e3e3;border-radius:4px;box-shadow:inset 0 1px 1px rgba(0,0,0,.05)}.well blockquote{border-color:#ddd;border-color:rgba(0,0,0,.15)}.well-lg{padding:24px;border-radius:6px}.well-sm{padding:9px;border-radius:3px}.close{float:right;font-size:21px;font-weight:700;line-height:1;color:#000;text-shadow:0 1px 0 #fff;filter:alpha(opacity=20);opacity:.2}.close:focus,.close:hover{color:#000;text-decoration:none;cursor:pointer;filter:alpha(opacity=50);opacity:.5}button.close{-webkit-appearance:none;padding:0;cursor:pointer;background:0 0;border:0}.modal-open{overflow:hidden}.modal{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1050;display:none;overflow:hidden;-webkit-overflow-scrolling:touch;outline:0}.modal.fade .modal-dialog{transition:-webkit-transform .3s ease-out;transition:transform .3s ease-out;transition:transform .3s ease-out, -webkit-transform .3s ease-out;-webkit-transform:translate(0,-25%);transform:translate(0,-25%)}.modal.in .modal-dialog{-webkit-transform:translate(0,0);transform:translate(0,0)}.modal-open .modal{overflow-x:hidden;overflow-y:auto}.modal-dialog{position:relative;width:auto;margin:10px}.modal-content{position:relative;background-color:#fff;background-clip:padding-box;border:1px solid #999;border:1px solid rgba(0,0,0,.2);border-radius:6px;outline:0;box-shadow:0 3px 9px rgba(0,0,0,.5)}.modal-backdrop{position:fixed;top:0;right:0;bottom:0;left:0;z-index:1040;background-color:#000}.modal-backdrop.fade{filter:alpha(opacity=0);opacity:0}.modal-backdrop.in{filter:alpha(opacity=50);opacity:.5}.modal-header{padding:15px;border-bottom:1px solid #e5e5e5}.modal-header .close{margin-top:-2px}.modal-title{margin:0;line-height:1.42857143}.modal-body{position:relative;padding:15px}.modal-footer{padding:15px;text-align:right;border-top:1px solid #e5e5e5}.modal-footer .btn+.btn{margin-bottom:0;margin-left:5px}.modal-footer .btn-group .btn+.btn{margin-left:-1px}.modal-footer .btn-block+.btn-block{margin-left:0}.modal-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}@media (min-width:768px){.modal-dialog{width:600px;margin:30px auto}.modal-content{box-shadow:0 5px 15px rgba(0,0,0,.5)}.modal-sm{width:300px}}@media (min-width:992px){.modal-lg{width:900px}}.tooltip{position:absolute;z-index:1070;display:block;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:12px;font-style:normal;font-weight:400;line-height:1.42857143;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;word-wrap:normal;white-space:normal;filter:alpha(opacity=0);opacity:0;line-break:auto}.tooltip.in{filter:alpha(opacity=90);opacity:.9}.tooltip.top{padding:5px 0;margin-top:-3px}.tooltip.right{padding:0 5px;margin-left:3px}.tooltip.bottom{padding:5px 0;margin-top:3px}.tooltip.left{padding:0 5px;margin-left:-3px}.tooltip-inner{max-width:200px;padding:3px 8px;color:#fff;text-align:center;background-color:#000;border-radius:4px}.tooltip-arrow{position:absolute;width:0;height:0;border-color:transparent;border-style:solid}.tooltip.top .tooltip-arrow{bottom:0;left:50%;margin-left:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-left .tooltip-arrow{right:5px;bottom:0;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.top-right .tooltip-arrow{bottom:0;left:5px;margin-bottom:-5px;border-width:5px 5px 0;border-top-color:#000}.tooltip.right .tooltip-arrow{top:50%;left:0;margin-top:-5px;border-width:5px 5px 5px 0;border-right-color:#000}.tooltip.left .tooltip-arrow{top:50%;right:0;margin-top:-5px;border-width:5px 0 5px 5px;border-left-color:#000}.tooltip.bottom .tooltip-arrow{top:0;left:50%;margin-left:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-left .tooltip-arrow{top:0;right:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.tooltip.bottom-right .tooltip-arrow{top:0;left:5px;margin-top:-5px;border-width:0 5px 5px;border-bottom-color:#000}.popover{position:absolute;top:0;left:0;z-index:1060;display:none;max-width:276px;padding:1px;font-family:\"Helvetica Neue\",Helvetica,Arial,sans-serif;font-size:14px;font-style:normal;font-weight:400;line-height:1.42857143;text-align:left;text-align:start;text-decoration:none;text-shadow:none;text-transform:none;letter-spacing:normal;word-break:normal;word-spacing:normal;word-wrap:normal;white-space:normal;background-color:#fff;background-clip:padding-box;border:1px solid #ccc;border:1px solid rgba(0,0,0,.2);border-radius:6px;box-shadow:0 5px 10px rgba(0,0,0,.2);line-break:auto}.popover.top{margin-top:-10px}.popover.right{margin-left:10px}.popover.bottom{margin-top:10px}.popover.left{margin-left:-10px}.popover-title{padding:8px 14px;margin:0;font-size:14px;background-color:#f7f7f7;border-bottom:1px solid #ebebeb;border-radius:5px 5px 0 0}.popover-content{padding:9px 14px}.popover>.arrow,.popover>.arrow:after{position:absolute;display:block;width:0;height:0;border-color:transparent;border-style:solid}.popover>.arrow{border-width:11px}.popover>.arrow:after{content:\"\";border-width:10px}.popover.top>.arrow{bottom:-11px;left:50%;margin-left:-11px;border-top-color:#999;border-top-color:rgba(0,0,0,.25);border-bottom-width:0}.popover.top>.arrow:after{bottom:1px;margin-left:-10px;content:\" \";border-top-color:#fff;border-bottom-width:0}.popover.right>.arrow{top:50%;left:-11px;margin-top:-11px;border-right-color:#999;border-right-color:rgba(0,0,0,.25);border-left-width:0}.popover.right>.arrow:after{bottom:-10px;left:1px;content:\" \";border-right-color:#fff;border-left-width:0}.popover.bottom>.arrow{top:-11px;left:50%;margin-left:-11px;border-top-width:0;border-bottom-color:#999;border-bottom-color:rgba(0,0,0,.25)}.popover.bottom>.arrow:after{top:1px;margin-left:-10px;content:\" \";border-top-width:0;border-bottom-color:#fff}.popover.left>.arrow{top:50%;right:-11px;margin-top:-11px;border-right-width:0;border-left-color:#999;border-left-color:rgba(0,0,0,.25)}.popover.left>.arrow:after{right:1px;bottom:-10px;content:\" \";border-right-width:0;border-left-color:#fff}.carousel{position:relative}.carousel-inner{position:relative;width:100%;overflow:hidden}.carousel-inner>.item{position:relative;display:none;transition:.6s ease-in-out left}.carousel-inner>.item>a>img,.carousel-inner>.item>img{line-height:1}@media all and (transform-3d),(-webkit-transform-3d){.carousel-inner>.item{transition:-webkit-transform .6s ease-in-out;transition:transform .6s ease-in-out;transition:transform .6s ease-in-out, -webkit-transform .6s ease-in-out;-webkit-backface-visibility:hidden;backface-visibility:hidden;-webkit-perspective:1000px;perspective:1000px}.carousel-inner>.item.active.right,.carousel-inner>.item.next{left:0;-webkit-transform:translate3d(100%,0,0);transform:translate3d(100%,0,0)}.carousel-inner>.item.active.left,.carousel-inner>.item.prev{left:0;-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}.carousel-inner>.item.active,.carousel-inner>.item.next.left,.carousel-inner>.item.prev.right{left:0;-webkit-transform:translate3d(0,0,0);transform:translate3d(0,0,0)}}.carousel-inner>.active,.carousel-inner>.next,.carousel-inner>.prev{display:block}.carousel-inner>.active{left:0}.carousel-inner>.next,.carousel-inner>.prev{position:absolute;top:0;width:100%}.carousel-inner>.next{left:100%}.carousel-inner>.prev{left:-100%}.carousel-inner>.next.left,.carousel-inner>.prev.right{left:0}.carousel-inner>.active.left{left:-100%}.carousel-inner>.active.right{left:100%}.carousel-control{position:absolute;top:0;bottom:0;left:0;width:15%;font-size:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.6);background-color:rgba(0,0,0,0);filter:alpha(opacity=50);opacity:.5}.carousel-control.left{background-image:linear-gradient(to right,rgba(0,0,0,.5) 0,rgba(0,0,0,.0001) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#80000000', endColorstr='#00000000', GradientType=1);background-repeat:repeat-x}.carousel-control.right{right:0;left:auto;background-image:linear-gradient(to right,rgba(0,0,0,.0001) 0,rgba(0,0,0,.5) 100%);filter:progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000', endColorstr='#80000000', GradientType=1);background-repeat:repeat-x}.carousel-control:focus,.carousel-control:hover{color:#fff;text-decoration:none;filter:alpha(opacity=90);outline:0;opacity:.9}.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next,.carousel-control .icon-prev{position:absolute;top:50%;z-index:5;display:inline-block;margin-top:-10px}.carousel-control .glyphicon-chevron-left,.carousel-control .icon-prev{left:50%;margin-left:-10px}.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next{right:50%;margin-right:-10px}.carousel-control .icon-next,.carousel-control .icon-prev{width:20px;height:20px;font-family:serif;line-height:1}.carousel-control .icon-prev:before{content:'\\2039'}.carousel-control .icon-next:before{content:'\\203A'}.carousel-indicators{position:absolute;bottom:10px;left:50%;z-index:15;width:60%;padding-left:0;margin-left:-30%;text-align:center;list-style:none}.carousel-indicators li{display:inline-block;width:10px;height:10px;margin:1px;text-indent:-999px;cursor:pointer;background-color:#000\\9;background-color:rgba(0,0,0,0);border:1px solid #fff;border-radius:10px}.carousel-indicators .active{width:12px;height:12px;margin:0;background-color:#fff}.carousel-caption{position:absolute;right:15%;bottom:20px;left:15%;z-index:10;padding-top:20px;padding-bottom:20px;color:#fff;text-align:center;text-shadow:0 1px 2px rgba(0,0,0,.6)}.carousel-caption .btn{text-shadow:none}@media screen and (min-width:768px){.carousel-control .glyphicon-chevron-left,.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next,.carousel-control .icon-prev{width:30px;height:30px;margin-top:-10px;font-size:30px}.carousel-control .glyphicon-chevron-left,.carousel-control .icon-prev{margin-left:-10px}.carousel-control .glyphicon-chevron-right,.carousel-control .icon-next{margin-right:-10px}.carousel-caption{right:20%;left:20%;padding-bottom:30px}.carousel-indicators{bottom:20px}}.btn-group-vertical>.btn-group:after,.btn-group-vertical>.btn-group:before,.btn-toolbar:after,.btn-toolbar:before,.clearfix:after,.clearfix:before,.container-fluid:after,.container-fluid:before,.container:after,.container:before,.dl-horizontal dd:after,.dl-horizontal dd:before,.form-horizontal .form-group:after,.form-horizontal .form-group:before,.modal-footer:after,.modal-footer:before,.modal-header:after,.modal-header:before,.nav:after,.nav:before,.navbar-collapse:after,.navbar-collapse:before,.navbar-header:after,.navbar-header:before,.navbar:after,.navbar:before,.pager:after,.pager:before,.panel-body:after,.panel-body:before,.row:after,.row:before{display:table;content:\" \"}.btn-group-vertical>.btn-group:after,.btn-toolbar:after,.clearfix:after,.container-fluid:after,.container:after,.dl-horizontal dd:after,.form-horizontal .form-group:after,.modal-footer:after,.modal-header:after,.nav:after,.navbar-collapse:after,.navbar-header:after,.navbar:after,.pager:after,.panel-body:after,.row:after{clear:both}.center-block{display:block;margin-right:auto;margin-left:auto}.pull-right{float:right!important}.pull-left{float:left!important}.hide{display:none!important}.show{display:block!important}.invisible{visibility:hidden}.text-hide{font:0/0 a;color:transparent;text-shadow:none;background-color:transparent;border:0}.hidden{display:none!important}.affix{position:fixed}@-ms-viewport{width:device-width}.visible-lg,.visible-md,.visible-sm,.visible-xs{display:none!important}.visible-lg-block,.visible-lg-inline,.visible-lg-inline-block,.visible-md-block,.visible-md-inline,.visible-md-inline-block,.visible-sm-block,.visible-sm-inline,.visible-sm-inline-block,.visible-xs-block,.visible-xs-inline,.visible-xs-inline-block{display:none!important}@media (max-width:767px){.visible-xs{display:block!important}table.visible-xs{display:table!important}tr.visible-xs{display:table-row!important}td.visible-xs,th.visible-xs{display:table-cell!important}}@media (max-width:767px){.visible-xs-block{display:block!important}}@media (max-width:767px){.visible-xs-inline{display:inline!important}}@media (max-width:767px){.visible-xs-inline-block{display:inline-block!important}}@media (min-width:768px) and (max-width:991px){.visible-sm{display:block!important}table.visible-sm{display:table!important}tr.visible-sm{display:table-row!important}td.visible-sm,th.visible-sm{display:table-cell!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-block{display:block!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline{display:inline!important}}@media (min-width:768px) and (max-width:991px){.visible-sm-inline-block{display:inline-block!important}}@media (min-width:992px) and (max-width:1199px){.visible-md{display:block!important}table.visible-md{display:table!important}tr.visible-md{display:table-row!important}td.visible-md,th.visible-md{display:table-cell!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-block{display:block!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline{display:inline!important}}@media (min-width:992px) and (max-width:1199px){.visible-md-inline-block{display:inline-block!important}}@media (min-width:1200px){.visible-lg{display:block!important}table.visible-lg{display:table!important}tr.visible-lg{display:table-row!important}td.visible-lg,th.visible-lg{display:table-cell!important}}@media (min-width:1200px){.visible-lg-block{display:block!important}}@media (min-width:1200px){.visible-lg-inline{display:inline!important}}@media (min-width:1200px){.visible-lg-inline-block{display:inline-block!important}}@media (max-width:767px){.hidden-xs{display:none!important}}@media (min-width:768px) and (max-width:991px){.hidden-sm{display:none!important}}@media (min-width:992px) and (max-width:1199px){.hidden-md{display:none!important}}@media (min-width:1200px){.hidden-lg{display:none!important}}.visible-print{display:none!important}@media print{.visible-print{display:block!important}table.visible-print{display:table!important}tr.visible-print{display:table-row!important}td.visible-print,th.visible-print{display:table-cell!important}}.visible-print-block{display:none!important}@media print{.visible-print-block{display:block!important}}.visible-print-inline{display:none!important}@media print{.visible-print-inline{display:inline!important}}.visible-print-inline-block{display:none!important}@media print{.visible-print-inline-block{display:inline-block!important}}@media print{.hidden-print{display:none!important}}\n/*# sourceMappingURL=bootstrap.min.css.map */", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ })

},[544]);
//# sourceMappingURL=main.bundle.js.map