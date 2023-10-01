import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainShopComponent } from './components/main-shop/main-shop.component';
import { CartComponent } from './components/cart/cart.component';
import { ProductDescriprionComponent } from './components/product-descriprion/product-descriprion.component';
import { HeaderComponent } from './components/header/header.component';

const routes: Routes = [
  {path: '', component: MainShopComponent},
  {path: 'cart', component: CartComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
