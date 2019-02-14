import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Projects} from '../../models/projects';

@Injectable({
  providedIn: 'root'
})
export class GetProjectDataService {

  private _url = 'http://127.0.0.1:8000/api/v1/projects/';

  constructor(private http: HttpClient) { }

  getProjects(): Observable<Projects[]> {
    return this.http.get<Projects[]>(this._url);
  }

}
