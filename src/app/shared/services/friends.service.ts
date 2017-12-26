import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { appConfig } from '../app-config';

@Injectable()
export class FriendsService {

  constructor(private http: HttpClient) {}

  apiUrl = appConfig.api;

  addFriend(data): Observable<any> {
    return this.http.post(`${this.apiUrl}api/user/addFriend`, data);
  }

  confirmFriend(data): Observable<any> {
    return this.http.post(`${this.apiUrl}api/user/confirmFriend`, data);
  }

}
