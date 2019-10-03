import { NgModule } from '@angular/core'
import { MatButtonModule } from '@angular/material/button'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatIconModule } from '@angular/material/icon'
import { MatSliderModule } from '@angular/material/slider'
import { MatToolbarModule, MatInputModule } from '@angular/material'
import { MatMenuModule } from '@angular/material/menu'
import { MatFormFieldModule } from '@angular/material/form-field'

@NgModule({
  imports: [
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSliderModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
  ],
  exports: [
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatSliderModule,
    MatToolbarModule,
    MatMenuModule,
    MatFormFieldModule,
  ],
})
export class MyOwnCustomMaterialModule {}
