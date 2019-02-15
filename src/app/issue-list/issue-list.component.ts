import { Component, OnInit, Input } from '@angular/core';
import Issue from 'src/models/Issue';
import { IssueService } from '../issue.service';
import { ActivatedRoute, Router } from '@angular/router';
import Assignee from 'src/models/Assignee';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issue-list.component.html',
  styleUrls: ['./issue-list.component.css']
})
export class IssueListComponent implements OnInit {

  @Input() public heading: string;
  @Input() public showAssignee: boolean;
  @Input() issues: Issue[];
  @Input() public users: Assignee[];
  @Input() selectedIssue: Issue;
  @Input() toDoIssue: Issue[];
  @Input() inProgressIssue: Issue[];
  @Input() doneIssues: Issue[];
  constructor() {
  }
  ngOnInit() {
  }

  onSelect(issue): void {
    this.selectedIssue = issue;
  }


  // gets issues from service
  // getIssues() {
  //   this.issueService.getIssues().subscribe((data) => {
  //     this.issues = data as Issue[];
  //     this.filterIssues();
  //   }, (error) => { console.log(error); });
  // }

  // // filter data based on issue into diffrent issue types
  // filterIssues() {
  //   this.toDoIssue = this.issues.filter((issue) => issue.status === 'Open');
  //   this.inProgressIssue = this.issues.filter((issue) => issue.status === 'In Progress');
  //   this.doneIssues = this.issues.filter((issue) => issue.status === 'Resolved');
  // }
}
