import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import Issues from '../../models/issue';
import {fetchUrl} from './fetchURL';


const httpPost = {
  headers:new HttpHeaders({
    'Content-type':'appliction/json',
    Authorization: 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class GetIssueDataService {
  endpoint = fetchUrl + 'issues/';
  data;

  //
  // private _url = 'http://127.0.0.1:8000/api/v1/issues/';
  // private _urlissue = 'http://127.0.0.1:8000/api/v1/issues/';

  constructor(private http: HttpClient) { }

  getIssues() {
    return this.http.get(this.endpoint);
  }

  getIssue(id: number) {
    return this.http.get(this.endpoint + id);
  }

  postIssues(postIssue):Observable<any>{
    return this.http.post<any>('http://127.0.0.1:8000/api/v1/issues/', postIssue, httpPost);
  }

  // AddIssue(issues: any[]) {
  //   return this.http.post('http://127.0.0.1:8000/api/v1/issues/',issues);
  // }
}
