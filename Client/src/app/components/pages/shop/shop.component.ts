import { Component, OnInit, Input } from '@angular/core';
import { store } from 'src/app/redux/store';
import { ProductModel } from 'src/app/models/Products-model';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styles: [],
})
export class ShopComponent implements OnInit {
  public products: ProductModel[] = [];
  public product: ProductModel = new ProductModel();

  public activeProducts = [];

  public addItem = { amount: '', productID: '' };
  total =0 ;

  @Input()
  public amount: 0;

  ngOnInit() {
    store.subscribe(() => {
      this.products = store.getState().products;
      this.activeProducts = this.products;
    });

    this.products = store.getState().products;
    this.activeProducts = this.products;

    // console.table("shop", this.activeProducts)
  }
  public addToCart(id, amount){
    console.table(id,amount)
  }
  increase() {
    console.log(this.total)
    this.total+1
    // this.cartService.updateCartItems(this.total+1);
}

decrease() {
  console.log(this.total)
  this.total-1
    // this.cartService.updateCartItems(this.total-1);
}


}
