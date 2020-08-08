import { Component, OnInit, Input } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {
  totalItems:number=0;
  
  constructor(private productService: ProductsService) {
    this.productService.count$.subscribe((count)=>{
      this.totalItems=count;
    });
   }

  ngOnInit(): void {
  }

}
