import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import {Store , select} from '@ngrx/store';
import {AppState} from '../../../store/appstate';
// import {APP_LOGIN} from '../store/reducers/training.reducer'
import { CookieService } from 'ngx-cookie-service';
import * as LoginActions from '../../../store/actions/auth.actions';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})

// isFetching: false,
// isRegistrationFetching: false,
// isAuthenticated: false,//cookie.load('jwt') ? true : false,
// authority: '',//cookie.load('authority'),
// registrationStep: 1,
// registrationError: Map({})

export class NavComponent implements OnInit {
  isAuthenticated$: Observable<boolean>;
    isFetching$: Observable<boolean>
  isFetching: boolean;
  // title="Abbas"
  @Output()
  loginEvent = new EventEmitter<string>();

  constructor    ( private cookieService: CookieService, private store: Store<AppState> ) {
    // console.log('constructor isAuthenticated '+this.isAuthenticated$)
    this.isAuthenticated$ = this.store.select(state => state.authReducer.isAuthenticated);
    this.isFetching$ = this.  store.select(state => state.authReducer.isFetching);
    this.isFetching$.subscribe (
      fetchBool =>   {
        this.isFetching = fetchBool;
        console.info('is fetching ' + fetchBool); },
      err => {
          console.log('error ' + err);
      });
  }

  ngOnInit(   ) {
    // console.log('ngOnInit isAuthenticated '+this.isAuthenticated$)
    // console.log(this.isAuthenticated$)
  }
  startLogin() {
    this.loginEvent.emit('startLogin');
  }
  signOut() {
    // console.log('Sign Out now ')
    this.store.dispatch(new LoginActions.LogoutRequest());
  }

}
