import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public loggedInChanged: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  changeLoggedInStatus(loggedIn: boolean): void {
    this.loggedInChanged.emit(loggedIn);
  }
}
