import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.css']
})
export class UserTasksComponent implements OnInit {
  nextID: number = 2; // Initial value for ID of new rows

  dataSource: DataRow[] = [
    {ID: '1', Title: 'Sample Title 1', Description: 'Sample Description 1', 'Time spent': '2 hours', 'Time for this week': '10 hours'},
    {ID: '1', Title: 'Sample Title 1', Description: 'Sample Description 1', 'Time spent': '2 hours', 'Time for this week': '10 hours'},
    {ID: '1', Title: 'Sample Title 1', Description: 'Sample Description 1', 'Time spent': '2 hours', 'Time for this week': '10 hours'},
    {ID: '1', Title: 'Sample Title 1', Description: 'Sample Description 1', 'Time spent': '2 hours', 'Time for this week': '10 hours'},
    {ID: '1', Title: 'Sample Title 1', Description: 'Sample Description 1', 'Time spent': '2 hours', 'Time for this week': '10 hours'},
    {ID: '1', Title: 'Sample Title 1', Description: 'Sample Description 1', 'Time spent': '2 hours', 'Time for this week': '10 hours'},  
  ];

  constructor() { }

  ngOnInit(): void {
    //this.updateTable();
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
  ID: string;
  Title: string;
  Description: string;
  'Time spent': string;
  'Time for this week': string;
}