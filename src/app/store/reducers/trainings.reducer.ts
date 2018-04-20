// import {AppAction} from '../AppAction'
import { EntityState, createEntityAdapter } from '@ngrx/entity'
import { createFeatureSelector } from '@ngrx/store'


import * as actions from '../actions/training.actions'
import { Training } from '../../model/training'

export const trainingAdapter = createEntityAdapter<Training>()


export interface TrainingsState extends EntityState<Training> {
    loadingTrainings: boolean
}

const initTrainingsState: TrainingsState = trainingAdapter.getInitialState({
    loadingTrainings: false
})

export function trainingsReducer(state: TrainingsState = initTrainingsState, action: actions.TrainingActions) {
    switch (action.type) {
        case actions.LOAD_TRAININGS:
            // console.log('load trainings')
            // state = { ...state, loadingTrainings: true }
            return state
        case actions.LOAD_TRAININGS_SUCCESS:
            // state = { ...state, loadingTrainings: false }
            // console.log('load trainings success')
            let trainingArray = (<actions.LoadTrainingsSuccess>action).payload
            state = trainingAdapter.removeAll(state)
            state = trainingAdapter.addAll(trainingArray, state)
            return state
        default:
            return state
    }
}

export const getTrainingState = createFeatureSelector<TrainingsState>('training')

export const {
    selectIds,
    selectEntities,
    selectAll,
    selectTotal,
} = trainingAdapter.getSelectors(getTrainingState)