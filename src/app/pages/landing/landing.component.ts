import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

   pages= [
     {url: '/who-we-are', color: 'warn', img: '../../../assets/images/pexels-pixabay-45842.jpg', title: 'Introduction', subtitle: 'Little bit about ourselves'},
     {url: '/buy-from-us', color: 'primary', img: '../../../assets/images/pexels-pixabay-45842.jpg', title: 'Buy From Us', subtitle: 'Support us!'},
     {url: '/what-we-did', color: 'warn', img: '../../../assets/images/pexels-pixabay-45842.jpg', title: 'What We Did', subtitle: ':D',}
   ];
   
  constructor() { }

  ngOnInit(): void {
  }

}
