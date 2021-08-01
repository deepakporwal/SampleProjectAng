import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  servername : string = ''
  employeeForm : FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.employeeForm = new FormGroup(
      {
        fullName : new FormControl(),
        email : new FormControl()
      });
  }

  OnButtonClick(event)
  {
     debugger
     console.log(this.employeeForm);
    // this.servername =(<HTMLElement>event.target).nodeValue;
    // alert(this.servername);
  }

}
