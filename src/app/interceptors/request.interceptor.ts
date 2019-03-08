import { Injectable } from '@angular/core';
import { HttpEvent,HttpInterceptor,HttpHandler,HttpRequest,HttpResponse} from "@angular/common/http";
import {Observable} from "rxjs";
@Injectable()
export class RequestInterceptor implements HttpInterceptor{
 
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const changedReq = req.clone({headers: req.headers.set('My-Header', 'MyHeaderValue')});
        return next.handle(changedReq);
    }
}

