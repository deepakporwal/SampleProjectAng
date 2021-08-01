import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-samplebs',
  templateUrl: './samplebs.component.html',
  styleUrls: ['./samplebs.component.css']
})
export class SamplebsComponent implements OnInit {

  @ViewChild('addBtn') addBtn :ElementRef;
  constructor() { }
  public username : string ='';
  ngOnInit(): void {


  }

  ngAfterViewInit(){
    fromEvent(this.addBtn.nativeElement,'click').subscribe(res=>{
      console.log(res);
    })
  }

  test(){
   
  }
}
