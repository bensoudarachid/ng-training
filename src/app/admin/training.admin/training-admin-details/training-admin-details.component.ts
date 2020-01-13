// declare var require: any
import { Training } from '@app/model/training'
//import { Observable } from "rxjs/observable";
import { Observable } from 'rxjs'
import { of } from 'rxjs/observable/of'
import { Store } from '@ngrx/store'
import { Component, OnInit } from '@angular/core'
import * as fromTrainingReducer from '@app/store/reducers/trainings.reducer'
import * as TrainingActions from '@app/store/actions/training.actions'
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'
import { MyErrorStateMatcher } from '@app/services/validation/myerrorstatematcher'
import { ActivatedRoute } from '@angular/router'
// import * as $ from 'jquery'
declare var $: any

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

      // console.log(
      //   'Got training ' + require('util').inspect(training, false, null)
      // )
    })
  }

  public hasError = (controlName: string, errorName: string) => {
    // console.log(
    //   'error ' + this.rForm.controls[controlName].hasError(errorName)
    // )
    return this.rForm.controls[controlName].hasError(errorName)
  }

  ngOnInit() {
    setTimeout(() => {
      $('#calendar').fullCalendar({
        defaultDate: '2001-01-07',
        defaultView: 'agendaWeek',
        allDaySlot: false,
        contentHeight: 'auto',
        // height: 560,
        header: {
          // left: 'prev,next today',
          // center: 'title',
          // right: 'month,agendaWeek,agendaDay',
          left: '',
          center: '',
          right: '',
        },
        // businessHours: [
        //   {
        //     dow: [0, 1, 2, 3, 4, 5, 6], // Maybe not 0,6? Sunday,Saturday
        //     start: '08:00',
        //     end: '12:00',
        //   },
        //   {
        //     dow: [0, 1, 2, 3, 4, 5, 6], // Maybe not 0,6? Sunday,Saturday
        //     start: '13:00',
        //     end: '18:00',
        //   },
        // ],
        columnHeaderHtml: function(date) {
          let day = date.day()
          if (day === 0) {
            return 'Su'
          } else if (day === 1) {
            return 'Mo'
          } else if (day === 2) {
            return 'Tu'
          } else if (day === 3) {
            return 'We'
          } else if (day === 4) {
            return 'Th'
          } else if (day === 5) {
            return 'Fr'
          } else if (day === 6) {
            return 'Sa'
          } else {
            return ''
          }
        },
        minTime: '08:00:00',
        maxTime: '18:00:00',
        // views: {
        //   dayGridMonth: {
        //     // name of view
        //     titleFormat: { year: 'numeric', month: '2-digit', day: '2-digit' },
        //     // other view-specific options here
        //   },
        // },
        navLinks: false,
        editable: true,
        eventLimit: true,
        events: [
          {
            // title: 'This is your',
            start: '2001-01-09T09:00:00',
            color: '#f9c66a', // override!
          },
          {
            // title: 'Your meeting with john',
            start: '2001-01-11T06:30:00',
            end: '2001-01-11T14:30:00',
            color: '#019efb',
          },
        ], // request to load current events
        eventRender: function(event, element) {
          element.attr('title', event.tip)
        },
        // select: function(start, end, jsEvent, view) {
        //   var abc = prompt('Enter Title')
        //   var allDay = !start.hasTime && !end.hasTime
        //   var newEvent = {
        //     title: abc,
        //     start: '2020-01-17T12:30:00',
        //     allDay: false, // will make the time show,
        //     color: '#ffaa00',
        //   }
        //   $('#calendar').fullCalendar('renderEvent', newEvent)
        // },
      })
      // var newEvent = {
      //   title: 'NEW EVENT',
      //   start: '2001-01-12T08:30:00',
      // }
      // $('#calendar').fullCalendar('renderEvent', newEvent, 'stick')
    }, 100)
    // console.log(
    //   'TrainingAdminAppComponent ngOnInit. Get training' + this.routeId
    // )
  }
  submit(value: any) {
    let tr = { ...this.training, ...value }
    // console.log(
    //   'TrainingAdminAppComponent save submit  =' +
    //     require('util').inspect(tr, false, null)
    // )
    this.store.dispatch(
      // new TrainingActions.SaveTraining({ id: this.training.id, ...value }, this.file)
      new TrainingActions.SaveTraining(tr, this.file)
    )
  }
  addEvent(value: any) {
    var newEvent = {
      title: 'NEW EVENT',
      start: '2001-01-12T08:30:00',
    }
    $('#calendar').fullCalendar('renderEvent', newEvent, 'stick')
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
