import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';

import { appConfig } from '../../../shared/app-config';
import { ClassesService } from '../../../shared/services/classes.service';
import { handleFormErrors } from '../../../shared/utils/handleFormErrors';

@Component({
  selector: 'sn-profile-info-data',
  templateUrl: './profile-info-data.component.html'
})
export class ProfileInfoDataComponent implements OnInit, OnDestroy {

  constructor(private classesService: ClassesService) { }

  @Input() user: any;
  @Input() editable: any;

  @Output() updateData: EventEmitter<any> = new EventEmitter();
  @Output() switchEditable: EventEmitter<any> = new EventEmitter();

  form: FormGroup;
  private formErrors = {
    name: '',
    surname: '',
    className: '',
  };
  private validationMessages = appConfig.validationMessages;
  private formSubscr: Subscription;

  classes: any[];

  ngOnInit() {
    this.getClasses();
    this.createForm();
  }

  enableEdit() {
    this.switchEditable.emit(true);
  }

  disableEdit() {
    this.switchEditable.emit(false);
  }

  getClasses() {
    this.classesService.getClasses().subscribe((classes) => {
      this.classes = classes;
    });
  }

  createForm() {
    this.form = new FormGroup({
      'name': new FormControl(this.user.userData.userFirstName, [Validators.required]),
      'surname': new FormControl(this.user.userData.userLastName, [Validators.required]),
      'className': new FormControl(this.user.userData.userSchoolGroup._id, [Validators.required])
    });

    this.formSubscr = this.form.valueChanges.subscribe(data => {
      handleFormErrors(this.form, this.formErrors, this.validationMessages);
    }, err => {
      console.error(err);
    });
  }

  onSubmit() {
    const { name, surname, className } = this.form.value;

    const userData = {
      userFirstName: name,
      userLastName: surname,
      userSchoolGroup: className
    };

    this.updateData.emit(userData);
  }

  ngOnDestroy() {
    this.formSubscr.unsubscribe();
  }

}
