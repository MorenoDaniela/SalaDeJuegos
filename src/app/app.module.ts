import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './Paginas/home/home.component';
import { QuienSoyComponent } from './Paginas/quien-soy/quien-soy.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { ErrorComponent } from './Paginas/error/error.component';
import { BannerAeropuertoComponent } from './Componentes/banner-aeropuerto/banner-aeropuerto.component';
import { AhorcadoComponent } from './Componentes/ahorcado/ahorcado.component';
import {AngularFireModule} from '@angular/fire';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ChatComponent } from './Componentes/chat/chat.component';
import { MayorOMenorComponent } from './Componentes/mayor-omenor/mayor-omenor.component';
import { CanActivateGuard } from './can-activate.guard';
import { PokedexComponent } from './Componentes/pokedex/pokedex.component';
import { PokedexScreenComponent } from './Componentes/pokedex-screen/pokedex-screen.component';
import { PokedexFormComponent } from './Componentes/pokedex-form/pokedex-form.component';
import { StatComponent } from './Componentes/stat/stat.component';
import { HttpClientModule } from '@angular/common/http';
import { ColorsComponent } from './Componentes/colors/colors.component';
import { MenuDeJuegosComponent } from './Paginas/menu-de-juegos/menu-de-juegos.component';
import { PuntajesComponent } from './Componentes/puntajes/puntajes.component';
import { EncuestaComponent } from './Componentes/encuesta/encuesta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuienSoyComponent,
    NavbarComponent,
    ErrorComponent,
    BannerAeropuertoComponent,
    AhorcadoComponent,
    ChatComponent,
    MayorOMenorComponent,
    PokedexComponent,
    PokedexScreenComponent,
    PokedexFormComponent,
    StatComponent,
    ColorsComponent,
    MenuDeJuegosComponent,
    PuntajesComponent,
    EncuestaComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
	  ToastrModule.forRoot(),
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [CanActivateGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
