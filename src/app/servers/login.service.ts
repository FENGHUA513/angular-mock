import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { tap, map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private apiservice: ApiService) {}
  ngOnInit() {
  }
  login(data: object) {
    return this.apiservice.post('api/login', data).pipe(
      tap(res => console.log('loginsuccess')),
      map(res => res.token)
    )
  }
}
