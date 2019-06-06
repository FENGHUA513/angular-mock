import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { Page1Component } from './main/page1/page1.component';
import { Page2Component } from './main/page2/page2.component';
import { PreloadService } from './provieders/preloadStrategy';
const routes: Routes = [
  { path: 'page1/:id', component: Page1Component },
  { path: 'page2', component: Page2Component },
  { path: 'page3', loadChildren: () => import('./main/page3/page3.module').then(m => m.Page3Module), data: { preload: true } },
  { path: '', redirectTo: '/page2', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: PreloadService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
