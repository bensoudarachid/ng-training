import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { AppImageComponent } from './app-image/app-image.component'
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser'
import { HttpSrcDirective } from './http-src.directive'
import { HttpImageService } from './http-image.service'
import { ControlMessagesComponent } from './control-messages/control-messages.component'

@NgModule({
  imports: [
    CommonModule,
    // CommonModule,
    // BrowserModule
  ],
  declarations: [AppImageComponent, HttpSrcDirective, ControlMessagesComponent],
  exports: [AppImageComponent, ControlMessagesComponent],
  providers: [HttpImageService],
})
export class UiModule {}
