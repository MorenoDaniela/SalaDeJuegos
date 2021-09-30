import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Paginas/home/home.component';
import { IngresarModule } from './Modulos/ingresar/ingresar.module';
import { QuienSoyComponent } from './Paginas/quien-soy/quien-soy.component';
import { ErrorComponent } from './Paginas/error/error.component';
import { BannerAeropuertoComponent } from './Componentes/banner-aeropuerto/banner-aeropuerto.component';
import { AhorcadoComponent } from './Componentes/ahorcado/ahorcado.component';
import { ChatComponent } from './Componentes/chat/chat.component';
import { MayorOMenorComponent } from './Componentes/mayor-omenor/mayor-omenor.component';
import { CanActivateGuard } from './can-activate.guard';
import { PokedexComponent } from './Componentes/pokedex/pokedex.component';
import { ColorsComponent } from './Componentes/colors/colors.component';
import { MenuDeJuegosComponent } from './Paginas/menu-de-juegos/menu-de-juegos.component';
import { PuntajesComponent } from './Componentes/puntajes/puntajes.component';
import { EncuestaComponent } from './Componentes/encuesta/encuesta.component';

const routes: Routes = [
  {path: '', redirectTo:'home',pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'ingreso', loadChildren:()=>import('./Modulos/ingresar/ingresar.module').then(m => IngresarModule)},
  {path:'quiensoy', component:QuienSoyComponent, canActivate:[CanActivateGuard]},
  {path: 'error', component:ErrorComponent},
  {path: 'juegopropio', component:BannerAeropuertoComponent, canActivate:[CanActivateGuard]},
  {path:'ahorcado', component:AhorcadoComponent, canActivate:[CanActivateGuard]},
  {path:"chat",component:ChatComponent, canActivate:[CanActivateGuard]},
  {path:"mayoromenor", component:MayorOMenorComponent,canActivate:[CanActivateGuard]},
  {path:"preguntados",component:PokedexComponent,canActivate:[CanActivateGuard]},
  {path:"colors",component:ColorsComponent,canActivate:[CanActivateGuard]},
  {path:"juegos", component:MenuDeJuegosComponent,canActivate:[CanActivateGuard]},
  {path:"puntajes", component:PuntajesComponent,canActivate:[CanActivateGuard]},
  {path:"encuesta", component:EncuestaComponent,canActivate:[CanActivateGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule] 
})
export class AppRoutingModule { }
