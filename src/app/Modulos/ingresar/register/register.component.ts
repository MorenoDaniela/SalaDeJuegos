import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IngresarService } from 'src/app/Servicios/ingresar.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public authService: IngresarService, public router: Router) { }

  ngOnInit(): void {


  }

  crearCuenta(){
    this.authService.registroWithEmailAndPassword(this.authService.Usuario.email, this.authService.Usuario.password);

}
}
