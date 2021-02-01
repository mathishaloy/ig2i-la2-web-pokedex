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

const routes: Routes = [
  {path: '', component: PokemonListComponent},
  {path: 'detail/:id', component: PokemonDetailComponent}
];

@NgModule({
  declarations: [PokemonListComponent, PokemonDetailComponent],
  exports: [
    PokemonListComponent,
    PokemonDetailComponent,
    RouterModule
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatChipsModule,
    RouterModule.forRoot(routes)
  ]
})
export class PokemonsModule {
}
