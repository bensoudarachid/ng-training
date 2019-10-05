import { services } from './../services/index'
import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { MyErrorStateMatcher } from '@app/services/validation/myerrorstatematcher'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  rForm: FormGroup
  registration: any
  email: string = 'abibis@gmx.de'
  userName: string = 'Tschash'
  password: string
  passwordCheck: string
  matcher = new MyErrorStateMatcher()
  constructor(private formBuilder: FormBuilder) {
    this.rForm = formBuilder.group({
      userName: [
        null,
        Validators.compose([Validators.required, Validators.maxLength(20)]),
      ],
      email: [
        null,
        Validators.compose([
          Validators.required,
          Validators.email,
          Validators.maxLength(40),
        ]),
      ],
      password: [
        null,
        Validators.compose([Validators.required, Validators.minLength(8)]),
      ],
      passwordCheck: [null, Validators.compose([Validators.minLength(8)])],
    })
  }

  public hasError = (controlName: string, errorName: string) => {
    console.log(
      'email error ' + this.rForm.controls[controlName].hasError(errorName)
    )
    return this.rForm.controls[controlName].hasError(errorName)
  }
  // onChange($event, controlName) {
  //   // this.password = $event;
  //   if (!this.rForm.controls[controlName].touched) {
  //     this.rForm.controls[controlName].markAsTouched()
  //   }
  // }
  ngOnInit() {
    this.email = ''
    this.userName = ''
  }

  submitRegistration(registration) {
    this.email = registration.email
    this.userName = registration.userName
    this.password = registration.password
    this.passwordCheck = registration.passwordCheck
    console.log('Submit now email:' + registration.email)
  }
}
