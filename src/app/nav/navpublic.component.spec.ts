import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavPublicComponent } from './navpublic.component';

describe('NavpublicComponent', () => {
  let component: NavPublicComponent;
  let fixture: ComponentFixture<NavPublicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavPublicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavPublicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
