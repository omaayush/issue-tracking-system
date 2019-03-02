import { Component, OnInit, Input } from '@angular/core';
import Issues from '../../models/issue';
import {GetIssueDataService} from '../services/get-issue-data.service';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.scss']
})
export class KanbanBoardComponent implements OnInit {
  @Input() public heading: string;
  @Input() public showAssignee: boolean;
  @Input() issues: Issues[];
  @Input() selectedIssue: Issues;
  toDoIssue: Issues[];
  inProgressIssue: Issues[];
  doneIssues: Issues[];
  issueService: GetIssueDataService;
  constructor(issueService: GetIssueDataService) {
    this.issueService = issueService;
  }
  ngOnInit() {
    this.getIssues();
  }
  onSelect(issue): void {
    this.selectedIssue = issue;
  }
  // gets issues from service
  getIssues() {
    this.issueService.getIssues().subscribe((data) => {
      this.issues = data as Issues[];
      this.filterIssues();
    }, (error) => { console.log(error); });
  }
  // filter data based on issue into diffrent issue types
  filterIssues() {
    this.toDoIssue = this.issues.filter((issue) => issue.status === 'Open');
    this.inProgressIssue = this.issues.filter((issue) => issue.status === 'In Progress');
    this.doneIssues = this.issues.filter((issue) => issue.status === 'Resolved');
  }
}
