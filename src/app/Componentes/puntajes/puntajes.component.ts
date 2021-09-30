import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Puntaje } from 'src/app/Clases/puntaje';
import { Usuario } from 'src/app/Clases/usuario';
import { IngresarService } from 'src/app/Servicios/ingresar.service';
import { ResultadosService } from 'src/app/Servicios/resultados.service';

@Component({
  selector: 'app-puntajes',
  templateUrl: './puntajes.component.html',
  styleUrls: ['./puntajes.component.css']
})
export class PuntajesComponent implements OnInit {
  Usuario: Usuario = new Usuario();
  listadoPuntajesMostrar: Array<Puntaje> = new Array<Puntaje>();
  spinner:boolean=true;
punt:any;
  constructor(public authService: IngresarService, public puntajesService: ResultadosService, public router:Router) { }

  ngOnInit(): void {
    
    this.Usuario = this.authService.getItemLocal();
    if (this.Usuario ==null)
    {
      this.Usuario.estaLogueado=false;
    }
      setTimeout(() => {
        this.cargarPuntajes();
      }, 1000);
      this.spinner=false;
  }

  cargarPuntajes(): void {
console.log("adentro de puntajes");
    this.puntajesService.ResultadosRef.snapshotChanges().pipe(
      map( data => {
        this.listadoPuntajesMostrar = new Array<Puntaje>();
        data.map(puntaje =>{
          console.log(puntaje);
          var puntaje2: Puntaje = new Puntaje();
          puntaje2.email = puntaje.payload.doc.data().email;
          puntaje2.fecha = puntaje.payload.doc.data().fechaPuntaje;
          puntaje2.id = puntaje.payload.doc.data().id;
          puntaje2.puntaje = puntaje.payload.doc.data().puntaje;
          puntaje2.tipoDeJuego = puntaje.payload.doc.data().tipoDeJuego;
          if (this.Usuario.id==puntaje.payload.doc.data().id)
          {
            puntaje2.siSoy=true;
          }else
          {
            puntaje2.siSoy=false;
          }
          console.log(puntaje2);
          this.listadoPuntajesMostrar.push(puntaje2);
        })
      })
    ).subscribe(datos => {
    });
   }

}
