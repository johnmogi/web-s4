import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProductModel } from '../models/Products-model';

const port = 3000;

@Injectable({
  providedIn: 'root'
})

export class AdminService {
  public api = `http://localhost:${port}/api/super/`;
  constructor(private http: HttpClient) {}
    public addProduct(sendInfo): Observable<ProductModel[]> {
      return this.http.post<ProductModel[]>(this.api + 'add-product', sendInfo);
    }
}
