import { Component, OnInit } from '@angular/core';
import Issue from 'src/models/Issue';
import { IssueService } from '../issue.service';
import { UserService } from '../user.service';
import Assignee from 'src/models/Assignee';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  highPriorityIssues: Issue[];
  recentlyUpdatedIssues: Issue[];
  issueService: IssueService;
  userService: UserService;
  assignees: Assignee[];
  assigneeIssues = [];
  allIssues: Issue[];

  constructor(issueService: IssueService, userService: UserService) {
    this.issueService = issueService;
    this.userService = userService;
  }

  ngOnInit() {
    this.getIssues();
    this.getIssueCountByAssignee();
  }

  // gets issues from service
  getIssues() {
    this.issueService.getHighPriorityIssuesOrderByCreateDate(4).subscribe((data) => {
      this.highPriorityIssues = data['results'] as Issue[];
      console.log('xyz ' + this.highPriorityIssues);
    }, (error) => { console.log(error); });

    this.issueService.getIssuesOrderByUpdateDate(4).subscribe((data) => {
      this.recentlyUpdatedIssues = data['results'] as Issue[];
      console.log('xyz ' + this.recentlyUpdatedIssues);
    }, (error) => { console.log(error); });
  }

  getIssueCountByAssignee() {
    this.userService.getUsers().subscribe((data) => {
      this.assignees = data as Assignee[];
      this.assignees.forEach((assignee) => {
        this.issueService.getIssueByCustomParam('?assignee=' + assignee.id).subscribe((adata) => {
          const issuesOfAssignee = adata as Assignee[];
          const highPriorityissuesOfAssignee = issuesOfAssignee.filter((issu) => issu['severity'] === 3);
          this.assigneeIssues.push({assignee: assignee, totalIssues: issuesOfAssignee.length,
            highPriorityIssues: highPriorityissuesOfAssignee.length});
        });
      });
      console.log(this.assigneeIssues);
    }, (error) => { console.log(error); });
  }


}
