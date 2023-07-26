import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class VariablesService {
  public loggedInChanged: EventEmitter<boolean> = new EventEmitter<boolean>();
  public darkThemeChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  changeLoggedInStatus(loggedIn: boolean): void {
    this.loggedInChanged.emit(loggedIn);
  }

  changeTheme(darkTheme: boolean): void {
    this.darkThemeChanged.emit(darkTheme);
  }
}