import { AuthguardGuard } from './guards/authguard.guard';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers :[AuthguardGuard]
})
export class CoreModule { }
