import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/Products-model';
import { ShopService } from 'src/app/services/shop.service';
import { store } from 'src/app/redux/store';
import { ActionType } from 'src/app/redux/action-type';
import { AuthModel } from 'src/app/models/Auth-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'
  ]
})
export class MasterComponent implements OnInit {
// ONE STORE TO RULE THEM ALL - initiator:
public products: ProductModel[] = [];

// store usage
public user = new AuthModel();


constructor(private itemService: ShopService, private router: Router) {}

ngOnInit() {
  store.subscribe(() => {
    this.products = store.getState().products;
    this.user = store.getState().user;
    //* -products ready
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
 
} // ngonint


public logout(): void {
  const action = { type: ActionType.userLogout, payload: null };
  store.dispatch(action);
  localStorage.removeItem('token');
  this.router.navigateByUrl('/');
}

}
