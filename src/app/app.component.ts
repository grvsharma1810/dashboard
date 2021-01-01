import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {error, log} from "util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  shipmentData: any;
  private baseUrl = 'https://f0ztti2nsk.execute-api.ap-south-1.amazonaws.com/v1/consignment/fetch';
  auth_token = 'tTU3gFVUdP';
  title = 'dashboard';
  loadingData = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.auth_token}`
    });
    this.http.post<any>(this.baseUrl, {"email": "gs8280601@gmail.com"}, {headers: headers})
      .toPromise()
      .then(response => {
        console.log(response)
        this.loadingData = false;
      })
      .catch(error => {
        alert("Some Error Occurred")
      })
  }
}
