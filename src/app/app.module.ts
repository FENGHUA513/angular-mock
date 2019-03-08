import { MenulistService } from './servers/menulist.service';
import { ApiService } from './servers/api.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgZorroAntdModule, NZ_I18N, zh_CN } from 'ng-zorro-antd';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import zh from '@angular/common/locales/zh';
import { HeaderComponent } from './components/header/header.component';
import { MenuComponent } from './components/menu/menu.component';
import { Page1Component } from './main/page1/page1.component';
import { Page2Component } from './main/page2/page2.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './main/login/login.component';
import { RequestInterceptor } from './interceptors/request.interceptor';
registerLocaleData(zh);
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MenuComponent,
    Page1Component,
    Page2Component,
    FooterComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: RequestInterceptor, multi: true },
    { provide: NZ_I18N, useValue: zh_CN },
    ApiService,
    MenulistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
