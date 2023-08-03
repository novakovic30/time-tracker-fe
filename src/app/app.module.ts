import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
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
import { AddUserComponent } from './components/home/add-user/add-user.component';
import { AuthGuard } from './guards/auth.guard';
import { AuthInterceptor } from './core/services/auth.interceptor';

// Define the routes
const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'login', component: LoginComponent }, // Set LoginComponent as the default route
  { path: 'user-tasks', canActivate: [AuthGuard], component: UserTasksComponent },
  { path: 'user-list', canActivate: [AuthGuard], component: UserListComponent },
  { path: 'add-user', redirectTo: '/register', pathMatch: 'full' },
  { path: 'register', canActivate: [AuthGuard], component: AddUserComponent },
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
    UserListComponent,
    AddUserComponent
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
    BrowserAnimationsModule
  ],
  exports: [RouterModule],
  providers: [TaskService, AuthGuard, {provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
