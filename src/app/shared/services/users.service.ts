import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { appConfig } from '../app-config';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class UsersService {

  constructor(private http: HttpClient) {}

  apiUrl: string = appConfig.api;

  getUserId() {
    const localData = JSON.parse(window.localStorage.getItem('snUserData'));

    return localData.userId;
  }

  createUser(data): Observable<any> {
    return this.http.post(`${this.apiUrl}api/user/userRegistration`, data);
  }

  getUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}api/user`);
  }

}
