import { Component, OnInit } from '@angular/core';
import {PokemonListComponent} from '../../pokemons/pokemon-list/pokemon-list.component';

@Component({
  selector: 'app-team-pokemon-list',
  templateUrl: './team-pokemon-list.component.html',
  styleUrls: ['./team-pokemon-list.component.css']
})
export class TeamPokemonListComponent extends PokemonListComponent implements OnInit {

}
