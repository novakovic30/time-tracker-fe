import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../../core/services/task.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

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
    //doesnt exist yet
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