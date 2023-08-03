import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { environment } from 'src/environments/environment';
import { VariablesService } from './variables.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private baseUrl = environment.baseApiUrl; //!!!! if it doesnt recognize the port: change the port in the environments.ts file to whatever visual studio gives you when you start the backend !!!!

  constructor(private http: HttpClient, private variablesService: VariablesService) { }

  checkCredentials(email: string, password: string): Observable<string> {
    return this.http.post(this.baseUrl + "/auth/CheckCredentials/", {email, password}, {responseType: "text"});
  }

  checkToken(): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/auth/CheckToken/`);
  }

  async login(email: string, password: string): Promise<User | boolean | null> {
    try {
      const token = await this.checkCredentials(email, password).toPromise();
      if(token==null)
        return false;

      localStorage.setItem('authToken',token);

      const user = await this.checkToken().toPromise();
      if(user==null)
        return null;

      this.variablesService.changeCurrentUser(user);
      this.variablesService.changeLoggedInStatus(true);

      return user;
    } 
    catch (error) {
      console.log(error);
      return null;
    }



    this.checkCredentials(email, password).subscribe({
      next: (token: string) => {
        localStorage.setItem('authToken',token);

        this.checkToken().subscribe({
          next: (user: User) => {
            this.variablesService.changeCurrentUser(user);
            this.variablesService.changeLoggedInStatus(true);
            return user;
          },
          error: (error) => {
            console.log(error);
          }
        });
      },
      error: (error) => {
        console.log(error);
      }
    });
    return null;
  }

  logout() {
    localStorage.removeItem('authToken');
    this.variablesService.changeCurrentUser(null);
    this.variablesService.changeLoggedInStatus(false);
  }
}
