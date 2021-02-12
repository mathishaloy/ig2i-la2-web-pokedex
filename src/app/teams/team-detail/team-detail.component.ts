import {Component, Input, OnInit, SimpleChanges} from '@angular/core';
import {TeamsService} from '../teams.service';
import {PokemonService} from '../../pokemons/pokemon.service';
import {forkJoin, Observable} from 'rxjs';

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent implements OnInit {

  team = [];

  constructor(
    private teamsService: TeamsService,
    private pokemonService: PokemonService
  ) {
  }

  ngOnInit(): void {
    this.teamsService.getTeam().subscribe((result) => {
      const mappedResult: Observable<any>[] = result.map((id) => this.pokemonService.getPokemonById(id));
      forkJoin(mappedResult).subscribe(team => this.team = team);
    });
  }

  removeId(i: number): void {
    this.team.splice(i, 1);
    console.log(this.team.map(pokemon => pokemon.id));
    this.teamsService.putTeam(this.team.map(pokemon => pokemon.id)).subscribe();
  }

  addId(pokemonId: string): void {
    if (this.team.length < 6) {
      this.pokemonService.getPokemonById(pokemonId).subscribe(result => {
        this.team.push(result);
        this.teamsService.putTeam(this.team.map(pokemon => pokemon.id)).subscribe();
      });
    }
  }
}
