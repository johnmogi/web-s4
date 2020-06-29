import { Component, OnInit, Input } from '@angular/core';
import { store } from 'src/app/redux/store';
import { ProductModel } from 'src/app/models/Products-model';
import { CartService } from 'src/app/services/cart.service';
import { CartModel } from 'src/app/models/Cart-model';
import { CartItemModel } from 'src/app/models/Cart-Item-model';
import { AuthModel } from 'src/app/models/Auth-model';
import { Router } from '@angular/router';

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
  public user = new AuthModel(); // kick out un-logged users
  public activeProducts = [];
  public addItem = { amount: '', productID: '', cartId: 0 };

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit() {
    store.subscribe(() => {
      this.products = store.getState().products;
      this.getCart = store.getState().cartItems;
      this.activeProducts = this.products;
      this.user = store.getState().user;
     // console.table('user?', this.user);
      if ((this.user === null)) {
        this.router.navigateByUrl('/');
      }
    });

    this.products = store.getState().products;
    this.getCart = store.getState().cartItems;

    this.activeProducts = this.products;
  }

  public addToCart(id) {
    this.addItem.cartId = +this.getCart[0].cartID;
    this.addItem.productID = id;

    this.cartService
      .addItemToCart(this.addItem, this.addItem.cartId)
      .subscribe((res) => console.log(res));
  }
}

// console.table("thisCart:", this.getCart)
// console.table("cart:", this.cart)
// total = 0;

// increase() {
//   console.log(this.total);
//   this.total + 1;
//   // this.cartService.updateCartItems(this.total+1);
// }

// decrease() {
//   console.log(this.total);
//   this.total - 1;
//   // this.cartService.updateCartItems(this.total-1);
// }
