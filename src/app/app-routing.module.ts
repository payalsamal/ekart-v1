import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ContainerComponent } from './container/container.component';

const routes: Routes = [
  
  { path: 'products', component: ProductListComponent },
  { path: 'detail/:id', component: ProductDetailsComponent
   },
   {path:'', redirectTo:'/products',pathMatch:'full' }
  ];
  
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
