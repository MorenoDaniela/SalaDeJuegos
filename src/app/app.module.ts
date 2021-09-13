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
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { ChatComponent } from './Componentes/chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuienSoyComponent,
    NavbarComponent,
    ErrorComponent,
    BannerAeropuertoComponent,
    AhorcadoComponent,
    ChatComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    BrowserAnimationsModule,
	  ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
