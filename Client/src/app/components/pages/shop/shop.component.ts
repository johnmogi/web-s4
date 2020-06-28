import { Component, OnInit, Input } from '@angular/core';
import { store } from 'src/app/redux/store';
import { ProductModel } from 'src/app/models/Products-model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styles: [
  ]
})
export class ShopComponent implements OnInit {
  public products: ProductModel[] = [];
  public product: ProductModel = new ProductModel();

  public activeProducts = [];

  public addItem = { amount: 0, productID: '' };

  @Input()
  public amount: 0;


  ngOnInit() {
    store.subscribe(() => {
      this.products = store.getState().products;
      this.activeProducts = this.products


    });
    this.products = store.getState().products;
    this.activeProducts = this.products

    console.table("shop", this.activeProducts)

  }

  public addToCart(id, amount) {
    alert(+amount)
    this.addItem.amount = +amount;
    this.addItem.productID = id
    console.log(this.addItem)
  }
}
