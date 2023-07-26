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

  constructor(private userService: UserService) { } // Inject your user service

  ngOnInit() {
    this.loadUsers();
    this.addUsersManually(); // Call the method to add users manually
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe({
      next: (data) => {
        this.users = data; // Assign the received data to the 'users' array
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  getUserDetails(userId: number) {
    this.selectedUser = this.users.find((user) => user.id === userId);
  }
  addUsersManually() {
    // Manually add two users to the user list
    const user1 = {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@example.com',
      password: 'password1',
      tasks: []
    };

    const user2 = {
      id: 2,
      firstName: 'Jane',
      lastName: 'Smith',
      email: 'jane.smith@example.com',
      password: 'password2',
      tasks: []
    };

    // Add the users to the user list
    this.users.push(user1);
    this.users.push(user2);
  } 
}
