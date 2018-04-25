import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainingAdminAppComponent } from './training-admin-app.component';

describe('TrainingAdminAppComponent', () => {
  let component: TrainingAdminAppComponent;
  let fixture: ComponentFixture<TrainingAdminAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrainingAdminAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrainingAdminAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
