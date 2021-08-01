import { element } from 'protractor';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { GridDataResult, DataStateChangeEvent, PageChangeEvent, SelectableSettings } from '@progress/kendo-angular-grid';
import { Observable } from 'rxjs';
import { State, process, SortDescriptor, orderBy } from '@progress/kendo-data-query';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css','./pdf-styles.css','./page-template.css'],
  encapsulation: ViewEncapsulation.None,
})
export class ReactiveFormComponent implements OnInit {
  name = new FormControl('');
  decimalbox = new FormControl('');
  products: any = [];

  public gridView: GridDataResult;
  public pageSize = 5;
  public skip = 0;
  private data: Object[];

  private items: any[] = this.products;

  public multiple = false;
  public allowUnsort = true;
  public sort: SortDescriptor[] = [{
    field: 'ProductName',
    dir: 'asc'
  }];

  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });

  public columns: any[] = [
    { field: "ProductID", hidden : false },
    { field: "ProductName",hidden : false},
    { field: "QuantityPerUnit",hidden : false }
    ];

  public bindingType: String = 'array';
  public view: Observable<GridDataResult>;
  public gridData: any = this.products;

  public mySelection: number[] = [];

  public selectableSettings: SelectableSettings;

  public state: State = {
    skip: 0,
    take: 5,

    // Initial filter descriptor
    filter: {
      logic: 'and',
      filters: []
    }
};

  constructor() { }

  ngOnInit(): void {
    this.setDecimalValue();
    // set defaults
    this.profileForm.patchValue({
      firstName: 'deepak', lastName: 'porwal'
    });

    this.products.push({ "ProductID": "1", "ProductName": "tea", "QuantityPerUnit": "10" });
    this.products.push({ "ProductID": "2", "ProductName": "biscuits", "QuantityPerUnit": "20" });
    this.products.push({ "ProductID": "3", "ProductName": "toast", "QuantityPerUnit": "30" });
    this.products.push({ "ProductID": "4", "ProductName": "sugar", "QuantityPerUnit": "20" });
    this.products.push({ "ProductID": "5", "ProductName": "milk", "QuantityPerUnit": "30" });

    this.loadItems();

    this.setSelectableSettings();
  }

  setDecimalValue() {
    let value = "1.23";
    this.decimalbox.setValue(parseFloat(value));
  }

  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.warn(this.profileForm.value);
  }


  public dataStateChange(state: DataStateChangeEvent): void {
    debugger
    this.state = state;
    this.gridView = process(this.products, this.state);
  }

  public pageChange(event: PageChangeEvent): void {
    this.skip = event.skip;
    this.loadItems();
  }

  private loadItems(): void {

    this.gridView = this.products;

    // this.gridView = {
    //   data: this.items.slice(this.skip, this.skip + this.pageSize),
    //   total: this.items.length
    // };

    this.gridView = {
      data: orderBy(this.items, this.sort),
      total: this.items.length
  };
  }

  public sortChange(sort: SortDescriptor[]): void {
    this.sort = sort;
    this.loadItems();
}

onRowSelect(e){
  debugger
  console.log(e);
}

public setSelectableSettings(): void {
  this.selectableSettings = {
      checkboxOnly: true,
      mode: 'multiple'
  };
}

onLeave(e){
  debugger
  console.log(e.target.name);
}

OnValChange(e){
  debugger
  console.log(e.target.value);
}
}
