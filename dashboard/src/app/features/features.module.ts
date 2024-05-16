import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { UserListComponent } from './users/components/user-list/user-list.component';
import { MaterialModule } from '../shared/material/material.module';
import { UserDetailComponent } from './users/components/user-detail/user-detail.component';
@NgModule({
  declarations: [UserListComponent, UserDetailComponent],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
  ],
})
export class AuthModule {}
