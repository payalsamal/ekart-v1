import { Component, inject, Inject, OnInit } from '@angular/core';
import { CartService } from '../add-to-cart/cart.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css']
})
export class ContainerComponent implements OnInit{


  menus:String []=["Menu","About","Services","Conatact us"];


  private cartService= inject(CartService);
  
// constructor(private cartService:CartService )
// {

// }

  cartCount:number=0;

    ngOnInit(){
  
      this.cartService.cart.subscribe({
        next:(res:any)=>{
         
          this.cartCount=res;
        }
      });
  
    }
    getCartProducts()
    {
     console.log(this.cartService.getCartProducts)
    }

}
