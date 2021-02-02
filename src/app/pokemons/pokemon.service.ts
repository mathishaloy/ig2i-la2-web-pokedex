import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';

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

  getPokemons(offset?: number, search?: string, limit = 25): Observable<any> {
    const url = this.apiUrl + '/pokemons';
    let params = new HttpParams();

    if (offset) {
      params = params.set('offset', `${offset}`);
    }

    if (limit) {
      params = params.set('limit', `${limit}`);
    }

    if (search) {
      params = params.set('search', search);
    }

    console.log(url);
    return this.http.get<any>(url, {params});
  }

  getPokemonById(id): Observable<any> {
    return this.http.get<any>(this.apiUrl + '/pokemons/' + id);
  }
}
