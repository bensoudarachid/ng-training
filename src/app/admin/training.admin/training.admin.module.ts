import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes, RouterLinkActive } from '@angular/router'

import { TrainingAdminAppComponent } from './training-admin-app/training-admin-app.component';

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
    RouterModule.forChild(routes),
  ],
  declarations: [TrainingAdminAppComponent]
})
export class TrainingAdminModule{}
