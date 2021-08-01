import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CustomersRoutingModule } from './customers-routing.module';
import { CustomersComponent } from './customers.component';
import { CustomermasterComponent } from './customermaster/customermaster.component';



@NgModule({
  declarations: [CustomersComponent, CustomermasterComponent],
  imports: [
    CommonModule,
    CustomersRoutingModule,
    ]
})
export class CustomersModule { }
