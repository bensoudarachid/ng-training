import { TestBed, async } from '@angular/core/testing'
import {RouterTestingModule} from '@angular/router/testing'

import { AppComponent } from './app.component'

import {StoreModule} from '@ngrx/store'
import {trainingsReducer} from './store/reducers/trainings.reducer'



describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule(
    {
      declarations: [
        AppComponent
      ],
      imports: [ RouterTestingModule,
        StoreModule.forRoot({trainingsReducer})
      ]
      
      }
    ).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'AnGen'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('AnGen');
  }));
  it('should render title in a h4 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('li').textContent).toContain('Home');
  }));
});
