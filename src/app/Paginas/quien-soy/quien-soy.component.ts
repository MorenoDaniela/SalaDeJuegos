import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Clases/usuario';
import { IngresarService } from 'src/app/Servicios/ingresar.service';

@Component({
  selector: 'app-quien-soy',
  templateUrl: './quien-soy.component.html',
  styleUrls: ['./quien-soy.component.css']
})
export class QuienSoyComponent implements OnInit {

  Usuario: Usuario= new Usuario();
  constructor(public ingresarService: IngresarService) { }

  ngOnInit(): void {
    this.Usuario = this.ingresarService.getItemLocal();
  }

}
