import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppImageComponent } from './app-image/app-image.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    // CommonModule,
    // BrowserModule
  ],
  declarations: [
    AppImageComponent
  ],
  exports:[
    AppImageComponent
  ]
})
export class UiModule { }
