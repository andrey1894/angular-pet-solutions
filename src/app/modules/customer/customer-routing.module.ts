import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CustomerComponent } from './customer.component';

const routes: Routes = [
  {
    path: '',
    component: CustomerComponent,
    children: [
      {
        path: 'add',
        loadChildren: () => import('./modules/add-customer').then(m => m.AddCustomerModule),
      },
      {
        path: ':id',
        loadChildren: () => import('./modules/customer-info').then(m => m.CustomerInfoModule),
      },
    ]
  },
  { path: '**', redirectTo: 'customer/add' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomerRoutingModule { }
