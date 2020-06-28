import { Component, OnInit, Input } from '@angular/core';
import { store } from 'src/app/redux/store';
import { ProductModel } from 'src/app/models/Products-model';
import { CartService } from 'src/app/services/cart.service';
import { CartModel } from 'src/app/models/Cart-model';
import { CartItemModel } from 'src/app/models/Cart-Item-model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styles: [],
})
export class ShopComponent implements OnInit {
  public products: ProductModel[] = [];
  public product: ProductModel = new ProductModel();

  public getCart: CartItemModel[] = [];
  public cart: CartItemModel = new CartItemModel();

  public activeProducts = [];

  public addItem = { amount: '', productID: '' };
  total = 0;

  constructor(private cartService: CartService) {}

  ngOnInit() {
    store.subscribe(() => {
      this.products = store.getState().products;
      this.getCart = store.getState().cartItems;
      console.table("thisCart:", this.getCart)
      console.table("cart:", this.cart)

      this.activeProducts = this.products;
    });

    this.products = store.getState().products;
    this.getCart = store.getState().cartItems;

    this.activeProducts = this.products;

    


    // console.table("shop", this.activeProducts)
  }
  increase() {
    console.log(this.total);
    this.total + 1;
    // this.cartService.updateCartItems(this.total+1);
  }

  decrease() {
    console.log(this.total);
    this.total - 1;
    // this.cartService.updateCartItems(this.total-1);
  }

  public addToCart(id) {
    console.table(this.getCart[0].cartID, id, this.addItem.amount)
    // this.cartService
    //   .addItemToCart(this.cart.cartID, id, this.addItem.amount)
    //   .subscribe((res) => console.log(res));

    // console.table(id, this.addItem.amount);
  }
}
