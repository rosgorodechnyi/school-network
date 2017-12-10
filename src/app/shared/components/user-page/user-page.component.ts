import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'sn-user-page',
  templateUrl: './user-page.component.html'
})
export class UserPageComponent implements OnInit, OnDestroy {

  constructor(private usersService: UsersService,
              private route: ActivatedRoute) {}

  user: any;

  routeSubs: Subscription;
  usersSubs: Subscription;

  ngOnInit() {
    this.routeSubs = this.route.params.subscribe((params: Params) => {
      this.getUser(params.id);
    });
  }

  getUser(id) {
    this.usersSubs = this.usersService.getUser(id).subscribe(user => {
      this.user = user;
    });
  }

  ngOnDestroy() {
    this.routeSubs.unsubscribe();
    this.usersSubs.unsubscribe();
  }

}
