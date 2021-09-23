import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Clases/usuario';
import { IngresarService } from 'src/app/Servicios/ingresar.service';
import { PokemonService } from 'src/app/Servicios/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  Usuario: Usuario= new Usuario();
  public error:Boolean = false
public loading:Boolean = true
public pokemon:any = null
public pokemonID:String;

public pokemonID2:String;
public pokemonID3:String;
public pokemonID4:String;
public arrayPokemons :Array<any> = [];
public puntosAcumulados: number=0;
  constructor(public pokemonService : PokemonService, public authService: IngresarService) { }

  async ngOnInit(): Promise<void> {
    if (this.authService.getItemLocal()==null)
    {
      this.Usuario.estaLogueado=false;
    }else
    {
      this.Usuario = this.authService.getItemLocal();
    }
    this.searchPokemon(); 
  }
  
  searchPokemon(): void {
    this.pokemonID =Math.floor(Math.random() * 151 + 1).toString()
    this.pokemonID2 =Math.floor(Math.random() * 151 + 1).toString()
    this.pokemonID3 =Math.floor(Math.random() * 151 + 1).toString()
    this.pokemonID4 =Math.floor(Math.random() * 151 + 1).toString()
    // Este es el metodo creado en http.service.ts
    this.pokemonService.getPokemon(this.pokemonID)
      .subscribe(
        data => {
          this.pokemon = data
          this.loading = false
          this.error = false
        },
        error => {
          this.pokemon = null
          this.loading = false
          this.error = true
        }
      )
      this.cargarOtrosPokemons();
      
  }

  cargarOtrosPokemons(){
    this.arrayPokemons=[];
    this.pokemonService.getPokemon(this.pokemonID).subscribe(
      data => {
        this.arrayPokemons.push(data);
      }
    );
    this.pokemonService.getPokemon(this.pokemonID2).subscribe(
      data => {
        this.arrayPokemons.push(data);  
      }
    );

    this.pokemonService.getPokemon(this.pokemonID3).subscribe(
      data => {
        this.arrayPokemons.push(data);  
      }
    );

    this.pokemonService.getPokemon(this.pokemonID4).subscribe(
      data => {
        this.arrayPokemons.push(data);        
      }
    );
    this.desordenarRespuestas();
  }


  desordenarRespuestas()
  {
   this.arrayPokemons.sort(function (){return Math.random() - 0.5} );
  }

  elegirRespuesta(respuesta:any)
  {
    if (respuesta==this.pokemonID)
    {
      this.authService.showSuccessWithTimeout("Acertaste","Acertaste", 2000);
      this.puntosAcumulados= this.puntosAcumulados+1;
    }else{
      this.authService.showErrorWithTimeout("Error","Error", 2000)
    }
    this.searchPokemon();
  }

  empezarDeNuevo()
  {
    this.puntosAcumulados=0;
    this.searchPokemon();
  }
}
