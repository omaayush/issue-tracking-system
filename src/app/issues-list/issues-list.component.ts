import { Component, OnInit, Input } from '@angular/core';
import Issues from '../../models/issue';

@Component({
  selector: 'app-issues-list',
  templateUrl: './issues-list.component.html',
  styleUrls: ['./issues-list.component.scss']
})
export class IssuesListComponent implements OnInit {

  @Input() public heading: string;
  @Input() public showAssignee: boolean;
  @Input() issues: Issues[];
  @Input() selectedIssue: Issues;
  @Input() toDoIssue: Issues[];
  @Input() inProgressIssue: Issues[];
  @Input() doneIssues: Issues[];

  constructor() { }

  ngOnInit() {
  }

}
