import { Component, OnInit } from '@angular/core';
import { Carta } from 'src/app/Clases/carta';

@Component({
  selector: 'app-mayor-omenor',
  templateUrl: './mayor-omenor.component.html',
  styleUrls: ['./mayor-omenor.component.css']
})
export class MayorOMenorComponent implements OnInit {


  cartaActual:Carta = new Carta();
  cartaSiguiente:Carta= new Carta();
  arrayCartas:Array<Carta> = [];
  puntosAcumulados:number =0;

  constructor() { }

  ngOnInit(): void {
    this.creacionTodasCartas();
    this.empezarJuego();
  }

  eligioMayor(){
    var indiceArray= Math.floor(Math.random() * (this.arrayCartas.length -1));
    this.cartaSiguiente = this.arrayCartas[indiceArray];
    // console.log(this.cartaActual);
    // console.log(this.cartaSiguiente);
    if (this.cartaSiguiente.valorCarta>=this.cartaActual.valorCarta)
    {
      console.log('gano, es mayor');
      this.puntosAcumulados = this.puntosAcumulados+1;
    }else
    {
      console.log('perdio, es menor');
    }
    this.seguirJuego();
  }
  eligioMenor(){
    var indiceArray= Math.floor(Math.random() * (this.arrayCartas.length -1));
    this.cartaSiguiente = this.arrayCartas[indiceArray];
    // console.log(this.cartaActual);
    // console.log(this.cartaSiguiente);
    if (this.cartaSiguiente.valorCarta<=this.cartaActual.valorCarta)
    {
      console.log('gano, es menor');
      this.puntosAcumulados = this.puntosAcumulados+1;
    }else
    {
      console.log('perdio, es mayor');
    }
    this.seguirJuego();
  }

  creacionCartasDeUnTipo(tipoCarta:string,baraja:Array<Carta>){
    for(var i=0;i<12;i++){
      var carta= new Carta();
      carta.tipoCarta=tipoCarta;
      carta.valorCarta=i+1;
      // console.log(carta);
      baraja.push(carta);
    }
  }

  creacionTodasCartas()
  {
    this.creacionCartasDeUnTipo('basto',this.arrayCartas);
    this.creacionCartasDeUnTipo('copas',this.arrayCartas);
    this.creacionCartasDeUnTipo('oro',this.arrayCartas);
    this.creacionCartasDeUnTipo('espada',this.arrayCartas);
  }
  empezarJuego(){
    var indiceArray= Math.floor(Math.random() * (this.arrayCartas.length -1));
    this.cartaActual = this.arrayCartas[indiceArray];
    // console.log(this.cartaActual);
  }

  seguirJuego()
  {
    this.cartaActual=this.cartaSiguiente;
    console.log(this.puntosAcumulados);
  }

}
