import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input() tableData;
  @Output() shipment = new EventEmitter<boolean>();

  selectedRow = null;

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

  select(row) {
    this.selectedRow = row;
    this.shipment.emit(row.scan);
  }

}
