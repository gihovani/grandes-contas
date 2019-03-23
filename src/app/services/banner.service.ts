import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Banner} from '../models/banner';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  private url = environment.data.url;

  constructor(private http: HttpClient) {
  }

  list(): Observable<Banner[]> {
    return this.http.get<Banner[]>(`${this.url}/banners.json`);
  }
}
