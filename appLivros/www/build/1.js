webpackJsonp([1],{

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AlterarLivroPageModule", function() { return AlterarLivroPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__alterar_livro__ = __webpack_require__(284);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var AlterarLivroPageModule = (function () {
    function AlterarLivroPageModule() {
    }
    AlterarLivroPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__alterar_livro__["a" /* AlterarLivroPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__alterar_livro__["a" /* AlterarLivroPage */]),
            ],
        })
    ], AlterarLivroPageModule);
    return AlterarLivroPageModule;
}());

//# sourceMappingURL=alterar-livro.module.js.map

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AlterarLivroPage; });
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
 * Generated class for the AlterarLivroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AlterarLivroPage = (function () {
    function AlterarLivroPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
    }
    AlterarLivroPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AlterarLivroPage');
    };
    AlterarLivroPage.prototype.showConfirmacaoAltualizacao = function () {
        var alert = this.alertCtrl.create({
            title: 'Autorizado',
            subTitle: 'Livro altualizado com sucesso!',
            buttons: ['OK']
        });
        alert.present();
    };
    AlterarLivroPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-alterar-livro',template:/*ion-inline-start:"C:\Users\gabri.DESKTOP-ICS07HG\Documents\Ionic\ionic-master\appLivros\src\pages\alterar-livro\alterar-livro.html"*/`<ion-header>\n    <ion-navbar>\n      <ion-title>Alterar</ion-title>\n    </ion-navbar>\n  </ion-header>\n\n<ion-content padding>\n    <ion-content padding>\n        <form >  \n            <ion-item>\n              <ion-label>Titulo</ion-label>\n              <ion-input type="text" ></ion-input>\n            </ion-item>\n            <ion-item>\n              <ion-label>Subtitulo</ion-label>\n              <ion-input type="text" ></ion-input>\n            </ion-item>\n            <ion-item>\n                <ion-label>Editora</ion-label>\n                <ion-input type="text" ></ion-input>\n              </ion-item>\n              <ion-item>\n                  <ion-label>Autor</ion-label>\n                  <ion-input type="text" ></ion-input>\n                </ion-item>\n                <ion-item>\n                    <ion-label>Capa</ion-label>\n                    <ion-input type="text" ></ion-input>\n                  </ion-item>\n               <ion-item>\n                  <ion-label>Isbn</ion-label>\n                  <ion-input type="text" ></ion-input>\n                </ion-item> \n                <ion-item>\n                    <ion-label>Publicação</ion-label>\n                    <ion-input type="text" ></ion-input>\n                  </ion-item>\n               <ion-item>\n                    <ion-label>Páginas</ion-label>\n                    <ion-input type="text" ></ion-input>\n                  </ion-item>      \n            <button ion-button (click)="showConfirmacaoAltualizacao()" type="submit" >Alterar</button>\n          </form>\n    </ion-content>\n</ion-content>\n`/*ion-inline-end:"C:\Users\gabri.DESKTOP-ICS07HG\Documents\Ionic\ionic-master\appLivros\src\pages\alterar-livro\alterar-livro.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], AlterarLivroPage);
    return AlterarLivroPage;
}());

//# sourceMappingURL=alterar-livro.js.map

/***/ })

});
//# sourceMappingURL=1.js.map