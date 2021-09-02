import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Paginas/home/home.component';
import { IngresarModule } from './Modulos/ingresar/ingresar.module';
import { QuienSoyComponent } from './Paginas/quien-soy/quien-soy.component';
import { ErrorComponent } from './Paginas/error/error.component';

const routes: Routes = [
  {path: '', redirectTo:'home',pathMatch:'full'},
  {path: 'home', component:HomeComponent},
  {path: 'ingreso', loadChildren:()=>import('./Modulos/ingresar/ingresar.module').then(m => IngresarModule)},
  {path:'quiensoy', component:QuienSoyComponent},
  {path: 'error', component:ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }