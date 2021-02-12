import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PokemonService} from '../pokemon.service';

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.css']
})
export class PokemonDetailComponent implements OnInit {

  pokemon;
  imageFlag = true;

  @Input() pokemonId = 1;

  constructor(
    private pokemonService: PokemonService,
    private route: ActivatedRoute
  ) {
  }

  ngOnInit(): void {
    this.pokemonService.getPokemonById(this.pokemonId).subscribe(
      (result) => this.pokemon = result
    );
  }

  ngOnChanges(): void {
    this.imageFlag = false;
    this.pokemonService.getPokemonById(this.pokemonId).subscribe(
      (result) => {
        this.pokemon = result;
        this.imageFlag = true;
      }
    );
  }

  pad(num, size): string {
    num = num.toString();
    while (num.length < size) {
      num = '0' + num;
    }
    return num;
  }

  shake(): void {
    this.imageFlag = false;
    setTimeout(() => this.imageFlag = true, 10);
  }
}
