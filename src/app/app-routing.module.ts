import { SamplengrxComponent } from './samplengrx/samplengrx.component';
import { AuthguardGuard } from './core/guards/authguard.guard';
import { TodoComponent } from './todo/todo.component';
import { KendoGridSampleComponent } from './kendo-grid-sample/kendo-grid-sample.component';
import { SamplerxjsComponent } from './samplerxjs/samplerxjs.component';
import { AsyncawaitComponent } from './asyncawait/asyncawait.component';
import { ParentComponent } from './parent/parent.component';
import { AngessntialComponent } from './angessntial/angessntial.component';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SamplebsComponent } from './samplebs/samplebs.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { HeroComponent } from './hero/hero.component';
import { ProductcartComponent } from './productcart/productcart.component';
import { PromiseComponent } from './promise/promise.component';


const routes: Routes = [
  {path :'' , component : LoginComponent},
  {path:'kendosample',component : KendoGridSampleComponent,canActivate : [AuthguardGuard]},
  {path : 'promise',component : PromiseComponent },
  {path : 'samplebs' ,component : SamplebsComponent},
  {path : 'home' ,component : HomeComponent},
  {path : 'hero',component : HeroComponent },
  {path : 'products',component : ProductcartComponent },
  {path : 'anges' , component : AngessntialComponent  },
  {path : 'samplerxjs',component : SamplerxjsComponent  },
  {path : 'asaw',component : AsyncawaitComponent},
  {path : 'parentchildex' , component : ParentComponent  },
  {path:'todo',component : TodoComponent},
  {path : 'ngrx',component : SamplengrxComponent},
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
