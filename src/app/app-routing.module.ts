import { NgModule } from '@angular/core';
import { Routes, RouterModule, LoadChildren } from '@angular/router';
import { Page1Component } from './main/page1/page1.component';
import { Page2Component } from './main/page2/page2.component';
import { Page3Component } from './main/page3/page3.component';
const routes: Routes = [
  { path: 'page1', component: Page1Component},
  { path: 'page2', component: Page2Component},
  { path: 'page3', component: Page3Component},
  { path: '', redirectTo: '/page1', pathMatch: 'full'},
  { path: 'login', loadChildren: './mian/login/login.module#LoginModule'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
