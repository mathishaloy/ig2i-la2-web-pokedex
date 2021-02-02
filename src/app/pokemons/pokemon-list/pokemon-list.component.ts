import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {PokemonService} from '../pokemon.service';
import {Observable, Subject} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

class SearchResult {
}

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  @Output() pokemonEvent = new EventEmitter<string>();
  pokemons = [];
  offset = 0;
  search = '';
  modelChanged = new Subject<string>();
  searchResult$: Observable<SearchResult[]>;

  constructor(private pokemonService: PokemonService) {
    this.modelChanged
      .pipe(
        debounceTime(300))
      .subscribe(() => {
        this.pokemons = [];
        this.offset = 0;
        this.getPokemons();
      });
  }

  ngOnInit(): void {
    this.getPokemons();
  }

  onScroll(): void {
    this.offset += 25;
    this.getPokemons();
  }

  pokemonEmit(value: string): void {
    this.pokemonEvent.emit(value);
  }

  onSearchChange(): void {
    this.modelChanged.next();
  }

  getPokemons(): void {
    if (this.offset <= 150) {
      this.pokemonService.getPokemons(this.offset, this.search !== '' ? this.search : undefined)
        .subscribe(result => this.pokemons = this.pokemons.concat(result.data));
    }
  }
}
