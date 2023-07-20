import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { TaskService } from './core/services/task.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'time-tracker-fe';
  opened: boolean = true;
  isLoggedIn: boolean = true;

  constructor(private modalService: NgbModal, private router: Router, private taskService: TaskService) {
  }

  ngOnInit(): void {
    this.taskService.loggedInChanged.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  redirectToLogin(): void {
    this.router.navigate(['/']);
  }
  redirectToRegister(): void {
    this.router.navigate(['/register']);
  }
  redirectToLogout(): void {
    this.isLoggedIn = false;
    this.router.navigate(['/']);
  }

  redirectToTasks(): void {
    this.router.navigate(['/user-tasks']);
  }
}
