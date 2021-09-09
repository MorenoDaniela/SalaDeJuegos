import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { IngresarService } from 'src/app/Servicios/ingresar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(public authService: IngresarService, public router: Router) {
  }

  ngOnInit(): void {
  }

  CompletarCampos(){
    this.authService.Usuario.email = "denu.moreno.1990@gmail.com";
    this.authService.Usuario.password = "123456";
}

loguear()
{
  this.authService.loginWithEmailAndPassword(this.authService.Usuario.email,this.authService.Usuario.password )
}
}
