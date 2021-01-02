import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() tableData;

  constructor() { }

  ngOnInit() {
    console.log(this.tableData)
  }

  getDate(date) {
    return new Date(date).toLocaleString().split(',')[0];
  }

}
