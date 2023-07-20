import { Component } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('in', style({ opacity: 1 })),
      transition(':enter', [
        style({ opacity: 0 }),
        animate('0.5s ease-out')
      ]),
      transition(':leave',
        animate('0.5s ease-in', style({ opacity: 0 }))
      )
    ])
  ]
})
export class LoginComponent {
  showLoginForm = false;
  username: string = '';
  password: string = '';
  passwordStrength: string = '';
  errorMessage: string = '';
  loading: boolean = false; // Indicates if login process is ongoing

  constructor(private router: Router) {
    // Constructor
  }

  toggleLoginForm() {
    this.showLoginForm = !this.showLoginForm;
  }

  async onSubmit() {
    this.loading = true; // Show loading indicator
  
    // Check if the password meets the requirements
    if (this.password.length < 8) {
      this.errorMessage = 'Password too short. Please enter at least 8 characters.';
      this.loading = false; // Hide loading indicator
      return; // Exit the method early, as the password is too short
    }
  
    if (this.password.length > 16) {
      this.errorMessage = 'Password too long. Please enter no more than 16 characters.';
      this.loading = false; // Hide loading indicator
      return; // Exit the method early, as the password is too long
    }
  
    // Check if the password is strong enough based on the regular expression
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
    if (!passwordRegex.test(this.password)) {
      this.errorMessage = 'Password is not strong enough. Please use at least one uppercase letter, one lowercase letter, one digit, and one special character.';
      this.loading = false; // Hide loading indicator
      return; // Exit the method early, as the password is not strong enough
    }
  
    // If the password meets the requirements, proceed with the login process
    try {
      await this.simulateLogin(this.username, this.password);
      this.errorMessage = ''; // Reset error message on successful login
      this.router.navigate(['/user-tasks']); // Navigate to UserTasksComponent on successful login
    } catch (error) {
      this.errorMessage = 'Login failed. Invalid credentials.';
    }
  
    this.loading = false; // Hide loading indicator after login process
  }  

  simulateLogin(username: string, password: string): Promise<void> {
    // Simulate the login process with a delay using a Promise
    return new Promise<void>((resolve, reject) => {
      // Check the login information and password requirements here.
      // For our simulation we only accept the username 'Admin' (case-insensitive) and a strong password.
  
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
  
      if (username.toLowerCase() === 'admin' && passwordRegex.test(password)) {
        setTimeout(() => resolve(), 1500); // Resolve the Promise after a delay of 1.5 seconds
      } else {
        setTimeout(() => reject(), 1500); // Resolve the Promise after a delay of 1.5 seconds
      }
    });
  }

  checkPasswordStrength(password: string) {
    const minLength = 8;
    const maxLength = 16;
  
    if (password.length < minLength) {
      this.passwordStrength = 'Password too short. Please enter at least 8 characters.';
    } else if (password.length > maxLength) {
      this.passwordStrength = 'Password too long. Please enter no more than 16 characters.';
    } else {
      const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}$/;
      if (passwordRegex.test(password)) {
        this.passwordStrength = 'Strong';
      } else {
        this.passwordStrength = 'Password is not strong enough. Please use at least one uppercase letter, one lowercase letter, one digit, and one special character.';
      }
    }
  }
}
