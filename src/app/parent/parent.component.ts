import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  message = 'I am parent component';
  desc ='';
  constructor() { }

  ngOnInit(): void {

  }

  GetResponse(data){
    this.desc = data;
  }
  
  clickChildMethod(){
    
  }
}