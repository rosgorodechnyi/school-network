import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { MatDialog } from '@angular/material';
import { Router } from '@angular/router';

import { handleFormErrors } from '../../shared/utils/handleFormErrors';
import { appConfig } from '../../shared/app-config';
import { ClassesService } from '../../shared/services/classes.service';
import { UsersService } from '../../shared/services/users.service';
import { MessageDialog } from '../../shared/components/message-dialog/message-dialog';

@Component({
  selector: 'sn-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent extends MessageDialog implements OnInit, OnDestroy {

  constructor(private usersService: UsersService,
              private classesService: ClassesService,
              private dialog: MatDialog,
              private router: Router) {
    super(dialog);
  }

  form: FormGroup;

  classes = [];

  private formErrors = {
    name: '',
    surname: '',
    email: '',
    className: '',
    password: '',
  };
  private validationMessages = appConfig.validationMessages;
  private formSubscr: Subscription;

  ngOnInit () {
    this.createForm();
    this.getClasses();
  }

  getClasses() {
    this.classesService.getClasses().subscribe((classes) => {
      this.classes = classes;
    });
  }

  createForm() {
    this.form = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'surname': new FormControl(null, [Validators.required]),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'className': new FormControl(null, [Validators.required]),
      'password': new FormControl(null, [Validators.required, Validators.minLength(6)])
    });

    this.formSubscr = this.form.valueChanges.subscribe(data => {
      handleFormErrors(this.form, this.formErrors, this.validationMessages);
    });
  }

  onSubmit () {
    const { name, surname, email, className, password } = this.form.value;

    const userData = {
      userEmail: email,
      password: password,
      userData: {
        userFirstName: name,
        userLastName: surname,
        userSchoolGroup: className
      }
    };

    this.usersService.createUser(userData).subscribe(res => {
      console.log(res);
      if (res.status === 'SUCCES') {
        const messageData = {
          type: 'success',
          navigate: true,
          navigateLink: 'login',
          title: 'Congratulation!',
          description: res.message
        };
        this.showModal(messageData);
        // this.router.navigate(['login']);
      }
    });
  }

  ngOnDestroy() {
    this.formSubscr.unsubscribe();
  }

}
