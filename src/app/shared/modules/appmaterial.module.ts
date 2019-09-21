import { NgModule } from '@angular/core';
import {MatButtonModule} from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';



@NgModule({
  imports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatSliderModule],
  exports: [MatButtonModule, MatCheckboxModule, MatIconModule, MatSliderModule],
})
export class MyOwnCustomMaterialModule { }