import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router'; // Import the RouterModule and Routes

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { UserTasksComponent } from './components/home/user-tasks/user-tasks.component';
import { TaskModalComponent } from './components/home/task-modal/task-modal.component';
import { LoginComponent } from './components/home/login/log-in.component';
import { TaskService } from './core/services/task.service';
import { NavBarComponent } from './components/home/nav-bar/nav-bar.component';
import { UserListComponent } from './components/home/user-list/user-list.component';
import { UserService } from './core/services/user.service';

// Define the routes
const routes: Routes = [
  { path: '', component: LoginComponent }, // Set LoginComponent as the default route
  { path: 'user-tasks', component: UserTasksComponent },
  // Add other routes if needed
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserTasksComponent,
    TaskModalComponent,
    LoginComponent,
    NavBarComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    RouterModule.forRoot(routes), // Register the routes
    MatIconModule,
    NgbModule,
    BrowserAnimationsModule,
    UserService
  ],
  exports: [RouterModule],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
