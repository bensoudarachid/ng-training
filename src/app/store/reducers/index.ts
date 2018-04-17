import {trainingsReducer} from './trainings.reducer'
import {authReducer} from './auth.reducer'
import {appReducer} from './app.reducer'
export const reducers = {appReducer,trainingsReducer,authReducer}

export * from './app.reducer'
export * from './trainings.reducer'
export * from './auth.reducer'
