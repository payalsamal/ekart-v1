import { Injectable } from '@angular/core';
import { BehaviorSubject, Observer, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  addToCartProduct: any[] = [];

 


  cart = new BehaviorSubject(0);

  

  addToCart(product: any) {
    
    this.addToCartProduct.push(product);
    this.cart.next(this.addToCartProduct.length);


  }

  getCartProducts()
  {
    return this.addToCartProduct;
  }
}
