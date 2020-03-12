import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LoginResponse } from '../create-account/login-response';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Accept': 'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class ForgotPasswordService {

  constructor(private http: HttpClient) { }

  /**
   * This method will do a HTTP PUT call to the /login endpoint to create a account
   * @param data data that matches what the endpoint is expecting in json form
   */
  public forgotPassword(data) {
    //console.log('in call')
    // return this.http.post('http://capstone2020.eastus.cloudapp.azure.com/createLogin', data, httpOptions)
    return this.http.get('http://capstone2020.eastus.cloudapp.azure.com/password/unknown/{userId}' + data)

  }
}
