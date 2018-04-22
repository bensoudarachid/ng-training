import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppImageComponent } from './app-image/app-image.component';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpSrcDirective } from './http-src.directive';
import { HttpImageService } from './http-image.service';

@NgModule({
  imports: [
    // CommonModule,
    // BrowserModule
  ],
  declarations: [
    AppImageComponent,
    HttpSrcDirective
  ],
  exports:[
    AppImageComponent
  ],
  providers: [HttpImageService]
})
export class UiModule {}
