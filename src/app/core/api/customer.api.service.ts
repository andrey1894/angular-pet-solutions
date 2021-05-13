import { Injectable } from '@angular/core'

import { CustomerFakerService } from '@core/fakers'
import { ICustomer } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class CustomerApiService {
  constructor(private customerFakerService: CustomerFakerService) {}

  getCustomers(searchValue: string) {
    return this.customerFakerService.getCustomers(searchValue);
  }

  addCustomer(customer: ICustomer): ICustomer {
    return this.customerFakerService.addCustomer(customer);
  }

}
