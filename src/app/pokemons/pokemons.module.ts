import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PokemonListComponent} from './pokemon-list/pokemon-list.component';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {PokemonDetailComponent} from './pokemon-detail/pokemon-detail.component';
import {RouterModule, Routes} from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatChipsModule} from '@angular/material/chips';
import {InfiniteScrollModule} from 'ngx-infinite-scroll';
import {PokedexComponent} from './pokedex/pokedex.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';

const routes: Routes = [
  {path: '', component: PokedexComponent}
];

@NgModule({
  declarations: [PokemonListComponent, PokemonDetailComponent, PokedexComponent],
  exports: [
    PokemonListComponent,
    PokemonDetailComponent,
    PokedexComponent,
    RouterModule
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    MatSidenavModule,
    MatInputModule,
    MatFormFieldModule,
    InfiniteScrollModule,
    RouterModule.forRoot(routes),
    FormsModule
  ]
})
export class PokemonsModule {
}
