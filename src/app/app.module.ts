import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { UserTasksComponent } from './components/home/user-tasks/user-tasks.component';
import { TaskModalComponent } from './components/home/task-modal/task-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserTasksComponent,
    TaskModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
