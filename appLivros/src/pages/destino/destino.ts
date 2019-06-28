import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Livro } from '../../model/livro';

@IonicPage()
@Component({
  selector: 'page-destino',
  templateUrl: 'destino.html',
})
export class DestinoPage {
  public item:Livro;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.item = this.navParams.get("livroSelecionado");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DestinoPage');
  }

}
