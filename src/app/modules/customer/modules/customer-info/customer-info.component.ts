import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { CustomerApiService } from '@core/api';
import { ICustomer } from '@core/models';

@Component({
  selector: 'app-customer-info',
  templateUrl: './customer-info.component.html',
  styleUrls: ['./customer-info.component.scss']
})
export class CustomerInfoComponent implements OnInit {

  customer: ICustomer;

  constructor(
    private activateRoute: ActivatedRoute,
    private router: Router,
    private customerApiService: CustomerApiService
    ) { }

  ngOnInit(): void {
    const id = +this.activateRoute.snapshot.params['id'];
    this.customer = this.customerApiService.getCustomer(id);
    if (!this.customer) {
      this.router.navigateByUrl('/');
    }
  }

}
