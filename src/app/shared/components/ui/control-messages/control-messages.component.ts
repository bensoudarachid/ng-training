import { OnInit } from '@angular/core'
import { ValidationService } from '@app/services/validation/validation.service'

import { Component, Input } from '@angular/core'
import { FormControl } from '@angular/forms'

@Component({
  selector: 'app-control-messages',
  // templateUrl: './control-messages.component.html',
  // styleUrls: ['./control-messages.component.scss'],
  // <div *ngIf="errorMessage !== null">{{ errorMessage }}Abbas</div>
  template: `
    <div *ngIf="errorMessage !== null">{{ errorMessage }}</div>
  `,
})
export class ControlMessagesComponent implements OnInit {
  // errorMessageString: string
  @Input() control: FormControl
  constructor() {}
  ngOnInit() {
    // this.errorMessageString = 'TschashString'
  }

  get errorMessage() {
    // console.log('get errorMessage')
    for (let propertyName in this.control.errors) {
      console.log('get errorMessage prop ' + propertyName)
      if (
        this.control.errors.hasOwnProperty(propertyName) &&
        this.control.touched
      ) {
        console.log(
          'get errorMessage ' +
            ValidationService.getValidatorErrorMessage(
              propertyName,
              this.control.errors[propertyName]
            )
        )
        return ValidationService.getValidatorErrorMessage(
          propertyName,
          this.control.errors[propertyName]
        )
        // console.log('errorMessageString' + this.errorMessageString)
        // return this.errorMessageString
      }
    }
    console.log('errorMessageString=null')
    return null
  }
}
