import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'sn-user-card',
  templateUrl: './user-card.component.html'
})
export class UserCardComponent {

  constructor(private router: Router) {}

  @Input() user: any;

  showProfile(id) {
    this.router.navigate([`users/${id}`]);
  }

}
