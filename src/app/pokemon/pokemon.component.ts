import { Component, OnInit } from '@angular/core';
import { PokemonService } from './pokemon.service';
import { Pokemon } from './pokemon.model';

@Component({
  selector: 'pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  pokemonList: Array<Pokemon> = []

  constructor(
    private servPokemon: PokemonService
  ) {}

  ngOnInit() {
    this.getPokemon()
  }

  async getPokemon() {
    await this.servPokemon.getAll().subscribe((res: Array<Pokemon>) => {
      this.pokemonList = res
    })
  }

}
