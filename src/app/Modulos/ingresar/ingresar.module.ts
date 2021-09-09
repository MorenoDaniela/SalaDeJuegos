import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresarRoutingModule } from './ingresar-routing.module';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    IngresarRoutingModule,
    FormsModule
  ]
})
export class IngresarModule { }
