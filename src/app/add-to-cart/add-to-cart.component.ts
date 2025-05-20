import { Component, inject, Inject, OnInit } from '@angular/core';
import { CartService } from './cart.service';

@Component({
  selector: 'app-add-to-cart',
  templateUrl: './add-to-cart.component.html',
  styleUrls: ['./add-to-cart.component.css']
})
export class AddToCartComponent implements OnInit{

private cartService = inject(CartService)

 products:any[]=[]

  ngOnInit() {
    this.products = this.cartService.addToCartProduct;
  }

}
