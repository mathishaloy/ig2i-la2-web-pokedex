import {Component} from '@angular/core';
import {ThemePalette} from '@angular/material/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private router: Router) {
  }

  title = 'web-tp-pokedex';
  links = [
    {
      name: 'Pokedex',
      link: 'pokedex'
    },
    {
      name: 'Mon Equipe',
      link: 'my-team'
    },
    {
      name: 'Authentification',
      link: 'login'
    }];
  activeLink = this.links[0].name;
  background: ThemePalette = undefined;

  onNavigate(): void {
    switch (this.router.url) {
      case '/pokedex': {
        this.activeLink = this.links[0].name;
        break;
      }
      case '/my-team': {
        this.activeLink = this.links[1].name;
        break;
      }
      case '/login': {
        this.activeLink = this.links[2].name;
      }
    }
  }
}
