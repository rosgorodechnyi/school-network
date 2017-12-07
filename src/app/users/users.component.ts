import { Component, OnInit } from '@angular/core';
import { UsersService } from '../shared/services/users.service';

@Component({
  selector: 'sn-users',
  templateUrl: './users.component.html'
})
export class UsersComponent implements OnInit {

  constructor(private usersService: UsersService) {}

  users: any[] = [];

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.usersService.getUsers().subscribe(users => {
      console.log(users);
      this.users = users;
    });
  }

}
