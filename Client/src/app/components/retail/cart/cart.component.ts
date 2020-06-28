import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';
import { AuthModel } from 'src/app/models/Auth-model';
import { CartItemModel } from 'src/app/models/Cart-Item-model';
import { store } from 'src/app/redux/store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styles: [],
})
export class CartComponent implements OnInit {
  // public user = new AuthModel();
  public userCart = [];
  public cartBox = '';
  // public cartItems = new CartItemModel();

  constructor(
    private userService: AuthService,
    private cartService: CartService,
    private router: Router
  ) {}

  ngOnInit() {
    store.subscribe(() => {
      this.userCart = store.getState().cartItems;
    });
    this.userCart = store.getState().cartItems;
    if (this.userCart.length < 1) {
      this.userCart = [];

      this.cartBox = 'Start filling up your cart by adding items...';
    }
    if (this.userCart.length > 0) {
      this.cartBox =
        'you left an un-saved cart... here are your previous items';
    }
  }
  public removeItem(id) {
    this.cartService
      .removeItemFromCart(id, this.userCart[0].cartID)
      .subscribe((res) => console.log(res));
  }
}
