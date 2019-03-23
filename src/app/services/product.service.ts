import {Injectable} from '@angular/core';
import {Product} from '../models/product';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) {
  }

  list(): Observable<Product[]> {
    return this.http.get<Product[]>('data/products.json');
  }
}
