import { map, switchMap} from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.less']
})
export class Page3Component implements OnInit {
  constructor(private http: HttpClient) { }
  list;
  ngOnInit() {
    this.http.get('/api/list').pipe(map(res => res.list)).subscribe(
      list => {
        this.list = list;
        console.log(list);
      });
  }
}
