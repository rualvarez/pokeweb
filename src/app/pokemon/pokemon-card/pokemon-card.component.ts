import { Component, Input } from '@angular/core';
import { Pokemon } from '../pokemon.model';
import { typesColours } from '../model/typesColours';

@Component({
  selector: 'pokemon-card',
  templateUrl: './pokemon-card.component.html',
  styleUrls: ['./pokemon-card.component.scss']
})
export class PokemonCardComponent {

  typesColor: typeof typesColours = typesColours

  @Input() pokemon: Pokemon = {} as Pokemon;

  getTypeColour(type: string) {
    return this.typesColor[type]
  }

}
