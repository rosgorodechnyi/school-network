import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProfileComponent } from './profile.component';
import { ProfileInfoComponent } from './profile-info/profile-info.component';
import { ProfileFriendsComponent } from './profile-friends/profile-friends.component';
import { AuthGuard } from '../shared/services/auth.guard';

const routes: Routes = [
  {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard], children: [
    {path: 'info', component: ProfileInfoComponent},
    {path: 'friends', component: ProfileFriendsComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule {}
