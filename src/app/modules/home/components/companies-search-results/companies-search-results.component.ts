import { Component, Input, OnInit } from '@angular/core';

import { ICompany } from '@core/models';

@Component({
  selector: 'app-companies-search-results',
  templateUrl: './companies-search-results.component.html',
  styleUrls: ['./companies-search-results.component.scss']
})
export class CompaniesSearchResultsComponent implements OnInit {

  @Input() companies: ICompany[]

  constructor() { }

  ngOnInit(): void {
  }

}
