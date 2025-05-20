import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Route, Router } from '@angular/router';
import { CartService } from '../add-to-cart/cart.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  isAddToCart: number = 0;
  loginName: String = 'testing';
  searchObject: String = 'testing';
  productList: any;
  productDetails: any;

  constructor(private http: HttpClient, private route: Router,private cartService: CartService) {}



  navigateToProdDetails(id: any) {
    this.route.navigate(['product', 'details', id]);
  }

  ngOnInit() {
    console.log('inside ');
    this.getProductList();
  }

  getValue() {
    return 'Hi';
  }
  printValue(event: any) {
    this.loginName = event.target.value;
    console.log(event.target.value);
  }

  decrementValue() {
    if (this.isAddToCart >= 0) {
      this.isAddToCart--;
    }
  }

  searchObjectEvent(data: any) {
    this.searchObject = this.searchObject + data.target.value;
    return this.searchObject;
  }

  public getProductList() {
    const sub = this.http.get('https://dummyjson.com/products');
    sub.subscribe({
      next: (num: any) => {
     
        this.productList = num.products || null;
      },
    });
  }

  public getProductById(id: any) {
    this.http.get('https://dummyjson.com/products/' + id).subscribe({
      next: (response: any) => {
        this.productDetails = response;
      },
    });
  }



  
  searchProduct(search: any) {
   if(search!=''){
  const param = new HttpParams() .set("q",search);
 

    this.http.get('https://dummyjson.com/products/search', { params:  param}).subscribe({
      next: (response:any) => {
        this.productList= response.products;

      },
    });
  }
  else{
    const sub = this.http.get('https://dummyjson.com/products');
    sub.subscribe({
      next: (num: any) => {
     
        this.productList = num.products || null;
      },
    });
  }
}

addToCart(product: any) {
    
  this.cartService.addToCart(product);
  }


}
