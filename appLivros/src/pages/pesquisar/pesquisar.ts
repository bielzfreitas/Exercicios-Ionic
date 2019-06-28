import { Component } from '@angular/core';
import { IonicPage, NavController} from 'ionic-angular';
import { Livro } from '../../model/livro';
import {DestinoPage} from '../destino/destino';



@IonicPage()
@Component({
  selector: 'page-pesquisar',
  templateUrl: 'pesquisar.html'
})
export class PesquisarPage {
  public items: Livro[];
  
  constructor(public navCtrl: NavController) {

      var l1 = {nome:'A Sutil Arte de Ligar o Foda-se', autor: 'Mark Manson, 2017',editora:' Intrinseca'};
      var l2 = {nome:'F*deu Geral', autor: 'Mark Manson, 2019',editora:' Intrinseca'};
      var l3 = {nome:'Star Wars: Marcas de Guerra', autor: 'Chuck Wendig, 2015',editora:'Aleph'}
      var l4 = {nome:'Sherlock Holmes', autor: 'Arthur Conan Doyle, 2019',editora:'Harpercollins'};
      var l5 = {nome:'Tudo Nela Brilha e Queima - Poemas De Luta e Amor', autor: 'Ryane Leão, 2017',
                      editora:'Planeta do Brasil'};
      var l6 = {nome:'SCRUM - A Arte De Fazer O Dobro Do Trabalho Na Metade Do Tempo', 
                      autor: 'Jeff Sutherland, 2019', editora:'Sutherland,J.J. - Sextante / Gmt'};
      var l7 = {nome:'Vade Mecum', autor: 'Saraiva, 2019', editora:'Editora Saraiva'};

    this.items = [l1, l2, l3, l4, l5, l6, l7];

  }
  irParaDestino(item:Livro):void{
    this.navCtrl.push(DestinoPage, {livroSelecionado: item});
  }

}

