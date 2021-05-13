import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomerInfoComponent } from './customer-info.component';
import { CustomerRoutingModule } from './customer-routing.module';

@NgModule({
  declarations: [
    CustomerInfoComponent
  ],
  imports: [
    CommonModule,
    CustomerRoutingModule
  ]
})
export class CustomerInfoModule { }
