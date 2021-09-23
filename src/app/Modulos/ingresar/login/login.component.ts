import { Component, OnInit } from '@angular/core';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Clases/usuario';
import { IngresarService } from 'src/app/Servicios/ingresar.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  Usuario : Usuario= new Usuario();
  constructor(public authService: IngresarService, public router: Router) {
  }

  ngOnInit(): void {
    
    if (this.authService.getItemLocal()==null)
    {
      this.Usuario.estaLogueado=false;
    }else
    {
      this.Usuario = this.authService.getItemLocal();
    }
  }

  CompletarCampos(){
    this.Usuario.email = "denu.moreno.1990@gmail.com";
    this.Usuario.password = "123456";
}

loguear()
{
  this.authService.loginWithEmailAndPassword(this.Usuario.email,this.Usuario.password )
}
}
