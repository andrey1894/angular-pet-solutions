import { Component, Input, OnInit } from '@angular/core';

import { ICustomer } from '@core/models';

@Component({
  selector: 'app-customers-search-results',
  templateUrl: './customers-search-results.component.html',
  styleUrls: ['./customers-search-results.component.scss']
})
export class CustomersSearchResultsComponent implements OnInit {

  @Input() customers: ICustomer[]

  constructor() { }

  ngOnInit(): void {
  }

}
