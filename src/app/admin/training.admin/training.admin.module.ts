import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { UiModule } from './../../shared/components/ui/ui.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router'

import { TrainingAdminAppComponent } from './training-admin-app/training-admin-app.component';
import { TrainingAdminItemComponent } from './training-admin-item/training-admin-item.component';
import { trainingsReducer } from '../../store/reducers/trainings.reducer';
import { TrainingEffects } from '../../store/effects/trainings.effects';
import { TrainingsService } from '../../services/trainings/trainings.service';
import { TrainingAdminDetailsComponent } from './training-admin-details/training-admin-details.component';
import { MyOwnCustomMaterialModule } from '../../shared/modules/appmaterial.module';

const routes: Routes = [
  // { path: 'trainings', component: TrainingAppComponent },
  { 
    path: '',
    component: TrainingAdminAppComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    UiModule,
    MyOwnCustomMaterialModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('training', trainingsReducer),
    EffectsModule.forFeature([TrainingEffects]),
  ],
  declarations: [
    TrainingAdminAppComponent,
    TrainingAdminItemComponent,
    TrainingAdminDetailsComponent
  ],
  providers: [TrainingsService],
})
export class TrainingAdminModule{}
