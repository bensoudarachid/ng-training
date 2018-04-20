import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router'


import { TrainingAppComponent } from './public/trainingapp/trainingapp.component';
import { TrainingItemComponent } from './public/training-item/training-item.component';
import { UiModule } from '../shared/components/ui/ui.module';
import { TrainingsService } from '../services/trainings/trainings.service';
import { TrainingEffects } from '../store/effects/trainings.effects';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { trainingsReducer } from '../store/reducers/trainings.reducer';
// import { TrainingEffects } from '../store';
// import { TrainingsService } from '../services';

const routes: Routes = [
  // { path: 'trainings', component: TrainingAppComponent },
  { 
    path: '',
    component: TrainingAppComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('training', trainingsReducer),
    UiModule,
    EffectsModule.forFeature([TrainingEffects]),
  ],
  declarations: [
    TrainingAppComponent,
    TrainingItemComponent,
  ],
  providers: [TrainingsService],
  exports:[
    // CommonModule,
    // TrainingAppComponent,
    // TrainingItemComponent,
    // UiModule,
    RouterModule,
    EffectsModule
  ]
})
export class TrainingModule { 
  // static forRoot():ModuleWithProviders{
  //   return {
  //     ngModule:TrainingModule,
  //     providers:[TrainingsService]
  //   }
  // }
}
