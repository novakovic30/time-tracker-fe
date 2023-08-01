import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/core/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: User = {
    id: 0,
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    tasks: []
  };

  firstNameHasError: boolean = false;
  lastNameHasError: boolean = false;
  emailHasError: boolean = false;
  passwordHasError: boolean = false;
  successMessage: String = '';

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    // Validate the user input before submitting the form
    if (!this.isValidUser()) {
      return;
    }

    // Call the UserService to create the new user
    this.userService.addUser(this.user).subscribe((newUser: any) => {
      // Handle the response here if needed
      console.log('New user created:', newUser);

      // Show success message and reset the form
      this.successMessage = 'User successfully added';
      this.resetForm();

      // Hide the success message after a few seconds
      setTimeout(() => {
        this.successMessage = 'not all requirements were fulfilled';
      }, 5000); // Hide after 5 seconds (adjust as needed)
    });
  }

  isValidUser(): boolean {
    this.firstNameHasError = this.user.firstName.trim() === '';
    this.lastNameHasError = this.user.lastName.trim() === '';
    this.emailHasError = !this.isValidEmail(this.user.email);
    this.passwordHasError = !this.isValidPassword(this.user.password);
    
    return !this.firstNameHasError && !this.lastNameHasError && !this.emailHasError && !this.passwordHasError;
  }

  isValidEmail(email: string): boolean {
    // Add your email validation logic here (e.g., regex check)
    // For simplicity, we'll just check if it contains "@" and "."
    return email.includes('@') && email.includes('.');
  }

  isValidPassword(password: string): boolean {
    // Add your password validation logic here
    // For simplicity, we'll just check the length and the presence of required characters
    return password.length >= 8 && password.length <= 20 &&
           /[A-Z]/.test(password) &&
           /[a-z]/.test(password) &&
           /\d/.test(password) &&
           /[!@#$%^&*]/.test(password);
  }

  resetForm(): void {
    this.user = {
      id: 0,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      tasks: []
    };

    // Reset error status
    this.firstNameHasError = false;
    this.lastNameHasError = false;
    this.emailHasError = false;
    this.passwordHasError = false;
  }
}
