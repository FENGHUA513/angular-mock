import { ApiService } from './../../servers/api.service';
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
  }
  getdata() {
    const params = new HttpParams({fromString: 'orderBy="$key"&limitToFirst=1'});
    this.apiService.get('/api/list', params).pipe(
      map(res => res.list)
    ).subscribe(
      res => this.list = res
    );
  }
}
