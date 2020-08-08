import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {

  constructor(private myProductService:ProductsService) { }

  breakpoint: number = 3;
  inputNumber: number=0;

  products= [];

  ngOnInit(): void {
    this.products=this.myProductService.getProducts();
  }

  onResize(event) {
    if (event.target.innerWidth<=700) {
      this.breakpoint=1;
    }
    else if (event.target.innerWidth<=1000) {
      this.breakpoint=2;
    }
    else {
      this.breakpoint=3;
    }
  }

  purchase() {
    console.log(this.products);
    this.myProductService.updateProducts(this.products);
  }
}
