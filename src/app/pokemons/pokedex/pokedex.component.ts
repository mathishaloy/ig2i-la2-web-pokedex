import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {

  pokemonId = 1;

  constructor() {
  }

  ngOnInit(): void {
  }

  updateId($event: number): void {
    this.pokemonId = $event;
  }
}
