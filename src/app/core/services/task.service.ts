import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from 'src/app/models/task.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private baseUrl = environment.baseApiUrl; //!!!! if it doesnt recognize the port: change the port in the environments.ts file to whatever visual studio gives you when you start the backend !!!!

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/tasks`);
  }

  getTasksByUserID(userId: number): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.baseUrl}/tasks/GetById/${userId}`);
  }

  addTask(title: string, description: string, created: Date, updated: Date, status: boolean, totalHours: number, hours: number, userId: number): Observable<any> {
    console.log("task added!");
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return this.http.post<any>(this.baseUrl+"/tasks", {title, description, created, updated, status, totalHours, hours, userId}, {headers});
  }

  deleteTask(id: number): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/tasks/delete/${id}`);
  }
}
