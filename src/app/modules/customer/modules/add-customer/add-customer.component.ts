import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { CustomerApiService } from '@core/api';
import { ICustomer } from '@core/models';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.scss']
})
export class AddCustomerComponent implements OnInit {

  customerNameErr: boolean;

  constructor(
    private customerApiService: CustomerApiService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  addCustomer(customer: ICustomer): void {
    this.customerNameErr = false;
    this.customerApiService.addCustomer(customer)
      ? this.router.navigateByUrl('/')
      : this.customerNameErr = true;
  }

}
