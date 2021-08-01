import { todos } from './redux/reducer';
import { StoreModule } from '@ngrx/store';
import { reducer } from './reducers/tutorial.reducer';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SamplebsComponent } from './samplebs/samplebs.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ButtonsModule } from '@progress/kendo-angular-buttons';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { GridModule, PDFModule } from '@progress/kendo-angular-grid';
import { HeroComponent } from './hero/hero.component';
import { ProductcartComponent } from './productcart/productcart.component';
import { DialogsModule } from '@progress/kendo-angular-dialog';
import { AngessntialComponent } from './angessntial/angessntial.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { AsyncawaitComponent } from './asyncawait/asyncawait.component';
import { HttpClientModule} from '@angular/common/http';
import {NgxPrintModule} from 'ngx-print';
import { PromiseComponent } from './promise/promise.component';
import { SamplerxjsComponent } from './samplerxjs/samplerxjs.component';
import { KendoGridSampleComponent } from './kendo-grid-sample/kendo-grid-sample.component';
import { HihlightDirective } from './hihlight.directive';
import { TodoComponent } from './todo/todo.component';
import { MyhihlihtDirective } from './myhihliht.directive';
import { SamplengrxComponent } from './samplengrx/samplengrx.component';




@NgModule({
  declarations: [
    AppComponent,
    SamplebsComponent,
    LoginComponent,
    HomeComponent,
    ReactiveFormComponent,
    HeroComponent,
    ProductcartComponent,
    AngessntialComponent,
    ParentComponent,
    ChildComponent,
    AsyncawaitComponent,
    PromiseComponent,
    SamplerxjsComponent,
    KendoGridSampleComponent,
    HihlightDirective,
    TodoComponent,
    MyhihlihtDirective,
    SamplengrxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    BrowserAnimationsModule,
    InputsModule,
    ReactiveFormsModule,
    FormsModule,
    GridModule,
    PDFModule,
    DialogsModule,
    FormsModule,
    HttpClientModule,
    NgxPrintModule,
    CoreModule,
   ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
