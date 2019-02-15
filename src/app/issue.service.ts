import { Injectable } from '@angular/core';
import { MOCK_DATA } from './Mockdata';
import Issue from 'src/models/Issue';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { apiUrl } from '../assets/config';
import { IssueStatus } from 'src/models/IssueStatus';

@Injectable({
  providedIn: 'root'
})
export class IssueService {

  endpoint = apiUrl + 'issues/';

  constructor(private http: HttpClient) { }

  // Get Issue from API takes limit as param, NUMBER=MAXVALUE for all
  getIssues(limit: number) {
    return this.http.get(this.endpoint + '?limit=' + limit);
  }

  // Get Issue from API takes limit as param, NUMBER=MAXVALUE for all
  getHighPriorityIssuesOrderByCreateDate(limit: number ) {
    return this.http.get(this.endpoint + '?severity=3&ordering=-created_at&limit=' + limit);
  }

  // Get Issue from API takes limit as param, NUMBER=MAXVALUE for all
  getIssuesOrderByUpdateDate(limit: number ) {
    return this.http.get(this.endpoint + '?ordering=-updated_at&limit=' + limit);
  }

  // Get Issue from API takes limit as param, NUMBER=MAXVALUE for all
  getIssuesByStatusOrderByCreateDate(limit: number, issue: IssueStatus) {
    const statusQueryParam = ['Open', 'In%20Progress', 'Resolved'][issue];
    return this.http.get(this.endpoint + '?status=' + statusQueryParam + '&ordering=-created_at&limit=' + limit);
  }

  // get issue for an id
  getIssue(id: number) {
    return this.http.get(this.endpoint + id);
  }

  // get issue for an id
  getIssueByCustomParam(param: string) {
    return this.http.get(this.endpoint + param);
  }

  // add new Issue
  addIssue(issue: Issue) {
    return this.http.post(this.endpoint , issue);
  }

  // delete an Issue
  deleteIssue(issue: Issue) {
    return this.http.delete(this.endpoint + issue.id + '/');
  }

  searchIssues(query: string) {
    return this.http.get(this.endpoint + '?search=' + query);
  }

}


// TODO: Add promise to get methos so that it waits for the data being fetched
