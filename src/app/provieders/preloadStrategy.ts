import { PreloadingStrategy } from "@angular/router";
import { Injectable } from '@angular/core';
import { Route } from '@angular/router'
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
@Injectable()
export class PreloadService implements PreloadingStrategy {
    constructor() {}
    preload( route: Route, load: () => Observable<any>): Observable<any> {
        if (route.data && route.data['preload']) {
            console.log(route.data, 'route.data')
            // setTimeout(() =>{
            //     return load();
            // }, 5000)
            return load();
        } else {
            console.log(route.data, 'pp1')
            return of(null);
        }
    }
}