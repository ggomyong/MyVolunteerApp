import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  displayedColumns: string[] = ['name','quantity','price', 'total'];
  datasource = [];

  constructor(private productService: ProductsService) { }

  ngOnInit(): void { //special method invoked at initialization
    this.datasource=this.productService.getProducts();
    for (let i=0; i<this.datasource.length; i++) {
      this.datasource[i].total=this.datasource[i].quantity* this.datasource[i].price;
    }
    console.log(this.datasource);
  }
  //handlePaypal() {
  //  document.forms["paypalForm"].submit();
  //}
}
