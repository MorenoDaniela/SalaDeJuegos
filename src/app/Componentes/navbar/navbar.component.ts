import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Clases/usuario';
import { ChatService } from 'src/app/Servicios/chat.service';
import { IngresarService } from 'src/app/Servicios/ingresar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})

export class NavbarComponent implements OnInit {
  @Input() usuario: Usuario;
  // usuario: Usuario = new Usuario();
  constructor(public authService: IngresarService, public router: Router, public chatService: ChatService)
   { }

  ngOnInit(): void {

  }

  logOut()
  {
    this.authService.logout();
    // localStorage.removeItem('usuarioApp');
  }

  alChat()
  {
    this.router.navigate(['chat']);
  }

  juegoPropio()
  {
    this.router.navigate(['juegopropio']);
  }

  alHome()
  {
    this.router.navigate(['home']);
  }
  aPuntajes()
  {
    this.router.navigate(['puntajes']);
  }
  aQuienSoy()
  {
    this.router.navigate(['quiensoy']);
  }

  alMenuDeJuegos()
  {
    this.router.navigate(['juegos']);
  }
}
