import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TituloComponent } from './titulo/titulo.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { RodapeComponent } from './rodape/rodape.component';
import { UserListComponent } from './User-list/user-list.component';
import { BuscarComponent } from './buscar/buscar.component';
import { TarefasComponent } from './tarefas/tarefas.component';




@NgModule({
  declarations: [
    AppComponent,
    TituloComponent,
    NavbarComponent,
    HomeComponent,
    RodapeComponent,
    UserListComponent,
    BuscarComponent,
    TarefasComponent,
 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
