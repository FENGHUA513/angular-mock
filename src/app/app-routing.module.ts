import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Page1Component } from './main/page1/page1.component';
import { Page2Component } from './main/page2/page2.component';
const routes: Routes = [
  { path: 'page1', component: Page1Component},
  { path: 'page2', component: Page2Component},
  { path: 'page3', loadChildren: './main/page3/page3.module#Page3Module'},
  { path: '', redirectTo: '/page1', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
