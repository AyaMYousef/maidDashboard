import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserListComponent } from './features/users/components/user-list/user-list.component';
import { UserDetailComponent } from './features/users/components/user-detail/user-detail.component';


 export const routes: Routes = [
  /*{ path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'user/:id', component: UserDetailComponent }
, {
  path: '**',
  redirectTo: 'not-found',
},*/{}];

@NgModule({
  imports: [RouterModule.forRoot(routes),RouterModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
