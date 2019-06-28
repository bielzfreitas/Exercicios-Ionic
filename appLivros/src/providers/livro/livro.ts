import { Injectable } from '@angular/core';
import { Http } from '@angular/http';


/*
  Generated class for the LivroProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LivroProvider {
  buscaLivros() {
    throw new Error("Method not implemented.");
  }

  private baseApiPath = 'https://openlibrary.org/api/';

  constructor(public http: Http) {
    console.log('Hello LivroProvider Provider');
  }

  getLivros() {
    return this.http.get(this.baseApiPath + 'books?bibkeys=ISBN:9788593751462,ISBN:9781544747255,ISBN:9789576693199,ISBN:9780865976313format=json&details=true');
  }

}