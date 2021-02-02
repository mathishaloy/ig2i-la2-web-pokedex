import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemon;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    const pokemonId = this.route.snapshot.paramMap.get('id');
    this.pokemonService.getPokemonById(pokemonId).subscribe(
      (result) => this.pokemon = result
    );
  }

  pad(num, size): string {
    num = num.toString();
    while (num.length < size) {
      num = '0' + num;
    }
    return num;
  }

}
