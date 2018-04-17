import { Inject } from '@angular/core';
// import {AppAction} from '../AppAction'
import {Action} from '@ngrx/store'
import {Map,List} from 'immutable'
import { CookieService } from 'ngx-cookie-service'

// import * as TrainingActions from './training.actions'
import * as authActions from '../actions/auth.actions'
import {Training} from '../../model/training'

// export const LOGIN_PROCESS_START='LOGIN_PROCESS_START'
// export const LOGIN_PROCESS_END='LOGIN_PROCESS_END'
// export const LOGIN_REQUEST='LOGIN_REQUEST'
// export const LOGIN_SUCCESS='LOGIN_SUCCESS'
// export const LOGIN_FAILURE='LOGIN_FAILURE'
// export const LOGOUT_REQUEST='LOGOUT_REQUEST'
// export const LOGOUT_SUCCESS='LOGOUT_SUCCESS'
// export const REGISTER_REQUEST='REGISTER_REQUEST'
// export const REGISTER_SUCCESS='REGISTER_SUCCESS'
// export const REGISTER_USER_ERROR='REGISTER_USER_ERROR'
// export const REGISTER_SYSTEM_ERROR='REGISTER_SYSTEM_ERROR'
// export const REGISTER_INIT='REGISTER_INIT'

export interface AuthState {
	isFetching: boolean
    isRegistrationFetching: boolean
    isAuthenticated: boolean
    authority: string
    registrationStep: number
    registrationError: Map<any,any>
}

const initAuthState:AuthState = {
    isFetching: false,
    isRegistrationFetching: false,
    isAuthenticated: false,//cookie.load('jwt') ? true : false,
    authority: '',//cookie.load('authority'),
    registrationStep: 1,
    registrationError: Map({})
}
export function authReducer(auth=Map(initAuthState), action:Action) {
    // let authenticated =  false //cookie.load('jwt') ? true :
    // let authority = ''//cookie.load('authority')
    switch (action.type) {
        // case LOGIN_PROCESS_START:
        //     auth = auth.set('loginMessage', action.payload.message)
        //     auth = auth.set('loginProgress', true)
        //     auth = auth.set('loginactualurl', action.payload.actualurl)
        //     auth = auth.set('loginrequest', action.payload.promise)
        //     auth = auth.set('loginrequestparams', action.payload.params)
        //     return auth
        // case LOGIN_PROCESS_END:
        //     console.log('authreducerjs. login progress end')
        //     auth = auth.remove('loginMessage')
        //     auth = auth.remove('loginProgress')
        //     auth = auth.remove('loginactualurl')
        //     return auth

        case authActions.LOGIN_REQUEST:
            console.log('Store reducer. login request')
            auth = auth.set('isFetching', true)
            // auth = auth.set('usercreds', {(<AuthActions.LoginRequest>action).email,(<AuthActions.LoginRequest>action).password} )
            auth = auth.remove('loginMessage')
            auth = auth.remove('loginProgress')
            auth = auth.set('isAuthenticated', false)
            return auth

        case authActions.LOGIN_SUCCESS:
            console.log('Reducer Authentication success')
            auth = auth.set('isFetching', false)
            auth = auth.set('errorMessage', '')
            auth = auth.set('isAuthenticated', true)
            auth = auth.set('authority', (<authActions.LoginSuccess>action).authority)
            auth = auth.remove('usercreds')
            auth = auth.remove('loginMessage')
            auth = auth.remove('loginProgress')
            auth = auth.remove('loginactualurl')
            auth = auth.remove('loginrequest')
            return auth

        case authActions.LOGIN_FAILURE:
            console.log('Reducer Authentication failure: '+((<authActions.LoginFailure>action).loginError))
            auth = auth.set('isFetching', false)
            auth = auth.set('isAuthenticated', false)
            // auth = auth.set('errorMessage', action.payload.message)
            auth = auth.remove('usercreds')
            auth = auth.remove('loginProgress')
            auth = auth.remove('loginactualurl')
            auth = auth.remove('loginrequest')
            return auth
            
        case authActions.LOGOUT_SUCCESS:
            auth = auth.set('isFetching', false)
            auth = auth.set('isAuthenticated', false)
            auth = auth.remove('loginMessage')
            auth = auth.remove('loginProgress')
            auth = auth.remove('loginactualurl')
            auth = auth.remove('loginrequest')
            return auth
        case authActions.LOGOUT_FAILURE:
            auth = auth.set('isFetching', false)
            auth = auth.set('isAuthenticated', true)
            auth = auth.remove('usercreds')
            auth = auth.remove('loginProgress')
            auth = auth.remove('loginactualurl')
            auth = auth.remove('loginrequest')
            return auth
        // case REGISTER_REQUEST:
        //     auth = auth.set('isRegistrationFetching', true)
        //     auth = auth.set('usercreds', action.payload.creds)
        //     auth = auth.set('registererror', '')
        //     return auth
        // case REGISTER_SUCCESS:
        //     auth = auth.set('isRegistrationFetching', false)
        //     auth = auth.set('username', action.payload.user.username)
        //     auth = auth.set('registrationStep', 2)
        //     return auth
        // case REGISTER_USER_ERROR:
        //     auth = auth.set('isRegistrationFetching', false)
        //     auth = auth.set('registrationError', Map(action.payload.registererror))
        //     return auth
        // case REGISTER_SYSTEM_ERROR:
        //     auth = auth.set('isRegistrationFetching', false)
        //     auth = auth.set('registererror', action.payload.registererror)
        //     auth = auth.set('registrationStep', 3)
        //     return auth
        // case REGISTER_INIT:
        //     auth = auth.set('isRegistrationFetching', false)
        //     auth = auth.set('registererror', '')
        //     auth = auth.set('registrationStep', 1)
        //     return auth
        // case 'REGISTER_VALIDATE':
        //     console.log('auth reducer email ' + action.payload.user.email)
        //     var userInputErrors = {email:undefined,username:undefined,password:undefined,passwordCheck:undefined}
        //     if (action.payload.user.email.length === 0)
        //         userInputErrors.email = 'required'
        //     if (action.payload.user.email.length > 0 && !validator.isEmail(action.payload.user.email))
        //         userInputErrors.email = 'not valid'

        //     if (action.payload.user.username.length === 0) {
        //         console.log('username required')
        //         userInputErrors.username = 'required'
        //     }
        //     else if (!validator.isLength(action.payload.user.username.trim(), 1, 25))
        //         userInputErrors.username = 'too long (25 chars max)'
        //     if (action.payload.user.password.length === 0)
        //         userInputErrors.password = 'required'
        //     else if (action.payload.user.password.length < 8)
        //         userInputErrors.password = 'should be greater than 8 characters'

        //     if (!userInputErrors.password && action.payload.user.password !== action.payload.user.passwordCheck)
        //         userInputErrors.passwordCheck = 'password check different from password'
        //     console.log('Auth reducer action.user.email' + action.payload.user.email)
        //     console.log('Auth reducer action.user.email is valid' + validator.isEmail(action.payload.user.email))
        //     console.log('Auth reducer email error returned' + userInputErrors.email)

        //     auth = auth.set('registrationError', Map(userInputErrors))
        //     return auth

        default:
            return auth

    }
}
