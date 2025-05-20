import { Component, inject, Inject, OnInit } from '@angular/core';
import { CartService } from '../add-to-cart/cart.service';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  menus: String[] = ['Menu', 'About', 'Services', 'Conatact us'];

  products: any[] = [];
  private cartService = inject(CartService);

constructor(private route:Router)
{

}

  cartCount: number = 0;

  ngOnInit() {
    this.cartService.cart.subscribe({
      next: (res: any) => {
        this.cartCount = res;
      },
    });
  }

  getCartProducts() {
    this.products = this.cartService.addToCartProduct;
  }

  navigateToProdDetails() {
    this.route.navigate(['add-to-cart' ]);
  }

}
