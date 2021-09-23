import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pokedex-form',
  templateUrl: './pokedex-form.component.html',
  styleUrls: ['./pokedex-form.component.css']
})
export class PokedexFormComponent implements OnInit {
  @Output() submit = new EventEmitter<string>();
  pokemonId: string = ''

  constructor() { }

  onSubmit(e) {
    e.preventDefault()
    // Al mandar el formulario, emitimos el evento con el valor actual del formulario
    this.submit.emit(this.pokemonId)
    this.pokemonId = ''
  }
  

  ngOnInit(): void {
  }

}
