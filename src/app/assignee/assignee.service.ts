import { Injectable } from '@angular/core';
import { Assignee } from 'src/app/assignee/Assignee.model';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { config } from '../config';
import {assignee} from '../Mockdata';

@Injectable({
  providedIn: 'root'
})
export class AssigneeService {

  allAssignees: Assignee[];

  constructor(private http: HttpClient) {
    this.getAllAssignees().subscribe((allAssignees) => {
      this.allAssignees = allAssignees;
    });
  }

  getAllAssignees(): Observable<Assignee[]> {
    return this.http.get<Assignee[]>(config.host + config.users);
  }

  getAssigneeById(assigneeId: number): Assignee {
    if (assigneeId) {
      return this.allAssignees.filter((currentAssignee) => currentAssignee.id === assigneeId)[0];
    } else {
      return assignee[0];
    }
  }
}
