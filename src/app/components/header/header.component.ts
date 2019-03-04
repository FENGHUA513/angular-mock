import { Component, OnInit, EventEmitter, Output } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  token: string;
  @Output() logoutListen = new EventEmitter();
  constructor() {
    this.token = window.localStorage.getItem('token')
   }

  ngOnInit() {
  }
  logout() {
    window.localStorage.removeItem('token')
    this.logoutListen.emit('logoutsucess')
  }
}
