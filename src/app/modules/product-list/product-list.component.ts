import { Component, OnInit } from '@angular/core';

import { ProductApiService } from '@core/api';
import { IProduct } from '@core/models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: IProduct[];

  constructor(private productApiService: ProductApiService) { }

  ngOnInit(): void {
    this.products = this.productApiService.getProducts();
  }

}
