import { Component, OnInit, Input } from '@angular/core';

import { card } from '../../models/card';

@Component({
  selector: 'app-issue-card-mini',
  templateUrl: './issue-card-mini.component.html',
  styleUrls: ['./issue-card-mini.component.scss']
})
export class IssueCardMiniComponent {
  issueData = card;
  @Input() public showAssignee: boolean;
}
