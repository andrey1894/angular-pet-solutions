import { Component, OnInit } from '@angular/core';

import { CustomerApiService } from '@core/api';
import { ICustomer } from '@core/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  customers: ICustomer[];

  constructor(private customerApiService: CustomerApiService) { }

  ngOnInit(): void {
  }

  getCustomers(searchValue: string): void {
    this.customers = this.customerApiService.getCustomers(searchValue);
  }

}
