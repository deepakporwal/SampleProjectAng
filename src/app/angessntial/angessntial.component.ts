import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angessntial',
  templateUrl: './angessntial.component.html',
  styleUrls: ['./angessntial.component.css']
})
export class AngessntialComponent implements OnInit {

  //product :string = 'Cricket Bat';
    products : any = [];

    name :string ='';

    btnHeight = 50;
    btnWidth = 150;

  constructor() { }

  ngOnInit(): void {
    this.products.push({"title" : "ice",price : "100"});
  }

  AddProduct(){
    this.products.push({"title" : "ice",price : "100"});
  }
}
