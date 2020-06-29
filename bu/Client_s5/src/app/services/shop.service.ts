import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/Products-model';
import { CategoryModel } from '../models/Category-model';


const port = 3000;

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  public api = `http://localhost:${port}/api/products/`;
  constructor(private http: HttpClient) {}

  public getAllProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(this.api);
  }
  public getAllcats(): Observable<CategoryModel[]> {
    return this.http.get<CategoryModel[]>(this.api + 'cats');
  }


}