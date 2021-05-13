import { Injectable } from '@angular/core'

import { CompanyFakerService } from '@core/fakers'

@Injectable({
  providedIn: 'root',
})
export class CompanyApiService {
  constructor(private companyFakerService: CompanyFakerService) {}

  getCompanies(searchValue: string) {
    return this.companyFakerService.getCompanies(searchValue);
  }

}
