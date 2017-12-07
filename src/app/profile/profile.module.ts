import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProfileNavComponent } from './profile-nav/profile-nav.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ProfileFriendsComponent } from './profile-friends/profile-friends.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileRoutingModule,
    SharedModule
  ],
  declarations: [
    ProfileComponent,
    ProfileNavComponent,
    ProfileInfoComponent,
    ProfileFriendsComponent
  ]
})
export class ProfileModule {}
