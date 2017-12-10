import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { UserPageComponent } from '../shared/components/user-page/user-page.component';

@NgModule({
  imports: [RouterModule.forChild([
    {path: 'users/:id', component: UserPageComponent}
  ])],
  exports: [RouterModule]
})
export class UsersRoutingModule {}
