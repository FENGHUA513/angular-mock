import { Component } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'ng-mock';
  constructor(
    private http: HttpClient
  ) {}
  ngOnInit() {
		this.http.get('/api/list').subscribe(
  	res => {
      console.log(res)
      console.log(res)
  	})
 }
}
