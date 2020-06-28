import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/Products-model';
import { ShopService } from 'src/app/services/shop.service';
import { store } from 'src/app/redux/store';
import { ActionType } from 'src/app/redux/action-type';
import { AuthModel } from 'src/app/models/Auth-model';
import { Router } from '@angular/router';
import { CartModel } from 'src/app/models/Cart-model';
import { CartService } from 'src/app/services/cart.service';
import { CartItemModel } from 'src/app/models/Cart-Item-model';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'],
})
export class MasterComponent implements OnInit {
  // ONE STORE TO RULE THEM ALL - initiator:
  public products: ProductModel[] = [];
  //store cart if there is a cart- if there's not- create a cart and place it in store
  public cartHolder: CartModel[] = [];
  public userCart = [];
  public cartItems = new CartItemModel();
  public stopCartLoop: Boolean = false;
  // store usage
  public user = new AuthModel();
  public isAdmin = this.user.isAdmin

  constructor(
    private itemService: ShopService,
    private cartService: CartService,
    private router: Router
  ) { }

  ngOnInit() {
    store.subscribe(() => {
      this.products = store.getState().products;
      //* -products ready
      this.user = store.getState().user;
      //* -user ready
      if (this.user && !this.user.isAdmin) {
        this.fetchCart(+this.user.userID);
      }

      this.cartHolder = store.getState().cart;
    }); //store subscribe
    // fetch products
    this.itemService.getAllProducts().subscribe(
      (res) => {
        const action = { type: ActionType.getProducts, payload: res };
        store.dispatch(action);
        this.products = res;
      },
      (err) => alert(err.message)
    );

    this.products = store.getState().products;
    // fetch user:
    this.user = store.getState().user;
  } // ngonint

  public logout(): void {
    const action = { type: ActionType.userLogout, payload: null };
    store.dispatch(action);
    localStorage.removeItem('token');
    this.router.navigateByUrl('/');
  }

  // store does not load user ):
  public async fetchCart(id: Number) {
    // console.log(id); //24
    // stop loop?

    this.cartService.findCart(id).subscribe(
      (res) => {
        // stopping loop (created by subscribing to an ongoing event)...

        if (this.stopCartLoop === true) {
          return;
        }
        if (this.stopCartLoop === false) {
          this.stopCartLoop = true;
        }
        if (res.length < 1 && !this.user.isAdmin) {


          this.cartService.makeCart(id).subscribe(
            () => {
              return;
            },
            (err) => alert(err.message)
          );
        }

        if (res.length > 0) {
          // console.table('cart: i have a cart', res);
          this.cartService.fetchItems(res[0].cartID).subscribe((response) => {
            //    console.table('push these items into store:', response);
            const action = { type: ActionType.getCartItems, payload: response };
            store.dispatch(action);
            this.userCart = response;
          });
        }
      },
      (err) => alert(err.message)
    );
  }
}
