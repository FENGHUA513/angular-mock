import { Component } from '@angular/core';
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
 
  ngOnInit() {
  }
  loginSucess(token) {
    this.isLogin = true
    window.localStorage.setItem('token', token)
  }
  logoutSucess() {
    this.isLogin = false
  }
}
