import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
// import { HttpModule } from '@angular/http'
// import { HTTP_INTERCEPTORS } from '@angular/common/http'
import { RouterModule, Routes, RouterLinkActive } from '@angular/router'
import { CookieService } from 'ngx-cookie-service'
import { MDBBootstrapModule } from 'angular-bootstrap-md'
import { AppHttpInterceptor } from './services/apphttp.interceptor'
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
// import { TrainingAppComponent } from './training/public/trainingapp/trainingapp.component'
import { AuthService } from './services/auth/auth.service'
import { HomeComponent } from './home/home.component'
import * as fromServices from './services'

import { reducers, effects } from './store'
import { Actions } from '@ngrx/effects'

import '../scss/animate.css'
import '../scss/app.scss'
import { NavComponent } from './shared/components/nav/nav.component'
import { NavPublicComponent } from './shared/components/nav/navpublic.component'
import { FooterComponent } from './shared/components/footer/footer.component'
import { TrainingModule } from './training/training.module'
import { UiModule } from './shared/components/ui/ui.module'
import { TrainingItemComponent } from './training/public/training-item/training-item.component'
import { AuthenticationGuard } from './services/auth/auth.guard'
import { RegisterComponent } from './register/register.component'
import { MyOwnCustomMaterialModule } from './shared/modules/appmaterial.module'
// import { ApiConnection } from './services/api-connection.service';
import { FlexLayoutModule } from '@angular/flex-layout'
import { CommonModule } from '@angular/common'
import {
  ShowOnDirtyErrorStateMatcher,
  ErrorStateMatcher,
} from '@angular/material'

// const routes: Routes = [
//   { path: 'trainings', component: TrainingAppComponent },
//   { path: '', component: HomeComponent }
// ]

@NgModule({
  declarations: [
    AppComponent,
    // TrainingAppComponent,
    // TrainingItemComponent,
    HomeComponent,
    NavComponent,
    NavPublicComponent,
    FooterComponent,
    RegisterComponent,
    // AppImageComponent,
    // routingComponents
  ],
  imports: [
    AppRoutingModule,
    // TrainingModule.forRoot(),
    // TrainingModule,
    CommonModule,
    UiModule,
    BrowserModule,
    MyOwnCustomMaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    // RouterModule.forRoot(routes),
    StoreModule.forRoot(reducers),
    // StoreModule.forRoot({ trainingsReducer,authReducer}),
    // StoreModule.forFeature('main',reducers),
    BrowserModule,
    MDBBootstrapModule.forRoot(),
    // EffectsModule.forFeature(effects),
    EffectsModule.forRoot(effects),
    FlexLayoutModule,
  ],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    AuthenticationGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true,
    },
    //cause input errors to show when the input is dirty and invalid
    { provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher },
    ...fromServices.services,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
