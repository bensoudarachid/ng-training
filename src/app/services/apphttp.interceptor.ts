import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http'

import { Injectable } from '@angular/core'
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs'
import { of } from 'rxjs/observable/of'
import * as authActions from '@app/store/actions/auth.actions'
import { AppState } from '@app/store/appstate'
import { tap, catchError } from 'rxjs/operators'
import * as appActions from '@app/store/actions/app.actions'
import dependencies from '@assets/dependencies.json'

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  beVersion: String
  // constructor(private store: Store<AppState>, private myhttp: Http) {
  //   this.myhttp
  //     .get('./assets/backend.json')
  //     .map(res => res.json())
  //     .subscribe(
  //       data => {
  //         console.log('data=' + require('util').inspect(data, false, null))
  //         resolve(true)
  //       },
  //       (error: any) => {
  //         console.error(error)
  //         return Observable.throw(error.json().error || 'Server error')
  //       }
  //     )
  // }
  constructor(private store: Store<AppState>) {
    // this.version = backendJson.version ? backendJson.version : null
    // console.log(
    //   'BackendJson=' + require('util').inspect(this.version, false, null)
    // )
  }

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // console.log('Global HttpClient Interceptor reporting for duty, sir! Inject auth actions and send refresh token now')
    if (!req.url.endsWith('/oauth/token') && !req.url.endsWith('/oauth/logout'))
      this.store.dispatch(new authActions.RefreshRequest())
    // this.store.dispatch(new authActions.RefreshRequest())
    // let h = req.headers.set('Authorization', 'Basic ' + btoa('clientapp:123456'))
    let h = req.headers.set('ClientHost', 'demo1.school.royasoftware.com')
    // h = h.set('Content-Type', 'application/json')
    const authReq = req.clone({
      headers: h,
    })
    return next.handle(authReq).pipe(
      tap(evt => {
        if (evt instanceof HttpResponse) {
          // console.log(
          //   'evt=' +
          //     require('util').inspect(evt.headers.get('beversion'), false, null)
          // )
          if (evt.headers.get('beversion') != null) {
            if (this.beVersion == null) {
              // console.log('Set version for the first time')
              this.beVersion = dependencies.beversion
                ? dependencies.beversion
                : null
              // this.version = evt.headers.get('beversion')
            } else if (this.beVersion != evt.headers.get('beversion')) {
              // console.log('trigger refresh')
              // window.location.reload()
              this.store.dispatch(new appActions.RefreshApp())
            }
            // else console.log('Same version. No refresh')
          }
          // if(evt.body && evt.body.success)
          //     this.toasterService.success(evt.body.success.message, evt.body.success.title, { positionClass: 'toast-bottom-center' });
        }
      }),
      catchError((err: any) => {
        if (err instanceof HttpErrorResponse) {
          try {
            console.log('There is an error: ' + err)
            // this.toasterService.error(err.error.message, err.error.title, { positionClass: 'toast-bottom-center' });
          } catch (e) {
            // this.toasterService.error('An error occurred', '', { positionClass: 'toast-bottom-center' });
          }
          //log error
        }
        return of(err)
      })
    )
  }
}
