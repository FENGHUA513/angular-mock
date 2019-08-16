import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MenulistService {

  constructor() { }
  getMenuList() {
    return [
      { name: '我是page1', path: '/main/page1/3333'},
      { name: '我是page2', path: '/main/page2'},
      { name: '我是page3', path: '/main/page3'}
    ];
  }
}
