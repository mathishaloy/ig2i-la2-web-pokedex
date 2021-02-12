import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public refreshToken;
  public accessToken;

  // Constants retrieved from environment
  readonly apiUrl: string = 'http://app-ec21e68e-3e55-42d7-b1ae-3eef7507a353.cleverapps.io';

  constructor(
    private http: HttpClient
  ) {
  }

  register(email: string, password: string): Observable<any> {
    const url = this.apiUrl + '/trainers';
    const body = {
      email,
      password
    };

    console.log(url);
    return this.http.post<any>(url, body);
  }

  login(email: string, password: string): Observable<any> {
    const url = this.apiUrl + '/auth/login';
    const body = {
      email,
      password
    };

    console.log(url);
    return this.http.post<any>(url, body);
  }

  refresh(): Observable<any> {
    const url = this.apiUrl + '/auth/refresh';
    const body = {
      refresh_token: this.refreshToken
    };

    console.log(url);
    return this.http.post<any>(url, body);
  }

  isAuthenticated(): boolean {
    return this.accessToken !== undefined
  }
}
