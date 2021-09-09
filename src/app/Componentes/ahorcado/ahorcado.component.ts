import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { Letra } from 'src/app/Clases/letra';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  arrayPalabras:Array<any> = ['INFORMATICA', 'COSAS', 'BOLSA', 'CAJA', 'MOUSE', 'TELEFONO','CELULAR','BOTELLA'];
  cantidadPalabras: number = this.arrayPalabras.length;
  arrayDeLetras:Array<any> = [];
  indiceArray: number = Math.floor(Math.random() * (this.cantidadPalabras -1));

  palabraElegida = this.arrayPalabras[this.indiceArray];




  compararLetra(recibida:string)
  {

      console.log("entro");
      for (let u = 0; u<this.palabraElegida.length;u++)
      {
        console.log(this.palabraElegida[u]);
        if (recibida==this.palabraElegida[u]){
          let ele = document.getElementById(this.palabraElegida[u].id);
          ele.classList.remove("d-none");
          ele.classList.add("d-block");
        }
      }

  }

  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i<this.palabraElegida.length;i++)
    {
      console.log(this.palabraElegida[i]);
      this.arrayDeLetras.push(this.palabraElegida[i]);
      // this.palabraElegida[i].setAttribute("id", i);
    }
  }



}
