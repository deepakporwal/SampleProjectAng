import { CommonConstans } from './../core/constants/common-const';
import { HomeComponent } from './../home/home.component';
import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,AfterViewInit {

  constructor(private route : Router) { }
  title : string = 'Welcome to the anglar world';
  name : string ="deepak porwal";

  @ViewChild('box') box : ElementRef
  //@ViewChild(HomeComponent) objhomeComponent : HomeComponent;
  time : any ;
  
  ngOnInit(): void {
    this.onLoadFn();

      this.time = new Observable(observer =>{
      setInterval(()=>{
        observer.next(new Date()),2000;
      })

      console.log(CommonConstans.gsDateFormat);
    })
  }

  ngAfterViewInit()
  {
    console.log(this.box);
    this.box.nativeElement.style.backgroundColor="red";
    //console.log(this.objhomeComponent);
    //this.objhomeComponent.value = 300;
    //this.objhomeComponent.demomethod();
  }
  onLogin(){
    this.route.navigate(['home']);

  }

  public codeValue: string;

  codeList = [
    { id: 1, name: 'Angular 2+' },
    { id: 2, name: 'Angular 4' },
    { id: 3, name: 'Angular 5' },
    { id: 4, name: 'Angular 6' },
    { id: 5, name: 'Angular 7' }
  ];

  public saveCode(e): void {
    debugger
    let name = e.target.value;
    let list = this.codeList.filter(x => x.name === name)[0];
    console.log(list.id);
  }

  bmlfonremoveAttribute(e){

  }

  onLoadFn(){
  // Create simple observable that emits three values
  const myObservable = of(1, 2, 3,4,5);

  // Create observer object
  const myObserver = {
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };

    // Execute with the observer object
    myObservable.subscribe(myObserver);

    }

  OnPress()
  {
    debugger
    var objex = new Observable(data=>{
      data.next('observer start');
      data.next("still processing");
      setTimeout(()=>{
        data.complete();
      },2000)
    })

    objex.subscribe(res=>{
      console.log(res);
    }, (e)=>console.log(e),
    ()=>console.log("Observable is complete"))
  }
}
