import { Injectable } from '@angular/core'

import { ProductFakerService } from '@core/fakers';
import { IProduct } from '@core/models';

@Injectable({
  providedIn: 'root',
})
export class ProductApiService {
  constructor(private productFakerService: ProductFakerService) {}

  getProducts(): IProduct[] {
    return this.productFakerService.getProducts();
  }

}
