import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-customermaster',
  templateUrl: './customermaster.component.html',
  styleUrls: ['./customermaster.component.css']
})
export class CustomermasterComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit(): void {
  }

  Onhome(){
    this.route.navigate(['home']);
  }
}
