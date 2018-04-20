// import {AppAction} from '../appaction'
import {Action} from '@ngrx/store'
import {Training} from '../../model/training'

export const LOAD_TRAININGS = '[Main] LOAD_TRAININGS'
export const LOAD_TRAININGS_SUCCESS = '[Main] LOAD_TRAININGS_SUCCESS'
export const LOAD_TRAININGS_FAIL = '[Main] LOAD_TRAININGS_FAIL'


export class LoadTrainings implements Action{
    readonly type = LOAD_TRAININGS
}
export class LoadTrainingsSuccess implements Action{
    readonly type = LOAD_TRAININGS_SUCCESS
    constructor(public payload: Training[]){}
}
export class LoadTrainingsFail implements Action{
    readonly type = LOAD_TRAININGS_FAIL
    constructor(public payload: any){}
}

export type TrainingActions = LoadTrainings|LoadTrainingsSuccess|LoadTrainingsFail