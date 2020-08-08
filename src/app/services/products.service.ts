import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }

  private _countSubject = new Subject<number>();
  count$=this._countSubject.asObservable();
  
  products= [
    {id: 0, name: 'Clinical Mask', price: '15.50', icon: 'mask', color: 'primary', quantity: 0},
    {id: 1, name: 'Sanitizer', price: '5.50', icon: 'sanitizer', color: 'accent', quantity: 0},
    {id: 2, name: 'Bar Soap', price: '10.50', icon: 'soap', color: 'primary', quantity: 0},
  ];

  getProducts() {
    return this.products;
  }

  updateProducts(updatedProducts) {
    this.products=updatedProducts;
    this.getTotalCount();
  }

  getTotalCount() {
    let totalCount=0;
    for (let product of this.products) {
      totalCount+=product.quantity;
    }
    this._countSubject.next(totalCount);
  }
}
