import { NgModule, ModuleWithProviders } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule, Routes, RouterLinkActive } from '@angular/router'

import { TrainingAppComponent } from './trainingapp/trainingapp.component'
import { TrainingItemComponent } from '@app/public/training/training-item/training-item.component'
import { UiModule } from '@app/shared/components/ui/ui.module'
import { TrainingsService } from '@app/services/trainings/trainings.service'
import { TrainingEffects } from '@app/store/effects/trainings.effects'
import { EffectsModule } from '@ngrx/effects'
import { StoreModule } from '@ngrx/store'
import { trainingsReducer } from '@app/store/reducers/trainings.reducer'
// import { TrainingEffects } from '../store';
// import { TrainingsService } from '../services';

const routes: Routes = [
  // { path: 'trainings', component: TrainingAppComponent },
  {
    path: '',
    component: TrainingAppComponent,
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('training', trainingsReducer),
    UiModule,
    EffectsModule.forFeature([TrainingEffects]),
  ],
  declarations: [TrainingAppComponent, TrainingItemComponent],
  providers: [TrainingsService],
  exports: [
    // CommonModule,
    // TrainingAppComponent,
    // TrainingItemComponent,
    // UiModule,
    RouterModule,
    EffectsModule,
  ],
})
export class TrainingModule {
  // static forRoot():ModuleWithProviders{
  //   return {
  //     ngModule:TrainingModule,
  //     providers:[TrainingsService]
  //   }
  // }
}
