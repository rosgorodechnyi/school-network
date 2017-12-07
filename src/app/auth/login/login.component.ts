import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { appConfig } from '../../shared/app-config';
import { handleFormErrors } from '../../shared/utils/handleFormErrors';
import { Subscription } from 'rxjs/Subscription';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'sn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  constructor (private authService: AuthService) {}

  form: FormGroup;

  private formErrors = {
    email: '',
    password: ''
  };
  private validationMessages = appConfig.validationMessages;
  private formSubscr: Subscription;

  ngOnInit () {
    this.form = new FormGroup({
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

    this.formSubscr = this.form.valueChanges.subscribe(data => {
      handleFormErrors(this.form, this.formErrors, this.validationMessages);
    });
  }

  onSubmit () {
    const { email, password } = this.form.value;

    const userData = {
      userEmail: email,
      password: password
    };

    this.authService.signIn(userData).subscribe((res) => {
      console.log(res);
    });
  }

  ngOnDestroy() {
    this.formSubscr.unsubscribe();
  }

}
