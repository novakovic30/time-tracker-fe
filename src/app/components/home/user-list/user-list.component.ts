import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = []; // Ändern Sie den Typ basierend auf Ihrem Benutzermodell
  selectedUser: any; // Ändern Sie den Typ basierend auf Ihrem Benutzermodell

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userService.getAllUsers().subscribe(
      (data) => {
        this.users = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }

  getUserDetails(userId: number) {
    this.userService.getUserById(userId).subscribe(
      (user) => {
        this.selectedUser = user;
      },
      (error) => {
        console.log(error);
      }
    );
  }
}
