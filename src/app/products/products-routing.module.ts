import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { ProductPageComponent } from './pages/productPage/productPage.component';

const routes: Routes = [

  {
    path: '',
    children: [
      { path: 'product', component: ProductPageComponent },
      { path: '**', redirectTo: 'product' },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
