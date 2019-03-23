import { Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './components/header/header.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ng-mock';
  isLogin = false;
  constructor() { 
    this.isLogin = !!window.localStorage.getItem('token')
  }
  @ViewChild('head')
  head: HeaderComponent;
  ngOnInit() {
  }
  ngAfterViewInit() {
    // this.head.log('@viewchild');
  }
  loginSucess(token) {
    this.isLogin = true;
    window.localStorage.setItem('token', token);
  }
  logoutSucess() {
    this.isLogin = false;
  }
}
