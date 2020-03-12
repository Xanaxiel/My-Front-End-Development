import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ProfileInfoService {

  constructor(private http: HttpClient) { }

  getProfileInfo(data) {
    return this.http.post('http://capstone2020.eastus.cloudapp.azure.com/', data, httpOptions)

  }
}
