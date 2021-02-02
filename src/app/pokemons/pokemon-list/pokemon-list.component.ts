import {Component, OnInit} from '@angular/core';
import {PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons = [];
  offset = 0;

  constructor(private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.pokemonService.getPokemons(this.offset).subscribe(result => this.pokemons = this.pokemons.concat(result.data));
  }

  onScroll(): void {
    this.offset += 20;
    if (this.offset <= 150) {
      this.pokemonService.getPokemons(this.offset).subscribe(result => this.pokemons = this.pokemons.concat(result.data));
    }
  }
}
