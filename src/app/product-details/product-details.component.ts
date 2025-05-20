import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { CartService } from '../add-to-cart/cart.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit{

  product: any;
  

  constructor(private http: HttpClient,private route:ActivatedRoute, private cartService:CartService) {

 
  }

  
ngOnInit() {
   const productId = this.route.snapshot.paramMap.get('id');
  
  this.http.get('https://dummyjson.com/products/' + productId).subscribe({
    next: (response) => {
      this.product = response;
    },
  });
  }
  

  addToCart(product: any) {
    
    this.cartService.addToCart(product);
    }



}
