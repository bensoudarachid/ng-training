import { Store } from '@ngrx/store'
import { of } from 'rxjs/observable/of'
import { Training } from './../../../model/training'
//import { Observable } from "rxjs/observable";
import { Observable } from 'rxjs'
import { Component, OnInit } from '@angular/core'
import * as fromTrainingReducer from '../../../store/reducers/trainings.reducer'
import * as TrainingActions from '../../../store/actions/training.actions'

@Component({
  selector: 'app-training-admin-app',
  templateUrl: './training-admin-app.component.html',
  styleUrls: ['./training-admin-app.component.scss'],
})
export class TrainingAdminAppComponent implements OnInit {
  trainings$: Observable<Training[]> = of([])

  constructor(private store: Store<fromTrainingReducer.TrainingsState>) {}

  ngOnInit() {
    console.log('TrainingAdminAppComponent ngOnInit. Get trainings')
    this.store.dispatch(new TrainingActions.LoadTrainings())

    this.trainings$ = this.store.select(fromTrainingReducer.selectAll)
    this.trainings$.subscribe((trainings: Training[]) => {
      // console.log('Got trainings length' + trainings.length)
    })
  }
  // ngAfterViewInit(){
  // }
}
