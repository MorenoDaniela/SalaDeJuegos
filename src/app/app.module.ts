import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './Paginas/home/home.component';
import { QuienSoyComponent } from './Paginas/quien-soy/quien-soy.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ErrorComponent } from './Paginas/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuienSoyComponent,
    NavbarComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }