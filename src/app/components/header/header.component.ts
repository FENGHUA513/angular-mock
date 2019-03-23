import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  token: string;
  @Input() test: string;
  @Output() logoutListen = new EventEmitter();
  constructor() {
    this.token = window.localStorage.getItem('token');
   }

  ngOnInit() {
    console.log(this.test, '@input test');
  }
  logout() {
    window.localStorage.removeItem('token');
    this.logoutListen.emit('logoutsucess');
  }
  log(str) {
    console.log(str);
  }
}
