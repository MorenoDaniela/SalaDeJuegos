import { Component, OnInit } from '@angular/core';
import { Carta } from 'src/app/Clases/carta';
import { Usuario } from 'src/app/Clases/usuario';
import { IngresarService } from 'src/app/Servicios/ingresar.service';
import { ResultadosService } from 'src/app/Servicios/resultados.service';

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
Usuario: Usuario = new Usuario();
  constructor(public authService: IngresarService, public puntajesService: ResultadosService) { }

  ngOnInit(): void {
    if (this.authService.getItemLocal()==null)
    {
      this.Usuario.estaLogueado=false;
    }else
    {
      this.Usuario = this.authService.getItemLocal();
    }
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
      this.authService.showSuccessWithTimeout("Acertaste","Es Mayor", 2000);
      this.puntosAcumulados = this.puntosAcumulados+1;
    }else
    {
      this.authService.showErrorWithTimeout("Perdiste","Es Mayor", 2000);
     
      this.mandarPuntaje();
      this.puntosAcumulados=0;
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
      this.authService.showSuccessWithTimeout("Acertaste","Es Menor", 2000);
      this.puntosAcumulados = this.puntosAcumulados+1;
    }else
    {
      this.authService.showErrorWithTimeout("Perdiste","Es Menor", 2000);
     
      this.mandarPuntaje();
      this.puntosAcumulados=0;
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


  empezarDeNuevo(){
    this.creacionTodasCartas();
    this.empezarJuego();
    this.puntosAcumulados = 0
  }

  mandarPuntaje(){
    this.puntajesService.enviarResultado(this.puntosAcumulados,this.Usuario.id,this.Usuario.email, "mayor o menor");
}
}
