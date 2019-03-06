import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MenulistService {

  constructor() { }
  getMenuList() {
    return [
      { name: '我是page1', path: '/page1'},
      { name: '我是page2', path: '/page2'},
      { name: '我是page3', path: '/page3'}
    ];
  }
}
