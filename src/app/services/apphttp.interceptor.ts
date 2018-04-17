import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpErrorResponse, HttpRequest, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Global HttpClient Interceptor reporting for duty, sir! Todo: Inject cookies service and send jwt token')
    // let h = req.headers.set('Authorization', 'Basic ' + btoa('clientapp:123456'))
    // h = h.set('Content-Type', 'application/json')
    const authReq = req.clone({
    // headers: h
    });
    return next.handle(authReq)
    // .timeout(2000).do(event => { }, err => { // timeout of 5000 ms
    //   if (err instanceof HttpErrorResponse) {
    //     console.log("Error Caught By Interceptor");
    //     //Observable.throw(err);
    //   }
    // })
  }
}
