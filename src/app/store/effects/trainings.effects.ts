import {Injectable} from '@angular/core'

import {Effect, Actions} from '@ngrx/effects'
import {map,switchMap,catchError} from 'rxjs/operators'
import {of} from 'rxjs/observable/of'

import * as trainingActions from '../actions/training.actions'
import { TrainingsService } from '../../services/trainings/trainings.service';
// import * as fromServices from '../../services'

@Injectable()

export class TrainingEffects{
    constructor(private actions$: Actions,private trainingsService: TrainingsService){}
    @Effect()
    loadTrainings$=this.actions$.ofType(trainingActions.LOAD_TRAININGS)
        .pipe(
            switchMap(()=>{
                // console.log('training effect called')
                return this.trainingsService.getTrainings().pipe(
                    map(trainings=> new trainingActions.LoadTrainingsSuccess(trainings)),
                    catchError(error=>of(new trainingActions.LoadTrainingsFail(error)))
                )
            })
        )
}