import { MenulistService } from './../../servers/menulist.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {
  menuList: Array<object>;
  constructor(private menulistServer: MenulistService) {
    this.menuList = menulistServer.getMenuList();
  }

  ngOnInit() {
  }

}
