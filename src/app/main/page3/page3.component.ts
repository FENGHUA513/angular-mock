import { ApiService } from './../../servers/api.service';
import { List } from './../../interface/list';
import { map, switchMap, concatMap, tap, concatAll } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { fromEvent, interval, Observable, from, of } from 'rxjs';
import { HttpHeaders, HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.less']
})
export class Page3Component implements OnInit {
  constructor(private http: HttpClient, private apiService: ApiService) { }
  private list;
  ngOnInit() {
    // const params = new HttpParams().set('fff', '3').set('ddd', 'fdsffdsafs');
    const params = new HttpParams({fromString: 'orderBy="$key"&limitToFirst=1'});
    this.apiService.get('/api/list', params).subscribe(
      res => this.list = res.list
    );
  }
  // getlist() {
  //   return this.apiService.get('/api/list').pipe(map(res => res.list));
  // }
  // getdata() {
  //   const clicks = fromEvent(document.querySelector('#btn'), 'click');
  //   const result = clicks.concatAll(from(this.getlist()));
  // }
}
