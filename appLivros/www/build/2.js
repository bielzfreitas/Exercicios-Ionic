webpackJsonp([2],{

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdicionarLivroPageModule", function() { return AdicionarLivroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__adicionar_livro__ = __webpack_require__(285);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AdicionarLivroPageModule = (function () {
    function AdicionarLivroPageModule() {
    }
    AdicionarLivroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__adicionar_livro__["a" /* AdicionarLivroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__adicionar_livro__["a" /* AdicionarLivroPage */]),
            ],
        })
    ], AdicionarLivroPageModule);
    return AdicionarLivroPageModule;
}());

//# sourceMappingURL=adicionar-livro.module.js.map

/***/ }),

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AdicionarLivroPage; });
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


/**
 * Generated class for the AdicionarLivroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AdicionarLivroPage = (function () {
    function AdicionarLivroPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    AdicionarLivroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AdicionarLivroPage');
    };
    AdicionarLivroPage.prototype.showConfirmacaoAdicionado = function () {
        var alert = this.alertCtrl.create({
            title: 'Adicionado',
            subTitle: 'Livro adicionado com sucesso!',
            buttons: ['OK']
        });
        alert.present();
    };
    AdicionarLivroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-adicionar-livro',template:/*ion-inline-start:"C:\Users\gabri.DESKTOP-ICS07HG\Documents\Ionic\ionic-master\appLivros\src\pages\adicionar-livro\adicionar-livro.html"*/`<ion-header>\n    <ion-navbar>\n      <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n      </button>\n      <ion-title>Adicionar </ion-title>\n    </ion-navbar>\n  </ion-header>\n\n\n<ion-content padding>\n    <form >  \n        <ion-item>\n          <ion-label>Titulo</ion-label>\n          <ion-input type="text" ></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label>Subtitulo</ion-label>\n          <ion-input type="text" ></ion-input>\n        </ion-item>\n        <ion-item>\n            <ion-label>Editora</ion-label>\n            <ion-input type="text" ></ion-input>\n          </ion-item>\n          <ion-item>\n              <ion-label>Autor</ion-label>\n              <ion-input type="text" ></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>Capa</ion-label>\n                <ion-input type="text" ></ion-input>\n              </ion-item>\n           <ion-item>\n              <ion-label>Isbn</ion-label>\n              <ion-input type="text" ></ion-input>\n            </ion-item> \n            <ion-item>\n                <ion-label>Publicação</ion-label>\n                <ion-input type="text" ></ion-input>\n              </ion-item>\n           <ion-item>\n                <ion-label>Páginas</ion-label>\n                <ion-input type="text" ></ion-input>\n              </ion-item>      \n        <button ion-button (click)="showConfirmacaoAdicionado()" type="submit" >Adicionar</button>\n      </form>\n</ion-content>\n`/*ion-inline-end:"C:\Users\gabri.DESKTOP-ICS07HG\Documents\Ionic\ionic-master\appLivros\src\pages\adicionar-livro\adicionar-livro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AdicionarLivroPage);
    return AdicionarLivroPage;
}());

//# sourceMappingURL=adicionar-livro.js.map

/***/ })

});
//# sourceMappingURL=2.js.map