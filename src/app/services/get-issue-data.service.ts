import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Issues} from '../../models/issue';

@Injectable({
  providedIn: 'root'
})
export class GetIssueDataService {

  private _url = 'http://127.0.0.1:8000/api/v1/issues/';
  private _urlissue = 'http://127.0.0.1:8000/api/v1/issues/';

  constructor(private http: HttpClient) { }

  getIssues(): Observable<Issues[]> {
    return this.http.get<Issues[]>(this._url);
  }

  getIssuesById(IssueId): Observable<Issues[]> {
    return this.http.get<Issues[]>(this._urlissue+IssueId);
  }

  AddIssue(issues: any[]) {
    return this.http.post('http://127.0.0.1:8000/api/v1/issues/',issues);
  }
}
