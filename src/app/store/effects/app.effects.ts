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
import { AppState } from '../appstate'
import * as appActions from '../actions/app.actions'

@Injectable()
export class AppEffects {
  // refreshRunning=false
  constructor(
    private actions$: Actions,
    private store: Store<AppState>,
    private router: Router
  ) {}
  @Effect()
  refreshApp$ = this.actions$.pipe(
    ofType(appActions.REFRESH_APP),
    switchMap((action: appActions.RefreshApp) => {
      console.log('Refresh app now')
      window.location.reload()
      return of(null)
    })
  )
}
