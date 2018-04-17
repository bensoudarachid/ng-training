// import {AppAction} from '../appaction'
import {Action} from '@ngrx/store'

export const AUTH_GET_STATUS = '[Main] AUTH_GET_STATUS'
export const AUTH_SET_STATUS = '[Main] AUTH_SET_STATUS'
export const LOGIN_REQUEST = '[Main] LOGIN_REQUEST'
export const LOGIN_SUCCESS = '[Main] LOGIN_SUCCESS'
export const LOGIN_FAILURE = '[Main] LOGIN_FAILURE'
export const REFRESH_REQUEST = '[Main] REFRESH_REQUEST'
export const LOGOUT_REQUEST = '[Main] LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = '[Main] LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = '[Main] LOGOUT_FAILURE'


export class AuthGetStatus implements Action{
    readonly type = AUTH_GET_STATUS
}
export class AuthSetStatus implements Action{
    readonly type = AUTH_SET_STATUS
    constructor(public authenticated: boolean){}
}
export class LoginRequest implements Action{
    readonly type = LOGIN_REQUEST
    constructor(public email: string,public password: string){}
}
export class LoginSuccess implements Action{
    readonly type = LOGIN_SUCCESS
    constructor(public authority: string){}
}
export class LoginFailure implements Action{
    readonly type = LOGIN_FAILURE
    constructor(public loginError: any){}
}
export class RefreshRequest implements Action{
    readonly type = REFRESH_REQUEST
    constructor(public refreshToken: string){}
}
export class LogoutRequest implements Action{
    readonly type = LOGOUT_REQUEST
}
export class LogoutSuccess implements Action{
    readonly type = LOGOUT_SUCCESS
}
export class LogoutFailure implements Action{
    readonly type = LOGOUT_FAILURE
    constructor(public logoutError: any){}
}
