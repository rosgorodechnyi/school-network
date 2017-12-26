import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../../services/auth.service';
import { UsersService } from '../../services/users.service';
import { FriendsService } from '../../services/friends.service';
import { MessageDialog } from '../message-dialog/message-dialog';
import { MatDialog } from '@angular/material';

@Component({
  selector: 'sn-user-card',
  templateUrl: './user-card.component.html'
})
export class UserCardComponent extends MessageDialog implements OnInit  {

  constructor(private router: Router,
              private authService: AuthService,
              private usersService: UsersService,
              private friendsService: FriendsService,
              private dialog: MatDialog) {
    super(dialog);
  }

  @Input() user: any;

  isLogedIn: boolean = this.authService.isLogedIn();
  logedInUserid = this.usersService.getUserId();

  addedToFriendsRequests;
  hasRequestToFriends;
  addedToFriends;

  ngOnInit() {
    this.addedToFriendsRequests = this.user.userData.userFriendsRequest.indexOf(this.logedInUserid) !== -1;

    this.hasRequestToFriends = this.user.userData.userFriendsSended.indexOf(this.logedInUserid) !== -1;

    this.addedToFriends = this.user.userData.userFriends.indexOf(this.logedInUserid) !== -1;

    console.log(this.user);
  }

  showProfile(id) {
    this.router.navigate([`users/${id}`]);
  }

  addtoFriend(id) {
    this.usersService.getUser(this.logedInUserid).subscribe(res => {

      const data = {
        myId: res._id,
        dataId: res.userData._id,
        reqId: id
      };

      this.friendsService.addFriend(data).subscribe(newRes => {
        if (newRes.status === 'SUCCESS') {
          this.showModal({
            type: 'success',
            navigate: false,
            title: 'Success',
            description: 'Request is sended'
          });

          this.addedToFriendsRequests = true;
        }
      });

    });

  }

  confirmFriendrequest(id) {
    this.usersService.getUser(this.logedInUserid).subscribe(res => {

      const data = {
        myId: res._id,
        dataId: res.userData._id,
        reqId: id
      };

      console.log(data);

      this.friendsService.confirmFriend(data).subscribe(newRes => {
          if (newRes.status === 'SUCCESS') {
            this.showModal({
              type: 'success',
              navigate: false,
              title: 'Success',
              description: newRes.msg
            });

            this.addedToFriends = true;
          }
      });

    });
  }

}
