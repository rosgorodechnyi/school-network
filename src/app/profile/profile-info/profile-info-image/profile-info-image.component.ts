import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'sn-profile-info-image',
  templateUrl: './profile-info-image.component.html'
})
export class ProfileInfoImageComponent implements OnInit {

  constructor() { }

  @Input() userImage: any;
  @Input() editable: boolean;

  @Output() updateImage: EventEmitter<any> = new EventEmitter();
  @Output() switchEditable: EventEmitter<any> = new EventEmitter();

  private imageFormData: any = new FormData();

  ngOnInit() {

  }

  showEdit() {
    this.switchEditable.emit(true);
  }

  closeEdit() {
    this.switchEditable.emit(false);
  }

  onUpdateImage() {
    if (this.imageFormData.get('user-photo')) {
      this.updateImage.emit(this.imageFormData);
    } else {
      this.switchEditable.emit(false);
    }
  }

  changeFile(e) {
    const input = e.target;
    const fileNameContainer = input.nextElementSibling;

    if (input.files.length) {
      const file = input.files[0];
      fileNameContainer.innerHTML = file.name;
      this.imageFormData.append('user-photo', file, file.name);
    } else {
      fileNameContainer.innerHTML = '';
      this.imageFormData.delete('user-photo');
    }
  }

}
