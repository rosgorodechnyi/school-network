import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { appConfig } from '../app-config';

@Injectable()
export class ClassesService {

  constructor(private http: HttpClient) {}

  api: string = appConfig.api;

  getClasses(): Observable<any> {
    return this.http.get(`${this.api}api/schoolGroup`);
  }

}
