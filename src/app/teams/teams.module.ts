import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TeamDetailComponent} from './team-detail/team-detail.component';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {TeamWrapperComponent} from './team-wrapper/team-wrapper.component';
import {TeamPokemonListComponent} from './team-pokemon-list/team-pokemon-list.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {FormsModule} from '@angular/forms';
import {MatSidenavModule} from '@angular/material/sidenav';


@NgModule({
  declarations: [TeamDetailComponent, TeamWrapperComponent, TeamPokemonListComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatGridListModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    InfiniteScrollModule,
    FormsModule,
    MatSidenavModule
  ]
})
export class TeamsModule {
}
