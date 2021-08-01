import { SampleService } from './../http/sample.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-asyncawait',
  templateUrl: './asyncawait.component.html',
  styleUrls: ['./asyncawait.component.css']
})
export class AsyncawaitComponent implements OnInit {

  constructor(private objService : SampleService) { }

  ngOnInit(): void {
    console.log('async function called');
    this.TestFunction2();
  }
  testDemo(){
      this.objService.getUsers().subscribe(res=>{
        console.log('getUsers - service called');
        console.log(res);
       
      })
  }
  async TestFunction2(){
    console.log('await function called');
    var res = await this.testDemo();
    console.log('after await complete async finished');




 }
}
