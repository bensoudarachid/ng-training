// declare var require: any
import { Training } from '@app/model/training'
import { Observable } from 'rxjs'
import { of } from 'rxjs/observable/of'
import { Store } from '@ngrx/store'
import { Component, OnInit } from '@angular/core'
import * as fromTrainingReducer from '@app/store/reducers/trainings.reducer'
import * as TrainingActions from '@app/store/actions/training.actions'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { MyErrorStateMatcher } from '@app/services/validation/myerrorstatematcher'
import { ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-training-admin-details',
  templateUrl: './training-admin-details.component.html',
  styleUrls: ['./training-admin-details.component.scss'],
})
export class TrainingAdminDetailsComponent implements OnInit {
  routeId: Number
  training: Training
  training$: Observable<Training> = of(null)
  file: File
  //  training: Training
  rForm: FormGroup
  matcher = new MyErrorStateMatcher()
  constructor(
    private formBuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private store: Store<fromTrainingReducer.TrainingsState>
  ) {
    // console.log(
    //   'Constructor. training ' +
    //     require('util').inspect(this.training, false, null)
    // )

    this.rForm = formBuilder.group({
      title: [
        null,
        Validators.compose([Validators.required, Validators.maxLength(20)]),
      ],
      secondaryTitle: [
        null,
        Validators.compose([Validators.required, Validators.maxLength(40)]),
      ],
      shortDescription: [
        null,
        Validators.compose([Validators.required, Validators.maxLength(80)]),
      ],
      longDescription: [null, Validators.compose([Validators.maxLength(280)])],
    })
    this.routeId = Number(this.activatedRoute.snapshot.paramMap.get('id'))
    // console.log('-------- id = ' + this.routeId)
    // this.activatedRoute.queryParams.subscribe(params => {
    //   let id = params['id']
    //   console.log('-------- id = ' + id) // Print the parameter to the console.
    // })
    this.store.dispatch(new TrainingActions.LoadTraining(this.routeId))
    this.training$ = this.store.select(fromTrainingReducer.getSelectedTraining)
    this.training$.subscribe((training: Training) => {
      // this.training = training
      this.training = training
      this.applyFormValues(this.rForm, training)

      console.log(
        'Got training ' + require('util').inspect(training, false, null)
      )
    })
  }

  public hasError = (controlName: string, errorName: string) => {
    // console.log(
    //   'error ' + this.rForm.controls[controlName].hasError(errorName)
    // )
    return this.rForm.controls[controlName].hasError(errorName)
  }

  ngOnInit() {
    // console.log(
    //   'TrainingAdminAppComponent ngOnInit. Get training' + this.routeId
    // )
  }
  submit(value: any) {
    let tr = { ...this.training, ...value }
    console.log(
      'TrainingAdminAppComponent save submit  =' +
        require('util').inspect(tr, false, null)
    )
    this.store.dispatch(
      // new TrainingActions.SaveTraining({ id: this.training.id, ...value }, this.file)
      new TrainingActions.SaveTraining(tr, this.file)
    )
  }
  private applyFormValues(group, formValues) {
    Object.keys(formValues).forEach(key => {
      let formControl = <FormControl>group.controls[key]
      if (!formControl) return
      if (formControl instanceof FormGroup) {
        this.applyFormValues(formControl, formValues[key])
      } else {
        formControl.setValue(formValues[key])
      }
    })
  }
  onFilesAdded(event) {
    this.file = event.target.files[0]
    console.log(
      'event.target.files[0]=' +
        require('util').inspect(this.file.name, false, null)
    )
  }
}
