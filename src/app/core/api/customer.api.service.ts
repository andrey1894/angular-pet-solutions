import { Injectable } from '@angular/core'

import { CustomerFakerService } from '@core/fakers'
import { ICustomer } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class CustomerApiService {
  constructor(private customerFakerService: CustomerFakerService) {}

  getCustomers(searchValue: string): ICustomer[] {
    return this.customerFakerService.getCustomers(searchValue);
  }

  getCustomer(id: number): ICustomer {
    return this.customerFakerService.getCustomer(id);
  }

  addCustomer(customer: ICustomer): ICustomer {
    return this.customerFakerService.addCustomer(customer);
  }

}
