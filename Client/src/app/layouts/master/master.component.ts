import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/Products-model';
import { ShopService } from 'src/app/services/shop.service';
import { store } from 'src/app/redux/store';
import { ActionType } from 'src/app/redux/action-type';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css'
  ]
})
export class MasterComponent implements OnInit {
// ONE STORE TO RULE THEM ALL - initiator:
public products: ProductModel[] = [];

constructor(private itemService: ShopService) {}

ngOnInit() {
  store.subscribe(() => {
    this.products = store.getState().products;
    console.log(this.products)
  }); //store subscribe
  
  this.itemService.getAllProducts().subscribe(
    (res) => {
      const action = { type: ActionType.getProducts, payload: res };
      store.dispatch(action);
      this.products = res;
    },
    (err) => alert(err.message)
    );
    
    this.products = store.getState().products;

}
}
