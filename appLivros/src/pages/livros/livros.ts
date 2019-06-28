import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LivroProvider } from '../../providers/livro/livro';
import { Livro } from '../../model/livro';

/**
 * Generated class for the LivrosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-livros',
  templateUrl: 'livros.html',
  providers:[
    LivroProvider,
  ]
})
export class LivrosPage {

  public livros : Livro [];
  public lista_livros = new Array<any>();

  constructor(public navCtrl: NavController, public navParams: NavParams,private livroProvider: LivroProvider) {
}
  
  
  ionViewDidLoad() {
    this.livroProvider.getLivros().subscribe(
      data => {
        const response = (data as any);
        const objeto_retorno = JSON.parse(response._body);

        for (var val in objeto_retorno){
          console.log(val);
          this.lista_livros.push(objeto_retorno[val]);
        }
      }, error => {
        console.log(error)
      }
    )
    console.log('ionViewDidLoad LivrosPage');
  }
}
