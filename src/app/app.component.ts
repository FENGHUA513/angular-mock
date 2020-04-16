import { Component, ViewChild } from '@angular/core'
import { HeaderComponent } from './components/header/header.component'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ng-mock'
  isLogin = false
  constructor() {}
  @ViewChild('head')
  head: HeaderComponent
  ngOnInit() {}
}
