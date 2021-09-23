import { Component, OnInit } from '@angular/core';
import { Color } from 'src/app/Clases/color';
import { Usuario } from 'src/app/Clases/usuario';
import { IngresarService } from 'src/app/Servicios/ingresar.service';

@Component({
  selector: 'app-colors',
  templateUrl: './colors.component.html',
  styleUrls: ['./colors.component.css']
})
export class ColorsComponent implements OnInit {
  Usuario: Usuario = new Usuario();
  colorIzquierda: Color = new Color();;
  colorDerecha:Color = new Color();;
  opciones: any = ['amarillo', 'azul','verde','rojo'];
  puntajeAcumulado:number=0;
  constructor(public authService: IngresarService) { }
  

  ngOnInit(): void {
    if (this.authService.getItemLocal()==null)
    {
      this.Usuario.estaLogueado=false;
    }else
    {
      this.Usuario = this.authService.getItemLocal();
    }
    this.crearColorAleatorio();
  }

  crearColorAleatorio()
  {
    var opcion1= this.randomIntFromInterval(0,3);
    var opcion2 = this.randomIntFromInterval(0,3);
    var opcion3 = this.randomIntFromInterval(0,3);
    var opcion4 =this.randomIntFromInterval(0,3);
    
      this.colorIzquierda.palabra=this.opciones[opcion1];
      this.colorIzquierda.colorReal=this.opciones[opcion2];
      this.colorDerecha.palabra=this.opciones[opcion3];
      this.colorDerecha.colorReal=this.opciones[opcion4];
    
      console.log(opcion1 +" "+ opcion2 +" "+ opcion3+" " + opcion4);
  }

  ElegirSI()
  {
    if (this.colorIzquierda.palabra==this.colorDerecha.colorReal)
    {
      this.puntajeAcumulado= this.puntajeAcumulado+1;
      this.authService.showSuccessWithTimeout("Acertaste","Acertaste", 2000);
    }else{
      this.authService.showErrorWithTimeout("Error","Error", 2000);
    }
    this.crearColorAleatorio();
  }
  ElegirNO()
  {
    if (this.colorIzquierda.palabra!=this.colorDerecha.colorReal)
    {
      this.puntajeAcumulado= this.puntajeAcumulado+1;
      this.authService.showSuccessWithTimeout("Acertaste","Acertaste", 2000);
    }else{
      this.authService.showErrorWithTimeout("Error","Error", 2000);
    }
    this.crearColorAleatorio();
  }


  randomIntFromInterval(min:number, max:number) { // min and max included 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }
  
  empezarDeNuevo(){
    this.crearColorAleatorio();
    this.puntajeAcumulado=0;
  }
}