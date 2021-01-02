import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  shipmentData: any;
  filteredShipmentData: any;
  private baseUrl = 'https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch';
  auth_token = 'tTU3gFVUdP';
  title = 'dashboard';
  loadingData = true;

  statusCodeCount = [];
  selectedShipment;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    });
    this.http.post<any>(this.baseUrl, {"email": "gs8280601@gmail.com"}, {headers: headers})
      .toPromise()
      .then(response => {
        this.shipmentData = response;
        this.calculateStatusCodeAndCount();
        this.getFilteredTableData("DEL");
        this.loadingData = false;
      })
      .catch(error => {
        alert("Some Error Occurred");
        console.log(error);
      })
  }

  calculateStatusCodeAndCount() {
    let status_codes = [];
    this.shipmentData.forEach(shipment => {
      if (!status_codes.includes(shipment['current_status_code'])) {
        status_codes.push(shipment['current_status_code']);
      }
    });
    status_codes.forEach(code => {
      let count = this.shipmentData.filter(shipment => shipment['current_status_code'] === code).length
      this.statusCodeCount.push([code, count]);
    });
    console.log(this.statusCodeCount)
  };

  getFilteredTableData(currentStatusCode) {
    this.filteredShipmentData = this.shipmentData.filter(shipment => shipment['current_status_code'] === currentStatusCode);
  }

}
