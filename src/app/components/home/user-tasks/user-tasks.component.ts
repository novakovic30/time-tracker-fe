import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table'

@Component({
  selector: 'app-user-tasks',
  templateUrl: './user-tasks.component.html',
  styleUrls: ['./user-tasks.component.css']
})
export class UserTasksComponent implements OnInit {
  displayedColumns = ["ID", "Title", "Description", "Time spent", "Time for this week"];
  dataSource!: MatTableDataSource<any>;
  
  constructor() { }

  ngOnInit(): void {
    this.updateTable();
  }

  addRow(){
    const newRow = { ID: '2', Title: 'no', Description: '5', 'Time spent': '5 hours', 'Time for this week': '25 hours' };
    this.dataSource.data = [...this.dataSource.data, newRow];
  }

  updateTable() {
    //insert code which gets data from backend
    const data = [
      {ID: "1", Title: "yes", Description: "3", "Time spent": "3 hours", "Time for this week": "20 hours"}
    ];

    this.dataSource = new MatTableDataSource(data);
  }

}
