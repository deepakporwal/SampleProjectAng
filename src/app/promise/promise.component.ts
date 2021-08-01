import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.css']
})
export class PromiseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  async GetFunctionData(){
    return 'Data Recieved';
  }

  PrintData(){
    //console.log(this.GetFunctionData());
    this.GetFunctionData().then(res=>{
      console.log(res);
    })
  }

  DemoPromise(){
    let promise = new Promise((resolve,reject)=>{
      setTimeout(() => {
        resolve('Data Recieved')
      }, 3000);
    })
    return promise;
  }

  async DemoFunc(){
    let response = await this.DemoPromise();
    console.log(response)
  }




}
