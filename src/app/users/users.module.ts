import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { UsersFilterComponent } from './users-filter/users-filter.component';
import { UserCardComponent } from '../shared/components/user-card/user-card.component';
import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';
import { UserPageComponent } from '../shared/components/user-page/user-page.component';

@NgModule({
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule
  ],
  declarations: [
    UsersComponent,
    UsersFilterComponent,
    UserCardComponent,
    UserPageComponent
  ]
})
export class UsersModule {}
