import { Action } from '@ngrx/store'

export const APP_ERROR = '[Main] APP_ERROR'
export const REFRESH_APP = '[Main] REFRESH_APP'

export class AppError implements Action {
  readonly type = APP_ERROR
  constructor(public message: string) {}
}

export class RefreshApp implements Action {
  readonly type = REFRESH_APP
}
