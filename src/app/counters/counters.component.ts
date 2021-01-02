import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-counters',
  templateUrl: './counters.component.html',
  styleUrls: ['./counters.component.css']
})
export class CountersComponent {

  @Input() countData;
  @Output() selectedStatus = new EventEmitter<boolean>();
  selectedStatusCode = "DEL" ;    // by default

  constructor() { }

  select(status) {
    this.selectedStatusCode = status[0];
    this.selectedStatus.emit(status[0]);
  }

}
