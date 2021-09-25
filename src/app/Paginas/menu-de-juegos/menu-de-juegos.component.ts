import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/Clases/usuario';
import { IngresarService } from 'src/app/Servicios/ingresar.service';

@Component({
  selector: 'app-menu-de-juegos',
  templateUrl: './menu-de-juegos.component.html',
  styleUrls: ['./menu-de-juegos.component.css']
})
export class MenuDeJuegosComponent implements OnInit {

  Usuario: Usuario= new Usuario();
  constructor(public ingresarService: IngresarService, public router: Router) { }

  ngOnInit(): void {
    this.Usuario = this.ingresarService.getItemLocal();
  }

  alAhorcado()
  {
    this.router.navigate(['ahorcado']);
  }
  alMayorOMenor()
  {
    this.router.navigate(['mayoromenor']);
  }

  alPreguntados()
  {
    this.router.navigate(['preguntados']);
  }
  alColors()
  {
    this.router.navigate(['colors']);
  }
}
