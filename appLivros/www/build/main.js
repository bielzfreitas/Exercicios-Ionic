webpackJsonp([3],{

/***/ 109:
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
webpackEmptyAsyncContext.id = 109;

/***/ }),

/***/ 150:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/adicionar-livro/adicionar-livro.module": [
		281,
		2
	],
	"../pages/alterar-livro/alterar-livro.module": [
		282,
		1
	],
	"../pages/destino/destino.module": [
		151
	],
	"../pages/gerenciar/gerenciar.module": [
		153
	],
	"../pages/livro/livro.module": [
		283,
		0
	],
	"../pages/livros/livros.module": [
		157
	],
	"../pages/pesquisar/pesquisar.module": [
		155
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 150;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DestinoPageModule", function() { return DestinoPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__destino__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var DestinoPageModule = (function () {
    function DestinoPageModule() {
    }
    DestinoPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__destino__["a" /* DestinoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__destino__["a" /* DestinoPage */]),
            ],
        })
    ], DestinoPageModule);
    return DestinoPageModule;
}());

//# sourceMappingURL=destino.module.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DestinoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DestinoPage = (function () {
    function DestinoPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.item = this.navParams.get("livroSelecionado");
    }
    DestinoPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad DestinoPage');
    };
    DestinoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-destino',template:/*ion-inline-start:"C:\Users\gabri.DESKTOP-ICS07HG\Documents\Ionic\ionic-master\appLivros\src\pages\destino\destino.html"*/`\n<ion-header>\n<ion-navbar>\n  <ion-title>{{item.nome}}</ion-title>\n</ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n<ion-card>\n  <ion-card-content>\n  <ion-card-title>\n  Título:{{item.nome}}\n  </ion-card-title>\n  <p>\n  Autor:{{item.autor}}<br/>\n  Editora:{{item.editora}}\n  </p>\n  </ion-card-content>\n</ion-card>\n</ion-content>`/*ion-inline-end:"C:\Users\gabri.DESKTOP-ICS07HG\Documents\Ionic\ionic-master\appLivros\src\pages\destino\destino.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], DestinoPage);
    return DestinoPage;
}());

//# sourceMappingURL=destino.js.map

/***/ }),

/***/ 153:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GerenciarPageModule", function() { return GerenciarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__gerenciar__ = __webpack_require__(154);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var GerenciarPageModule = (function () {
    function GerenciarPageModule() {
    }
    GerenciarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__gerenciar__["a" /* GerenciarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__gerenciar__["a" /* GerenciarPage */]),
            ],
        })
    ], GerenciarPageModule);
    return GerenciarPageModule;
}());

//# sourceMappingURL=gerenciar.module.js.map

/***/ }),

/***/ 154:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GerenciarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var GerenciarPage = (function () {
    function GerenciarPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    GerenciarPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad GerenciarPage');
    };
    GerenciarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-gerenciar',template:/*ion-inline-start:"C:\Users\gabri.DESKTOP-ICS07HG\Documents\Ionic\ionic-master\appLivros\src\pages\gerenciar\gerenciar.html"*/`<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Cadastrar Livros</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n    <ion-list>\n\n        <ion-item>\n          <ion-label>Titulo:</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n      \n        <ion-item>\n          <ion-label>Subtitulo:</ion-label>\n          <ion-input type="text "></ion-input>\n        </ion-item>\n\n        <ion-item>\n            <ion-label>Capa:</ion-label>\n            <ion-input type="file"></ion-input> \n          </ion-item>\n\n          <ion-item>\n              <ion-label>Editora:</ion-label>\n              <ion-input type="text"></ion-input>\n            </ion-item>\n            \n            <ion-item>\n                <ion-label>Autor:</ion-label>\n                <ion-input type="text"></ion-input>\n              </ion-item>\n\n              <ion-item>\n          <ion-label>Isbn:</ion-label>\n          <ion-input type="text"></ion-input>\n        </ion-item>\n\n          <ion-item>\n            <ion-label>Publicação:</ion-label>\n            <ion-input type="text"></ion-input>\n          </ion-item>\n\n          <ion-item>\n            <ion-label>Páginas:</ion-label>\n            <ion-input type="number"></ion-input>\n          </ion-item>\n\n        </ion-list>\n      \n      <div padding>\n        <button ion-button>Cadastrar:</button>\n      </div>\n</ion-content>\n`/*ion-inline-end:"C:\Users\gabri.DESKTOP-ICS07HG\Documents\Ionic\ionic-master\appLivros\src\pages\gerenciar\gerenciar.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], GerenciarPage);
    return GerenciarPage;
}());

//# sourceMappingURL=gerenciar.js.map

/***/ }),

/***/ 155:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PesquisarPageModule", function() { return PesquisarPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__pesquisar__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var PesquisarPageModule = (function () {
    function PesquisarPageModule() {
    }
    PesquisarPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__pesquisar__["a" /* PesquisarPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__pesquisar__["a" /* PesquisarPage */]),
            ],
        })
    ], PesquisarPageModule);
    return PesquisarPageModule;
}());

//# sourceMappingURL=pesquisar.module.js.map

/***/ }),

/***/ 156:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PesquisarPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__destino_destino__ = __webpack_require__(152);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PesquisarPage = (function () {
    function PesquisarPage(navCtrl) {
        this.navCtrl = navCtrl;
        var l1 = { nome: 'A Sutil Arte de Ligar o Foda-se', autor: 'Mark Manson, 2017', editora: ' Intrinseca' };
        var l2 = { nome: 'F*deu Geral', autor: 'Mark Manson, 2019', editora: ' Intrinseca' };
        var l3 = { nome: 'Star Wars: Marcas de Guerra', autor: 'Chuck Wendig, 2015', editora: 'Aleph' };
        var l4 = { nome: 'Sherlock Holmes', autor: 'Arthur Conan Doyle, 2019', editora: 'Harpercollins' };
        var l5 = { nome: 'Tudo Nela Brilha e Queima - Poemas De Luta e Amor', autor: 'Ryane Leão, 2017',
            editora: 'Planeta do Brasil' };
        var l6 = { nome: 'SCRUM - A Arte De Fazer O Dobro Do Trabalho Na Metade Do Tempo',
            autor: 'Jeff Sutherland, 2019', editora: 'Sutherland,J.J. - Sextante / Gmt' };
        var l7 = { nome: 'Vade Mecum', autor: 'Saraiva, 2019', editora: 'Editora Saraiva' };
        this.items = [l1, l2, l3, l4, l5, l6, l7];
    }
    PesquisarPage.prototype.irParaDestino = function (item) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__destino_destino__["a" /* DestinoPage */], { livroSelecionado: item });
    };
    PesquisarPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-pesquisar',template:/*ion-inline-start:"C:\Users\gabri.DESKTOP-ICS07HG\Documents\Ionic\ionic-master\appLivros\src\pages\pesquisar\pesquisar.html"*/`<ion-header>\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Pesquisar Livros</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n    \n    <ion-searchbar placeholder="Assunto" (ionInput)="getItems($event)"></ion-searchbar>\n    \n    <button ion-button (click)="openSobre()" full color="secondary">Cadastrar Livros</button>\n\n    <ion-list>\n      <ion-item *ngFor="let item of items" (click) = "irParaDestino(item)">\n        <h2>{{item.nome}}</h2>\n        <p>{{item.autor}}</p>\n        <p>{{item.editora}}</p>\n        <button ion-button item-end color="success"> Ler</button> \n        <button ion-button item-end color="secondary"> Atualizar</button> \n        <button ion-button item-end color="danger"> Excluir</button> \n      </ion-item>\n    </ion-list>\n\n</ion-content>\n`/*ion-inline-end:"C:\Users\gabri.DESKTOP-ICS07HG\Documents\Ionic\ionic-master\appLivros\src\pages\pesquisar\pesquisar.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], PesquisarPage);
    return PesquisarPage;
}());

//# sourceMappingURL=pesquisar.js.map

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LivrosPageModule", function() { return LivrosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__livros__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var LivrosPageModule = (function () {
    function LivrosPageModule() {
    }
    LivrosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__livros__["a" /* LivrosPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__livros__["a" /* LivrosPage */]),
            ],
        })
    ], LivrosPageModule);
    return LivrosPageModule;
}());

//# sourceMappingURL=livros.module.js.map

/***/ }),

/***/ 158:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivrosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_livro_livro__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the LivrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LivrosPage = (function () {
    function LivrosPage(navCtrl, navParams, livroProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.livroProvider = livroProvider;
        this.lista_livros = new Array();
    }
    LivrosPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.livroProvider.getLivros().subscribe(function (data) {
            var response = data;
            var objeto_retorno = JSON.parse(response._body);
            for (var val in objeto_retorno) {
                console.log(val);
                _this.lista_livros.push(objeto_retorno[val]);
            }
        }, function (error) {
            console.log(error);
        });
        console.log('ionViewDidLoad LivrosPage');
    };
    LivrosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-livros',template:/*ion-inline-start:"C:\Users\gabri.DESKTOP-ICS07HG\Documents\Ionic\ionic-master\appLivros\src\pages\livros\livros.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Livros - Open Libray</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<button ion-button secondary menuToggle>Livros - Open Libray</button>\n\n\n<ion-content padding>\n  <ion-list *ngFor="let livro of lista_livros">\n    <ion-item>\n      <h2>{{livro.details.tittle}}</h2>\n      <p>{{livro.details.subtitle}}</p>\n      <p>{{livro.details.authors}}</p>\n      <p>{{livro.details.publish_date}}</p>\n\n    </ion-item>\n  </ion-list>\n</ion-content>`/*ion-inline-end:"C:\Users\gabri.DESKTOP-ICS07HG\Documents\Ionic\ionic-master\appLivros\src\pages\livros\livros.html"*/,
            providers: [
                __WEBPACK_IMPORTED_MODULE_2__providers_livro_livro__["a" /* LivroProvider */],
            ]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_livro_livro__["a" /* LivroProvider */]])
    ], LivrosPage);
    return LivrosPage;
}());

//# sourceMappingURL=livros.js.map

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LivroProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(160);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the LivroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LivroProvider = (function () {
    function LivroProvider(http) {
        this.http = http;
        this.baseApiPath = 'https://openlibrary.org/api/';
        console.log('Hello LivroProvider Provider');
    }
    LivroProvider.prototype.buscaLivros = function () {
        throw new Error("Method not implemented.");
    };
    LivroProvider.prototype.getLivros = function () {
        return this.http.get(this.baseApiPath + 'books?bibkeys=ISBN:9788593751462,ISBN:9781544747255,ISBN:9789576693199,ISBN:9780865976313format=json&details=true');
    };
    LivroProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], LivroProvider);
    return LivroProvider;
}());

//# sourceMappingURL=livro.js.map

/***/ }),

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\gabri.DESKTOP-ICS07HG\Documents\Ionic\ionic-master\appLivros\src\pages\home\home.html"*/`<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<button ion-button secondary menuToggle>Menu</button>\n\n<ion-content padding>\n  <h3>Livros Cadastrados</h3>\n\n  <p>\n      <ion-card>\n          <ion-card-content>\n            <ion-card-title>\n                1 — A Sutil Arte de Ligar o Foda-se, Mark Manson, 2017\n              </ion-card-title>\n            <p>\n              Mark Manson usa toda a sua sagacidade de escritor e seu olhar crítico \n              para propor um novo caminho rumo a uma vida melhor, mais coerente com \n              a realidade e consciente dos nossos limites. E ele faz isso da melhor maneira.\n            </p>\n          </ion-card-content>\n          <img  src="assets/imgs/SutilArte.jpg">\n        </ion-card>\n  </p>\n\n  <p>\n      <ion-card>\n          <ion-card-content>\n            <ion-card-title>\n                2 — F*deu Geral, Mark Manson, 2019\n              </ion-card-title>\n            <p>\n              Em A sutil arte de ligar o f*da-se, Manson, de maneira brilhante, deu forma à \n              ansiedade que permeia a vida moderna — agora, em F*deu geral, ele desvia seu \n              olhar das falhas inevitáveis de cada indivíduo para as inúmeras calamidades \n              que tomam o mundo. Ao trazer desde pesquisas psicológicas até pérolas da sabedoria \n              atemporal de filósofos como Platão e Nietzsche (e Tom Waits), Manson disseca religião \n              e política e trata de como as duas, desconfortavelmente, vieram a se assemelhar.\n            </p>\n          </ion-card-content>\n          <img src="assets/imgs/FGeral.jpg">\n        </ion-card>\n  </p>\n\n  <p>\n      <ion-card>\n          <ion-card-content>\n            <ion-card-title>\n                3 — Star Wars: Marcas de Guerra, Chuck Wendig, 2015\n              </ion-card-title>\n            <p>\n              O que aconteceu depois da destruição da segunda Estrela da Morte? Qual o destino \n              dos remanescentes do Império Galáctico e dos antigos Rebeldes, agora responsáveis \n              pela fundação da Nova República? Marcas da guerra é o primeiro livro do cânone oficial \n              a mostrar o que acontece depois do clássico Episódio VI: O retorno de Jedi, dando pistas \n              sobre o que podemos esperar da nova trilogia que se inicia com o O despertar da Força, a \n              ser lançado nos cinemas em dezembro. Nesse novo panorama galáctico, vamos descobrir que a \n              guerra ainda não chegou ao fim... e que os traumas deixados por ela ainda serão sentidos \n              por muitos e muitos ciclos. Capitão Wedge Antilles, almirante Ackbar, almirante Sloane, o \n              garoto Temmin e a mãe, Norra Wexley, a caçadora de recompensas Jas Emari, o antigo agente \n              imperial Sinjir: novos personagens e velhos conhecidos dos amantes da saga, que sempre \n              estiveram envolvidos na luta, agora devem escolher o lado a que deverão jurar lealdade. \n              Deverão colocar-se ao lado da Nova República, procurando estabelecer um novo governo \n              democrático na galáxia? Ou juntar-se às fileiras imperiais, na tentativa de voltar ao \n              poder absoluto depois das mortes dos lordes Sith Palpatine e Darth Vader?\n            </p>\n          </ion-card-content>\n          <img src="assets/imgs/StarWars.jpg">\n        </ion-card>\n  </p>\n\n  <p>\n      <ion-card>\n          <ion-card-content>\n            <ion-card-title>\n                4 — Sherlock Holmes, Arthur Conan Doyle, 2019\n              </ion-card-title>\n            <p>\n              Em 1887, o escritor escocês sir Arthur Conan Doyle criou Sherlock Holmes, o infalível \n              detetive a quem os agentes da Scotland Yard recorriam para solucionar os mistérios \n              mais intrigantes da Inglaterra vitoriana. Desde então, as aventuras do mestre da \n              investigação atraem leitores ávidos por chegar à última página e ver o enigma desvendado. \n              Esta obra completa reúne os quatro romances e os 56 contos sobre as aventuras do detetive \n              mais famoso do mundo e de seu fiel companheiro, o dr. Watson. Para desvendar mistérios, o \n              faro e a astúcia de Sherlock Holmes levam às fontes menos óbvias, às informações mais \n              precisas. Um modelo que influencia até hoje a literatura policial e revela fôlego para \n              impressionar gerações de leitores através dos tempos.\n            </p>\n          </ion-card-content>\n          <img src="assets/imgs/Sherlock.jpg">\n        </ion-card>\n  </p>\n\n  <p>\n      <ion-card>\n          <ion-card-content>\n            <ion-card-title>\n                5 — Tudo Nela Brilha e Queima - Poemas De Luta e Amor, Ryane Leão, 2017\n              </ion-card-title>\n            <p>\n              Estreia em livro de Ryane Leão, criadora da página onde jazz meu coração, com mais \n              de 150 mil seguidores nas redes Livro de estreia de Ryane Leão, mulher negra, poeta e \n              professora, \'a poesia é minha chance de ser eu mesma diante de um mundo que tanto me \n              silencia. é minha vez de ser crua. minha arma de combate. nossa voz ecoada. nossa dor \n              transformada. nela eu falo sobre amor, desapego, rotina, as cidades que nos atravessam, \n              os socos no estômago que a vida dá, o coração desenfreado, a pulsação que guia as estradas, \n              os recomeços, os dias, as noites, as madrugadas, os fins, os jeitos que a gente dá, \n              as transições, os discos, os tropeços, as partidas, as contrapartidas, os pés firmes que \n              insistem em voar, e tudo isso que é maluco e lindo e nos faz ser quem somos.\'\n            </p>\n          </ion-card-content>\n          <img src="assets/imgs/BrilhaQueima.jpg">\n        </ion-card>\n  </p>\n\n  <p>\n      <ion-card>\n          <ion-card-content>\n            <ion-card-title>\n                6 — SCRUM - A Arte De Fazer O Dobro Do Trabalho Na Metade Do Tempo, Jeff Sutherland, 2019\n              </ion-card-title>\n            <p>\n              Conheça o método que está revolucionando a produtividade das empresas. \n              “Repleto de histórias empolgantes e exemplos reais. O método de gerenciamento de projetos \n              conhecido como Scrum deve ser a ferramenta de produtividade mais largamente empregada \n              entre as empresas de alta tecnologia. Jeff Sutherland tem sido brilhantemente bem-sucedido \n              em sua missão de pôr esse recurso nas mãos de mais negócios em todo o mundo.” – Eric Ries, \n              autor de A startup enxuta O mundo vem sofrendo um processo de mudança contínuo cada vez \n              mais acelerado. \n            </p>\n          </ion-card-content>\n          <img src="assets/imgs/SCRUM.jpg">\n        </ion-card>\n  </p>\n\n  <p>\n      <ion-card>\n          <ion-card-content>\n            <ion-card-title>\n                7 — Vade Mecum, Editora Saraiva, 2019\n              </ion-card-title>\n            <p>\n              Pioneira na exemplar técnica desenvolvida de atualização de Códigos e Legislação, \n              como comprova o avançado número de suas edições e versões, a Editora Saraiva apresenta \n              a edição aumentada e atualizada de sua principal obra: o Vade Mecum Saraiva. \n              Com novo projeto gráfico, conta com o acréscimo de mais de 140 diplomas \n              (entre leis, decretos, regimentos internos etc.) em relação à edição anterior.\n            </p>\n          </ion-card-content>\n          <img src="assets/imgs/VadeMecum.jpg">\n        </ion-card>\n  </p>\n</ion-content>\n`/*ion-inline-end:"C:\Users\gabri.DESKTOP-ICS07HG\Documents\Ionic\ionic-master\appLivros\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 205:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(229);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 229:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_pesquisar_pesquisar_module__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_gerenciar_gerenciar_module__ = __webpack_require__(153);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_destino_destino_module__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_livros_livros_module__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_http__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_livro_livro__ = __webpack_require__(159);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/adicionar-livro/adicionar-livro.module#AdicionarLivroPageModule', name: 'AdicionarLivroPage', segment: 'adicionar-livro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/destino/destino.module#DestinoPageModule', name: 'DestinoPage', segment: 'destino', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/gerenciar/gerenciar.module#GerenciarPageModule', name: 'GerenciarPage', segment: 'gerenciar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/alterar-livro/alterar-livro.module#AlterarLivroPageModule', name: 'AlterarLivroPage', segment: 'alterar-livro', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/pesquisar/pesquisar.module#PesquisarPageModule', name: 'PesquisarPage', segment: 'pesquisar', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/livros/livros.module#LivrosPageModule', name: 'LivrosPage', segment: 'livros', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/livro/livro.module#LivroPageModule', name: 'LivroPage', segment: 'livro', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_7__pages_pesquisar_pesquisar_module__["PesquisarPageModule"],
                __WEBPACK_IMPORTED_MODULE_8__pages_gerenciar_gerenciar_module__["GerenciarPageModule"],
                __WEBPACK_IMPORTED_MODULE_9__pages_destino_destino_module__["DestinoPageModule"],
                __WEBPACK_IMPORTED_MODULE_10__pages_livros_livros_module__["LivrosPageModule"],
                __WEBPACK_IMPORTED_MODULE_11__angular_http__["b" /* HttpModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_12__providers_livro_livro__["a" /* LivroProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 272:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_pesquisar_pesquisar__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_gerenciar_gerenciar__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_livros_livros__ = __webpack_require__(158);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Pesquisar livros', component: __WEBPACK_IMPORTED_MODULE_5__pages_pesquisar_pesquisar__["a" /* PesquisarPage */] },
            { title: 'Cadastrar Livros', component: __WEBPACK_IMPORTED_MODULE_6__pages_gerenciar_gerenciar__["a" /* GerenciarPage */] },
            { title: 'Livros', component: __WEBPACK_IMPORTED_MODULE_7__pages_livros_livros__["a" /* LivrosPage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\gabri.DESKTOP-ICS07HG\Documents\Ionic\ionic-master\appLivros\src\app\app.html"*/`<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>`/*ion-inline-end:"C:\Users\gabri.DESKTOP-ICS07HG\Documents\Ionic\ionic-master\appLivros\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[205]);
//# sourceMappingURL=main.js.map