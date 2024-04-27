import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
 
  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', [Validators.required, this.usernameOrEmailValidator()]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,16}$/)]]
    });
  }

  usernameOrEmailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (!control.value) {
        return null; // don't validate empty value
      }
  
      const emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
      const usernamePattern = /^[A-Za-z0-9_\-]{5,}$/; // Customize according to your username rules
  
      const isValidEmail = emailPattern.test(control.value);
      const isValidUsername = usernamePattern.test(control.value);
  
      return isValidEmail || isValidUsername ? null : { 'usernameOrEmail': true };
    };
  }

 

  onSubmit() {
    console.log(this.loginForm.value)
  }
}
