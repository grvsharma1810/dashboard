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
    if (date === undefined || date == null || date === ""){
      return "NA";
    } else {
      return new Date(date).toLocaleString().split(',')[0];
    }
  }

  getColData(colData) {
    if (colData === undefined || colData == null || colData === ""){
      return "NA";
    } else {
      return colData;
    }
  }

}
