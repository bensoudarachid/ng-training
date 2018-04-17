// import {AppAction} from '../AppAction'
import {Action} from '@ngrx/store'
import {Map,List} from 'immutable'


import * as appActions from '../actions/app.actions'
import {AppState} from '../appstate'


export interface ModuleState {
    errormessage: string
}

const initMainAppState:ModuleState = {
    errormessage:undefined
}

export function appReducer(moduleappmap=Map(initMainAppState), action:Action) {
    switch (action.type) {
        case appActions.APP_ERROR:
            console.log('app reducer error:'+(<appActions.AppError>action).message)
            moduleappmap = moduleappmap.set('errormessage',(<appActions.AppError>action).message)
        default:
            return moduleappmap
    }
}
