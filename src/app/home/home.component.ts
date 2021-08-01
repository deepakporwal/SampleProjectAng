import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route : Router) { }

  public autoCorrect: boolean = false;
  public value: number = 5;
  public dt = '2020-07-01T13:04:57';

  ngOnInit(): void {
    this.value = parseFloat('5.232');
  }
  onCustomer(){
    this.route.navigate(['customers/cusmast']);
  }

  demomethod()
  {
    alert('child method called')
  }
}
