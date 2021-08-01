import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CustomersComponent } from './customers.component';
import { CustomermasterComponent } from './customermaster/customermaster.component';

const routes: Routes = [{ path: '', component: CustomersComponent,
children : [
    { path: '', redirectTo: 'cusmast', pathMatch: 'full' },
    {
    path: 'cusmast',component : CustomermasterComponent
    }
] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CustomersRoutingModule { }
6