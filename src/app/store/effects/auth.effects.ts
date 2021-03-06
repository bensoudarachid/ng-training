import { Injectable } from '@angular/core'
import { Effect, Actions, ofType } from '@ngrx/effects'
import {
  map,
  flatMap,
  switchMap,
  catchError,
  timeout,
  finalize,
  delay,
} from 'rxjs/operators'
import { of } from 'rxjs/observable/of'
import { Store } from '@ngrx/store'
import { Router } from '@angular/router'
import { AppState } from '../../store/appstate'

import * as authActions from '../actions/auth.actions'
import * as appActions from '../actions/app.actions'
import * as fromServices from '../../services'
import { CookieService } from 'ngx-cookie-service'

// access_token:"59b41408-26a1-4c9e-96a8-dbc00c8df7ab"
// authority:"admin"
// expires_in:43180
// refresh_token:"0b84f494-9393-47c5-b538-6241da7f38bd"
// scope:"read write"
// token_type:"bearer"

@Injectable()
export class AuthenticationEffects {
  // refreshRunning=false
  constructor(
    private actions$: Actions,
    private authService: fromServices.AuthService,
    private cookiesService: CookieService,
    private store: Store<AppState>,
    private router: Router
  ) {}
  @Effect()
  loginRequest$ = this.actions$.pipe(
    ofType(authActions.LOGIN_REQUEST),
    switchMap((action: authActions.LoginRequest) => {
      // console.log('Auth effect login request')
      return this.authService.login(action.email, action.password).pipe(
        map(userAccessData => this.processAccessDataResponse(userAccessData)),
        timeout(4000),
        catchError(serverError => {
          // console.log('Return New LoginError Action. error: ')
          let errorDescr = 'Unknown server error'
          if (serverError != undefined && serverError.name == 'TimeoutError')
            errorDescr = 'Server is too long to respond'
          else if (
            serverError != undefined &&
            serverError.error != undefined &&
            serverError.error.error_description != undefined
          )
            errorDescr = serverError.error.error_description
          // console.log(errorDescr)
          this.store.dispatch(new authActions.LoginFailure(errorDescr))
          return of(new appActions.AppError(errorDescr))
        })
      )
    })
  )

  @Effect()
  logoutRequest$ = this.actions$.pipe(
    ofType(authActions.LOGOUT_REQUEST),
    switchMap((action: authActions.LogoutRequest) => {
      console.log('Auth effect logout request')
      let jwtToken = this.cookiesService.get('jwt')
      console.log('before delete:' + jwtToken)
      return this.authService.logout(jwtToken).pipe(
        // delay(50),
        map(() => {
          this.cookiesService.deleteAll('')
          this.cookiesService.deleteAll('/')
          this.cookiesService.deleteAll('/admin')
          this.cookiesService.deleteAll('admin')
          // this.cookiesService.delete('jwt', '')
          // this.cookiesService.delete('refreshtoken', '')
          // this.cookiesService.delete('authority', '')
          // this.cookiesService.delete('expirationdate', '')
          jwtToken = this.cookiesService.get('jwt')
          console.log('after delete 2:' + jwtToken)
          if (jwtToken) {
            this.cookiesService.set('jwt', null, null, '/')
            this.cookiesService.set('refreshtoken', null, null, '/')
            this.cookiesService.set('authority', null, null, '/')
            this.cookiesService.set('expirationdate', null, null, '/')
            jwtToken = this.cookiesService.get('jwt')
            console.log('after delete 3:' + jwtToken)
          }
          return new authActions.LogoutSuccess()
        }),
        catchError(error => {
          console.log('error=' + require('util').inspect(error, false, null))
          return of(new authActions.LogoutFailure(error))
        })
      )
    })
  )

  // @Effect()
  // logoutRequest2$ = this.actions$
  //     .pipe(ofType(authActions.LOGOUT_REQUEST),
  //         switchMap((action: authActions.LogoutRequest) => {
  //             console.log('Auth effect logout request')
  //             let jwtToken = this.cookiesService.get('jwt')
  //             // this.delay(2000)
  //             console.log('Auth effect logout request 2')
  //             return this.authService.logout(jwtToken).pipe(
  //                 map(() => {
  //                     // console.log('Return New LoginSuccess Action ')
  //                     // console.log(userAccessData)
  //                     // await this.sleep(2000)
  //                     this.cookiesService.deleteAll()
  //                     jwtToken = this.cookiesService.get('jwt')
  //                     console.log('after delete:' + jwtToken)
  //                     return new authActions.LogoutSuccess()
  //                 }),
  //                 catchError(error => of(new authActions.LogoutFailure(error)))
  //             )
  //         })
  //     )

  @Effect()
  refreshRequest$ = this.actions$.pipe(
    ofType(authActions.REFRESH_REQUEST),
    switchMap((action: authActions.RefreshRequest) => {
      //     if( this.refreshRunning )
      //     return of({type:"NO_ACTION"});
      // else
      //     this.refreshRunning = true

      let refreshToken = this.cookiesService.get('refreshtoken')
      let expirationDate =
        this.cookiesService.get('expirationdate') != undefined
          ? Number(this.cookiesService.get('expirationdate'))
          : undefined
      // console.log('Actual date: '+new Date().getTime())
      // if( expirationDate==undefined || refreshToken==undefined)
      //     console.log('No refresh token because no cookies')
      // if( expirationDate!=undefined && new Date(expirationDate).getTime()>new Date().getTime())
      //     console.log('No refresh token expiration date still valid')
      if (
        expirationDate == undefined ||
        refreshToken == undefined ||
        refreshToken == '' ||
        new Date(expirationDate).getTime() > new Date().getTime()
      )
        return of({ type: 'NO_ACTION' })
      console.log(
        'Refresh auth token! Expiration date: ' + new Date(expirationDate)
      )
      console.log('Refresh auth token! Refresh token ' + refreshToken)

      // let jwtToken = this.cookiesService.get('jwt')
      // console.log('before delete:' + jwtToken)
      // let refreshtoken = this.cookiesService.get('refreshtoken')
      // console.log('Auth refresh auth token request: '+refreshtoken)
      // this.cookiesService.deleteAll()
      if (
        refreshToken == 'null' ||
        refreshToken == 'undefined' ||
        refreshToken == undefined ||
        refreshToken == ''
      ) {
        console.log('Refresh auth token! return undefined')
        return of({ type: 'NO_ACTION' })
      } else {
        console.log('Refresh auth token! call authService')
        return this.authService.refreshToken(refreshToken).pipe(
          map(userAccessData => this.processAccessDataResponse(userAccessData)),
          catchError(serverError => {
            this.store.dispatch(
              new authActions.LoginFailure(
                'Could not authenticate. Please login again'
              )
            )
            return of(
              new appActions.AppError(
                'Authentication data expired. Please login again'
              )
            )
          })
          // ,finalize( ()=> this.refreshRunning = false)
        )
      }
    })
  )
  private processAccessDataResponse(userAccessData: any) {
    // console.log('Return New LoginSuccess Action ')
    console.log('userAccessData=' + JSON.stringify(userAccessData))
    var expireDate = new Date(
      new Date().getTime() + 1000 * userAccessData.expires_in
    ) //userAccessData.expires_in))
    console.log('expiration date :' + expireDate)
    // this.cookiesService.set('jwt', userAccessData.access_token, expireDate, '/', undefined, true)
    // this.cookiesService.set('refreshtoken', userAccessData.refresh_token, expireDate, '/', undefined, true)
    // this.cookiesService.set('authority', userAccessData.authority, expireDate, '/', undefined, true)
    // this.cookiesService.set('expirationdate', '' + expireDate.getTime())
    this.cookiesService.set('jwt', userAccessData.access_token, null, '')
    this.cookiesService.set(
      'refreshtoken',
      userAccessData.refresh_token,
      null,
      ''
    )
    this.cookiesService.set('authority', userAccessData.authority, null, '')
    this.cookiesService.set(
      'expirationdate',
      '' + expireDate.getTime(),
      null,
      ''
    )

    // this.cookiesService.set('authority', userAccessData.re)
    // this.router.navigate(['/']);
    return new authActions.LoginSuccess(userAccessData.authority)
  }
}
