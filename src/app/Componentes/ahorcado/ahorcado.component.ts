import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Clases/usuario';
import { IngresarService } from 'src/app/Servicios/ingresar.service';
import { ResultadosService } from 'src/app/Servicios/resultados.service';
// import { runInThisContext } from 'vm';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrls: ['./ahorcado.component.css']
})
export class AhorcadoComponent implements OnInit {

  arrayPalabras:Array<any> = ['INFORMATICA', 'COSAS', 'BOLSA', 'CAJA', 'MOUSE', 'TELEFONO','CELULAR','BOTELLA', 'DESODORANTE', 'CARAMELOS', 'BILLETE','SONAJERO','CENA','CORDERO'];
  cantidadPalabras: number = this.arrayPalabras.length;
  indiceArray: number;
  palabraElegida:any;

  palabraAdivinar = [];
  palabraMostrar = [];
  nodoResultado:any;
  cantidadDeIntentos:number;
  Usuario: Usuario = new Usuario();
puntajeAcumulado:number=0;
  constructor(public authService: IngresarService, public puntajesService: ResultadosService) { }

  ngOnInit(): void {
    if (this.authService.getItemLocal()==null)
    {
      this.Usuario.estaLogueado=false;
    }else
    {
      this.Usuario  = this.authService.getItemLocal();
    }
    this.prepararJuego();
  }

  compararLetra(recibida:string)
  {
    let letraUsuario = recibida;
    // Recorremos todas las letras para saber si alguna esta bien
    for (const [posicion, letraAdivinar] of this.palabraAdivinar.entries()) {
        // Comprobamos si la letra del usuario es igual a la letra a adivinar
        if (letraUsuario == letraAdivinar) {
            // Sustituimos el guion por la letra acertada
            this.palabraMostrar[posicion] = letraAdivinar;
        }
    }
      if (!this.palabraAdivinar.includes(letraUsuario))
      {
        console.log(" antes " +this.cantidadDeIntentos);
        this.cantidadDeIntentos = this.cantidadDeIntentos-1;
        console.log("dsps " +this.cantidadDeIntentos);
      }

      if (this.cantidadDeIntentos==0){
        this.authService.showErrorWithTimeout("Perdiste","Perdiste",2000);
        this.mandarPuntaje();
        this.empezarDeNuevo();//probar si empeiza bien
      }
      if (!this.palabraMostrar.includes("_")){
        console.log(this.palabraAdivinar.includes("_"));
        this.authService.showSuccessWithTimeout("Ganaste","Ganaste",2000);
        this.puntajeAcumulado=this.puntajeAcumulado+10;
      }

    //// 4 Mostramos los cambios
    this.dibujarJuego();

  }

  prepararJuego () {
    this.cantidadDeIntentos=10;
    this.indiceArray= Math.floor(Math.random() * (this.cantidadPalabras -1));
    this.palabraElegida = this.arrayPalabras[this.indiceArray];
    console.log(this.palabraElegida);
    //// 1.3 Separo la palabra en letras y lo guardo
    this.palabraAdivinar = this.palabraElegida.split('');
    //// 2 Preparo el array que va a ver el usuario. Tendrá el mismo número de guiones que letras en palabraAdivinar
   for (var i=0;i<this.palabraAdivinar.length;i++){
     this.palabraMostrar.push('_');
   }
    //// 3 Dibuja todo lo necesario
    this.dibujarJuego();
}

dibujarJuego () {
  // Convertimos un array en un texto, separado por espacios, y lo mostramos en el div resultado
  this.nodoResultado = this.palabraMostrar.join(' ');;
}

empezarDeNuevo()
{
  this.indiceArray =null;
  this.palabraElegida=null;

  this.palabraAdivinar = [];
  this.palabraMostrar = [];
  this.nodoResultado=null;
  this.prepararJuego();
}

mandarPuntaje(){
  this.puntajesService.enviarResultado(this.puntajeAcumulado,this.Usuario.id,this.Usuario.email, "ahorcado");
}
}
