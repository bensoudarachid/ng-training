import { BrowserModule } from '@angular/platform-browser'
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { FormsModule,ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http'
// import { HttpModule } from '@angular/http'
// import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { RouterModule, Routes, RouterLinkActive } from '@angular/router'
import { CookieService } from 'ngx-cookie-service'
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppHttpInterceptor } from './services/apphttp.interceptor'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { AppComponent } from './app.component'
import { TrainingAppComponent } from './features/training/public/trainingapp/trainingapp.component'
import { TrainingsService } from './services/trainings/trainings.service'
import { AuthService } from './services/auth/auth.service'
// import { AppHttpInterceptor } from './services/http.interceptor'
import { HomeComponent } from './features/home/home.component'
// import { trainingReducer } from './store/reducers/training.reducer'
// import { trainingsReducer } from './store/reducers/trainings.reducer'
// import { authReducer } from './store/reducers/auth.reducer'
import * as fromServices  from './services'

import { reducers,effects } from './store'
import { Actions} from '@ngrx/effects'

// import '../../node_modules/material-design-lite/material.min.js'
// import '../../node_modules/material-design-lite/material.min.css'

// import '../../node_modules/mdl-selectfield/dist/mdl-selectfield.css'
// import '../../node_modules/mdl-selectfield/dist/mdl-selectfield.js'
import '../scss/animate.css'
import '../scss/app.scss';
import { NavComponent } from './nav/nav.component';
import { NavPublicComponent } from './nav/navpublic.component';
import { FooterComponent } from './footer/footer.component';
import { TrainingItemComponent } from './features/training/public/training-item/training-item.component';
import { AppImageComponent } from './shared/components/media/app-image/app-image.component'

const routes: Routes = [
  { path: 'trainings', component: TrainingAppComponent },
  { path: '', component: HomeComponent }
]


@NgModule({
  declarations: [
    AppComponent,
    TrainingAppComponent,
    HomeComponent,
    NavComponent,
    NavPublicComponent,
    FooterComponent,
    TrainingItemComponent,
    AppImageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers),
    // StoreModule.forRoot({ trainingsReducer,authReducer}),
    // StoreModule.forFeature('main',reducers),
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    // EffectsModule.forFeature(effects),
    EffectsModule.forRoot(effects),
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [    {
    provide: HTTP_INTERCEPTORS,
    useClass: AppHttpInterceptor,
    multi: true
    },...fromServices.services],
  bootstrap: [AppComponent]
})
export class AppModule { }
