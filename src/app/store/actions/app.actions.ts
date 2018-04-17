import {Action} from '@ngrx/store'

export const APP_ERROR = '[Main] APP_ERROR'


export class AppError implements Action{
    readonly type = APP_ERROR
    constructor(public message: string){}
}
