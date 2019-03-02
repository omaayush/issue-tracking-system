import { Injectable } from '@angular/core';
import {Users} from '../../models/users';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetUserDataService {

  private _url = 'http://127.0.0.1:8000/api/v1/users/';

  constructor(private http: HttpClient) { }
  //
  // getUsers(): Users[] {
  //   return USERS;
  // }

  getUsers(): Observable<Users[]> {
    return this.http.get<Users[]>(this._url);
  }

}
