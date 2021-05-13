import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home').then(m => m.HomeModule), data: { title: 'Home' }
  },
  {
    path: 'customer',
    loadChildren: () => import('./modules/customer').then(m => m.CustomerModule),
    data: { title: 'Customer' }
  },
  {
    path: 'product-list',
    loadChildren: () => import('./modules/product-list').then(m => m.ProductListModule),
    data: { title: 'Product list' }
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
