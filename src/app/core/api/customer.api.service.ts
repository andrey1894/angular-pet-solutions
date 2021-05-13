import { Injectable } from '@angular/core'

import { CustomerFakerService } from '@core/fakers'

@Injectable({
  providedIn: 'root',
})
export class CustomerApiService {
  constructor(private customerFakerService: CustomerFakerService) {}

  getCustomers(searchValue: string) {
    return this.customerFakerService.getCustomers(searchValue);
  }

}