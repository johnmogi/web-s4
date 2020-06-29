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
import { OrderModel } from 'src/app/models/Order-model';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'],
})
export class MasterComponent implements OnInit {
  // ONE STORE TO RULE THEM ALL:
  public products: ProductModel[] = [];
  public cartHolder: CartModel[] = [];
  public orders: OrderModel[] = [];

  public userCart = [];
  public cartItems = new CartItemModel();
  public stopCartLoop: Boolean = false;
  // store usage
  public user = new AuthModel();
  public isAdmin = this.user.isAdmin;
  public cartDate: '';
  public totalPrice = 0;

  constructor(
    private itemService: ShopService,
    private cartService: CartService,
    private orderService: OrderService,

    private router: Router
  ) {}

  ngOnInit() {
    store.subscribe(() => {
      this.products = store.getState().products; //* -products ready
      this.user = store.getState().user; //* -user ready - get cart:

      if (this.user && !this.user.isAdmin) {
        this.fetchCart(+this.user.userID);
      }
      this.cartHolder = store.getState().cart;

      this.orders = store.getState().orders;
    }); //store subscribe

    this.itemService.getAllProducts().subscribe(
      // fetch products
      (res) => {
        const action = { type: ActionType.getProducts, payload: res };
        store.dispatch(action);
        this.products = res;
      },
      (err) => alert(err.message)
    );

    this.products = store.getState().products;
    this.user = store.getState().user;
    this.cartHolder = store.getState().cart;
    // ------
    this.orderService.getAllorders().subscribe(
      (res) => {
        const action = { type: ActionType.getOrders, payload: res };
        store.dispatch(action);
        this.orders = res;
      },
      (err) => alert(err.message)
    );

    this.orders = store.getState().orders;
  } // ngonint

  public logout(): void {
    const action = { type: ActionType.userLogout, payload: null };
    store.dispatch(action);
    localStorage.removeItem('token');
    this.router.navigateByUrl('/');
  }

  public async fetchCart(id: Number) {
    // fetch cart + items into store:
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
            (newCart) => {
              this.revealCart(newCart[0]);
              return;
            },
            (err) => alert(err.message)
          );
        }

        if (res.length > 0) {
          this.cartTime(res[0].cartTime);
          // console.table("cartDate:", res[0].cartTime)

          // console.table('cart: i have a cart', res);
          // send cartitems into store
          this.cartService.fetchItems(res[0].cartID).subscribe((response) => {
            //    console.table('push these items into store:', response);
            const action = { type: ActionType.getCartItems, payload: response };
            store.dispatch(action);
            this.userCart = response;
            this.sumTotalPrice(this.userCart);
          });
        }
      },
      (err) => alert(err.message)
    );
  }
  public sumTotalPrice(cart) {
    //  console.table('cart?', cart);
    let sum = 0;
    for (let i = 0; i < cart.length; i++) {
      sum += cart[i].totalPrice;
    }
    //console.log(sum);
    this.totalPrice = sum;
  }
  public revealCart(newCart) {
    console.table('newCart:', newCart);
  }
  public cartTime(cart) {
    this.cartDate = cart;
    // console.table("newCart:", newCart)
  }
}
