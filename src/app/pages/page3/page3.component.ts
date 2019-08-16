import { Component, OnInit } from '@angular/core';
import { List } from './../../interface/list'
import { Page3Service } from 'src/app/servers/page3.service';
@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.less']
})
export class Page3Component implements OnInit {
  constructor(private page3Service: Page3Service) { }
    private list: List;
  ngOnInit() {
  }
  getdata() {
    this.page3Service.getdata('api/list').subscribe(
      res => this.list = res
    )
  }
}
