import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/home').then(m => m.HomeModule),
  },
  {
    path: 'add-customer',
    loadChildren: () => import('./modules/add-customer').then(m => m.AddCustomerModule),
  },
  {
    path: 'product-list',
    loadChildren: () => import('./modules/product-list').then(m => m.ProductListModule),
  },
  { path: '**', redirectTo: '/' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
