import { Injectable } from '@angular/core'
import { IProduct } from '@core/models'

@Injectable({
  providedIn: 'root',
})
export class ProductFakerService {

  private products: IProduct[] = [
    {
      id: 1,
      name: 'Product 1',
      cost: 5.2,
      count: 40,
      size: 'S 60 X 25 X 11 cm',
      img: 'https://via.placeholder.com/450x200/89d2d2/fff'
    },
    {
      id: 2,
      name: 'Product 2',
      cost: 5.2,
      count: 40,
      size: 'S 22 X 20 X 101 cm',
      img: 'https://via.placeholder.com/450x200/89d2d2/fff'
    },
    {
      id: 3,
      name: 'Product 3',
      cost: 5.233,
      count: 23,
      size: 'S 60 X 25 X 11 cm',
      img: 'https://via.placeholder.com/450x200/89d2d2/fff'
    },
    {
      id: 4,
      name: 'Product 4',
      cost: 54.2,
      count: 44,
      size: 'S 60 X 25 X 11 cm',
      img: 'https://via.placeholder.com/450x200/89d2d2/fff'
    },
    {
      id: 5,
      name: 'Product 5',
      cost: 5.2,
      count: 40,
      size: 'S 60 X 25 X 11 cm',
      img: 'https://via.placeholder.com/450x200/89d2d2/fff'
    },
    {
      id: 6,
      name: 'Product 6',
      cost: 5.2,
      count: 40,
      size: 'S 60 X 25 X 11 cm',
      img: 'https://via.placeholder.com/450x200/89d2d2/fff'
    },
    {
      id: 7,
      name: 'Product 7',
      cost: 5.2,
      count: 40,
      size: 'S 60 X 25 X 11 cm',
      img: 'https://via.placeholder.com/450x200/89d2d2/fff'
    },
    {
      id: 8,
      name: 'Product 8',
      cost: 5.2,
      count: 40,
      size: 'S 60 X 25 X 11 cm',
      img: 'https://via.placeholder.com/450x200/89d2d2/fff'
    },
  ];

  getProducts(): IProduct[] {
    return this.products;
  }

}
