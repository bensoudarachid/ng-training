import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { UiModule } from './../../shared/components/ui/ui.module'
import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes, RouterLinkActive } from '@angular/router'

import { TrainingAdminAppComponent } from './training-admin-app/training-admin-app.component'
import { TrainingAdminItemComponent } from './training-admin-item/training-admin-item.component'
import { trainingsReducer } from '../../store/reducers/trainings.reducer'
import { TrainingEffects } from '../../store/effects/trainings.effects'
import { TrainingsService } from '../../services/trainings/trainings.service'
import { TrainingAdminDetailsComponent } from './training-admin-details/training-admin-details.component'
import { MyOwnCustomMaterialModule } from '../../shared/modules/appmaterial.module'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

// import { CalendarComponent } from 'angular2-fullcalendar/src/calendar/calendar'

const routes: Routes = [
  // { path: 'trainings', component: TrainingAppComponent },
  {
    path: '',
    component: TrainingAdminAppComponent,
  },
  {
    path: 'training/:id',
    component: TrainingAdminDetailsComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MyOwnCustomMaterialModule,
    ReactiveFormsModule,
    UiModule,
    EffectsModule.forFeature([TrainingEffects]),
    RouterModule.forChild(routes),
    StoreModule.forFeature('training', trainingsReducer),
  ],
  declarations: [
    TrainingAdminAppComponent,
    TrainingAdminItemComponent,
    TrainingAdminDetailsComponent,
    // CalendarComponent,
  ],
  providers: [TrainingsService],
})
export class TrainingAdminModule {}
