import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './shared/services/auth.service';
import { UsersService } from './shared/services/users.service';

@Component({
  selector: 'sn-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private authService: AuthService,
              private usersService: UsersService) {}

  isLogedIn;

  logedUser;

  subs = this.authService.logedStream.subscribe(value => {
    this.isLogedIn = value;

    if (this.isLogedIn) {
      this.getUser();
    }
  });

  ngOnInit() {
    this.isLogedIn = this.authService.isLogedIn();

    if (this.isLogedIn) {
      this.getUser();
    }
  }

  getUser() {
    const id = this.usersService.getUserId();
    this.usersService.getUser(id).subscribe(user => {
      console.log(user);
      this.logedUser = user;
    });
  }

}
