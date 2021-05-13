import { Injectable } from '@angular/core'
import { ICustomer } from '@core/models'

@Injectable({
  providedIn: 'root',
})
export class CustomerFakerService {

  private customers: ICustomer[] = [
    {
      id: 1,
      name: 'Customer 1',
      address1: 'address1',
      address2: 'address2',
      postcode: 'postcode',
    },
    {
      id: 2,
      name: 'Customer 2'
    },
    {
      id: 3,
      name: 'Customer 3'
    },
  ];

  getCustomers(searchValue: string): ICustomer[] {
    return searchValue
      ? this.customers.filter(c => c.name.toLowerCase().includes(searchValue.toLowerCase()))
      : []
  }

  getCustomer(id: number): ICustomer {
    return this.customers.find(c => c.id === id);
  }

  addCustomer(customer: ICustomer): ICustomer {
    if (this.customers.find(c => c.name.toLowerCase() === customer.name.toLowerCase())) {
      return null;
    }
    this.customers.push(customer);
    return customer;
  }

}
