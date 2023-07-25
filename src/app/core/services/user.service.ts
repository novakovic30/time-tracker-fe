import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  besApiUrl: string = environment.baseApiUrl; //!!!! if it doesnt recognize the port: change the port in the environments.ts file to whatever visual studio gives you when you start the backend !!!!

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.besApiUrl + "/users");
  }
  


  public getUser() {
    return {
      id: 1,
      userName: 'Marc'
    }
  }
}
