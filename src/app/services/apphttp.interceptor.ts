import { Injectable } from '@angular/core'
import { HttpEvent, HttpInterceptor, HttpHandler, HttpErrorResponse, HttpRequest, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs/observable'
import { Store } from '@ngrx/store'
import { AppState } from '../store/appstate'
import * as authActions from '../store/actions/auth.actions'

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  constructor(private store: Store<AppState>) { }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('Global HttpClient Interceptor reporting for duty, sir! Inject auth actions and send refresh token now')
    if (!req.url.endsWith('/oauth/token') && !req.url.endsWith('/oauth/logout'))
      this.store.dispatch(new authActions.RefreshRequest())
    // this.store.dispatch(new authActions.RefreshRequest())
    // let h = req.headers.set('Authorization', 'Basic ' + btoa('clientapp:123456'))
    // h = h.set('Content-Type', 'application/json')
    const authReq = req.clone({
      // headers: h
    });
    return next.handle(authReq)

  }
}
