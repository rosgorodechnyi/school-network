import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { appConfig } from '../app-config';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {}

  apiUrl = appConfig.api;

  private logedIn = false;

  logIn() {
    this.logedIn = true;
  }

  logOut() {
    this.logedIn = false;
  }

  isLogedIn(): boolean {
    return this.logedIn;
  }

  signIn(data) {
    return this.http.post(`${this.apiUrl}auth/signin`, data);
  }

}
