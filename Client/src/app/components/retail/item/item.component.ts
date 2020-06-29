import { Component, OnInit } from '@angular/core';
import { ProductModel } from 'src/app/models/Products-model';
import { store } from 'src/app/redux/store';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styles: [],
})
export class ItemComponent implements OnInit {
  public products: ProductModel[];
  public addItem = { amount: 0, productID: '' };
  public activeProducts = [];
  constructor() {}

  ngOnInit() {
    store.subscribe(() => {
      this.products = store.getState().products;
    //  console.table("shop 1,", this.activeProducts);
    }); //store subscribe
    this.activeProducts = store.getState().products;


   // this.activeProducts = this.products;
  }
  // this.improvePerformance = true;
 public addToCart(amount){
console.log(amount)
 }
    }

  