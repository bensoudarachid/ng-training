import { RegisterComponent } from './public/register/register.component'
// import { CommonModule } from '@angular/common';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core'
import { RouterModule, Routes, RouterLinkActive } from '@angular/router'

import { HomeComponent } from './public/home/home.component'
import { AuthenticationGuard } from './services/auth/auth.guard'
// import { TrainingAppComponent } from './training/public/trainingapp/trainingapp.component';

const routes: Routes = [
  // { path: 'trainings', component: TrainingAppComponent },
  { path: '', component: HomeComponent },
  {
    path: 'trainings',
    loadChildren: () =>
      import('app/public/training/training.module').then(m => m.TrainingModule),
    // children:[
    //   {
    //     path: '', component: TrainingAppComponent
    //   }
    // ]
  },
  { path: 'register', component: RegisterComponent },
  {
    path: 'admin/trainings',
    canActivate: [AuthenticationGuard],
    loadChildren: () =>
      import('app/admin/training.admin/training.admin.module').then(
        m => m.TrainingAdminModule
      ),
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  declarations: [],
  exports: [RouterModule],
})
export class AppRoutingModule {}
// export const routingComponents = [HomeComponent,TrainingAppComponent]
