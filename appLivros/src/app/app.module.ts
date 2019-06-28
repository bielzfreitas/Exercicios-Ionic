import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { PesquisarPageModule } from '../pages/pesquisar/pesquisar.module';
import { GerenciarPageModule } from '../pages/gerenciar/gerenciar.module';
import { DestinoPageModule } from '../pages/destino/destino.module';
import { LivrosPageModule } from '../pages/livros/livros.module';
import { HttpModule } from '@angular/http';
import { LivroProvider } from '../providers/livro/livro';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    PesquisarPageModule,
    GerenciarPageModule,
    DestinoPageModule,
    LivrosPageModule,
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    LivroProvider
  ]
})
export class AppModule {}
