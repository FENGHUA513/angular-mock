import { Injectable } from '@angular/core';
import { HttpParams } from '@angular/common/http';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { List } from './../interface/list'
@Injectable({
  providedIn: 'root'
})
export class Page3Service {

  constructor(private apiService: ApiService) { }
  getdata(url: string): Observable<List> {
    const params = new HttpParams({fromString: 'orderBy="$key"&limitToFirst=1'});
    return  this.apiService.get(url, params).pipe(
      map(res => res.list)
    );
  }
}
