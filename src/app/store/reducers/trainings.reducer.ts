// declare var require: any
// import {AppAction} from '../AppAction'
import { EntityState, createEntityAdapter } from '@ngrx/entity'
import { createFeatureSelector } from '@ngrx/store'

import * as actions from '../actions/training.actions'
import { Training } from '../../model/training'

export const trainingAdapter = createEntityAdapter<Training>()

export interface TrainingsState extends EntityState<Training> {
  loadingTrainings: boolean
  loadingTraining: boolean
}

const initTrainingsState: TrainingsState = Object.assign({
  ...trainingAdapter.getInitialState({
    // loadingTrainings: false,
    // training: null,
  }),
  selectedTraining: {
    id: -1,
    title: '',
    secondaryTitle: '',
    shortDescription: '',
    longDescription: '',
    duration: -1,
  },
})

export function trainingsReducer(
  state: TrainingsState = initTrainingsState,
  action: actions.TrainingActions
) {
  switch (action.type) {
    case actions.LOAD_TRAININGS:
      console.log('load trainings')
      // state = { ...state, loadingTrainings: true }
      return state
    case actions.LOAD_TRAININGS_SUCCESS:
      // state = { ...state, loadingTrainings: false }
      console.log('load trainings success')
      let trainingArray = (<actions.LoadTrainingsSuccess>action).payload
      state = trainingAdapter.removeAll(state)
      state = trainingAdapter.addAll(trainingArray, state)
      return state
    case actions.LOAD_TRAINING:
      console.log('load training')
      // state = { ...state, loadingTrainings: true }
      return state
    case actions.LOAD_TRAINING_SUCCESS:
      // state = { ...state, loadingTrainings: false }
      let training = (<actions.LoadTrainingSuccess>action).payload
      console.log('load training success ' + training.title)
      // state = trainingAdapter.removeAll(state)
      // state = trainingAdapter.addOne(training, state)
      return Object.assign({ ...state, selectedTraining: training })
    // return state
    case actions.SAVE_TRAINING:
      // console.log('Save training')
      // state = { ...state, loadingTrainings: true }
      return state
    case actions.SAVE_TRAINING_SUCCESS:
      // state = { ...state, loadingTrainings: false }
      let savedtraining = (<actions.SaveTrainingSuccess>action).payload
      console.log('save training success ' + savedtraining.title)
      // state = trainingAdapter.removeAll(state)
      // state = trainingAdapter.addOne(training, state)
      return Object.assign({ ...state, selectedTraining: savedtraining })
    default:
      return state
  }
}

export const getTrainingState = createFeatureSelector<TrainingsState>(
  'training'
)
export const getSelectedTraining = (state: any) => {
  // console.log('State = ' + require('util').inspect(state, false, null))
  return state ? state.training.selectedTraining : null
}

export const {
  selectIds,
  selectEntities,
  selectAll,
  selectTotal,
} = trainingAdapter.getSelectors(getTrainingState)
