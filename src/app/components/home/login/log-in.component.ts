import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VariablesService } from '../../../core/services/variables.service';
import { UserService } from 'src/app/core/services/user.service';

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

  constructor(private router: Router, private variablesService: VariablesService, private userService: UserService) {
    // Constructor
  }

  ngOnInit(): void {
    
  }

  async onSubmit() {
    this.loading = true; 

    this.userService.checkCredentials(this.username, this.password)
      .subscribe({
        next: (response) => {
          if (response) {
            // Authentication success
            this.errorMessage = '';
            this.router.navigate(['/user-tasks']);
          } else {
            // Authentication failed
            this.errorMessage = 'Login failed. Invalid credentials.';
          }
          this.loading = false; // Hide loading indicator after login process
          this.variablesService.changeLoggedInStatus(true);
        },
        error: (error) => {
          console.error(error);
          this.errorMessage = 'An error occurred during login. Please try again later.';
          this.loading = false; // Hide loading indicator after login process
          this.variablesService.changeLoggedInStatus(false);
        }
      });
    }
}
