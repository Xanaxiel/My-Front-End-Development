import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenManagerService {

  private token: string;
  private username: string;
  private accountType: string;

  constructor() { }

  /**
   * check if token exists if it does then true
   */
  isAuthenticated() {
    //ternary
    return (this.token) ? true : false;
  }

  setToken(data: string) {
    this.token = data;
  }

  getToken() {
    return this.token;
  }

  setUsername(data: string) {
    this.username = data;
  }

  getUsername() {
    return this.username;
  }

  setAccountType(type: string) {
    this.accountType = type;
  }

  getAccountType() {
    return this.accountType;
  }
}
