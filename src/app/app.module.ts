import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http';
import {PokemonsModule} from './pokemons/pokemons.module';
import {RouterModule, Routes} from '@angular/router';
import {PokedexComponent} from './pokemons/pokedex/pokedex.component';
import {LoginComponent} from './auth/login/login.component';
import {AuthModule} from './auth/auth.module';
import {MatTabsModule} from '@angular/material/tabs';
import {TeamDetailComponent} from './teams/team-detail/team-detail.component';
import {TeamsModule} from './teams/teams.module';
import {AuthGuardService} from './auth/auth-guard.service';
import {TeamWrapperComponent} from './teams/team-wrapper/team-wrapper.component';

const routes: Routes = [
  {path: '', component: PokedexComponent},
  {path: 'login', component: LoginComponent},
  {path: 'my-team', component: TeamWrapperComponent, canActivate: [AuthGuardService]},
];

@NgModule({
  exports: [
    RouterModule
  ],
  declarations: [
    AppComponent
  ],
  imports: [
    PokemonsModule,
    BrowserModule,
    AuthModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTabsModule,
    TeamsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [AuthGuardService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
