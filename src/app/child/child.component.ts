import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  message = 'I am child component';

  @Input() parentId : string ;
  @Output() fetchData = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  TestEmit(){
    let data : string ='Deepak Porwal';
    this.fetchData.emit(data);
  }

  sayChildHello() {
    console.log('I am clicked in the child');
    }
}
