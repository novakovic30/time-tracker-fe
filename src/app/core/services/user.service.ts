import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  public getUser() {
    return {
      id: 1,
      userName: 'Marc'
    }
  }
}
