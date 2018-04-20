// import {AppAction} from '../AppAction'
import {Action} from '@ngrx/store'


import * as appActions from '../actions/app.actions'
// import {AppState} from '../appstate'


export interface ApplicationState {
    errormessage: string
}

const initMainAppState:ApplicationState = {
    errormessage:undefined
}

export function appReducer(moduleappmap=initMainAppState, action:Action) {
    switch (action.type) {
        case appActions.APP_ERROR:
            console.log('app reducer error:'+(<appActions.AppError>action).message)
            // moduleappmap = moduleappmap.set('errormessage',(<appActions.AppError>action).message)
            moduleappmap = {...moduleappmap, errormessage:(<appActions.AppError>action).message}
        default:
            return moduleappmap
    }
}
