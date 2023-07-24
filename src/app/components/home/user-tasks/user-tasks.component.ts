import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.css']
})
export class UserTasksComponent implements OnInit {
  nextID: number = 2; // Initial value for ID of new rows

  dataSource: DataRow[] = [
    {ID: 1, Title: 'Sample Title 1', Description: 'Sample Description 1', TimeSpent: 2, TimeForThisWeek: 1},
    {ID: 2, Title: 'Sample Title 1', Description: 'Sample Description 1', TimeSpent: 5, TimeForThisWeek: 1},
    {ID: 3, Title: 'Sample Title 1', Description: 'Sample Description 1', TimeSpent: 8, TimeForThisWeek: 1},
    {ID: 4, Title: 'Sample Title 1', Description: 'Sample Description 1', TimeSpent: 1,TimeForThisWeek: 1},
    {ID: 5, Title: 'Sample Title 1', Description: 'Sample Description 1', TimeSpent: 1, TimeForThisWeek: 1},
    {ID: 6, Title: 'Sample Title 1', Description: 'Sample Description 1', TimeSpent: 12, TimeForThisWeek: 1},
    {ID: 7, Title: 'Sample Title 1', Description: 'Sample Description 1', TimeSpent: 0, TimeForThisWeek: 1}
  ];

  title: string = "";
  discription: string = "";

  constructor() { }

  ngOnInit(): void {
    //this.updateTable();
  }

  addTask() {
    const data: DataRow = {
      ID: this.dataSource[this.dataSource.length - 1].ID + 1, 
      Title: this.title, 
      Description: this.discription, 
      TimeSpent: 0, 
      TimeForThisWeek: 0
    };
    this.dataSource = [...this.dataSource, data];

    //add to database
  }


  /*  **functions for the table**

  //displayedColumns: string[] = ["ID", "Title", "Description", "Time spent", "Time for this week"];
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
}
interface DataRow {
  ID: number;
  Title: string;
  Description: string;
  TimeSpent: number;
  TimeForThisWeek: number;
}