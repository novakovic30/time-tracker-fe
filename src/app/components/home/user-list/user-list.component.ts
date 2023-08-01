import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = []; // Change the type based on your user model
  selectedUser: any; // Change the type based on your user model
  nextUserId: number = 1; // Initialize the next available id for new users

  constructor(private userService: UserService) { } // Inject your user service

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data; // Assign the received data to the 'users' array
        // Update the nextUserId to be greater than the highest existing id
        if (this.users.length > 0) {
          this.nextUserId = Math.max(...this.users.map((user) => user.id)) + 1;
        }
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  getUserDetails(userId: number) {
    this.selectedUser = this.users.find((user) => user.id === userId);
  }
}
