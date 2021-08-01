import { products } from '../data/product';
import { Component, OnInit } from '@angular/core';
import { SelectableSettings, SelectableMode } from '@progress/kendo-angular-grid';

@Component({
  selector: 'app-kendo-grid-sample',
  templateUrl: './kendo-grid-sample.component.html',
  styleUrls: ['./kendo-grid-sample.component.css']
})
export class KendoGridSampleComponent implements OnInit {

  // declare grid columns
  public columns: any[] = [{field: "ProductID"}, {field: "ProductName"}, {field: "QuantityPerUnit"}];
  public gridData: any[] = products;
  public traceevents : string ='';

  public checkboxOnly = false;
  public mode : SelectableMode = 'multiple';
  public selectableSettings: SelectableSettings;

  constructor() {
    this.setSelectableSetting();
   }

  ngOnInit(): void {

  }

  setSelectableSetting(){
    this.selectableSettings = {
      checkboxOnly: this.checkboxOnly,
      mode : this.mode
  };

  }

  onblur(e,callFor){
    debugger
    this.traceevents = 'event called for ' + callFor ;
    if(e.target.value ==''){
      //document.getElementById(e.target.id).focus();
    }
  }

  onclick(){
    this.traceevents = ' row selected';
    
  }

}
