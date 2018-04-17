import { Injectable } from '@angular/core'

import { Effect, Actions } from '@ngrx/effects'
import { map, switchMap, catchError, timeout } from 'rxjs/operators'
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
    constructor(private actions$: Actions, private authService: fromServices.AuthService,
        private cookiesService: CookieService,
        private store: Store<AppState>,
        private router: Router) { }
    @Effect()
    loginRequest$ = this.actions$.ofType(authActions.LOGIN_REQUEST)
        .pipe(
            switchMap((action: authActions.LoginRequest) => {
                // console.log('Auth effect login request')
                return this.authService.login(action.email, action.password).pipe(
                    map(userAccessData=>this.processAccessDataResponse(userAccessData)),
                    timeout(2000),
                    catchError(serverError => {
                        // console.log('Return New LoginError Action. error: ')
                        let errorDescr = 'Unknown server error'
                        if (serverError != undefined && serverError.name == 'TimeoutError')
                            errorDescr = 'Server is too long to respond'
                        else if (serverError != undefined && serverError.error != undefined && serverError.error.error_description != undefined)
                            errorDescr = serverError.error.error_description
                        // console.log(errorDescr)
                        this.store.dispatch(new authActions.LoginFailure(errorDescr))
                        return of(new appActions.AppError(errorDescr))
                    })
                )
            })
        )
    @Effect()
    logoutRequest$ = this.actions$.ofType(authActions.LOGOUT_REQUEST)
        .pipe(
            switchMap((action: authActions.LogoutRequest) => {
                // console.log('Auth effect login request')
                let jwtToken = this.cookiesService.get('jwt')
                console.log('before delete:' + jwtToken)
                return this.authService.logout(jwtToken).pipe(
                    map(() => {
                        // console.log('Return New LoginSuccess Action ')
                        // console.log(userAccessData)
                        this.cookiesService.deleteAll()
                        jwtToken = this.cookiesService.get('jwt')
                        console.log('after delete:' + jwtToken)
                        return new authActions.LogoutSuccess()
                    }),
                    catchError(error => of(new authActions.LogoutFailure(error)))
                )
            })
        )
        @Effect()
        refreshRequest$ = this.actions$.ofType(authActions.REFRESH_REQUEST)
            .pipe(
                switchMap((action: authActions.RefreshRequest) => {
                    // let jwtToken = this.cookiesService.get('jwt')
                    // console.log('before delete:' + jwtToken)
                    let refreshtoken = this.cookiesService.get('refreshtoken')
                    console.log('Auth refresh auth token request: '+refreshtoken)
                    // this.cookiesService.deleteAll()
                    return this.authService.refreshToken(refreshtoken).pipe(
                        map(userAccessData=>this.processAccessDataResponse(userAccessData)),
                        catchError(serverError => {
                            this.store.dispatch(new authActions.LoginFailure('Could not authenticate. Please login again'))
                            return of(new appActions.AppError('Authentication data expired. Please login again'))
                        })
                    )
                })
            )
        private processAccessDataResponse(userAccessData: any) {
            // console.log('Return New LoginSuccess Action ')
            console.log(userAccessData)
            var expireDate = new Date(new Date().getTime() + (1000 * userAccessData.expires_in))//userAccessData.expires_in))
            console.log('expiration date :' + expireDate)
            // this.cookiesService.set('jwt', userAccessData.access_token, expireDate, '/', undefined, true)
            // this.cookiesService.set('refreshtoken', userAccessData.refresh_token, expireDate, '/', undefined, true)
            // this.cookiesService.set('authority', userAccessData.authority, expireDate, '/', undefined, true)
            // this.cookiesService.set('expirationdate', '' + expireDate.getTime())
            this.cookiesService.set('jwt', userAccessData.access_token)
            this.cookiesService.set('refreshtoken', userAccessData.refresh_token)
            this.cookiesService.set('authority', userAccessData.authority)
            this.cookiesService.set('expirationdate', '' + expireDate.getTime())

            // this.cookiesService.set('authority', userAccessData.re)
            this.router.navigate(['/']);
            return new authActions.LoginSuccess(userAccessData.authority)
        }
    
}