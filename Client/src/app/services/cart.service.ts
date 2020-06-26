import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { CartModel } from '../models/Cart-model';
import { CartItemModel } from '../models/Cart-Item-model';

const port = 3000;


@Injectable({
  providedIn: 'root'
})
export class CartService {
  constructor(private http: HttpClient) {}

  public findCart(id:Number): Observable<CartModel[]> {
    return this.http.get<CartModel[]>(`http://localhost:${port}/api/cart/user/${id}`)
  }  
  public fetchItems(num): Observable<CartItemModel[]> {
    return this.http.get<CartItemModel[]>(`http://localhost:${port}/api/cart/history/${num}`)
  } 
// add item to cart
public addItemToCart(num): Observable<CartItemModel[]> {
  return this.http.get<CartItemModel[]>(`http://localhost:${port}/api/cart/history/${num}`)
} 

}
