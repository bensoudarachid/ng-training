import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  rForm: FormGroup
  registration:any
  email:string
  userName:string
  password:string
  passwordCheck:string
  constructor(private formBuilder:FormBuilder) { 
    this.rForm=formBuilder.group({
      'userName':[null,Validators.compose([Validators.required, Validators.maxLength(50)])],
      'email':[null,Validators.compose([Validators.required, Validators.email])],
      'password':[null,Validators.compose([Validators.required, Validators.minLength(8)])],
      'passwordCheck':[null,Validators.compose([Validators.required, Validators.minLength(8)])]
    })
  }

  ngOnInit() {
  }

  submitRegistration(registration){
    this.email=registration.email
    this.userName=registration.userName
    this.password=registration.password
    this.passwordCheck=registration.passwordCheck    
    console.log('Submit now email:'+registration.email)
  }
  
}
