import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {

  @Input() scan;

  constructor() { }

  ngOnInit() {
    console.log(this.scan);
  }

  getDate(date) {
    let currDate;
    currDate = new Date(date);
    let dd ;
    dd = currDate.getDate();
    let mm;
    mm = currDate.getMonth()+1;
    let yyyy = currDate.getFullYear();
    if (dd<10) {
      dd = '0'+dd;
    }
    if (mm<10) {
      mm = '0'+mm;
    }
    currDate = mm+'-'+dd+'-'+yyyy;
    return currDate
  }

  getTime(date) {
    let currDate;
    currDate = new Date(date);
    return (String(currDate.getHours()).length == 1 ? '0' : '')
      + currDate.getHours() + ":"
      + (String(currDate.getMinutes()).length == 1 ? '0' : '')
      + currDate.getMinutes();
  }

}
