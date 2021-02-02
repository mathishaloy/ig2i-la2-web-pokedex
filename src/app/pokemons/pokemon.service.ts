import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, empty, of, Subscription} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  // Constants retrieved from environment
  readonly apiUrl: string = 'http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io';

  constructor(
    private http: HttpClient
  ) {
  }

  getPokemons(offset): Observable<any> {
    const url = this.apiUrl + '/pokemons?limit=25&offset=' + offset;
    console.log(url);
    return this.http.get<any>(url);
  }

  getPokemonsWithSearch(offset, search): Observable<any> {
    const url = this.apiUrl + '/pokemons?limit=25&offset=' + offset + '&search=' + search;
    console.log(url);
    return this.http.get<any>(url);
  }

  getPokemonById(id): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/pokemons/' + id);
  }
}
