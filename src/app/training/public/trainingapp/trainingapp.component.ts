import { Component, OnInit,OnDestroy } from '@angular/core';
import { NgSwitchCase } from '@angular/common';
import { StoreModule } from '@ngrx/store'
import { Observable } from 'rxjs/Observable'
import {Store , select} from '@ngrx/store'
import {Map,List} from 'immutable'

// import * as TrainingActions from '../../../../store/actions/training.actions'
import { Training } from '../../../model/training'
import { TrainingsService } from '../../../services/trainings/trainings.service'
import {AppState} from '../../../store/appstate'
// import {LOAD_TRAININGS} from '../../../../store/reducers/training.reducer'
import * as TrainingActions from '../../../store/actions/training.actions'


@Component({
  selector: 'app-trainingapp',
  templateUrl: './trainingapp.component.html',
  styleUrls: ['./trainingapp.component.scss']
})

export class TrainingAppComponent implements OnInit, OnDestroy {
  private _name: string
  private _address: Address
  private _hobbies: string[]
  trainings: Observable<List<Training>>
  private isEdit = false;

  // constructor(private trainingsService: TrainingsService, private store: Store<AppState>) {
  constructor(private store: Store<AppState>) {
      console.log('TrainingAppComponent constructor ran...')
    // this._trainings=store.select(state=>{
    //   console.log('****************constructor this._trainings')
    //   console.log(state.training)  
    //   return state.training
    // })
    // this.trainingsState=store.pipe(select('training'))
    this.trainings=this.store.select(state => state.trainingsReducer.get('trainings'))
  }

  ngOnInit() {
    this._name = 'john'
    this._address = {
      street: 'hauptstr.',
      city: 'karlsruhe',
      housenumber: 12,
    }
    // debugger;
    this._hobbies = ['write code', 'watch movies', 'produce music']

    this.store.dispatch(new TrainingActions.LoadTrainings())
    
    // this.trainingsService.getTrainings().subscribe((trainings) => {
    //   this.store.dispatch(new TrainingActions.LoadTrainingsSuccess(<Training[]>trainings)), 
    //   err => {
	  //     console.log("Get trainings error:")
	  //     console.log(err)
    //   }
    // })
    // this.getTrainings()
  }
  ngOnDestroy(){
    // this.store.dispatch({
    //   type:LOAD_TRAININGS,
    //   payload: undefined
    // })
  }
  // getTrainings(){
  //   this.trainingsService.getTrainings().subscribe((trainings) => {
  //     // console.log(posts)
  //     // this.trainings = trainings
  //     this.store.dispatch({
  //       type:'TRAININGS_LOADED',
  //       payload: trainings
  //     })
  //   })
  // }
  get name() {
    return this._name
  }
  set name(name) {
    this._name = name
  }
  get address() {
    return this._address
  }
  get hobbies() {
    return this._hobbies
  }
  // get trainings() {
  //   return this._trainings
  // }

  onClick() {
    console.log('clicked')
    this._name = 'Abbas'
    this._hobbies.push('New Hobby')
  }
  addHobby(hobby) {
    console.log('add hobby ' + hobby)
    this._hobbies.unshift(hobby)
    return false
  }
  deleteHobby(hobby) {
    for (let i = 0; i < this._hobbies.length; i++) {
      if (this._hobbies[i] == hobby) {
        this._hobbies.splice(i, 1)
        return
      }
    }
  }
  toggleEdit() {
    this.isEdit = !this.isEdit
  }
}

interface Address {
  street: string,
  city: string,
  housenumber: number
}
