import { Injectable } from '@angular/core'
import { ICompany } from '@core/models'

@Injectable({
  providedIn: 'root',
})
export class CompanyFakerService {

  private companies: ICompany[] = [
    {
      id: 1,
      name: 'Company 1',
      address1: 'address1',
      address2: 'address2',
      postcode: 'postcode',
    },
    {
      id: 2,
      name: 'Company 2'
    },
    {
      id: 3,
      name: 'Company 3'
    },
  ];

  getCompanies(searchValue: string): ICompany[] {
    return searchValue
      ? this.companies.filter(c => c.name.toLowerCase().includes(searchValue.toLowerCase()))
      : this.companies
  }

  addCompany(company: ICompany): ICompany {
    if (this.companies.find(c => c.name.toLowerCase().includes(company.name.toLowerCase()))) {
      return null;
    }
    this.companies.push(company);
    return company;
  }

}
