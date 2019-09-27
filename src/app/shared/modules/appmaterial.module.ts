import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatToolbarModule } from '@angular/material';



@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatSliderModule,MatToolbarModule],
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatSliderModule,MatToolbarModule],
})
export class MyOwnCustomMaterialModule { }