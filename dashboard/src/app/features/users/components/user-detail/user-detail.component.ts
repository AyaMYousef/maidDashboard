import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {
  user: any;

  constructor(private route: ActivatedRoute, private userService: UserService) {}

  ngOnInit(): void {
    // Get 'id' parameter from route snapshot
    const userId = this.route.snapshot.paramMap.get('id');
    if (userId !== null && userId !== undefined) {
      const parsedUserId = +userId;
      if (!isNaN(parsedUserId)) {
        // Load user details using the extracted user ID
        this.loadUserDetails(parsedUserId);
      } else {
        // Handle scenario where 'id' parameter is not a valid number
        console.log('User ID parameter is not a valid number.');
      }
    } else {
      // Handle scenario where 'id' parameter is missing
      console.log('User ID parameter is missing.');
    }
  }

  loadUserDetails(userId: number) {
    this.userService.getUserDetails(userId).subscribe(
      (response: any) => {
        if (response && response.data) {
          this.user = response.data;
        } else {
          console.log('Invalid user data in API response:', response);
        }
      },
      (error) => {
        console.log('Error fetching user details:', error);
      }
    );
  }
}
