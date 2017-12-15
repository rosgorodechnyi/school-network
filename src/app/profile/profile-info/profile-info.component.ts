import { Component, EventEmitter, OnInit } from '@angular/core';

import { UsersService } from '../../shared/services/users.service';

@Component({
  selector: 'sn-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.scss']
})
export class ProfileInfoComponent implements OnInit {

  constructor(private usersService: UsersService) { }

  user: any;
  userId = this.usersService.getUserId();

  userDataEditable = false;
  userImageEditable = false;

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.usersService.getUser(this.userId).subscribe(user => {
      this.user = user;
    });
  }

  onUpdateData(data) {
    const dataId = this.user.userData._id;
    this.usersService.updateUserData(data, dataId).subscribe(userData => {
      console.log(userData);
      this.user.userData = userData;
      this.userDataEditable = false;
    });
  }

  onUpdateImage(data) {
    console.log(data);
    data.append('userId', this.userId);

    this.usersService.updateUserImage(data, this.userId).subscribe((res) => {
      console.log(res);
    });
  }

  onUserEditable(data) {
    this.userDataEditable = data;
  }

  onImageEditable(data) {
    this.userImageEditable = data;
  }

}
