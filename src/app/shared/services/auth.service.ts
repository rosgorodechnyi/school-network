import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { appConfig } from '../app-config';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {}

  apiUrl = appConfig.api;

  logedIn = !!JSON.parse(window.localStorage.getItem('snUserData'));

  logedStream: Subject<boolean> = new Subject<boolean>();

  logIn(token, userId) {
    const data = JSON.stringify([{token, userId}]);
    window.localStorage.setItem('snUserData', data);
    this.logedStream.next(true);
  }

  logOut() {
    window.localStorage.removeItem('snUserData');
    this.logedStream.next(false);
  }

  isLogedIn(): boolean {
    return this.logedIn;
  }

  signIn(data): Observable<any> {
    return this.http.post(`${this.apiUrl}auth/signin`, data);
  }

  getToken() {
    const localData = JSON.parse(window.localStorage.getItem('snUserData'));
    return localData ? localData[0].token : '';
  }

}
