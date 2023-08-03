import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VariablesService } from '../../../core/services/variables.service';
import { UserService } from 'src/app/core/services/user.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LoginComponent implements OnInit{
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  loading: boolean = false; // Indicates if login process is ongoing
  loginSuccess: boolean = false;

  constructor(private router: Router, private variablesService: VariablesService, private userService: UserService, private authService: AuthService) {
    // Constructor
  }

  ngOnInit(): void {
    this.redirectToUserTasksIfValidToken();
  }

  redirectToUserTasksIfValidToken() {
    const authToken = localStorage.getItem('authToken');
    if(authToken) {
      this.authService.checkToken().subscribe({
        next: (user: User | void) => {
          if(user) {
            this.variablesService.changeCurrentUser(user);
            this.variablesService.changeLoggedInStatus(true);
            this.router.navigate(['/user-tasks']);
          }
        },
        error: (error) => {
          console.log(error);
        }
      });
    }
  }

  async onSubmit() {
    this.loading = true; 

    const user: User | boolean | null = await this.authService.login(this.username, this.password);
    if(user==false) {
      this.errorMessage = 'Login failed. Invalid credentials.';
      this.loading = false;
      return;
    }
    if(user==null) {
      this.errorMessage = 'An error occurred during login. Please try again later.';
      this.loading = false; // Hide loading indicator after login process
      this.variablesService.changeLoggedInStatus(false);
      return;
    }
    this.errorMessage = '';
    this.router.navigate(['/user-tasks']);
  }

  async changeUser() {

  }
}
