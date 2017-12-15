import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProfileNavComponent } from './profile-nav/profile-nav.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ProfileFriendsComponent } from './profile-friends/profile-friends.component';
import { ProfileInfoImageComponent } from './profile-info/profile-info-image/profile-info-image.component';
import { ProfileInfoDataComponent } from './profile-info/profile-info-data/profile-info-data.component';

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
    ProfileFriendsComponent,
    ProfileInfoImageComponent,
    ProfileInfoDataComponent
  ]
})
export class ProfileModule {}
