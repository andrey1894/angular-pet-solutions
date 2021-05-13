import { Component, OnInit } from '@angular/core';

import { CompanyApiService } from '@core/api';
import { ICompany } from '@core/models';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  companies: ICompany[];

  constructor(private companyApiService: CompanyApiService) { }

  ngOnInit(): void {
  }

  getCompanies(searchValue: string): void {
    this.companies = this.companyApiService.getCompanies(searchValue);
  }

}
