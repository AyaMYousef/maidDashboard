import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent  implements OnInit {
  users: any[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getUsers(1).subscribe(
      (response: any) => {
        this.users = response.data;
      },
      (error) => {
        console.log('Error fetching users:', error);
      }
    );

}
viewUserDetails(userId: number) {
  this.router.navigate(['/user', userId]);
}
}
