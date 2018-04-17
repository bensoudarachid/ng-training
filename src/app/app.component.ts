import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Store } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'
import { CookieService } from 'ngx-cookie-service'
import { AppState } from './store/appstate'
import { trainingsReducer } from './store/reducers/trainings.reducer'
import * as LoginActions from './store/actions/auth.actions'
import * as appActions from './store/actions/app.actions'
import * as authActions from './store/actions/auth.actions'
declare var $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewInit {
  title = 'AnGen';
  password: string
  email: string
  appError: Observable<string>
  appErrorBuffer: string
  @ViewChild('loginform') loginForm;
  @ViewChild('errordlg') errorDlg;

  constructor(private store: Store<AppState>, private cookiesService: CookieService) {
    this.appError = this.store.select(state => state.appReducer.get('errormessage'))
    this.appError.subscribe((data) => {
      if (data != undefined) {
        this.appErrorBuffer = data
        this.errorDlg.show()
      }
      this.store.dispatch(new appActions.AppError(undefined))
    })
  }

  ngAfterViewInit(): void {
    console.log('Page loaded ' + this.appError)
    // if( this.appError )
    //   this.errorDlg.show()
  }

  ngOnInit(): void {
    $(window).scroll(function () {
      let wScroll = $(this).scrollTop()
      $('.imgparallax').css({
        'transform': 'translate(0px,' + (15 + wScroll * (-0.015)) + '%) scale(' + (1 + wScroll / 30000) + ')'
      })
    })
    // this.cookiesService.set('jwt', userAccessData.access_token,expireDate,'/',undefined,true)
    //this.cookiesService.set('refreshtoken', userAccessData.refresh_token,expireDate,'/',undefined,true)
    let authority = this.cookiesService.get('authority')
    let refreshToken = this.cookiesService.get('refreshtoken')
    let expirationDate = this.cookiesService.get('expirationdate')!=undefined?Number(this.cookiesService.get('expirationdate')):undefined
    console.log('Actual date: '+new Date())
    // console.log('Actual date: '+new Date().getTime())
    if( expirationDate==undefined || refreshToken==undefined)
      return;
    console.log('Expiration date: '+new Date(expirationDate))
    // console.log('Expiration date: '+new Date(expirationDate).getTime())
    if( new Date(expirationDate).getTime()>new Date().getTime() ){
      console.log('Dispatch login success.')
      this.store.dispatch(new authActions.LoginSuccess(authority))
    }else{
      console.log('Dispatch refresh token.')
      this.store.dispatch(new authActions.RefreshRequest())
    }
  }
  startLogin(event) {
    console.log('Start login')
    // this.errorDlg.show()
    this.loginForm.show()
  }
  // showError(){
  //   if( this.appError )
  //     this.errorDlg.show()
  // }
  signIn() {
    this.store.dispatch(new LoginActions.LoginRequest(this.email, this.password))
  }
  removeErrorMessage() {
    this.store.dispatch(new appActions.AppError(undefined))
  }
}
