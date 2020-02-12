// import {AppAction} from '../appaction'
import { Action } from '@ngrx/store'
import { Training } from '../../model/training'

export const LOAD_TRAININGS = '[Main] LOAD_TRAININGS'
export const LOAD_TRAININGS_SUCCESS = '[Main] LOAD_TRAININGS_SUCCESS'
export const LOAD_TRAININGS_FAIL = '[Main] LOAD_TRAININGS_FAIL'

export const LOAD_TRAINING = '[Main] LOAD_TRAINING'
export const LOAD_TRAINING_SUCCESS = '[Main] LOAD_TRAINING_SUCCESS'
export const LOAD_TRAINING_FAIL = '[Main] LOAD_TRAINING_FAIL'

export const SAVE_TRAINING = '[Main] SAVE_TRAINING'
export const SAVE_TRAINING_SUCCESS = '[Main] SAVE_TRAINING_SUCCESS'
export const SAVE_TRAINING_FAIL = '[Main] SAVE_TRAINING_FAIL'

// export const DELETE_EVENT = '[Main] DELETE_EVENT'

export class LoadTrainings implements Action {
  readonly type = LOAD_TRAININGS
}
export class LoadTrainingsSuccess implements Action {
  readonly type = LOAD_TRAININGS_SUCCESS
  constructor(public payload: Training[]) {}
}
export class LoadTrainingsFail implements Action {
  readonly type = LOAD_TRAININGS_FAIL
  constructor(public payload: any) {}
}
export class LoadTraining implements Action {
  readonly type = LOAD_TRAINING
  constructor(public id: Number) {}
}
export class LoadTrainingSuccess implements Action {
  readonly type = LOAD_TRAINING_SUCCESS
  constructor(public payload: Training) {}
}
export class LoadTrainingFail implements Action {
  readonly type = LOAD_TRAINING_FAIL
  constructor(public payload: any) {}
}
export class SaveTraining implements Action {
  readonly type = SAVE_TRAINING
  constructor(public payload: Training, public trainingImageFile: File) {}
}
export class SaveTrainingSuccess implements Action {
  readonly type = SAVE_TRAINING_SUCCESS
  constructor(public payload: Training) {}
}
export class SaveTrainingFail implements Action {
  readonly type = SAVE_TRAINING_FAIL
  constructor(public payload: any) {}
}
// export class DeleteEvent implements Action {
//   readonly type = DELETE_EVENT
//   constructor(public payload: Event) {}
// }

export type TrainingActions =
  | LoadTrainings
  | LoadTrainingsSuccess
  | LoadTrainingsFail
  | LoadTraining
  | LoadTrainingSuccess
  | LoadTrainingFail
  | SaveTraining
  | SaveTrainingSuccess
  | SaveTrainingFail
// | DeleteEvent
