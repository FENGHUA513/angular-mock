import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.less']
})
export class Page1Component implements OnInit {
  public array;
  constructor() { 
    this.array = [1, 2, 3];
  }
  ngOnInit() {
  }
}
