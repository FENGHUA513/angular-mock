import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { MainComponent } from './pages/main/main.component';
import { Page1Component } from './pages/page1/page1.component';
import { Page2Component } from './pages/page2/page2.component';
import { HashLocationStrategy, LocationStrategy, PathLocationStrategy } from '@angular/common';
const routes: Routes = [
  { path: 'login', component: LoginComponent, data: { title: '登陆'} },
  { path: 'main',
    component: MainComponent,
    children: [
      { path: 'page1/:id', component: Page1Component },
      { path: 'page2', component: Page2Component },
      { path: 'page3', loadChildren: () => import('./pages/page3/page3.module').then(m => m.Page3Module), data: { preload: true } }
    ]
  },
  { path: '', redirectTo: 'main/page2', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true,
    relativeLinkResolution: 'legacy'
})],
  exports: [RouterModule],
  // providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}]
})
export class AppRoutingModule { }
