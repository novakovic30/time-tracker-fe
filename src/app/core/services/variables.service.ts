import { Injectable, EventEmitter } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { User } from 'src/app/models/user.model';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {
  private loggedInStatus = new BehaviorSubject<boolean>(false);
  public loggedInChanged = this.loggedInStatus.asObservable();

  private darkThemeStatus = new BehaviorSubject<boolean>(false);
  public darkThemeChanged = this.darkThemeStatus.asObservable();

  private currentUserSubject = new BehaviorSubject<User | null>(null);
  public currentUserChanged = this.currentUserSubject.asObservable();

  constructor() { }

  changeLoggedInStatus(loggedIn: boolean): void {
    this.loggedInStatus.next(loggedIn);
  }

  changeTheme(darkTheme: boolean): void {
    this.darkThemeStatus.next(darkTheme);
  }

  changeCurrentUser(currentUser: User | null): void {
    console.log('Current user changed:', currentUser);
    this.currentUserSubject.next(currentUser);
  }

  getLoggedInStatus(): boolean {
    return this.loggedInStatus.value;
  }

  getIsDarkTheme(): boolean {
    return this.darkThemeStatus.value;
  }

  getCurrentUser(): User | null {
    return this.currentUserSubject.value;
  }
}