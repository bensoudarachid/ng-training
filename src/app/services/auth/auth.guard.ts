import { Injectable } from '@angular/core'
import {
  ActivatedRouteSnapshot,
  CanActivate,
  RouterStateSnapshot,
} from '@angular/router'
//import { Observable } from "rxjs/observable";
import { Observable } from 'rxjs'
import { of } from 'rxjs/observable/of'
import { Store } from '@ngrx/store'
import * as fromAuthReducer from '../../store/reducers/auth.reducer'
import { AppState } from '../../store/appstate'

@Injectable()
export class AuthenticationGuard implements CanActivate {
  isAuthenticated$: Observable<boolean> = of(false)
  isAuthenticated: boolean
  constructor(private store: Store<AppState>) {
    this.isAuthenticated$ = this.store.select(
      state => state.authReducer.isAuthenticated
    )
    this.isAuthenticated$.subscribe(
      authBool => (this.isAuthenticated = authBool),
      err => {
        console.log('error ' + err)
      }
    )
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.isAuthenticated) console.log('Allowed to access this route')
    else console.log('NOT allowed to access this route')
    return this.isAuthenticated
  }
}
