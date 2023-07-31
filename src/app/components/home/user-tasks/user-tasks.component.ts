import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { TaskService } from 'src/app/core/services/task.service';
import { UserService } from 'src/app/core/services/user.service';
import { VariablesService } from 'src/app/core/services/variables.service';
import { Task } from 'src/app/models/task.model';
import { User } from 'src/app/models/user.model';

@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.css']
})
export class UserTasksComponent implements OnInit, OnDestroy {
  nextID: number = 2; // Initial value for ID of new rows

  tasks: Task[] = [
    {id: 1, title: 'Sample Title 1', description: 'Sample Description 1', created: new Date(), updated: new Date(), status: true, totalHours: 2, hours: 1, userId: 1}
  ];

  title: string = "";
  discription: string = "";

  currentUser!: User;
  private currentUserSubscription!: Subscription;

  users: User[] = [];

  constructor(private userService: UserService, private taskService: TaskService, private variablesService: VariablesService) { }

  ngOnInit(): void {
    console.log(this.tasks);

    this.currentUserSubscription = this.variablesService.currentUserChanged.subscribe(
      (user: User | null) => {
        if(user !== null) {
          this.currentUser = user;
          this.updateTasks();
        }
    });

    this.userService.getAllUsers().subscribe({
      next: (users) => {
        this.users = users;
        console.log(users);
        console.log(this.currentUser); // Should have the latest currentUser value if it's been set
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  async updateTasks() {
    if (!this.currentUser) {
      console.log("Current user is not available or does not have an id.");
      return;
    }
    console.log(this.currentUser);
    this.taskService.getTasksByUserID(this.currentUser.id).subscribe({
      next: (response) => {
        this.tasks = response;
        console.log(this.tasks);
      },
      error: (error) => {
        console.log(error);
      }
    });

    console.log(this.tasks);
  }


  addTask() {
    this.taskService.addTask(this.title, this.discription, new Date(), new Date(), true, 0, 0, this.currentUser.id).subscribe({
      next: (response) => {
        this.updateTasks();
        console.log("yes");
      },
      error: (error) => {
        console.log(error);
      }
    });
  }

  deleteTask(Id: number) {
    this.taskService.deleteTask(Id).subscribe(
      () => {
        this.updateTasks();
      },
      (error) => {
        console.log(error);
      }
    );
  }

  updateTask() {
    
  }
  

  /*  **functions for the table**

  dataSource2: MatTableDataSource<any> = new MatTableDataSource(this.users);
  displayedColumns: string[] = ["id", "firstName", "lastName", "email", "password"];
  //dataSource!: MatTableDataSource<any>;

  addRow() {
    const newRow = {
      ID: this.nextID.toString(),
      Title: '<some Title>',
      Description: '<short Description>',
      'Time spent': '<type in hours>',
      'Time for this week': '<type in hours>'
    };
    this.nextID++;
    this.dataSource.data = [...this.dataSource.data, newRow];
  }
  updateTable() {
    // Insert code which gets data from backend
    const data = [
      {
        ID: '1',
        Title: '<some Title>',
        Description: '<short Description>',
        'Time spent': '<type in hours>',
        'Time for this week': '<type in hours>'
      },
    ];

    this.dataSource = new MatTableDataSource(data);
  }
  */

  ngOnDestroy(): void {
    // Don't forget to unsubscribe to avoid memory leaks
    if (this.currentUserSubscription) {
      this.currentUserSubscription.unsubscribe();
    }
  }
}
