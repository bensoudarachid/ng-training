import { async, ComponentFixture, TestBed } from '@angular/core/testing'

import { ControlMessages } from './control-messages.component'

describe('ControlMessagesComponent', () => {
  let component: ControlMessages
  let fixture: ComponentFixture<ControlMessages>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ControlMessages],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlMessages)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
