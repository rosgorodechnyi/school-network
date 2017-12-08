import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

import { appConfig } from '../../shared/app-config';
import { handleFormErrors } from '../../shared/utils/handleFormErrors';
import { AuthService } from '../../shared/services/auth.service';
import { MessageDialog } from '../../shared/components/message-dialog/message-dialog';

@Component({
  selector: 'sn-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent extends MessageDialog implements OnInit, OnDestroy {

  constructor (private authService: AuthService,
               private dialog: MatDialog,
               private router: Router) {
    super(dialog);
  }

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
      if (res.status === 'SUCCES') {
        const { token, userId } = res.data;
        this.authService.logIn(token, userId);

        this.router.navigate(['profile']);
      } else {
        const messageData = {
          type: 'error',
          navigate: false,
          title: 'Error!',
          description: res.message
        };
        this.showModal(messageData);
      }
    });
  }

  ngOnDestroy() {
    this.formSubscr.unsubscribe();
  }

}
