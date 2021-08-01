import { products } from './products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-productcart',
  templateUrl: './productcart.component.html',
  styleUrls: ['./productcart.component.css']
})
export class ProductcartComponent implements OnInit {

  products  = products;
  constructor() { }

  ngOnInit(): void {
    console.log(location.pathname)
  }

}
