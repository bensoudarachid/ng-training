import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { FormsModule } from '@angular/forms'
import { HttpModule } from '@angular/http'
import { Component, OnInit } from '@angular/core'
import { NgSwitchCase } from '@angular/common'
import { StoreModule } from '@ngrx/store'
//import { Observable } from "rxjs/observable";
import { Observable } from 'rxjs'
import { Store, select } from '@ngrx/store'
import { Map, List } from 'immutable'

import { trainingsReducer } from 'trainings'
import { TrainingsService } from '../../../../services/trainings/trainings.service'
import { TrainingAppComponent } from './trainingapp.component'

describe('TrainingappComponent', () => {
  let component: TrainingAppComponent
  let fixture: ComponentFixture<TrainingAppComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TrainingAppComponent],
      imports: [
        FormsModule,
        HttpModule,
        StoreModule.forRoot({ trainingsReducer }),
      ],
      providers: [TrainingsService],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingAppComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
