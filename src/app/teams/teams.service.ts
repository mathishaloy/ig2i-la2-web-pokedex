import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {AuthModule} from '../auth/auth.module';
import {AuthService} from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  // Constants retrieved from environment
  readonly apiUrl: string = 'http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io';

  constructor(
    private http: HttpClient,
    private connexionService: AuthService
  ) {
  }

  getTeam(): Observable<any> {
    const headers = new HttpHeaders({Authorization: 'Bearer ' + this.connexionService.accessToken});
    return this.http.get<any>(this.apiUrl + '/trainers/me/team', {headers});
  }

  putTeam(team: number[]): Observable<any> {
    const body = team;
    const headers = new HttpHeaders({Authorization: 'Bearer ' + this.connexionService.accessToken});
    return this.http.put<any>(this.apiUrl + '/trainers/me/team', body, {headers});
  }
}
