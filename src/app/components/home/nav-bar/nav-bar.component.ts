import { Component, OnInit } from '@angular/core';
import { VariablesService } from '../../../core/services/variables.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  opened: boolean = true;
  isLoggedIn: boolean = true;

  firstName: string = "Hias";
  lastName: string = "Hawara";
  email: string = "hias.hawara@ka-bro.cum";

  constructor(private modalService: NgbModal, private router: Router, private variablesService: VariablesService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.variablesService.loggedInChanged.subscribe((loggedIn: boolean) => {
      this.isLoggedIn = loggedIn;
    });

    this.variablesService.currentUserChanged.subscribe(
      (user: User | null) => {
        if(user !== null) {
          this.firstName = user.firstName;
          this.lastName = user.lastName;
          this.email = user.email;
        }
    });
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

  redirectToLogin(): void {
    this.router.navigate(['/']);
  }

  redirectToRegister(): void {
    this.router.navigate(['/add-user']);
  }

  redirectToLogout(): void {
    this.authService.logout();
    this.router.navigate(['/']);
  }

  redirectToTasks(): void {
    this.router.navigate(['/user-tasks']);
  }

  redirectToUserList(): void {
    this.router.navigate(['/user-list']);
  }
}
