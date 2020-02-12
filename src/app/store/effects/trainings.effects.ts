import { Training } from '@app/model/training'
import { Injectable } from '@angular/core'

import { Effect, Actions, ofType } from '@ngrx/effects'
import { map, switchMap, catchError } from 'rxjs/operators'
import { of } from 'rxjs/observable/of'

import * as trainingActions from '../actions/training.actions'
import { TrainingsService } from '../../services/trainings/trainings.service'
// import * as fromServices from '../../services'

@Injectable()
export class TrainingEffects {
  constructor(
    private actions$: Actions,
    private trainingsService: TrainingsService
  ) {}
  @Effect()
  loadTrainings$ = this.actions$.pipe(
    ofType(trainingActions.LOAD_TRAININGS),
    switchMap(() => {
      console.log('load trainings effect called')
      return this.trainingsService.getTrainings().pipe(
        map(trainings => new trainingActions.LoadTrainingsSuccess(trainings)),
        catchError(error => of(new trainingActions.LoadTrainingsFail(error)))
      )
    })
  )
  @Effect()
  loadTraining$ = this.actions$.pipe(
    ofType(trainingActions.LOAD_TRAINING),
    switchMap((action: trainingActions.LoadTraining) => {
      console.log('load training effect called id ' + action.id)
      return this.trainingsService.getTraining(action.id).pipe(
        map(training => new trainingActions.LoadTrainingSuccess(training)),
        // map(training => {
        //   if (training.events)
        //     // console.log(
        //     //   'effects event 0 =' +
        //     //     require('util').inspect(training.events[0], false, null)
        //     // )
        //     return new trainingActions.LoadTrainingSuccess(training)
        // }),
        catchError(error => of(new trainingActions.LoadTrainingFail(error)))
      )
    })
  )
  @Effect()
  saveTraining$ = this.actions$.pipe(
    ofType(trainingActions.SAVE_TRAINING),
    switchMap((action: trainingActions.SaveTraining) => {
      // console.log('save training effect called. training ' + action.payload)
      // console.log(
      //   'save training effect called. training image file name' +
      //     action.trainingImageFile !=
      //     undefined
      //     ? action.trainingImageFile.name
      //     : null
      // )
      return this.trainingsService
        .saveTraining(action.payload, action.trainingImageFile)
        .pipe(
          map(training => new trainingActions.LoadTrainingSuccess(training)),
          catchError(error => of(new trainingActions.LoadTrainingFail(error)))
        )
    })
  )
}
