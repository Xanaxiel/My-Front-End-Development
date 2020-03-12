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
export class DeleteAccountService {

  constructor(private http: HttpClient) { }

   /**
   * This method will do a HTTP PUT call to the /deleteLogin endpoint to delete an account
   * @param data data that matches what the endpoint is expecting in json form
   */
  public createAccount(data) {
    return this.http.post('http://capstone2020.eastus.cloudapp.azure.com/', data, httpOptions)
  }
}
