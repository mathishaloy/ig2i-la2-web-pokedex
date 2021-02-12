import {Component, OnInit, ViewChild} from '@angular/core';
import {TeamDetailComponent} from '../team-detail/team-detail.component';

@Component({
  selector: 'app-team-wrapper',
  templateUrl: './team-wrapper.component.html',
  styleUrls: ['./team-wrapper.component.css']
})
export class TeamWrapperComponent implements OnInit {
  pokemonId: string;

  @ViewChild(TeamDetailComponent)
  private teamDetailComponent: TeamDetailComponent;

  constructor() { }

  ngOnInit(): void {
  }

  addId(pokemonId: string): void {
    this.teamDetailComponent.addId(pokemonId);
  }
}
