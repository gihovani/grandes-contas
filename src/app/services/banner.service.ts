import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Banner} from '../models/banner';

@Injectable({
  providedIn: 'root'
})
export class BannerService {
  constructor(private http: HttpClient) {
  }

  list(): Observable<Banner[]> {
    return this.http.get<Banner[]>('data/banners.json');
  }
}
