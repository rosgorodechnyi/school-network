import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';

import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'sn-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit, OnDestroy {

  constructor(private usersService: UsersService) {}

  users: any[] = [];

  usersSubs: Subscription;

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    const authUserId = this.usersService.getUserId();

    this.usersSubs = this.usersService.getUsers().subscribe(users => {
      this.users = users.filter(user => user._id !== authUserId);
    });
  }

  filterClasses(id) {
    console.log(id);
  }

  ngOnDestroy() {
    this.usersSubs.unsubscribe();
  }

}
