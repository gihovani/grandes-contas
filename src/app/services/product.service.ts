import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = environment.data.url;

  constructor(private http: HttpClient) {
  }

  list(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.url}/products.json`);
  }
}
