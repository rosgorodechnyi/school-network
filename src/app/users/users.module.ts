import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersComponent } from './users.component';
import { UsersFilterComponent } from './users-filter/users-filter.component';
import { UserCardComponent } from '../shared/components/user-card/user-card.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [
    UsersComponent,
    UsersFilterComponent,
    UserCardComponent
  ]
})
export class UsersModule {}
