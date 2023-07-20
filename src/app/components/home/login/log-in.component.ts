import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../../../core/services/task.service';

@Component({
  selector: 'app-login',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css'],
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';
  loading: boolean = false; // Indicates if login process is ongoing

  constructor(private router: Router, private taskService: TaskService) {
    // Constructor
  }

  async onSubmit() {
    this.loading = true; // Show loading indicator

    // Simulate the login process with a delay using a Promise
    return new Promise<void>((resolve, reject) => {
      // In einer tatsächlichen Backend-Implementierung sollte die Authentifizierung hier erfolgen.
      // Fügen Sie hier die entsprechende Logik für die Überprüfung der Anmeldeinformationen hinzu.

      // Hier simulieren wir einen erfolgreichen Login, unabhängig von den Anmeldeinformationen.
      setTimeout(() => resolve(), 1500);
    }).then(() => {
      this.errorMessage = ''; // Reset error message on successful login
      this.router.navigate(['/user-tasks']); // Navigate to UserTasksComponent on successful login
    }).catch(() => {
      this.errorMessage = 'Login failed. Invalid credentials.';
    }).finally(() => {
      this.loading = false; // Hide loading indicator after login process
      this.taskService.changeLoggedInStatus(true);

    });
  }
}
