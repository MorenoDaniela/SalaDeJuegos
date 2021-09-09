import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Clases/usuario';
import { IngresarService } from 'src/app/Servicios/ingresar.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // user: Usuario;

  constructor(public authService: IngresarService, public router: Router) {

  }

  ngOnInit(): void {
    // this.user.email=this.authService.Usuario.email;
  }

}
