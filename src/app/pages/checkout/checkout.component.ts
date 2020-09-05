import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  
  displayedColumns: string[] = ['name','quantity','price', 'total'];

  destinations = [
    {value: 'Hospital'},
    {value: 'Nursing home'},
    {value: 'Orphanage'}
  ];

  datasource = [];
  totalAmount:number=0;
  selectedDestination: string='';

  constructor(private productService: ProductsService) { }

  ngOnInit(): void { //special method invoked at initialization
    //this.datasource=this.productService.getProducts();
    let productArray=[];

    productArray=this.productService.getProducts();
    
    for (let i=0; i<productArray.length; i++) {
      //this.datasource[i].total=this.datasource[i].quantity* this.datasource[i].price;
      if (productArray[i].quantity>0) {
        productArray[i].total=productArray[i].quantity*productArray[i].price;
        this.totalAmount=this.totalAmount+productArray[i].total;

        this.datasource.push(productArray[i]);
      }
    }
  }
  processPaypal() {
    if (this.selectedDestination=='') {
      alert('No location is set.');
      return;
    }
    document.forms["paypalForm"].submit();
  }
}
