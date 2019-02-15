import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../assets/config';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  endpoint = apiUrl + 'users/';

  constructor(private http: HttpClient) { }

  // get user for an id
  getUser(id: number) {
    return this.http.get(this.endpoint + id);
  }

  // get users
  getUsers() {
    return this.http.get(this.endpoint);
  }
}
