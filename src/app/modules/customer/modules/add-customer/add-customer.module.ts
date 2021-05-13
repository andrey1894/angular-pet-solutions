import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AddCustomerComponent } from './add-customer.component';
import { AddCustomerRoutingModule } from './add-customer-routing.module';
import { AddCustomerFormComponent } from './components';

@NgModule({
  declarations: [
    AddCustomerComponent,
    AddCustomerFormComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,

    AddCustomerRoutingModule
  ]
})
export class AddCustomerModule { }
