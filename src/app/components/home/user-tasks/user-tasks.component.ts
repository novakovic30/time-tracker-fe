import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.css']
})
export class UserTasksComponent implements OnInit {
  displayedColumns: string[] = ["ID", "Title", "Description", "Time spent", "Time for this week"];
  dataSource!: MatTableDataSource<any>;
  nextID: number = 2; // Initial value for ID of new rows

  constructor() { }

  ngOnInit(): void {
    this.updateTable();
  }

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
}