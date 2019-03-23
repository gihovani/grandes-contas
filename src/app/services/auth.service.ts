import {Injectable} from '@angular/core';
import {Client} from '../models/client';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  me: Client = {isLogged: false};

  constructor(private http: HttpClient) {
  }

  mailing(cpfCnpj): Observable<string[]> {
    return this.http.get<{ data: string[] }>(`${environment.api.url}/clientsMailings/${cpfCnpj}`)
      .pipe(map(response => response.data));
  }
}
