import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //class member variable declarations
  screenSize:number=0;
  toggled:boolean=false;

  constructor() { }

  ngOnInit(): void {
    this.sizeChange();
  }

  sizeChange() {
    console.log('Width: ' + window.innerWidth);
    this.screenSize=window.innerWidth;
  }

  toggle() {
    this.toggled=!this.toggled;
  }
}
