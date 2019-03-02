import { Injectable } from '@angular/core';
import {USERS} from './mock-data';
import {Users} from '../../models/users';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  private _url = 'http://127.0.0.1:8000/api/v1/users/';

  constructor(private http: HttpClient) { }
  //
  // getCards(): Users[] {
  //   return USERS;
  // }

  getCards(): Observable<Users[]> {
    return this.http.get<Users[]>(this._url);
  }
  // getCards(): Users[] {
  //   return this.getfromurl();
  // }

}
