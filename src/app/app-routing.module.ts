// import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { RouterModule, Routes, RouterLinkActive } from '@angular/router'

import { HomeComponent } from './home/home.component'
import { TrainingAppComponent } from './training/public/trainingapp/trainingapp.component';

const routes: Routes = [
  // { path: 'trainings', component: TrainingAppComponent },
  { path: 'trainings',
    loadChildren: 'app/training/training.module#TrainingModule'
    // children:[
    //   {
    //     path: '', component: TrainingAppComponent
    //   }
    // ]
  },
  { path: '', component: HomeComponent }
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  declarations: [],
  exports:[RouterModule]
})
export class AppRoutingModule { }
// export const routingComponents = [HomeComponent,TrainingAppComponent]
